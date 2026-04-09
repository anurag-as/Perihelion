import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { NeoData, LayerType } from "../core/types";
import { earthPositionAU } from "../core/coordinateConverter";
import {
  AMBIENT_LIGHT_HEX,
  AMBIENT_LIGHT_INTENSITY,
  CAMERA_FAR,
  CAMERA_FOV,
  CAMERA_INITIAL_Y,
  CAMERA_INITIAL_Z,
  CAMERA_NEAR,
  COLOUR_DIM,
  COLOUR_CLOSE_005,
  COLOUR_CLOSE_010,
  COLOUR_FAR,
  COLOUR_HAZARDOUS,
  COLOUR_SELECTED,
  DEG2RAD,
  DIAMOND_STROKE_COLOUR,
  DIAMOND_STROKE_LINE_WIDTH,
  DIAMOND_TEXTURE_PAD,
  DIAMOND_TEXTURE_SIZE,
  FLY_TO_FRAMES,
  FLY_TO_OFFSET_AU,
  HAZARD_ALPHA_DISCARD,
  HAZARD_DIAMOND_PIXEL_SIZE,
  J2000_MS,
  KM_PER_AU,
  MS_PER_DAY,
  NEO_ATLAS_CELL_PX,
  NEO_ATLAS_COLS,
  NEO_ATLAS_ROWS,
  NEO_ATLAS_SEEDS,
  NEO_ATLAS_ALPHA_DISCARD,
  NEO_ALPHA_DISCARD,
  NEO_DIAMETER_LOG_MAX_KM,
  NEO_DIAMETER_LOG_MIN_KM,
  NEO_MIN_PIXEL_SIZE,
  NEO_MAX_PIXEL_SIZE,
  ORBIT_DAMPING_FACTOR,
  ORBIT_MAX_DISTANCE,
  ORBIT_MIN_DISTANCE,
  ORBIT_RING_COLOUR_HEX,
  ORBIT_RING_MIN_TUBE,
  ORBIT_RING_OPACITY,
  ORBIT_RING_PATH_SEGMENTS,
  ORBIT_RING_TUBE_RATIO,
  ORBIT_RING_TUBE_SEGMENTS,
  PLANET_DATA,
  PLANET_SPHERE_SEGMENTS,
  PROXIMITY_CLOSE_AU,
  PROXIMITY_MID_AU,
  PULSE_BRIGHTNESS_RANGE,
  PULSE_MIN_BRIGHTNESS,
  PULSE_SPEED,
  SCENE_BACKGROUND_HEX,
  SUN_EMISSIVE_HEX,
  SUN_LIGHT_DISTANCE_AU,
  SUN_LIGHT_HEX,
  SUN_LIGHT_INTENSITY,
  SUN_COLOUR_HEX,
  SUN_RADIUS_AU,
  SUN_SPHERE_SEGMENTS,
  SUN_TEXTURE_URL,
} from "../core/constants";

function neoColour(neo: NeoData): readonly [number, number, number] {
  if (neo.hazardous) return COLOUR_HAZARDOUS;
  const distAU = neo.missDistKm / KM_PER_AU;
  if (distAU <= PROXIMITY_CLOSE_AU) return COLOUR_CLOSE_005;
  if (distAU <= PROXIMITY_MID_AU) return COLOUR_CLOSE_010;
  return COLOUR_FAR;
}

let _diamondTexture: THREE.Texture | null = null;
let _neoAtlasTexture: THREE.Texture | null = null;

const ATLAS_VARIANTS = NEO_ATLAS_COLS * NEO_ATLAS_ROWS;

function seededRand(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0x100000000;
  };
}

