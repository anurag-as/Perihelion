var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import * as P from "three";
import { OrbitControls as Nf } from "three/addons/controls/OrbitControls.js";
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
      for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const o = {};
      return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(l) {
      if (l.ep) return;
      l.ep = true;
      const o = n(l);
      fetch(l.href, o);
    }
  })();
  var Zu = {
    exports: {}
  }, Rl = {}, Ju = {
    exports: {}
  }, F = {};
  var xr = Symbol.for("react.element"), Cf = Symbol.for("react.portal"), Tf = Symbol.for("react.fragment"), Pf = Symbol.for("react.strict_mode"), Af = Symbol.for("react.profiler"), Mf = Symbol.for("react.provider"), If = Symbol.for("react.context"), Rf = Symbol.for("react.forward_ref"), Of = Symbol.for("react.suspense"), Lf = Symbol.for("react.memo"), zf = Symbol.for("react.lazy"), Es = Symbol.iterator;
  function Df(e) {
    return e === null || typeof e != "object" ? null : (e = Es && e[Es] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var qu = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, bu = Object.assign, ea = {};
  function Tn(e, t, n) {
    this.props = e, this.context = t, this.refs = ea, this.updater = n || qu;
  }
  Tn.prototype.isReactComponent = {};
  Tn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Tn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function ta() {
  }
  ta.prototype = Tn.prototype;
  function Ci(e, t, n) {
    this.props = e, this.context = t, this.refs = ea, this.updater = n || qu;
  }
  var Ti = Ci.prototype = new ta();
  Ti.constructor = Ci;
  bu(Ti, Tn.prototype);
  Ti.isPureReactComponent = true;
  var ks = Array.isArray, na = Object.prototype.hasOwnProperty, Pi = {
    current: null
  }, ra = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function la(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) na.call(t, r) && !ra.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
      for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
      l.children = u;
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
      $$typeof: xr,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Pi.current
    };
  }
  function Ff(e, t) {
    return {
      $$typeof: xr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Ai(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xr;
  }
  function jf(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Ns = /\/+/g;
  function ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? jf("" + e.key) : t.toString(36);
  }
  function Zr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = false;
    if (e === null) i = true;
    else switch (o) {
      case "string":
      case "number":
        i = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case Cf:
            i = true;
        }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + ql(i, 0) : r, ks(l) ? (n = "", e != null && (n = e.replace(Ns, "$&/") + "/"), Zr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (Ai(l) && (l = Ff(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ns, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", ks(e)) for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + ql(o, s);
      i += Zr(o, t, n, u, l);
    }
    else if (u = Df(e), typeof u == "function") for (e = u.call(e), s = 0; !(o = e.next()).done; ) o = o.value, u = r + ql(o, s++), i += Zr(o, t, n, u, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function Tr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Zr(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function Uf(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var ve = {
    current: null
  }, Jr = {
    transition: null
  }, $f = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: Pi
  };
  function oa() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  F.Children = {
    map: Tr,
    forEach: function(e, t, n) {
      Tr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return Tr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return Tr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Ai(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  F.Component = Tn;
  F.Fragment = Tf;
  F.Profiler = Af;
  F.PureComponent = Ci;
  F.StrictMode = Pf;
  F.Suspense = Of;
  F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
  F.act = oa;
  F.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = bu({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = Pi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
      for (u in t) na.call(t, u) && !ra.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
      s = Array(u);
      for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
      r.children = s;
    }
    return {
      $$typeof: xr,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
    };
  };
  F.createContext = function(e) {
    return e = {
      $$typeof: If,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: Mf,
      _context: e
    }, e.Consumer = e;
  };
  F.createElement = la;
  F.createFactory = function(e) {
    var t = la.bind(null, e);
    return t.type = e, t;
  };
  F.createRef = function() {
    return {
      current: null
    };
  };
  F.forwardRef = function(e) {
    return {
      $$typeof: Rf,
      render: e
    };
  };
  F.isValidElement = Ai;
  F.lazy = function(e) {
    return {
      $$typeof: zf,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: Uf
    };
  };
  F.memo = function(e, t) {
    return {
      $$typeof: Lf,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  F.startTransition = function(e) {
    var t = Jr.transition;
    Jr.transition = {};
    try {
      e();
    } finally {
      Jr.transition = t;
    }
  };
  F.unstable_act = oa;
  F.useCallback = function(e, t) {
    return ve.current.useCallback(e, t);
  };
  F.useContext = function(e) {
    return ve.current.useContext(e);
  };
  F.useDebugValue = function() {
  };
  F.useDeferredValue = function(e) {
    return ve.current.useDeferredValue(e);
  };
  F.useEffect = function(e, t) {
    return ve.current.useEffect(e, t);
  };
  F.useId = function() {
    return ve.current.useId();
  };
  F.useImperativeHandle = function(e, t, n) {
    return ve.current.useImperativeHandle(e, t, n);
  };
  F.useInsertionEffect = function(e, t) {
    return ve.current.useInsertionEffect(e, t);
  };
  F.useLayoutEffect = function(e, t) {
    return ve.current.useLayoutEffect(e, t);
  };
  F.useMemo = function(e, t) {
    return ve.current.useMemo(e, t);
  };
  F.useReducer = function(e, t, n) {
    return ve.current.useReducer(e, t, n);
  };
  F.useRef = function(e) {
    return ve.current.useRef(e);
  };
  F.useState = function(e) {
    return ve.current.useState(e);
  };
  F.useSyncExternalStore = function(e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n);
  };
  F.useTransition = function() {
    return ve.current.useTransition();
  };
  F.version = "18.3.1";
  Ju.exports = F;
  var I = Ju.exports;
  var Hf = I, Bf = Symbol.for("react.element"), Gf = Symbol.for("react.fragment"), Vf = Object.prototype.hasOwnProperty, Wf = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ia(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Vf.call(t, r) && !Qf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Bf,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Wf.current
    };
  }
  Rl.Fragment = Gf;
  Rl.jsx = ia;
  Rl.jsxs = ia;
  Zu.exports = Rl;
  var w = Zu.exports, sa = {
    exports: {}
  }, Me = {}, ua = {
    exports: {}
  }, aa = {};
  (function(e) {
    function t(N, O) {
      var z = N.length;
      N.push(O);
      e: for (; 0 < z; ) {
        var W = z - 1 >>> 1, E = N[W];
        if (0 < l(E, O)) N[W] = O, N[z] = E, z = W;
        else break e;
      }
    }
    function n(N) {
      return N.length === 0 ? null : N[0];
    }
    function r(N) {
      if (N.length === 0) return null;
      var O = N[0], z = N.pop();
      if (z !== O) {
        N[0] = z;
        e: for (var W = 0, E = N.length, D = E >>> 1; W < D; ) {
          var L = 2 * (W + 1) - 1, U = N[L], q = L + 1, b = N[q];
          if (0 > l(U, z)) q < E && 0 > l(b, U) ? (N[W] = b, N[q] = z, W = q) : (N[W] = U, N[L] = z, W = L);
          else if (q < E && 0 > l(b, z)) N[W] = b, N[q] = z, W = q;
          else break e;
        }
      }
      return O;
    }
    function l(N, O) {
      var z = N.sortIndex - O.sortIndex;
      return z !== 0 ? z : N.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var i = Date, s = i.now();
      e.unstable_now = function() {
        return i.now() - s;
      };
    }
    var u = [], c = [], m = 1, h = null, p = 3, g = false, y = false, x = false, M = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(N) {
      for (var O = n(c); O !== null; ) {
        if (O.callback === null) r(c);
        else if (O.startTime <= N) r(c), O.sortIndex = O.expirationTime, t(u, O);
        else break;
        O = n(c);
      }
    }
    function v(N) {
      if (x = false, d(N), !y) if (n(u) !== null) y = true, Mn(_);
      else {
        var O = n(c);
        O !== null && In(v, O.startTime - N);
      }
    }
    function _(N, O) {
      y = false, x && (x = false, f(A), A = -1), g = true;
      var z = p;
      try {
        for (d(O), h = n(u); h !== null && (!(h.expirationTime > O) || N && !oe()); ) {
          var W = h.callback;
          if (typeof W == "function") {
            h.callback = null, p = h.priorityLevel;
            var E = W(h.expirationTime <= O);
            O = e.unstable_now(), typeof E == "function" ? h.callback = E : h === n(u) && r(u), d(O);
          } else r(u);
          h = n(u);
        }
        if (h !== null) var D = true;
        else {
          var L = n(c);
          L !== null && In(v, L.startTime - O), D = false;
        }
        return D;
      } finally {
        h = null, p = z, g = false;
      }
    }
    var T = false, k = null, A = -1, H = 5, R = -1;
    function oe() {
      return !(e.unstable_now() - R < H);
    }
    function Ze() {
      if (k !== null) {
        var N = e.unstable_now();
        R = N;
        var O = true;
        try {
          O = k(true, N);
        } finally {
          O ? xe() : (T = false, k = null);
        }
      } else T = false;
    }
    var xe;
    if (typeof a == "function") xe = function() {
      a(Ze);
    };
    else if (typeof MessageChannel < "u") {
      var Nr = new MessageChannel(), Xl = Nr.port2;
      Nr.port1.onmessage = Ze, xe = function() {
        Xl.postMessage(null);
      };
    } else xe = function() {
      M(Ze, 0);
    };
    function Mn(N) {
      k = N, T || (T = true, xe());
    }
    function In(N, O) {
      A = M(function() {
        N(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, e.unstable_continueExecution = function() {
      y || g || (y = true, Mn(_));
    }, e.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < N ? Math.floor(1e3 / N) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(u);
    }, e.unstable_next = function(N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var z = p;
      p = O;
      try {
        return N();
      } finally {
        p = z;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = p;
      p = N;
      try {
        return O();
      } finally {
        p = z;
      }
    }, e.unstable_scheduleCallback = function(N, O, z) {
      var W = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, N) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = z + E, N = {
        id: m++,
        callback: O,
        priorityLevel: N,
        startTime: z,
        expirationTime: E,
        sortIndex: -1
      }, z > W ? (N.sortIndex = z, t(c, N), n(u) === null && N === n(c) && (x ? (f(A), A = -1) : x = true, In(v, z - W))) : (N.sortIndex = E, t(u, N), y || g || (y = true, Mn(_))), N;
    }, e.unstable_shouldYield = oe, e.unstable_wrapCallback = function(N) {
      var O = p;
      return function() {
        var z = p;
        p = O;
        try {
          return N.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    };
  })(aa);
  ua.exports = aa;
  var Kf = ua.exports;
  var Xf = I, Ae = Kf;
  function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ca = /* @__PURE__ */ new Set(), rr = {};
  function Jt(e, t) {
    xn(e, t), xn(e + "Capture", t);
  }
  function xn(e, t) {
    for (rr[e] = t, e = 0; e < t.length; e++) ca.add(t[e]);
  }
  var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ro = Object.prototype.hasOwnProperty, Yf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cs = {}, Ts = {};
  function Zf(e) {
    return Ro.call(Ts, e) ? true : Ro.call(Cs, e) ? false : Yf.test(e) ? Ts[e] = true : (Cs[e] = true, false);
  }
  function Jf(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function qf(e, t, n, r) {
    if (t === null || typeof t > "u" || Jf(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function we(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new we(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    ce[t] = new we(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    ce[e] = new we(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    ce[e] = new we(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new we(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    ce[e] = new we(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    ce[e] = new we(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    ce[e] = new we(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    ce[e] = new we(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Mi = /[\-:]([a-z])/g;
  function Ii(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Mi, Ii);
    ce[t] = new we(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Mi, Ii);
    ce[t] = new we(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Mi, Ii);
    ce[t] = new we(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    ce[e] = new we(e, 1, false, e.toLowerCase(), null, false, false);
  });
  ce.xlinkHref = new we("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    ce[e] = new we(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Ri(e, t, n, r) {
    var l = ce.hasOwnProperty(t) ? ce[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qf(t, n, l, r) && (n = null), r || l === null ? Zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var at = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pr = Symbol.for("react.element"), en = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), Oi = Symbol.for("react.strict_mode"), Oo = Symbol.for("react.profiler"), fa = Symbol.for("react.provider"), da = Symbol.for("react.context"), Li = Symbol.for("react.forward_ref"), Lo = Symbol.for("react.suspense"), zo = Symbol.for("react.suspense_list"), zi = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), pa = Symbol.for("react.offscreen"), Ps = Symbol.iterator;
  function Rn(e) {
    return e === null || typeof e != "object" ? null : (e = Ps && e[Ps] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, bl;
  function Vn(e) {
    if (bl === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bl = t && t[1] || "";
    }
    return `
` + bl + e;
  }
  var eo = false;
  function to(e, t) {
    if (!e || eo) return "";
    eo = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (c) {
          r = c;
        }
        e();
      }
    } catch (c) {
      if (c && r && typeof c.stack == "string") {
        for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s]; ) s--;
        for (; 1 <= i && 0 <= s; i--, s--) if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1) do
            if (i--, s--, 0 > s || l[i] !== o[s]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= s);
          break;
        }
      }
    } finally {
      eo = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
  }
  function bf(e) {
    switch (e.tag) {
      case 5:
        return Vn(e.type);
      case 16:
        return Vn("Lazy");
      case 13:
        return Vn("Suspense");
      case 19:
        return Vn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = to(e.type, false), e;
      case 11:
        return e = to(e.type.render, false), e;
      case 1:
        return e = to(e.type, true), e;
      default:
        return "";
    }
  }
  function Do(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case tn:
        return "Fragment";
      case en:
        return "Portal";
      case Oo:
        return "Profiler";
      case Oi:
        return "StrictMode";
      case Lo:
        return "Suspense";
      case zo:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case da:
        return (e.displayName || "Context") + ".Consumer";
      case fa:
        return (e._context.displayName || "Context") + ".Provider";
      case Li:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case zi:
        return t = e.displayName || null, t !== null ? t : Do(e.type) || "Memo";
      case pt:
        t = e._payload, e = e._init;
        try {
          return Do(e(t));
        } catch {
        }
    }
    return null;
  }
  function ed(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Do(t);
      case 8:
        return t === Oi ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Pt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ha(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function td(e) {
    var t = ha(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return l.call(this);
        },
        set: function(i) {
          r = "" + i, o.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(i) {
          r = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ar(e) {
    e._valueTracker || (e._valueTracker = td(e));
  }
  function ma(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = ha(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function ul(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fo(e, t) {
    var n = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function As(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Pt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function ya(e, t) {
    t = t.checked, t != null && Ri(e, "checked", t, false);
  }
  function jo(e, t) {
    ya(e, t);
    var n = Pt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Uo(e, t.type, Pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Uo(e, t, n) {
    (t !== "number" || ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wn = Array.isArray;
  function hn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function $o(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Is(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(S(92));
        if (Wn(n)) {
          if (1 < n.length) throw Error(S(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: Pt(n)
    };
  }
  function ga(e, t) {
    var n = Pt(t.value), r = Pt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Rs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function va(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ho(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? va(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Mr, wa = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function lr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, nd = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Xn).forEach(function(e) {
    nd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xn[t] = Xn[e];
    });
  });
  function xa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xn.hasOwnProperty(e) && Xn[e] ? ("" + t).trim() : t + "px";
  }
  function Sa(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = xa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var rd = Y({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Bo(e, t) {
    if (t) {
      if (rd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(S(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(S(62));
    }
  }
  function Go(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Vo = null;
  function Di(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wo = null, mn = null, yn = null;
  function Os(e) {
    if (e = Er(e)) {
      if (typeof Wo != "function") throw Error(S(280));
      var t = e.stateNode;
      t && (t = Fl(t), Wo(e.stateNode, e.type, t));
    }
  }
  function _a(e) {
    mn ? yn ? yn.push(e) : yn = [
      e
    ] : mn = e;
  }
  function Ea() {
    if (mn) {
      var e = mn, t = yn;
      if (yn = mn = null, Os(e), t) for (e = 0; e < t.length; e++) Os(t[e]);
    }
  }
  function ka(e, t) {
    return e(t);
  }
  function Na() {
  }
  var no = false;
  function Ca(e, t, n) {
    if (no) return e(t, n);
    no = true;
    try {
      return ka(e, t, n);
    } finally {
      no = false, (mn !== null || yn !== null) && (Na(), Ea());
    }
  }
  function or(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Fl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n;
  }
  var Qo = false;
  if (ot) try {
    var On = {};
    Object.defineProperty(On, "passive", {
      get: function() {
        Qo = true;
      }
    }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
  } catch {
    Qo = false;
  }
  function ld(e, t, n, r, l, o, i, s, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (m) {
      this.onError(m);
    }
  }
  var Yn = false, al = null, cl = false, Ko = null, od = {
    onError: function(e) {
      Yn = true, al = e;
    }
  };
  function id(e, t, n, r, l, o, i, s, u) {
    Yn = false, al = null, ld.apply(od, arguments);
  }
  function sd(e, t, n, r, l, o, i, s, u) {
    if (id.apply(this, arguments), Yn) {
      if (Yn) {
        var c = al;
        Yn = false, al = null;
      } else throw Error(S(198));
      cl || (cl = true, Ko = c);
    }
  }
  function qt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ta(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ls(e) {
    if (qt(e) !== e) throw Error(S(188));
  }
  function ud(e) {
    var t = e.alternate;
    if (!t) {
      if (t = qt(e), t === null) throw Error(S(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ls(l), e;
          if (o === r) return Ls(l), t;
          o = o.sibling;
        }
        throw Error(S(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = false, s = l.child; s; ) {
          if (s === n) {
            i = true, n = l, r = o;
            break;
          }
          if (s === r) {
            i = true, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = o.child; s; ) {
            if (s === n) {
              i = true, n = o, r = l;
              break;
            }
            if (s === r) {
              i = true, r = o, n = l;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(S(189));
        }
      }
      if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t;
  }
  function Pa(e) {
    return e = ud(e), e !== null ? Aa(e) : null;
  }
  function Aa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Aa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ma = Ae.unstable_scheduleCallback, zs = Ae.unstable_cancelCallback, ad = Ae.unstable_shouldYield, cd = Ae.unstable_requestPaint, J = Ae.unstable_now, fd = Ae.unstable_getCurrentPriorityLevel, Fi = Ae.unstable_ImmediatePriority, Ia = Ae.unstable_UserBlockingPriority, fl = Ae.unstable_NormalPriority, dd = Ae.unstable_LowPriority, Ra = Ae.unstable_IdlePriority, Ol = null, Xe = null;
  function pd(e) {
    if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
      Xe.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Be = Math.clz32 ? Math.clz32 : yd, hd = Math.log, md = Math.LN2;
  function yd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hd(e) / md | 0) | 0;
  }
  var Ir = 64, Rr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function dl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var s = i & ~l;
      s !== 0 ? r = Qn(s) : (o &= i, o !== 0 && (r = Qn(o)));
    } else i = n & ~l, i !== 0 ? r = Qn(i) : o !== 0 && (r = Qn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Be(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function gd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Be(o), s = 1 << i, u = l[i];
      u === -1 ? (!(s & n) || s & r) && (l[i] = gd(s, t)) : u <= t && (e.expiredLanes |= s), o &= ~s;
    }
  }
  function Xo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Oa() {
    var e = Ir;
    return Ir <<= 1, !(Ir & 4194240) && (Ir = 64), e;
  }
  function ro(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Be(t), e[t] = n;
  }
  function wd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Be(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function ji(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Be(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var $ = 0;
  function La(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var za, Ui, Da, Fa, ja, Yo = false, Or = [], xt = null, St = null, _t = null, ir = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new Map(), mt = [], xd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ds(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xt = null;
        break;
      case "dragenter":
      case "dragleave":
        St = null;
        break;
      case "mouseover":
      case "mouseout":
        _t = null;
        break;
      case "pointerover":
      case "pointerout":
        ir.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sr.delete(t.pointerId);
    }
  }
  function Ln(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = Er(t), t !== null && Ui(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Sd(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return xt = Ln(xt, e, t, n, r, l), true;
      case "dragenter":
        return St = Ln(St, e, t, n, r, l), true;
      case "mouseover":
        return _t = Ln(_t, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return ir.set(o, Ln(ir.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, sr.set(o, Ln(sr.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function Ua(e) {
    var t = jt(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ta(n), t !== null) {
            e.blockedOn = t, ja(e.priority, function() {
              Da(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qr(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vo = r, n.target.dispatchEvent(r), Vo = null;
      } else return t = Er(n), t !== null && Ui(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Fs(e, t, n) {
    qr(e) && n.delete(t);
  }
  function _d() {
    Yo = false, xt !== null && qr(xt) && (xt = null), St !== null && qr(St) && (St = null), _t !== null && qr(_t) && (_t = null), ir.forEach(Fs), sr.forEach(Fs);
  }
  function zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = true, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, _d)));
  }
  function ur(e) {
    function t(l) {
      return zn(l, e);
    }
    if (0 < Or.length) {
      zn(Or[0], e);
      for (var n = 1; n < Or.length; n++) {
        var r = Or[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (xt !== null && zn(xt, e), St !== null && zn(St, e), _t !== null && zn(_t, e), ir.forEach(t), sr.forEach(t), n = 0; n < mt.length; n++) r = mt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mt.length && (n = mt[0], n.blockedOn === null); ) Ua(n), n.blockedOn === null && mt.shift();
  }
  var gn = at.ReactCurrentBatchConfig, pl = true;
  function Ed(e, t, n, r) {
    var l = $, o = gn.transition;
    gn.transition = null;
    try {
      $ = 1, $i(e, t, n, r);
    } finally {
      $ = l, gn.transition = o;
    }
  }
  function kd(e, t, n, r) {
    var l = $, o = gn.transition;
    gn.transition = null;
    try {
      $ = 4, $i(e, t, n, r);
    } finally {
      $ = l, gn.transition = o;
    }
  }
  function $i(e, t, n, r) {
    if (pl) {
      var l = Zo(e, t, n, r);
      if (l === null) ho(e, t, r, hl, n), Ds(e, r);
      else if (Sd(l, e, t, n, r)) r.stopPropagation();
      else if (Ds(e, r), t & 4 && -1 < xd.indexOf(e)) {
        for (; l !== null; ) {
          var o = Er(l);
          if (o !== null && za(o), o = Zo(e, t, n, r), o === null && ho(e, t, r, hl, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else ho(e, t, r, null, n);
    }
  }
  var hl = null;
  function Zo(e, t, n, r) {
    if (hl = null, e = Di(r), e = jt(e), e !== null) if (t = qt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ta(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return hl = e, null;
  }
  function $a(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (fd()) {
          case Fi:
            return 1;
          case Ia:
            return 4;
          case fl:
          case dd:
            return 16;
          case Ra:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gt = null, Hi = null, br = null;
  function Ha() {
    if (br) return br;
    var e, t = Hi, n = t.length, r, l = "value" in gt ? gt.value : gt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return br = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function el(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lr() {
    return true;
  }
  function js() {
    return false;
  }
  function Ie(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Lr : js, this.isPropagationStopped = js, this;
    }
    return Y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Lr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Lr);
      },
      persist: function() {
      },
      isPersistent: Lr
    }), t;
  }
  var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bi = Ie(Pn), _r = Y({}, Pn, {
    view: 0,
    detail: 0
  }), Nd = Ie(_r), lo, oo, Dn, Ll = Y({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (lo = e.screenX - Dn.screenX, oo = e.screenY - Dn.screenY) : oo = lo = 0, Dn = e), lo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : oo;
    }
  }), Us = Ie(Ll), Cd = Y({}, Ll, {
    dataTransfer: 0
  }), Td = Ie(Cd), Pd = Y({}, _r, {
    relatedTarget: 0
  }), io = Ie(Pd), Ad = Y({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Md = Ie(Ad), Id = Y({}, Pn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Rd = Ie(Id), Od = Y({}, Pn, {
    data: 0
  }), $s = Ie(Od), Ld = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, zd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Dd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Fd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Dd[e]) ? !!t[e] : false;
  }
  function Gi() {
    return Fd;
  }
  var jd = Y({}, _r, {
    key: function(e) {
      if (e.key) {
        var t = Ld[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zd[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gi,
    charCode: function(e) {
      return e.type === "keypress" ? el(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ud = Ie(jd), $d = Y({}, Ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Hs = Ie($d), Hd = Y({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gi
  }), Bd = Ie(Hd), Gd = Y({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vd = Ie(Gd), Wd = Y({}, Ll, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qd = Ie(Wd), Kd = [
    9,
    13,
    27,
    32
  ], Vi = ot && "CompositionEvent" in window, Zn = null;
  ot && "documentMode" in document && (Zn = document.documentMode);
  var Xd = ot && "TextEvent" in window && !Zn, Ba = ot && (!Vi || Zn && 8 < Zn && 11 >= Zn), Bs = " ", Gs = false;
  function Ga(e, t) {
    switch (e) {
      case "keyup":
        return Kd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Va(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var nn = false;
  function Yd(e, t) {
    switch (e) {
      case "compositionend":
        return Va(t);
      case "keypress":
        return t.which !== 32 ? null : (Gs = true, Bs);
      case "textInput":
        return e = t.data, e === Bs && Gs ? null : e;
      default:
        return null;
    }
  }
  function Zd(e, t) {
    if (nn) return e === "compositionend" || !Vi && Ga(e, t) ? (e = Ha(), br = Hi = gt = null, nn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ba && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jd = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Vs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jd[e.type] : t === "textarea";
  }
  function Wa(e, t, n, r) {
    _a(r), t = ml(t, "onChange"), 0 < t.length && (n = new Bi("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Jn = null, ar = null;
  function qd(e) {
    nc(e, 0);
  }
  function zl(e) {
    var t = on(e);
    if (ma(t)) return e;
  }
  function bd(e, t) {
    if (e === "change") return t;
  }
  var Qa = false;
  if (ot) {
    var so;
    if (ot) {
      var uo = "oninput" in document;
      if (!uo) {
        var Ws = document.createElement("div");
        Ws.setAttribute("oninput", "return;"), uo = typeof Ws.oninput == "function";
      }
      so = uo;
    } else so = false;
    Qa = so && (!document.documentMode || 9 < document.documentMode);
  }
  function Qs() {
    Jn && (Jn.detachEvent("onpropertychange", Ka), ar = Jn = null);
  }
  function Ka(e) {
    if (e.propertyName === "value" && zl(ar)) {
      var t = [];
      Wa(t, ar, e, Di(e)), Ca(qd, t);
    }
  }
  function ep(e, t, n) {
    e === "focusin" ? (Qs(), Jn = t, ar = n, Jn.attachEvent("onpropertychange", Ka)) : e === "focusout" && Qs();
  }
  function tp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(ar);
  }
  function np(e, t) {
    if (e === "click") return zl(t);
  }
  function rp(e, t) {
    if (e === "input" || e === "change") return zl(t);
  }
  function lp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ve = typeof Object.is == "function" ? Object.is : lp;
  function cr(e, t) {
    if (Ve(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Ro.call(t, l) || !Ve(e[l], t[l])) return false;
    }
    return true;
  }
  function Ks(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xs(e, t) {
    var n = Ks(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ks(n);
    }
  }
  function Xa(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Ya() {
    for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ul(e.document);
    }
    return t;
  }
  function Wi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function op(e) {
    var t = Ya(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xa(n.ownerDocument.documentElement, n)) {
      if (r !== null && Wi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Xs(n, o);
          var i = Xs(n, r);
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ip = ot && "documentMode" in document && 11 >= document.documentMode, rn = null, Jo = null, qn = null, qo = false;
  function Ys(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qo || rn == null || rn !== ul(r) || (r = rn, "selectionStart" in r && Wi(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), qn && cr(qn, r) || (qn = r, r = ml(Jo, "onSelect"), 0 < r.length && (t = new Bi("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = rn)));
  }
  function zr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ln = {
    animationend: zr("Animation", "AnimationEnd"),
    animationiteration: zr("Animation", "AnimationIteration"),
    animationstart: zr("Animation", "AnimationStart"),
    transitionend: zr("Transition", "TransitionEnd")
  }, ao = {}, Za = {};
  ot && (Za = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
  function Dl(e) {
    if (ao[e]) return ao[e];
    if (!ln[e]) return e;
    var t = ln[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Za) return ao[e] = t[n];
    return e;
  }
  var Ja = Dl("animationend"), qa = Dl("animationiteration"), ba = Dl("animationstart"), ec = Dl("transitionend"), tc = /* @__PURE__ */ new Map(), Zs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mt(e, t) {
    tc.set(e, t), Jt(t, [
      e
    ]);
  }
  for (var co = 0; co < Zs.length; co++) {
    var fo = Zs[co], sp = fo.toLowerCase(), up = fo[0].toUpperCase() + fo.slice(1);
    Mt(sp, "on" + up);
  }
  Mt(Ja, "onAnimationEnd");
  Mt(qa, "onAnimationIteration");
  Mt(ba, "onAnimationStart");
  Mt("dblclick", "onDoubleClick");
  Mt("focusin", "onFocus");
  Mt("focusout", "onBlur");
  Mt(ec, "onTransitionEnd");
  xn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  xn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  xn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  xn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Jt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
  function Js(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, sd(r, t, void 0, e), e.currentTarget = null;
  }
  function nc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i], u = s.instance, c = s.currentTarget;
          if (s = s.listener, u !== o && l.isPropagationStopped()) break e;
          Js(l, s, c), o = u;
        }
        else for (i = 0; i < r.length; i++) {
          if (s = r[i], u = s.instance, c = s.currentTarget, s = s.listener, u !== o && l.isPropagationStopped()) break e;
          Js(l, s, c), o = u;
        }
      }
    }
    if (cl) throw e = Ko, cl = false, Ko = null, e;
  }
  function G(e, t) {
    var n = t[ri];
    n === void 0 && (n = t[ri] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (rc(t, e, 2, false), n.add(r));
  }
  function po(e, t, n) {
    var r = 0;
    t && (r |= 4), rc(n, e, r, t);
  }
  var Dr = "_reactListening" + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[Dr]) {
      e[Dr] = true, ca.forEach(function(n) {
        n !== "selectionchange" && (ap.has(n) || po(n, false, e), po(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Dr] || (t[Dr] = true, po("selectionchange", false, t));
    }
  }
  function rc(e, t, n, r) {
    switch ($a(t)) {
      case 1:
        var l = Ed;
        break;
      case 4:
        l = kd;
        break;
      default:
        l = $i;
    }
    n = l.bind(null, t, n, e), l = void 0, !Qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function ho(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || s.nodeType === 8 && s.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var u = i.tag;
          if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
          i = i.return;
        }
        for (; s !== null; ) {
          if (i = jt(s), i === null) return;
          if (u = i.tag, u === 5 || u === 6) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    Ca(function() {
      var c = o, m = Di(n), h = [];
      e: {
        var p = tc.get(e);
        if (p !== void 0) {
          var g = Bi, y = e;
          switch (e) {
            case "keypress":
              if (el(n) === 0) break e;
            case "keydown":
            case "keyup":
              g = Ud;
              break;
            case "focusin":
              y = "focus", g = io;
              break;
            case "focusout":
              y = "blur", g = io;
              break;
            case "beforeblur":
            case "afterblur":
              g = io;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Td;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Bd;
              break;
            case Ja:
            case qa:
            case ba:
              g = Md;
              break;
            case ec:
              g = Vd;
              break;
            case "scroll":
              g = Nd;
              break;
            case "wheel":
              g = Qd;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Rd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Hs;
          }
          var x = (t & 4) !== 0, M = !x && e === "scroll", f = x ? p !== null ? p + "Capture" : null : p;
          x = [];
          for (var a = c, d; a !== null; ) {
            d = a;
            var v = d.stateNode;
            if (d.tag === 5 && v !== null && (d = v, f !== null && (v = or(a, f), v != null && x.push(dr(a, v, d)))), M) break;
            a = a.return;
          }
          0 < x.length && (p = new g(p, y, null, n, m), h.push({
            event: p,
            listeners: x
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== Vo && (y = n.relatedTarget || n.fromElement) && (jt(y) || y[it])) break e;
          if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = c, y = y ? jt(y) : null, y !== null && (M = qt(y), y !== M || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = c), g !== y)) {
            if (x = Us, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = Hs, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), M = g == null ? p : on(g), d = y == null ? p : on(y), p = new x(v, a + "leave", g, n, m), p.target = M, p.relatedTarget = d, v = null, jt(m) === c && (x = new x(f, a + "enter", y, n, m), x.target = d, x.relatedTarget = M, v = x), M = v, g && y) t: {
              for (x = g, f = y, a = 0, d = x; d; d = bt(d)) a++;
              for (d = 0, v = f; v; v = bt(v)) d++;
              for (; 0 < a - d; ) x = bt(x), a--;
              for (; 0 < d - a; ) f = bt(f), d--;
              for (; a--; ) {
                if (x === f || f !== null && x === f.alternate) break t;
                x = bt(x), f = bt(f);
              }
              x = null;
            }
            else x = null;
            g !== null && qs(h, p, g, x, false), y !== null && M !== null && qs(h, M, y, x, true);
          }
        }
        e: {
          if (p = c ? on(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var _ = bd;
          else if (Vs(p)) if (Qa) _ = rp;
          else {
            _ = tp;
            var T = ep;
          }
          else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (_ = np);
          if (_ && (_ = _(e, c))) {
            Wa(h, _, n, m);
            break e;
          }
          T && T(e, p, c), e === "focusout" && (T = p._wrapperState) && T.controlled && p.type === "number" && Uo(p, "number", p.value);
        }
        switch (T = c ? on(c) : window, e) {
          case "focusin":
            (Vs(T) || T.contentEditable === "true") && (rn = T, Jo = c, qn = null);
            break;
          case "focusout":
            qn = Jo = rn = null;
            break;
          case "mousedown":
            qo = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qo = false, Ys(h, n, m);
            break;
          case "selectionchange":
            if (ip) break;
          case "keydown":
          case "keyup":
            Ys(h, n, m);
        }
        var k;
        if (Vi) e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
        else nn ? Ga(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
        A && (Ba && n.locale !== "ko" && (nn || A !== "onCompositionStart" ? A === "onCompositionEnd" && nn && (k = Ha()) : (gt = m, Hi = "value" in gt ? gt.value : gt.textContent, nn = true)), T = ml(c, A), 0 < T.length && (A = new $s(A, e, null, n, m), h.push({
          event: A,
          listeners: T
        }), k ? A.data = k : (k = Va(n), k !== null && (A.data = k)))), (k = Xd ? Yd(e, n) : Zd(e, n)) && (c = ml(c, "onBeforeInput"), 0 < c.length && (m = new $s("onBeforeInput", "beforeinput", null, n, m), h.push({
          event: m,
          listeners: c
        }), m.data = k));
      }
      nc(h, t);
    });
  }
  function dr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ml(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = or(e, n), o != null && r.unshift(dr(e, o, l)), o = or(e, t), o != null && r.push(dr(e, o, l))), e = e.return;
    }
    return r;
  }
  function bt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n, u = s.alternate, c = s.stateNode;
      if (u !== null && u === r) break;
      s.tag === 5 && c !== null && (s = c, l ? (u = or(n, o), u != null && i.unshift(dr(n, u, s))) : l || (u = or(n, o), u != null && i.push(dr(n, u, s)))), n = n.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var cp = /\r\n?/g, fp = /\u0000|\uFFFD/g;
  function bs(e) {
    return (typeof e == "string" ? e : "" + e).replace(cp, `
`).replace(fp, "");
  }
  function Fr(e, t, n) {
    if (t = bs(t), bs(e) !== t && n) throw Error(S(425));
  }
  function yl() {
  }
  var bo = null, ei = null;
  function ti(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ni = typeof setTimeout == "function" ? setTimeout : void 0, dp = typeof clearTimeout == "function" ? clearTimeout : void 0, eu = typeof Promise == "function" ? Promise : void 0, pp = typeof queueMicrotask == "function" ? queueMicrotask : typeof eu < "u" ? function(e) {
    return eu.resolve(null).then(e).catch(hp);
  } : ni;
  function hp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), ur(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    ur(t);
  }
  function Et(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function tu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var An = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + An, pr = "__reactProps$" + An, it = "__reactContainer$" + An, ri = "__reactEvents$" + An, mp = "__reactListeners$" + An, yp = "__reactHandles$" + An;
  function jt(e) {
    var t = e[Ke];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[it] || n[Ke]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = tu(e); e !== null; ) {
          if (n = e[Ke]) return n;
          e = tu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Er(e) {
    return e = e[Ke] || e[it], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function on(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
  }
  function Fl(e) {
    return e[pr] || null;
  }
  var li = [], sn = -1;
  function It(e) {
    return {
      current: e
    };
  }
  function V(e) {
    0 > sn || (e.current = li[sn], li[sn] = null, sn--);
  }
  function B(e, t) {
    sn++, li[sn] = e.current, e.current = t;
  }
  var At = {}, he = It(At), Ee = It(false), Vt = At;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function gl() {
    V(Ee), V(he);
  }
  function nu(e, t, n) {
    if (he.current !== At) throw Error(S(168));
    B(he, t), B(Ee, n);
  }
  function lc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, ed(e) || "Unknown", l));
    return Y({}, n, r);
  }
  function vl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Vt = he.current, B(he, e), B(Ee, Ee.current), true;
  }
  function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = lc(e, t, Vt), r.__reactInternalMemoizedMergedChildContext = e, V(Ee), V(he), B(he, e)) : V(Ee), B(Ee, n);
  }
  var et = null, jl = false, yo = false;
  function oc(e) {
    et === null ? et = [
      e
    ] : et.push(e);
  }
  function gp(e) {
    jl = true, oc(e);
  }
  function Rt() {
    if (!yo && et !== null) {
      yo = true;
      var e = 0, t = $;
      try {
        var n = et;
        for ($ = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        et = null, jl = false;
      } catch (l) {
        throw et !== null && (et = et.slice(e + 1)), Ma(Fi, Rt), l;
      } finally {
        $ = t, yo = false;
      }
    }
    return null;
  }
  var un = [], an = 0, wl = null, xl = 0, Re = [], Oe = 0, Wt = null, tt = 1, nt = "";
  function Dt(e, t) {
    un[an++] = xl, un[an++] = wl, wl = e, xl = t;
  }
  function ic(e, t, n) {
    Re[Oe++] = tt, Re[Oe++] = nt, Re[Oe++] = Wt, Wt = e;
    var r = tt;
    e = nt;
    var l = 32 - Be(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Be(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, tt = 1 << 32 - Be(t) + l | n << l | r, nt = o + e;
    } else tt = 1 << o | n << l | r, nt = e;
  }
  function Qi(e) {
    e.return !== null && (Dt(e, 1), ic(e, 1, 0));
  }
  function Ki(e) {
    for (; e === wl; ) wl = un[--an], un[an] = null, xl = un[--an], un[an] = null;
    for (; e === Wt; ) Wt = Re[--Oe], Re[Oe] = null, nt = Re[--Oe], Re[Oe] = null, tt = Re[--Oe], Re[Oe] = null;
  }
  var Pe = null, Te = null, Q = false, He = null;
  function sc(e, t) {
    var n = Le(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function lu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, Te = Et(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, Te = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wt !== null ? {
          id: tt,
          overflow: nt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, Te = null, true) : false;
      default:
        return false;
    }
  }
  function oi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ii(e) {
    if (Q) {
      var t = Te;
      if (t) {
        var n = t;
        if (!lu(e, t)) {
          if (oi(e)) throw Error(S(418));
          t = Et(n.nextSibling);
          var r = Pe;
          t && lu(e, t) ? sc(r, n) : (e.flags = e.flags & -4097 | 2, Q = false, Pe = e);
        }
      } else {
        if (oi(e)) throw Error(S(418));
        e.flags = e.flags & -4097 | 2, Q = false, Pe = e;
      }
    }
  }
  function ou(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Pe = e;
  }
  function jr(e) {
    if (e !== Pe) return false;
    if (!Q) return ou(e), Q = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ti(e.type, e.memoizedProps)), t && (t = Te)) {
      if (oi(e)) throw uc(), Error(S(418));
      for (; t; ) sc(e, t), t = Et(t.nextSibling);
    }
    if (ou(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Te = Et(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Te = null;
      }
    } else Te = Pe ? Et(e.stateNode.nextSibling) : null;
    return true;
  }
  function uc() {
    for (var e = Te; e; ) e = Et(e.nextSibling);
  }
  function _n() {
    Te = Pe = null, Q = false;
  }
  function Xi(e) {
    He === null ? He = [
      e
    ] : He.push(e);
  }
  var vp = at.ReactCurrentBatchConfig;
  function Fn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(S(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(S(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var s = l.refs;
          i === null ? delete s[o] : s[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(S(284));
      if (!n._owner) throw Error(S(290, e));
    }
    return e;
  }
  function Ur(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ac(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [
          a
        ], f.flags |= 16) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Tt(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function s(f, a, d, v) {
      return a === null || a.tag !== 6 ? (a = Eo(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function u(f, a, d, v) {
      var _ = d.type;
      return _ === tn ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === pt && iu(_) === a.type) ? (v = l(a, d.props), v.ref = Fn(f, a, d), v.return = f, v) : (v = sl(d.type, d.key, d.props, null, f.mode, v), v.ref = Fn(f, a, d), v.return = f, v);
    }
    function c(f, a, d, v) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ko(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function m(f, a, d, v, _) {
      return a === null || a.tag !== 7 ? (a = Bt(d, f.mode, v, _), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function h(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = Eo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Pr:
            return d = sl(a.type, a.key, a.props, null, f.mode, d), d.ref = Fn(f, null, a), d.return = f, d;
          case en:
            return a = ko(a, f.mode, d), a.return = f, a;
          case pt:
            var v = a._init;
            return h(f, v(a._payload), d);
        }
        if (Wn(a) || Rn(a)) return a = Bt(a, f.mode, d, null), a.return = f, a;
        Ur(f, a);
      }
      return null;
    }
    function p(f, a, d, v) {
      var _ = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return _ !== null ? null : s(f, a, "" + d, v);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Pr:
            return d.key === _ ? u(f, a, d, v) : null;
          case en:
            return d.key === _ ? c(f, a, d, v) : null;
          case pt:
            return _ = d._init, p(f, a, _(d._payload), v);
        }
        if (Wn(d) || Rn(d)) return _ !== null ? null : m(f, a, d, v, null);
        Ur(f, d);
      }
      return null;
    }
    function g(f, a, d, v, _) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, s(a, f, "" + v, _);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Pr:
            return f = f.get(v.key === null ? d : v.key) || null, u(a, f, v, _);
          case en:
            return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, _);
          case pt:
            var T = v._init;
            return g(f, a, d, T(v._payload), _);
        }
        if (Wn(v) || Rn(v)) return f = f.get(d) || null, m(a, f, v, _, null);
        Ur(a, v);
      }
      return null;
    }
    function y(f, a, d, v) {
      for (var _ = null, T = null, k = a, A = a = 0, H = null; k !== null && A < d.length; A++) {
        k.index > A ? (H = k, k = null) : H = k.sibling;
        var R = p(f, k, d[A], v);
        if (R === null) {
          k === null && (k = H);
          break;
        }
        e && k && R.alternate === null && t(f, k), a = o(R, a, A), T === null ? _ = R : T.sibling = R, T = R, k = H;
      }
      if (A === d.length) return n(f, k), Q && Dt(f, A), _;
      if (k === null) {
        for (; A < d.length; A++) k = h(f, d[A], v), k !== null && (a = o(k, a, A), T === null ? _ = k : T.sibling = k, T = k);
        return Q && Dt(f, A), _;
      }
      for (k = r(f, k); A < d.length; A++) H = g(k, f, A, d[A], v), H !== null && (e && H.alternate !== null && k.delete(H.key === null ? A : H.key), a = o(H, a, A), T === null ? _ = H : T.sibling = H, T = H);
      return e && k.forEach(function(oe) {
        return t(f, oe);
      }), Q && Dt(f, A), _;
    }
    function x(f, a, d, v) {
      var _ = Rn(d);
      if (typeof _ != "function") throw Error(S(150));
      if (d = _.call(d), d == null) throw Error(S(151));
      for (var T = _ = null, k = a, A = a = 0, H = null, R = d.next(); k !== null && !R.done; A++, R = d.next()) {
        k.index > A ? (H = k, k = null) : H = k.sibling;
        var oe = p(f, k, R.value, v);
        if (oe === null) {
          k === null && (k = H);
          break;
        }
        e && k && oe.alternate === null && t(f, k), a = o(oe, a, A), T === null ? _ = oe : T.sibling = oe, T = oe, k = H;
      }
      if (R.done) return n(f, k), Q && Dt(f, A), _;
      if (k === null) {
        for (; !R.done; A++, R = d.next()) R = h(f, R.value, v), R !== null && (a = o(R, a, A), T === null ? _ = R : T.sibling = R, T = R);
        return Q && Dt(f, A), _;
      }
      for (k = r(f, k); !R.done; A++, R = d.next()) R = g(k, f, A, R.value, v), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? A : R.key), a = o(R, a, A), T === null ? _ = R : T.sibling = R, T = R);
      return e && k.forEach(function(Ze) {
        return t(f, Ze);
      }), Q && Dt(f, A), _;
    }
    function M(f, a, d, v) {
      if (typeof d == "object" && d !== null && d.type === tn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Pr:
            e: {
              for (var _ = d.key, T = a; T !== null; ) {
                if (T.key === _) {
                  if (_ = d.type, _ === tn) {
                    if (T.tag === 7) {
                      n(f, T.sibling), a = l(T, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (T.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === pt && iu(_) === T.type) {
                    n(f, T.sibling), a = l(T, d.props), a.ref = Fn(f, T, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === tn ? (a = Bt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = sl(d.type, d.key, d.props, null, f.mode, v), v.ref = Fn(f, a, d), v.return = f, f = v);
            }
            return i(f);
          case en:
            e: {
              for (T = d.key; a !== null; ) {
                if (a.key === T) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = ko(d, f.mode, v), a.return = f, f = a;
            }
            return i(f);
          case pt:
            return T = d._init, M(f, a, T(d._payload), v);
        }
        if (Wn(d)) return y(f, a, d, v);
        if (Rn(d)) return x(f, a, d, v);
        Ur(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Eo(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
    }
    return M;
  }
  var En = ac(true), cc = ac(false), Sl = It(null), _l = null, cn = null, Yi = null;
  function Zi() {
    Yi = cn = _l = null;
  }
  function Ji(e) {
    var t = Sl.current;
    V(Sl), e._currentValue = t;
  }
  function si(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function vn(e, t) {
    _l = e, Yi = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = true), e.firstContext = null);
  }
  function De(e) {
    var t = e._currentValue;
    if (Yi !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, cn === null) {
      if (_l === null) throw Error(S(308));
      cn = e, _l.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else cn = cn.next = e;
    return t;
  }
  var Ut = null;
  function qi(e) {
    Ut === null ? Ut = [
      e
    ] : Ut.push(e);
  }
  function fc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, qi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, st(e, r);
  }
  function st(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ht = false;
  function bi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function dc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function rt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, j & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, st(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, qi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, st(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ji(e, n);
    }
  }
  function su(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function El(e, t, n, r) {
    var l = e.updateQueue;
    ht = false;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var u = s, c = u.next;
      u.next = null, i === null ? o = c : i.next = c, i = u;
      var m = e.alternate;
      m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== i && (s === null ? m.firstBaseUpdate = c : s.next = c, m.lastBaseUpdate = u));
    }
    if (o !== null) {
      var h = l.baseState;
      i = 0, m = c = u = null, s = o;
      do {
        var p = s.lane, g = s.eventTime;
        if ((r & p) === p) {
          m !== null && (m = m.next = {
            eventTime: g,
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          });
          e: {
            var y = e, x = s;
            switch (p = t, g = n, x.tag) {
              case 1:
                if (y = x.payload, typeof y == "function") {
                  h = y.call(g, h, p);
                  break e;
                }
                h = y;
                break e;
              case 3:
                y.flags = y.flags & -65537 | 128;
              case 0:
                if (y = x.payload, p = typeof y == "function" ? y.call(g, h, p) : y, p == null) break e;
                h = Y({}, h, p);
                break e;
              case 2:
                ht = true;
            }
          }
          s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [
            s
          ] : p.push(s));
        } else g = {
          eventTime: g,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }, m === null ? (c = m = g, u = h) : m = m.next = g, i |= p;
        if (s = s.next, s === null) {
          if (s = l.shared.pending, s === null) break;
          p = s, s = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
        }
      } while (true);
      if (m === null && (u = h), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Kt |= i, e.lanes = i, e.memoizedState = h;
    }
  }
  function uu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
        l.call(r);
      }
    }
  }
  var kr = {}, Ye = It(kr), hr = It(kr), mr = It(kr);
  function $t(e) {
    if (e === kr) throw Error(S(174));
    return e;
  }
  function es(e, t) {
    switch (B(mr, t), B(hr, e), B(Ye, kr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ho(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ho(t, e);
    }
    V(Ye), B(Ye, t);
  }
  function kn() {
    V(Ye), V(hr), V(mr);
  }
  function pc(e) {
    $t(mr.current);
    var t = $t(Ye.current), n = Ho(t, e.type);
    t !== n && (B(hr, e), B(Ye, n));
  }
  function ts(e) {
    hr.current === e && (V(Ye), V(hr));
  }
  var K = It(0);
  function kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var go = [];
  function ns() {
    for (var e = 0; e < go.length; e++) go[e]._workInProgressVersionPrimary = null;
    go.length = 0;
  }
  var nl = at.ReactCurrentDispatcher, vo = at.ReactCurrentBatchConfig, Qt = 0, X = null, re = null, ie = null, Nl = false, bn = false, yr = 0, wp = 0;
  function fe() {
    throw Error(S(321));
  }
  function rs(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ve(e[n], t[n])) return false;
    return true;
  }
  function ls(e, t, n, r, l, o) {
    if (Qt = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? Ep : kp, e = n(r, l), bn) {
      o = 0;
      do {
        if (bn = false, yr = 0, 25 <= o) throw Error(S(301));
        o += 1, ie = re = null, t.updateQueue = null, nl.current = Np, e = n(r, l);
      } while (bn);
    }
    if (nl.current = Cl, t = re !== null && re.next !== null, Qt = 0, ie = re = X = null, Nl = false, t) throw Error(S(300));
    return e;
  }
  function os() {
    var e = yr !== 0;
    return yr = 0, e;
  }
  function Qe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ie === null ? X.memoizedState = ie = e : ie = ie.next = e, ie;
  }
  function Fe() {
    if (re === null) {
      var e = X.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var t = ie === null ? X.memoizedState : ie.next;
    if (t !== null) ie = t, re = e;
    else {
      if (e === null) throw Error(S(310));
      re = e, e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null
      }, ie === null ? X.memoizedState = ie = e : ie = ie.next = e;
    }
    return ie;
  }
  function gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wo(e) {
    var t = Fe(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = re, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var s = i = null, u = null, c = o;
      do {
        var m = c.lane;
        if ((Qt & m) === m) u !== null && (u = u.next = {
          lane: 0,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
        else {
          var h = {
            lane: m,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null
          };
          u === null ? (s = u = h, i = r) : u = u.next = h, X.lanes |= m, Kt |= m;
        }
        c = c.next;
      } while (c !== null && c !== o);
      u === null ? i = r : u.next = s, Ve(r, t.memoizedState) || (_e = true), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, X.lanes |= o, Kt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function xo(e) {
    var t = Fe(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      Ve(o, t.memoizedState) || (_e = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function hc() {
  }
  function mc(e, t) {
    var n = X, r = Fe(), l = t(), o = !Ve(r.memoizedState, l);
    if (o && (r.memoizedState = l, _e = true), r = r.queue, is(vc.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
      if (n.flags |= 2048, vr(9, gc.bind(null, n, r, l, t), void 0, null), se === null) throw Error(S(349));
      Qt & 30 || yc(n, t, l);
    }
    return l;
  }
  function yc(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = X.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, X.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function gc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wc(t) && xc(e);
  }
  function vc(e, t, n) {
    return n(function() {
      wc(t) && xc(e);
    });
  }
  function wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ve(e, n);
    } catch {
      return true;
    }
  }
  function xc(e) {
    var t = st(e, 1);
    t !== null && Ge(t, e, 1, -1);
  }
  function au(e) {
    var t = Qe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = _p.bind(null, X, e), [
      t.memoizedState,
      e
    ];
  }
  function vr(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = X.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Sc() {
    return Fe().memoizedState;
  }
  function rl(e, t, n, r) {
    var l = Qe();
    X.flags |= e, l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ul(e, t, n, r) {
    var l = Fe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (re !== null) {
      var i = re.memoizedState;
      if (o = i.destroy, r !== null && rs(r, i.deps)) {
        l.memoizedState = vr(t, n, o, r);
        return;
      }
    }
    X.flags |= e, l.memoizedState = vr(1 | t, n, o, r);
  }
  function cu(e, t) {
    return rl(8390656, 8, e, t);
  }
  function is(e, t) {
    return Ul(2048, 8, e, t);
  }
  function _c(e, t) {
    return Ul(4, 2, e, t);
  }
  function Ec(e, t) {
    return Ul(4, 4, e, t);
  }
  function kc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Nc(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, Ul(4, 4, kc.bind(null, t, e), n);
  }
  function ss() {
  }
  function Cc(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rs(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function Tc(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && rs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function Pc(e, t, n) {
    return Qt & 21 ? (Ve(n, t) || (n = Oa(), X.lanes |= n, Kt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, _e = true), e.memoizedState = n);
  }
  function xp(e, t) {
    var n = $;
    $ = n !== 0 && 4 > n ? n : 4, e(true);
    var r = vo.transition;
    vo.transition = {};
    try {
      e(false), t();
    } finally {
      $ = n, vo.transition = r;
    }
  }
  function Ac() {
    return Fe().memoizedState;
  }
  function Sp(e, t, n) {
    var r = Ct(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Mc(e)) Ic(t, n);
    else if (n = fc(e, t, n, r), n !== null) {
      var l = ge();
      Ge(n, e, r, l), Rc(n, t, r);
    }
  }
  function _p(e, t, n) {
    var r = Ct(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Mc(e)) Ic(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, s = o(i, n);
        if (l.hasEagerState = true, l.eagerState = s, Ve(s, i)) {
          var u = t.interleaved;
          u === null ? (l.next = l, qi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = fc(e, t, l, r), n !== null && (l = ge(), Ge(n, e, r, l), Rc(n, t, r));
    }
  }
  function Mc(e) {
    var t = e.alternate;
    return e === X || t !== null && t === X;
  }
  function Ic(e, t) {
    bn = Nl = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Rc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ji(e, n);
    }
  }
  var Cl = {
    readContext: De,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: false
  }, Ep = {
    readContext: De,
    useCallback: function(e, t) {
      return Qe().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: De,
    useEffect: cu,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, rl(4194308, 4, kc.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Qe();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = Qe();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = Sp.bind(null, X, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = Qe();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: au,
    useDebugValue: ss,
    useDeferredValue: function(e) {
      return Qe().memoizedState = e;
    },
    useTransition: function() {
      var e = au(false), t = e[0];
      return e = xp.bind(null, e[1]), Qe().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = X, l = Qe();
      if (Q) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (n = t(), se === null) throw Error(S(349));
        Qt & 30 || yc(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, cu(vc.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, vr(9, gc.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = Qe(), t = se.identifierPrefix;
      if (Q) {
        var n = nt, r = tt;
        n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = wp++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, kp = {
    readContext: De,
    useCallback: Cc,
    useContext: De,
    useEffect: is,
    useImperativeHandle: Nc,
    useInsertionEffect: _c,
    useLayoutEffect: Ec,
    useMemo: Tc,
    useReducer: wo,
    useRef: Sc,
    useState: function() {
      return wo(gr);
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
      var t = Fe();
      return Pc(t, re.memoizedState, e);
    },
    useTransition: function() {
      var e = wo(gr)[0], t = Fe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: hc,
    useSyncExternalStore: mc,
    useId: Ac,
    unstable_isNewReconciler: false
  }, Np = {
    readContext: De,
    useCallback: Cc,
    useContext: De,
    useEffect: is,
    useImperativeHandle: Nc,
    useInsertionEffect: _c,
    useLayoutEffect: Ec,
    useMemo: Tc,
    useReducer: xo,
    useRef: Sc,
    useState: function() {
      return xo(gr);
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
      var t = Fe();
      return re === null ? t.memoizedState = e : Pc(t, re.memoizedState, e);
    },
    useTransition: function() {
      var e = xo(gr)[0], t = Fe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: hc,
    useSyncExternalStore: mc,
    useId: Ac,
    unstable_isNewReconciler: false
  };
  function Ue(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ui(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var $l = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? qt(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge(), l = Ct(e), o = rt(r, l);
      o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ge(t, e, l, r), tl(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge(), l = Ct(e), o = rt(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ge(t, e, l, r), tl(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ge(), r = Ct(e), l = rt(n, r);
      l.tag = 2, t != null && (l.callback = t), t = kt(e, l, r), t !== null && (Ge(t, e, r, n), tl(t, e, r));
    }
  };
  function fu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !cr(n, r) || !cr(l, o) : true;
  }
  function Oc(e, t, n) {
    var r = false, l = At, o = t.contextType;
    return typeof o == "object" && o !== null ? o = De(o) : (l = ke(t) ? Vt : he.current, r = t.contextTypes, o = (r = r != null) ? Sn(e, l) : At), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function du(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $l.enqueueReplaceState(t, t.state, null);
  }
  function ai(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, bi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = De(o) : (o = ke(t) ? Vt : he.current, l.context = Sn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ui(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && $l.enqueueReplaceState(l, l.state, null), El(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nn(e, t) {
    try {
      var n = "", r = t;
      do
        n += bf(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null
    };
  }
  function So(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function ci(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Cp = typeof WeakMap == "function" ? WeakMap : Map;
  function Lc(e, t, n) {
    n = rt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      Pl || (Pl = true, xi = r), ci(e, t);
    }, n;
  }
  function zc(e, t, n) {
    n = rt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ci(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ci(e, t), typeof r != "function" && (Nt === null ? Nt = /* @__PURE__ */ new Set([
        this
      ]) : Nt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      });
    }), n;
  }
  function pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Cp();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = $p.bind(null, e, t, n), t.then(e, e));
  }
  function hu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function mu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, kt(n, t, 1))), n.lanes |= 1), e);
  }
  var Tp = at.ReactCurrentOwner, _e = false;
  function ye(e, t, n, r) {
    t.child = e === null ? cc(t, null, n, r) : En(t, e.child, n, r);
  }
  function yu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return vn(t, l), r = ls(e, t, n, r, o, l), n = os(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (Q && n && Qi(t), t.flags |= 1, ye(e, t, r, l), t.child);
  }
  function gu(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ms(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Dc(e, t, o, r, l)) : (e = sl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cr, n(i, r) && e.ref === t.ref) return ut(e, t, l);
    }
    return t.flags |= 1, e = Tt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Dc(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref) if (_e = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (_e = true);
      else return t.lanes = e.lanes, ut(e, t, l);
    }
    return fi(e, t, n, r, l);
  }
  function Fc(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, B(dn, Ce), Ce |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, B(dn, Ce), Ce |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, B(dn, Ce), Ce |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, B(dn, Ce), Ce |= r;
    return ye(e, t, l, n), t.child;
  }
  function jc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function fi(e, t, n, r, l) {
    var o = ke(n) ? Vt : he.current;
    return o = Sn(t, o), vn(t, l), n = ls(e, t, n, r, o, l), r = os(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (Q && r && Qi(t), t.flags |= 1, ye(e, t, n, l), t.child);
  }
  function vu(e, t, n, r, l) {
    if (ke(n)) {
      var o = true;
      vl(t);
    } else o = false;
    if (vn(t, l), t.stateNode === null) ll(e, t), Oc(t, n, r), ai(t, n, r, l), r = true;
    else if (e === null) {
      var i = t.stateNode, s = t.memoizedProps;
      i.props = s;
      var u = i.context, c = n.contextType;
      typeof c == "object" && c !== null ? c = De(c) : (c = ke(n) ? Vt : he.current, c = Sn(t, c));
      var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== c) && du(t, i, r, c), ht = false;
      var p = t.memoizedState;
      i.state = p, El(t, r, i, l), u = t.memoizedState, s !== r || p !== u || Ee.current || ht ? (typeof m == "function" && (ui(t, n, m, r), u = t.memoizedState), (s = ht || fu(t, n, s, r, p, u, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      i = t.stateNode, dc(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : Ue(t.type, s), i.props = c, h = t.pendingProps, p = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = De(u) : (u = ke(n) ? Vt : he.current, u = Sn(t, u));
      var g = n.getDerivedStateFromProps;
      (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== h || p !== u) && du(t, i, r, u), ht = false, p = t.memoizedState, i.state = p, El(t, r, i, l);
      var y = t.memoizedState;
      s !== h || p !== y || Ee.current || ht ? (typeof g == "function" && (ui(t, n, g, r), y = t.memoizedState), (c = ht || fu(t, n, c, r, p, y, u) || false) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return di(e, t, n, r, o, l);
  }
  function di(e, t, n, r, l, o) {
    jc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ru(t, n, false), ut(e, t, o);
    r = t.stateNode, Tp.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = En(t, e.child, null, o), t.child = En(t, null, s, o)) : ye(e, t, s, o), t.memoizedState = r.state, l && ru(t, n, true), t.child;
  }
  function Uc(e) {
    var t = e.stateNode;
    t.pendingContext ? nu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nu(e, t.context, false), es(e, t.containerInfo);
  }
  function wu(e, t, n, r, l) {
    return _n(), Xi(l), t.flags |= 256, ye(e, t, n, r), t.child;
  }
  var pi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function hi(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function $c(e, t, n) {
    var r = t.pendingProps, l = K.current, o = false, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), s ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(K, l & 1), e === null) return ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Gl(i, r, 0, null), e = Bt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = hi(n), t.memoizedState = pi, e) : us(t, i));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Pp(e, t, i, r, s, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
      var u = {
        mode: "hidden",
        children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Tt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = Tt(s, o) : (o = Bt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? hi(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = pi, r;
    }
    return o = e.child, e = o.sibling, r = Tt(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function us(e, t) {
    return t = Gl({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function $r(e, t, n, r) {
    return r !== null && Xi(r), En(t, e.child, null, n), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pp(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = So(Error(S(422))), $r(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Gl({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Bt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && En(t, e.child, null, i), t.child.memoizedState = hi(i), t.memoizedState = pi, o);
    if (!(t.mode & 1)) return $r(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
      return r = s, o = Error(S(419)), r = So(o, r, void 0), $r(e, t, i, r);
    }
    if (s = (i & e.childLanes) !== 0, _e || s) {
      if (r = se, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, st(e, l), Ge(r, e, l, -1));
      }
      return hs(), r = So(Error(S(421))), $r(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Te = Et(l.nextSibling), Pe = t, Q = true, He = null, e !== null && (Re[Oe++] = tt, Re[Oe++] = nt, Re[Oe++] = Wt, tt = e.id, nt = e.overflow, Wt = t), t = us(t, r.children), t.flags |= 4096, t);
  }
  function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), si(e.return, t, n);
  }
  function _o(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function Hc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ye(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
        else if (e.tag === 19) xu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (B(K, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && kl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _o(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && kl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        _o(t, true, n, null, o);
        break;
      case "together":
        _o(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Kt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
      for (e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ap(e, t, n) {
    switch (t.tag) {
      case 3:
        Uc(t), _n();
        break;
      case 5:
        pc(t);
        break;
      case 1:
        ke(t.type) && vl(t);
        break;
      case 4:
        es(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        B(Sl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (B(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $c(e, t, n) : (B(K, K.current & 1), e = ut(e, t, n), e !== null ? e.sibling : null);
        B(K, K.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Hc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(K, K.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Fc(e, t, n);
    }
    return ut(e, t, n);
  }
  var Bc, mi, Gc, Vc;
  Bc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  mi = function() {
  };
  Gc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, $t(Ye.current);
      var o = null;
      switch (n) {
        case "input":
          l = Fo(e, l), r = Fo(e, r), o = [];
          break;
        case "select":
          l = Y({}, l, {
            value: void 0
          }), r = Y({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = $o(e, l), r = $o(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
      }
      Bo(n, r);
      var i;
      n = null;
      for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
        var s = l[c];
        for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (rr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
      for (c in r) {
        var u = r[c];
        if (s = l == null ? void 0 : l[c], r.hasOwnProperty(c) && u !== s && (u != null || s != null)) if (c === "style") if (s) {
          for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
        } else n || (o || (o = []), o.push(c, n)), n = u;
        else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (rr.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e), o || s === u || (o = [])) : (o = o || []).push(c, u));
      }
      n && (o = o || []).push("style", n);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Vc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function jn(e, t) {
    if (!Q) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Mp(e, t, n) {
    var r = t.pendingProps;
    switch (Ki(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return de(t), null;
      case 1:
        return ke(t.type) && gl(), de(t), null;
      case 3:
        return r = t.stateNode, kn(), V(Ee), V(he), ns(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, He !== null && (Ei(He), He = null))), mi(e, t), de(t), null;
      case 5:
        ts(t);
        var l = $t(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) Gc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(S(166));
            return de(t), null;
          }
          if (e = $t(Ye.current), jr(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ke] = t, r[pr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                G("cancel", r), G("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kn.length; l++) G(Kn[l], r);
                break;
              case "source":
                G("error", r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", r), G("load", r);
                break;
              case "details":
                G("toggle", r);
                break;
              case "input":
                As(r, o), G("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, G("invalid", r);
                break;
              case "textarea":
                Is(r, o), G("invalid", r);
            }
            Bo(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== true && Fr(r.textContent, s, e), l = [
                "children",
                s
              ]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== true && Fr(r.textContent, s, e), l = [
                "children",
                "" + s
              ]) : rr.hasOwnProperty(i) && s != null && i === "onScroll" && G("scroll", r);
            }
            switch (n) {
              case "input":
                Ar(r), Ms(r, o, true);
                break;
              case "textarea":
                Ar(r), Rs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = yl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = va(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ke] = t, e[pr] = r, Bc(e, t, false, false), t.stateNode = e;
            e: {
              switch (i = Go(n, r), n) {
                case "dialog":
                  G("cancel", e), G("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Kn.length; l++) G(Kn[l], e);
                  l = r;
                  break;
                case "source":
                  G("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", e), G("load", e), l = r;
                  break;
                case "details":
                  G("toggle", e), l = r;
                  break;
                case "input":
                  As(e, r), l = Fo(e, r), G("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, l = Y({}, r, {
                    value: void 0
                  }), G("invalid", e);
                  break;
                case "textarea":
                  Is(e, r), l = $o(e, r), G("invalid", e);
                  break;
                default:
                  l = r;
              }
              Bo(n, l), s = l;
              for (o in s) if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style" ? Sa(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && wa(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && lr(e, u) : typeof u == "number" && lr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (rr.hasOwnProperty(o) ? u != null && o === "onScroll" && G("scroll", e) : u != null && Ri(e, o, u, i));
              }
              switch (n) {
                case "input":
                  Ar(e), Ms(e, r, false);
                  break;
                case "textarea":
                  Ar(e), Rs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Pt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? hn(e, !!r.multiple, o, false) : r.defaultValue != null && hn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = yl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return de(t), null;
      case 6:
        if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
          if (n = $t(mr.current), $t(Ye.current), jr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (o = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
              case 3:
                Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && Fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
        }
        return de(t), null;
      case 13:
        if (V(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Q && Te !== null && t.mode & 1 && !(t.flags & 128)) uc(), _n(), t.flags |= 98560, o = false;
          else if (o = jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(S(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
              o[Ke] = t;
            } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            de(t), o = false;
          } else He !== null && (Ei(He), He = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : hs())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
      case 4:
        return kn(), mi(e, t), e === null && fr(t.stateNode.containerInfo), de(t), null;
      case 10:
        return Ji(t.type._context), de(t), null;
      case 17:
        return ke(t.type) && gl(), de(t), null;
      case 19:
        if (V(K), o = t.memoizedState, o === null) return de(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) jn(o, false);
        else {
          if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = kl(e), i !== null) {
              for (t.flags |= 128, jn(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return B(K, K.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && J() > Cn && (t.flags |= 128, r = true, jn(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = kl(i), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), jn(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !Q) return de(t), null;
          } else 2 * J() - o.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = true, jn(o, false), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = K.current, B(K, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
      case 22:
      case 23:
        return ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Ip(e, t) {
    switch (Ki(t), t.tag) {
      case 1:
        return ke(t.type) && gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return kn(), V(Ee), V(he), ns(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ts(t), null;
      case 13:
        if (V(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return V(K), null;
      case 4:
        return kn(), null;
      case 10:
        return Ji(t.type._context), null;
      case 22:
      case 23:
        return ps(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hr = false, pe = false, Rp = typeof WeakSet == "function" ? WeakSet : Set, C = null;
  function fn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Z(e, t, r);
    }
    else n.current = null;
  }
  function yi(e, t, n) {
    try {
      n();
    } catch (r) {
      Z(e, t, r);
    }
  }
  var Su = false;
  function Op(e, t) {
    if (bo = pl, e = Ya(), Wi(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, s = -1, u = -1, c = 0, m = 0, h = e, p = null;
          t: for (; ; ) {
            for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (s = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; ) p = h, h = g;
            for (; ; ) {
              if (h === e) break t;
              if (p === n && ++c === l && (s = i), p === o && ++m === r && (u = i), (g = h.nextSibling) !== null) break;
              h = p, p = h.parentNode;
            }
            h = g;
          }
          n = s === -1 || u === -1 ? null : {
            start: s,
            end: u
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (ei = {
      focusedElem: e,
      selectionRange: n
    }, pl = false, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
    else for (; C !== null; ) {
      t = C;
      try {
        var y = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (y !== null) {
              var x = y.memoizedProps, M = y.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ue(t.type, x), M);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(S(163));
        }
      } catch (v) {
        Z(t, t.return, v);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, C = e;
        break;
      }
      C = t.return;
    }
    return y = Su, Su = false, y;
  }
  function er(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && yi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Hl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function gi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Wc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[pr], delete t[ri], delete t[mp], delete t[yp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _u(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
    else if (r !== 4 && (e = e.child, e !== null)) for (vi(e, t, n), e = e.sibling; e !== null; ) vi(e, t, n), e = e.sibling;
  }
  function wi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
  }
  var ue = null, $e = false;
  function ft(e, t, n) {
    for (n = n.child; n !== null; ) Kc(e, t, n), n = n.sibling;
  }
  function Kc(e, t, n) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
      Xe.onCommitFiberUnmount(Ol, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        pe || fn(n, t);
      case 6:
        var r = ue, l = $e;
        ue = null, ft(e, t, n), ue = r, $e = l, ue !== null && ($e ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
        break;
      case 18:
        ue !== null && ($e ? (e = ue, n = n.stateNode, e.nodeType === 8 ? mo(e.parentNode, n) : e.nodeType === 1 && mo(e, n), ur(e)) : mo(ue, n.stateNode));
        break;
      case 4:
        r = ue, l = $e, ue = n.stateNode.containerInfo, $e = true, ft(e, t, n), ue = r, $e = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && yi(n, t, i), l = l.next;
          } while (l !== r);
        }
        ft(e, t, n);
        break;
      case 1:
        if (!pe && (fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
        ft(e, t, n);
        break;
      case 21:
        ft(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, ft(e, t, n), pe = r) : ft(e, t, n);
        break;
      default:
        ft(e, t, n);
    }
  }
  function Eu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rp()), t.forEach(function(r) {
        var l = Bp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function je(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ue = s.stateNode, $e = false;
              break e;
            case 3:
              ue = s.stateNode.containerInfo, $e = true;
              break e;
            case 4:
              ue = s.stateNode.containerInfo, $e = true;
              break e;
          }
          s = s.return;
        }
        if (ue === null) throw Error(S(160));
        Kc(o, i, l), ue = null, $e = false;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null;
      } catch (c) {
        Z(l, t, c);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xc(t, e), t = t.sibling;
  }
  function Xc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (je(t, e), We(e), r & 4) {
          try {
            er(3, e, e.return), Hl(3, e);
          } catch (x) {
            Z(e, e.return, x);
          }
          try {
            er(5, e, e.return);
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        break;
      case 1:
        je(t, e), We(e), r & 512 && n !== null && fn(n, n.return);
        break;
      case 5:
        if (je(t, e), We(e), r & 512 && n !== null && fn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            lr(l, "");
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, s = e.type, u = e.updateQueue;
          if (e.updateQueue = null, u !== null) try {
            s === "input" && o.type === "radio" && o.name != null && ya(l, o), Go(s, i);
            var c = Go(s, o);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i], h = u[i + 1];
              m === "style" ? Sa(l, h) : m === "dangerouslySetInnerHTML" ? wa(l, h) : m === "children" ? lr(l, h) : Ri(l, m, h, c);
            }
            switch (s) {
              case "input":
                jo(l, o);
                break;
              case "textarea":
                ga(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? hn(l, !!o.multiple, g, false) : p !== !!o.multiple && (o.defaultValue != null ? hn(l, !!o.multiple, o.defaultValue, true) : hn(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[pr] = o;
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        break;
      case 6:
        if (je(t, e), We(e), r & 4) {
          if (e.stateNode === null) throw Error(S(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        break;
      case 3:
        if (je(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ur(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
        break;
      case 4:
        je(t, e), We(e);
        break;
      case 13:
        je(t, e), We(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (fs = J())), r & 4 && Eu(e);
        break;
      case 22:
        if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (c = pe) || m, je(t, e), pe = c) : je(t, e), We(e), r & 8192) {
          if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (C = e, m = e.child; m !== null; ) {
            for (h = C = m; C !== null; ) {
              switch (p = C, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, p, p.return);
                  break;
                case 1:
                  fn(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  fn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Nu(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, C = g) : Nu(h);
            }
            m = m.sibling;
          }
          e: for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = xa("display", i));
                } catch (x) {
                  Z(e, e.return, x);
                }
              }
            } else if (h.tag === 6) {
              if (m === null) try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e) break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e) break e;
              m === h && (m = null), h = h.return;
            }
            m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
          }
        }
        break;
      case 19:
        je(t, e), We(e), r & 4 && Eu(e);
        break;
      case 21:
        break;
      default:
        je(t, e), We(e);
    }
  }
  function We(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Qc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(S(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (lr(l, ""), r.flags &= -33);
            var o = _u(e);
            wi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, s = _u(e);
            vi(e, s, i);
            break;
          default:
            throw Error(S(161));
        }
      } catch (u) {
        Z(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lp(e, t, n) {
    C = e, Yc(e);
  }
  function Yc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Hr;
        if (!i) {
          var s = l.alternate, u = s !== null && s.memoizedState !== null || pe;
          s = Hr;
          var c = pe;
          if (Hr = i, (pe = u) && !c) for (C = l; C !== null; ) i = C, u = i.child, i.tag === 22 && i.memoizedState !== null ? Cu(l) : u !== null ? (u.return = i, C = u) : Cu(l);
          for (; o !== null; ) C = o, Yc(o), o = o.sibling;
          C = l, Hr = s, pe = c;
        }
        ku(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : ku(e);
    }
  }
  function ku(e) {
    for (; C !== null; ) {
      var t = C;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && uu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                uu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && ur(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
          pe || t.flags & 512 && gi(t);
        } catch (p) {
          Z(t, t.return, p);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function Nu(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function Cu(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Hl(4, t);
            } catch (u) {
              Z(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                Z(t, l, u);
              }
            }
            var o = t.return;
            try {
              gi(t);
            } catch (u) {
              Z(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              gi(t);
            } catch (u) {
              Z(t, i, u);
            }
        }
      } catch (u) {
        Z(t, t.return, u);
      }
      if (t === e) {
        C = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, C = s;
        break;
      }
      C = t.return;
    }
  }
  var zp = Math.ceil, Tl = at.ReactCurrentDispatcher, as = at.ReactCurrentOwner, ze = at.ReactCurrentBatchConfig, j = 0, se = null, te = null, ae = 0, Ce = 0, dn = It(0), le = 0, wr = null, Kt = 0, Bl = 0, cs = 0, tr = null, Se = null, fs = 0, Cn = 1 / 0, be = null, Pl = false, xi = null, Nt = null, Br = false, vt = null, Al = 0, nr = 0, Si = null, ol = -1, il = 0;
  function ge() {
    return j & 6 ? J() : ol !== -1 ? ol : ol = J();
  }
  function Ct(e) {
    return e.mode & 1 ? j & 2 && ae !== 0 ? ae & -ae : vp.transition !== null ? (il === 0 && (il = Oa()), il) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $a(e.type)), e) : 1;
  }
  function Ge(e, t, n, r) {
    if (50 < nr) throw nr = 0, Si = null, Error(S(185));
    Sr(e, n, r), (!(j & 2) || e !== se) && (e === se && (!(j & 2) && (Bl |= n), le === 4 && yt(e, ae)), Ne(e, r), n === 1 && j === 0 && !(t.mode & 1) && (Cn = J() + 500, jl && Rt()));
  }
  function Ne(e, t) {
    var n = e.callbackNode;
    vd(e, t);
    var r = dl(e, e === se ? ae : 0);
    if (r === 0) n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && zs(n), t === 1) e.tag === 0 ? gp(Tu.bind(null, e)) : oc(Tu.bind(null, e)), pp(function() {
        !(j & 6) && Rt();
      }), n = null;
      else {
        switch (La(r)) {
          case 1:
            n = Fi;
            break;
          case 4:
            n = Ia;
            break;
          case 16:
            n = fl;
            break;
          case 536870912:
            n = Ra;
            break;
          default:
            n = fl;
        }
        n = rf(n, Zc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Zc(e, t) {
    if (ol = -1, il = 0, j & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (wn() && e.callbackNode !== n) return null;
    var r = dl(e, e === se ? ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
    else {
      t = r;
      var l = j;
      j |= 2;
      var o = qc();
      (se !== e || ae !== t) && (be = null, Cn = J() + 500, Ht(e, t));
      do
        try {
          jp();
          break;
        } catch (s) {
          Jc(e, s);
        }
      while (true);
      Zi(), Tl.current = o, j = l, te !== null ? t = 0 : (se = null, ae = 0, t = le);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xo(e), l !== 0 && (r = l, t = _i(e, l))), t === 1) throw n = wr, Ht(e, 0), yt(e, r), Ne(e, J()), n;
      if (t === 6) yt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Dp(l) && (t = Ml(e, r), t === 2 && (o = Xo(e), o !== 0 && (r = o, t = _i(e, o))), t === 1)) throw n = wr, Ht(e, 0), yt(e, r), Ne(e, J()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Ft(e, Se, be);
            break;
          case 3:
            if (yt(e, r), (r & 130023424) === r && (t = fs + 500 - J(), 10 < t)) {
              if (dl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ge(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ni(Ft.bind(null, e, Se, be), t);
              break;
            }
            Ft(e, Se, be);
            break;
          case 4:
            if (yt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Be(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zp(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ni(Ft.bind(null, e, Se, be), r);
              break;
            }
            Ft(e, Se, be);
            break;
          case 5:
            Ft(e, Se, be);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return Ne(e, J()), e.callbackNode === n ? Zc.bind(null, e) : null;
  }
  function _i(e, t) {
    var n = tr;
    return e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256), e = Ml(e, t), e !== 2 && (t = Se, Se = n, t !== null && Ei(t)), e;
  }
  function Ei(e) {
    Se === null ? Se = e : Se.push.apply(Se, e);
  }
  function Dp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ve(o(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function yt(e, t) {
    for (t &= ~cs, t &= ~Bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Be(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Tu(e) {
    if (j & 6) throw Error(S(327));
    wn();
    var t = dl(e, 0);
    if (!(t & 1)) return Ne(e, J()), null;
    var n = Ml(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xo(e);
      r !== 0 && (t = r, n = _i(e, r));
    }
    if (n === 1) throw n = wr, Ht(e, 0), yt(e, t), Ne(e, J()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, Se, be), Ne(e, J()), null;
  }
  function ds(e, t) {
    var n = j;
    j |= 1;
    try {
      return e(t);
    } finally {
      j = n, j === 0 && (Cn = J() + 500, jl && Rt());
    }
  }
  function Xt(e) {
    vt !== null && vt.tag === 0 && !(j & 6) && wn();
    var t = j;
    j |= 1;
    var n = ze.transition, r = $;
    try {
      if (ze.transition = null, $ = 1, e) return e();
    } finally {
      $ = r, ze.transition = n, j = t, !(j & 6) && Rt();
    }
  }
  function ps() {
    Ce = dn.current, V(dn);
  }
  function Ht(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, dp(n)), te !== null) for (n = te.return; n !== null; ) {
      var r = n;
      switch (Ki(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && gl();
          break;
        case 3:
          kn(), V(Ee), V(he), ns();
          break;
        case 5:
          ts(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          V(K);
          break;
        case 19:
          V(K);
          break;
        case 10:
          Ji(r.type._context);
          break;
        case 22:
        case 23:
          ps();
      }
      n = n.return;
    }
    if (se = e, te = e = Tt(e.current, null), ae = Ce = t, le = 0, wr = null, cs = Bl = Kt = 0, Se = tr = null, Ut !== null) {
      for (t = 0; t < Ut.length; t++) if (n = Ut[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      Ut = null;
    }
    return e;
  }
  function Jc(e, t) {
    do {
      var n = te;
      try {
        if (Zi(), nl.current = Cl, Nl) {
          for (var r = X.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Nl = false;
        }
        if (Qt = 0, ie = re = X = null, bn = false, yr = 0, as.current = null, n === null || n.return === null) {
          le = 1, wr = t, te = null;
          break;
        }
        e: {
          var o = e, i = n.return, s = n, u = t;
          if (t = ae, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            var c = u, m = s, h = m.tag;
            if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
              var p = m.alternate;
              p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var g = hu(i);
            if (g !== null) {
              g.flags &= -257, mu(g, i, s, o, t), g.mode & 1 && pu(o, c, t), t = g, u = c;
              var y = t.updateQueue;
              if (y === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(u), t.updateQueue = x;
              } else y.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                pu(o, c, t), hs();
                break e;
              }
              u = Error(S(426));
            }
          } else if (Q && s.mode & 1) {
            var M = hu(i);
            if (M !== null) {
              !(M.flags & 65536) && (M.flags |= 256), mu(M, i, s, o, t), Xi(Nn(u, s));
              break e;
            }
          }
          o = u = Nn(u, s), le !== 4 && (le = 2), tr === null ? tr = [
            o
          ] : tr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var f = Lc(o, u, t);
                su(o, f);
                break e;
              case 1:
                s = u;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Nt === null || !Nt.has(d)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var v = zc(o, s, t);
                  su(o, v);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ef(n);
      } catch (_) {
        t = _, te === n && n !== null && (te = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function qc() {
    var e = Tl.current;
    return Tl.current = Cl, e === null ? Cl : e;
  }
  function hs() {
    (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Kt & 268435455) && !(Bl & 268435455) || yt(se, ae);
  }
  function Ml(e, t) {
    var n = j;
    j |= 2;
    var r = qc();
    (se !== e || ae !== t) && (be = null, Ht(e, t));
    do
      try {
        Fp();
        break;
      } catch (l) {
        Jc(e, l);
      }
    while (true);
    if (Zi(), j = n, Tl.current = r, te !== null) throw Error(S(261));
    return se = null, ae = 0, le;
  }
  function Fp() {
    for (; te !== null; ) bc(te);
  }
  function jp() {
    for (; te !== null && !ad(); ) bc(te);
  }
  function bc(e) {
    var t = nf(e.alternate, e, Ce);
    e.memoizedProps = e.pendingProps, t === null ? ef(e) : te = t, as.current = null;
  }
  function ef(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Ip(n, t), n !== null) {
          n.flags &= 32767, te = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          le = 6, te = null;
          return;
        }
      } else if (n = Mp(n, t, Ce), n !== null) {
        te = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        te = t;
        return;
      }
      te = t = e;
    } while (t !== null);
    le === 0 && (le = 5);
  }
  function Ft(e, t, n) {
    var r = $, l = ze.transition;
    try {
      ze.transition = null, $ = 1, Up(e, t, n, r);
    } finally {
      ze.transition = l, $ = r;
    }
    return null;
  }
  function Up(e, t, n, r) {
    do
      wn();
    while (vt !== null);
    if (j & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (wd(e, o), e === se && (te = se = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Br || (Br = true, rf(fl, function() {
      return wn(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ze.transition, ze.transition = null;
      var i = $;
      $ = 1;
      var s = j;
      j |= 4, as.current = null, Op(e, n), Xc(n, e), op(ei), pl = !!bo, ei = bo = null, e.current = n, Lp(n), cd(), j = s, $ = i, ze.transition = o;
    } else e.current = n;
    if (Br && (Br = false, vt = e, Al = l), o = e.pendingLanes, o === 0 && (Nt = null), pd(n.stateNode), Ne(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (Pl) throw Pl = false, e = xi, xi = null, e;
    return Al & 1 && e.tag !== 0 && wn(), o = e.pendingLanes, o & 1 ? e === Si ? nr++ : (nr = 0, Si = e) : nr = 0, Rt(), null;
  }
  function wn() {
    if (vt !== null) {
      var e = La(Al), t = ze.transition, n = $;
      try {
        if (ze.transition = null, $ = 16 > e ? 16 : e, vt === null) var r = false;
        else {
          if (e = vt, vt = null, Al = 0, j & 6) throw Error(S(331));
          var l = j;
          for (j |= 4, C = e.current; C !== null; ) {
            var o = C, i = o.child;
            if (C.flags & 16) {
              var s = o.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var c = s[u];
                  for (C = c; C !== null; ) {
                    var m = C;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        er(8, m, o);
                    }
                    var h = m.child;
                    if (h !== null) h.return = m, C = h;
                    else for (; C !== null; ) {
                      m = C;
                      var p = m.sibling, g = m.return;
                      if (Wc(m), m === c) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, C = p;
                        break;
                      }
                      C = g;
                    }
                  }
                }
                var y = o.alternate;
                if (y !== null) {
                  var x = y.child;
                  if (x !== null) {
                    y.child = null;
                    do {
                      var M = x.sibling;
                      x.sibling = null, x = M;
                    } while (x !== null);
                  }
                }
                C = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
            else e: for (; C !== null; ) {
              if (o = C, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  er(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, C = f;
                break e;
              }
              C = o.return;
            }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            i = C;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d;
            else e: for (i = a; C !== null; ) {
              if (s = C, s.flags & 2048) try {
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hl(9, s);
                }
              } catch (_) {
                Z(s, s.return, _);
              }
              if (s === i) {
                C = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                v.return = s.return, C = v;
                break e;
              }
              C = s.return;
            }
          }
          if (j = l, Rt(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
            Xe.onPostCommitFiberRoot(Ol, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        $ = n, ze.transition = t;
      }
    }
    return false;
  }
  function Pu(e, t, n) {
    t = Nn(n, t), t = Lc(e, t, 1), e = kt(e, t, 1), t = ge(), e !== null && (Sr(e, 1, t), Ne(e, t));
  }
  function Z(e, t, n) {
    if (e.tag === 3) Pu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
          e = Nn(n, e), e = zc(t, e, 1), t = kt(t, e, 1), e = ge(), t !== null && (Sr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function $p(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ge(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ae & n) === n && (le === 4 || le === 3 && (ae & 130023424) === ae && 500 > J() - fs ? Ht(e, 0) : cs |= n), Ne(e, t);
  }
  function tf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Rr, Rr <<= 1, !(Rr & 130023424) && (Rr = 4194304)) : t = 1);
    var n = ge();
    e = st(e, t), e !== null && (Sr(e, t, n), Ne(e, n));
  }
  function Hp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), tf(e, n);
  }
  function Bp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    r !== null && r.delete(t), tf(e, n);
  }
  var nf;
  nf = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) _e = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return _e = false, Ap(e, t, n);
      _e = !!(e.flags & 131072);
    }
    else _e = false, Q && t.flags & 1048576 && ic(t, xl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ll(e, t), e = t.pendingProps;
        var l = Sn(t, he.current);
        vn(t, n), l = ls(null, t, r, e, l, n);
        var o = os();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = true, vl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, bi(t), l.updater = $l, t.stateNode = l, l._reactInternals = t, ai(t, r, e, n), t = di(null, t, r, true, o, n)) : (t.tag = 0, Q && o && Qi(t), ye(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Vp(r), e = Ue(r, e), l) {
            case 0:
              t = fi(null, t, r, e, n);
              break e;
            case 1:
              t = vu(null, t, r, e, n);
              break e;
            case 11:
              t = yu(null, t, r, e, n);
              break e;
            case 14:
              t = gu(null, t, r, Ue(r.type, e), n);
              break e;
          }
          throw Error(S(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), fi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), vu(e, t, r, l, n);
      case 3:
        e: {
          if (Uc(t), e === null) throw Error(S(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, dc(e, t), El(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Nn(Error(S(423)), t), t = wu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Nn(Error(S(424)), t), t = wu(e, t, r, n, l);
            break e;
          } else for (Te = Et(t.stateNode.containerInfo.firstChild), Pe = t, Q = true, He = null, n = cc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
              t = ut(e, t, n);
              break e;
            }
            ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return pc(t), e === null && ii(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ti(r, l) ? i = null : o !== null && ti(r, o) && (t.flags |= 32), jc(e, t), ye(e, t, i, n), t.child;
      case 6:
        return e === null && ii(t), null;
      case 13:
        return $c(e, t, n);
      case 4:
        return es(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), yu(e, t, r, l, n);
      case 7:
        return ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, B(Sl, r._currentValue), r._currentValue = i, o !== null) if (Ve(o.value, i)) {
            if (o.children === l.children && !Ee.current) {
              t = ut(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var s = o.dependencies;
            if (s !== null) {
              i = o.child;
              for (var u = s.firstContext; u !== null; ) {
                if (u.context === r) {
                  if (o.tag === 1) {
                    u = rt(-1, n & -n), u.tag = 2;
                    var c = o.updateQueue;
                    if (c !== null) {
                      c = c.shared;
                      var m = c.pending;
                      m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u;
                    }
                  }
                  o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), si(o.return, n, t), s.lanes |= n;
                  break;
                }
                u = u.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(S(341));
              i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), si(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          ye(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, vn(t, n), l = De(l), r = r(l), t.flags |= 1, ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Ue(r, t.pendingProps), l = Ue(r.type, l), gu(e, t, r, l, n);
      case 15:
        return Dc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), ll(e, t), t.tag = 1, ke(r) ? (e = true, vl(t)) : e = false, vn(t, n), Oc(t, r, l), ai(t, r, l, n), di(null, t, r, true, e, n);
      case 19:
        return Hc(e, t, n);
      case 22:
        return Fc(e, t, n);
    }
    throw Error(S(156, t.tag));
  };
  function rf(e, t) {
    return Ma(e, t);
  }
  function Gp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(e, t, n, r) {
    return new Gp(e, t, n, r);
  }
  function ms(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vp(e) {
    if (typeof e == "function") return ms(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Li) return 11;
      if (e === zi) return 14;
    }
    return 2;
  }
  function Tt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function sl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ms(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case tn:
        return Bt(n.children, l, o, t);
      case Oi:
        i = 8, l |= 8;
        break;
      case Oo:
        return e = Le(12, n, t, l | 2), e.elementType = Oo, e.lanes = o, e;
      case Lo:
        return e = Le(13, n, t, l), e.elementType = Lo, e.lanes = o, e;
      case zo:
        return e = Le(19, n, t, l), e.elementType = zo, e.lanes = o, e;
      case pa:
        return Gl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case fa:
            i = 10;
            break e;
          case da:
            i = 9;
            break e;
          case Li:
            i = 11;
            break e;
          case zi:
            i = 14;
            break e;
          case pt:
            i = 16, r = null;
            break e;
        }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
    return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Bt(e, t, n, r) {
    return e = Le(7, e, r, t), e.lanes = n, e;
  }
  function Gl(e, t, n, r) {
    return e = Le(22, e, r, t), e.elementType = pa, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function Eo(e, t, n) {
    return e = Le(6, e, null, t), e.lanes = n, e;
  }
  function ko(e, t, n) {
    return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Wp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ro(0), this.expirationTimes = ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ys(e, t, n, r, l, o, i, s, u) {
    return e = new Wp(e, t, n, s, u), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, bi(o), e;
  }
  function Qp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: en,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function lf(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(S(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(S(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ke(n)) return lc(e, n, t);
    }
    return t;
  }
  function of(e, t, n, r, l, o, i, s, u) {
    return e = ys(n, r, true, e, l, o, i, s, u), e.context = lf(null), n = e.current, r = ge(), l = Ct(n), o = rt(r, l), o.callback = t ?? null, kt(n, o, l), e.current.lanes = l, Sr(e, l, r), Ne(e, r), e;
  }
  function Vl(e, t, n, r) {
    var l = t.current, o = ge(), i = Ct(l);
    return n = lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(o, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kt(l, t, i), e !== null && (Ge(e, l, i, o), tl(e, l, i)), i;
  }
  function Il(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Au(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gs(e, t) {
    Au(e, t), (e = e.alternate) && Au(e, t);
  }
  function Kp() {
    return null;
  }
  var sf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function vs(e) {
    this._internalRoot = e;
  }
  Wl.prototype.render = vs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    Vl(e, t, null, null);
  };
  Wl.prototype.unmount = vs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xt(function() {
        Vl(null, e, null, null);
      }), t[it] = null;
    }
  };
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fa();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++) ;
      mt.splice(n, 0, e), n === 0 && Ua(e);
    }
  };
  function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ql(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Mu() {
  }
  function Xp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var c = Il(i);
          o.call(c);
        };
      }
      var i = of(t, r, e, 0, null, false, false, "", Mu);
      return e._reactRootContainer = i, e[it] = i.current, fr(e.nodeType === 8 ? e.parentNode : e), Xt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = Il(u);
        s.call(c);
      };
    }
    var u = ys(e, 0, false, null, null, false, false, "", Mu);
    return e._reactRootContainer = u, e[it] = u.current, fr(e.nodeType === 8 ? e.parentNode : e), Xt(function() {
      Vl(t, u, n, r);
    }), u;
  }
  function Kl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var u = Il(i);
          s.call(u);
        };
      }
      Vl(t, i, e, l);
    } else i = Xp(n, t, e, l, r);
    return Il(i);
  }
  za = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 && (ji(t, n | 1), Ne(t, J()), !(j & 6) && (Cn = J() + 500, Rt()));
        }
        break;
      case 13:
        Xt(function() {
          var r = st(e, 1);
          if (r !== null) {
            var l = ge();
            Ge(r, e, 1, l);
          }
        }), gs(e, 1);
    }
  };
  Ui = function(e) {
    if (e.tag === 13) {
      var t = st(e, 134217728);
      if (t !== null) {
        var n = ge();
        Ge(t, e, 134217728, n);
      }
      gs(e, 134217728);
    }
  };
  Da = function(e) {
    if (e.tag === 13) {
      var t = Ct(e), n = st(e, t);
      if (n !== null) {
        var r = ge();
        Ge(n, e, t, r);
      }
      gs(e, t);
    }
  };
  Fa = function() {
    return $;
  };
  ja = function(e, t) {
    var n = $;
    try {
      return $ = e, t();
    } finally {
      $ = n;
    }
  };
  Wo = function(e, t, n) {
    switch (t) {
      case "input":
        if (jo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Fl(r);
              if (!l) throw Error(S(90));
              ma(r), jo(r, l);
            }
          }
        }
        break;
      case "textarea":
        ga(e, n);
        break;
      case "select":
        t = n.value, t != null && hn(e, !!n.multiple, t, false);
    }
  };
  ka = ds;
  Na = Xt;
  var Yp = {
    usingClientEntryPoint: false,
    Events: [
      Er,
      on,
      Fl,
      _a,
      Ea,
      ds
    ]
  }, Un = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Zp = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Pa(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || Kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gr.isDisabled && Gr.supportsFiber) try {
      Ol = Gr.inject(Zp), Xe = Gr;
    } catch {
    }
  }
  Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yp;
  Me.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t)) throw Error(S(200));
    return Qp(e, t, null, n);
  };
  Me.createRoot = function(e, t) {
    if (!ws(e)) throw Error(S(299));
    var n = false, r = "", l = sf;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ys(e, 1, false, null, null, n, false, r, l), e[it] = t.current, fr(e.nodeType === 8 ? e.parentNode : e), new vs(t);
  };
  Me.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = Pa(t), e = e === null ? null : e.stateNode, e;
  };
  Me.flushSync = function(e) {
    return Xt(e);
  };
  Me.hydrate = function(e, t, n) {
    if (!Ql(t)) throw Error(S(200));
    return Kl(null, e, t, true, n);
  };
  Me.hydrateRoot = function(e, t, n) {
    if (!ws(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", i = sf;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = of(t, null, e, 1, n ?? null, l, false, o, i), e[it] = t.current, fr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Wl(t);
  };
  Me.render = function(e, t, n) {
    if (!Ql(t)) throw Error(S(200));
    return Kl(null, e, t, false, n);
  };
  Me.unmountComponentAtNode = function(e) {
    if (!Ql(e)) throw Error(S(40));
    return e._reactRootContainer ? (Xt(function() {
      Kl(null, null, e, false, function() {
        e._reactRootContainer = null, e[it] = null;
      });
    }), true) : false;
  };
  Me.unstable_batchedUpdates = ds;
  Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ql(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Kl(e, t, n, false, r);
  };
  Me.version = "18.3.1-next-f1338f8080-20240426";
  function uf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf);
    } catch (e) {
      console.error(e);
    }
  }
  uf(), sa.exports = Me;
  var Jp = sa.exports, af, Iu = Jp;
  af = Iu.createRoot, Iu.hydrateRoot;
  const Yt = Math.PI / 180, Zt = 1495978707e-1, lt = 864e5, qp = 86400, cf = 946728e6, bp = 36525, eh = 357.5291, th = 35999.0503, nh = 1.9146, rh = 4817e-6, lh = 100.4665, oh = 36000.7698, ih = 1.00014, sh = 0.01671, No = [
    {
      name: "Mercury",
      radiusAU: 0.387,
      color: "#b5b5b5",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Solarsystemscope_texture_2k_mercury.jpg",
      size: 0.012,
      L0: 252.25,
      n: 4.09234
    },
    {
      name: "Venus",
      radiusAU: 0.723,
      color: "#e8cda0",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Solarsystemscope_texture_2k_venus_surface.jpg",
      size: 0.03,
      L0: 181.98,
      n: 1.60214
    },
    {
      name: "Earth",
      radiusAU: 1,
      color: "#4fa3e0",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg",
      size: 0.032,
      L0: 100.46,
      n: 0.98563
    },
    {
      name: "Mars",
      radiusAU: 1.524,
      color: "#c1440e",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Solarsystemscope_texture_2k_mars.jpg",
      size: 0.017,
      L0: 355.43,
      n: 0.52403
    },
    {
      name: "Jupiter",
      radiusAU: 5.203,
      color: "#c88b3a",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Solarsystemscope_texture_2k_jupiter.jpg",
      size: 0.12,
      L0: 34.4,
      n: 0.08309
    },
    {
      name: "Saturn",
      radiusAU: 9.537,
      color: "#e4d191",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Solarsystemscope_texture_2k_saturn.jpg",
      size: 0.1,
      L0: 49.94,
      n: 0.03346
    },
    {
      name: "Uranus",
      radiusAU: 19.19,
      color: "#7de8e8",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
      size: 0.055,
      L0: 313.23,
      n: 0.01172
    },
    {
      name: "Neptune",
      radiusAU: 30.07,
      color: "#4b70dd",
      textureUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg",
      size: 0.052,
      L0: 304.88,
      n: 598e-5
    }
  ], uh = [
    1,
    0.267,
    0.133
  ], ah = [
    1,
    0.667,
    0
  ], ch = [
    0.533,
    0.8,
    1
  ], fh = [
    0.2,
    0.267,
    0.333
  ], $n = [
    1,
    1,
    1
  ], Ru = [
    0.2,
    0.267,
    0.333
  ], dh = 0.01, xs = 0.5, ph = 0.01, hh = 8, mh = 0.05, yh = 16768324, gh = 16755200, vh = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg", wh = 16777215, xh = 0.3, Sh = 16774368, _h = 2, Eh = 200, kh = 60, Nh = 1e-3, Ch = 1e3, Ou = 0.8, Th = 1.5, Ph = 0.05, Ah = 0.1, Mh = 200, Ih = 4, Rh = 18, Vr = 0.01, Oh = 10, Gt = 3, Ss = 2, Hn = 64, Lh = 0.05, zh = [
    5129551,
    5394243,
    4936532,
    4281172,
    4543055,
    4801601
  ], ff = 0.05, df = 0.1, Dh = 12, Fh = 0.05, pf = 0.01, jh = 2, Uh = 3e-3, $h = 2e-3, Hh = 0.35, Bh = 3359829, Gh = 8, Vh = 256, Lu = 32, zu = 32, Du = 30, Co = 0.35, Wh = 65484, Qh = -0.1, Kh = 999, Fu = 60, Xh = 0.5, Yh = 0.02, Zh = 0.08, To = 180, ju = 30, Jh = 0.4, Po = 2, qh = 150, bh = 0.08, em = 0.12, tm = 0.02, nm = 0.04, rm = 8, lm = 0.6, om = 0.3, dt = 8, im = 0.82, sm = 0.18, um = 0.25, Uu = 0.25, am = 0.015, cm = 20, fm = 800, dm = 3e-3, pm = 3e-3, hm = 0.6, mm = 0.4, Bn = 32, ym = 3, gm = "#FF4422", vm = 36e5, $u = 7, wm = 0.2, xm = "https://api.nasa.gov/neo/rest/v1/feed", Sm = "https://ssd-api.jpl.nasa.gov", _m = "/neo_snapshot.json", Em = 1e4, km = 30, hf = 30, Nm = "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=", mf = 2e3, Hu = 1e6, yf = 80, Cm = "https://github.com/anurag-as/Bonsai", Tm = 3e3, Bu = {
    0: "R-tree",
    1: "KD-tree",
    2: "Quadtree",
    3: "Grid"
  }, Pm = {
    0: "Balanced for mixed workloads \u2014 good range and kNN performance",
    1: "Optimised for kNN queries on uniformly distributed data",
    2: "Efficient for clustered 2D/3D data with spatial locality",
    3: "Fast uniform-grid lookups \u2014 best for evenly spaced data"
  }, Am = [
    {
      category: "hazardous",
      color: "#FF4422",
      label: "Potentially hazardous"
    },
    {
      category: "close005",
      color: "#FFAA00",
      label: "Within 0.05 AU"
    },
    {
      category: "close010",
      color: "#88CCFF",
      label: "Within 0.1 AU"
    },
    {
      category: "far",
      color: "#334455",
      label: "Beyond 0.1 AU"
    }
  ], Gu = [
    "hazardous",
    "close005",
    "close010",
    "far"
  ];
  function Mm(e) {
    if (e.hazardous) return "hazardous";
    const t = e.missDistKm / Zt;
    return t <= ff ? "close005" : t <= df ? "close010" : "far";
  }
  function pn(e) {
    const t = (e.getTime() - cf) / lt / bp, n = ((eh + th * t) % 360 + 360) % 360 * Yt, r = (nh - rh * t) * Math.sin(n), l = ((lh + oh * t + r) % 360 + 360) % 360 * Yt, o = ih - sh * Math.cos(n);
    return [
      o * Math.cos(l),
      0,
      o * Math.sin(l)
    ];
  }
  function gf(e, t, n, r, l = 0, o = 0) {
    if (t <= 0 || n <= 0 || !isFinite(t) || !isFinite(n) || !isFinite(r)) throw new Error(`neoPosition: invalid inputs \u2014 missDistanceKm=${t}, velocityKmS=${n}, daysFromNow=${r}`);
    const i = pn(e), s = t / Zt, u = n * qp * r / Zt, c = s + u, [m, , h] = i, p = Math.sqrt(m * m + h * h);
    if (p < 1e-10) throw new Error(`neoPosition: degenerate Earth position (earthMag=${p})`);
    const g = m / p, y = h / p, x = Math.cos(l) * g - Math.sin(l) * y, M = Math.cos(l) * y + Math.sin(l) * g, f = Math.cos(o), a = Math.sin(o);
    return [
      i[0] + c * x * f,
      i[1] + c * a,
      i[2] + c * M * f
    ];
  }
  function vf(e, t) {
    const n = e * Yt, r = t * Yt;
    return [
      Math.cos(r) * Math.cos(n),
      Math.cos(r) * Math.sin(n),
      Math.sin(r)
    ];
  }
  function zt(e) {
    if (e.hazardous) return uh;
    const t = e.missDistKm / Zt;
    return t <= ff ? ah : t <= df ? ch : fh;
  }
  let Wr = null, Ao = null;
  const wf = Gt * Ss;
  function Im(e) {
    let t = e;
    return () => (t = t * 1664525 + 1013904223 & 4294967295, (t >>> 0) / 4294967296);
  }
  function Rm(e, t, n, r, l) {
    const o = Im(l), i = t + r / 2, s = n + r / 2, u = r / 2 - 2, c = Math.PI * 2 / dt, m = [];
    for (let g = 0; g < dt; g++) {
      const y = u * (im + o() * sm), x = g * c + (o() - 0.5) * c * um;
      m.push([
        i + y * Math.cos(x),
        s + y * Math.sin(x)
      ]);
    }
    e.save(), e.beginPath();
    for (let g = 0; g < dt; g++) {
      const y = m[g], x = m[(g + 1) % dt], M = [
        (y[0] + x[0]) / 2,
        (y[1] + x[1]) / 2
      ];
      g === 0 ? e.moveTo(M[0], M[1]) : e.quadraticCurveTo(y[0], y[1], M[0], M[1]);
    }
    const h = [
      (m[dt - 1][0] + m[0][0]) / 2,
      (m[dt - 1][1] + m[0][1]) / 2
    ];
    e.quadraticCurveTo(m[dt - 1][0], m[dt - 1][1], h[0], h[1]), e.closePath(), e.clip();
    const p = e.createRadialGradient(i - u * Uu, s - u * Uu, 0, i, s, u);
    p.addColorStop(0, "rgba(255,255,255,1)"), p.addColorStop(0.25, "rgba(200,190,175,1)"), p.addColorStop(0.65, "rgba(120,108,90,1)"), p.addColorStop(1, "rgba(30,25,18,1)"), e.fillStyle = p, e.fillRect(t, n, r, r), e.restore();
  }
  function Om() {
    const e = document.createElement("canvas");
    e.width = Hn * Gt, e.height = Hn * Ss;
    const t = e.getContext("2d");
    for (let n = 0; n < wf; n++) {
      const r = n % Gt, l = Math.floor(n / Gt);
      Rm(t, r * Hn, l * Hn, Hn, zh[n]);
    }
    return new P.CanvasTexture(e);
  }
  function Lm() {
    return Ao || (Ao = Om()), Ao;
  }
  const zm = `
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
    float col = mod(idx, ${Gt}.0);
    float row = floor(idx / ${Gt}.0);
    vUv = vec2(col, row);

    float logD = clamp(
      (log(diameterKm + ${Vr}) - log(${Vr})) /
      (log(${Oh + Vr}) - log(${Vr})),
      0.0, 1.0
    );
    float baseSize = minSize + logD * (maxSize - minSize);

    // Scale point size with distance so NEOs grow when zoomed in.
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = baseSize * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`, Dm = `
  uniform sampler2D atlas;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    if (vAlpha < ${pf}) discard;
    float cellW = 1.0 / ${Gt}.0;
    float cellH = 1.0 / ${Ss}.0;
    vec2 uv = vec2(
      (vUv.x + gl_PointCoord.x) * cellW,
      (vUv.y + (1.0 - gl_PointCoord.y)) * cellH
    );
    vec4 texel = texture2D(atlas, uv);
    if (texel.a < ${Lh}) discard;
    gl_FragColor = vec4(texel.rgb * vColor, texel.a * vAlpha);
  }
`, Fm = `
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = ${Dh.toFixed(1)} * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`, jm = `
  uniform sampler2D map;
  varying float vAlpha;
  void main() {
    if (vAlpha < ${pf}) discard;
    vec4 texel = texture2D(map, gl_PointCoord);
    if (texel.a < ${Fh}) discard;
    gl_FragColor = vec4(texel.rgb, texel.a * vAlpha);
  }
`;
  function Um() {
    if (Wr) return Wr;
    const e = document.createElement("canvas");
    e.width = Bn, e.height = Bn;
    const t = e.getContext("2d"), n = Bn / 2, r = ym;
    return t.strokeStyle = gm, t.lineWidth = jh, t.beginPath(), t.moveTo(n, r), t.lineTo(Bn - r, n), t.lineTo(n, Bn - r), t.lineTo(r, n), t.closePath(), t.stroke(), Wr = new P.CanvasTexture(e), Wr;
  }
  class $m {
    constructor() {
      __publicField(this, "renderer");
      __publicField(this, "camera");
      __publicField(this, "scene");
      __publicField(this, "controls");
      __publicField(this, "animFrameId", null);
      __publicField(this, "resizeObserver", null);
      __publicField(this, "planetGroup");
      __publicField(this, "planetMeshes", []);
      __publicField(this, "neoPoints", null);
      __publicField(this, "hazardPoints", null);
      __publicField(this, "neoInstancedMesh", null);
      __publicField(this, "_top20Neos", []);
      __publicField(this, "textureLoader", new P.TextureLoader());
      __publicField(this, "_currentNeos", []);
      __publicField(this, "_displayNeos", []);
      __publicField(this, "hazardOnlyActive", false);
      __publicField(this, "selectedNeo", null);
      __publicField(this, "flyTarget", null);
      __publicField(this, "flyControlsTarget", null);
      __publicField(this, "flyFramesLeft", 0);
      __publicField(this, "flashFramesLeft", 0);
      __publicField(this, "flashOverlay", null);
      __publicField(this, "meteorGroup");
      __publicField(this, "trajectoryGroup");
      __publicField(this, "layers", {
        planets: [],
        trajectories: [],
        meteors: [],
        hazardOnly: []
      });
    }
    get currentNeos() {
      return this._currentNeos;
    }
    get displayNeos() {
      return this._displayNeos;
    }
    getCamera() {
      return this.camera;
    }
    getNeoPoints() {
      return this.neoPoints;
    }
    init(t) {
      this.scene = new P.Scene(), this.scene.background = new P.Color(hh);
      const { clientWidth: n, clientHeight: r } = t;
      this.renderer = new P.WebGLRenderer({
        antialias: true
      }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(n, r), t.appendChild(this.renderer.domElement), this.camera = new P.PerspectiveCamera(kh, n / r, Nh, Ch);
      const [l, o, i] = pn(/* @__PURE__ */ new Date());
      this.camera.position.set(l + Ou, Ou, i + Th), this.controls = new Nf(this.camera, this.renderer.domElement), this.controls.enableDamping = true, this.controls.dampingFactor = Ph, this.controls.minDistance = Ah, this.controls.maxDistance = Mh, this.controls.target.set(0, 0, 0), this.addAmbientLight(), this.addSun(), this.addPlanets(), this.updatePlanetPositions(/* @__PURE__ */ new Date()), this.addMeteorGroup(), this.addTrajectoryGroup(), this.resizeObserver = new ResizeObserver(() => {
        const { clientWidth: s, clientHeight: u } = t;
        this.camera.aspect = s / u, this.camera.updateProjectionMatrix(), this.renderer.setSize(s, u);
      }), this.resizeObserver.observe(t), this.startAnimationLoop();
    }
    addAmbientLight() {
      this.scene.add(new P.AmbientLight(wh, xh));
      const t = new P.PointLight(Sh, _h, Eh);
      this.scene.add(t);
    }
    addSun() {
      const t = new P.SphereGeometry(mh, zu, zu), n = new P.MeshStandardMaterial({
        color: yh,
        emissive: gh,
        emissiveIntensity: 1
      });
      this.textureLoader.load(vh, (r) => {
        n.map = r, n.emissiveMap = r, n.needsUpdate = true;
      }), this.scene.add(new P.Mesh(t, n));
    }
    addPlanets() {
      this.planetGroup = new P.Group(), this.planetMeshes = [];
      for (const t of No) {
        const n = this.createPlanetMesh(t.radiusAU, t.color, t.size, t.textureUrl);
        this.planetMeshes.push(n), this.planetGroup.add(n), this.layers.planets.push(n);
        const r = this.createOrbitRing(t.radiusAU);
        this.planetGroup.add(r), this.layers.planets.push(r);
      }
      this.scene.add(this.planetGroup);
    }
    createPlanetMesh(t, n, r, l) {
      const o = new P.SphereGeometry(r, Lu, Lu), i = new P.MeshStandardMaterial({
        color: n
      });
      this.textureLoader.load(l, (u) => {
        i.map = u, i.color.set(16777215), i.needsUpdate = true;
      });
      const s = new P.Mesh(o, i);
      return s.position.set(t, 0, 0), s;
    }
    createOrbitRing(t) {
      const n = Math.max(t * Uh, $h), r = new P.TorusGeometry(t, n, Gh, Vh), l = new P.MeshBasicMaterial({
        color: Bh,
        transparent: true,
        opacity: Hh
      }), o = new P.Mesh(r, l);
      return o.rotation.x = Math.PI / 2, o;
    }
    addMeteorGroup() {
      this.meteorGroup = new P.Group(), this.scene.add(this.meteorGroup);
    }
    addTrajectoryGroup() {
      this.trajectoryGroup = new P.Group(), this.trajectoryGroup.visible = false, this.scene.add(this.trajectoryGroup), this.layers.trajectories.push(this.trajectoryGroup);
    }
    updateTrajectoryArcs(t) {
      for (const l of this.trajectoryGroup.children) {
        const o = l;
        o.geometry.dispose(), o.material.dispose();
      }
      this.trajectoryGroup.clear();
      const n = 2 * Math.PI, r = yf * Yt;
      for (const l of t) {
        const o = parseInt(l.id, 10), i = isNaN(o) ? 0 : o, s = Math.imul(i, 2654435761) >>> 0, u = Math.imul(s, 2246822519) >>> 0, c = Math.imul(u, 3735928559) >>> 0, m = s / 4294967296 * n, p = (c < 2147483648 ? 1 : -1) * (u / 4294967296) * r, g = [];
        for (let _ = 0; _ < To; _++) {
          const T = _ / (To - 1), k = -ju + T * 2 * ju;
          try {
            g.push(gf(l.approachDate, l.missDistKm, l.velocityKmS, k, m, p));
          } catch {
            g.push(g.length > 0 ? g[g.length - 1] : [
              0,
              0,
              0
            ]);
          }
        }
        const y = To - 1, x = new Float32Array(y * 2 * 3);
        for (let _ = 0; _ < y; _++) {
          const [T, k, A] = g[_], [H, R, oe] = g[_ + 1];
          x[_ * 6 + 0] = T, x[_ * 6 + 1] = k, x[_ * 6 + 2] = A, x[_ * 6 + 3] = H, x[_ * 6 + 4] = R, x[_ * 6 + 5] = oe;
        }
        const M = new P.BufferGeometry();
        M.setAttribute("position", new P.BufferAttribute(x, 3));
        const [f, a, d] = zt(l), v = new P.LineBasicMaterial({
          color: new P.Color(f, a, d),
          transparent: true,
          opacity: Jh,
          depthWrite: false
        });
        this.trajectoryGroup.add(new P.LineSegments(M, v));
      }
    }
    updateMeteorShowers(t) {
      for (const n of this.meteorGroup.children) {
        const r = n;
        r.geometry.dispose(), r.material.dispose();
      }
      this.meteorGroup.clear();
      for (const n of t) {
        const [r, l, o] = vf(n.raDeg, n.decDeg), i = r * Po, s = l * Po, u = o * Po, c = Math.min(n.zhr / qh, 1), m = bh + c * em, h = tm + c * nm, p = new P.ConeGeometry(h, m, rm), g = c, y = c * 0.5, x = 1 - c * 0.5, M = new P.MeshBasicMaterial({
          color: new P.Color(g, y, x),
          transparent: true,
          opacity: lm + c * om,
          depthWrite: false
        }), f = new P.Mesh(p, M);
        f.position.set(i, s, u);
        const a = new P.Vector3(r, l, o).negate(), d = new P.Vector3(0, 1, 0);
        f.quaternion.setFromUnitVectors(d, a), this.meteorGroup.add(f);
      }
    }
    startAnimationLoop() {
      const t = () => {
        this.animFrameId = requestAnimationFrame(t), this.tickSelectedPulse(), this.tickFlyTo(), this.tickFlash(), this.controls.update(), this.renderer.render(this.scene, this.camera);
      };
      t();
    }
    flashMigration() {
      if (!this.flashOverlay) {
        const t = new P.PlaneGeometry(2, 2), n = new P.MeshBasicMaterial({
          color: Wh,
          transparent: true,
          opacity: Co,
          depthTest: false,
          depthWrite: false
        }), r = new P.Mesh(t, n);
        r.renderOrder = Kh, this.camera.add(r), r.position.set(0, 0, Qh), this.flashOverlay = r, this.scene.getObjectById(this.camera.id) || this.scene.add(this.camera);
      }
      this.flashOverlay.material.opacity = Co, this.flashOverlay.visible = true, this.flashFramesLeft = Du;
    }
    tickFlash() {
      if (!this.flashOverlay || this.flashFramesLeft <= 0) return;
      this.flashFramesLeft--;
      const t = this.flashOverlay.material;
      t.opacity = Co * (this.flashFramesLeft / Du), this.flashFramesLeft === 0 && (this.flashOverlay.visible = false);
    }
    tickSelectedPulse() {
      if (!this.selectedNeo || !this.neoPoints) return;
      const t = this._displayNeos.indexOf(this.selectedNeo);
      if (t === -1) return;
      const n = hm + mm * ((Math.sin(Date.now() * pm) + 1) / 2), r = this.neoPoints.geometry.getAttribute("color");
      if (r.setXYZ(t, n, n, n), r.needsUpdate = true, this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
        const l = this._top20Neos.indexOf(this.selectedNeo);
        l !== -1 && (this.neoInstancedMesh.setColorAt(l, new P.Color(n, n, n)), this.neoInstancedMesh.instanceColor.needsUpdate = true);
      }
    }
    tickFlyTo() {
      if (!this.flyTarget || this.flyFramesLeft <= 0) return;
      const t = 1 - this.flyFramesLeft / Fu, n = Yh + t * Zh;
      this.camera.position.lerp(this.flyTarget, n), this.flyControlsTarget && this.controls.target.lerp(this.flyControlsTarget, n), this.flyFramesLeft--, this.flyFramesLeft === 0 && (this.flyTarget = null, this.flyControlsTarget = null);
    }
    buildNeoInstancedMesh(t) {
      if (this.neoInstancedMesh && (this.neoInstancedMesh.geometry.dispose(), this.neoInstancedMesh.material.dispose(), this.scene.remove(this.neoInstancedMesh), this.neoInstancedMesh = null), t.length === 0) return;
      const n = new P.SphereGeometry(1, 8, 6), r = new P.MeshStandardMaterial({
        vertexColors: true
      }), l = new P.InstancedMesh(n, r, t.length);
      l.instanceColor = new P.InstancedBufferAttribute(new Float32Array(t.length * 3), 3);
      const o = new P.Object3D();
      for (let i = 0; i < t.length; i++) {
        const s = t[i], [u, c, m] = s.position3d, h = Math.max(s.diameterKm / 2 / Zt * fm, dm);
        o.position.set(u, c, m), o.scale.setScalar(h), o.updateMatrix(), l.setMatrixAt(i, o.matrix);
        const [p, g, y] = zt(s);
        l.setColorAt(i, new P.Color(p, g, y));
      }
      l.instanceMatrix.needsUpdate = true, l.instanceColor && (l.instanceColor.needsUpdate = true), this.neoInstancedMesh = l, this._top20Neos = t, this.scene.add(l);
    }
    updateNeoPoints(t) {
      this.disposeNeoPoints();
      const n = this.selectedNeo;
      this.selectedNeo = null, this._currentNeos = t, this._displayNeos = this.hazardOnlyActive ? t.filter((y) => y.hazardous) : t;
      const l = [
        ...t
      ].sort((y, x) => y.missDistKm - x.missDistKm).slice(0, cm);
      if (this.buildNeoInstancedMesh(l), this._displayNeos.length === 0) return;
      const o = this._displayNeos.length, i = new Float32Array(o * 3), s = new Float32Array(o * 3), u = new Float32Array(o), c = new Float32Array(o), m = new Float32Array(o).fill(1);
      for (let y = 0; y < o; y++) {
        const x = this._displayNeos[y], [M, f, a] = x.position3d;
        i[y * 3] = M, i[y * 3 + 1] = f, i[y * 3 + 2] = a;
        const [d, v, _] = zt(x);
        s[y * 3] = d, s[y * 3 + 1] = v, s[y * 3 + 2] = _, u[y] = y % wf, c[y] = x.diameterKm;
      }
      const h = new P.BufferGeometry();
      h.setAttribute("position", new P.BufferAttribute(i, 3)), h.setAttribute("color", new P.BufferAttribute(s, 3)), h.setAttribute("atlasIndex", new P.BufferAttribute(u, 1)), h.setAttribute("diameterKm", new P.BufferAttribute(c, 1)), h.setAttribute("alpha", new P.BufferAttribute(m, 1));
      const p = new P.ShaderMaterial({
        uniforms: {
          atlas: {
            value: Lm()
          },
          minSize: {
            value: Ih
          },
          maxSize: {
            value: Rh
          }
        },
        vertexShader: zm,
        fragmentShader: Dm,
        transparent: true,
        depthWrite: false
      });
      this.neoPoints = new P.Points(h, p), this.scene.add(this.neoPoints);
      const g = this._displayNeos.filter((y) => y.hazardous);
      if (g.length > 0) {
        const y = new Float32Array(g.length * 3), x = new Float32Array(g.length).fill(1);
        for (let a = 0; a < g.length; a++) {
          const [d, v, _] = g[a].position3d;
          y[a * 3] = d, y[a * 3 + 1] = v, y[a * 3 + 2] = _;
        }
        const M = new P.BufferGeometry();
        M.setAttribute("position", new P.BufferAttribute(y, 3)), M.setAttribute("alpha", new P.BufferAttribute(x, 1));
        const f = new P.ShaderMaterial({
          uniforms: {
            map: {
              value: Um()
            }
          },
          vertexShader: Fm,
          fragmentShader: jm,
          transparent: true,
          depthWrite: false
        });
        this.hazardPoints = new P.Points(M, f), this.scene.add(this.hazardPoints);
      }
      if (n) {
        const y = this._displayNeos.indexOf(n);
        if (y !== -1) {
          this.selectedNeo = n;
          const x = this.neoPoints.geometry.getAttribute("color"), M = this.neoPoints.geometry.getAttribute("alpha");
          x.setXYZ(y, ...$n), M.setX(y, 1), x.needsUpdate = true, M.needsUpdate = true;
        }
      }
      this.updateTrajectoryArcs(this._displayNeos);
    }
    highlightNeos(t) {
      if (!this.neoPoints) return;
      const n = this.neoPoints.geometry.getAttribute("color"), r = this.neoPoints.geometry.getAttribute("alpha");
      for (let l = 0; l < this._displayNeos.length; l++) {
        const o = this._displayNeos[l];
        t === null || o.bonsaiId !== void 0 && t.has(o.bonsaiId) ? (n.setXYZ(l, ...zt(o)), r.setX(l, 1)) : (n.setXYZ(l, ...Ru), r.setX(l, 0));
      }
      if (n.needsUpdate = true, r.needsUpdate = true, this.selectedNeo) {
        const l = this._displayNeos.indexOf(this.selectedNeo);
        l !== -1 && (n.setXYZ(l, ...$n), r.setX(l, 1), n.needsUpdate = true, r.needsUpdate = true);
      }
      if (this.hazardPoints) {
        const l = this.hazardPoints.geometry.getAttribute("alpha");
        if (l) {
          let o = 0;
          for (let i = 0; i < this._displayNeos.length; i++) {
            const s = this._displayNeos[i];
            if (!s.hazardous) continue;
            const u = t === null || s.bonsaiId !== void 0 && t.has(s.bonsaiId);
            l.setX(o, u ? 1 : 0), o++;
          }
          l.needsUpdate = true;
        }
      }
      if (this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
        for (let l = 0; l < this._top20Neos.length; l++) {
          const o = this._top20Neos[l], i = t === null || o.bonsaiId !== void 0 && t.has(o.bonsaiId), [s, u, c] = i ? zt(o) : Ru;
          this.neoInstancedMesh.setColorAt(l, new P.Color(s, u, c));
        }
        if (this.selectedNeo) {
          const l = this._top20Neos.indexOf(this.selectedNeo);
          l !== -1 && this.neoInstancedMesh.setColorAt(l, new P.Color(...$n));
        }
        this.neoInstancedMesh.instanceColor.needsUpdate = true;
      }
    }
    selectNeo(t) {
      if (!this.neoPoints) {
        this.selectedNeo = t;
        return;
      }
      const n = this.neoPoints.geometry.getAttribute("color"), r = this.neoPoints.geometry.getAttribute("alpha");
      if (this.selectedNeo) {
        const o = this._displayNeos.indexOf(this.selectedNeo);
        if (o !== -1 && (n.setXYZ(o, ...zt(this.selectedNeo)), r.setX(o, 1)), this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
          const i = this._top20Neos.indexOf(this.selectedNeo);
          if (i !== -1) {
            const [s, u, c] = zt(this.selectedNeo);
            this.neoInstancedMesh.setColorAt(i, new P.Color(s, u, c)), this.neoInstancedMesh.instanceColor.needsUpdate = true;
          }
        }
      }
      this.selectedNeo = t;
      const l = this._displayNeos.indexOf(t);
      if (l !== -1 && (n.setXYZ(l, ...$n), r.setX(l, 1)), n.needsUpdate = true, r.needsUpdate = true, this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
        const o = this._top20Neos.indexOf(t);
        o !== -1 && (this.neoInstancedMesh.setColorAt(o, new P.Color(...$n)), this.neoInstancedMesh.instanceColor.needsUpdate = true);
      }
    }
    flyToNeo(t) {
      const [n, r, l] = t.position3d, o = new P.Vector3(n, r, l), i = new P.Vector3().subVectors(o, this.camera.position).normalize();
      this.flyTarget = o.clone().sub(i.clone().multiplyScalar(Xh)), this.flyControlsTarget = o.clone(), this.flyFramesLeft = Fu;
    }
    setLayerVisible(t, n) {
      if (t === "planets") {
        this.planetGroup.visible = n;
        return;
      }
      if (t === "meteors") {
        this.meteorGroup.visible = n;
        return;
      }
      if (t === "trajectories") {
        this.trajectoryGroup.visible = n;
        return;
      }
      if (t === "hazardOnly") {
        this.hazardOnlyActive = n, this.updateNeoPoints(this._currentNeos);
        return;
      }
    }
    updatePlanetPositions(t) {
      const n = (t.getTime() - cf) / lt;
      for (let r = 0; r < No.length; r++) {
        const l = No[r], o = this.planetMeshes[r];
        if (!o) continue;
        const i = ((l.L0 + l.n * n) % 360 + 360) % 360 * Yt;
        o.position.set(l.radiusAU * Math.cos(i), 0, l.radiusAU * Math.sin(i));
      }
    }
    dispose() {
      var _a2;
      this.animFrameId !== null && (cancelAnimationFrame(this.animFrameId), this.animFrameId = null), (_a2 = this.resizeObserver) == null ? void 0 : _a2.disconnect(), this.resizeObserver = null, this.controls.dispose();
      for (const t of this.planetMeshes) t.geometry.dispose(), t.material.dispose();
      for (const t of this.layers.planets) t instanceof P.Mesh && !this.planetMeshes.includes(t) && (t.geometry.dispose(), t.material.dispose());
      this.scene.remove(this.planetGroup), this.disposeNeoPoints();
      for (const t of this.meteorGroup.children) {
        const n = t;
        n.geometry.dispose(), n.material.dispose();
      }
      this.meteorGroup.clear(), this.scene.remove(this.meteorGroup);
      for (const t of this.trajectoryGroup.children) {
        const n = t;
        n.geometry.dispose(), n.material.dispose();
      }
      this.trajectoryGroup.clear(), this.scene.remove(this.trajectoryGroup), this.renderer.dispose(), this.renderer.domElement.remove(), this.layers.planets = [], this.layers.trajectories = [], this.layers.meteors = [], this.layers.hazardOnly = [], this.planetMeshes = [], this._currentNeos = [], this._displayNeos = [], this.selectedNeo = null, this.flyTarget = null, this.flyControlsTarget = null, this.flyFramesLeft = 0, this.flashOverlay && (this.camera.remove(this.flashOverlay), this.flashOverlay.geometry.dispose(), this.flashOverlay.material.dispose(), this.flashOverlay = null), this.flashFramesLeft = 0, this.scene.remove(this.camera);
    }
    disposeNeoPoints() {
      this.neoPoints && (this.neoPoints.geometry.dispose(), this.neoPoints.material.dispose(), this.scene.remove(this.neoPoints), this.neoPoints = null), this.hazardPoints && (this.hazardPoints.geometry.dispose(), this.hazardPoints.material.dispose(), this.scene.remove(this.hazardPoints), this.hazardPoints = null), this.neoInstancedMesh && (this.neoInstancedMesh.geometry.dispose(), this.neoInstancedMesh.material.dispose(), this.scene.remove(this.neoInstancedMesh), this.neoInstancedMesh = null), this._top20Neos = [];
    }
  }
  class Hm {
    constructor(t, n) {
      __publicField(this, "raycaster", new P.Raycaster());
      __publicField(this, "camera", null);
      __publicField(this, "neoPoints", null);
      __publicField(this, "neos", []);
      __publicField(this, "onHit");
      __publicField(this, "onMiss");
      this.onHit = t, this.onMiss = n;
    }
    setCamera(t) {
      this.camera = t;
    }
    setNeoPoints(t, n) {
      this.neoPoints = t, this.neos = n;
    }
    toNdc(t, n) {
      const r = n.getBoundingClientRect();
      return this.raycaster.params.Points.threshold = am, new P.Vector2((t.clientX - r.left) / r.width * 2 - 1, -((t.clientY - r.top) / r.height) * 2 + 1);
    }
    onMouseMove(t, n) {
      if (!this.camera || !this.neoPoints) return;
      this.raycaster.setFromCamera(this.toNdc(t, n), this.camera);
      const r = this.raycaster.intersectObject(this.neoPoints);
      n.style.cursor = r.length > 0 ? "pointer" : "default";
    }
    onMouseClick(t, n) {
      if (!this.camera || !this.neoPoints) return;
      const r = this.toNdc(t, n);
      this.raycaster.setFromCamera(r, this.camera);
      const l = this.raycaster.intersectObject(this.neoPoints);
      if (l.length > 0) {
        const i = l[0].index ?? -1, s = this.neos[i];
        if (s) {
          this.onHit(s);
          return;
        }
      }
      const o = new P.Vector3();
      this.raycaster.ray.at(1, o), this.onMiss(o);
    }
  }
  function Bm({ status: e }) {
    const [t, n] = I.useState(false);
    if (I.useEffect(() => {
      e !== "live" && n(false);
    }, [
      e
    ]), e === "live" || t) return null;
    const r = e === "rate-limited" ? "Rate limit reached \u2014 using cached data" : "Using cached data";
    return w.jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-yellow-600/90 px-4 py-2 text-sm font-medium text-white",
      children: [
        w.jsx("span", {
          children: r
        }),
        w.jsx("button", {
          onClick: () => n(true),
          "aria-label": "Dismiss banner",
          className: "absolute right-4 text-white/80 hover:text-white transition-colors text-lg leading-none",
          children: "\xD7"
        })
      ]
    });
  }
  function Gm({ radiusAU: e, matchCount: t, onChange: n, disabled: r = false }) {
    function l(o) {
      n(parseFloat(o.target.value));
    }
    return w.jsxs("div", {
      className: `flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${r ? "opacity-40" : ""}`,
      children: [
        w.jsxs("div", {
          className: "flex justify-between text-xs text-gray-300",
          children: [
            w.jsx("span", {
              children: "Proximity"
            }),
            w.jsxs("span", {
              children: [
                e.toFixed(2),
                " AU"
              ]
            })
          ]
        }),
        w.jsx("input", {
          type: "range",
          min: dh,
          max: xs,
          step: ph,
          value: e,
          onChange: l,
          disabled: r,
          className: "w-full accent-[#00FF88] disabled:cursor-not-allowed",
          "aria-label": "Proximity radius in AU",
          "aria-disabled": r
        }),
        w.jsxs("div", {
          className: "text-xs text-[#00FF88] text-right",
          children: [
            t,
            " NEO",
            t !== 1 ? "s" : "",
            " nearby"
          ]
        })
      ]
    });
  }
  function Vm(e) {
    const [t, n, r] = e.position3d;
    return `// kNN query for NEO: ${e.name}
index.knnQuery([${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)}], 1);`;
  }
  function Wm(e) {
    return e >= Hu ? `${(e / Hu).toFixed(2)} M km` : `${Math.round(e).toLocaleString()} km`;
  }
  function Qm({ neo: e }) {
    const [t, n] = I.useState(false), r = I.useRef(null);
    if (I.useEffect(() => {
      n(false), r.current !== null && (clearTimeout(r.current), r.current = null);
    }, [
      e
    ]), I.useEffect(() => () => {
      r.current !== null && clearTimeout(r.current);
    }, []), !e) return null;
    const l = `${Nm}${encodeURIComponent(e.id)}`;
    async function o() {
      const i = Vm(e);
      try {
        await navigator.clipboard.writeText(i), n(true), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => n(false), mf);
      } catch {
      }
    }
    return w.jsxs("div", {
      className: "bg-black/80 border border-white/10 text-white text-sm rounded-lg p-4 w-full sm:w-64 flex flex-col gap-2",
      children: [
        w.jsx("span", {
          className: "text-gray-400 text-xs uppercase tracking-wide",
          children: "NEO Info"
        }),
        w.jsxs("div", {
          className: "flex items-start justify-between gap-2",
          children: [
            w.jsx("span", {
              className: "font-semibold text-base leading-tight truncate",
              children: e.name
            }),
            e.hazardous && w.jsx("span", {
              className: "shrink-0 text-xs font-bold px-1.5 py-0.5 rounded",
              style: {
                color: "#FF4422",
                border: "1px solid #FF4422"
              },
              "aria-label": "Potentially hazardous",
              children: "\u25C6 PHA"
            })
          ]
        }),
        w.jsxs("div", {
          className: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-300",
          children: [
            w.jsx("span", {
              className: "text-gray-500",
              children: "Diameter"
            }),
            w.jsxs("span", {
              children: [
                e.diameterKm.toFixed(3),
                " km"
              ]
            }),
            w.jsx("span", {
              className: "text-gray-500",
              children: "Miss dist"
            }),
            w.jsxs("span", {
              children: [
                Wm(e.missDistKm),
                w.jsxs("span", {
                  className: "text-gray-500 ml-1",
                  children: [
                    "(",
                    e.missDistLunar.toFixed(2),
                    " LD)"
                  ]
                })
              ]
            }),
            w.jsx("span", {
              className: "text-gray-500",
              children: "Velocity"
            }),
            w.jsxs("span", {
              children: [
                e.velocityKmS.toFixed(2),
                " km/s"
              ]
            }),
            w.jsx("span", {
              className: "text-gray-500",
              children: "Approach"
            }),
            w.jsx("span", {
              children: e.approachDate.toLocaleDateString()
            }),
            w.jsx("span", {
              className: "text-gray-500",
              children: "Miss dist AU"
            }),
            w.jsxs("span", {
              children: [
                (e.missDistKm / Zt).toFixed(4),
                " AU"
              ]
            })
          ]
        }),
        e.hazardous && w.jsx("div", {
          className: "text-xs font-medium",
          style: {
            color: "#FF4422"
          },
          role: "alert",
          children: "\u25C6 Potentially hazardous asteroid"
        }),
        w.jsxs("div", {
          className: "flex gap-2 mt-1",
          children: [
            w.jsx("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-1 text-center text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors",
              "aria-label": `Open JPL Small-Body Database entry for ${e.name}`,
              children: "JPL \u2197"
            }),
            w.jsx("button", {
              onClick: o,
              className: "flex-1 text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors",
              "aria-label": "Copy kNN query snippet to clipboard",
              children: t ? "Copied \u2713" : "Export"
            })
          ]
        })
      ]
    });
  }
  const Km = [
    {
      layer: "planets",
      label: "Planets",
      defaultOn: true
    },
    {
      layer: "meteors",
      label: "Meteor showers",
      defaultOn: true
    },
    {
      layer: "trajectories",
      label: "Trajectories",
      defaultOn: false
    },
    {
      layer: "hazardOnly",
      label: "Hazardous only",
      isHazardFilter: true,
      defaultOn: false
    }
  ];
  function Xm({ activeCategories: e, onCategoryToggle: t, onLayerToggle: n, onHazardFilter: r }) {
    const [l, o] = I.useState(false);
    if (l) return w.jsx("button", {
      onClick: () => o(false),
      className: "bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg w-full sm:w-auto",
      "aria-label": "Open scene controls",
      children: "Controls"
    });
    function i(s, u) {
      s.isHazardFilter ? r(u) : n(s.layer, u);
    }
    return w.jsxs("div", {
      className: "bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[200px]",
      children: [
        w.jsxs("div", {
          className: "flex justify-between items-center mb-2",
          children: [
            w.jsx("span", {
              className: "text-xs font-semibold text-gray-300 uppercase tracking-wide",
              children: "Controls"
            }),
            w.jsx("button", {
              onClick: () => o(true),
              className: "text-gray-400 hover:text-white text-xs ml-4",
              "aria-label": "Collapse controls",
              children: "\u2715"
            })
          ]
        }),
        w.jsx("p", {
          className: "text-[10px] text-gray-500 uppercase tracking-wider mb-1",
          children: "Show"
        }),
        w.jsx("div", {
          className: "flex flex-col gap-1 mb-3",
          children: Km.map((s) => w.jsxs("label", {
            className: "flex items-center gap-2 cursor-pointer select-none",
            children: [
              w.jsx("input", {
                type: "checkbox",
                defaultChecked: s.defaultOn,
                onChange: (u) => i(s, u.target.checked),
                className: "accent-[#00FF88] w-3 h-3",
                "aria-label": `Toggle ${s.label}`
              }),
              w.jsx("span", {
                className: "text-xs text-gray-200",
                children: s.label
              })
            ]
          }, s.layer))
        }),
        w.jsx("p", {
          className: "text-[10px] text-gray-500 uppercase tracking-wider mb-1",
          children: "Highlight by type"
        }),
        w.jsxs("div", {
          className: "flex flex-col gap-0.5",
          children: [
            Am.map(({ category: s, color: u, label: c }) => {
              const m = e.has(s);
              return w.jsxs("button", {
                onClick: () => t(s),
                className: `flex items-center gap-2 py-0.5 w-full text-left transition-opacity ${m ? "opacity-100" : "opacity-30"}`,
                "aria-pressed": m,
                children: [
                  w.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-sm flex-shrink-0",
                    style: {
                      backgroundColor: u
                    }
                  }),
                  w.jsx("span", {
                    className: "text-xs text-gray-200",
                    children: c
                  })
                ]
              }, s);
            }),
            w.jsxs("div", {
              className: "flex items-center gap-2 py-0.5 mt-1 border-t border-white/10 pt-1",
              children: [
                w.jsx("span", {
                  className: "inline-block w-3 h-3 flex-shrink-0 border border-[#FF4422] rotate-45"
                }),
                w.jsx("span", {
                  className: "text-xs text-gray-400",
                  children: "Diamond = hazardous"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Ym({ onSearch: e, disabled: t = false }) {
    const n = I.useRef(null);
    function r(l) {
      e(l.target.value);
    }
    return w.jsx("div", {
      className: `flex items-center bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${t ? "opacity-40 pointer-events-none" : ""}`,
      children: w.jsx("input", {
        ref: n,
        type: "text",
        placeholder: "Search NEOs\u2026",
        onChange: r,
        disabled: t,
        className: "bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full disabled:cursor-not-allowed",
        "aria-label": "Search NEOs by name",
        "aria-disabled": t
      })
    });
  }
  function Zm(e) {
    const [t, n, r] = e.centre;
    if (e.type === "range") {
      const o = e.radiusAU ?? 0;
      return `let results = index.range_query(&BBox::new(
  Point::new([${(t - o).toFixed(6)}, ${(n - o).toFixed(6)}, ${(r - o).toFixed(6)}]),
  Point::new([${(t + o).toFixed(6)}, ${(n + o).toFixed(6)}, ${(r + o).toFixed(6)}])
));`;
    }
    const l = e.k ?? 1;
    return `let results = index.knn_query(
  &Point::new([${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)}]),
  ${l}
);`;
  }
  function Jm(e) {
    const [t, n, r] = e.centre;
    if (e.type === "range") {
      const o = e.radiusAU ?? 0;
      return `results = index.range_query(
    min_point=[${(t - o).toFixed(6)}, ${(n - o).toFixed(6)}, ${(r - o).toFixed(6)}],
    max_point=[${(t + o).toFixed(6)}, ${(n + o).toFixed(6)}, ${(r + o).toFixed(6)}]
)`;
    }
    const l = e.k ?? 1;
    return `results = index.knn_query(
    point=[${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)}],
    k=${l}
)`;
  }
  function qm(e) {
    const [t, n, r] = e.centre;
    if (e.type === "range") {
      const o = e.radiusAU ?? 0;
      return `const results = index.range_query_3d(
  ${(t - o).toFixed(6)}, ${(n - o).toFixed(6)}, ${(r - o).toFixed(6)},
  ${(t + o).toFixed(6)}, ${(n + o).toFixed(6)}, ${(r + o).toFixed(6)}
);`;
    }
    const l = e.k ?? 1;
    return `const results = index.knn_query_3d(
  ${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)},
  ${l}
);`;
  }
  const bm = {
    rust: "Rust",
    python: "Python",
    js: "JS"
  };
  function Vu(e, t) {
    return t === "rust" ? Zm(e) : t === "python" ? Jm(e) : qm(e);
  }
  function e0({ indexManager: e, scene: t, currentQuery: n }) {
    const [r, l] = I.useState(() => e.stats()), [o, i] = I.useState([]), [s, u] = I.useState("rust"), [c, m] = I.useState(false), h = I.useRef(false), p = I.useRef(0), g = I.useRef([]), y = I.useRef(null);
    I.useEffect(() => {
      const d = setInterval(() => {
        l(() => {
          const v = e.stats(), _ = h.current;
          if (h.current = v.migrating, _ && !v.migrating) {
            t == null ? void 0 : t.flashMigration();
            const T = Bu[v.backend_kind] ?? "Unknown", k = ++p.current, A = {
              id: k,
              message: `Index restructured \u2192 ${T}`
            };
            i((R) => [
              ...R,
              A
            ]);
            const H = setTimeout(() => {
              i((R) => R.filter((oe) => oe.id !== k));
            }, Tm);
            g.current.push(H);
          }
          return v;
        });
      }, 500);
      return () => {
        clearInterval(d), g.current.forEach(clearTimeout), g.current = [];
      };
    }, [
      e,
      t
    ]), I.useEffect(() => () => {
      y.current !== null && clearTimeout(y.current);
    }, []);
    async function x() {
      try {
        await navigator.clipboard.writeText(Vu(n, s)), m(true), y.current !== null && clearTimeout(y.current), y.current = setTimeout(() => m(false), mf);
      } catch {
      }
    }
    const M = Bu[r.backend_kind] ?? "Unknown", f = Pm[r.backend_kind], a = Vu(n, s);
    return w.jsxs(w.Fragment, {
      children: [
        w.jsxs("div", {
          className: "bg-black/80 border border-white/10 text-white text-xs rounded-lg w-full sm:w-72 flex flex-col overflow-hidden",
          "aria-label": "Bonsai index statistics and export",
          children: [
            w.jsx("span", {
              className: "sr-only",
              role: "status",
              "aria-live": "polite",
              children: r.migrating ? "Index migration in progress" : ""
            }),
            w.jsxs("div", {
              className: "px-3 py-2 flex flex-col gap-1",
              children: [
                w.jsx("a", {
                  href: Cm,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 text-xs uppercase tracking-wide mb-0.5 hover:text-[#00FF88] transition-colors",
                  children: "Bonsai Index \u2197"
                }),
                w.jsx(Qr, {
                  label: "Backend",
                  children: w.jsx("span", {
                    className: "font-semibold text-[#00FF88]",
                    children: M
                  })
                }),
                w.jsx(Qr, {
                  label: "Points",
                  children: r.point_count.toLocaleString()
                }),
                w.jsx(Qr, {
                  label: "Migrations",
                  children: r.migration_count
                }),
                w.jsx(Qr, {
                  label: "Queries",
                  children: r.query_count.toLocaleString()
                }),
                r.migrating && w.jsxs("div", {
                  className: "flex items-center gap-1 text-yellow-400 mt-0.5",
                  children: [
                    w.jsx("span", {
                      className: "inline-block animate-spin",
                      children: "\u27F3"
                    }),
                    w.jsx("span", {
                      children: "Migrating\u2026"
                    })
                  ]
                }),
                f && w.jsx("p", {
                  className: "mt-1 pt-1 border-t border-white/10 text-gray-400 leading-tight",
                  children: f
                })
              ]
            }),
            w.jsx("div", {
              className: "border-t border-white/10"
            }),
            w.jsxs("div", {
              className: "px-3 py-2 flex flex-col gap-2",
              children: [
                w.jsxs("div", {
                  className: "flex items-center justify-between gap-2",
                  children: [
                    w.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        w.jsx("span", {
                          className: "text-gray-400 text-xs uppercase tracking-wide",
                          children: "Export"
                        }),
                        w.jsx("span", {
                          className: "text-[#00FF88]/70 text-[10px]",
                          children: "Bonsai query"
                        })
                      ]
                    }),
                    w.jsx("div", {
                      className: "flex gap-1",
                      role: "group",
                      "aria-label": "Select language",
                      children: [
                        "rust",
                        "python",
                        "js"
                      ].map((d) => w.jsx("button", {
                        onClick: () => u(d),
                        className: `px-2 py-0.5 rounded text-xs transition-colors ${s === d ? "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50" : "bg-white/10 text-gray-400 hover:bg-white/20"}`,
                        "aria-pressed": s === d,
                        children: bm[d]
                      }, d))
                    })
                  ]
                }),
                w.jsx("pre", {
                  className: "bg-black/60 rounded p-2 text-[10px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre",
                  children: a
                }),
                w.jsx("button", {
                  onClick: x,
                  className: "w-full py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-xs",
                  "aria-label": "Copy snippet to clipboard",
                  children: c ? "Copied \u2713" : "Copy to clipboard"
                })
              ]
            })
          ]
        }),
        w.jsx("div", {
          className: "flex flex-col gap-1 items-end pointer-events-none",
          children: o.map((d) => w.jsx("div", {
            role: "status",
            "aria-live": "polite",
            className: "bg-[#00ffcc]/20 border border-[#00ffcc]/50 text-[#00ffcc] text-xs rounded-lg px-3 py-1.5 animate-pulse",
            children: d.message
          }, d.id))
        })
      ]
    });
  }
  function Qr({ label: e, children: t }) {
    return w.jsxs("div", {
      className: "flex items-center justify-between gap-2",
      children: [
        w.jsx("span", {
          className: "text-gray-400",
          children: e
        }),
        w.jsx("span", {
          children: t
        })
      ]
    });
  }
  const Kr = hf / 2;
  function t0({ date: e, onChange: t, isLoading: n = false, disabled: r = false }) {
    const l = I.useRef(null);
    if (!l.current) {
      const c = /* @__PURE__ */ new Date();
      c.setHours(0, 0, 0, 0), l.current = c;
    }
    const o = l.current, i = Math.round((e.getTime() - o.getTime()) / lt);
    function s(c) {
      const m = parseInt(c.target.value, 10), h = new Date(o.getTime() + m * lt);
      t(h);
    }
    const u = i === 0 ? "Today" : i > 0 ? `+${i}d` : `${i}d`;
    return w.jsxs("div", {
      className: `flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${r ? "opacity-40" : ""}`,
      children: [
        w.jsxs("div", {
          className: "flex justify-between text-xs text-gray-300",
          children: [
            w.jsx("span", {
              children: "Time"
            }),
            w.jsxs("span", {
              className: "flex items-center gap-1",
              children: [
                n && w.jsx("span", {
                  className: "inline-block animate-spin text-[#00FF88]",
                  "aria-hidden": "true",
                  children: "\u27F3"
                }),
                w.jsx("span", {
                  children: u
                })
              ]
            })
          ]
        }),
        w.jsx("input", {
          type: "range",
          min: -Kr,
          max: Kr,
          step: 1,
          value: i,
          onChange: s,
          className: "w-full accent-[#00FF88] disabled:cursor-not-allowed",
          "aria-label": "Time offset in days from today (\xB130 days)",
          disabled: n || r,
          "aria-disabled": r
        }),
        w.jsxs("div", {
          className: "text-xs text-gray-400 flex justify-between",
          children: [
            w.jsxs("span", {
              children: [
                "\u2212",
                Kr,
                "d"
              ]
            }),
            w.jsxs("span", {
              children: [
                "+",
                Kr,
                "d"
              ]
            })
          ]
        })
      ]
    });
  }
  function n0({ onRetry: e }) {
    return w.jsxs("div", {
      className: "absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-black/80 border border-yellow-500/60 text-white rounded-lg px-4 py-3 max-w-sm w-full mx-4 flex flex-col gap-2",
      role: "alert",
      "aria-live": "assertive",
      children: [
        w.jsx("p", {
          className: "text-sm text-yellow-300 font-semibold",
          children: "Spatial index unavailable \u2014 3D scene will load without query features."
        }),
        w.jsx("button", {
          onClick: e,
          className: "self-start text-xs bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/50 text-yellow-300 rounded px-3 py-1 transition-colors",
          "aria-label": "Retry loading spatial index",
          children: "Retry"
        })
      ]
    });
  }
  const r0 = [
    {
      name: "Quadrantids",
      peak: "Jan 03",
      raDeg: 230.1,
      decDeg: 48.5,
      zhr: 120,
      velocityKmS: 41,
      parent: "2003 EH1"
    },
    {
      name: "Lyrids",
      peak: "Apr 22",
      raDeg: 271.4,
      decDeg: 33.6,
      zhr: 18,
      velocityKmS: 49,
      parent: "C/1861 G1 Thatcher"
    },
    {
      name: "Eta Aquariids",
      peak: "May 06",
      raDeg: 338,
      decDeg: -1,
      zhr: 50,
      velocityKmS: 66,
      parent: "1P/Halley"
    },
    {
      name: "Perseids",
      peak: "Aug 12",
      raDeg: 48.2,
      decDeg: 58.1,
      zhr: 100,
      velocityKmS: 59,
      parent: "109P/Swift-Tuttle"
    },
    {
      name: "Orionids",
      peak: "Oct 21",
      raDeg: 95,
      decDeg: 15.8,
      zhr: 20,
      velocityKmS: 66,
      parent: "1P/Halley"
    },
    {
      name: "Taurids",
      peak: "Nov 05",
      raDeg: 52,
      decDeg: 14,
      zhr: 5,
      velocityKmS: 27,
      parent: "2P/Encke"
    },
    {
      name: "Leonids",
      peak: "Nov 17",
      raDeg: 152.3,
      decDeg: 22.2,
      zhr: 15,
      velocityKmS: 71,
      parent: "55P/Tempel-Tuttle"
    },
    {
      name: "Geminids",
      peak: "Dec 14",
      raDeg: 112.3,
      decDeg: 32.5,
      zhr: 150,
      velocityKmS: 35,
      parent: "3200 Phaethon"
    }
  ], l0 = (() => {
    try {
      const e = "JGAcWQgJ6mBflIDxkwGgbwnESJhwt7CfK1DpfQ1S";
      if (e && e.length > 0) return e;
    } catch {
    }
    return "DEMO_KEY";
  })(), o0 = Sm;
  function wt(e) {
    return e.toISOString().slice(0, 10);
  }
  function Wu(e, t) {
    const n = new Date(e.getTime());
    return n.setUTCDate(n.getUTCDate() + t), n;
  }
  function i0(e, t) {
    return Math.round((t.getTime() - e.getTime()) / lt);
  }
  async function xf(e) {
    const t = new AbortController(), n = setTimeout(() => t.abort(), Em);
    let r;
    try {
      r = await fetch(e, {
        signal: t.signal
      });
    } finally {
      clearTimeout(n);
    }
    if (r.status === 429) {
      const l = new Error(`Rate limit exceeded (HTTP 429): ${e}`);
      throw l.status = 429, l;
    }
    if (!r.ok) {
      const l = new Error(`HTTP ${r.status} fetching ${e}`);
      throw l.status = r.status, l;
    }
    return r;
  }
  function Sf(e) {
    try {
      const t = localStorage.getItem(e);
      if (!t) return null;
      const n = JSON.parse(t);
      return Date.now() - n.cachedAt > vm ? (localStorage.removeItem(e), null) : n.data;
    } catch {
      return null;
    }
  }
  function _f(e, t) {
    try {
      const n = {
        data: t,
        cachedAt: Date.now()
      };
      localStorage.setItem(e, JSON.stringify(n));
    } catch {
    }
  }
  async function Qu(e, t) {
    const n = `neows:${wt(e)}:${wt(t)}`, r = Sf(n);
    if (r) return r;
    const l = `${xm}?start_date=${wt(e)}&end_date=${wt(t)}&api_key=${l0}`, i = await (await xf(l)).json();
    return _f(n, i), i;
  }
  async function ki(e, t) {
    if (i0(e, t) <= $u) return Qu(e, t);
    const r = [];
    let l = e;
    for (; l.getTime() <= t.getTime(); ) {
      const s = Wu(l, $u - 1), u = s < t ? s : t;
      r.push(Qu(l, u)), l = Wu(u, 1);
    }
    const o = await Promise.all(r), i = {
      near_earth_objects: {}
    };
    for (const s of o) Object.assign(i.near_earth_objects, s.near_earth_objects);
    return i;
  }
  async function Ef(e, t) {
    const n = `cad:${wt(e)}:${wt(t)}`, r = Sf(n);
    if (r) return r;
    const l = `${o0}/cad.api?date-min=${wt(e)}&date-max=${wt(t)}&dist-max=${wm}`, i = await (await xf(l)).json();
    return _f(n, i), i;
  }
  function Xr(e) {
    var _a2, _b;
    const t = [];
    for (const n of Object.values(e.near_earth_objects)) for (const r of n) {
      const l = r.close_approach_data[0];
      if (!l) continue;
      const o = parseFloat(l.miss_distance.kilometers), i = parseFloat(l.relative_velocity.kilometers_per_second), s = new Date(l.close_approach_date);
      if (o <= 0 || i <= 0 || !isFinite(o) || !isFinite(i) || isNaN(s.getTime())) {
        console.warn(`Skipping NEO ${r.id}: invalid missDistKm=${o}, velocityKmS=${i}, or approachDate=${l.close_approach_date}`);
        continue;
      }
      const c = [
        o / Zt,
        0,
        0
      ];
      t.push({
        id: r.id,
        name: r.name,
        diameterKm: ((_b = (_a2 = r.estimated_diameter) == null ? void 0 : _a2.kilometers) == null ? void 0 : _b.estimated_diameter_max) ?? 0.1,
        hazardous: r.is_potentially_hazardous_asteroid,
        missDistKm: o,
        missDistLunar: parseFloat(l.miss_distance.lunar),
        velocityKmS: i,
        approachDate: s,
        position3d: c
      });
    }
    return t;
  }
  async function Ni() {
    const e = await fetch(_m);
    if (!e.ok) throw new Error(`Failed to load snapshot: HTTP ${e.status}`);
    const t = await e.json();
    return Array.isArray(t) ? {
      near_earth_objects: {}
    } : t;
  }
  class s0 {
    constructor(t) {
      __publicField(this, "onStatusChange");
      this.onStatusChange = t == null ? void 0 : t.onStatusChange;
    }
    async fetchAndIndex(t, n) {
      var _a2, _b, _c2;
      let r = false;
      try {
        await Promise.all([
          this.fetchNeows(t, n),
          this.fetchCad(t, n)
        ]), (_a2 = this.onStatusChange) == null ? void 0 : _a2.call(this, "live");
      } catch (l) {
        console.warn("fetchAndIndex: API fetch failed, falling back to snapshot:", l), l.status === 429 && (r = true);
        try {
          await Ni(), (_b = this.onStatusChange) == null ? void 0 : _b.call(this, r ? "rate-limited" : "snapshot");
        } catch (o) {
          console.warn("fetchAndIndex: snapshot fallback also failed:", o), (_c2 = this.onStatusChange) == null ? void 0 : _c2.call(this, "snapshot");
        }
      }
    }
    async fetchNeows(t, n) {
      return ki(t, n);
    }
    async fetchCad(t, n) {
      return Ef(t, n);
    }
    loadMeteorShowers() {
      return r0.map((t) => ({
        ...t,
        position3d: vf(t.raDeg, t.decDeg)
      }));
    }
  }
  const u0 = "modulepreload", a0 = function(e) {
    return "/Perihelion/" + e;
  }, Ku = {}, c0 = function(t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      l = Promise.allSettled(n.map((u) => {
        if (u = a0(u), u in Ku) return;
        Ku[u] = true;
        const c = u.endsWith(".css"), m = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${m}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : u0, c || (h.as = "script"), h.crossOrigin = "", h.href = u, s && h.setAttribute("nonce", s), document.head.appendChild(h), c) return new Promise((p, g) => {
          h.addEventListener("load", p), h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function o(i) {
      const s = new Event("vite:preloadError", {
        cancelable: true
      });
      if (s.payload = i, window.dispatchEvent(s), !s.defaultPrevented) throw i;
    }
    return l.then((i) => {
      for (const s of i || []) s.status === "rejected" && o(s.reason);
      return t().catch(o);
    });
  };
  function Xu() {
    const e = /* @__PURE__ */ new Map();
    return {
      set(t, n) {
        e.set(t, n);
      },
      get(t) {
        return e.get(t);
      },
      lookup(t) {
        const n = [];
        for (const r of t) {
          const l = e.get(r);
          l !== void 0 && n.push(l);
        }
        return n;
      },
      clear() {
        e.clear();
      },
      getAll() {
        return Array.from(e.values());
      },
      size() {
        return e.size;
      }
    };
  }
  let Mo = null, Yu = null;
  function Io(e, t) {
    const n = e[0] - t[0], r = e[1] - t[1], l = e[2] - t[2];
    return Math.sqrt(n * n + r * r + l * l);
  }
  function f0(e) {
    return {
      point_count: e[0],
      query_count: e[1],
      migration_count: e[2],
      migrating: e[3] !== 0,
      backend_kind: e[4]
    };
  }
  class d0 {
    constructor() {
      __publicField(this, "index", null);
      __publicField(this, "store", Xu());
      __publicField(this, "payloadMap", []);
      __publicField(this, "ready", false);
    }
    async init() {
      if (!this.ready) {
        if (!Mo) {
          const t = await c0(() => import("./perihelion_wasm-rE1MxVDP.js"), []);
          Mo = t.default, Yu = t.WasmBonsaiIndex;
        }
        await Mo(), this.index = new Yu(), this.ready = true;
      }
    }
    isReady() {
      return this.ready;
    }
    insertAll(t) {
      if (!this.index) throw new Error("IndexManager not initialised \u2014 call init() first");
      for (const n of t) {
        const r = this.payloadMap.length, l = BigInt(Math.round(this.index.insert(n.position3d[0], n.position3d[2], r))), o = {
          ...n,
          bonsaiId: l
        };
        this.payloadMap.push(o), this.store.set(l, o);
      }
    }
    rebuild(t) {
      if (!this.index) throw new Error("IndexManager not initialised \u2014 call init() first");
      this.index.clear(), this.store = Xu(), this.payloadMap = [];
      for (const n of t) {
        const r = this.payloadMap.length, l = BigInt(Math.round(this.index.insert(n.position3d[0], n.position3d[2], r))), o = {
          ...n,
          bonsaiId: l
        };
        this.payloadMap.push(o), this.store.set(l, o);
      }
    }
    rangeQuery(t, n) {
      if (!this.index) return [];
      const [r, , l] = t, o = this.index.range_query(r - n, l - n, r + n, l + n), i = [];
      for (let s = 0; s < o.length; s += 2) {
        const u = this.payloadMap[Math.round(o[s + 1])];
        u && Io(u.position3d, t) <= n && i.push(u);
      }
      return i;
    }
    knnQuery(t, n) {
      if (!this.index) return [];
      const r = this.index.knn_query(t[0], t[2], n), l = [];
      for (let o = 0; o < r.length; o += 3) {
        const i = this.payloadMap[Math.round(r[o + 2])];
        i && l.push(i);
      }
      return l.sort((o, i) => Io(o.position3d, t) - Io(i.position3d, t));
    }
    stats() {
      return this.index ? f0(this.index.stats()) : {
        point_count: 0,
        query_count: 0,
        migration_count: 0,
        migrating: false,
        backend_kind: 0
      };
    }
    getStore() {
      return this.store;
    }
  }
  const Gn = xs / 2, p0 = 2 * Math.PI, h0 = yf * Yt;
  function Yr(e, t) {
    const n = [], r = t ?? /* @__PURE__ */ new Date();
    for (let l = 0; l < e.length; l++) {
      const o = e[l], i = parseInt(o.id, 10), s = Math.imul(isNaN(i) ? l : i, 2654435761) >>> 0, u = Math.imul(s, 2246822519) >>> 0, c = Math.imul(u, 3735928559) >>> 0, m = s / 4294967296 * p0, p = (c < 2147483648 ? 1 : -1) * (u / 4294967296) * h0, g = (r.getTime() - o.approachDate.getTime()) / lt;
      try {
        const y = gf(o.approachDate, o.missDistKm, o.velocityKmS, g, m, p);
        n.push({
          ...o,
          position3d: y
        });
      } catch {
      }
    }
    return n;
  }
  function m0() {
    const e = I.useRef(null), t = I.useRef(null), n = I.useRef([]), r = I.useRef(null), l = I.useRef(null), [o, i] = I.useState("live"), [s] = I.useState(() => new d0()), [u, c] = I.useState(null), [m, h] = I.useState(false), p = I.useRef(Gn), [g, y] = I.useState(Gn), [x, M] = I.useState(0), [f, a] = I.useState(new Set(Gu)), [d, v] = I.useState(null), [_, T] = I.useState(() => {
      const E = /* @__PURE__ */ new Date();
      return E.setHours(0, 0, 0, 0), E;
    }), [k, A] = I.useState(false), [H, R] = I.useState(() => ({
      type: "range",
      centre: [
        0,
        1,
        0
      ],
      radiusAU: Gn,
      timestamp: /* @__PURE__ */ new Date()
    })), oe = I.useRef(null), Ze = I.useRef((() => {
      const E = /* @__PURE__ */ new Date();
      return E.setHours(0, 0, 0, 0), E;
    })()), xe = I.useCallback((E, D) => {
      const L = r.current, U = t.current;
      if (!L || !L.isReady() || !U) return;
      const q = E >= xs, b = D.size === Gu.length;
      let me;
      if (q) me = L.getStore().getAll();
      else {
        const ne = pn(Ze.current ?? /* @__PURE__ */ new Date());
        me = L.rangeQuery(ne, E);
      }
      const Je = b ? me : me.filter((ne) => D.has(Mm(ne)));
      if (q && b) U.highlightNeos(null);
      else {
        const ne = new Set(Je.map((Ot) => Ot.bonsaiId).filter((Ot) => Ot !== void 0));
        U.highlightNeos(ne);
      }
      M(Je.length);
    }, []), Nr = I.useCallback((E) => {
      p.current = E, y(E), xe(E, f);
      const D = pn(Ze.current ?? /* @__PURE__ */ new Date());
      R({
        type: "range",
        centre: D,
        radiusAU: E,
        timestamp: /* @__PURE__ */ new Date()
      });
    }, [
      f,
      xe
    ]), Xl = I.useCallback((E) => {
      a((D) => {
        const L = new Set(D);
        return L.has(E) ? L.delete(E) : L.add(E), xe(p.current, L), L;
      });
    }, [
      xe
    ]), Mn = I.useCallback((E) => {
      const D = r.current, L = t.current;
      if (!D || !D.isReady() || !L) return;
      const U = E.trim().toLowerCase();
      if (!U) {
        xe(p.current, f);
        return;
      }
      const b = D.getStore().getAll().find((me) => me.name.toLowerCase().includes(U));
      b && (v(b), L.selectNeo(b), L.flyToNeo(b));
    }, [
      f,
      xe
    ]), In = I.useCallback(async (E) => {
      var _a2;
      const D = r.current, L = t.current;
      if (!D || !D.isReady() || !L) return;
      (_a2 = oe.current) == null ? void 0 : _a2.abort();
      const U = new AbortController();
      oe.current = U, T(E), Ze.current = E;
      const q = setTimeout(() => {
        U.signal.aborted || A(true);
      }, 2e3);
      try {
        const b = Math.floor(hf / 2), me = new Date(E.getTime() - b * lt), Je = new Date(E.getTime() + b * lt);
        let ne = [];
        try {
          const qe = await ki(me, Je);
          if (U.signal.aborted) return;
          ne = Yr(Xr(qe), E), i("live");
        } catch (qe) {
          const ct = qe.status;
          try {
            const Yl = await Ni();
            if (U.signal.aborted) return;
            ne = Yr(Xr(Yl), E), i(ct === 429 ? "rate-limited" : "snapshot");
          } catch {
            ne = [], i("snapshot");
          }
        }
        if (U.signal.aborted) return;
        D.rebuild(ne);
        const Ot = D.getStore().getAll();
        L.updateNeoPoints(Ot), L.updatePlanetPositions(E), v(null);
        const ee = l.current;
        if (ee) {
          ee.setCamera(L.getCamera());
          const qe = L.getNeoPoints();
          qe && ee.setNeoPoints(qe, L.displayNeos);
        }
        xe(p.current, f);
      } finally {
        clearTimeout(q), U.signal.aborted || A(false);
      }
    }, [
      f,
      xe
    ]), N = I.useCallback((E, D) => {
      var _a2;
      (_a2 = t.current) == null ? void 0 : _a2.setLayerVisible(E, D);
    }, []), O = I.useCallback((E) => {
      var _a2;
      (_a2 = t.current) == null ? void 0 : _a2.setLayerVisible("hazardOnly", E);
    }, []), z = I.useCallback(async () => {
      const E = r.current, D = t.current;
      if (!(!E || !D)) try {
        await E.init(), h(false);
        const L = n.current;
        E.rebuild(L);
        const U = E.getStore().getAll();
        D.updateNeoPoints(U), v(null);
        const q = l.current;
        if (q) {
          q.setCamera(D.getCamera());
          const ne = D.getNeoPoints();
          ne && q.setNeoPoints(ne, D.displayNeos);
        }
        const b = pn(/* @__PURE__ */ new Date()), me = E.rangeQuery(b, Gn), Je = new Set(me.map((ne) => ne.bonsaiId).filter((ne) => ne !== void 0));
        D.highlightNeos(Je), M(me.length);
      } catch (L) {
        console.error("WASM retry failed:", L), h(true);
      }
    }, []), W = I.useCallback((E) => {
      const D = r.current, L = t.current;
      if (!D || !D.isReady() || !L) return;
      const U = D.knnQuery([
        E.x,
        E.y,
        E.z
      ], 1);
      U.length > 0 && (v(U[0]), L.selectNeo(U[0]), R({
        type: "knn",
        centre: [
          E.x,
          E.y,
          E.z
        ],
        k: 1,
        timestamp: /* @__PURE__ */ new Date()
      }));
    }, []);
    return I.useEffect(() => {
      if (!e.current) return;
      const E = new $m();
      t.current = E, E.init(e.current), c(E);
      const D = s;
      r.current = D;
      const L = new Hm((ee) => {
        v(ee), E.selectNeo(ee);
      }, (ee) => W(ee));
      l.current = L;
      const U = e.current, q = (ee) => {
        L.onMouseClick(ee, U);
      }, b = (ee) => {
        L.onMouseMove(ee, U);
      };
      U.addEventListener("click", q), U.addEventListener("mousemove", b);
      let me = false;
      async function Je() {
        const ee = /* @__PURE__ */ new Date(), qe = new Date(ee.getTime() + km * lt);
        let ct = [];
        try {
          const [Lt] = await Promise.all([
            ki(ee, qe),
            Ef(ee, qe)
          ]);
          ct = Yr(Xr(Lt), ee), i("live");
        } catch (Lt) {
          const Cr = Lt.status;
          try {
            const Zl = await Ni();
            ct = Yr(Xr(Zl), ee), i(Cr === 429 ? "rate-limited" : "snapshot");
          } catch {
            ct = [], i("snapshot");
          }
        }
        if (me) return;
        E.updateNeoPoints(ct), E.updatePlanetPositions(/* @__PURE__ */ new Date()), n.current = ct;
        const Yl = new s0();
        E.updateMeteorShowers(Yl.loadMeteorShowers());
        try {
          if (await D.init(), me) return;
          h(false), D.rebuild(ct);
          const Lt = D.getStore().getAll();
          E.updateNeoPoints(Lt), v(null), L.setCamera(E.getCamera());
          const Cr = E.getNeoPoints();
          Cr && L.setNeoPoints(Cr, E.displayNeos);
          const Zl = pn(/* @__PURE__ */ new Date()), _s = D.rangeQuery(Zl, Gn), kf = new Set(_s.map((Jl) => Jl.bonsaiId).filter((Jl) => Jl !== void 0));
          E.highlightNeos(kf), M(_s.length);
        } catch (Lt) {
          console.error("WASM init/rebuild failed:", Lt), h(true);
        }
      }
      Je();
      const ne = 60 * 60 * 1e3, Ot = setInterval(() => {
        Je().catch((ee) => {
          console.warn("Auto-refresh failed:", ee);
        });
      }, ne);
      return () => {
        me = true, clearInterval(Ot), U.removeEventListener("click", q), U.removeEventListener("mousemove", b), E.dispose(), t.current = null, c(null), r.current = null, l.current = null;
      };
    }, [
      s,
      W
    ]), w.jsxs("div", {
      className: "relative w-screen h-screen bg-[#000008] overflow-hidden",
      children: [
        w.jsx(Bm, {
          status: o
        }),
        w.jsx("div", {
          ref: e,
          className: "w-full h-full"
        }),
        m && w.jsx(n0, {
          onRetry: z
        }),
        k && w.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none",
          "aria-label": "Rebuilding index",
          role: "status",
          children: w.jsx("span", {
            className: "text-[#00FF88] text-4xl animate-spin",
            children: "\u27F3"
          })
        }),
        w.jsx("div", {
          className: "absolute top-4 right-2 left-2 sm:left-auto sm:right-4 flex flex-col gap-2 items-stretch sm:items-end pointer-events-none",
          children: w.jsx("div", {
            className: "pointer-events-auto",
            children: w.jsx(Qm, {
              neo: d
            })
          })
        }),
        w.jsxs("div", {
          className: "absolute bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-auto flex flex-col gap-2 items-stretch sm:items-start p-2 sm:p-0 bg-black/60 sm:bg-transparent rounded-t-xl sm:rounded-none",
          children: [
            w.jsx(Ym, {
              onSearch: Mn,
              disabled: m
            }),
            w.jsx(t0, {
              date: _,
              onChange: In,
              isLoading: k,
              disabled: m
            }),
            w.jsx(Gm, {
              radiusAU: g,
              matchCount: x,
              onChange: Nr,
              disabled: m
            }),
            w.jsx(Xm, {
              activeCategories: f,
              onCategoryToggle: Xl,
              onLayerToggle: N,
              onHazardFilter: O
            })
          ]
        }),
        w.jsx("div", {
          className: "hidden sm:flex absolute bottom-4 right-4 flex-col gap-2 items-end",
          children: w.jsx(e0, {
            indexManager: s,
            scene: u,
            currentQuery: H
          })
        })
      ]
    });
  }
  af(document.getElementById("root")).render(w.jsx(I.StrictMode, {
    children: w.jsx(m0, {})
  }));
})();
