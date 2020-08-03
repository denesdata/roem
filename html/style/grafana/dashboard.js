/*! For license information please see DashboardPage.41bc4b193210d0f899b3.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        "1uty": function(e, t, n) {
            "use strict";

            function r(e) { return e._erd }
            e.exports = { initState: function(e) { return e._erd = {}, r(e) }, getState: r, cleanState: function(e) { delete e._erd } }
        },
        "3ISj": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("/MKj"),
                i = n("p1x6"),
                l = n("bal4"),
                s = n("kDLi"),
                c = n("aWce"),
                u = n("NXk7"),
                d = n("GkHB");

            function p(e) { return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) { m(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function b(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) { return void n(e) }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) { b(a, r, o, i, l, "next", e) }

                        function l(e) { b(a, r, o, i, l, "throw", e) }
                        i(void 0)
                    }))
                }
            }

            function y(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function O(e, t) { return !t || "object" !== p(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function S(e) { return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function w(e, t) { return (w = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var k = function(e) {
                    function t() {
                        var e, n;
                        y(this, t);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (n = O(this, (e = S(t)).call.apply(e, [this].concat(o)))).state = { searchHits: [] }, n.onDropDownClick = g(regeneratorRuntime.mark((function e() {
                            var t, r, o, a, i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.props, r = t.dashboardId, o = t.link, 7, e.next = 4, Object(u.c)().search({ tag: o.tags, limit: 7 });
                                    case 4:
                                        a = e.sent, i = a.filter((function(e) { return e.id !== r })).map((function(e) { return h({}, e, { url: Object(d.b)().getLinkUrl(e) }) })), n.setState({ searchHits: i });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && w(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.link,
                                n = e.linkInfo,
                                r = this.state.searchHits;
                            return o.a.createElement("div", { className: "gf-form" }, o.a.createElement("a", { className: "gf-form-label pointer", target: t.target, onClick: this.onDropDownClick, "data-placement": "bottom", "data-toggle": "dropdown" }, o.a.createElement(s.Icon, { name: "bars" }), o.a.createElement("span", null, n.title)), o.a.createElement("ul", { className: "dropdown-menu pull-right", role: "menu" }, r.length > 1 && r.map((function(e, t) { return o.a.createElement("li", { key: "".concat(e.id, "-").concat(t) }, o.a.createElement("a", { href: Object(c.d)(e.url), target: e.target }, Object(c.c)(e.title))) }))))
                        }
                    }]) && v(n.prototype, r), a && v(n, a), t
                }(r.PureComponent),
                M = n("UrM8"),
                j = function(e) {
                    var t = e.dashboard;
                    return t.links.length > 0 && o.a.createElement(o.a.Fragment, null, t.links.map((function(e, n) {
                        var r = Object(d.b)().getAnchorInfo(e),
                            a = "".concat(e.title, "-$").concat(n);
                        if (e.asDropdown) return o.a.createElement(k, { key: a, link: e, linkInfo: r, dashboardId: t.id });
                        var i = o.a.createElement("a", { className: "gf-form-label", href: Object(c.d)(r.href), target: e.target }, o.a.createElement(s.Icon, { name: M.a[e.icon] }), o.a.createElement("span", null, Object(c.c)(r.title)));
                        return o.a.createElement("div", { key: a, className: "gf-form" }, e.tooltip ? o.a.createElement(s.Tooltip, { content: e.tooltip }, i) : i)
                    })))
                };

            function E(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            var x = s.LegacyForms.Switch,
                P = function(e) {
                    var t = e.annotations,
                        n = e.onAnnotationChanged,
                        a = E(Object(r.useState)([]), 2),
                        i = a[0],
                        l = a[1];
                    return Object(r.useEffect)((function() { l(t.filter((function(e) { return !0 !== e.hide }))) }), [t]), 0 === i.length ? null : o.a.createElement(o.a.Fragment, null, i.map((function(e) { return o.a.createElement("div", { key: e.name, className: e.enable ? "submenu-item" : "submenu-item annotation-disabled" }, o.a.createElement(x, { label: e.name, className: "gf-form", checked: e.enable, onChange: function() { return n(e) } })) })))
                },
                C = n("VBuW");

            function z(e) { return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function T(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function B(e, t) { return !t || "object" !== z(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function W(e) { return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function R(e, t) { return (R = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            n.d(t, "a", (function() { return _ }));
            var I = function(e) {
                    function t() {
                        var e, n;
                        T(this, t);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (n = B(this, (e = W(t)).call.apply(e, [this].concat(o)))).onAnnotationStateChanged = function(e) {
                            for (var t = 0; t < n.props.dashboard.annotations.list.length; t++) { var r = n.props.dashboard.annotations.list[t]; if (r.name === e.name) { r.enable = !r.enable; break } }
                            n.props.dashboard.startRefresh(), n.forceUpdate()
                        }, n.isSubMenuVisible = function() { return n.props.dashboard.links.length > 0 || (n.props.variables.filter((function(e) { return e.hide !== l.a.hideVariable })).length > 0 || n.props.dashboard.annotations.list.filter((function(e) { return !0 !== e.hide })).length > 0) }, n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && R(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.dashboard,
                                n = e.variables;
                            return this.isSubMenuVisible() ? o.a.createElement("div", { className: "submenu-controls" }, o.a.createElement(C.a, { variables: n }), o.a.createElement(P, { annotations: t.annotations.list, onAnnotationChanged: this.onAnnotationStateChanged }), o.a.createElement("div", { className: "gf-form gf-form--grow" }), t && o.a.createElement(j, { dashboard: t }), o.a.createElement("div", { className: "clearfix" })) : null
                        }
                    }]) && D(n.prototype, r), a && D(n, a), t
                }(r.PureComponent),
                _ = Object(a.connect)((function(e) { return { variables: Object(i.e)(e, !1) } }))(I);
            _.displayName = "SubMenu"
        },
        "5jx2": function(e, t, n) {
            var r, o;
            window, e.exports = (r = n("q1tI"), o = n("i8i4"), function(e) {
                var t = {};

                function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function(t) { return e[t] }.bind(null, o));
                    return r
                }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 4)
            }([function(e, t, n) { e.exports = n(5)() }, function(e, t) { e.exports = r }, function(e, t) { e.exports = o }, function(e, t, n) {
                var r;
                ! function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var r = arguments[t];
                            if (r) {
                                var a = typeof r;
                                if ("string" === a || "number" === a) e.push(r);
                                else if (Array.isArray(r) && r.length) {
                                    var i = o.apply(null, r);
                                    i && e.push(i)
                                } else if ("object" === a)
                                    for (var l in r) n.call(r, l) && r[l] && e.push(l)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() { return o }.apply(t, [])) || (e.exports = r)
                }()
            }, function(e, t, n) {
                var r = n(7),
                    o = r.default,
                    a = r.DraggableCore;
                e.exports = o, e.exports.default = o, e.exports.DraggableCore = a
            }, function(e, t, n) {
                "use strict";
                var r = n(6);

                function o() {}

                function a() {}
                a.resetWarningCache = o, e.exports = function() {
                    function e(e, t, n, o, a, i) { if (i !== r) { var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw l.name = "Invariant Violation", l } }

                    function t() { return e }
                    e.isRequired = e;
                    var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: o };
                    return n.PropTypes = n, n
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, function(e, t, n) {
                "use strict";
                n.r(t);
                var r = n(1),
                    o = n.n(r),
                    a = n(0),
                    i = n.n(a),
                    l = n(2),
                    s = n.n(l),
                    c = n(3),
                    u = n.n(c);

                function d(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (t.apply(t, [e[n], n, e])) return e[n]
                }

                function p(e) { return "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e) }

                function f(e) { return "number" == typeof e && !isNaN(e) }

                function h(e) { return parseInt(e, 10) }

                function m(e, t, n) { if (e[t]) return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child.")) }
                var b = ["Moz", "Webkit", "O", "ms"];

                function g(e, t) { return t ? "".concat(t).concat(function(e) { for (var t = "", n = !0, r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : "-" === e[r] ? n = !0 : t += e[r]; return t }(e)) : e }
                var y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                    if ("undefined" == typeof window || void 0 === window.document) return "";
                    var t = window.document.documentElement.style;
                    if (e in t) return "";
                    for (var n = 0; n < b.length; n++)
                        if (g(e, b[n]) in t) return b[n];
                    return ""
                }();

                function v(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var S = "";

                function w(e, t) { return S || (S = d(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(t) { return p(e[t]) }))), !!p(e[S]) && e[S](t) }

                function k(e, t, n) {
                    var r = e;
                    do {
                        if (w(r, t)) return !0;
                        if (r === n) return !1;
                        r = r.parentNode
                    } while (r);
                    return !1
                }

                function M(e, t, n) { e && (e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener ? e.addEventListener(t, n, !0) : e["on" + t] = n) }

                function j(e, t, n) { e && (e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener ? e.removeEventListener(t, n, !0) : e["on" + t] = null) }

                function E(e) {
                    var t = e.clientHeight,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t += h(n.borderTopWidth)) + h(n.borderBottomWidth)
                }

                function x(e) {
                    var t = e.clientWidth,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t += h(n.borderLeftWidth)) + h(n.borderRightWidth)
                }

                function P(e) {
                    var t = e.clientHeight,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t -= h(n.paddingTop)) - h(n.paddingBottom)
                }

                function C(e) {
                    var t = e.clientWidth,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t -= h(n.paddingLeft)) - h(n.paddingRight)
                }

                function z(e, t, n) {
                    var r = e.x,
                        o = e.y,
                        a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
                    if (t) {
                        var i = "".concat("string" == typeof t.x ? t.x : t.x + n),
                            l = "".concat("string" == typeof t.y ? t.y : t.y + n);
                        a = "translate(".concat(i, ", ").concat(l, ")") + a
                    }
                    return a
                }

                function T(e) {
                    if (e) {
                        var t, n, r = e.getElementById("react-draggable-style-el");
                        r || ((r = e.createElement("style")).type = "text/css", r.id = "react-draggable-style-el", r.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", r.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(r)), e.body && (n = "react-draggable-transparent-selection", (t = e.body).classList ? t.classList.add(n) : t.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (t.className += " ".concat(n)))
                    }
                }

                function D(e) { try { e && e.body && (t = e.body, n = "react-draggable-transparent-selection", t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "")), e.selection ? e.selection.empty() : window.getSelection().removeAllRanges() } catch (e) {} var t, n }

                function B() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(n, !0).forEach((function(t) { O(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                        }
                        return e
                    }({ touchAction: "none" }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                }

                function W(e) { return "both" === e.props.axis || "x" === e.props.axis }

                function R(e) { return "both" === e.props.axis || "y" === e.props.axis }

                function I(e, t, n) { var r = "number" == typeof t ? function(e, t) { return e.targetTouches && d(e.targetTouches, (function(e) { return t === e.identifier })) || e.changedTouches && d(e.changedTouches, (function(e) { return t === e.identifier })) }(e, t) : null; if ("number" == typeof t && !r) return null; var o = A(n); return function(e, t, n) { var r = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(); return { x: (e.clientX + t.scrollLeft - r.left) / n, y: (e.clientY + t.scrollTop - r.top) / n } }(r || e, n.props.offsetParent || o.offsetParent || o.ownerDocument.body, n.props.scale) }

                function _(e, t, n) {
                    var r = e.state,
                        o = !f(r.lastX),
                        a = A(e);
                    return o ? { node: a, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n } : { node: a, deltaX: t - r.lastX, deltaY: n - r.lastY, lastX: r.lastX, lastY: r.lastY, x: t, y: n }
                }

                function N(e, t) { var n = e.props.scale; return { node: t.node, x: e.state.x + t.deltaX / n, y: e.state.y + t.deltaY / n, deltaX: t.deltaX / n, deltaY: t.deltaY / n, lastX: e.state.x, lastY: e.state.y } }

                function A(e) { var t = s.a.findDOMNode(e); if (!t) throw new Error("<DraggableCore>: Unmounted during event!"); return t }

                function F(e) { return (F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function L(e, t) {
                    return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                        return n
                    }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                }

                function H(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function G(e) { return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function U(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function V(e, t) { return (V = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function q(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var X = { start: "touchstart", move: "touchmove", stop: "touchend" },
                    Y = { start: "mousedown", move: "mousemove", stop: "mouseup" },
                    Q = Y,
                    $ = function(e) {
                        function t() {
                            var e, n, r, o;
                            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
                            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                            return r = this, o = (e = G(t)).call.apply(e, [this].concat(i)), n = !o || "object" !== F(o) && "function" != typeof o ? U(r) : o, q(U(n), "state", { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }), q(U(n), "handleDragStart", (function(e) {
                                if (n.props.onMouseDown(e), !n.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button) return !1;
                                var t = s.a.findDOMNode(U(n));
                                if (!t || !t.ownerDocument || !t.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
                                var r = t.ownerDocument;
                                if (!(n.props.disabled || !(e.target instanceof r.defaultView.Node) || n.props.handle && !k(e.target, n.props.handle, t) || n.props.cancel && k(e.target, n.props.cancel, t))) {
                                    var o = function(e) { return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0].identifier : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].identifier : void 0 }(e);
                                    n.setState({ touchIdentifier: o });
                                    var a = I(e, o, U(n));
                                    if (null != a) {
                                        var i = a.x,
                                            l = a.y,
                                            c = _(U(n), i, l);
                                        n.props.onStart, !1 !== n.props.onStart(e, c) && (n.props.enableUserSelectHack && T(r), n.setState({ dragging: !0, lastX: i, lastY: l }), M(r, Q.move, n.handleDrag), M(r, Q.stop, n.handleDragStop))
                                    }
                                }
                            })), q(U(n), "handleDrag", (function(e) {
                                "touchmove" === e.type && e.preventDefault();
                                var t = I(e, n.state.touchIdentifier, U(n));
                                if (null != t) {
                                    var r, o, a, i = t.x,
                                        l = t.y;
                                    if (Array.isArray(n.props.grid)) {
                                        var s = i - n.state.lastX,
                                            c = l - n.state.lastY,
                                            u = L((r = n.props.grid, o = s, a = c, [Math.round(o / r[0]) * r[0], Math.round(a / r[1]) * r[1]]), 2);
                                        if (s = u[0], c = u[1], !s && !c) return;
                                        i = n.state.lastX + s, l = n.state.lastY + c
                                    }
                                    var d = _(U(n), i, l);
                                    if (!1 !== n.props.onDrag(e, d)) n.setState({ lastX: i, lastY: l });
                                    else try { n.handleDragStop(new MouseEvent("mouseup")) } catch (e) {
                                        var p = document.createEvent("MouseEvents");
                                        p.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.handleDragStop(p)
                                    }
                                }
                            })), q(U(n), "handleDragStop", (function(e) {
                                if (n.state.dragging) {
                                    var t = I(e, n.state.touchIdentifier, U(n));
                                    if (null != t) {
                                        var r = t.x,
                                            o = t.y,
                                            a = _(U(n), r, o),
                                            i = s.a.findDOMNode(U(n));
                                        i && n.props.enableUserSelectHack && D(i.ownerDocument), n.setState({ dragging: !1, lastX: NaN, lastY: NaN }), n.props.onStop(e, a), i && (j(i.ownerDocument, Q.move, n.handleDrag), j(i.ownerDocument, Q.stop, n.handleDragStop))
                                    }
                                }
                            })), q(U(n), "onMouseDown", (function(e) { return Q = Y, n.handleDragStart(e) })), q(U(n), "onMouseUp", (function(e) { return Q = Y, n.handleDragStop(e) })), q(U(n), "onTouchStart", (function(e) { return Q = X, n.handleDragStart(e) })), q(U(n), "onTouchEnd", (function(e) { return Q = X, n.handleDragStop(e) })), n
                        }
                        var n, r;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && V(e, t)
                        }(t, o.a.Component), n = t, (r = [{
                            key: "componentWillUnmount",
                            value: function() {
                                var e = s.a.findDOMNode(this);
                                if (e) {
                                    var t = e.ownerDocument;
                                    j(t, Y.move, this.handleDrag), j(t, X.move, this.handleDrag), j(t, Y.stop, this.handleDragStop), j(t, X.stop, this.handleDragStop), this.props.enableUserSelectHack && D(t)
                                }
                            }
                        }, { key: "render", value: function() { return o.a.cloneElement(o.a.Children.only(this.props.children), { style: B(this.props.children.props.style), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd }) } }]) && H(n.prototype, r), t
                    }();

                function J(e) { return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function K() { return (K = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

                function Z(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                    }
                    return n
                }

                function ee(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Z(n, !0).forEach((function(t) { ie(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                    }
                    return e
                }

                function te(e) { return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function ne(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function re(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function oe(e, t, n) { return t && re(e.prototype, t), n && re(e, n), e }

                function ae(e, t) { return (ae = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function ie(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                q($, "displayName", "DraggableCore"), q($, "propTypes", { allowAnyClick: i.a.bool, disabled: i.a.bool, enableUserSelectHack: i.a.bool, offsetParent: function(e, t) { if (e[t] && 1 !== e[t].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.") }, grid: i.a.arrayOf(i.a.number), handle: i.a.string, cancel: i.a.string, onStart: i.a.func, onDrag: i.a.func, onStop: i.a.func, onMouseDown: i.a.func, scale: i.a.number, className: m, style: m, transform: m }), q($, "defaultProps", { allowAnyClick: !1, cancel: null, disabled: !1, enableUserSelectHack: !0, offsetParent: null, handle: null, grid: null, transform: null, onStart: function() {}, onDrag: function() {}, onStop: function() {}, onMouseDown: function() {}, scale: 1 }), n.d(t, "default", (function() { return le })), n.d(t, "DraggableCore", (function() { return $ }));
                var le = function(e) {
                    function t(e) {
                        var n, r;
                        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), r = te(t).call(this, e), n = !r || "object" !== J(r) && "function" != typeof r ? ne(this) : r, ie(ne(n), "onDragStart", (function(e, t) {
                            if (!1 === n.props.onStart(e, N(ne(n), t))) return !1;
                            n.setState({ dragging: !0, dragged: !0 })
                        })), ie(ne(n), "onDrag", (function(e, t) {
                            if (!n.state.dragging) return !1;
                            var r = N(ne(n), t),
                                o = { x: r.x, y: r.y };
                            if (n.props.bounds) {
                                var a = o.x,
                                    i = o.y;
                                o.x += n.state.slackX, o.y += n.state.slackY;
                                var l = function(e, t) {
                                        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                                            var n = [],
                                                r = !0,
                                                o = !1,
                                                a = void 0;
                                            try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                                            return n
                                        }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                                    }(function(e, t, n) {
                                        if (!e.props.bounds) return [t, n];
                                        var r = e.props.bounds;
                                        r = "string" == typeof r ? r : function(e) { return { left: e.left, top: e.top, right: e.right, bottom: e.bottom } }(r);
                                        var o = A(e);
                                        if ("string" == typeof r) {
                                            var a, i = o.ownerDocument,
                                                l = i.defaultView;
                                            if (!((a = "parent" === r ? o.parentNode : i.querySelector(r)) instanceof l.HTMLElement)) throw new Error('Bounds selector "' + r + '" could not find an element.');
                                            var s = l.getComputedStyle(o),
                                                c = l.getComputedStyle(a);
                                            r = { left: -o.offsetLeft + h(c.paddingLeft) + h(s.marginLeft), top: -o.offsetTop + h(c.paddingTop) + h(s.marginTop), right: C(a) - x(o) - o.offsetLeft + h(c.paddingRight) - h(s.marginRight), bottom: P(a) - E(o) - o.offsetTop + h(c.paddingBottom) - h(s.marginBottom) }
                                        }
                                        return f(r.right) && (t = Math.min(t, r.right)), f(r.bottom) && (n = Math.min(n, r.bottom)), f(r.left) && (t = Math.max(t, r.left)), f(r.top) && (n = Math.max(n, r.top)), [t, n]
                                    }(ne(n), o.x, o.y), 2),
                                    s = l[0],
                                    c = l[1];
                                o.x = s, o.y = c, o.slackX = n.state.slackX + (a - o.x), o.slackY = n.state.slackY + (i - o.y), r.x = o.x, r.y = o.y, r.deltaX = o.x - n.state.x, r.deltaY = o.y - n.state.y
                            }
                            if (!1 === n.props.onDrag(e, r)) return !1;
                            n.setState(o)
                        })), ie(ne(n), "onDragStop", (function(e, t) {
                            if (!n.state.dragging) return !1;
                            if (!1 === n.props.onStop(e, N(ne(n), t))) return !1;
                            var r = { dragging: !1, slackX: 0, slackY: 0 };
                            if (Boolean(n.props.position)) {
                                var o = n.props.position,
                                    a = o.x,
                                    i = o.y;
                                r.x = a, r.y = i
                            }
                            n.setState(r)
                        })), n.state = { dragging: !1, dragged: !1, x: e.position ? e.position.x : e.defaultPosition.x, y: e.position ? e.position.y : e.defaultPosition.y, prevPropsPosition: ee({}, e.position), slackX: 0, slackY: 0, isElementSVG: !1 }, !e.position || e.onDrag || e.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ae(e, t)
                    }(t, o.a.Component), oe(t, null, [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.position,
                                r = t.prevPropsPosition;
                            return !n || r && n.x === r.x && n.y === r.y ? null : { x: n.x, y: n.y, prevPropsPosition: ee({}, n) }
                        }
                    }]), oe(t, [{ key: "componentDidMount", value: function() { void 0 !== window.SVGElement && s.a.findDOMNode(this) instanceof window.SVGElement && this.setState({ isElementSVG: !0 }) } }, { key: "componentWillUnmount", value: function() { this.setState({ dragging: !1 }) } }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = (t.axis, t.bounds, t.children),
                                r = t.defaultPosition,
                                a = t.defaultClassName,
                                i = t.defaultClassNameDragging,
                                l = t.defaultClassNameDragged,
                                s = t.position,
                                c = t.positionOffset,
                                d = (t.scale, function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, o = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                        return o
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                                    return o
                                }(t, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"])),
                                p = {},
                                f = null,
                                h = !Boolean(s) || this.state.dragging,
                                m = s || r,
                                b = { x: W(this) && h ? this.state.x : m.x, y: R(this) && h ? this.state.y : m.y };
                            this.state.isElementSVG ? f = function(e, t) { return z(e, t, "") }(b, c) : p = function(e, t) { var n = z(e, t, "px"); return O({}, g("transform", y), n) }(b, c);
                            var v = u()(n.props.className || "", a, (ie(e = {}, i, this.state.dragging), ie(e, l, this.state.dragged), e));
                            return o.a.createElement($, K({}, d, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), o.a.cloneElement(o.a.Children.only(n), { className: v, style: ee({}, n.props.style, {}, p), transform: f }))
                        }
                    }]), t
                }();
                ie(le, "displayName", "Draggable"), ie(le, "propTypes", ee({}, $.propTypes, { axis: i.a.oneOf(["both", "x", "y", "none"]), bounds: i.a.oneOfType([i.a.shape({ left: i.a.number, right: i.a.number, top: i.a.number, bottom: i.a.number }), i.a.string, i.a.oneOf([!1])]), defaultClassName: i.a.string, defaultClassNameDragging: i.a.string, defaultClassNameDragged: i.a.string, defaultPosition: i.a.shape({ x: i.a.number, y: i.a.number }), positionOffset: i.a.shape({ x: i.a.oneOfType([i.a.number, i.a.string]), y: i.a.oneOfType([i.a.number, i.a.string]) }), position: i.a.shape({ x: i.a.number, y: i.a.number }), className: m, style: m, transform: m })), ie(le, "defaultProps", ee({}, $.defaultProps, { axis: "both", bounds: !1, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, position: null, scale: 1 }))
            }]))
        },
        "6iOD": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var r = c(n("q1tI")),
                o = c(n("17x9")),
                a = c(n("XaGS")),
                i = n("T0XP"),
                l = n("Qgwu"),
                s = c(n("fEyB"));

            function c(e) { return e && e.__esModule ? e : { default: e } }

            function u(e) { return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function d() { return (d = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(n, !0).forEach((function(t) { S(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) { return !t || "object" !== u(t) && "function" != typeof t ? v(e) : t }

            function y(e) { return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function v(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function O(e, t) { return (O = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function S(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var w = function(e) { return Object.prototype.toString.call(e) };

            function k(e, t) { return Array.isArray(e) ? e : e[t] }
            var M = function(e) {
                function t() {
                    var e, n;
                    m(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return S(v(n = g(this, (e = y(t)).call.apply(e, [this].concat(o)))), "state", n.generateInitialState()), S(v(n), "onLayoutChange", (function(e) { n.props.onLayoutChange(e, h({}, n.props.layouts, S({}, n.state.breakpoint, e))) })), n
                }
                var n, o, c;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && O(e, t)
                }(t, e), n = t, c = [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        if (!(0, a.default)(e.layouts, t.layouts)) {
                            var n = t.breakpoint,
                                r = t.cols;
                            return { layout: (0, l.findOrGenerateResponsiveLayout)(e.layouts, e.breakpoints, n, n, r, e.compactType), layouts: e.layouts }
                        }
                        return null
                    }
                }], (o = [{
                    key: "generateInitialState",
                    value: function() {
                        var e = this.props,
                            t = e.width,
                            n = e.breakpoints,
                            r = e.layouts,
                            o = e.cols,
                            a = (0, l.getBreakpointFromWidth)(n, t),
                            i = (0, l.getColsFromBreakpoint)(a, o),
                            s = !1 === this.props.verticalCompact ? null : this.props.compactType;
                        return { layout: (0, l.findOrGenerateResponsiveLayout)(r, n, a, a, i, s), breakpoint: a, cols: i }
                    }
                }, { key: "componentDidUpdate", value: function(e) { this.props.width == e.width && this.props.breakpoint === e.breakpoint && (0, a.default)(this.props.breakpoints, e.breakpoints) && (0, a.default)(this.props.cols, e.cols) || this.onWidthChange(this.props) } }, {
                    key: "onWidthChange",
                    value: function(e) {
                        var t = e.breakpoints,
                            n = e.cols,
                            r = e.layouts,
                            o = e.compactType,
                            a = e.breakpoint || (0, l.getBreakpointFromWidth)(e.breakpoints, e.width),
                            s = this.state.breakpoint,
                            c = (0, l.getColsFromBreakpoint)(a, n);
                        if (s !== a || this.props.breakpoints !== t || this.props.cols !== n) {
                            s in r || (r[s] = (0, i.cloneLayout)(this.state.layout));
                            var u = (0, l.findOrGenerateResponsiveLayout)(r, t, a, s, c, o);
                            u = (0, i.synchronizeLayoutWithChildren)(u, e.children, c, o), r[a] = u, this.props.onLayoutChange(u, r), this.props.onBreakpointChange(a, c), this.setState({ breakpoint: a, layout: u, cols: c })
                        }
                        var d = k(e.margin, a),
                            p = k(e.containerPadding, a);
                        this.props.onWidthChange(e.width, d, c, p)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.breakpoint, e.breakpoints, e.cols, e.layouts, e.margin),
                            n = e.containerPadding,
                            o = (e.onBreakpointChange, e.onLayoutChange, e.onWidthChange, p(e, ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"]));
                        return r.default.createElement(s.default, d({}, o, { margin: k(t, this.state.breakpoint), containerPadding: k(n, this.state.breakpoint), onLayoutChange: this.onLayoutChange, layout: this.state.layout, cols: this.state.cols }))
                    }
                }]) && b(n.prototype, o), c && b(n, c), t
            }(r.default.Component);
            t.default = M, S(M, "propTypes", {
                breakpoint: o.default.string,
                breakpoints: o.default.object,
                cols: o.default.object,
                margin: o.default.oneOfType([o.default.array, o.default.object]),
                containerPadding: o.default.oneOfType([o.default.array, o.default.object]),
                layouts: function(e, t) {
                    if ("[object Object]" !== w(e[t])) throw new Error("Layout property must be an object. Received: " + w(e[t]));
                    Object.keys(e[t]).forEach((function(t) {
                        if (!(t in e.breakpoints)) throw new Error("Each key in layouts must align with a key in breakpoints.");
                        (0, i.validateLayout)(e.layouts[t], "layouts." + t)
                    }))
                },
                width: o.default.number.isRequired,
                onBreakpointChange: o.default.func,
                onLayoutChange: o.default.func,
                onWidthChange: o.default.func
            }), S(M, "defaultProps", { breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }, layouts: {}, margin: [10, 10], containerPadding: { lg: null, md: null, sm: null, xs: null, xxs: null }, onBreakpointChange: i.noop, onLayoutChange: i.noop, onWidthChange: i.noop })
        },
        "7sSR": function(e, t, n) {
            "use strict";
            var r = n("t3DW").forEach,
                o = n("W+U1"),
                a = n("Sa1T"),
                i = n("LO96"),
                l = n("UFhH"),
                s = n("q7TX"),
                c = n("GOnX"),
                u = n("wnTG"),
                d = n("1uty"),
                p = n("GNKm"),
                f = n("yUZ2");

            function h(e) { return Array.isArray(e) || void 0 !== e.length }

            function m(e) { if (Array.isArray(e)) return e; var t = []; return r(e, (function(e) { t.push(e) })), t }

            function b(e) { return e && 1 === e.nodeType }

            function g(e, t, n) { var r = e[t]; return null == r && void 0 !== n ? n : r }
            e.exports = function(e) {
                var t;
                if ((e = e || {}).idHandler) t = { get: function(t) { return e.idHandler.get(t, !0) }, set: e.idHandler.set };
                else {
                    var n = i(),
                        y = l({ idGenerator: n, stateHandler: d });
                    t = y
                }
                var v = e.reporter;
                v || (v = s(!1 === v));
                var O = g(e, "batchProcessor", u({ reporter: v })),
                    S = {};
                S.callOnAdd = !!g(e, "callOnAdd", !0), S.debug = !!g(e, "debug", !1);
                var w, k = a(t),
                    M = o({ stateHandler: d }),
                    j = g(e, "strategy", "object"),
                    E = g(e, "important", !1),
                    x = { reporter: v, batchProcessor: O, stateHandler: d, idHandler: t, important: E };
                if ("scroll" === j && (c.isLegacyOpera() ? (v.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), j = "object") : c.isIE(9) && (v.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), j = "object")), "scroll" === j) w = f(x);
                else {
                    if ("object" !== j) throw new Error("Invalid strategy name: " + j);
                    w = p(x)
                }
                var P = {};
                return {
                    listenTo: function(e, n, o) {
                        function a(e) {
                            var t = k.get(e);
                            r(t, (function(t) { t(e) }))
                        }

                        function i(e, t, n) { k.add(t, n), e && n(t) }
                        if (o || (o = n, n = e, e = {}), !n) throw new Error("At least one element required.");
                        if (!o) throw new Error("Listener required.");
                        if (b(n)) n = [n];
                        else {
                            if (!h(n)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            n = m(n)
                        }
                        var l = 0,
                            s = g(e, "callOnAdd", S.callOnAdd),
                            c = g(e, "onReady", (function() {})),
                            u = g(e, "debug", S.debug);
                        r(n, (function(e) {
                            d.getState(e) || (d.initState(e), t.set(e));
                            var p = t.get(e);
                            if (u && v.log("Attaching listener to element", p, e), !M.isDetectable(e)) return u && v.log(p, "Not detectable."), M.isBusy(e) ? (u && v.log(p, "System busy making it detectable"), i(s, e, o), P[p] = P[p] || [], void P[p].push((function() {++l === n.length && c() }))) : (u && v.log(p, "Making detectable..."), M.markBusy(e, !0), w.makeDetectable({ debug: u, important: E }, e, (function(e) {
                                if (u && v.log(p, "onElementDetectable"), d.getState(e)) {
                                    M.markAsDetectable(e), M.markBusy(e, !1), w.addListener(e, a), i(s, e, o);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var f = e.offsetWidth,
                                            h = e.offsetHeight;
                                        t.startSize.width === f && t.startSize.height === h || a(e)
                                    }
                                    P[p] && r(P[p], (function(e) { e() }))
                                } else u && v.log(p, "Element uninstalled before being detectable.");
                                delete P[p], ++l === n.length && c()
                            })));
                            u && v.log(p, "Already detecable, adding listener."), i(s, e, o), l++
                        })), l === n.length && c()
                    },
                    removeListener: k.removeListener,
                    removeAllListeners: k.removeAllListeners,
                    uninstall: function(e) {
                        if (!e) return v.error("At least one element is required.");
                        if (b(e)) e = [e];
                        else {
                            if (!h(e)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            e = m(e)
                        }
                        r(e, (function(e) { k.removeAllListeners(e), w.uninstall(e), d.cleanState(e) }))
                    },
                    initDocument: function(e) { w.initDocument && w.initDocument(e) }
                }
            }
        },
        ChGz: function(e, t, n) { e.exports = n("fEyB").default, e.exports.utils = n("T0XP"), e.exports.Responsive = n("6iOD").default, e.exports.Responsive.utils = n("Qgwu"), e.exports.WidthProvider = n("NmA4").default },
        "E56+": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = i(n("q1tI")),
                o = i(n("17x9")),
                a = i(n("jqYm"));

            function i(e) { return e && e.__esModule ? e : { default: e } }

            function l() { return (l = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function s(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function c(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var u = function(e) {
                var t, n;

                function o() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return c(s(t = e.call.apply(e, [this].concat(r)) || this), "state", { width: t.props.width, height: t.props.height, propsWidth: t.props.width, propsHeight: t.props.height }), c(s(t), "onResize", (function(e, n) {
                        var r = n.size;
                        r.width, r.height;
                        t.props.onResize ? (e.persist && e.persist(), t.setState(r, (function() { return t.props.onResize && t.props.onResize(e, n) }))) : t.setState(r)
                    })), t
                }
                return n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.getDerivedStateFromProps = function(e, t) { return t.propsWidth !== e.width || t.propsHeight !== e.height ? { width: e.width, height: e.height, propsWidth: e.width, propsHeight: e.height } : null }, o.prototype.render = function() {
                    var e = this.props,
                        t = e.handle,
                        n = e.handleSize,
                        o = (e.onResize, e.onResizeStart),
                        i = e.onResizeStop,
                        s = e.draggableOpts,
                        c = e.minConstraints,
                        u = e.maxConstraints,
                        d = e.lockAspectRatio,
                        p = e.axis,
                        f = (e.width, e.height, e.resizeHandles),
                        h = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles"]);
                    return r.default.createElement(a.default, { handle: t, handleSize: n, width: this.state.width, height: this.state.height, onResizeStart: o, onResize: this.onResize, onResizeStop: i, draggableOpts: s, minConstraints: c, maxConstraints: u, lockAspectRatio: d, axis: p, resizeHandles: f }, r.default.createElement("div", l({ style: { width: this.state.width + "px", height: this.state.height + "px" } }, h)))
                }, o
            }(r.default.Component);
            t.default = u, c(u, "propTypes", { height: o.default.number, width: o.default.number }), c(u, "defaultProps", { handleSize: [20, 20] })
        },
        FFox: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("TSYQ"),
                i = n.n(a),
                l = n("kDLi"),
                s = n("5kRJ"),
                c = n("Xmxp"),
                u = n("GQ3c");

            function d(e) { return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) { return !t || "object" !== d(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function h(e) { return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function m(e, t) { return (m = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var b = function(e) {
                function t(e) { var n; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), (n = f(this, h(t).call(this, e))).onVariableUpdated = function() { n.forceUpdate() }, n.onToggle = function() { n.props.dashboard.toggleRow(n.props.panel), n.setState((function(e) { return { collapsed: !e.collapsed } })) }, n.onUpdate = function() { n.props.dashboard.processRepeats(), n.forceUpdate() }, n.onOpenSettings = function() { c.b.emit(u.CoreEvents.showModal, { templateHtml: '<row-options row="model.row" on-updated="model.onUpdated()" dismiss="dismiss()"></row-options>', modalClass: "modal--narrow", model: { row: n.props.panel, onUpdated: n.onUpdate } }) }, n.onDelete = function() { c.b.emit(u.CoreEvents.showConfirmModal, { title: "Delete Row", text: "Are you sure you want to remove this row and all its panels?", altActionText: "Delete row only", icon: "fa-trash", onConfirm: function() { n.props.dashboard.removeRow(n.props.panel, !0) }, onAltAction: function() { n.props.dashboard.removeRow(n.props.panel, !1) } }) }, n.state = { collapsed: n.props.panel.collapsed }, n.props.dashboard.on(u.CoreEvents.templateVariableValueUpdated, n.onVariableUpdated), n }
                var n, r, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && m(e, t)
                }(t, e), n = t, (r = [{ key: "componentWillUnmount", value: function() { this.props.dashboard.off(u.CoreEvents.templateVariableValueUpdated, this.onVariableUpdated) } }, {
                    key: "render",
                    value: function() {
                        var e = i()({ "dashboard-row": !0, "dashboard-row--collapsed": this.state.collapsed }),
                            t = s.b.replaceWithText(this.props.panel.title, this.props.panel.scopedVars),
                            n = this.props.panel.panels ? this.props.panel.panels.length : 0,
                            r = 1 === n ? "panel" : "panels",
                            a = !0 === this.props.dashboard.meta.canEdit;
                        return o.a.createElement("div", { className: e }, o.a.createElement("a", { className: "dashboard-row__title pointer", onClick: this.onToggle }, o.a.createElement(l.Icon, { name: this.state.collapsed ? "angle-right" : "angle-down" }), t, o.a.createElement("span", { className: "dashboard-row__panel_count" }, "(", n, " ", r, ")")), a && o.a.createElement("div", { className: "dashboard-row__actions" }, o.a.createElement("a", { className: "pointer", onClick: this.onOpenSettings }, o.a.createElement(l.Icon, { name: "cog" })), o.a.createElement("a", { className: "pointer", onClick: this.onDelete }, o.a.createElement(l.Icon, { name: "trash-alt" }))), !0 === this.state.collapsed && o.a.createElement("div", { className: "dashboard-row__toggle-target", onClick: this.onToggle }, " "), a && o.a.createElement("div", { className: "dashboard-row__drag grid-drag-handle" }))
                    }
                }]) && p(n.prototype, r), a && p(n, a), t
            }(o.a.Component);
            n.d(t, "a", (function() { return b }))
        },
        FdMb: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                var o, a = !1,
                    i = 0;

                function l() { o && clearTimeout(o) }

                function s() {
                    var s = this,
                        c = Date.now() - i,
                        u = arguments;

                    function d() { i = Date.now(), n.apply(s, u) }

                    function p() { o = void 0 }
                    a || (r && !o && d(), l(), void 0 === r && c > e ? d() : !0 !== t && (o = setTimeout(r ? p : d, void 0 === r ? e - c : e)))
                }
                return "boolean" != typeof t && (r = n, n = t, t = void 0), s.cancel = function() { l(), a = !0 }, s
            }

            function o(e, t, n) { return void 0 === n ? r(e, t, !1) : r(e, n, !1 !== t) }
            n.r(t), n.d(t, "throttle", (function() { return r })), n.d(t, "debounce", (function() { return o }))
        },
        Fxvz: function(e, t) { e.exports = ["alignContent", "MozAlignContent", "WebkitAlignContent", "MSAlignContent", "OAlignContent", "alignItems", "MozAlignItems", "WebkitAlignItems", "MSAlignItems", "OAlignItems", "alignSelf", "MozAlignSelf", "WebkitAlignSelf", "MSAlignSelf", "OAlignSelf", "all", "MozAll", "WebkitAll", "MSAll", "OAll", "animation", "MozAnimation", "WebkitAnimation", "MSAnimation", "OAnimation", "animationDelay", "MozAnimationDelay", "WebkitAnimationDelay", "MSAnimationDelay", "OAnimationDelay", "animationDirection", "MozAnimationDirection", "WebkitAnimationDirection", "MSAnimationDirection", "OAnimationDirection", "animationDuration", "MozAnimationDuration", "WebkitAnimationDuration", "MSAnimationDuration", "OAnimationDuration", "animationFillMode", "MozAnimationFillMode", "WebkitAnimationFillMode", "MSAnimationFillMode", "OAnimationFillMode", "animationIterationCount", "MozAnimationIterationCount", "WebkitAnimationIterationCount", "MSAnimationIterationCount", "OAnimationIterationCount", "animationName", "MozAnimationName", "WebkitAnimationName", "MSAnimationName", "OAnimationName", "animationPlayState", "MozAnimationPlayState", "WebkitAnimationPlayState", "MSAnimationPlayState", "OAnimationPlayState", "animationTimingFunction", "MozAnimationTimingFunction", "WebkitAnimationTimingFunction", "MSAnimationTimingFunction", "OAnimationTimingFunction", "backfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "MSBackfaceVisibility", "OBackfaceVisibility", "background", "MozBackground", "WebkitBackground", "MSBackground", "OBackground", "backgroundAttachment", "MozBackgroundAttachment", "WebkitBackgroundAttachment", "MSBackgroundAttachment", "OBackgroundAttachment", "backgroundBlendMode", "MozBackgroundBlendMode", "WebkitBackgroundBlendMode", "MSBackgroundBlendMode", "OBackgroundBlendMode", "backgroundClip", "MozBackgroundClip", "WebkitBackgroundClip", "MSBackgroundClip", "OBackgroundClip", "backgroundColor", "MozBackgroundColor", "WebkitBackgroundColor", "MSBackgroundColor", "OBackgroundColor", "backgroundImage", "MozBackgroundImage", "WebkitBackgroundImage", "MSBackgroundImage", "OBackgroundImage", "backgroundOrigin", "MozBackgroundOrigin", "WebkitBackgroundOrigin", "MSBackgroundOrigin", "OBackgroundOrigin", "backgroundPosition", "MozBackgroundPosition", "WebkitBackgroundPosition", "MSBackgroundPosition", "OBackgroundPosition", "backgroundRepeat", "MozBackgroundRepeat", "WebkitBackgroundRepeat", "MSBackgroundRepeat", "OBackgroundRepeat", "backgroundSize", "MozBackgroundSize", "WebkitBackgroundSize", "MSBackgroundSize", "OBackgroundSize", "blockSize", "MozBlockSize", "WebkitBlockSize", "MSBlockSize", "OBlockSize", "border", "MozBorder", "WebkitBorder", "MSBorder", "OBorder", "borderBlockEnd", "MozBorderBlockEnd", "WebkitBorderBlockEnd", "MSBorderBlockEnd", "OBorderBlockEnd", "borderBlockEndColor", "MozBorderBlockEndColor", "WebkitBorderBlockEndColor", "MSBorderBlockEndColor", "OBorderBlockEndColor", "borderBlockEndStyle", "MozBorderBlockEndStyle", "WebkitBorderBlockEndStyle", "MSBorderBlockEndStyle", "OBorderBlockEndStyle", "borderBlockEndWidth", "MozBorderBlockEndWidth", "WebkitBorderBlockEndWidth", "MSBorderBlockEndWidth", "OBorderBlockEndWidth", "borderBlockStart", "MozBorderBlockStart", "WebkitBorderBlockStart", "MSBorderBlockStart", "OBorderBlockStart", "borderBlockStartColor", "MozBorderBlockStartColor", "WebkitBorderBlockStartColor", "MSBorderBlockStartColor", "OBorderBlockStartColor", "borderBlockStartStyle", "MozBorderBlockStartStyle", "WebkitBorderBlockStartStyle", "MSBorderBlockStartStyle", "OBorderBlockStartStyle", "borderBlockStartWidth", "MozBorderBlockStartWidth", "WebkitBorderBlockStartWidth", "MSBorderBlockStartWidth", "OBorderBlockStartWidth", "borderBottom", "MozBorderBottom", "WebkitBorderBottom", "MSBorderBottom", "OBorderBottom", "borderBottomColor", "MozBorderBottomColor", "WebkitBorderBottomColor", "MSBorderBottomColor", "OBorderBottomColor", "borderBottomLeftRadius", "MozBorderBottomLeftRadius", "WebkitBorderBottomLeftRadius", "MSBorderBottomLeftRadius", "OBorderBottomLeftRadius", "borderBottomRightRadius", "MozBorderBottomRightRadius", "WebkitBorderBottomRightRadius", "MSBorderBottomRightRadius", "OBorderBottomRightRadius", "borderBottomStyle", "MozBorderBottomStyle", "WebkitBorderBottomStyle", "MSBorderBottomStyle", "OBorderBottomStyle", "borderBottomWidth", "MozBorderBottomWidth", "WebkitBorderBottomWidth", "MSBorderBottomWidth", "OBorderBottomWidth", "borderCollapse", "MozBorderCollapse", "WebkitBorderCollapse", "MSBorderCollapse", "OBorderCollapse", "borderColor", "MozBorderColor", "WebkitBorderColor", "MSBorderColor", "OBorderColor", "borderImage", "MozBorderImage", "WebkitBorderImage", "MSBorderImage", "OBorderImage", "borderImageOutset", "MozBorderImageOutset", "WebkitBorderImageOutset", "MSBorderImageOutset", "OBorderImageOutset", "borderImageRepeat", "MozBorderImageRepeat", "WebkitBorderImageRepeat", "MSBorderImageRepeat", "OBorderImageRepeat", "borderImageSlice", "MozBorderImageSlice", "WebkitBorderImageSlice", "MSBorderImageSlice", "OBorderImageSlice", "borderImageSource", "MozBorderImageSource", "WebkitBorderImageSource", "MSBorderImageSource", "OBorderImageSource", "borderImageWidth", "MozBorderImageWidth", "WebkitBorderImageWidth", "MSBorderImageWidth", "OBorderImageWidth", "borderInlineEnd", "MozBorderInlineEnd", "WebkitBorderInlineEnd", "MSBorderInlineEnd", "OBorderInlineEnd", "borderInlineEndColor", "MozBorderInlineEndColor", "WebkitBorderInlineEndColor", "MSBorderInlineEndColor", "OBorderInlineEndColor", "borderInlineEndStyle", "MozBorderInlineEndStyle", "WebkitBorderInlineEndStyle", "MSBorderInlineEndStyle", "OBorderInlineEndStyle", "borderInlineEndWidth", "MozBorderInlineEndWidth", "WebkitBorderInlineEndWidth", "MSBorderInlineEndWidth", "OBorderInlineEndWidth", "borderInlineStart", "MozBorderInlineStart", "WebkitBorderInlineStart", "MSBorderInlineStart", "OBorderInlineStart", "borderInlineStartColor", "MozBorderInlineStartColor", "WebkitBorderInlineStartColor", "MSBorderInlineStartColor", "OBorderInlineStartColor", "borderInlineStartStyle", "MozBorderInlineStartStyle", "WebkitBorderInlineStartStyle", "MSBorderInlineStartStyle", "OBorderInlineStartStyle", "borderInlineStartWidth", "MozBorderInlineStartWidth", "WebkitBorderInlineStartWidth", "MSBorderInlineStartWidth", "OBorderInlineStartWidth", "borderLeft", "MozBorderLeft", "WebkitBorderLeft", "MSBorderLeft", "OBorderLeft", "borderLeftColor", "MozBorderLeftColor", "WebkitBorderLeftColor", "MSBorderLeftColor", "OBorderLeftColor", "borderLeftStyle", "MozBorderLeftStyle", "WebkitBorderLeftStyle", "MSBorderLeftStyle", "OBorderLeftStyle", "borderLeftWidth", "MozBorderLeftWidth", "WebkitBorderLeftWidth", "MSBorderLeftWidth", "OBorderLeftWidth", "borderRadius", "MozBorderRadius", "WebkitBorderRadius", "MSBorderRadius", "OBorderRadius", "borderRight", "MozBorderRight", "WebkitBorderRight", "MSBorderRight", "OBorderRight", "borderRightColor", "MozBorderRightColor", "WebkitBorderRightColor", "MSBorderRightColor", "OBorderRightColor", "borderRightStyle", "MozBorderRightStyle", "WebkitBorderRightStyle", "MSBorderRightStyle", "OBorderRightStyle", "borderRightWidth", "MozBorderRightWidth", "WebkitBorderRightWidth", "MSBorderRightWidth", "OBorderRightWidth", "borderSpacing", "MozBorderSpacing", "WebkitBorderSpacing", "MSBorderSpacing", "OBorderSpacing", "borderStyle", "MozBorderStyle", "WebkitBorderStyle", "MSBorderStyle", "OBorderStyle", "borderTop", "MozBorderTop", "WebkitBorderTop", "MSBorderTop", "OBorderTop", "borderTopColor", "MozBorderTopColor", "WebkitBorderTopColor", "MSBorderTopColor", "OBorderTopColor", "borderTopLeftRadius", "MozBorderTopLeftRadius", "WebkitBorderTopLeftRadius", "MSBorderTopLeftRadius", "OBorderTopLeftRadius", "borderTopRightRadius", "MozBorderTopRightRadius", "WebkitBorderTopRightRadius", "MSBorderTopRightRadius", "OBorderTopRightRadius", "borderTopStyle", "MozBorderTopStyle", "WebkitBorderTopStyle", "MSBorderTopStyle", "OBorderTopStyle", "borderTopWidth", "MozBorderTopWidth", "WebkitBorderTopWidth", "MSBorderTopWidth", "OBorderTopWidth", "borderWidth", "MozBorderWidth", "WebkitBorderWidth", "MSBorderWidth", "OBorderWidth", "bottom", "MozBottom", "WebkitBottom", "MSBottom", "OBottom", "boxDecorationBreak", "MozBoxDecorationBreak", "WebkitBoxDecorationBreak", "MSBoxDecorationBreak", "OBoxDecorationBreak", "boxShadow", "MozBoxShadow", "WebkitBoxShadow", "MSBoxShadow", "OBoxShadow", "boxSizing", "MozBoxSizing", "WebkitBoxSizing", "MSBoxSizing", "OBoxSizing", "breakAfter", "MozBreakAfter", "WebkitBreakAfter", "MSBreakAfter", "OBreakAfter", "breakBefore", "MozBreakBefore", "WebkitBreakBefore", "MSBreakBefore", "OBreakBefore", "breakInside", "MozBreakInside", "WebkitBreakInside", "MSBreakInside", "OBreakInside", "captionSide", "MozCaptionSide", "WebkitCaptionSide", "MSCaptionSide", "OCaptionSide", "caretColor", "MozCaretColor", "WebkitCaretColor", "MSCaretColor", "OCaretColor", "ch", "MozCh", "WebkitCh", "MSCh", "OCh", "clear", "MozClear", "WebkitClear", "MSClear", "OClear", "clip", "MozClip", "WebkitClip", "MSClip", "OClip", "clipPath", "MozClipPath", "WebkitClipPath", "MSClipPath", "OClipPath", "cm", "MozCm", "WebkitCm", "MSCm", "OCm", "color", "MozColor", "WebkitColor", "MSColor", "OColor", "columnCount", "MozColumnCount", "WebkitColumnCount", "MSColumnCount", "OColumnCount", "columnFill", "MozColumnFill", "WebkitColumnFill", "MSColumnFill", "OColumnFill", "columnGap", "MozColumnGap", "WebkitColumnGap", "MSColumnGap", "OColumnGap", "columnRule", "MozColumnRule", "WebkitColumnRule", "MSColumnRule", "OColumnRule", "columnRuleColor", "MozColumnRuleColor", "WebkitColumnRuleColor", "MSColumnRuleColor", "OColumnRuleColor", "columnRuleStyle", "MozColumnRuleStyle", "WebkitColumnRuleStyle", "MSColumnRuleStyle", "OColumnRuleStyle", "columnRuleWidth", "MozColumnRuleWidth", "WebkitColumnRuleWidth", "MSColumnRuleWidth", "OColumnRuleWidth", "columnSpan", "MozColumnSpan", "WebkitColumnSpan", "MSColumnSpan", "OColumnSpan", "columnWidth", "MozColumnWidth", "WebkitColumnWidth", "MSColumnWidth", "OColumnWidth", "columns", "MozColumns", "WebkitColumns", "MSColumns", "OColumns", "content", "MozContent", "WebkitContent", "MSContent", "OContent", "counterIncrement", "MozCounterIncrement", "WebkitCounterIncrement", "MSCounterIncrement", "OCounterIncrement", "counterReset", "MozCounterReset", "WebkitCounterReset", "MSCounterReset", "OCounterReset", "cursor", "MozCursor", "WebkitCursor", "MSCursor", "OCursor", "deg", "MozDeg", "WebkitDeg", "MSDeg", "ODeg", "direction", "MozDirection", "WebkitDirection", "MSDirection", "ODirection", "display", "MozDisplay", "WebkitDisplay", "MSDisplay", "ODisplay", "dpcm", "MozDpcm", "WebkitDpcm", "MSDpcm", "ODpcm", "dpi", "MozDpi", "WebkitDpi", "MSDpi", "ODpi", "dppx", "MozDppx", "WebkitDppx", "MSDppx", "ODppx", "em", "MozEm", "WebkitEm", "MSEm", "OEm", "emptyCells", "MozEmptyCells", "WebkitEmptyCells", "MSEmptyCells", "OEmptyCells", "ex", "MozEx", "WebkitEx", "MSEx", "OEx", "filter", "MozFilter", "WebkitFilter", "MSFilter", "OFilter", "flexBasis", "MozFlexBasis", "WebkitFlexBasis", "MSFlexBasis", "OFlexBasis", "flexDirection", "MozFlexDirection", "WebkitFlexDirection", "MSFlexDirection", "OFlexDirection", "flexFlow", "MozFlexFlow", "WebkitFlexFlow", "MSFlexFlow", "OFlexFlow", "flexGrow", "MozFlexGrow", "WebkitFlexGrow", "MSFlexGrow", "OFlexGrow", "flexShrink", "MozFlexShrink", "WebkitFlexShrink", "MSFlexShrink", "OFlexShrink", "flexWrap", "MozFlexWrap", "WebkitFlexWrap", "MSFlexWrap", "OFlexWrap", "float", "MozFloat", "WebkitFloat", "MSFloat", "OFloat", "font", "MozFont", "WebkitFont", "MSFont", "OFont", "fontFamily", "MozFontFamily", "WebkitFontFamily", "MSFontFamily", "OFontFamily", "fontFeatureSettings", "MozFontFeatureSettings", "WebkitFontFeatureSettings", "MSFontFeatureSettings", "OFontFeatureSettings", "fontKerning", "MozFontKerning", "WebkitFontKerning", "MSFontKerning", "OFontKerning", "fontLanguageOverride", "MozFontLanguageOverride", "WebkitFontLanguageOverride", "MSFontLanguageOverride", "OFontLanguageOverride", "fontSize", "MozFontSize", "WebkitFontSize", "MSFontSize", "OFontSize", "fontSizeAdjust", "MozFontSizeAdjust", "WebkitFontSizeAdjust", "MSFontSizeAdjust", "OFontSizeAdjust", "fontStretch", "MozFontStretch", "WebkitFontStretch", "MSFontStretch", "OFontStretch", "fontStyle", "MozFontStyle", "WebkitFontStyle", "MSFontStyle", "OFontStyle", "fontSynthesis", "MozFontSynthesis", "WebkitFontSynthesis", "MSFontSynthesis", "OFontSynthesis", "fontVariant", "MozFontVariant", "WebkitFontVariant", "MSFontVariant", "OFontVariant", "fontVariantAlternates", "MozFontVariantAlternates", "WebkitFontVariantAlternates", "MSFontVariantAlternates", "OFontVariantAlternates", "fontVariantCaps", "MozFontVariantCaps", "WebkitFontVariantCaps", "MSFontVariantCaps", "OFontVariantCaps", "fontVariantEastAsian", "MozFontVariantEastAsian", "WebkitFontVariantEastAsian", "MSFontVariantEastAsian", "OFontVariantEastAsian", "fontVariantLigatures", "MozFontVariantLigatures", "WebkitFontVariantLigatures", "MSFontVariantLigatures", "OFontVariantLigatures", "fontVariantNumeric", "MozFontVariantNumeric", "WebkitFontVariantNumeric", "MSFontVariantNumeric", "OFontVariantNumeric", "fontVariantPosition", "MozFontVariantPosition", "WebkitFontVariantPosition", "MSFontVariantPosition", "OFontVariantPosition", "fontWeight", "MozFontWeight", "WebkitFontWeight", "MSFontWeight", "OFontWeight", "fr", "MozFr", "WebkitFr", "MSFr", "OFr", "grad", "MozGrad", "WebkitGrad", "MSGrad", "OGrad", "grid", "MozGrid", "WebkitGrid", "MSGrid", "OGrid", "gridArea", "MozGridArea", "WebkitGridArea", "MSGridArea", "OGridArea", "gridAutoColumns", "MozGridAutoColumns", "WebkitGridAutoColumns", "MSGridAutoColumns", "OGridAutoColumns", "gridAutoFlow", "MozGridAutoFlow", "WebkitGridAutoFlow", "MSGridAutoFlow", "OGridAutoFlow", "gridAutoRows", "MozGridAutoRows", "WebkitGridAutoRows", "MSGridAutoRows", "OGridAutoRows", "gridColumn", "MozGridColumn", "WebkitGridColumn", "MSGridColumn", "OGridColumn", "gridColumnEnd", "MozGridColumnEnd", "WebkitGridColumnEnd", "MSGridColumnEnd", "OGridColumnEnd", "gridColumnGap", "MozGridColumnGap", "WebkitGridColumnGap", "MSGridColumnGap", "OGridColumnGap", "gridColumnStart", "MozGridColumnStart", "WebkitGridColumnStart", "MSGridColumnStart", "OGridColumnStart", "gridGap", "MozGridGap", "WebkitGridGap", "MSGridGap", "OGridGap", "gridRow", "MozGridRow", "WebkitGridRow", "MSGridRow", "OGridRow", "gridRowEnd", "MozGridRowEnd", "WebkitGridRowEnd", "MSGridRowEnd", "OGridRowEnd", "gridRowGap", "MozGridRowGap", "WebkitGridRowGap", "MSGridRowGap", "OGridRowGap", "gridRowStart", "MozGridRowStart", "WebkitGridRowStart", "MSGridRowStart", "OGridRowStart", "gridTemplate", "MozGridTemplate", "WebkitGridTemplate", "MSGridTemplate", "OGridTemplate", "gridTemplateAreas", "MozGridTemplateAreas", "WebkitGridTemplateAreas", "MSGridTemplateAreas", "OGridTemplateAreas", "gridTemplateColumns", "MozGridTemplateColumns", "WebkitGridTemplateColumns", "MSGridTemplateColumns", "OGridTemplateColumns", "gridTemplateRows", "MozGridTemplateRows", "WebkitGridTemplateRows", "MSGridTemplateRows", "OGridTemplateRows", "height", "MozHeight", "WebkitHeight", "MSHeight", "OHeight", "hyphens", "MozHyphens", "WebkitHyphens", "MSHyphens", "OHyphens", "hz", "MozHz", "WebkitHz", "MSHz", "OHz", "imageOrientation", "MozImageOrientation", "WebkitImageOrientation", "MSImageOrientation", "OImageOrientation", "imageRendering", "MozImageRendering", "WebkitImageRendering", "MSImageRendering", "OImageRendering", "imageResolution", "MozImageResolution", "WebkitImageResolution", "MSImageResolution", "OImageResolution", "imeMode", "MozImeMode", "WebkitImeMode", "MSImeMode", "OImeMode", "in", "MozIn", "WebkitIn", "MSIn", "OIn", "inherit", "MozInherit", "WebkitInherit", "MSInherit", "OInherit", "initial", "MozInitial", "WebkitInitial", "MSInitial", "OInitial", "inlineSize", "MozInlineSize", "WebkitInlineSize", "MSInlineSize", "OInlineSize", "isolation", "MozIsolation", "WebkitIsolation", "MSIsolation", "OIsolation", "justifyContent", "MozJustifyContent", "WebkitJustifyContent", "MSJustifyContent", "OJustifyContent", "khz", "MozKhz", "WebkitKhz", "MSKhz", "OKhz", "left", "MozLeft", "WebkitLeft", "MSLeft", "OLeft", "letterSpacing", "MozLetterSpacing", "WebkitLetterSpacing", "MSLetterSpacing", "OLetterSpacing", "lineBreak", "MozLineBreak", "WebkitLineBreak", "MSLineBreak", "OLineBreak", "lineHeight", "MozLineHeight", "WebkitLineHeight", "MSLineHeight", "OLineHeight", "listStyle", "MozListStyle", "WebkitListStyle", "MSListStyle", "OListStyle", "listStyleImage", "MozListStyleImage", "WebkitListStyleImage", "MSListStyleImage", "OListStyleImage", "listStylePosition", "MozListStylePosition", "WebkitListStylePosition", "MSListStylePosition", "OListStylePosition", "listStyleType", "MozListStyleType", "WebkitListStyleType", "MSListStyleType", "OListStyleType", "margin", "MozMargin", "WebkitMargin", "MSMargin", "OMargin", "marginBlockEnd", "MozMarginBlockEnd", "WebkitMarginBlockEnd", "MSMarginBlockEnd", "OMarginBlockEnd", "marginBlockStart", "MozMarginBlockStart", "WebkitMarginBlockStart", "MSMarginBlockStart", "OMarginBlockStart", "marginBottom", "MozMarginBottom", "WebkitMarginBottom", "MSMarginBottom", "OMarginBottom", "marginInlineEnd", "MozMarginInlineEnd", "WebkitMarginInlineEnd", "MSMarginInlineEnd", "OMarginInlineEnd", "marginInlineStart", "MozMarginInlineStart", "WebkitMarginInlineStart", "MSMarginInlineStart", "OMarginInlineStart", "marginLeft", "MozMarginLeft", "WebkitMarginLeft", "MSMarginLeft", "OMarginLeft", "marginRight", "MozMarginRight", "WebkitMarginRight", "MSMarginRight", "OMarginRight", "marginTop", "MozMarginTop", "WebkitMarginTop", "MSMarginTop", "OMarginTop", "mask", "MozMask", "WebkitMask", "MSMask", "OMask", "maskClip", "MozMaskClip", "WebkitMaskClip", "MSMaskClip", "OMaskClip", "maskComposite", "MozMaskComposite", "WebkitMaskComposite", "MSMaskComposite", "OMaskComposite", "maskImage", "MozMaskImage", "WebkitMaskImage", "MSMaskImage", "OMaskImage", "maskMode", "MozMaskMode", "WebkitMaskMode", "MSMaskMode", "OMaskMode", "maskOrigin", "MozMaskOrigin", "WebkitMaskOrigin", "MSMaskOrigin", "OMaskOrigin", "maskPosition", "MozMaskPosition", "WebkitMaskPosition", "MSMaskPosition", "OMaskPosition", "maskRepeat", "MozMaskRepeat", "WebkitMaskRepeat", "MSMaskRepeat", "OMaskRepeat", "maskSize", "MozMaskSize", "WebkitMaskSize", "MSMaskSize", "OMaskSize", "maskType", "MozMaskType", "WebkitMaskType", "MSMaskType", "OMaskType", "maxHeight", "MozMaxHeight", "WebkitMaxHeight", "MSMaxHeight", "OMaxHeight", "maxWidth", "MozMaxWidth", "WebkitMaxWidth", "MSMaxWidth", "OMaxWidth", "minBlockSize", "MozMinBlockSize", "WebkitMinBlockSize", "MSMinBlockSize", "OMinBlockSize", "minHeight", "MozMinHeight", "WebkitMinHeight", "MSMinHeight", "OMinHeight", "minInlineSize", "MozMinInlineSize", "WebkitMinInlineSize", "MSMinInlineSize", "OMinInlineSize", "minWidth", "MozMinWidth", "WebkitMinWidth", "MSMinWidth", "OMinWidth", "mixBlendMode", "MozMixBlendMode", "WebkitMixBlendMode", "MSMixBlendMode", "OMixBlendMode", "mm", "MozMm", "WebkitMm", "MSMm", "OMm", "ms", "MozMs", "WebkitMs", "MSMs", "OMs", "objectFit", "MozObjectFit", "WebkitObjectFit", "MSObjectFit", "OObjectFit", "objectPosition", "MozObjectPosition", "WebkitObjectPosition", "MSObjectPosition", "OObjectPosition", "offsetBlockEnd", "MozOffsetBlockEnd", "WebkitOffsetBlockEnd", "MSOffsetBlockEnd", "OOffsetBlockEnd", "offsetBlockStart", "MozOffsetBlockStart", "WebkitOffsetBlockStart", "MSOffsetBlockStart", "OOffsetBlockStart", "offsetInlineEnd", "MozOffsetInlineEnd", "WebkitOffsetInlineEnd", "MSOffsetInlineEnd", "OOffsetInlineEnd", "offsetInlineStart", "MozOffsetInlineStart", "WebkitOffsetInlineStart", "MSOffsetInlineStart", "OOffsetInlineStart", "opacity", "MozOpacity", "WebkitOpacity", "MSOpacity", "OOpacity", "order", "MozOrder", "WebkitOrder", "MSOrder", "OOrder", "orphans", "MozOrphans", "WebkitOrphans", "MSOrphans", "OOrphans", "outline", "MozOutline", "WebkitOutline", "MSOutline", "OOutline", "outlineColor", "MozOutlineColor", "WebkitOutlineColor", "MSOutlineColor", "OOutlineColor", "outlineOffset", "MozOutlineOffset", "WebkitOutlineOffset", "MSOutlineOffset", "OOutlineOffset", "outlineStyle", "MozOutlineStyle", "WebkitOutlineStyle", "MSOutlineStyle", "OOutlineStyle", "outlineWidth", "MozOutlineWidth", "WebkitOutlineWidth", "MSOutlineWidth", "OOutlineWidth", "overflow", "MozOverflow", "WebkitOverflow", "MSOverflow", "OOverflow", "overflowWrap", "MozOverflowWrap", "WebkitOverflowWrap", "MSOverflowWrap", "OOverflowWrap", "overflowX", "MozOverflowX", "WebkitOverflowX", "MSOverflowX", "OOverflowX", "overflowY", "MozOverflowY", "WebkitOverflowY", "MSOverflowY", "OOverflowY", "padding", "MozPadding", "WebkitPadding", "MSPadding", "OPadding", "paddingBlockEnd", "MozPaddingBlockEnd", "WebkitPaddingBlockEnd", "MSPaddingBlockEnd", "OPaddingBlockEnd", "paddingBlockStart", "MozPaddingBlockStart", "WebkitPaddingBlockStart", "MSPaddingBlockStart", "OPaddingBlockStart", "paddingBottom", "MozPaddingBottom", "WebkitPaddingBottom", "MSPaddingBottom", "OPaddingBottom", "paddingInlineEnd", "MozPaddingInlineEnd", "WebkitPaddingInlineEnd", "MSPaddingInlineEnd", "OPaddingInlineEnd", "paddingInlineStart", "MozPaddingInlineStart", "WebkitPaddingInlineStart", "MSPaddingInlineStart", "OPaddingInlineStart", "paddingLeft", "MozPaddingLeft", "WebkitPaddingLeft", "MSPaddingLeft", "OPaddingLeft", "paddingRight", "MozPaddingRight", "WebkitPaddingRight", "MSPaddingRight", "OPaddingRight", "paddingTop", "MozPaddingTop", "WebkitPaddingTop", "MSPaddingTop", "OPaddingTop", "pageBreakAfter", "MozPageBreakAfter", "WebkitPageBreakAfter", "MSPageBreakAfter", "OPageBreakAfter", "pageBreakBefore", "MozPageBreakBefore", "WebkitPageBreakBefore", "MSPageBreakBefore", "OPageBreakBefore", "pageBreakInside", "MozPageBreakInside", "WebkitPageBreakInside", "MSPageBreakInside", "OPageBreakInside", "pc", "MozPc", "WebkitPc", "MSPc", "OPc", "perspective", "MozPerspective", "WebkitPerspective", "MSPerspective", "OPerspective", "perspectiveOrigin", "MozPerspectiveOrigin", "WebkitPerspectiveOrigin", "MSPerspectiveOrigin", "OPerspectiveOrigin", "pointerEvents", "MozPointerEvents", "WebkitPointerEvents", "MSPointerEvents", "OPointerEvents", "position", "MozPosition", "WebkitPosition", "MSPosition", "OPosition", "pt", "MozPt", "WebkitPt", "MSPt", "OPt", "px", "MozPx", "WebkitPx", "MSPx", "OPx", "q", "MozQ", "WebkitQ", "MSQ", "OQ", "quotes", "MozQuotes", "WebkitQuotes", "MSQuotes", "OQuotes", "rad", "MozRad", "WebkitRad", "MSRad", "ORad", "rem", "MozRem", "WebkitRem", "MSRem", "ORem", "resize", "MozResize", "WebkitResize", "MSResize", "OResize", "revert", "MozRevert", "WebkitRevert", "MSRevert", "ORevert", "right", "MozRight", "WebkitRight", "MSRight", "ORight", "rubyAlign", "MozRubyAlign", "WebkitRubyAlign", "MSRubyAlign", "ORubyAlign", "rubyMerge", "MozRubyMerge", "WebkitRubyMerge", "MSRubyMerge", "ORubyMerge", "rubyPosition", "MozRubyPosition", "WebkitRubyPosition", "MSRubyPosition", "ORubyPosition", "s", "MozS", "WebkitS", "MSS", "OS", "scrollBehavior", "MozScrollBehavior", "WebkitScrollBehavior", "MSScrollBehavior", "OScrollBehavior", "scrollSnapCoordinate", "MozScrollSnapCoordinate", "WebkitScrollSnapCoordinate", "MSScrollSnapCoordinate", "OScrollSnapCoordinate", "scrollSnapDestination", "MozScrollSnapDestination", "WebkitScrollSnapDestination", "MSScrollSnapDestination", "OScrollSnapDestination", "scrollSnapType", "MozScrollSnapType", "WebkitScrollSnapType", "MSScrollSnapType", "OScrollSnapType", "shapeImageThreshold", "MozShapeImageThreshold", "WebkitShapeImageThreshold", "MSShapeImageThreshold", "OShapeImageThreshold", "shapeMargin", "MozShapeMargin", "WebkitShapeMargin", "MSShapeMargin", "OShapeMargin", "shapeOutside", "MozShapeOutside", "WebkitShapeOutside", "MSShapeOutside", "OShapeOutside", "tabSize", "MozTabSize", "WebkitTabSize", "MSTabSize", "OTabSize", "tableLayout", "MozTableLayout", "WebkitTableLayout", "MSTableLayout", "OTableLayout", "textAlign", "MozTextAlign", "WebkitTextAlign", "MSTextAlign", "OTextAlign", "textAlignLast", "MozTextAlignLast", "WebkitTextAlignLast", "MSTextAlignLast", "OTextAlignLast", "textCombineUpright", "MozTextCombineUpright", "WebkitTextCombineUpright", "MSTextCombineUpright", "OTextCombineUpright", "textDecoration", "MozTextDecoration", "WebkitTextDecoration", "MSTextDecoration", "OTextDecoration", "textDecorationColor", "MozTextDecorationColor", "WebkitTextDecorationColor", "MSTextDecorationColor", "OTextDecorationColor", "textDecorationLine", "MozTextDecorationLine", "WebkitTextDecorationLine", "MSTextDecorationLine", "OTextDecorationLine", "textDecorationStyle", "MozTextDecorationStyle", "WebkitTextDecorationStyle", "MSTextDecorationStyle", "OTextDecorationStyle", "textEmphasis", "MozTextEmphasis", "WebkitTextEmphasis", "MSTextEmphasis", "OTextEmphasis", "textEmphasisColor", "MozTextEmphasisColor", "WebkitTextEmphasisColor", "MSTextEmphasisColor", "OTextEmphasisColor", "textEmphasisPosition", "MozTextEmphasisPosition", "WebkitTextEmphasisPosition", "MSTextEmphasisPosition", "OTextEmphasisPosition", "textEmphasisStyle", "MozTextEmphasisStyle", "WebkitTextEmphasisStyle", "MSTextEmphasisStyle", "OTextEmphasisStyle", "textIndent", "MozTextIndent", "WebkitTextIndent", "MSTextIndent", "OTextIndent", "textOrientation", "MozTextOrientation", "WebkitTextOrientation", "MSTextOrientation", "OTextOrientation", "textOverflow", "MozTextOverflow", "WebkitTextOverflow", "MSTextOverflow", "OTextOverflow", "textRendering", "MozTextRendering", "WebkitTextRendering", "MSTextRendering", "OTextRendering", "textShadow", "MozTextShadow", "WebkitTextShadow", "MSTextShadow", "OTextShadow", "textTransform", "MozTextTransform", "WebkitTextTransform", "MSTextTransform", "OTextTransform", "textUnderlinePosition", "MozTextUnderlinePosition", "WebkitTextUnderlinePosition", "MSTextUnderlinePosition", "OTextUnderlinePosition", "top", "MozTop", "WebkitTop", "MSTop", "OTop", "touchAction", "MozTouchAction", "WebkitTouchAction", "MSTouchAction", "OTouchAction", "transform", "MozTransform", "WebkitTransform", "msTransform", "OTransform", "transformBox", "MozTransformBox", "WebkitTransformBox", "MSTransformBox", "OTransformBox", "transformOrigin", "MozTransformOrigin", "WebkitTransformOrigin", "MSTransformOrigin", "OTransformOrigin", "transformStyle", "MozTransformStyle", "WebkitTransformStyle", "MSTransformStyle", "OTransformStyle", "transition", "MozTransition", "WebkitTransition", "MSTransition", "OTransition", "transitionDelay", "MozTransitionDelay", "WebkitTransitionDelay", "MSTransitionDelay", "OTransitionDelay", "transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "MSTransitionDuration", "OTransitionDuration", "transitionProperty", "MozTransitionProperty", "WebkitTransitionProperty", "MSTransitionProperty", "OTransitionProperty", "transitionTimingFunction", "MozTransitionTimingFunction", "WebkitTransitionTimingFunction", "MSTransitionTimingFunction", "OTransitionTimingFunction", "turn", "MozTurn", "WebkitTurn", "MSTurn", "OTurn", "unicodeBidi", "MozUnicodeBidi", "WebkitUnicodeBidi", "MSUnicodeBidi", "OUnicodeBidi", "unset", "MozUnset", "WebkitUnset", "MSUnset", "OUnset", "verticalAlign", "MozVerticalAlign", "WebkitVerticalAlign", "MSVerticalAlign", "OVerticalAlign", "vh", "MozVh", "WebkitVh", "MSVh", "OVh", "visibility", "MozVisibility", "WebkitVisibility", "MSVisibility", "OVisibility", "vmax", "MozVmax", "WebkitVmax", "MSVmax", "OVmax", "vmin", "MozVmin", "WebkitVmin", "MSVmin", "OVmin", "vw", "MozVw", "WebkitVw", "MSVw", "OVw", "whiteSpace", "MozWhiteSpace", "WebkitWhiteSpace", "MSWhiteSpace", "OWhiteSpace", "widows", "MozWidows", "WebkitWidows", "MSWidows", "OWidows", "width", "MozWidth", "WebkitWidth", "MSWidth", "OWidth", "willChange", "MozWillChange", "WebkitWillChange", "MSWillChange", "OWillChange", "wordBreak", "MozWordBreak", "WebkitWordBreak", "MSWordBreak", "OWordBreak", "wordSpacing", "MozWordSpacing", "WebkitWordSpacing", "MSWordSpacing", "OWordSpacing", "wordWrap", "MozWordWrap", "WebkitWordWrap", "MSWordWrap", "OWordWrap", "writingMode", "MozWritingMode", "WebkitWritingMode", "MSWritingMode", "OWritingMode", "zIndex", "MozZIndex", "WebkitZIndex", "MSZIndex", "OZIndex", "fontSize", "MozFontSize", "WebkitFontSize", "MSFontSize", "OFontSize", "flex", "MozFlex", "WebkitFlex", "MSFlex", "OFlex", "fr", "MozFr", "WebkitFr", "MSFr", "OFr", "overflowScrolling", "MozOverflowScrolling", "WebkitOverflowScrolling", "MSOverflowScrolling", "OOverflowScrolling", "userSelect", "MozUserSelect", "WebkitUserSelect", "MSUserSelect", "OUserSelect"] },
        GNKm: function(e, t, n) {
            "use strict";
            var r = n("GOnX");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState;
                if (!t) throw new Error("Missing required dependency: reporter.");

                function a(t) { var n = e.important ? " !important; " : "; "; return (t.join(n) + n).trim() }

                function i(e) { return o(e).object }
                return {
                    makeDetectable: function(e, i, l) {
                        l || (l = i, i = e, e = null), (e = e || {}).debug, r.isIE(8) ? l(i) : function(i, l) {
                            var s = a(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]),
                                c = !1,
                                u = window.getComputedStyle(i),
                                d = i.offsetWidth,
                                p = i.offsetHeight;

                            function f() {
                                function n() {
                                    if ("static" === u.position) {
                                        i.style.setProperty("position", "relative", e.important ? "important" : "");
                                        var n = function(t, n, r, o) { var a = r[o]; "auto" !== a && "0" !== function(e) { return e.replace(/[^-\d\.]/g, "") }(a) && (t.warn("An element that is positioned static has style." + o + "=" + a + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + o + " will be set to 0. Element: ", n), n.style.setProperty(o, "0", e.important ? "important" : "")) };
                                        n(t, i, u, "top"), n(t, i, u, "right"), n(t, i, u, "bottom"), n(t, i, u, "left")
                                    }
                                }
                                "" !== u.position && (n(), c = !0);
                                var a = document.createElement("object");
                                a.style.cssText = s, a.tabIndex = -1, a.type = "text/html", a.setAttribute("aria-hidden", "true"), a.onload = function() {
                                    c || n(),
                                        function e(t, n) {
                                            if (!t.contentDocument) { var r = o(t); return r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId), void(r.checkForObjectDocumentTimeoutId = setTimeout((function() { r.checkForObjectDocumentTimeoutId = 0, e(t, n) }), 100)) }
                                            n(t.contentDocument)
                                        }(this, (function(e) { l(i) }))
                                }, r.isIE() || (a.data = "about:blank"), o(i) && (i.appendChild(a), o(i).object = a, r.isIE() && (a.data = "about:blank"))
                            }
                            o(i).startSize = { width: d, height: p }, n ? n.add(f) : f()
                        }(i, l)
                    },
                    addListener: function(e, t) {
                        function n() { t(e) }
                        if (r.isIE(8)) o(e).object = { proxy: n }, e.attachEvent("onresize", n);
                        else {
                            var a = i(e);
                            if (!a) throw new Error("Element is not detectable by this strategy.");
                            a.contentDocument.defaultView.addEventListener("resize", n)
                        }
                    },
                    uninstall: function(e) {
                        if (o(e)) {
                            var t = i(e);
                            t && (r.isIE(8) ? e.detachEvent("onresize", t.proxy) : e.removeChild(t), o(e).checkForObjectDocumentTimeoutId && window.clearTimeout(o(e).checkForObjectDocumentTimeoutId), delete o(e).object)
                        }
                    }
                }
            }
        },
        GOnX: function(e, t, n) {
            "use strict";
            var r = e.exports = {};
            r.isIE = function(e) {
                return (-1 !== (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")) && (!e || e === function() {
                    var e = 3,
                        t = document.createElement("div"),
                        n = t.getElementsByTagName("i");
                    do { t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e" } while (n[0]);
                    return e > 4 ? e : void 0
                }());
                var t
            }, r.isLegacyOpera = function() { return !!window.opera }
        },
        IZOP: function(e, t, n) {
            "use strict";

            function r(e) { return e && "object" == typeof e && "default" in e ? e.default : e }
            var o = n("q1tI"),
                a = r(o),
                i = r(n("i8i4")),
                l = r(n("QLaP")),
                s = n("FdMb"),
                c = r(n("7sSR")),
                u = r(n("Gytx"));

            function d(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) { return t && p(e.prototype, t), n && p(e, n), e }

            function h(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function m() { return (m = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) { h(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function y(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && O(e, t)
            }

            function v(e) { return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function O(e, t) { return (O = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function S(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }

            function w(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function k(e, t) { return !t || "object" != typeof t && "function" != typeof t ? w(e) : t }
            var M = {};

            function j() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll"; return M[e] || (M[e] = c({ strategy: e })), M[e] }
            var E = "react-sizeme: an error occurred whilst stopping to listen to node size changes",
                x = { monitorWidth: !0, monitorHeight: !1, monitorPosition: !1, refreshRate: 16, refreshMode: "throttle", noPlaceholder: !1, resizeDetectorStrategy: "scroll" };

            function P(e) { return e.displayName || e.name || "Component" }
            var C = function(e) {
                function t() { return d(this, t), k(this, v(t).apply(this, arguments)) }
                return y(t, e), f(t, [{ key: "render", value: function() { return o.Children.only(this.props.children) } }]), t
            }(o.Component);

            function z(e) {
                var t = e.className,
                    n = e.style,
                    r = {};
                return t || n ? (t && (r.className = t), n && (r.style = n)) : r.style = { width: "100%", height: "100%" }, a.createElement("div", r)
            }
            h(C, "displayName", "SizeMeReferenceWrapper"), z.displayName = "SizeMePlaceholder";
            var T = function(e) {
                function t(t) {
                    var n = t.explicitRef,
                        r = t.className,
                        o = t.style,
                        i = t.size,
                        l = t.disablePlaceholder,
                        s = (t.onSize, S(t, ["explicitRef", "className", "style", "size", "disablePlaceholder", "onSize"])),
                        c = (null == i || null == i.width && null == i.height && null == i.position) && !l,
                        u = { className: r, style: o };
                    null != i && (u.size = i);
                    var d = c ? a.createElement(z, { className: r, style: o }) : a.createElement(e, m({}, u, s));
                    return a.createElement(C, { ref: n }, d)
                }
                return t.displayName = "SizeMeRenderer(".concat(P(e), ")"), t
            };

            function D() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                    t = e.monitorWidth,
                    n = void 0 === t ? x.monitorWidth : t,
                    r = e.monitorHeight,
                    o = void 0 === r ? x.monitorHeight : r,
                    c = e.monitorPosition,
                    u = void 0 === c ? x.monitorPosition : c,
                    p = e.refreshRate,
                    b = void 0 === p ? x.refreshRate : p,
                    O = e.refreshMode,
                    S = void 0 === O ? x.refreshMode : O,
                    M = e.noPlaceholder,
                    C = void 0 === M ? x.noPlaceholder : M,
                    z = e.resizeDetectorStrategy,
                    B = void 0 === z ? x.resizeDetectorStrategy : z;
                l(n || o || u, 'You have to monitor at least one of the width, height, or position when using "sizeMe"'), l(b >= 16, "It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing."), l("throttle" === S || "debounce" === S, 'The refreshMode should have a value of "throttle" or "debounce"');
                var W = "throttle" === S ? s.throttle : s.debounce;
                return function(e) {
                    var t = T(e),
                        r = function(e) {
                            function r() {
                                var e, t;
                                d(this, r);
                                for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                                return h(w(t = k(this, (e = v(r)).call.apply(e, [this].concat(i)))), "domEl", null), h(w(t), "state", { width: void 0, height: void 0, position: void 0 }), h(w(t), "uninstall", (function() {
                                    if (t.domEl) {
                                        try { t.detector.uninstall(t.domEl) } catch (e) { console.warn(E) }
                                        t.domEl = null
                                    }
                                })), h(w(t), "determineStrategy", (function(e) { e.onSize ? (t.callbackState || (t.callbackState = g({}, t.state)), t.strategy = "callback") : t.strategy = "render" })), h(w(t), "strategisedSetState", (function(e) { "callback" === t.strategy && (t.callbackState = e, t.props.onSize(e)), t.setState(e) })), h(w(t), "strategisedGetState", (function() { return "callback" === t.strategy ? t.callbackState : t.state })), h(w(t), "refCallback", (function(e) { t.element = e })), h(w(t), "hasSizeChanged", (function(e, t) {
                                    var r = e,
                                        a = t,
                                        i = r.position || {},
                                        l = a.position || {};
                                    return n && r.width !== a.width || o && r.height !== a.height || u && (i.top !== l.top || i.left !== l.left || i.bottom !== l.bottom || i.right !== l.right)
                                })), h(w(t), "checkIfSizeChanged", W(b, (function(e) {
                                    var r = e.getBoundingClientRect(),
                                        a = r.width,
                                        i = r.height,
                                        l = r.right,
                                        s = r.left,
                                        c = r.top,
                                        d = r.bottom,
                                        p = { width: n ? a : null, height: o ? i : null, position: u ? { right: l, left: s, top: c, bottom: d } : null };
                                    t.hasSizeChanged(t.strategisedGetState(), p) && t.strategisedSetState(p)
                                }))), t
                            }
                            return y(r, e), f(r, [{ key: "componentDidMount", value: function() { this.detector = j(B), this.determineStrategy(this.props), this.handleDOMNode() } }, { key: "componentDidUpdate", value: function() { this.determineStrategy(this.props), this.handleDOMNode() } }, { key: "componentWillUnmount", value: function() { this.hasSizeChanged = function() {}, this.checkIfSizeChanged = function() {}, this.uninstall() } }, {
                                key: "handleDOMNode",
                                value: function() {
                                    var e = this.element && i.findDOMNode(this.element);
                                    e ? this.domEl ? (this.domEl.isSameNode && !this.domEl.isSameNode(e) || this.domEl !== e) && (this.uninstall(), this.domEl = e, this.detector.listenTo(this.domEl, this.checkIfSizeChanged)) : (this.domEl = e, this.detector.listenTo(this.domEl, this.checkIfSizeChanged)) : this.uninstall()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = D.enableSSRBehaviour || D.noPlaceholders || C || "callback" === this.strategy,
                                        n = g({}, this.state);
                                    return a.createElement(t, m({ explicitRef: this.refCallback, size: "callback" === this.strategy ? null : n, disablePlaceholder: e }, this.props))
                                }
                            }]), r
                        }(a.Component);
                    return h(r, "displayName", "SizeMe(".concat(P(e), ")")), r.WrappedComponent = e, r
                }
            }
            D.enableSSRBehaviour = !1, D.noPlaceholders = !1;
            var B = function(e) {
                function t(e) {
                    var n;
                    d(this, t), h(w(n = k(this, v(t).call(this, e))), "createComponent", (function(e) { n.SizeAware = D(e)((function(e) { return e.children })) })), h(w(n), "onSize", (function(e) { return n.setState({ size: e }) }));
                    e.children, e.render;
                    var r = S(e, ["children", "render"]);
                    return n.createComponent(r), n.state = { size: { width: void 0, height: void 0 } }, n
                }
                return y(t, e), f(t, [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = (t.children, t.render, S(t, ["children", "render"])),
                            r = (e.children, e.render, S(e, ["children", "render"]));
                        u(n, r) || this.createComponent(n)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.SizeAware,
                            t = this.props.children || this.props.render;
                        return a.createElement(e, { onSize: this.onSize }, t({ size: this.state.size }))
                    }
                }]), t
            }(o.Component);
            h(B, "defaultProps", { children: void 0, render: void 0 }), D.SizeMe = B, D.withSize = D, e.exports = D
        },
        LO96: function(e, t, n) {
            "use strict";
            e.exports = function() { var e = 1; return { generate: function() { return e++ } } }
        },
        LvXN: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var r = u(n("q1tI")),
                o = u(n("i8i4")),
                a = u(n("17x9")),
                i = n("5jx2"),
                l = n("bNWW"),
                s = n("T0XP"),
                c = u(n("TSYQ"));

            function u(e) { return e && e.__esModule ? e : { default: e } }

            function d(e) { return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(n, !0).forEach((function(t) { O(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function h(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t) { return !t || "object" !== d(t) && "function" != typeof t ? y(e) : t }

            function g(e) { return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function y(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function v(e, t) { return (v = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var S = function(e) {
                function t() {
                    var e, n;
                    h(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return O(y(n = b(this, (e = g(t)).call.apply(e, [this].concat(o)))), "state", { resizing: null, dragging: null, className: "" }), O(y(n), "currentNode", void 0), O(y(n), "onDragStart", (function(e, t) {
                        var r = t.node;
                        if (n.props.onDragStart) {
                            var o = { top: 0, left: 0 },
                                a = r.offsetParent;
                            if (a) {
                                var i = a.getBoundingClientRect(),
                                    l = r.getBoundingClientRect(),
                                    s = l.left / n.props.transformScale,
                                    c = i.left / n.props.transformScale,
                                    u = l.top / n.props.transformScale,
                                    d = i.top / n.props.transformScale;
                                o.left = s - c + a.scrollLeft, o.top = u - d + a.scrollTop, n.setState({ dragging: o });
                                var p = n.calcXY(o.top, o.left),
                                    f = p.x,
                                    h = p.y;
                                return n.props.onDragStart && n.props.onDragStart.call(y(n), n.props.i, f, h, { e: e, node: r, newPosition: o })
                            }
                        }
                    })), O(y(n), "onDrag", (function(e, t) {
                        var r = t.node,
                            o = t.deltaX,
                            a = t.deltaY;
                        if (n.props.onDrag) {
                            var i = { top: 0, left: 0 };
                            if (!n.state.dragging) throw new Error("onDrag called before onDragStart.");
                            i.left = n.state.dragging.left + o, i.top = n.state.dragging.top + a, n.setState({ dragging: i });
                            var l = n.calcXY(i.top, i.left),
                                s = l.x,
                                c = l.y;
                            return n.props.onDrag && n.props.onDrag.call(y(n), n.props.i, s, c, { e: e, node: r, newPosition: i })
                        }
                    })), O(y(n), "onDragStop", (function(e, t) {
                        var r = t.node;
                        if (n.props.onDragStop) {
                            var o = { top: 0, left: 0 };
                            if (!n.state.dragging) throw new Error("onDragEnd called before onDragStart.");
                            o.left = n.state.dragging.left, o.top = n.state.dragging.top, n.setState({ dragging: null });
                            var a = n.calcXY(o.top, o.left),
                                i = a.x,
                                l = a.y;
                            return n.props.onDragStop && n.props.onDragStop.call(y(n), n.props.i, i, l, { e: e, node: r, newPosition: o })
                        }
                    })), O(y(n), "onResizeStop", (function(e, t) { n.onResizeHandler(e, t, "onResizeStop") })), O(y(n), "onResizeStart", (function(e, t) { n.onResizeHandler(e, t, "onResizeStart") })), O(y(n), "onResize", (function(e, t) { n.onResizeHandler(e, t, "onResize") })), n
                }
                var n, a, u;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && v(e, t)
                }(t, e), n = t, (a = [{ key: "componentDidUpdate", value: function(e) { this.props.droppingPosition && e.droppingPosition && this.moveDroppingItem(e) } }, {
                    key: "moveDroppingItem",
                    value: function(e) {
                        var t = this.props.droppingPosition,
                            n = this.state.dragging;
                        if (t && e.droppingPosition) {
                            this.currentNode || (this.currentNode = o.default.findDOMNode(this));
                            var r = n && t.x !== e.droppingPosition.x || t.y !== e.droppingPosition.y;
                            if (n) {
                                if (r) {
                                    var a = t.x - n.left,
                                        i = t.y - n.top;
                                    this.onDrag(t.e, { node: this.currentNode, deltaX: a, deltaY: i })
                                }
                            } else this.onDragStart(t.e, { node: this.currentNode, deltaX: t.x, deltaY: t.y })
                        }
                    }
                }, {
                    key: "calcColWidth",
                    value: function() {
                        var e = this.props,
                            t = e.margin,
                            n = e.containerPadding,
                            r = e.containerWidth,
                            o = e.cols;
                        return (r - t[0] * (o - 1) - 2 * n[0]) / o
                    }
                }, {
                    key: "calcPosition",
                    value: function(e, t, n, r, o) {
                        var a = this.props,
                            i = a.margin,
                            l = a.containerPadding,
                            s = a.rowHeight,
                            c = this.calcColWidth(),
                            u = {};
                        return o && o.resizing ? (u.width = Math.round(o.resizing.width), u.height = Math.round(o.resizing.height)) : (u.width = n === 1 / 0 ? n : Math.round(c * n + Math.max(0, n - 1) * i[0]), u.height = r === 1 / 0 ? r : Math.round(s * r + Math.max(0, r - 1) * i[1])), o && o.dragging ? (u.top = Math.round(o.dragging.top), u.left = Math.round(o.dragging.left)) : (u.top = Math.round((s + i[1]) * t + l[1]), u.left = Math.round((c + i[0]) * e + l[0])), u
                    }
                }, {
                    key: "calcXY",
                    value: function(e, t) {
                        var n = this.props,
                            r = n.margin,
                            o = n.cols,
                            a = n.rowHeight,
                            i = n.w,
                            l = n.h,
                            s = n.maxRows,
                            c = this.calcColWidth(),
                            u = Math.round((t - r[0]) / (c + r[0])),
                            d = Math.round((e - r[1]) / (a + r[1]));
                        return { x: u = Math.max(Math.min(u, o - i), 0), y: d = Math.max(Math.min(d, s - l), 0) }
                    }
                }, {
                    key: "calcWH",
                    value: function(e) {
                        var t = e.height,
                            n = e.width,
                            r = this.props,
                            o = r.margin,
                            a = r.maxRows,
                            i = r.cols,
                            l = r.rowHeight,
                            s = r.x,
                            c = r.y,
                            u = this.calcColWidth(),
                            d = Math.round((n + o[0]) / (u + o[0])),
                            p = Math.round((t + o[1]) / (l + o[1]));
                        return { w: d = Math.max(Math.min(d, i - s), 0), h: p = Math.max(Math.min(p, a - c), 0) }
                    }
                }, {
                    key: "createStyle",
                    value: function(e) {
                        var t, n = this.props,
                            r = n.usePercentages,
                            o = n.containerWidth;
                        return n.useCSSTransforms ? t = (0, s.setTransform)(e) : (t = (0, s.setTopLeft)(e), r && (t.left = (0, s.perc)(e.left / o), t.width = (0, s.perc)(e.width / o))), t
                    }
                }, { key: "mixinDraggable", value: function(e) { return r.default.createElement(i.DraggableCore, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, handle: this.props.handle, cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""), scale: this.props.transformScale }, e) } }, {
                    key: "mixinResizable",
                    value: function(e, t) {
                        var n = this.props,
                            o = n.cols,
                            a = n.x,
                            i = n.minW,
                            s = n.minH,
                            c = n.maxW,
                            u = n.maxH,
                            d = this.calcPosition(0, 0, o - a, 0).width,
                            p = this.calcPosition(0, 0, i, s),
                            f = this.calcPosition(0, 0, c, u),
                            h = [p.width, p.height],
                            m = [Math.min(f.width, d), Math.min(f.height, 1 / 0)];
                        return r.default.createElement(l.Resizable, { width: t.width, height: t.height, minConstraints: h, maxConstraints: m, onResizeStop: this.onResizeStop, onResizeStart: this.onResizeStart, onResize: this.onResize }, e)
                    }
                }, {
                    key: "onResizeHandler",
                    value: function(e, t, n) {
                        var r = t.node,
                            o = t.size,
                            a = this.props[n];
                        if (a) {
                            var i = this.props,
                                l = i.cols,
                                s = i.x,
                                c = i.i,
                                u = i.maxW,
                                d = i.minW,
                                p = i.maxH,
                                f = i.minH,
                                h = this.calcWH(o),
                                m = h.w,
                                b = h.h;
                            m = Math.min(m, l - s), m = Math.max(m, 1), m = Math.max(Math.min(m, u), d), b = Math.max(Math.min(b, p), f), this.setState({ resizing: "onResizeStop" === n ? null : o }), a.call(this, c, m, b, { e: e, node: r, size: o })
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.x,
                            n = e.y,
                            o = e.w,
                            a = e.h,
                            i = e.isDraggable,
                            l = e.isResizable,
                            s = e.droppingPosition,
                            u = e.useCSSTransforms,
                            d = this.calcPosition(t, n, o, a, this.state),
                            p = r.default.Children.only(this.props.children),
                            h = r.default.cloneElement(p, { className: (0, c.default)("react-grid-item", p.props.className, this.props.className, { static: this.props.static, resizing: Boolean(this.state.resizing), "react-draggable": i, "react-draggable-dragging": Boolean(this.state.dragging), dropping: Boolean(s), cssTransforms: u }), style: f({}, this.props.style, {}, p.props.style, {}, this.createStyle(d)) });
                        return l && (h = this.mixinResizable(h, d)), i && (h = this.mixinDraggable(h)), h
                    }
                }]) && m(n.prototype, a), u && m(n, u), t
            }(r.default.Component);
            t.default = S, O(S, "propTypes", { children: a.default.element, cols: a.default.number.isRequired, containerWidth: a.default.number.isRequired, rowHeight: a.default.number.isRequired, margin: a.default.array.isRequired, maxRows: a.default.number.isRequired, containerPadding: a.default.array.isRequired, x: a.default.number.isRequired, y: a.default.number.isRequired, w: a.default.number.isRequired, h: a.default.number.isRequired, minW: function(e, t) { var n = e[t]; return "number" != typeof n ? new Error("minWidth not Number") : n > e.w || n > e.maxW ? new Error("minWidth larger than item width/maxWidth") : void 0 }, maxW: function(e, t) { var n = e[t]; return "number" != typeof n ? new Error("maxWidth not Number") : n < e.w || n < e.minW ? new Error("maxWidth smaller than item width/minWidth") : void 0 }, minH: function(e, t) { var n = e[t]; return "number" != typeof n ? new Error("minHeight not Number") : n > e.h || n > e.maxH ? new Error("minHeight larger than item height/maxHeight") : void 0 }, maxH: function(e, t) { var n = e[t]; return "number" != typeof n ? new Error("maxHeight not Number") : n < e.h || n < e.minH ? new Error("maxHeight smaller than item height/minHeight") : void 0 }, i: a.default.string.isRequired, onDragStop: a.default.func, onDragStart: a.default.func, onDrag: a.default.func, onResizeStop: a.default.func, onResizeStart: a.default.func, onResize: a.default.func, isDraggable: a.default.bool.isRequired, isResizable: a.default.bool.isRequired, static: a.default.bool, useCSSTransforms: a.default.bool.isRequired, transformScale: a.default.number, className: a.default.string, handle: a.default.string, cancel: a.default.string, droppingPosition: a.default.shape({ e: a.default.object.isRequired, x: a.default.number.isRequired, y: a.default.number.isRequired }) }), O(S, "defaultProps", { className: "", cancel: "", handle: "", minH: 1, minW: 1, maxH: 1 / 0, maxW: 1 / 0, transformScale: 1 })
        },
        NmA4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
                var t, n;
                return n = t = function(t) {
                    function n() {
                        var e, t;
                        c(this, n);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return m(f(t = d(this, (e = p(n)).call.apply(e, [this].concat(o)))), "state", { width: 1280 }), m(f(t), "mounted", !1), m(f(t), "onWindowResize", (function() {
                            if (t.mounted) {
                                var e = a.default.findDOMNode(f(t));
                                e instanceof HTMLElement && t.setState({ width: e.offsetWidth })
                            }
                        })), t
                    }
                    return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && h(e, t)
                        }(n, t),
                        function(e, t, n) {
                            t && u(e.prototype, t);
                            n && u(e, n)
                        }(n, [{ key: "componentDidMount", value: function() { this.mounted = !0, window.addEventListener("resize", this.onWindowResize), this.onWindowResize() } }, { key: "componentWillUnmount", value: function() { this.mounted = !1, window.removeEventListener("resize", this.onWindowResize) } }, {
                            key: "render",
                            value: function() {
                                var t = this.props,
                                    n = t.measureBeforeMount,
                                    o = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, o = function(e, t) {
                                            if (null == e) return {};
                                            var n, r, o = {},
                                                a = Object.keys(e);
                                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                            return o
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                                        return o
                                    }(t, ["measureBeforeMount"]);
                                return n && !this.mounted ? r.default.createElement("div", { className: this.props.className, style: this.props.style }) : r.default.createElement(e, s({}, o, this.state))
                            }
                        }]), n
                }(r.default.Component), m(t, "defaultProps", { measureBeforeMount: !1 }), m(t, "propTypes", { measureBeforeMount: o.default.bool }), n
            };
            var r = i(n("q1tI")),
                o = i(n("17x9")),
                a = i(n("i8i4"));

            function i(e) { return e && e.__esModule ? e : { default: e } }

            function l(e) { return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function s() { return (s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function c(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) { return !t || "object" !== l(t) && "function" != typeof t ? f(e) : t }

            function p(e) { return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function f(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function h(e, t) { return (h = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        },
        Nznp: function(e, t, n) {
            var r, o;
            window, e.exports = (r = n("q1tI"), o = n("i8i4"), function(e) {
                var t = {};

                function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function(t) { return e[t] }.bind(null, o));
                    return r
                }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 9)
            }([function(e, t, n) { e.exports = n(11)() }, function(e, t, n) {
                "use strict";

                function r(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (t.apply(t, [e[n], n, e])) return e[n]
                }

                function o(e) { return "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e) }

                function a(e) { return "number" == typeof e && !isNaN(e) }

                function i(e) { return parseInt(e, 10) }

                function l(e, t, n) { if (e[t]) return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child.")) }
                n.d(t, "b", (function() { return r })), n.d(t, "d", (function() { return o })), n.d(t, "e", (function() { return a })), n.d(t, "c", (function() { return i })), n.d(t, "a", (function() { return l }))
            }, function(e, t, n) {
                "use strict";
                var r = n(1),
                    o = ["Moz", "Webkit", "O", "ms"];

                function a(e, t) { return t ? "".concat(t).concat(function(e) { for (var t = "", n = !0, r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : "-" === e[r] ? n = !0 : t += e[r]; return t }(e)) : e }
                var i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                    if ("undefined" == typeof window || void 0 === window.document) return "";
                    var t = window.document.documentElement.style;
                    if (e in t) return "";
                    for (var n = 0; n < o.length; n++)
                        if (a(e, o[n]) in t) return o[n];
                    return ""
                }();

                function l(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                    }
                    return n
                }

                function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                n.d(t, "i", (function() { return d })), n.d(t, "a", (function() { return p })), n.d(t, "m", (function() { return f })), n.d(t, "k", (function() { return h })), n.d(t, "l", (function() { return m })), n.d(t, "g", (function() { return b })), n.d(t, "h", (function() { return g })), n.d(t, "j", (function() { return y })), n.d(t, "c", (function() { return v })), n.d(t, "d", (function() { return O })), n.d(t, "e", (function() { return w })), n.d(t, "f", (function() { return k })), n.d(t, "b", (function() { return M })), n.d(t, "n", (function() { return j })), n.d(t, "o", (function() { return E }));
                var c = "";

                function u(e, t) { return c || (c = Object(r.b)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(t) { return Object(r.d)(e[t]) }))), !!Object(r.d)(e[c]) && e[c](t) }

                function d(e, t, n) {
                    var r = e;
                    do {
                        if (u(r, t)) return !0;
                        if (r === n) return !1;
                        r = r.parentNode
                    } while (r);
                    return !1
                }

                function p(e, t, n) { e && (e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener ? e.addEventListener(t, n, !0) : e["on" + t] = n) }

                function f(e, t, n) { e && (e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener ? e.removeEventListener(t, n, !0) : e["on" + t] = null) }

                function h(e) {
                    var t = e.clientHeight,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t += Object(r.c)(n.borderTopWidth)) + Object(r.c)(n.borderBottomWidth)
                }

                function m(e) {
                    var t = e.clientWidth,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t += Object(r.c)(n.borderLeftWidth)) + Object(r.c)(n.borderRightWidth)
                }

                function b(e) {
                    var t = e.clientHeight,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t -= Object(r.c)(n.paddingTop)) - Object(r.c)(n.paddingBottom)
                }

                function g(e) {
                    var t = e.clientWidth,
                        n = e.ownerDocument.defaultView.getComputedStyle(e);
                    return (t -= Object(r.c)(n.paddingLeft)) - Object(r.c)(n.paddingRight)
                }

                function y(e, t) { var n = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(); return { x: e.clientX + t.scrollLeft - n.left, y: e.clientY + t.scrollTop - n.top } }

                function v(e, t) { var n = S(e, t, "px"); return s({}, a("transform", i), n) }

                function O(e, t) { return S(e, t, "") }

                function S(e, t, n) {
                    var r = e.x,
                        o = e.y,
                        a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
                    if (t) {
                        var i = "".concat("string" == typeof t.x ? t.x : t.x + n),
                            l = "".concat("string" == typeof t.y ? t.y : t.y + n);
                        a = "translate(".concat(i, ", ").concat(l, ")") + a
                    }
                    return a
                }

                function w(e, t) { return e.targetTouches && Object(r.b)(e.targetTouches, (function(e) { return t === e.identifier })) || e.changedTouches && Object(r.b)(e.changedTouches, (function(e) { return t === e.identifier })) }

                function k(e) { return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0].identifier : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].identifier : void 0 }

                function M(e) {
                    if (e) {
                        var t, n, r = e.getElementById("react-draggable-style-el");
                        r || ((r = e.createElement("style")).type = "text/css", r.id = "react-draggable-style-el", r.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", r.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(r)), e.body && (n = "react-draggable-transparent-selection", (t = e.body).classList ? t.classList.add(n) : t.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (t.className += " ".concat(n)))
                    }
                }

                function j(e) { try { e && e.body && (t = e.body, n = "react-draggable-transparent-selection", t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "")), e.selection ? e.selection.empty() : window.getSelection().removeAllRanges() } catch (e) {} var t, n }

                function E() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(n, !0).forEach((function(t) { s(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                        }
                        return e
                    }({ touchAction: "none" }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "e", (function() { return l })), n.d(t, "g", (function() { return s })), n.d(t, "a", (function() { return c })), n.d(t, "b", (function() { return u })), n.d(t, "f", (function() { return d })), n.d(t, "c", (function() { return p })), n.d(t, "d", (function() { return f }));
                var r = n(1),
                    o = n(6),
                    a = n.n(o),
                    i = n(2);

                function l(e, t, n) {
                    if (!e.props.bounds) return [t, n];
                    var o = e.props.bounds;
                    o = "string" == typeof o ? o : function(e) { return { left: e.left, top: e.top, right: e.right, bottom: e.bottom } }(o);
                    var a = h(e);
                    if ("string" == typeof o) {
                        var l, s = a.ownerDocument,
                            c = s.defaultView;
                        if (!((l = "parent" === o ? a.parentNode : s.querySelector(o)) instanceof c.HTMLElement)) throw new Error('Bounds selector "' + o + '" could not find an element.');
                        var u = c.getComputedStyle(a),
                            d = c.getComputedStyle(l);
                        o = { left: -a.offsetLeft + Object(r.c)(d.paddingLeft) + Object(r.c)(u.marginLeft), top: -a.offsetTop + Object(r.c)(d.paddingTop) + Object(r.c)(u.marginTop), right: Object(i.h)(l) - Object(i.l)(a) - a.offsetLeft + Object(r.c)(d.paddingRight) - Object(r.c)(u.marginRight), bottom: Object(i.g)(l) - Object(i.k)(a) - a.offsetTop + Object(r.c)(d.paddingBottom) - Object(r.c)(u.marginBottom) }
                    }
                    return Object(r.e)(o.right) && (t = Math.min(t, o.right)), Object(r.e)(o.bottom) && (n = Math.min(n, o.bottom)), Object(r.e)(o.left) && (t = Math.max(t, o.left)), Object(r.e)(o.top) && (n = Math.max(n, o.top)), [t, n]
                }

                function s(e, t, n) { return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]] }

                function c(e) { return "both" === e.props.axis || "x" === e.props.axis }

                function u(e) { return "both" === e.props.axis || "y" === e.props.axis }

                function d(e, t, n) {
                    var r = "number" == typeof t ? Object(i.e)(e, t) : null;
                    if ("number" == typeof t && !r) return null;
                    var o = h(n),
                        a = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
                    return Object(i.j)(r || e, a)
                }

                function p(e, t, n) {
                    var o = e.state,
                        a = !Object(r.e)(o.lastX),
                        i = h(e);
                    return a ? { node: i, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n } : { node: i, deltaX: t - o.lastX, deltaY: n - o.lastY, lastX: o.lastX, lastY: o.lastY, x: t, y: n }
                }

                function f(e, t) { var n = e.props.scale; return { node: t.node, x: e.state.x + t.deltaX / n, y: e.state.y + t.deltaY / n, deltaX: t.deltaX / n, deltaY: t.deltaY / n, lastX: e.state.x, lastY: e.state.y } }

                function h(e) { var t = a.a.findDOMNode(e); if (!t) throw new Error("<DraggableCore>: Unmounted during event!"); return t }
            }, function(e, t, n) {
                "use strict";

                function r() {}
                n.d(t, "a", (function() { return r }))
            }, function(e, t) { e.exports = r }, function(e, t) { e.exports = o }, function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "default", (function() { return k }));
                var r = n(5),
                    o = n.n(r),
                    a = n(0),
                    i = n.n(a),
                    l = n(6),
                    s = n.n(l),
                    c = n(2),
                    u = n(3),
                    d = n(1),
                    p = n(4);

                function f(e) { return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function h(e, t) {
                    return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                        return n
                    }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                }

                function m(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function b(e) { return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function g(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function y(e, t) { return (y = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function v(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var O = { start: "touchstart", move: "touchmove", stop: "touchend" },
                    S = { start: "mousedown", move: "mousemove", stop: "mouseup" },
                    w = S,
                    k = function(e) {
                        function t() {
                            var e, n, r, o;
                            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
                            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                            return r = this, o = (e = b(t)).call.apply(e, [this].concat(i)), n = !o || "object" !== f(o) && "function" != typeof o ? g(r) : o, v(g(n), "state", { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }), v(g(n), "handleDragStart", (function(e) {
                                if (n.props.onMouseDown(e), !n.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button) return !1;
                                var t = s.a.findDOMNode(g(n));
                                if (!t || !t.ownerDocument || !t.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
                                var r = t.ownerDocument;
                                if (!(n.props.disabled || !(e.target instanceof r.defaultView.Node) || n.props.handle && !Object(c.i)(e.target, n.props.handle, t) || n.props.cancel && Object(c.i)(e.target, n.props.cancel, t))) {
                                    var o = Object(c.f)(e);
                                    n.setState({ touchIdentifier: o });
                                    var a = Object(u.f)(e, o, g(n));
                                    if (null != a) {
                                        var i = a.x,
                                            l = a.y,
                                            d = Object(u.c)(g(n), i, l);
                                        Object(p.a)("DraggableCore: handleDragStart: %j", d), Object(p.a)("calling", n.props.onStart), !1 !== n.props.onStart(e, d) && (n.props.enableUserSelectHack && Object(c.b)(r), n.setState({ dragging: !0, lastX: i, lastY: l }), Object(c.a)(r, w.move, n.handleDrag), Object(c.a)(r, w.stop, n.handleDragStop))
                                    }
                                }
                            })), v(g(n), "handleDrag", (function(e) {
                                "touchmove" === e.type && e.preventDefault();
                                var t = Object(u.f)(e, n.state.touchIdentifier, g(n));
                                if (null != t) {
                                    var r = t.x,
                                        o = t.y;
                                    if (Array.isArray(n.props.grid)) {
                                        var a = r - n.state.lastX,
                                            i = o - n.state.lastY,
                                            l = h(Object(u.g)(n.props.grid, a, i), 2);
                                        if (a = l[0], i = l[1], !a && !i) return;
                                        r = n.state.lastX + a, o = n.state.lastY + i
                                    }
                                    var s = Object(u.c)(g(n), r, o);
                                    if (Object(p.a)("DraggableCore: handleDrag: %j", s), !1 !== n.props.onDrag(e, s)) n.setState({ lastX: r, lastY: o });
                                    else try { n.handleDragStop(new MouseEvent("mouseup")) } catch (e) {
                                        var c = document.createEvent("MouseEvents");
                                        c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.handleDragStop(c)
                                    }
                                }
                            })), v(g(n), "handleDragStop", (function(e) {
                                if (n.state.dragging) {
                                    var t = Object(u.f)(e, n.state.touchIdentifier, g(n));
                                    if (null != t) {
                                        var r = t.x,
                                            o = t.y,
                                            a = Object(u.c)(g(n), r, o),
                                            i = s.a.findDOMNode(g(n));
                                        i && n.props.enableUserSelectHack && Object(c.n)(i.ownerDocument), Object(p.a)("DraggableCore: handleDragStop: %j", a), n.setState({ dragging: !1, lastX: NaN, lastY: NaN }), n.props.onStop(e, a), i && (Object(p.a)("DraggableCore: Removing handlers"), Object(c.m)(i.ownerDocument, w.move, n.handleDrag), Object(c.m)(i.ownerDocument, w.stop, n.handleDragStop))
                                    }
                                }
                            })), v(g(n), "onMouseDown", (function(e) { return w = S, n.handleDragStart(e) })), v(g(n), "onMouseUp", (function(e) { return w = S, n.handleDragStop(e) })), v(g(n), "onTouchStart", (function(e) { return w = O, n.handleDragStart(e) })), v(g(n), "onTouchEnd", (function(e) { return w = O, n.handleDragStop(e) })), n
                        }
                        var n, r;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && y(e, t)
                        }(t, o.a.Component), n = t, (r = [{
                            key: "componentWillUnmount",
                            value: function() {
                                var e = s.a.findDOMNode(this);
                                if (e) {
                                    var t = e.ownerDocument;
                                    Object(c.m)(t, S.move, this.handleDrag), Object(c.m)(t, O.move, this.handleDrag), Object(c.m)(t, S.stop, this.handleDragStop), Object(c.m)(t, O.stop, this.handleDragStop), this.props.enableUserSelectHack && Object(c.n)(t)
                                }
                            }
                        }, { key: "render", value: function() { return o.a.cloneElement(o.a.Children.only(this.props.children), { style: Object(c.o)(this.props.children.props.style), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd }) } }]) && m(n.prototype, r), t
                    }();
                v(k, "displayName", "DraggableCore"), v(k, "propTypes", { allowAnyClick: i.a.bool, disabled: i.a.bool, enableUserSelectHack: i.a.bool, offsetParent: function(e, t) { if (e[t] && 1 !== e[t].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.") }, grid: i.a.arrayOf(i.a.number), handle: i.a.string, cancel: i.a.string, onStart: i.a.func, onDrag: i.a.func, onStop: i.a.func, onMouseDown: i.a.func, className: d.a, style: d.a, transform: d.a }), v(k, "defaultProps", { allowAnyClick: !1, cancel: null, disabled: !1, enableUserSelectHack: !0, offsetParent: null, handle: null, grid: null, transform: null, onStart: function() {}, onDrag: function() {}, onStop: function() {}, onMouseDown: function() {} })
            }, function(e, t, n) {
                var r;
                ! function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var r = arguments[t];
                            if (r) {
                                var a = typeof r;
                                if ("string" === a || "number" === a) e.push(r);
                                else if (Array.isArray(r) && r.length) {
                                    var i = o.apply(null, r);
                                    i && e.push(i)
                                } else if ("object" === a)
                                    for (var l in r) n.call(r, l) && r[l] && e.push(l)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() { return o }.apply(t, [])) || (e.exports = r)
                }()
            }, function(e, t, n) {
                var r = n(10).default;
                e.exports = r, e.exports.default = r, e.exports.DraggableCore = n(7).default
            }, function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "default", (function() { return E }));
                var r = n(5),
                    o = n.n(r),
                    a = n(0),
                    i = n.n(a),
                    l = n(6),
                    s = n.n(l),
                    c = n(8),
                    u = n.n(c),
                    d = n(2),
                    p = n(3),
                    f = n(1),
                    h = n(7),
                    m = n(4);

                function b(e) { return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function g() { return (g = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

                function y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                    }
                    return n
                }

                function v(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(n, !0).forEach((function(t) { j(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                    }
                    return e
                }

                function O(e) { return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function S(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function w(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function k(e, t, n) { return t && w(e.prototype, t), n && w(e, n), e }

                function M(e, t) { return (M = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function j(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var E = function(e) {
                    function t(e) {
                        var n, r;
                        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), r = O(t).call(this, e), n = !r || "object" !== b(r) && "function" != typeof r ? S(this) : r, j(S(n), "onDragStart", (function(e, t) {
                            if (Object(m.a)("Draggable: onDragStart: %j", t), !1 === n.props.onStart(e, Object(p.d)(S(n), t))) return !1;
                            n.setState({ dragging: !0, dragged: !0 })
                        })), j(S(n), "onDrag", (function(e, t) {
                            if (!n.state.dragging) return !1;
                            Object(m.a)("Draggable: onDrag: %j", t);
                            var r = Object(p.d)(S(n), t),
                                o = { x: r.x, y: r.y };
                            if (n.props.bounds) {
                                var a = o.x,
                                    i = o.y;
                                o.x += n.state.slackX, o.y += n.state.slackY;
                                var l = function(e, t) {
                                        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                                            var n = [],
                                                r = !0,
                                                o = !1,
                                                a = void 0;
                                            try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                                            return n
                                        }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                                    }(Object(p.e)(S(n), o.x, o.y), 2),
                                    s = l[0],
                                    c = l[1];
                                o.x = s, o.y = c, o.slackX = n.state.slackX + (a - o.x), o.slackY = n.state.slackY + (i - o.y), r.x = o.x, r.y = o.y, r.deltaX = o.x - n.state.x, r.deltaY = o.y - n.state.y
                            }
                            if (!1 === n.props.onDrag(e, r)) return !1;
                            n.setState(o)
                        })), j(S(n), "onDragStop", (function(e, t) {
                            if (!n.state.dragging) return !1;
                            if (!1 === n.props.onStop(e, Object(p.d)(S(n), t))) return !1;
                            Object(m.a)("Draggable: onDragStop: %j", t);
                            var r = { dragging: !1, slackX: 0, slackY: 0 };
                            if (Boolean(n.props.position)) {
                                var o = n.props.position,
                                    a = o.x,
                                    i = o.y;
                                r.x = a, r.y = i
                            }
                            n.setState(r)
                        })), n.state = { dragging: !1, dragged: !1, x: e.position ? e.position.x : e.defaultPosition.x, y: e.position ? e.position.y : e.defaultPosition.y, prevPropsPosition: v({}, e.position), slackX: 0, slackY: 0, isElementSVG: !1 }, !e.position || e.onDrag || e.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && M(e, t)
                    }(t, o.a.Component), k(t, null, [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.position,
                                r = t.prevPropsPosition;
                            return !n || r && n.x === r.x && n.y === r.y ? null : (Object(m.a)("Draggable: getDerivedStateFromProps %j", { position: n, prevPropsPosition: r }), { x: n.x, y: n.y, prevPropsPosition: v({}, n) })
                        }
                    }]), k(t, [{ key: "componentDidMount", value: function() { void 0 !== window.SVGElement && s.a.findDOMNode(this) instanceof window.SVGElement && this.setState({ isElementSVG: !0 }) } }, { key: "componentWillUnmount", value: function() { this.setState({ dragging: !1 }) } }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = (t.axis, t.bounds, t.children),
                                r = t.defaultPosition,
                                a = t.defaultClassName,
                                i = t.defaultClassNameDragging,
                                l = t.defaultClassNameDragged,
                                s = t.position,
                                c = t.positionOffset,
                                f = (t.scale, function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, o = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                        return o
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                                    return o
                                }(t, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"])),
                                m = {},
                                b = null,
                                y = !Boolean(s) || this.state.dragging,
                                O = s || r,
                                S = { x: Object(p.a)(this) && y ? this.state.x : O.x, y: Object(p.b)(this) && y ? this.state.y : O.y };
                            this.state.isElementSVG ? b = Object(d.d)(S, c) : m = Object(d.c)(S, c);
                            var w = u()(n.props.className || "", a, (j(e = {}, i, this.state.dragging), j(e, l, this.state.dragged), e));
                            return o.a.createElement(h.default, g({}, f, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), o.a.cloneElement(o.a.Children.only(n), { className: w, style: v({}, n.props.style, {}, m), transform: b }))
                        }
                    }]), t
                }();
                j(E, "displayName", "Draggable"), j(E, "propTypes", v({}, h.default.propTypes, { axis: i.a.oneOf(["both", "x", "y", "none"]), bounds: i.a.oneOfType([i.a.shape({ left: i.a.number, right: i.a.number, top: i.a.number, bottom: i.a.number }), i.a.string, i.a.oneOf([!1])]), defaultClassName: i.a.string, defaultClassNameDragging: i.a.string, defaultClassNameDragged: i.a.string, defaultPosition: i.a.shape({ x: i.a.number, y: i.a.number }), positionOffset: i.a.shape({ x: i.a.oneOfType([i.a.number, i.a.string]), y: i.a.oneOfType([i.a.number, i.a.string]) }), position: i.a.shape({ x: i.a.number, y: i.a.number }), className: f.a, style: f.a, transform: f.a })), j(E, "defaultProps", v({}, h.default.defaultProps, { axis: "both", bounds: !1, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, position: null, scale: 1 }))
            }, function(e, t, n) {
                "use strict";
                var r = n(12);

                function o() {}

                function a() {}
                a.resetWarningCache = o, e.exports = function() {
                    function e(e, t, n, o, a, i) { if (i !== r) { var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw l.name = "Invariant Violation", l } }

                    function t() { return e }
                    e.isRequired = e;
                    var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: o };
                    return n.PropTypes = n, n
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }]))
        },
        "OG+f": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return f }));
            var r = n("q1tI"),
                o = n.n(r),
                a = n("Obii"),
                i = n("t8hP");

            function l(e) { return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t) { return !t || "object" !== l(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function d(e) { return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function p(e, t) { return (p = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var f = function(e) {
                function t() {
                    var e, n;
                    s(this, t);
                    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
                    return (n = u(this, (e = d(t)).call.apply(e, [this].concat(o)))).state = { isError: !1, isLoading: !1, help: "" }, n.loadHelp = function() {
                        var e = n.props,
                            t = e.plugin,
                            r = e.type;
                        n.setState({ isLoading: !0 }), Object(i.getBackendSrv)().get("/api/plugins/".concat(t.id, "/markdown/").concat(r)).then((function(e) { var t = Object(a.renderMarkdown)(e); "" === e && "help" === r ? n.setState({ isError: !1, isLoading: !1, help: n.constructPlaceholderInfo() }) : n.setState({ isError: !1, isLoading: !1, help: t }) })).catch((function() { n.setState({ isError: !0, isLoading: !1 }) }))
                    }, n
                }
                var n, r, l;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t)
                }(t, e), n = t, (r = [{ key: "componentDidMount", value: function() { this.loadHelp() } }, { key: "constructPlaceholderInfo", value: function() { return "No plugin help or readme markdown file was found" } }, {
                    key: "render",
                    value: function() {
                        this.props.type;
                        var e = this.state,
                            t = e.isError,
                            n = e.isLoading,
                            r = e.help;
                        return n ? o.a.createElement("h2", null, "Loading help...") : t ? o.a.createElement("h3", null, "'Error occurred when loading help'") : o.a.createElement("div", { className: "markdown-html", dangerouslySetInnerHTML: { __html: r } })
                    }
                }]) && c(n.prototype, r), l && c(n, l), t
            }(r.PureComponent)
        },
        QLaP: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r, o, a, i, l) {
                if (!e) {
                    var s;
                    if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [n, r, o, a, i, l],
                            u = 0;
                        (s = new Error(t.replace(/%s/g, (function() { return c[u++] })))).name = "Invariant Violation"
                    }
                    throw s.framesToPop = 1, s
                }
            }
        },
        Qgwu: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.getBreakpointFromWidth = function(e, t) {
                for (var n = o(e), r = n[0], a = 1, i = n.length; a < i; a++) {
                    var l = n[a];
                    t > e[l] && (r = l)
                }
                return r
            }, t.getColsFromBreakpoint = function(e, t) { if (!t[e]) throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + e + " is missing!"); return t[e] }, t.findOrGenerateResponsiveLayout = function(e, t, n, a, i, l) { if (e[n]) return (0, r.cloneLayout)(e[n]); for (var s = e[a], c = o(t), u = c.slice(c.indexOf(n)), d = 0, p = u.length; d < p; d++) { var f = u[d]; if (e[f]) { s = e[f]; break } } return s = (0, r.cloneLayout)(s || []), (0, r.compact)((0, r.correctBounds)(s, { cols: i }), l, i) }, t.sortBreakpoints = o;
            var r = n("T0XP");

            function o(e) { return Object.keys(e).sort((function(t, n) { return e[t] - e[n] })) }
        },
        Sa1T: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = {};

                function n(n) { var r = e.get(n); return void 0 === r ? [] : t[r] || [] }
                return {
                    get: n,
                    add: function(n, r) {
                        var o = e.get(n);
                        t[o] || (t[o] = []), t[o].push(r)
                    },
                    removeListener: function(e, t) {
                        for (var r = n(e), o = 0, a = r.length; o < a; ++o)
                            if (r[o] === t) { r.splice(o, 1); break }
                    },
                    removeAllListeners: function(e) {
                        var t = n(e);
                        t && (t.length = 0)
                    }
                }
            }
        },
        T0XP: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.bottom = s, t.cloneLayout = function(e) { for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = c(e[n]); return t }, t.cloneLayoutItem = c, t.childrenEqual = function(e, t) { return (0, r.default)(o.default.Children.map(e, (function(e) { return e.key })), o.default.Children.map(t, (function(e) { return e.key }))) }, t.collides = u, t.compact = d, t.compactItem = h, t.correctBounds = m, t.getLayoutItem = b, t.getFirstCollision = g, t.getAllCollisions = y, t.getStatics = v, t.moveElement = O, t.moveElementAwayFromCollision = S, t.perc = function(e) { return 100 * e + "%" }, t.setTransform = function(e) {
                var t = e.top,
                    n = e.left,
                    r = e.width,
                    o = e.height,
                    a = "translate(".concat(n, "px,").concat(t, "px)");
                return { transform: a, WebkitTransform: a, MozTransform: a, msTransform: a, OTransform: a, width: "".concat(r, "px"), height: "".concat(o, "px"), position: "absolute" }
            }, t.setTopLeft = function(e) {
                var t = e.top,
                    n = e.left,
                    r = e.width,
                    o = e.height;
                return { top: "".concat(t, "px"), left: "".concat(n, "px"), width: "".concat(r, "px"), height: "".concat(o, "px"), position: "absolute" }
            }, t.sortLayoutItems = w, t.sortLayoutItemsByRowCol = k, t.sortLayoutItemsByColRow = M, t.synchronizeLayoutWithChildren = function(e, t, n, r) {
                e = e || [];
                var a = [];
                return o.default.Children.forEach(t, (function(t, n) {
                    var r = b(e, String(t.key));
                    if (r) a[n] = c(r);
                    else {
                        0;
                        var o = t.props["data-grid"] || t.props._grid;
                        a[n] = c(o ? function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(n, !0).forEach((function(t) { l(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({}, o, { i: t.key }) : { w: 1, h: 1, x: 0, y: s(a), i: String(t.key) })
                    }
                })), a = d(a = m(a, { cols: n }), r, n)
            }, t.validateLayout = j, t.autoBindHandlers = function(e, t) { t.forEach((function(t) { return e[t] = e[t].bind(e) })) }, t.noop = void 0;
            var r = a(n("XaGS")),
                o = a(n("q1tI"));

            function a(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function s(e) { for (var t, n = 0, r = 0, o = e.length; r < o; r++)(t = e[r].y + e[r].h) > n && (n = t); return n }

            function c(e) { return { w: e.w, h: e.h, x: e.x, y: e.y, i: e.i, minW: e.minW, maxW: e.maxW, minH: e.minH, maxH: e.maxH, moved: Boolean(e.moved), static: Boolean(e.static), isDraggable: e.isDraggable, isResizable: e.isResizable } }

            function u(e, t) { return e.i !== t.i && (!(e.x + e.w <= t.x) && (!(e.x >= t.x + t.w) && (!(e.y + e.h <= t.y) && !(e.y >= t.y + t.h)))) }

            function d(e, t, n) {
                for (var r = v(e), o = w(e, t), a = Array(e.length), i = 0, l = o.length; i < l; i++) {
                    var s = c(o[i]);
                    s.static || (s = h(r, s, t, n, o), r.push(s)), a[e.indexOf(o[i])] = s, s.moved = !1
                }
                return a
            }
            var p = { x: "w", y: "h" };

            function f(e, t, n, r) {
                var o = p[r];
                t[r] += 1;
                for (var a = e.map((function(e) { return e.i })).indexOf(t.i) + 1; a < e.length; a++) {
                    var i = e[a];
                    if (!i.static) {
                        if (i.y > t.y + t.h) break;
                        u(t, i) && f(e, i, n + t[o], r)
                    }
                }
                t[r] = n
            }

            function h(e, t, n, r, o) {
                var a, i = "horizontal" === n;
                if ("vertical" === n)
                    for (t.y = Math.min(s(e), t.y); t.y > 0 && !g(e, t);) t.y--;
                else if (i)
                    for (t.y = Math.min(s(e), t.y); t.x > 0 && !g(e, t);) t.x--;
                for (; a = g(e, t);) i ? f(o, t, a.x + a.w, "x") : f(o, t, a.y + a.h, "y"), i && t.x + t.w > r && (t.x = r - t.w, t.y++);
                return t
            }

            function m(e, t) {
                for (var n = v(e), r = 0, o = e.length; r < o; r++) {
                    var a = e[r];
                    if (a.x + a.w > t.cols && (a.x = t.cols - a.w), a.x < 0 && (a.x = 0, a.w = t.cols), a.static)
                        for (; g(n, a);) a.y++;
                    else n.push(a)
                }
                return e
            }

            function b(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n].i === t) return e[n]
            }

            function g(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (u(e[n], t)) return e[n]
            }

            function y(e, t) { return e.filter((function(e) { return u(e, t) })) }

            function v(e) { return e.filter((function(e) { return e.static })) }

            function O(e, t, n, r, o, a, i, l) {
                if (t.static) return e;
                if (t.y === r && t.x === n) return e;
                E("Moving element ".concat(t.i, " to [").concat(String(n), ",").concat(String(r), "] from [").concat(t.x, ",").concat(t.y, "]"));
                var s = t.x,
                    c = t.y;
                "number" == typeof n && (t.x = n), "number" == typeof r && (t.y = r), t.moved = !0;
                var u = w(e, i);
                ("vertical" === i && "number" == typeof r ? c >= r : "horizontal" === i && "number" == typeof n && s >= n) && (u = u.reverse());
                var d = y(u, t);
                if (a && d.length) return E("Collision prevented on ".concat(t.i, ", reverting.")), t.x = s, t.y = c, t.moved = !1, e;
                for (var p = 0, f = d.length; p < f; p++) {
                    var h = d[p];
                    E("Resolving collision between ".concat(t.i, " at [").concat(t.x, ",").concat(t.y, "] and ").concat(h.i, " at [").concat(h.x, ",").concat(h.y, "]")), h.moved || (e = h.static ? S(e, h, t, o, i, l) : S(e, t, h, o, i, l))
                }
                return e
            }

            function S(e, t, n, r, o, a) {
                var i = "horizontal" === o,
                    l = "horizontal" !== o,
                    s = t.static;
                if (r) { r = !1; var c = { x: i ? Math.max(t.x - n.w, 0) : n.x, y: l ? Math.max(t.y - n.h, 0) : n.y, w: n.w, h: n.h, i: "-1" }; if (!g(e, c)) return E("Doing reverse collision on ".concat(n.i, " up to [").concat(c.x, ",").concat(c.y, "].")), O(e, n, i ? c.x : void 0, l ? c.y : void 0, r, s, o, a) }
                return O(e, n, i ? n.x + 1 : void 0, l ? n.y + 1 : void 0, r, s, o, a)
            }

            function w(e, t) { return "horizontal" === t ? M(e) : k(e) }

            function k(e) { return [].concat(e).sort((function(e, t) { return e.y > t.y || e.y === t.y && e.x > t.x ? 1 : e.y === t.y && e.x === t.x ? 0 : -1 })) }

            function M(e) { return [].concat(e).sort((function(e, t) { return e.x > t.x || e.x === t.x && e.y > t.y ? 1 : -1 })) }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Layout",
                    n = ["x", "y", "w", "h"];
                if (!Array.isArray(e)) throw new Error(t + " must be an array!");
                for (var r = 0, o = e.length; r < o; r++) {
                    for (var a = e[r], i = 0; i < n.length; i++)
                        if ("number" != typeof a[n[i]]) throw new Error("ReactGridLayout: " + t + "[" + r + "]." + n[i] + " must be a number!");
                    if (a.i && "string" != typeof a.i) throw new Error("ReactGridLayout: " + t + "[" + r + "].i must be a string!");
                    if (void 0 !== a.static && "boolean" != typeof a.static) throw new Error("ReactGridLayout: " + t + "[" + r + "].static must be a boolean!")
                }
            }

            function E() {}
            t.noop = function() {}
        },
        UFhH: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.idGenerator,
                    n = e.stateHandler.getState;
                return { get: function(e) { var t = n(e); return t && void 0 !== t.id ? t.id : null }, set: function(e) { var r = n(e); if (!r) throw new Error("setId required the element to have a resize detection state."); var o = t.generate(); return r.id = o, o } }
            }
        },
        UL9e: function(e, t, n) {
            "use strict";
            (e.exports = {}).getOption = function(e, t, n) { var r = e[t]; if (null == r && void 0 !== n) return n; return r }
        },
        VBuW: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("bal4"),
                i = n("Csm0"),
                l = n("Algx"),
                s = function(e) {
                    var t = Object(r.useMemo)((function() { return l.b.get(e.variable.type).picker }), [e.variable]),
                        n = Object(r.useMemo)((function() { return e.variable.label || e.variable.name }), [e.variable]);
                    return e.variable ? o.a.createElement("div", { className: "gf-form" }, e.variable.hide === a.a.dontHide && o.a.createElement("label", { className: "gf-form-label gf-form-label--variable", "aria-label": i.selectors.pages.Dashboard.SubMenu.submenuItemLabels(n) }, n), e.variable.hide !== a.a.hideVariable && t && o.a.createElement(t, { variable: e.variable })) : o.a.createElement("div", null, "Couldn't load variable")
                };

            function c(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            n.d(t, "a", (function() { return u }));
            var u = function(e) {
                var t = e.variables,
                    n = c(Object(r.useState)([]), 2),
                    l = n[0],
                    u = n[1];
                return Object(r.useEffect)((function() { u(t.filter((function(e) { return e.hide !== a.a.hideVariable }))) }), [t]), 0 === l.length ? null : o.a.createElement(o.a.Fragment, null, l.map((function(e) { return o.a.createElement("div", { key: e.id, className: "submenu-item gf-form-inline", "aria-label": i.selectors.pages.Dashboard.SubMenu.submenuItem }, o.a.createElement(s, { variable: e })) })))
            }
        },
        VzO5: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.cloneElement = function(e, t) {
                t.style && e.props.style && (t.style = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(n, !0).forEach((function(t) { i(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                    }
                    return e
                }({}, e.props.style, {}, t.style));
                t.className && e.props.className && (t.className = e.props.className + " " + t.className);
                return o.default.cloneElement(e, t)
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : { default: r };

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        },
        "W+U1": function(e, t, n) {
            "use strict";
            e.exports = function(e) { var t = e.stateHandler.getState; return { isDetectable: function(e) { var n = t(e); return n && !!n.isDetectable }, markAsDetectable: function(e) { t(e).isDetectable = !0 }, isBusy: function(e) { return !!t(e).busy }, markBusy: function(e, n) { t(e).busy = !!n } } }
        },
        Wkk1: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return d }));
            var r = n("q1tI"),
                o = n.n(r),
                a = n("kDLi");

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function u(e, t) { return (u = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var d = function(e) {
                function t(e) {
                    var n;
                    return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), (n = s(this, c(t).call(this, e))).onChange = function(e) {
                        var t = n.props.datasources.find((function(t) { return t.name === e.value }));
                        t && n.props.onChange(t)
                    }, n
                }
                var n, r, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.datasources,
                            n = e.current,
                            r = e.autoFocus,
                            i = e.hideTextValue,
                            l = e.onBlur,
                            s = e.openMenuOnFocus,
                            c = e.showLoading,
                            u = e.placeholder,
                            d = e.invalid,
                            p = t.map((function(e) { return { value: e.name, label: e.name, imgUrl: e.meta.info.logos.small } })),
                            f = n && { label: n.name.substr(0, 37), value: n.name, imgUrl: n.meta.info.logos.small, loading: c, hideText: i };
                        return o.a.createElement(a.Select, { className: "ds-picker select-container", isMulti: !1, isClearable: !1, backspaceRemovesValue: !1, onChange: this.onChange, options: p, autoFocus: r, onBlur: l, openMenuOnFocus: s, maxMenuHeight: 500, menuPlacement: "bottom", placeholder: u, noOptionsMessage: "No datasources found", value: f, invalid: d })
                    }
                }]) && l(n.prototype, r), i && l(n, i), t
            }(r.PureComponent);
            d.defaultProps = { autoFocus: !1, openMenuOnFocus: !1, placeholder: "Select datasource" }, t.b = d
        },
        XaGS: function(e, t, n) {
            (function(e, n) {
                var r = "[object Arguments]",
                    o = "[object Map]",
                    a = "[object Object]",
                    i = "[object Set]",
                    l = /^\[object .+?Constructor\]$/,
                    s = /^(?:0|[1-9]\d*)$/,
                    c = {};
                c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c[r] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c[o] = c["[object Number]"] = c[a] = c["[object RegExp]"] = c[i] = c["[object String]"] = c["[object WeakMap]"] = !1;
                var u = "object" == typeof e && e && e.Object === Object && e,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    p = u || d || Function("return this")(),
                    f = t && !t.nodeType && t,
                    h = f && "object" == typeof n && n && !n.nodeType && n,
                    m = h && h.exports === f,
                    b = m && u.process,
                    g = function() { try { return b && b.binding && b.binding("util") } catch (e) {} }(),
                    y = g && g.isTypedArray;

                function v(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }

                function O(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach((function(e, r) { n[++t] = [r, e] })), n
                }

                function S(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach((function(e) { n[++t] = e })), n
                }
                var w, k, M, j = Array.prototype,
                    E = Function.prototype,
                    x = Object.prototype,
                    P = p["__core-js_shared__"],
                    C = E.toString,
                    z = x.hasOwnProperty,
                    T = (w = /[^.]+$/.exec(P && P.keys && P.keys.IE_PROTO || "")) ? "Symbol(src)_1." + w : "",
                    D = x.toString,
                    B = RegExp("^" + C.call(z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    W = m ? p.Buffer : void 0,
                    R = p.Symbol,
                    I = p.Uint8Array,
                    _ = x.propertyIsEnumerable,
                    N = j.splice,
                    A = R ? R.toStringTag : void 0,
                    F = Object.getOwnPropertySymbols,
                    L = W ? W.isBuffer : void 0,
                    H = (k = Object.keys, M = Object, function(e) { return k(M(e)) }),
                    G = ge(p, "DataView"),
                    U = ge(p, "Map"),
                    V = ge(p, "Promise"),
                    q = ge(p, "Set"),
                    X = ge(p, "WeakMap"),
                    Y = ge(Object, "create"),
                    Q = Se(G),
                    $ = Se(U),
                    J = Se(V),
                    K = Se(q),
                    Z = Se(X),
                    ee = R ? R.prototype : void 0,
                    te = ee ? ee.valueOf : void 0;

                function ne(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function re(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function oe(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function ae(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.__data__ = new oe; ++t < n;) this.add(e[t])
                }

                function ie(e) {
                    var t = this.__data__ = new re(e);
                    this.size = t.size
                }

                function le(e, t) {
                    var n = Me(e),
                        r = !n && ke(e),
                        o = !n && !r && je(e),
                        a = !n && !r && !o && ze(e),
                        i = n || r || o || a,
                        l = i ? function(e, t) { for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n); return r }(e.length, String) : [],
                        s = l.length;
                    for (var c in e) !t && !z.call(e, c) || i && ("length" == c || o && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Oe(c, s)) || l.push(c);
                    return l
                }

                function se(e, t) {
                    for (var n = e.length; n--;)
                        if (we(e[n][0], t)) return n;
                    return -1
                }

                function ce(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : A && A in Object(e) ? function(e) {
                        var t = z.call(e, A),
                            n = e[A];
                        try { e[A] = void 0; var r = !0 } catch (e) {}
                        var o = D.call(e);
                        r && (t ? e[A] = n : delete e[A]);
                        return o
                    }(e) : function(e) { return D.call(e) }(e)
                }

                function ue(e) { return Ce(e) && ce(e) == r }

                function de(e, t, n, l, s) {
                    return e === t || (null == e || null == t || !Ce(e) && !Ce(t) ? e != e && t != t : function(e, t, n, l, s, c) {
                        var u = Me(e),
                            d = Me(t),
                            p = u ? "[object Array]" : ve(e),
                            f = d ? "[object Array]" : ve(t),
                            h = (p = p == r ? a : p) == a,
                            m = (f = f == r ? a : f) == a,
                            b = p == f;
                        if (b && je(e)) {
                            if (!je(t)) return !1;
                            u = !0, h = !1
                        }
                        if (b && !h) return c || (c = new ie), u || ze(e) ? he(e, t, n, l, s, c) : function(e, t, n, r, a, l, s) {
                            switch (n) {
                                case "[object DataView]":
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case "[object ArrayBuffer]":
                                    return !(e.byteLength != t.byteLength || !l(new I(e), new I(t)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                    return we(+e, +t);
                                case "[object Error]":
                                    return e.name == t.name && e.message == t.message;
                                case "[object RegExp]":
                                case "[object String]":
                                    return e == t + "";
                                case o:
                                    var c = O;
                                case i:
                                    var u = 1 & r;
                                    if (c || (c = S), e.size != t.size && !u) return !1;
                                    var d = s.get(e);
                                    if (d) return d == t;
                                    r |= 2, s.set(e, t);
                                    var p = he(c(e), c(t), r, a, l, s);
                                    return s.delete(e), p;
                                case "[object Symbol]":
                                    if (te) return te.call(e) == te.call(t)
                            }
                            return !1
                        }(e, t, p, n, l, s, c);
                        if (!(1 & n)) {
                            var g = h && z.call(e, "__wrapped__"),
                                y = m && z.call(t, "__wrapped__");
                            if (g || y) {
                                var v = g ? e.value() : e,
                                    w = y ? t.value() : t;
                                return c || (c = new ie), s(v, w, n, l, c)
                            }
                        }
                        if (!b) return !1;
                        return c || (c = new ie),
                            function(e, t, n, r, o, a) {
                                var i = 1 & n,
                                    l = me(e),
                                    s = l.length,
                                    c = me(t).length;
                                if (s != c && !i) return !1;
                                var u = s;
                                for (; u--;) { var d = l[u]; if (!(i ? d in t : z.call(t, d))) return !1 }
                                var p = a.get(e);
                                if (p && a.get(t)) return p == t;
                                var f = !0;
                                a.set(e, t), a.set(t, e);
                                var h = i;
                                for (; ++u < s;) {
                                    d = l[u];
                                    var m = e[d],
                                        b = t[d];
                                    if (r) var g = i ? r(b, m, d, t, e, a) : r(m, b, d, e, t, a);
                                    if (!(void 0 === g ? m === b || o(m, b, n, r, a) : g)) { f = !1; break }
                                    h || (h = "constructor" == d)
                                }
                                if (f && !h) {
                                    var y = e.constructor,
                                        v = t.constructor;
                                    y != v && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof v && v instanceof v) && (f = !1)
                                }
                                return a.delete(e), a.delete(t), f
                            }(e, t, n, l, s, c)
                    }(e, t, n, l, de, s))
                }

                function pe(e) { return !(!Pe(e) || function(e) { return !!T && T in e }(e)) && (Ee(e) ? B : l).test(Se(e)) }

                function fe(e) { if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || x, t !== r) return H(e); var t, n, r, o = []; for (var a in Object(e)) z.call(e, a) && "constructor" != a && o.push(a); return o }

                function he(e, t, n, r, o, a) {
                    var i = 1 & n,
                        l = e.length,
                        s = t.length;
                    if (l != s && !(i && s > l)) return !1;
                    var c = a.get(e);
                    if (c && a.get(t)) return c == t;
                    var u = -1,
                        d = !0,
                        p = 2 & n ? new ae : void 0;
                    for (a.set(e, t), a.set(t, e); ++u < l;) {
                        var f = e[u],
                            h = t[u];
                        if (r) var m = i ? r(h, f, u, t, e, a) : r(f, h, u, e, t, a);
                        if (void 0 !== m) {
                            if (m) continue;
                            d = !1;
                            break
                        }
                        if (p) { if (!v(t, (function(e, t) { if (i = t, !p.has(i) && (f === e || o(f, e, n, r, a))) return p.push(t); var i }))) { d = !1; break } } else if (f !== h && !o(f, h, n, r, a)) { d = !1; break }
                    }
                    return a.delete(e), a.delete(t), d
                }

                function me(e) { return function(e, t, n) { var r = t(e); return Me(e) ? r : function(e, t) { for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n]; return e }(r, n(e)) }(e, Te, ye) }

                function be(e, t) { var n, r, o = e.__data__; return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map }

                function ge(e, t) { var n = function(e, t) { return null == e ? void 0 : e[t] }(e, t); return pe(n) ? n : void 0 }
                ne.prototype.clear = function() { this.__data__ = Y ? Y(null) : {}, this.size = 0 }, ne.prototype.delete = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t }, ne.prototype.get = function(e) { var t = this.__data__; if (Y) { var n = t[e]; return "__lodash_hash_undefined__" === n ? void 0 : n } return z.call(t, e) ? t[e] : void 0 }, ne.prototype.has = function(e) { var t = this.__data__; return Y ? void 0 !== t[e] : z.call(t, e) }, ne.prototype.set = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = Y && void 0 === t ? "__lodash_hash_undefined__" : t, this }, re.prototype.clear = function() { this.__data__ = [], this.size = 0 }, re.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = se(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : N.call(t, n, 1), --this.size, !0)
                }, re.prototype.get = function(e) {
                    var t = this.__data__,
                        n = se(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }, re.prototype.has = function(e) { return se(this.__data__, e) > -1 }, re.prototype.set = function(e, t) {
                    var n = this.__data__,
                        r = se(n, e);
                    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                }, oe.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new ne, map: new(U || re), string: new ne } }, oe.prototype.delete = function(e) { var t = be(this, e).delete(e); return this.size -= t ? 1 : 0, t }, oe.prototype.get = function(e) { return be(this, e).get(e) }, oe.prototype.has = function(e) { return be(this, e).has(e) }, oe.prototype.set = function(e, t) {
                    var n = be(this, e),
                        r = n.size;
                    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                }, ae.prototype.add = ae.prototype.push = function(e) { return this.__data__.set(e, "__lodash_hash_undefined__"), this }, ae.prototype.has = function(e) { return this.__data__.has(e) }, ie.prototype.clear = function() { this.__data__ = new re, this.size = 0 }, ie.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = t.delete(e);
                    return this.size = t.size, n
                }, ie.prototype.get = function(e) { return this.__data__.get(e) }, ie.prototype.has = function(e) { return this.__data__.has(e) }, ie.prototype.set = function(e, t) {
                    var n = this.__data__;
                    if (n instanceof re) {
                        var r = n.__data__;
                        if (!U || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new oe(r)
                    }
                    return n.set(e, t), this.size = n.size, this
                };
                var ye = F ? function(e) {
                        return null == e ? [] : (e = Object(e), function(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
                                var i = e[n];
                                t(i, n, e) && (a[o++] = i)
                            }
                            return a
                        }(F(e), (function(t) { return _.call(e, t) })))
                    } : function() { return [] },
                    ve = ce;

                function Oe(e, t) { return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || s.test(e)) && e > -1 && e % 1 == 0 && e < t }

                function Se(e) { if (null != e) { try { return C.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" }

                function we(e, t) { return e === t || e != e && t != t }(G && "[object DataView]" != ve(new G(new ArrayBuffer(1))) || U && ve(new U) != o || V && "[object Promise]" != ve(V.resolve()) || q && ve(new q) != i || X && "[object WeakMap]" != ve(new X)) && (ve = function(e) {
                    var t = ce(e),
                        n = t == a ? e.constructor : void 0,
                        r = n ? Se(n) : "";
                    if (r) switch (r) {
                        case Q:
                            return "[object DataView]";
                        case $:
                            return o;
                        case J:
                            return "[object Promise]";
                        case K:
                            return i;
                        case Z:
                            return "[object WeakMap]"
                    }
                    return t
                });
                var ke = ue(function() { return arguments }()) ? ue : function(e) { return Ce(e) && z.call(e, "callee") && !_.call(e, "callee") },
                    Me = Array.isArray;
                var je = L || function() { return !1 };

                function Ee(e) { if (!Pe(e)) return !1; var t = ce(e); return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t }

                function xe(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991 }

                function Pe(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) }

                function Ce(e) { return null != e && "object" == typeof e }
                var ze = y ? function(e) { return function(t) { return e(t) } }(y) : function(e) { return Ce(e) && xe(e.length) && !!c[ce(e)] };

                function Te(e) { return null != (t = e) && xe(t.length) && !Ee(t) ? le(e) : fe(e); var t }
                n.exports = function(e, t) { return de(e, t) }
            }).call(this, n("yLpj"), n("YuTi")(e))
        },
        bNWW: function(e, t, n) {
            "use strict";
            e.exports = function() { throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable") }, e.exports.Resizable = n("jqYm").default, e.exports.ResizableBox = n("E56+").default
        },
        eIbz: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("LvDl"),
                i = n.n(a),
                l = n("kDLi"),
                s = n("Csm0"),
                c = n("/MKj"),
                u = n("ZFWI"),
                d = n("SMGL"),
                p = n("3SGO"),
                f = n("KyLG"),
                h = n("eXZ6"),
                m = n("kDDq"),
                b = n("Zss7"),
                g = n.n(b);

            function y() { var e = M(["\n      color: ", ";\n    "]); return y = function() { return e }, e }

            function v() { var e = M(["\n      cursor: pointer;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-bottom: ", ";\n      &:hover {\n        background: ", ";\n      }\n    "]); return v = function() { return e }, e }

            function O() { var e = M(["\n      position: absolute;\n      cursor: grab;\n      top: 0;\n      left: 0;\n      height: 26px;\n      padding: 0 ", ";\n      width: 100%;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      transition: background-color 0.1s ease-in-out;\n      &:hover {\n        background: ", ";\n      }\n    "]); return O = function() { return e }, e }

            function S() { var e = M(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      justify-content: center;\n    "]); return S = function() { return e }, e }

            function w() { var e = M(["\n      overflow: hidden;\n      outline: 2px dotted transparent;\n      outline-offset: 2px;\n      box-shadow: 0 0 0 2px black, 0 0 0px 4px #1f60c4;\n      animation: ", " 2s ease infinite;\n    "]); return w = function() { return e }, e }

            function k() { var e = M(["\n    0% {box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";}\n    50% {box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";}\n    100% {box-shadow: 0 0 0 2px ", ", 0 0 0px 4px  ", ";}\n  "]); return k = function() { return e }, e }

            function M(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
            var j = { addPanel: f.a, updateLocation: p.c },
                E = Object(c.connect)(null, j)((function(e) {
                    var t = e.panel,
                        n = e.dashboard,
                        r = e.updateLocation,
                        a = (e.addPanel, Object(l.useTheme)()),
                        s = C(a);
                    return o.a.createElement("div", { className: Object(m.cx)("panel-container", s.wrapper) }, o.a.createElement(x, { onCancel: function(e) { e.preventDefault(), n.removePanel(t) } }), o.a.createElement("div", { className: s.actionsWrapper }, o.a.createElement(P, {
                        onCreate: function() {
                            var e = t.gridPos,
                                o = { type: "graph", title: "Panel Title", gridPos: { x: e.x, y: e.y, w: e.w, h: e.h } };
                            n.addPanel(o), n.removePanel(t), r({ query: { editPanel: o.id }, partial: !0 })
                        },
                        onPasteCopiedPanel: function(e) {
                            var r = t.gridPos,
                                o = { type: e.id, title: "Panel Title", gridPos: { x: r.x, y: r.y, w: e.defaults.gridPos.w, h: e.defaults.gridPos.h } };
                            e.defaults && (i.a.defaults(o, e.defaults), o.title = e.defaults.title, d.a.delete(h.g)), n.addPanel(o), n.removePanel(t)
                        }
                    }), o.a.createElement("div", null, o.a.createElement(l.HorizontalGroup, { justify: "center" }, o.a.createElement(l.Button, { onClick: function() { n.addPanel({ type: "row", title: "Row title", gridPos: { x: 0, y: 0 } }), n.removePanel(t) }, variant: "secondary", size: "sm" }, "Convert to row")))))
                })),
                x = function(e) {
                    var t = e.onCancel,
                        n = Object(l.useTheme)(),
                        r = z(n);
                    return o.a.createElement("div", { className: Object(m.cx)(r.handle, "grid-drag-handle") }, o.a.createElement(l.IconButton, { name: "times", onClick: t, surface: "header", className: "add-panel-widget__close" }))
                },
                P = function(e) {
                    var t = e.onCreate,
                        n = e.onPasteCopiedPanel,
                        a = Object(r.useMemo)((function() {
                            return function() {
                                var e = i.a.chain(u.b.panels).filter({ hideFromList: !1 }).map((function(e) { return e })).value(),
                                    t = [],
                                    n = d.a.get(h.g);
                                if (n) {
                                    var r = JSON.parse(n),
                                        o = i.a.find(e, { id: r.type });
                                    if (o) {
                                        var a = i.a.cloneDeep(o);
                                        a.name = r.title, a.sort = -1, a.defaults = r, t.push(a)
                                    }
                                }
                                return i.a.sortBy(t, "sort")
                            }()
                        }), []),
                        c = Object(l.useTheme)(),
                        p = T(c);
                    return o.a.createElement("div", { className: p.wrapper }, o.a.createElement(l.HorizontalGroup, null, o.a.createElement(l.Button, { icon: "plus", size: "md", onClick: t, "aria-label": s.selectors.pages.AddDashboard.addNewPanel }, "Add new panel"), 1 === a.length && o.a.createElement(l.Button, { variant: "secondary", size: "md", onClick: function() { return n(a[0]) } }, "Paste copied panel")))
                },
                C = Object(l.stylesFactory)((function(e) { var t = Object(m.keyframes)(k(), e.colors.bodyBg, e.colors.formFocusOutline, e.colors.bodyBg, g()(e.colors.formFocusOutline).darken(20).toHexString(), e.colors.bodyBg, e.colors.formFocusOutline); return { wrapper: Object(m.css)(w(), t), actionsWrapper: Object(m.css)(S()) } })),
                z = Object(l.stylesFactory)((function(e) { return { handle: Object(m.css)(O(), e.spacing.xs, e.colors.bg2) } })),
                T = Object(l.stylesFactory)((function(e) { return { wrapper: Object(m.css)(v(), e.spacing.lg, e.colors.bg2), icon: Object(m.css)(y(), e.colors.textWeak) } }));
            n.d(t, "a", (function() { return E }))
        },
        fEyB: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var r = c(n("q1tI")),
                o = c(n("17x9")),
                a = c(n("XaGS")),
                i = c(n("TSYQ")),
                l = n("T0XP"),
                s = c(n("LvXN"));

            function c(e) { return e && e.__esModule ? e : { default: e } }

            function u(e) { return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(n, !0).forEach((function(t) { y(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function f(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e) { return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function b(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function g(e, t) { return (g = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function y(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var v = function(e) {
                    var t = e || {},
                        n = t.verticalCompact,
                        r = t.compactType;
                    return !1 === n ? null : r
                },
                O = !1;
            try { O = navigator.userAgent.toLowerCase().includes("firefox") } catch (e) {}
            var S = function(e) {
                function t(e, n) {
                    var o;
                    return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), o = function(e, t) { return !t || "object" !== u(t) && "function" != typeof t ? b(e) : t }(this, m(t).call(this, e, n)), y(b(o), "state", { activeDrag: null, layout: (0, l.synchronizeLayoutWithChildren)(o.props.layout, o.props.children, o.props.cols, v(o.props)), mounted: !1, oldDragItem: null, oldLayout: null, oldResizeItem: null, droppingDOMNode: null, children: [] }), y(b(o), "dragEnterCounter", 0), y(b(o), "onDragOver", (function(e) {
                        if (O && !e.nativeEvent.target.className.includes("react-grid-layout")) return !1;
                        var t = o.props.droppingItem,
                            n = o.state.layout,
                            a = e.nativeEvent,
                            i = a.layerX,
                            l = a.layerY,
                            s = { x: i, y: l, e: e };
                        if (o.state.droppingDOMNode) {
                            if (o.state.droppingPosition) {
                                (o.state.droppingPosition.x != i || o.state.droppingPosition.y != l) && o.setState({ droppingPosition: s })
                            }
                        } else o.setState({ droppingDOMNode: r.default.createElement("div", { key: t.i }), droppingPosition: s, layout: [].concat(f(n), [p({}, t, { x: 0, y: 0, static: !1, isDraggable: !0 })]) });
                        e.stopPropagation(), e.preventDefault()
                    })), y(b(o), "removeDroppingPlaceholder", (function() {
                        var e = o.props,
                            t = e.droppingItem,
                            n = e.cols,
                            r = o.state.layout,
                            a = (0, l.compact)(r.filter((function(e) { return e.i !== t.i })), v(o.props), n);
                        o.setState({ layout: a, droppingDOMNode: null, activeDrag: null, droppingPosition: void 0 })
                    })), y(b(o), "onDragLeave", (function() { o.dragEnterCounter--, 0 === o.dragEnterCounter && o.removeDroppingPlaceholder() })), y(b(o), "onDragEnter", (function() { o.dragEnterCounter++ })), y(b(o), "onDrop", (function() {
                        var e = o.props.droppingItem,
                            t = o.state.layout.find((function(t) { return t.i === e.i })) || {},
                            n = t.x,
                            r = t.y,
                            a = t.w,
                            i = t.h;
                        o.dragEnterCounter = 0, o.removeDroppingPlaceholder(), o.props.onDrop({ x: n, y: r, w: a, h: i })
                    })), (0, l.autoBindHandlers)(b(o), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]), o
                }
                var n, o, c;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && g(e, t)
                }(t, e), n = t, c = [{ key: "getDerivedStateFromProps", value: function(e, t) { var n; return t.activeDrag ? null : ((0, a.default)(e.layout, t.propsLayout) && e.compactType === t.compactType ? (0, l.childrenEqual)(e.children, t.children) || (n = t.layout) : n = e.layout, n ? { layout: (0, l.synchronizeLayoutWithChildren)(n, e.children, e.cols, v(e)), compactType: e.compactType, children: e.children, propsLayout: e.layout } : null) } }], (o = [{ key: "componentDidMount", value: function() { this.setState({ mounted: !0 }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout) } }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        if (!this.state.activeDrag) {
                            var n = this.state.layout,
                                r = t.layout;
                            this.onLayoutMaybeChanged(n, r)
                        }
                    }
                }, {
                    key: "containerHeight",
                    value: function() {
                        if (this.props.autoSize) {
                            var e = (0, l.bottom)(this.state.layout),
                                t = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
                            return e * this.props.rowHeight + (e - 1) * this.props.margin[1] + 2 * t + "px"
                        }
                    }
                }, {
                    key: "onDragStart",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state.layout,
                            s = (0, l.getLayoutItem)(i, e);
                        if (s) return this.setState({ oldDragItem: (0, l.cloneLayoutItem)(s), oldLayout: this.state.layout }), this.props.onDragStart(i, s, s, null, o, a)
                    }
                }, {
                    key: "onDrag",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state.oldDragItem,
                            s = this.state.layout,
                            c = this.props.cols,
                            u = (0, l.getLayoutItem)(s, e);
                        if (u) {
                            var d = { w: u.w, h: u.h, x: u.x, y: u.y, placeholder: !0, i: e };
                            s = (0, l.moveElement)(s, u, t, n, !0, this.props.preventCollision, v(this.props), c), this.props.onDrag(s, i, u, d, o, a), this.setState({ layout: (0, l.compact)(s, v(this.props), c), activeDrag: d })
                        }
                    }
                }, {
                    key: "onDragStop",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state.oldDragItem,
                            s = this.state.layout,
                            c = this.props,
                            u = c.cols,
                            d = c.preventCollision,
                            p = (0, l.getLayoutItem)(s, e);
                        if (p) {
                            s = (0, l.moveElement)(s, p, t, n, !0, d, v(this.props), u), this.state.activeDrag && this.props.onDragStop(s, i, p, null, o, a);
                            var f = (0, l.compact)(s, v(this.props), u),
                                h = this.state.oldLayout;
                            this.setState({ activeDrag: null, layout: f, oldDragItem: null, oldLayout: null }), this.onLayoutMaybeChanged(f, h)
                        }
                    }
                }, { key: "onLayoutMaybeChanged", value: function(e, t) { t || (t = this.state.layout), (0, a.default)(t, e) || this.props.onLayoutChange(e) } }, {
                    key: "onResizeStart",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state.layout,
                            s = (0, l.getLayoutItem)(i, e);
                        s && (this.setState({ oldResizeItem: (0, l.cloneLayoutItem)(s), oldLayout: this.state.layout }), this.props.onResizeStart(i, s, s, null, o, a))
                    }
                }, {
                    key: "onResize",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state,
                            s = i.layout,
                            c = i.oldResizeItem,
                            u = this.props,
                            d = u.cols,
                            f = u.preventCollision,
                            h = (0, l.getLayoutItem)(s, e);
                        if (h) {
                            var m;
                            if (f) {
                                var b = (0, l.getAllCollisions)(s, p({}, h, { w: t, h: n })).filter((function(e) { return e.i !== h.i }));
                                if (m = b.length > 0) {
                                    var g = 1 / 0,
                                        y = 1 / 0;
                                    b.forEach((function(e) { e.x > h.x && (g = Math.min(g, e.x)), e.y > h.y && (y = Math.min(y, e.y)) })), Number.isFinite(g) && (h.w = g - h.x), Number.isFinite(y) && (h.h = y - h.y)
                                }
                            }
                            m || (h.w = t, h.h = n);
                            var O = { w: h.w, h: h.h, x: h.x, y: h.y, static: !0, i: e };
                            this.props.onResize(s, c, h, O, o, a), this.setState({ layout: (0, l.compact)(s, v(this.props), d), activeDrag: O })
                        }
                    }
                }, {
                    key: "onResizeStop",
                    value: function(e, t, n, r) {
                        var o = r.e,
                            a = r.node,
                            i = this.state,
                            s = i.layout,
                            c = i.oldResizeItem,
                            u = this.props.cols,
                            d = (0, l.getLayoutItem)(s, e);
                        this.props.onResizeStop(s, c, d, null, o, a);
                        var p = (0, l.compact)(s, v(this.props), u),
                            f = this.state.oldLayout;
                        this.setState({ activeDrag: null, layout: p, oldResizeItem: null, oldLayout: null }), this.onLayoutMaybeChanged(p, f)
                    }
                }, {
                    key: "placeholder",
                    value: function() {
                        var e = this.state.activeDrag;
                        if (!e) return null;
                        var t = this.props,
                            n = t.width,
                            o = t.cols,
                            a = t.margin,
                            i = t.containerPadding,
                            l = t.rowHeight,
                            c = t.maxRows,
                            u = t.useCSSTransforms,
                            d = t.transformScale;
                        return r.default.createElement(s.default, { w: e.w, h: e.h, x: e.x, y: e.y, i: e.i, className: "react-grid-placeholder", containerWidth: n, cols: o, margin: a, containerPadding: i || a, maxRows: c, rowHeight: l, isDraggable: !1, isResizable: !1, useCSSTransforms: u, transformScale: d }, r.default.createElement("div", null))
                    }
                }, {
                    key: "processGridItem",
                    value: function(e, t) {
                        if (e && e.key) {
                            var n = (0, l.getLayoutItem)(this.state.layout, String(e.key));
                            if (!n) return null;
                            var o = this.props,
                                a = o.width,
                                i = o.cols,
                                c = o.margin,
                                u = o.containerPadding,
                                d = o.rowHeight,
                                p = o.maxRows,
                                f = o.isDraggable,
                                h = o.isResizable,
                                m = o.useCSSTransforms,
                                b = o.transformScale,
                                g = o.draggableCancel,
                                y = o.draggableHandle,
                                v = this.state,
                                O = v.mounted,
                                S = v.droppingPosition,
                                w = Boolean(!n.static && f && (n.isDraggable || null == n.isDraggable)),
                                k = Boolean(!n.static && h && (n.isResizable || null == n.isResizable));
                            return r.default.createElement(s.default, { containerWidth: a, cols: i, margin: c, containerPadding: u || c, maxRows: p, rowHeight: d, cancel: g, handle: y, onDragStop: this.onDragStop, onDragStart: this.onDragStart, onDrag: this.onDrag, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, isDraggable: w, isResizable: k, useCSSTransforms: m && O, usePercentages: !O, transformScale: b, w: n.w, h: n.h, x: n.x, y: n.y, i: n.i, minH: n.minH, minW: n.minW, maxH: n.maxH, maxW: n.maxW, static: n.static, droppingPosition: t ? S : void 0 }, e)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.className,
                            o = t.style,
                            a = t.isDroppable,
                            s = (0, i.default)("react-grid-layout", n),
                            c = p({ height: this.containerHeight() }, o);
                        return r.default.createElement("div", { className: s, style: c, onDrop: a ? this.onDrop : l.noop, onDragLeave: a ? this.onDragLeave : l.noop, onDragEnter: a ? this.onDragEnter : l.noop, onDragOver: a ? this.onDragOver : l.noop }, r.default.Children.map(this.props.children, (function(t) { return e.processGridItem(t) })), a && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder())
                    }
                }]) && h(n.prototype, o), c && h(n, c), t
            }(r.default.Component);
            t.default = S, y(S, "displayName", "ReactGridLayout"), y(S, "propTypes", {
                className: o.default.string,
                style: o.default.object,
                width: o.default.number,
                autoSize: o.default.bool,
                cols: o.default.number,
                draggableCancel: o.default.string,
                draggableHandle: o.default.string,
                verticalCompact: function(e) { e.verticalCompact, 0 },
                compactType: o.default.oneOf(["vertical", "horizontal"]),
                layout: function(e) {
                    var t = e.layout;
                    void 0 !== t && (0, l.validateLayout)(t, "layout")
                },
                margin: o.default.arrayOf(o.default.number),
                containerPadding: o.default.arrayOf(o.default.number),
                rowHeight: o.default.number,
                maxRows: o.default.number,
                isDraggable: o.default.bool,
                isResizable: o.default.bool,
                preventCollision: o.default.bool,
                useCSSTransforms: o.default.bool,
                transformScale: o.default.number,
                isDroppable: o.default.bool,
                onLayoutChange: o.default.func,
                onDragStart: o.default.func,
                onDrag: o.default.func,
                onDragStop: o.default.func,
                onResizeStart: o.default.func,
                onResize: o.default.func,
                onResizeStop: o.default.func,
                onDrop: o.default.func,
                droppingItem: o.default.shape({ i: o.default.string.isRequired, w: o.default.number.isRequired, h: o.default.number.isRequired }),
                children: function(e, t) {
                    var n = e[t],
                        o = {};
                    r.default.Children.forEach(n, (function(e) {
                        if (o[e.key]) throw new Error('Duplicate child key "' + e.key + '" found! This will cause problems in ReactGridLayout.');
                        o[e.key] = !0
                    }))
                }
            }), y(S, "defaultProps", { autoSize: !0, cols: 12, className: "", style: {}, draggableHandle: "", draggableCancel: "", containerPadding: null, rowHeight: 150, maxRows: 1 / 0, layout: [], margin: [10, 10], isDraggable: !0, isResizable: !0, isDroppable: !1, useCSSTransforms: !0, transformScale: 1, verticalCompact: !0, compactType: "vertical", preventCollision: !1, droppingItem: { i: "__dropping-elem__", h: 1, w: 1 }, onLayoutChange: l.noop, onDragStart: l.noop, onDrag: l.noop, onDragStop: l.noop, onResizeStart: l.noop, onResize: l.noop, onResizeStop: l.noop, onDrop: l.noop })
        },
        ihjy: function(e, t, n) {
            var r = n("Fxvz"),
                o = n("17x9");
            e.exports = function(e, t, n) { var o = e[t]; if (o) { var a = []; if (Object.keys(o).forEach((function(e) {-1 === r.indexOf(e) && a.push(e) })), a.length) throw new Error("Prop " + t + " passed to " + n + ". Has invalid keys " + a.join(", ")) } }, e.exports.isRequired = function(t, n, r) { if (!t[n]) throw new Error("Prop " + n + " passed to " + r + " is required"); return e.exports(t, n, r) }, e.exports.supportingArrays = o.oneOfType([o.arrayOf(e.exports), e.exports])
        },
        jcCG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n("q1tI"),
                o = n.n(r),
                a = n("kDDq"),
                i = function(e) {
                    var t = e.logoUrl,
                        n = e.title,
                        r = e.description,
                        i = e.labels,
                        l = e.actions,
                        s = e.onClick,
                        c = e.ariaLabel,
                        u = e.className,
                        d = Object(a.cx)("add-data-source-item", u);
                    return o.a.createElement("div", { className: d, onClick: s, "aria-label": c }, t && o.a.createElement("img", { className: "add-data-source-item-logo", src: t }), o.a.createElement("div", { className: "add-data-source-item-text-wrapper" }, o.a.createElement("span", { className: "add-data-source-item-text" }, n), r && o.a.createElement("span", { className: "add-data-source-item-desc" }, r), i && o.a.createElement("div", null, i)), l && o.a.createElement("div", { className: "add-data-source-item-actions" }, l))
                }
        },
        jqYm: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = l(n("q1tI")),
                o = l(n("17x9")),
                a = n("Nznp"),
                i = n("VzO5");

            function l(e) { return e && e.__esModule ? e : { default: e } }

            function s() { return (s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var p = function(e) {
                var t, n;

                function o() { for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]; return d(u(t = e.call.apply(e, [this].concat(r)) || this), "state", { slackW: 0, slackH: 0 }), t }
                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var l = o.prototype;
                return l.lockAspectRatio = function(e, t, n) { return [e = (t = e / n) * n, t] }, l.runConstraints = function(e, t) {
                    var n = [this.props.minConstraints, this.props.maxConstraints],
                        r = n[0],
                        o = n[1];
                    if (!r && !o) return [e, t];
                    if (this.props.lockAspectRatio)
                        if (t === this.props.height) {
                            var a = this.props.width / this.props.height;
                            e = (t = e / a) * a
                        } else {
                            var i = this.props.height / this.props.width;
                            t = (e = t / i) * i
                        }
                    var l = e,
                        s = t,
                        c = this.state,
                        u = c.slackW,
                        d = c.slackH;
                    return e += u, t += d, r && (e = Math.max(r[0], e), t = Math.max(r[1], t)), o && (e = Math.min(o[0], e), t = Math.min(o[1], t)), d += s - t, (u += l - e) === this.state.slackW && d === this.state.slackH || this.setState({ slackW: u, slackH: d }), [e, t]
                }, l.resizeHandler = function(e, t) {
                    var n = this;
                    return function(r, o) {
                        var a = o.node,
                            i = o.deltaX,
                            l = o.deltaY;
                        i /= n.props.transformScale, l /= n.props.transformScale;
                        var s = ("both" === n.props.axis || "x" === n.props.axis) && -1 === ["n", "s"].indexOf(t),
                            c = ("both" === n.props.axis || "y" === n.props.axis) && -1 === ["e", "w"].indexOf(t);
                        s && "w" === t[t.length - 1] && (i = -i), c && "n" === t[0] && (l = -l);
                        var u = n.props.width + (s ? i : 0),
                            d = n.props.height + (c ? l : 0),
                            p = u !== n.props.width,
                            f = d !== n.props.height;
                        if ("onResize" !== e || p || f) {
                            var h = n.runConstraints(u, d);
                            u = h[0], d = h[1];
                            var m = {};
                            if ("onResizeStart" === e);
                            else if ("onResizeStop" === e) m.slackW = m.slackH = 0;
                            else if (u === n.props.width && d === n.props.height) return;
                            "function" == typeof n.props[e] ? ("function" == typeof r.persist && r.persist(), n.setState(m, (function() { return n.props[e](r, { node: a, size: { width: u, height: d }, handle: t }) }))) : n.setState(m)
                        }
                    }
                }, l.renderResizeHandle = function(e) { var t = this.props.handle; return t ? "function" == typeof t ? t(e) : t : r.default.createElement("span", { className: "react-resizable-handle react-resizable-handle-" + e }) }, l.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        o = t.draggableOpts,
                        l = (t.width, t.height, t.handleSize, t.lockAspectRatio, t.axis, t.minConstraints, t.maxConstraints, t.onResize, t.onResizeStop, t.onResizeStart, t.resizeHandles),
                        u = (t.transformScale, function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(t, ["children", "draggableOpts", "width", "height", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"])),
                        p = u.className ? u.className + " react-resizable" : "react-resizable";
                    return (0, i.cloneElement)(n, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(n, !0).forEach((function(t) { d(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                        }
                        return e
                    }({}, u, { className: p, children: [n.props.children, l.map((function(t) { return r.default.createElement(a.DraggableCore, s({}, o, { key: "resizableHandle-" + t, onStop: e.resizeHandler("onResizeStop", t), onStart: e.resizeHandler("onResizeStart", t), onDrag: e.resizeHandler("onResize", t) }), e.renderResizeHandle(t)) }))] }))
                }, o
            }(r.default.Component);
            t.default = p, d(p, "propTypes", { children: o.default.element.isRequired, width: o.default.number.isRequired, height: o.default.number.isRequired, handle: o.default.element, handleSize: o.default.array, resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), transformScale: o.default.number, lockAspectRatio: o.default.bool, axis: o.default.oneOf(["both", "x", "y", "none"]), minConstraints: o.default.arrayOf(o.default.number), maxConstraints: o.default.arrayOf(o.default.number), onResizeStop: o.default.func, onResizeStart: o.default.func, onResize: o.default.func, draggableOpts: o.default.object }), d(p, "defaultProps", { handleSize: [20, 20], lockAspectRatio: !1, axis: "both", minConstraints: [20, 20], maxConstraints: [1 / 0, 1 / 0], resizeHandles: ["se"], transformScale: 1 })
        },
        lEZL: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("kDLi"),
                i = n("kDDq"),
                l = n("ZFWI"),
                s = n("jYz7"),
                c = n("Yuww"),
                u = n("17x9"),
                d = n.n(u),
                p = n("ihjy"),
                f = n.n(p),
                h = n("VCL8");

            function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t, n) { return t && b(e.prototype, t), n && b(e, n), e }

            function y(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), r.forEach((function(t) { y(e, t, n[t]) }))
                }
                return e
            }

            function O(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && w(e, t)
            }

            function S(e) { return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function w(e, t) { return (w = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function k(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function M(e, t) { return !t || "object" != typeof t && "function" != typeof t ? k(e) : t }
            var j = function(e) {
                function t() { return m(this, t), M(this, S(t).apply(this, arguments)) }
                return O(t, e), g(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            r = e.split,
                            a = e.style,
                            i = e.size,
                            l = e.eleRef,
                            s = ["Pane", r, n],
                            c = { flex: 1, position: "relative", outline: "none" };
                        return void 0 !== i && ("vertical" === r ? c.width = i : (c.height = i, c.display = "flex"), c.flex = "none"), c = Object.assign({}, c, a || {}), o.a.createElement("div", { ref: l, className: s.join(" "), style: c }, t)
                    }
                }]), t
            }(o.a.PureComponent);
            j.propTypes = { className: d.a.string.isRequired, children: d.a.node.isRequired, size: d.a.oneOfType([d.a.string, d.a.number]), split: d.a.oneOf(["vertical", "horizontal"]), style: f.a, eleRef: d.a.func }, j.defaultProps = {};
            var E = function(e) {
                function t() { return m(this, t), M(this, S(t).apply(this, arguments)) }
                return O(t, e), g(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.onClick,
                            r = e.onDoubleClick,
                            a = e.onMouseDown,
                            i = e.onTouchEnd,
                            l = e.onTouchStart,
                            s = e.resizerClassName,
                            c = e.split,
                            u = e.style,
                            d = [s, c, t];
                        return o.a.createElement("span", { role: "presentation", className: d.join(" "), style: u, onMouseDown: function(e) { return a(e) }, onTouchStart: function(e) { e.preventDefault(), l(e) }, onTouchEnd: function(e) { e.preventDefault(), i(e) }, onClick: function(e) { n && (e.preventDefault(), n(e)) }, onDoubleClick: function(e) { r && (e.preventDefault(), r(e)) } })
                    }
                }]), t
            }(o.a.Component);

            function x(e, t) {
                if (e.selection) e.selection.empty();
                else try { t.getSelection().removeAllRanges() } catch (e) {}
            }

            function P(e, t, n, r) {
                if ("number" == typeof r) {
                    var o = "number" == typeof t ? t : 0,
                        a = "number" == typeof n && n >= 0 ? n : 1 / 0;
                    return Math.max(o, Math.min(a, r))
                }
                return void 0 !== e ? e : t
            }
            E.propTypes = { className: d.a.string.isRequired, onClick: d.a.func, onDoubleClick: d.a.func, onMouseDown: d.a.func.isRequired, onTouchStart: d.a.func.isRequired, onTouchEnd: d.a.func.isRequired, split: d.a.oneOf(["vertical", "horizontal"]), style: f.a, resizerClassName: d.a.string.isRequired }, E.defaultProps = { resizerClassName: "Resizer" };
            var C = function(e) {
                function t(e) {
                    var n;
                    m(this, t), (n = M(this, S(t).call(this, e))).onMouseDown = n.onMouseDown.bind(k(k(n))), n.onTouchStart = n.onTouchStart.bind(k(k(n))), n.onMouseMove = n.onMouseMove.bind(k(k(n))), n.onTouchMove = n.onTouchMove.bind(k(k(n))), n.onMouseUp = n.onMouseUp.bind(k(k(n)));
                    var r = e.size,
                        o = e.defaultSize,
                        a = e.minSize,
                        i = e.maxSize,
                        l = e.primary,
                        s = void 0 !== r ? r : P(o, a, i, null);
                    return n.state = { active: !1, resized: !1, pane1Size: "first" === l ? s : void 0, pane2Size: "second" === l ? s : void 0, instanceProps: { size: r } }, n
                }
                return O(t, e), g(t, [{ key: "componentDidMount", value: function() { document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("touchmove", this.onTouchMove), this.setState(t.getSizeUpdate(this.props, this.state)) } }, { key: "componentWillUnmount", value: function() { document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("touchmove", this.onTouchMove) } }, {
                    key: "onMouseDown",
                    value: function(e) {
                        var t = Object.assign({}, e, { touches: [{ clientX: e.clientX, clientY: e.clientY }] });
                        this.onTouchStart(t)
                    }
                }, {
                    key: "onTouchStart",
                    value: function(e) {
                        var t = this.props,
                            n = t.allowResize,
                            r = t.onDragStarted,
                            o = t.split;
                        if (n) { x(document, window); var a = "vertical" === o ? e.touches[0].clientX : e.touches[0].clientY; "function" == typeof r && r(), this.setState({ active: !0, position: a }) }
                    }
                }, {
                    key: "onMouseMove",
                    value: function(e) {
                        var t = Object.assign({}, e, { touches: [{ clientX: e.clientX, clientY: e.clientY }] });
                        this.onTouchMove(t)
                    }
                }, {
                    key: "onTouchMove",
                    value: function(e) {
                        var t = this.props,
                            n = t.allowResize,
                            r = t.maxSize,
                            o = t.minSize,
                            a = t.onChange,
                            i = t.split,
                            l = t.step,
                            s = this.state,
                            c = s.active,
                            u = s.position;
                        if (n && c) {
                            x(document, window);
                            var d = "first" === this.props.primary,
                                p = d ? this.pane1 : this.pane2,
                                f = d ? this.pane2 : this.pane1;
                            if (p) {
                                var h = p,
                                    m = f;
                                if (h.getBoundingClientRect) {
                                    var b = h.getBoundingClientRect().width,
                                        g = h.getBoundingClientRect().height,
                                        v = "vertical" === i ? b : g,
                                        O = u - ("vertical" === i ? e.touches[0].clientX : e.touches[0].clientY);
                                    if (l) {
                                        if (Math.abs(O) < l) return;
                                        O = ~~(O / l) * l
                                    }
                                    var S = d ? O : -O;
                                    parseInt(window.getComputedStyle(h).order) > parseInt(window.getComputedStyle(m).order) && (S = -S);
                                    var w = r;
                                    if (void 0 !== r && r <= 0) {
                                        var k = this.splitPane;
                                        w = "vertical" === i ? k.getBoundingClientRect().width + r : k.getBoundingClientRect().height + r
                                    }
                                    var M = v - S,
                                        j = u - O;
                                    M < o ? M = o : void 0 !== r && M > w ? M = w : this.setState({ position: j, resized: !0 }), a && a(M), this.setState(y({ draggedSize: M }, d ? "pane1Size" : "pane2Size", M))
                                }
                            }
                        }
                    }
                }, {
                    key: "onMouseUp",
                    value: function() {
                        var e = this.props,
                            t = e.allowResize,
                            n = e.onDragFinished,
                            r = this.state,
                            o = r.active,
                            a = r.draggedSize;
                        t && o && ("function" == typeof n && n(a), this.setState({ active: !1 }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.allowResize,
                            r = t.children,
                            a = t.className,
                            i = t.onResizerClick,
                            l = t.onResizerDoubleClick,
                            s = t.paneClassName,
                            c = t.pane1ClassName,
                            u = t.pane2ClassName,
                            d = t.paneStyle,
                            p = t.pane1Style,
                            f = t.pane2Style,
                            h = t.resizerClassName,
                            m = t.resizerStyle,
                            b = t.split,
                            g = t.style,
                            y = this.state,
                            O = y.pane1Size,
                            S = y.pane2Size,
                            w = n ? "" : "disabled",
                            k = h ? "".concat(h, " ").concat("Resizer") : h,
                            M = function(e) { return o.a.Children.toArray(e).filter((function(e) { return e })) }(r),
                            x = v({ display: "flex", flex: 1, height: "100%", position: "absolute", outline: "none", overflow: "hidden", MozUserSelect: "text", WebkitUserSelect: "text", msUserSelect: "text", userSelect: "text" }, g);
                        "vertical" === b ? Object.assign(x, { flexDirection: "row", left: 0, right: 0 }) : Object.assign(x, { bottom: 0, flexDirection: "column", minHeight: "100%", top: 0, width: "100%" });
                        var P = ["SplitPane", a, b, w],
                            C = v({}, d, p),
                            z = v({}, d, f),
                            T = ["Pane1", s, c].join(" "),
                            D = ["Pane2", s, u].join(" ");
                        return o.a.createElement("div", { className: P.join(" "), ref: function(t) { e.splitPane = t }, style: x }, o.a.createElement(j, { className: T, key: "pane1", eleRef: function(t) { e.pane1 = t }, size: O, split: b, style: C }, M[0]), o.a.createElement(E, { className: w, onClick: i, onDoubleClick: l, onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onTouchEnd: this.onMouseUp, key: "resizer", resizerClassName: k, split: b, style: m || {} }), o.a.createElement(j, { className: D, key: "pane2", eleRef: function(t) { e.pane2 = t }, size: S, split: b, style: z }, M[1]))
                    }
                }], [{ key: "getDerivedStateFromProps", value: function(e, n) { return t.getSizeUpdate(e, n) } }, {
                    key: "getSizeUpdate",
                    value: function(e, t) {
                        var n = {};
                        if (t.instanceProps.size === e.size && void 0 !== e.size) return {};
                        var r = void 0 !== e.size ? e.size : P(e.defaultSize, e.minSize, e.maxSize, t.draggedSize);
                        void 0 !== e.size && (n.draggedSize = r);
                        var o = "first" === e.primary;
                        return n[o ? "pane1Size" : "pane2Size"] = r, n[o ? "pane2Size" : "pane1Size"] = void 0, n.instanceProps = { size: e.size }, n
                    }
                }]), t
            }(o.a.Component);
            C.propTypes = { allowResize: d.a.bool, children: d.a.arrayOf(d.a.node).isRequired, className: d.a.string, primary: d.a.oneOf(["first", "second"]), minSize: d.a.oneOfType([d.a.string, d.a.number]), maxSize: d.a.oneOfType([d.a.string, d.a.number]), defaultSize: d.a.oneOfType([d.a.string, d.a.number]), size: d.a.oneOfType([d.a.string, d.a.number]), split: d.a.oneOf(["vertical", "horizontal"]), onDragStarted: d.a.func, onDragFinished: d.a.func, onChange: d.a.func, onResizerClick: d.a.func, onResizerDoubleClick: d.a.func, style: f.a, resizerStyle: f.a, paneClassName: d.a.string, pane1ClassName: d.a.string, pane2ClassName: d.a.string, paneStyle: f.a, pane1Style: f.a, pane2Style: f.a, resizerClassName: d.a.string, step: d.a.number }, C.defaultProps = { allowResize: !0, minSize: 50, primary: "first", split: "vertical", paneClassName: "", pane1ClassName: "", pane2ClassName: "" }, Object(h.polyfill)(C);
            var z = C,
                T = n("/MKj"),
                D = n("13X4"),
                B = n("eLz+"),
                W = n("Obii"),
                R = n("Wkk1"),
                I = n("lcF4");

            function _(e) { return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function N() { var e = function(e, t) { t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }(["\n      margin-left: ", ";\n      font-size: ", ";\n      color: ", ";\n    "]); return N = function() { return e }, e }

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function F(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function L(e, t) { return !t || "object" !== _(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function H(e) { return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function G(e, t) { return (G = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function U(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var V = a.LegacyForms.Switch,
                q = a.LegacyForms.Input,
                X = U({}, a.EventsWithValidation.onBlur, [{ rule: function(e) { return !e || W.rangeUtil.isValidTimeSpan(e) }, errorMessage: "Not a valid timespan" }]),
                Y = function(e) { return "" === e ? null : e },
                Q = function(e) {
                    function t(e) {
                        var n, r;
                        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), (r = L(this, H(t).call(this, e))).onRelativeTimeChange = function(e) { r.setState({ relativeTime: e.target.value }) }, r.onTimeShiftChange = function(e) { r.setState({ timeShift: e.target.value }) }, r.onOverrideTime = function(e, t) {
                            var n = e.target.value,
                                o = r.props.panel,
                                i = Y(n);
                            t === a.LegacyInputStatus.Valid && o.timeFrom !== i && (o.timeFrom = i, o.refresh())
                        }, r.onTimeShift = function(e, t) {
                            var n = e.target.value,
                                o = r.props.panel,
                                i = Y(n);
                            t === a.LegacyInputStatus.Valid && o.timeShift !== i && (o.timeShift = i, o.refresh())
                        }, r.onToggleTimeOverride = function() {
                            var e = r.props.panel;
                            r.setState({ hideTimeOverride: !r.state.hideTimeOverride }, (function() { e.hideTimeOverride = r.state.hideTimeOverride, e.refresh() }))
                        }, r.onDataSourceOptionBlur = function(e) {
                            return function() {
                                var t = r.props.panel;
                                t[e] = r.state[e], t.refresh()
                            }
                        }, r.onDataSourceOptionChange = function(e) {
                            return function(t) {
                                r.setState(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? A(Object(n), !0).forEach((function(t) { U(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                                    }
                                    return e
                                }({}, r.state, U({}, e, t.target.value)))
                            }
                        }, r.onMaxDataPointsBlur = function() {
                            var e = r.props.panel,
                                t = parseInt(r.state.maxDataPoints, 10);
                            isNaN(t) ? delete e.maxDataPoints : e.maxDataPoints = t, e.refresh()
                        }, r.onOpenOptions = function() { r.setState({ isOpen: !0 }) }, r.onCloseOptions = function() { r.setState({ isOpen: !1 }) }, r.state = { relativeTime: e.panel.timeFrom || "", timeShift: e.panel.timeShift || "", cacheTimeout: e.panel.cacheTimeout || "", maxDataPoints: null !== (n = e.panel.maxDataPoints) && void 0 !== n ? n : "", interval: e.panel.interval || "", hideTimeOverride: e.panel.hideTimeOverride || !1, isOpen: !1 }, r
                    }
                    var n, r, i;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && G(e, t)
                    }(t, e), n = t, (r = [{
                        key: "renderCacheTimeoutOption",
                        value: function() {
                            var e, t = this.props.dataSource,
                                n = this.state.cacheTimeout;
                            return (null === (e = t.meta.queryOptions) || void 0 === e ? void 0 : e.cacheTimeout) ? o.a.createElement("div", { className: "gf-form-inline" }, o.a.createElement("div", { className: "gf-form" }, o.a.createElement(a.InlineFormLabel, { width: 9, tooltip: "If your time series store has a query cache this option can override the default cache timeout. Specify a\n    numeric value in seconds." }, "Cache timeout"), o.a.createElement(q, { type: "text", className: "width-6", placeholder: "60", name: name, spellCheck: !1, onBlur: this.onDataSourceOptionBlur("maxDataPoints"), onChange: this.onDataSourceOptionChange("maxDataPoints"), value: n }))) : null
                        }
                    }, {
                        key: "renderMaxDataPointsOption",
                        value: function() {
                            var e, t = this.props.data,
                                n = this.state.maxDataPoints,
                                r = null === (e = t.request) || void 0 === e ? void 0 : e.maxDataPoints,
                                i = "" === n;
                            return o.a.createElement("div", { className: "gf-form-inline" }, o.a.createElement("div", { className: "gf-form" }, o.a.createElement(a.InlineFormLabel, { width: 9, tooltip: o.a.createElement(o.a.Fragment, null, "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer.") }, "Max data points"), o.a.createElement(q, { type: "number", className: "width-6", placeholder: "".concat(r), name: name, spellCheck: !1, onBlur: this.onMaxDataPointsBlur, onChange: this.onDataSourceOptionChange("maxDataPoints"), value: n }), i && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "gf-form-label query-segment-operator" }, "="), o.a.createElement("div", { className: "gf-form-label" }, "Width of panel"))))
                        }
                    }, {
                        key: "renderIntervalOption",
                        value: function() {
                            var e, t, n = this.props,
                                r = n.data,
                                i = n.dataSource,
                                l = this.state.interval,
                                s = null === (e = r.request) || void 0 === e ? void 0 : e.interval,
                                c = null !== (t = i.interval) && void 0 !== t ? t : "No limit";
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "gf-form-inline" }, o.a.createElement("div", { className: "gf-form" }, o.a.createElement(a.InlineFormLabel, { width: 9, tooltip: o.a.createElement(o.a.Fragment, null, "A lower limit for the interval. Recommended to be set to write frequency, for example ", o.a.createElement("code", null, "1m"), " ", "if your data is written every minute. Default value can be set in data source settings for most data sources.") }, "Min interval"), o.a.createElement(q, { type: "text", className: "width-6", placeholder: "".concat(c), name: name, spellCheck: !1, onBlur: this.onDataSourceOptionBlur("interval"), onChange: this.onDataSourceOptionChange("interval"), value: l }))), o.a.createElement("div", { className: "gf-form-inline" }, o.a.createElement("div", { className: "gf-form" }, o.a.createElement(a.InlineFormLabel, { width: 9, tooltip: o.a.createElement(o.a.Fragment, null, "The evaluated Interval that is sent to data source and is used in ", o.a.createElement("code", null, "$__interval"), " and", " ", o.a.createElement("code", null, "$__interval_ms")) }, "Interval"), o.a.createElement(a.InlineFormLabel, { width: 6 }, s), o.a.createElement("div", { className: "gf-form-label query-segment-operator" }, "="), o.a.createElement("div", { className: "gf-form-label" }, "Max data points / time range"))))
                        }
                    }, {
                        key: "renderCollapsedText",
                        value: function(e) {
                            var t = this.props.data,
                                n = this.state,
                                r = n.isOpen,
                                a = n.maxDataPoints,
                                i = n.interval;
                            if (!r) { var l = a; "" === a && t.request && (l = "auto = ".concat(t.request.maxDataPoints)); var s = i; return t.request && (s = "".concat(t.request.interval)), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: e.collapsedText }, "MD = ", l), o.a.createElement("div", { className: e.collapsedText }, "Interval = ", s)) }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hideTimeOverride,
                                t = this.state,
                                n = t.relativeTime,
                                r = t.timeShift,
                                i = t.isOpen,
                                l = $();
                            return o.a.createElement(I.a, { title: "Query options", headerElement: this.renderCollapsedText(l), isOpen: i, onOpen: this.onOpenOptions, onClose: this.onCloseOptions }, this.renderMaxDataPointsOption(), this.renderIntervalOption(), this.renderCacheTimeoutOption(), o.a.createElement("div", { className: "gf-form" }, o.a.createElement(a.InlineFormLabel, { width: 9 }, "Relative time"), o.a.createElement(q, { type: "text", className: "width-6", placeholder: "1h", onChange: this.onRelativeTimeChange, onBlur: this.onOverrideTime, validationEvents: X, hideErrorMessage: !0, value: n })), o.a.createElement("div", { className: "gf-form" }, o.a.createElement("span", { className: "gf-form-label width-9" }, "Time shift"), o.a.createElement(q, { type: "text", className: "width-6", placeholder: "1h", onChange: this.onTimeShiftChange, onBlur: this.onTimeShift, validationEvents: X, hideErrorMessage: !0, value: r })), (r || n) && o.a.createElement("div", { className: "gf-form-inline" }, o.a.createElement(V, { label: "Hide time info", labelClass: "width-9", checked: e, onChange: this.onToggleTimeOverride })))
                        }
                    }]) && F(n.prototype, r), i && F(n, i), t
                }(r.PureComponent),
                $ = Object(a.stylesFactory)((function() { var e = l.a.theme; return { collapsedText: Object(i.css)(N(), e.spacing.md, e.typography.size.sm, e.colors.textWeak) } })),
                J = n("t8hP"),
                K = n("LvDl"),
                Z = n.n(K),
                ee = n("O945"),
                te = n("bMS5");

            function ne(e) { return (ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function re(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function oe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ae(e, t) { return !t || "object" !== ne(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function ie(e) { return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function le(e, t) { return (le = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var se = function(e) {
                    function t() {
                        var e, n;
                        re(this, t);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (n = ae(this, (e = ie(t)).call.apply(e, [this].concat(o)))).onAddQuery = function(e) {
                            var t = n.props,
                                r = t.queries;
                            (0, t.onChangeQueries)(Object(te.a)(r, e)), n.props.onScrollBottom()
                        }, n.onRemoveQuery = function(e) {
                            var t = n.props,
                                r = t.queries,
                                o = t.onChangeQueries,
                                a = t.panel;
                            o(r.filter((function(t) { return t !== e }))), a.refresh()
                        }, n.onMoveQuery = function(e, t) {
                            var r = n.props,
                                o = r.queries,
                                a = r.onChangeQueries,
                                i = r.panel,
                                l = Z.a.indexOf(o, e);
                            Z.a.move(o, l, l + t), a(o), i.refresh()
                        }, n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && le(e, t)
                    }(t, e), n = t, (r = [{
                        key: "onChangeQuery",
                        value: function(e, t) {
                            var n = this.props,
                                r = n.queries,
                                o = n.onChangeQueries,
                                a = r[t];
                            e.refId = a.refId, a.datasource && (e.datasource = a.datasource), o(r.map((function(n, r) { return r === t ? e : n })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props;
                            return t.queries.map((function(n, r) { return o.a.createElement(ee.a, { dataSourceValue: n.datasource || t.datasource.value, key: n.refId, panel: t.panel, dashboard: t.dashboard, data: t.data, query: n, onChange: function(t) { return e.onChangeQuery(t, r) }, onRemoveQuery: e.onRemoveQuery, onAddQuery: e.onAddQuery, onMoveQuery: e.onMoveQuery, inMixedMode: t.datasource.meta.mixed }) }))
                        }
                    }]) && oe(n.prototype, r), a && oe(n, a), t
                }(r.PureComponent),
                ce = n("WnbS"),
                ue = n("NXk7"),
                de = n("OG+f"),
                pe = n("4RCQ"),
                fe = n("exx3"),
                he = n("Csm0");

            function me(e) { return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function be() { var e = Se(["\n      padding-bottom: 16px;\n    "]); return be = function() { return e }, e }

            function ge() { var e = Se(["\n      flex-grow: 1;\n      margin-right: ", ";\n    "]); return ge = function() { return e }, e }

            function ye() { var e = Se(["\n      margin-right: ", ";\n    "]); return ye = function() { return e }, e }

            function ve() { var e = Se(["\n      display: flex;\n      margin-bottom: ", ";\n    "]); return ve = function() { return e }, e }

            function Oe() { var e = Se(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      padding: ", ";\n    "]); return Oe = function() { return e }, e }

            function Se(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function we(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) { return void n(e) }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function ke(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) { we(a, r, o, i, l, "next", e) }

                        function l(e) { we(a, r, o, i, l, "throw", e) }
                        i(void 0)
                    }))
                }
            }

            function Me(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function je(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Ee(e, t) { return !t || "object" !== me(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function xe(e) { return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function Pe(e, t) { return (Pe = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var Ce = function(e) {
                    function t() {
                        var e, n;
                        Me(this, t);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (n = Ee(this, (e = xe(t)).call.apply(e, [this].concat(a)))).datasources = Object(ce.a)().getMetricSources(), n.backendSrv = ue.b, n.state = { isLoadingHelp: !1, dataSourceItem: n.findCurrentDataSource(), helpContent: null, isPickerOpen: !1, isAddingMixed: !1, isHelpOpen: !1, scrollTop: 0, data: { state: W.LoadingState.NotStarted, series: [], timeRange: W.DefaultTimeRange } }, n.onChangeDataSource = function() {
                            var e = ke(regeneratorRuntime.mark((function e(t) {
                                var r, o, a, i, s, c, u, d, p;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = n.props.panel, o = n.state.dataSourceItem, !t.meta.mixed) { e.next = 6; break }
                                            r.targets.forEach((function(e) { e.datasource !== fe.a && (e.datasource = r.datasource, e.datasource || (e.datasource = l.b.defaultDatasource)) })), e.next = 30;
                                            break;
                                        case 6:
                                            if (!o) { e.next = 30; break }
                                            if (!o.meta.mixed) { e.next = 29; break }
                                            for (a = !0, i = !1, s = void 0, e.prev = 11, c = r.targets[Symbol.iterator](); !(a = (u = c.next()).done); a = !0)(d = u.value).datasource !== fe.a && delete d.datasource;
                                            e.next = 19;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(11), i = !0, s = e.t0;
                                        case 19:
                                            e.prev = 19, e.prev = 20, a || null == c.return || c.return();
                                        case 22:
                                            if (e.prev = 22, !i) { e.next = 25; break }
                                            throw s;
                                        case 25:
                                            return e.finish(22);
                                        case 26:
                                            return e.finish(19);
                                        case 27:
                                            e.next = 30;
                                            break;
                                        case 29:
                                            o.meta.id !== t.meta.id && (r.targets = [{ refId: "A" }]);
                                        case 30:
                                            return e.next = 32, Object(J.getDataSourceSrv)().get(t.value);
                                        case 32:
                                            p = e.sent, r.datasource = t.value, n.setState({ dataSourceItem: t, dataSource: p, dataSourceError: void 0 }, (function() { return r.refresh() }));
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [11, 15, 19, 27],
                                    [20, , 22, 26]
                                ])
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(), n.openQueryInspector = function() {
                            var e = n.props.panel;
                            Object(J.getLocationSrv)().update({ query: { inspect: e.id, inspectTab: "query" }, partial: !0 })
                        }, n.renderHelp = function() {}, n.onUpdateQueries = function(e) { n.props.panel.targets = e, n.forceUpdate() }, n.onAddQueryClick = function() { n.state.dataSourceItem.meta.mixed ? n.setState({ isAddingMixed: !0 }) : (n.onUpdateQueries(Object(te.a)(n.props.panel.targets)), n.onScrollBottom()) }, n.onAddExpressionClick = function() { n.onUpdateQueries(Object(te.a)(n.props.panel.targets, fe.b.newQuery())), n.onScrollBottom() }, n.onScrollBottom = function() { n.setState({ scrollTop: 1e3 }) }, n.onOpenHelp = function() { n.setState({ isHelpOpen: !0 }) }, n.onCloseHelp = function() { n.setState({ isHelpOpen: !1 }) }, n.renderMixedPicker = function() { var e = n.datasources.filter((function(e) { return "mixed" !== e.meta.id })); return o.a.createElement(R.a, { datasources: e, onChange: n.onAddMixedQuery, current: null, autoFocus: !0, onBlur: n.onMixedPickerBlur, openMenuOnFocus: !0 }) }, n.onAddMixedQuery = function(e) { n.props.panel.targets = Object(te.a)(n.props.panel.targets, { datasource: e.name }), n.setState({ isAddingMixed: !1, scrollTop: n.state.scrollTop + 1e4 }), n.forceUpdate() }, n.onMixedPickerBlur = function() { n.setState({ isAddingMixed: !1 }) }, n.onQueryChange = function(e, t) { n.props.panel.changeQuery(e, t), n.forceUpdate() }, n.setScrollTop = function(e) {
                            var t = e.target;
                            n.setState({ scrollTop: t.scrollTop })
                        }, n
                    }
                    var n, r, i, s;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pe(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: (s = ke(regeneratorRuntime.mark((function e() {
                            var t, n, r, o, a, i = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props.panel, n = t.getQueryRunner(), this.querySubscription = n.getData({ withTransforms: !1 }).subscribe({ next: function(e) { return i.onPanelDataUpdate(e) } }), e.prev = 3, e.next = 6, Object(J.getDataSourceSrv)().get(t.datasource);
                                    case 6:
                                        r = e.sent, this.setState({ dataSource: r }), e.next = 17;
                                        break;
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(3), e.next = 14, Object(J.getDataSourceSrv)().get();
                                    case 14:
                                        o = e.sent, a = this.findCurrentDataSource(o.name), this.setState({ dataSource: o, dataSourceError: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message, dataSourceItem: a });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 10]
                            ])
                        }))), function() { return s.apply(this, arguments) })
                    }, { key: "componentWillUnmount", value: function() { this.querySubscription && (this.querySubscription.unsubscribe(), this.querySubscription = null) } }, { key: "onPanelDataUpdate", value: function(e) { this.setState({ data: e }) } }, { key: "findCurrentDataSource", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.panel.datasource; return this.datasources.find((function(t) { return t.value === e })) || this.datasources[0] } }, {
                        key: "renderTopSection",
                        value: function(e) {
                            var t = this.props.panel,
                                n = this.state,
                                r = n.dataSourceItem,
                                i = n.data,
                                l = n.dataSource,
                                s = n.dataSourceError;
                            return l ? o.a.createElement("div", null, o.a.createElement("div", { className: e.dataSourceRow }, o.a.createElement("div", { className: e.dataSourceRowItem }, o.a.createElement(a.Field, { invalid: !!s, error: s }, o.a.createElement(R.a, { datasources: this.datasources, onChange: this.onChangeDataSource, current: r }))), o.a.createElement("div", { className: e.dataSourceRowItem }, o.a.createElement(a.Button, { variant: "secondary", icon: "question-circle", title: "Open data source help", onClick: this.onOpenHelp })), o.a.createElement("div", { className: e.dataSourceRowItemOptions }, o.a.createElement(Q, { panel: t, dataSource: l, data: i })), o.a.createElement("div", { className: e.dataSourceRowItem }, o.a.createElement(a.Button, { variant: "secondary", onClick: this.openQueryInspector, "aria-label": he.selectors.components.QueryTab.queryInspectorButton }, "Query inspector")))) : null
                        }
                    }, {
                        key: "renderQueries",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.panel,
                                r = t.dashboard,
                                a = this.state,
                                i = a.dataSourceItem,
                                l = a.data;
                            return Object(pe.b)(i.name) ? o.a.createElement(pe.a, { panel: n, panelData: l, onChange: function(t) { return e.onUpdateQueries([t]) } }) : o.a.createElement("div", { "aria-label": he.selectors.components.QueryTab.content }, o.a.createElement(se, { queries: n.targets, datasource: i, onChangeQueries: this.onUpdateQueries, onScrollBottom: this.onScrollBottom, panel: n, dashboard: r, data: l }))
                        }
                    }, {
                        key: "renderAddQueryRow",
                        value: function() {
                            var e = this.state,
                                t = e.dataSourceItem,
                                n = e.isAddingMixed,
                                r = !(n || Object(pe.b)(t.name));
                            return o.a.createElement(a.HorizontalGroup, { spacing: "md", align: "flex-start" }, r && o.a.createElement(a.Button, { icon: "plus", onClick: this.onAddQueryClick, variant: "secondary", "aria-label": he.selectors.components.QueryTab.addQuery }, "Query"), n && this.renderMixedPicker(), l.b.featureToggles.expressions && o.a.createElement(a.Button, { icon: "plus", onClick: this.onAddExpressionClick, variant: "secondary" }, "Expression"))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.scrollTop,
                                n = e.isHelpOpen,
                                r = ze();
                            return o.a.createElement(a.CustomScrollbar, { autoHeightMin: "100%", autoHide: !0, updateAfterMountMs: 300, scrollTop: t, setScrollTop: this.setScrollTop }, o.a.createElement("div", { className: r.innerWrapper }, this.renderTopSection(r), o.a.createElement("div", { className: r.queriesWrapper }, this.renderQueries()), this.renderAddQueryRow(), n && o.a.createElement(a.Modal, { title: "Data source help", isOpen: !0, onDismiss: this.onCloseHelp }, o.a.createElement(de.a, { plugin: this.state.dataSourceItem.meta, type: "query_help" }))))
                        }
                    }]) && je(n.prototype, r), i && je(n, i), t
                }(r.PureComponent),
                ze = Object(a.stylesFactory)((function() { var e = l.b.theme; return { innerWrapper: Object(i.css)(Oe(), e.spacing.md), dataSourceRow: Object(i.css)(ve(), e.spacing.md), dataSourceRowItem: Object(i.css)(ye(), e.spacing.inlineFormMargin), dataSourceRowItemOptions: Object(i.css)(ge(), e.spacing.inlineFormMargin), queriesWrapper: Object(i.css)(be()) } })),
                Te = n("2nhE"),
                De = n("QQVG"),
                Be = n("3ulR");

            function We(e) { return (We = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function Re() { var e = function(e, t) { t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }(["\n                  direction: ltr;\n                "]); return Re = function() { return e }, e }

            function Ie(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) { return void n(e) }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function _e(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) { Ie(a, r, o, i, l, "next", e) }

                        function l(e) { Ie(a, r, o, i, l, "throw", e) }
                        i(void 0)
                    }))
                }
            }

            function Ne(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Ae(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Fe(e, t) { return !t || "object" !== We(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function Le(e) { return (Le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function He(e, t) { return (He = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var Ge = function(e) {
                    function t() {
                        var e, n;
                        Ne(this, t);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (n = Fe(this, (e = Le(t)).call.apply(e, [this].concat(o)))).state = { stateHistoryItems: [] }, n.clearHistory = _e(regeneratorRuntime.mark((function e() {
                            var t, r, o, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.props, r = t.dashboard, o = t.panelId, a = t.onRefresh, e.next = 3, Object(J.getBackendSrv)().post("/api/annotations/mass-delete", { dashboardId: r.id, panelId: o });
                                    case 3:
                                        n.setState({ stateHistoryItems: [] }), a();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n
                    }
                    var n, r, l;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && He(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.dashboard,
                                r = t.panelId;
                            Object(J.getBackendSrv)().get("/api/annotations?dashboardId=".concat(n.id, "&panelId=").concat(r, "&limit=50&type=alert"), {}, "state-history-".concat(n.id, "-").concat(r)).then((function(t) {
                                var r = t.map((function(e) { return { stateModel: Be.a.getStateDisplayModel(e.newState), time: n.formatDate(e.time, "MMM D, YYYY HH:mm:ss"), info: Be.a.getAlertAnnotationInfo(e) } }));
                                e.setState({ stateHistoryItems: r })
                            }))
                        }
                    }, { key: "render", value: function() { var e = this.state.stateHistoryItems; return o.a.createElement("div", null, e.length > 0 && o.a.createElement("div", { className: "p-b-1" }, o.a.createElement("span", { className: "muted" }, "Last 50 state changes"), o.a.createElement(a.ConfirmButton, { onConfirm: this.clearHistory, confirmVariant: "destructive", confirmText: "Clear" }, o.a.createElement(a.Button, { className: Object(i.css)(Re()), variant: "destructive", icon: "trash-alt" }, "Clear history"))), o.a.createElement("ol", { className: "alert-rule-list" }, e.length > 0 ? e.map((function(e, t) { return o.a.createElement("li", { className: "alert-rule-item", key: "".concat(e.time, "-").concat(t) }, o.a.createElement("div", { className: "alert-rule-item__icon ".concat(e.stateModel.stateClass) }, o.a.createElement(a.Icon, { name: e.stateModel.iconClass, size: "xl" })), o.a.createElement("div", { className: "alert-rule-item__body" }, o.a.createElement("div", { className: "alert-rule-item__header" }, o.a.createElement("p", { className: "alert-rule-item__name" }, e.alertName), o.a.createElement("div", { className: "alert-rule-item__text" }, o.a.createElement("span", { className: "".concat(e.stateModel.stateClass) }, e.stateModel.text))), e.info), o.a.createElement("div", { className: "alert-rule-item__time" }, e.time)) })) : o.a.createElement("i", null, "No state changes recorded"))) } }]) && Ae(n.prototype, r), l && Ae(n, l), t
                }(r.PureComponent),
                Ue = (n("eK0o"), n("Xmxp")),
                Ve = n("ttS0");

            function qe(e) { return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function Xe(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) { return void n(e) }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function Ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(n), !0).forEach((function(t) { $e(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function $e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function Je(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Ke(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Ze(e, t) { return !t || "object" !== qe(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function et(e) { return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function tt(e, t) { return (tt = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var nt = function(e) {
                    function t() {
                        var e, n;
                        Je(this, t);
                        for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                        return (n = Ze(this, (e = et(t)).call.apply(e, [this].concat(i)))).state = { isLoading: !1, allNodesExpanded: null, testRuleResponse: {} }, n.setFormattedJson = function(e) { n.formattedJson = e }, n.getTextForClipboard = function() { return JSON.stringify(n.formattedJson, null, 2) }, n.onClipboardSuccess = function() { Ue.b.emit(W.AppEvents.alertSuccess, ["Content copied to clipboard"]) }, n.onToggleExpand = function() { n.setState((function(e) { return Qe({}, e, { allNodesExpanded: !n.state.allNodesExpanded }) })) }, n.getNrOfOpenNodes = function() { return null === n.state.allNodesExpanded ? 3 : n.state.allNodesExpanded ? 20 : 1 }, n.renderExpandCollapse = function() {
                            var e = n.state.allNodesExpanded,
                                t = o.a.createElement(o.a.Fragment, null, o.a.createElement(a.Icon, { name: "minus-circle" }), " Collapse All"),
                                r = o.a.createElement(o.a.Fragment, null, o.a.createElement(a.Icon, { name: "plus-circle" }), " Expand All");
                            return e ? t : r
                        }, n
                    }
                    var n, r, i, l, s;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && tt(e, t)
                    }(t, e), n = t, (r = [{ key: "componentDidMount", value: function() { this.testRule() } }, {
                        key: "testRule",
                        value: (l = regeneratorRuntime.mark((function e() {
                            var t, n, r, o, a, i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props, n = t.dashboard, r = t.panel, (o = n.getSaveModelClone()).panels = o.panels.map((function(e) { return e.id === r.editSourceId ? r.getSaveModel() : e })), a = { dashboard: o, panelId: r.id }, this.setState({ isLoading: !0 }), e.next = 7, Object(J.getBackendSrv)().post("/api/alerts/test", a);
                                    case 7:
                                        i = e.sent, this.setState({ isLoading: !1, testRuleResponse: i });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var o = l.apply(e, t);

                                function a(e) { Xe(o, n, r, a, i, "next", e) }

                                function i(e) { Xe(o, n, r, a, i, "throw", e) }
                                a(void 0)
                            }))
                        }, function() { return s.apply(this, arguments) })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.testRuleResponse;
                            if (!0 === e.isLoading) return o.a.createElement(a.LoadingPlaceholder, { text: "Evaluating rule" });
                            var n = this.getNrOfOpenNodes();
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "pull-right" }, o.a.createElement("button", { className: "btn btn-transparent btn-p-x-0 m-r-1", onClick: this.onToggleExpand }, this.renderExpandCollapse()), o.a.createElement(Ve.a, { className: "btn btn-transparent btn-p-x-0", text: this.getTextForClipboard, onSuccess: this.onClipboardSuccess }, o.a.createElement(a.Icon, { name: "copy" }), " Copy to Clipboard")), o.a.createElement(a.JSONFormatter, { json: t, open: n, onDidRender: this.setFormattedJson }))
                        }
                    }]) && Ke(n.prototype, r), i && Ke(n, i), t
                }(r.PureComponent),
                rt = n("GQ3c"),
                ot = n("3SGO");

            function at(e) { return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function it(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) { return void n(e) }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function lt() { var e = function(e, t) { t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }(["\n          width: 508px;\n          margin: 128px auto;\n        "]); return lt = function() { return e }, e }

            function st(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function ct(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? st(Object(n), !0).forEach((function(t) { ut(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function ut(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function dt(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function pt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ft(e, t) { return !t || "object" !== at(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function ht(e) { return (ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function mt(e, t) { return (mt = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var bt = function(e) {
                    function t() {
                        var e, n;
                        dt(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (n = ft(this, (e = ht(t)).call.apply(e, [this].concat(l)))).state = { validatonMessage: "", showStateHistory: !1, showDeleteConfirmation: !1, showTestRule: !1 }, n.onAngularPanelUpdated = function() { n.forceUpdate() }, n.onAddAlert = function() { n.panelCtrl._enableAlert(), n.component.digest(), n.forceUpdate() }, n.switchToQueryTab = function() {
                            (0, n.props.updateLocation)({ query: { tab: B.b.Query }, partial: !0 })
                        }, n.onToggleModal = function(e) {
                            var t = n.state[e];
                            n.setState(ct({}, n.state, ut({}, e, !t)))
                        }, n.renderValidationMessage = function() { var e = n.state.validatonMessage; return o.a.createElement("div", { className: Object(i.css)(lt()) }, o.a.createElement("h2", null, e), o.a.createElement("br", null), o.a.createElement("div", { className: "gf-form-group" }, o.a.createElement(a.Button, { size: "md", variant: "secondary", icon: "arrow-left", onClick: n.switchToQueryTab }, "Go back to Queries"))) }, n.renderTestRule = function() {
                            if (!n.state.showTestRule) return null;
                            var e = n.props,
                                t = e.panel,
                                r = e.dashboard,
                                i = function() { return n.onToggleModal("showTestRule") };
                            return o.a.createElement(a.Modal, { isOpen: !0, icon: "bug", title: "Testing rule", onDismiss: i, onClickBackdrop: i }, o.a.createElement(nt, { panel: t, dashboard: r }))
                        }, n.renderDeleteConfirmation = function() {
                            if (!n.state.showDeleteConfirmation) return null;
                            var e = n.props.panel,
                                t = function() { return n.onToggleModal("showDeleteConfirmation") };
                            return o.a.createElement(a.ConfirmModal, { isOpen: !0, icon: "trash-alt", title: "Delete", body: o.a.createElement("div", null, "Are you sure you want to delete this alert rule?", o.a.createElement("br", null), o.a.createElement("small", null, "You need to save dashboard for the delete to take effect.")), confirmText: "Delete Alert", onDismiss: t, onConfirm: function() { delete e.alert, e.thresholds = [], n.panelCtrl.alertState = null, n.panelCtrl.render(), n.component.digest(), t() } })
                        }, n.renderStateHistory = function() {
                            var e;
                            if (!n.state.showStateHistory) return null;
                            var t = n.props,
                                r = t.panel,
                                i = t.dashboard,
                                l = function() { return n.onToggleModal("showStateHistory") };
                            return o.a.createElement(a.Modal, { isOpen: !0, icon: "history", title: "State history", onDismiss: l, onClickBackdrop: l }, o.a.createElement(Ge, { dashboard: i, panelId: null !== (e = r.editSourceId) && void 0 !== e ? e : r.id, onRefresh: function() { return n.panelCtrl.refresh() } }))
                        }, n
                    }
                    var n, r, l, s, c;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mt(e, t)
                    }(t, e), n = t, (r = [{ key: "componentDidMount", value: function() { this.loadAlertTab() } }, { key: "componentDidUpdate", value: function(e) { this.loadAlertTab() } }, { key: "componentWillUnmount", value: function() { this.component && this.component.destroy() } }, {
                        key: "loadAlertTab",
                        value: (s = regeneratorRuntime.mark((function e() {
                            var t, n, r, o, a, i, l, s = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.props, n = t.panel, r = t.angularPanelComponent, this.element && r && !this.component) { e.next = 3; break }
                                        return e.abrupt("return");
                                    case 3:
                                        if ((o = r.getScope()).$$childHead) { e.next = 7; break }
                                        return setTimeout((function() { s.forceUpdate() })), e.abrupt("return");
                                    case 7:
                                        return this.panelCtrl = o.$$childHead.ctrl, a = Object(J.getAngularLoader)(), i = { ctrl: this.panelCtrl }, this.component = a.load(this.element, i, "<alert-tab />"), e.next = 14, Object(Te.a)(n.transformations, n.targets, Object(J.getDataSourceSrv)(), n.datasource);
                                    case 14:
                                        (l = e.sent) && this.setState({ validatonMessage: l });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), c = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var o = s.apply(e, t);

                                function a(e) { it(o, n, r, a, i, "next", e) }

                                function i(e) { it(o, n, r, a, i, "throw", e) }
                                a(void 0)
                            }))
                        }, function() { return c.apply(this, arguments) })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.panel,
                                n = t.alert,
                                r = t.transformations,
                                i = this.state.validatonMessage,
                                l = r && r.length > 0;
                            if (!n && i) return this.renderValidationMessage();
                            var s = { title: "Panel has no alert rule defined", buttonIcon: "bell", onClick: this.onAddAlert, buttonTitle: "Create Alert" };
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement(a.CustomScrollbar, { autoHeightMin: "100%" }, o.a.createElement(a.Container, { padding: "md" }, o.a.createElement("div", { "aria-label": he.selectors.components.AlertTab.content }, n && l && o.a.createElement(a.Alert, { severity: rt.AppNotificationSeverity.Error, title: "Transformations are not supported in alert queries" }), o.a.createElement("div", { ref: function(t) { return e.element = t } }), n && o.a.createElement(a.HorizontalGroup, null, o.a.createElement(a.Button, { onClick: function() { return e.onToggleModal("showStateHistory") }, variant: "secondary" }, "State history"), o.a.createElement(a.Button, { onClick: function() { return e.onToggleModal("showTestRule") }, variant: "secondary" }, "Test rule"), o.a.createElement(a.Button, { onClick: function() { return e.onToggleModal("showDeleteConfirmation") }, variant: "destructive" }, "Delete")), !n && !i && o.a.createElement(De.a, s)))), this.renderTestRule(), this.renderDeleteConfirmation(), this.renderStateHistory())
                        }
                    }]) && pt(n.prototype, r), l && pt(n, l), t
                }(r.PureComponent),
                gt = { updateLocation: ot.c },
                yt = Object(T.connect)((function(e, t) { return { angularPanelComponent: e.dashboard.panels[t.panel.id].angularComponent } }), gt)(bt);

            function vt() { var e = Ct(["\n      flex-grow: 1;\n      height: 100%;\n      overflow: hidden;\n      padding: ", ";\n    "]); return vt = function() { return e }, e }

            function Ot() { var e = Ct(["\n      margin-top: ", ";\n      padding: 0 ", " ", " ", ";\n      border: 1px solid ", ";\n      background: ", ";\n      border-radius: ", ";\n      width: 100%;\n      min-height: 300px;\n      display: flex;\n      flex-direction: column;\n      align-self: stretch;\n    "]); return Ot = function() { return e }, e }

            function St() { var e = Ct(["\n      padding: ", " ", ";\n      font-family: ", ";\n      font-size: ", ";\n      color: ", ";\n      border-bottom: 1px solid ", ";\n      flex-grow: 0;\n      flex-shrink: 1;\n    "]); return St = function() { return e }, e }

            function wt() { var e = Ct(["\n      width: 48px;\n      min-height: 300px;\n      display: flex;\n      align-items: center;\n      align-self: stretch;\n      justify-content: center;\n      margin: 0 ", ";\n      color: ", ";\n    "]); return wt = function() { return e }, e }

            function kt() { var e = Ct(["\n      display: flex;\n      flex-direction: row;\n    "]); return kt = function() { return e }, e }

            function Mt() { var e = Ct([""]); return Mt = function() { return e }, e }

            function jt() { var e = Ct(["\n      background: transparent;\n      border: none;\n      box-shadow: none;\n      cursor: pointer;\n      color: ", ";\n      margin-left: ", ";\n      &:hover {\n        color: ", ";\n      }\n    "]); return jt = function() { return e }, e }

            function Et() { var e = Ct(["\n      display: flex;\n    "]); return Et = function() { return e }, e }

            function xt() { var e = Ct(["\n      font-weight: ", ";\n      color: ", ";\n    "]); return xt = function() { return e }, e }

            function Pt() { var e = Ct(["\n      display: flex;\n      padding: 4px 8px 4px 8px;\n      position: relative;\n      height: 35px;\n      border-radius: 4px 4px 0 0;\n      flex-wrap: nowrap;\n      justify-content: space-between;\n      align-items: center;\n    "]); return Pt = function() { return e }, e }

            function Ct(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
            var zt = function(e) {
                    var t = e.editor,
                        n = e.input,
                        i = e.output,
                        l = e.debugMode,
                        s = Object(r.useContext)(a.ThemeContext),
                        c = Tt(s);
                    return o.a.createElement("div", { className: c.editor }, t, l && o.a.createElement("div", { className: c.debugWrapper }, o.a.createElement("div", { className: c.debug }, o.a.createElement("div", { className: c.debugTitle }, "Transformation input data"), o.a.createElement("div", { className: c.debugJson }, o.a.createElement(a.JSONFormatter, { json: n }))), o.a.createElement("div", { className: c.debugSeparator }, o.a.createElement(a.Icon, { name: "arrow-right" })), o.a.createElement("div", { className: c.debug }, o.a.createElement("div", { className: c.debugTitle }, "Transformation output data"), o.a.createElement("div", { className: c.debugJson }, o.a.createElement(a.JSONFormatter, { json: i })))))
                },
                Tt = function(e) { var t = e.isLight ? e.palette.gray85 : e.palette.gray15; return { title: Object(i.css)(Pt()), name: Object(i.css)(xt(), e.typography.weight.semibold, e.colors.textBlue), iconRow: Object(i.css)(Et()), icon: Object(i.css)(jt(), e.colors.textWeak, e.spacing.sm, e.colors.text), editor: Object(i.css)(Mt()), debugWrapper: Object(i.css)(kt()), debugSeparator: Object(i.css)(wt(), e.spacing.xs, e.colors.textBlue), debugTitle: Object(i.css)(St(), e.spacing.sm, e.spacing.xxs, e.typography.fontFamily.monospace, e.typography.size.sm, e.colors.text, t), debug: Object(i.css)(Ot(), e.spacing.sm, e.spacing.sm, e.spacing.sm, e.spacing.sm, t, e.isLight ? e.palette.white : e.palette.gray05, e.border.radius.sm), debugJson: Object(i.css)(vt(), e.spacing.xs) } },
                Dt = n("s51j");

            function Bt() { return (Bt = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function Wt(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }

            function Rt(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                return o
            }
            var It = function(e) {
                    e.children;
                    var t = e.onRemove,
                        n = Rt(e, ["children", "onRemove"]),
                        i = Wt(Object(r.useState)(!1), 2),
                        l = i[0],
                        s = i[1];
                    return o.a.createElement(I.a, { title: n.name, actions: function(e) { var n = e.isOpen; return o.a.createElement(a.HorizontalGroup, { align: "center" }, o.a.createElement(Dt.a, { disabled: !n, icon: "bug", onClick: function() { s(!l) } }), o.a.createElement(Dt.a, { icon: "trash-alt", onClick: t })) } }, o.a.createElement(zt, Bt({}, n, { debugMode: l })))
                },
                _t = n("jcCG");

            function Nt(e) { return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function At() { var e = Vt(["\n      background: ", ";\n      width: 100%;\n      border: none;\n      padding: ", ";\n\n      // hack because these cards use classes from a very different card for some reason\n      .add-data-source-item-text {\n        font-size: ", ";\n      }\n\n      &:hover {\n        background: ", ";\n        box-shadow: none;\n        border: none;\n      }\n    "]); return At = function() { return e }, e }

            function Ft() { return (Ft = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function Lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function Ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(n), !0).forEach((function(t) { Gt(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function Gt(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function Ut() { var e = Vt(["\n          max-width: 66%;\n        "]); return Ut = function() { return e }, e }

            function Vt(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function qt(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

            function Xt(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Yt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Qt(e, t) { return !t || "object" !== Nt(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function $t(e) { return ($t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function Jt(e, t) { return (Jt = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var Kt = function(e) {
                    function t() {
                        var e, n;
                        Xt(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (n = Qt(this, (e = $t(t)).call.apply(e, [this].concat(l)))).onTransformationAdd = function(e) {
                            var t = n.props,
                                r = t.transformations;
                            (0, t.onChange)([].concat(qt(r), [{ id: e.value, options: {} }]))
                        }, n.onTransformationChange = function(e, t) {
                            var r = n.props,
                                o = r.transformations,
                                a = r.onChange,
                                i = Array.from(o);
                            i[e] = t, a(i)
                        }, n.onTransformationRemove = function(e) {
                            var t = n.props,
                                r = t.transformations,
                                o = t.onChange,
                                a = Array.from(r);
                            a.splice(e, 1), o(a)
                        }, n.renderTransformationSelector = function() { var e = W.standardTransformersRegistry.list().map((function(e) { return { value: e.transformation.id, label: e.name, description: e.description } })); return o.a.createElement("div", { className: Object(i.css)(Ut()) }, o.a.createElement(a.ValuePicker, { size: "md", variant: "secondary", label: "Add transformation", options: e, onChange: n.onTransformationAdd, isFullWidth: !1, menuPlacement: "bottom" })) }, n.renderTransformationEditors = function() {
                            var e = n.props,
                                t = e.transformations,
                                r = e.dataFrames;
                            return o.a.createElement(o.a.Fragment, null, t.map((function(e, a) {
                                var i, l = W.standardTransformersRegistry.getIfExists(e.id);
                                if (!l) return null;
                                var s = Object(W.transformDataFrame)(t.slice(0, a), r),
                                    c = Object(W.transformDataFrame)(t.slice(a), s);
                                return l && (i = o.a.createElement(l.editor, { options: Ht({}, l.transformation.defaultOptions, {}, e.options), input: s, onChange: function(t) { n.onTransformationChange(a, { id: e.id, options: t }) } })), o.a.createElement(It, { key: "".concat(e.id, "-").concat(a), input: s || [], output: c || [], onRemove: function() { return n.onTransformationRemove(a) }, editor: i, name: l ? l.name : "", description: l ? l.description : "" })
                            })))
                        }, n
                    }
                    var n, r, l;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Jt(e, t)
                    }(t, e), n = t, (r = [{ key: "renderNoAddedTransformsState", value: function() { var e = this; return o.a.createElement(a.VerticalGroup, { spacing: "lg" }, o.a.createElement(a.Container, { grow: 1 }, o.a.createElement(a.FeatureInfoBox, { title: "Transformations", featureState: W.FeatureState.beta }, o.a.createElement("p", null, "Transformations allow you to join, calculate, re-order, hide and rename your query results before being visualized. ", o.a.createElement("br", null), "Many transforms are not suitable if your using the Graph visualization as it currently only supports time series. ", o.a.createElement("br", null), "It can help to switch to Table visualization to understand what a transformation is doing. ", o.a.createElement("br", null)), o.a.createElement("p", null, "Select one of the transformations below to start."))), o.a.createElement(a.VerticalGroup, null, W.standardTransformersRegistry.list().map((function(t) { return o.a.createElement(Zt, { key: t.name, title: t.name, description: t.description, actions: o.a.createElement(a.Button, null, "Select"), onClick: function() { e.onTransformationAdd({ value: t.id }) } }) })))) } }, { key: "render", value: function() { var e = this.props.transformations.length > 0; return o.a.createElement(a.CustomScrollbar, { autoHeightMin: "100%" }, o.a.createElement(a.Container, { padding: "md" }, o.a.createElement("div", { "aria-label": he.selectors.components.TransformTab.content }, !e && this.renderNoAddedTransformsState(), e && this.renderTransformationEditors(), e && this.renderTransformationSelector()))) } }]) && Yt(n.prototype, r), l && Yt(n, l), t
                }(o.a.PureComponent),
                Zt = function(e) {
                    var t = Object(a.useTheme)(),
                        n = en(t);
                    return o.a.createElement(_t.a, Ft({}, e, { className: n.card }))
                },
                en = Object(a.stylesFactory)((function(e) { return { card: Object(i.css)(At(), e.colors.bg2, e.spacing.sm, e.typography.size.md, e.colors.bg3) } }));

            function tn() { var e = on(["\n      padding: 0;\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      min-height: 0;\n      background: ", ";\n      border-right: 1px solid ", ";\n\n      .toolbar {\n        background: transparent;\n      }\n    "]); return tn = function() { return e }, e }

            function nn() { var e = on(["\n      padding-left: ", ";\n    "]); return nn = function() { return e }, e }

            function rn() { var e = on(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    "]); return rn = function() { return e }, e }

            function on(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
            var an = function(e) {
                    var t = e.panel,
                        n = e.dashboard,
                        i = e.tabs,
                        l = e.data,
                        s = e.onChangeTab,
                        c = ln(),
                        u = i.find((function(e) { return e.active })),
                        d = Object(r.useCallback)((function(e) {
                            var n;
                            switch (e.id) {
                                case B.b.Query:
                                    return t.targets.length;
                                case B.b.Alert:
                                    return t.alert ? 1 : 0;
                                case B.b.Transform:
                                    return (null !== (n = t.getTransformations()) && void 0 !== n ? n : []).length
                            }
                            return null
                        }), [t]);
                    if (0 === i.length) return null;
                    return o.a.createElement("div", { className: c.wrapper }, o.a.createElement(a.TabsBar, { className: c.tabBar }, i.map((function(e) { return o.a.createElement(a.Tab, { key: e.id, label: e.text, active: e.active, onChangeTab: function() { return s(e) }, icon: e.icon, counter: d(e) }) }))), o.a.createElement(a.TabContent, { className: c.tabContent }, u.id === B.b.Query && o.a.createElement(Ce, { panel: t, dashboard: n }), u.id === B.b.Alert && o.a.createElement(yt, { panel: t, dashboard: n }), u.id === B.b.Transform && l.state !== W.LoadingState.NotStarted && o.a.createElement(Kt, { transformations: t.transformations || [], onChange: function(e) { t.setTransformations(e) }, dataFrames: l.series })))
                },
                ln = Object(a.stylesFactory)((function() { var e = l.a.theme; return { wrapper: Object(i.css)(rn()), tabBar: Object(i.css)(nn(), e.spacing.md), tabContent: Object(i.css)(tn(), e.colors.panelBg, e.colors.pageHeaderBorder) } })),
                sn = n("maUf"),
                cn = n("sCrc"),
                un = n("tEy8"),
                dn = n("KyLG"),
                pn = n("SMGL");

            function fn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function hn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var mn = n("Wwog"),
                bn = Object(mn.a)((function(e, t) { var n, r = []; if (!t) return r; var o = B.b.Visualize; return t.meta.skipDataQuery ? [] : (t.meta.skipDataQuery || (o = B.b.Query, r.push({ id: B.b.Query, text: "Query", icon: "database", active: !1 }), r.push({ id: B.b.Transform, text: "Transform", icon: "process", active: !1 })), "graph" === t.meta.id && r.push({ id: B.b.Alert, text: "Alert", icon: "bell", active: !1 }), (null !== (n = r.find((function(t) { return t.id === (e.query.tab || o) }))) && void 0 !== n ? n : r[0]).active = !0, r) }));
            var gn = n("dRu9"),
                yn = n("BkRI"),
                vn = n.n(yn),
                On = n("GkHB"),
                Sn = n("EnUn");

            function wn() { var e = Cn(["\n          position: relative;\n          padding-right: 0;\n          &:before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 8px;\n            width: 1px;\n            height: 100%;\n            background: ", ";\n          }\n        "]); return wn = function() { return e }, e }

            function kn() { var e = Cn(["\n        padding: 0 ", " ", " ", ";\n      "]); return kn = function() { return e }, e }

            function Mn() { var e = Cn(["\n          padding-left: 0;\n          padding-right: 0;\n          padding-top: 0;\n        "]); return Mn = function() { return e }, e }

            function jn() { var e = Cn(["\n        display: flex;\n        cursor: pointer;\n        align-items: baseline;\n        padding: ", " ", " ", " ", ";\n        color: ", ";\n        font-weight: ", ";\n\n        &:hover {\n          color: ", ";\n\n          .editor-options-group-toggle {\n            color: ", ";\n          }\n        }\n      "]); return jn = function() { return e }, e }

            function En() { var e = Cn(["\n      color: ", ";\n      font-size: ", ";\n      margin-right: ", ";\n    "]); return En = function() { return e }, e }

            function xn() { var e = Cn(["\n          margin-bottom: ", "px;\n        "]); return xn = function() { return e }, e }

            function Pn() { var e = Cn(["\n          border-bottom: 1px solid ", ";\n        "]); return Pn = function() { return e }, e }

            function Cn(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function zn() { return (zn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

            function Tn(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            var Dn = function(e) {
                    var t = e.id,
                        n = e.title,
                        r = e.children,
                        a = e.defaultToClosed,
                        i = e.renderTitle,
                        l = e.className,
                        s = e.nested,
                        c = void 0 !== s && s,
                        u = e.persistMe,
                        d = void 0 === u || u,
                        p = e.onToggle;
                    return d ? o.a.createElement(Bn, { id: t, defaultToClosed: a, className: l, nested: c, renderTitle: i, persistMe: d, title: n, onToggle: p }, r) : o.a.createElement(Wn, { id: t, defaultToClosed: a, className: l, nested: c, renderTitle: i, title: n, onToggle: p }, r)
                },
                Bn = Object(r.memo)((function(e) {
                    var t = Tn(Object(Sn.a)(In(e.id), { defaultToClosed: e.defaultToClosed }), 2),
                        n = t[0],
                        a = t[1],
                        i = Object(r.useCallback)((function(t) { a({ defaultToClosed: !t }), e.onToggle && e.onToggle(t) }), [a, e.onToggle]);
                    return o.a.createElement(Wn, zn({}, e, { defaultToClosed: n.defaultToClosed, onToggle: i }))
                })),
                Wn = function(e) {
                    var t = e.id,
                        n = e.title,
                        l = e.children,
                        s = e.defaultToClosed,
                        c = e.renderTitle,
                        u = e.className,
                        d = e.nested,
                        p = void 0 !== d && d,
                        f = e.onToggle,
                        h = Tn(Object(r.useState)(!s), 2),
                        m = h[0],
                        b = h[1],
                        g = Object(a.useTheme)(),
                        y = Rn(g, m, p);
                    return Object(r.useEffect)((function() { f && f(m) }), [m]), o.a.createElement("div", { className: Object(i.cx)(y.box, u, "options-group") }, o.a.createElement("div", { className: y.header, onClick: function() { return b(!m) }, "aria-label": he.selectors.components.OptionsGroup.toggle(t) }, o.a.createElement("div", { className: Object(i.cx)(y.toggle, "editor-options-group-toggle") }, o.a.createElement(a.Icon, { name: m ? "angle-down" : "angle-right" })), o.a.createElement("div", { style: { width: "100%" } }, c ? c(m) : n)), m && o.a.createElement("div", { className: y.body }, l))
                },
                Rn = Object(a.stylesFactory)((function(e, t, n) { return { box: Object(i.cx)(!n && Object(i.css)(Pn(), e.colors.pageHeaderBorder), n && t && Object(i.css)(xn(), 2 * e.spacing.formSpacingBase)), toggle: Object(i.css)(En(), e.colors.textWeak, e.typography.size.lg, e.spacing.sm), header: Object(i.cx)(Object(i.css)(jn(), e.spacing.sm, e.spacing.md, e.spacing.sm, e.spacing.sm, t ? e.colors.text : e.colors.formLabel, e.typography.weight.semibold, e.colors.text, e.colors.text), n && Object(i.css)(Mn())), body: Object(i.cx)(Object(i.css)(kn(), e.spacing.md, e.spacing.md, e.spacing.xl), n && Object(i.css)(wn(), e.colors.pageHeaderBorder)) } })),
                In = function(e) { return "".concat(un.a, ".optionGroup[").concat(e, "]") };

            function _n() { var e = An(["\n      label: collapsibleOverrideEditor;\n      & + .dynamicConfigValueEditor--nonCollapsible {\n        margin-top: ", "px;\n      }\n    "]); return _n = function() { return e }, e }

            function Nn() { var e = An(["\n          padding-left: 0;\n          padding-right: 0;\n        "]); return Nn = function() { return e }, e }

            function An(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
            var Fn = function(e) {
                    var t, n = e.property,
                        r = e.context,
                        l = e.registry,
                        s = e.onChange,
                        c = e.onRemove,
                        u = e.isCollapsible,
                        d = Object(a.useTheme)(),
                        p = Ln(d),
                        f = null == l ? void 0 : l.getIfExists(n.id);
                    if (!f) return null;
                    var h = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return function() { var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return o.a.createElement(a.HorizontalGroup, { justify: "space-between" }, o.a.createElement(a.Label, { description: e ? f.description : void 0 }, f.name, !r && t && f.getItemsCount && o.a.createElement(a.Counter, { value: f.getItemsCount(n.value) })), o.a.createElement("div", null, o.a.createElement(a.IconButton, { name: "times", onClick: c }))) }
                    };
                    return t = u ? o.a.createElement(Dn, { id: f.name, renderTitle: h(!1, !0), className: Object(i.css)(Nn()), nested: !0, defaultToClosed: void 0 !== n.value }, o.a.createElement(f.override, { value: n.value, onChange: function(e) { s(e) }, item: f, context: r })) : o.a.createElement("div", null, o.a.createElement(a.Field, { label: h()(), description: f.description }, o.a.createElement(f.override, { value: n.value, onChange: function(e) { s(e) }, item: f, context: r }))), o.a.createElement("div", { className: Object(i.cx)(u && p.collapsibleOverrideEditor, !u && "dynamicConfigValueEditor--nonCollapsible") }, t)
                },
                Ln = Object(a.stylesFactory)((function(e) { return { collapsibleOverrideEditor: Object(i.css)(_n(), e.spacing.formSpacingBase) } }));

            function Hn() { var e = Vn(["\n      font-size: ", ";\n      color: ", ";\n      font-weight: ", ";\n    "]); return Hn = function() { return e }, e }

            function Gn() { var e = Vn(["\n      margin-top: ", "px;\n    "]); return Gn = function() { return e }, e }

            function Un() { var e = Vn(["\n      padding: ", ";\n    "]); return Un = function() { return e }, e }

            function Vn(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
            var qn = [W.FieldConfigProperty.Thresholds, W.FieldConfigProperty.Links, W.FieldConfigProperty.Mappings],
                Xn = function(e) {
                    var t = e.name,
                        n = e.data,
                        i = e.override,
                        l = e.onChange,
                        s = e.onRemove,
                        c = e.registry,
                        u = Object(a.useTheme)(),
                        d = a.fieldMatchersUI.get(i.matcher.id),
                        p = Yn(u),
                        f = o.a.createElement(a.Label, { category: ["Matcher"], description: d.description }, d.name),
                        h = Object(r.useCallback)((function(e) { i.matcher.options = e, l(i) }), [i, l]),
                        m = Object(r.useCallback)((function(e, t) { i.properties[e].value = t, l(i) }), [i, l]),
                        b = Object(r.useCallback)((function(e) { i.properties.splice(e, 1), l(i) }), [i, l]),
                        g = Object(r.useCallback)((function(e) {
                            var t = { id: e, value: c.get(e).defaultValue };
                            i.properties ? i.properties.push(t) : i.properties = [t], l(i)
                        }), [i, l]),
                        y = c.list().map((function(e) { return { label: e.name, value: e.id, description: e.description } }));
                    return o.a.createElement(Dn, { renderTitle: function(e) { return o.a.createElement("div", null, o.a.createElement(a.HorizontalGroup, { justify: "space-between" }, o.a.createElement("div", null, t), o.a.createElement(a.IconButton, { name: "trash-alt", onClick: s })), !e && o.a.createElement("div", { className: p.overrideDetails }, "Matcher ", o.a.createElement(a.Icon, { name: "angle-right" }), " ", d.name, " ", o.a.createElement("br", null), 0 === i.properties.length ? "No" : i.properties.length, " properties overriden")) }, id: t, key: t }, o.a.createElement(a.Field, { label: f, description: d.description }, o.a.createElement(d.component, { matcher: d.matcher, data: n, options: i.matcher.options, onChange: function(e) { return h(e) } })), o.a.createElement("div", null, i.properties.map((function(e, t) { if (!c.getIfExists(e.id)) return o.a.createElement("div", null, "Unknown property: ", e.id); var r = Array.isArray(e.value) || qn.includes(e.id); return o.a.createElement(Fn, { key: "".concat(e.id, "/").concat(t), isCollapsible: r, onChange: function(e) { return m(t, e) }, onRemove: function() { return b(t) }, property: e, registry: c, context: { data: n, getSuggestions: function(e) { return Object(On.a)(n, e) } } }) })), i.matcher.options && o.a.createElement("div", { className: p.propertyPickerWrapper }, o.a.createElement(a.ValuePicker, { label: "Add override property", variant: "secondary", icon: "plus", options: y, onChange: function(e) { g(e.value) }, isFullWidth: !1 }))))
                },
                Yn = Object(a.stylesFactory)((function(e) { return { matcherUi: Object(i.css)(Un(), e.spacing.sm), propertyPickerWrapper: Object(i.css)(Gn(), 2 * e.spacing.formSpacingBase), overrideDetails: Object(i.css)(Hn(), e.typography.size.sm, e.colors.textWeak, e.typography.weight.regular) } })),
                Qn = n("bt/X"),
                $n = n.n(Qn);

            function Jn() { var e = function(e, t) { t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }(["\n            margin: ", ";\n          "]); return Jn = function() { return e }, e }

            function Kn(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

            function Zn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zn(Object(n), !0).forEach((function(t) { tr(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function tr(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var nr = function(e) {
                    var t = Object(a.useTheme)(),
                        n = e.config;
                    return o.a.createElement("div", { "aria-label": he.selectors.components.OverridesConfigEditor.content }, 0 === n.overrides.length && o.a.createElement(a.FeatureInfoBox, { title: "Overrides", featureState: W.FeatureState.beta, className: Object(i.css)(Jn(), t.spacing.md) }, "Field options overrides give you a fine grained control over how your data is displayed."), function() {
                        var t = e.config,
                            n = e.data,
                            r = e.plugin.fieldConfigRegistry;
                        return 0 === t.overrides.length ? null : o.a.createElement("div", null, t.overrides.map((function(t, a) {
                            return o.a.createElement(Xn, {
                                name: "Override ".concat(a + 1),
                                key: "".concat(t.matcher.id, "/").concat(a),
                                data: n,
                                override: t,
                                onChange: function(t) {
                                    return function(t, n) {
                                        var r = e.config,
                                            o = vn()(r.overrides);
                                        o[t] = n, e.onChange(er({}, r, { overrides: o }))
                                    }(a, t)
                                },
                                onRemove: function() {
                                    return function(t) {
                                        var n = e.config,
                                            r = vn()(n.overrides);
                                        r.splice(t, 1), e.onChange(er({}, n, { overrides: r }))
                                    }(a)
                                },
                                registry: r
                            })
                        })))
                    }(), o.a.createElement(a.Container, { padding: "md" }, o.a.createElement(a.ValuePicker, {
                        icon: "plus",
                        label: "Add override",
                        variant: "secondary",
                        options: a.fieldMatchersUI.list().map((function(e) { return { label: e.name, value: e.id, description: e.description } })),
                        onChange: function(t) {
                            return function(t) {
                                var n = e.onChange,
                                    r = e.config;
                                n(er({}, r, { overrides: [].concat(Kn(r.overrides), [{ matcher: { id: t.value }, properties: [] }]) }))
                            }(t)
                        },
                        isFullWidth: !1
                    })))
                },
                rr = function(e) {
                    var t = e.data,
                        n = e.onChange,
                        i = e.config,
                        l = e.plugin,
                        s = Object(r.useCallback)((function(e, t, r) {
                            var o = er({}, i.defaults),
                                a = null == t || "";
                            r ? o.custom ? a ? (o.custom = er({}, o.custom), delete o.custom[e]) : o.custom = er({}, o.custom, tr({}, e, t)) : a || (o.custom = tr({}, e, t)) : a ? delete o[e] : o[e] = t, n(er({}, i, { defaults: o }))
                        }), [i, n]),
                        c = Object(r.useCallback)((function(e, n) {
                            var r;
                            if (e.isCustom && e.showIf && !e.showIf(i.defaults.custom)) return null;
                            var l = i.defaults,
                                c = e.isCustom ? l.custom ? l.custom[e.path] : void 0 : l[e.path],
                                u = n > 1 ? o.a.createElement(a.Label, { description: e.description, category: null === (r = e.category) || void 0 === r ? void 0 : r.slice(1) }, e.name) : void 0;
                            return o.a.createElement(a.Field, { label: u, key: "".concat(e.id, "/").concat(e.isCustom) }, o.a.createElement(e.editor, { item: e, value: c, onChange: function(t) { return s(e.path, t, e.isCustom) }, context: { data: t, getSuggestions: function(e) { return Object(On.a)(t, e) } } }))
                        }), [i]),
                        u = $n()(l.fieldConfigRegistry.list(), (function(e) { return e.category && e.category[0] }));
                    return o.a.createElement("div", { "aria-label": he.selectors.components.FieldConfigEditor.content }, Object.keys(u).map((function(e, t) { var n = or(u[e], i); return o.a.createElement(Dn, { renderTitle: function(t) { return o.a.createElement(o.a.Fragment, null, e, " ", !t && n && o.a.createElement(a.Counter, { value: n })) }, id: "".concat(e, "/").concat(t), key: "".concat(e, "/").concat(t) }, u[e].map((function(t) { return c(t, u[e].length) }))) })))
                },
                or = function(e, t) {
                    var n = 0,
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done); r = !0) {
                            var s = i.value,
                                c = s.isCustom ? t.defaults.custom ? t.defaults.custom[s.path] : void 0 : t.defaults[s.path];
                            s.getItemsCount && s.getItemsCount(c) > 0 && (n += s.getItemsCount(c))
                        }
                    } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return 0 === n ? void 0 : n
                },
                ar = n("p1x6");

            function ir(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function lr(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var sr = function(e) {
                    var t = e.plugin,
                        n = e.options,
                        i = e.onChange,
                        l = Object(r.useMemo)((function() { return $n()(t.optionEditors.list(), (function(e) { return e.category ? e.category[0] : "Display" })) }), [t]),
                        s = function(e, t) {
                            var r = Object(K.set)(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? ir(Object(n), !0).forEach((function(t) { lr(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ir(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                                }
                                return e
                            }({}, n), e, t);
                            i(r)
                        };
                    return o.a.createElement(o.a.Fragment, null, Object.keys(l).map((function(e, t) { var r = l[e].map((function(e, t) { var r; if (e.showIf && !e.showIf(n)) return null; var i = o.a.createElement(a.Label, { description: e.description, category: null === (r = e.category) || void 0 === r ? void 0 : r.slice(1) }, e.name); return o.a.createElement(a.Field, { label: i, key: "".concat(e.id, "/").concat(t) }, o.a.createElement(e.editor, { value: Object(K.get)(n, e.path), onChange: function(t) { return s(e.path, t) }, item: e })) })).filter((function(e) { return null !== e })); return r.length > 0 ? o.a.createElement(Dn, { title: e, defaultToClosed: !0, id: "".concat(e, "/").concat(t), key: "".concat(e, "/").concat(t) }, o.a.createElement("div", null, r)) : null })))
                },
                cr = n("J4KJ");

            function ur(e) { return (ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function dr(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function pr(e, t) { return !t || "object" !== ur(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function fr(e) { return (fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function hr(e, t) { return (hr = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            var mr = function(e) {
                    function t(e) { return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), pr(this, fr(t).call(this, e)) }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && hr(e, t)
                    }(t, e), n = t, (r = [{ key: "componentDidMount", value: function() { this.loadAngularOptions() } }, { key: "componentDidUpdate", value: function(e) { this.props.plugin !== e.plugin && this.cleanUpAngularOptions(), this.loadAngularOptions() } }, { key: "componentWillUnmount", value: function() { this.cleanUpAngularOptions() } }, { key: "cleanUpAngularOptions", value: function() { this.angularOptions && (this.angularOptions.destroy(), this.angularOptions = null) } }, {
                        key: "loadAngularOptions",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.panel,
                                r = t.angularPanelComponent,
                                o = t.changePanelPlugin;
                            if (this.element && r && !this.angularOptions) {
                                var a = r.getScope();
                                if (a.$$childHead) {
                                    var i = a.$$childHead.ctrl;
                                    i.initEditMode(), i.onPluginTypeChange = function(e) { o(n, e.id) };
                                    for (var l, s, c = "", u = 0; u < i.editorTabs.length; u++) {
                                        var d = i.editorTabs[u];
                                        d.isOpen = (l = d.title, s = 0 === u, pn.a.getBool("panel-edit-section-".concat(l), s)), c += '\n      <div class="panel-options-group" ng-cloak>        \n        <div class="panel-options-group__header" ng-click="toggleOptionGroup('.concat(u, ')" aria-label="').concat(d.title, ' section">\n          <div class="panel-options-group__icon">\n            <icon name="ctrl.editorTabs[').concat(u, "].isOpen ? 'angle-down' : 'angle-right'\"></icon>\n          </div>\n          <div class=\"panel-options-group__title\">").concat(d.title, '</div>\n        </div>\n        <div class="panel-options-group__body" ng-if="ctrl.editorTabs[').concat(u, '].isOpen">\n          <panel-editor-tab editor-tab="ctrl.editorTabs[').concat(u, ']" ctrl="ctrl"></panel-editor-tab>\n        </div>\n      </div>\n      ')
                                    }
                                    var p = Object(J.getAngularLoader)(),
                                        f = {
                                            ctrl: i,
                                            toggleOptionGroup: function(e) {
                                                var t = i.editorTabs[e];
                                                t.isOpen = !t.isOpen,
                                                    function(e, t) { pn.a.set("panel-edit-section-".concat(e), t ? "true" : "false") }(t.title, t.isOpen)
                                            }
                                        };
                                    this.angularOptions = p.load(this.element, f, c)
                                } else setTimeout((function() { e.forceUpdate() }))
                            }
                        }
                    }, { key: "render", value: function() { var e = this; return o.a.createElement("div", { ref: function(t) { return e.element = t } }) } }]) && dr(n.prototype, r), a && dr(n, a), t
                }(r.PureComponent),
                br = { changePanelPlugin: cr.b },
                gr = Object(T.connect)((function(e, t) { return { angularPanelComponent: e.dashboard.panels[t.panel.id].angularComponent } }), br)(mr);

            function yr() { var e = xr(["\n      position: absolute;\n      bottom: ", ";\n      right: ", ";\n      z-index: 1;\n    "]); return yr = function() { return e }, e }

            function vr() { var e = xr(["\n      height: 55px;\n    "]); return vr = function() { return e }, e }

            function Or() { var e = xr(["\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      font-size: ", ";\n      text-align: center;\n      height: 23px;\n      font-weight: ", ";\n      padding: 0 10px;\n      width: 100%;\n    "]); return Or = function() { return e }, e }

            function Sr() { var e = xr(["\n      opacity: 0.2;\n      filter: grayscale(1);\n      cursor: default;\n      pointer-events: none;\n      &:hover {\n        border: 1px solid ", ";\n      }\n    "]); return Sr = function() { return e }, e }

            function wr() { var e = xr(["\n      label: currentVisualizationItem;\n      pointer-events: none;\n      > div:first-child {\n        ", ";\n      }\n    "]); return wr = function() { return e }, e }

            function kr() { var e = xr(["\n      position: relative;\n      z-index: 1;\n      width: 100%;\n    "]); return kr = function() { return e }, e }

            function Mr() { var e = xr(["\n      flex-shrink: 0;\n      flex-direction: column;\n      text-align: center;\n      cursor: pointer;\n      display: flex;\n      margin-right: 10px;\n      align-items: center;\n      justify-content: center;\n      padding-bottom: 6px;\n      height: 100px;\n      width: 100%;\n      position: relative;\n\n      &:hover {\n        > div:first-child {\n          transform: scale(1.05);\n          border-color: ", ";\n        }\n      }\n    "]); return Mr = function() { return e }, e }

            function jr() { var e = xr(["\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: ", ";\n      border: 1px solid ", ";\n      border-radius: 3px;\n      transform: scale(1);\n      transform-origin: center;\n      transition: all 0.1s ease-in;\n      z-index: 0;\n    "]); return jr = function() { return e }, e }

            function Er() { var e = xr(["\n      position: relative;\n    "]); return Er = function() { return e }, e }

            function xr(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function Pr(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var Cr = function(e) {
                var t, n = e.isCurrent,
                    r = e.plugin,
                    l = e.onClick,
                    s = e.disabled,
                    c = Object(a.useTheme)(),
                    u = zr(c),
                    d = Object(i.cx)((Pr(t = {}, u.item, !0), Pr(t, u.disabled, s || r.state === W.PluginState.deprecated), Pr(t, u.current, n), t));
                return o.a.createElement("div", { className: u.wrapper, "aria-label": he.selectors.components.PluginVisualization.item(r.name) }, o.a.createElement("div", { className: d, onClick: s ? function() {} : l, title: r.name }, o.a.createElement("div", { className: u.bg }), o.a.createElement("div", { className: u.itemContent }, o.a.createElement("div", { className: u.name, title: r.name }, r.name), o.a.createElement("img", { className: u.img, src: r.info.logos.small }))), o.a.createElement("div", { className: Object(i.cx)(u.badge, s && u.disabled) }, o.a.createElement(Dr, { plugin: r })))
            };
            Cr.displayName = "VizTypePickerPlugin";
            var zr = Object(a.stylesFactory)((function(e) { return { wrapper: Object(i.css)(Er()), bg: Object(i.css)(jr(), e.colors.bg2, e.colors.border2), item: Object(i.css)(Mr(), e.colors.formFocusOutline), itemContent: Object(i.css)(kr()), current: Object(i.css)(wr(), a.styleMixins.focusCss(e)), disabled: Object(i.css)(Sr(), e.colors.border2), name: Object(i.css)(Or(), e.typography.size.sm, e.typography.weight.semibold), img: Object(i.css)(vr()), badge: Object(i.css)(yr(), e.spacing.xs, e.spacing.xs) } })),
                Tr = Cr,
                Dr = function(e) {
                    var t = e.plugin,
                        n = function(e) {
                            switch (e.state) {
                                case W.PluginState.deprecated:
                                    return { text: "Deprecated", icon: "exclamation-triangle", color: "red", tooltip: "".concat(e.name, " panel is deprecated") }
                            }
                            return { text: "Alpha", icon: "rocket", color: "blue", tooltip: "".concat(e.name, " panel is experimental") }
                        }(t);
                    return t.state !== W.PluginState.deprecated && t.state !== W.PluginState.alpha ? null : o.a.createElement(a.Badge, { color: n.color, text: n.text, icon: n.icon, tooltip: n.tooltip })
                };

            function Br() { var e = function(e, t) { t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }(["\n      max-width: 100%;\n      display: grid;\n      grid-gap: ", ";\n      grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));\n    "]); return Br = function() { return e }, e }

            function Wr() { var e = l.b.panels; return Object.keys(e).filter((function(t) { return !1 === e[t].hideFromList })).map((function(t) { return e[t] })).sort((function(e, t) { return e.sort - t.sort })) }

            function Rr(e, t, n) {
                if (!t.length) return e.filter((function(e) { return e.state !== W.PluginState.deprecated || n.id === e.id }));
                var r = t.toLowerCase(),
                    o = [],
                    a = [],
                    i = !0,
                    l = !1,
                    s = void 0;
                try {
                    for (var c, u = e[Symbol.iterator](); !(i = (c = u.next()).done); i = !0) {
                        var d = c.value;
                        if (d.state !== W.PluginState.deprecated || n.id === d.id) {
                            var p = d.name.toLowerCase().indexOf(r);
                            0 === p ? o.push(d) : p > 0 && a.push(d)
                        }
                    }
                } catch (e) { l = !0, s = e } finally { try { i || null == u.return || u.return() } finally { if (l) throw s } }
                return o.concat(a)
            }
            Dr.displayName = "PanelPluginBadge";
            var Ir = function(e) {
                var t = e.searchQuery,
                    n = e.onTypeChange,
                    i = e.current,
                    l = Object(a.useTheme)(),
                    s = _r(l),
                    c = Object(r.useMemo)((function() { return Wr() }), []),
                    u = Object(r.useCallback)((function() { return Rr(c, t, i) }), [t]),
                    d = u(),
                    p = d.length > 0,
                    f = d.concat(c.filter((function(e) { return -1 === d.indexOf(e) })));
                return o.a.createElement("div", { className: s.grid }, p ? f.map((function(e, r) {
                    return e.state === W.PluginState.deprecated ? null : function(e, r) {
                        var a = e.id === i.id,
                            l = u().indexOf(e) > -1;
                        return o.a.createElement(Tr, { disabled: !l && !!t, key: e.id, isCurrent: a, plugin: e, onClick: function() { return n(e) } })
                    }(e)
                })) : o.a.createElement(a.EmptySearchResult, null, "Could not find anything matching your query"))
            };
            Ir.displayName = "VizTypePicker";
            var _r = Object(a.stylesFactory)((function(e) { return { grid: Object(i.css)(Br(), e.spacing.md) } })),
                Nr = n("DR0N");

            function Ar() { var e = Hr(["\n      color: ", ";\n      cursor: pointer;\n    "]); return Ar = function() { return e }, e }

            function Fr() { var e = Hr(["\n      display: flex;\n      flex-direction: column;\n    "]); return Fr = function() { return e }, e }

            function Lr() { var e = Hr(["\n      color: ", ";\n    "]); return Lr = function() { return e }, e }

            function Hr(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function Gr(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            var Ur = o.a.forwardRef((function(e, t) {
                    var n = e.panel,
                        i = e.plugin,
                        l = e.changePanelPlugin,
                        s = Gr(Object(r.useState)(""), 2),
                        c = s[0],
                        u = s[1],
                        d = Object(a.useTheme)(),
                        p = Vr(d);
                    if (!i) return null;
                    var f = function(e) { l(n, e.id) },
                        h = Object(r.useCallback)((function(e) {
                            if ("Enter" === e.key) {
                                var t = e.currentTarget.value,
                                    n = Rr(Wr(), t, i.meta);
                                n && n.length && f(n[0])
                            }
                        }), [f]),
                        m = "" !== c ? o.a.createElement("span", { className: p.searchClear, onClick: function() { return u("") } }, o.a.createElement(a.Icon, { name: "times" }), "Clear filter") : null;
                    return o.a.createElement("div", { className: p.wrapper }, o.a.createElement(Nr.a, null, o.a.createElement(a.Input, { value: c, onChange: function(e) { return u(e.currentTarget.value) }, onKeyPress: h, prefix: o.a.createElement(a.Icon, { name: "filter", className: p.icon }), suffix: m, placeholder: "Filter visualizations", ref: t })), o.a.createElement(Ir, { current: i.meta, onTypeChange: f, searchQuery: c, onClose: function() {} }))
                })),
                Vr = Object(a.stylesFactory)((function(e) { return { icon: Object(i.css)(Lr(), e.palette.gray33), wrapper: Object(i.css)(Fr()), searchClear: Object(i.css)(Ar(), e.palette.gray60) } })),
                qr = { changePanelPlugin: cr.b },
                Xr = Object(T.connect)((function(e, t) { return { plugin: e.plugins.panels[t.panel.type] } }), qr, void 0, { forwardRef: !0 })(Ur),
                Yr = function(e) {
                    var t = e.panel,
                        n = e.plugin,
                        i = e.data,
                        l = e.dashboard,
                        s = e.onPanelConfigChange,
                        c = e.onPanelOptionsChanged,
                        u = Object(r.useRef)(),
                        d = Object(r.useMemo)((function() { return Object(On.c)() }), []),
                        p = [],
                        f = t && t.links ? t.links.length : 0,
                        h = function() {
                            var e = Object(ar.e)().map((function(e) { return { label: e.name, value: e.name } }));
                            0 === e.length && e.unshift({ label: "No template variables found", value: null });
                            return e.unshift({ label: "Disable repeating", value: null }), e
                        }(),
                        m = [2, 3, 4, 6, 8, 12].map((function(e) { return { label: e.toString(), value: e } }));
                    return p.push(o.a.createElement(Dn, { title: "Settings", id: "Panel settings", key: "Panel settings" }, o.a.createElement(a.Field, { label: "Panel title" }, o.a.createElement(a.Input, { defaultValue: t.title, onBlur: function(e) { return s("title", e.currentTarget.value) } })), o.a.createElement(a.Field, { label: "Description", description: "Panel description supports markdown and links." }, o.a.createElement(a.TextArea, { defaultValue: t.description, onBlur: function(e) { return s("description", e.currentTarget.value) } })), o.a.createElement(a.Field, { label: "Transparent", description: "Display panel without a background." }, o.a.createElement(a.Switch, { value: t.transparent, onChange: function(e) { return s("transparent", e.currentTarget.checked) } })))), p.push(o.a.createElement(Dn, { title: "Visualization", id: "Panel type", key: "Panel type", defaultToClosed: !0, onToggle: function(e) { e && u.current && u.current.focus() } }, o.a.createElement(Xr, { panel: t, ref: u }))), n.editor && t && !n.optionEditors && p.push(o.a.createElement(Dn, { title: "Options", id: "legacy react editor", key: "legacy react editor" }, o.a.createElement(n.editor, { data: i, options: t.getOptions(), onOptionsChange: c }))), n.optionEditors && t && p.push(o.a.createElement(sr, { key: "panel options", options: t.getOptions(), onChange: c, plugin: n })), n.angularPanelCtrl && p.push(o.a.createElement(gr, { panel: t, dashboard: l, plugin: n, key: "angular panel options" })), p.push(o.a.createElement(Dn, { renderTitle: function(e) { return o.a.createElement(o.a.Fragment, null, "Links ", !e && f > 0 && o.a.createElement(a.Counter, { value: f })) }, id: "panel links", key: "panel links", defaultToClosed: !0 }, o.a.createElement(a.DataLinksInlineEditor, { links: t.links, onChange: function(e) { return s("links", e) }, suggestions: d, data: [] }))), p.push(o.a.createElement(Dn, { title: "Repeat options", id: "panel repeats", key: "panel repeats", defaultToClosed: !0 }, o.a.createElement(a.Field, { label: "Repeat by variable", description: "Repeat this panel for each value in the selected variable. This is not visible while in edit mode. You need to go back to dashboard and then update the variable or reload the dashboard." }, o.a.createElement(a.Select, { value: t.repeat, onChange: function(e) { return s("repeat", e.value) }, options: h })), t.repeat && o.a.createElement(a.Field, { label: "Repeat direction" }, o.a.createElement(a.RadioButtonGroup, { options: [{ label: "Horizontal", value: "h" }, { label: "Vertical", value: "v" }], value: t.repeatDirection || "h", onChange: function(e) { return s("repeatDirection", e) } })), t.repeat && "h" === t.repeatDirection && o.a.createElement(a.Field, { label: "Max per row" }, o.a.createElement(a.Select, { options: m, value: t.maxPerRow, onChange: function(e) { return s("maxPerRow", e.value) } })))), o.a.createElement(o.a.Fragment, null, p)
                };
            var Qr = n("BqU0");

            function $r(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }

            function Jr() { var e = io(["\n      label: legacy-options;\n      .panel-options-grid {\n        display: flex;\n        flex-direction: column;\n      }\n      .panel-options-group {\n        margin-bottom: 0;\n      }\n      .panel-options-group__body {\n        padding: ", " 0;\n      }\n\n      .section {\n        display: block;\n        margin: ", " 0;\n\n        &:first-child {\n          margin-top: 0;\n        }\n      }\n    "]); return Jr = function() { return e }, e }

            function Kr() { var e = io([""]); return Kr = function() { return e }, e }

            function Zr() { var e = io(["\n      padding: 0;\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      min-height: 0;\n      background: ", ";\n      border-left: 1px solid ", ";\n    "]); return Zr = function() { return e }, e }

            function eo() { var e = io(["\n      cursor: pointer;\n    "]); return eo = function() { return e }, e }

            function to() { var e = io(["\n      color: ", ";\n      flex-grow: 1;\n    "]); return to = function() { return e }, e }

            function no() { var e = io(["\n      display: flex;\n      flex-grow: 1;\n      flex-direction: row-reverse;\n    "]); return no = function() { return e }, e }

            function ro() { var e = io(["\n      padding-right: ", ";\n    "]); return ro = function() { return e }, e }

            function oo() { var e = io(["\n      height: 100%;\n      width: 100%;\n    "]); return oo = function() { return e }, e }

            function ao() { var e = io(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      padding-top: ", ";\n    "]); return ao = function() { return e }, e }

            function io(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function lo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function so(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lo(Object(n), !0).forEach((function(t) { co(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function co(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function uo(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw a } }
                    return n
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            var po = function(e) {
                    var t = e.plugin,
                        n = e.panel,
                        i = e.width,
                        l = e.onFieldConfigsChange,
                        s = e.onPanelOptionsChanged,
                        c = e.onPanelConfigChange,
                        u = e.onClose,
                        d = e.dashboard,
                        p = Object(a.useTheme)(),
                        f = mo(p),
                        h = uo(Object(r.useState)("options"), 2),
                        m = h[0],
                        b = h[1],
                        g = uo(Object(r.useState)(!1), 2),
                        y = g[0],
                        v = g[1],
                        O = uo(function(e) {
                            var t = Object(r.useRef)(null),
                                n = $r(Object(r.useState)(null), 2),
                                o = n[0],
                                a = n[1];
                            return Object(r.useEffect)((function() {
                                return t.current = e.getQueryRunner().getData().subscribe({ next: function(e) { return a(e) } }),
                                    function() { t.current && (console.log("unsubscribing"), t.current.unsubscribe()) }
                            }), [e]), [o, !(!o || !o.series)]
                        }(n), 2),
                        S = O[0],
                        w = O[1],
                        k = Object(r.useCallback)((function(e) { var t = n.getFieldConfig(); return t && w ? o.a.createElement(rr, { config: t, plugin: e, onChange: l, data: S.series }) : null }), [S, t, n, l]),
                        M = Object(r.useCallback)((function(e) { var t = n.getFieldConfig(); return t && w ? o.a.createElement(nr, { config: t, plugin: e, onChange: l, data: S.series }) : null }), [S, t, n, l]),
                        j = "options" === m || t.meta.skipDataQuery;
                    return o.a.createElement("div", { className: f.panelOptionsPane, "aria-label": he.selectors.components.PanelEditor.OptionsPane.content }, t && o.a.createElement("div", { className: f.wrapper }, o.a.createElement(a.TabsBar, { className: f.tabsBar }, o.a.createElement(fo, { width: i, plugin: t, isSearching: y, styles: f, activeTab: m, onClose: u, setSearchMode: v, setActiveTab: b, panel: n })), o.a.createElement(a.TabContent, { className: f.tabContent }, o.a.createElement(a.CustomScrollbar, { autoHeightMin: "100%" }, j ? o.a.createElement(Yr, { panel: n, plugin: t, dashboard: d, data: S, onPanelConfigChange: c, onPanelOptionsChanged: s }) : o.a.createElement(o.a.Fragment, null, "defaults" === m && k(t), "overrides" === m && M(t))))))
                },
                fo = function(e) {
                    var t = e.width,
                        n = e.plugin,
                        r = e.isSearching,
                        i = e.activeTab,
                        l = e.onClose,
                        s = e.setSearchMode,
                        c = e.setActiveTab,
                        u = e.styles,
                        d = e.panel,
                        p = 0 === d.getFieldConfig().overrides.length ? void 0 : d.getFieldConfig().overrides.length;
                    if (r) {
                        var f = { transition: "width 50ms ease-in-out", width: "50%", display: "flex" },
                            h = { entered: { width: "100%" } };
                        return o.a.createElement(gn.a, { in: !0, timeout: 0, appear: !0 }, (function(e) { return o.a.createElement("div", { className: u.searchWrapper }, o.a.createElement("div", { style: so({}, f, {}, h[e]) }, o.a.createElement(a.Input, { className: u.searchInput, type: "text", prefix: o.a.createElement(a.Icon, { name: "search" }), ref: function(e) { return e && e.focus() }, placeholder: "Search all options", suffix: o.a.createElement(a.Icon, { name: "times", onClick: function() { return s(!1) }, className: u.searchRemoveIcon }) }))) }))
                    }
                    var m = ho,
                        b = m.find((function(e) { return e.value === i }));
                    return n.fieldConfigRegistry.isEmpty() && (m = [b = ho[0]]), o.a.createElement(o.a.Fragment, null, t < 352 ? o.a.createElement("div", { className: "flex-grow-1", "aria-label": he.selectors.components.PanelEditor.OptionsPane.select }, o.a.createElement(a.Select, { options: m, value: b, onChange: function(e) { c(e.value) } })) : o.a.createElement(o.a.Fragment, null, m.map((function(e) { return o.a.createElement(a.Tab, { key: e.value, label: e.label, counter: "overrides" === e.value ? p : void 0, active: b.value === e.value, onChangeTab: function() { return c(e.value) }, title: e.tooltip, "aria-label": he.selectors.components.PanelEditor.OptionsPane.tab(e.label) }) })), o.a.createElement("div", { className: "flex-grow-1" })), o.a.createElement("div", { className: u.tabsButton }, o.a.createElement(Qr.a, { icon: "angle-right", tooltip: "Close options pane", classSuffix: "close-options", onClick: l, iconSize: "lg" })))
                },
                ho = [{ label: "Panel", value: "options", tooltip: "Configure panel display options" }, { label: "Field", value: "defaults", tooltip: "Configure field options" }, { label: "Overrides", value: "overrides", tooltip: "Configure field option overrides" }],
                mo = Object(a.stylesFactory)((function(e) { return { wrapper: Object(i.css)(ao(), e.spacing.md), panelOptionsPane: Object(i.css)(oo()), tabsBar: Object(i.css)(ro(), e.spacing.sm), searchWrapper: Object(i.css)(no()), searchInput: Object(i.css)(to(), e.colors.textWeak), searchRemoveIcon: Object(i.css)(eo()), tabContent: Object(i.css)(Zr(), e.colors.bodyBg, e.colors.pageHeaderBorder), tabsButton: Object(i.css)(Kr()), legacyOptions: Object(i.css)(Jr(), e.spacing.md, e.spacing.md) } })),
                bo = n("VBuW"),
                go = n("3NGh"),
                yo = n("HJRA"),
                vo = n("KODV");

            function Oo(e) { return (Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function So() { var e = Io(["\n      font-size: ", ";\n      padding-left: ", ";\n    "]); return So = function() { return e }, e }

            function wo() { var e = Io(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "]); return wo = function() { return e }, e }

            function ko() { var e = Io(["\n      padding-left: ", ";\n    "]); return ko = function() { return e }, e }

            function Mo() { var e = Io(["\n      display: flex;\n      padding: ", " 0 ", " ", ";\n      justify-content: space-between;\n      flex-wrap: wrap;\n    "]); return Mo = function() { return e }, e }

            function jo() { var e = Io(["\n      display: flex;\n      padding: ", ";\n      background: ", ";\n      justify-content: space-between;\n      border-bottom: 1px solid ", ";\n    "]); return jo = function() { return e }, e }

            function Eo() { var e = Io(["\n      height: 100%;\n      width: 100%;\n    "]); return Eo = function() { return e }, e }

            function xo() { var e = Io(["\n        height: ", ";\n        cursor: row-resize;\n        position: relative;\n        top: 0px;\n        z-index: 1;\n        border-top-width: 1px;\n        margin-left: ", ";\n      "]); return xo = function() { return e }, e }

            function Po() { var e = Io(["\n        cursor: col-resize;\n        width: ", ";\n        border-right-width: 1px;\n        margin-top: 18px;\n      "]); return Po = function() { return e }, e }

            function Co() { var e = Io(["\n      flex: 1 1 0;\n      min-height: 0;\n      width: 100%;\n      padding-left: ", ";\n    "]); return Co = function() { return e }, e }

            function zo() { var e = Io(["\n      label: variablesWrapper;\n      display: flex;\n      flex-grow: 1;\n      flex-wrap: wrap;\n    "]); return zo = function() { return e }, e }

            function To() { var e = Io(["\n      padding-bottom: ", ";\n    "]); return To = function() { return e }, e }

            function Do() { var e = Io(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n      padding-right: ", ";\n    "]); return Do = function() { return e }, e }

            function Bo() { var e = Io(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n      position: relative;\n    "]); return Bo = function() { return e }, e }

            function Wo() { var e = Io(["\n      width: 100%;\n      height: 100%;\n      position: fixed;\n      z-index: ", ";\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: ", ";\n      display: flex;\n      flex-direction: column;\n    "]); return Wo = function() { return e }, e }

            function Ro() { var e = Io(["\n    font-style: italic;\n    background: transparent;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    border-left: 0;\n    border-color: transparent;\n    border-style: solid;\n    transition: 0.2s border-color ease-in-out;\n\n    &:hover {\n      border-color: ", ";\n    }\n  "]); return Ro = function() { return e }, e }

            function Io(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function _o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }

            function No(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _o(Object(n), !0).forEach((function(t) { Ao(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _o(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function Ao(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function Fo(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Lo(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Ho(e, t) { return !t || "object" !== Oo(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

            function Go(e) { return (Go = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function Uo(e, t) { return (Uo = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
            n.d(t, "a", (function() { return Qo }));
            var Vo, qo, Xo = function(e) {
                    function t() {
                        var e, n;
                        Fo(this, t);
                        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                        return (n = Ho(this, (e = Go(t)).call.apply(e, [this].concat(a)))).onPanelExit = function() { n.props.updateLocation({ query: { editPanel: null, tab: null }, partial: !0 }) }, n.onDiscard = function() { n.props.setDiscardChanges(!0), n.props.updateLocation({ query: { editPanel: null, tab: null }, partial: !0 }) }, n.onOpenDashboardSettings = function() { n.props.updateLocation({ query: { editview: "settings" }, partial: !0 }) }, n.onSaveDashboard = function() { yo.a.emit(rt.CoreEvents.showModalReact, { component: vo.a, props: { dashboard: n.props.dashboard } }) }, n.onChangeTab = function(e) { n.props.updateLocation({ query: { tab: e.id }, partial: !0 }) }, n.onFieldConfigChange = function(e) { n.props.panel.updateFieldConfig(No({}, e)), n.forceUpdate() }, n.onPanelOptionsChanged = function(e) { n.props.panel.updateOptions(e), n.forceUpdate() }, n.onPanelConfigChanged = function(e, t) { n.props.panel[e] = t, n.props.panel.render(), n.forceUpdate() }, n.onDragFinished = function(e, t) {
                            if (document.body.style.cursor = "auto", t) {
                                var r = e === Vo.Top ? "topPaneSize" : "rightPaneSize";
                                (0, n.props.updatePanelEditorUIState)(Ao({}, r, t))
                            }
                        }, n.onDragStarted = function() { document.body.style.cursor = "row-resize" }, n.onDiplayModeChange = function(e) {
                            (0, n.props.updatePanelEditorUIState)({ mode: e })
                        }, n.onTogglePanelOptions = function() {
                            var e = n.props,
                                t = e.uiState;
                            (0, e.updatePanelEditorUIState)({ isPanelOptionsVisible: !t.isPanelOptionsVisible })
                        }, n.renderPanel = function(e) {
                            var t = n.props,
                                r = t.dashboard,
                                a = t.panel,
                                l = t.tabs,
                                u = t.uiState;
                            return o.a.createElement("div", { className: Object(i.cx)(e.mainPaneWrapper, 0 === l.length && e.mainPaneWrapperNoTabs) }, n.renderPanelToolbar(e), o.a.createElement("div", { className: e.panelWrapper }, o.a.createElement(s.a, null, (function(t) {
                                var n = t.width,
                                    i = t.height;
                                return n < 3 || i < 3 ? null : o.a.createElement("div", { className: e.centeringContainer, style: { width: n, height: i } }, o.a.createElement("div", { style: Object(cn.a)(u.mode, n, i, a) }, o.a.createElement(c.a, { dashboard: r, panel: a, isEditing: !0, isViewing: !1, isInView: !0 })))
                            }))))
                        }, n
                    }
                    var n, r, u;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Uo(e, t)
                    }(t, e), n = t, (r = [{ key: "componentDidMount", value: function() { this.props.initPanelEditor(this.props.sourcePanel, this.props.dashboard) } }, { key: "componentWillUnmount", value: function() { this.props.panelEditorCleanUp() } }, {
                        key: "renderHorizontalSplit",
                        value: function(e) {
                            var t = this,
                                n = this.props,
                                r = n.dashboard,
                                a = n.panel,
                                i = n.tabs,
                                l = n.data,
                                s = n.uiState;
                            return i.length > 0 ? o.a.createElement(z, { split: "horizontal", minSize: 200, primary: "first", defaultSize: s.topPaneSize, pane2Style: { minHeight: 0 }, resizerClassName: e.resizerH, onDragStarted: this.onDragStarted, onDragFinished: function(e) { return t.onDragFinished(Vo.Top, e) } }, this.renderPanel(e), o.a.createElement("div", { className: e.tabsWrapper, "aria-label": he.selectors.components.PanelEditor.DataPane.content }, o.a.createElement(an, { panel: a, dashboard: r, tabs: i, onChangeTab: this.onChangeTab, data: l }))) : this.renderPanel(e)
                        }
                    }, { key: "renderTemplateVariables", value: function(e) { var t = this.props.variables; return t.length ? o.a.createElement("div", { className: e.variablesWrapper }, o.a.createElement(bo.a, { variables: t })) : null } }, {
                        key: "renderPanelToolbar",
                        value: function(e) {
                            var t = this.props,
                                n = t.dashboard,
                                r = t.location,
                                i = t.uiState,
                                l = t.variables;
                            return o.a.createElement("div", { className: e.panelToolbar }, o.a.createElement(a.HorizontalGroup, { justify: l.length > 0 ? "space-between" : "flex-end", align: "flex-start" }, this.renderTemplateVariables(e), o.a.createElement(a.HorizontalGroup, null, o.a.createElement(a.RadioButtonGroup, { value: i.mode, options: B.c, onChange: this.onDiplayModeChange }), o.a.createElement(sn.a, { dashboard: n, location: r, updateLocation: D.b }), !i.isPanelOptionsVisible && o.a.createElement(Qr.a, { onClick: this.onTogglePanelOptions, tooltip: "Open options pane", classSuffix: "close-options" }, o.a.createElement(a.Icon, { name: "angle-left" }), " ", o.a.createElement("span", { style: { paddingLeft: "6px" } }, "Show options")))))
                        }
                    }, { key: "editorToolbar", value: function(e) { var t = this.props.dashboard; return o.a.createElement("div", { className: e.editorToolbar }, o.a.createElement(a.HorizontalGroup, { justify: "space-between", align: "center" }, o.a.createElement("div", { className: e.toolbarLeft }, o.a.createElement(a.HorizontalGroup, { spacing: "none" }, o.a.createElement(go.a, { onClick: this.onPanelExit, surface: "panel" }), o.a.createElement("span", { className: e.editorTitle }, t.title, " / Edit Panel"))), o.a.createElement(a.HorizontalGroup, null, o.a.createElement(a.HorizontalGroup, { spacing: "sm", align: "center" }, o.a.createElement(a.Button, { icon: "cog", onClick: this.onOpenDashboardSettings, variant: "secondary", title: "Open dashboad settings" }), o.a.createElement(a.Button, { onClick: this.onDiscard, variant: "secondary", title: "Undo all changes" }, "Discard"), o.a.createElement(a.Button, { onClick: this.onSaveDashboard, variant: "secondary", title: "Apply changes and save dashboard" }, "Save"), o.a.createElement(a.Button, { onClick: this.onPanelExit, title: "Apply changes and go back to dashboard" }, "Apply"))))) } }, {
                        key: "renderOptionsPane",
                        value: function() {
                            var e = this.props,
                                t = e.plugin,
                                n = e.dashboard,
                                r = e.panel,
                                a = e.uiState;
                            return t ? o.a.createElement(po, { plugin: t, dashboard: n, panel: r, width: a.rightPaneSize, onClose: this.onTogglePanelOptions, onFieldConfigsChange: this.onFieldConfigChange, onPanelOptionsChanged: this.onPanelOptionsChanged, onPanelConfigChange: this.onPanelConfigChanged }) : o.a.createElement("div", null)
                        }
                    }, {
                        key: "renderWithOptionsPane",
                        value: function(e) {
                            var t = this,
                                n = this.props.uiState;
                            return o.a.createElement(z, { split: "vertical", minSize: 300, primary: "second", defaultSize: n.rightPaneSize, resizerClassName: e.resizerV, onDragStarted: function() { return document.body.style.cursor = "col-resize" }, onDragFinished: function(e) { return t.onDragFinished(Vo.Right, e) } }, this.renderHorizontalSplit(e), this.renderOptionsPane())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.initDone,
                                n = e.uiState,
                                r = $o(l.b.theme, this.props);
                            return t ? o.a.createElement("div", { className: r.wrapper, "aria-label": he.selectors.components.PanelEditor.General.content }, this.editorToolbar(r), o.a.createElement("div", { className: r.verticalSplitPanesWrapper }, n.isPanelOptionsVisible ? this.renderWithOptionsPane(r) : this.renderHorizontalSplit(r))) : null
                        }
                    }]) && Lo(n.prototype, r), u && Lo(n, u), t
                }(r.PureComponent),
                Yo = {
                    updateLocation: D.b,
                    initPanelEditor: function(e, t) {
                        return function(n) {
                            var r = t.initEditPanel(e),
                                o = r.getQueryRunner().getData({ withTransforms: !1 }).subscribe({ next: function(e) { return n(Object(un.e)(e)) } });
                            n(Object(un.g)({ panel: r, sourcePanel: e, querySubscription: o }))
                        }
                    },
                    panelEditorCleanUp: function() {
                        return function(e, t) {
                            var n = t().dashboard.getModel(),
                                r = t().panelEditor,
                                o = r.getPanel,
                                a = r.getSourcePanel,
                                i = r.querySubscription;
                            if (!r.shouldDiscardChanges) {
                                var l = o(),
                                    s = l.getSaveModel(),
                                    c = a(),
                                    u = c.type !== l.type;
                                s.id = c.id, c.restoreModel(s), c.plugin = l.plugin, u && e(Object(dn.l)({ panelId: c.id, plugin: l.plugin })), setTimeout((function() { c.getQueryRunner().useLastResultFrom(l.getQueryRunner()) }), 20)
                            }
                            n && n.exitPanelEditor(), i && i.unsubscribe(), e(Object(dn.c)()), e(Object(un.b)())
                        }
                    },
                    setDiscardChanges: un.d,
                    updatePanelEditorUIState: function(e) {
                        return function(t, n) {
                            var r = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? fn(Object(n), !0).forEach((function(t) { hn(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fn(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                                }
                                return e
                            }({}, n().panelEditor.ui, {}, e);
                            t(Object(un.f)(r));
                            try { pn.a.setObject(un.a, r) } catch (e) { console.error(e) }
                        }
                    }
                },
                Qo = Object(T.connect)((function(e, t) {
                    var n = e.panelEditor.getPanel(),
                        r = function(e, t) { var n; return t && null !== (n = e.panels[t]) && void 0 !== n ? n : {} }(e.dashboard, n.id).plugin;
                    return { location: e.location, plugin: r, panel: n, data: e.panelEditor.getData(), initDone: e.panelEditor.initDone, tabs: bn(e.location, r), uiState: e.panelEditor.ui, variables: Object(ar.e)(e) }
                }), Yo)(Xo);
            (qo = Vo || (Vo = {}))[qo.Right = 0] = "Right", qo[qo.Top = 1] = "Top";
            var $o = Object(a.stylesFactory)((function(e, t) {
                var n = t.uiState,
                    r = e.palette.blue95,
                    o = e.spacing.md,
                    a = Object(i.css)(Ro(), r);
                return { wrapper: Object(i.css)(Wo(), e.zIndex.sidemenu, e.colors.dashboardBg), verticalSplitPanesWrapper: Object(i.css)(Bo()), mainPaneWrapper: Object(i.css)(Do(), n.isPanelOptionsVisible ? 0 : o), mainPaneWrapperNoTabs: Object(i.css)(To(), o), variablesWrapper: Object(i.css)(zo()), panelWrapper: Object(i.css)(Co(), o), resizerV: Object(i.cx)(a, Object(i.css)(Po(), o)), resizerH: Object(i.cx)(a, Object(i.css)(xo(), o, o)), tabsWrapper: Object(i.css)(Eo()), editorToolbar: Object(i.css)(jo(), e.spacing.sm, e.colors.panelBg, e.colors.panelBorder), panelToolbar: Object(i.css)(Mo(), o, o, o), toolbarLeft: Object(i.css)(ko(), e.spacing.sm), centeringContainer: Object(i.css)(wo()), editorTitle: Object(i.css)(So(), e.typography.size.lg, e.spacing.md) }
            }))
        },
        lIMf: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "DashboardPage", (function() { return B })), n.d(t, "mapStateToProps", (function() { return W }));
                    var r = n("+2Rf"),
                        o = n.n(r),
                        a = n("q1tI"),
                        i = n.n(a),
                        l = n("0cfB"),
                        s = n("/MKj"),
                        c = n("TSYQ"),
                        u = n.n(c),
                        d = n("UvM7"),
                        p = n("v4Fa"),
                        f = n("ibPz"),
                        h = n("nU/Z"),
                        m = n("hfOi"),
                        b = n("2t1j"),
                        g = n("lEZL"),
                        y = n("kDLi"),
                        v = n("8M//"),
                        O = n("KyLG"),
                        S = n("3SGO"),
                        w = n("GQ3c"),
                        k = n("kt0J"),
                        M = n("ZFWI"),
                        j = n("3ISj");

                    function E(e) { return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                    function x(e, t, n, r, o, a, i) {
                        try {
                            var l = e[a](i),
                                s = l.value
                        } catch (e) { return void n(e) }
                        l.done ? t(s) : Promise.resolve(s).then(r, o)
                    }

                    function P(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                    function C(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    function z(e, t) { return !t || "object" !== E(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

                    function T(e) { return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                    function D(e, t) { return (D = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
                    var B = function(e) {
                            function t() {
                                var e, n;
                                P(this, t);
                                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                return (n = z(this, (e = T(t)).call.apply(e, [this].concat(o)))).state = { editPanel: null, viewPanel: null, showLoadingState: !1, scrollTop: 0, rememberScrollTop: 0 }, n.setScrollTop = function(e) {
                                    var t = e.target;
                                    n.setState({ scrollTop: t.scrollTop, updateScrollTop: null })
                                }, n.onAddPanel = function() {
                                    var e = n.props.dashboard;
                                    e.panels.length > 0 && "add-panel" === e.panels[0].type || (e.addPanel({ type: "add-panel", gridPos: { x: 0, y: 0, w: 12, h: 8 }, title: "Panel Title" }), n.setState({ updateScrollTop: 0 }))
                                }, n
                            }
                            var n, r, a, l, s;
                            return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && D(e, t)
                            }(t, e), n = t, (r = [{
                                key: "componentDidMount",
                                value: (l = regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                this.props.initDashboard({ $injector: this.props.$injector, $scope: this.props.$scope, urlSlug: this.props.urlSlug, urlUid: this.props.urlUid, urlType: this.props.urlType, urlFolderId: this.props.urlFolderId, routeInfo: this.props.routeInfo, fixUrl: !0 });
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })), s = function() {
                                    var e = this,
                                        t = arguments;
                                    return new Promise((function(n, r) {
                                        var o = l.apply(e, t);

                                        function a(e) { x(o, n, r, a, i, "next", e) }

                                        function i(e) { x(o, n, r, a, i, "throw", e) }
                                        a(void 0)
                                    }))
                                }, function() { return s.apply(this, arguments) })
                            }, { key: "componentWillUnmount", value: function() { this.props.dashboard && (this.props.cleanUpDashboard(), this.setPanelFullscreenClass(!1)) } }, {
                                key: "componentDidUpdate",
                                value: function(e) {
                                    var t = this,
                                        n = this.props,
                                        r = n.dashboard,
                                        o = n.urlEditPanelId,
                                        a = n.urlViewPanelId,
                                        i = n.urlUid,
                                        l = this.state,
                                        s = l.editPanel,
                                        c = l.viewPanel;
                                    r && (e.dashboard || (document.title = r.title + " - " + f.a.AppTitle), e.urlUid === i && (!s && o && this.getPanelByIdFromUrlParam(o, (function(e) { t.setState({ editPanel: e }) })), s && !o && this.setState({ editPanel: null }), !c && a && this.getPanelByIdFromUrlParam(a, (function(e) { t.setPanelFullscreenClass(!0), r.initViewPanel(e), t.setState({ viewPanel: e, rememberScrollTop: t.state.scrollTop }) })), c && !a && (this.setPanelFullscreenClass(!1), r.exitViewPanel(c), this.setState({ viewPanel: null, updateScrollTop: this.state.rememberScrollTop }, this.triggerPanelsRendering.bind(this)))))
                                }
                            }, {
                                key: "getPanelByIdFromUrlParam",
                                value: function(e, t) {
                                    var n = this.props.dashboard,
                                        r = parseInt(e, 10),
                                        o = n.getPanelById(r);
                                    if (!o) return this.props.notifyApp(Object(d.a)("Panel with id ".concat(e, " not found"))), void this.props.updateLocation({ query: { editPanel: null, viewPanel: null }, partial: !0 });
                                    n.expandParentRowFor(r), t(o)
                                }
                            }, { key: "triggerPanelsRendering", value: function() { try { this.props.dashboard.render() } catch (e) { console.error(e), this.props.notifyApp(Object(d.a)("Panel rendering error", e)) } } }, { key: "setPanelFullscreenClass", value: function(e) { o()("body").toggleClass("panel-in-fullscreen", e) } }, { key: "renderSlowInitState", value: function() { return i.a.createElement("div", { className: "dashboard-loading" }, i.a.createElement("div", { className: "dashboard-loading__text" }, i.a.createElement(y.Icon, { name: "fa fa-spinner", className: "fa-spin" }), " ", this.props.initPhase)) } }, { key: "renderInitFailedState", value: function() { var e = this.props.initError; return i.a.createElement("div", { className: "dashboard-loading" }, i.a.createElement(y.Alert, { severity: w.AppNotificationSeverity.Error, title: e.message, children: Object(p.a)(e.error) })) } }, {
                                key: "getInspectPanel",
                                value: function() {
                                    var e = this.props,
                                        t = e.dashboard,
                                        n = e.inspectPanelId;
                                    if (!t || !n) return null;
                                    var r = t.getPanelById(parseInt(n, 10));
                                    return r || null
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.dashboard,
                                        n = e.editview,
                                        r = e.$injector,
                                        o = e.isInitSlow,
                                        a = e.initError,
                                        l = e.inspectTab,
                                        s = e.isPanelEditorOpen,
                                        c = e.updateLocation,
                                        d = this.state,
                                        p = d.editPanel,
                                        f = d.viewPanel,
                                        v = d.scrollTop,
                                        O = d.updateScrollTop,
                                        S = Object(M.c)().featureToggles;
                                    if (!t) return o ? this.renderSlowInitState() : null;
                                    var w = u()({ "dashboard-container": !0, "dashboard-container--has-submenu": t.meta.submenuEnabled }),
                                        E = 25 * Math.round(v / 25),
                                        x = this.getInspectPanel();
                                    return i.a.createElement("div", null, i.a.createElement(m.a, { dashboard: t, isFullscreen: !!f, $injector: r, onAddPanel: this.onAddPanel }), i.a.createElement("div", { className: "scroll-canvas scroll-canvas--dashboard" }, i.a.createElement(y.CustomScrollbar, { autoHeightMin: "100%", setScrollTop: this.setScrollTop, scrollTop: O, updateAfterMountMs: 500, className: "custom-scrollbar--page" }, a && this.renderInitFailedState(), i.a.createElement("div", { className: w }, !S.newVariables && i.a.createElement(j.a, { dashboard: t }), !p && S.newVariables && i.a.createElement(j.a, { dashboard: t }), i.a.createElement(h.a, { dashboard: t, viewPanel: f, editPanel: p, scrollTop: E, isPanelEditorOpen: s })))), x && i.a.createElement(k.b, { dashboard: t, panel: x, defaultTab: l }), p && i.a.createElement(g.a, { dashboard: t, sourcePanel: p }), n && i.a.createElement(b.a, { dashboard: t, updateLocation: c }))
                                }
                            }]) && C(n.prototype, r), a && C(n, a), t
                        }(a.PureComponent),
                        W = function(e) { return { urlUid: e.location.routeParams.uid, urlSlug: e.location.routeParams.slug, urlType: e.location.routeParams.type, editview: e.location.query.editview, urlPanelId: e.location.query.panelId, urlFolderId: e.location.query.folderId, urlEditPanelId: e.location.query.editPanel, urlViewPanelId: e.location.query.viewPanel, inspectPanelId: e.location.query.inspect, initPhase: e.dashboard.initPhase, isInitSlow: e.dashboard.isInitSlow, initError: e.dashboard.initError, dashboard: e.dashboard.getModel(), inspectTab: e.location.query.inspectTab, isPanelEditorOpen: e.panelEditor.isOpen } },
                        R = { initDashboard: v.a, cleanUpDashboard: O.b, notifyApp: S.b, updateLocation: S.c };
                    t.default = Object(l.hot)(e)(Object(s.connect)(W, R)(B))
                }.call(this, n("3UD+")(e))
        },
        "nU/Z": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() { return x }));
                var r = n("q1tI"),
                    o = n.n(r),
                    a = n("0cfB"),
                    i = n("ChGz"),
                    l = n.n(i),
                    s = n("TSYQ"),
                    c = n.n(s),
                    u = n("IZOP"),
                    d = n.n(u),
                    p = n("eIbz"),
                    f = n("FFox"),
                    h = n("eXZ6"),
                    m = n("Yuww"),
                    b = n("GQ3c"),
                    g = n("K47g");

                function y(e) { return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function v(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                function O(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function S(e, t) { return !t || "object" !== y(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

                function w(e) { return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function k(e, t) { return (k = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }
                var M = 1200,
                    j = !1;
                var E = d()({ monitorWidth: !0 })((function(e) {
                        var t = e.size,
                            n = e.layout,
                            r = e.onLayoutChange,
                            a = e.children,
                            i = e.onDragStop,
                            s = e.onResize,
                            c = e.onResizeStop,
                            u = e.onWidthChange,
                            d = e.className,
                            p = e.isResizable,
                            f = e.isDraggable,
                            m = e.viewPanel,
                            b = t.width > 0 ? t.width : M;
                        b !== M && (j ? j = !1 : !m && Math.abs(b - M) > 8 && (u(), M = b));
                        var g = !(b <= 420) && f;
                        return o.a.createElement(l.a, { width: M, className: d, isDraggable: g, isResizable: p, containerPadding: [0, 0], useCSSTransforms: !1, margin: [h.e, h.e], cols: h.f, rowHeight: h.d, draggableHandle: ".grid-drag-handle", layout: n, onResize: s, onResizeStop: c, onDragStop: i, onLayoutChange: r }, a)
                    })),
                    x = function(e) {
                        function t() {
                            var e, n;
                            v(this, t);
                            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                            return (n = S(this, (e = w(t)).call.apply(e, [this].concat(o)))).panelRef = {}, n.onLayoutChange = function(e) {
                                var t = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var a, i = e[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                        var l = a.value;
                                        n.panelMap[l.i].updateGridPos(l)
                                    }
                                } catch (e) { r = !0, o = e } finally { try { t || null == i.return || i.return() } finally { if (r) throw o } }
                                n.props.dashboard.sortPanelsByGridPos(), n.forceUpdate()
                            }, n.triggerForceUpdate = function() { n.forceUpdate() }, n.onWidthChange = function() {
                                var e = !0,
                                    t = !1,
                                    r = void 0;
                                try { for (var o, a = n.props.dashboard.panels[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) { o.value.resizeDone() } } catch (e) { t = !0, r = e } finally { try { e || null == a.return || a.return() } finally { if (t) throw r } }
                            }, n.updateGridPos = function(e, t) { n.panelMap[e.i].updateGridPos(e), n.onLayoutChange(t) }, n.onResize = function(e, t, r) { n.panelMap[r.i].updateGridPos(r) }, n.onResizeStop = function(e, t, r) { n.updateGridPos(r, e), n.panelMap[r.i].resizeDone() }, n.onDragStop = function(e, t, r) { n.updateGridPos(r, e) }, n.isInView = function(e) {
                                //if (DEVICE == 'desktop') return 1; //disable lazyload on desktop only
                                if (!(MOBILE)) return 1; //disable lazyload on desktop only - better method
                                if (n.panelMap[e.id.toString()].type == 'ryantxu-ajax-panel') return 1; //disable lazyload for ajax panels
                                // return 1; //disable lazyload
                                if (e.isViewing || e.isEditing) return !0;
                                var t = n.panelRef[e.id.toString()];
                                if (!t) return !1;
                                var r = t.offsetTop,
                                    o = r + (e.gridPos.h * h.d + 40),
                                    a = n.props.scrollTop;
                                return !(a > o + 250) && (!(r > a + (isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight) + 250) && !n.props.dashboard.otherPanelInFullscreen(e))
                            }, n
                        }
                        var n, r, a;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && k(e, t)
                        }(t, e), n = t, (r = [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props.dashboard;
                                e.on(g.b, this.triggerForceUpdate), e.on(g.c, this.triggerForceUpdate), e.on(b.CoreEvents.repeatsProcessed, this.triggerForceUpdate), e.on(b.CoreEvents.rowCollapsed, this.triggerForceUpdate), e.on(b.CoreEvents.rowExpanded, this.triggerForceUpdate)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                var e = this.props.dashboard;
                                e.off(g.b, this.triggerForceUpdate), e.off(g.c, this.triggerForceUpdate), e.off(b.CoreEvents.repeatsProcessed, this.triggerForceUpdate), e.off(b.CoreEvents.rowCollapsed, this.triggerForceUpdate), e.off(b.CoreEvents.rowExpanded, this.triggerForceUpdate)
                            }
                        }, {
                            key: "buildLayout",
                            value: function() {
                                var e = [];
                                this.panelMap = {};
                                var t = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var o, a = this.props.dashboard.panels[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                        var i = o.value,
                                            l = i.id.toString();
                                        if (this.panelMap[l] = i, i.gridPos) { var s = { i: l, x: i.gridPos.x, y: i.gridPos.y, w: i.gridPos.w, h: i.gridPos.h }; "row" === i.type && (s.w = h.f, s.h = 1, s.isResizable = !1, s.isDraggable = i.collapsed), e.push(s) } else console.log("panel without gridpos")
                                    }
                                } catch (e) { n = !0, r = e } finally { try { t || null == a.return || a.return() } finally { if (n) throw r } }
                                return e
                            }
                        }, {
                            key: "renderPanels",
                            value: function() {
                                var e = this,
                                    t = [],
                                    n = !0,
                                    r = !1,
                                    a = void 0;
                                try {
                                    for (var i, l = function() {
                                            var n = i.value,
                                                r = c()({ "react-grid-item--fullscreen": n.isViewing }),
                                                a = n.id.toString();
                                                //count rendered panels and finish when done loading lazyload
                                              if (LOADED.size == Object.keys(e.panelRef).length) {
                                                  if (LOADED.size>0) {
                                                      if (SCROLL_STATIC) {
                                                        console.log('DONE LOADING ALL. SETTING SCROLL TO SMOOTH.')
                                                        document.querySelector(".view").style.scrollBehavior='smooth';
                                                        SCROLL_STATIC=false;
                                                    }
                                                  }
                                              } else {
                                                if (n.isInView) {
                                                  LOADED.add(a);
                                                  console.log('LOADED',LOADED.size, '/',Object.keys(e.panelRef).length)
                                                }
                                              }
                                                //insert end
                                            n.isInView = e.isInView(n), t.push(o.a.createElement("div", { key: a, className: r, id: "panel-" + a, ref: function(t) { return t && (e.panelRef[a] = t) } }, e.renderPanel(n)))
                                        }, s = this.props.dashboard.panels[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) l()
                                } catch (e) { r = !0, a = e } finally { try { n || null == s.return || s.return() } finally { if (r) throw a } }
                                return t
                            }
                        }, { key: "renderPanel", value: function(e) { return "row" === e.type ? o.a.createElement(f.a, { panel: e, dashboard: this.props.dashboard }) : "add-panel" === e.type ? o.a.createElement(p.a, { panel: e, dashboard: this.props.dashboard }) : o.a.createElement(m.a, { panel: e, dashboard: this.props.dashboard, isEditing: e.isEditing, isViewing: e.isViewing, isInView: e.isInView }) } }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.dashboard,
                                    n = e.viewPanel;
                                return o.a.createElement(E, { className: c()({ layout: !0 }), layout: this.buildLayout(), isResizable: t.meta.canEdit, isDraggable: t.meta.canEdit, onLayoutChange: this.onLayoutChange, onWidthChange: this.onWidthChange, onDragStop: this.onDragStop, onResize: this.onResize, onResizeStop: this.onResizeStop, viewPanel: n }, this.renderPanels())
                            }
                        }]) && O(n.prototype, r), a && O(n, a), t
                    }(r.PureComponent);
                Object(a.hot)(e)(x)
            }).call(this, n("3UD+")(e))
        },
        q7TX: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                function t() {}
                var n = { log: t, warn: t, error: t };
                if (!e && window.console) {
                    var r = function(e, t) {
                        e[t] = function() {
                            var e = console[t];
                            if (e.apply) e.apply(console, arguments);
                            else
                                for (var n = 0; n < arguments.length; n++) e(arguments[n])
                        }
                    };
                    r(n, "log"), r(n, "warn"), r(n, "error")
                }
                return n
            }
        },
        t3DW: function(e, t, n) {
            "use strict";
            (e.exports = {}).forEach = function(e, t) { for (var n = 0; n < e.length; n++) { var r = t(e[n]); if (r) return r } }
        },
        wnTG: function(e, t, n) {
            "use strict";
            var r = n("UL9e");

            function o() {
                var e = {},
                    t = 0,
                    n = 0,
                    r = 0;
                return {
                    add: function(o, a) { a || (a = o, o = 0), o > n ? n = o : o < r && (r = o), e[o] || (e[o] = []), e[o].push(a), t++ },
                    process: function() {
                        for (var t = r; t <= n; t++)
                            for (var o = e[t], a = 0; a < o.length; a++) {
                                (0, o[a])()
                            }
                    },
                    size: function() { return t }
                }
            }
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = r.getOption(e, "async", !0),
                    a = r.getOption(e, "auto", !0);
                a && !n && (t && t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
                var i, l = o(),
                    s = !1;

                function c() {
                    for (s = !0; l.size();) {
                        var e = l;
                        l = o(), e.process()
                    }
                    s = !1
                }

                function u() {
                    var e;
                    e = c, i = setTimeout(e, 0)
                }
                return { add: function(e, t) {!s && a && n && 0 === l.size() && u(), l.add(e, t) }, force: function(e) { s || (void 0 === e && (e = n), i && (clearTimeout(i), i = null), e ? u() : c()) } }
            }
        },
        yUZ2: function(e, t, n) {
            "use strict";
            var r = n("t3DW").forEach;
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState,
                    a = (e.stateHandler.hasState, e.idHandler);
                if (!n) throw new Error("Missing required dependency: batchProcessor");
                if (!t) throw new Error("Missing required dependency: reporter.");
                var i = function() {
                    var e = document.createElement("div");
                    e.style.cssText = s(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
                    var t = document.createElement("div");
                    t.style.cssText = s(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                    var n = 500 - t.clientWidth,
                        r = 500 - t.clientHeight;
                    return document.body.removeChild(t), { width: n, height: r }
                }();

                function l(e) {
                    ! function(e, t, n) {
                        if (!e.getElementById(t)) {
                            var r = n + "_animation",
                                o = n + "_animation_active",
                                a = "/* Created by the element-resize-detector library. */\n";
                            a += "." + n + " > div::-webkit-scrollbar { " + s(["display: none"]) + " }\n\n", a += "." + o + " { " + s(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + r, "animation-name: " + r]) + " }\n", a += "@-webkit-keyframes " + r + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                                function(n, r) {
                                    r = r || function(t) { e.head.appendChild(t) };
                                    var o = e.createElement("style");
                                    o.innerHTML = n, o.id = t, r(o)
                                }(a += "@keyframes " + r + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
                        }
                    }(e, "erd_scroll_detection_scrollbar_style", "erd_scroll_detection_container")
                }

                function s(t) { var n = e.important ? " !important; " : "; "; return (t.join(n) + n).trim() }

                function c(e, n, r) {
                    if (e.addEventListener) e.addEventListener(n, r);
                    else {
                        if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                        e.attachEvent("on" + n, r)
                    }
                }

                function u(e, n, r) {
                    if (e.removeEventListener) e.removeEventListener(n, r);
                    else {
                        if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                        e.detachEvent("on" + n, r)
                    }
                }

                function d(e) { return o(e).container.childNodes[0].childNodes[0].childNodes[0] }

                function p(e) { return o(e).container.childNodes[0].childNodes[0].childNodes[1] }
                return l(window.document), {
                    makeDetectable: function(e, l, u) {
                        function f() {
                            if (e.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(a.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
                                else
                                    for (var r = 0; r < n.length; r++) t.log(n[r])
                            }
                        }

                        function h(e) {
                            var t = o(e).container.childNodes[0],
                                n = window.getComputedStyle(t);
                            return !n.width || -1 === n.width.indexOf("px")
                        }

                        function m() {
                            var e = window.getComputedStyle(l),
                                t = {};
                            return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                        }

                        function b() {
                            if (f("storeStyle invoked."), o(l)) {
                                var e = m();
                                o(l).style = e
                            } else f("Aborting because element has been uninstalled")
                        }

                        function g(e, t, n) { o(e).lastWidth = t, o(e).lastHeight = n }

                        function y() { return 2 * i.width + 1 }

                        function v() { return 2 * i.height + 1 }

                        function O(e) { return e + 10 + y() }

                        function S(e) { return e + 10 + v() }

                        function w(e, t, n) {
                            var r = d(e),
                                o = p(e),
                                a = O(t),
                                i = S(n),
                                l = function(e) { return 2 * e + y() }(t),
                                s = function(e) { return 2 * e + v() }(n);
                            r.scrollLeft = a, r.scrollTop = i, o.scrollLeft = l, o.scrollTop = s
                        }

                        function k() {
                            var e = o(l).container;
                            if (!e) {
                                (e = document.createElement("div")).className = "erd_scroll_detection_container", e.style.cssText = s(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(l).container = e,
                                    function(e) { e.className += " erd_scroll_detection_container_animation_active" }(e), l.appendChild(e);
                                var t = function() { o(l).onRendered && o(l).onRendered() };
                                c(e, "animationstart", t), o(l).onAnimationStart = t
                            }
                            return e
                        }

                        function M() {
                            if (f("Injecting elements"), o(l)) {
                                ! function() {
                                    var n = o(l).style;
                                    if ("static" === n.position) {
                                        l.style.setProperty("position", "relative", e.important ? "important" : "");
                                        var r = function(e, t, n, r) { var o = n[r]; "auto" !== o && "0" !== function(e) { return e.replace(/[^-\d\.]/g, "") }(o) && (e.warn("An element that is positioned static has style." + r + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0) };
                                        r(t, l, n, "top"), r(t, l, n, "right"), r(t, l, n, "bottom"), r(t, l, n, "left")
                                    }
                                }();
                                var n = o(l).container;
                                n || (n = k());
                                var r, a, u, d, p = i.width,
                                    h = i.height,
                                    m = s(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]),
                                    b = s(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(["left: " + (r = (r = -(1 + p)) ? r + "px" : "0"), "top: " + (a = (a = -(1 + h)) ? a + "px" : "0"), "right: " + (d = (d = -p) ? d + "px" : "0"), "bottom: " + (u = (u = -h) ? u + "px" : "0")])),
                                    g = s(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                                    y = s(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                                    v = s(["position: absolute", "left: 0", "top: 0"]),
                                    O = s(["position: absolute", "width: 200%", "height: 200%"]),
                                    S = document.createElement("div"),
                                    w = document.createElement("div"),
                                    M = document.createElement("div"),
                                    j = document.createElement("div"),
                                    E = document.createElement("div"),
                                    x = document.createElement("div");
                                S.dir = "ltr", S.style.cssText = m, S.className = "erd_scroll_detection_container", w.className = "erd_scroll_detection_container", w.style.cssText = b, M.style.cssText = g, j.style.cssText = v, E.style.cssText = y, x.style.cssText = O, M.appendChild(j), E.appendChild(x), w.appendChild(M), w.appendChild(E), S.appendChild(w), n.appendChild(S), c(M, "scroll", P), c(E, "scroll", C), o(l).onExpandScroll = P, o(l).onShrinkScroll = C
                            } else f("Aborting because element has been uninstalled");

                            function P() { o(l).onExpand && o(l).onExpand() }

                            function C() { o(l).onShrink && o(l).onShrink() }
                        }

                        function j() {
                            function i(t, n, r) {
                                var o = function(e) { return d(e).childNodes[0] }(t),
                                    a = O(n),
                                    i = S(r);
                                o.style.setProperty("width", a + "px", e.important ? "important" : ""), o.style.setProperty("height", i + "px", e.important ? "important" : "")
                            }

                            function s(r) {
                                var s = l.offsetWidth,
                                    u = l.offsetHeight,
                                    d = s !== o(l).lastWidth || u !== o(l).lastHeight;
                                f("Storing current size", s, u), g(l, s, u), n.add(0, (function() {
                                    if (d)
                                        if (o(l))
                                            if (c()) {
                                                if (e.debug) {
                                                    var n = l.offsetWidth,
                                                        r = l.offsetHeight;
                                                    n === s && r === u || t.warn(a.get(l), "Scroll: Size changed before updating detector elements.")
                                                }
                                                i(l, s, u)
                                            } else f("Aborting because element container has not been initialized");
                                    else f("Aborting because element has been uninstalled")
                                })), n.add(1, (function() { o(l) ? c() ? w(l, s, u) : f("Aborting because element container has not been initialized") : f("Aborting because element has been uninstalled") })), d && r && n.add(2, (function() { o(l) ? c() ? r() : f("Aborting because element container has not been initialized") : f("Aborting because element has been uninstalled") }))
                            }

                            function c() { return !!o(l).container }

                            function u() { f("notifyListenersIfNeeded invoked"); var e = o(l); return void 0 === o(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? f("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? f("Not notifying: Size already notified") : (f("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, void r(o(l).listeners, (function(e) { e(l) }))) }

                            function m() { f("Scroll detected."), h(l) ? f("Scroll event fired while unrendered. Ignoring...") : s(u) }
                            if (f("registerListenersAndPositionElements invoked."), o(l)) {
                                o(l).onRendered = function() {
                                    if (f("startanimation triggered."), h(l)) f("Ignoring since element is still unrendered...");
                                    else {
                                        f("Element rendered.");
                                        var e = d(l),
                                            t = p(l);
                                        0 !== e.scrollLeft && 0 !== e.scrollTop && 0 !== t.scrollLeft && 0 !== t.scrollTop || (f("Scrollbars out of sync. Updating detector elements..."), s(u))
                                    }
                                }, o(l).onExpand = m, o(l).onShrink = m;
                                var b = o(l).style;
                                i(l, b.width, b.height)
                            } else f("Aborting because element has been uninstalled")
                        }

                        function E() {
                            if (f("finalizeDomMutation invoked."), o(l)) {
                                var e = o(l).style;
                                g(l, e.width, e.height), w(l, e.width, e.height)
                            } else f("Aborting because element has been uninstalled")
                        }

                        function x() { u(l) }

                        function P() {
                            var e;
                            f("Installing..."), o(l).listeners = [], e = m(), o(l).startSize = { width: e.width, height: e.height }, f("Element start size", o(l).startSize), n.add(0, b), n.add(1, M), n.add(2, j), n.add(3, E), n.add(4, x)
                        }
                        u || (u = l, l = e, e = null), e = e || {}, f("Making detectable..."), ! function(e) { return ! function(e) { return e === e.ownerDocument.body || e.ownerDocument.body.contains(e) }(e) || null === window.getComputedStyle(e) }(l) ? P() : (f("Element is detached"), k(), f("Waiting until element is attached..."), o(l).onRendered = function() { f("Element is now attached"), P() })
                    },
                    addListener: function(e, t) {
                        if (!o(e).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                        o(e).listeners.push(t)
                    },
                    uninstall: function(e) {
                        var t = o(e);
                        t && (t.onExpandScroll && u(d(e), "scroll", t.onExpandScroll), t.onShrinkScroll && u(p(e), "scroll", t.onShrinkScroll), t.onAnimationStart && u(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
                    },
                    initDocument: l
                }
            }
        }
    }
]);
//# sourceMappingURL=DashboardPage.41bc4b193210d0f899b3.js.map