function drawAsteroidCell(
  ctx: CanvasRenderingContext2D,
  ox: number,
  oy: number,
  size: number,
  seed: number,
): void {
  const rand = seededRand(seed);
  const cx = ox + size / 2;
  const cy = oy + size / 2;
  const baseR = size / 2 - 2;
  const points = 8;
  const angleStep = (Math.PI * 2) / points;

  const verts: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const r = baseR * (0.82 + rand() * 0.18);
    const angle = i * angleStep + (rand() - 0.5) * angleStep * 0.25;
    verts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }

  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < points; i++) {
    const curr = verts[i];
    const next = verts[(i + 1) % points];
    const mid: [number, number] = [
      (curr[0] + next[0]) / 2,
      (curr[1] + next[1]) / 2,
    ];
    if (i === 0) ctx.moveTo(mid[0], mid[1]);
    else ctx.quadraticCurveTo(curr[0], curr[1], mid[0], mid[1]);
  }
  const closeMid: [number, number] = [
    (verts[points - 1][0] + verts[0][0]) / 2,
    (verts[points - 1][1] + verts[0][1]) / 2,
  ];
  ctx.quadraticCurveTo(
    verts[points - 1][0],
    verts[points - 1][1],
    closeMid[0],
    closeMid[1],
  );
  ctx.closePath();
  ctx.clip();

  // Lit sphere gradient: bright off-centre highlight → dark edge
  const grad = ctx.createRadialGradient(
    cx - baseR * 0.25,
    cy - baseR * 0.25,
    0,
    cx,
    cy,
    baseR,
  );
  grad.addColorStop(0.0, "rgba(255,255,255,1)");
  grad.addColorStop(0.25, "rgba(200,190,175,1)");
  grad.addColorStop(0.65, "rgba(120,108,90,1)");
  grad.addColorStop(1.0, "rgba(30,25,18,1)");
  ctx.fillStyle = grad;
  ctx.fillRect(ox, oy, size, size);
  ctx.restore();
}

function buildAtlas(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = NEO_ATLAS_CELL_PX * NEO_ATLAS_COLS;
  canvas.height = NEO_ATLAS_CELL_PX * NEO_ATLAS_ROWS;
  const ctx = canvas.getContext("2d")!;
  for (let v = 0; v < ATLAS_VARIANTS; v++) {
    const col = v % NEO_ATLAS_COLS;
    const row = Math.floor(v / NEO_ATLAS_COLS);
    drawAsteroidCell(
      ctx,
      col * NEO_ATLAS_CELL_PX,
      row * NEO_ATLAS_CELL_PX,
      NEO_ATLAS_CELL_PX,
      NEO_ATLAS_SEEDS[v],
    );
  }
  return new THREE.CanvasTexture(canvas);
}

function getNeoAtlasTexture(): THREE.Texture {
  if (!_neoAtlasTexture) _neoAtlasTexture = buildAtlas();
  return _neoAtlasTexture;
}

const NEO_VERT = /* glsl */ `
  attribute float atlasIndex;
  attribute vec3 color;
  attribute float diameterKm;
  attribute float alpha;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float minSize;
  uniform float maxSize;

  void main() {
    vColor = color;
    vAlpha = alpha;
    float idx = floor(atlasIndex + 0.5);
    float col = mod(idx, ${NEO_ATLAS_COLS}.0);
    float row = floor(idx / ${NEO_ATLAS_COLS}.0);
    vUv = vec2(col, row);

    float logD = clamp(
      (log(diameterKm + ${NEO_DIAMETER_LOG_MIN_KM}) - log(${NEO_DIAMETER_LOG_MIN_KM})) /
      (log(${NEO_DIAMETER_LOG_MAX_KM + NEO_DIAMETER_LOG_MIN_KM}) - log(${NEO_DIAMETER_LOG_MIN_KM})),
      0.0, 1.0
    );
    float baseSize = minSize + logD * (maxSize - minSize);

    // Scale point size with distance so NEOs grow when zoomed in.
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = baseSize * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const NEO_FRAG = /* glsl */ `
  uniform sampler2D atlas;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    if (vAlpha < ${NEO_ALPHA_DISCARD}) discard;
    float cellW = 1.0 / ${NEO_ATLAS_COLS}.0;
    float cellH = 1.0 / ${NEO_ATLAS_ROWS}.0;
    vec2 uv = vec2(
      (vUv.x + gl_PointCoord.x) * cellW,
      (vUv.y + (1.0 - gl_PointCoord.y)) * cellH
    );
    vec4 texel = texture2D(atlas, uv);
    if (texel.a < ${NEO_ATLAS_ALPHA_DISCARD}) discard;
    gl_FragColor = vec4(texel.rgb * vColor, texel.a * vAlpha);
  }
