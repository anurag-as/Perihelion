import * as THREE from "three";
import type { NeoData } from "../core/types";

export type RaycasterHitCallback = (neo: NeoData) => void;
export type RaycasterMissCallback = (worldPoint: THREE.Vector3) => void;

export class NeoRaycaster {
  private raycaster = new THREE.Raycaster();
  // Larger threshold makes individual NEO points much easier to click/hover.
  private static readonly POINT_THRESHOLD = 0.015;
  private camera: THREE.PerspectiveCamera | null = null;
  private neoPoints: THREE.Points | null = null;
  private neos: NeoData[] = [];
  private onHit: RaycasterHitCallback;
  private onMiss: RaycasterMissCallback;

  constructor(onHit: RaycasterHitCallback, onMiss: RaycasterMissCallback) {
    this.onHit = onHit;
    this.onMiss = onMiss;
  }

  setCamera(camera: THREE.PerspectiveCamera): void {
    this.camera = camera;
  }

  setNeoPoints(points: THREE.Points, neos: NeoData[]): void {
    this.neoPoints = points;
    this.neos = neos;
  }

  private toNdc(event: MouseEvent, container: HTMLElement): THREE.Vector2 {
    const rect = container.getBoundingClientRect();
    this.raycaster.params.Points!.threshold = NeoRaycaster.POINT_THRESHOLD;
    return new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1,
    );
  }

  onMouseMove(event: MouseEvent, container: HTMLElement): void {
    if (!this.camera || !this.neoPoints) return;
    this.raycaster.setFromCamera(this.toNdc(event, container), this.camera);
    const hits = this.raycaster.intersectObject(this.neoPoints);
    container.style.cursor = hits.length > 0 ? "pointer" : "default";
  }

  onMouseClick(event: MouseEvent, container: HTMLElement): void {
    if (!this.camera || !this.neoPoints) return;

    const ndc = this.toNdc(event, container);

    this.raycaster.setFromCamera(ndc, this.camera);

    const hits = this.raycaster.intersectObject(this.neoPoints);
    if (hits.length > 0) {
      const idx = hits[0].index ?? -1;
      const neo = this.neos[idx];
      if (neo) {
        this.onHit(neo);
        return;
      }
    }

    // No direct hit — compute world point on the ray at a reasonable depth
    // and hand off to the kNN fallback.
    const worldPoint = new THREE.Vector3();
    this.raycaster.ray.at(1.0, worldPoint);
    this.onMiss(worldPoint);
  }
}
