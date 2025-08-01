"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8667], {
        48667: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return i.a
                }
            });
            var r = n(88003),
                i = n.n(r),
                o = {};
            for (var l in r) "default" !== l && (o[l] = (function(e) {
                return r[e]
            }).bind(0, l));
            n.d(t, o)
        },
        8221: function(e, t) {
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return l
                    },
                    isEqualNode: function() {
                        return o
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function i(e) {
                let {
                    type: t,
                    props: n
                } = e, i = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? i[o] = !!n[e] : i.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: l
                } = n;
                return l ? i.innerHTML = l.__html || "" : o && (i.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), i
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function l() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            i = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        i !== document.title && (document.title = i), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    l = Number(r.content),
                    a = [];
                for (let t = 0, n = r.previousElementSibling; t < l; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var u;
                    (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && a.push(n)
                }
                let s = t.map(i).filter(e => {
                    for (let t = 0, n = a.length; t < n; t++)
                        if (o(a[t], e)) return a.splice(t, 1), !1;
                    return !0
                });
                a.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), s.forEach(e => n.insertBefore(e, r)), r.content = (l - a.length + s.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        88003: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return b
                    },
                    handleClientScriptLoad: function() {
                        return g
                    },
                    initScriptLoader: function() {
                        return m
                    }
                });
            let r = n(47043),
                i = n(53099),
                o = n(57437),
                l = r._(n(54887)),
                a = i._(n(2265)),
                u = n(48701),
                s = n(8221),
                c = n(63515),
                d = new Map,
                f = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                y = e => {
                    if (l.default.preinit) {
                        e.forEach(e => {
                            l.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                h = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: o,
                        children: l = "",
                        strategy: a = "afterInteractive",
                        onError: u,
                        stylesheets: c
                    } = e, h = n || t;
                    if (h && f.has(h)) return;
                    if (d.has(t)) {
                        f.add(h), d.get(t).then(r, u);
                        return
                    }
                    let g = () => {
                            i && i(), f.add(h)
                        },
                        m = document.createElement("script"),
                        _ = new Promise((e, t) => {
                            m.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), g()
                            }), m.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            u && u(e)
                        });
                    for (let [n, r] of (o ? (m.innerHTML = o.__html || "", g()) : l ? (m.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", g()) : t && (m.src = t, d.set(t, _)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = s.DOMAttributeNames[n] || n.toLowerCase();
                        m.setAttribute(e, r)
                    }
                    "worker" === a && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", a), c && y(c), document.body.appendChild(m)
                };

            function g(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => h(e))
                }) : h(e)
            }

            function m(e) {
                e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function _(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: i = null,
                    strategy: s = "afterInteractive",
                    onError: d,
                    stylesheets: p,
                    ...y
                } = e, {
                    updateScripts: g,
                    scripts: m,
                    getIsSsr: _,
                    appDir: b,
                    nonce: v
                } = (0, a.useContext)(u.HeadManagerContext), E = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    let e = t || n;
                    E.current || (i && e && f.has(e) && i(), E.current = !0)
                }, [i, t, n]);
                let O = (0, a.useRef)(!1);
                if ((0, a.useEffect)(() => {
                        !O.current && ("afterInteractive" === s ? h(e) : "lazyOnload" === s && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => h(e))
                        })), O.current = !0)
                    }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (g ? (m[s] = (m[s] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: i,
                        onError: d,
                        ...y
                    }]), g(m)) : _ && _() ? f.add(t || n) : _ && !_() && h(e)), b) {
                    if (p && p.forEach(e => {
                            l.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === s) return n ? (l.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    } : {
                        as: "script",
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    }), (0, o.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...y,
                                id: t
                            }]) + ")"
                        }
                    })) : (y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...y,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === s && n && l.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    } : {
                        as: "script",
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(_, "__nextScript", {
                value: !0
            });
            let b = _;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);