`;

const HAZARD_VERT = /* glsl */ `
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = ${HAZARD_DIAMOND_PIXEL_SIZE.toFixed(1)} * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const HAZARD_FRAG = /* glsl */ `
  uniform sampler2D map;
  varying float vAlpha;
  void main() {
    if (vAlpha < ${NEO_ALPHA_DISCARD}) discard;
    vec4 texel = texture2D(map, gl_PointCoord);
    if (texel.a < ${HAZARD_ALPHA_DISCARD}) discard;
    gl_FragColor = vec4(texel.rgb, texel.a * vAlpha);
  }
`;

function getDiamondTexture(): THREE.Texture {
  if (_diamondTexture) return _diamondTexture;
  const canvas = document.createElement("canvas");
  canvas.width = DIAMOND_TEXTURE_SIZE;
  canvas.height = DIAMOND_TEXTURE_SIZE;
  const ctx = canvas.getContext("2d")!;
  const half = DIAMOND_TEXTURE_SIZE / 2;
  const pad = DIAMOND_TEXTURE_PAD;
  ctx.strokeStyle = DIAMOND_STROKE_COLOUR;
  ctx.lineWidth = DIAMOND_STROKE_LINE_WIDTH;
  ctx.beginPath();
  ctx.moveTo(half, pad);
  ctx.lineTo(DIAMOND_TEXTURE_SIZE - pad, half);
  ctx.lineTo(half, DIAMOND_TEXTURE_SIZE - pad);
  ctx.lineTo(pad, half);
  ctx.closePath();
  ctx.stroke();
  _diamondTexture = new THREE.CanvasTexture(canvas);
  return _diamondTexture;
}

export class SolarSystemScene {
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private controls!: OrbitControls;
  private animFrameId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private planetGroup!: THREE.Group;
  private planetMeshes: THREE.Mesh[] = [];
  private neoPoints: THREE.Points | null = null;
  private hazardPoints: THREE.Points | null = null;
  private textureLoader = new THREE.TextureLoader();

  // Full NEO list as received; _displayNeos is the filtered subset actually in the GPU buffer.
  private _currentNeos: NeoData[] = [];
  private _displayNeos: NeoData[] = [];
  private hazardOnlyActive = false;

  private selectedNeo: NeoData | null = null;

  private flyTarget: THREE.Vector3 | null = null;
  private flyControlsTarget: THREE.Vector3 | null = null;
  private flyFramesLeft = 0;

  private flashFramesLeft = 0;
  private flashOverlay: THREE.Mesh | null = null;

  get currentNeos(): NeoData[] {
    return this._currentNeos;
  }

  get displayNeos(): NeoData[] {
    return this._displayNeos;
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  getNeoPoints(): THREE.Points | null {
    return this.neoPoints;
  }

  private layers: Record<LayerType, THREE.Object3D[]> = {
    planets: [],
    trajectories: [],
    meteors: [],
    hazardOnly: [],
  };

  init(container: HTMLElement): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SCENE_BACKGROUND_HEX);

