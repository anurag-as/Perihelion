class w {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, u.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    n.__wbg_wasmbonsaiindex_free(t, 0);
  }
  clear() {
    n.wasmbonsaiindex_clear(this.__wbg_ptr);
  }
  insert(t, s, i) {
    return n.wasmbonsaiindex_insert(this.__wbg_ptr, t, s, i);
  }
  is_empty() {
    return n.wasmbonsaiindex_is_empty(this.__wbg_ptr) !== 0;
  }
  knn_query(t, s, i) {
    const r = n.wasmbonsaiindex_knn_query(this.__wbg_ptr, t, s, i);
    var a = f(r[0], r[1]).slice();
    return n.__wbindgen_free(r[0], r[1] * 8, 8), a;
  }
  len() {
    return n.wasmbonsaiindex_len(this.__wbg_ptr) >>> 0;
  }
  constructor() {
    const t = n.wasmbonsaiindex_new();
    return this.__wbg_ptr = t >>> 0, u.register(this, this.__wbg_ptr, this), this;
  }
  range_query(t, s, i, r) {
    const a = n.wasmbonsaiindex_range_query(this.__wbg_ptr, t, s, i, r);
    var l = f(a[0], a[1]).slice();
    return n.__wbindgen_free(a[0], a[1] * 8, 8), l;
  }
  stats() {
    const t = n.wasmbonsaiindex_stats(this.__wbg_ptr);
    var s = f(t[0], t[1]).slice();
    return n.__wbindgen_free(t[0], t[1] * 8, 8), s;
  }
}
Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
function y() {
  return { __proto__: null, "./perihelion_wasm_bg.js": { __proto__: null, __wbg___wbindgen_throw_81fc77679af83bc6: function(t, s) {
    throw new Error(p(t, s));
  }, __wbindgen_init_externref_table: function() {
    const t = n.__wbindgen_externrefs, s = t.grow(4);
    t.set(0, void 0), t.set(s + 0, void 0), t.set(s + 1, null), t.set(s + 2, true), t.set(s + 3, false);
  } } };
}
const u = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => n.__wbg_wasmbonsaiindex_free(e >>> 0, 1));
function f(e, t) {
  return e = e >>> 0, d().subarray(e / 8, e / 8 + t);
}
let o = null;
function d() {
  return (o === null || o.byteLength === 0) && (o = new Float64Array(n.memory.buffer)), o;
}
function p(e, t) {
  return e = e >>> 0, x(e, t);
}
let c = null;
function m() {
  return (c === null || c.byteLength === 0) && (c = new Uint8Array(n.memory.buffer)), c;
}
let _ = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
_.decode();
const h = 2146435072;
let b = 0;
function x(e, t) {
  return b += t, b >= h && (_ = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), _.decode(), b = t), _.decode(m().subarray(e, e + t));
}
let n;
function g(e, t) {
  return n = e.exports, o = null, c = null, n.__wbindgen_start(), n;
}
async function A(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (r) {
      if (e.ok && s(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const i = await e.arrayBuffer();
    return await WebAssembly.instantiate(i, t);
  } else {
    const i = await WebAssembly.instantiate(e, t);
    return i instanceof WebAssembly.Instance ? { instance: i, module: e } : i;
  }
  function s(i) {
    switch (i) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function W(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = y();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const s = new WebAssembly.Instance(e, t);
  return g(s);
}
async function R(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("/assets/perihelion_wasm_bg-Btr6VAcP.wasm", import.meta.url));
  const t = y();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: s, module: i } = await A(await e, t);
  return g(s);
}
export {
  w as WasmBonsaiIndex,
  R as default,
  W as initSync
};
