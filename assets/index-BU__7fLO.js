var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import * as T from "three";
import { OrbitControls as kf } from "three/addons/controls/OrbitControls.js";
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
  var Xu = {
    exports: {}
  }, Ol = {}, Yu = {
    exports: {}
  }, F = {};
  var Er = Symbol.for("react.element"), Nf = Symbol.for("react.portal"), Cf = Symbol.for("react.fragment"), Tf = Symbol.for("react.strict_mode"), Pf = Symbol.for("react.profiler"), Af = Symbol.for("react.provider"), Mf = Symbol.for("react.context"), If = Symbol.for("react.forward_ref"), Rf = Symbol.for("react.suspense"), Of = Symbol.for("react.memo"), Lf = Symbol.for("react.lazy"), ks = Symbol.iterator;
  function zf(e) {
    return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Zu = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ju = Object.assign, qu = {};
  function Mn(e, t, n) {
    this.props = e, this.context = t, this.refs = qu, this.updater = n || Zu;
  }
  Mn.prototype.isReactComponent = {};
  Mn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Mn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function bu() {
  }
  bu.prototype = Mn.prototype;
  function Ti(e, t, n) {
    this.props = e, this.context = t, this.refs = qu, this.updater = n || Zu;
  }
  var Pi = Ti.prototype = new bu();
  Pi.constructor = Ti;
  Ju(Pi, Mn.prototype);
  Pi.isPureReactComponent = true;
  var Ns = Array.isArray, ea = Object.prototype.hasOwnProperty, Ai = {
    current: null
  }, ta = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function na(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ea.call(t, r) && !ta.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
      for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
      l.children = u;
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
      $$typeof: Er,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Ai.current
    };
  }
  function Df(e, t) {
    return {
      $$typeof: Er,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Mi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Er;
  }
  function Ff(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Cs = /\/+/g;
  function bl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ff("" + e.key) : t.toString(36);
  }
  function Jr(e, t, n, r, l) {
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
          case Er:
          case Nf:
            i = true;
        }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + bl(i, 0) : r, Ns(l) ? (n = "", e != null && (n = e.replace(Cs, "$&/") + "/"), Jr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (Mi(l) && (l = Df(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Cs, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Ns(e)) for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + bl(o, s);
      i += Jr(o, t, n, u, l);
    }
    else if (u = zf(e), typeof u == "function") for (e = u.call(e), s = 0; !(o = e.next()).done; ) o = o.value, u = r + bl(o, s++), i += Jr(o, t, n, u, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function Pr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Jr(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function jf(e) {
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
  var we = {
    current: null
  }, qr = {
    transition: null
  }, Uf = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: qr,
    ReactCurrentOwner: Ai
  };
  function ra() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  F.Children = {
    map: Pr,
    forEach: function(e, t, n) {
      Pr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return Pr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return Pr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Mi(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  F.Component = Mn;
  F.Fragment = Cf;
  F.Profiler = Pf;
  F.PureComponent = Ti;
  F.StrictMode = Tf;
  F.Suspense = Rf;
  F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
  F.act = ra;
  F.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ju({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = Ai.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
      for (u in t) ea.call(t, u) && !ta.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
      s = Array(u);
      for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
      r.children = s;
    }
    return {
      $$typeof: Er,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
    };
  };
  F.createContext = function(e) {
    return e = {
      $$typeof: Mf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: Af,
      _context: e
    }, e.Consumer = e;
  };
  F.createElement = na;
  F.createFactory = function(e) {
    var t = na.bind(null, e);
    return t.type = e, t;
  };
  F.createRef = function() {
    return {
      current: null
    };
  };
  F.forwardRef = function(e) {
    return {
      $$typeof: If,
      render: e
    };
  };
  F.isValidElement = Mi;
  F.lazy = function(e) {
    return {
      $$typeof: Lf,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: jf
    };
  };
  F.memo = function(e, t) {
    return {
      $$typeof: Of,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  F.startTransition = function(e) {
    var t = qr.transition;
    qr.transition = {};
    try {
      e();
    } finally {
      qr.transition = t;
    }
  };
  F.unstable_act = ra;
  F.useCallback = function(e, t) {
    return we.current.useCallback(e, t);
  };
  F.useContext = function(e) {
    return we.current.useContext(e);
  };
  F.useDebugValue = function() {
  };
  F.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e);
  };
  F.useEffect = function(e, t) {
    return we.current.useEffect(e, t);
  };
  F.useId = function() {
    return we.current.useId();
  };
  F.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n);
  };
  F.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t);
  };
  F.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t);
  };
  F.useMemo = function(e, t) {
    return we.current.useMemo(e, t);
  };
  F.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n);
  };
  F.useRef = function(e) {
    return we.current.useRef(e);
  };
  F.useState = function(e) {
    return we.current.useState(e);
  };
  F.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n);
  };
  F.useTransition = function() {
    return we.current.useTransition();
  };
  F.version = "18.3.1";
  Yu.exports = F;
  var M = Yu.exports;
  var $f = M, Hf = Symbol.for("react.element"), Bf = Symbol.for("react.fragment"), Gf = Object.prototype.hasOwnProperty, Vf = $f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function la(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Gf.call(t, r) && !Wf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Hf,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Vf.current
    };
  }
  Ol.Fragment = Bf;
  Ol.jsx = la;
  Ol.jsxs = la;
  Xu.exports = Ol;
  var v = Xu.exports, oa = {
    exports: {}
  }, Me = {}, ia = {
    exports: {}
  }, sa = {};
  (function(e) {
    function t(k, O) {
      var z = k.length;
      k.push(O);
      e: for (; 0 < z; ) {
        var Q = z - 1 >>> 1, J = k[Q];
        if (0 < l(J, O)) k[Q] = O, k[z] = J, z = Q;
        else break e;
      }
    }
    function n(k) {
      return k.length === 0 ? null : k[0];
    }
    function r(k) {
      if (k.length === 0) return null;
      var O = k[0], z = k.pop();
      if (z !== O) {
        k[0] = z;
        e: for (var Q = 0, J = k.length, P = J >>> 1; Q < P; ) {
          var L = 2 * (Q + 1) - 1, D = k[L], j = L + 1, se = k[j];
          if (0 > l(D, z)) j < J && 0 > l(se, D) ? (k[Q] = se, k[j] = z, Q = j) : (k[Q] = D, k[L] = z, Q = L);
          else if (j < J && 0 > l(se, z)) k[Q] = se, k[j] = z, Q = j;
          else break e;
        }
      }
      return O;
    }
    function l(k, O) {
      var z = k.sortIndex - O.sortIndex;
      return z !== 0 ? z : k.id - O.id;
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
    var u = [], c = [], m = 1, h = null, p = 3, g = false, y = false, x = false, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(k) {
      for (var O = n(c); O !== null; ) {
        if (O.callback === null) r(c);
        else if (O.startTime <= k) r(c), O.sortIndex = O.expirationTime, t(u, O);
        else break;
        O = n(c);
      }
    }
    function w(k) {
      if (x = false, d(k), !y) if (n(u) !== null) y = true, On(_);
      else {
        var O = n(c);
        O !== null && Ln(w, O.startTime - k);
      }
    }
    function _(k, O) {
      y = false, x && (x = false, f(A), A = -1), g = true;
      var z = p;
      try {
        for (d(O), h = n(u); h !== null && (!(h.expirationTime > O) || k && !le()); ) {
          var Q = h.callback;
          if (typeof Q == "function") {
            h.callback = null, p = h.priorityLevel;
            var J = Q(h.expirationTime <= O);
            O = e.unstable_now(), typeof J == "function" ? h.callback = J : h === n(u) && r(u), d(O);
          } else r(u);
          h = n(u);
        }
        if (h !== null) var P = true;
        else {
          var L = n(c);
          L !== null && Ln(w, L.startTime - O), P = false;
        }
        return P;
      } finally {
        h = null, p = z, g = false;
      }
    }
    var C = false, E = null, A = -1, H = 5, R = -1;
    function le() {
      return !(e.unstable_now() - R < H);
    }
    function ct() {
      if (E !== null) {
        var k = e.unstable_now();
        R = k;
        var O = true;
        try {
          O = E(true, k);
        } finally {
          O ? Je() : (C = false, E = null);
        }
      } else C = false;
    }
    var Je;
    if (typeof a == "function") Je = function() {
      a(ct);
    };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Yl = je.port2;
      je.port1.onmessage = ct, Je = function() {
        Yl.postMessage(null);
      };
    } else Je = function() {
      I(ct, 0);
    };
    function On(k) {
      E = k, C || (C = true, Je());
    }
    function Ln(k, O) {
      A = I(function() {
        k(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, e.unstable_continueExecution = function() {
      y || g || (y = true, On(_));
    }, e.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < k ? Math.floor(1e3 / k) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(u);
    }, e.unstable_next = function(k) {
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
        return k();
      } finally {
        p = z;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(k, O) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var z = p;
      p = k;
      try {
        return O();
      } finally {
        p = z;
      }
    }, e.unstable_scheduleCallback = function(k, O, z) {
      var Q = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, k) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = z + J, k = {
        id: m++,
        callback: O,
        priorityLevel: k,
        startTime: z,
        expirationTime: J,
        sortIndex: -1
      }, z > Q ? (k.sortIndex = z, t(c, k), n(u) === null && k === n(c) && (x ? (f(A), A = -1) : x = true, Ln(w, z - Q))) : (k.sortIndex = J, t(u, k), y || g || (y = true, On(_))), k;
    }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(k) {
      var O = p;
      return function() {
        var z = p;
        p = O;
        try {
          return k.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    };
  })(sa);
  ia.exports = sa;
  var Qf = ia.exports;
  var Kf = M, Ae = Qf;
  function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ua = /* @__PURE__ */ new Set(), ir = {};
  function bt(e, t) {
    En(e, t), En(e + "Capture", t);
  }
  function En(e, t) {
    for (ir[e] = t, e = 0; e < t.length; e++) ua.add(t[e]);
  }
  var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oo = Object.prototype.hasOwnProperty, Xf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ts = {}, Ps = {};
  function Yf(e) {
    return Oo.call(Ps, e) ? true : Oo.call(Ts, e) ? false : Xf.test(e) ? Ps[e] = true : (Ts[e] = true, false);
  }
  function Zf(e, t, n, r) {
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
  function Jf(e, t, n, r) {
    if (t === null || typeof t > "u" || Zf(e, t, n, r)) return true;
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
  function xe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new xe(e, 0, false, e, null, false, false);
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
    ce[t] = new xe(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    ce[e] = new xe(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    ce[e] = new xe(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new xe(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    ce[e] = new xe(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    ce[e] = new xe(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    ce[e] = new xe(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    ce[e] = new xe(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Ii = /[\-:]([a-z])/g;
  function Ri(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ii, Ri);
    ce[t] = new xe(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ii, Ri);
    ce[t] = new xe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Ii, Ri);
    ce[t] = new xe(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    ce[e] = new xe(e, 1, false, e.toLowerCase(), null, false, false);
  });
  ce.xlinkHref = new xe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    ce[e] = new xe(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Oi(e, t, n, r) {
    var l = ce.hasOwnProperty(t) ? ce[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jf(t, n, l, r) && (n = null), r || l === null ? Yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var at = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ar = Symbol.for("react.element"), rn = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), Lo = Symbol.for("react.profiler"), aa = Symbol.for("react.provider"), ca = Symbol.for("react.context"), zi = Symbol.for("react.forward_ref"), zo = Symbol.for("react.suspense"), Do = Symbol.for("react.suspense_list"), Di = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), fa = Symbol.for("react.offscreen"), As = Symbol.iterator;
  function zn(e) {
    return e === null || typeof e != "object" ? null : (e = As && e[As] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, eo;
  function Kn(e) {
    if (eo === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      eo = t && t[1] || "";
    }
    return `
` + eo + e;
  }
  var to = false;
  function no(e, t) {
    if (!e || to) return "";
    to = true;
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
      to = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
  }
  function qf(e) {
    switch (e.tag) {
      case 5:
        return Kn(e.type);
      case 16:
        return Kn("Lazy");
      case 13:
        return Kn("Suspense");
      case 19:
        return Kn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = no(e.type, false), e;
      case 11:
        return e = no(e.type.render, false), e;
      case 1:
        return e = no(e.type, true), e;
      default:
        return "";
    }
  }
  function Fo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ln:
        return "Fragment";
      case rn:
        return "Portal";
      case Lo:
        return "Profiler";
      case Li:
        return "StrictMode";
      case zo:
        return "Suspense";
      case Do:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ca:
        return (e.displayName || "Context") + ".Consumer";
      case aa:
        return (e._context.displayName || "Context") + ".Provider";
      case zi:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Di:
        return t = e.displayName || null, t !== null ? t : Fo(e.type) || "Memo";
      case ht:
        t = e._payload, e = e._init;
        try {
          return Fo(e(t));
        } catch {
        }
    }
    return null;
  }
  function bf(e) {
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
        return Fo(t);
      case 8:
        return t === Li ? "StrictMode" : "Mode";
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
  function Mt(e) {
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
  function da(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ed(e) {
    var t = da(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Mr(e) {
    e._valueTracker || (e._valueTracker = ed(e));
  }
  function pa(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = da(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function al(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jo(e, t) {
    var n = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function Ms(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Mt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function ha(e, t) {
    t = t.checked, t != null && Oi(e, "checked", t, false);
  }
  function Uo(e, t) {
    ha(e, t);
    var n = Mt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $o(e, t.type, n) : t.hasOwnProperty("defaultValue") && $o(e, t.type, Mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Is(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $o(e, t, n) {
    (t !== "number" || al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Xn = Array.isArray;
  function gn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Mt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ho(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Rs(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(S(92));
        if (Xn(n)) {
          if (1 < n.length) throw Error(S(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: Mt(n)
    };
  }
  function ma(e, t) {
    var n = Mt(t.value), r = Mt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Os(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ya(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ya(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ir, ga = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jn = {
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
  }, td = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Jn).forEach(function(e) {
    td.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
    });
  });
  function va(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
  }
  function wa(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = va(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var nd = Y({
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
  function Go(e, t) {
    if (t) {
      if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(S(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(S(62));
    }
  }
  function Vo(e, t) {
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
  var Wo = null;
  function Fi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qo = null, vn = null, wn = null;
  function Ls(e) {
    if (e = Cr(e)) {
      if (typeof Qo != "function") throw Error(S(280));
      var t = e.stateNode;
      t && (t = jl(t), Qo(e.stateNode, e.type, t));
    }
  }
  function xa(e) {
    vn ? wn ? wn.push(e) : wn = [
      e
    ] : vn = e;
  }
  function Sa() {
    if (vn) {
      var e = vn, t = wn;
      if (wn = vn = null, Ls(e), t) for (e = 0; e < t.length; e++) Ls(t[e]);
    }
  }
  function _a(e, t) {
    return e(t);
  }
  function Ea() {
  }
  var ro = false;
  function ka(e, t, n) {
    if (ro) return e(t, n);
    ro = true;
    try {
      return _a(e, t, n);
    } finally {
      ro = false, (vn !== null || wn !== null) && (Ea(), Sa());
    }
  }
  function ur(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = jl(n);
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
  var Ko = false;
  if (ot) try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", {
      get: function() {
        Ko = true;
      }
    }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
  } catch {
    Ko = false;
  }
  function rd(e, t, n, r, l, o, i, s, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (m) {
      this.onError(m);
    }
  }
  var qn = false, cl = null, fl = false, Xo = null, ld = {
    onError: function(e) {
      qn = true, cl = e;
    }
  };
  function od(e, t, n, r, l, o, i, s, u) {
    qn = false, cl = null, rd.apply(ld, arguments);
  }
  function id(e, t, n, r, l, o, i, s, u) {
    if (od.apply(this, arguments), qn) {
      if (qn) {
        var c = cl;
        qn = false, cl = null;
      } else throw Error(S(198));
      fl || (fl = true, Xo = c);
    }
  }
  function en(e) {
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
  function Na(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function zs(e) {
    if (en(e) !== e) throw Error(S(188));
  }
  function sd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = en(e), t === null) throw Error(S(188));
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
          if (o === n) return zs(l), e;
          if (o === r) return zs(l), t;
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
  function Ca(e) {
    return e = sd(e), e !== null ? Ta(e) : null;
  }
  function Ta(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ta(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Pa = Ae.unstable_scheduleCallback, Ds = Ae.unstable_cancelCallback, ud = Ae.unstable_shouldYield, ad = Ae.unstable_requestPaint, q = Ae.unstable_now, cd = Ae.unstable_getCurrentPriorityLevel, ji = Ae.unstable_ImmediatePriority, Aa = Ae.unstable_UserBlockingPriority, dl = Ae.unstable_NormalPriority, fd = Ae.unstable_LowPriority, Ma = Ae.unstable_IdlePriority, Ll = null, Ye = null;
  function dd(e) {
    if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
      Ye.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ge = Math.clz32 ? Math.clz32 : md, pd = Math.log, hd = Math.LN2;
  function md(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pd(e) / hd | 0) | 0;
  }
  var Rr = 64, Or = 4194304;
  function Yn(e) {
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
  function pl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var s = i & ~l;
      s !== 0 ? r = Yn(s) : (o &= i, o !== 0 && (r = Yn(o)));
    } else i = n & ~l, i !== 0 ? r = Yn(i) : o !== 0 && (r = Yn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ge(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function yd(e, t) {
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
  function gd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Ge(o), s = 1 << i, u = l[i];
      u === -1 ? (!(s & n) || s & r) && (l[i] = yd(s, t)) : u <= t && (e.expiredLanes |= s), o &= ~s;
    }
  }
  function Yo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ia() {
    var e = Rr;
    return Rr <<= 1, !(Rr & 4194240) && (Rr = 64), e;
  }
  function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ge(t), e[t] = n;
  }
  function vd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ge(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Ui(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ge(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var $ = 0;
  function Ra(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Oa, $i, La, za, Da, Zo = false, Lr = [], St = null, _t = null, Et = null, ar = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Map(), yt = [], wd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Fs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        St = null;
        break;
      case "dragenter":
      case "dragleave":
        _t = null;
        break;
      case "mouseover":
      case "mouseout":
        Et = null;
        break;
      case "pointerover":
      case "pointerout":
        ar.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cr.delete(t.pointerId);
    }
  }
  function Fn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = Cr(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function xd(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return St = Fn(St, e, t, n, r, l), true;
      case "dragenter":
        return _t = Fn(_t, e, t, n, r, l), true;
      case "mouseover":
        return Et = Fn(Et, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return ar.set(o, Fn(ar.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, cr.set(o, Fn(cr.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function Fa(e) {
    var t = $t(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Na(n), t !== null) {
            e.blockedOn = t, Da(e.priority, function() {
              La(n);
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
  function br(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Wo = r, n.target.dispatchEvent(r), Wo = null;
      } else return t = Cr(n), t !== null && $i(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function js(e, t, n) {
    br(e) && n.delete(t);
  }
  function Sd() {
    Zo = false, St !== null && br(St) && (St = null), _t !== null && br(_t) && (_t = null), Et !== null && br(Et) && (Et = null), ar.forEach(js), cr.forEach(js);
  }
  function jn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zo || (Zo = true, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Sd)));
  }
  function fr(e) {
    function t(l) {
      return jn(l, e);
    }
    if (0 < Lr.length) {
      jn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (St !== null && jn(St, e), _t !== null && jn(_t, e), Et !== null && jn(Et, e), ar.forEach(t), cr.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) Fa(n), n.blockedOn === null && yt.shift();
  }
  var xn = at.ReactCurrentBatchConfig, hl = true;
  function _d(e, t, n, r) {
    var l = $, o = xn.transition;
    xn.transition = null;
    try {
      $ = 1, Hi(e, t, n, r);
    } finally {
      $ = l, xn.transition = o;
    }
  }
  function Ed(e, t, n, r) {
    var l = $, o = xn.transition;
    xn.transition = null;
    try {
      $ = 4, Hi(e, t, n, r);
    } finally {
      $ = l, xn.transition = o;
    }
  }
  function Hi(e, t, n, r) {
    if (hl) {
      var l = Jo(e, t, n, r);
      if (l === null) mo(e, t, r, ml, n), Fs(e, r);
      else if (xd(l, e, t, n, r)) r.stopPropagation();
      else if (Fs(e, r), t & 4 && -1 < wd.indexOf(e)) {
        for (; l !== null; ) {
          var o = Cr(l);
          if (o !== null && Oa(o), o = Jo(e, t, n, r), o === null && mo(e, t, r, ml, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else mo(e, t, r, null, n);
    }
  }
  var ml = null;
  function Jo(e, t, n, r) {
    if (ml = null, e = Fi(r), e = $t(e), e !== null) if (t = en(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Na(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ml = e, null;
  }
  function ja(e) {
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
        switch (cd()) {
          case ji:
            return 1;
          case Aa:
            return 4;
          case dl:
          case fd:
            return 16;
          case Ma:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var vt = null, Bi = null, el = null;
  function Ua() {
    if (el) return el;
    var e, t = Bi, n = t.length, r, l = "value" in vt ? vt.value : vt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return el = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function tl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zr() {
    return true;
  }
  function Us() {
    return false;
  }
  function Ie(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? zr : Us, this.isPropagationStopped = Us, this;
    }
    return Y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = zr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = zr);
      },
      persist: function() {
      },
      isPersistent: zr
    }), t;
  }
  var In = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gi = Ie(In), Nr = Y({}, In, {
    view: 0,
    detail: 0
  }), kd = Ie(Nr), oo, io, Un, zl = Y({}, Nr, {
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
    getModifierState: Vi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Un && (Un && e.type === "mousemove" ? (oo = e.screenX - Un.screenX, io = e.screenY - Un.screenY) : io = oo = 0, Un = e), oo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : io;
    }
  }), $s = Ie(zl), Nd = Y({}, zl, {
    dataTransfer: 0
  }), Cd = Ie(Nd), Td = Y({}, Nr, {
    relatedTarget: 0
  }), so = Ie(Td), Pd = Y({}, In, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ad = Ie(Pd), Md = Y({}, In, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Id = Ie(Md), Rd = Y({}, In, {
    data: 0
  }), Hs = Ie(Rd), Od = {
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
  }, Ld = {
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
  }, zd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Dd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zd[e]) ? !!t[e] : false;
  }
  function Vi() {
    return Dd;
  }
  var Fd = Y({}, Nr, {
    key: function(e) {
      if (e.key) {
        var t = Od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ld[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vi,
    charCode: function(e) {
      return e.type === "keypress" ? tl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), jd = Ie(Fd), Ud = Y({}, zl, {
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
  }), Bs = Ie(Ud), $d = Y({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vi
  }), Hd = Ie($d), Bd = Y({}, In, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gd = Ie(Bd), Vd = Y({}, zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wd = Ie(Vd), Qd = [
    9,
    13,
    27,
    32
  ], Wi = ot && "CompositionEvent" in window, bn = null;
  ot && "documentMode" in document && (bn = document.documentMode);
  var Kd = ot && "TextEvent" in window && !bn, $a = ot && (!Wi || bn && 8 < bn && 11 >= bn), Gs = " ", Vs = false;
  function Ha(e, t) {
    switch (e) {
      case "keyup":
        return Qd.indexOf(t.keyCode) !== -1;
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
  function Ba(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var on = false;
  function Xd(e, t) {
    switch (e) {
      case "compositionend":
        return Ba(t);
      case "keypress":
        return t.which !== 32 ? null : (Vs = true, Gs);
      case "textInput":
        return e = t.data, e === Gs && Vs ? null : e;
      default:
        return null;
    }
  }
  function Yd(e, t) {
    if (on) return e === "compositionend" || !Wi && Ha(e, t) ? (e = Ua(), el = Bi = vt = null, on = false, e) : null;
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
        return $a && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Zd = {
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
  function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zd[e.type] : t === "textarea";
  }
  function Ga(e, t, n, r) {
    xa(r), t = yl(t, "onChange"), 0 < t.length && (n = new Gi("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var er = null, dr = null;
  function Jd(e) {
    ec(e, 0);
  }
  function Dl(e) {
    var t = an(e);
    if (pa(t)) return e;
  }
  function qd(e, t) {
    if (e === "change") return t;
  }
  var Va = false;
  if (ot) {
    var uo;
    if (ot) {
      var ao = "oninput" in document;
      if (!ao) {
        var Qs = document.createElement("div");
        Qs.setAttribute("oninput", "return;"), ao = typeof Qs.oninput == "function";
      }
      uo = ao;
    } else uo = false;
    Va = uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ks() {
    er && (er.detachEvent("onpropertychange", Wa), dr = er = null);
  }
  function Wa(e) {
    if (e.propertyName === "value" && Dl(dr)) {
      var t = [];
      Ga(t, dr, e, Fi(e)), ka(Jd, t);
    }
  }
  function bd(e, t, n) {
    e === "focusin" ? (Ks(), er = t, dr = n, er.attachEvent("onpropertychange", Wa)) : e === "focusout" && Ks();
  }
  function ep(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(dr);
  }
  function tp(e, t) {
    if (e === "click") return Dl(t);
  }
  function np(e, t) {
    if (e === "input" || e === "change") return Dl(t);
  }
  function rp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var We = typeof Object.is == "function" ? Object.is : rp;
  function pr(e, t) {
    if (We(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Oo.call(t, l) || !We(e[l], t[l])) return false;
    }
    return true;
  }
  function Xs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ys(e, t) {
    var n = Xs(e);
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
      n = Xs(n);
    }
  }
  function Qa(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Qa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Ka() {
    for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = al(e.document);
    }
    return t;
  }
  function Qi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function lp(e) {
    var t = Ka(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qa(n.ownerDocument.documentElement, n)) {
      if (r !== null && Qi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ys(n, o);
          var i = Ys(n, r);
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
  var op = ot && "documentMode" in document && 11 >= document.documentMode, sn = null, qo = null, tr = null, bo = false;
  function Zs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bo || sn == null || sn !== al(r) || (r = sn, "selectionStart" in r && Qi(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), tr && pr(tr, r) || (tr = r, r = yl(qo, "onSelect"), 0 < r.length && (t = new Gi("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = sn)));
  }
  function Dr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var un = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd")
  }, co = {}, Xa = {};
  ot && (Xa = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
  function Fl(e) {
    if (co[e]) return co[e];
    if (!un[e]) return e;
    var t = un[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xa) return co[e] = t[n];
    return e;
  }
  var Ya = Fl("animationend"), Za = Fl("animationiteration"), Ja = Fl("animationstart"), qa = Fl("transitionend"), ba = /* @__PURE__ */ new Map(), Js = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rt(e, t) {
    ba.set(e, t), bt(t, [
      e
    ]);
  }
  for (var fo = 0; fo < Js.length; fo++) {
    var po = Js[fo], ip = po.toLowerCase(), sp = po[0].toUpperCase() + po.slice(1);
    Rt(ip, "on" + sp);
  }
  Rt(Ya, "onAnimationEnd");
  Rt(Za, "onAnimationIteration");
  Rt(Ja, "onAnimationStart");
  Rt("dblclick", "onDoubleClick");
  Rt("focusin", "onFocus");
  Rt("focusout", "onBlur");
  Rt(qa, "onTransitionEnd");
  En("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  En("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  En("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  En("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  bt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), up = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
  function qs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, id(r, t, void 0, e), e.currentTarget = null;
  }
  function ec(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i], u = s.instance, c = s.currentTarget;
          if (s = s.listener, u !== o && l.isPropagationStopped()) break e;
          qs(l, s, c), o = u;
        }
        else for (i = 0; i < r.length; i++) {
          if (s = r[i], u = s.instance, c = s.currentTarget, s = s.listener, u !== o && l.isPropagationStopped()) break e;
          qs(l, s, c), o = u;
        }
      }
    }
    if (fl) throw e = Xo, fl = false, Xo = null, e;
  }
  function G(e, t) {
    var n = t[li];
    n === void 0 && (n = t[li] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (tc(t, e, 2, false), n.add(r));
  }
  function ho(e, t, n) {
    var r = 0;
    t && (r |= 4), tc(n, e, r, t);
  }
  var Fr = "_reactListening" + Math.random().toString(36).slice(2);
  function hr(e) {
    if (!e[Fr]) {
      e[Fr] = true, ua.forEach(function(n) {
        n !== "selectionchange" && (up.has(n) || ho(n, false, e), ho(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fr] || (t[Fr] = true, ho("selectionchange", false, t));
    }
  }
  function tc(e, t, n, r) {
    switch (ja(t)) {
      case 1:
        var l = _d;
        break;
      case 4:
        l = Ed;
        break;
      default:
        l = Hi;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function mo(e, t, n, r, l) {
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
          if (i = $t(s), i === null) return;
          if (u = i.tag, u === 5 || u === 6) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    ka(function() {
      var c = o, m = Fi(n), h = [];
      e: {
        var p = ba.get(e);
        if (p !== void 0) {
          var g = Gi, y = e;
          switch (e) {
            case "keypress":
              if (tl(n) === 0) break e;
            case "keydown":
            case "keyup":
              g = jd;
              break;
            case "focusin":
              y = "focus", g = so;
              break;
            case "focusout":
              y = "blur", g = so;
              break;
            case "beforeblur":
            case "afterblur":
              g = so;
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
              g = $s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Cd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Hd;
              break;
            case Ya:
            case Za:
            case Ja:
              g = Ad;
              break;
            case qa:
              g = Gd;
              break;
            case "scroll":
              g = kd;
              break;
            case "wheel":
              g = Wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Id;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Bs;
          }
          var x = (t & 4) !== 0, I = !x && e === "scroll", f = x ? p !== null ? p + "Capture" : null : p;
          x = [];
          for (var a = c, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = ur(a, f), w != null && x.push(mr(a, w, d)))), I) break;
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
          if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== Wo && (y = n.relatedTarget || n.fromElement) && ($t(y) || y[it])) break e;
          if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = c, y = y ? $t(y) : null, y !== null && (I = en(y), y !== I || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = c), g !== y)) {
            if (x = $s, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = Bs, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = g == null ? p : an(g), d = y == null ? p : an(y), p = new x(w, a + "leave", g, n, m), p.target = I, p.relatedTarget = d, w = null, $t(m) === c && (x = new x(f, a + "enter", y, n, m), x.target = d, x.relatedTarget = I, w = x), I = w, g && y) t: {
              for (x = g, f = y, a = 0, d = x; d; d = nn(d)) a++;
              for (d = 0, w = f; w; w = nn(w)) d++;
              for (; 0 < a - d; ) x = nn(x), a--;
              for (; 0 < d - a; ) f = nn(f), d--;
              for (; a--; ) {
                if (x === f || f !== null && x === f.alternate) break t;
                x = nn(x), f = nn(f);
              }
              x = null;
            }
            else x = null;
            g !== null && bs(h, p, g, x, false), y !== null && I !== null && bs(h, I, y, x, true);
          }
        }
        e: {
          if (p = c ? an(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var _ = qd;
          else if (Ws(p)) if (Va) _ = np;
          else {
            _ = ep;
            var C = bd;
          }
          else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (_ = tp);
          if (_ && (_ = _(e, c))) {
            Ga(h, _, n, m);
            break e;
          }
          C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && $o(p, "number", p.value);
        }
        switch (C = c ? an(c) : window, e) {
          case "focusin":
            (Ws(C) || C.contentEditable === "true") && (sn = C, qo = c, tr = null);
            break;
          case "focusout":
            tr = qo = sn = null;
            break;
          case "mousedown":
            bo = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bo = false, Zs(h, n, m);
            break;
          case "selectionchange":
            if (op) break;
          case "keydown":
          case "keyup":
            Zs(h, n, m);
        }
        var E;
        if (Wi) e: {
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
        else on ? Ha(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
        A && ($a && n.locale !== "ko" && (on || A !== "onCompositionStart" ? A === "onCompositionEnd" && on && (E = Ua()) : (vt = m, Bi = "value" in vt ? vt.value : vt.textContent, on = true)), C = yl(c, A), 0 < C.length && (A = new Hs(A, e, null, n, m), h.push({
          event: A,
          listeners: C
        }), E ? A.data = E : (E = Ba(n), E !== null && (A.data = E)))), (E = Kd ? Xd(e, n) : Yd(e, n)) && (c = yl(c, "onBeforeInput"), 0 < c.length && (m = new Hs("onBeforeInput", "beforeinput", null, n, m), h.push({
          event: m,
          listeners: c
        }), m.data = E));
      }
      ec(h, t);
    });
  }
  function mr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function yl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = ur(e, n), o != null && r.unshift(mr(e, o, l)), o = ur(e, t), o != null && r.push(mr(e, o, l))), e = e.return;
    }
    return r;
  }
  function nn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n, u = s.alternate, c = s.stateNode;
      if (u !== null && u === r) break;
      s.tag === 5 && c !== null && (s = c, l ? (u = ur(n, o), u != null && i.unshift(mr(n, u, s))) : l || (u = ur(n, o), u != null && i.push(mr(n, u, s)))), n = n.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var ap = /\r\n?/g, cp = /\u0000|\uFFFD/g;
  function eu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ap, `
`).replace(cp, "");
  }
  function jr(e, t, n) {
    if (t = eu(t), eu(e) !== t && n) throw Error(S(425));
  }
  function gl() {
  }
  var ei = null, ti = null;
  function ni(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ri = typeof setTimeout == "function" ? setTimeout : void 0, fp = typeof clearTimeout == "function" ? clearTimeout : void 0, tu = typeof Promise == "function" ? Promise : void 0, dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof tu < "u" ? function(e) {
    return tu.resolve(null).then(e).catch(pp);
  } : ri;
  function pp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), fr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    fr(t);
  }
  function kt(e) {
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
  function nu(e) {
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
  var Rn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + Rn, yr = "__reactProps$" + Rn, it = "__reactContainer$" + Rn, li = "__reactEvents$" + Rn, hp = "__reactListeners$" + Rn, mp = "__reactHandles$" + Rn;
  function $t(e) {
    var t = e[Xe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[it] || n[Xe]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = nu(e); e !== null; ) {
          if (n = e[Xe]) return n;
          e = nu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Cr(e) {
    return e = e[Xe] || e[it], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function an(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
  }
  function jl(e) {
    return e[yr] || null;
  }
  var oi = [], cn = -1;
  function Ot(e) {
    return {
      current: e
    };
  }
  function V(e) {
    0 > cn || (e.current = oi[cn], oi[cn] = null, cn--);
  }
  function B(e, t) {
    cn++, oi[cn] = e.current, e.current = t;
  }
  var It = {}, he = Ot(It), Ee = Ot(false), Qt = It;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function vl() {
    V(Ee), V(he);
  }
  function ru(e, t, n) {
    if (he.current !== It) throw Error(S(168));
    B(he, t), B(Ee, n);
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, bf(e) || "Unknown", l));
    return Y({}, n, r);
  }
  function wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Qt = he.current, B(he, e), B(Ee, Ee.current), true;
  }
  function lu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = nc(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, V(Ee), V(he), B(he, e)) : V(Ee), B(Ee, n);
  }
  var tt = null, Ul = false, go = false;
  function rc(e) {
    tt === null ? tt = [
      e
    ] : tt.push(e);
  }
  function yp(e) {
    Ul = true, rc(e);
  }
  function Lt() {
    if (!go && tt !== null) {
      go = true;
      var e = 0, t = $;
      try {
        var n = tt;
        for ($ = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        tt = null, Ul = false;
      } catch (l) {
        throw tt !== null && (tt = tt.slice(e + 1)), Pa(ji, Lt), l;
      } finally {
        $ = t, go = false;
      }
    }
    return null;
  }
  var fn = [], dn = 0, xl = null, Sl = 0, Re = [], Oe = 0, Kt = null, nt = 1, rt = "";
  function jt(e, t) {
    fn[dn++] = Sl, fn[dn++] = xl, xl = e, Sl = t;
  }
  function lc(e, t, n) {
    Re[Oe++] = nt, Re[Oe++] = rt, Re[Oe++] = Kt, Kt = e;
    var r = nt;
    e = rt;
    var l = 32 - Ge(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Ge(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, nt = 1 << 32 - Ge(t) + l | n << l | r, rt = o + e;
    } else nt = 1 << o | n << l | r, rt = e;
  }
  function Ki(e) {
    e.return !== null && (jt(e, 1), lc(e, 1, 0));
  }
  function Xi(e) {
    for (; e === xl; ) xl = fn[--dn], fn[dn] = null, Sl = fn[--dn], fn[dn] = null;
    for (; e === Kt; ) Kt = Re[--Oe], Re[Oe] = null, rt = Re[--Oe], Re[Oe] = null, nt = Re[--Oe], Re[Oe] = null;
  }
  var Pe = null, Te = null, W = false, Be = null;
  function oc(e, t) {
    var n = Le(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function ou(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, Te = kt(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, Te = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Kt !== null ? {
          id: nt,
          overflow: rt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, Te = null, true) : false;
      default:
        return false;
    }
  }
  function ii(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function si(e) {
    if (W) {
      var t = Te;
      if (t) {
        var n = t;
        if (!ou(e, t)) {
          if (ii(e)) throw Error(S(418));
          t = kt(n.nextSibling);
          var r = Pe;
          t && ou(e, t) ? oc(r, n) : (e.flags = e.flags & -4097 | 2, W = false, Pe = e);
        }
      } else {
        if (ii(e)) throw Error(S(418));
        e.flags = e.flags & -4097 | 2, W = false, Pe = e;
      }
    }
  }
  function iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Pe = e;
  }
  function Ur(e) {
    if (e !== Pe) return false;
    if (!W) return iu(e), W = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ni(e.type, e.memoizedProps)), t && (t = Te)) {
      if (ii(e)) throw ic(), Error(S(418));
      for (; t; ) oc(e, t), t = kt(t.nextSibling);
    }
    if (iu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Te = kt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Te = null;
      }
    } else Te = Pe ? kt(e.stateNode.nextSibling) : null;
    return true;
  }
  function ic() {
    for (var e = Te; e; ) e = kt(e.nextSibling);
  }
  function Nn() {
    Te = Pe = null, W = false;
  }
  function Yi(e) {
    Be === null ? Be = [
      e
    ] : Be.push(e);
  }
  var gp = at.ReactCurrentBatchConfig;
  function $n(e, t, n) {
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
  function $r(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function su(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sc(e) {
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
      return f = Pt(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function s(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = ko(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function u(f, a, d, w) {
      var _ = d.type;
      return _ === ln ? m(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ht && su(_) === a.type) ? (w = l(a, d.props), w.ref = $n(f, a, d), w.return = f, w) : (w = ul(d.type, d.key, d.props, null, f.mode, w), w.ref = $n(f, a, d), w.return = f, w);
    }
    function c(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = No(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function m(f, a, d, w, _) {
      return a === null || a.tag !== 7 ? (a = Vt(d, f.mode, w, _), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function h(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = ko("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ar:
            return d = ul(a.type, a.key, a.props, null, f.mode, d), d.ref = $n(f, null, a), d.return = f, d;
          case rn:
            return a = No(a, f.mode, d), a.return = f, a;
          case ht:
            var w = a._init;
            return h(f, w(a._payload), d);
        }
        if (Xn(a) || zn(a)) return a = Vt(a, f.mode, d, null), a.return = f, a;
        $r(f, a);
      }
      return null;
    }
    function p(f, a, d, w) {
      var _ = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return _ !== null ? null : s(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ar:
            return d.key === _ ? u(f, a, d, w) : null;
          case rn:
            return d.key === _ ? c(f, a, d, w) : null;
          case ht:
            return _ = d._init, p(f, a, _(d._payload), w);
        }
        if (Xn(d) || zn(d)) return _ !== null ? null : m(f, a, d, w, null);
        $r(f, d);
      }
      return null;
    }
    function g(f, a, d, w, _) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, s(a, f, "" + w, _);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ar:
            return f = f.get(w.key === null ? d : w.key) || null, u(a, f, w, _);
          case rn:
            return f = f.get(w.key === null ? d : w.key) || null, c(a, f, w, _);
          case ht:
            var C = w._init;
            return g(f, a, d, C(w._payload), _);
        }
        if (Xn(w) || zn(w)) return f = f.get(d) || null, m(a, f, w, _, null);
        $r(a, w);
      }
      return null;
    }
    function y(f, a, d, w) {
      for (var _ = null, C = null, E = a, A = a = 0, H = null; E !== null && A < d.length; A++) {
        E.index > A ? (H = E, E = null) : H = E.sibling;
        var R = p(f, E, d[A], w);
        if (R === null) {
          E === null && (E = H);
          break;
        }
        e && E && R.alternate === null && t(f, E), a = o(R, a, A), C === null ? _ = R : C.sibling = R, C = R, E = H;
      }
      if (A === d.length) return n(f, E), W && jt(f, A), _;
      if (E === null) {
        for (; A < d.length; A++) E = h(f, d[A], w), E !== null && (a = o(E, a, A), C === null ? _ = E : C.sibling = E, C = E);
        return W && jt(f, A), _;
      }
      for (E = r(f, E); A < d.length; A++) H = g(E, f, A, d[A], w), H !== null && (e && H.alternate !== null && E.delete(H.key === null ? A : H.key), a = o(H, a, A), C === null ? _ = H : C.sibling = H, C = H);
      return e && E.forEach(function(le) {
        return t(f, le);
      }), W && jt(f, A), _;
    }
    function x(f, a, d, w) {
      var _ = zn(d);
      if (typeof _ != "function") throw Error(S(150));
      if (d = _.call(d), d == null) throw Error(S(151));
      for (var C = _ = null, E = a, A = a = 0, H = null, R = d.next(); E !== null && !R.done; A++, R = d.next()) {
        E.index > A ? (H = E, E = null) : H = E.sibling;
        var le = p(f, E, R.value, w);
        if (le === null) {
          E === null && (E = H);
          break;
        }
        e && E && le.alternate === null && t(f, E), a = o(le, a, A), C === null ? _ = le : C.sibling = le, C = le, E = H;
      }
      if (R.done) return n(f, E), W && jt(f, A), _;
      if (E === null) {
        for (; !R.done; A++, R = d.next()) R = h(f, R.value, w), R !== null && (a = o(R, a, A), C === null ? _ = R : C.sibling = R, C = R);
        return W && jt(f, A), _;
      }
      for (E = r(f, E); !R.done; A++, R = d.next()) R = g(E, f, A, R.value, w), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? A : R.key), a = o(R, a, A), C === null ? _ = R : C.sibling = R, C = R);
      return e && E.forEach(function(ct) {
        return t(f, ct);
      }), W && jt(f, A), _;
    }
    function I(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === ln && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ar:
            e: {
              for (var _ = d.key, C = a; C !== null; ) {
                if (C.key === _) {
                  if (_ = d.type, _ === ln) {
                    if (C.tag === 7) {
                      n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (C.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ht && su(_) === C.type) {
                    n(f, C.sibling), a = l(C, d.props), a.ref = $n(f, C, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, C);
                  break;
                } else t(f, C);
                C = C.sibling;
              }
              d.type === ln ? (a = Vt(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = ul(d.type, d.key, d.props, null, f.mode, w), w.ref = $n(f, a, d), w.return = f, f = w);
            }
            return i(f);
          case rn:
            e: {
              for (C = d.key; a !== null; ) {
                if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = No(d, f.mode, w), a.return = f, f = a;
            }
            return i(f);
          case ht:
            return C = d._init, I(f, a, C(d._payload), w);
        }
        if (Xn(d)) return y(f, a, d, w);
        if (zn(d)) return x(f, a, d, w);
        $r(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ko(d, f.mode, w), a.return = f, f = a), i(f)) : n(f, a);
    }
    return I;
  }
  var Cn = sc(true), uc = sc(false), _l = Ot(null), El = null, pn = null, Zi = null;
  function Ji() {
    Zi = pn = El = null;
  }
  function qi(e) {
    var t = _l.current;
    V(_l), e._currentValue = t;
  }
  function ui(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sn(e, t) {
    El = e, Zi = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = true), e.firstContext = null);
  }
  function De(e) {
    var t = e._currentValue;
    if (Zi !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, pn === null) {
      if (El === null) throw Error(S(308));
      pn = e, El.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else pn = pn.next = e;
    return t;
  }
  var Ht = null;
  function bi(e) {
    Ht === null ? Ht = [
      e
    ] : Ht.push(e);
  }
  function ac(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, bi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, st(e, r);
  }
  function st(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var mt = false;
  function es(e) {
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
  function cc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, U & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, st(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, bi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, st(e, n);
  }
  function nl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ui(e, n);
    }
  }
  function uu(e, t) {
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
  function kl(e, t, n, r) {
    var l = e.updateQueue;
    mt = false;
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
                mt = true;
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
      Yt |= i, e.lanes = i, e.memoizedState = h;
    }
  }
  function au(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
        l.call(r);
      }
    }
  }
  var Tr = {}, Ze = Ot(Tr), gr = Ot(Tr), vr = Ot(Tr);
  function Bt(e) {
    if (e === Tr) throw Error(S(174));
    return e;
  }
  function ts(e, t) {
    switch (B(vr, t), B(gr, e), B(Ze, Tr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bo(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bo(t, e);
    }
    V(Ze), B(Ze, t);
  }
  function Tn() {
    V(Ze), V(gr), V(vr);
  }
  function fc(e) {
    Bt(vr.current);
    var t = Bt(Ze.current), n = Bo(t, e.type);
    t !== n && (B(gr, e), B(Ze, n));
  }
  function ns(e) {
    gr.current === e && (V(Ze), V(gr));
  }
  var K = Ot(0);
  function Nl(e) {
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
  var vo = [];
  function rs() {
    for (var e = 0; e < vo.length; e++) vo[e]._workInProgressVersionPrimary = null;
    vo.length = 0;
  }
  var rl = at.ReactCurrentDispatcher, wo = at.ReactCurrentBatchConfig, Xt = 0, X = null, ne = null, oe = null, Cl = false, nr = false, wr = 0, vp = 0;
  function fe() {
    throw Error(S(321));
  }
  function ls(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!We(e[n], t[n])) return false;
    return true;
  }
  function os(e, t, n, r, l, o) {
    if (Xt = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? _p : Ep, e = n(r, l), nr) {
      o = 0;
      do {
        if (nr = false, wr = 0, 25 <= o) throw Error(S(301));
        o += 1, oe = ne = null, t.updateQueue = null, rl.current = kp, e = n(r, l);
      } while (nr);
    }
    if (rl.current = Tl, t = ne !== null && ne.next !== null, Xt = 0, oe = ne = X = null, Cl = false, t) throw Error(S(300));
    return e;
  }
  function is() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function Ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return oe === null ? X.memoizedState = oe = e : oe = oe.next = e, oe;
  }
  function Fe() {
    if (ne === null) {
      var e = X.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ne.next;
    var t = oe === null ? X.memoizedState : oe.next;
    if (t !== null) oe = t, ne = e;
    else {
      if (e === null) throw Error(S(310));
      ne = e, e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null
      }, oe === null ? X.memoizedState = oe = e : oe = oe.next = e;
    }
    return oe;
  }
  function xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xo(e) {
    var t = Fe(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = ne, l = r.baseQueue, o = n.pending;
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
        if ((Xt & m) === m) u !== null && (u = u.next = {
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
          u === null ? (s = u = h, i = r) : u = u.next = h, X.lanes |= m, Yt |= m;
        }
        c = c.next;
      } while (c !== null && c !== o);
      u === null ? i = r : u.next = s, We(r, t.memoizedState) || (_e = true), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, X.lanes |= o, Yt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function So(e) {
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
      We(o, t.memoizedState) || (_e = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function dc() {
  }
  function pc(e, t) {
    var n = X, r = Fe(), l = t(), o = !We(r.memoizedState, l);
    if (o && (r.memoizedState = l, _e = true), r = r.queue, ss(yc.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Sr(9, mc.bind(null, n, r, l, t), void 0, null), ie === null) throw Error(S(349));
      Xt & 30 || hc(n, t, l);
    }
    return l;
  }
  function hc(e, t, n) {
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
  function mc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, gc(t) && vc(e);
  }
  function yc(e, t, n) {
    return n(function() {
      gc(t) && vc(e);
    });
  }
  function gc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !We(e, n);
    } catch {
      return true;
    }
  }
  function vc(e) {
    var t = st(e, 1);
    t !== null && Ve(t, e, 1, -1);
  }
  function cu(e) {
    var t = Ke();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Sp.bind(null, X, e), [
      t.memoizedState,
      e
    ];
  }
  function Sr(e, t, n, r) {
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
  function wc() {
    return Fe().memoizedState;
  }
  function ll(e, t, n, r) {
    var l = Ke();
    X.flags |= e, l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function $l(e, t, n, r) {
    var l = Fe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ne !== null) {
      var i = ne.memoizedState;
      if (o = i.destroy, r !== null && ls(r, i.deps)) {
        l.memoizedState = Sr(t, n, o, r);
        return;
      }
    }
    X.flags |= e, l.memoizedState = Sr(1 | t, n, o, r);
  }
  function fu(e, t) {
    return ll(8390656, 8, e, t);
  }
  function ss(e, t) {
    return $l(2048, 8, e, t);
  }
  function xc(e, t) {
    return $l(4, 2, e, t);
  }
  function Sc(e, t) {
    return $l(4, 4, e, t);
  }
  function _c(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ec(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, $l(4, 4, _c.bind(null, t, e), n);
  }
  function us() {
  }
  function kc(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function Nc(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function Cc(e, t, n) {
    return Xt & 21 ? (We(n, t) || (n = Ia(), X.lanes |= n, Yt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, _e = true), e.memoizedState = n);
  }
  function wp(e, t) {
    var n = $;
    $ = n !== 0 && 4 > n ? n : 4, e(true);
    var r = wo.transition;
    wo.transition = {};
    try {
      e(false), t();
    } finally {
      $ = n, wo.transition = r;
    }
  }
  function Tc() {
    return Fe().memoizedState;
  }
  function xp(e, t, n) {
    var r = Tt(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Pc(e)) Ac(t, n);
    else if (n = ac(e, t, n, r), n !== null) {
      var l = ve();
      Ve(n, e, r, l), Mc(n, t, r);
    }
  }
  function Sp(e, t, n) {
    var r = Tt(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Pc(e)) Ac(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, s = o(i, n);
        if (l.hasEagerState = true, l.eagerState = s, We(s, i)) {
          var u = t.interleaved;
          u === null ? (l.next = l, bi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = ac(e, t, l, r), n !== null && (l = ve(), Ve(n, e, r, l), Mc(n, t, r));
    }
  }
  function Pc(e) {
    var t = e.alternate;
    return e === X || t !== null && t === X;
  }
  function Ac(e, t) {
    nr = Cl = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Mc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ui(e, n);
    }
  }
  var Tl = {
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
  }, _p = {
    readContext: De,
    useCallback: function(e, t) {
      return Ke().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: De,
    useEffect: fu,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, ll(4194308, 4, _c.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return ll(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return ll(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ke();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = Ke();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = xp.bind(null, X, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = Ke();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: cu,
    useDebugValue: us,
    useDeferredValue: function(e) {
      return Ke().memoizedState = e;
    },
    useTransition: function() {
      var e = cu(false), t = e[0];
      return e = wp.bind(null, e[1]), Ke().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = X, l = Ke();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (n = t(), ie === null) throw Error(S(349));
        Xt & 30 || hc(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, fu(yc.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, Sr(9, mc.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = Ke(), t = ie.identifierPrefix;
      if (W) {
        var n = rt, r = nt;
        n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = vp++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Ep = {
    readContext: De,
    useCallback: kc,
    useContext: De,
    useEffect: ss,
    useImperativeHandle: Ec,
    useInsertionEffect: xc,
    useLayoutEffect: Sc,
    useMemo: Nc,
    useReducer: xo,
    useRef: wc,
    useState: function() {
      return xo(xr);
    },
    useDebugValue: us,
    useDeferredValue: function(e) {
      var t = Fe();
      return Cc(t, ne.memoizedState, e);
    },
    useTransition: function() {
      var e = xo(xr)[0], t = Fe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Tc,
    unstable_isNewReconciler: false
  }, kp = {
    readContext: De,
    useCallback: kc,
    useContext: De,
    useEffect: ss,
    useImperativeHandle: Ec,
    useInsertionEffect: xc,
    useLayoutEffect: Sc,
    useMemo: Nc,
    useReducer: So,
    useRef: wc,
    useState: function() {
      return So(xr);
    },
    useDebugValue: us,
    useDeferredValue: function(e) {
      var t = Fe();
      return ne === null ? t.memoizedState = e : Cc(t, ne.memoizedState, e);
    },
    useTransition: function() {
      var e = So(xr)[0], t = Fe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Tc,
    unstable_isNewReconciler: false
  };
  function $e(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ai(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Hl = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? en(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ve(), l = Tt(e), o = lt(r, l);
      o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Ve(t, e, l, r), nl(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ve(), l = Tt(e), o = lt(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Ve(t, e, l, r), nl(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ve(), r = Tt(e), l = lt(n, r);
      l.tag = 2, t != null && (l.callback = t), t = Nt(e, l, r), t !== null && (Ve(t, e, r, n), nl(t, e, r));
    }
  };
  function du(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !pr(n, r) || !pr(l, o) : true;
  }
  function Ic(e, t, n) {
    var r = false, l = It, o = t.contextType;
    return typeof o == "object" && o !== null ? o = De(o) : (l = ke(t) ? Qt : he.current, r = t.contextTypes, o = (r = r != null) ? kn(e, l) : It), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function pu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
  }
  function ci(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, es(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = De(o) : (o = ke(t) ? Qt : he.current, l.context = kn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ai(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Hl.enqueueReplaceState(l, l.state, null), kl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
    try {
      var n = "", r = t;
      do
        n += qf(r), r = r.return;
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
  function _o(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function fi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Np = typeof WeakMap == "function" ? WeakMap : Map;
  function Rc(e, t, n) {
    n = lt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      Al || (Al = true, Si = r), fi(e, t);
    }, n;
  }
  function Oc(e, t, n) {
    n = lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        fi(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      fi(e, t), typeof r != "function" && (Ct === null ? Ct = /* @__PURE__ */ new Set([
        this
      ]) : Ct.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      });
    }), n;
  }
  function hu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Np();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Up.bind(null, e, t, n), t.then(e, e));
  }
  function mu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function yu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e);
  }
  var Cp = at.ReactCurrentOwner, _e = false;
  function ge(e, t, n, r) {
    t.child = e === null ? uc(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function gu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Sn(t, l), r = os(e, t, n, r, o, l), n = is(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (W && n && Ki(t), t.flags |= 1, ge(e, t, r, l), t.child);
  }
  function vu(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ys(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Lc(e, t, o, r, l)) : (e = ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : pr, n(i, r) && e.ref === t.ref) return ut(e, t, l);
    }
    return t.flags |= 1, e = Pt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Lc(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (pr(o, r) && e.ref === t.ref) if (_e = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (_e = true);
      else return t.lanes = e.lanes, ut(e, t, l);
    }
    return di(e, t, n, r, l);
  }
  function zc(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, B(mn, Ce), Ce |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, B(mn, Ce), Ce |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, B(mn, Ce), Ce |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, B(mn, Ce), Ce |= r;
    return ge(e, t, l, n), t.child;
  }
  function Dc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function di(e, t, n, r, l) {
    var o = ke(n) ? Qt : he.current;
    return o = kn(t, o), Sn(t, l), n = os(e, t, n, r, o, l), r = is(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (W && r && Ki(t), t.flags |= 1, ge(e, t, n, l), t.child);
  }
  function wu(e, t, n, r, l) {
    if (ke(n)) {
      var o = true;
      wl(t);
    } else o = false;
    if (Sn(t, l), t.stateNode === null) ol(e, t), Ic(t, n, r), ci(t, n, r, l), r = true;
    else if (e === null) {
      var i = t.stateNode, s = t.memoizedProps;
      i.props = s;
      var u = i.context, c = n.contextType;
      typeof c == "object" && c !== null ? c = De(c) : (c = ke(n) ? Qt : he.current, c = kn(t, c));
      var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== c) && pu(t, i, r, c), mt = false;
      var p = t.memoizedState;
      i.state = p, kl(t, r, i, l), u = t.memoizedState, s !== r || p !== u || Ee.current || mt ? (typeof m == "function" && (ai(t, n, m, r), u = t.memoizedState), (s = mt || du(t, n, s, r, p, u, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      i = t.stateNode, cc(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : $e(t.type, s), i.props = c, h = t.pendingProps, p = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = De(u) : (u = ke(n) ? Qt : he.current, u = kn(t, u));
      var g = n.getDerivedStateFromProps;
      (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== h || p !== u) && pu(t, i, r, u), mt = false, p = t.memoizedState, i.state = p, kl(t, r, i, l);
      var y = t.memoizedState;
      s !== h || p !== y || Ee.current || mt ? (typeof g == "function" && (ai(t, n, g, r), y = t.memoizedState), (c = mt || du(t, n, c, r, p, y, u) || false) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return pi(e, t, n, r, o, l);
  }
  function pi(e, t, n, r, l, o) {
    Dc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && lu(t, n, false), ut(e, t, o);
    r = t.stateNode, Cp.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Cn(t, e.child, null, o), t.child = Cn(t, null, s, o)) : ge(e, t, s, o), t.memoizedState = r.state, l && lu(t, n, true), t.child;
  }
  function Fc(e) {
    var t = e.stateNode;
    t.pendingContext ? ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ru(e, t.context, false), ts(e, t.containerInfo);
  }
  function xu(e, t, n, r, l) {
    return Nn(), Yi(l), t.flags |= 256, ge(e, t, n, r), t.child;
  }
  var hi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function mi(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function jc(e, t, n) {
    var r = t.pendingProps, l = K.current, o = false, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), s ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(K, l & 1), e === null) return si(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Vl(i, r, 0, null), e = Vt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = mi(n), t.memoizedState = hi, e) : as(t, i));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Tp(e, t, i, r, s, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
      var u = {
        mode: "hidden",
        children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Pt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = Pt(s, o) : (o = Vt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? mi(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = hi, r;
    }
    return o = e.child, e = o.sibling, r = Pt(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function as(e, t) {
    return t = Vl({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hr(e, t, n, r) {
    return r !== null && Yi(r), Cn(t, e.child, null, n), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Tp(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = _o(Error(S(422))), Hr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Vl({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Vt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Cn(t, e.child, null, i), t.child.memoizedState = mi(i), t.memoizedState = hi, o);
    if (!(t.mode & 1)) return Hr(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
      return r = s, o = Error(S(419)), r = _o(o, r, void 0), Hr(e, t, i, r);
    }
    if (s = (i & e.childLanes) !== 0, _e || s) {
      if (r = ie, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, st(e, l), Ve(r, e, l, -1));
      }
      return ms(), r = _o(Error(S(421))), Hr(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $p.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Te = kt(l.nextSibling), Pe = t, W = true, Be = null, e !== null && (Re[Oe++] = nt, Re[Oe++] = rt, Re[Oe++] = Kt, nt = e.id, rt = e.overflow, Kt = t), t = as(t, r.children), t.flags |= 4096, t);
  }
  function Su(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ui(e.return, t, n);
  }
  function Eo(e, t, n, r, l) {
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
  function Uc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ge(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
        else if (e.tag === 19) Su(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Eo(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Eo(t, true, n, null, o);
        break;
      case "together":
        Eo(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ol(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Yt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
      for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Pp(e, t, n) {
    switch (t.tag) {
      case 3:
        Fc(t), Nn();
        break;
      case 5:
        fc(t);
        break;
      case 1:
        ke(t.type) && wl(t);
        break;
      case 4:
        ts(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        B(_l, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (B(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jc(e, t, n) : (B(K, K.current & 1), e = ut(e, t, n), e !== null ? e.sibling : null);
        B(K, K.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Uc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(K, K.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, zc(e, t, n);
    }
    return ut(e, t, n);
  }
  var $c, yi, Hc, Bc;
  $c = function(e, t) {
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
  yi = function() {
  };
  Hc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Bt(Ze.current);
      var o = null;
      switch (n) {
        case "input":
          l = jo(e, l), r = jo(e, r), o = [];
          break;
        case "select":
          l = Y({}, l, {
            value: void 0
          }), r = Y({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = Ho(e, l), r = Ho(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
      }
      Go(n, r);
      var i;
      n = null;
      for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
        var s = l[c];
        for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ir.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
      for (c in r) {
        var u = r[c];
        if (s = l == null ? void 0 : l[c], r.hasOwnProperty(c) && u !== s && (u != null || s != null)) if (c === "style") if (s) {
          for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
        } else n || (o || (o = []), o.push(c, n)), n = u;
        else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ir.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e), o || s === u || (o = [])) : (o = o || []).push(c, u));
      }
      n && (o = o || []).push("style", n);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Bc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Hn(e, t) {
    if (!W) switch (e.tailMode) {
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
  function Ap(e, t, n) {
    var r = t.pendingProps;
    switch (Xi(t), t.tag) {
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
        return ke(t.type) && vl(), de(t), null;
      case 3:
        return r = t.stateNode, Tn(), V(Ee), V(he), rs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ur(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Be !== null && (ki(Be), Be = null))), yi(e, t), de(t), null;
      case 5:
        ns(t);
        var l = Bt(vr.current);
        if (n = t.type, e !== null && t.stateNode != null) Hc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(S(166));
            return de(t), null;
          }
          if (e = Bt(Ze.current), Ur(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Xe] = t, r[yr] = o, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < Zn.length; l++) G(Zn[l], r);
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
                Ms(r, o), G("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, G("invalid", r);
                break;
              case "textarea":
                Rs(r, o), G("invalid", r);
            }
            Go(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== true && jr(r.textContent, s, e), l = [
                "children",
                s
              ]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== true && jr(r.textContent, s, e), l = [
                "children",
                "" + s
              ]) : ir.hasOwnProperty(i) && s != null && i === "onScroll" && G("scroll", r);
            }
            switch (n) {
              case "input":
                Mr(r), Is(r, o, true);
                break;
              case "textarea":
                Mr(r), Os(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = gl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ya(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Xe] = t, e[yr] = r, $c(e, t, false, false), t.stateNode = e;
            e: {
              switch (i = Vo(n, r), n) {
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
                  for (l = 0; l < Zn.length; l++) G(Zn[l], e);
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
                  Ms(e, r), l = jo(e, r), G("invalid", e);
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
                  Rs(e, r), l = Ho(e, r), G("invalid", e);
                  break;
                default:
                  l = r;
              }
              Go(n, l), s = l;
              for (o in s) if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style" ? wa(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ga(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && sr(e, u) : typeof u == "number" && sr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ir.hasOwnProperty(o) ? u != null && o === "onScroll" && G("scroll", e) : u != null && Oi(e, o, u, i));
              }
              switch (n) {
                case "input":
                  Mr(e), Is(e, r, false);
                  break;
                case "textarea":
                  Mr(e), Os(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Mt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? gn(e, !!r.multiple, o, false) : r.defaultValue != null && gn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = gl);
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
        if (e && t.stateNode != null) Bc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
          if (n = Bt(vr.current), Bt(Ze.current), Ur(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (o = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
              case 3:
                jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xe] = t, t.stateNode = r;
        }
        return de(t), null;
      case 13:
        if (V(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (W && Te !== null && t.mode & 1 && !(t.flags & 128)) ic(), Nn(), t.flags |= 98560, o = false;
          else if (o = Ur(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(S(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
              o[Xe] = t;
            } else Nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            de(t), o = false;
          } else Be !== null && (ki(Be), Be = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? re === 0 && (re = 3) : ms())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
      case 4:
        return Tn(), yi(e, t), e === null && hr(t.stateNode.containerInfo), de(t), null;
      case 10:
        return qi(t.type._context), de(t), null;
      case 17:
        return ke(t.type) && vl(), de(t), null;
      case 19:
        if (V(K), o = t.memoizedState, o === null) return de(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Hn(o, false);
        else {
          if (re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = Nl(e), i !== null) {
              for (t.flags |= 128, Hn(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return B(K, K.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && q() > An && (t.flags |= 128, r = true, Hn(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Nl(i), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hn(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return de(t), null;
          } else 2 * q() - o.renderingStartTime > An && n !== 1073741824 && (t.flags |= 128, r = true, Hn(o, false), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = K.current, B(K, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
      case 22:
      case 23:
        return hs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Mp(e, t) {
    switch (Xi(t), t.tag) {
      case 1:
        return ke(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Tn(), V(Ee), V(he), rs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ns(t), null;
      case 13:
        if (V(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          Nn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return V(K), null;
      case 4:
        return Tn(), null;
      case 10:
        return qi(t.type._context), null;
      case 22:
      case 23:
        return hs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Br = false, pe = false, Ip = typeof WeakSet == "function" ? WeakSet : Set, N = null;
  function hn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Z(e, t, r);
    }
    else n.current = null;
  }
  function gi(e, t, n) {
    try {
      n();
    } catch (r) {
      Z(e, t, r);
    }
  }
  var _u = false;
  function Rp(e, t) {
    if (ei = hl, e = Ka(), Qi(e)) {
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
    for (ti = {
      focusedElem: e,
      selectionRange: n
    }, hl = false, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
    else for (; N !== null; ) {
      t = N;
      try {
        var y = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (y !== null) {
              var x = y.memoizedProps, I = y.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : $e(t.type, x), I);
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
      } catch (w) {
        Z(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, N = e;
        break;
      }
      N = t.return;
    }
    return y = _u, _u = false, y;
  }
  function rr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && gi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bl(e, t) {
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
  function vi(e) {
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
  function Gc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[yr], delete t[li], delete t[hp], delete t[mp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Vc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Eu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
    else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
  }
  function xi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (xi(e, t, n), e = e.sibling; e !== null; ) xi(e, t, n), e = e.sibling;
  }
  var ue = null, He = false;
  function dt(e, t, n) {
    for (n = n.child; n !== null; ) Wc(e, t, n), n = n.sibling;
  }
  function Wc(e, t, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
      Ye.onCommitFiberUnmount(Ll, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        pe || hn(n, t);
      case 6:
        var r = ue, l = He;
        ue = null, dt(e, t, n), ue = r, He = l, ue !== null && (He ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
        break;
      case 18:
        ue !== null && (He ? (e = ue, n = n.stateNode, e.nodeType === 8 ? yo(e.parentNode, n) : e.nodeType === 1 && yo(e, n), fr(e)) : yo(ue, n.stateNode));
        break;
      case 4:
        r = ue, l = He, ue = n.stateNode.containerInfo, He = true, dt(e, t, n), ue = r, He = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && gi(n, t, i), l = l.next;
          } while (l !== r);
        }
        dt(e, t, n);
        break;
      case 1:
        if (!pe && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
        dt(e, t, n);
        break;
      case 21:
        dt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, dt(e, t, n), pe = r) : dt(e, t, n);
        break;
      default:
        dt(e, t, n);
    }
  }
  function ku(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ip()), t.forEach(function(r) {
        var l = Hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Ue(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ue = s.stateNode, He = false;
              break e;
            case 3:
              ue = s.stateNode.containerInfo, He = true;
              break e;
            case 4:
              ue = s.stateNode.containerInfo, He = true;
              break e;
          }
          s = s.return;
        }
        if (ue === null) throw Error(S(160));
        Wc(o, i, l), ue = null, He = false;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null;
      } catch (c) {
        Z(l, t, c);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
  }
  function Qc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ue(t, e), Qe(e), r & 4) {
          try {
            rr(3, e, e.return), Bl(3, e);
          } catch (x) {
            Z(e, e.return, x);
          }
          try {
            rr(5, e, e.return);
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        break;
      case 1:
        Ue(t, e), Qe(e), r & 512 && n !== null && hn(n, n.return);
        break;
      case 5:
        if (Ue(t, e), Qe(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            sr(l, "");
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, s = e.type, u = e.updateQueue;
          if (e.updateQueue = null, u !== null) try {
            s === "input" && o.type === "radio" && o.name != null && ha(l, o), Vo(s, i);
            var c = Vo(s, o);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i], h = u[i + 1];
              m === "style" ? wa(l, h) : m === "dangerouslySetInnerHTML" ? ga(l, h) : m === "children" ? sr(l, h) : Oi(l, m, h, c);
            }
            switch (s) {
              case "input":
                Uo(l, o);
                break;
              case "textarea":
                ma(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? gn(l, !!o.multiple, g, false) : p !== !!o.multiple && (o.defaultValue != null ? gn(l, !!o.multiple, o.defaultValue, true) : gn(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[yr] = o;
          } catch (x) {
            Z(e, e.return, x);
          }
        }
        break;
      case 6:
        if (Ue(t, e), Qe(e), r & 4) {
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
        if (Ue(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          fr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
        break;
      case 4:
        Ue(t, e), Qe(e);
        break;
      case 13:
        Ue(t, e), Qe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ds = q())), r & 4 && ku(e);
        break;
      case 22:
        if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (c = pe) || m, Ue(t, e), pe = c) : Ue(t, e), Qe(e), r & 8192) {
          if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (N = e, m = e.child; m !== null; ) {
            for (h = N = m; N !== null; ) {
              switch (p = N, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, p, p.return);
                  break;
                case 1:
                  hn(p, p.return);
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
                  hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Cu(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, N = g) : Cu(h);
            }
            m = m.sibling;
          }
          e: for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = va("display", i));
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
        Ue(t, e), Qe(e), r & 4 && ku(e);
        break;
      case 21:
        break;
      default:
        Ue(t, e), Qe(e);
    }
  }
  function Qe(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Vc(n)) {
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
            r.flags & 32 && (sr(l, ""), r.flags &= -33);
            var o = Eu(e);
            xi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, s = Eu(e);
            wi(e, s, i);
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
  function Op(e, t, n) {
    N = e, Kc(e);
  }
  function Kc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var l = N, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Br;
        if (!i) {
          var s = l.alternate, u = s !== null && s.memoizedState !== null || pe;
          s = Br;
          var c = pe;
          if (Br = i, (pe = u) && !c) for (N = l; N !== null; ) i = N, u = i.child, i.tag === 22 && i.memoizedState !== null ? Tu(l) : u !== null ? (u.return = i, N = u) : Tu(l);
          for (; o !== null; ) N = o, Kc(o), o = o.sibling;
          N = l, Br = s, pe = c;
        }
        Nu(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Nu(e);
    }
  }
  function Nu(e) {
    for (; N !== null; ) {
      var t = N;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && au(t, o, r);
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
                au(t, i, n);
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
                    h !== null && fr(h);
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
          pe || t.flags & 512 && vi(t);
        } catch (p) {
          Z(t, t.return, p);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function Cu(e) {
    for (; N !== null; ) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function Tu(e) {
    for (; N !== null; ) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bl(4, t);
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
              vi(t);
            } catch (u) {
              Z(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              vi(t);
            } catch (u) {
              Z(t, i, u);
            }
        }
      } catch (u) {
        Z(t, t.return, u);
      }
      if (t === e) {
        N = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, N = s;
        break;
      }
      N = t.return;
    }
  }
  var Lp = Math.ceil, Pl = at.ReactCurrentDispatcher, cs = at.ReactCurrentOwner, ze = at.ReactCurrentBatchConfig, U = 0, ie = null, ee = null, ae = 0, Ce = 0, mn = Ot(0), re = 0, _r = null, Yt = 0, Gl = 0, fs = 0, lr = null, Se = null, ds = 0, An = 1 / 0, et = null, Al = false, Si = null, Ct = null, Gr = false, wt = null, Ml = 0, or = 0, _i = null, il = -1, sl = 0;
  function ve() {
    return U & 6 ? q() : il !== -1 ? il : il = q();
  }
  function Tt(e) {
    return e.mode & 1 ? U & 2 && ae !== 0 ? ae & -ae : gp.transition !== null ? (sl === 0 && (sl = Ia()), sl) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ja(e.type)), e) : 1;
  }
  function Ve(e, t, n, r) {
    if (50 < or) throw or = 0, _i = null, Error(S(185));
    kr(e, n, r), (!(U & 2) || e !== ie) && (e === ie && (!(U & 2) && (Gl |= n), re === 4 && gt(e, ae)), Ne(e, r), n === 1 && U === 0 && !(t.mode & 1) && (An = q() + 500, Ul && Lt()));
  }
  function Ne(e, t) {
    var n = e.callbackNode;
    gd(e, t);
    var r = pl(e, e === ie ? ae : 0);
    if (r === 0) n !== null && Ds(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ds(n), t === 1) e.tag === 0 ? yp(Pu.bind(null, e)) : rc(Pu.bind(null, e)), dp(function() {
        !(U & 6) && Lt();
      }), n = null;
      else {
        switch (Ra(r)) {
          case 1:
            n = ji;
            break;
          case 4:
            n = Aa;
            break;
          case 16:
            n = dl;
            break;
          case 536870912:
            n = Ma;
            break;
          default:
            n = dl;
        }
        n = tf(n, Xc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Xc(e, t) {
    if (il = -1, sl = 0, U & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n) return null;
    var r = pl(e, e === ie ? ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
    else {
      t = r;
      var l = U;
      U |= 2;
      var o = Zc();
      (ie !== e || ae !== t) && (et = null, An = q() + 500, Gt(e, t));
      do
        try {
          Fp();
          break;
        } catch (s) {
          Yc(e, s);
        }
      while (true);
      Ji(), Pl.current = o, U = l, ee !== null ? t = 0 : (ie = null, ae = 0, t = re);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yo(e), l !== 0 && (r = l, t = Ei(e, l))), t === 1) throw n = _r, Gt(e, 0), gt(e, r), Ne(e, q()), n;
      if (t === 6) gt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !zp(l) && (t = Il(e, r), t === 2 && (o = Yo(e), o !== 0 && (r = o, t = Ei(e, o))), t === 1)) throw n = _r, Gt(e, 0), gt(e, r), Ne(e, q()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Ut(e, Se, et);
            break;
          case 3:
            if (gt(e, r), (r & 130023424) === r && (t = ds + 500 - q(), 10 < t)) {
              if (pl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ve(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ri(Ut.bind(null, e, Se, et), t);
              break;
            }
            Ut(e, Se, et);
            break;
          case 4:
            if (gt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Ge(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lp(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ri(Ut.bind(null, e, Se, et), r);
              break;
            }
            Ut(e, Se, et);
            break;
          case 5:
            Ut(e, Se, et);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return Ne(e, q()), e.callbackNode === n ? Xc.bind(null, e) : null;
  }
  function Ei(e, t) {
    var n = lr;
    return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = Il(e, t), e !== 2 && (t = Se, Se = n, t !== null && ki(t)), e;
  }
  function ki(e) {
    Se === null ? Se = e : Se.push.apply(Se, e);
  }
  function zp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!We(o(), l)) return false;
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
  function gt(e, t) {
    for (t &= ~fs, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ge(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Pu(e) {
    if (U & 6) throw Error(S(327));
    _n();
    var t = pl(e, 0);
    if (!(t & 1)) return Ne(e, q()), null;
    var n = Il(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yo(e);
      r !== 0 && (t = r, n = Ei(e, r));
    }
    if (n === 1) throw n = _r, Gt(e, 0), gt(e, t), Ne(e, q()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ut(e, Se, et), Ne(e, q()), null;
  }
  function ps(e, t) {
    var n = U;
    U |= 1;
    try {
      return e(t);
    } finally {
      U = n, U === 0 && (An = q() + 500, Ul && Lt());
    }
  }
  function Zt(e) {
    wt !== null && wt.tag === 0 && !(U & 6) && _n();
    var t = U;
    U |= 1;
    var n = ze.transition, r = $;
    try {
      if (ze.transition = null, $ = 1, e) return e();
    } finally {
      $ = r, ze.transition = n, U = t, !(U & 6) && Lt();
    }
  }
  function hs() {
    Ce = mn.current, V(mn);
  }
  function Gt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fp(n)), ee !== null) for (n = ee.return; n !== null; ) {
      var r = n;
      switch (Xi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && vl();
          break;
        case 3:
          Tn(), V(Ee), V(he), rs();
          break;
        case 5:
          ns(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          V(K);
          break;
        case 19:
          V(K);
          break;
        case 10:
          qi(r.type._context);
          break;
        case 22:
        case 23:
          hs();
      }
      n = n.return;
    }
    if (ie = e, ee = e = Pt(e.current, null), ae = Ce = t, re = 0, _r = null, fs = Gl = Yt = 0, Se = lr = null, Ht !== null) {
      for (t = 0; t < Ht.length; t++) if (n = Ht[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      Ht = null;
    }
    return e;
  }
  function Yc(e, t) {
    do {
      var n = ee;
      try {
        if (Ji(), rl.current = Tl, Cl) {
          for (var r = X.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Cl = false;
        }
        if (Xt = 0, oe = ne = X = null, nr = false, wr = 0, cs.current = null, n === null || n.return === null) {
          re = 1, _r = t, ee = null;
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
            var g = mu(i);
            if (g !== null) {
              g.flags &= -257, yu(g, i, s, o, t), g.mode & 1 && hu(o, c, t), t = g, u = c;
              var y = t.updateQueue;
              if (y === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(u), t.updateQueue = x;
              } else y.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                hu(o, c, t), ms();
                break e;
              }
              u = Error(S(426));
            }
          } else if (W && s.mode & 1) {
            var I = mu(i);
            if (I !== null) {
              !(I.flags & 65536) && (I.flags |= 256), yu(I, i, s, o, t), Yi(Pn(u, s));
              break e;
            }
          }
          o = u = Pn(u, s), re !== 4 && (re = 2), lr === null ? lr = [
            o
          ] : lr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var f = Rc(o, u, t);
                uu(o, f);
                break e;
              case 1:
                s = u;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ct === null || !Ct.has(d)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var w = Oc(o, s, t);
                  uu(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        qc(n);
      } catch (_) {
        t = _, ee === n && n !== null && (ee = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Zc() {
    var e = Pl.current;
    return Pl.current = Tl, e === null ? Tl : e;
  }
  function ms() {
    (re === 0 || re === 3 || re === 2) && (re = 4), ie === null || !(Yt & 268435455) && !(Gl & 268435455) || gt(ie, ae);
  }
  function Il(e, t) {
    var n = U;
    U |= 2;
    var r = Zc();
    (ie !== e || ae !== t) && (et = null, Gt(e, t));
    do
      try {
        Dp();
        break;
      } catch (l) {
        Yc(e, l);
      }
    while (true);
    if (Ji(), U = n, Pl.current = r, ee !== null) throw Error(S(261));
    return ie = null, ae = 0, re;
  }
  function Dp() {
    for (; ee !== null; ) Jc(ee);
  }
  function Fp() {
    for (; ee !== null && !ud(); ) Jc(ee);
  }
  function Jc(e) {
    var t = ef(e.alternate, e, Ce);
    e.memoizedProps = e.pendingProps, t === null ? qc(e) : ee = t, cs.current = null;
  }
  function qc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Mp(n, t), n !== null) {
          n.flags &= 32767, ee = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          re = 6, ee = null;
          return;
        }
      } else if (n = Ap(n, t, Ce), n !== null) {
        ee = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ee = t;
        return;
      }
      ee = t = e;
    } while (t !== null);
    re === 0 && (re = 5);
  }
  function Ut(e, t, n) {
    var r = $, l = ze.transition;
    try {
      ze.transition = null, $ = 1, jp(e, t, n, r);
    } finally {
      ze.transition = l, $ = r;
    }
    return null;
  }
  function jp(e, t, n, r) {
    do
      _n();
    while (wt !== null);
    if (U & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (vd(e, o), e === ie && (ee = ie = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gr || (Gr = true, tf(dl, function() {
      return _n(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ze.transition, ze.transition = null;
      var i = $;
      $ = 1;
      var s = U;
      U |= 4, cs.current = null, Rp(e, n), Qc(n, e), lp(ti), hl = !!ei, ti = ei = null, e.current = n, Op(n), ad(), U = s, $ = i, ze.transition = o;
    } else e.current = n;
    if (Gr && (Gr = false, wt = e, Ml = l), o = e.pendingLanes, o === 0 && (Ct = null), dd(n.stateNode), Ne(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (Al) throw Al = false, e = Si, Si = null, e;
    return Ml & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === _i ? or++ : (or = 0, _i = e) : or = 0, Lt(), null;
  }
  function _n() {
    if (wt !== null) {
      var e = Ra(Ml), t = ze.transition, n = $;
      try {
        if (ze.transition = null, $ = 16 > e ? 16 : e, wt === null) var r = false;
        else {
          if (e = wt, wt = null, Ml = 0, U & 6) throw Error(S(331));
          var l = U;
          for (U |= 4, N = e.current; N !== null; ) {
            var o = N, i = o.child;
            if (N.flags & 16) {
              var s = o.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var c = s[u];
                  for (N = c; N !== null; ) {
                    var m = N;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rr(8, m, o);
                    }
                    var h = m.child;
                    if (h !== null) h.return = m, N = h;
                    else for (; N !== null; ) {
                      m = N;
                      var p = m.sibling, g = m.return;
                      if (Gc(m), m === c) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, N = p;
                        break;
                      }
                      N = g;
                    }
                  }
                }
                var y = o.alternate;
                if (y !== null) {
                  var x = y.child;
                  if (x !== null) {
                    y.child = null;
                    do {
                      var I = x.sibling;
                      x.sibling = null, x = I;
                    } while (x !== null);
                  }
                }
                N = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
            else e: for (; N !== null; ) {
              if (o = N, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  rr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, N = f;
                break e;
              }
              N = o.return;
            }
          }
          var a = e.current;
          for (N = a; N !== null; ) {
            i = N;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, N = d;
            else e: for (i = a; N !== null; ) {
              if (s = N, s.flags & 2048) try {
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bl(9, s);
                }
              } catch (_) {
                Z(s, s.return, _);
              }
              if (s === i) {
                N = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                w.return = s.return, N = w;
                break e;
              }
              N = s.return;
            }
          }
          if (U = l, Lt(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
            Ye.onPostCommitFiberRoot(Ll, e);
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
  function Au(e, t, n) {
    t = Pn(n, t), t = Rc(e, t, 1), e = Nt(e, t, 1), t = ve(), e !== null && (kr(e, 1, t), Ne(e, t));
  }
  function Z(e, t, n) {
    if (e.tag === 3) Au(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Au(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ct === null || !Ct.has(r))) {
          e = Pn(n, e), e = Oc(t, e, 1), t = Nt(t, e, 1), e = ve(), t !== null && (kr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Up(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ae & n) === n && (re === 4 || re === 3 && (ae & 130023424) === ae && 500 > q() - ds ? Gt(e, 0) : fs |= n), Ne(e, t);
  }
  function bc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or = 4194304)) : t = 1);
    var n = ve();
    e = st(e, t), e !== null && (kr(e, t, n), Ne(e, n));
  }
  function $p(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bc(e, n);
  }
  function Hp(e, t) {
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
    r !== null && r.delete(t), bc(e, n);
  }
  var ef;
  ef = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) _e = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return _e = false, Pp(e, t, n);
      _e = !!(e.flags & 131072);
    }
    else _e = false, W && t.flags & 1048576 && lc(t, Sl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ol(e, t), e = t.pendingProps;
        var l = kn(t, he.current);
        Sn(t, n), l = os(null, t, r, e, l, n);
        var o = is();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = true, wl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, es(t), l.updater = Hl, t.stateNode = l, l._reactInternals = t, ci(t, r, e, n), t = pi(null, t, r, true, o, n)) : (t.tag = 0, W && o && Ki(t), ge(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ol(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Gp(r), e = $e(r, e), l) {
            case 0:
              t = di(null, t, r, e, n);
              break e;
            case 1:
              t = wu(null, t, r, e, n);
              break e;
            case 11:
              t = gu(null, t, r, e, n);
              break e;
            case 14:
              t = vu(null, t, r, $e(r.type, e), n);
              break e;
          }
          throw Error(S(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), di(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), wu(e, t, r, l, n);
      case 3:
        e: {
          if (Fc(t), e === null) throw Error(S(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, cc(e, t), kl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Pn(Error(S(423)), t), t = xu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Pn(Error(S(424)), t), t = xu(e, t, r, n, l);
            break e;
          } else for (Te = kt(t.stateNode.containerInfo.firstChild), Pe = t, W = true, Be = null, n = uc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nn(), r === l) {
              t = ut(e, t, n);
              break e;
            }
            ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return fc(t), e === null && si(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ni(r, l) ? i = null : o !== null && ni(r, o) && (t.flags |= 32), Dc(e, t), ge(e, t, i, n), t.child;
      case 6:
        return e === null && si(t), null;
      case 13:
        return jc(e, t, n);
      case 4:
        return ts(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : ge(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), gu(e, t, r, l, n);
      case 7:
        return ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, B(_l, r._currentValue), r._currentValue = i, o !== null) if (We(o.value, i)) {
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
                    u = lt(-1, n & -n), u.tag = 2;
                    var c = o.updateQueue;
                    if (c !== null) {
                      c = c.shared;
                      var m = c.pending;
                      m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u;
                    }
                  }
                  o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), ui(o.return, n, t), s.lanes |= n;
                  break;
                }
                u = u.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(S(341));
              i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ui(i, n, t), i = o.sibling;
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
          ge(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Sn(t, n), l = De(l), r = r(l), t.flags |= 1, ge(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = $e(r, t.pendingProps), l = $e(r.type, l), vu(e, t, r, l, n);
      case 15:
        return Lc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), ol(e, t), t.tag = 1, ke(r) ? (e = true, wl(t)) : e = false, Sn(t, n), Ic(t, r, l), ci(t, r, l, n), pi(null, t, r, true, e, n);
      case 19:
        return Uc(e, t, n);
      case 22:
        return zc(e, t, n);
    }
    throw Error(S(156, t.tag));
  };
  function tf(e, t) {
    return Pa(e, t);
  }
  function Bp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(e, t, n, r) {
    return new Bp(e, t, n, r);
  }
  function ys(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gp(e) {
    if (typeof e == "function") return ys(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === zi) return 11;
      if (e === Di) return 14;
    }
    return 2;
  }
  function Pt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ul(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ys(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case ln:
        return Vt(n.children, l, o, t);
      case Li:
        i = 8, l |= 8;
        break;
      case Lo:
        return e = Le(12, n, t, l | 2), e.elementType = Lo, e.lanes = o, e;
      case zo:
        return e = Le(13, n, t, l), e.elementType = zo, e.lanes = o, e;
      case Do:
        return e = Le(19, n, t, l), e.elementType = Do, e.lanes = o, e;
      case fa:
        return Vl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case aa:
            i = 10;
            break e;
          case ca:
            i = 9;
            break e;
          case zi:
            i = 11;
            break e;
          case Di:
            i = 14;
            break e;
          case ht:
            i = 16, r = null;
            break e;
        }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
    return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Vt(e, t, n, r) {
    return e = Le(7, e, r, t), e.lanes = n, e;
  }
  function Vl(e, t, n, r) {
    return e = Le(22, e, r, t), e.elementType = fa, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function ko(e, t, n) {
    return e = Le(6, e, null, t), e.lanes = n, e;
  }
  function No(e, t, n) {
    return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Vp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function gs(e, t, n, r, l, o, i, s, u) {
    return e = new Vp(e, t, n, s, u), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, es(o), e;
  }
  function Wp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: rn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function nf(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(S(170));
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
      if (ke(n)) return nc(e, n, t);
    }
    return t;
  }
  function rf(e, t, n, r, l, o, i, s, u) {
    return e = gs(n, r, true, e, l, o, i, s, u), e.context = nf(null), n = e.current, r = ve(), l = Tt(n), o = lt(r, l), o.callback = t ?? null, Nt(n, o, l), e.current.lanes = l, kr(e, l, r), Ne(e, r), e;
  }
  function Wl(e, t, n, r) {
    var l = t.current, o = ve(), i = Tt(l);
    return n = nf(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(o, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(l, t, i), e !== null && (Ve(e, l, i, o), nl(e, l, i)), i;
  }
  function Rl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Mu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function vs(e, t) {
    Mu(e, t), (e = e.alternate) && Mu(e, t);
  }
  function Qp() {
    return null;
  }
  var lf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ws(e) {
    this._internalRoot = e;
  }
  Ql.prototype.render = ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    Wl(e, t, null, null);
  };
  Ql.prototype.unmount = ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zt(function() {
        Wl(null, e, null, null);
      }), t[it] = null;
    }
  };
  function Ql(e) {
    this._internalRoot = e;
  }
  Ql.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = za();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
      yt.splice(n, 0, e), n === 0 && Fa(e);
    }
  };
  function xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Kl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Iu() {
  }
  function Kp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var c = Rl(i);
          o.call(c);
        };
      }
      var i = rf(t, r, e, 0, null, false, false, "", Iu);
      return e._reactRootContainer = i, e[it] = i.current, hr(e.nodeType === 8 ? e.parentNode : e), Zt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = Rl(u);
        s.call(c);
      };
    }
    var u = gs(e, 0, false, null, null, false, false, "", Iu);
    return e._reactRootContainer = u, e[it] = u.current, hr(e.nodeType === 8 ? e.parentNode : e), Zt(function() {
      Wl(t, u, n, r);
    }), u;
  }
  function Xl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var u = Rl(i);
          s.call(u);
        };
      }
      Wl(t, i, e, l);
    } else i = Kp(n, t, e, l, r);
    return Rl(i);
  }
  Oa = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yn(t.pendingLanes);
          n !== 0 && (Ui(t, n | 1), Ne(t, q()), !(U & 6) && (An = q() + 500, Lt()));
        }
        break;
      case 13:
        Zt(function() {
          var r = st(e, 1);
          if (r !== null) {
            var l = ve();
            Ve(r, e, 1, l);
          }
        }), vs(e, 1);
    }
  };
  $i = function(e) {
    if (e.tag === 13) {
      var t = st(e, 134217728);
      if (t !== null) {
        var n = ve();
        Ve(t, e, 134217728, n);
      }
      vs(e, 134217728);
    }
  };
  La = function(e) {
    if (e.tag === 13) {
      var t = Tt(e), n = st(e, t);
      if (n !== null) {
        var r = ve();
        Ve(n, e, t, r);
      }
      vs(e, t);
    }
  };
  za = function() {
    return $;
  };
  Da = function(e, t) {
    var n = $;
    try {
      return $ = e, t();
    } finally {
      $ = n;
    }
  };
  Qo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Uo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = jl(r);
              if (!l) throw Error(S(90));
              pa(r), Uo(r, l);
            }
          }
        }
        break;
      case "textarea":
        ma(e, n);
        break;
      case "select":
        t = n.value, t != null && gn(e, !!n.multiple, t, false);
    }
  };
  _a = ps;
  Ea = Zt;
  var Xp = {
    usingClientEntryPoint: false,
    Events: [
      Cr,
      an,
      jl,
      xa,
      Sa,
      ps
    ]
  }, Bn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Yp = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
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
      return e = Ca(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || Qp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vr.isDisabled && Vr.supportsFiber) try {
      Ll = Vr.inject(Yp), Ye = Vr;
    } catch {
    }
  }
  Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
  Me.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xs(t)) throw Error(S(200));
    return Wp(e, t, null, n);
  };
  Me.createRoot = function(e, t) {
    if (!xs(e)) throw Error(S(299));
    var n = false, r = "", l = lf;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = gs(e, 1, false, null, null, n, false, r, l), e[it] = t.current, hr(e.nodeType === 8 ? e.parentNode : e), new ws(t);
  };
  Me.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = Ca(t), e = e === null ? null : e.stateNode, e;
  };
  Me.flushSync = function(e) {
    return Zt(e);
  };
  Me.hydrate = function(e, t, n) {
    if (!Kl(t)) throw Error(S(200));
    return Xl(null, e, t, true, n);
  };
  Me.hydrateRoot = function(e, t, n) {
    if (!xs(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", i = lf;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = rf(t, null, e, 1, n ?? null, l, false, o, i), e[it] = t.current, hr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ql(t);
  };
  Me.render = function(e, t, n) {
    if (!Kl(t)) throw Error(S(200));
    return Xl(null, e, t, false, n);
  };
  Me.unmountComponentAtNode = function(e) {
    if (!Kl(e)) throw Error(S(40));
    return e._reactRootContainer ? (Zt(function() {
      Xl(null, null, e, false, function() {
        e._reactRootContainer = null, e[it] = null;
      });
    }), true) : false;
  };
  Me.unstable_batchedUpdates = ps;
  Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Kl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Xl(e, t, n, false, r);
  };
  Me.version = "18.3.1-next-f1338f8080-20240426";
  function of() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of);
    } catch (e) {
      console.error(e);
    }
  }
  of(), oa.exports = Me;
  var Zp = oa.exports, sf, Ru = Zp;
  sf = Ru.createRoot, Ru.hydrateRoot;
  const Jt = Math.PI / 180, qt = 1495978707e-1, At = 864e5, Jp = 86400, uf = 946728e6, qp = 36525, bp = 357.5291, eh = 35999.0503, th = 1.9146, nh = 4817e-6, rh = 100.4665, lh = 36000.7698, oh = 1.00014, ih = 0.01671, Co = [
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
  ], sh = [
    1,
    0.267,
    0.133
  ], uh = [
    1,
    0.667,
    0
  ], ah = [
    0.533,
    0.8,
    1
  ], ch = [
    0.2,
    0.267,
    0.333
  ], Gn = [
    1,
    1,
    1
  ], Ou = [
    0.2,
    0.267,
    0.333
  ], fh = 0.01, Ss = 0.5, dh = 0.01, ph = 8, hh = 0.05, mh = 16768324, yh = 16755200, gh = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg", vh = 16777215, wh = 0.3, xh = 16774368, Sh = 2, _h = 200, Eh = 60, kh = 1e-3, Nh = 1e3, Lu = 0.8, Ch = 1.5, Th = 0.05, Ph = 0.1, Ah = 200, Mh = 4, Ih = 18, Wr = 0.01, Rh = 10, Wt = 3, _s = 2, Vn = 64, Oh = 0.05, Lh = [
    5129551,
    5394243,
    4936532,
    4281172,
    4543055,
    4801601
  ], af = 0.05, cf = 0.1, zh = 12, Dh = 0.05, ff = 0.01, Fh = 2, jh = 3e-3, Uh = 2e-3, $h = 0.35, Hh = 3359829, Bh = 8, Gh = 256, zu = 32, Du = 32, Fu = 30, To = 0.35, Vh = 65484, Wh = -0.1, Qh = 999, ju = 60, Kh = 0.5, Xh = 0.02, Yh = 0.08, Po = 180, Uu = 30, Zh = 0.4, Ao = 2, Jh = 150, qh = 0.08, bh = 0.12, em = 0.02, tm = 0.04, nm = 8, rm = 0.6, lm = 0.3, pt = 8, om = 0.82, im = 0.18, sm = 0.25, $u = 0.25, um = 0.015, am = 20, cm = 800, fm = 3e-3, dm = 3e-3, pm = 0.6, hm = 0.4, Wn = 32, mm = 3, ym = "#FF4422", gm = 36e5, vm = 0.2, df = "https://orange-waterfall-4401.sampathanurag3.workers.dev", wm = `${df}/neo/rest/v1/feed`, xm = df, Sm = "/Perihelion/neo_snapshot.json", _m = 3e4, Em = 30, pf = 30, km = "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=", hf = 2e3, Hu = 1e6, mf = 80, Nm = "https://github.com/anurag-as/Bonsai", Cm = 3e3, Bu = {
    0: "R-tree",
    1: "KD-tree",
    2: "Quadtree",
    3: "Grid"
  }, Tm = {
    0: "Balanced for mixed workloads \u2014 good range and kNN performance",
    1: "Optimised for kNN queries on uniformly distributed data",
    2: "Efficient for clustered 2D/3D data with spatial locality",
    3: "Fast uniform-grid lookups \u2014 best for evenly spaced data"
  }, Pm = [
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
  function Am(e) {
    if (e.hazardous) return "hazardous";
    const t = e.missDistKm / qt;
    return t <= af ? "close005" : t <= cf ? "close010" : "far";
  }
  function yn(e) {
    const t = (e.getTime() - uf) / At / qp, n = ((bp + eh * t) % 360 + 360) % 360 * Jt, r = (th - nh * t) * Math.sin(n), l = ((rh + lh * t + r) % 360 + 360) % 360 * Jt, o = oh - ih * Math.cos(n);
    return [
      o * Math.cos(l),
      0,
      o * Math.sin(l)
    ];
  }
  function yf(e, t, n, r, l = 0, o = 0) {
    if (t <= 0 || n <= 0 || !isFinite(t) || !isFinite(n) || !isFinite(r)) throw new Error(`neoPosition: invalid inputs \u2014 missDistanceKm=${t}, velocityKmS=${n}, daysFromNow=${r}`);
    const i = yn(e), s = t / qt, u = n * Jp * r / qt, c = s + u, [m, , h] = i, p = Math.sqrt(m * m + h * h);
    if (p < 1e-10) throw new Error(`neoPosition: degenerate Earth position (earthMag=${p})`);
    const g = m / p, y = h / p, x = Math.cos(l) * g - Math.sin(l) * y, I = Math.cos(l) * y + Math.sin(l) * g, f = Math.cos(o), a = Math.sin(o);
    return [
      i[0] + c * x * f,
      i[1] + c * a,
      i[2] + c * I * f
    ];
  }
  function gf(e, t) {
    const n = e * Jt, r = t * Jt;
    return [
      Math.cos(r) * Math.cos(n),
      Math.cos(r) * Math.sin(n),
      Math.sin(r)
    ];
  }
  function Ft(e) {
    if (e.hazardous) return sh;
    const t = e.missDistKm / qt;
    return t <= af ? uh : t <= cf ? ah : ch;
  }
  let Qr = null, Mo = null;
  const vf = Wt * _s;
  function Mm(e) {
    let t = e;
    return () => (t = t * 1664525 + 1013904223 & 4294967295, (t >>> 0) / 4294967296);
  }
  function Im(e, t, n, r, l) {
    const o = Mm(l), i = t + r / 2, s = n + r / 2, u = r / 2 - 2, c = Math.PI * 2 / pt, m = [];
    for (let g = 0; g < pt; g++) {
      const y = u * (om + o() * im), x = g * c + (o() - 0.5) * c * sm;
      m.push([
        i + y * Math.cos(x),
        s + y * Math.sin(x)
      ]);
    }
    e.save(), e.beginPath();
    for (let g = 0; g < pt; g++) {
      const y = m[g], x = m[(g + 1) % pt], I = [
        (y[0] + x[0]) / 2,
        (y[1] + x[1]) / 2
      ];
      g === 0 ? e.moveTo(I[0], I[1]) : e.quadraticCurveTo(y[0], y[1], I[0], I[1]);
    }
    const h = [
      (m[pt - 1][0] + m[0][0]) / 2,
      (m[pt - 1][1] + m[0][1]) / 2
    ];
    e.quadraticCurveTo(m[pt - 1][0], m[pt - 1][1], h[0], h[1]), e.closePath(), e.clip();
    const p = e.createRadialGradient(i - u * $u, s - u * $u, 0, i, s, u);
    p.addColorStop(0, "rgba(255,255,255,1)"), p.addColorStop(0.25, "rgba(200,190,175,1)"), p.addColorStop(0.65, "rgba(120,108,90,1)"), p.addColorStop(1, "rgba(30,25,18,1)"), e.fillStyle = p, e.fillRect(t, n, r, r), e.restore();
  }
  function Rm() {
    const e = document.createElement("canvas");
    e.width = Vn * Wt, e.height = Vn * _s;
    const t = e.getContext("2d");
    for (let n = 0; n < vf; n++) {
      const r = n % Wt, l = Math.floor(n / Wt);
      Im(t, r * Vn, l * Vn, Vn, Lh[n]);
    }
    return new T.CanvasTexture(e);
  }
  function Om() {
    return Mo || (Mo = Rm()), Mo;
  }
  const Lm = `
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
    float col = mod(idx, ${Wt}.0);
    float row = floor(idx / ${Wt}.0);
    vUv = vec2(col, row);

    float logD = clamp(
      (log(diameterKm + ${Wr}) - log(${Wr})) /
      (log(${Rh + Wr}) - log(${Wr})),
      0.0, 1.0
    );
    float baseSize = minSize + logD * (maxSize - minSize);

    // Scale point size with distance so NEOs grow when zoomed in.
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = baseSize * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`, zm = `
  uniform sampler2D atlas;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    if (vAlpha < ${ff}) discard;
    float cellW = 1.0 / ${Wt}.0;
    float cellH = 1.0 / ${_s}.0;
    vec2 uv = vec2(
      (vUv.x + gl_PointCoord.x) * cellW,
      (vUv.y + (1.0 - gl_PointCoord.y)) * cellH
    );
    vec4 texel = texture2D(atlas, uv);
    if (texel.a < ${Oh}) discard;
    gl_FragColor = vec4(texel.rgb * vColor, texel.a * vAlpha);
  }
`, Dm = `
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = ${zh.toFixed(1)} * (projectionMatrix[1][1] / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`, Fm = `
  uniform sampler2D map;
  varying float vAlpha;
  void main() {
    if (vAlpha < ${ff}) discard;
    vec4 texel = texture2D(map, gl_PointCoord);
    if (texel.a < ${Dh}) discard;
    gl_FragColor = vec4(texel.rgb, texel.a * vAlpha);
  }
`;
  function jm() {
    if (Qr) return Qr;
    const e = document.createElement("canvas");
    e.width = Wn, e.height = Wn;
    const t = e.getContext("2d"), n = Wn / 2, r = mm;
    return t.strokeStyle = ym, t.lineWidth = Fh, t.beginPath(), t.moveTo(n, r), t.lineTo(Wn - r, n), t.lineTo(n, Wn - r), t.lineTo(r, n), t.closePath(), t.stroke(), Qr = new T.CanvasTexture(e), Qr;
  }
  class Um {
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
      __publicField(this, "textureLoader", new T.TextureLoader());
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
      this.scene = new T.Scene(), this.scene.background = new T.Color(ph);
      const { clientWidth: n, clientHeight: r } = t;
      this.renderer = new T.WebGLRenderer({
        antialias: true
      }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(n, r), t.appendChild(this.renderer.domElement), this.camera = new T.PerspectiveCamera(Eh, n / r, kh, Nh);
      const [l, o, i] = yn(/* @__PURE__ */ new Date());
      this.camera.position.set(l + Lu, Lu, i + Ch), this.controls = new kf(this.camera, this.renderer.domElement), this.controls.enableDamping = true, this.controls.dampingFactor = Th, this.controls.minDistance = Ph, this.controls.maxDistance = Ah, this.controls.target.set(0, 0, 0), this.addAmbientLight(), this.addSun(), this.addPlanets(), this.updatePlanetPositions(/* @__PURE__ */ new Date()), this.addMeteorGroup(), this.addTrajectoryGroup(), this.resizeObserver = new ResizeObserver(() => {
        const { clientWidth: s, clientHeight: u } = t;
        this.camera.aspect = s / u, this.camera.updateProjectionMatrix(), this.renderer.setSize(s, u);
      }), this.resizeObserver.observe(t), this.startAnimationLoop();
    }
    addAmbientLight() {
      this.scene.add(new T.AmbientLight(vh, wh));
      const t = new T.PointLight(xh, Sh, _h);
      this.scene.add(t);
    }
    addSun() {
      const t = new T.SphereGeometry(hh, Du, Du), n = new T.MeshStandardMaterial({
        color: mh,
        emissive: yh,
        emissiveIntensity: 1
      });
      this.textureLoader.load(gh, (r) => {
        n.map = r, n.emissiveMap = r, n.needsUpdate = true;
      }), this.scene.add(new T.Mesh(t, n));
    }
    addPlanets() {
      this.planetGroup = new T.Group(), this.planetMeshes = [];
      for (const t of Co) {
        const n = this.createPlanetMesh(t.radiusAU, t.color, t.size, t.textureUrl);
        this.planetMeshes.push(n), this.planetGroup.add(n), this.layers.planets.push(n);
        const r = this.createOrbitRing(t.radiusAU);
        this.planetGroup.add(r), this.layers.planets.push(r);
      }
      this.scene.add(this.planetGroup);
    }
    createPlanetMesh(t, n, r, l) {
      const o = new T.SphereGeometry(r, zu, zu), i = new T.MeshStandardMaterial({
        color: n
      });
      this.textureLoader.load(l, (u) => {
        i.map = u, i.color.set(16777215), i.needsUpdate = true;
      });
      const s = new T.Mesh(o, i);
      return s.position.set(t, 0, 0), s;
    }
    createOrbitRing(t) {
      const n = Math.max(t * jh, Uh), r = new T.TorusGeometry(t, n, Bh, Gh), l = new T.MeshBasicMaterial({
        color: Hh,
        transparent: true,
        opacity: $h
      }), o = new T.Mesh(r, l);
      return o.rotation.x = Math.PI / 2, o;
    }
    addMeteorGroup() {
      this.meteorGroup = new T.Group(), this.scene.add(this.meteorGroup);
    }
    addTrajectoryGroup() {
      this.trajectoryGroup = new T.Group(), this.trajectoryGroup.visible = false, this.scene.add(this.trajectoryGroup), this.layers.trajectories.push(this.trajectoryGroup);
    }
    updateTrajectoryArcs(t) {
      for (const l of this.trajectoryGroup.children) {
        const o = l;
        o.geometry.dispose(), o.material.dispose();
      }
      this.trajectoryGroup.clear();
      const n = 2 * Math.PI, r = mf * Jt;
      for (const l of t) {
        const o = parseInt(l.id, 10), i = isNaN(o) ? 0 : o, s = Math.imul(i, 2654435761) >>> 0, u = Math.imul(s, 2246822519) >>> 0, c = Math.imul(u, 3735928559) >>> 0, m = s / 4294967296 * n, p = (c < 2147483648 ? 1 : -1) * (u / 4294967296) * r, g = [];
        for (let _ = 0; _ < Po; _++) {
          const C = _ / (Po - 1), E = -Uu + C * 2 * Uu;
          try {
            g.push(yf(l.approachDate, l.missDistKm, l.velocityKmS, E, m, p));
          } catch {
            g.push(g.length > 0 ? g[g.length - 1] : [
              0,
              0,
              0
            ]);
          }
        }
        const y = Po - 1, x = new Float32Array(y * 2 * 3);
        for (let _ = 0; _ < y; _++) {
          const [C, E, A] = g[_], [H, R, le] = g[_ + 1];
          x[_ * 6 + 0] = C, x[_ * 6 + 1] = E, x[_ * 6 + 2] = A, x[_ * 6 + 3] = H, x[_ * 6 + 4] = R, x[_ * 6 + 5] = le;
        }
        const I = new T.BufferGeometry();
        I.setAttribute("position", new T.BufferAttribute(x, 3));
        const [f, a, d] = Ft(l), w = new T.LineBasicMaterial({
          color: new T.Color(f, a, d),
          transparent: true,
          opacity: Zh,
          depthWrite: false
        });
        this.trajectoryGroup.add(new T.LineSegments(I, w));
      }
    }
    updateMeteorShowers(t) {
      for (const n of this.meteorGroup.children) {
        const r = n;
        r.geometry.dispose(), r.material.dispose();
      }
      this.meteorGroup.clear();
      for (const n of t) {
        const [r, l, o] = gf(n.raDeg, n.decDeg), i = r * Ao, s = l * Ao, u = o * Ao, c = Math.min(n.zhr / Jh, 1), m = qh + c * bh, h = em + c * tm, p = new T.ConeGeometry(h, m, nm), g = c, y = c * 0.5, x = 1 - c * 0.5, I = new T.MeshBasicMaterial({
          color: new T.Color(g, y, x),
          transparent: true,
          opacity: rm + c * lm,
          depthWrite: false
        }), f = new T.Mesh(p, I);
        f.position.set(i, s, u);
        const a = new T.Vector3(r, l, o).negate(), d = new T.Vector3(0, 1, 0);
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
        const t = new T.PlaneGeometry(2, 2), n = new T.MeshBasicMaterial({
          color: Vh,
          transparent: true,
          opacity: To,
          depthTest: false,
          depthWrite: false
        }), r = new T.Mesh(t, n);
        r.renderOrder = Qh, this.camera.add(r), r.position.set(0, 0, Wh), this.flashOverlay = r, this.scene.getObjectById(this.camera.id) || this.scene.add(this.camera);
      }
      this.flashOverlay.material.opacity = To, this.flashOverlay.visible = true, this.flashFramesLeft = Fu;
    }
    tickFlash() {
      if (!this.flashOverlay || this.flashFramesLeft <= 0) return;
      this.flashFramesLeft--;
      const t = this.flashOverlay.material;
      t.opacity = To * (this.flashFramesLeft / Fu), this.flashFramesLeft === 0 && (this.flashOverlay.visible = false);
    }
    tickSelectedPulse() {
      if (!this.selectedNeo || !this.neoPoints) return;
      const t = this._displayNeos.indexOf(this.selectedNeo);
      if (t === -1) return;
      const n = pm + hm * ((Math.sin(Date.now() * dm) + 1) / 2), r = this.neoPoints.geometry.getAttribute("color");
      if (r.setXYZ(t, n, n, n), r.needsUpdate = true, this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
        const l = this._top20Neos.indexOf(this.selectedNeo);
        l !== -1 && (this.neoInstancedMesh.setColorAt(l, new T.Color(n, n, n)), this.neoInstancedMesh.instanceColor.needsUpdate = true);
      }
    }
    tickFlyTo() {
      if (!this.flyTarget || this.flyFramesLeft <= 0) return;
      const t = 1 - this.flyFramesLeft / ju, n = Xh + t * Yh;
      this.camera.position.lerp(this.flyTarget, n), this.flyControlsTarget && this.controls.target.lerp(this.flyControlsTarget, n), this.flyFramesLeft--, this.flyFramesLeft === 0 && (this.flyTarget = null, this.flyControlsTarget = null);
    }
    buildNeoInstancedMesh(t) {
      if (this.neoInstancedMesh && (this.neoInstancedMesh.geometry.dispose(), this.neoInstancedMesh.material.dispose(), this.scene.remove(this.neoInstancedMesh), this.neoInstancedMesh = null), t.length === 0) return;
      const n = new T.SphereGeometry(1, 8, 6), r = new T.MeshStandardMaterial({
        vertexColors: true
      }), l = new T.InstancedMesh(n, r, t.length);
      l.instanceColor = new T.InstancedBufferAttribute(new Float32Array(t.length * 3), 3);
      const o = new T.Object3D();
      for (let i = 0; i < t.length; i++) {
        const s = t[i], [u, c, m] = s.position3d, h = Math.max(s.diameterKm / 2 / qt * cm, fm);
        o.position.set(u, c, m), o.scale.setScalar(h), o.updateMatrix(), l.setMatrixAt(i, o.matrix);
        const [p, g, y] = Ft(s);
        l.setColorAt(i, new T.Color(p, g, y));
      }
      l.instanceMatrix.needsUpdate = true, l.instanceColor && (l.instanceColor.needsUpdate = true), this.neoInstancedMesh = l, this._top20Neos = t, this.scene.add(l);
    }
    updateNeoPoints(t) {
      this.disposeNeoPoints();
      const n = this.selectedNeo;
      this.selectedNeo = null, this._currentNeos = t, this._displayNeos = this.hazardOnlyActive ? t.filter((y) => y.hazardous) : t;
      const l = [
        ...t
      ].sort((y, x) => y.missDistKm - x.missDistKm).slice(0, am);
      if (this.buildNeoInstancedMesh(l), this._displayNeos.length === 0) return;
      const o = this._displayNeos.length, i = new Float32Array(o * 3), s = new Float32Array(o * 3), u = new Float32Array(o), c = new Float32Array(o), m = new Float32Array(o).fill(1);
      for (let y = 0; y < o; y++) {
        const x = this._displayNeos[y], [I, f, a] = x.position3d;
        i[y * 3] = I, i[y * 3 + 1] = f, i[y * 3 + 2] = a;
        const [d, w, _] = Ft(x);
        s[y * 3] = d, s[y * 3 + 1] = w, s[y * 3 + 2] = _, u[y] = y % vf, c[y] = x.diameterKm;
      }
      const h = new T.BufferGeometry();
      h.setAttribute("position", new T.BufferAttribute(i, 3)), h.setAttribute("color", new T.BufferAttribute(s, 3)), h.setAttribute("atlasIndex", new T.BufferAttribute(u, 1)), h.setAttribute("diameterKm", new T.BufferAttribute(c, 1)), h.setAttribute("alpha", new T.BufferAttribute(m, 1));
      const p = new T.ShaderMaterial({
        uniforms: {
          atlas: {
            value: Om()
          },
          minSize: {
            value: Mh
          },
          maxSize: {
            value: Ih
          }
        },
        vertexShader: Lm,
        fragmentShader: zm,
        transparent: true,
        depthWrite: false
      });
      this.neoPoints = new T.Points(h, p), this.scene.add(this.neoPoints);
      const g = this._displayNeos.filter((y) => y.hazardous);
      if (g.length > 0) {
        const y = new Float32Array(g.length * 3), x = new Float32Array(g.length).fill(1);
        for (let a = 0; a < g.length; a++) {
          const [d, w, _] = g[a].position3d;
          y[a * 3] = d, y[a * 3 + 1] = w, y[a * 3 + 2] = _;
        }
        const I = new T.BufferGeometry();
        I.setAttribute("position", new T.BufferAttribute(y, 3)), I.setAttribute("alpha", new T.BufferAttribute(x, 1));
        const f = new T.ShaderMaterial({
          uniforms: {
            map: {
              value: jm()
            }
          },
          vertexShader: Dm,
          fragmentShader: Fm,
          transparent: true,
          depthWrite: false
        });
        this.hazardPoints = new T.Points(I, f), this.scene.add(this.hazardPoints);
      }
      if (n) {
        const y = this._displayNeos.indexOf(n);
        if (y !== -1) {
          this.selectedNeo = n;
          const x = this.neoPoints.geometry.getAttribute("color"), I = this.neoPoints.geometry.getAttribute("alpha");
          x.setXYZ(y, ...Gn), I.setX(y, 1), x.needsUpdate = true, I.needsUpdate = true;
        }
      }
      this.updateTrajectoryArcs(this._displayNeos);
    }
    highlightNeos(t) {
      if (!this.neoPoints) return;
      const n = this.neoPoints.geometry.getAttribute("color"), r = this.neoPoints.geometry.getAttribute("alpha");
      for (let l = 0; l < this._displayNeos.length; l++) {
        const o = this._displayNeos[l];
        t === null || o.bonsaiId !== void 0 && t.has(o.bonsaiId) ? (n.setXYZ(l, ...Ft(o)), r.setX(l, 1)) : (n.setXYZ(l, ...Ou), r.setX(l, 0));
      }
      if (n.needsUpdate = true, r.needsUpdate = true, this.selectedNeo) {
        const l = this._displayNeos.indexOf(this.selectedNeo);
        l !== -1 && (n.setXYZ(l, ...Gn), r.setX(l, 1), n.needsUpdate = true, r.needsUpdate = true);
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
          const o = this._top20Neos[l], i = t === null || o.bonsaiId !== void 0 && t.has(o.bonsaiId), [s, u, c] = i ? Ft(o) : Ou;
          this.neoInstancedMesh.setColorAt(l, new T.Color(s, u, c));
        }
        if (this.selectedNeo) {
          const l = this._top20Neos.indexOf(this.selectedNeo);
          l !== -1 && this.neoInstancedMesh.setColorAt(l, new T.Color(...Gn));
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
        if (o !== -1 && (n.setXYZ(o, ...Ft(this.selectedNeo)), r.setX(o, 1)), this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
          const i = this._top20Neos.indexOf(this.selectedNeo);
          if (i !== -1) {
            const [s, u, c] = Ft(this.selectedNeo);
            this.neoInstancedMesh.setColorAt(i, new T.Color(s, u, c)), this.neoInstancedMesh.instanceColor.needsUpdate = true;
          }
        }
      }
      this.selectedNeo = t;
      const l = this._displayNeos.indexOf(t);
      if (l !== -1 && (n.setXYZ(l, ...Gn), r.setX(l, 1)), n.needsUpdate = true, r.needsUpdate = true, this.neoInstancedMesh && this.neoInstancedMesh.instanceColor) {
        const o = this._top20Neos.indexOf(t);
        o !== -1 && (this.neoInstancedMesh.setColorAt(o, new T.Color(...Gn)), this.neoInstancedMesh.instanceColor.needsUpdate = true);
      }
    }
    flyToNeo(t) {
      const [n, r, l] = t.position3d, o = new T.Vector3(n, r, l), i = new T.Vector3().subVectors(o, this.camera.position).normalize();
      this.flyTarget = o.clone().sub(i.clone().multiplyScalar(Kh)), this.flyControlsTarget = o.clone(), this.flyFramesLeft = ju;
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
      const n = (t.getTime() - uf) / At;
      for (let r = 0; r < Co.length; r++) {
        const l = Co[r], o = this.planetMeshes[r];
        if (!o) continue;
        const i = ((l.L0 + l.n * n) % 360 + 360) % 360 * Jt;
        o.position.set(l.radiusAU * Math.cos(i), 0, l.radiusAU * Math.sin(i));
      }
    }
    dispose() {
      var _a2;
      this.animFrameId !== null && (cancelAnimationFrame(this.animFrameId), this.animFrameId = null), (_a2 = this.resizeObserver) == null ? void 0 : _a2.disconnect(), this.resizeObserver = null, this.controls.dispose();
      for (const t of this.planetMeshes) t.geometry.dispose(), t.material.dispose();
      for (const t of this.layers.planets) t instanceof T.Mesh && !this.planetMeshes.includes(t) && (t.geometry.dispose(), t.material.dispose());
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
  class $m {
    constructor(t, n) {
      __publicField(this, "raycaster", new T.Raycaster());
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
      return this.raycaster.params.Points.threshold = um, new T.Vector2((t.clientX - r.left) / r.width * 2 - 1, -((t.clientY - r.top) / r.height) * 2 + 1);
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
      const o = new T.Vector3();
      this.raycaster.ray.at(1, o), this.onMiss(o);
    }
  }
  function Hm({ status: e }) {
    const [t, n] = M.useState(false);
    if (M.useEffect(() => {
      e !== "live" && n(false);
    }, [
      e
    ]), e === "live" || t) return null;
    const r = e === "rate-limited" ? "Rate limit reached \u2014 using cached data" : "Using cached data";
    return v.jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-yellow-600/90 px-4 py-2 text-sm font-medium text-white",
      children: [
        v.jsx("span", {
          children: r
        }),
        v.jsx("button", {
          onClick: () => n(true),
          "aria-label": "Dismiss banner",
          className: "absolute right-4 text-white/80 hover:text-white transition-colors text-lg leading-none",
          children: "\xD7"
        })
      ]
    });
  }
  function Bm({ radiusAU: e, matchCount: t, onChange: n, disabled: r = false }) {
    function l(o) {
      n(parseFloat(o.target.value));
    }
    return v.jsxs("div", {
      className: `flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${r ? "opacity-40" : ""}`,
      children: [
        v.jsxs("div", {
          className: "flex justify-between text-xs text-gray-300",
          children: [
            v.jsx("span", {
              children: "Proximity"
            }),
            v.jsxs("span", {
              children: [
                e.toFixed(2),
                " AU"
              ]
            })
          ]
        }),
        v.jsx("input", {
          type: "range",
          min: fh,
          max: Ss,
          step: dh,
          value: e,
          onChange: l,
          disabled: r,
          className: "w-full accent-[#00FF88] disabled:cursor-not-allowed",
          "aria-label": "Proximity radius in AU",
          "aria-disabled": r
        }),
        v.jsxs("div", {
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
  function Gm(e) {
    const [t, n, r] = e.position3d;
    return `// kNN query for NEO: ${e.name}
index.knnQuery([${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)}], 1);`;
  }
  function Vm(e) {
    return e >= Hu ? `${(e / Hu).toFixed(2)} M km` : `${Math.round(e).toLocaleString()} km`;
  }
  function Wm({ neo: e }) {
    const [t, n] = M.useState(false), r = M.useRef(null);
    if (M.useEffect(() => {
      n(false), r.current !== null && (clearTimeout(r.current), r.current = null);
    }, [
      e
    ]), M.useEffect(() => () => {
      r.current !== null && clearTimeout(r.current);
    }, []), !e) return null;
    const l = `${km}${encodeURIComponent(e.id)}`;
    async function o() {
      const i = Gm(e);
      try {
        await navigator.clipboard.writeText(i), n(true), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => n(false), hf);
      } catch {
      }
    }
    return v.jsxs("div", {
      className: "bg-black/80 border border-white/10 text-white text-sm rounded-lg p-4 w-full sm:w-64 flex flex-col gap-2",
      children: [
        v.jsx("span", {
          className: "text-gray-400 text-xs uppercase tracking-wide",
          children: "NEO Info"
        }),
        v.jsxs("div", {
          className: "flex items-start justify-between gap-2",
          children: [
            v.jsx("span", {
              className: "font-semibold text-base leading-tight truncate",
              children: e.name
            }),
            e.hazardous && v.jsx("span", {
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
        v.jsxs("div", {
          className: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-300",
          children: [
            v.jsx("span", {
              className: "text-gray-500",
              children: "Diameter"
            }),
            v.jsxs("span", {
              children: [
                e.diameterKm.toFixed(3),
                " km"
              ]
            }),
            v.jsx("span", {
              className: "text-gray-500",
              children: "Miss dist"
            }),
            v.jsxs("span", {
              children: [
                Vm(e.missDistKm),
                v.jsxs("span", {
                  className: "text-gray-500 ml-1",
                  children: [
                    "(",
                    e.missDistLunar.toFixed(2),
                    " LD)"
                  ]
                })
              ]
            }),
            v.jsx("span", {
              className: "text-gray-500",
              children: "Velocity"
            }),
            v.jsxs("span", {
              children: [
                e.velocityKmS.toFixed(2),
                " km/s"
              ]
            }),
            v.jsx("span", {
              className: "text-gray-500",
              children: "Approach"
            }),
            v.jsx("span", {
              children: e.approachDate.toLocaleDateString()
            }),
            v.jsx("span", {
              className: "text-gray-500",
              children: "Miss dist AU"
            }),
            v.jsxs("span", {
              children: [
                (e.missDistKm / qt).toFixed(4),
                " AU"
              ]
            })
          ]
        }),
        e.hazardous && v.jsx("div", {
          className: "text-xs font-medium",
          style: {
            color: "#FF4422"
          },
          role: "alert",
          children: "\u25C6 Potentially hazardous asteroid"
        }),
        v.jsxs("div", {
          className: "flex gap-2 mt-1",
          children: [
            v.jsx("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-1 text-center text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors",
              "aria-label": `Open JPL Small-Body Database entry for ${e.name}`,
              children: "JPL \u2197"
            }),
            v.jsx("button", {
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
  const Qm = [
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
  function Km({ activeCategories: e, onCategoryToggle: t, onLayerToggle: n, onHazardFilter: r }) {
    const [l, o] = M.useState(false);
    if (l) return v.jsx("button", {
      onClick: () => o(false),
      className: "bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg w-full sm:w-auto",
      "aria-label": "Open scene controls",
      children: "Controls"
    });
    function i(s, u) {
      s.isHazardFilter ? r(u) : n(s.layer, u);
    }
    return v.jsxs("div", {
      className: "bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[200px]",
      children: [
        v.jsxs("div", {
          className: "flex justify-between items-center mb-2",
          children: [
            v.jsx("span", {
              className: "text-xs font-semibold text-gray-300 uppercase tracking-wide",
              children: "Controls"
            }),
            v.jsx("button", {
              onClick: () => o(true),
              className: "text-gray-400 hover:text-white text-xs ml-4",
              "aria-label": "Collapse controls",
              children: "\u2715"
            })
          ]
        }),
        v.jsx("p", {
          className: "text-[10px] text-gray-500 uppercase tracking-wider mb-1",
          children: "Show"
        }),
        v.jsx("div", {
          className: "flex flex-col gap-1 mb-3",
          children: Qm.map((s) => v.jsxs("label", {
            className: "flex items-center gap-2 cursor-pointer select-none",
            children: [
              v.jsx("input", {
                type: "checkbox",
                defaultChecked: s.defaultOn,
                onChange: (u) => i(s, u.target.checked),
                className: "accent-[#00FF88] w-3 h-3",
                "aria-label": `Toggle ${s.label}`
              }),
              v.jsx("span", {
                className: "text-xs text-gray-200",
                children: s.label
              })
            ]
          }, s.layer))
        }),
        v.jsx("p", {
          className: "text-[10px] text-gray-500 uppercase tracking-wider mb-1",
          children: "Highlight by type"
        }),
        v.jsxs("div", {
          className: "flex flex-col gap-0.5",
          children: [
            Pm.map(({ category: s, color: u, label: c }) => {
              const m = e.has(s);
              return v.jsxs("button", {
                onClick: () => t(s),
                className: `flex items-center gap-2 py-0.5 w-full text-left transition-opacity ${m ? "opacity-100" : "opacity-30"}`,
                "aria-pressed": m,
                children: [
                  v.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-sm flex-shrink-0",
                    style: {
                      backgroundColor: u
                    }
                  }),
                  v.jsx("span", {
                    className: "text-xs text-gray-200",
                    children: c
                  })
                ]
              }, s);
            }),
            v.jsxs("div", {
              className: "flex items-center gap-2 py-0.5 mt-1 border-t border-white/10 pt-1",
              children: [
                v.jsx("span", {
                  className: "inline-block w-3 h-3 flex-shrink-0 border border-[#FF4422] rotate-45"
                }),
                v.jsx("span", {
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
  function Xm({ onSearch: e, disabled: t = false }) {
    const n = M.useRef(null);
    function r(l) {
      e(l.target.value);
    }
    return v.jsx("div", {
      className: `flex items-center bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${t ? "opacity-40 pointer-events-none" : ""}`,
      children: v.jsx("input", {
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
  function Ym(e) {
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
  function Zm(e) {
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
  function Jm(e) {
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
  const qm = {
    rust: "Rust",
    python: "Python",
    js: "JS"
  };
  function Vu(e, t) {
    return t === "rust" ? Ym(e) : t === "python" ? Zm(e) : Jm(e);
  }
  function bm({ indexManager: e, scene: t, currentQuery: n }) {
    const [r, l] = M.useState(() => e.stats()), [o, i] = M.useState([]), [s, u] = M.useState("rust"), [c, m] = M.useState(false), h = M.useRef(false), p = M.useRef(0), g = M.useRef([]), y = M.useRef(null);
    M.useEffect(() => {
      const d = setInterval(() => {
        l(() => {
          const w = e.stats(), _ = h.current;
          if (h.current = w.migrating, _ && !w.migrating) {
            t == null ? void 0 : t.flashMigration();
            const C = Bu[w.backend_kind] ?? "Unknown", E = ++p.current, A = {
              id: E,
              message: `Index restructured \u2192 ${C}`
            };
            i((R) => [
              ...R,
              A
            ]);
            const H = setTimeout(() => {
              i((R) => R.filter((le) => le.id !== E));
            }, Cm);
            g.current.push(H);
          }
          return w;
        });
      }, 500);
      return () => {
        clearInterval(d), g.current.forEach(clearTimeout), g.current = [];
      };
    }, [
      e,
      t
    ]), M.useEffect(() => () => {
      y.current !== null && clearTimeout(y.current);
    }, []);
    async function x() {
      try {
        await navigator.clipboard.writeText(Vu(n, s)), m(true), y.current !== null && clearTimeout(y.current), y.current = setTimeout(() => m(false), hf);
      } catch {
      }
    }
    const I = Bu[r.backend_kind] ?? "Unknown", f = Tm[r.backend_kind], a = Vu(n, s);
    return v.jsxs(v.Fragment, {
      children: [
        v.jsxs("div", {
          className: "bg-black/80 border border-white/10 text-white text-xs rounded-lg w-full sm:w-72 flex flex-col overflow-hidden",
          "aria-label": "Bonsai index statistics and export",
          children: [
            v.jsx("span", {
              className: "sr-only",
              role: "status",
              "aria-live": "polite",
              children: r.migrating ? "Index migration in progress" : ""
            }),
            v.jsxs("div", {
              className: "px-3 py-2 flex flex-col gap-1",
              children: [
                v.jsx("a", {
                  href: Nm,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 text-xs uppercase tracking-wide mb-0.5 hover:text-[#00FF88] transition-colors",
                  children: "Bonsai Index \u2197"
                }),
                v.jsx(Kr, {
                  label: "Backend",
                  children: v.jsx("span", {
                    className: "font-semibold text-[#00FF88]",
                    children: I
                  })
                }),
                v.jsx(Kr, {
                  label: "Points",
                  children: r.point_count.toLocaleString()
                }),
                v.jsx(Kr, {
                  label: "Migrations",
                  children: r.migration_count
                }),
                v.jsx(Kr, {
                  label: "Queries",
                  children: r.query_count.toLocaleString()
                }),
                r.migrating && v.jsxs("div", {
                  className: "flex items-center gap-1 text-yellow-400 mt-0.5",
                  children: [
                    v.jsx("span", {
                      className: "inline-block animate-spin",
                      children: "\u27F3"
                    }),
                    v.jsx("span", {
                      children: "Migrating\u2026"
                    })
                  ]
                }),
                f && v.jsx("p", {
                  className: "mt-1 pt-1 border-t border-white/10 text-gray-400 leading-tight",
                  children: f
                })
              ]
            }),
            v.jsx("div", {
              className: "border-t border-white/10"
            }),
            v.jsxs("div", {
              className: "px-3 py-2 flex flex-col gap-2",
              children: [
                v.jsxs("div", {
                  className: "flex items-center justify-between gap-2",
                  children: [
                    v.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        v.jsx("span", {
                          className: "text-gray-400 text-xs uppercase tracking-wide",
                          children: "Export"
                        }),
                        v.jsx("span", {
                          className: "text-[#00FF88]/70 text-[10px]",
                          children: "Bonsai query"
                        })
                      ]
                    }),
                    v.jsx("div", {
                      className: "flex gap-1",
                      role: "group",
                      "aria-label": "Select language",
                      children: [
                        "rust",
                        "python",
                        "js"
                      ].map((d) => v.jsx("button", {
                        onClick: () => u(d),
                        className: `px-2 py-0.5 rounded text-xs transition-colors ${s === d ? "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50" : "bg-white/10 text-gray-400 hover:bg-white/20"}`,
                        "aria-pressed": s === d,
                        children: qm[d]
                      }, d))
                    })
                  ]
                }),
                v.jsx("pre", {
                  className: "bg-black/60 rounded p-2 text-[10px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre",
                  children: a
                }),
                v.jsx("button", {
                  onClick: x,
                  className: "w-full py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-xs",
                  "aria-label": "Copy snippet to clipboard",
                  children: c ? "Copied \u2713" : "Copy to clipboard"
                })
              ]
            })
          ]
        }),
        v.jsx("div", {
          className: "flex flex-col gap-1 items-end pointer-events-none",
          children: o.map((d) => v.jsx("div", {
            role: "status",
            "aria-live": "polite",
            className: "bg-[#00ffcc]/20 border border-[#00ffcc]/50 text-[#00ffcc] text-xs rounded-lg px-3 py-1.5 animate-pulse",
            children: d.message
          }, d.id))
        })
      ]
    });
  }
  function Kr({ label: e, children: t }) {
    return v.jsxs("div", {
      className: "flex items-center justify-between gap-2",
      children: [
        v.jsx("span", {
          className: "text-gray-400",
          children: e
        }),
        v.jsx("span", {
          children: t
        })
      ]
    });
  }
  const Xr = pf / 2;
  function e0({ date: e, onChange: t, isLoading: n = false, disabled: r = false }) {
    const l = M.useRef(null);
    if (!l.current) {
      const c = /* @__PURE__ */ new Date();
      c.setHours(0, 0, 0, 0), l.current = c;
    }
    const o = l.current, i = Math.round((e.getTime() - o.getTime()) / At);
    function s(c) {
      const m = parseInt(c.target.value, 10), h = new Date(o.getTime() + m * At);
      t(h);
    }
    const u = i === 0 ? "Today" : i > 0 ? `+${i}d` : `${i}d`;
    return v.jsxs("div", {
      className: `flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${r ? "opacity-40" : ""}`,
      children: [
        v.jsxs("div", {
          className: "flex justify-between text-xs text-gray-300",
          children: [
            v.jsx("span", {
              children: "Time"
            }),
            v.jsxs("span", {
              className: "flex items-center gap-1",
              children: [
                n && v.jsx("span", {
                  className: "inline-block animate-spin text-[#00FF88]",
                  "aria-hidden": "true",
                  children: "\u27F3"
                }),
                v.jsx("span", {
                  children: u
                })
              ]
            })
          ]
        }),
        v.jsx("input", {
          type: "range",
          min: -Xr,
          max: Xr,
          step: 1,
          value: i,
          onChange: s,
          className: "w-full accent-[#00FF88] disabled:cursor-not-allowed",
          "aria-label": "Time offset in days from today (\xB130 days)",
          disabled: n || r,
          "aria-disabled": r
        }),
        v.jsxs("div", {
          className: "text-xs text-gray-400 flex justify-between",
          children: [
            v.jsxs("span", {
              children: [
                "\u2212",
                Xr,
                "d"
              ]
            }),
            v.jsxs("span", {
              children: [
                "+",
                Xr,
                "d"
              ]
            })
          ]
        })
      ]
    });
  }
  function t0({ onRetry: e }) {
    return v.jsxs("div", {
      className: "absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-black/80 border border-yellow-500/60 text-white rounded-lg px-4 py-3 max-w-sm w-full mx-4 flex flex-col gap-2",
      role: "alert",
      "aria-live": "assertive",
      children: [
        v.jsx("p", {
          className: "text-sm text-yellow-300 font-semibold",
          children: "Spatial index unavailable \u2014 3D scene will load without query features."
        }),
        v.jsx("button", {
          onClick: e,
          className: "self-start text-xs bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/50 text-yellow-300 rounded px-3 py-1 transition-colors",
          "aria-label": "Retry loading spatial index",
          children: "Retry"
        })
      ]
    });
  }
  const n0 = [
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
  ], r0 = xm;
  function xt(e) {
    return e.toISOString().slice(0, 10);
  }
  async function wf(e) {
    const t = new AbortController(), n = setTimeout(() => t.abort(), _m);
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
  function xf(e) {
    try {
      const t = localStorage.getItem(e);
      if (!t) return null;
      const n = JSON.parse(t);
      return Date.now() - n.cachedAt > gm ? (localStorage.removeItem(e), null) : n.data;
    } catch {
      return null;
    }
  }
  function Sf(e, t) {
    try {
      const n = {
        data: t,
        cachedAt: Date.now()
      };
      localStorage.setItem(e, JSON.stringify(n));
    } catch {
    }
  }
  async function Ni(e, t) {
    const n = `neows:${xt(e)}:${xt(t)}`, r = xf(n);
    if (r) return r;
    const l = `${wm}?start_date=${xt(e)}&end_date=${xt(t)}`, i = await (await wf(l)).json();
    return Sf(n, i), i;
  }
  async function _f(e, t) {
    const n = `cad:${xt(e)}:${xt(t)}`, r = xf(n);
    if (r) return r;
    const l = `${r0}/cad.api?date-min=${xt(e)}&date-max=${xt(t)}&dist-max=${vm}`, i = await (await wf(l)).json();
    return Sf(n, i), i;
  }
  function Yr(e) {
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
        o / qt,
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
  async function Ci() {
    const e = await fetch(Sm);
    if (!e.ok) throw new Error(`Failed to load snapshot: HTTP ${e.status}`);
    const t = await e.json();
    return Array.isArray(t) ? {
      near_earth_objects: {}
    } : t;
  }
  class l0 {
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
          await Ci(), (_b = this.onStatusChange) == null ? void 0 : _b.call(this, r ? "rate-limited" : "snapshot");
        } catch (o) {
          console.warn("fetchAndIndex: snapshot fallback also failed:", o), (_c2 = this.onStatusChange) == null ? void 0 : _c2.call(this, "snapshot");
        }
      }
    }
    async fetchNeows(t, n) {
      return Ni(t, n);
    }
    async fetchCad(t, n) {
      return _f(t, n);
    }
    loadMeteorShowers() {
      return n0.map((t) => ({
        ...t,
        position3d: gf(t.raDeg, t.decDeg)
      }));
    }
  }
  const o0 = "modulepreload", i0 = function(e) {
    return "/Perihelion/" + e;
  }, Wu = {}, s0 = function(t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      l = Promise.allSettled(n.map((u) => {
        if (u = i0(u), u in Wu) return;
        Wu[u] = true;
        const c = u.endsWith(".css"), m = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${m}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : o0, c || (h.as = "script"), h.crossOrigin = "", h.href = u, s && h.setAttribute("nonce", s), document.head.appendChild(h), c) return new Promise((p, g) => {
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
  function Qu() {
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
  let Io = null, Ku = null;
  function Ro(e, t) {
    const n = e[0] - t[0], r = e[1] - t[1], l = e[2] - t[2];
    return Math.sqrt(n * n + r * r + l * l);
  }
  function u0(e) {
    return {
      point_count: e[0],
      query_count: e[1],
      migration_count: e[2],
      migrating: e[3] !== 0,
      backend_kind: e[4]
    };
  }
  class a0 {
    constructor() {
      __publicField(this, "index", null);
      __publicField(this, "store", Qu());
      __publicField(this, "payloadMap", []);
      __publicField(this, "ready", false);
    }
    async init() {
      if (!this.ready) {
        if (!Io) {
          const t = await s0(() => import("./perihelion_wasm-rE1MxVDP.js"), []);
          Io = t.default, Ku = t.WasmBonsaiIndex;
        }
        await Io(), this.index = new Ku(), this.ready = true;
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
      this.index.clear(), this.store = Qu(), this.payloadMap = [];
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
        u && Ro(u.position3d, t) <= n && i.push(u);
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
      return l.sort((o, i) => Ro(o.position3d, t) - Ro(i.position3d, t));
    }
    stats() {
      return this.index ? u0(this.index.stats()) : {
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
  const Qn = Ss / 2, c0 = 2 * Math.PI, f0 = mf * Jt;
  function Zr(e, t) {
    const n = [], r = t ?? /* @__PURE__ */ new Date();
    for (let l = 0; l < e.length; l++) {
      const o = e[l], i = parseInt(o.id, 10), s = Math.imul(isNaN(i) ? l : i, 2654435761) >>> 0, u = Math.imul(s, 2246822519) >>> 0, c = Math.imul(u, 3735928559) >>> 0, m = s / 4294967296 * c0, p = (c < 2147483648 ? 1 : -1) * (u / 4294967296) * f0, g = (r.getTime() - o.approachDate.getTime()) / At;
      try {
        const y = yf(o.approachDate, o.missDistKm, o.velocityKmS, g, m, p);
        n.push({
          ...o,
          position3d: y
        });
      } catch {
      }
    }
    return n;
  }
  function d0() {
    const e = M.useRef(null), t = M.useRef(null), n = M.useRef([]), r = M.useRef(null), l = M.useRef(null), [o, i] = M.useState("live"), s = M.useRef(false), [u] = M.useState(() => new a0()), [c, m] = M.useState(null), [h, p] = M.useState(false), g = M.useRef(Qn), [y, x] = M.useState(Qn), [I, f] = M.useState(0), [a, d] = M.useState(new Set(Gu)), [w, _] = M.useState(null), [C, E] = M.useState(() => {
      const P = /* @__PURE__ */ new Date();
      return P.setHours(0, 0, 0, 0), P;
    }), [A, H] = M.useState(false), [R, le] = M.useState(() => ({
      type: "range",
      centre: [
        0,
        1,
        0
      ],
      radiusAU: Qn,
      timestamp: /* @__PURE__ */ new Date()
    })), ct = M.useRef(null), Je = M.useRef((() => {
      const P = /* @__PURE__ */ new Date();
      return P.setHours(0, 0, 0, 0), P;
    })()), je = M.useCallback((P, L) => {
      const D = r.current, j = t.current;
      if (!D || !D.isReady() || !j) return;
      const se = P >= Ss, me = L.size === Gu.length;
      let ye;
      if (se) ye = D.getStore().getAll();
      else {
        const te = yn(Je.current ?? /* @__PURE__ */ new Date());
        ye = D.rangeQuery(te, P);
      }
      const qe = me ? ye : ye.filter((te) => L.has(Am(te)));
      if (se && me) j.highlightNeos(null);
      else {
        const te = new Set(qe.map((zt) => zt.bonsaiId).filter((zt) => zt !== void 0));
        j.highlightNeos(te);
      }
      f(qe.length);
    }, []), Yl = M.useCallback((P) => {
      g.current = P, x(P), je(P, a);
      const L = yn(Je.current ?? /* @__PURE__ */ new Date());
      le({
        type: "range",
        centre: L,
        radiusAU: P,
        timestamp: /* @__PURE__ */ new Date()
      });
    }, [
      a,
      je
    ]), On = M.useCallback((P) => {
      d((L) => {
        const D = new Set(L);
        return D.has(P) ? D.delete(P) : D.add(P), je(g.current, D), D;
      });
    }, [
      je
    ]), Ln = M.useCallback((P) => {
      const L = r.current, D = t.current;
      if (!L || !L.isReady() || !D) return;
      const j = P.trim().toLowerCase();
      if (!j) {
        je(g.current, a);
        return;
      }
      const me = L.getStore().getAll().find((ye) => ye.name.toLowerCase().includes(j));
      me && (_(me), D.selectNeo(me), D.flyToNeo(me));
    }, [
      a,
      je
    ]), k = M.useCallback(async (P) => {
      var _a2;
      const L = r.current, D = t.current;
      if (!L || !L.isReady() || !D || !s.current) return;
      (_a2 = ct.current) == null ? void 0 : _a2.abort();
      const j = new AbortController();
      ct.current = j, E(P), Je.current = P;
      const se = setTimeout(() => {
        j.signal.aborted || H(true);
      }, 2e3);
      try {
        const me = Math.floor(pf / 2), ye = new Date(P.getTime() - me * At), qe = new Date(P.getTime() + me * At);
        let te = [];
        try {
          const be = await Ni(ye, qe);
          if (j.signal.aborted) return;
          te = Zr(Yr(be), P), i("live");
        } catch (be) {
          const ft = be.status;
          try {
            const Zl = await Ci();
            if (j.signal.aborted) return;
            te = Zr(Yr(Zl), P), i(ft === 429 ? "rate-limited" : "snapshot");
          } catch {
            te = [], i("snapshot");
          }
        }
        if (j.signal.aborted) return;
        L.rebuild(te);
        const zt = L.getStore().getAll();
        D.updateNeoPoints(zt), D.updatePlanetPositions(P), _(null);
        const b = l.current;
        if (b) {
          b.setCamera(D.getCamera());
          const be = D.getNeoPoints();
          be && b.setNeoPoints(be, D.displayNeos);
        }
        je(g.current, a);
      } finally {
        clearTimeout(se), j.signal.aborted || H(false);
      }
    }, [
      a,
      je
    ]), O = M.useCallback((P, L) => {
      var _a2;
      (_a2 = t.current) == null ? void 0 : _a2.setLayerVisible(P, L);
    }, []), z = M.useCallback((P) => {
      var _a2;
      (_a2 = t.current) == null ? void 0 : _a2.setLayerVisible("hazardOnly", P);
    }, []), Q = M.useCallback(async () => {
      const P = r.current, L = t.current;
      if (!(!P || !L)) try {
        await P.init(), p(false);
        const D = n.current;
        P.rebuild(D);
        const j = P.getStore().getAll();
        L.updateNeoPoints(j), _(null);
        const se = l.current;
        if (se) {
          se.setCamera(L.getCamera());
          const te = L.getNeoPoints();
          te && se.setNeoPoints(te, L.displayNeos);
        }
        const me = yn(/* @__PURE__ */ new Date()), ye = P.rangeQuery(me, Qn), qe = new Set(ye.map((te) => te.bonsaiId).filter((te) => te !== void 0));
        L.highlightNeos(qe), f(ye.length);
      } catch (D) {
        console.error("WASM retry failed:", D), p(true);
      }
    }, []), J = M.useCallback((P) => {
      const L = r.current, D = t.current;
      if (!L || !L.isReady() || !D) return;
      const j = L.knnQuery([
        P.x,
        P.y,
        P.z
      ], 1);
      j.length > 0 && (_(j[0]), D.selectNeo(j[0]), le({
        type: "knn",
        centre: [
          P.x,
          P.y,
          P.z
        ],
        k: 1,
        timestamp: /* @__PURE__ */ new Date()
      }));
    }, []);
    return M.useEffect(() => {
      if (!e.current) return;
      const P = new Um();
      t.current = P, P.init(e.current), m(P);
      const L = u;
      r.current = L;
      const D = new $m((b) => {
        _(b), P.selectNeo(b);
      }, (b) => J(b));
      l.current = D;
      const j = e.current, se = (b) => {
        D.onMouseClick(b, j);
      }, me = (b) => {
        D.onMouseMove(b, j);
      };
      j.addEventListener("click", se), j.addEventListener("mousemove", me);
      let ye = false;
      async function qe() {
        const b = /* @__PURE__ */ new Date(), be = new Date(b.getTime() + Em * At);
        let ft = [];
        try {
          const Dt = await Ni(b, be);
          ft = Zr(Yr(Dt), b), i("live"), _f(b, be).catch((tn) => console.warn("CAD fetch failed (non-critical):", tn));
        } catch (Dt) {
          const tn = Dt.status;
          try {
            const Jl = await Ci();
            ft = Zr(Yr(Jl), b), i(tn === 429 ? "rate-limited" : "snapshot");
          } catch {
            ft = [], i("snapshot");
          }
        }
        if (ye) return;
        P.updateNeoPoints(ft), P.updatePlanetPositions(/* @__PURE__ */ new Date()), n.current = ft;
        const Zl = new l0();
        P.updateMeteorShowers(Zl.loadMeteorShowers());
        try {
          if (await L.init(), ye) return;
          p(false), L.rebuild(ft);
          const Dt = L.getStore().getAll();
          P.updateNeoPoints(Dt), _(null), D.setCamera(P.getCamera());
          const tn = P.getNeoPoints();
          tn && D.setNeoPoints(tn, P.displayNeos);
          const Jl = yn(/* @__PURE__ */ new Date()), Es = L.rangeQuery(Jl, Qn), Ef = new Set(Es.map((ql) => ql.bonsaiId).filter((ql) => ql !== void 0));
          P.highlightNeos(Ef), f(Es.length);
        } catch (Dt) {
          console.error("WASM init/rebuild failed:", Dt), p(true);
        }
      }
      qe();
      const te = 60 * 60 * 1e3, zt = setInterval(() => {
        qe().catch((b) => {
          console.warn("Auto-refresh failed:", b);
        });
      }, te);
      return () => {
        ye = true, clearInterval(zt), j.removeEventListener("click", se), j.removeEventListener("mousemove", me), P.dispose(), t.current = null, m(null), r.current = null, l.current = null;
      };
    }, [
      u,
      J
    ]), v.jsxs("div", {
      className: "relative w-screen h-screen bg-[#000008] overflow-hidden",
      children: [
        v.jsx(Hm, {
          status: o
        }),
        v.jsx("div", {
          ref: e,
          className: "w-full h-full"
        }),
        h && v.jsx(t0, {
          onRetry: Q
        }),
        A && v.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none",
          "aria-label": "Rebuilding index",
          role: "status",
          children: v.jsx("span", {
            className: "text-[#00FF88] text-4xl animate-spin",
            children: "\u27F3"
          })
        }),
        v.jsx("div", {
          className: "absolute top-4 right-2 left-2 sm:left-auto sm:right-4 flex flex-col gap-2 items-stretch sm:items-end pointer-events-none",
          children: v.jsx("div", {
            className: "pointer-events-auto",
            children: v.jsx(Wm, {
              neo: w
            })
          })
        }),
        v.jsxs("div", {
          className: "absolute bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-auto flex flex-col gap-2 items-stretch sm:items-start p-2 sm:p-0 bg-black/60 sm:bg-transparent rounded-t-xl sm:rounded-none",
          children: [
            v.jsx(Xm, {
              onSearch: Ln,
              disabled: h
            }),
            v.jsx(e0, {
              date: C,
              onChange: k,
              isLoading: A,
              disabled: h
            }),
            v.jsx(Bm, {
              radiusAU: y,
              matchCount: I,
              onChange: Yl,
              disabled: h
            }),
            v.jsx(Km, {
              activeCategories: a,
              onCategoryToggle: On,
              onLayerToggle: O,
              onHazardFilter: z
            })
          ]
        }),
        v.jsx("div", {
          className: "hidden sm:flex absolute bottom-4 right-4 flex-col gap-2 items-end",
          children: v.jsx(bm, {
            indexManager: u,
            scene: c,
            currentQuery: R
          })
        })
      ]
    });
  }
  sf(document.getElementById("root")).render(v.jsx(M.StrictMode, {
    children: v.jsx(d0, {})
  }));
})();
