(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        23394: function(e, t, l) {
            Promise.resolve().then(l.t.bind(l, 65878, 23)), Promise.resolve().then(l.t.bind(l, 72972, 23)), Promise.resolve().then(l.bind(l, 4109)), Promise.resolve().then(l.bind(l, 41862)), Promise.resolve().then(l.bind(l, 82198)), Promise.resolve().then(l.bind(l, 77440)), Promise.resolve().then(l.bind(l, 37557)), Promise.resolve().then(l.bind(l, 75740)), Promise.resolve().then(l.bind(l, 96435)), Promise.resolve().then(l.bind(l, 72035)), Promise.resolve().then(l.bind(l, 58204)), Promise.resolve().then(l.bind(l, 17764)), Promise.resolve().then(l.bind(l, 71951)), Promise.resolve().then(l.bind(l, 17315)), Promise.resolve().then(l.bind(l, 14164)), Promise.resolve().then(l.bind(l, 12775)), Promise.resolve().then(l.bind(l, 77255)), Promise.resolve().then(l.bind(l, 35951)), Promise.resolve().then(l.bind(l, 99411))
        },
        82198: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l(57437),
                a = l(83464),
                i = l(27648),
                r = l(2265),
                n = e => (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "",
                        children: [(0, s.jsx)("h1", {
                            className: "font-semibold text-[10px] md:text-[14px] font-Montserrat opacity-70 z-0",
                            children: e.date
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col  sm:block",
                            children: [(0, s.jsx)("h1", {
                                className: " items-center justify-center mt-2 font-bold text-secondary font-Montserrat text-[12px] sm:text-[16px] hover:text-primary hover:text-[13px] md:hover:text-[18px] ease-in duration-150",
                                children: (0, s.jsx)(i.default, {
                                    href: e.link,
                                    target: "#",
                                    children: e.title
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex justify-left",
                                children: (0, s.jsx)("hr", {
                                    className: "w-full mt-3 xl:w-3/4 h-[1px] bg-[#1B1C1E38] border-0"
                                })
                            })]
                        })]
                    })
                }),
                o = () => {
                    let [e, t] = (0, r.useState)([]);
                    return (0, r.useEffect)(() => {
                        (async () => {
                            try {
                                let e = await a.Z.get("".concat("https://cms.vitap.ac.in", "/api/home-page-announcements-sections?sort=id:ASC"), {
                                    headers: {
                                        Authorization: "Bearer ".concat("3e602eb0ea823444179f1baf562a6e3ef4b260b83908ba8ada025e67f8f279493f69268174f966c8cfabcf50396a50cb59db8f12cb369a5d5e86aa253551c030c98e1f0f940efb018185dd359a5461a8b472c1bca7b0da7b04ebd60b33019c22afe8a5ffdd05450b11e059a342ff9711c17a5e30bda15e120a895d9786ac254f")
                                    }
                                });
                                if (e.data && Array.isArray(e.data.data)) {
                                    let l = e.data.data.map(e => e.attributes);
                                    t(l)
                                } else console.error('The "data" property in the API response is not an array:', e.data)
                            } catch (e) {
                                console.error("Error fetching data:", e.message)
                            }
                        })()
                    }, []), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: " px-[30px]   lg:px-[50px] xl:px-[100px]  ",
                            children: (0, s.jsxs)("div", {
                                className: "md:flex md:flex-col lg:flex lg:flex-row sm:mt-[50px]  lg:space-x-[70px] mt-8  ",
                                children: [(0, s.jsxs)("div", {
                                    className: "lg:w-1/2  sm:w-full sm:text-center md:text-left sm:flex-col sm:justify-center md:justify-normal ",
                                    children: [(0, s.jsx)("h1", {
                                        className: "font-Emilio text-left text-[24px] sm:text-[36px] lg:text-[48px] text-primary font-bold mb-[9px]",
                                        children: "About VIT-AP"
                                    }), (0, s.jsx)("div", {
                                        className: "w-full sm:h-[330px] md:h-[400px] lg:h-[350px] xl:h-[350px]  h-[240px] shadow-xl rounded-[3px]  mt-5",
                                        children: (0, s.jsx)("iframe", {
                                            className: "w-full h-full rounded-[3px] ",
                                            src: "https://www.youtube.com/embed/qRJBQ9nKQG4?si=XRAUCNvFD2yv_wOW",
                                            title: "About VIT-AP ",
                                            frameBorder: "1",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-inpicture; web-share",
                                            allowFullScreen: !0
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "w-full",
                                        children: (0, s.jsxs)("p", {
                                            className: "font-Montserrat font-[680px]  text-justify text-[12px] md:text-[16px]  mt-[35px] leading-5 sm:leading-7 ",
                                            children: [(0, s.jsx)("span", {
                                                className: "text-3xl sm:text-5xl font-Emilio font-medium text-primary",
                                                children: "V"
                                            }), " IT has been a forerunner in delivering quality education. Consistently ranked among the top educational institutes in the country, the VIT group of institutions have had a proud tradition of pursuing knowledge and excellence. In keeping with this tradition, the leadership at VIT-AP resonates a dynamic blend of academic initiative and industry partnership with a vision of creating one of the finest academic destinations in the world."]
                                        })
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: " my-10 md:mt-10 lg:mt-0 lg:w-1/2 w-full sm:flex lg:pt-4 flex-col relative  ",
                                    children: [(0, s.jsx)("div", {
                                        className: "",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex  justify-between items-center",
                                            children: [(0, s.jsx)("h1", {
                                                className: " hidden md:block  md:text-[28px] lg:text-[24px] text-primary font-Emilio lg:font-Montserrat font-bold  md:text-left ",
                                                children: "ANNOUNCEMENTS"
                                            }), (0, s.jsx)("h1", {
                                                className: " text-[18px] block md:hidden text-primary font-Emilio lg:font-Montserrat font-bold  md:text-left ",
                                                children: "ANNOUNCEMENTS"
                                            })]
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex-col space-y-[20px] md:space-y-[28px] w-full mt-[20px] h-auto overflow-y-auto",
                                            children: e.slice(0, 6).map((e, t) => (0, s.jsx)(n, {
                                                date: e.Date,
                                                title: e.Title,
                                                link: e.Link
                                            }))
                                        }), (0, s.jsxs)(i.default, {
                                            href: "/announcements",
                                            className: " group mt-[20px] flex justify-start items-center",
                                            children: [(0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "group-hover:scale-50  group-hover:translate-x-28 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 z-10 w-[40px] h-[44px] relative left-[-28px]",
                                                viewBox: "0 0 14 16",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M0 0H9.1L14 8L9.1 16H0L3.85 8.18182L0 0Z",
                                                    fill: "#650010"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "relative w-16",
                                                children: [(0, s.jsx)("h1", {
                                                    className: "absolute top-2 right-[-17px] font-Montserrat text-[18px] w-[100px] font-[600] text-primary group-hover:translate-x-[-30px] duration-300 transition-all",
                                                    children: "View More"
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex ",
                                                    children: [(0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "23",
                                                        height: "44",
                                                        viewBox: "0 0 23 44",
                                                        fill: "none",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M9 0H23L14 44H0L9 0Z",
                                                            fill: "#E1CFD0"
                                                        })
                                                    }), (0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "23",
                                                        height: "44",
                                                        viewBox: "0 0 23 44",
                                                        fill: "none",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M9 0H23L14 44H0L9 0Z",
                                                            fill: "#E1CFD0"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        77440: function(e, t, l) {
            "use strict";
            var s = l(57437);
            l(95989);
            var a = l(83464),
                i = l(33145),
                r = l(2265);
            l(41044);
            var n = l(19764),
                o = l(73377);
            l(7354), l(86968), l(76889), l(35217), t.default = () => {
                let [e, t] = (0, r.useState)([]);
                (0, r.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await a.Z.get("".concat("https://cms.vitap.ac.in", "/api/home-page-cdc-scroll-images?populate=*"), {
                                headers: {
                                    Authorization: "Bearer ".concat("3e602eb0ea823444179f1baf562a6e3ef4b260b83908ba8ada025e67f8f279493f69268174f966c8cfabcf50396a50cb59db8f12cb369a5d5e86aa253551c030c98e1f0f940efb018185dd359a5461a8b472c1bca7b0da7b04ebd60b33019c22afe8a5ffdd05450b11e059a342ff9711c17a5e30bda15e120a895d9786ac254f")
                                }
                            });
                            if (e.data && Array.isArray(e.data.data)) {
                                let l = e.data.data.map(e => e.attributes);
                                t(l)
                            } else console.error('The "data" property in the API response is not an array:', e.data)
                        } catch (e) {
                            console.error("Error fetching data:", e.message), hidden
                        }
                    })()
                }, []);
                let [l, c] = (0, r.useState)(0), d = Array.from({
                    length: 1e3
                }, (t, l) => l % e.length).map(t => e[t]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: "w-full max-h-[350px] mx-auto bg-white hidden md:flex flex-col relative overflow-hidden justify-center items-center pb-[20px] sm:pb-[30px] lg:pb-[40px]",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 max-w-[250px] lg:max-w-[350px] xl:max-w-[500px] h-full w-full bg-[#650010]"
                        }), (0, s.jsx)("div", {
                            className: "w-full flex items-center justify-start z-10 pb-[20px] px-[20px] sm:px-[50px] lg:px-[100px] text-[24px] sm:text-[36px] lg:text-[48px] text-[#650010] font-semibold font-Emilio",
                            children: (0, s.jsx)("h1", {
                                className: "text-left ",
                                children: "Top Recruiters"
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center items-center gap-4 slide-track ",
                            children: d.map((e, t) => (0, s.jsx)("div", {
                                className: "hover:scale-105 rounded-[3px] shadow-xl min-w-[235px] lg:min-h-[150px] px-[24px] py-[12px] min-h-[130px] h-full relative slide overflow-hidden  transition-all bg-white duration-300 ease-in-out",
                                onClick: () => c(t),
                                children: (0, s.jsx)("div", {
                                    className: " relative w-full h-[130px] ",
                                    children: (0, s.jsx)(i.default, {
                                        src: null == e ? void 0 : e.Image.data.attributes.url,
                                        fill: !0,
                                        alt: "package",
                                        className: ""
                                    })
                                })
                            }, t))
                        })]
                    }), (0, s.jsx)("div", {
                        className: "w-full max-h-[5500px] bg-white hidden",
                        children: (0, s.jsxs)("div", {
                            className: "pt-[30px]",
                            children: [(0, s.jsx)("div", {
                                className: "text-center w-full h-full pb-[15px]",
                                children: (0, s.jsx)("h1", {
                                    className: "text-[24px] font-semibold font-Emilio text-[#650010] ",
                                    children: "Placement Spotlight"
                                })
                            }), (0, s.jsx)("div", {
                                className: "px-[100px] sm:px-[150px]",
                                children: (0, s.jsx)("div", {
                                    className: "w-full min-h-[170px] sm:min-h-[250px] relative ",
                                    children: (0, s.jsx)(i.default, {
                                        src: "/research.png",
                                        fill: !0
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "text-center w-full h-full py-[15px]",
                                children: (0, s.jsx)("div", {
                                    className: "px-[40px] sm:px-[80px]",
                                    children: (0, s.jsx)("p", {
                                        className: "text-[12px] sm:text-[16px] font-Montserrat font-normal ",
                                        children: "VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to nurturing industry-ready professionalg. Boasting a stellar track record, our students have secured coveted positions in leading companies. The testament to our rigorous academic curriculum and holistic development approach is evident in the remarkable success stories of our graduates"
                                    })
                                })
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "w-full max-h-[3000px] bg-white block md:hidden relative -z-20",
                        children: [(0, s.jsxs)("div", {
                            className: "min-h-[300px] w-full px-[20px] py-[30px] flex flex-col items-start justify-start text-left gap-[10px] relative z-10 bg-no-repeat bg-cover bg-center",
                            style: {
                                backgroundImage: "linear-gradient(rgba(101, 0, 16, 0.8), rgba(101,0, 16, 0.8)), url(/coebanner.png)"
                            },
                            children: [(0, s.jsx)("h1", {
                                className: "text-[24px] font-bold font-Emilio text-white",
                                children: "Placement Highlight"
                            }), (0, s.jsx)("p", {
                                className: "text-[14px] text-white font-normal font-Montserrat text-justify",
                                children: "At VIT-AP the entire teaching-learning process is concentrated around six schools. VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to nurturing industry-ready professionals. Boasting a stellar track record, our students have secured coveted positions in leading companies."
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-full max-h-full relative z-20 -mt-[50px]",
                            children: (0, s.jsx)(n.tq, {
                                modules: [o.W_, o.tl, o.LW, o.s5],
                                spaceBetween: 10,
                                slidesPerView: 1.75,
                                loop: !0,
                                loopedslides: 1,
                                centeredSlides: !0,
                                onSwiper: e => {},
                                onSlideChange: () => {},
                                className: "z-10",
                                children: [{
                                    id: 1,
                                    imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP1.avif"
                                }, {
                                    id: 2,
                                    imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP2.avif"
                                }, {
                                    id: 3,
                                    imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP3.avif"
                                }, {
                                    id: 4,
                                    imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP4.avif"
                                }, {
                                    id: 5,
                                    imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP5.avif"
                                }].map(e => (0, s.jsxs)(n.o5, {
                                    className: "rounded-[20px]",
                                    children: [" ", (0, s.jsx)("div", {
                                        className: "max-w-[220px] w-full h-[230px] relative border border-gray-500 bg-white",
                                        children: (0, s.jsx)(i.default, {
                                            src: null == e ? void 0 : e.imgUrl,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover"
                                        })
                                    })]
                                }, null == e ? void 0 : e.id))
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "w-full max-h-[150px] h-[100%] mx-auto bg-white md:hidden flex flex-col relative overflow-hidden justify-center items-center ",
                        children: [(0, s.jsx)("h1", {
                            className: "w-full text-left pb-[20px] pl-[20px] text-[16px] font-semibold text-[#650010] ",
                            children: "Top Recruiters"
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center items-center gap-2 slide-track",
                            children: d.map((e, t) => (0, s.jsx)("div", {
                                className: "w-[69px] h-[100%] hover:scale-105 rounded-[3px] min-h-[40px] relative slide overflow-hidden group transition-all duration-300 ease-in-out",
                                onClick: () => c(t),
                                children: (0, s.jsx)(i.default, {
                                    src: null == e ? void 0 : e.Image.data.attributes.url,
                                    fill: !0,
                                    alt: "package",
                                    className: ""
                                })
                            }, t))
                        })]
                    })]
                })
            }
        },
        37557: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return x
                }
            });
            var s = l(57437),
                a = l(18618),
                i = l(33145),
                r = l(27648),
                n = l(77763),
                o = () => (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: "z-10 absolute flex lg:hidden  text-white max-w-[500px] md:max-w-[2000px] text-center flex-col justify-center items-center top-[20vh] sm:top-[29vh] lg:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        children: [(0, s.jsxs)("h1", {
                            className: "text-[6.5vw] md:text-[4vw] lg:text-[1.8vw] font-semibold font-Emilio leading-tight",
                            children: ["Welcome to ", (0, s.jsx)("br", {}), " VIT-AP University"]
                        }), (0, s.jsxs)("h1", {
                            className: "text-[10px] font-Montserrat",
                            children: ["APPLY KNOWLEDGE, IMPROVE LIFE", (0, s.jsx)("sup", {
                                children: "\xae"
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "z-10 absolute hidden  text-white w-[50vw] text-left lg:flex flex-col   top-[35vh]  left-[10vw] ",
                        children: [(0, s.jsxs)("h1", {
                            className: "text-[5vw] font-semibold font-Emilio leading-tight",
                            children: ["Welcome to ", (0, s.jsx)("br", {}), " VIT-AP University"]
                        }), (0, s.jsxs)("h1", {
                            className: "text-[16px] md:text-[18px] lg:text-[20px] font-Montserrat",
                            children: ["APPLY KNOWLEDGE, IMPROVE LIFE", (0, s.jsx)("sup", {
                                children: "\xae"
                            })]
                        })]
                    })]
                }),
                c = () => (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "z-10 absolute hidden  text-white w-[50vw] text-left lg:flex flex-col   top-[35vh]  left-[10vw] ",
                        children: [(0, s.jsxs)("h1", {
                            className: "text-[5vw] font-semibold font-Emilio leading-tight",
                            children: ["CBN x ", (0, s.jsx)("br", {}), " VIT-AP University"]
                        }), (0, s.jsxs)("h1", {
                            className: "text-[16px] md:text-[18px] lg:text-[20px] font-Montserrat",
                            children: ["V-LaunchPad 2025 @ VIT-AP University", (0, s.jsx)("sup", {
                                children: "\xae"
                            })]
                        })]
                    })
                }),
                d = () => (0, s.jsx)("div", {
                    className: "bg-[#FDFFFF]",
                    children: (0, s.jsxs)(a.Carousel, {
                        loop: !0,
                        autoplay: !0,
                        className: "h-[40vh] lg:h-[100vh] w-full z-0 overflow-hidden",
                        prevArrow: e => {
                            let {
                                handlePrev: t
                            } = e;
                            return (0, s.jsx)(a.IconButton, {
                                variant: "text",
                                color: "white",
                                size: "lg",
                                onClick: t,
                                className: "!absolute top-2/4 left-[-810px] py-[500px] px-[500px] rounded-full -translate-y-2/4 z-50 pointer-events-auto",
                                children: (0, s.jsx)(n.sG8, {
                                    className: "ml-[730px] opacity-50",
                                    size: 50
                                })
                            })
                        },
                        nextArrow: e => {
                            let {
                                handleNext: t
                            } = e;
                            return (0, s.jsx)(a.IconButton, {
                                variant: "text",
                                color: "white",
                                size: "lg",
                                onClick: t,
                                className: "!absolute top-2/4 !right-[-810px] py-[500px] px-[500px] rounded-full -translate-y-2/4 z-50 pointer-events-auto",
                                children: (0, s.jsx)(n.AeI, {
                                    className: "mr-[730px]",
                                    size: 50
                                })
                            })
                        },
                        navigation: e => {
                            let {
                                setActiveIndex: t,
                                activeIndex: l,
                                length: a
                            } = e;
                            return (0, s.jsx)("div", {
                                className: "absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2",
                                children: Array(a).fill("").map((e, a) => (0, s.jsx)("span", {
                                    className: "block h-1 cursor-pointer rounded-2xl transition-all content-[''] ".concat(l === a ? "w-8 bg-white" : "w-4 bg-white/50"),
                                    onClick: () => t(a)
                                }, a))
                            })
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "w-full h-full object-cover relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute w-full h-full bg-black opacity-40 bg-gradient-to-t from-black z-10"
                            }), (0, s.jsxs)(r.default, {
                                href: "",
                                children: [(0, s.jsx)(c, {}), (0, s.jsx)(i.default, {
                                    src: "/AVIF_Images/Home_Page/hero/CMBanner_1.avif",
                                    alt: "pic1",
                                    className: "h-full w-full z-0",
                                    fill: !0,
                                    style: {
                                        objectPosition: "center top",
                                        transform: "scale(1)"
                                    }
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "w-full h-full object-cover relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute w-full h-full bg-black opacity-40 bg-gradient-to-t from-black z-10"
                            }), (0, s.jsxs)(r.default, {
                                href: "",
                                children: [(0, s.jsx)(c, {}), (0, s.jsx)(i.default, {
                                    src: "/AVIF_Images/Home_Page/hero/CMBanner_2.avif",
                                    alt: "pic2",
                                    className: "h-full w-full z-0",
                                    fill: !0,
                                    style: {
                                        objectPosition: "center top",
                                        transform: "scale(1)"
                                    }
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-full h-full object-cover relative",
                            children: (0, s.jsx)(r.default, {
                                href: "https://vitap.ac.in/ug-pg-admissions",
                                target: "_blank",
                                children: (0, s.jsx)(i.default, {
                                    src: "/AVIF_Images/Home_Page/hero/UGPGBanner2025.avif",
                                    alt: "UG/PG Banner",
                                    className: "h-full w-full z-0",
                                    fill: !0,
                                    style: {
                                        objectPosition: "center top",
                                        transform: "scale(1)"
                                    }
                                })
                            })
                        }), (0, s.jsxs)("div", {
                            className: "w-full h-full object-cover relative",
                            children: [(0, s.jsx)(o, {}), (0, s.jsx)("div", {
                                className: "absolute bg-fixed w-full h-full bg-black opacity-60 bg-gradient-to-t from-black"
                            }), (0, s.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                className: "h-full w-full object-cover",
                                children: (0, s.jsx)("source", {
                                    src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/intro_c60395eb0f.mp4"
                                })
                            })]
                        })]
                    })
                }),
                x = () => (0, s.jsx)("div", {
                    className: "bg-white",
                    children: (0, s.jsx)(d, {})
                })
        },
        75740: function(e, t, l) {
            "use strict";
            var s = l(57437);
            l(2265);
            var a = l(33145);
            t.default = () => (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: "hidden",
                    children: (0, s.jsx)("div", {
                        className: "w-full max-h-[1500px] bg-[#E8E8E8]",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col justify-center items-center min-h-[640px] sm:min-h-[740px] w-full relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute top-0 left-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[130px] sm:w-[230px] h-[112px] sm:h-[132px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore1.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute top-0 right-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[130px] sm:w-[230px] h-[112px] sm:h-[132px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore2.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute bottom-0 right-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[130px] sm:w-[230px] h-[112px] sm:h-[132px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore3.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute bottom-0 left-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[130px] sm:w-[230px] h-[112px] sm:h-[132px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore4.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute top-[20%] left-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[99px] sm:w-[150px] h-[136px] sm:h-[166px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore5.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute top-[20%] right-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[99px] sm:w-[150px] h-[136px] sm:h-[166px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore7.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute bottom-[20%] left-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[99px] sm:w-[150px] h-[136px] sm:h-[166px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore8.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "absolute bottom-[20%] right-0",
                                children: (0, s.jsx)("div", {
                                    className: "w-[99px] sm:w-[150px] h-[136px] sm:h-[166px] bg-black relative",
                                    children: (0, s.jsx)(a.default, {
                                        src: "/AVIF_Images/Explore/explore9.avif",
                                        alt: "lifeatvitap",
                                        fill: !0,
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "px-[40px] flex flex-col justify-center items-center gap-[15px] text-center",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[12px] sm:text-[14px] font-Emilio italic font-semibold text-[#650010]",
                                    children: "Explore our Campus"
                                }), (0, s.jsx)("h1", {
                                    className: "text-[20px] sm:text-[28px] font-Emilio font-semibold text-[#000]",
                                    children: "Life @ VIT-AP"
                                }), (0, s.jsx)("p", {
                                    className: "",
                                    children: "Experience the vibrant heart of our campus life at Vitap\xa0University."
                                }), (0, s.jsx)("button", {
                                    className: "bg-[#650010] px-[28px] py-[12px] mt-[15px] text-white rounded-3xl font-Montserrat uppercase text-[12px] sm:text-[14px]",
                                    children: "Explore"
                                })]
                            })]
                        })
                    })
                }), (0, s.jsxs)("div", {
                    className: "w-full max-h-[5000px] block md:hidden",
                    children: [(0, s.jsx)("a", {
                        href: "/campuslife",
                        target: "_blank",
                        children: (0, s.jsxs)("div", {
                            className: "w-full h-[240px] bg-center bg-no-repeat bg-cover flex flex-col p-[20px] ",
                            style: {
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifebackground.png')"
                            },
                            children: [(0, s.jsx)("div", {
                                className: "basis-[50%] flex items-start justify-center",
                                children: (0, s.jsx)("p", {
                                    className: "text-[24px] font-Emilio font-semibold text-[#650010]",
                                    children: "Life @ VIT-AP"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "basis-[50%] flex flex-col items-start justify-end",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[14px] lg:text-[17px] xl:text-[20px] font-Montserrat text-[#FDFEFF] font-normal leading-6 pb-[5px]",
                                    children: "Experience the vibrant heart of our campus life at VIT AP\xa0University."
                                }), (0, s.jsx)("a", {
                                    href: "/campuslife",
                                    className: " flex items-center text-center justify-start text-[white] hover:bg-[#650010] hover:text-white duration-200 ease-in text-[14px] font-Montserrat font-medium",
                                    children: "Explore more"
                                })]
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full h-[270px]",
                        children: [(0, s.jsx)("a", {
                            className: "basis-[50%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                            style: {
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifesports.png')"
                            },
                            href: "/sports",
                            target: "_blanks",
                            children: (0, s.jsx)("p", {
                                children: "Sports"
                            })
                        }), (0, s.jsxs)("a", {
                            href: "/cafeteria",
                            target: "_blank",
                            className: "basis-[50%] flex flex-col w-full h-full",
                            children: [(0, s.jsx)("div", {
                                className: "basis-[70%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                                style: {
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifecafeteria.png')"
                                },
                                children: (0, s.jsx)("p", {
                                    children: "Cafeteria"
                                })
                            }), (0, s.jsx)("div", {
                                className: "basis-[30%] bg-[#650010] w-full h-full text-white font-Emilio font-normal text-[14px] p-[15px] flex flex-col justify-end items-start",
                                children: (0, s.jsx)("p", {
                                    children: "Explore the vibrant Life at VIT-AP"
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "w-full h-[170px] flex",
                        children: [(0, s.jsx)("a", {
                            href: "/hostels",
                            target: "_blank",
                            className: "basis-[50%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                            style: {
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifehostel.png')"
                            },
                            children: (0, s.jsx)("p", {
                                children: "Hostel"
                            })
                        }), (0, s.jsx)("a", {
                            href: "/celebrations",
                            target: "_blank",
                            className: "basis-[50%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                            style: {
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifecelebrations.png')"
                            },
                            children: (0, s.jsx)("p", {
                                children: "Celebrations"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full h-[270px] flex-row-reverse",
                        children: [(0, s.jsx)("a", {
                            href: "/clubs-and-chapters",
                            target: "_blank",
                            className: "basis-[50%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                            style: {
                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifeclubs.png')"
                            },
                            children: (0, s.jsx)("p", {
                                children: "Clubs & Chapters"
                            })
                        }), (0, s.jsxs)("a", {
                            href: "/library",
                            target: "_blank",
                            className: "basis-[50%] flex flex-col-reverse w-full h-full",
                            children: [(0, s.jsx)("div", {
                                className: "basis-[70%] w-full h-full flex flex-col items-start justify-end bg-center bg-cover bg-no-repeat p-[20px]  text-[18px] font-Emilio text-white font-normal",
                                style: {
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/lifelibrary.png')"
                                },
                                children: (0, s.jsx)("p", {
                                    children: "Library"
                                })
                            }), (0, s.jsx)("div", {
                                className: "basis-[30%] bg-[#650010] w-full h-full text-white font-Emilio font-normal text-[14px] p-[15px] flex flex-col justify-end items-start",
                                children: (0, s.jsx)("p", {
                                    children: "The Lively Unforgettable Experience"
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        58204: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return A
                }
            });
            var s = l(57437),
                a = l(2265),
                i = l(33145),
                r = l(43147),
                n = l.n(r),
                o = l(27648),
                c = l(21151);
            let d = [{
                id: 1,
                imgUrl: "/assets/images/newsPhotos/aimusic.avif",
                title: "First-ever AI musical concert held at VIT-AP University",
                content: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
            }, {
                id: 2,
                imgUrl: "/assets/images/newsPhotos/5.avif",
                title: "3rd Annual Convocation - 2023",
                content: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
            }, {
                id: 3,
                imgUrl: "/assets/images/newsPhotos/nationn.avif",
                title: "VIT-AP Highest Placement Package",
                content: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
            }];
            var x = l(83464),
                m = l(19764),
                h = l(73377);
            l(7354), l(86968), l(76889), l(35217);
            var A = () => {
                let [e, t] = (0, a.useState)(0), [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await x.Z.get("".concat("https://cms.vitap.ac.in", "/api/schools-page-news?populate=*&sort=Date:DESC&filters[$and][0][Type][$eq]=News"), {
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
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "hidden overflow-hidden ",
                        children: (0, s.jsxs)("div", {
                            className: "bg-white   w-full lg:py-[80px] sm:py-[40px] py-[20px] relative",
                            children: [(0, s.jsxs)("div", {
                                className: " flex justify-between  w-full px-[50px] lg:px-[100px] pb-[20px]",
                                children: [(0, s.jsx)("h2", {
                                    className: "  text-[#51060D] font-Emilio  font-[600] text-[48px] ",
                                    children: "News"
                                }), (0, s.jsxs)(o.default, {
                                    href: "/news",
                                    className: " group   flex justify-end items-center",
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "group-hover:scale-50  group-hover:translate-x-28 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 z-10 w-[40px] h-[44px] relative left-[-28px]",
                                        viewBox: "0 0 14 16",
                                        fill: "none",
                                        children: (0, s.jsx)("path", {
                                            d: "M0 0H9.1L14 8L9.1 16H0L3.85 8.18182L0 0Z",
                                            fill: "#650010"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "relative w-16",
                                        children: [(0, s.jsx)("h1", {
                                            className: "absolute top-2 right-[-17px] font-Montserrat text-[18px] w-[100px] font-[600] text-primary group-hover:translate-x-[-30px] duration-300 transition-all",
                                            children: "View More"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex ",
                                            children: [(0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            }), (0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "h-[350px] bg-[#650010] absolute bottom-0 left-0 w-full"
                            }), (0, s.jsx)("div", {
                                className: "px-[30px]",
                                children: (0, s.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-5 md:px-[20px]  max-w-[1320px] mx-auto justify-center items-center h-[640px] relative",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute top-0 left-0 w-[100px] h-[100px] border-[#650010] border-4 border-r-0 border-b-0 "
                                    }), (0, s.jsx)("div", {
                                        className: "absolute top-0 left-[45%] w-[100px] h-[100px] border-[#650010] border-4 border-r-0 border-b-0 border-l-0"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute bottom-0 left-[45%] w-[100px] h-[100px] border-[#fff] border-4 border-t-0 border-l-0 border-r-0"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute bottom-0 right-0 w-[100px] h-[100px] border-[#fff] border-4 border-l-0 border-t-0"
                                    }), l.slice(0, 3).map(t => {
                                        var l;
                                        return (0, s.jsx)("div", {
                                            children: (0, s.jsx)("div", {
                                                className: " w-full justify-center ",
                                                children: (0, s.jsxs)("div", {
                                                    className: "max-w-[392px] min-h-[450px] h-full  shadow-2xl bg-[#FDFEFF]  transition-transform transform hover:scale-105 duration-300  group  cursor-pointer",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "max-w-[392px] h-[280px] relative ",
                                                        children: (0, s.jsx)(i.default, {
                                                            src: null === (l = t.Image) || void 0 === l ? void 0 : l.data.attributes.url,
                                                            fill: !0,
                                                            className: "top-[223px] left-[108px]"
                                                        })
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex flex-col px-4",
                                                        children: [(0, s.jsxs)("div", {
                                                            className: "space-y-3 ",
                                                            children: [(0, s.jsx)("p", {
                                                                className: "mt-[8px] font-semibold font-Montserrat text-[16px]",
                                                                children: t.Date
                                                            }), (0, s.jsx)("h3", {
                                                                className: "text-[#650010] h-[140px] font-Emilio text-[24px] ",
                                                                children: t.Title
                                                            })]
                                                        }), (0, s.jsx)(o.default, {
                                                            href: "/news/newsdetail/" + t.slug,
                                                            className: "flex  mb-[20px]  rounded-full group-hover:bg-[#5C0E14]",
                                                            children: (0, s.jsxs)("div", {
                                                                className: "w-[30px] h-[30px] bg-[#5C0E14] rounded-full duration-300 group-hover:w-[230px] group-hover:h-[40px] group-hover:bg-[#5C0E14] flex justify-center items-center ",
                                                                children: [(0, s.jsx)(c.Z1Y, {
                                                                    size: 12,
                                                                    className: "group-hover:hidden",
                                                                    color: "white"
                                                                }), (0, s.jsxs)("div", {
                                                                    className: "flex space-x-2 items-center ",
                                                                    children: [(0, s.jsx)("h1", {
                                                                        className: "text-white hidden group-hover:block font-Montserrat text-[10px]",
                                                                        children: "EXPLORE NEWS"
                                                                    }), (0, s.jsx)(c.Z1Y, {
                                                                        size: 12,
                                                                        className: "group-hover:block hidden",
                                                                        color: "white"
                                                                    })]
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }, d[e].id)
                                            })
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("button", {
                                className: "".concat(n().b1, " w-[60px] h-[60px] text-[30px] bg-[#E6CFCF] hidden"),
                                children: "<"
                            }), (0, s.jsx)("button", {
                                className: "".concat(n().b2, " w-[60px] h-[60px] text-[30px] bg-[#E6CFCF] hidden"),
                                children: ">"
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "w-full max-h-[5000px] block md:hidden",
                        children: (0, s.jsxs)("div", {
                            className: "p-[20px] flex flex-col gap-[20px]",
                            children: [(0, s.jsxs)("div", {
                                className: "w-full flex flex-row justify-between py-5 sm:py-10",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-[#51060D] font-Emilio block md:hidden font-semibold text-[24px] ",
                                    children: "News"
                                }), (0, s.jsxs)(o.default, {
                                    href: "/news",
                                    className: " group relative flex justify-end items-center",
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "group-hover:scale-50 group-hover:translate-x-28 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 z-10 w-[40px] h-[44px] relative left-[-28px]",
                                        viewBox: "0 0 14 16",
                                        fill: "none",
                                        children: (0, s.jsx)("path", {
                                            d: "M0 0H9.1L14 8L9.1 16H0L3.85 8.18182L0 0Z",
                                            fill: "#650010"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "relative w-16",
                                        children: [(0, s.jsx)("h1", {
                                            className: "absolute top-3 md:top-2 right-[-10px] md:right-[-17px] font-Montserrat text-[12px] md:text-[18px] w-[100px] font-[600] text-primary group-hover:translate-x-[-10px] md:group-hover:translate-x-[-30px] duration-300 transition-all",
                                            children: "View More"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex ",
                                            children: [(0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            }), (0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                children: (0, s.jsx)(m.tq, {
                                    modules: [h.W_, h.tl, h.LW, h.s5, h.pt],
                                    spaceBetween: 10,
                                    slidesPerView: 1.2,
                                    loop: !0,
                                    autoplay: !0,
                                    delay: 3e3,
                                    loopedslides: 1,
                                    centeredSlides: !0,
                                    onSwiper: e => {},
                                    onSlideChange: () => {},
                                    className: "z-10",
                                    children: l.map(e => {
                                        var t;
                                        return (0, s.jsxs)(m.o5, {
                                            className: "rounded-[20px] w-[280px]",
                                            children: [" ", (0, s.jsxs)("div", {
                                                className: "w-[280px] min-h-[400px] mx-auto h-full  shadow-2xl bg-[#FDFEFF]  transition-transform transform duration-300  group  cursor-pointer",
                                                children: [(0, s.jsx)("div", {
                                                    className: "w-[280px] h-[280px] relative ",
                                                    children: (0, s.jsx)(i.default, {
                                                        src: null === (t = e.Image) || void 0 === t ? void 0 : t.data.attributes.url,
                                                        fill: !0,
                                                        className: "top-[223px] left-[108px]"
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col px-4",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "space-y-3 ",
                                                        children: [(0, s.jsx)("p", {
                                                            className: "mt-[8px] font-semibold font-Montserrat text-[16px]",
                                                            children: null == e ? void 0 : e.Date
                                                        }), (0, s.jsx)("h3", {
                                                            className: "text-[#650010] h-[140px] font-Emilio text-[18px] ",
                                                            children: null == e ? void 0 : e.Title
                                                        })]
                                                    }), (0, s.jsx)(o.default, {
                                                        href: "/news/newsdetail/",
                                                        className: "flex  mb-[20px]  rounded-full group-hover:bg-[#5C0E14]",
                                                        children: (0, s.jsx)("div", {
                                                            className: " h-[30px] bg-[#5C0E14] rounded-full duration-300 w-[230px] group-hover:h-[30px] group-hover:bg-[#5C0E14] flex justify-center items-center ",
                                                            children: (0, s.jsxs)("div", {
                                                                className: "flex space-x-2 items-center ",
                                                                children: [(0, s.jsx)("h1", {
                                                                    className: "text-white block font-Montserrat text-[10px]",
                                                                    children: "EXPLORE NEWS"
                                                                }), (0, s.jsx)(c.Z1Y, {
                                                                    size: 12,
                                                                    className: "block ",
                                                                    color: "white"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }, null == e ? void 0 : e.id)
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        17764: function(e, t, l) {
            "use strict";
            var s = l(57437),
                a = l(33145),
                i = l(27648),
                r = l(2265),
                n = l(83464);
            t.default = () => {
                let [e, t] = (0, r.useState)(0), [l, o] = (0, r.useState)([]);
                return (0, r.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await n.Z.get("".concat("https://cms.vitap.ac.in", "/api/schools-page-news?populate=*&sort=Date:DESC&filters[$and][0][Type][$eq]=News"), {
                                headers: {
                                    Authorization: "Bearer ".concat("3e602eb0ea823444179f1baf562a6e3ef4b260b83908ba8ada025e67f8f279493f69268174f966c8cfabcf50396a50cb59db8f12cb369a5d5e86aa253551c030c98e1f0f940efb018185dd359a5461a8b472c1bca7b0da7b04ebd60b33019c22afe8a5ffdd05450b11e059a342ff9711c17a5e30bda15e120a895d9786ac254f")
                                }
                            });
                            if (e.data && Array.isArray(e.data.data)) {
                                let t = e.data.data.map(e => e.attributes);
                                o(t)
                            } else console.error('The "data" property in the API response is not an array:', e.data)
                        } catch (e) {
                            console.error("Error fetching data:", e.message), hidden
                        }
                    })()
                }, []), (0, s.jsxs)("div", {
                    className: "bg-white hidden md:block",
                    children: [(0, s.jsx)("div", {
                        style: {
                            width: "100%"
                        },
                        children: (0, s.jsxs)("svg", {
                            width: "100%",
                            height: "auto",
                            viewBox: "0 0 1440 39",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("path", {
                                d: "M0 0L1440 0L1332 39H108L0 0Z",
                                fill: "url(#paint0_linear_42_14638)"
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsxs)("linearGradient", {
                                    id: "paint0_linear_42_14638",
                                    x1: "720",
                                    y1: "0",
                                    x2: "720",
                                    y2: "65.5",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, s.jsx)("stop", {
                                        stopColor: "#650010"
                                    }), (0, s.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#CB0020"
                                    })]
                                })
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "w-full max-h-[5000px] bg-white",
                        children: (0, s.jsxs)("div", {
                            className: "w-full h-full px-[20px] sm:px-[50px] lg:px-[100px] py-[20px] sm:py-[40px]",
                            children: [(0, s.jsxs)("div", {
                                className: " flex justify-between w-full items-center",
                                children: [(0, s.jsx)("h2", {
                                    className: "  text-[#51060D] font-Emilio  font-[600] text-[48px] ",
                                    children: "News"
                                }), (0, s.jsxs)(i.default, {
                                    href: "/news",
                                    className: " group   flex justify-end items-center",
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "group-hover:scale-50  group-hover:translate-x-28 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 z-10 w-[40px] h-[44px] relative left-[-28px]",
                                        viewBox: "0 0 14 16",
                                        fill: "none",
                                        children: (0, s.jsx)("path", {
                                            d: "M0 0H9.1L14 8L9.1 16H0L3.85 8.18182L0 0Z",
                                            fill: "#650010"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "relative w-16",
                                        children: [(0, s.jsx)("h1", {
                                            className: "absolute top-2 right-[-17px] font-Montserrat text-[18px] w-[100px] font-[600] text-primary group-hover:translate-x-[-30px] duration-300 transition-all",
                                            children: "View More"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex ",
                                            children: [(0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            }), (0, s.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "23",
                                                height: "44",
                                                viewBox: "0 0 23 44",
                                                fill: "none",
                                                children: (0, s.jsx)("path", {
                                                    d: "M9 0H23L14 44H0L9 0Z",
                                                    fill: "#E1CFD0"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-full grid grid-cols-2 lg:grid-cols-3 transition ease-in-out duration-500 items-center justify-center sm:gap-[20px] lg:gap-[25px] mt-[20px]",
                                children: l.slice(0, 3).map((e, t) => {
                                    var l;
                                    return (0, s.jsxs)("div", {
                                        className: "min-h-[620px] flex flex-col group ",
                                        children: [(0, s.jsx)("div", {
                                            className: "h-[390px] w-full relative",
                                            children: (0, s.jsx)(a.default, {
                                                src: null === (l = e.Image) || void 0 === l ? void 0 : l.data.attributes.url,
                                                alt: "homenews",
                                                fill: !0
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "w-full h-[178px] group-hover:h-[228px] transition-all ease-in-out duration-300 bg-[#650010] p-[25px] flex flex-col gap-[25px]",
                                            children: [(0, s.jsxs)("p", {
                                                className: "text-[14px] sm:text-[16px] text-[#FDFEFF] font-normal font-Montserrat",
                                                children: ["Date: ", e.Date]
                                            }), (0, s.jsxs)("p", {
                                                className: "text-[16px] sm:text-[18px] text-[#FDFEFF] font-semibold font-Emilio",
                                                children: [e.Title, " "]
                                            }), (0, s.jsxs)(i.default, {
                                                href: "/news/newsdetail/" + e.slug,
                                                className: "group-hover:inline-flex hidden mt-[20px] transition-all ease-in-out duration-700 items-center justify-start gap-[15px] cursor-pointer",
                                                children: [(0, s.jsx)("div", {
                                                    className: "w-[40px] h-[40px] bg-[white] flex items-center justify-center rounded-[50%]",
                                                    children: (0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "18",
                                                        height: "14",
                                                        viewBox: "0 0 18 14",
                                                        fill: "none",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M17.3635 7.37629C17.5509 7.18876 17.6562 6.93445 17.6562 6.66929C17.6562 6.40412 17.5509 6.14982 17.3635 5.96229L11.7065 0.305288C11.6142 0.209778 11.5039 0.133596 11.3819 0.0811869C11.2599 0.0287779 11.1286 0.00119157 10.9959 3.77564e-05C10.8631 -0.00111606 10.7314 0.0241859 10.6085 0.0744668C10.4856 0.124748 10.374 0.199001 10.2801 0.292893C10.1862 0.386786 10.1119 0.498438 10.0616 0.621334C10.0114 0.744231 9.98606 0.87591 9.98721 1.00869C9.98837 1.14147 10.016 1.27269 10.0684 1.39469C10.1208 1.5167 10.197 1.62704 10.2925 1.71929L14.2425 5.66929L0.999464 5.66929C0.734247 5.66929 0.479893 5.77465 0.292356 5.96218C0.10482 6.14972 -0.000535965 6.40407 -0.000535965 6.66929C-0.000535965 6.9345 0.10482 7.18886 0.292356 7.37639C0.479893 7.56393 0.734247 7.66929 0.999464 7.66929L14.2425 7.66929L10.2925 11.6193C10.1103 11.8079 10.0095 12.0605 10.0118 12.3227C10.0141 12.5849 10.1192 12.8357 10.3046 13.0211C10.4901 13.2065 10.7409 13.3117 11.0031 13.314C11.2653 13.3162 11.5179 13.2154 11.7065 13.0333L17.3635 7.37629Z",
                                                            fill: "#650010"
                                                        })
                                                    })
                                                }), (0, s.jsx)("p", {
                                                    className: "text-[white] text-[14px] sm:text-[16px] font-Montserrat font-medium",
                                                    children: "EXPLORE NEWS"
                                                })]
                                            })]
                                        })]
                                    }, t)
                                })
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        style: {
                            width: "100%"
                        },
                        children: (0, s.jsxs)("svg", {
                            width: "100%",
                            height: "auto",
                            viewBox: "0 0 1440 39",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("path", {
                                d: "M0 39L1440 39L1332 0H108L0 39Z",
                                fill: "url(#paint0_linear_42_14659)"
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsxs)("linearGradient", {
                                    id: "paint0_linear_42_14659",
                                    x1: "720",
                                    y1: "39",
                                    x2: "720",
                                    y2: "-26.5",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, s.jsx)("stop", {
                                        stopColor: "#650010"
                                    }), (0, s.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#CB0020"
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        71951: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return m
                }
            });
            var s = l(57437),
                a = l(27648),
                i = l(2265),
                r = l(33145);
            l(77533);
            var n = e => {
                    let {
                        imgSrc: t,
                        title: l,
                        day: a,
                        month: i,
                        slug: n
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "w-[300px] relative group cursor-pointer h-full mt-16 sm:mt-20",
                            children: [(0, s.jsxs)("div", {
                                className: "absolute flex top-[-55px]",
                                children: [(0, s.jsx)("h1", {
                                    className: " stroke-text font-[700] group-hover:left-[-32px] sm:group-hover:left-[-42px] top-[15px] sm:top-[-15px] group-hover:top-[10px] sm:group-hover:top-[-35px] group-hover:scale-75  sm:group-hover:scale-50  group-hover:translate-y-[-28px] left-[-9px] sm:left-[-15px] transition-all duration-500 bottom-5 relative z-10 font-Montserrat text-[56px] sm:text-[96px] bg-[#650010] bg-gradient-to-b from-[#990B21] via-red-[#650010] to-red-[#990B21] bg-clip-text text-transparent",
                                    children: a
                                }), (0, s.jsx)("span", {
                                    className: " stroke-text  font-[800] group-hover:top-[0px] group-hover:left-[-30px] sm:group-hover:left-[-60px] top-3 sm:top-0  sm:group-hover:top-[-23px] left-3 sm:left-0 relative transition-all duration-500  z-10 font-Montserrat text-[33px] sm:text-[43px] bg-[#650010] bg-gradient-to-b from-[#990B21] via-red-[#650010] to-red-[#990B21] bg-clip-text text-transparent ",
                                    children: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(i) - 1]
                                })]
                            }), (0, s.jsx)("a", {
                                href: "/events/eventdetail/".concat(n),
                                children: (0, s.jsxs)("div", {
                                    className: "w-[200px] sm:w-[300px] sm:h-[300px] h-[200px] relative group-hover:scale-110 duration-300 transition-all shadow-custom ",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute w-full h-full bg-[#000000] bg-opacity-20 transition-all duration-500"
                                    }), (0, s.jsx)(r.default, {
                                        src: t,
                                        fill: !0,
                                        className: ""
                                    })]
                                })
                            }), (0, s.jsx)("h1", {
                                className: "font-Emilio text-[16px] sm:text-[20px] font-[600]  text-black  leading-[30px]  group-hover:mt-[20px] mt-[12px] transition-all duration-500",
                                children: l
                            })]
                        })
                    })
                },
                o = l(19764);
            l(7354), l(76889), l(9809);
            var c = l(73377),
                d = e => {
                    let {
                        data: t
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(o.tq, {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                            pagination: {
                                clickable: !0,
                                el: ".swiper-pagination",
                                type: "bullets"
                            },
                            modules: [c.tl],
                            className: "mySwiper",
                            children: t.map((e, t) => {
                                var l;
                                return (0, s.jsx)("div", {
                                    children: (0, s.jsx)(o.o5, {
                                        children: (0, s.jsx)(n, {
                                            imgSrc: null == e ? void 0 : null === (l = e.Image) || void 0 === l ? void 0 : l.data.attributes.url,
                                            title: e.Title,
                                            day: null == e ? void 0 : e.Date.split("-")[2],
                                            month: null == e ? void 0 : e.Date.split("-")[1],
                                            slug: e.slug
                                        })
                                    })
                                }, t)
                            })
                        })
                    })
                },
                x = l(83464),
                m = () => {
                    var e, t, l, o, c, m, h, A, p, f, u, g, b, v, j, w, N, y;
                    let [E, C] = (0, i.useState)([]);
                    return (0, i.useEffect)(() => {
                        (async () => {
                            try {
                                let e = await x.Z.get("".concat("https://cms.vitap.ac.in", "/api/schools-page-news?populate=*&sort=Date:DESC&filters[$and][0][Type][$eq]=Event"), {
                                    headers: {
                                        Authorization: "Bearer ".concat("3e602eb0ea823444179f1baf562a6e3ef4b260b83908ba8ada025e67f8f279493f69268174f966c8cfabcf50396a50cb59db8f12cb369a5d5e86aa253551c030c98e1f0f940efb018185dd359a5461a8b472c1bca7b0da7b04ebd60b33019c22afe8a5ffdd05450b11e059a342ff9711c17a5e30bda15e120a895d9786ac254f")
                                    }
                                });
                                if (e.data && Array.isArray(e.data.data)) {
                                    let t = e.data.data.map(e => e.attributes);
                                    C(t)
                                } else console.error('The "data" property in the API response is not an array:', e.data)
                            } catch (e) {
                                console.error("Error fetching data:", e.message), hidden
                            }
                        })()
                    }, []), (0, s.jsxs)("div", {
                        className: "w-full h-auto  pb-14 px-[24px] md:px-[50px] xl:px-[100px]  justify-between overflow-hidden  relative",
                        children: [(0, s.jsx)(r.default, {
                            className: "absolute opacity-10 object-cover",
                            src: "/AVIF_Images/Home_Page/ourevents/5.avif",
                            fill: !0
                        }), (0, s.jsxs)("div", {
                            className: " mt-[40px] w-full",
                            children: [(0, s.jsxs)("div", {
                                className: "w-full flex justify-between",
                                children: [(0, s.jsx)("h1", {
                                    className: "text-[24px]  sm:text-[30px] md:text-[48px] text-primary font-Emilio  font-[700] z-10",
                                    children: "Events"
                                }), (0, s.jsxs)(a.default, {
                                    href: "/events",
                                    className: " group relative flex justify-end items-center",
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "group-hover:scale-50  group-hover:translate-x-28 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 z-10 w-[40px] h-[44px] relative left-[-28px]",
                                        viewBox: "0 0 14 16",
                                        fill: "none",
                                        children: (0, s.jsx)("path", {
                                            d: "M0 0H9.1L14 8L9.1 16H0L3.85 8.18182L0 0Z",
                                            fill: "#650010"
                                        })
                                    }), (0, s.jsx)("a", {
                                        href: "/events",
                                        className: "z-10",
                                        children: (0, s.jsxs)("div", {
                                            className: "relative w-16",
                                            children: [(0, s.jsx)("h1", {
                                                className: "absolute top-3 md:top-2 right-[-17px] font-Montserrat text-[12px] md:text-[18px] w-[100px] font-[600] text-primary md:group group-hover:translate-x-[-30px] duration-300 transition-all",
                                                children: "View More"
                                            }), (0, s.jsxs)("div", {
                                                className: "flex ",
                                                children: [(0, s.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "23",
                                                    height: "44",
                                                    viewBox: "0 0 23 44",
                                                    fill: "none",
                                                    children: (0, s.jsx)("path", {
                                                        d: "M9 0H23L14 44H0L9 0Z",
                                                        fill: "#E1CFD0"
                                                    })
                                                }), (0, s.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "23",
                                                    height: "44",
                                                    viewBox: "0 0 23 44",
                                                    fill: "none",
                                                    children: (0, s.jsx)("path", {
                                                        d: "M9 0H23L14 44H0L9 0Z",
                                                        fill: "#E1CFD0"
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-primary font-[500] text-[16px] md:text-[18px] max-w-[700px] mt-4  md:mt-0",
                                children: "Discover VIT-AP's vibrant scene: upcoming cultural events, local festivals, educational workshops, sports competitions, and community gatherings. A hub of excitement, diversity, and learning for all ages"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: " justify-evenly mt-[-40px] md:mt-8 w-full md:space-x-12  hidden md:flex",
                            children: [(0, s.jsx)("div", {
                                className: "relative top-[30px]",
                                children: (0, s.jsx)(n, {
                                    imgSrc: null === (t = E[0]) || void 0 === t ? void 0 : null === (e = t.Image) || void 0 === e ? void 0 : e.data.attributes.url,
                                    title: null === (l = E[0]) || void 0 === l ? void 0 : l.Title,
                                    day: null === (o = E[0]) || void 0 === o ? void 0 : o.Date.split("-")[2],
                                    month: null === (c = E[0]) || void 0 === c ? void 0 : c.Date.split("-")[1],
                                    slug: null === (m = E[0]) || void 0 === m ? void 0 : m.slug
                                })
                            }), (0, s.jsx)("div", {
                                className: "relative top-[-50px] ",
                                children: (0, s.jsx)(n, {
                                    imgSrc: null === (A = E[1]) || void 0 === A ? void 0 : null === (h = A.Image) || void 0 === h ? void 0 : h.data.attributes.url,
                                    title: null === (p = E[1]) || void 0 === p ? void 0 : p.Title,
                                    day: null === (f = E[1]) || void 0 === f ? void 0 : f.Date.split("-")[2],
                                    month: null === (u = E[1]) || void 0 === u ? void 0 : u.Date.split("-")[1],
                                    slug: null === (g = E[1]) || void 0 === g ? void 0 : g.slug
                                })
                            }), (0, s.jsx)("div", {
                                className: "relative top-[-150px] hidden lg:block",
                                children: (0, s.jsx)(n, {
                                    imgSrc: null === (v = E[2]) || void 0 === v ? void 0 : null === (b = v.Image) || void 0 === b ? void 0 : b.data.attributes.url,
                                    title: null === (j = E[2]) || void 0 === j ? void 0 : j.Title,
                                    day: null === (w = E[2]) || void 0 === w ? void 0 : w.Date.split("-")[2],
                                    month: null === (N = E[2]) || void 0 === N ? void 0 : N.Date.split("-")[1],
                                    slug: null === (y = E[2]) || void 0 === y ? void 0 : y.slug
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "md:hidden block",
                            children: (0, s.jsx)(d, {
                                data: E.slice(0, 3)
                            })
                        })]
                    })
                }
        },
        17315: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return u
                }
            });
            var s = l(57437),
                a = l(27648),
                i = l(2265),
                r = l(56321),
                n = l(77763),
                o = l(33145),
                c = l(32970),
                d = e => {
                    let {
                        imgsrc: t,
                        href: l,
                        title: i
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: "w-[270px] h-[270px]  relative group overflow-hidden",
                            children: (0, s.jsxs)(a.default, {
                                href: l,
                                target: "_blank",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute w-full h-full bg-black"
                                }), (0, s.jsx)(o.default, {
                                    src: t,
                                    className: "opacity-70 transition-transform transform scale-100 group-hover:scale-105 duration-500",
                                    layout: "fill",
                                    objectFit: "cover"
                                }), (0, s.jsxs)("div", {
                                    className: "absolute top-[190px] text-white  px-[14px] font-semibold flex-col ",
                                    children: [(0, s.jsx)("h1", {
                                        className: "leading-[23px] font-Emilio text-[20px]",
                                        children: i
                                    }), (0, s.jsxs)("h1", {
                                        className: "font-Montserrat text-[13px] font-medium flex items-center",
                                        children: ["Explore Now", " ", (0, s.jsx)("span", {
                                            children: (0, s.jsx)(c.UE1, {
                                                size: 23
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                x = l(19764),
                m = l(5674);
            l(7354), l(76889), l(31403);
            var h = l(73377);
            let A = [{
                id: 1,
                title: "School of Computer Science and Engineering",
                href: "/allschools/scope",
                imgsrc: "/AVIF_Images/Home_Page/schools/SCOPE.avif"
            }, {
                id: 2,
                title: "School of Electronics and  Engineering",
                href: "/allschools/sense",
                imgsrc: "/AVIF_Images/Home_Page/schools/SENSE.avif"
            }, {
                id: 3,
                title: "School of Mechanical Engineering",
                href: "/allschools/smec",
                imgsrc: "/AVIF_Images/Home_Page/schools/SMEC.avif"
            }, {
                id: 4,
                title: "School of Advanced Sciences",
                href: "/allschools/sas",
                imgsrc: "/AVIF_Images/Home_Page/schools/SAS.avif"
            }, {
                id: 5,
                title: "School of Social Sciences and Humanities",
                href: "/allschools/vish",
                imgsrc: "/AVIF_Images/Home_Page/schools/VISH.avif"
            }, {
                id: 6,
                title: "School of Law",
                href: "/allschools/vsl",
                imgsrc: "/AVIF_Images/Home_Page/schools/VSL.avif"
            }, {
                id: 7,
                title: "School of Business",
                href: "/allschools/vsb",
                imgsrc: "/AVIF_Images/Home_Page/schools/VSB.avif"
            }];
            var p = () => (0, s.jsx)("div", {
                className: "px-[20px]",
                children: (0, s.jsx)(x.tq, {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    pagination: {
                        clickable: !0,
                        el: ".swiper-pagination",
                        type: "bullets"
                    },
                    modules: [h.tl],
                    className: "mySwiper",
                    children: A.map(e => (0, s.jsx)(x.o5, {
                        children: (0, s.jsxs)("a", {
                            className: "flex flex-col bg-[#eeeeee]",
                            href: e.href,
                            children: [(0, s.jsx)("img", {
                                src: e.imgsrc,
                                width: 140,
                                height: 140
                            }), (0, s.jsxs)("div", {
                                className: " px-2 py-4 space-y-2 w-full",
                                children: [(0, s.jsx)("h1", {
                                    className: "  text-primary text-left font-Emilio font-[500] text-[16px]",
                                    children: e.title
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [(0, s.jsx)("h1", {
                                        className: "text-[9px] font-Montserrat text-black font-[500]",
                                        children: "Explore Now"
                                    }), (0, s.jsx)(m.Z1Y, {
                                        className: "opacity-80",
                                        size: 9
                                    })]
                                })]
                            })]
                        })
                    }))
                })
            });
            let f = [{
                id: 1,
                title: "School of Computer Science and Engineering",
                href: "/allschools/scope",
                imgsrc: "/AVIF_Images/Home_Page/schools/SCOPE.avif"
            }, {
                id: 2,
                title: "School of Electronics Engineering",
                href: "/allschools/sense",
                imgsrc: "/AVIF_Images/Home_Page/schools/SENSE.avif"
            }, {
                id: 3,
                title: "School of Mechanical Engineering",
                href: "/allschools/smec",
                imgsrc: "/AVIF_Images/Home_Page/schools/SMEC.avif"
            }, {
                id: 4,
                title: "School of Advanced Sciences",
                href: "/allschools/sas",
                imgsrc: "/AVIF_Images/Home_Page/schools/SAS.avif"
            }, {
                id: 5,
                title: "School of Social Sciences and Humanities",
                href: "/allschools/vish",
                imgsrc: "/AVIF_Images/Home_Page/schools/VISH.avif"
            }, {
                id: 6,
                title: "School of Law",
                href: "/allschools/vsl",
                imgsrc: "/AVIF_Images/Home_Page/schools/VSL.avif"
            }, {
                id: 7,
                title: "School of Business",
                href: "/allschools/vsb",
                imgsrc: "/AVIF_Images/Home_Page/schools/VSB.avif"
            }];
            var u = () => {
                let [e, t] = (0, i.useState)(0), l = f.length;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "hidden md:flex md:flex-col h-full  md:my-[90px]  relative",
                        children: (0, s.jsxs)("div", {
                            style: {
                                backgroundImage: "linear-gradient(\n          rgb(101, 0, 16,0.8),\n          rgba(101, 0, 16, 0.8)\n        ), url('/AVIF_Images/Banners/CDC_Office.avif')"
                            },
                            className: "w-full bg-fixed h-auto xl:h-[400px] xl:px-[80px] md:px-[40px] px-5 py-8 md:py-20 xl:py-0 xl:pt-10 ",
                            children: [(0, s.jsx)("h1", {
                                className: "font-Emilio font-bold text-white text-[24px]  sm:text-[32px] md:text-[48px] text-left ",
                                children: "Schools"
                            }), (0, s.jsx)("h1", {
                                className: "font-Montserrat text-[18px] text-white w-full md:text-left text-center hidden md:block",
                                children: "At VIT-AP the entire teaching-learning process is concentrated around seven schools for preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world."
                            }), (0, s.jsxs)("div", {
                                className: "lg:flex lg:flex-col ",
                                children: [(0, s.jsx)("div", {
                                    className: "hidden xl:flex justify-center mt-5 space-x-10",
                                    children: f.slice(0, 4).map(e => (0, s.jsx)(d, {
                                        imgsrc: e.imgsrc,
                                        href: e.href,
                                        title: e.title
                                    }, e.id))
                                }), (0, s.jsx)("div", {
                                    className: "hidden xl:flex justify-center mt-5 space-x-8",
                                    children: f.slice(4, 7).map(e => (0, s.jsx)(d, {
                                        imgsrc: e.imgsrc,
                                        href: e.href,
                                        title: e.title
                                    }, e.id))
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-full  hidden mt-8 mb-8",
                                children: (0, s.jsx)("div", {
                                    className: "flex flex-col gap-4",
                                    children: (0, s.jsxs)("div", {
                                        className: "min-h-[150px] flex relative",
                                        children: [(0, s.jsx)("div", {
                                            className: "basis-1/3 bg-[#E6CFCF] flex justify-end items-center sm:h-[300px] ",
                                            children: (0, s.jsx)("div", {
                                                className: "w-[100px] sm:w-[400px] h-[120px] sm:h-[200px]  relative -mr-[30px] sm:-mr-[120px]",
                                                children: (0, s.jsx)(o.default, {
                                                    src: f[e].imgsrc,
                                                    alt: "mobileglance",
                                                    fill: !0,
                                                    className: "object-contain"
                                                })
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "basis-2/3  flex flex-col justify-center items-center ",
                                            children: [(0, s.jsxs)("div", {
                                                className: "pl-[40px]  flex flex-col justify-center items-start gap-2",
                                                children: [(0, s.jsx)("div", {
                                                    children: (0, s.jsx)("h1", {
                                                        className: "text-[24px] sm:text-[28px] md:text-[32px] text-white font-bold font-Emilio leading-7 sm:leading-10",
                                                        children: f[e].title
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-row gap-4 items-center justify-center",
                                                    children: [(0, s.jsx)(a.default, {
                                                        href: "/",
                                                        className: "text-white text-[14px] font-Montserrat font-normal",
                                                        children: "Explore now"
                                                    }), (0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "6",
                                                        height: "5",
                                                        viewBox: "0 0 6 5",
                                                        fill: "none",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.91367 0.109883C2.99216 0.0395214 3.09856 0 3.2095 0C3.32044 0 3.42684 0.0395214 3.50533 0.109883L5.87757 2.23901C5.95597 2.30946 6 2.40496 6 2.50453C6 2.6041 5.95597 2.69959 5.87757 2.77004L3.50533 4.89917C3.42593 4.9655 3.32096 5.00163 3.2125 4.99994C3.10403 4.99826 3.00052 4.95891 2.92371 4.89015C2.84711 4.82122 2.80326 4.72831 2.80139 4.63097C2.79951 4.53362 2.83976 4.43941 2.91367 4.36814L4.57144 2.88026L0.41863 2.88026C0.307602 2.88026 0.201122 2.84067 0.122614 2.77021C0.0441055 2.69974 0 2.60418 0 2.50453C0 2.40488 0.0441055 2.30931 0.122614 2.23885C0.201122 2.16838 0.307602 2.1288 0.41863 2.1288L4.57144 2.1288L2.91367 0.640913C2.83527 0.570464 2.79124 0.474966 2.79124 0.375398C2.79124 0.27583 2.83527 0.180332 2.91367 0.109883Z",
                                                            fill: "black"
                                                        })
                                                    })]
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("div", {
                                                    className: "absolute  -ml-[10px] top-[40%] left-0 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center text-[#650010]",
                                                    children: (0, s.jsx)("button", {
                                                        className: "bg-[#E6CFCF]  ",
                                                        onClick: () => {
                                                            t(e => e <= 0 ? l - 1 : e - 1)
                                                        },
                                                        children: (0, s.jsx)(r.$K8, {
                                                            size: 28,
                                                            color: "black",
                                                            className: "opacity-65"
                                                        })
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "absolute  top-[40%] -mr-[30px] right-5 max-w-[80px] max-h-[40px] h-[100%] flex justify-between items-center text-[#650010]",
                                                    children: (0, s.jsx)("button", {
                                                        className: "bg-[#E6CFCF]",
                                                        onClick: () => {
                                                            t(e => e >= l - 1 ? 0 : e + 1)
                                                        },
                                                        children: (0, s.jsx)(n.sOJ, {
                                                            size: 28,
                                                            color: "black",
                                                            className: "opacity-65"
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "h-[250px]  sm:h-[400px]  w-full flex xl:hidden mb-[340px] sm:mb-[240px]",
                        children: (0, s.jsxs)("div", {
                            style: {
                                backgroundImage: "linear-gradient(\n          rgb(101, 0, 16,0.7),\n          rgba(101, 0, 16, 0.7)\n        ), url('/AVIF_Images/Banners/CDC_Office.avif')"
                            },
                            className: " w-full h-[272px] text-[32px] font-[500]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col justify-center",
                                children: [(0, s.jsx)("h1", {
                                    className: "text-center font-Emilio text-white mt-10 ",
                                    children: "Schools"
                                }), (0, s.jsx)("h1", {
                                    className: "text-center mt-4 font-Emilio text-[14px] text-white px-4",
                                    children: "At VIT-AP the entire teaching-learning process is concentrated around seven schools."
                                })]
                            }), (0, s.jsx)("div", {
                                className: "mt-10",
                                children: (0, s.jsx)(p, {})
                            }), (0, s.jsx)("div", {
                                className: "flex flex-col justify-center items-center mt-4",
                                children: (0, s.jsx)(a.default, {
                                    href: "/allschools",
                                    className: "flex items-center justify-center text-[14px] py-[6px] px-[32px]  border-[2px] border-primary text-primary  border-opacity-20 ",
                                    children: "View All"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        14164: function(e, t, l) {
            "use strict";
            var s = l(57437),
                a = l(33145),
                i = l(2265);
            let r = [{
                id: 1,
                imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP1.avif"
            }, {
                id: 2,
                imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP2.avif"
            }, {
                id: 3,
                imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP3.avif"
            }, {
                id: 4,
                imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP4.avif"
            }, {
                id: 5,
                imgUrl: "/AVIF_Images/Home_Page/Placement_Spotlight/CDCHP5.avif"
            }];
            t.default = () => {
                var e;
                let [t, l] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    let e = setTimeout(() => {
                        l(e => (e + 1) % r.length)
                    }, 2e3);
                    return () => clearTimeout(e)
                }, [t]), (0, s.jsxs)("div", {
                    className: "hidden md:block bg-white w-full max-h-[5000px] relative mt-[100px] md:mt-[0px]",
                    children: [(0, s.jsx)("div", {
                        className: "absolute top-0 right-0 max-w-[250px] lg:max-w-[350px] xl:max-w-[500px] h-full w-full bg-[#650010]"
                    }), (0, s.jsxs)("div", {
                        className: "flex gap-[35px] lg:gap-[50px] justify-center items-center",
                        children: [(0, s.jsxs)("div", {
                            className: "flex-1 pl-[20px] sm:pl-[50px] lg:pl-[100px] pt-[20px] sm:pt-[40px] lg:pt-[80px] flex flex-col items-start justify-center gap-[20px] lg:gap-[30px]",
                            children: [(0, s.jsx)("p", {
                                className: "text-[48px] lg:text-[56px] xl:text-[64px] text-[#650010] font-Emilio font-bold text-left",
                                children: "Placement Highlight"
                            }), (0, s.jsx)("p", {
                                className: "text-[12px] md:text-[20px] font-Montserrat font-[400] text-[#000000cc] text-justify leading-[32px]",
                                children: "VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to nurturing industry-ready professionals. Boasting a stellar track record, our students have secured coveted positions in leading companies. The testament to our rigorous academic curriculum and holistic development approach is evident in the remarkable success stories of our graduates."
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex-1 w-full h-full pr-[20px] sm:pr-[50px] lg:pr-[100px] z-10 gap-[20px] lg:gap-[40px] flex items-center justify-center",
                            children: [(0, s.jsx)("div", {
                                className: "basis-[80%] w-full h-full py-[20px] sm:py-[40px] lg:py-[80px] flex flex-col items-center justify-center",
                                children: (0, s.jsx)("div", {
                                    className: " w-full h-[380px] xl:h-[480px] relative ",
                                    children: (0, s.jsx)(a.default, {
                                        src: null === (e = r[t]) || void 0 === e ? void 0 : e.imgUrl,
                                        alt: "",
                                        fill: !0,
                                        className: "object-contain"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "basis-[20%] w-full h-full  z-10 flex flex-col items-center justify-center gap-[30px]",
                                children: r.map(e => (0, s.jsx)("div", {
                                    className: "".concat(t === (null == e ? void 0 : e.id) - 1 ? "w-[100px] h-[100px]" : "w-[80px] h-[80px]", " relative"),
                                    onClick: () => l((null == e ? void 0 : e.id) - 1),
                                    children: (0, s.jsx)(a.default, {
                                        src: null == e ? void 0 : e.imgUrl,
                                        alt: "",
                                        fill: !0
                                    })
                                }, null == e ? void 0 : e.id))
                            })]
                        })]
                    })]
                })
            }
        },
        12775: function(e, t, l) {
            "use strict";
            var s = l(57437),
                a = l(2265);
            t.default = () => {
                let [e, t] = (0, a.useState)(!0), [l, i] = (0, a.useState)("Undergraduate");
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "w-full max-h-[5000px] bg-[#EEE] block md:hidden relative custom-scrollbar overflow-hidden",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 w-[90px] h-full bg-[#650010] z-10"
                        }), (0, s.jsxs)("div", {
                            className: "absolute top-0 left-0 w-full h-full items-start justify-center  p-[20px] flex flex-col gap-[15px] ".concat(!0 === e ? "z-20" : "-z-20", " transition-all ease-in-out duration-300"),
                            children: [(0, s.jsx)("p", {
                                className: "text-[24px] font-Emilio text-[#650010] font-semibold w-full text-left",
                                children: "Programmes Offered"
                            }), (0, s.jsx)("p", {
                                className: "text-[12px] font-Montserrat text-[#650010] font-normal pr-[80px]",
                                children: "Programme covers the entire spectrum of new-age specializations."
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-[10px] w-full z-11",
                                children: [(0, s.jsx)("div", {
                                    className: "w-full h-[56px] bg-white border border-[#650010] flex items-center justify-center text-[18px] text-[#650010] font-Emilio font-[500]",
                                    onClick: () => {
                                        t(!1), i("Undergraduate")
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "Undergraduate"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[56px] bg-white border border-[#650010] flex items-center justify-center text-[18px] text-[#650010] font-Emilio font-[500]",
                                    onClick: () => {
                                        t(!1), i("Dual Degree")
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "Dual Degree"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[56px] bg-white border border-[#650010] flex items-center justify-center text-[18px] text-[#650010] font-Emilio font-[500]",
                                    onClick: () => {
                                        t(!1), i("Integrated")
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "Integrated"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[56px] bg-white border border-[#650010] flex items-center justify-center text-[18px] text-[#650010] font-Emilio font-[500]",
                                    onClick: () => {
                                        t(!1), i("Postgraduate")
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "Postgraduate"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "w-full h-[56px] bg-white border border-[#650010] flex items-center justify-center text-[18px] text-[#650010] font-Emilio font-[500]",
                                    onClick: () => {
                                        t(!1), i("Doctoral")
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "Doctoral"
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "p-[20px] flex flex-col gap-[15px] relative ".concat(!0 === e ? "-z-20 " : "z-20", " transition-all ease-in-out duration-300"),
                            children: [(0, s.jsx)("p", {
                                className: "text-[24px] font-Emilio text-[#650010] font-semibold",
                                children: "Programmes Offered"
                            }), (0, s.jsx)("p", {
                                className: "p-[15px] text-white bg-[#650010] rounded-md w-[145px] mr-auto",
                                onClick: () => t(!0),
                                children: "View All Programs"
                            }), (0, s.jsx)("p", {
                                className: "text-[16px] font-Emilio text-[#000] font-semibold",
                                children: l
                            }), (0, s.jsx)("div", {
                                className: "w-full h-[430px] custom-scrollbar bg-white overflow-y-auto flex flex-col py-[20px] px-[15px]",
                                children: [{
                                    id: 47,
                                    Field: "Undergraduate",
                                    Title: "B.Tech.  Computer Science and Engineering",
                                    link: "/allschools/scope/undergraduate/cse"
                                }, {
                                    id: 48,
                                    Field: "Undergraduate",
                                    Title: "B.Tech.  Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
                                    link: "/allschools/scope/undergraduate/cse-aiml"
                                }, {
                                    id: 49,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Computer Science and Engineering (Blockchain)",
                                    link: "/allschools/scope/undergraduate/cse-blockchain"
                                }, {
                                    id: 50,
                                    Field: "Undergraduate",
                                    Title: "B.Tech.  Computer Science and Engineering (Cyber Security)",
                                    link: "/allschools/scope/undergraduate/cse-cybersecurity"
                                }, {
                                    id: 51,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Computer Science and Engineering (Data Analytics)",
                                    link: "/allschools/scope/undergraduate/cse-data-analytics"
                                }, {
                                    id: 52,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Computer Science and Engineering (Software Engineering)",
                                    link: "/allschools/scope/undergraduate/cse-software-engineering"
                                }, {
                                    id: 53,
                                    Field: "Dual Degree",
                                    Title: "B.Sc. - M.Sc  Data Science in Collaboration with Binghamton University, USA & QpiAI, India Pvt. Ltd.",
                                    link: "/allschools/sas/dual%20degree/b-sc-m-sc-data-sciense"
                                }, {
                                    id: 54,
                                    Field: "Dual Degree",
                                    Title: "B.A. - M.A.",
                                    link: "/allschools/vish/dual%20degree/ba-ma"
                                }, {
                                    id: 55,
                                    Field: "Doctoral",
                                    Title: "Computer Science and Engineering",
                                    link: "/allschools/scope/doctoral/computer%20science%20and%20engineering"
                                }, {
                                    id: 56,
                                    Field: "Doctoral",
                                    Title: "Electronics Engineering",
                                    link: "/allschools/sense/doctoral/electronics%20engineering"
                                }, {
                                    id: 58,
                                    Field: "Postgraduate",
                                    Title: "M.Tech. VlSI",
                                    link: "/allschools/sense/postgraduate/vlsi"
                                }, {
                                    id: 59,
                                    Field: "Postgraduate",
                                    Title: "M.Sc - Data Science in Collaboration with Binghamton University, USA & QpiAI, India Pvt. Ltd.",
                                    link: "/allschools/sas/postgraduate/m-sc-data-sciense"
                                }, {
                                    id: 60,
                                    Field: "Doctoral",
                                    Title: "Mechanical Engineering",
                                    link: "/allschools/smech/doctoral/mechanical-engineering"
                                }, {
                                    id: 61,
                                    Field: "Doctoral",
                                    Title: "Advanced Sciences",
                                    link: "/allschools/sas/doctoral/advanced%20sciences"
                                }, {
                                    id: 62,
                                    Field: "Doctoral",
                                    Title: "Social Sciences and Humanities",
                                    link: "/allschools/vish/doctoral/social%20sciences%20and%20humanities"
                                }, {
                                    id: 63,
                                    Field: "Doctoral",
                                    Title: "Law",
                                    link: "/allschools/vsl/doctoral/law"
                                }, {
                                    id: 64,
                                    Field: "Doctoral",
                                    Title: "Business",
                                    link: "/allschools/vsb/doctoral/business"
                                }, {
                                    id: 65,
                                    Field: "Integrated",
                                    Title: "M.Tech. Computer Science and Engineering in Collaboration with Virtusa",
                                    link: "/allschools/scope/Integrated/cse-in-collaboration-with-virtusa"
                                }, {
                                    id: 66,
                                    Field: "Integrated",
                                    Title: "M.Tech. Software Engineering",
                                    link: "/allschools/scope/Integrated/cse-software-engineering"
                                }, {
                                    id: 67,
                                    Field: "Integrated",
                                    Title: "B.A., LL. B (Hons.)",
                                    link: "/allschools/vsl/Integrated/ba-llb"
                                }, {
                                    id: 68,
                                    Field: "Integrated",
                                    Title: "BBA., LL. B (Hons.)",
                                    link: "/allschools/vsl/Integrated/bba-llb"
                                }, {
                                    id: 69,
                                    Field: "Postgraduate",
                                    Title: "M.Sc Chemistry in collaboration with Mitsui Kinzoku Components India (MKCI)",
                                    link: "/allschools/sas/postgraduate/m-sc-chemistry"
                                }, {
                                    id: 71,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Electronics and Communication Engineering",
                                    link: "/allschools/sense/undergraduate/ece"
                                }, {
                                    id: 72,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Electronics and Communication Engineering (Embedded Systems)",
                                    link: "/allschools/sense/undergraduate/ece-embedded-systems"
                                }, {
                                    id: 73,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Electronics and Communication Engineering (VlSI)",
                                    link: "/allschools/sense/undergraduate/ece-vlsi"
                                }, {
                                    id: 74,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Mechanical Engineering",
                                    link: "/allschools/smec/undergraduate/mechanical-engineering"
                                }, {
                                    id: 75,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Mechanical Engineering (Automotive Design)",
                                    link: "/allschools/smec/undergraduate/mechanical-engineering-automotive-design"
                                }, {
                                    id: 76,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Mechanical Engineering (Robotics)",
                                    link: "/allschools/smec/undergraduate/mechanical-engineerung-robotics"
                                }, {
                                    id: 77,
                                    Field: "Undergraduate",
                                    Title: "B.Tech. Computer Science and Business Systems",
                                    link: "/allschools/scope/undergraduate/csbs"
                                }, {
                                    id: 78,
                                    Field: "Undergraduate",
                                    Title: "B.Com Finance",
                                    link: "/allschools/vsb/undergraduate/finance"
                                }, {
                                    id: 79,
                                    Field: "Undergraduate",
                                    Title: "BBA",
                                    link: "/allschools/vsb/undergraduate/bba"
                                }].map(e => e.Field === l ? (0, s.jsx)("h1", {
                                    className: "py-4 max-w-[632px] text-primary text-14 max-lg:text-[16px] text-[20px] font-semibold border border-l-0 border-t-0 border-r-0 border-b-gray-500 hover:text-bold px-[10px]",
                                    children: (0, s.jsx)("a", {
                                        href: "".concat(null == e ? void 0 : e.link),
                                        className: "",
                                        children: e.Title
                                    })
                                }, e.id) : "")
                            })]
                        })]
                    })
                })
            }
        },
        77255: function(e, t, l) {
            "use strict";
            var s = l(57437),
                a = l(2265);
            let i = [{
                id: 47,
                Field: "Undergraduate",
                Title: "B.Tech.  Computer Science and Engineering",
                link: "/allschools/scope/undergraduate/cse"
            }, {
                id: 48,
                Field: "Undergraduate",
                Title: "B.Tech.  Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
                link: "/allschools/scope/undergraduate/cse-aiml"
            }, {
                id: 49,
                Field: "Undergraduate",
                Title: "B.Tech. Computer Science and Engineering (Blockchain)",
                link: "/allschools/scope/undergraduate/cse-blockchain"
            }, {
                id: 50,
                Field: "Undergraduate",
                Title: "B.Tech.  Computer Science and Engineering (Cyber Security)",
                link: "/allschools/scope/undergraduate/cse-cybersecurity"
            }, {
                id: 51,
                Field: "Undergraduate",
                Title: "B.Tech. Computer Science and Engineering (Data Analytics)",
                link: "/allschools/scope/undergraduate/cse-data-analytics"
            }, {
                id: 52,
                Field: "Undergraduate",
                Title: "B.Tech. Computer Science and Engineering (Software Engineering)",
                link: "/allschools/scope/undergraduate/cse-software-engineering"
            }, {
                id: 53,
                Field: "Dual Degree",
                Title: "B.Sc. - M.Sc  Data Science in Collaboration with Binghamton University, USA & QpiAI, India Pvt. Ltd.",
                link: "/allschools/sas/dual%20degree/b-sc-m-sc-data-sciense"
            }, {
                id: 54,
                Field: "Dual Degree",
                Title: "B.A. - M.A.",
                link: "/allschools/vish/dual%20degree/ba-ma"
            }, {
                id: 55,
                Field: "Doctoral",
                Title: "Computer Science and Engineering",
                link: "/allschools/scope/doctoral/computer%20science%20and%20engineering"
            }, {
                id: 56,
                Field: "Doctoral",
                Title: "Electronics Engineering",
                link: "/allschools/sense/doctoral/electronics%20engineering"
            }, {
                id: 58,
                Field: "Postgraduate",
                Title: "M.Tech. VlSI",
                link: "/allschools/sense/postgraduate/vlsi"
            }, {
                id: 59,
                Field: "Postgraduate",
                Title: "M.Sc - Data Science in Collaboration with Binghamton University, USA & QpiAI, India Pvt. Ltd.",
                link: "/allschools/sas/postgraduate/m-sc-data-sciense"
            }, {
                id: 60,
                Field: "Doctoral",
                Title: "Mechanical Engineering",
                link: "/allschools/smech/doctoral/mechanical-engineering"
            }, {
                id: 61,
                Field: "Doctoral",
                Title: "Advanced Sciences",
                link: "/allschools/sas/doctoral/advanced%20sciences"
            }, {
                id: 62,
                Field: "Doctoral",
                Title: "Social Sciences and Humanities",
                link: "/allschools/vish/doctoral/social%20sciences%20and%20humanities"
            }, {
                id: 63,
                Field: "Doctoral",
                Title: "Law",
                link: "/allschools/vsl/doctoral/law"
            }, {
                id: 64,
                Field: "Doctoral",
                Title: "Business",
                link: "/allschools/vsb/doctoral/business"
            }, {
                id: 65,
                Field: "Integrated",
                Title: "M.Tech. Computer Science and Engineering in Collaboration with Virtusa",
                link: "/allschools/scope/Integrated/cse-in-collaboration-with-virtusa"
            }, {
                id: 66,
                Field: "Integrated",
                Title: "M.Tech. Software Engineering",
                link: "/allschools/scope/Integrated/cse-software-engineering"
            }, {
                id: 67,
                Field: "Integrated",
                Title: "B.A., LL. B (Hons.)",
                link: "/allschools/vsl/Integrated/ba-llb"
            }, {
                id: 68,
                Field: "Integrated",
                Title: "BBA., LL. B (Hons.)",
                link: "/allschools/vsl/Integrated/bba-llb"
            }, {
                id: 69,
                Field: "Postgraduate",
                Title: "M.Sc Chemistry in collaboration with Mitsui Kinzoku Components India (MKCI)",
                link: "/allschools/sas/postgraduate/m-sc-chemistry"
            }, {
                id: 71,
                Field: "Undergraduate",
                Title: "B.Tech. Electronics and Communication Engineering",
                link: "/allschools/sense/undergraduate/ece"
            }, {
                id: 72,
                Field: "Undergraduate",
                Title: "B.Tech. Electronics and Communication Engineering (Embedded Systems)",
                link: "/allschools/sense/undergraduate/ece-embedded-systems"
            }, {
                id: 73,
                Field: "Undergraduate",
                Title: "B.Tech. Electronics and Communication Engineering (VlSI)",
                link: "/allschools/sense/undergraduate/ece-vlsi"
            }, {
                id: 74,
                Field: "Undergraduate",
                Title: "B.Tech. Mechanical Engineering",
                link: "/allschools/smec/undergraduate/mechanical-engineering"
            }, {
                id: 75,
                Field: "Undergraduate",
                Title: "B.Tech. Mechanical Engineering (Automotive Design)",
                link: "/allschools/smec/undergraduate/mechanical-engineering-automotive-design"
            }, {
                id: 76,
                Field: "Undergraduate",
                Title: "B.Tech. Mechanical Engineering (Robotics)",
                link: "/allschools/smec/undergraduate/mechanical-engineerung-robotics"
            }, {
                id: 77,
                Field: "Undergraduate",
                Title: "B.Tech. Computer Science and Business Systems",
                link: "/allschools/scope/undergraduate/csbs"
            }, {
                id: 78,
                Field: "Undergraduate",
                Title: "B.Com Finance",
                link: "/allschools/vsb/undergraduate/finance"
            }, {
                id: 79,
                Field: "Undergraduate",
                Title: "BBA",
                link: "/allschools/vsb/undergraduate/bba"
            }];
            t.default = () => {
                let [e, t] = (0, a.useState)("Undergraduate");
                return (0, s.jsxs)("div", {
                    className: "w-full max-h-[5000px] bg-[#FDFFFF] relative hidden md:block",
                    children: [(0, s.jsx)("div", {
                        className: "absolute top-0 right-0 max-w-[250px] lg:max-w-[400px] xl:max-w-[554px] h-full w-full bg-[#650010]"
                    }), (0, s.jsxs)("div", {
                        className: "px-[20px] sm:px-[50px] lg:px-[100px] py-[20px] sm:py-[40px] lg:py-[80px]",
                        children: [(0, s.jsxs)("div", {
                            className: "text-left flex flex-col gap-[10px]",
                            children: [(0, s.jsx)("h1", {
                                className: "text-[36px] lg:text-[48px] font-Emilio font-bold text-[#5C0E14]",
                                children: "Programmes Offered"
                            }), (0, s.jsxs)("p", {
                                className: "text-[16px] xl:text-[18px] relative z-20 font-Montserrat font-normal text-[black]",
                                children: ["Programme covers the entire spectrum of new-age ", (0, s.jsx)("br", {}), " ", "specializations."]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "pt-[35px] xl:pt-[50px] flex gap-[30px] xl:gap-[50px]",
                            children: [(0, s.jsxs)("div", {
                                className: "basis-[30%] h-[558px] flex flex-col gap-[10px]",
                                children: [(0, s.jsx)("div", {
                                    className: "".concat("Undergraduate" === e ? "bg-[#650010] text-white" : " border border-[#650010]", " text-[#650010] ").concat("Undergraduate" !== e ? "hover:border-0 hover:bg-[#E6CFCF] hover:text-black" : "", " w-full h-[60px] flex items-center justify-center text-center text-[18px] font-Emilio font-[600] cursor-pointer"),
                                    onClick: () => t("Undergraduate"),
                                    children: (0, s.jsx)("p", {
                                        children: "Undergraduate"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Dual Degree" === e ? "bg-[#650010] text-white" : " border border-[#650010]", " text-[#650010] ").concat("Dual Degree" !== e ? "hover:border-0 hover:bg-[#E6CFCF] hover:text-black" : "", " w-full h-[60px] flex items-center justify-center text-center text-[18px] font-Emilio font-[600] cursor-pointer"),
                                    onClick: () => t("Dual Degree"),
                                    children: (0, s.jsx)("p", {
                                        children: "Dual Degree"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Integrated" === e ? "bg-[#650010] text-white" : " border border-[#650010]", " text-[#650010] ").concat("Integrated" !== e ? "hover:border-0 hover:bg-[#E6CFCF] hover:text-black" : "", " w-full h-[60px] flex items-center justify-center text-center text-[18px] font-Emilio font-[600] cursor-pointer"),
                                    onClick: () => t("Integrated"),
                                    children: (0, s.jsx)("p", {
                                        children: "Integrated"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Postgraduate" === e ? "bg-[#650010] text-white" : " border border-[#650010]", " text-[#650010] ").concat("Postgraduate" !== e ? "hover:border-0 hover:bg-[#E6CFCF] hover:text-black" : "", " w-full h-[60px] flex items-center justify-center text-center text-[18px] font-Emilio font-[600] cursor-pointer"),
                                    onClick: () => t("Postgraduate"),
                                    children: (0, s.jsx)("p", {
                                        children: "Postgraduate"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Doctoral" === e ? "bg-[#650010] text-white" : " border border-[#650010]", " text-[#650010] ").concat("Doctoral" !== e ? "hover:border-0 hover:bg-[#E6CFCF] hover:text-black" : "", " w-full h-[60px] flex items-center justify-center text-center text-[18px] font-Emilio font-[600] cursor-pointer"),
                                    onClick: () => t("Doctoral"),
                                    children: (0, s.jsx)("p", {
                                        children: "Doctoral"
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "basis-[70%] h-[558px] border border-[#650010] bg-[#fff] z-10 overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-400",
                                children: (0, s.jsx)("div", {
                                    className: "w-full h-full p-[30px] flex flex-col",
                                    children: i.map(t => t.Field === e ? (0, s.jsx)("a", {
                                        href: "".concat(null == t ? void 0 : t.link),
                                        className: "border border-t-0 border-l-0 border-r-0 border-[#1b1c1e38] text-[20px] hover:text-[21px] ease-in duration-200 font-Emilio font-[500] text-[#51060D] ",
                                        children: (0, s.jsx)("p", {
                                            className: "py-[20px] ",
                                            children: t.Title
                                        })
                                    }, t.id) : "")
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        35951: function(e, t, l) {
            "use strict";
            l.d(t, {
                default: function() {
                    return C
                }
            });
            var s = l(57437),
                a = l(48053),
                i = l(26615),
                r = l(21151),
                n = l(2265),
                o = l(33145),
                c = {
                    src: "/_next/static/media/vitaplogo.1f72e396.png",
                    height: 60,
                    width: 194,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEX////+/v7////////8/PyU/BekAAAABXRSTlNDLDZUYmpRNagAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYSURBVHicBcGBAQAABMCghv9vVqYIew16AKQAEeNOieYAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 2
                },
                d = e => {
                    let {
                        imgSrc: t,
                        title: l
                    } = e, [i, r] = (0, n.useState)(!1);
                    return (0, s.jsxs)("div", {
                        className: "group w-[150px] h-[150px]  sm:h-[250px]  md:w-[200px] md:h-[200px] mb-4 md:mb-10  relative overflow-hidden cursor-pointer",
                        onMouseEnter: () => r(!0),
                        onMouseLeave: () => r(!1),
                        children: [(0, s.jsx)(o.default, {
                            src: t,
                            fill: !0,
                            className: "object-cover z-0 transition-transform duration-300"
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black opacity-".concat(i ? "50" : "0", " z-10 transition-opacity duration-300")
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black bg-gradient-to-t from-black to-transparent opacity-35 "
                        }), (0, s.jsx)("div", {
                            className: " absolute bottom-0 z-20 left-0 pl-2 pb-2 md:pb-3 opacity-100 transition-opacity duration-300",
                            children: (0, s.jsx)("div", {
                                className: "md:w-[80px] md:h-[25px] w-[25px] h-[10px]  relative",
                                children: (0, s.jsx)(o.default, {
                                    src: c,
                                    fill: !0
                                })
                            })
                        }), (0, s.jsx)("a", {
                            href: "https://www.instagram.com/vitap.university/?hl=en",
                            target: "_blank",
                            className: "absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ".concat(i ? "opacity-100" : "opacity-0"),
                            children: (0, s.jsxs)("div", {
                                className: "text-white text-center flex flex-col items-center justify-center",
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)(a.t0C, {
                                        className: " w-6 h-6 lg:w-8 md:h-8"
                                    })
                                }), (0, s.jsx)("p", {
                                    className: "font-Montserrat text-[8px] md:text-[14px] mt-2",
                                    children: l
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-0 z-20 right-0 p-2 md:p-4 opacity-".concat(i ? "0" : "100", " transition-opacity duration-300"),
                            children: (0, s.jsx)(a.t0C, {
                                className: " md:w-5 md:h-5 lg:w-6 lg:h-6",
                                color: "white"
                            })
                        })]
                    })
                },
                x = l(19764);
            l(7354), l(76889), l(12346);
            var m = l(73377),
                h = {
                    src: "/_next/static/media/1.15781b59.avif",
                    height: 816,
                    width: 920,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAOAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABwAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAAEBtZGF0EgAKCBgIvmCAhoNCMioXAAAAQPu8CAs6a/tviu2+1nF4o7rTVXYrCdnA2qV4OTN45GNT1Y4TM4A=",
                    blurWidth: 8,
                    blurHeight: 7
                },
                A = {
                    src: "/_next/static/media/2.06c4c1ff.avif",
                    height: 806,
                    width: 807,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAANAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAACAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAADxtZGF0EgAKCBgIv2CAhoNCMiYXAAAAULnl7zJ81i184JAXN1DduzS5JNCl71XYqdiN7Xrmmln0nw==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                p = {
                    src: "/_next/static/media/3.f826e94b.avif",
                    height: 540,
                    width: 585,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAANQAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABwAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAAD1tZGF0EgAKCBgIvmCAhoNCMicXAAAAQJrfHEHikC0gVfIYxDF4BgW2/aD+KrenAJN13/0Ep/aqzZc=",
                    blurWidth: 8,
                    blurHeight: 7
                },
                f = {
                    src: "/_next/static/media/4.9e4f89fb.avif",
                    height: 507,
                    width: 533,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAOAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAACAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAAEBtZGF0EgAKCBgIv2CAhoNCMioXAAAAUCMylJ1/SXZUFgW398bUspV9ZB1q6a34GB6uj8VQeppvdDyc98Q=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                u = {
                    src: "/_next/static/media/5.2ceecf2c.avif",
                    height: 542,
                    width: 537,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAALwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAACAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAADdtZGF0EgAKCBgIv2CAhoNCMiEXAAMMAAQA7wG9HW4KY9AvbtGks5C3YpM8mio5hho5wGQ=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                g = {
                    src: "/_next/static/media/6.7383dfae.avif",
                    height: 535,
                    width: 613,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAMAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABwAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAADhtZGF0EgAKCBgIvmCAhoNCMiIXAAAAQIdFcqHy8eEhrYW2uTeSgBDQph2/QpvWK5tg18Mw",
                    blurWidth: 8,
                    blurHeight: 7
                },
                b = {
                    src: "/_next/static/media/7.490045df.avif",
                    height: 811,
                    width: 808,
                    blurDataURL: "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAANgAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAACAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAAAD5tZGF0EgAKCBgIv2CAhoNCMigXAAAAUMuu6SSofS3cQVm8Xm/5Dbj/Y0MOnZ+XAX5hLO0SwcMvd69Q",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let v = [{
                id: 1,
                imgSrc: h
            }, {
                id: 2,
                imgSrc: A
            }, {
                id: 3,
                imgSrc: p
            }, {
                id: 4,
                imgSrc: f
            }, {
                id: 5,
                imgSrc: u
            }, {
                id: 6,
                imgSrc: g
            }, {
                id: 7,
                imgSrc: b
            }, {
                id: 8,
                imgSrc: A
            }, {
                id: 9,
                imgSrc: h
            }];
            var j = () => (0, s.jsx)("div", {
                    className: "px-[20px]",
                    children: (0, s.jsx)(x.tq, {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                        pagination: {
                            clickable: !0,
                            el: ".swiper-pagination",
                            type: "bullets"
                        },
                        modules: [m.tl],
                        className: "mySwiper",
                        children: v.map(e => (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(x.o5, {
                                children: (0, s.jsx)(d, {
                                    imgSrc: e.imgSrc
                                })
                            })
                        }))
                    })
                }),
                w = l(27648);
            let N = [{
                    id: 1,
                    imgSrc: A,
                    title: "Our Beloved Chancellor Honored with Doctorate from RIT"
                }, {
                    id: 2,
                    imgSrc: p,
                    title: "Dr. Pemmasani Sekhar Graces V-Launchpad 2025, Inspires Young Innovators"
                }, {
                    id: 3,
                    imgSrc: f,
                    title: "VITopia 2025 Stuns with Armaan Malik, Kartik Aaryan, Star Performances"
                }, {
                    id: 4,
                    imgSrc: u,
                    title: "Esha Singh: Paris 2024 Olympic Star at VIT-AP on Womens Day"
                }, {
                    id: 5,
                    imgSrc: g,
                    title: "National cybersecurity challenge at VIT-AP with AICTE, Lenovo support"
                }, {
                    id: 6,
                    imgSrc: b,
                    title: "VIT-AP Rotaract Club Shines Bright with 7 Prestigious Honors"
                }, {
                    id: 7,
                    imgSrc: h,
                    title: ""
                }, {
                    id: 8,
                    imgSrc: p,
                    title: ""
                }, {
                    id: 9,
                    imgSrc: A,
                    title: ""
                }],
                y = [{
                    id: 5,
                    icon: (0, s.jsx)(a.b1v, {
                        size: 30,
                        color: "white"
                    }),
                    link: "https://www.youtube.com/@VITAP",
                    text: "Watch us on Youtube"
                }, {
                    id: 4,
                    icon: (0, s.jsx)(i.xSx, {
                        size: 30,
                        color: "white"
                    }),
                    link: "https://www.facebook.com/vitap.university/",
                    text: "Like us on Facebook"
                }, {
                    id: 3,
                    icon: (0, s.jsx)(a._iD, {
                        size: 30,
                        color: "white"
                    }),
                    link: "https://www.linkedin.com/school/vitap-university/mycompany/verification/",
                    text: "Grow with us on LinkedIn"
                }, {
                    id: 2,
                    icon: (0, s.jsx)(r.LCd, {
                        size: 30,
                        color: "white"
                    }),
                    link: "https://twitter.com/VITAPuniversity",
                    text: "Tweet with us on X"
                }, {
                    id: 1,
                    icon: (0, s.jsx)(i.E08, {
                        size: 30,
                        color: "white"
                    }),
                    link: "https://www.instagram.com/vitap.university/",
                    text: "Follow us on Instagram"
                }],
                E = e => {
                    let {
                        imgSrc: t
                    } = e, [l, i] = (0, n.useState)(!1);
                    return (0, s.jsxs)("div", {
                        className: "group w-[320px] h-[100px] mb-4 md:mb-10  sm:h-[250px] lg:h-[320px] relative overflow-hidden cursor-pointer",
                        onMouseEnter: () => i(!0),
                        onMouseLeave: () => i(!1),
                        children: [(0, s.jsx)(o.default, {
                            src: t,
                            fill: !0,
                            className: "object-cover z-0 transition-transform duration-300"
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black opacity-".concat(l ? "50" : "0", " z-10 transition-opacity duration-300")
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black bg-gradient-to-t from-black to-transparent opacity-35 "
                        }), (0, s.jsx)("div", {
                            className: " absolute bottom-0 z-20 left-0 pl-2 pb-2 md:pb-4 opacity-100 transition-opacity duration-300",
                            children: (0, s.jsx)("div", {
                                className: "md:w-[90px] md:h-[30px] w-[25px] h-[10px]  relative",
                                children: (0, s.jsx)(o.default, {
                                    src: c,
                                    fill: !0
                                })
                            })
                        }), (0, s.jsx)("a", {
                            href: "https://www.instagram.com/vitap.university/?hl=en",
                            target: "_blank",
                            className: "absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ".concat(l ? "opacity-100" : "opacity-0"),
                            children: (0, s.jsxs)("div", {
                                className: "text-white text-center flex flex-col items-center justify-center",
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)(a.t0C, {
                                        className: " w-6 h-6 lg:w-8 md:h-8"
                                    })
                                }), (0, s.jsx)("p", {
                                    className: "font-Montserrat text-[8px] md:text-[14px] mt-2",
                                    children: "Hon’ble Andhra Pradesh CM Chandra Babu  Naidu Garu Inspires at VIT-AP During V-Launchpad and Block Inaugurations"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-0 z-20 right-0 p-2 md:p-4 opacity-".concat(l ? "0" : "100", " transition-opacity duration-300"),
                            children: (0, s.jsx)(a.t0C, {
                                className: " md:w-5 md:h-5 lg:w-6 lg:h-6",
                                color: "white"
                            })
                        })]
                    })
                };
            var C = () => (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                    className: " py-10 block md:hidden",
                    children: [(0, s.jsx)("h1", {
                        className: "font-Emilio text-[28px] md:text-[48px] font-[700] px-8 text-left  md:px-[108px] md:mt-14  text-primary",
                        children: "Wall of Socials"
                    }), (0, s.jsxs)("div", {
                        className: "flex  px-8 md:px-[108px] items-center space-x-[24px] justify-start mt-4",
                        children: [(0, s.jsx)("h1", {
                            className: "text-black font-[600] text-[14px]  text-left  opacity-70 leading-[18px] underline font-Montserrat ",
                            children: "Follow us on our Socials"
                        }), (0, s.jsx)("div", {
                            className: "flex space-x-[12px]",
                            children: y.map(e => (0, s.jsx)(w.default, {
                                href: e.link,
                                className: "flex group items-center  hover:scale-105 transition-all duration-300 cursor-pointer",
                                children: (0, s.jsx)("div", {
                                    className: "bg-primary group-hover:scale-110 transition-all  duration-300 p-[2px]  w-4 h-4 md:w-10 md:h-10 flex cursor-pointer items-center justify-center rounded-[3px]",
                                    children: e.icon
                                })
                            }))
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex  space-x-3 mt-4 ",
                        children: [(0, s.jsx)("div", {
                            className: "w-[120px] h-[12px] bg-primary"
                        }), (0, s.jsx)("div", {
                            className: "w-[12px] h-[12px] bg-primary"
                        }), (0, s.jsx)("div", {
                            className: "w-[12px] h-[12px] bg-primary"
                        }), (0, s.jsx)("div", {
                            className: "w-[12px] h-[12px] bg-primary"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "  mt-10",
                        children: [(0, s.jsx)(j, {}), (0, s.jsxs)("div", {
                            className: "flex  space-x-3 mt-4 justify-end w-full ",
                            children: [(0, s.jsx)("div", {
                                className: "w-[12px] h-[12px] bg-primary"
                            }), (0, s.jsx)("div", {
                                className: "w-[12px] h-[12px] bg-primary"
                            }), (0, s.jsx)("div", {
                                className: "w-[12px] h-[12px] bg-primary"
                            }), (0, s.jsx)("div", {
                                className: "w-[120px] h-[12px] bg-primary"
                            })]
                        })]
                    })]
                }), (0, s.jsx)("div", {
                    className: "max-h-[1000px] overflow-hidden md:block hidden",
                    children: (0, s.jsxs)("div", {
                        className: "flex justify-around max-h-[1000px] ",
                        children: [(0, s.jsxs)("div", {
                            className: "w-[55%] mt-[68px] flex flex-col items-center  ",
                            children: [(0, s.jsxs)("div", {
                                className: "flex",
                                children: [(0, s.jsx)("h1", {
                                    className: "font-Emilio text-[64px] text-primary font-semibold",
                                    children: "The Wall"
                                }), (0, s.jsx)("h1", {
                                    className: "font-Emilio text-[48px] text-black mt-[70px] font-semibold ml-[-60px]",
                                    children: "of Socials from"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "mt-6 flex justify-center space-x-5 w-full",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col space-y-3  ",
                                    children: [(0, s.jsx)("div", {
                                        className: "w-[12px] h-[120px] bg-primary"
                                    }), (0, s.jsx)("div", {
                                        className: "w-[12px] h-[12px] bg-primary"
                                    }), (0, s.jsx)("div", {
                                        className: "w-[12px] h-[12px] bg-primary"
                                    }), (0, s.jsx)("div", {
                                        className: "w-[12px] h-[12px] bg-primary"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: " flex",
                                    children: [(0, s.jsx)(E, {
                                        imgSrc: N[6].imgSrc
                                    }), (0, s.jsx)("h1", {
                                        className: "rotate-90 mx-0 h-[60px] relative top-[80px]  font-Emilio text-[48px] text-primary font-semibold mr-[-80px]",
                                        children: "VIT-AP"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex  px-8 md:px-[108px] items-center space-x-[24px] justify-center md:justify-start mt-4",
                                children: [(0, s.jsx)("h1", {
                                    className: "text-black font-[600] text-[12px] text-center md:text-left  md:text-[20px] opacity-70 leading-[18px] underline font-Montserrat ",
                                    children: "Follow us on our Socials"
                                }), (0, s.jsx)("div", {
                                    className: "flex space-x-[12px]",
                                    children: y.map(e => (0, s.jsx)(w.default, {
                                        href: e.link,
                                        className: "flex group items-center  hover:scale-105 transition-all duration-300 cursor-pointer",
                                        children: (0, s.jsx)("div", {
                                            className: "bg-primary group-hover:scale-110 transition-all  duration-300 p-[2px]  w-4 h-4 md:w-10 md:h-10 flex cursor-pointer items-center justify-center rounded-[3px]",
                                            children: e.icon
                                        })
                                    }))
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-[45%]   space-x-10",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-4 ",
                                children: [(0, s.jsx)(d, {
                                    imgSrc: N[0].imgSrc,
                                    title: N[0].title
                                }), (0, s.jsx)(d, {
                                    imgSrc: N[1].imgSrc,
                                    title: N[1].title
                                }), (0, s.jsx)(d, {
                                    imgSrc: N[2].imgSrc,
                                    title: N[2].title
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4 mt-[100px]",
                                children: [(0, s.jsx)(d, {
                                    imgSrc: N[3].imgSrc,
                                    title: N[3].title
                                }), (0, s.jsx)(d, {
                                    imgSrc: N[4].imgSrc,
                                    title: N[4].title
                                }), (0, s.jsx)(d, {
                                    imgSrc: N[5].imgSrc,
                                    title: N[5].title
                                })]
                            })]
                        })]
                    })
                })]
            })
        },
        99411: function(e, t, l) {
            "use strict";
            var s = l(57437),
                a = l(29),
                i = l.n(a),
                r = l(27648),
                n = l(2265);
            t.default = () => {
                let [e, t] = (0, n.useState)(!1), l = () => {
                    window.pageYOffset > 300 ? t(!0) : t(!1)
                };
                return (0, n.useEffect)(() => (window.addEventListener("scroll", l), () => {
                    window.removeEventListener("scroll", l)
                }), []), (0, s.jsxs)("div", {
                    className: "jsx-b2175eddc795f2f0 scroll-to-top flex flex-col items-center justify-center gap-[20px]",
                    children: [(0, s.jsx)(r.default, {
                        href: "/vitiebot",
                        children: (0, s.jsx)("div", {
                            style: {
                                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0 %, rgba(0, 0, 0, 0.20) 100 %), #650010"
                            },
                            className: "jsx-b2175eddc795f2f0 " + "chat-bot-icon rounded-full bg-[#650010] mb-[10px] mr-[5px] p-[11px] ".concat(e ? "move-up" : ""),
                            children: (0, s.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "34",
                                height: "33",
                                viewBox: "0 0 34 33",
                                fill: "none",
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, s.jsx)("mask", {
                                    id: "path-1-inside-1_404_15852",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: (0, s.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M16.8766 22.3236C21.0305 22.3236 24.3978 18.9563 24.3978 14.8024C24.3978 10.6486 21.0305 7.28125 16.8766 7.28125C12.7228 7.28125 9.35547 10.6486 9.35547 14.8024C9.35547 17.0701 10.359 19.1033 11.9462 20.4823C12.1349 22.5393 11.4857 23.489 9.80269 24.8307L15.9909 22.272C16.2814 22.3061 16.577 22.3236 16.8766 22.3236Z",
                                        className: "jsx-b2175eddc795f2f0"
                                    })
                                }), (0, s.jsx)("path", {
                                    d: "M11.9462 20.4823L12.9421 20.391L12.9054 19.9909L12.6021 19.7274L11.9462 20.4823ZM9.80269 24.8307L9.17934 24.0487L10.1848 25.7548L9.80269 24.8307ZM15.9909 22.272L16.1074 21.2788L15.8491 21.2485L15.6088 21.3479L15.9909 22.272ZM23.3978 14.8024C23.3978 18.404 20.4782 21.3236 16.8766 21.3236V23.3236C21.5828 23.3236 25.3978 19.5085 25.3978 14.8024H23.3978ZM16.8766 8.28125C20.4782 8.28125 23.3978 11.2009 23.3978 14.8024H25.3978C25.3978 10.0963 21.5828 6.28125 16.8766 6.28125V8.28125ZM10.3555 14.8024C10.3555 11.2009 13.2751 8.28125 16.8766 8.28125V6.28125C12.1705 6.28125 8.35547 10.0963 8.35547 14.8024H10.3555ZM12.6021 19.7274C11.2242 18.5303 10.3555 16.7684 10.3555 14.8024H8.35547C8.35547 17.3718 9.49387 19.6764 11.2904 21.2372L12.6021 19.7274ZM10.426 25.6126C11.2903 24.9236 12.011 24.2446 12.461 23.3911C12.9279 22.5053 13.0478 21.5434 12.9421 20.391L10.9504 20.5736C11.0334 21.4782 10.923 22.0197 10.6917 22.4584C10.4434 22.9294 9.99803 23.3961 9.17934 24.0487L10.426 25.6126ZM15.6088 21.3479L9.42059 23.9066L10.1848 25.7548L16.373 23.1961L15.6088 21.3479ZM16.8766 21.3236C16.616 21.3236 16.3593 21.3084 16.1074 21.2788L15.8744 23.2652C16.2035 23.3038 16.538 23.3236 16.8766 23.3236V21.3236Z",
                                    fill: "white",
                                    mask: "url(#path-1-inside-1_404_15852)",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "12.6992",
                                    y: "12.2969",
                                    width: "9.19255",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "12.6992",
                                    y: "17.3086",
                                    width: "9.19255",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "12.6992",
                                    y: "14.8047",
                                    width: "6.68549",
                                    height: "0.835687",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "28.9141",
                                    y: "10.9609",
                                    width: "4.34275",
                                    height: "9.35687",
                                    rx: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "0.5",
                                    y: "10.9609",
                                    width: "4.34275",
                                    height: "9.35687",
                                    rx: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("path", {
                                    d: "M2.67188 11.4578C2.67188 11.4578 5.59678 0.593908 16.8786 1.01175C28.1603 1.42959 31.0852 11.4578 31.0852 11.4578",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("path", {
                                    d: "M18.5508 29.8438C29.8326 29.4259 31.0861 19.8144 31.0861 19.8144",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("circle", {
                                    cx: "16.8784",
                                    cy: "29.8432",
                                    r: "2.17137",
                                    stroke: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                })]
                            })
                        })
                    }), e && (0, s.jsx)("button", {
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "jsx-b2175eddc795f2f0 scroll-to-top-button mt-[10px] ",
                        children: (0, s.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "62",
                            height: "62",
                            viewBox: "0 0 62 62",
                            fill: "none",
                            className: "jsx-b2175eddc795f2f0",
                            children: [(0, s.jsxs)("g", {
                                filter: "url(#filter0_d_277_15844)",
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, s.jsx)("rect", {
                                    x: "4",
                                    width: "54",
                                    height: "54",
                                    rx: "27",
                                    fill: "#650010",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("rect", {
                                    x: "4",
                                    width: "54",
                                    height: "54",
                                    rx: "27",
                                    fill: "url(#paint0_linear_277_15844)",
                                    "fill-opacity": "0.2",
                                    className: "jsx-b2175eddc795f2f0"
                                }), (0, s.jsx)("path", {
                                    d: "M32.2021 19.7979C31.5382 19.134 30.4618 19.134 29.7979 19.7979L18.9792 30.6167C18.3153 31.2805 18.3153 32.3569 18.9792 33.0208C19.6431 33.6847 20.7195 33.6847 21.3833 33.0208L31 23.4042L40.6167 33.0208C41.2805 33.6847 42.3569 33.6847 43.0208 33.0208C43.6847 32.3569 43.6847 31.2805 43.0208 30.6167L32.2021 19.7979ZM32.7 22L32.7 21L29.3 21L29.3 22L32.7 22Z",
                                    fill: "white",
                                    className: "jsx-b2175eddc795f2f0"
                                })]
                            }), (0, s.jsxs)("defs", {
                                className: "jsx-b2175eddc795f2f0",
                                children: [(0, s.jsxs)("filter", {
                                    id: "filter0_d_277_15844",
                                    x: "0",
                                    y: "0",
                                    width: "62",
                                    height: "62",
                                    filterUnits: "userSpaceOnUse",
                                    "color-interpolation-filters": "sRGB",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: [(0, s.jsx)("feFlood", {
                                        "flood-opacity": "0",
                                        result: "BackgroundImageFix",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feOffset", {
                                        dy: "4",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feGaussianBlur", {
                                        stdDeviation: "2",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "out",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "BackgroundImageFix",
                                        result: "effect1_dropShadow_277_15844",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_dropShadow_277_15844",
                                        result: "shape",
                                        className: "jsx-b2175eddc795f2f0"
                                    })]
                                }), (0, s.jsxs)("linearGradient", {
                                    id: "paint0_linear_277_15844",
                                    x1: "31",
                                    y1: "0",
                                    x2: "31",
                                    y2: "54",
                                    gradientUnits: "userSpaceOnUse",
                                    className: "jsx-b2175eddc795f2f0",
                                    children: [(0, s.jsx)("stop", {
                                        "stop-color": "white",
                                        "stop-opacity": "0",
                                        className: "jsx-b2175eddc795f2f0"
                                    }), (0, s.jsx)("stop", {
                                        offset: "1",
                                        className: "jsx-b2175eddc795f2f0"
                                    })]
                                })]
                            })]
                        })
                    }), (0, s.jsx)(i(), {
                        id: "b2175eddc795f2f0",
                        children: ".scroll-to-top.jsx-b2175eddc795f2f0{position:fixed;right:20px;bottom:20px;z-index:1000}.chat-bot-icon.jsx-b2175eddc795f2f0{position:absolute;right:0;bottom:0;-webkit-transition:bottom.5s ease-in-out;-moz-transition:bottom.5s ease-in-out;-o-transition:bottom.5s ease-in-out;transition:bottom.5s ease-in-out}.chat-bot-icon.move-up.jsx-b2175eddc795f2f0{bottom:60px}.scroll-to-top-button.jsx-b2175eddc795f2f0{border:none;color:white;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;cursor:pointer;font-size:24px;-webkit-transition:background-color.3s;-moz-transition:background-color.3s;-o-transition:background-color.3s;transition:background-color.3s}"
                    })]
                })
            }
        },
        86968: function() {},
        76889: function() {},
        35217: function() {},
        41044: function() {},
        77533: function() {},
        9809: function() {},
        31403: function() {},
        12346: function() {},
        43147: function(e) {
            e.exports = {
                container: "News_container__gebt7",
                head: "News_head__9Wy_Y",
                heading: "News_heading__a8APG",
                card1: "News_card1__JX3am",
                card2: "News_card2__K_LiQ",
                card3: "News_card3__fouxX",
                img1: "News_img1__4IDk4",
                img2: "News_img2__fF4XL",
                img3: "News_img3__3yCiq",
                info: "News_info__KM_RX",
                date: "News_date__38xst",
                circle: "News_circle__yGYvE",
                arrow: "News_arrow__LkyK3",
                explore: "News_explore___zTPP",
                button: "News_button__3bqVR",
                b1: "News_b1__FtM2e",
                b2: "News_b2__LKAba",
                red: "News_red__JUvLM"
            }
        }
    },
    function(e) {
        e.O(0, [327, 902, 8047, 9962, 7164, 9293, 6494, 1465, 2420, 1787, 2502, 1582, 2306, 6115, 3712, 6652, 4590, 8447, 5878, 3203, 9659, 8602, 3984, 5989, 2971, 2117, 1744], function() {
            return e(e.s = 23394)
        }), _N_E = e.O()
    }
]);