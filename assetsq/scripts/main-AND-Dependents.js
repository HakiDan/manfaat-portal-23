/*! For license information please see main.js.LICENSE */ ! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 4)
}([function(e, t, n) {
    var r;
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            u = o.flat ? function(e) {
                return o.flat.call(e)
            } : function(e) {
                return o.concat.apply([], e)
            },
            l = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            v = h.call(Object),
            g = {},
            m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            y = function(e) {
                return null != e && e === e.window
            },
            b = n.document,
            x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var r, i, o = (n = n || b).createElement("script");
            if (o.text = e, t)
                for (r in x)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
        };

        function k(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.5.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: o.sort,
            splice: o.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, a[t] = C.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && h.call(n) === v)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (k(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (k(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return u(a)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        });
        var S = function(e) {
            var t, n, r, i, o, a, s, u, l, c, f, d, p, h, v, g, m, y, b, x = "sizzle" + 1 * new Date,
                w = e.document,
                T = 0,
                C = 0,
                k = ue(),
                S = ue(),
                E = ue(),
                _ = ue(),
                j = function(e, t) {
                    return e === t && (f = !0), 0
                },
                D = {}.hasOwnProperty,
                A = [],
                N = A.pop,
                L = A.push,
                O = A.push,
                H = A.slice,
                q = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                R = "\\[" + M + "*(" + P + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + M + "*\\]",
                $ = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                F = new RegExp(M + "+", "g"),
                B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                W = new RegExp("^" + M + "*," + M + "*"),
                z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                U = new RegExp(M + "|>"),
                X = new RegExp($),
                V = new RegExp("^" + P + "$"),
                G = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + $),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                Q = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                oe = function() {
                    d()
                },
                ae = xe(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
            } catch (e) {
                O = {
                    apply: A.length ? function(e, t) {
                        L.apply(e, H.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function se(e, t, r, i) {
                var o, s, l, c, f, h, m, y = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!i && (d(t), t = t || p, v)) {
                    if (11 !== w && (f = Z.exec(e)))
                        if (o = f[1]) {
                            if (9 === w) {
                                if (!(l = t.getElementById(o))) return r;
                                if (l.id === o) return r.push(l), r
                            } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r
                        } else {
                            if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r
                        } if (n.qsa && !_[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e, y = t, 1 === w && (U.test(e) || z.test(e))) {
                            for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                            m = h.join(",")
                        }
                        try {
                            return O.apply(r, y.querySelectorAll(m)), r
                        } catch (t) {
                            _(e, !0)
                        } finally {
                            c === x && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(B, "$1"), t, r, i)
            }

            function ue() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function le(e) {
                return e[x] = !0, e
            }

            function ce(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
            }

            function de(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ve(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return le(function(t) {
                    return t = +t, le(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {}, o = se.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, d = se.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, v = !o(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
                        return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }), n.attributes = ce(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ce(function(e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce(function(e) {
                        return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                    }), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                    }, m = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ce(function(e) {
                        var t;
                        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    }), ce(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", $)
                    }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, j = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                        if (i === o) return de(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                    }, p) : p
                }, se.matches = function(e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function(e, t) {
                    if (d(e), n.matchesSelector && v && !_[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        _(t, !0)
                    }
                    return se(t, p, null, [e]).length > 0
                }, se.contains = function(e, t) {
                    return (e.ownerDocument || e) != p && d(e), b(e, t)
                }, se.attr = function(e, t) {
                    (e.ownerDocument || e) != p && d(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                    return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, se.escape = function(e) {
                    return (e + "").replace(re, ie)
                }, se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(j), f) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return c = null, e
                }, i = se.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = se.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, d, p, h, v = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; v;) {
                                            for (d = t; d = d[v];)
                                                if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (b = (p = (l = (c = (f = (d = g)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && g.childNodes[p]; d = ++p && d && d[v] || (b = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++b && d === t) {
                                                c[e] = [T, p, b];
                                                break
                                            }
                                    } else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                                        for (;
                                            (d = ++p && d && d[v] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, b]), d !== t)););
                                    return (b -= i) === r || b % r == 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = q(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: le(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[x] ? le(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: le(function(e) {
                            return function(t) {
                                return se(e, t).length > 0
                            }
                        }),
                        contains: le(function(e) {
                            return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                        }),
                        lang: le(function(e) {
                            return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ve(!1),
                        disabled: ve(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return J.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ge(function() {
                            return [0]
                        }),
                        last: ge(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ge(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ge(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ge(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ge(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: ge(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = pe(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = he(t);

            function ye() {}

            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function xe(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = C++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function(t, n, u) {
                    var l, c, f, d = [T, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === T && l[1] === s) return d[2] = l[2];
                                    if (c[o] = d, d[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function we(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function Te(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function Ce(e, t, n, r, i, o) {
                return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), le(function(o, a, s, u) {
                    var l, c, f, d = [],
                        p = [],
                        h = a.length,
                        v = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !o && t ? v : Te(v, d, e, s, u),
                        m = n ? i || (o ? e : h || r) ? [] : a : g;
                    if (n && n(g, m, s, u), r)
                        for (l = Te(m, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (m[p[c]] = !(g[p[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (l = [], c = m.length; c--;)(f = m[c]) && l.push(g[c] = f);
                                i(null, m = [], l, u)
                            }
                            for (c = m.length; c--;)(f = m[c]) && (l = i ? q(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                        }
                    } else m = Te(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : O.apply(a, m)
                })
            }

            function ke(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function(e) {
                        return e === t
                    }, s, !0), f = xe(function(e) {
                        return q(t, e) > -1
                    }, s, !0), d = [function(e, n, r) {
                        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i
                    }]; u < o; u++)
                    if (n = r.relative[e[u].type]) d = [xe(we(d), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                            return Ce(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(B, "$1"), n, u < i && ke(e.slice(u, i)), i < o && ke(e = e.slice(i)), i < o && be(e))
                        }
                        d.push(n)
                    } return we(d)
            }
            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                var n, i, o, a, s, u, l, c = S[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
            }, s = se.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    s = E[e + " "];
                if (!s) {
                    for (t || (t = a(e)), n = t.length; n--;)(s = ke(t[n]))[x] ? i.push(s) : o.push(s);
                    (s = E(e, function(e, t) {
                        var n = t.length > 0,
                            i = e.length > 0,
                            o = function(o, a, s, u, c) {
                                var f, h, g, m = 0,
                                    y = "0",
                                    b = o && [],
                                    x = [],
                                    w = l,
                                    C = o || i && r.find.TAG("*", c),
                                    k = T += null == w ? 1 : Math.random() || .1,
                                    S = C.length;
                                for (c && (l = a == p || a || c); y !== S && null != (f = C[y]); y++) {
                                    if (i && f) {
                                        for (h = 0, a || f.ownerDocument == p || (d(f), s = !v); g = e[h++];)
                                            if (g(f, a || p, s)) {
                                                u.push(f);
                                                break
                                            } c && (T = k)
                                    }
                                    n && ((f = !g && f) && m--, o && b.push(f))
                                }
                                if (m += y, n && y !== m) {
                                    for (h = 0; g = t[h++];) g(b, x, a, s);
                                    if (o) {
                                        if (m > 0)
                                            for (; y--;) b[y] || x[y] || (x[y] = N.call(u));
                                        x = Te(x)
                                    }
                                    O.apply(u, x), c && !o && x.length > 0 && m + t.length > 1 && se.uniqueSort(u)
                                }
                                return c && (T = k, l = w), b
                            };
                        return n ? le(o) : o
                    }(o, i))).selector = e
                }
                return s
            }, u = se.select = function(e, t, n, i) {
                var o, u, l, c, f, d = "function" == typeof e && e,
                    p = !i && a(e = d.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && v && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                    }
                    for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                            if (u.splice(o, 1), !(e = i.length && be(u))) return O.apply(n, i), n;
                            break
                        }
                }
                return (d || s(e, p))(i, t, !v, n, !t || ee.test(e) && me(t.parentNode) || t), n
            }, n.sortStable = x.split("").sort(j).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }), ce(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ce(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(I, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), se
        }(n);
        C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
        var E = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && C(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            _ = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            j = C.expr.match.needsContext;

        function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function N(e, t, n) {
            return m(t) ? C.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? C.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? C.grep(e, function(e) {
                return c.call(t, e) > -1 !== n
            }) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], !0))
            },
            is: function(e) {
                return !!N(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
            }
        });
        var L, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || L, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), A.test(r[1]) && C.isPlainObject(t))
                        for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, L = C(b);
        var H = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function I(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && C(e);
                if (!j.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return E(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return E(e, "parentNode", n)
            },
            next: function(e) {
                return I(e, "nextSibling")
            },
            prev: function(e) {
                return I(e, "previousSibling")
            },
            nextAll: function(e) {
                return E(e, "nextSibling")
            },
            prevAll: function(e) {
                return E(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return E(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return E(e, "previousSibling", n)
            },
            siblings: function(e) {
                return _((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return _(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, function(e, t) {
            C.fn[e] = function(n, r) {
                var i = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (q[e] || C.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function P(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function $(e, t, n, r) {
            var i;
            try {
                e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(M) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : C.extend({}, e);
            var t, n, r, i, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (i = i || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            C.each(n, function(n, r) {
                                m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var n;
                                (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = a = [], n || t || (o = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred(function(n) {
                                C.each(t, function(t, r) {
                                    var i = m(e[r[4]]) && e[r[4]];
                                    o[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, r, i) {
                            var o = 0;

                            function a(e, t, r, i) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        l = function() {
                                            var n, l;
                                            if (!(e < o)) {
                                                if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = n && ("object" == typeof n || "function" == typeof n) && n.then, m(l) ? i ? l.call(n, a(o, t, P, i), a(o, t, R, i)) : (o++, l.call(n, a(o, t, P, i), a(o, t, R, i), a(o, t, P, t.notifyWith))) : (r !== P && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                            }
                                        },
                                        c = i ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== R && (s = void 0, u = [n]), t.rejectWith(s, u))
                                            }
                                        };
                                    e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return C.Deferred(function(n) {
                                t[0][3].add(a(0, n, m(i) ? i : P, n.notifyWith)), t[1][3].add(a(0, n, m(e) ? e : P)), t[2][3].add(a(0, n, m(r) ? r : R))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, i) : i
                        }
                    },
                    o = {};
                return C.each(t, function(e, n) {
                    var a = n[2],
                        s = n[5];
                    i[n[1]] = a.add, s && a.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = s.call(arguments),
                    o = C.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && ($(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();
                for (; n--;) $(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var B = C.Deferred();

        function W() {
            b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), C.ready()
        }
        C.fn.ready = function(e) {
            return B.then(e).catch(function(e) {
                C.readyException(e)
            }), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || B.resolveWith(b, [C]))
            }
        }), C.ready.then = B.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
        var z = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === T(n))
                    for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(C(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            U = /^-ms-/,
            X = /-([a-z])/g;

        function V(e, t) {
            return t.toUpperCase()
        }

        function G(e) {
            return e.replace(U, "ms-").replace(X, V)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Q() {
            this.expando = C.expando + Q.uid++
        }
        Q.uid = 1, Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else
                    for (r in t) i[G(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var J = new Q,
            K = new Q,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    K.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return K.hasData(e) || J.hasData(e)
            },
            data: function(e, t, n) {
                return K.access(e, t, n)
            },
            removeData: function(e, t) {
                K.remove(e, t)
            },
            _data: function(e, t, n) {
                return J.access(e, t, n)
            },
            _removeData: function(e, t) {
                J.remove(e, t)
            }
        }), C.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), te(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    K.set(this, e)
                }) : z(this, function(t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) ? n : void 0 !== (n = te(o, e)) ? n : void 0;
                    this.each(function() {
                        K.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    K.remove(this, e)
                })
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                    C.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        J.remove(e, [t + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = C.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            se = {
                composed: !0
            };
        oe.getRootNode && (ae = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        });
        var ue = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
        };

        function le(e, t, n, r) {
            var i, o, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && re.exec(C.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2, l = l || c[3], c = +u || 1; a--;) C.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, C.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }
        var ce = {};

        function fe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
        }

        function de(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ue(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        C.fn.extend({
            show: function() {
                return de(this, !0)
            },
            hide: function() {
                return de(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ue(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        ! function() {
            var e = b.createDocumentFragment().appendChild(b.createElement("div")),
                t = b.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), g.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, e.innerHTML = "<option></option>", g.option = !!e.lastChild
        }();
        var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? C.merge([e], n) : n
        }

        function ye(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, g.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var be = /<|&#?\w+;/;

        function xe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                C.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; o = d[p++];)
                if (r && C.inArray(o, r) > -1) i && i.push(o);
                else if (l = ae(o), a = me(f.appendChild(o), "script"), l && ye(a), n)
                for (c = 0; o = a[c++];) ve.test(o.type || "") && n.push(o);
            return f
        }
        var we = /^key/,
            Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
            return !0
        }

        function Se() {
            return !1
        }

        function Ee(e, t) {
            return e === function() {
                try {
                    return b.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function _e(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) _e(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                C.event.add(this, t, i, r, n)
            })
        }

        function je(e, t, n) {
            n ? (J.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = s.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && (J.set(this, t, {
                        value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && C.event.add(e, t, ke)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, v, g = J.get(e);
                if (Y(e))
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(oe, i), n.guid || (n.guid = C.guid++), (u = g.events) || (u = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(M) || [""]).length; l--;) p = v = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, c = C.extend({
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[p] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, v, g = J.hasData(e) && J.get(e);
                if (g && (u = g.events)) {
                    for (l = (t = (t || "").match(M) || [""]).length; l--;)
                        if (p = v = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = C.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) C.event.remove(e, p + t[l], n, r, !0);
                    C.isEmptyObject(u) && J.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = new Array(arguments.length),
                    u = C.event.fix(e),
                    l = (J.get(this, "events") || Object.create(null))[u.type] || [],
                    c = C.event.special[u.type] || {};
                for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                    for (a = C.event.handlers.call(this, u, l), t = 0;
                        (i = a[t++]) && !u.isPropagationStopped();)
                        for (u.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, u), u.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length), a[i] && o.push(r);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && D(t, "input") && je(t, "click", ke), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && D(t, "input") && je(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return pe.test(t.type) && t.click && D(t, "input") && J.get(t, "click") || D(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return je(this, e, Ee), !1
                },
                trigger: function() {
                    return je(this, e), !0
                },
                delegateType: t
            }
        }), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), C.fn.extend({
            on: function(e, t, n, r) {
                return _e(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return _e(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                    C.event.remove(this, e, n, t)
                })
            }
        });
        var De = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Le(e, t) {
            return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Oe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function qe(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (s = J.get(e).events))
                    for (i in J.remove(t, "handle events"), s)
                        for (n = 0, r = s[i].length; n < r; n++) C.event.add(t, i, s[i][n]);
                K.hasData(e) && (o = K.access(e), a = C.extend({}, o), K.set(t, a))
            }
        }

        function Ie(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Me(e, t, n, r) {
            t = u(t);
            var i, o, a, s, l, c, f = 0,
                d = e.length,
                p = d - 1,
                h = t[0],
                v = m(h);
            if (v || d > 1 && "string" == typeof h && !g.checkClone && Ae.test(h)) return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r)
            });
            if (d && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = (a = C.map(me(i, "script"), Oe)).length; f < d; f++) l = i, f !== p && (l = C.clone(l, !0, !0), s && C.merge(a, me(l, "script"))), n.call(e[f], l, f);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, C.map(a, He), f = 0; f < s; f++) l = a[f], ve.test(l.type || "") && !J.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : w(l.textContent.replace(Ne, ""), l, c))
            }
            return e
        }

        function Pe(e, t, n) {
            for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(me(r)), r.parentNode && (n && ae(r) && ye(me(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                    u = ae(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = me(s), r = 0, i = (o = me(e)).length; r < i; r++) Ie(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || me(e), a = a || me(s), r = 0, i = o.length; r < i; r++) qe(o[r], a[r]);
                    else qe(e, s);
                return (a = me(s, "script")).length > 0 && ye(a, !u && me(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Y(n)) {
                        if (t = n[J.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[J.expando] = void 0
                        }
                        n[K.expando] && (n[K.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return Pe(this, e, !0)
            },
            remove: function(e) {
                return Pe(this, e)
            },
            text: function(e) {
                return z(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Me(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return z(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Me(this, arguments, function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), l.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            $e = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Fe = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r
            },
            Be = new RegExp(ie.join("|"), "i");

        function We(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !g.pixelBoxStyles() && Re.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function ze(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), oe.removeChild(l), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, a, s, u, l = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(g, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), u
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var e, t, r, i;
                    return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height) > 3, oe.removeChild(e)), s
                }
            }))
        }();
        var Ue = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ve = {};

        function Ge(e) {
            var t = C.cssProps[e] || Ve[e];
            return t || (e in Xe ? e : Ve[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                    if ((e = Ue[n] + t) in Xe) return e
            }(e) || e)
        }
        var Ye = /^(none|table(?!-c[ea]).+)/,
            Qe = /^--/,
            Je = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function et(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + ie[a], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (u -= C.css(e, "border" + ie[a] + "Width", !0, i))) : (u += C.css(e, "padding" + ie[a], !0, i), "padding" !== n ? u += C.css(e, "border" + ie[a] + "Width", !0, i) : s += C.css(e, "border" + ie[a] + "Width", !0, i));
            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
        }

        function tt(e, t, n) {
            var r = $e(e),
                i = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                o = i,
                a = We(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && D(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function nt(e, t, n, r, i) {
            return new nt.prototype.init(e, t, n, r, i)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = G(t),
                        u = Qe.test(t),
                        l = e.style;
                    if (u || (t = Ge(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = G(t);
                return Qe.test(t) || (t = Ge(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), C.each(["height", "width"], function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Fe(e, Je, function() {
                        return tt(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = $e(e),
                        a = !g.scrollboxSize() && "absolute" === o.position,
                        s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                        u = r ? et(e, t, r, s, o) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), u && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Ze(0, n, u)
                }
            }
        }), C.cssHooks.marginLeft = ze(g.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = Ze)
        }), C.fn.extend({
            css: function(e, t) {
                return z(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), C.Tween = nt, nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
            }
        }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = nt.prototype.init, C.fx.step = {};
        var rt, it, ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function st() {
            it && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval), C.fx.tick())
        }

        function ut() {
            return n.setTimeout(function() {
                rt = void 0
            }), rt = Date.now()
        }

        function lt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ct(e, t, n) {
            for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function ft(e, t, n) {
            var r, i, o = 0,
                a = ft.prefilters.length,
                s = C.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                    return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (! function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, l.opts.specialEasing); o < a; o++)
                if (r = ft.prefilters[o].call(l, e, c, l.opts)) return m(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(c, ct, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        C.Animation = C.extend(ft, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    m(e) ? (t = e, e = ["*"]) : e = e.match(M);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                        d = this,
                        p = {},
                        h = e.style,
                        v = e.nodeType && ue(e),
                        g = J.get(e, "fxshow");
                    for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, d.always(function() {
                            d.always(function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (i = t[r], ot.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[r]) continue;
                                v = !0
                            }
                            p[r] = g && g[r] || C.style(e, r)
                        } if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = J.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (de([e], !0), l = e.style.display || l, c = C.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (d.done(function() {
                                h.display = l
                            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            })), u = !1, p) u || (g ? "hidden" in g && (v = g.hidden) : g = J.access(e, "fxshow", {
                            display: l
                        }), o && (g.hidden = !v), v && de([e], !0), d.done(function() {
                            for (r in v || de([e]), J.remove(e, "fxshow"), p) C.style(e, r, p[r])
                        })), u = ct(v ? g[r] : 0, r, d), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || m(e) && e,
                    duration: e,
                    easing: n && t || t && !m(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ue).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = C.isEmptyObject(e),
                        o = C.speed(t, n, r),
                        a = function() {
                            var t = ft(this, C.extend({}, e), o);
                            (i || J.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = C.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || C.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = C.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
                }
            }), C.each({
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), rt = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                it || (it = !0, st())
            }, C.fx.stop = function() {
                it = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
            }();
        var dt, pt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return z(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), dt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = pt[t] || C.find.attr;
            pt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function gt(e) {
            return (e.match(M) || []).join(" ")
        }

        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return z(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (m(e)) return this.each(function(t) {
                    C(this).addClass(e.call(this, t, mt(this)))
                });
                if ((t = yt(e)).length)
                    for (; n = this[u++];)
                        if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = gt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (m(e)) return this.each(function(t) {
                    C(this).removeClass(e.call(this, t, mt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; n = this[u++];)
                        if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            i !== (s = gt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
                    C(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function() {
                    var t, i, o, a;
                    if (r)
                        for (i = 0, o = C(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var bt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = m(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : gt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, g.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), g.focusin = "onfocusin" in n;
        var xt = /^(?:focusinfocus|focusoutblur)$/,
            wt = function(e) {
                e.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(e, t, r, i) {
                var o, a, s, u, l, c, f, d, h = [r || b],
                    v = p.call(e, "type") ? e.type : e,
                    g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = d = s = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (v = (g = v.split(".")).shift(), g.sort()), l = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), f = C.event.special[v] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!i && !f.noBubble && !y(r)) {
                        for (u = f.delegateType || v, xt.test(u + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (r.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0;
                        (a = h[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? u : f.bindType || v, (c = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && Y(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = v, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Y(r) || l && m(r[v]) && !y(r) && ((s = r[l]) && (r[l] = null), C.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, wt), r[v](), e.isPropagationStopped() && d.removeEventListener(v, wt), C.event.triggered = void 0, s && (r[l] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), g.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = J.access(r, t);
                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = J.access(r, t) - 1;
                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                }
            }
        });
        var Tt = n.location,
            Ct = {
                guid: Date.now()
            },
            kt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var St = /\[\]$/,
            Et = /\r?\n/g,
            _t = /^(?:submit|button|image|reset|file)$/i,
            jt = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) C.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== T(t)) r(e, t);
            else
                for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
        }
        C.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = m(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) Dt(n, e[n], t, i);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && jt.test(this.nodeName) && !_t.test(e) && (this.checked || !pe.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        });
        var At = /%20/g,
            Nt = /#.*$/,
            Lt = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            It = {},
            Mt = {},
            Pt = "*/".concat("*"),
            Rt = b.createElement("a");

        function $t(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(M) || [];
                if (m(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Ft(e, t, n, r) {
            var i = {},
                o = e === Mt;

            function a(s) {
                var u;
                return i[s] = !0, C.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                }), u
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function Bt(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        Rt.href = Tt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Pt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
            },
            ajaxPrefilter: $t(It),
            ajaxTransport: $t(Mt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, a, s, u, l, c, f, d, p = C.ajaxSetup({}, t),
                    h = p.context || p,
                    v = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                    g = C.Deferred(),
                    m = C.Callbacks("once memory"),
                    y = p.statusCode || {},
                    x = {},
                    w = {},
                    T = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!a)
                                    for (a = {}; t = Ot.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) k.always(e[k.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), S(0, t), this
                        }
                    };
                if (g.promise(k), p.url = ((e || p.url || Tt.href) + "").replace(qt, Tt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
                    u = b.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Ft(It, p, t, k), l) return k;
                for (f in (c = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), i = p.url.replace(Nt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (d = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (kt.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(Lt, "$1"), d = (kt.test(i) ? "&" : "?") + "_=" + Ct.guid++ + d), p.url = i + d), p.ifModified && (C.lastModified[i] && k.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && k.setRequestHeader("If-None-Match", C.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l)) return k.abort();
                if (T = "abort", m.add(p.complete), k.done(p.success), k.fail(p.error), r = Ft(Mt, p, t, k)) {
                    if (k.readyState = 1, c && v.trigger("ajaxSend", [k, p]), l) return k;
                    p.async && p.timeout > 0 && (s = n.setTimeout(function() {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        l = !1, r.send(x, S)
                    } catch (e) {
                        if (l) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, a, u) {
                    var f, d, b, x, w, T = t;
                    l || (l = !0, s && n.clearTimeout(s), r = void 0, o = u || "", k.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                } if (u[0] in n) o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o]
                    }(p, k, a)), !f && C.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), x = function(e, t, n, r) {
                        var i, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, x, k, f), f ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = k.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, d = x.data, f = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", f ? g.resolveWith(h, [d, T, k]) : g.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, c && v.trigger(f ? "ajaxSuccess" : "ajaxError", [k, p, f ? d : b]), m.fireWith(h, [k, T]), c && (v.trigger("ajaxComplete", [k, p]), --C.active || C.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function(e, t) {
            C[t] = function(e, n, r, i) {
                return m(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        }), C.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return m(e) ? this.each(function(t) {
                    C(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = C(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = m(e);
                return this.each(function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Wt = {
                0: 200,
                1223: 204
            },
            zt = C.ajaxSettings.xhr();
        g.cors = !!zt && "withCredentials" in zt, g.ajax = zt = !!zt, C.ajaxTransport(function(e) {
            var t, r;
            if (g.cors || zt && !e.crossDomain) return {
                send: function(i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, i) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Ut = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || C.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return a || C.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), a && m(o) && o(a[0]), a = o = void 0
            }), "script"
        }), g.createHTMLDocument = function() {
            var e = b.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), i = A.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
            var r, i, o
        }, C.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && C.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, function(t) {
                return e === t.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = C.css(e, "position"),
                    c = C(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
            }
        }, C.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    C.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - C.css(r, "marginTop", !0),
                        left: t.left - i.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || oe
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return z(this, function(e, r, i) {
                    var o;
                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), C.each(["top", "left"], function(e, t) {
            C.cssHooks[t] = ze(g.pixelPosition, function(e, n) {
                if (n) return n = We(e, t), Re.test(n) ? C(e).position()[t] + "px" : n
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                C.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(this, function(t, n, i) {
                        var o;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, s) : C.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = m, C.isWindow = y, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Vt, "")
        }, void 0 === (r = function() {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Gt = n.jQuery,
            Yt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Yt), e && n.jQuery === C && (n.jQuery = Gt), C
        }, void 0 === i && (n.jQuery = n.$ = C), C
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var r = function() {
            function t(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.init(e)
            }
            return n(t, [{
                key: "init",
                value: function(t) {
                    var n = this;
                    t.map(function(t, r) {
                        var i = e(r);
                        i.find(".accordion__handle").on("click", function(e) {
                            e.preventDefault(), i.hasClass("expanded") ? n._collapseItem(i) : n._expandItem(i)
                        })
                    })
                }
            }, {
                key: "_expandItem",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                    t.addClass("expanding"), e(".accordion__content", t).slideDown(function() {
                        t.addClass("expanded"), t.removeClass("expanding"), n()
                    })
                }
            }, {
                key: "_collapseItem",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                    t.removeClass("expanded"), e(".accordion__content", t).stop().slideUp(function() {
                        n()
                    })
                }
            }, {
                key: "expandAll",
                value: function() {
                    var t = this;
                    _$items.get(this).map(function(n, r) {
                        t._expandItem(e(r))
                    })
                }
            }, {
                key: "collapseAll",
                value: function() {
                    var t = this;
                    _$items.get(this).map(function(n, r) {
                        t._collapseItem(e(r))
                    })
                }
            }]), t
        }();
        t.default = r
    }).call(this, n(0))
}, function(e, t) {
    function n() {}
    n.prototype = {
        on: function(e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({
                fn: t,
                ctx: n
            }), this
        },
        once: function(e, t, n) {
            var r = this;

            function i() {
                r.off(e, i), t.apply(n, arguments)
            }
            return i._ = t, this.on(e, i, n)
        },
        emit: function(e) {
            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
            return this
        },
        off: function(e, t) {
            var n = this.e || (this.e = {}),
                r = n[e],
                i = [];
            if (r && t)
                for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
            return i.length ? n[e] = i : delete n[e], this
        }
    }, e.exports = n, e.exports.TinyEmitter = n
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = a(n(16)),
            o = a(n(1));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function() {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.parameters = {}, this.template = e("#accordionTemplate").html()
            }
            return r(t, [{
                key: "filter",
                value: function(t) {
                    var n = JSON.parse(e("#initiativeData").html());
                    if ("community" === t) {
                        for (var r = [], i = e(".persona-item__button[data-target=Community]").data("refs"), o = 0; o < i.length; o++) {
                            for (var a = [], s = {}, u = 0; u < n.community.length; u++) n.community[u].category === i[o].category && a.push(n.community[u]);
                            s.image = i[o].icon, s.text = i[o].text, s.list = a, r.push(s)
                        }
                        this.render(r, !1)
                    } else if ("individual" === t) {
                        this.getSelection();
                        for (var l = n.individual, c = [], f = 0; f < this.parameters.needs.length; f++) {
                            for (var d = [], p = {}, h = 0; h < l.length; h++) {
                                var v = !0;
                                if (l[h].needs.sort().toString() === this.parameters.needs[f].toString()) {
                                    for (var g in this.parameters) {
                                        if ("dependents" === g) {
                                            var m = this.parameters[g].length ? this.parameters[g] : ["NA"];
                                            if (l[h][g].sort().toString() === m.sort().toString() || "NA" === l[h][g].sort().toString()) continue;
                                            v = !1;
                                            break
                                        }
                                        if ("needs" !== g) {
                                            if (l[h][g] === this.parameters[g] || "NA" === l[h][g] || l[h][g].indexOf(this.parameters[g]) >= 0) continue;
                                            v = !1;
                                            break
                                        }
                                    }
                                    v && d.push(l[h])
                                }
                            }
                            p.image = e("input[value=" + this.parameters.needs[f] + "]").parent().data("icon"), p.text = e("input[value=" + this.parameters.needs[f] + "]").parent().find("p").text(), p.list = d, c.push(p)
                        }
                        this.render(c)
                    } else {
                        this.getSelection("business");
                        for (var y = n.business, b = [], x = 0; x < this.parameters.needs.length; x++) {
                            for (var w = [], T = {}, C = 0; C < y.length; C++) {
                                var k = !0;
                                if (y[C].needs.sort().toString() === this.parameters.needs[x].toString()) {
                                    for (var S in this.parameters)
                                        if ("needs" !== S) {
                                            if (y[C][S] === this.parameters[S] || "NA" === y[C][S] || y[C][S].indexOf(this.parameters[S]) >= 0) continue;
                                            k = !1;
                                            break
                                        } k && w.push(y[C])
                                }
                            }
                            T.image = e("input[value=" + this.parameters.needs[x] + "]").parent().data("icon"), T.text = e("input[value=" + this.parameters.needs[x] + "]").parent().find("p").text(), T.list = w, b.push(T)
                        }
                        this.render(b)
                    }
                }
            }, {
                key: "render",
                value: function(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = "";
                    r += i.default.template(this.template)(t), e(".section__result-list > ul").html(r), e(".accordion").map(function(t, n) {
                        new o.default(e(n))
                    }), n && this.generateTags()
                }
            }, {
                key: "generateTags",
                value: function() {
                    var t = [];
                    for (var n in this.parameters)
                        if ("NA" !== this.parameters[n])
                            if ("dependents" === n) {
                                if (this.parameters[n].length)
                                    for (var r = 0; r < this.parameters[n].length; r++) {
                                        var i = {};
                                        i.label = e("input[type=checkbox][value=" + this.parameters[n][r] + "]").next().text(), i.type = "normal", t.push(i)
                                    }
                            } else if ("needs" === n) {
                        if (this.parameters[n].length)
                            for (var o = 0; o < this.parameters[n].length; o++) {
                                var a = {};
                                a.label = e("input[type=checkbox][value=" + this.parameters[n][o] + "]").next().find("span").text(), a.type = "needs", t.push(a)
                            }
                    } else if ("personalEarning" === n || "householdEarning" === n) {
                        if (this.parameters[n].length) {
                            var s = {};
                            s.label = this.mapIncomeLabel(parseFloat(e("input[name=" + n + "]").val())), s.type = "normal", t.push(s)
                        }
                    } else if (this.parameters[n]) {
                        var u = {};
                        u.label = e("option[value=" + this.parameters[n]).text(), u.type = "normal", t.push(u)
                    }
                    for (var l = '<ul class="section__summary--selection">', c = 0; c < t.length; c++) l += '<li class="' + t[c].type + '"><span>' + t[c].label + "</span></li>";
                    l += "</ul>", e(".section__summary .section__summary--selection").length && e(".section__summary .section__summary--selection").remove(), e(".section__summary").append(l), e(".section__summary .section__summary--selection li span").matchHeight()
                }
            }, {
                key: "getSelection",
                value: function() {
                    var t = this;
                    if ("individual" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "individual")) {
                        e("#questionsIndividual .active select").map(function(n, r) {
                            t.parameters[e(r).attr("name")] = e(r).val()
                        }), e("#questionsIndividual .text-field.active").length ? e("#questionsIndividual .active input[type=number]").map(function(n, r) {
                            var i = "";
                            i = "personalEarning" === e(r).attr("name") ? t.mapPersonalIncome(parseFloat(e(r).val())) : t.mapHouseholdIncome(parseFloat(e(r).val())), t.parameters[e(r).attr("name")] = i
                        }) : this.parameters.personalEarning = "NA", e("#questionsIndividual .combo-box").map(function(n, r) {
                            var i = [];
                            e("input[type=checkbox]:checked", e(r)).map(function(t, n) {
                                i.push(e(n).val())
                            }), t.parameters[e("input[type=checkbox]", e(r)).attr("name")] = i
                        });
                        var n = [];
                        e("#needsIndividual input[type=checkbox]:checked").length ? e("#needsIndividual .needs-checkbox").map(function(t, r) {
                            e("input[type=checkbox]", e(r)).prop("checked") && n.push(e("input[type=checkbox]", e(r)).val())
                        }) : e("#needsIndividual .needs-checkbox").map(function(t, r) {
                            n.push(e("input[type=checkbox]", e(r)).val())
                        }), this.parameters[e("#needsIndividual input[type=checkbox]").attr("name")] = n
                    } else {
                        e("#questionsBusiness .active select").map(function(n, r) {
                            t.parameters[e(r).attr("name")] = e(r).val()
                        });
                        var r = [];
                        e("#needsBusiness input[type=checkbox]:checked").length ? e("#needsBusiness .needs-checkbox").map(function(t, n) {
                            e("input[type=checkbox]", e(n)).prop("checked") && r.push(e("input[type=checkbox]", e(n)).val())
                        }) : e("#needsBusiness .needs-checkbox").map(function(t, n) {
                            r.push(e("input[type=checkbox]", e(n)).val())
                        }), this.parameters[e("#needsBusiness input[type=checkbox]").attr("name")] = r
                    }
                }
            }, {
                key: "mapIncomeLabel",
                value: function(e) {
                    return e < 2209 ? "RM0 - RM2,208" : e < 2501 ? "RM2,209 - RM2,500" : e < 4001 ? "RM2,501 - RM4,000" : e < 4850 ? "RM4,001 - RM4,849" : e < 5001 ? "RM4,850 - RM5,000" : e < 10960 ? "RM5,001 - RM10,959" : "> RM10,959"
                }
            }, {
                key: "mapPersonalIncome",
                value: function(e) {
                    return e < 2209 ? "I7LO1" : e < 2501 ? "I7LO2" : e < 4001 ? "I7LO3" : e < 4850 ? "I7LO4" : e < 5001 ? "I7MID1" : e < 10960 ? "I7MID2" : "I7HI"
                }
            }, {
                key: "mapHouseholdIncome",
                value: function(e) {
                    return e < 2209 ? "I8LO1" : e < 2501 ? "I8LO2" : e < 4001 ? "I8LO3" : e < 4850 ? "I8LO4" : e < 5001 ? "I8MID1" : e < 10960 ? "I8MID2" : "I8HI"
                }
            }]), t
        }();
        t.default = s
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    n(5), n(6)
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    var r = v(n(0));
    n(7);
    var i = n(2),
        o = v(n(8)),
        a = v(n(9)),
        s = v(n(10)),
        u = v(n(11)),
        l = v(n(12)),
        c = v(n(1)),
        f = v(n(13)),
        d = v(n(14)),
        p = v(n(15)),
        h = v(n(3));

    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(0, r.default)(function() {
        var e = .01 * window.innerHeight;
        if (document.documentElement.style.setProperty("--vh", e + "px"), window.addEventListener("resize", function() {
                var e = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", e + "px")
            }), window.emitter = new i.TinyEmitter, (0, o.default)(), (0, r.default)(".banner__directive").on("click", function(e) {
                e.preventDefault(), (0, r.default)("html, body").stop(!0, !0).animate({
                    scrollTop: (0, r.default)(".tabs").offset().top
                }, 500)
            }), (0, r.default)(".tabs").length && (0, r.default)(".tabs").map(function(e, t) {
                new f.default((0, r.default)(t))
            }), (0, r.default)(".accordion").length && (0, r.default)(".accordion").map(function(e, t) {
                new c.default((0, r.default)(t))
            }), (0, r.default)(".combo-box").length && (0, r.default)(".combo-box").map(function(e, t) {
                new d.default((0, r.default)(t))
            }), (0, r.default)(".eyd-custom-select").length && (0, r.default)(".eyd-custom-select").map(function(e, t) {
                var n = (0, r.default)(t);
                new a.default(n)
            }), (0, r.default)(".side-bar").length) {
            var t = (0, r.default)(".side-bar").offset().top - 60;
            (0, r.default)(window).on("scroll", function() {
                (0, r.default)(window).scrollTop() >= t ? (0, r.default)(".side-bar").addClass("fixed") : (0, r.default)(".side-bar").removeClass("fixed")
            }), (0, r.default)(".side-bar").map(function(e, t) {
                new l.default((0, r.default)(t))
            })
        }(0, r.default)(".options").length && ((0, r.default)(".options").map(function(e, t) {
            (0, r.default)(".card", (0, r.default)(t)).matchHeight({
                byRow: !1
            })
        }), (0, r.default)(".options .card").map(function(e, t) {
            new u.default((0, r.default)(t))
        })), (0, r.default)(".back-to-top").length && (0, r.default)(".back-to-top").map(function(e, t) {
            new s.default((0, r.default)(t))
        }), (0, r.default)(".match-height").matchHeight(), (0, r.default)(".match-height-all").matchHeight({
            byRow: !1
        }), (0, r.default)(".section__start").length && ((0, r.default)("button.start").on("click", function(e) {
            e.preventDefault(), (0, r.default)(this).closest(".section__start").fadeOut(300, function() {
                (0, r.default)(".section__persona").fadeIn(300)
            })
        }), (0, r.default)(".persona-item").map(function(e, t) {
            new p.default((0, r.default)(t))
        }), (0, r.default)("select[name=maritalStatus]").on("change", function() {
            "I4SGL" === (0, r.default)(this).val() ? (0, r.default)("input[name=householdEarning]").parent().hasClass("active") ? (0, r.default)("input[name=householdEarning]").parent().fadeOut(300, function() {
                (0, r.default)("input[name=personalEarning]").parent().fadeIn(300).addClass("active")
            }).removeClass("active") : (0, r.default)("input[name=personalEarning]").parent().fadeIn(300).addClass("active") : "I4MRD" === (0, r.default)(this).val() ? (0, r.default)("input[name=personalEarning]").parent().hasClass("active") ? (0, r.default)("input[name=personalEarning]").parent().fadeOut(300, function() {
                (0, r.default)("input[name=householdEarning]").parent().fadeIn(300).addClass("active")
            }).removeClass("active") : (0, r.default)("input[name=householdEarning]").parent().fadeIn(300).addClass("active") : ((0, r.default)("input[name=personalEarning]").parent().hasClass("active") && (0, r.default)("input[name=personalEarning]").parent().fadeOut(300).removeClass("active"), (0, r.default)("input[name=householdEarning]").parent().hasClass("active") && (0, r.default)("input[name=householdEarning]").parent().fadeOut(300).removeClass("active"))
        }), (0, r.default)("a.cta--next").on("click", function(e) {
            e.preventDefault();
            var t = (0, r.default)(this);
            t.closest(".section").fadeOut(300, function() {
                t.closest(".section").next().fadeIn(300, function() {
                    (0, r.default)(".match-height").matchHeight._update()
                })
            })
        }), (0, r.default)("a.cta--filter").on("click", function(e) {
            e.preventDefault();
            var t = (0, r.default)(this);
            t.closest(".section").fadeOut(300, function() {
                (0, r.default)("#initiativesResults").fadeIn(300);
                var e = new h.default;
                "individual" === t.closest(".section").data("persona") ? e.filter("individual") : "business" === t.closest(".section").data("persona") && e.filter("business")
            })
        }))
    })
}, function(e, t, n) {
    var r, i, o;
    ! function(a) {
        "use strict";
        i = [n(0)], void 0 === (o = "function" == typeof(r = function(e) {
            var t = -1,
                n = -1,
                r = function(e) {
                    return parseFloat(e) || 0
                },
                i = function(t) {
                    var n = e(t),
                        i = null,
                        o = [];
                    return n.each(function() {
                        var t = e(this),
                            n = t.offset().top - r(t.css("margin-top")),
                            a = o.length > 0 ? o[o.length - 1] : null;
                        null === a ? o.push(t) : Math.floor(Math.abs(i - n)) <= 1 ? o[o.length - 1] = a.add(t) : o.push(t), i = n
                    }), o
                },
                o = function(t) {
                    var n = {
                        byRow: !0,
                        property: "height",
                        target: null,
                        remove: !1
                    };
                    return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
                },
                a = e.fn.matchHeight = function(t) {
                    var n = o(t);
                    if (n.remove) {
                        var r = this;
                        return this.css(n.property, ""), e.each(a._groups, function(e, t) {
                            t.elements = t.elements.not(r)
                        }), this
                    }
                    return this.length <= 1 && !n.target ? this : (a._groups.push({
                        elements: this,
                        options: n
                    }), a._apply(this, n), this)
                };
            a.version = "0.7.2", a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._rows = i, a._parse = r, a._parseOptions = o, a._apply = function(t, n) {
                var s = o(n),
                    u = e(t),
                    l = [u],
                    c = e(window).scrollTop(),
                    f = e("html").outerHeight(!0),
                    d = u.parents().filter(":hidden");
                return d.each(function() {
                    var t = e(this);
                    t.data("style-cache", t.attr("style"))
                }), d.css("display", "block"), s.byRow && !s.target && (u.each(function() {
                    var t = e(this),
                        n = t.css("display");
                    "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), t.data("style-cache", t.attr("style")), t.css({
                        display: n,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px",
                        overflow: "hidden"
                    })
                }), l = i(u), u.each(function() {
                    var t = e(this);
                    t.attr("style", t.data("style-cache") || "")
                })), e.each(l, function(t, n) {
                    var i = e(n),
                        o = 0;
                    if (s.target) o = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && i.length <= 1) return void i.css(s.property, "");
                        i.each(function() {
                            var t = e(this),
                                n = t.attr("style"),
                                r = t.css("display");
                            "inline-block" !== r && "flex" !== r && "inline-flex" !== r && (r = "block");
                            var i = {
                                display: r
                            };
                            i[s.property] = "", t.css(i), t.outerHeight(!1) > o && (o = t.outerHeight(!1)), n ? t.attr("style", n) : t.css("display", "")
                        })
                    }
                    i.each(function() {
                        var t = e(this),
                            n = 0;
                        s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (n += r(t.css("border-top-width")) + r(t.css("border-bottom-width")), n += r(t.css("padding-top")) + r(t.css("padding-bottom"))), t.css(s.property, o - n + "px"))
                    })
                }), d.each(function() {
                    var t = e(this);
                    t.attr("style", t.data("style-cache") || null)
                }), a._maintainScroll && e(window).scrollTop(c / f * e("html").outerHeight(!0)), this
            }, a._applyDataApi = function() {
                var t = {};
                e("[data-match-height], [data-mh]").each(function() {
                    var n = e(this),
                        r = n.attr("data-mh") || n.attr("data-match-height");
                    t[r] = r in t ? t[r].add(n) : n
                }), e.each(t, function() {
                    this.matchHeight(!0)
                })
            };
            var s = function(t) {
                a._beforeUpdate && a._beforeUpdate(t, a._groups), e.each(a._groups, function() {
                    a._apply(this.elements, this.options)
                }), a._afterUpdate && a._afterUpdate(t, a._groups)
            };
            a._update = function(r, i) {
                if (i && "resize" === i.type) {
                    var o = e(window).width();
                    if (o === t) return;
                    t = o
                }
                r ? -1 === n && (n = setTimeout(function() {
                    s(i), n = -1
                }, a._throttle)) : s(i)
            }, e(a._applyDataApi);
            var u = e.fn.on ? "on" : "bind";
            e(window)[u]("load", function(e) {
                a._update(!1, e)
            }), e(window)[u]("resize orientationchange", function(e) {
                a._update(!0, e)
            })
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }()
}, function(e, t, n) {
    "use strict";
    var r = "bfred-it:object-fit-images",
        i = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
        o = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        a = "object-fit" in o.style,
        s = "object-position" in o.style,
        u = "background-size" in o.style,
        l = "string" == typeof o.currentSrc,
        c = o.getAttribute,
        f = o.setAttribute,
        d = !1;

    function p(e, t, n) {
        var r = function(e, t) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
        }(t || 1, n || 0);
        c.call(e, "src") !== r && f.call(e, "src", r)
    }

    function h(e, t) {
        e.naturalWidth ? t(e) : setTimeout(h, 100, e, t)
    }

    function v(e) {
        var t = function(e) {
                for (var t, n = getComputedStyle(e).fontFamily, r = {}; null !== (t = i.exec(n));) r[t[1]] = t[2];
                return r
            }(e),
            n = e[r];
        if (t["object-fit"] = t["object-fit"] || "fill", !n.img) {
            if ("fill" === t["object-fit"]) return;
            if (!n.skipTest && a && !t["object-position"]) return
        }
        if (!n.img) {
            n.img = new Image(e.width, e.height), n.img.srcset = c.call(e, "data-ofi-srcset") || e.srcset, n.img.src = c.call(e, "data-ofi-src") || e.src, f.call(e, "data-ofi-src", e.src), e.srcset && f.call(e, "data-ofi-srcset", e.srcset), p(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");
            try {
                ! function(e) {
                    var t = {
                        get: function(t) {
                            return e[r].img[t || "src"]
                        },
                        set: function(t, n) {
                            return e[r].img[n || "src"] = t, f.call(e, "data-ofi-" + n, t), v(e), t
                        }
                    };
                    Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
                        get: function() {
                            return t.get("currentSrc")
                        }
                    }), Object.defineProperty(e, "srcset", {
                        get: function() {
                            return t.get("srcset")
                        },
                        set: function(e) {
                            return t.set(e, "srcset")
                        }
                    })
                }(e)
            } catch (e) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }! function(e) {
            if (e.srcset && !l && window.picturefill) {
                var t = window.picturefill._;
                e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                    reselect: !0
                }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
                    reselect: !0
                })), e.currentSrc = e[t.ns].curSrc || e.src
            }
        }(n.img), e.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? h(n.img, function() {
            n.img.naturalWidth > e.width || n.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto"
        }) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), h(n.img, function(t) {
            p(e, t.naturalWidth, t.naturalHeight)
        })
    }

    function g(e, t) {
        var n = !d && !e;
        if (t = t || {}, e = e || "img", s && !t.skipTest || !u) return !1;
        "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
        for (var i = 0; i < e.length; i++) e[i][r] = e[i][r] || {
            skipTest: t.skipTest
        }, v(e[i]);
        n && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && g(e.target, {
                skipTest: t.skipTest
            })
        }, !0), d = !0, e = "img"), t.watchMQ && window.addEventListener("resize", g.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    g.supportsObjectFit = a, g.supportsObjectPosition = s,
        function() {
            function e(e, t) {
                return e[r] && e[r].img && ("src" === t || "srcset" === t) ? e[r].img : e
            }
            s || (HTMLImageElement.prototype.getAttribute = function(t) {
                return c.call(e(this, t), t)
            }, HTMLImageElement.prototype.setAttribute = function(t, n) {
                return f.call(e(this, t), t, String(n))
            })
        }(), e.exports = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = o(n(0));
    o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e(t) {
            var n = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = (0, i.default)("select", t);
            this.isShown = !1, this.selectedOption = {};
            var o = (0, i.default)('<div class="eyd-custom-select__custom-dropdown" aria-hidden="true"></div>'),
                a = (0, i.default)('<button class="custom-trigger" type="button"><span class="label"></span><span class="icon icon-angle-down"></span></button>'),
                s = a.find(".label"),
                u = (0, i.default)('<ul class="custom-list"></ul>');
            this.$selector = t, this.$select = r, this.$customDropdown = o, this.$triggerLabel = s, this.$customList = u, a.appendTo(o), r.find("option").map(function(e, t) {
                var o = (0, i.default)(t);
                0 == e && (n.selectedOption.value = o.val(), n.selectedOption.name = o.text()), o.attr("selected") && (n.selectedOption.value = o.val(), n.selectedOption.name = o.text());
                var a = (0, i.default)('<li data-value="' + o.val() + '"></li>'),
                    s = (0, i.default)('<button type="button">' + o.text() + "</button>");
                s.appendTo(a), a.appendTo(u), s.on("click", function(e) {
                    n.selectedOption.value = o.val(), n.selectedOption.name = o.text(), n.updateDropdown(), n.updateSelectField(), n.hideList(), r.trigger("change")
                })
            }), this.updateDropdown(), this.updateSelectField(), u.appendTo(o), o.appendTo(t), r.on("change.customSelect", function(e) {
                null == r.val() ? (n.selectedOption.value = r.find("option").eq(0).val(), n.selectedOption.name = r.find("option").eq(0).text()) : (n.selectedOption.value = r.val(), n.selectedOption.name = r.find('option[value="' + r.val() + '"]').text()), n.updateDropdown()
            }), a.on("click", function(e) {
                e.preventDefault(), n.isShown ? n.hideList() : (window.emitter.emit("selectOpened", t), n.showList())
            }), window.emitter.on("selectOpened", function(e) {
                t != e && n.hideList()
            }), (0, i.default)(document).on("click.customFilter", function(e) {
                var t = (0, i.default)(e.target);
                t.hasClass("eyd-custom-select__custom-dropdown") || t.parents(".eyd-custom-select__custom-dropdown").length || n.hideList()
            })
        }
        return r(e, [{
            key: "showList",
            value: function() {
                this.isShown = !0, this.$customDropdown.addClass("list-shown"), this.$selector.addClass("selecting")
            }
        }, {
            key: "hideList",
            value: function() {
                this.isShown = !1, this.$customDropdown.removeClass("list-shown"), this.$selector.removeClass("selecting")
            }
        }, {
            key: "updateDropdown",
            value: function() {
                this.$customList.find(".active").removeClass("active"), this.$customList.find('[data-value="' + this.selectedOption.value + '"]').addClass("active"), this.$triggerLabel.text(this.selectedOption.name)
            }
        }, {
            key: "updateSelectField",
            value: function() {
                this.$select.val(this.selectedOption.value)
            }
        }, {
            key: "getSelectedValue",
            value: function() {
                return this.selectedOption.value
            }
        }]), e
    }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var r = function() {
            function t(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.init(e)
            }
            return n(t, [{
                key: "init",
                value: function(t) {
                    t.on("click", function(t) {
                        t.preventDefault(), e(".section__questions").length ? location.reload() : e("html, body").animate({
                            scrollTop: 0
                        }, 300)
                    })
                }
            }]), t
        }();
        t.default = r
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var r = function() {
            function t(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.init(e)
            }
            return n(t, [{
                key: "init",
                value: function(t) {
                    e("a", t).map(function(t, n) {
                        e(n).on("click", function(t) {
                            t.preventDefault();
                            var r = e(n).attr("href");
                            e(r).hasClass("active") || (e(".initiatives__group").removeClass("active"), e(r).addClass("active")), e("html, body").stop(!0, !0).animate({
                                scrollTop: e(".initiatives").offset().top - 40
                            }, 500)
                        })
                    })
                }
            }]), t
        }();
        t.default = r
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        ! function(e) {
            e && e.__esModule
        }(n(1));
        var i = function() {
            function t(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.init(e)
            }
            return r(t, [{
                key: "init",
                value: function(t) {
                    var n = e(".side-bar__nav", t),
                        r = t.closest(".initiatives__group");
                    e(".back-to-choices", t).on("click", function(t) {
                        t.preventDefault(), e("html, body").stop(!0, !0).animate({
                            scrollTop: e(".tabs").offset().top
                        }, 500)
                    }), e("li a", n).map(function(t, n) {
                        e(n).on("click", function(t) {
                            t.preventDefault(), e(n).parent().hasClass("active") || (e(n).parent().parent().find(".active").removeClass("active"), e(n).parent().addClass("active"));
                            var i = e(n).attr("href").slice(1);
                            r.find(".accordion.expanded:not([data-id=" + i + "]) .accordion__content").stop().slideUp(), r.find(".accordion.expanded:not([data-id=" + i + "])").removeClass("expanded"), r.find("[data-id=" + i + "]").hasClass("expanded") || (r.find("[data-id=" + i + "] .accordion__content").stop().slideDown(), r.find("[data-id=" + i + "]").addClass("expanded")), e("html, body").stop(!0, !0).animate({
                                scrollTop: r.find(".accordion:first-child").offset().top - 60
                            }, 500)
                        })
                    })
                }
            }]), t
        }();
        t.default = i
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var r = function() {
            function t(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n && this.init(e)
            }
            return n(t, [{
                key: "init",
                value: function(t) {
                    var n = this,
                        r = e(".tabs__nav", t);
                    e("li", r).map(function(r, i) {
                        var o = e(i),
                            a = e("a", o),
                            s = a.attr("href"),
                            u = e(s);
                        a.on("click.changeTab", function(r) {
                            r.preventDefault(), o.hasClass("active") || (n.setActive(o), u.length ? (n.showTabBody(t), n.switchToTab(u)) : n.hideTabBody(t)), "#individu" === s ? (e(".initiatives__group").removeClass("active"), e("#pendapatan1").addClass("active")) : "#peniaga" === s ? (e(".initiatives__group").removeClass("active"), e("#perusahaan").addClass("active")) : (e(".initiatives__group").removeClass("active"), e("#bantuanpekerjaan").addClass("active")), e("html, body").stop(!0, !0).animate({
                                scrollTop: e(".tabs__content").offset().top
                            }, 500)
                        })
                    })
                }
            }, {
                key: "setActive",
                value: function(e) {
                    e.siblings(".active").removeClass("active"), e.addClass("active")
                }
            }, {
                key: "switchToTab",
                value: function(e) {
                    e.siblings(".active").removeClass("active"), e.addClass("active")
                }
            }, {
                key: "hideTabBody",
                value: function(t) {
                    e(".tabs__content", t).removeClass("show"), e(".tabs__content", t).addClass("hide")
                }
            }, {
                key: "showTabBody",
                value: function(t) {
                    e(".tabs__content", t).removeClass("hide"), e(".tabs__content", t).addClass("show")
                }
            }]), t
        }();
        t.default = r
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    t.default = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = (0, r.default)(".combo-box__trigger", t),
            i = (0, r.default)(".label", n),
            o = (0, r.default)(".combo-box__options", t),
            a = (0, r.default)("ul li", o),
            s = (0, r.default)('<div class="combo-box__search"><input type="text" placeholder="Enter keyword" /></div>');
        o.prepend(s), n.on("click", function(e) {
            e.preventDefault(), t.hasClass("opened") ? (t.removeClass("opened"), s.find("input").val("").trigger("keyup")) : t.addClass("opened")
        }), a.map(function(e, t) {
            var n = (0, r.default)(t),
                a = n.attr("value");
            n.on("change", function(e) {
                var t = [],
                    s = [];
                n.is(":checked") ? "all" == a ? ((0, r.default)('.option input[type="checkbox"]', o).prop("checked", !1), i.text("Select an option")) : ((0, r.default)('input[type="checkbox"][value="all"]', o).prop("checked", !1), (0, r.default)(".option", o).map(function(e, n) {
                    var i = (0, r.default)(n),
                        o = (0, r.default)("label", i).text(),
                        a = (0, r.default)("input", i).val();
                    (0, r.default)("input", i).is(":checked") && (t.push(o), s.push(a))
                }), i.text("" + t.join(", "))) : 0 == (0, r.default)('.option input[type="checkbox"]:not([value="all"]):checked', o).length ? ((0, r.default)('input[type="checkbox"][value="all"]', o).prop("checked", !0), i.text("Select an option")) : ((0, r.default)('input[type="checkbox"][value="all"]', o).prop("checked", !1), (0, r.default)(".option", o).map(function(e, n) {
                    var i = (0, r.default)(n),
                        o = (0, r.default)("label", i).text(),
                        a = (0, r.default)("input", i).val();
                    (0, r.default)("input", i).is(":checked") && (t.push(o), s.push(a))
                }), i.text("" + t.join(", ")))
            })
        });
        var u = void 0;
        s.find("input").on("keyup", function(e) {
            var t = (0, r.default)(e.target).val().toLowerCase();
            clearTimeout(u), t.trim().length > 0 ? u = setTimeout(function() {
                a.hide(), a.map(function(e, n) {
                    var i = (0, r.default)(n);
                    i.find("label").text().toLowerCase().indexOf(t) > -1 && i.show()
                })
            }, 100) : a.show()
        }), (0, r.default)(document).on("click.comboBox", function(e) {
            var n = (0, r.default)(e.target);
            n.hasClass("combo-box") || n.parents(".combo-box").length || (t.removeClass("opened"), s.find("input").val("").trigger("keyup"))
        })
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(3));
        t.default = function t(n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var i = e("button", n);
            i.on("click", function(t) {
                t.preventDefault(), "Individual" === i.data("target") ? e(".section__persona").fadeOut(300, function() {
                    e("#questionsIndividual").fadeIn(300, function() {
                        e(".needs-checkbox label").matchHeight()
                    })
                }) : "Business" === i.data("target") ? e(".section__persona").fadeOut(300, function() {
                    e("#questionsBusiness").fadeIn(300, function() {
                        e(".needs-checkbox label").matchHeight()
                    })
                }) : e(".section__persona").fadeOut(300, function() {
                    e("#initiativesResults").fadeIn(300), (new r.default).filter("community")
                });
                var n = i.data("src");
                e(".section__summary").css("background-image", "url('" + n + "')")
            })
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var r;
    ! function() {
        "use strict";
        var i, o = {
            name: "doT",
            version: "1.1.1",
            templateSettings: {
                evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: "it",
                strip: !0,
                append: !0,
                selfcontained: !1,
                doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0,
            log: !0
        };
        o.encodeHTMLSource = function(e) {
            var t = {
                    "&": "&#38;",
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "/": "&#47;"
                },
                n = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function(e) {
                return e ? e.toString().replace(n, function(e) {
                    return t[e] || e
                }) : ""
            }
        }, i = function() {
            return this || (0, eval)("this")
        }(), e.exports ? e.exports = o : void 0 === (r = function() {
            return o
        }.call(t, n, t, e)) || (e.exports = r);
        var a = {
                append: {
                    start: "'+(",
                    end: ")+'",
                    startencode: "'+encodeHTML("
                },
                split: {
                    start: "';out+=(",
                    end: ");out+='",
                    startencode: "';out+=encodeHTML("
                }
            },
            s = /$^/;

        function u(e) {
            return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
        }
        o.template = function(e, t, n) {
            var r, l, c = (t = t || o.templateSettings).append ? a.append : a.split,
                f = 0,
                d = t.use || t.define ? function e(t, n, r) {
                    return ("string" == typeof n ? n : n.toString()).replace(t.define || s, function(e, n, i, o) {
                        return 0 === n.indexOf("def.") && (n = n.substring(4)), n in r || (":" === i ? (t.defineParams && o.replace(t.defineParams, function(e, t, i) {
                            r[n] = {
                                arg: t,
                                text: i
                            }
                        }), n in r || (r[n] = o)) : new Function("def", "def['" + n + "']=" + o)(r)), ""
                    }).replace(t.use || s, function(n, i) {
                        t.useParams && (i = i.replace(t.useParams, function(e, t, n, i) {
                            if (r[n] && r[n].arg && i) {
                                var o = (n + ":" + i).replace(/'|\\/g, "_");
                                return r.__exp = r.__exp || {}, r.__exp[o] = r[n].text.replace(new RegExp("(^|[^\\w$])" + r[n].arg + "([^\\w$])", "g"), "$1" + i + "$2"), t + "def.__exp['" + o + "']"
                            }
                        }));
                        var o = new Function("def", "return " + i)(r);
                        return o ? e(t, o, r) : o
                    })
                }(t, e, n || {}) : e;
            d = ("var out='" + (t.strip ? d.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : d).replace(/'|\\/g, "\\$&").replace(t.interpolate || s, function(e, t) {
                return c.start + u(t) + c.end
            }).replace(t.encode || s, function(e, t) {
                return r = !0, c.startencode + u(t) + c.end
            }).replace(t.conditional || s, function(e, t, n) {
                return t ? n ? "';}else if(" + u(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + u(n) + "){out+='" : "';}out+='"
            }).replace(t.iterate || s, function(e, t, n, r) {
                return t ? (f += 1, l = r || "i" + f, t = u(t), "';var arr" + f + "=" + t + ";if(arr" + f + "){var " + n + "," + l + "=-1,l" + f + "=arr" + f + ".length-1;while(" + l + "<l" + f + "){" + n + "=arr" + f + "[" + l + "+=1];out+='") : "';} } out+='"
            }).replace(t.evaluate || s, function(e, t) {
                return "';" + u(t) + "out+='"
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), r && (t.selfcontained || !i || i._encodeHTML || (i._encodeHTML = o.encodeHTMLSource(t.doNotSkipEncoded)), d = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + o.encodeHTMLSource.toString() + "(" + (t.doNotSkipEncoded || "") + "));" + d);
            try {
                return new Function(t.varname, d)
            } catch (e) {
                throw "undefined" != typeof console && console.log("Could not create a template function: " + d), e
            }
        }, o.compile = function(e, t) {
            return o.template(e, null, t)
        }
    }()
}]);