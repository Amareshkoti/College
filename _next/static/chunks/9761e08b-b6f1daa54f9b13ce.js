"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4590], {
        17115: function(t, e, n) {
            var r, i, o, a = n(40257);
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = n(5853),
                u = n(2265),
                l = n(89185),
                c = n(79964),
                d = n(51831),
                f = n(23829),
                p = n(89526);

            function v(t) {
                return t && "object" == typeof t && "default" in t ? t : {
                    default: t
                }
            }
            var h = function(t) {
                    if (t && t.__esModule) return t;
                    var e = Object.create(null);
                    return t && Object.keys(t).forEach(function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }), e.default = t, Object.freeze(e)
                }(u),
                m = v(u),
                g = v(f),
                y = (void 0 === a || a.env, "production"),
                x = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some(function(t) {
                                return !!e[t]
                            })
                        }
                    }
                },
                _ = {
                    measureLayout: x(["layout", "layoutId", "drag"]),
                    animation: x(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: x(["exit"]),
                    drag: x(["drag", "dragControls"]),
                    focus: x(["whileFocus"]),
                    hover: x(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: x(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: x(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: x(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function E(t) {
                for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? _.projectionNodeConstructor = t[e] : _[e].Component = t[e])
            }
            var A = u.createContext({
                    strict: !1
                }),
                S = Object.keys(_),
                b = S.length,
                w = u.createContext({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                P = u.createContext({});

            function T() {
                return u.useContext(P).visualElement
            }
            var V = u.createContext(null),
                C = "undefined" != typeof document,
                R = C ? u.useLayoutEffect : u.useEffect,
                L = {
                    current: null
                },
                k = !1;

            function D() {
                return k || function() {
                    if (k = !0, C) {
                        if (window.matchMedia) {
                            var t = window.matchMedia("(prefers-reduced-motion)"),
                                e = function() {
                                    return L.current = t.matches
                                };
                            t.addListener(e), e()
                        } else L.current = !1
                    }
                }(), s.__read(u.useState(L.current), 1)[0]
            }

            function M() {
                var t = D(),
                    e = u.useContext(w).reducedMotion;
                return "never" !== e && ("always" === e || t)
            }

            function I(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function O(t) {
                return Array.isArray(t)
            }

            function F(t) {
                return "string" == typeof t || O(t)
            }

            function j(t, e, n, r, i) {
                var o;
                return void 0 === r && (r = {}), void 0 === i && (i = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)), "string" == typeof e && (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)), e
            }

            function U(t, e, n) {
                var r, i, o = t.getProps();
                return j(o, e, null != n ? n : o.custom, (r = {}, t.forEachValue(function(t, e) {
                    return r[e] = t.get()
                }), r), (i = {}, t.forEachValue(function(t, e) {
                    return i[e] = t.getVelocity()
                }), i))
            }

            function B(t) {
                var e;
                return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || F(t.initial) || F(t.animate) || F(t.whileHover) || F(t.whileDrag) || F(t.whileTap) || F(t.whileFocus) || F(t.exit)
            }

            function N(t) {
                return !!(B(t) || t.variants)
            }

            function z(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }

            function Y(t) {
                var e = u.useRef(null);
                return null === e.current && (e.current = t()), e.current
            }
            var X = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                H = 1,
                W = u.createContext({}),
                G = u.createContext({}),
                Z = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s.__extends(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
                        return this.updateProps(), null
                    }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.props;
                        e && e.setProps(n)
                    }, e.prototype.render = function() {
                        return this.props.children
                    }, e
                }(m.default.Component);

            function K(t) {
                var e = t.preloadedFeatures,
                    n = t.createVisualElement,
                    r = t.projectionNodeConstructor,
                    i = t.useRender,
                    o = t.useVisualState,
                    a = t.Component;
                return e && E(e), u.forwardRef(function(t, c) {
                    var d, f, p, v, m, g, x, E, L, k, D, O, j, U, N, K, $, q, J, Q, tt, te, tn, tr, ti, to = (O = t.layoutId, (j = null === (D = u.useContext(W)) || void 0 === D ? void 0 : D.id) && void 0 !== O ? j + "-" + O : O);
                    t = s.__assign(s.__assign({}, t), {
                        layoutId: to
                    });
                    var ta = u.useContext(w),
                        ts = null,
                        tu = (N = (U = function(t, e) {
                            if (B(t)) {
                                var n = t.initial,
                                    r = t.animate;
                                return {
                                    initial: !1 === n || F(n) ? n : void 0,
                                    animate: F(r) ? r : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, u.useContext(P))).initial, K = U.animate, u.useMemo(function() {
                            return {
                                initial: N,
                                animate: K
                            }
                        }, [z(N), z(K)])),
                        tl = ta.isStatic ? void 0 : Y(function() {
                            if (X.hasEverUpdated) return H++
                        }),
                        tc = o(t, ta.isStatic);
                    return !ta.isStatic && C && (tu.visualElement = ($ = s.__assign(s.__assign({}, ta), t), q = n, J = u.useContext(A), Q = T(), tt = u.useContext(V), te = M(), tn = u.useRef(void 0), q || (q = J.renderer), !tn.current && q && (tn.current = q(a, {
                        visualState: tc,
                        parent: Q,
                        props: $,
                        presenceId: null == tt ? void 0 : tt.id,
                        blockInitialAnimation: (null == tt ? void 0 : tt.initial) === !1,
                        shouldReduceMotion: te
                    })), tr = tn.current, R(function() {
                        null == tr || tr.syncRender()
                    }), u.useEffect(function() {
                        var t;
                        null === (t = null == tr ? void 0 : tr.animationState) || void 0 === t || t.animateChanges()
                    }), R(function() {
                        return function() {
                            return null == tr ? void 0 : tr.notifyUnmount()
                        }
                    }, []), tr), d = t, f = tu.visualElement, p = r || _.projectionNodeConstructor, m = d.layoutId, g = d.layout, x = d.drag, E = d.dragConstraints, L = d.layoutScroll, k = u.useContext(G), !p || !f || (null == f ? void 0 : f.projection) || (f.projection = new p(tl, f.getLatestValues(), null === (v = f.parent) || void 0 === v ? void 0 : v.projection), f.projection.setOptions({
                        layoutId: m,
                        layout: g,
                        alwaysMeasureLayout: !!x || E && I(E),
                        visualElement: f,
                        scheduleRender: function() {
                            return f.scheduleRender()
                        },
                        animationType: "string" == typeof g ? g : "both",
                        initialPromotionConfig: k,
                        layoutScroll: L
                    })), ts = function(t, e, n) {
                        var r = [],
                            i = u.useContext(A);
                        if (!e) return null;
                        "production" !== y && n && i.strict && l.invariant(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                        for (var o = 0; o < b; o++) {
                            var a = S[o],
                                c = _[a],
                                d = c.isEnabled,
                                f = c.Component;
                            d(t) && f && r.push(h.createElement(f, s.__assign({
                                key: a
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return r
                    }(t, tu.visualElement, e)), h.createElement(Z, {
                        visualElement: tu.visualElement,
                        props: s.__assign(s.__assign({}, ta), t)
                    }, ts, h.createElement(P.Provider, {
                        value: tu
                    }, i(a, t, tl, (ti = tu.visualElement, u.useCallback(function(t) {
                        var e;
                        t && (null === (e = tc.mount) || void 0 === e || e.call(tc, t)), ti && (t ? ti.mount(t) : ti.unmount()), c && ("function" == typeof c ? c(t) : I(c) && (c.current = t))
                    }, [ti])), tc, ta.isStatic, tu.visualElement)))
                })
            }

            function $(t) {
                function e(e, n) {
                    return void 0 === n && (n = {}), K(t(e, n))
                }
                if ("undefined" == typeof Proxy) return e;
                var n = new Map;
                return new Proxy(e, {
                    get: function(t, r) {
                        return n.has(r) || n.set(r, e(r)), n.get(r)
                    }
                })
            }
            var q = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function J(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (q.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            var Q = {};

            function tt(t) {
                Object.assign(Q, t)
            }
            var te = ["", "X", "Y", "Z"],
                tn = ["transformPerspective", "x", "y", "z"];

            function tr(t, e) {
                return tn.indexOf(t) - tn.indexOf(e)
            }["translate", "scale", "rotate", "skew"].forEach(function(t) {
                return te.forEach(function(e) {
                    return tn.push(t + e)
                })
            });
            var ti = new Set(tn);

            function to(t) {
                return ti.has(t)
            }
            var ta = new Set(["originX", "originY", "originZ"]);

            function ts(t, e) {
                var n = e.layout,
                    r = e.layoutId;
                return to(t) || ta.has(t) || (n || void 0 !== r) && (!!Q[t] || "opacity" === t)
            }
            var tu = function(t) {
                    return !!(null !== t && "object" == typeof t && t.getVelocity)
                },
                tl = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                };

            function tc(t) {
                return t.startsWith("--")
            }
            var td = s.__assign(s.__assign({}, c.number), {
                    transform: Math.round
                }),
                tf = {
                    borderWidth: c.px,
                    borderTopWidth: c.px,
                    borderRightWidth: c.px,
                    borderBottomWidth: c.px,
                    borderLeftWidth: c.px,
                    borderRadius: c.px,
                    radius: c.px,
                    borderTopLeftRadius: c.px,
                    borderTopRightRadius: c.px,
                    borderBottomRightRadius: c.px,
                    borderBottomLeftRadius: c.px,
                    width: c.px,
                    maxWidth: c.px,
                    height: c.px,
                    maxHeight: c.px,
                    size: c.px,
                    top: c.px,
                    right: c.px,
                    bottom: c.px,
                    left: c.px,
                    padding: c.px,
                    paddingTop: c.px,
                    paddingRight: c.px,
                    paddingBottom: c.px,
                    paddingLeft: c.px,
                    margin: c.px,
                    marginTop: c.px,
                    marginRight: c.px,
                    marginBottom: c.px,
                    marginLeft: c.px,
                    rotate: c.degrees,
                    rotateX: c.degrees,
                    rotateY: c.degrees,
                    rotateZ: c.degrees,
                    scale: c.scale,
                    scaleX: c.scale,
                    scaleY: c.scale,
                    scaleZ: c.scale,
                    skew: c.degrees,
                    skewX: c.degrees,
                    skewY: c.degrees,
                    distance: c.px,
                    translateX: c.px,
                    translateY: c.px,
                    translateZ: c.px,
                    x: c.px,
                    y: c.px,
                    z: c.px,
                    perspective: c.px,
                    transformPerspective: c.px,
                    opacity: c.alpha,
                    originX: c.progressPercentage,
                    originY: c.progressPercentage,
                    originZ: c.px,
                    zIndex: td,
                    fillOpacity: c.alpha,
                    strokeOpacity: c.alpha,
                    numOctaves: td
                };

            function tp(t, e, n, r) {
                var i, o, a, s, u = t.style,
                    l = t.vars,
                    c = t.transform,
                    d = t.transformKeys,
                    f = t.transformOrigin;
                d.length = 0;
                var p = !1,
                    v = !1,
                    h = !0;
                for (var m in e) {
                    var g = e[m];
                    if (tc(m)) {
                        l[m] = g;
                        continue
                    }
                    var y = tf[m],
                        x = y && "number" == typeof g ? y.transform(g) : g;
                    if (to(m)) {
                        if (p = !0, c[m] = x, d.push(m), !h) continue;
                        g !== (null !== (s = y.default) && void 0 !== s ? s : 0) && (h = !1)
                    } else ta.has(m) ? (f[m] = x, v = !0) : u[m] = x
                }
                p ? u.transform = function(t, e, n, r) {
                    var i = t.transform,
                        o = t.transformKeys,
                        a = e.enableHardwareAcceleration,
                        s = e.allowTransformNone,
                        u = "";
                    o.sort(tr);
                    for (var l = !1, c = o.length, d = 0; d < c; d++) {
                        var f = o[d];
                        u += "".concat(tl[f] || f, "(").concat(i[f], ") "), "z" === f && (l = !0)
                    }
                    return !l && (void 0 === a || a) ? u += "translateZ(0)" : u = u.trim(), r ? u = r(i, n ? "" : u) : (void 0 === s || s) && n && (u = "none"), u
                }(t, n, h, r) : r ? u.transform = r({}, "") : !e.transform && u.transform && (u.transform = "none"), v && (u.transformOrigin = (i = f.originX, o = f.originY, a = f.originZ, "".concat(void 0 === i ? "50%" : i, " ").concat(void 0 === o ? "50%" : o, " ").concat(void 0 === a ? 0 : a)))
            }
            var tv = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function th(t, e, n) {
                for (var r in e) tu(e[r]) || ts(r, n) || (t[r] = e[r])
            }
            var tm = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function tg(t) {
                return tm.has(t)
            }
            var ty = function(t) {
                return !tg(t)
            };

            function tx(t) {
                t && (ty = function(e) {
                    return e.startsWith("on") ? !tg(e) : t(e)
                })
            }
            try {
                tx(n(36046).Z)
            } catch (t) {}

            function t_(t, e, n) {
                var r = {};
                for (var i in t)(ty(i) || !0 === n && tg(i) || !e && !tg(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                return r
            }

            function tE(t, e, n) {
                return "string" == typeof t ? t : c.px.transform(e + n * t)
            }
            var tA = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tS = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tb(t, e, n, r) {
                var i, o, a, u, l, d, f, p, v, h, m = e.attrX,
                    g = e.attrY,
                    y = e.originX,
                    x = e.originY,
                    _ = e.pathLength,
                    E = e.pathSpacing,
                    A = e.pathOffset;
                tp(t, s.__rest(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), t.attrs = t.style, t.style = {};
                var S = t.attrs,
                    b = t.style,
                    w = t.dimensions;
                S.transform && (w && (b.transform = S.transform), delete S.transform), w && (void 0 !== y || void 0 !== x || b.transform) && (b.transformOrigin = (i = void 0 !== y ? y : .5, o = void 0 !== x ? x : .5, a = tE(i, w.x, w.width), u = tE(o, w.y, w.height), "".concat(a, " ").concat(u))), void 0 !== m && (S.x = m), void 0 !== g && (S.y = g), void 0 !== _ && (f = !1, void 0 === (l = void 0 === E ? 1 : E) && (l = 1), void 0 === (d = void 0 === A ? 0 : A) && (d = 0), void 0 === f && (f = !0), S.pathLength = 1, S[(p = f ? tA : tS).offset] = c.px.transform(-d), v = c.px.transform(_), h = c.px.transform(l), S[p.array] = "".concat(v, " ").concat(h))
            }
            var tw = function() {
                    return s.__assign(s.__assign({}, tv()), {
                        attrs: {}
                    })
                },
                tP = /([a-z])([A-Z])/g,
                tT = function(t) {
                    return t.replace(tP, "$1-$2").toLowerCase()
                };

            function tV(t, e, n, r) {
                var i = e.style,
                    o = e.vars;
                for (var a in Object.assign(t.style, i, r && r.getProjectionStyles(n)), o) t.style.setProperty(a, o[a])
            }
            var tC = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function tR(t, e, n, r) {
                for (var i in tV(t, e, void 0, r), e.attrs) t.setAttribute(tC.has(i) ? i : tT(i), e.attrs[i])
            }

            function tL(t) {
                var e = t.style,
                    n = {};
                for (var r in e)(tu(e[r]) || ts(r, t)) && (n[r] = e[r]);
                return n
            }

            function tk(t) {
                var e = tL(t);
                for (var n in t) tu(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
                return e
            }

            function tD(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            var tM = function(t) {
                    return Array.isArray(t)
                },
                tI = function(t) {
                    return tM(t) ? t[t.length - 1] || 0 : t
                };

            function tO(t) {
                var e = tu(t) ? t.get() : t;
                return e && "object" == typeof e && e.mix && e.toValue ? e.toValue() : e
            }

            function tF(t, e, n, r) {
                var i = t.scrapeMotionValuesFromProps,
                    o = t.createRenderState,
                    a = t.onMount,
                    u = {
                        latestValues: function(t, e, n, r) {
                            var i = {},
                                o = (null == n ? void 0 : n.initial) === !1,
                                a = r(t);
                            for (var u in a) i[u] = tO(a[u]);
                            var l = t.initial,
                                c = t.animate,
                                d = B(t),
                                f = N(t);
                            e && f && !d && !1 !== t.inherit && (null != l || (l = e.initial), null != c || (c = e.animate));
                            var p = o || !1 === l,
                                v = p ? c : l;
                            return v && "boolean" != typeof v && !tD(v) && (Array.isArray(v) ? v : [v]).forEach(function(e) {
                                var n = j(t, e);
                                if (n) {
                                    var r = n.transitionEnd;
                                    n.transition;
                                    var o = s.__rest(n, ["transitionEnd", "transition"]);
                                    for (var a in o) {
                                        var u = o[a];
                                        if (Array.isArray(u)) {
                                            var l = p ? u.length - 1 : 0;
                                            u = u[l]
                                        }
                                        null !== u && (i[a] = u)
                                    }
                                    for (var a in r) i[a] = r[a]
                                }
                            }), i
                        }(e, n, r, i),
                        renderState: o()
                    };
                return a && (u.mount = function(t) {
                    return a(e, t, u)
                }), u
            }
            var tj = function(t) {
                    return function(e, n) {
                        var r = u.useContext(P),
                            i = u.useContext(V);
                        return n ? tF(t, e, r, i) : Y(function() {
                            return tF(t, e, r, i)
                        })
                    }
                },
                tU = {
                    useVisualState: tj({
                        scrapeMotionValuesFromProps: tk,
                        createRenderState: tw,
                        onMount: function(t, e, n) {
                            var r = n.renderState,
                                i = n.latestValues;
                            try {
                                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tb(r, i, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), tR(e, r)
                        }
                    })
                },
                tB = {
                    useVisualState: tj({
                        scrapeMotionValuesFromProps: tL,
                        createRenderState: tv
                    })
                };

            function tN(t, e, n, r, i) {
                var o, a = e.forwardMotionProps,
                    l = J(t) ? tU : tB;
                return s.__assign(s.__assign({}, l), {
                    preloadedFeatures: n,
                    useRender: (void 0 === (o = void 0 !== a && a) && (o = !1), function(t, e, n, r, i, a) {
                        var l = i.latestValues,
                            c = (J(t) ? function(t, e) {
                                var n = u.useMemo(function() {
                                    var n = tw();
                                    return tb(n, e, {
                                        enableHardwareAcceleration: !1
                                    }, t.transformTemplate), s.__assign(s.__assign({}, n.attrs), {
                                        style: s.__assign({}, n.style)
                                    })
                                }, [e]);
                                if (t.style) {
                                    var r = {};
                                    th(r, t.style, t), n.style = s.__assign(s.__assign({}, r), n.style)
                                }
                                return n
                            } : function(t, e, n) {
                                var r, i, o = {},
                                    a = (th(r = {}, t.style || {}, t), Object.assign(r, (i = t.transformTemplate, u.useMemo(function() {
                                        var t = tv();
                                        tp(t, e, {
                                            enableHardwareAcceleration: !n
                                        }, i);
                                        var r = t.vars,
                                            o = t.style;
                                        return s.__assign(s.__assign({}, r), o)
                                    }, [e]))), t.transformValues && (r = t.transformValues(r)), r);
                                return t.drag && !1 !== t.dragListener && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), o.style = a, o
                            })(e, l, a),
                            d = t_(e, "string" == typeof t, o),
                            f = s.__assign(s.__assign(s.__assign({}, d), c), {
                                ref: r
                            });
                        return n && (f["data-projection-id"] = n), u.createElement(t, f)
                    }),
                    createVisualElement: r,
                    projectionNodeConstructor: i,
                    Component: t
                })
            }

            function tz(t, e, n, r) {
                return void 0 === r && (r = {
                        passive: !0
                    }), t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n)
                    }
            }

            function tY(t, e, n, r) {
                u.useEffect(function() {
                    var i = t.current;
                    if (n && i) return tz(i, e, n, r)
                }, [t, e, n, r])
            }

            function tX(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }
            e.AnimationType = void 0, (r = e.AnimationType || (e.AnimationType = {})).Animate = "animate", r.Hover = "whileHover", r.Tap = "whileTap", r.Drag = "whileDrag", r.Focus = "whileFocus", r.InView = "whileInView", r.Exit = "exit";
            var tH = {
                pageX: 0,
                pageY: 0
            };

            function tW(t, e) {
                var n, r, i;
                return void 0 === e && (e = "page"), {
                    point: t.touches ? (void 0 === (n = e) && (n = "page"), {
                        x: (r = t.touches[0] || t.changedTouches[0] || tH)[n + "X"],
                        y: r[n + "Y"]
                    }) : (void 0 === (i = e) && (i = "page"), {
                        x: t[i + "X"],
                        y: t[i + "Y"]
                    })
                }
            }
            var tG = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = function(e) {
                        return t(e, tW(e))
                    };
                    return e ? function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && n(t)
                    } : n
                },
                tZ = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                tK = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function t$(t) {
                if (C && null === window.onpointerdown);
                else if (C && null === window.ontouchstart) return tK[t];
                else if (C && null === window.onmousedown) return tZ[t];
                return t
            }

            function tq(t, e, n, r) {
                return tz(t, t$(e), tG(n, "pointerdown" === e), r)
            }

            function tJ(t, e, n, r) {
                return tY(t, t$(e), n && tG(n, "pointerdown" === e), r)
            }

            function tQ(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var t0 = tQ("dragHorizontal"),
                t1 = tQ("dragVertical");

            function t5(t) {
                var e = !1;
                if ("y" === t) e = t1();
                else if ("x" === t) e = t0();
                else {
                    var n = t0(),
                        r = t1();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function t2() {
                var t = t5(!0);
                return !t || (t(), !1)
            }

            function t3(t, n, r) {
                return function(i, o) {
                    var a;
                    !tX(i) || t2() || (null === (a = t.animationState) || void 0 === a || a.setActive(e.AnimationType.Hover, n), null == r || r(i, o))
                }
            }
            var t4 = function(t, e) {
                return !!e && (t === e || t4(t, e.parentElement))
            };

            function t9(t) {
                return u.useEffect(function() {
                    return function() {
                        return t()
                    }
                }, [])
            }
            var t8 = new Set;

            function t6(t, e, n) {
                t || t8.has(e) || (console.warn(e), n && console.warn(n), t8.add(e))
            }
            var t7 = new WeakMap,
                et = new WeakMap,
                ee = function(t) {
                    var e;
                    null === (e = t7.get(t.target)) || void 0 === e || e(t)
                },
                en = function(t) {
                    t.forEach(ee)
                },
                er = {
                    some: 0,
                    all: 1
                },
                ei = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                eo = {
                    inView: ei(function(t) {
                        var n = t.visualElement,
                            r = t.whileInView,
                            i = t.onViewportEnter,
                            o = t.onViewportLeave,
                            a = t.viewport,
                            l = void 0 === a ? {} : a,
                            c = u.useRef({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            d = !!(r || i || o);
                        l.once && c.current.hasEnteredView && (d = !1), ("undefined" == typeof IntersectionObserver ? function(t, n, r, i) {
                            var o = i.fallback,
                                a = void 0 === o || o;
                            u.useEffect(function() {
                                t && a && ("production" !== y && t6(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
                                    n.hasEnteredView = !0;
                                    var t, i = r.getProps().onViewportEnter;
                                    null == i || i(null), null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.InView, !0)
                                }))
                            }, [t])
                        } : function(t, n, r, i) {
                            var o = i.root,
                                a = i.margin,
                                l = i.amount,
                                c = void 0 === l ? "some" : l,
                                d = i.once;
                            u.useEffect(function() {
                                if (t) {
                                    var i, u, l, f, p, v, h, m, g = {
                                        root: null == o ? void 0 : o.current,
                                        rootMargin: a,
                                        threshold: "number" == typeof c ? c : er[c]
                                    };
                                    return i = r.getInstance(), u = function(t) {
                                            var i, o = t.isIntersecting;
                                            if (n.isInView !== o) {
                                                if (n.isInView = o, d && !o && n.hasEnteredView) return;
                                                o && (n.hasEnteredView = !0), null === (i = r.animationState) || void 0 === i || i.setActive(e.AnimationType.InView, o);
                                                var a = r.getProps(),
                                                    s = o ? a.onViewportEnter : a.onViewportLeave;
                                                null == s || s(t)
                                            }
                                        }, l = g.root, f = s.__rest(g, ["root"]), p = l || document, et.has(p) || et.set(p, {}), (v = et.get(p))[h = JSON.stringify(f)] || (v[h] = new IntersectionObserver(en, s.__assign({
                                            root: l
                                        }, f))), m = v[h], t7.set(i, u), m.observe(i),
                                        function() {
                                            t7.delete(i), m.unobserve(i)
                                        }
                                }
                            }, [t, o, a, c])
                        })(d, c.current, n, l)
                    }),
                    tap: ei(function(t) {
                        var n = t.onTap,
                            r = t.onTapStart,
                            i = t.onTapCancel,
                            o = t.whileTap,
                            a = t.visualElement,
                            s = n || r || i || o,
                            l = u.useRef(!1),
                            c = u.useRef(null),
                            f = {
                                passive: !(r || n || i || g)
                            };

                        function p() {
                            var t;
                            null === (t = c.current) || void 0 === t || t.call(c), c.current = null
                        }

                        function v() {
                            var t;
                            return p(), l.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(e.AnimationType.Tap, !1), !t2()
                        }

                        function h(t, e) {
                            v() && (t4(a.getInstance(), t.target) ? null == n || n(t, e) : null == i || i(t, e))
                        }

                        function m(t, e) {
                            v() && (null == i || i(t, e))
                        }

                        function g(t, n) {
                            var i;
                            p(), l.current || (l.current = !0, c.current = d.pipe(tq(window, "pointerup", h, f), tq(window, "pointercancel", m, f)), null === (i = a.animationState) || void 0 === i || i.setActive(e.AnimationType.Tap, !0), null == r || r(t, n))
                        }
                        tJ(a, "pointerdown", s ? g : void 0, f), t9(p)
                    }),
                    focus: ei(function(t) {
                        var n = t.whileFocus,
                            r = t.visualElement;
                        tY(r, "focus", n ? function() {
                            var t;
                            null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.Focus, !0)
                        } : void 0), tY(r, "blur", n ? function() {
                            var t;
                            null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.Focus, !1)
                        } : void 0)
                    }),
                    hover: ei(function(t) {
                        var e = t.onHoverStart,
                            n = t.onHoverEnd,
                            r = t.whileHover,
                            i = t.visualElement;
                        tJ(i, "pointerenter", e || r ? t3(i, !0, e) : void 0, {
                            passive: !e
                        }), tJ(i, "pointerleave", n || r ? t3(i, !1, n) : void 0, {
                            passive: !n
                        })
                    })
                },
                ea = 0,
                es = function() {
                    return ea++
                },
                eu = function() {
                    return Y(es)
                };

            function el() {
                var t = u.useContext(V);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    r = t.register,
                    i = eu();
                return u.useEffect(function() {
                    return r(i)
                }, []), !e && n ? [!1, function() {
                    return null == n ? void 0 : n(i)
                }] : [!0]
            }

            function ec(t, e) {
                if (!Array.isArray(e)) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var ed = function(t) {
                    return 1e3 * t
                },
                ef = {
                    linear: d.linear,
                    easeIn: d.easeIn,
                    easeInOut: d.easeInOut,
                    easeOut: d.easeOut,
                    circIn: d.circIn,
                    circInOut: d.circInOut,
                    circOut: d.circOut,
                    backIn: d.backIn,
                    backInOut: d.backInOut,
                    backOut: d.backOut,
                    anticipate: d.anticipate,
                    bounceIn: d.bounceIn,
                    bounceInOut: d.bounceInOut,
                    bounceOut: d.bounceOut
                },
                ep = function(t) {
                    if (Array.isArray(t)) {
                        l.invariant(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        var e = s.__read(t, 4),
                            n = e[0],
                            r = e[1],
                            i = e[2],
                            o = e[3];
                        return d.cubicBezier(n, r, i, o)
                    }
                    return "string" == typeof t ? (l.invariant(void 0 !== ef[t], "Invalid easing type '".concat(t, "'")), ef[t]) : t
                },
                ev = function(t, e) {
                    return "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && c.complex.test(e) && !e.startsWith("url("))
                },
                eh = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                em = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                eg = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                ey = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                ex = {
                    x: eh,
                    y: eh,
                    z: eh,
                    rotate: eh,
                    rotateX: eh,
                    rotateY: eh,
                    rotateZ: eh,
                    scaleX: em,
                    scaleY: em,
                    scale: em,
                    opacity: eg,
                    backgroundColor: eg,
                    color: eg,
                    default: em
                },
                e_ = function(t, e) {
                    var n;
                    return n = tM(e) ? ey : ex[t] || ex.default, s.__assign({
                        to: e
                    }, n(e))
                },
                eE = s.__assign(s.__assign({}, tf), {
                    color: c.color,
                    backgroundColor: c.color,
                    outlineColor: c.color,
                    fill: c.color,
                    stroke: c.color,
                    borderColor: c.color,
                    borderTopColor: c.color,
                    borderRightColor: c.color,
                    borderBottomColor: c.color,
                    borderLeftColor: c.color,
                    filter: c.filter,
                    WebkitFilter: c.filter
                }),
                eA = function(t) {
                    return eE[t]
                };

            function eS(t, e) {
                var n, r = eA(t);
                return r !== c.filter && (r = c.complex), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            var eb = {
                    current: !1
                },
                ew = !1;

            function eP(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function eT(t) {
                return "number" == typeof t ? 0 : eS("", t)
            }

            function eV(t, e) {
                return t[e] || t.default || t
            }

            function eC(t, e, n, r) {
                return void 0 === r && (r = {}), eb.current && (r = {
                    type: !1
                }), e.start(function(i) {
                    var o, a, u, c, f, p, v, h, m, g, y, x = (c = n, v = null !== (f = (p = eV(r, t)).from) && void 0 !== f ? f : e.get(), h = ev(t, c), "none" === v && h && "string" == typeof c ? v = eS(t, c) : eP(v) && "string" == typeof c ? v = eT(c) : !Array.isArray(c) && eP(c) && "string" == typeof v && (c = eT(v)), m = ev(t, v), l.warning(m === h, "You are trying to animate ".concat(t, ' from "').concat(v, '" to "').concat(c, '". ').concat(v, " is not an animatable value - to enable this animation set ").concat(v, " to a value animatable to ").concat(c, " via the `style` property.")), m && h && !1 !== p.type ? function() {
                            var n, r, o, a, u, f, h, m, g, y, x, _, E, A = {
                                from: v,
                                to: c,
                                velocity: e.getVelocity(),
                                onComplete: i,
                                onUpdate: function(t) {
                                    return e.set(t)
                                }
                            };
                            return "inertia" === p.type || "decay" === p.type ? d.inertia(s.__assign(s.__assign({}, A), p)) : d.animate(s.__assign(s.__assign({}, (n = p, r = A, o = t, Array.isArray(r.to) && (null !== (a = n.duration) && void 0 !== a || (n.duration = .8)), Array.isArray(r.to) && null === r.to[0] && (r.to = s.__spreadArray([], s.__read(r.to), !1), r.to[0] = r.from), (u = n).when, u.delay, u.delayChildren, u.staggerChildren, u.staggerDirection, u.repeat, u.repeatType, u.repeatDelay, u.from, Object.keys(s.__rest(u, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"])).length || (n = s.__assign(s.__assign({}, n), e_(o, r.to))), s.__assign(s.__assign({}, r), (h = (f = n).ease, m = f.times, g = f.yoyo, y = f.flip, x = f.loop, _ = s.__rest(f, ["ease", "times", "yoyo", "flip", "loop"]), E = s.__assign({}, _), m && (E.offset = m), _.duration && (E.duration = ed(_.duration)), _.repeatDelay && (E.repeatDelay = ed(_.repeatDelay)), h && (E.ease = Array.isArray(h) && "number" != typeof h[0] ? h.map(ep) : ep(h)), "tween" === _.type && (E.type = "keyframes"), (g || x || y) && (l.warning(!ew, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), ew = !0, g ? E.repeatType = "reverse" : x ? E.repeatType = "loop" : y && (E.repeatType = "mirror"), E.repeat = x || g || y || _.repeat), "spring" !== _.type && (E.type = "keyframes"), E)))), {
                                onUpdate: function(t) {
                                    var e;
                                    A.onUpdate(t), null === (e = p.onUpdate) || void 0 === e || e.call(p, t)
                                },
                                onComplete: function() {
                                    var t;
                                    A.onComplete(), null === (t = p.onComplete) || void 0 === t || t.call(p)
                                }
                            }))
                        } : function() {
                            var t, n, r = tI(c);
                            return e.set(r), i(), null === (t = null == p ? void 0 : p.onUpdate) || void 0 === t || t.call(p, r), null === (n = null == p ? void 0 : p.onComplete) || void 0 === n || n.call(p), {
                                stop: function() {}
                            }
                        }),
                        _ = null !== (u = null !== (a = (eV(o = r, t) || {}).delay) && void 0 !== a ? a : o.delay) && void 0 !== u ? u : 0,
                        E = function() {
                            return y = x()
                        };
                    return _ ? g = window.setTimeout(E, ed(_)) : E(),
                        function() {
                            clearTimeout(g), null == y || y.stop()
                        }
                })
            }

            function eR(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function eL(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var ek = function() {
                    function t() {
                        this.subscriptions = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this;
                        return eR(this.subscriptions, t),
                            function() {
                                return eL(e.subscriptions, t)
                            }
                    }, t.prototype.notify = function(t, e, n) {
                        var r = this.subscriptions.length;
                        if (r) {
                            if (1 === r) this.subscriptions[0](t, e, n);
                            else
                                for (var i = 0; i < r; i++) {
                                    var o = this.subscriptions[i];
                                    o && o(t, e, n)
                                }
                        }
                    }, t.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, t.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, t
                }(),
                eD = function() {
                    function t(t) {
                        var e = this;
                        this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new ek, this.velocityUpdateSubscribers = new ek, this.renderSubscribers = new ek, this.canTrackVelocity = !1, this.updateAndNotify = function(t, n) {
                            void 0 === n && (n = !0), e.prev = e.current, e.current = t;
                            var r = f.getFrameData(),
                                i = r.delta,
                                o = r.timestamp;
                            e.lastUpdated !== o && (e.timeDelta = i, e.lastUpdated = o, g.default.postRender(e.scheduleVelocityCheck)), e.prev !== e.current && e.updateSubscribers.notify(e.current), e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()), n && e.renderSubscribers.notify(e.current)
                        }, this.scheduleVelocityCheck = function() {
                            return g.default.postRender(e.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== e.lastUpdated && (e.prev = e.current, e.velocityUpdateSubscribers.notify(e.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = !isNaN(parseFloat(this.current))
                    }
                    return t.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, t.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? d.velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise(function(n) {
                            e.hasAnimated = !0, e.stopAnimation = t(n)
                        }).then(function() {
                            return e.clearAnimation()
                        })
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function eM(t) {
                return new eD(t)
            }
            var eI = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                eO = [c.number, c.px, c.percent, c.degrees, c.vw, c.vh, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                eF = function(t) {
                    return eO.find(eI(t))
                },
                ej = s.__spreadArray(s.__spreadArray([], s.__read(eO), !1), [c.color, c.complex], !1);

            function eU(t, e) {
                var n = U(t, e),
                    r = n ? t.makeTargetAnimatable(n, !1) : {},
                    i = r.transitionEnd;
                r.transition;
                var o = s.__rest(r, ["transitionEnd", "transition"]);
                for (var a in o = s.__assign(s.__assign({}, o), void 0 === i ? {} : i)) {
                    var u = tI(o[a]);
                    t.hasValue(a) ? t.getValue(a).set(u) : t.addValue(a, eM(u))
                }
            }

            function eB(t, e) {
                s.__spreadArray([], s.__read(e), !1).reverse().forEach(function(n) {
                    var r, i = t.getVariant(n);
                    i && eU(t, i), null === (r = t.variantChildren) || void 0 === r || r.forEach(function(t) {
                        eB(t, e)
                    })
                })
            }

            function eN(t, e, n) {
                var r, i, o, a = Object.keys(e).filter(function(e) {
                        return !t.hasValue(e)
                    }),
                    s = a.length;
                if (s)
                    for (var u = 0; u < s; u++) {
                        var l, d, f, p = a[u],
                            v = e[p],
                            h = null;
                        Array.isArray(v) && (h = v[0]), null === h && (h = null !== (i = null !== (r = n[p]) && void 0 !== r ? r : t.readValue(p)) && void 0 !== i ? i : e[p]), null != h && ("string" == typeof h && (l = h, /^\-?\d*\.?\d+$/.test(l) || (d = h, /^0[^.\s]+$/.test(d))) ? h = parseFloat(h) : (f = h, !ej.find(eI(f)) && c.complex.test(v) && (h = eS(p, v))), t.addValue(p, eM(h)), null !== (o = n[p]) && void 0 !== o || (n[p] = h), t.setBaseTarget(p, h))
                    }
            }

            function ez(t, e, n) {
                var r, i, o = {};
                for (var a in t) o[a] = null !== (r = function(t, e) {
                    if (e) return (e[t] || e.default || e).from
                }(a, e)) && void 0 !== r ? r : null === (i = n.getValue(a)) || void 0 === i ? void 0 : i.get();
                return o
            }

            function eY(t, e, n) {
                if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                    var r;
                    r = Promise.all(e.map(function(e) {
                        return eX(t, e, n)
                    }))
                } else if ("string" == typeof e) r = eX(t, e, n);
                else {
                    var i = "function" == typeof e ? U(t, e, n.custom) : e;
                    r = eH(t, i, n)
                }
                return r.then(function() {
                    return t.notifyAnimationComplete(e)
                })
            }

            function eX(t, e, n) {
                void 0 === n && (n = {});
                var r, i = U(t, e, n.custom),
                    o = (i || {}).transition,
                    a = void 0 === o ? t.getDefaultTransition() || {} : o;
                n.transitionOverride && (a = n.transitionOverride);
                var u = i ? function() {
                        return eH(t, i, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                        void 0 === r && (r = 0);
                        var i, o, u, l, c, d, f, p = a.delayChildren;
                        return i = (void 0 === p ? 0 : p) + r, o = a.staggerChildren, u = a.staggerDirection, l = n, void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === u && (u = 1), c = [], d = (t.variantChildren.size - 1) * o, f = 1 === u ? function(t) {
                            return void 0 === t && (t = 0), t * o
                        } : function(t) {
                            return void 0 === t && (t = 0), d - t * o
                        }, Array.from(t.variantChildren).sort(eW).forEach(function(t, n) {
                            c.push(eX(t, e, s.__assign(s.__assign({}, l), {
                                delay: i + f(n)
                            })).then(function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }), Promise.all(c)
                    } : function() {
                        return Promise.resolve()
                    },
                    c = a.when;
                if (!c) return Promise.all([u(), l(n.delay)]);
                var d = s.__read("beforeChildren" === c ? [u, l] : [l, u], 2),
                    f = d[0],
                    p = d[1];
                return f().then(p)
            }

            function eH(t, e, n) {
                var r, i = void 0 === n ? {} : n,
                    o = i.delay,
                    a = void 0 === o ? 0 : o,
                    u = i.transitionOverride,
                    l = i.type,
                    c = t.makeTargetAnimatable(e),
                    d = c.transition,
                    f = void 0 === d ? t.getDefaultTransition() : d,
                    p = c.transitionEnd,
                    v = s.__rest(c, ["transition", "transitionEnd"]);
                u && (f = u);
                var h = [],
                    m = l && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[l]);
                for (var g in v) {
                    var y = t.getValue(g),
                        x = v[g];
                    if (!(!y || void 0 === x || m && function(t, e) {
                            var n = t.protectedKeys,
                                r = t.needsAnimating,
                                i = n.hasOwnProperty(e) && !0 !== r[e];
                            return r[e] = !1, i
                        }(m, g))) {
                        var _ = s.__assign({
                            delay: a
                        }, f);
                        t.shouldReduceMotion && to(g) && (_ = s.__assign(s.__assign({}, _), {
                            type: !1,
                            delay: 0
                        }));
                        var E = eC(g, y, x, _);
                        h.push(E)
                    }
                }
                return Promise.all(h).then(function() {
                    p && eU(t, p)
                })
            }

            function eW(t, e) {
                return t.sortNodePosition(e)
            }
            var eG = [e.AnimationType.Animate, e.AnimationType.InView, e.AnimationType.Focus, e.AnimationType.Hover, e.AnimationType.Tap, e.AnimationType.Drag, e.AnimationType.Exit],
                eZ = s.__spreadArray([], s.__read(eG), !1).reverse(),
                eK = eG.length;

            function e$(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var eq = {
                    animation: ei(function(t) {
                        var n = t.visualElement,
                            r = t.animate;
                        n.animationState || (n.animationState = function(t) {
                            var n, r = function(e) {
                                    return Promise.all(e.map(function(e) {
                                        return eY(t, e.animation, e.options)
                                    }))
                                },
                                i = ((n = {})[e.AnimationType.Animate] = e$(!0), n[e.AnimationType.InView] = e$(), n[e.AnimationType.Hover] = e$(), n[e.AnimationType.Tap] = e$(), n[e.AnimationType.Drag] = e$(), n[e.AnimationType.Focus] = e$(), n[e.AnimationType.Exit] = e$(), n),
                                o = {},
                                a = !0,
                                u = function(e, n) {
                                    var r = U(t, n);
                                    if (r) {
                                        r.transition;
                                        var i = r.transitionEnd,
                                            o = s.__rest(r, ["transition", "transitionEnd"]);
                                        e = s.__assign(s.__assign(s.__assign({}, e), o), i)
                                    }
                                    return e
                                };

                            function l(e, n) {
                                for (var l, c = t.getProps(), d = t.getVariantContext(!0) || {}, f = [], p = new Set, v = {}, h = 1 / 0, m = 0; m < eK; m++) ! function(r) {
                                    var o, m = eZ[r],
                                        g = i[m],
                                        y = null !== (l = c[m]) && void 0 !== l ? l : d[m],
                                        x = F(y),
                                        _ = m === n ? g.isActive : null;
                                    !1 === _ && (h = r);
                                    var E = y === d[m] && y !== c[m] && x;
                                    if (E && a && t.manuallyAnimateOnMount && (E = !1), g.protectedKeys = s.__assign({}, v), !(!g.isActive && null === _ || !y && !g.prevProp || tD(y)) && "boolean" != typeof y) {
                                        var A = (o = g.prevProp, "string" == typeof y ? y !== o : !!O(y) && !ec(y, o)),
                                            S = A || m === n && g.isActive && !E && x || r > h && x,
                                            b = Array.isArray(y) ? y : [y],
                                            w = b.reduce(u, {});
                                        !1 === _ && (w = {});
                                        var P = g.prevResolvedValues,
                                            T = void 0 === P ? {} : P,
                                            V = s.__assign(s.__assign({}, T), w),
                                            C = function(t) {
                                                S = !0, p.delete(t), g.needsAnimating[t] = !0
                                            };
                                        for (var R in V) {
                                            var L = w[R],
                                                k = T[R];
                                            v.hasOwnProperty(R) || (L !== k ? tM(L) && tM(k) ? !ec(L, k) || A ? C(R) : g.protectedKeys[R] = !0 : void 0 !== L ? C(R) : p.add(R) : void 0 !== L && p.has(R) ? C(R) : g.protectedKeys[R] = !0)
                                        }
                                        g.prevProp = y, g.prevResolvedValues = w, g.isActive && (v = s.__assign(s.__assign({}, v), w)), a && t.blockInitialAnimation && (S = !1), S && !E && f.push.apply(f, s.__spreadArray([], s.__read(b.map(function(t) {
                                            return {
                                                animation: t,
                                                options: s.__assign({
                                                    type: m
                                                }, e)
                                            }
                                        })), !1))
                                    }
                                }(m);
                                if (o = s.__assign({}, v), p.size) {
                                    var g = {};
                                    p.forEach(function(e) {
                                        var n = t.getBaseTarget(e);
                                        void 0 !== n && (g[e] = n)
                                    }), f.push({
                                        animation: g
                                    })
                                }
                                var y = !!f.length;
                                return a && !1 === c.initial && !t.manuallyAnimateOnMount && (y = !1), a = !1, y ? r(f) : Promise.resolve()
                            }
                            return {
                                isAnimated: function(t) {
                                    return void 0 !== o[t]
                                },
                                animateChanges: l,
                                setActive: function(e, n, r) {
                                    if (i[e].isActive === n) return Promise.resolve();
                                    null === (o = t.variantChildren) || void 0 === o || o.forEach(function(t) {
                                        var r;
                                        return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                    }), i[e].isActive = n;
                                    var o, a = l(r, e);
                                    for (var s in i) i[s].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(e) {
                                    r = e(t)
                                },
                                getState: function() {
                                    return i
                                }
                            }
                        }(n)), tD(r) && u.useEffect(function() {
                            return r.subscribe(n)
                        }, [r])
                    }),
                    exit: ei(function(t) {
                        var n = t.custom,
                            r = t.visualElement,
                            i = s.__read(el(), 2),
                            o = i[0],
                            a = i[1],
                            l = u.useContext(V);
                        u.useEffect(function() {
                            r.isPresent = o;
                            var t, i, s = null === (t = r.animationState) || void 0 === t ? void 0 : t.setActive(e.AnimationType.Exit, !o, {
                                custom: null !== (i = null == l ? void 0 : l.custom) && void 0 !== i ? i : n
                            });
                            o || null == s || s.then(a)
                        }, [o])
                    })
                },
                eJ = function() {
                    function t(t, e, n) {
                        var r = this,
                            i = (void 0 === n ? {} : n).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                    var t = e1(r.lastMoveEventInfo, r.history),
                                        e = null !== r.startEvent,
                                        n = d.distance(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (e || n) {
                                        var i = t.point,
                                            o = f.getFrameData().timestamp;
                                        r.history.push(s.__assign(s.__assign({}, i), {
                                            timestamp: o
                                        }));
                                        var a = r.handlers,
                                            u = a.onStart,
                                            l = a.onMove;
                                        e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), l && l(r.lastMoveEvent, t)
                                    }
                                }
                            }, this.handlePointerMove = function(t, e) {
                                if (r.lastMoveEvent = t, r.lastMoveEventInfo = eQ(e, r.transformPagePoint), tX(t) && 0 === t.buttons) {
                                    r.handlePointerUp(t, e);
                                    return
                                }
                                g.default.update(r.updatePoint, !0)
                            }, this.handlePointerUp = function(t, e) {
                                r.end();
                                var n = r.handlers,
                                    i = n.onEnd,
                                    o = n.onSessionEnd,
                                    a = e1(eQ(e, r.transformPagePoint), r.history);
                                r.startEvent && i && i(t, a), o && o(t, a)
                            }, !t.touches || !(t.touches.length > 1)) {
                            this.handlers = e, this.transformPagePoint = i;
                            var o = eQ(tW(t), this.transformPagePoint),
                                a = o.point,
                                u = f.getFrameData().timestamp;
                            this.history = [s.__assign(s.__assign({}, a), {
                                timestamp: u
                            })];
                            var l = e.onSessionStart;
                            l && l(t, e1(o, this.history)), this.removeListeners = d.pipe(tq(window, "pointermove", this.handlePointerMove), tq(window, "pointerup", this.handlePointerUp), tq(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return t.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, t.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), f.cancelSync.update(this.updatePoint)
                    }, t
                }();

            function eQ(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function e0(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function e1(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: e0(n, e5(e)),
                    offset: e0(n, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        for (var n = t.length - 1, r = null, i = e5(t); n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > ed(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        var o = (i.timestamp - r.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        var a = {
                            x: (i.x - r.x) / o,
                            y: (i.y - r.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function e5(t) {
                return t[t.length - 1]
            }

            function e2(t) {
                return t.max - t.min
            }

            function e3(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), d.distance(t, e) < n
            }

            function e4(t, e, n, r) {
                void 0 === r && (r = .5), t.origin = r, t.originPoint = d.mix(e.min, e.max, t.origin), t.scale = e2(n) / e2(e), (e3(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = d.mix(n.min, n.max, t.origin) - t.originPoint, (e3(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function e9(t, e, n, r) {
                e4(t.x, e.x, n.x, null == r ? void 0 : r.originX), e4(t.y, e.y, n.y, null == r ? void 0 : r.originY)
            }

            function e8(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + e2(e)
            }

            function e6(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + e2(e)
            }

            function e7(t, e, n) {
                e6(t.x, e.x, n.x), e6(t.y, e.y, n.y)
            }

            function nt(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function ne(t, e) {
                var n, r = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && (r = (n = s.__read([i, r], 2))[0], i = n[1]), {
                    min: r,
                    max: i
                }
            }

            function nn(t, e, n) {
                return {
                    min: nr(t, e),
                    max: nr(t, n)
                }
            }

            function nr(t, e) {
                var n;
                return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }
            var ni = function() {
                    return {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                no = function() {
                    return {
                        x: ni(),
                        y: ni()
                    }
                },
                na = function() {
                    return {
                        min: 0,
                        max: 0
                    }
                },
                ns = function() {
                    return {
                        x: na(),
                        y: na()
                    }
                };

            function nu(t) {
                return [t("x"), t("y")]
            }

            function nl(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function nc(t) {
                return void 0 === t || 1 === t
            }

            function nd(t) {
                var e = t.scale,
                    n = t.scaleX,
                    r = t.scaleY;
                return !nc(e) || !nc(n) || !nc(r)
            }

            function nf(t) {
                var e, n;
                return nd(t) || (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function np(t, e, n, r, i) {
                return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e
            }

            function nv(t, e, n, r, i) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = np(t.min, e, n, r, i), t.max = np(t.max, e, n, r, i)
            }

            function nh(t, e) {
                var n = e.x,
                    r = e.y;
                nv(t.x, n.translate, n.scale, n.originPoint), nv(t.y, r.translate, r.scale, r.originPoint)
            }

            function nm(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function ng(t, e, n) {
                var r = s.__read(n, 3),
                    i = r[0],
                    o = r[1],
                    a = r[2],
                    u = void 0 !== e[a] ? e[a] : .5,
                    l = d.mix(t.min, t.max, u);
                nv(t, e[i], e[o], l, e.scale)
            }
            var ny = ["x", "scaleX", "originX"],
                nx = ["y", "scaleY", "originY"];

            function n_(t, e) {
                ng(t.x, e, ny), ng(t.y, e, nx)
            }

            function nE(t, e) {
                return nl(function(t, e) {
                    if (!e) return t;
                    var n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var nA = new WeakMap,
                nS = function() {
                    function t(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ns(), this.visualElement = t
                    }
                    return t.prototype.start = function(t, n) {
                        var r = this,
                            i = (void 0 === n ? {} : n).snapToCursor,
                            o = void 0 !== i && i;
                        !1 !== this.visualElement.isPresent && (this.panSession = new eJ(t, {
                            onSessionStart: function(t) {
                                r.stopAnimation(), o && r.snapToCursor(tW(t, "page").point)
                            },
                            onStart: function(t, n) {
                                var i, o = r.getProps(),
                                    a = o.drag,
                                    s = o.dragPropagation,
                                    u = o.onDragStart;
                                (!a || s || (r.openGlobalLock && r.openGlobalLock(), r.openGlobalLock = t5(a), r.openGlobalLock)) && (r.isDragging = !0, r.currentDirection = null, r.resolveConstraints(), r.visualElement.projection && (r.visualElement.projection.isAnimationBlocked = !0, r.visualElement.projection.target = void 0), nu(function(t) {
                                    var e, n, i = r.getAxisMotionValue(t).get() || 0;
                                    if (c.percent.test(i)) {
                                        var o = null === (n = null === (e = r.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
                                        if (o) {
                                            var a = e2(o);
                                            i = parseFloat(i) / 100 * a
                                        }
                                    }
                                    r.originPoint[t] = i
                                }), null == u || u(t, n), null === (i = r.visualElement.animationState) || void 0 === i || i.setActive(e.AnimationType.Drag, !0))
                            },
                            onMove: function(t, e) {
                                var n = r.getProps(),
                                    i = n.dragPropagation,
                                    o = n.dragDirectionLock,
                                    a = n.onDirectionLock,
                                    s = n.onDrag;
                                if (i || r.openGlobalLock) {
                                    var u, l, c = e.offset;
                                    if (o && null === r.currentDirection) {
                                        r.currentDirection = (void 0 === u && (u = 10), l = null, Math.abs(c.y) > u ? l = "y" : Math.abs(c.x) > u && (l = "x"), l), null !== r.currentDirection && (null == a || a(r.currentDirection));
                                        return
                                    }
                                    r.updateAxis("x", e.point, c), r.updateAxis("y", e.point, c), r.visualElement.syncRender(), null == s || s(t, e)
                                }
                            },
                            onSessionEnd: function(t, e) {
                                return r.stop(t, e)
                            }
                        }, {
                            transformPagePoint: this.visualElement.getTransformPagePoint()
                        }))
                    }, t.prototype.stop = function(t, e) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = e.velocity;
                            this.startAnimation(r);
                            var i = this.getProps().onDragEnd;
                            null == i || i(t, e)
                        }
                    }, t.prototype.cancel = function() {
                        var t, n;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(e.AnimationType.Drag, !1)
                    }, t.prototype.updateAxis = function(t, e, n) {
                        var r = this.getProps().drag;
                        if (n && nb(t, r, this.currentDirection)) {
                            var i, o, a, s, u, l = this.getAxisMotionValue(t),
                                c = this.originPoint[t] + n[t];
                            this.constraints && this.constraints[t] && (i = c, o = this.constraints[t], a = this.elastic[t], s = o.min, u = o.max, void 0 !== s && i < s ? i = a ? d.mix(s, i, a.min) : Math.max(i, s) : void 0 !== u && i > u && (i = a ? d.mix(u, i, a.max) : Math.min(i, u)), c = i), l.set(c)
                        }
                    }, t.prototype.resolveConstraints = function() {
                        var t, e, n, r, i, o, a = this,
                            s = this.getProps(),
                            u = s.dragConstraints,
                            l = s.dragElastic,
                            c = (this.visualElement.projection || {}).layout,
                            d = this.constraints;
                        u && I(u) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : u && c ? this.constraints = (t = c.actual, e = u.top, n = u.left, r = u.bottom, i = u.right, {
                            x: nt(t.x, n, i),
                            y: nt(t.y, e, r)
                        }) : this.constraints = !1, this.elastic = (void 0 === (o = l) && (o = .35), !1 === o ? o = 0 : !0 === o && (o = .35), {
                            x: nn(o, "left", "right"),
                            y: nn(o, "top", "bottom")
                        }), d !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && nu(function(t) {
                            if (a.getAxisMotionValue(t)) {
                                var e, n, r;
                                a.constraints[t] = (e = c.actual[t], n = a.constraints[t], r = {}, void 0 !== n.min && (r.min = n.min - e.min), void 0 !== n.max && (r.max = n.max - e.min), r)
                            }
                        })
                    }, t.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            n = t.onMeasureDragConstraints;
                        if (!e || !I(e)) return !1;
                        var r = e.current;
                        l.invariant(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                        var i = this.visualElement.projection;
                        if (!i || !i.layout) return !1;
                        var o = (s = i.root, u = nE(r, this.visualElement.getTransformPagePoint()), (c = s.scroll) && (nm(u.x, c.x), nm(u.y, c.y)), u),
                            a = {
                                x: ne((d = i.layout.actual).x, o.x),
                                y: ne(d.y, o.y)
                            };
                        if (n) {
                            var s, u, c, d, f, p, v, h = n((p = (f = a).x, {
                                top: (v = f.y).min,
                                right: p.max,
                                bottom: v.max,
                                left: p.min
                            }));
                            this.hasMutatedConstraints = !!h, h && (a = nl(h))
                        }
                        return a
                    }, t.prototype.startAnimation = function(t) {
                        var e = this,
                            n = this.getProps(),
                            r = n.drag,
                            i = n.dragMomentum,
                            o = n.dragElastic,
                            a = n.dragTransition,
                            u = n.dragSnapToOrigin,
                            l = n.onDragTransitionEnd,
                            c = this.constraints || {};
                        return Promise.all(nu(function(n) {
                            if (nb(n, r, e.currentDirection)) {
                                var l, d = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                                u && (d = {
                                    min: 0,
                                    max: 0
                                });
                                var f = s.__assign(s.__assign({
                                    type: "inertia",
                                    velocity: i ? t[n] : 0,
                                    bounceStiffness: o ? 200 : 1e6,
                                    bounceDamping: o ? 40 : 1e7,
                                    timeConstant: 750,
                                    restDelta: 1,
                                    restSpeed: 10
                                }, a), d);
                                return e.startAxisValueAnimation(n, f)
                            }
                        })).then(l)
                    }, t.prototype.startAxisValueAnimation = function(t, e) {
                        var n = this.getAxisMotionValue(t);
                        return eC(t, n, 0, e)
                    }, t.prototype.stopAnimation = function() {
                        var t = this;
                        nu(function(e) {
                            return t.getAxisMotionValue(e).stop()
                        })
                    }, t.prototype.getAxisMotionValue = function(t) {
                        var e, n, r = "_drag" + t.toUpperCase();
                        return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                    }, t.prototype.snapToCursor = function(t) {
                        var e = this;
                        nu(function(n) {
                            if (nb(n, e.getProps().drag, e.currentDirection)) {
                                var r = e.visualElement.projection,
                                    i = e.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var o = r.layout.actual[n],
                                        a = o.min,
                                        s = o.max;
                                    i.set(t[n] - d.mix(a, s, .5))
                                }
                            }
                        })
                    }, t.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            n = this.getProps(),
                            r = n.drag,
                            i = n.dragConstraints,
                            o = this.visualElement.projection;
                        if (I(i) && o && this.constraints) {
                            this.stopAnimation();
                            var a = {
                                x: 0,
                                y: 0
                            };
                            nu(function(t) {
                                var n = e.getAxisMotionValue(t);
                                if (n) {
                                    var r, i, o, s, u, l = n.get();
                                    a[t] = (r = {
                                        min: l,
                                        max: l
                                    }, i = e.constraints[t], o = .5, s = e2(r), (u = e2(i)) > s ? o = d.progress(i.min, i.max - s, r.min) : s > u && (o = d.progress(r.min, r.max - u, i.min)), d.clamp(0, 1, o))
                                }
                            });
                            var s = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), nu(function(t) {
                                if (nb(t, r, null)) {
                                    var n = e.getAxisMotionValue(t),
                                        i = e.constraints[t],
                                        o = i.min,
                                        s = i.max;
                                    n.set(d.mix(o, s, a[t]))
                                }
                            })
                        }
                    }, t.prototype.addListeners = function() {
                        var t, e = this;
                        nA.set(this.visualElement, this);
                        var n = tq(this.visualElement.getInstance(), "pointerdown", function(t) {
                                var n = e.getProps(),
                                    r = n.drag,
                                    i = n.dragListener;
                                r && (void 0 === i || i) && e.start(t)
                            }),
                            r = function() {
                                I(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            i = this.visualElement.projection,
                            o = i.addEventListener("measure", r);
                        i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout()), r();
                        var a = tz(window, "resize", function() {
                            return e.scalePositionWithinConstraints()
                        });
                        return i.addEventListener("didUpdate", function(t) {
                                var n = t.delta,
                                    r = t.hasLayoutChanged;
                                e.isDragging && r && (nu(function(t) {
                                    var r = e.getAxisMotionValue(t);
                                    r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                                }), e.visualElement.syncRender())
                            }),
                            function() {
                                a(), n(), o()
                            }
                    }, t.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            n = t.dragDirectionLock,
                            r = t.dragPropagation,
                            i = t.dragConstraints,
                            o = t.dragElastic,
                            a = t.dragMomentum;
                        return s.__assign(s.__assign({}, t), {
                            drag: void 0 !== e && e,
                            dragDirectionLock: void 0 !== n && n,
                            dragPropagation: void 0 !== r && r,
                            dragConstraints: void 0 !== i && i,
                            dragElastic: void 0 === o ? .35 : o,
                            dragMomentum: void 0 === a || a
                        })
                    }, t
                }();

            function nb(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            var nw = {
                    pan: ei(function(t) {
                        var e = t.onPan,
                            n = t.onPanStart,
                            r = t.onPanEnd,
                            i = t.onPanSessionStart,
                            o = t.visualElement,
                            a = u.useRef(null),
                            s = u.useContext(w).transformPagePoint,
                            l = {
                                onSessionStart: i,
                                onStart: n,
                                onMove: e,
                                onEnd: function(t, e) {
                                    a.current = null, r && r(t, e)
                                }
                            };
                        u.useEffect(function() {
                            null !== a.current && a.current.updateHandlers(l)
                        }), tJ(o, "pointerdown", (e || n || r || i) && function(t) {
                            a.current = new eJ(t, l, {
                                transformPagePoint: s
                            })
                        }), t9(function() {
                            return a.current && a.current.end()
                        })
                    }),
                    drag: ei(function(t) {
                        var e = t.dragControls,
                            n = t.visualElement,
                            r = Y(function() {
                                return new nS(n)
                            });
                        u.useEffect(function() {
                            return e && e.subscribe(r)
                        }, [r, e]), u.useEffect(function() {
                            return r.addListeners()
                        }, [r])
                    })
                },
                nP = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
                nT = function(t) {
                    var e = t.treeType,
                        n = void 0 === e ? "" : e,
                        r = t.build,
                        i = t.getBaseTarget,
                        o = t.makeTargetAnimatable,
                        a = t.measureViewportBox,
                        u = t.render,
                        l = t.readValueFromInstance,
                        c = t.removeValueFromRenderState,
                        d = t.sortNodePosition,
                        p = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var v, h, m, y, x, _ = t.parent,
                            E = t.props,
                            A = t.presenceId,
                            S = t.blockInitialAnimation,
                            b = t.visualState,
                            w = t.shouldReduceMotion;
                        void 0 === e && (e = {});
                        var P = !1,
                            T = b.latestValues,
                            V = b.renderState,
                            C = (v = nP.map(function() {
                                return new ek
                            }), h = {}, m = {
                                clearAllListeners: function() {
                                    return v.forEach(function(t) {
                                        return t.clear()
                                    })
                                },
                                updatePropListeners: function(t) {
                                    nP.forEach(function(e) {
                                        var n, r = "on" + e,
                                            i = t[r];
                                        null === (n = h[e]) || void 0 === n || n.call(h), i && (h[e] = m[r](i))
                                    })
                                }
                            }, v.forEach(function(t, e) {
                                m["on" + nP[e]] = function(e) {
                                    return t.add(e)
                                }, m["notify" + nP[e]] = function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    return t.notify.apply(t, s.__spreadArray([], s.__read(e), !1))
                                }
                            }), m),
                            R = new Map,
                            L = new Map,
                            k = {},
                            D = s.__assign({}, T);

                        function M() {
                            y && P && (I(), u(y, V, E.style, W.projection))
                        }

                        function I() {
                            r(W, V, T, e, E)
                        }

                        function O() {
                            C.notifyUpdate(T)
                        }

                        function j(t, e) {
                            var n = e.onChange(function(e) {
                                    T[t] = e, E.onUpdate && g.default.update(O, !1, !0)
                                }),
                                r = e.onRenderRequest(W.scheduleRender);
                            L.set(t, function() {
                                n(), r()
                            })
                        }
                        var U = p(E);
                        for (var z in U) {
                            var Y = U[z];
                            void 0 !== T[z] && tu(Y) && Y.set(T[z], !1)
                        }
                        var X = B(E),
                            H = N(E),
                            W = s.__assign(s.__assign({
                                treeType: n,
                                current: null,
                                depth: _ ? _.depth + 1 : 0,
                                parent: _,
                                children: new Set,
                                presenceId: A,
                                shouldReduceMotion: w,
                                variantChildren: H ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: !!(null == _ ? void 0 : _.isMounted()),
                                blockInitialAnimation: S,
                                isMounted: function() {
                                    return !!y
                                },
                                mount: function(t) {
                                    P = !0, y = W.current = t, W.projection && W.projection.mount(t), H && _ && !X && (x = null == _ ? void 0 : _.addVariantChild(W)), R.forEach(function(t, e) {
                                        return j(e, t)
                                    }), null == _ || _.children.add(W), W.setProps(E)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = W.projection) || void 0 === t || t.unmount(), f.cancelSync.update(O), f.cancelSync.render(M), L.forEach(function(t) {
                                        return t()
                                    }), null == x || x(), null == _ || _.children.delete(W), C.clearAllListeners(), y = void 0, P = !1
                                },
                                addVariantChild: function(t) {
                                    var e, n = W.getClosestVariantNode();
                                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return n.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return d && n === t.treeType ? d(W.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return H ? W : null == _ ? void 0 : _.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return E.layoutId
                                },
                                getInstance: function() {
                                    return y
                                },
                                getStaticValue: function(t) {
                                    return T[t]
                                },
                                setStaticValue: function(t, e) {
                                    return T[t] = e
                                },
                                getLatestValues: function() {
                                    return T
                                },
                                setVisibility: function(t) {
                                    W.isVisible !== t && (W.isVisible = t, W.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), o(W, t, E, e)
                                },
                                measureViewportBox: function() {
                                    return a(y, E)
                                },
                                addValue: function(t, e) {
                                    W.hasValue(t) && W.removeValue(t), R.set(t, e), T[t] = e.get(), j(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    R.delete(t), null === (e = L.get(t)) || void 0 === e || e(), L.delete(t), delete T[t], c(t, V)
                                },
                                hasValue: function(t) {
                                    return R.has(t)
                                },
                                getValue: function(t, e) {
                                    var n = R.get(t);
                                    return void 0 === n && void 0 !== e && (n = eM(e), W.addValue(t, n)), n
                                },
                                forEachValue: function(t) {
                                    return R.forEach(t)
                                },
                                readValue: function(t) {
                                    var n;
                                    return null !== (n = T[t]) && void 0 !== n ? n : l(y, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    D[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (i) {
                                        var e = i(E, t);
                                        if (void 0 !== e && !tu(e)) return e
                                    }
                                    return D[t]
                                }
                            }, C), {
                                build: function() {
                                    return I(), V
                                },
                                scheduleRender: function() {
                                    g.default.render(M, !1, !0)
                                },
                                syncRender: M,
                                setProps: function(t) {
                                    (t.transformTemplate || E.transformTemplate) && W.scheduleRender(), E = t, C.updatePropListeners(t), k = function(t, e, n) {
                                        var r;
                                        for (var i in e) {
                                            var o = e[i],
                                                a = n[i];
                                            if (tu(o)) t.addValue(i, o);
                                            else if (tu(a)) t.addValue(i, eM(o));
                                            else if (a !== o) {
                                                if (t.hasValue(i)) {
                                                    var s = t.getValue(i);
                                                    s.hasAnimated || s.set(o)
                                                } else t.addValue(i, eM(null !== (r = t.getStaticValue(i)) && void 0 !== r ? r : o))
                                            }
                                        }
                                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                                        return e
                                    }(W, p(E), k)
                                },
                                getProps: function() {
                                    return E
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = E.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return E.transition
                                },
                                getTransformPagePoint: function() {
                                    return E.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null == _ ? void 0 : _.getVariantContext();
                                    if (!X) {
                                        var e = (null == _ ? void 0 : _.getVariantContext()) || {};
                                        return void 0 !== E.initial && (e.initial = E.initial), e
                                    }
                                    for (var n = {}, r = 0; r < nC; r++) {
                                        var i = nV[r],
                                            o = E[i];
                                        (F(o) || !1 === o) && (n[i] = o)
                                    }
                                    return n
                                }
                            });
                        return W
                    }
                },
                nV = s.__spreadArray(["initial"], s.__read(eG), !1),
                nC = nV.length;

            function nR(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            var nL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function nk(t, e, n) {
                void 0 === n && (n = 1), l.invariant(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
                var r = s.__read(function(t) {
                        var e = nL.exec(t);
                        if (!e) return [, ];
                        var n = s.__read(e, 3);
                        return [n[1], n[2]]
                    }(t), 2),
                    i = r[0],
                    o = r[1];
                if (i) {
                    var a = window.getComputedStyle(e).getPropertyValue(i);
                    return a ? a.trim() : nR(o) ? nk(o, e, n + 1) : o
                }
            }
            var nD = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                nM = function(t) {
                    return nD.has(t)
                },
                nI = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                nO = function(t) {
                    return t === c.number || t === c.px
                };
            (i = o || (o = {})).width = "width", i.height = "height", i.left = "left", i.right = "right", i.top = "top", i.bottom = "bottom";
            var nF = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                nj = function(t, e) {
                    return function(n, r) {
                        var i = r.transform;
                        if ("none" === i || !i) return 0;
                        var o = i.match(/^matrix3d\((.+)\)$/);
                        if (o) return nF(o[1], e);
                        var a = i.match(/^matrix\((.+)\)$/);
                        return a ? nF(a[1], t) : 0
                    }
                },
                nU = new Set(["x", "y", "z"]),
                nB = tn.filter(function(t) {
                    return !nU.has(t)
                }),
                nN = {
                    width: function(t, e) {
                        var n = t.x,
                            r = e.paddingLeft,
                            i = e.paddingRight;
                        return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === i ? "0" : i)
                    },
                    height: function(t, e) {
                        var n = t.y,
                            r = e.paddingTop,
                            i = e.paddingBottom;
                        return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === i ? "0" : i)
                    },
                    top: function(t, e) {
                        return parseFloat(e.top)
                    },
                    left: function(t, e) {
                        return parseFloat(e.left)
                    },
                    bottom: function(t, e) {
                        var n = t.y;
                        return parseFloat(e.top) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x;
                        return parseFloat(e.left) + (n.max - n.min)
                    },
                    x: nj(4, 13),
                    y: nj(5, 14)
                },
                nz = function(t, e, n) {
                    var r = e.measureViewportBox(),
                        i = getComputedStyle(e.getInstance()),
                        o = i.display,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), n.forEach(function(t) {
                        a[t] = nN[t](r, i)
                    }), e.syncRender();
                    var s = e.measureViewportBox();
                    return n.forEach(function(n) {
                        nI(e.getValue(n), a[n]), t[n] = nN[n](s, i)
                    }), t
                },
                nY = function(t, e, n, r) {
                    void 0 === n && (n = {}), void 0 === r && (r = {}), e = s.__assign({}, e), r = s.__assign({}, r);
                    var i = Object.keys(e).filter(nM),
                        o = [],
                        a = !1,
                        u = [];
                    if (i.forEach(function(i) {
                            var s, d = t.getValue(i);
                            if (t.hasValue(i)) {
                                var f = n[i],
                                    p = eF(f),
                                    v = e[i];
                                if (tM(v)) {
                                    var h = v.length,
                                        m = null === v[0] ? 1 : 0;
                                    p = eF(f = v[m]);
                                    for (var g = m; g < h; g++) s ? l.invariant(eF(v[g]) === s, "All keyframes must be of the same type") : (s = eF(v[g]), l.invariant(s === p || nO(p) && nO(s), "Keyframes must be of the same dimension as the current value"))
                                } else s = eF(v);
                                if (p !== s) {
                                    if (nO(p) && nO(s)) {
                                        var y, x = d.get();
                                        "string" == typeof x && d.set(parseFloat(x)), "string" == typeof v ? e[i] = parseFloat(v) : Array.isArray(v) && s === c.px && (e[i] = v.map(parseFloat))
                                    } else(null == p ? void 0 : p.transform) && (null == s ? void 0 : s.transform) && (0 === f || 0 === v) ? 0 === f ? d.set(s.transform(f)) : e[i] = p.transform(v) : (a || (y = [], nB.forEach(function(e) {
                                        var n = t.getValue(e);
                                        void 0 !== n && (y.push([e, n.get()]), n.set(e.startsWith("scale") ? 1 : 0))
                                    }), y.length && t.syncRender(), o = y, a = !0), u.push(i), r[i] = void 0 !== r[i] ? r[i] : e[i], nI(d, v))
                                }
                            }
                        }), !u.length) return {
                        target: e,
                        transitionEnd: r
                    };
                    var d = u.indexOf("height") >= 0 ? window.pageYOffset : null,
                        f = nz(e, t, u);
                    return o.length && o.forEach(function(e) {
                        var n = s.__read(e, 2),
                            r = n[0],
                            i = n[1];
                        t.getValue(r).set(i)
                    }), t.syncRender(), null !== d && window.scrollTo({
                        top: d
                    }), {
                        target: f,
                        transitionEnd: r
                    }
                },
                nX = function(t, e, n, r) {
                    var i, o, a = function(t, e, n) {
                        var r, i = s.__rest(e, []),
                            o = t.getInstance();
                        if (!(o instanceof Element)) return {
                            target: i,
                            transitionEnd: n
                        };
                        for (var a in n && (n = s.__assign({}, n)), t.forEachValue(function(t) {
                                var e = t.get();
                                if (nR(e)) {
                                    var n = nk(e, o);
                                    n && t.set(n)
                                }
                            }), i) {
                            var u = i[a];
                            if (nR(u)) {
                                var l = nk(u, o);
                                l && (i[a] = l, n && (null !== (r = n[a]) && void 0 !== r || (n[a] = u)))
                            }
                        }
                        return {
                            target: i,
                            transitionEnd: n
                        }
                    }(t, e, r);
                    return i = e = a.target, o = r = a.transitionEnd, Object.keys(i).some(nM) ? nY(t, i, n, o) : {
                        target: i,
                        transitionEnd: o
                    }
                },
                nH = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if (to(e)) {
                            var n = eA(e);
                            return n && n.default || 0
                        }
                        var r = window.getComputedStyle(t);
                        return (tc(e) ? r.getPropertyValue(e) : r[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: function(t, e) {
                        return nE(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, n) {
                        var r = n.transformTemplate;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var n = e.vars,
                            r = e.style;
                        delete n[t], delete r[t]
                    },
                    makeTargetAnimatable: function(t, e, n, r) {
                        var i = n.transformValues;
                        void 0 === r && (r = !0);
                        var o = e.transition,
                            a = e.transitionEnd,
                            u = s.__rest(e, ["transition", "transitionEnd"]),
                            l = ez(u, o || {}, t);
                        if (i && (a && (a = i(a)), u && (u = i(u)), l && (l = i(l))), r) {
                            eN(t, u, l);
                            var c = nX(t, u, l, a);
                            a = c.transitionEnd, u = c.target
                        }
                        return s.__assign({
                            transition: o,
                            transitionEnd: a
                        }, u)
                    },
                    scrapeMotionValuesFromProps: tL,
                    build: function(t, e, n, r, i) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), tp(e, n, r, i.transformTemplate)
                    },
                    render: tV
                },
                nW = nT(nH),
                nG = nT(s.__assign(s.__assign({}, nH), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var n;
                        return to(e) ? (null === (n = eA(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tC.has(e) ? e : tT(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: tk,
                    build: function(t, e, n, r, i) {
                        tb(e, n, r, i.transformTemplate)
                    },
                    render: tR
                })),
                nZ = function(t, e) {
                    return J(t) ? nG(e, {
                        enableHardwareAcceleration: !1
                    }) : nW(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function nK(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var n$ = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!c.px.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var n = nK(t, e.target.x),
                            r = nK(t, e.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                nq = "_$css",
                nJ = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s.__extends(e, t), e.prototype.componentDidMount = function() {
                        var t = this,
                            e = this.props,
                            n = e.visualElement,
                            r = e.layoutGroup,
                            i = e.switchLayoutGroup,
                            o = e.layoutId,
                            a = n.projection;
                        tt(nQ), a && ((null == r ? void 0 : r.group) && r.group.add(a), (null == i ? void 0 : i.register) && o && i.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", function() {
                            t.safeToRemove()
                        }), a.setOptions(s.__assign(s.__assign({}, a.options), {
                            onExitComplete: function() {
                                return t.safeToRemove()
                            }
                        }))), X.hasEverUpdated = !0
                    }, e.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            n = this.props,
                            r = n.layoutDependency,
                            i = n.visualElement,
                            o = n.drag,
                            a = n.isPresent,
                            s = i.projection;
                        return s && (s.isPresent = a, o || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent === a || (a ? s.promote() : s.relegate() || g.default.postRender(function() {
                            var t;
                            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null
                    }, e.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, e.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.layoutGroup,
                            r = t.switchLayoutGroup,
                            i = e.projection;
                        i && (i.scheduleCheckAfterUnmount(), (null == n ? void 0 : n.group) && n.group.remove(i), (null == r ? void 0 : r.deregister) && r.deregister(i))
                    }, e.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null == t || t()
                    }, e.prototype.render = function() {
                        return null
                    }, e
                }(m.default.Component),
                nQ = {
                    borderRadius: s.__assign(s.__assign({}, n$), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: n$,
                    borderTopRightRadius: n$,
                    borderBottomLeftRadius: n$,
                    borderBottomRightRadius: n$,
                    boxShadow: {
                        correct: function(t, e) {
                            var n = e.treeScale,
                                r = e.projectionDelta,
                                i = t,
                                o = t.includes("var("),
                                a = [];
                            o && (t = t.replace(nL, function(t) {
                                return a.push(t), nq
                            }));
                            var s = c.complex.parse(t);
                            if (s.length > 5) return i;
                            var u = c.complex.createTransformer(t),
                                l = "number" != typeof s[0] ? 1 : 0,
                                f = r.x.scale * n.x,
                                p = r.y.scale * n.y;
                            s[0 + l] /= f, s[1 + l] /= p;
                            var v = d.mix(f, p, .5);
                            "number" == typeof s[2 + l] && (s[2 + l] /= v), "number" == typeof s[3 + l] && (s[3 + l] /= v);
                            var h = u(s);
                            if (o) {
                                var m = 0;
                                h = h.replace(nq, function() {
                                    var t = a[m];
                                    return m++, t
                                })
                            }
                            return h
                        }
                    }
                },
                n0 = {
                    measureLayout: function(t) {
                        var e = s.__read(el(), 2),
                            n = e[0],
                            r = e[1],
                            i = u.useContext(W);
                        return m.default.createElement(nJ, s.__assign({}, t, {
                            layoutGroup: i,
                            switchLayoutGroup: u.useContext(G),
                            isPresent: n,
                            safeToRemove: r
                        }))
                    }
                };

            function n1(t, e, n) {
                void 0 === n && (n = {});
                var r = tu(t) ? t : eM(t);
                return eC("", r, e, n), {
                    stop: function() {
                        return r.stop()
                    },
                    isAnimating: function() {
                        return r.isAnimating()
                    }
                }
            }
            var n5 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                n2 = n5.length,
                n3 = function(t) {
                    return "string" == typeof t ? parseFloat(t) : t
                },
                n4 = function(t) {
                    return "number" == typeof t || c.px.test(t)
                };

            function n9(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            var n8 = n7(0, .5, d.circOut),
                n6 = n7(.5, .95, d.linear);

            function n7(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n(d.progress(t, e, r))
                }
            }

            function rt(t, e) {
                t.min = e.min, t.max = e.max
            }

            function re(t, e) {
                rt(t.x, e.x), rt(t.y, e.y)
            }

            function rn(t, e, n, r, i) {
                return t -= e, t = r + 1 / n * (t - r), void 0 !== i && (t = r + 1 / i * (t - r)), t
            }

            function rr(t, e, n, r, i) {
                var o = s.__read(n, 3),
                    a = o[0],
                    u = o[1],
                    l = o[2];
                ! function(t, e, n, r, i, o, a) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === o && (o = t), void 0 === a && (a = t), c.percent.test(e) && (e = parseFloat(e), e = d.mix(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
                        var s = d.mix(o.min, o.max, r);
                        t === o && (s -= e), t.min = rn(t.min, e, n, s, i), t.max = rn(t.max, e, n, s, i)
                    }
                }(t, e[a], e[u], e[l], e.scale, r, i)
            }
            var ri = ["x", "scaleX", "originX"],
                ro = ["y", "scaleY", "originY"];

            function ra(t, e, n, r) {
                rr(t.x, e, ri, null == n ? void 0 : n.x, null == r ? void 0 : r.x), rr(t.y, e, ro, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function rs(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function ru(t) {
                return rs(t.x) && rs(t.y)
            }

            function rl(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var rc = function() {
                function t() {
                    this.members = []
                }
                return t.prototype.add = function(t) {
                    eR(this.members, t), t.scheduleRender()
                }, t.prototype.remove = function(t) {
                    if (eL(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        var e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }, t.prototype.relegate = function(t) {
                    var e, n = this.members.findIndex(function(e) {
                        return t === e
                    });
                    if (0 === n) return !1;
                    for (var r = n; r >= 0; r--) {
                        var i = this.members[r];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }, t.prototype.promote = function(t, e) {
                    var n, r = this.lead;
                    t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
                }, t.prototype.exitAnimationComplete = function() {
                    this.members.forEach(function(t) {
                        var e, n, r, i, o;
                        null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (o = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                    })
                }, t.prototype.scheduleRender = function() {
                    this.members.forEach(function(t) {
                        t.instance && t.scheduleRender(!1)
                    })
                }, t.prototype.removeLeadSnapshot = function() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }, t
            }();

            function rd(t, e, n) {
                var r = t.x.translate / e.x,
                    i = t.y.translate / e.y,
                    o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
                if (o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "), n) {
                    var a = n.rotate,
                        s = n.rotateX,
                        u = n.rotateY;
                    a && (o += "rotate(".concat(a, "deg) ")), s && (o += "rotateX(".concat(s, "deg) ")), u && (o += "rotateY(".concat(u, "deg) "))
                }
                var l = t.x.scale * e.x,
                    c = t.y.scale * e.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (o += "scale(".concat(l, ", ").concat(c, ")")) ? "none" : o
            }
            var rf = function(t, e) {
                    return t.depth - e.depth
                },
                rp = function() {
                    function t() {
                        this.children = [], this.isDirty = !1
                    }
                    return t.prototype.add = function(t) {
                        eR(this.children, t), this.isDirty = !0
                    }, t.prototype.remove = function(t) {
                        eL(this.children, t), this.isDirty = !0
                    }, t.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort(rf), this.isDirty = !1, this.children.forEach(t)
                    }, t
                }();

            function rv(t) {
                var e = t.attachResizeListener,
                    n = t.defaultParent,
                    r = t.measureScroll,
                    i = t.checkIsScrollRoot,
                    o = t.resetTransform;
                return function() {
                    function t(t, e, r) {
                        var i = this;
                        void 0 === e && (e = {}), void 0 === r && (r = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            i.isUpdating && (i.isUpdating = !1, i.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            i.nodes.forEach(rE), i.nodes.forEach(rA)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = r ? r.root || r : this, this.path = r ? s.__spreadArray(s.__spreadArray([], s.__read(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var o = 0; o < this.path.length; o++) this.path[o].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rp)
                    }
                    return t.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ek), this.eventHandlers.get(t).add(e)
                    }, t.prototype.notifyListeners = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = this.eventHandlers.get(t);
                        null == r || r.notify.apply(r, s.__spreadArray([], s.__read(e), !1))
                    }, t.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, t.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, t.prototype.mount = function(t, n) {
                        var r = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var i = this.options,
                                o = i.layoutId,
                                a = i.layout,
                                u = i.visualElement;
                            if (u && !u.getInstance() && u.mount(t), this.root.nodes.add(this), null === (l = this.parent) || void 0 === l || l.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (a || o) && (this.isLayoutDirty = !0), e) {
                                var l, c, d = function() {
                                    return r.root.updateBlockedByResize = !1
                                };
                                e(t, function() {
                                    r.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(d, 250), X.hasAnimatedSinceResize && (X.hasAnimatedSinceResize = !1, r.nodes.forEach(r_))
                                })
                            }
                            o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && u && (o || a) && this.addEventListener("didUpdate", function(t) {
                                var e, n, i, o, a, l = t.delta,
                                    c = t.hasLayoutChanged,
                                    d = t.hasRelativeTargetChanged,
                                    f = t.layout;
                                if (r.isTreeAnimationBlocked()) {
                                    r.target = void 0, r.relativeTarget = void 0;
                                    return
                                }
                                var p = null !== (n = null !== (e = r.options.transition) && void 0 !== e ? e : u.getDefaultTransition()) && void 0 !== n ? n : rV,
                                    v = u.getProps(),
                                    h = v.onLayoutAnimationStart,
                                    m = v.onLayoutAnimationComplete,
                                    g = !r.targetLayout || !rl(r.targetLayout, f) || d,
                                    y = !c && d;
                                if ((null === (i = r.resumeFrom) || void 0 === i ? void 0 : i.instance) || y || c && (g || !r.currentAnimation)) {
                                    r.resumeFrom && (r.resumingFrom = r.resumeFrom, r.resumingFrom.resumingFrom = void 0), r.setAnimationOrigin(l, y);
                                    var x = s.__assign(s.__assign({}, eV(p, "layout")), {
                                        onPlay: h,
                                        onComplete: m
                                    });
                                    u.shouldReduceMotion && (x.delay = 0, x.type = !1), r.startAnimation(x)
                                } else c || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (a = (o = r.options).onExitComplete) || void 0 === a || a.call(o));
                                r.targetLayout = f
                            })
                        }
                    }, t.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, f.cancelSync.preRender(this.updateProjection)
                    }, t.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, t.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, t.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, t.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, t.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(rS))
                    }, t.prototype.willUpdate = function(t) {
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) {
                            null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var e, n, r, i = 0; i < this.path.length; i++) {
                                var o = this.path[i];
                                o.shouldResetTransform = !0, o.updateScroll()
                            }
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout;
                            if (void 0 !== s || u) {
                                var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, t.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ry);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(rC), this.potentialNodes.clear()), this.nodes.forEach(rx), this.nodes.forEach(rh), this.nodes.forEach(rm), this.clearAllSnapshots(), f.flushSync.update(), f.flushSync.preRender(), f.flushSync.render())
                    }, t.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(rg), this.sharedNodes.forEach(rb)
                    }, t.prototype.scheduleUpdateProjection = function() {
                        g.default.preRender(this.updateProjection, !1, !0)
                    }, t.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        g.default.postRender(function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        })
                    }, t.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            rL(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, t.prototype.updateLayout = function() {
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var t, e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                            var n = this.measure();
                            rL(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = ns(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
                        }
                    }, t.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = r(this.instance))
                    }, t.prototype.resetTransform = function() {
                        if (o) {
                            var t, e = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !ru(this.projectionDelta),
                                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                i = null == r ? void 0 : r(this.latestValues, ""),
                                a = i !== this.prevTransformTemplateValue;
                            e && (n || nf(this.latestValues) || a) && (o(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, t.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return ns();
                        var e = t.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (nm(e.x, n.x), nm(e.y, n.y)), e
                    }, t.prototype.removeElementScroll = function(t) {
                        var e = ns();
                        re(e, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                i = r.scroll,
                                o = r.options,
                                a = r.isScrollRoot;
                            if (r !== this.root && i && o.layoutScroll) {
                                if (a) {
                                    re(e, t);
                                    var s = this.root.scroll;
                                    s && (nm(e.x, -s.x), nm(e.y, -s.y))
                                }
                                nm(e.x, i.x), nm(e.y, i.y)
                            }
                        }
                        return e
                    }, t.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = ns();
                        re(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var i = this.path[r];
                            !e && i.options.layoutScroll && i.scroll && i !== i.root && n_(n, {
                                x: -i.scroll.x,
                                y: -i.scroll.y
                            }), nf(i.latestValues) && n_(n, i.latestValues)
                        }
                        return nf(this.latestValues) && n_(n, this.latestValues), n
                    }, t.prototype.removeTransform = function(t) {
                        var e, n = ns();
                        re(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var i = this.path[r];
                            if (i.instance && nf(i.latestValues)) {
                                nd(i.latestValues) && i.updateSnapshot();
                                var o = ns();
                                re(o, i.measure()), ra(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layout, o)
                            }
                        }
                        return nf(this.latestValues) && ra(n, this.latestValues), n
                    }, t.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, t.prototype.setOptions = function(t) {
                        var e;
                        this.options = s.__assign(s.__assign(s.__assign({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, t.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, t.prototype.resolveTargetDelta = function() {
                        var t, e, n, r, i = this.options,
                            o = i.layout,
                            a = i.layoutId;
                        this.layout && (o || a) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ns(), this.relativeTargetOrigin = ns(), e7(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), re(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = ns(), this.targetWithTransforms = ns()), this.relativeTarget && this.relativeTargetOrigin && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.target)) ? (t = this.target, e = this.relativeTarget, n = this.relativeParent.target, e8(t.x, e.x, n.x), e8(t.y, e.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.actual) : re(this.target, this.layout.actual), nh(this.target, this.targetDelta)) : re(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && !!this.relativeParent.resumingFrom == !!this.resumingFrom && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ns(), this.relativeTargetOrigin = ns(), e7(this.relativeTargetOrigin, this.target, this.relativeParent.target), re(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, t.prototype.getClosestProjectingParent = function() {
                        if (!(!this.parent || nf(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, t.prototype.calcProjection = function() {
                        var t, e = this.options,
                            n = e.layout,
                            r = e.layoutId;
                        if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var i = this.getLead();
                            re(this.layoutCorrected, this.layout.actual),
                                function(t, e, n, r) {
                                    void 0 === r && (r = !1);
                                    var i, o, a, s, u = n.length;
                                    if (u) {
                                        e.x = e.y = 1;
                                        for (var l = 0; l < u; l++) s = (a = n[l]).projectionDelta, (null === (o = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && n_(t, {
                                            x: -a.scroll.x,
                                            y: -a.scroll.y
                                        }), s && (e.x *= s.x.scale, e.y *= s.y.scale, nh(t, s)), r && nf(a.latestValues) && n_(t, a.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, !!this.resumingFrom || this !== i);
                            var o = i.target;
                            if (o) {
                                this.projectionDelta || (this.projectionDelta = no(), this.projectionDeltaWithTransform = no());
                                var a = this.treeScale.x,
                                    s = this.treeScale.y,
                                    u = this.projectionTransform;
                                e9(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.projectionTransform = rd(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== s) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o))
                            }
                        }
                    }, t.prototype.hide = function() {
                        this.isVisible = !1
                    }, t.prototype.show = function() {
                        this.isVisible = !0
                    }, t.prototype.scheduleRender = function(t) {
                        var e, n, r;
                        void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, t.prototype.setAnimationOrigin = function(t, e) {
                        var n, r = this;
                        void 0 === e && (e = !1);
                        var i = this.snapshot,
                            o = (null == i ? void 0 : i.latestValues) || {},
                            a = s.__assign({}, this.latestValues),
                            u = no();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var l = ns(),
                            f = null == i ? void 0 : i.isShared,
                            p = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0),
                            v = !!(f && !p && !0 === this.options.crossfade && !this.path.some(rT));
                        this.animationProgress = 0, this.mixTargetDelta = function(e) {
                            var n, i, s, h = e / 1e3;
                            rw(u.x, t.x, h), rw(u.y, t.y, h), r.setTargetDelta(u), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (s = r.relativeParent) || void 0 === s ? void 0 : s.layout) && (e7(l, r.layout.actual, r.relativeParent.layout.actual), n = r.relativeTarget, i = r.relativeTargetOrigin, rP(n.x, i.x, l.x, h), rP(n.y, i.y, l.y, h)), f && (r.animationValues = a, function(t, e, n, r, i, o) {
                                var a, s, u, l;
                                i ? (t.opacity = d.mix(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, n8(r)), t.opacityExit = d.mix(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, n6(r))) : o && (t.opacity = d.mix(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                                for (var f = 0; f < n2; f++) {
                                    var p = "border".concat(n5[f], "Radius"),
                                        v = n9(e, p),
                                        h = n9(n, p);
                                    (void 0 !== v || void 0 !== h) && (v || (v = 0), h || (h = 0), 0 === v || 0 === h || n4(v) === n4(h) ? (t[p] = Math.max(d.mix(n3(v), n3(h), r), 0), (c.percent.test(h) || c.percent.test(v)) && (t[p] += "%")) : t[p] = h)
                                }(e.rotate || n.rotate) && (t.rotate = d.mix(e.rotate || 0, n.rotate || 0, r))
                            }(a, o, r.latestValues, h, v, p)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = h
                        }, this.mixTargetDelta(0)
                    }, t.prototype.startAnimation = function(t) {
                        var e, n, r = this;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (f.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = g.default.update(function() {
                            X.hasAnimatedSinceResize = !0, r.currentAnimation = n1(0, 1e3, s.__assign(s.__assign({}, t), {
                                onUpdate: function(e) {
                                    var n;
                                    r.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), r.completeAnimation()
                                }
                            })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
                        })
                    }, t.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, t.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, t.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            n = t.target,
                            r = t.layout,
                            i = t.latestValues;
                        e && n && r && (re(e, n), n_(e, i), e9(this.projectionDeltaWithTransform, this.layoutCorrected, e, i))
                    }, t.prototype.registerSharedNode = function(t, e) {
                        var n, r, i;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new rc), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (i = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, e)
                        })
                    }, t.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, t.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, t.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, t.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, t.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            n = e.needsReset,
                            r = e.transition,
                            i = e.preserveFollowOpacity,
                            o = this.getStack();
                        o && o.promote(this, i), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, t.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, t.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, n = {}, r = 0; r < te.length; r++) {
                                var i = "rotate" + te[r];
                                t.getStaticValue(i) && (e = !0, n[i] = t.getStaticValue(i), t.setStaticValue(i, 0))
                            }
                            if (e) {
                                for (var i in null == t || t.syncRender(), n) t.setStaticValue(i, n[i]);
                                t.scheduleRender()
                            }
                        }
                    }, t.prototype.getProjectionStyles = function(t) {
                        void 0 === t && (t = {});
                        var e, n, r, i, o, a, s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = tO(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
                        var l = this.getLead();
                        if (!this.projectionDelta || !this.layout || !l.target) {
                            var c = {};
                            return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = tO(t.pointerEvents) || ""), this.hasProjected && !nf(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
                        }
                        var d = l.animationValues || l.latestValues;
                        this.applyTransformsToTarget(), s.transform = rd(this.projectionDeltaWithTransform, this.treeScale, d), u && (s.transform = u(d, s.transform));
                        var f = this.projectionDelta,
                            p = f.x,
                            v = f.y;
                        for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (i = null !== (r = d.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = l === this ? null !== (o = d.opacity) && void 0 !== o ? o : "" : null !== (a = d.opacityExit) && void 0 !== a ? a : 0, Q)
                            if (void 0 !== d[h]) {
                                var m = Q[h],
                                    g = m.correct,
                                    y = m.applyTo,
                                    x = g(d[h], l);
                                if (y)
                                    for (var _ = y.length, E = 0; E < _; E++) s[y[E]] = x;
                                else s[h] = x
                            }
                        return this.options.layoutId && (s.pointerEvents = l === this ? tO(t.pointerEvents) || "" : "none"), s
                    }, t.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, t.prototype.resetTree = function() {
                        this.root.nodes.forEach(function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ry), this.root.sharedNodes.clear()
                    }, t
                }()
            }

            function rh(t) {
                t.updateLayout()
            }

            function rm(t) {
                var e, n, r, i, o = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
                if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
                    var a = t.layout,
                        s = a.actual,
                        u = a.measured;
                    "size" === t.options.animationType ? nu(function(t) {
                        var e = o.isShared ? o.measured[t] : o.layout[t],
                            n = e2(e);
                        e.min = s[t].min, e.max = e.min + n
                    }) : "position" === t.options.animationType && nu(function(t) {
                        var e = o.isShared ? o.measured[t] : o.layout[t],
                            n = e2(s[t]);
                        e.max = e.min + n
                    });
                    var l = no();
                    e9(l, s, o.layout);
                    var c = no();
                    o.isShared ? e9(c, t.applyTransform(u, !0), o.measured) : e9(c, s, o.layout);
                    var d = !ru(l),
                        f = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var p = t.relativeParent,
                            v = p.snapshot,
                            h = p.layout;
                        if (v && h) {
                            var m = ns();
                            e7(m, o.layout, v.layout);
                            var g = ns();
                            e7(g, s, h.actual), rl(m, g) || (f = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: s,
                        snapshot: o,
                        delta: c,
                        layoutDelta: l,
                        hasLayoutChanged: d,
                        hasRelativeTargetChanged: f
                    })
                } else t.isLead() && (null === (i = (r = t.options).onExitComplete) || void 0 === i || i.call(r));
                t.options.transition = void 0
            }

            function rg(t) {
                t.clearSnapshot()
            }

            function ry(t) {
                t.clearMeasurements()
            }

            function rx(t) {
                var e = t.options.visualElement;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function r_(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function rE(t) {
                t.resolveTargetDelta()
            }

            function rA(t) {
                t.calcProjection()
            }

            function rS(t) {
                t.resetRotation()
            }

            function rb(t) {
                t.removeLeadSnapshot()
            }

            function rw(t, e, n) {
                t.translate = d.mix(e.translate, 0, n), t.scale = d.mix(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function rP(t, e, n, r) {
                t.min = d.mix(e.min, n.min, r), t.max = d.mix(e.max, n.max, r)
            }

            function rT(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var rV = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function rC(t, e) {
                for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                    if (t.path[r].instance) {
                        n = t.path[r];
                        break
                    }
                var i = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                i && t.mount(i, !0)
            }

            function rR(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function rL(t) {
                rR(t.x), rR(t.y)
            }
            var rk = rv({
                    attachResizeListener: function(t, e) {
                        return tz(t, "resize", e)
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    },
                    checkIsScrollRoot: function() {
                        return !0
                    }
                }),
                rD = {
                    current: void 0
                },
                rM = rv({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!rD.current) {
                            var t = new rk(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), rD.current = t
                        }
                        return rD.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null != e ? e : "none"
                    },
                    checkIsScrollRoot: function(t) {
                        return "fixed" === window.getComputedStyle(t).position
                    }
                }),
                rI = s.__assign(s.__assign(s.__assign(s.__assign({}, eq), eo), nw), n0),
                rO = $(function(t, e) {
                    return tN(t, e, rI, nZ, rM)
                }),
                rF = $(tN);

            function rj() {
                var t = u.useRef(!1);
                return R(function() {
                    return t.current = !0,
                        function() {
                            t.current = !1
                        }
                }, []), t
            }

            function rU() {
                var t = rj(),
                    e = s.__read(u.useState(0), 2),
                    n = e[0],
                    r = e[1],
                    i = u.useCallback(function() {
                        t.current && r(n + 1)
                    }, [n]);
                return [u.useCallback(function() {
                    return g.default.postRender(i)
                }, [i]), n]
            }
            var rB = function(t) {
                var e = t.children,
                    n = t.initial,
                    r = t.isPresent,
                    i = t.onExitComplete,
                    o = t.custom,
                    a = t.presenceAffectsLayout,
                    l = Y(rN),
                    c = eu(),
                    d = u.useMemo(function() {
                        return {
                            id: c,
                            initial: n,
                            isPresent: r,
                            custom: o,
                            onExitComplete: function(t) {
                                var e, n;
                                l.set(t, !0);
                                try {
                                    for (var r = s.__values(l.values()), o = r.next(); !o.done; o = r.next())
                                        if (!o.value) return
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                null == i || i()
                            },
                            register: function(t) {
                                return l.set(t, !1),
                                    function() {
                                        return l.delete(t)
                                    }
                            }
                        }
                    }, a ? void 0 : [r]);
                return u.useMemo(function() {
                    l.forEach(function(t, e) {
                        return l.set(e, !1)
                    })
                }, [r]), h.useEffect(function() {
                    r || l.size || null == i || i()
                }, [r]), h.createElement(V.Provider, {
                    value: d
                }, e)
            };

            function rN() {
                return new Map
            }
            var rz = function(t) {
                    return t.key || ""
                },
                rY = u.createContext(null),
                rX = function(t) {
                    return !t.isLayoutDirty && t.willUpdate(!1)
                },
                rH = function(t) {
                    return !0 === t
                },
                rW = function(t) {
                    var e, n, r, i, o, a, l = t.children,
                        c = t.id,
                        d = t.inheritId,
                        f = t.inherit,
                        p = void 0 === f || f;
                    void 0 !== d && (p = d);
                    var v = u.useContext(W),
                        m = u.useContext(rY),
                        g = s.__read(rU(), 2),
                        y = g[0],
                        x = g[1],
                        _ = u.useRef(null),
                        E = null !== (o = v.id) && void 0 !== o ? o : m;
                    null === _.current && ((rH(!0 === (i = p)) || "id" === i) && E && (c = c ? E + "-" + c : E), _.current = {
                        id: c,
                        group: rH(p) && null !== (a = null == v ? void 0 : v.group) && void 0 !== a ? a : (e = new Set, n = new WeakMap, {
                            add: function(t) {
                                e.add(t), n.set(t, t.addEventListener("willUpdate", r))
                            },
                            remove: function(t) {
                                var i;
                                e.delete(t), null === (i = n.get(t)) || void 0 === i || i(), n.delete(t), r()
                            },
                            dirty: r = function() {
                                return e.forEach(rX)
                            }
                        })
                    });
                    var A = u.useMemo(function() {
                        return s.__assign(s.__assign({}, _.current), {
                            forceRender: y
                        })
                    }, [x]);
                    return h.createElement(W.Provider, {
                        value: A
                    }, l)
                },
                rG = 0;

            function rZ(t) {
                return "function" == typeof t
            }
            var rK = u.createContext(null),
                r$ = u.forwardRef(function(t, e) {
                    var n = t.children,
                        r = t.as,
                        i = void 0 === r ? "ul" : r,
                        o = t.axis,
                        a = void 0 === o ? "y" : o,
                        c = t.onReorder,
                        f = t.values,
                        p = s.__rest(t, ["children", "as", "axis", "onReorder", "values"]),
                        v = Y(function() {
                            return rO(i)
                        }),
                        m = [],
                        g = u.useRef(!1);
                    return l.invariant(!!f, "Reorder.Group must be provided a values prop"), u.useEffect(function() {
                        g.current = !1
                    }), h.createElement(v, s.__assign({}, p, {
                        ref: e
                    }), h.createElement(rK.Provider, {
                        value: {
                            axis: a,
                            registerItem: function(t, e) {
                                e && -1 === m.findIndex(function(e) {
                                    return t === e.value
                                }) && (m.push({
                                    value: t,
                                    layout: e[a]
                                }), m.sort(rJ))
                            },
                            updateOrder: function(t, e, n) {
                                if (!g.current) {
                                    var r = function(t, e, n, r) {
                                        if (!r) return t;
                                        var i = t.findIndex(function(t) {
                                            return t.value === e
                                        });
                                        if (-1 === i) return t;
                                        var o = r > 0 ? 1 : -1,
                                            a = t[i + o];
                                        if (!a) return t;
                                        var u = t[i],
                                            l = a.layout,
                                            c = d.mix(l.min, l.max, .5);
                                        return 1 === o && u.layout.max + n > c || -1 === o && u.layout.min + n < c ? function(t, e, n) {
                                            var r = s.__read(t).slice(0),
                                                i = e < 0 ? r.length + e : e;
                                            if (i >= 0 && i < r.length) {
                                                var o = n < 0 ? r.length + n : n,
                                                    a = s.__read(r.splice(e, 1), 1)[0];
                                                r.splice(o, 0, a)
                                            }
                                            return r
                                        }(t, i, i + o) : t
                                    }(m, t, e, n);
                                    m !== r && (g.current = !0, c(r.map(rq).filter(function(t) {
                                        return -1 !== f.indexOf(t)
                                    })))
                                }
                            }
                        }
                    }, n))
                });

            function rq(t) {
                return t.value
            }

            function rJ(t, e) {
                return t.layout.min - e.layout.min
            }

            function rQ(t) {
                var e = Y(function() {
                    return eM(t)
                });
                if (u.useContext(w).isStatic) {
                    var n = s.__read(u.useState(t), 2)[1];
                    u.useEffect(function() {
                        return e.onChange(n)
                    }, [])
                }
                return e
            }

            function r0() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = !Array.isArray(e[0]),
                    i = r ? 0 : -1,
                    o = e[0 + i],
                    a = e[1 + i],
                    u = e[2 + i],
                    l = e[3 + i],
                    c = d.interpolate(a, u, s.__assign({
                        mixer: "object" == typeof(t = u[0]) && t.mix ? t.mix : void 0
                    }, l));
                return r ? c(o) : c
            }

            function r1(t, e) {
                var n, r = rQ(e()),
                    i = function() {
                        return r.set(e())
                    };
                return i(), n = function() {
                    return g.default.update(i, !1, !0)
                }, R(function() {
                    var e = t.map(function(t) {
                        return t.onChange(n)
                    });
                    return function() {
                        return e.forEach(function(t) {
                            return t()
                        })
                    }
                }), r
            }

            function r5(t, e, n, r) {
                var i = "function" == typeof e ? e : r0(e, n, r);
                return Array.isArray(t) ? r2(t, i) : r2([t], function(t) {
                    return i(s.__read(t, 1)[0])
                })
            }

            function r2(t, e) {
                var n = Y(function() {
                    return []
                });
                return r1(t, function() {
                    n.length = 0;
                    for (var r = t.length, i = 0; i < r; i++) n[i] = t[i].get();
                    return e(n)
                })
            }

            function r3(t, e) {
                return void 0 === e && (e = 0), tu(t) ? t : rQ(e)
            }
            var r4 = u.forwardRef(function(t, e) {
                    var n = t.children,
                        r = t.style,
                        i = t.value,
                        o = t.as,
                        a = void 0 === o ? "li" : o,
                        c = t.onDrag,
                        d = t.layout,
                        f = s.__rest(t, ["children", "style", "value", "as", "onDrag", "layout"]),
                        p = Y(function() {
                            return rO(a)
                        }),
                        v = u.useContext(rK),
                        m = {
                            x: r3(null == r ? void 0 : r.x),
                            y: r3(null == r ? void 0 : r.y)
                        },
                        g = r5([m.x, m.y], function(t) {
                            var e = s.__read(t, 2),
                                n = e[0],
                                r = e[1];
                            return n || r ? 1 : "unset"
                        }),
                        y = u.useRef(null);
                    l.invariant(!!v, "Reorder.Item must be a child of Reorder.Group");
                    var x = v.axis,
                        _ = v.registerItem,
                        E = v.updateOrder;
                    return u.useEffect(function() {
                        _(i, y.current)
                    }, [v]), h.createElement(p, s.__assign({
                        drag: x
                    }, f, {
                        dragSnapToOrigin: !0,
                        style: s.__assign(s.__assign({}, r), {
                            x: m.x,
                            y: m.y,
                            zIndex: g
                        }),
                        layout: void 0 === d || d,
                        onDrag: function(t, e) {
                            var n = e.velocity;
                            n[x] && E(i, m[x].get(), n[x]), null == c || c(t, e)
                        },
                        onLayoutMeasure: function(t) {
                            y.current = t
                        },
                        ref: e
                    }), n)
                }),
                r9 = s.__assign(s.__assign({
                    renderer: nZ
                }, eq), eo),
                r8 = s.__assign(s.__assign(s.__assign(s.__assign({}, r9), nw), n0), {
                    projectionNodeConstructor: rM
                }),
                r6 = function() {
                    return {
                        scrollX: eM(0),
                        scrollY: eM(0),
                        scrollXProgress: eM(0),
                        scrollYProgress: eM(0)
                    }
                };

            function r7(t) {
                void 0 === t && (t = {});
                var e = t.container,
                    n = t.target,
                    r = s.__rest(t, ["container", "target"]),
                    i = Y(r6);
                return R(function() {
                    return p.scroll(function(t) {
                        var e = t.x,
                            n = t.y;
                        i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(n.current), i.scrollYProgress.set(n.progress)
                    }, s.__assign(s.__assign({}, r), {
                        container: (null == e ? void 0 : e.current) || void 0,
                        target: (null == n ? void 0 : n.current) || void 0
                    }))
                }, []), i
            }
            var it = "undefined" != typeof performance ? function() {
                return performance.now()
            } : function() {
                return Date.now()
            };

            function ie(t) {
                var e = Y(it),
                    n = u.useContext(w).isStatic;
                u.useEffect(function() {
                    if (!n) {
                        var r = function(n) {
                            t(n.timestamp - e)
                        };
                        return g.default.update(r, !0),
                            function() {
                                return f.cancelSync.update(r)
                            }
                    }
                }, [t])
            }

            function ir() {
                var t = !1,
                    e = [],
                    n = new Set,
                    r = {
                        subscribe: function(t) {
                            return n.add(t),
                                function() {
                                    n.delete(t)
                                }
                        },
                        start: function(r, i) {
                            if (!t) return new Promise(function(t) {
                                e.push({
                                    animation: [r, i],
                                    resolve: t
                                })
                            });
                            var o = [];
                            return n.forEach(function(t) {
                                o.push(eY(t, r, {
                                    transitionOverride: i
                                }))
                            }), Promise.all(o)
                        },
                        set: function(e) {
                            return l.invariant(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach(function(t) {
                                Array.isArray(e) ? eB(t, e) : "string" == typeof e ? eB(t, [e]) : eU(t, e)
                            })
                        },
                        stop: function() {
                            n.forEach(function(t) {
                                ! function(t) {
                                    t.forEachValue(function(t) {
                                        return t.stop()
                                    })
                                }(t)
                            })
                        },
                        mount: function() {
                            return t = !0, e.forEach(function(t) {
                                    var e = t.animation,
                                        n = t.resolve;
                                    r.start.apply(r, s.__spreadArray([], s.__read(e), !1)).then(n)
                                }),
                                function() {
                                    t = !1, r.stop()
                                }
                        }
                    };
                return r
            }

            function ii() {
                var t = Y(ir);
                return u.useEffect(t.mount, []), t
            }
            var io = function() {
                    function t() {
                        this.componentControls = new Set
                    }
                    return t.prototype.subscribe = function(t) {
                        var e = this;
                        return this.componentControls.add(t),
                            function() {
                                return e.componentControls.delete(t)
                            }
                    }, t.prototype.start = function(t, e) {
                        this.componentControls.forEach(function(n) {
                            n.start(t.nativeEvent || t, e)
                        })
                    }, t
                }(),
                ia = function() {
                    return new io
                };

            function is(t) {
                rD.current && (rD.current.isUpdating = !1, rD.current.blockUpdate(), null == t || t())
            }
            var iu = function() {
                    return {}
                },
                il = nT({
                    build: function() {},
                    measureViewportBox: ns,
                    resetTransform: function() {},
                    restoreTransform: function() {},
                    removeValueFromRenderState: function() {},
                    render: function() {},
                    scrapeMotionValuesFromProps: iu,
                    readValueFromInstance: function(t, e, n) {
                        return n.initialState[e] || 0
                    },
                    makeTargetAnimatable: function(t, e) {
                        var n = e.transition,
                            r = e.transitionEnd,
                            i = s.__rest(e, ["transition", "transitionEnd"]),
                            o = ez(i, n || {}, t);
                        return eN(t, i, o), s.__assign({
                            transition: n,
                            transitionEnd: r
                        }, i)
                    }
                }),
                ic = tj({
                    scrapeMotionValuesFromProps: iu,
                    createRenderState: iu
                }),
                id = function(t) {
                    return t > .001 ? 1 / t : 1e5
                },
                ip = !1;
            e.AnimatePresence = function(t) {
                var e, n = t.children,
                    r = t.custom,
                    i = t.initial,
                    o = void 0 === i || i,
                    a = t.onExitComplete,
                    l = t.exitBeforeEnter,
                    c = t.presenceAffectsLayout,
                    d = void 0 === c || c,
                    f = s.__read(rU(), 1)[0],
                    p = u.useContext(W).forceRender;
                p && (f = p);
                var v = rj(),
                    m = (e = [], u.Children.forEach(n, function(t) {
                        u.isValidElement(t) && e.push(t)
                    }), e),
                    g = m,
                    x = new Set,
                    _ = u.useRef(g),
                    E = u.useRef(new Map).current,
                    A = u.useRef(!0);
                if (R(function() {
                        A.current = !1,
                            function(t, e) {
                                t.forEach(function(t) {
                                    var n = rz(t);
                                    e.set(n, t)
                                })
                            }(m, E), _.current = g
                    }), t9(function() {
                        A.current = !0, E.clear(), x.clear()
                    }), A.current) return h.createElement(h.Fragment, null, g.map(function(t) {
                    return h.createElement(rB, {
                        key: rz(t),
                        isPresent: !0,
                        initial: !!o && void 0,
                        presenceAffectsLayout: d
                    }, t)
                }));
                g = s.__spreadArray([], s.__read(g), !1);
                for (var S = _.current.map(rz), b = m.map(rz), w = S.length, P = 0; P < w; P++) {
                    var T = S[P]; - 1 === b.indexOf(T) && x.add(T)
                }
                return l && x.size && (g = []), x.forEach(function(t) {
                    if (-1 === b.indexOf(t)) {
                        var e = E.get(t);
                        if (e) {
                            var n = S.indexOf(t);
                            g.splice(n, 0, h.createElement(rB, {
                                key: rz(e),
                                isPresent: !1,
                                onExitComplete: function() {
                                    E.delete(t), x.delete(t);
                                    var e = _.current.findIndex(function(e) {
                                        return e.key === t
                                    });
                                    if (_.current.splice(e, 1), !x.size) {
                                        if (_.current = m, !1 === v.current) return;
                                        f(), a && a()
                                    }
                                },
                                custom: r,
                                presenceAffectsLayout: d
                            }, e))
                        }
                    }
                }), g = g.map(function(t) {
                    var e = t.key;
                    return x.has(e) ? t : h.createElement(rB, {
                        key: rz(t),
                        isPresent: !0,
                        presenceAffectsLayout: d
                    }, t)
                }), "production" !== y && l && g.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), h.createElement(h.Fragment, null, x.size ? g : g.map(function(t) {
                    return u.cloneElement(t)
                }))
            }, e.AnimateSharedLayout = function(t) {
                var e = t.children;
                return h.useEffect(function() {
                    l.warning(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
                }, []), h.createElement(rW, {
                    id: Y(function() {
                        return "asl-".concat(rG++)
                    })
                }, e)
            }, e.DeprecatedLayoutGroupContext = rY, e.DragControls = io, e.FlatTree = rp, e.LayoutGroup = rW, e.LayoutGroupContext = W, e.LazyMotion = function(t) {
                var e = t.children,
                    n = t.features,
                    r = t.strict,
                    i = s.__read(u.useState(!rZ(n)), 2)[1],
                    o = u.useRef(void 0);
                if (!rZ(n)) {
                    var a = n.renderer,
                        l = s.__rest(n, ["renderer"]);
                    o.current = a, E(l)
                }
                return u.useEffect(function() {
                    rZ(n) && n().then(function(t) {
                        var e = t.renderer;
                        E(s.__rest(t, ["renderer"])), o.current = e, i(!0)
                    })
                }, []), h.createElement(A.Provider, {
                    value: {
                        renderer: o.current,
                        strict: void 0 !== r && r
                    }
                }, e)
            }, e.MotionConfig = function(t) {
                var e = t.children,
                    n = t.isValidProp,
                    r = s.__rest(t, ["children", "isValidProp"]);
                n && tx(n), (r = s.__assign(s.__assign({}, u.useContext(w)), r)).isStatic = Y(function() {
                    return r.isStatic
                });
                var i = u.useMemo(function() {
                    return r
                }, [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion]);
                return h.createElement(w.Provider, {
                    value: i
                }, e)
            }, e.MotionConfigContext = w, e.MotionContext = P, e.MotionValue = eD, e.PresenceContext = V, e.Reorder = {
                Group: r$,
                Item: r4
            }, e.SwitchLayoutGroupContext = G, e.addPointerEvent = tq, e.addScaleCorrector = tt, e.animate = n1, e.animateVisualElement = eY, e.animationControls = ir, e.animations = eq, e.calcLength = e2, e.checkTargetForNewValues = eN, e.createBox = ns, e.createDomMotionComponent = function(t) {
                return K(tN(t, {
                    forwardMotionProps: !1
                }, rI, nZ, rM))
            }, e.createMotionComponent = K, e.domAnimation = r9, e.domMax = r8, e.filterProps = t_, e.isBrowser = C, e.isDragActive = t2, e.isMotionValue = tu, e.isValidMotionProp = tg, e.m = rF, e.makeUseVisualState = tj, e.motion = rO, e.motionValue = eM, e.resolveMotionValue = tO, e.transform = r0, e.useAnimation = ii, e.useAnimationControls = ii, e.useAnimationFrame = ie, e.useCycle = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = u.useRef(0),
                    r = s.__read(u.useState(t[n.current]), 2),
                    i = r[0],
                    o = r[1];
                return [i, u.useCallback(function(e) {
                    n.current = "number" != typeof e ? d.wrap(0, t.length, n.current + 1) : e, o(t[n.current])
                }, s.__spreadArray([t.length], s.__read(t), !1))]
            }, e.useDeprecatedAnimatedState = function(t) {
                var e = s.__read(u.useState(t), 2),
                    n = e[0],
                    r = e[1],
                    i = ic({}, !1),
                    o = Y(function() {
                        return il({
                            props: {},
                            visualState: i
                        }, {
                            initialState: t
                        })
                    });
                return u.useEffect(function() {
                    return o.mount({}), o.unmount
                }, [o]), u.useEffect(function() {
                    o.setProps({
                        onUpdate: function(t) {
                            r(s.__assign({}, t))
                        }
                    })
                }, [r, o]), [n, Y(function() {
                    return function(t) {
                        return eY(o, t)
                    }
                })]
            }, e.useDeprecatedInvertedScale = function(t) {
                var e = rQ(1),
                    n = rQ(1),
                    r = T();
                return l.invariant(!!(t || r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), l.warning(ip, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), ip = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : r && (e = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
                    scaleX: r5(e, id),
                    scaleY: r5(n, id)
                }
            }, e.useDomEvent = tY, e.useDragControls = function() {
                return Y(ia)
            }, e.useElementScroll = function(t) {
                return t6(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), r7({
                    container: t
                })
            }, e.useForceUpdate = rU, e.useInView = function(t, e) {
                var n = void 0 === e ? {} : e,
                    r = n.root,
                    i = n.margin,
                    o = n.amount,
                    a = n.once,
                    l = void 0 !== a && a,
                    c = s.__read(u.useState(!1), 2),
                    d = c[0],
                    f = c[1];
                return u.useEffect(function() {
                    if (t.current && (!l || !d)) {
                        var e, n = {
                            root: null !== (e = null == r ? void 0 : r.current) && void 0 !== e ? e : void 0,
                            margin: i,
                            amount: "some" === o ? "any" : o
                        };
                        return p.inView(t.current, function() {
                            return f(!0), l ? void 0 : function() {
                                return f(!1)
                            }
                        }, n)
                    }
                }, [r, t, i, l]), d
            }, e.useInstantLayoutTransition = function() {
                return is
            }, e.useInstantTransition = function() {
                var t = s.__read(rU(), 2),
                    e = t[0],
                    n = t[1];
                return u.useEffect(function() {
                        g.default.postRender(function() {
                            return g.default.postRender(function() {
                                return eb.current = !1
                            })
                        })
                    }, [n]),
                    function(t) {
                        is(function() {
                            eb.current = !0, e(), t()
                        })
                    }
            }, e.useIsPresent = function() {
                var t;
                return null === (t = u.useContext(V)) || t.isPresent
            }, e.useIsomorphicLayoutEffect = R, e.useMotionTemplate = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = t.length;
                return r1(e, function() {
                    for (var n = "", i = 0; i < r; i++) n += t[i], e[i] && (n += e[i].get());
                    return n
                })
            }, e.useMotionValue = rQ, e.usePresence = el, e.useReducedMotion = D, e.useReducedMotionConfig = M, e.useResetProjection = function() {
                return h.useCallback(function() {
                    var t = rD.current;
                    t && t.resetTree()
                }, [])
            }, e.useScroll = r7, e.useSpring = function(t, e) {
                void 0 === e && (e = {});
                var n, r = u.useContext(w).isStatic,
                    i = u.useRef(null),
                    o = rQ(tu(t) ? t.get() : t);
                return u.useMemo(function() {
                    return o.attach(function(t, n) {
                        return r ? n(t) : (i.current && i.current.stop(), i.current = d.animate(s.__assign(s.__assign({
                            from: o.get(),
                            to: t,
                            velocity: o.getVelocity()
                        }, e), {
                            onUpdate: n
                        })), o.get())
                    })
                }, [JSON.stringify(e)]), R(function() {
                    if (tu(t)) return t.onChange(n)
                }, [n = function(t) {
                    return o.set(parseFloat(t))
                }]), o
            }, e.useTime = function() {
                var t = rQ(0);
                return ie(function(e) {
                    return t.set(e)
                }), t
            }, e.useTransform = r5, e.useUnmountEffect = t9, e.useVelocity = function(t) {
                var e = rQ(t.getVelocity());
                return u.useEffect(function() {
                    return t.velocityUpdateSubscribers.add(function(t) {
                        e.set(t)
                    })
                }, [t]), e
            }, e.useViewportScroll = function() {
                return t6(!1, "useViewportScroll is deprecated. Convert to useScroll()."), r7()
            }, e.useVisualElementContext = T, e.visualElement = nT, e.wrapHandler = tG
        }
    }
]);