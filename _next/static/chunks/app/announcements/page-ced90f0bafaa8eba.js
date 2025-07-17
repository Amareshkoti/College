(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8063, 9411], {
        1942: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 43567))
        },
        24601: function() {},
        18975: function(e, t, s) {
            "use strict";
            var i = s(40257);
            s(24601);
            var n = s(2265),
                r = n && "object" == typeof n && "default" in n ? n : {
                    default: n
                },
                o = void 0 !== i && i.env && !0,
                a = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                c = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            s = t.name,
                            i = void 0 === s ? "stylesheet" : s,
                            n = t.optimizeForSpeed,
                            r = void 0 === n ? o : n;
                        l(a(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", l("boolean" == typeof r, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = r, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var c = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = c ? c.getAttribute("content") : null
                    }
                    var t = e.prototype;
                    return t.setOptimizeForSpeed = function(e) {
                            l("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, t.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, t.inject = function() {
                            var e = this;
                            if (l(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, s) {
                                    return "number" == typeof s ? e._serverSheet.cssRules[s] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), s
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, t.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, t.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, t.insertRule = function(e, t) {
                            if (l(a(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var s = this.getSheet();
                                "number" != typeof t && (t = s.cssRules.length);
                                try {
                                    s.insertRule(e, t)
                                } catch (t) {
                                    return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var i = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, i))
                            }
                            return this._rulesCount++
                        }, t.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var s = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !s.cssRules[e]) return e;
                                s.deleteRule(e);
                                try {
                                    s.insertRule(t, e)
                                } catch (i) {
                                    o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), s.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var i = this._tags[e];
                                l(i, "old rule at index `" + e + "` not found"), i.textContent = t
                            }
                            return e
                        }, t.deleteRule = function(e) {
                            if ("undefined" == typeof window) {
                                this._serverSheet.deleteRule(e);
                                return
                            }
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, t.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, t.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, s) {
                                return s ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, t.makeStyleTag = function(e, t, s) {
                            t && l(a(t), "makeStyleTag accepts only strings as second parameter");
                            var i = document.createElement("style");
                            this._nonce && i.setAttribute("nonce", this._nonce), i.type = "text/css", i.setAttribute("data-" + e, ""), t && i.appendChild(document.createTextNode(t));
                            var n = document.head || document.getElementsByTagName("head")[0];
                            return s ? n.insertBefore(i, s) : n.appendChild(i), i
                        },
                        function(e, t) {
                            for (var s = 0; s < t.length; s++) {
                                var i = t[s];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }(e.prototype, [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }]), e
                }();

            function l(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var d = function(e) {
                    for (var t = 5381, s = e.length; s;) t = 33 * t ^ e.charCodeAt(--s);
                    return t >>> 0
                },
                u = {};

            function f(e, t) {
                if (!t) return "jsx-" + e;
                var s = String(t),
                    i = e + s;
                return u[i] || (u[i] = "jsx-" + d(e + "-" + s)), u[i]
            }

            function h(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var s = e + t;
                return u[s] || (u[s] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[s]
            }
            var p = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            s = t.styleSheet,
                            i = void 0 === s ? null : s,
                            n = t.optimizeForSpeed,
                            r = void 0 !== n && n;
                        this._sheet = i || new c({
                            name: "styled-jsx",
                            optimizeForSpeed: r
                        }), this._sheet.inject(), i && "boolean" == typeof r && (this._sheet.setOptimizeForSpeed(r), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var s = this.getIdAndRules(e),
                            i = s.styleId,
                            n = s.rules;
                        if (i in this._instancesCounts) {
                            this._instancesCounts[i] += 1;
                            return
                        }
                        var r = n.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[i] = r, this._instancesCounts[i] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            s = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(s in this._instancesCounts, "styleId: `" + s + "` not found"), this._instancesCounts[s] -= 1, this._instancesCounts[s] < 1) {
                            var i = this._fromServer && this._fromServer[s];
                            i ? (i.parentNode.removeChild(i), delete this._fromServer[s]) : (this._indices[s].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[s]), delete this._instancesCounts[s]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            s = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return s[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, s;
                        return t = this.cssRules(), void 0 === (s = e) && (s = {}), t.map(function(e) {
                            var t = e[0],
                                i = e[1];
                            return r.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: s.nonce ? s.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: i
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            s = e.dynamic,
                            i = e.id;
                        if (s) {
                            var n = f(i, s);
                            return {
                                styleId: n,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return h(n, e)
                                }) : [h(n, t)]
                            }
                        }
                        return {
                            styleId: f(i),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                m = n.createContext(null);
            m.displayName = "StyleSheetContext";
            var x = r.default.useInsertionEffect || r.default.useLayoutEffect,
                b = "undefined" != typeof window ? new p : void 0;

            function _(e) {
                var t = b || n.useContext(m);
                return t && ("undefined" == typeof window ? t.add(e) : x(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            _.dynamic = function(e) {
                return e.map(function(e) {
                    return f(e[0], e[1])
                }).join(" ")
            }, t.style = _
        },
        29: function(e, t, s) {
            "use strict";
            e.exports = s(18975).style
        },
        43567: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var i = s(57437),
                n = s(2265);
            s(44620);
            var r = s(27648),
                o = e => {
                    let {
                        key: t,
                        content: s,
                        link: n
                    } = e;
                    return (0, i.jsx)("div", {
                        className: "relative min-w-[365px] min-h-[175px] z-10 bg-white cursor-pointer group",
                        children: (0, i.jsxs)(r.default, {
                            href: "/announcements/".concat(n),
                            target: "_blank",
                            children: [(0, i.jsx)("div", {
                                className: "absolute w-[100%] h-[50%] border-[8px] bottom-0 border-[#E6CFCF] border-t-0 z-20 group-hover:border-primary transition-all duration-300 ease-in-out"
                            }), (0, i.jsx)("div", {
                                className: "absolute w-[97%] h-[96%] border border-gray-400 ml-[5px] flex flex-col justify-center items-start text-start",
                                children: (0, i.jsx)("div", {
                                    className: "p-[25px]",
                                    children: (0, i.jsx)("h1", {
                                        className: "tags text-[#000] text-[16px] font-bold mb-1 font-Emilo",
                                        children: s
                                    })
                                })
                            })]
                        })
                    }, t)
                },
                a = s(48053),
                c = s(83464);
            s(33145);
            var l = e => {
                    let {
                        src: t,
                        title: s,
                        subtitle: n
                    } = e;
                    return (0, i.jsx)("div", {
                        style: {
                            position: "relative",
                            backgroundImage: "linear-gradient(\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.7)\n    ), url(".concat(t, ")"),
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        },
                        className: "text-white bg-fixed flex items-center justify-center min-h-[180px] sm:min-h-[300px] lg:min-h-[360px]",
                        children: (0, i.jsxs)("div", {
                            className: "relative z-20  p-8 items-center justify-center",
                            children: [(0, i.jsx)("h1", {
                                className: "text-[25px] text-center md:text-4xl lg:text-5xl font-[600] font-Emilio",
                                children: s
                            }), (0, i.jsx)("p", {
                                className: "text-[33px] font-[550] font-Emilio text-center",
                                children: n
                            })]
                        })
                    })
                },
                d = () => {
                    let [e, t] = (0, n.useState)(1), [s, r] = (0, n.useState)([]), d = () => {
                        1 === e ? t(f) : t(e - 1)
                    }, u = () => {
                        e === f ? t(1) : t(e + 1)
                    };
                    (0, n.useEffect)(() => {
                        (async () => {
                            try {
                                let e = await c.Z.get("".concat("https://cms.vitap.ac.in", "/api/announcements-pages?populate=*&sort=Date:DESC"), {
                                    headers: {
                                        Authorization: "Bearer ".concat("3e602eb0ea823444179f1baf562a6e3ef4b260b83908ba8ada025e67f8f279493f69268174f966c8cfabcf50396a50cb59db8f12cb369a5d5e86aa253551c030c98e1f0f940efb018185dd359a5461a8b472c1bca7b0da7b04ebd60b33019c22afe8a5ffdd05450b11e059a342ff9711c17a5e30bda15e120a895d9786ac254f")
                                    }
                                });
                                if (e.data && Array.isArray(e.data.data)) {
                                    let t = e.data.data.map(e => e.attributes);
                                    r(t)
                                } else console.error('The "data" property in the API response is not an array:', e.data)
                            } catch (e) {
                                console.error("Error fetching data:", e.message), hidden
                            }
                        })()
                    }, []);
                    let f = Math.ceil(s.length / 12),
                        h = Array.from({
                            length: f
                        }, (e, t) => t + 1);
                    return (0, i.jsxs)("div", {
                        className: "max-w-full w-[100%] max-h-[2900px] mx-auto text-justify",
                        children: [(0, i.jsx)(l, {
                            src: "/AVIF_Images/Banners/Announcements.avif ",
                            title: "Announcements"
                        }), (0, i.jsx)("div", {
                            className: "my-[50px] max-w-screen w-full flex flex-wrap gap-5 justify-center items-center px-[30px] ls:px-0",
                            children: null == s ? void 0 : s.slice((e - 1) * 12, 12 * e).map((e, t) => (0, i.jsx)(o, {
                                content: e.Title,
                                link: e.slug
                            }, t))
                        }), (0, i.jsxs)("div", {
                            className: "w-[100%] bg-[#E6CFCF] h-[150px] mt-[-100px] -z-10 flex justify-center items-center gap-5 pt-[20px]",
                            children: [(0, i.jsx)("div", {
                                className: "cursor-pointer",
                                onClick: () => d(),
                                children: (0, i.jsx)(a.kyg, {
                                    size: 30
                                })
                            }), h.map(s => (0, i.jsx)("div", {
                                className: "w-[40px] h-[40px] p-[5px] rounded-lg ".concat(e === s ? "bg-[#650010] text-white" : "bg-[#F9C6CB] text-black", " flex justify-center items-center  cursor-pointer"),
                                onClick: () => t(1),
                                children: s
                            })), (0, i.jsx)("div", {
                                className: "cursor-pointer",
                                onClick: () => u(),
                                children: (0, i.jsx)(a.mGl, {
                                    size: 30
                                })
                            })]
                        })]
                    })
                };
            s(28831);
            var u = s(96435),
                f = s(72035),
                h = s(94651),
                p = s(99411),
                m = s(69137),
                x = s(17866),
                b = s(99376),
                _ = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.default, {}), (0, i.jsx)(u.default, {}), (0, i.jsx)(x.Z, {
                        pathname: (0, b.usePathname)()
                    }), (0, i.jsx)(d, {}), (0, i.jsx)(h.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(p.default, {})]
                })
        },
        99411: function(e, t, s) {
            "use strict";
            var i = s(57437),
                n = s(29),
                r = s.n(n),
                o = s(27648),
                a = s(2265);
            t.default = () => {
                let [e, t] = (0, a.useState)(!1), s = () => {
                    window.pageYOffset > 300 ? t(!0) : t(!1)
                };
                return (0, a.useEffect)(() => (window.addEventListener("scroll", s), () => {
                    window.removeEventListener("scroll", s)
                }), []), (0, i.jsxs)("div", {
                    className: "jsx-b2175eddc795f2f0 scroll-to-top flex flex-col items-center justify-center gap-[20px]",
                    children: [(0, i.jsx)(o.default, {
                        href: "/vitiebot",
                        children: (0, i.jsx)("div", {
                            style: {
                                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0 %, rgba(0, 0, 0, 0.20) 100 %), #650010"
                            },
                            className: "jsx-b2175eddc795f2f0 " + "chat-bot-icon rounded-full bg-[#650010] mb-[10px] mr-[5px] p-[11px] ".concat(e ? "move-up" : ""),
                            children: (0, i.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "34",
                                height: "33",
                                viewBox: "0 0 34 33",
                                fill: "none",
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, i.jsx)("mask", {
                                    id: "path-1-inside-1_404_15852",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: (0, i.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M16.8766 22.3236C21.0305 22.3236 24.3978 18.9563 24.3978 14.8024C24.3978 10.6486 21.0305 7.28125 16.8766 7.28125C12.7228 7.28125 9.35547 10.6486 9.35547 14.8024C9.35547 17.0701 10.359 19.1033 11.9462 20.4823C12.1349 22.5393 11.4857 23.489 9.80269 24.8307L15.9909 22.272C16.2814 22.3061 16.577 22.3236 16.8766 22.3236Z",
                                        className: "jsx-b2175eddc795f2f0"
                                    })
                                }), (0, i.jsx)("path", {
                                    d: "M11.9462 20.4823L12.9421 20.391L12.9054 19.9909L12.6021 19.7274L11.9462 20.4823ZM9.80269 24.8307L9.17934 24.0487L10.1848 25.7548L9.80269 24.8307ZM15.9909 22.272L16.1074 21.2788L15.8491 21.2485L15.6088 21.3479L15.9909 22.272ZM23.3978 14.8024C23.3978 18.404 20.4782 21.3236 16.8766 21.3236V23.3236C21.5828 23.3236 25.3978 19.5085 25.3978 14.8024H23.3978ZM16.8766 8.28125C20.4782 8.28125 23.3978 11.2009 23.3978 14.8024H25.3978C25.3978 10.0963 21.5828 6.28125 16.8766 6.28125V8.28125ZM10.3555 14.8024C10.3555 11.2009 13.2751 8.28125 16.8766 8.28125V6.28125C12.1705 6.28125 8.35547 10.0963 8.35547 14.8024H10.3555ZM12.6021 19.7274C11.2242 18.5303 10.3555 16.7684 10.3555 14.8024H8.35547C8.35547 17.3718 9.49387 19.6764 11.2904 21.2372L12.6021 19.7274ZM10.426 25.6126C11.2903 24.9236 12.011 24.2446 12.461 23.3911C12.9279 22.5053 13.0478 21.5434 12.9421 20.391L10.9504 20.5736C11.0334 21.4782 10.923 22.0197 10.6917 22.4584C10.4434 22.9294 9.99803 23.3961 9.17934 24.0487L10.426 25.6126ZM15.6088 21.3479L9.42059 23.9066L10.1848 25.7548L16.373 23.1961L15.6088 21.3479ZM16.8766 21.3236C16.616 21.3236 16.3593 21.3084 16.1074 21.2788L15.8744 23.2652C16.2035 23.3038 16.538 23.3236 16.8766 23.3236V21.3236Z",
                                    fill: "white",
                                    mask: "url(#path-1-inside-1_404_15852)",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "12.6992",
                                    y: "12.2969",
                                    width: "9.19255",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "12.6992",
                                    y: "17.3086",
                                    width: "9.19255",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "12.6992",
                                    y: "14.8047",
                                    width: "6.68549",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "28.9141",
                                    y: "10.9609",
                                    width: "4.34275",
                                    height: "9.35687",
                                    rx: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "0.5",
                                    y: "10.9609",
                                    width: "4.34275",
                                    height: "9.35687",
                                    rx: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("path", {
                                    d: "M2.67188 11.4578C2.67188 11.4578 5.59678 0.593908 16.8786 1.01175C28.1603 1.42959 31.0852 11.4578 31.0852 11.4578",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("path", {
                                    d: "M18.5508 29.8438C29.8326 29.4259 31.0861 19.8144 31.0861 19.8144",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("circle", {
                                    cx: "16.8784",
                                    cy: "29.8432",
                                    r: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                })]
                            })
                        })
                    }), e && (0, i.jsx)("button", {
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "jsx-b2175eddc795f2f0 scroll-to-top-button mt-[10px] ",
                        children: (0, i.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "62",
                            height: "62",
                            viewBox: "0 0 62 62",
                            fill: "none",
                            className: "jsx-b2175eddc795f2f0",
                            children: [(0, i.jsxs)("g", {
                                filter: "url(#filter0_d_277_15844)",
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, i.jsx)("rect", {
                                    x: "4",
                                    width: "54",
                                    height: "54",
                                    rx: "27",
                                    fill: "#650010",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("rect", {
                                    x: "4",
                                    width: "54",
                                    height: "54",
                                    rx: "27",
                                    fill: "url(#paint0_linear_277_15844)",
                                    "fill-opacity": "0.2",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, i.jsx)("path", {
                                    d: "M32.2021 19.7979C31.5382 19.134 30.4618 19.134 29.7979 19.7979L18.9792 30.6167C18.3153 31.2805 18.3153 32.3569 18.9792 33.0208C19.6431 33.6847 20.7195 33.6847 21.3833 33.0208L31 23.4042L40.6167 33.0208C41.2805 33.6847 42.3569 33.6847 43.0208 33.0208C43.6847 32.3569 43.6847 31.2805 43.0208 30.6167L32.2021 19.7979ZM32.7 22L32.7 21L29.3 21L29.3 22L32.7 22Z",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                })]
                            }), (0, i.jsxs)("defs", {
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, i.jsxs)("filter", {
                                    id: "filter0_d_277_15844",
                                    x: "0",
                                    y: "0",
                                    width: "62",
                                    height: "62",
                                    filterUnits: "userSpaceOnUse",
                                    "color-interpolation-filters": "sRGB",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: [(0, i.jsx)("feFlood", {
                                        "flood-opacity": "0",
                                        result: "BackgroundImageFix",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feOffset", {
                                        dy: "4",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feGaussianBlur", {
                                        stdDeviation: "2",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "out",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "BackgroundImageFix",
                                        result: "effect1_dropShadow_277_15844",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_dropShadow_277_15844",
                                        result: "shape",
                                        className: "jsx-b2175eddc795f2f0"
                                    })]
                                }), (0, i.jsxs)("linearGradient", {
                                    id: "paint0_linear_277_15844",
                                    x1: "31",
                                    y1: "0",
                                    x2: "31",
                                    y2: "54",
                                    gradientUnits: "userSpaceOnUse",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: [(0, i.jsx)("stop", {
                                        "stop-color": "white",
                                        "stop-opacity": "0",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, i.jsx)("stop", {
                                        offset: "1",
                                        className: "jsx-b2175eddc795f2f0"
                                    })]
                                })]
                            })]
                        })
                    }), (0, i.jsx)(r(), {
                        id: "b2175eddc795f2f0",
                        children: ".scroll-to-top.jsx-b2175eddc795f2f0{position:fixed;right:20px;bottom:20px;z-index:1000}.chat-bot-icon.jsx-b2175eddc795f2f0{position:absolute;right:0;bottom:0;-webkit-transition:bottom.5s ease-in-out;-moz-transition:bottom.5s ease-in-out;-o-transition:bottom.5s ease-in-out;transition:bottom.5s ease-in-out}.chat-bot-icon.move-up.jsx-b2175eddc795f2f0{bottom:60px}.scroll-to-top-button.jsx-b2175eddc795f2f0{border:none;color:white;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;cursor:pointer;font-size:24px;-webkit-transition:background-color.3s;-moz-transition:background-color.3s;-o-transition:background-color.3s;transition:background-color.3s}"
                    })]
                })
            }
        },
        44620: function() {}
    },
    function(e) {
        e.O(0, [3461, 4506, 9293, 1465, 2420, 1787, 2502, 1582, 2306, 6115, 3712, 2400, 5878, 3203, 3984, 9137, 823, 2971, 2117, 1744], function() {
            return e(e.s = 1942)
        }), _N_E = e.O()
    }
]);