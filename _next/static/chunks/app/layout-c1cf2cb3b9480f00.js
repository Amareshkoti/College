(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        67668: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 39867))
        },
        47239: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let r = n(57437),
                a = n(2265);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: o = null,
                    children: l,
                    dataNtpc: i = ""
                } = e;
                return (0, a.useEffect)(() => {
                    i && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(i)
                        }
                    })
                }, [i]), (0, r.jsxs)(r.Fragment, {
                    children: [l, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": i,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        14888: function(e, t, n) {
            "use strict";
            var r;
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let o = n(57437),
                l = n(2265),
                i = (r = n(48667)) && r.__esModule ? r : {
                    default: r
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === a && (a = n), (0, l.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(i.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, o.jsx)(i.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === a) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[a] ? window[a].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(a, " does not exist"))
            }
        },
        81992: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let a = n(57437),
                o = n(4855),
                l = r(n(47239));
            t.default = function(e) {
                let {
                    apiKey: t,
                    ...n
                } = e, r = { ...n,
                    key: t
                }, {
                    html: i
                } = (0, o.GoogleMapsEmbed)(r);
                return (0, a.jsx)(l.default, {
                    height: r.height || null,
                    width: r.width || null,
                    html: i,
                    dataNtpc: "GoogleMapsEmbed"
                })
            }
        },
        98087: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let a = n(57437),
                o = n(2265),
                l = (r = n(48667)) && r.__esModule ? r : {
                    default: r
                },
                i = "dataLayer";
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: r,
                    preview: u,
                    dataLayer: s
                } = e;
                i = n;
                let c = "dataLayer" !== n ? "&l=".concat(n) : "";
                return (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s ? "w[l].push(".concat(JSON.stringify(s), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, a.jsx)(l.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r ? "&gtm_auth=".concat(r) : "").concat(u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = (e, t) => {
                let n = t || i;
                window[n] = window[n] || [], window[n].push(e)
            }
        },
        13786: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = t.sendGTMEvent = t.GoogleTagManager = t.YouTubeEmbed = t.GoogleMapsEmbed = void 0;
            var a = n(81992);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return r(a).default
                }
            });
            var o = n(60538);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return r(o).default
                }
            });
            var l = n(98087);
            Object.defineProperty(t, "GoogleTagManager", {
                enumerable: !0,
                get: function() {
                    return l.GoogleTagManager
                }
            }), Object.defineProperty(t, "sendGTMEvent", {
                enumerable: !0,
                get: function() {
                    return l.sendGTMEvent
                }
            });
            var i = n(14888);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return i.GoogleAnalytics
                }
            }), Object.defineProperty(t, "sendGAEvent", {
                enumerable: !0,
                get: function() {
                    return i.sendGAEvent
                }
            })
        },
        60538: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let a = n(57437),
                o = r(n(48667)),
                l = n(4855),
                i = r(n(47239)),
                u = {
                    server: "beforeInteractive",
                    client: "afterInteractive",
                    idle: "lazyOnload",
                    worker: "worker"
                };
            t.default = function(e) {
                let {
                    html: t,
                    scripts: n,
                    stylesheets: r
                } = (0, l.YouTubeEmbed)(e);
                return (0, a.jsx)(i.default, {
                    height: e.height || null,
                    width: e.width || null,
                    html: t,
                    dataNtpc: "YouTubeEmbed",
                    children: null == n ? void 0 : n.map(e => (0, a.jsx)(o.default, {
                        src: e.url,
                        strategy: u[e.strategy],
                        stylesheets: r
                    }, e.url))
                })
            }
        },
        63515: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return r
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4855: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0;
            var r = n(36014);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return r.GoogleAnalytics
                }
            });
            var a = n(16630);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return a.GoogleMapsEmbed
                }
            });
            var o = n(98712);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return o.YouTubeEmbed
                }
            })
        },
        36014: function(e, t, n) {
            "use strict";
            var r = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) 0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                    return n
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = void 0;
            let o = a(n(46893)),
                l = n(11076);
            t.GoogleAnalytics = e => {
                var t = r(e, []);
                return (0, l.formatData)(o.default, t)
            }
        },
        16630: function(e, t, n) {
            "use strict";
            var r = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) 0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                    return n
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleMapsEmbed = void 0;
            let o = a(n(46362)),
                l = n(11076);
            t.GoogleMapsEmbed = e => {
                var t = r(e, []);
                return (0, l.formatData)(o.default, t)
            }
        },
        98712: function(e, t, n) {
            "use strict";
            var r = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) 0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                    return n
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = void 0;
            let o = a(n(95825)),
                l = n(11076);
            t.YouTubeEmbed = e => {
                var t = r(e, []);
                return (0, l.formatData)(o.default, t)
            }
        },
        11076: function(e, t) {
            "use strict";

            function n(e, t, n = !1) {
                return t ? Object.keys(e).filter(e => n ? !t.includes(e) : t.includes(e)).reduce((t, n) => (t[n] = e[n], t), {}) : {}
            }

            function r(e, t, n, r) {
                let a = r && Object.keys(r).length > 0 ? new URL(Object.values(r)[0], e) : new URL(e);
                return t && n && t.forEach(e => {
                    n[e] && a.searchParams.set(e, n[e])
                }), a.toString()
            }

            function a(e, t, n, a, o) {
                var l;
                if (!t) return `<${e}></${e}>`;
                let i = (null === (l = t.src) || void 0 === l ? void 0 : l.url) ? Object.assign(Object.assign({}, t), {
                        src: r(t.src.url, t.src.params, a, o)
                    }) : t,
                    u = Object.keys(Object.assign(Object.assign({}, i), n)).reduce((e, t) => {
                        let r = null == n ? void 0 : n[t],
                            a = i[t],
                            o = null != r ? r : a,
                            l = !0 === o ? t : `${t}="${o}"`;
                        return o ? e + ` ${l}` : e
                    }, "");
                return `<${e}${u}></${e}>`
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatData = t.createHtml = t.formatUrl = void 0, t.formatUrl = r, t.createHtml = a, t.formatData = function(e, t) {
                var o, l, i, u, s;
                let c = n(t, null === (o = e.scripts) || void 0 === o ? void 0 : o.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
                    d = n(t, null === (i = null === (l = e.html) || void 0 === l ? void 0 : l.attributes.src) || void 0 === i ? void 0 : i.params),
                    f = n(t, [null === (s = null === (u = e.html) || void 0 === u ? void 0 : u.attributes.src) || void 0 === s ? void 0 : s.slugParam]),
                    g = n(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(f)], !0);
                return Object.assign(Object.assign({}, e), {
                    html: e.html ? a(e.html.element, e.html.attributes, g, d, f) : null,
                    scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                        url: r(e.url, e.params, c)
                    })) : null
                })
            }
        },
        39867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n(57437);
            n(2778);
            var a = n(2265),
                o = () => {
                    let [e, t] = (0, a.useState)(0), n = (0, a.useRef)(null);
                    return (0, a.useEffect)(() => {
                        let e = () => {
                            let e = document.getElementsByTagName("*").length;
                            t(document.querySelectorAll(":not(img):not(script):not(audio):not(video):not(iframe):not(svg)").length / e * 100)
                        };
                        return window.addEventListener("DOMContentLoaded", e), () => {
                            window.removeEventListener("DOMContentLoaded", e)
                        }
                    }, []), (0, a.useEffect)(() => {
                        n.current && (n.current.playbackRate = .5 + e / 200)
                    }, [e]), (0, r.jsx)("div", {
                        className: "w-screen h-[100vh] overflow-hidden flex justify-center items-center bg-[#680514]",
                        children: (0, r.jsxs)("video", {
                            ref: n,
                            preload: "true",
                            autoPlay: !0,
                            muted: !0,
                            className: "w-full object-contain",
                            children: [(0, r.jsx)("source", {
                                src: "/loader-new.mp4",
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })
                },
                l = n(13786),
                i = n(69824);

            function u(e) {
                let {
                    children: t
                } = e, [n, u] = (0, a.useState)(!0);
                return (0, a.useEffect)(() => {
                    let e = setTimeout(() => u(!1), 2e3);
                    return () => clearTimeout(e)
                }, []), (0, r.jsxs)("html", {
                    lang: "en",
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)("meta", {
                        name: "google-site-verification",
                        content: "F1RWwbjluQWHpptTUMKdIVQnEia7jMQnttoDPJBSxYc"
                    }), (0, r.jsx)(l.GoogleAnalytics, {
                        gaId: "G-2T9WDZQ3EB"
                    }), (0, r.jsx)("body", {
                        children: n ? (0, r.jsx)(o, {}) : t
                    })]
                })
            }
        },
        69824: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(57437);

            function a(e) {
                let {
                    seoTitle: t,
                    seoDescription: n,
                    seoKeywords: a
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("title", {
                        children: t ? t + " - VIGNAN" : "VIGNAN"
                    }), (0, r.jsx)("meta", {
                        name: "description",
                        content: n || "Apply Knowledge, Improve Life!"
                    }), (0, r.jsx)("meta", {
                        name: "keywords",
                        content: a || "VIGNAN, VIT-AP,vitap,vit vellore,vit,vit amaravathi,amaravathi,vijayawada,guntur,engineering college,computer science,mechanical,electronic,apeapcet,ap eamcet,eamcet,viteee,vit ap viteee"
                    })]
                })
            }
        },
        2778: function() {},
        46893: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')
        },
        46362: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')
        },
        95825: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')
        }
    },
    function(e) {
        e.O(0, [2461, 8667, 2971, 2117, 1744], function() {
            return e(e.s = 67668)
        }), _N_E = e.O()
    }
]);