    const { clientWidth: w, clientHeight: h } = container;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      w / h,
      CAMERA_NEAR,
      CAMERA_FAR,
    );

    // Place camera near Earth's current position so NEOs are immediately visible.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ex, _ey, ez] = earthPositionAU(new Date());
    this.camera.position.set(
      ex + CAMERA_INITIAL_Y,
      CAMERA_INITIAL_Y,
      ez + CAMERA_INITIAL_Z,
    );

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = ORBIT_DAMPING_FACTOR;
    this.controls.minDistance = ORBIT_MIN_DISTANCE;
    this.controls.maxDistance = ORBIT_MAX_DISTANCE;
    this.controls.target.set(0, 0, 0);

    this.addAmbientLight();
    this.addSun();
    this.addPlanets();

    this.resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = container;
      this.camera.aspect = clientWidth / clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(clientWidth, clientHeight);
    });
    this.resizeObserver.observe(container);

    this.startAnimationLoop();
  }

  private addAmbientLight(): void {
    this.scene.add(
      new THREE.AmbientLight(AMBIENT_LIGHT_HEX, AMBIENT_LIGHT_INTENSITY),
    );
    const sunLight = new THREE.PointLight(
      SUN_LIGHT_HEX,
      SUN_LIGHT_INTENSITY,
      SUN_LIGHT_DISTANCE_AU,
    );
    this.scene.add(sunLight);
  }

  private addSun(): void {
    const geo = new THREE.SphereGeometry(
      SUN_RADIUS_AU,
      SUN_SPHERE_SEGMENTS,
      SUN_SPHERE_SEGMENTS,
    );
    const mat = new THREE.MeshStandardMaterial({
      color: SUN_COLOUR_HEX,
      emissive: SUN_EMISSIVE_HEX,
      emissiveIntensity: 1,
    });
    this.textureLoader.load(SUN_TEXTURE_URL, (tex) => {
      mat.map = tex;
      mat.emissiveMap = tex;
      mat.needsUpdate = true;
    });
    this.scene.add(new THREE.Mesh(geo, mat));
  }

  private addPlanets(): void {
    this.planetGroup = new THREE.Group();
    this.planetMeshes = [];

    for (const planet of PLANET_DATA) {
      const mesh = this.createPlanetMesh(
        planet.radiusAU,
        planet.color,
        planet.size,
        planet.textureUrl,
      );
      this.planetMeshes.push(mesh);
      this.planetGroup.add(mesh);
      this.layers.planets.push(mesh);

      const ring = this.createOrbitRing(planet.radiusAU);
      this.planetGroup.add(ring);
      this.layers.planets.push(ring);
    }

    this.scene.add(this.planetGroup);
  }

  private createPlanetMesh(
    radiusAU: number,
    color: string,
    size: number,
    textureUrl: string,
  ): THREE.Mesh {
    const geo = new THREE.SphereGeometry(
      size,
      PLANET_SPHERE_SEGMENTS,
      PLANET_SPHERE_SEGMENTS,
    );
    const mat = new THREE.MeshStandardMaterial({ color });
    this.textureLoader.load(textureUrl, (tex) => {
      mat.map = tex;
      mat.color.set(0xffffff);
      mat.needsUpdate = true;
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(radiusAU, 0, 0);
    return mesh;
  }

  private createOrbitRing(radiusAU: number): THREE.Mesh {
    const tubeRadius = Math.max(
      radiusAU * ORBIT_RING_TUBE_RATIO,
      ORBIT_RING_MIN_TUBE,
    );
    const geo = new THREE.TorusGeometry(
      radiusAU,
      tubeRadius,
      ORBIT_RING_TUBE_SEGMENTS,
      ORBIT_RING_PATH_SEGMENTS,
    );
    const mat = new THREE.MeshBasicMaterial({
      color: ORBIT_RING_COLOUR_HEX,
      transparent: true,
      opacity: ORBIT_RING_OPACITY,
    });
    const torus = new THREE.Mesh(geo, mat);
    torus.rotation.x = Math.PI / 2;
    return torus;
  }

  private startAnimationLoop(): void {
    const animate = () => {
      this.animFrameId = requestAnimationFrame(animate);
      this.tickSelectedPulse();
      this.tickFlyTo();
      this.tickFlash();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  flashMigration(): void {
    const FLASH_FRAMES = 30;
    const FLASH_OPACITY = 0.35;

    if (!this.flashOverlay) {
      const geo = new THREE.PlaneGeometry(2, 2);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x00ffcc,
        transparent: true,
        opacity: FLASH_OPACITY,
        depthTest: false,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      // Render in screen space by attaching to the camera.
      mesh.renderOrder = 999;
      this.camera.add(mesh);
      mesh.position.set(0, 0, -0.1);
      this.flashOverlay = mesh;
      // Ensure the camera is part of the scene so its children render.
      if (!this.scene.getObjectById(this.camera.id)) {
        this.scene.add(this.camera);
      }
    }

    (this.flashOverlay.material as THREE.MeshBasicMaterial).opacity =
      FLASH_OPACITY;
    this.flashOverlay.visible = true;
    this.flashFramesLeft = FLASH_FRAMES;
  }

  private tickFlash(): void {
    if (!this.flashOverlay || this.flashFramesLeft <= 0) return;
    this.flashFramesLeft--;
    const mat = this.flashOverlay.material as THREE.MeshBasicMaterial;
    // Fade out linearly over the remaining frames.
    mat.opacity = 0.35 * (this.flashFramesLeft / 30);
    if (this.flashFramesLeft === 0) {
      this.flashOverlay.visible = false;
    }
  }

  private tickSelectedPulse(): void {
    if (!this.selectedNeo || !this.neoPoints) return;
    const idx = this._displayNeos.indexOf(this.selectedNeo);
    if (idx === -1) return;
    const brightness =
      PULSE_MIN_BRIGHTNESS +
      PULSE_BRIGHTNESS_RANGE * ((Math.sin(Date.now() * PULSE_SPEED) + 1) / 2);
    const colorAttr = this.neoPoints.geometry.getAttribute(
      "color",
    ) as THREE.BufferAttribute;
    colorAttr.setXYZ(idx, brightness, brightness, brightness);
    colorAttr.needsUpdate = true;
  }

  private tickFlyTo(): void {
    if (!this.flyTarget || this.flyFramesLeft <= 0) return;
    // Ease-in: start slow, accelerate toward target.
    const progress = 1 - this.flyFramesLeft / FLY_TO_FRAMES;
    const alpha = 0.02 + progress * 0.08;
    this.camera.position.lerp(this.flyTarget, alpha);
    if (this.flyControlsTarget) {
      this.controls.target.lerp(this.flyControlsTarget, alpha);
    }
    this.flyFramesLeft--;
    if (this.flyFramesLeft === 0) {
      this.flyTarget = null;
      this.flyControlsTarget = null;
    }
  }

  updateNeoPoints(neos: NeoData[]): void {
    this.disposeNeoPoints();
    // Preserve the selected NEO reference across updates so the selection
    // highlight is re-applied below if the object still exists in the new set.
    const prevSelected = this.selectedNeo;
    this.selectedNeo = null;

    this._currentNeos = neos;
    this._displayNeos = this.hazardOnlyActive
      ? neos.filter((n) => n.hazardous)
      : neos;

    if (this._displayNeos.length === 0) return;

    const count = this._displayNeos.length;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const atlasIndices = new Float32Array(count);
    const diameters = new Float32Array(count);
    const alphas = new Float32Array(count).fill(1.0);

    for (let i = 0; i < count; i++) {
      const neo = this._displayNeos[i];
      const [x, y, z] = neo.position3d;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      const [r, g, b] = neoColour(neo);
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
      atlasIndices[i] = i % ATLAS_VARIANTS;
      diameters[i] = neo.diameterKm;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("atlasIndex", new THREE.BufferAttribute(atlasIndices, 1));
    geo.setAttribute("diameterKm", new THREE.BufferAttribute(diameters, 1));
    geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));

    const neoMat = new THREE.ShaderMaterial({
      uniforms: {
        atlas: { value: getNeoAtlasTexture() },
        minSize: { value: NEO_MIN_PIXEL_SIZE },
        maxSize: { value: NEO_MAX_PIXEL_SIZE },
      },
      vertexShader: NEO_VERT,
      fragmentShader: NEO_FRAG,
      transparent: true,
      depthWrite: false,
    });
    this.neoPoints = new THREE.Points(geo, neoMat);
    this.scene.add(this.neoPoints);

    const hazardous = this._displayNeos.filter((n) => n.hazardous);
    if (hazardous.length > 0) {
      const hPos = new Float32Array(hazardous.length * 3);
      const hAlpha = new Float32Array(hazardous.length).fill(1.0);
      for (let i = 0; i < hazardous.length; i++) {
        const [x, y, z] = hazardous[i].position3d;
        hPos[i * 3] = x;
        hPos[i * 3 + 1] = y;
        hPos[i * 3 + 2] = z;
      }
      const hGeo = new THREE.BufferGeometry();
      hGeo.setAttribute("position", new THREE.BufferAttribute(hPos, 3));
      hGeo.setAttribute("alpha", new THREE.BufferAttribute(hAlpha, 1));
      const hMat = new THREE.ShaderMaterial({
        uniforms: { map: { value: getDiamondTexture() } },
        vertexShader: HAZARD_VERT,
        fragmentShader: HAZARD_FRAG,
        transparent: true,
        depthWrite: false,
      });
      this.hazardPoints = new THREE.Points(hGeo, hMat);
      this.scene.add(this.hazardPoints);
    }

    // Re-apply selection highlight if the previously selected NEO still exists
    // in the new display set (e.g. after a hazard filter toggle).
    if (prevSelected) {
      const idx = this._displayNeos.indexOf(prevSelected);
      if (idx !== -1) {
        this.selectedNeo = prevSelected;
        const colorAttr = this.neoPoints!.geometry.getAttribute(
          "color",
        ) as THREE.BufferAttribute;
        const alphaAttr = this.neoPoints!.geometry.getAttribute(
          "alpha",
        ) as THREE.BufferAttribute;
        colorAttr.setXYZ(idx, ...COLOUR_SELECTED);
        alphaAttr.setX(idx, 1.0);
        colorAttr.needsUpdate = true;
        alphaAttr.needsUpdate = true;
      }
    }
  }

  highlightNeos(ids: Set<bigint> | null): void {
    if (!this.neoPoints) return;
    const colorAttr = this.neoPoints.geometry.getAttribute(
      "color",
    ) as THREE.BufferAttribute;
    const alphaAttr = this.neoPoints.geometry.getAttribute(
      "alpha",
    ) as THREE.BufferAttribute;

    for (let i = 0; i < this._displayNeos.length; i++) {
      const neo = this._displayNeos[i];
      const visible =
        ids === null || (neo.bonsaiId !== undefined && ids.has(neo.bonsaiId));
      if (visible) {
        colorAttr.setXYZ(i, ...neoColour(neo));
        alphaAttr.setX(i, 1.0);
      } else {
        colorAttr.setXYZ(i, ...COLOUR_DIM);
        alphaAttr.setX(i, 0.0);
      }
    }

    colorAttr.needsUpdate = true;
    alphaAttr.needsUpdate = true;

    // Re-apply selection highlight so highlightNeos doesn't clobber it.
    if (this.selectedNeo) {
      const selIdx = this._displayNeos.indexOf(this.selectedNeo);
      if (selIdx !== -1) {
        colorAttr.setXYZ(selIdx, ...COLOUR_SELECTED);
        alphaAttr.setX(selIdx, 1.0);
        colorAttr.needsUpdate = true;
        alphaAttr.needsUpdate = true;
      }
    }

    // Sync hazard diamond visibility by updating the alpha attribute in-place
    // rather than rebuilding geometry on every highlight call.
    if (this.hazardPoints) {
      const hazardAlpha = this.hazardPoints.geometry.getAttribute("alpha") as
        | THREE.BufferAttribute
        | undefined;
      if (hazardAlpha) {
        let hi = 0;
        for (let i = 0; i < this._displayNeos.length; i++) {
          const neo = this._displayNeos[i];
          if (!neo.hazardous) continue;
          const visible =
            ids === null ||
            (neo.bonsaiId !== undefined && ids.has(neo.bonsaiId));
          hazardAlpha.setX(hi, visible ? 1.0 : 0.0);
          hi++;
        }
        hazardAlpha.needsUpdate = true;
      }
    }
  }

  selectNeo(neo: NeoData): void {
    if (!this.neoPoints) {
      this.selectedNeo = neo;
      return;
    }
    const colorAttr = this.neoPoints.geometry.getAttribute(
      "color",
    ) as THREE.BufferAttribute;
    const alphaAttr = this.neoPoints.geometry.getAttribute(
      "alpha",
    ) as THREE.BufferAttribute;

    // Restore previous selection to its natural colour and alpha.
    if (this.selectedNeo) {
      const prevIdx = this._displayNeos.indexOf(this.selectedNeo);
      if (prevIdx !== -1) {
        colorAttr.setXYZ(prevIdx, ...neoColour(this.selectedNeo));
        // Only restore alpha to 1 if it was dimmed solely due to selection;
        // the highlight pass will correct it on the next filter update.
        alphaAttr.setX(prevIdx, 1.0);
      }
    }

    this.selectedNeo = neo;

    // Paint new selection white and ensure it's visible regardless of filter state.
    const idx = this._displayNeos.indexOf(neo);
    if (idx !== -1) {
      colorAttr.setXYZ(idx, ...COLOUR_SELECTED);
      alphaAttr.setX(idx, 1.0);
    }

    colorAttr.needsUpdate = true;
    alphaAttr.needsUpdate = true;
  }

  flyToNeo(neo: NeoData): void {
    const [nx, ny, nz] = neo.position3d;
    const neoPos = new THREE.Vector3(nx, ny, nz);
    const dir = new THREE.Vector3()
      .subVectors(neoPos, this.camera.position)
      .normalize();
    this.flyTarget = neoPos
      .clone()
      .sub(dir.clone().multiplyScalar(FLY_TO_OFFSET_AU));
    this.flyControlsTarget = neoPos.clone();
    this.flyFramesLeft = FLY_TO_FRAMES;
  }

  setLayerVisible(layer: LayerType, visible: boolean): void {
    if (layer === "planets") {
      this.planetGroup.visible = visible;
      return;
    }
    if (layer === "hazardOnly") {
      this.hazardOnlyActive = visible;
      this.updateNeoPoints(this._currentNeos);
      return;
    }
    for (const obj of this.layers[layer]) {
      obj.visible = visible;
    }
  }

  updatePlanetPositions(date: Date): void {
    const daysSinceJ2000 = (date.getTime() - J2000_MS) / MS_PER_DAY;
    for (let i = 0; i < PLANET_DATA.length; i++) {
      const planet = PLANET_DATA[i];
      const mesh = this.planetMeshes[i];
      if (!mesh) continue;
      // Normalise to [0, 360) to handle dates before J2000 (negative modulo in JS).
      const L =
        ((((planet.L0 + planet.n * daysSinceJ2000) % 360) + 360) % 360) *
        DEG2RAD;
      mesh.position.set(
        planet.radiusAU * Math.cos(L),
        0,
        planet.radiusAU * Math.sin(L),
      );
    }
  }

  dispose(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    this.resizeObserver?.disconnect();
    this.resizeObserver = null;

    this.controls.dispose();

    for (const mesh of this.planetMeshes) {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    }

    // Orbit rings are in layers.planets but not in planetMeshes.
    for (const obj of this.layers.planets) {
      if (obj instanceof THREE.Mesh && !this.planetMeshes.includes(obj)) {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      }
    }

    this.scene.remove(this.planetGroup);
    this.disposeNeoPoints();

    this.renderer.dispose();
    this.renderer.domElement.remove();

    this.layers.planets = [];
    this.layers.trajectories = [];
    this.layers.meteors = [];
    this.layers.hazardOnly = [];
    this.planetMeshes = [];
    this._currentNeos = [];
    this._displayNeos = [];
    this.selectedNeo = null;
    this.flyTarget = null;
    this.flyControlsTarget = null;
    this.flyFramesLeft = 0;

    if (this.flashOverlay) {
      this.camera.remove(this.flashOverlay);
      this.flashOverlay.geometry.dispose();
      (this.flashOverlay.material as THREE.Material).dispose();
      this.flashOverlay = null;
    }
    this.flashFramesLeft = 0;
    // Remove the camera from the scene if flashMigration added it.
    this.scene.remove(this.camera);
  }

  private disposeNeoPoints(): void {
    if (this.neoPoints) {
      this.neoPoints.geometry.dispose();
      (this.neoPoints.material as THREE.Material).dispose();
      this.scene.remove(this.neoPoints);
      this.neoPoints = null;
    }
    if (this.hazardPoints) {
      this.hazardPoints.geometry.dispose();
      // Do NOT dispose the shared diamond texture here — it's module-level cached.
      (this.hazardPoints.material as THREE.Material).dispose();
      this.scene.remove(this.hazardPoints);
      this.hazardPoints = null;
    }
  }
}
