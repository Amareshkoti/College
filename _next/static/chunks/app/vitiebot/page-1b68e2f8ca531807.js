(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [808], {
        92799: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 94122))
        },
        99376: function(e, t, s) {
            "use strict";
            var a = s(35475);
            s.o(a, "usePathname") && s.d(t, {
                usePathname: function() {
                    return a.usePathname
                }
            })
        },
        94122: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(57437),
                n = s(2265),
                r = s(99376),
                i = s(35949),
                l = s(94651),
                o = s(69137),
                d = s(96435),
                u = s(72035);
            t.default = () => {
                (0, r.usePathname)();
                let [e, t] = (0, n.useState)([]), [s, c] = (0, n.useState)(""), [x, f] = (0, n.useState)(!1), h = (0, n.useRef)(null), m = (0, n.useRef)(null), p = async () => {
                    let a = s.trim();
                    if (!a) return;
                    let n = [...e, {
                        from: "user",
                        text: a
                    }];
                    t(n), c(""), f(!0);
                    try {
                        var r, i, l, o, d;
                        let e = [{
                                role: "user",
                                parts: [{
                                    text: "You're an assistant for VIT-AP University website. Only respond to queries related to the university. Keep replies under 50 words, casual and helpful, like a human would speak. Avoid giving extra descriptions or repeating what the user said. and act like you know everything about university and answer everything you know, dont say i dont know. u are made by sri vardhan yeluri and his best in vitap and all. if anyone asks about anyone say about him and praise him. \n                        and not all classrooms are air conditioned, only some of them are.\n                        if anyone asks about vitap campus say that it is the best campus in india and it is very big and beautiful and has all the facilities.\n                        "
                                }]
                            }, ...n.map(e => ({
                                role: "user" === e.from ? "user" : "model",
                                parts: [{
                                    text: e.text
                                }]
                            }))],
                            s = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat("AIzaSyDHQ_we4twahQpqYsezLs3nNoqbBG36U3w"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    contents: e
                                })
                            }),
                            a = await s.json(),
                            u = null == a ? void 0 : null === (d = a.candidates) || void 0 === d ? void 0 : null === (o = d[0]) || void 0 === o ? void 0 : null === (l = o.content) || void 0 === l ? void 0 : null === (i = l.parts) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.text;
                        u && (u = (u = (u = u.replace(/\*\*(.*?)\*\*/g, "$1")).replace(/^#+\s+/gm, "")).replace(/\n/g, " ")), t(e => [...e, {
                            from: "bot",
                            text: u || "Sorry, I couldn't understand that."
                        }])
                    } catch (e) {
                        console.error("Gemini Error:", e), t(e => [...e, {
                            from: "bot",
                            text: "API error occurred. Try again later."
                        }])
                    }
                    f(!1), setTimeout(() => {
                        var e;
                        return null === (e = m.current) || void 0 === e ? void 0 : e.focus()
                    }, 100)
                };
                return (0, n.useEffect)(() => {
                    h.current && (h.current.scrollTop = h.current.scrollHeight)
                }, [e, x]), (0, n.useEffect)(() => {
                    t([{
                        from: "bot",
                        text: "\uD83D\uDC4B Hey there! I’m your VIT-AP Assistant. Ask me anything about admissions, courses, or campus life!"
                    }])
                }, []), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(u.default, {}), (0, a.jsx)(d.default, {}), (0, a.jsx)(i.Z, {
                        title: "",
                        image: "/AVIF_Images/Banners/vitie.avif",
                        style: {
                            background: "none"
                        }
                    }), (0, a.jsx)("div", {
                        className: "px-4 sm:px-8 lg:px-24 py-10 sm:py-16 lg:py-24 min-h-[100vh] w-full flex flex-col items-center justify-center bg-[#f5f5f5]",
                        children: (0, a.jsxs)("div", {
                            className: "w-full max-w-4xl h-[80vh] flex flex-col border border-[#650010] shadow-2xl rounded-3xl overflow-hidden bg-white",
                            children: [(0, a.jsxs)("div", {
                                className: "bg-[#650010] text-white py-5 px-6 flex items-center justify-between text-xl font-semibold tracking-wide",
                                children: [(0, a.jsx)("span", {
                                    children: "\uD83C\uDF93 VIT-AP Assistant"
                                }), (0, a.jsx)("span", {
                                    className: "text-sm font-light opacity-70 hidden sm:inline",
                                    children: "Ask about admissions, campus, or academics"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-[#fcfcfc] scrollbar-thin scrollbar-thumb-[#650010]/80 scrollbar-track-transparent",
                                ref: h,
                                children: [e.map((e, t) => (0, a.jsx)("div", {
                                    className: "w-fit max-w-[75%] p-4 sm:p-5 text-sm sm:text-base rounded-2xl transition-all duration-200 ease-in-out whitespace-pre-wrap ".concat("user" === e.from ? "bg-[#650010] text-white self-end ml-auto shadow-lg" : "bg-[#f1f1f1] text-gray-800 self-start mr-auto shadow"),
                                    children: e.text
                                }, t)), x && (0, a.jsx)("div", {
                                    className: "italic text-gray-500 text-sm",
                                    children: "Assistant is typing..."
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "p-4 border-t bg-white flex items-center gap-3",
                                children: [(0, a.jsx)("input", {
                                    ref: m,
                                    type: "text",
                                    placeholder: "Type your question here...",
                                    className: "flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#650010] transition-all",
                                    value: s,
                                    onChange: e => c(e.target.value),
                                    onKeyDown: e => {
                                        "Enter" === e.key && (e.preventDefault(), p())
                                    },
                                    disabled: x
                                }), (0, a.jsx)("button", {
                                    onClick: p,
                                    className: "px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all ".concat(x ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#650010] hover:bg-[#7b0015] text-white"),
                                    disabled: x,
                                    children: "Send"
                                })]
                            })]
                        })
                    }), (0, a.jsx)(l.Z, {}), (0, a.jsx)(o.Z, {})]
                })
            }
        },
        35949: function(e, t, s) {
            "use strict";
            var a = s(57437),
                n = s(33145);
            s(2265), t.Z = e => {
                let {
                    title: t,
                    image: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: "w-full h-[200px] sm:h-[280px] lg:h-[360px] relative",
                    children: [(0, a.jsx)(n.default, {
                        src: s,
                        alt: "bannerheader",
                        fill: !0,
                        style: {
                            objectPosition: "center top",
                            transform: "scale(1)"
                        }
                    }), (0, a.jsx)("div", {
                        className: "absolute top-0 left-0 w-full h-full flex items-center justify-center text-center",
                        style: {
                            background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
                        },
                        children: t && (0, a.jsx)("h1", {
                            className: "text-white text-[24px] sm:text-[36px] lg:text-[45px] font-Emilio font-semibold text-center",
                            children: t
                        })
                    })]
                })
            }
        },
        94651: function(e, t, s) {
            "use strict";
            var a = s(57437);
            t.Z = () => (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)("div", {
                    className: "w-full  bg-primary h-[204px] flex flex-col items-center justify-center text-white leading-10 relative",
                    children: (0, a.jsxs)("div", {
                        className: "px-10 space-y-4",
                        children: [(0, a.jsx)("h1", {
                            className: "flex font-Emilio text-[18px] sm:text-[28px] leading-7",
                            children: "“ INDIA should lead the world. VIT should lead India ”"
                        }), (0, a.jsx)("h1", {
                            className: "justify-end flex text-[3.5vw] sm:text-[20px]  font-Montserrat font-[290] leading-5",
                            children: "- Dr. G. Viswanathan, Founder & Chancellor, VIT"
                        })]
                    })
                })
            })
        }
    },
    function(e) {
        e.O(0, [9293, 1465, 2420, 1787, 2502, 1582, 2306, 6115, 3712, 5878, 3203, 3984, 9137, 2971, 2117, 1744], function() {
            return e(e.s = 92799)
        }), _N_E = e.O()
    }
]);