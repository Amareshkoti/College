"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9137], {
        69137: function(e, t, i) {
            var s = i(57437),
                l = i(33145),
                a = i(48053),
                n = i(26615),
                r = i(21151),
                c = i(4109),
                o = i(41862),
                d = i(77763);
            let h = [{
                id: 1,
                title: "Quick Links",
                menu: [{
                    id: 1,
                    title: "Careers",
                    link: "/careers"
                }, {
                    id: 2,
                    title: "Hostels",
                    link: "/hostels"
                }, {
                    id: 3,
                    title: "Transport",
                    link: "/transport"
                }, {
                    id: 4,
                    title: "Policies",
                    link: "/policies"
                }, {
                    id: 5,
                    title: "Gallery",
                    link: "/gallery"
                }, {
                    id: 6,
                    title: "Equal Opportunity Cell",
                    link: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/PDFs/Equal+Opportunity+Cell.pdf"
                }, {
                    id: 7,
                    title: "Facilities for differently-abled",
                    link: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/Facilities+for+differently-abled.html"
                }]
            }, {
                id: 2,
                title: "VIT Connect",
                menu: [{
                    id: 1,
                    title: "V-TOP Login",
                    link: "https://vtop.vitap.ac.in"
                }, {
                    id: 2,
                    title: "Mail",
                    link: "http://mail.vitap.ac.in/"
                }, {
                    id: 3,
                    title: "Alumni",
                    link: "https://alumni.vitap.ac.in/"
                }, {
                    id: 4,
                    title: "Contact Us",
                    link: "/contact-us"
                }, {
                    id: 5,
                    title: "Vitie-Bot",
                    link: "/vitiebot"
                }]
            }, {
                id: 3,
                title: "Ranking & Accreditation",
                menu: [{
                    id: 1,
                    title: "RAAC",
                    link: "#"
                }, {
                    id: 2,
                    title: "NAAC",
                    link: "#"
                }]
            }, {
                id: 4,
                title: "Research",
                menu: [{
                    id: 1,
                    title: "Centers",
                    link: "/center-of-excellence"
                }, {
                    id: 2,
                    title: "Google Scholar",
                    link: "https://scholar.google.com/citations?view_op=search_authors&mauthors=vit+ap"
                }, {
                    id: 3,
                    title: "Scopus",
                    link: "https://www.scopus.com/pages/organization/60119614"
                }, {
                    id: 4,
                    title: "Patents",
                    link: "/iprcell"
                }, {
                    id: 4,
                    title: "Projects",
                    link: "/sporic/ssp-completed"
                }, {
                    id: 4,
                    title: "Publications",
                    link: "/academic-research"
                }]
            }, {
                id: 5,
                title: "Academics",
                menu: [{
                    id: 1,
                    title: "All Schools",
                    link: "/allschools"
                }, {
                    id: 2,
                    title: "Programs Offered",
                    link: "/allprograms"
                }, {
                    id: 3,
                    title: "Academic Calendar",
                    link: "/academiccalender"
                }, {
                    id: 4,
                    title: "Academic Leadership",
                    link: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/Acedemic+Leadership.html"
                }, {
                    id: 5,
                    title: "Application Process",
                    link: "/application-process"
                }, {
                    id: 6,
                    title: "Fee Structure",
                    link: "/fees-and-scholarships"
                }, {
                    id: 7,
                    title: "Scholarship",
                    link: "/fees-and-scholarships"
                }, {
                    id: 8,
                    title: "IQAC",
                    link: "/iqac"
                }]
            }, {
                id: 6,
                title: "Information",
                menu: [{
                    id: 1,
                    title: "Public Self Disclosure",
                    link: "https://vitap.ac.in/VITAP_Public_Self_Disclosure.pdf"
                }, {
                    id: 2,
                    title: "Public Notice: University Act",
                    link: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/PDFs/VIT-AP-University-Act.pdf"
                }, {
                    id: 3,
                    title: "Forms",
                    link: "#"
                }, {
                    id: 4,
                    title: "Directory",
                    link: "#"
                }, {
                    id: 5,
                    title: "Feedback",
                    link: "/contact-us#contactForm"
                }, {
                    id: 6,
                    title: "Academic Bank of Credit (ABC)",
                    link: "https://www.abc.gov.in/"
                }, {
                    id: 7,
                    title: "Website Credits",
                    link: "/credits"
                }, {
                    id: 8,
                    title: "e-Samadhan",
                    link: "https://samadhaan.ugc.ac.in/"
                }]
            }];
            t.Z = () => (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                    className: "w-full h-auto bg-white hidden lg:flex py-[100px] md:px-[100px] md:space-x-10 relative ",
                    children: [(0, s.jsx)("div", {
                        className: "md:w-2/3  w-full flex",
                        children: (0, s.jsx)("div", {
                            className: "grid xl:grid-cols-3  w-full md:grid-cols-2",
                            children: h.map(e => (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h1", {
                                        className: "text-[24px] font-Emilio text-primary font-[600] mt-6 mb-2",
                                        children: e.title
                                    }), e.menu.map(e => (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)("div", {
                                            className: "space-y-4 flex flex-col",
                                            children: (0, s.jsx)("a", {
                                                href: e.link,
                                                target: "_blank",
                                                children: (0, s.jsx)("h1", {
                                                    className: "font-[300] text-[18px] cursor-pointer hover:text-primary hover:font-medium duration-300 ease-in-out transition-colors transition-font-weight font-Montserrat",
                                                    children: e.title
                                                }, e.id)
                                            })
                                        })
                                    }))]
                                }, e.id)
                            }))
                        })
                    }), (0, s.jsxs)("div", {
                        className: " w-full lg:w-1/3 hidden lg:block",
                        children: [(0, s.jsx)("iframe", {
                            className: "w-full h-[202px]  hover:shadow-xl transition-shadow duration-200",
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin",
                            allowFullScreen: "",
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }), (0, s.jsx)("h1", {
                            className: "text-[30px] font-Emilio font-medium text-primary mt-3",
                            children: "VIT-AP University, Amaravathi"
                        }), (0, s.jsxs)("div", {
                            className: "text-b;ack font-Montserrat font-[300] mt-3",
                            children: [(0, s.jsx)("h1", {
                                children: "Beside AP Secretariat - 522241,"
                            }), (0, s.jsx)("h1", {
                                children: "Andhra Pradesh."
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex space-x-1 mt-3",
                            children: [(0, s.jsx)("h1", {
                                className: "underline",
                                children: (0, s.jsx)("a", {
                                    href: "https://www.google.com/maps/place/VIT-AP+University/@16.497055,80.499197,15z/data=!4m6!3m5!1s0x3a35f27d40f21c55:0x1490eacd54859850!8m2!3d16.4970554!4d80.4991965!16s%2Fg%2F11gnsnjyhf?hl=en&entry=ttu",
                                    target: "_blank",
                                    children: "HOW TO REACH VIT-AP"
                                })
                            }), (0, s.jsx)(d.HV3, {
                                size: 25,
                                color: "black"
                            })]
                        })]
                    })]
                }), (0, s.jsxs)("div", {
                    className: "w-full h-auto bg-white lg:flex hidden  flex-col items-center justify-center",
                    children: [(0, s.jsxs)("div", {
                        className: "w-full h-[120px] bg-primary relative flex items-center  md:pl-10 lg:pl-20 xl:pl-32",
                        children: [(0, s.jsx)(l.default, {
                            src: c.default,
                            width: 190
                        }), (0, s.jsxs)("div", {
                            className: " flex justify-center flex-col items-center md:pl-10 lg:pl-20 xl:pl-32",
                            children: [(0, s.jsxs)("div", {
                                className: "font-Emilio text-[16px] text-[#E6CFCF] font-[400] flex space-x-4",
                                children: [(0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "VIT-AP Home"
                                }), (0, s.jsx)("a", {
                                    href: "https://www.google.com/maps/place/VIT-AP+University/@16.497055,80.499197,15z/data=!4m6!3m5!1s0x3a35f27d40f21c55:0x1490eacd54859850!8m2!3d16.4970554!4d80.4991965!16s%2Fg%2F11gnsnjyhf?hl=en&entry=ttu",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Maps & Directions"
                                }), (0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Search VIT-AP"
                                }), (0, s.jsx)("a", {
                                    href: "/contact-us",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Emergency Info"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "font-Emilio text-[16px] text-[#E6CFCF] font-[400] flex space-x-4",
                                children: [(0, s.jsx)("a", {
                                    href: "/footer_pages/privacy-policy",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Privacy Policy"
                                }), (0, s.jsx)("a", {
                                    href: "/footer_pages/terms-of-use",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Terms of Use"
                                }), (0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Copyright"
                                }), (0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Trademarks"
                                }), (0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Non-Discrimination"
                                }), (0, s.jsx)("a", {
                                    href: "/",
                                    className: "hover:font-bold transition-all duration-200 flex-none",
                                    children: "Accessibility"
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "w-full h-[57px] flex-wrap bg-[#8C232E] relative bottom-0 flex flex-row items-center justify-around ",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center space-x-1 left-0 relative",
                            children: (0, s.jsx)("h1", {
                                className: "text-[18px] text-white font-Emilio",
                                children: "Copyright \xa9 VIT-AP 2024. All rights reserved"
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)("h1", {
                                className: "font-Emilio text-[18px] text-white italic font-[400] relative left-0",
                                children: (0, s.jsx)("a", {
                                    href: "/credits",
                                    className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                    children: "Crafted with Passion at VIT-AP University by Website Team"
                                })
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsxs)("div", {
                                className: "flex  w-full h-[20px] justify-center items-center space-x-6  flex-wrap",
                                children: [(0, s.jsx)("a", {
                                    href: "https://www.instagram.com/vitap.university/",
                                    target: "_blank",
                                    children: (0, s.jsx)(n.E08, {
                                        className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                        color: "white",
                                        size: 30
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.linkedin.com/school/vitap-university/",
                                    target: "_blank",
                                    children: (0, s.jsx)(a._iD, {
                                        className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                        color: "white",
                                        size: 30
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.facebook.com/vitap.university/",
                                    target: "_blank",
                                    children: (0, s.jsx)(n.xSx, {
                                        className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                        color: "white",
                                        size: 30
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.youtube.com/@VITAP",
                                    target: "_blank",
                                    children: (0, s.jsx)(a.b1v, {
                                        className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                        color: "white",
                                        size: 30
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://twitter.com/VITAPuniversity",
                                    target: "_blank",
                                    children: (0, s.jsx)(r.LCd, {
                                        className: "hover:scale-125 transition-all duration-300 hover:shadow-2xl cursor-pointer",
                                        color: "white",
                                        size: 30
                                    })
                                })]
                            })
                        })]
                    })]
                }), (0, s.jsx)("div", {
                    className: "w-full lg:hidden mb-10",
                    children: (0, s.jsxs)("div", {
                        className: " flex flex-col  items-center mt-10",
                        children: [(0, s.jsx)(l.default, {
                            src: o.default,
                            width: 300,
                            height: 100
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("ul", {
                                className: " text-[18px] text-primary font-[500] font-Emilio mt-6 list-disc flex justify-center  flex-wrap space-x-5",
                                children: [(0, s.jsx)("li", {
                                    className: " flex items-center ",
                                    children: "Apply Now"
                                }), (0, s.jsx)("li", {
                                    className: " flex items-center ",
                                    children: "Maps"
                                }), (0, s.jsx)("li", {
                                    className: " flex items-center",
                                    children: "Outreach"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-wrap  space-x-6 mt-6 justify-center ",
                                children: [(0, s.jsx)("div", {
                                    className: "bg-[#DCCED0] hover:scale-105 w-10 h-10 flex items-center justify-center rounded-sm",
                                    children: (0, s.jsx)("a", {
                                        href: "https://www.instagram.com/vitap.university/",
                                        target: "_blank",
                                        children: (0, s.jsx)(n.E08, {
                                            size: 30,
                                            color: ""
                                        })
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://twitter.com/VITAPuniversity",
                                    target: "_blank",
                                    children: (0, s.jsx)("div", {
                                        className: "bg-[#DCCED0] w-10 h-10 flex items-center justify-center rounded-sm",
                                        children: (0, s.jsx)(r.LCd, {
                                            size: 30
                                        })
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.linkedin.com/school/vitap-university/",
                                    target: "_blank",
                                    children: (0, s.jsx)("div", {
                                        className: "bg-[#DCCED0] w-10 h-10 flex items-center justify-center rounded-sm",
                                        children: (0, s.jsx)(a._iD, {
                                            size: 30
                                        })
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.facebook.com/vitap.university/",
                                    target: "_blank",
                                    children: (0, s.jsx)("div", {
                                        className: "bg-[#DCCED0] w-10 h-10 flex items-center justify-center rounded-sm",
                                        children: (0, s.jsx)(n.xSx, {
                                            size: 30
                                        })
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.youtube.com/@VITAP",
                                    target: "_blank",
                                    children: (0, s.jsx)("div", {
                                        className: "bg-[#DCCED0] w-10 h-10 flex items-center justify-center rounded-sm",
                                        children: (0, s.jsx)(a.b1v, {
                                            size: 30
                                        })
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-full justify-center  flex-col items-center mt-5 flex flex-wrap space-y-3 px-2 ",
                            children: h.map(e => (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("h1", {
                                    className: "text-[20px]  font-[600px] font-Emilio text-primary",
                                    children: e.title
                                }, e.id), (0, s.jsx)("ul", {
                                    className: "flex space-x-6 space-y-1 justify-items-center flex-wrap item justify-center w-full text-[14px] font-Montserrat font-[300] items-center",
                                    children: e.menu.map(e => (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)("a", {
                                            href: e.link,
                                            target: "_blank",
                                            children: (0, s.jsx)("li", {
                                                className: "text-center",
                                                children: e.title
                                            }, e.id)
                                        })
                                    }))
                                })]
                            }))
                        })]
                    })
                }), (0, s.jsxs)("div", {
                    className: "w-full h-[61px] bg-primary lg:hidden flex flex-col justify-center items-center",
                    children: [(0, s.jsx)("h1", {
                        className: "text-[3.8vw] font-Emilio font-[500] text-white",
                        children: "Copyright \xa9 VIT-AP 2024. All rights reserved"
                    }), (0, s.jsx)("h1", {
                        className: "text-[3.8vw] font-Emilio font-[500] text-white",
                        children: "Crafted With Passion At VIT-AP University"
                    })]
                })]
            })
        }
    }
]);