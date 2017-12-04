function Masked(e) {
    function t(e) {
        a.update(e.target.value)
    }

    function n(t) {
        if (e.onFocus || e.focusPlaceholder && r.attr("placeholder", o), e.onBlur)return void e.onBlur(t);
        r.trigger("change")
    }

    function i(t) {
        if (e.onFocus)return void e.onFocus(t);
        e.focusPlaceholder && r.attr("placeholder", e.focusPlaceholder)
    }

    var r = e.inputElement, o = r.data("placeholder") || r.attr("placeholder") || "";
    r.data("placeholder") || r.data("placeholder", r.attr("placeholder") || ""), e.inputElement = r.get(0);
    var a = textMaskCore.createTextMaskInputElement(e);
    return r.on("input", t), r.on("focus", i), r.on("blur", n), a.update(r.val()), {
        textMaskInputElement: a,
        destroy: function () {
            r.off("input", t), r.off("blur", n), r.off("focus", i)
        }
    }
}
function convertToSeconds(e) {
    var t = e.split(":");
    return 60 * +t[0] * 60 + 60 * +t[1] + +t[2]
}
function is_array(e) {
    return e instanceof Array
}
function empty(e) {
    return void 0 === e || "" === $.trim(e) || 0 === e || "0" === e || null === e || !1 === e || is_array(e) && 0 === e.length
}
function isset(e) {
    return void 0 !== e && !isNaN(e)
}
function pad(e, t) {
    var n = "000000000" + e;
    return n.substr(n.length - t)
}
function emptyErrors(e, t) {
    if (t = t || "user", $.isEmptyObject(e))return !0;
    var n = 0;
    return $.each(e, function (e, i) {
        (empty(i.level) || i.level === t) && n++
    }), !(n > 0)
}
function showErrors(e, t) {
    t = t || "user", $.isEmptyObject(e) || $.each(e, function (e, n) {
        n.level == t && log(n.text, n.level)
    })
}
function checkError(e) {
    return 0 != e.success || (0 == $("#cart-wrapper").length && e.fatal_error && log(e.fatal_error, "error", 3e3), !1)
}
function log(e, t, n) {
    if (void 0 === e)return !1;
    t = t || "error";
    var i = $("#logs");
    0 === i.length && (i = $("<div/>", {
        id: "logs",
        class: "logs"
    }).appendTo($("body"))), i.find(".logs__item").remove();
    var r = $("<div/>").addClass("logs__item logs__" + t).html(e).fadeIn(300).prependTo(i), o = setTimeout(function () {
        $(r).fadeOut(300, function () {
            $(this).remove()
        })
    }, n || 5e3);
    r.click(function () {
        $(r).fadeOut(300), clearTimeout(o)
    })
}
function declension(e, t) {
    var n, i = e % 100;
    return i >= 5 && i <= 20 ? n = t[2] : (i %= 10, n = 1 === i ? t[0] : i >= 2 && i <= 4 ? t[1] : t[2]), n
}
function priceFormat(e, t) {
    return t || e > 0 ? e + " руб" : "Бесплатно"
}
function number(e) {
    return e.replace(/[^0-9]/gim, "")
}
function formatPrice(e, t, n, i) {
    var r, o, a, s, c;
    return isNaN(t = Math.abs(t)) && (t = 2), void 0 === n && (n = ","), void 0 === i && (i = "."), r = parseInt(e = (+e || 0).toFixed(t)) + "", (o = r.length) > 3 ? o %= 3 : o = 0, c = o ? r.substr(0, o) + i : "", a = r.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + i), s = t ? n + Math.abs(e - r).toFixed(t).replace(/-/, 0).slice(2) : "", c + a + s
}
function numberFormat(e, t, n, i, r) {
    var o = "\\d(?=(\\d{" + (n || 3) + "})+" + (t > 0 ? "\\D" : "$") + ")", e = e.toFixed(Math.max(0, parseInt(t)));
    return (i ? e.replace(".", i) : e).replace(new RegExp(o, "g"), "$&" + (r || ","))
}
function itemzoom() {
    $("#smaller_image .smaller").load(function () {
        $(this).parent().find(".preloader").remove(), $(this).fadeIn()
    }).each(function () {
        this.complete && $(this).load()
    });
    var e = new Image;
    e.onload = function () {
        var e = this.src;
        $("#bigimg").css({"background-image": "url(" + e + ")"}), $("#zoom").css({"background-image": "url(" + e + ")"}).removeClass("blur"), $("#bigimg").on("mouseenter touchstart", function () {
            $(this).removeClass("invisible")
        }).on("mouseout touchend", function () {
            $(this).addClass("invisible")
        }).on("mousemove", function (e) {
            $(this).removeClass("invisible");
            var t = $(this).width() / (e.pageX - $(this).offset().left),
                n = $(this).height() / (e.pageY - $(this).offset().top);
            $(this).css("background-position", 100 / t + "% " + 100 / n + "%")
        }).on("touchmove", function (e) {
            var t = $(this).width() / (e.originalEvent.touches[0].pageX - $(this).offset().left),
                n = $(this).height() / (e.originalEvent.touches[0].pageY - $(this).offset().top);
            $(this).css("background-position", 100 / t + "% " + 100 / n + "%")
        })
    }, e.src = $("#zoom").data("src")
}
function p() {
    var e = yP.getDuration();
    e > 0 && $("#video-player .progress-bar").width(yP.getCurrentTime() / e * 100 + "%")
}
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (pe.isFunction(t))return pe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return pe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (_e.test(t))return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function (e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Te) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), pe.ready())
    }

    function c(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(De, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Me.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {
                }
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function d(e, t, n, i) {
        if (Ee(e)) {
            var r, o, a = pe.expando, s = e.nodeType, c = s ? pe.cache : e, l = s ? e[a] : e[a] && a;
            if (l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof t)return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), c[l] || (c[l] = s ? {} : {toJSON: pe.noop}), "object" != typeof t && "function" != typeof t || (i ? c[l] = pe.extend(c[l], t) : c[l].data = pe.extend(c[l].data, t)), o = c[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[pe.camelCase(t)]) : r = o, r
        }
    }

    function u(e, t, n) {
        if (Ee(e)) {
            var i, r, o = e.nodeType, a = o ? pe.cache : e, s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;)delete i[t[r]];
                    if (n ? !l(i) : !pe.isEmptyObject(i))return
                }
                (n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : ue.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function p(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return pe.css(e, t, "")
            }, c = s(), l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            d = (pe.cssNumber[t] || "px" !== l && +c) && Pe.exec(pe.css(e, t));
        if (d && d[3] !== l) {
            l = l || d[3], n = n || [], d = +c || 1;
            do {
                o = o || ".5", d /= o, pe.style(e, t, d + l)
            } while (o !== (o = s() / c) && 1 !== o && --a)
        }
        return n && (d = +d || +c || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = d, i.end = r)), r
    }

    function f(e) {
        var t = Re.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, i, r = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)!t || pe.nodeName(i, t) ? o.push(i) : pe.merge(o, h(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }

    function g(e) {
        Le.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, r) {
        for (var o, a, s, c, l, d, u, p = e.length, v = f(t), y = [],
                 b = 0; b < p; b++)if ((a = e[b]) || 0 === a)if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a); else if (We.test(a)) {
            for (c = c || v.appendChild(t.createElement("div")), l = (Ne.exec(a) || ["", ""])[1].toLowerCase(), u = ze[l] || ze._default, c.innerHTML = u[1] + pe.htmlPrefilter(a) + u[2], o = u[0]; o--;)c = c.lastChild;
            if (!ue.leadingWhitespace && Be.test(a) && y.push(t.createTextNode(Be.exec(a)[0])), !ue.tbody)for (a = "table" !== l || Ge.test(a) ? "<table>" !== u[1] || Ge.test(a) ? 0 : c : c.firstChild, o = a && a.childNodes.length; o--;)pe.nodeName(d = a.childNodes[o], "tbody") && !d.childNodes.length && a.removeChild(d);
            for (pe.merge(y, c.childNodes), c.textContent = ""; c.firstChild;)c.removeChild(c.firstChild);
            c = v.lastChild
        } else y.push(t.createTextNode(a));
        for (c && v.removeChild(c), ue.appendChecked || pe.grep(h(y, "input"), g), b = 0; a = y[b++];)if (i && pe.inArray(a, i) > -1) r && r.push(a); else if (s = pe.contains(a.ownerDocument, a), c = h(v.appendChild(a), "script"), s && m(c), n)for (o = 0; a = c[o++];)qe.test(a.type || "") && n.push(a);
        return c = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return ie.activeElement
        } catch (e) {
        }
    }

    function x(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t)x(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = b; else if (!r)return e;
        return 1 === o && (a = r, r = function (e) {
            return pe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function () {
            pe.event.add(this, t, r, i, n)
        })
    }

    function _(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function $(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, r, o = pe._data(e), a = pe._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (i = 0, r = s[n].length; i < r; i++)pe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function S(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ue.noCloneEvent && t[pe.expando]) {
                r = pe._data(t);
                for (i in r.events)pe.removeEvent(t, i, r.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, $(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function T(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, a, s, c, l, d = 0, u = e.length, p = u - 1, f = t[0], m = pe.isFunction(f);
        if (m || u > 1 && "string" == typeof f && !ue.checkClone && tt.test(f))return e.each(function (r) {
            var o = e.eq(r);
            m && (t[0] = f.call(this, r, o.html())), T(o, t, n, i)
        });
        if (u && (l = v(t, e[0].ownerDocument, !1, e, i), r = l.firstChild, 1 === l.childNodes.length && (l = r), r || i)) {
            for (s = pe.map(h(l, "script"), C), a = s.length; d < u; d++)o = l, d !== p && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[d], o, d);
            if (a)for (c = s[s.length - 1].ownerDocument, pe.map(s, $), d = 0; d < a; d++)o = s[d], qe.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(c, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
            l = r = null
        }
        return e
    }

    function j(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e,
                 o = 0; null != (i = r[o]); o++)n || 1 !== i.nodeType || pe.cleanData(h(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function O(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body), i = pe.css(n[0], "display");
        return n.detach(), i
    }

    function E(e) {
        var t = ie, n = st[e];
        return n || (n = O(e, t), "none" !== n && n || (at = (at || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (at[0].contentWindow || at[0].contentDocument).document, t.write(), t.close(), n = O(e, t), at.detach()), st[e] = n), n
    }

    function M(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in _t)return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = xt.length; n--;)if ((e = xt[n] + t) in _t)return e
    }

    function A(e, t) {
        for (var n, i, r, o = [], a = 0,
                 s = e.length; a < s; a++)i = e[a], i.style && (o[a] = pe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && He(i) && (o[a] = pe._data(i, "olddisplay", E(i.nodeName)))) : (r = He(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
        for (a = 0; a < s; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function P(e, t, n) {
        var i = yt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function I(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                 a = 0; o < 4; o += 2)"margin" === n && (a += pe.css(e, n + Ie[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Ie[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Ie[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Ie[o] + "Width", !0, r)));
        return a
    }

    function H(t, n, i) {
        var r = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, a = pt(t),
            s = ue.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
        if (ie.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), o <= 0 || null == o) {
            if (o = ft(t, n, a), (o < 0 || null == o) && (o = t.style[n]), lt.test(o))return o;
            r = s && (ue.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + I(t, n, i || (s ? "border" : "content"), r, a) + "px"
    }

    function F(e, t, n, i, r) {
        return new F.prototype.init(e, t, n, i, r)
    }

    function L() {
        return e.setTimeout(function () {
            Ct = void 0
        }), Ct = pe.now()
    }

    function N(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t)n = Ie[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function q(e, t, n) {
        for (var i, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0,
                 a = r.length; o < a; o++)if (i = r[o].call(n, t, e))return i
    }

    function B(e, t, n) {
        var i, r, o, a, s, c, l, d = this, u = {}, p = e.style, f = e.nodeType && He(e), h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
            s.unqueued || c()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = pe.css(e, "display"), "inline" === ("none" === l ? pe._data(e, "olddisplay") || E(e.nodeName) : l) && "none" === pe.css(e, "float") && (ue.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ue.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)if (r = t[i], kt.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i])continue;
                f = !0
            }
            u[i] = h && h[i] || pe.style(e, i)
        } else l = void 0;
        if (pe.isEmptyObject(u)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l); else {
            h ? "hidden" in h && (f = h.hidden) : h = pe._data(e, "fxshow", {}), o && (h.hidden = !f), f ? pe(e).show() : d.done(function () {
                pe(e).hide()
            }), d.done(function () {
                var t;
                pe._removeData(e, "fxshow");
                for (t in u)pe.style(e, t, u[t])
            });
            for (i in u)a = q(f ? h[i] : 0, i, d), i in h || (h[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(e, t) {
        var n, i, r, o, a;
        for (n in e)if (i = pe.camelCase(n), r = t[i], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = pe.cssHooks[i]) && "expand" in a) {
            o = a.expand(o), delete e[i];
            for (n in o)n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function z(e, t, n) {
        var i, r, o = 0, a = z.prefilters.length, s = pe.Deferred().always(function () {
            delete c.elem
        }), c = function () {
            if (r)return !1;
            for (var t = Ct || L(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i,
                     a = 0, c = l.tweens.length; a < c; a++)l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), o < 1 && c ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {specialEasing: {}, easing: pe.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ct || L(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? l.tweens.length : 0;
                if (r)return this;
                for (r = !0; n < i; n++)l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), d = l.props;
        for (R(d, l.opts.specialEasing); o < a; o++)if (i = z.prefilters[o].call(l, e, d, l.opts))return pe.isFunction(i.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(d, q, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(c, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function W(e) {
        return pe.attr(e, "class") || ""
    }

    function G(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(Te) || [];
            if (pe.isFunction(n))for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function X(e, t, n, i) {
        function r(s) {
            var c;
            return o[s] = !0, pe.each(e[s] || [], function (e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), c
        }

        var o = {}, a = e === Yt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function V(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (i in t)void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n), e
    }

    function U(e, t, n) {
        for (var i, r, o, a, s = e.contents,
                 c = e.dataTypes; "*" === c[0];)c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (a in s)if (s[a] && s[a].test(r)) {
            c.unshift(a);
            break
        }
        if (c[0] in n) o = c[0]; else {
            for (a in n) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        if (o)return o !== c[0] && c.unshift(o), n[o]
    }

    function Y(e, t, n, i) {
        var r, o, a, s, c, l = {}, d = e.dataTypes.slice();
        if (d[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
        for (o = d.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = d.shift())if ("*" === o) o = c; else if ("*" !== c && c !== o) {
            if (!(a = l[c + " " + o] || l["* " + o]))for (r in l)if (s = r.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], d.unshift(s[1]));
                break
            }
            if (!0 !== a)if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function K(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function Q(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type)return !0;
            e = e.parentNode
        }
        return !1
    }

    function Z(e, t, n, i) {
        var r;
        if (pe.isArray(t)) pe.each(t, function (t, r) {
            n || en.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== pe.type(t)) i(e, t); else for (r in t)Z(e + "[" + r + "]", t[r], n, i)
    }

    function J() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var ne = [], ie = e.document, re = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, ce = {},
        le = ce.toString, de = ce.hasOwnProperty, ue = {}, pe = function (e, t) {
            return new pe.fn.init(e, t)
        }, fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, he = /^-ms-/, me = /-([\da-z])/gi, ge = function (e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: "1.12.0", constructor: pe, selector: "", length: 0, toArray: function () {
            return re.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
        }, pushStack: function (e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return pe.each(this, e)
        }, map: function (e) {
            return this.pushStack(pe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(re.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ae, sort: ne.sort, splice: ne.splice
    }, pe.extend = pe.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)if (null != (r = arguments[s]))for (i in r)e = a[i], n = r[i], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[i] = pe.extend(l, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + ("1.12.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === pe.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === pe.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))return !1;
            try {
                if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (e) {
                return !1
            }
            if (!ue.ownFirst)for (t in e)return de.call(e, t);
            for (t in e);
            return void 0 === t || de.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ce[le.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && pe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(he, "ms-").replace(me, ge)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var i, r = 0;
            if (n(e))for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++); else for (r in e)if (!1 === t.call(e[r], r, e[r]))break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(fe, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (se)return se.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;)e[r++] = t[i++];
            if (n !== n)for (; void 0 !== t[i];)e[r++] = t[i++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)!t(e[r], r) !== a && i.push(e[r]);
            return i
        }, map: function (e, t, i) {
            var r, o, a = 0, s = [];
            if (n(e))for (r = e.length; a < r; a++)null != (o = t(e[a], a, i)) && s.push(o); else for (a in e)null != (o = t(e[a], a, i)) && s.push(o);
            return oe.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e))return n = re.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || pe.guid++, i
        }, now: function () {
            return +new Date
        }, support: ue
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ce["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function (e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, p, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
            if (!i && ((t ? t.ownerDocument || t : L) !== E && O(t), t = t || E, D)) {
                if (11 !== m && (u = me.exec(e)))if (r = u[1]) {
                    if (9 === m) {
                        if (!(a = t.getElementById(r)))return n;
                        if (a.id === r)return n.push(a), n
                    } else if (h && (a = h.getElementById(r)) && H(t, a) && a.id === r)return n.push(a), n
                } else {
                    if (u[2])return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && b.getElementsByClassName && t.getElementsByClassName)return K.apply(n, t.getElementsByClassName(r)), n
                }
                if (b.qsa && !z[e + " "] && (!A || !A.test(e))) {
                    if (1 !== m) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = F), p = C(e), o = p.length, l = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;)p[o] = l + " " + d(p[o]);
                        f = p.join(","), h = ge.test(e) && c(t.parentNode) || t
                    }
                    if (f)try {
                        return K.apply(n, h.querySelectorAll(f)), n
                    } catch (e) {
                    } finally {
                        s === F && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;)w.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {
        }

        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
            return i
        }

        function u(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = q++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
            } : function (t, n, a) {
                var s, c, l, d = [N, o];
                if (a) {
                    for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, a))return !0
                } else for (; t = t[i];)if (1 === t.nodeType || r) {
                    if (l = t[F] || (t[F] = {}), c = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = c[i]) && s[0] === N && s[1] === o)return d[2] = s[2];
                    if (c[i] = d, d[2] = e(t, n, a))return !0
                }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function f(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)t(e, n[r], i);
            return i
        }

        function h(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length,
                     l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s)));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, a)), i(function (i, a, s, c) {
                var l, d, u, p = [], m = [], g = a.length, v = i || f(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : h(v, p, e, s, c), b = n ? o || (i ? e : g || r) ? [] : a : y;
                if (n && n(y, b, s, c), r)for (l = h(b, m), r(l, [], s, c), d = l.length; d--;)(u = l[d]) && (b[m[d]] = !(y[m[d]] = u));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], d = b.length; d--;)(u = b[d]) && l.push(y[d] = u);
                            o(null, b = [], l, c)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (l = o ? Z(i, u) : p[d]) > -1 && (i[l] = !(a[l] = u))
                    }
                } else b = h(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, c) : K.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0,
                     c = u(function (e) {
                         return e === t
                     }, a, !0), l = u(function (e) {
                    return Z(t, e) > -1
                }, a, !0), f = [function (e, n, i) {
                    var r = !o && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                    return t = null, r
                }]; s < r; s++)if (n = w.relative[e[s].type]) f = [u(p(f), n)]; else {
                if (n = w.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                    for (i = ++s; i < r && !w.relative[e[i].type]; i++);
                    return m(s > 1 && p(f), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && d(e))
                }
                f.push(n)
            }
            return p(f)
        }

        function v(e, n) {
            var r = n.length > 0, o = e.length > 0, a = function (i, a, s, c, l) {
                var d, u, p, f = 0, m = "0", g = i && [], v = [], y = S, b = i || o && w.find.TAG("*", l),
                    x = N += null == y ? 1 : Math.random() || .1, _ = b.length;
                for (l && (S = a === E || a || l); m !== _ && null != (d = b[m]); m++) {
                    if (o && d) {
                        for (u = 0, a || d.ownerDocument === E || (O(d), s = !D); p = e[u++];)if (p(d, a || E, s)) {
                            c.push(d);
                            break
                        }
                        l && (N = x)
                    }
                    r && ((d = !p && d) && f--, i && g.push(d))
                }
                if (f += m, r && m !== f) {
                    for (u = 0; p = n[u++];)p(g, v, a, s);
                    if (i) {
                        if (f > 0)for (; m--;)g[m] || v[m] || (v[m] = U.call(c));
                        v = h(v)
                    }
                    K.apply(c, v), l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(c)
                }
                return l && (N = x, S = y), g
            };
            return r ? i(a) : a
        }

        var y, b, w, x, _, C, $, k, S, T, j, O, E, M, D, A, P, I, H, F = "sizzle" + 1 * new Date, L = e.document, N = 0,
            q = 0, B = n(), R = n(), z = n(), W = function (e, t) {
                return e === t && (j = !0), 0
            }, G = 1 << 31, X = {}.hasOwnProperty, V = [], U = V.pop, Y = V.push, K = V.push, Q = V.slice,
            Z = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)if (e[n] === t)return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(ie),
            de = new RegExp("^" + te + "$"), ue = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), be = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, we = function () {
                O()
            };
        try {
            K.apply(V = Q.call(L.childNodes), L.childNodes), V[L.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function (e, t) {
                    Y.apply(e, Q.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, _ = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : L;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, M = E.documentElement, D = !_(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = r(function (e) {
                return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(E.getElementsByClassName), b.getById = r(function (e) {
                return M.appendChild(e).id = F, !E.getElementsByName || !E.getElementsByName(F).length
            }), b.getById ? (w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(ye, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var t = e.replace(ye, be);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && D)return t.getElementsByClassName(e)
                }, P = [], A = [], (b.qsa = he.test(E.querySelectorAll)) && (r(function (e) {
                M.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + F + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || A.push(".#.+[+~]")
            }), r(function (e) {
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
            })), (b.matchesSelector = he.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function (e) {
                b.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), P.push("!=", ie)
            }), A = A.length && new RegExp(A.join("|")), P = P.length && new RegExp(P.join("|")), t = he.test(M.compareDocumentPosition), H = t || he.test(M.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, W = t ? function (e, t) {
                if (e === t)return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === L && H(L, e) ? -1 : t === E || t.ownerDocument === L && H(L, t) ? 1 : T ? Z(T, e) - Z(T, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return j = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], c = [t];
                if (!r || !o)return e === E ? -1 : t === E ? 1 : r ? -1 : o ? 1 : T ? Z(T, e) - Z(T, t) : 0
                    ;
                if (r === o)return a(e, t);
                for (n = e; n = n.parentNode;)s.unshift(n);
                for (n = t; n = n.parentNode;)c.unshift(n);
                for (; s[i] === c[i];)i++;
                return i ? a(s[i], c[i]) : s[i] === L ? -1 : c[i] === L ? 1 : 0
            }, E) : E
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== E && O(e), n = n.replace(ce, "='$1']"), b.matchesSelector && D && !z[n + " "] && (!P || !P.test(n)) && (!A || !A.test(n)))try {
                var i = I.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (e) {
            }
            return t(n, E, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== E && O(e), H(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== E && O(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : b.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (j = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort(W), j) {
                for (; t = e[r++];)t === e[r] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return T = null, e
        }, x = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += x(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[i++];)n += x(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, c) {
                        var l, d, u, p, f, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];)if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (p = g, u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), l = d[e] || [], f = l[0] === N && l[1], b = f && l[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)if (1 === p.nodeType && ++b && p === t) {
                                    d[e] = [N, f, b];
                                    break
                                }
                            } else if (y && (p = t, u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), l = d[e] || [], f = l[0] === N && l[1], b = f), !1 === b)for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [N, b]), p !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;)i = Z(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = $(e.replace(oe, "$1"));
                    return r[F] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(ye, be), function (t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === M
                }, focus: function (e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return fe.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: s(function () {
                    return [0]
                }), last: s(function (e, t) {
                    return [t - 1]
                }), eq: s(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: s(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }), odd: s(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }), lt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in{submit: !0, reset: !0})w.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, C = t.tokenize = function (e, n) {
            var i, r, o, a, s, c, l, d = R[e + " "];
            if (d)return n ? 0 : d.slice(0);
            for (s = e, c = [], l = w.preFilter; s;) {
                i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), s = s.slice(i.length));
                for (a in w.filter)!(r = ue[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i)break
            }
            return n ? s.length : s ? t.error(e) : R(e, c).slice(0)
        }, $ = t.compile = function (e, t) {
            var n, i = [], r = [], o = z[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;)o = g(t[n]), o[F] ? i.push(o) : r.push(o);
                o = z(e, v(r, i)), o.selector = e
            }
            return o
        }, k = t.select = function (e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e, p = !i && C(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && D && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ye, be), t) || [])[0]))return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = ue.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)if ((l = w.find[s]) && (i = l(a.matches[0].replace(ye, be), ge.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && d(o)))return K.apply(n, i), n;
                    break
                }
            }
            return (u || $(e, p))(i, t, !D, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = F.split("").sort(W).join("") === F, b.detectDuplicates = !!j, O(), b.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(J, function (e, t, n) {
            var i;
            if (!n)return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
    var ye = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (r && pe(e).is(n))break;
            i.push(e)
        }
        return i
    }, be = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, we = pe.expr.match.needsContext, xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, _e = /^.[^:#\[\.,]*$/;
    pe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)return this.pushStack(pe(e).filter(function () {
                for (t = 0; t < r; t++)if (pe.contains(i[t], this))return !0
            }));
            for (t = 0; t < r; t++)pe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function (e, t, n) {
        var i, r;
        if (!e)return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : $e.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), xe.test(i[1]) && pe.isPlainObject(t))for (i in t)pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((r = ie.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2])return Ce.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = ie, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn, Ce = pe(ie);
    var ke = /^(?:parents|prev(?:Until|All))/, Se = {children: !0, contents: !0, next: !0, prev: !0};
    pe.fn.extend({
        has: function (e) {
            var t, n = pe(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)if (pe.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [],
                     a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < r; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ye(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ye(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return ye(e, "nextSibling")
        }, prevAll: function (e) {
            return ye(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ye(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ye(e, "previousSibling", n)
        }, siblings: function (e) {
            return be((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return be(e.firstChild)
        }, contents: function (e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function (e, t) {
        pe.fn[e] = function (n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Se[e] || (r = pe.uniqueSort(r)), ke.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Te = /\S+/g;
    pe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, i, r, a = [], s = [], c = -1, l = function () {
            for (r = e.once, i = t = !0; s.length; c = -1)for (n = s.shift(); ++c < a.length;)!1 === a[c].apply(n[0], n[1]) && e.stopOnFalse && (c = a.length, n = !1);
            e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
        }, d = {
            add: function () {
                return a && (n && !t && (c = a.length - 1, s.push(n)), function t(n) {
                    pe.each(n, function (n, i) {
                        pe.isFunction(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return pe.each(arguments, function (e, t) {
                    for (var n; (n = pe.inArray(t, a, n)) > -1;)a.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? pe.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return r = s = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return r = !0, n || d.disable(), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return d
    }, pe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return pe.Deferred(function (n) {
                            pe.each(t, function (t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? pe.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, pe.each(t, function (e, o) {
                var a = o[2], s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = re.call(arguments), a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, c = 1 === s ? e : pe.Deferred(),
                l = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
            if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++)o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, t)).done(l(r, i, o)).fail(c.reject) : --s;
            return s || c.resolveWith(i, o), c.promise()
        }
    });
    var je;
    pe.fn.ready = function (e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? pe.readyWait++ : pe.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (je.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
        }
    }), pe.ready.promise = function (t) {
        if (!je)if (je = pe.Deferred(), "complete" === ie.readyState) e.setTimeout(pe.ready); else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s); else {
            ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (e) {
            }
            n && n.doScroll && function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return je.promise(t)
    }, pe.ready.promise();
    var Oe;
    for (Oe in pe(ue))break;
    ue.ownFirst = "0" === Oe, ue.inlineBlockNeedsLayout = !1, pe(function () {
        var e, t, n, i;
        (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var e = ie.createElement("div");
        ue.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            ue.deleteExpando = !1
        }
        e = null
    }();
    var Ee = function (e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, De = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e)
        },
        data: function (e, t, n) {
            return d(e, t, n)
        },
        removeData: function (e, t) {
            return u(e, t)
        },
        _data: function (e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return u(e, t, !0)
        }
    }), pe.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), c(o, i, r[i])));
                    pe._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                pe.data(this, e, t)
            }) : o ? c(o, e, pe.data(o, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                pe.removeData(this, e)
            })
        }
    }), pe.extend({
        queue: function (e, t, n) {
            var i;
            if (e)return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = pe.queue(e, t), i = n.length, r = n.shift(), o = pe._queueHooks(e, t), a = function () {
                pe.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function () {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
        }
    }), pe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                pe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = pe.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    }), function () {
        var e;
        ue.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, i;
            return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"], He = function (e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        }, Fe = function (e, t, n, i, r, o, a) {
            var s = 0, c = e.length, l = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (s in n)Fe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(pe(e), n)
                })), t))for (; s < c; s++)t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
        }, Le = /^(?:checkbox|radio)$/i, Ne = /<([\w:-]+)/, qe = /^$|\/(?:java|ecma)script/i, Be = /^\s+/,
        Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var e = ie.createElement("div"), t = ie.createDocumentFragment(), n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ue.leadingWhitespace = 3 === e.firstChild.nodeType, ue.tbody = !e.getElementsByTagName("tbody").length, ue.htmlSerialize = !!e.getElementsByTagName("link").length, ue.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ue.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, ue.attributes = !e.getAttribute(pe.expando)
    }();
    var ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
    var We = /<|&#?\w+;/, Ge = /<tbody/i;
    !function () {
        var t, n, i = ie.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (ue[t] = n in e) || (i.setAttribute(n, "t"), ue[t] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Xe = /^(?:input|select|textarea)$/i, Ve = /^key/, Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ye = /^(?:focusinfocus|focusoutblur)$/, Ke = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, c, l, d, u, p, f, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (d = g.handle) || (d = g.handle = function (e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), t = (t || "").match(Te) || [""], s = t.length; s--;)o = Ke.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (l = pe.event.special[f] || {}, f = (r ? l.delegateType : l.bindType) || f, l = pe.event.special[f] || {}, u = pe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, c), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, l.setup && !1 !== l.setup.call(e, i, h, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), l.add && (l.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), pe.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, c, l, d, u, p, f, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (d = g.events)) {
                for (t = (t || "").match(Te) || [""], l = t.length; l--;)if (s = Ke.exec(t[l]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (u = pe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = d[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = p.length; o--;)a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, u.remove && u.remove.call(e, a));
                    c && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || pe.removeEvent(e, f, g.handle), delete d[f])
                } else for (f in d)pe.event.remove(e, f + t[l], n, i, !0);
                pe.isEmptyObject(d) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, a, s, c, l, d, u, p = [i || ie], f = de.call(t, "type") ? t.type : t,
                h = de.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ye.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(i, n))) {
                if (!r && !l.noBubble && !pe.isWindow(i)) {
                    for (c = l.delegateType || f, Ye.test(c + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), d = s;
                    d === (i.ownerDocument || ie) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0; (s = p[u++]) && !t.isPropagationStopped();)t.type = u > 1 ? c : l.bindType || f, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && Ee(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = f, !r && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), n)) && Ee(i) && a && i[f] && !pe.isWindow(i)) {
                    d = i[a], d && (i[a] = null), pe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (e) {
                    }
                    pe.event.triggered = void 0, d && (i[a] = d)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = pe.event.fix(e);
            var t, n, i, r, o, a = [], s = re.call(arguments), c = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, c), t = 0; (r = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                for (i = [], n = 0; n < s; n++)o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(c) > -1 : pe.find(r, this, null, [c]).length), i[r] && i.push(o);
                i.length && a.push({elem: c, handlers: i})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[pe.expando])return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ue.test(r) ? this.mouseHooks : Ve.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== w() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === w() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                }, _default: function (e) {
                    return pe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = pe.extend(new pe.Event, n, {type: e, isSimulated: !0});
            pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = ie.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
    }, pe.Event = function (e, t) {
        if (!(this instanceof pe.Event))return new pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        pe.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ue.submit || (pe.event.special.submit = {
        setup: function () {
            if (pe.nodeName(this, "form"))return !1;
            pe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            if (pe.nodeName(this, "form"))return !1;
            pe.event.remove(this, "._submit")
        }
    }), ue.change || (pe.event.special.change = {
        setup: function () {
            if (Xe.test(this.nodeName))return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1;
            pe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Xe.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return pe.event.remove(this, "._change"), !Xe.test(this.nodeName)
        }
    }), ue.focusin || pe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = pe._data(i, t);
                r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = pe._data(i, t) - 1;
                r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
            }
        }
    }), pe.fn.extend({
        on: function (e, t, n, i) {
            return x(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return x(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj,
                pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = b), this.each(function () {
                pe.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                pe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return pe.event.trigger(e, t, n, !0)
        }
    });
    var Qe = / jQuery\d+="(?:null|\d+)"/g, Ze = new RegExp("<(?:" + Re + ")[\\s/>]", "i"),
        Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rt = f(ie), ot = rt.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Je, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, a, s, c = pe.contains(e.ownerDocument, e);
            if (ue.html5Clone || pe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML, ot.removeChild(o = ot.firstChild)), !(ue.noCloneEvent && ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))for (i = h(o), s = h(e), a = 0; null != (r = s[a]); ++a)i[a] && S(r, i[a]);
            if (t)if (n)for (s = s || h(e), i = i || h(o), a = 0; null != (r = s[a]); a++)k(r, i[a]); else k(e, o);
            return i = h(o, "script"), i.length > 0 && m(i, !c && h(e, "script")), i = s = r = null, o
        }, cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = pe.expando, c = pe.cache, l = ue.attributes,
                     d = pe.event.special; null != (n = e[a]); a++)if ((t || Ee(n)) && (r = n[s], o = r && c[r])) {
                if (o.events)for (i in o.events)d[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, o.handle);
                c[r] && (delete c[r], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(r))
            }
        }
    }), pe.fn.extend({
        domManip: T, detach: function (e) {
            return j(this, e, !0)
        }, remove: function (e) {
            return j(this, e)
        }, text: function (e) {
            return Fe(this, function (e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    _(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return pe.clone(this, e, t)
            })
        }, html: function (e) {
            return Fe(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") : void 0;
                if ("string" == typeof e && !et.test(e) && (ue.htmlSerialize || !Ze.test(e)) && (ue.leadingWhitespace || !Be.test(e)) && !ze[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        pe.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = pe(e),
                     a = o.length - 1; i <= a; i++)n = i === a ? this : this.clone(!0), pe(o[i])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var at, st = {HTML: "block", BODY: "block"}, ct = /^margin/, lt = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        dt = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)e.style[o] = a[o];
            return r
        }, ut = ie.documentElement;
    !function () {
        function t() {
            var t, d, u = ie.documentElement;
            u.appendChild(c), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, e.getComputedStyle && (d = e.getComputedStyle(l), n = "1%" !== (d || {}).top, s = "2px" === (d || {}).marginLeft, r = "4px" === (d || {width: "4px"}).width, l.style.marginRight = "50%", i = "4px" === (d || {marginRight: "4px"}).marginRight, t = l.appendChild(ie.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), u.removeChild(c)
        }

        var n, i, r, o, a, s, c = ie.createElement("div"), l = ie.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ue.opacity = "0.5" === l.style.opacity, ue.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === l.style.backgroundClip, c = ie.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", c.appendChild(l), ue.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(ue, {
            reliableHiddenOffsets: function () {
                return null == n && t(), o
            }, boxSizingReliable: function () {
                return null == n && t(), r
            }, pixelMarginRight: function () {
                return null == n && t(), i
            }, pixelPosition: function () {
                return null == n && t(), n
            }, reliableMarginRight: function () {
                return null == n && t(), a
            }, reliableMarginLeft: function () {
                return null == n && t(), s
            }
        }))
    }();
    var pt, ft, ht = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t)
    }, ft = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || pt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !ue.pixelMarginRight() && lt.test(a) && ct.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : ut.currentStyle && (pt = function (e) {
            return e.currentStyle
        }, ft = function (e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || pt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), lt.test(a) && !ht.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        });
    var mt = /alpha\([^)]*\)/i, gt = /opacity\s*=\s*([^)]*)/i, vt = /^(none|table(?!-c[ea]).+)/,
        yt = new RegExp("^(" + Ae + ")(.*)$", "i"), bt = {position: "absolute", visibility: "hidden", display: "block"},
        wt = {letterSpacing: "0", fontWeight: "400"}, xt = ["Webkit", "O", "Moz", "ms"],
        _t = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: ue.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t), c = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n)return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                if (o = typeof n, "string" === o && (r = Pe.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))try {
                    c[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ft(e, t, i)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), pe.each(["height", "width"], function (e, t) {
        pe.cssHooks[t] = {
            get: function (e, n, i) {
                if (n)return vt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, bt, function () {
                    return H(e, t, i)
                }) : H(e, t, i)
            }, set: function (e, n, i) {
                var r = i && pt(e);
                return P(e, n, i ? I(e, t, i, ue.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ue.opacity || (pe.cssHooks.opacity = {
        get: function (e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(o) ? o.replace(mt, r) : o + " " + r)
        }
    }), pe.cssHooks.marginRight = M(ue.reliableMarginRight, function (e, t) {
        if (t)return dt(e, {display: "inline-block"}, ft, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = M(ue.reliableMarginLeft, function (e, t) {
        if (t)return (parseFloat(ft(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {marginLeft: 0}, function () {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px"
    }), pe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        pe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {},
                         o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)r[e + Ie[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ct.test(e) || (pe.cssHooks[e + t].set = P)
    }), pe.fn.extend({
        css: function (e, t) {
            return Fe(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (pe.isArray(t)) {
                    for (i = pt(e), r = t.length; a < r; a++)o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = F, F.prototype = {
        constructor: F, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, pe.fx = F.prototype.init, pe.fx.step = {};
    var Ct, $t, kt = /^(?:toggle|show|hide)$/, St = /queueHooks$/;
    pe.Animation = pe.extend(z, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, Pe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Te);
            for (var n, i = 0,
                     r = e.length; i < r; i++)n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
        }, prefilters: [B], prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), pe.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
        }, i
    }, pe.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(He).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = pe.isEmptyObject(e), o = pe.speed(t, n, i), a = function () {
                var t = z(this, pe.extend({}, e), o);
                (r || pe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = pe.timers, a = pe._data(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && St.test(r) && i(a[r]);
                for (r = o.length; r--;)o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || pe.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = pe._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = pe.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), pe.each(["toggle", "show", "hide"], function (e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, r)
        }
    }), pe.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        pe.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), pe.timers = [], pe.fx.tick = function () {
        var e, t = pe.timers, n = 0;
        for (Ct = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(), Ct = void 0
    }, pe.fx.timer = function (e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
    }, pe.fx.interval = 13, pe.fx.start = function () {
        $t || ($t = e.setInterval(pe.fx.tick, pe.fx.interval))
    }, pe.fx.stop = function () {
        e.clearInterval($t), $t = null
    }, pe.fx.speeds = {slow: 600, fast: 200, _default: 400}, pe.fn.delay = function (t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e, t = ie.createElement("input"), n = ie.createElement("div"), i = ie.createElement("select"),
            r = i.appendChild(ie.createElement("option"));
        n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ue.getSetAttribute = "t" !== n.className, ue.style = /top/.test(e.getAttribute("style")), ue.hrefNormalized = "/a" === e.getAttribute("href"), ue.checkOn = !!t.value, ue.optSelected = r.selected, ue.enctype = !!ie.createElement("form").enctype, i.disabled = !0, ue.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), ue.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ue.radioValue = "t" === t.value
    }();
    var Tt = /\r/g;
    pe.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)return i = pe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r)return (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0,
                             a = o ? null : [], s = o ? r + 1 : i.length,
                             c = r < 0 ? s : o ? r : 0; c < s; c++)if (n = i[c], (n.selected || c === r) && (ue.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = pe(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t),
                             a = r.length; a--;)if (i = r[a], pe.inArray(pe.valHooks.option.get(i), o) >= 0)try {
                        i.selected = n = !0
                    } catch (e) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function () {
        pe.valHooks[this] = {
            set: function (e, t) {
                if (pe.isArray(t))return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, ue.checkOn || (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt, Ot, Et = pe.expr.attrHandle, Mt = /^(?:checked|selected)$/i, Dt = ue.getSetAttribute, At = ue.input;
    pe.fn.extend({
        attr: function (e, t) {
            return Fe(this, pe.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ot : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ue.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(Te);
            if (o && 1 === e.nodeType)for (; n = o[r++];)i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? At && Dt || !Mt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(Dt ? n : i)
        }
    }), Ot = {
        set: function (e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : At && Dt || !Mt.test(n) ? e.setAttribute(!Dt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Et[t] || pe.find.attr;
        At && Dt || !Mt.test(t) ? Et[t] = function (e, t, i) {
            var r, o;
            return i || (o = Et[t], Et[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Et[t] = o), r
        } : Et[t] = function (e, t, n) {
            if (!n)return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), At && Dt || (pe.attrHooks.value = {
        set: function (e, t, n) {
            if (!pe.nodeName(e, "input"))return jt && jt.set(e, t, n);
            e.defaultValue = t
        }
    }), Dt || (jt = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n))return t
        }
    }, Et.id = Et.name = Et.coords = function (e, t, n) {
        var i;
        if (!n)return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, pe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)return n.value
        }, set: jt.set
    }, pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            jt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
            set: function (e, n) {
                if ("" === n)return e.setAttribute(t, "auto"), n
            }
        }
    })), ue.style || (pe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Pt = /^(?:input|select|textarea|button|object)$/i, It = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function (e, t) {
            return Fe(this, pe.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = pe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), pe.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Pt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), ue.hrefNormalized || pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ue.optSelected || (pe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pe.propFix[this.toLowerCase()] = this
    }), ue.enctype || (pe.propFix.enctype = "encoding");
    var Ht = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, c = 0;
            if (pe.isFunction(e))return this.each(function (t) {
                pe(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(Te) || []; n = this[c++];)if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                for (a = 0; o = t[a++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = pe.trim(i), r !== s && pe.attr(n, "class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s, c = 0;
            if (pe.isFunction(e))return this.each(function (t) {
                pe(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(Te) || []; n = this[c++];)if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                for (a = 0; o = t[a++];)for (; i.indexOf(" " + o + " ") > -1;)i = i.replace(" " + o + " ", " ");
                s = pe.trim(i), r !== s && pe.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                pe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n)for (i = 0, r = pe(this), o = e.match(Te) || []; t = o[i++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || (t = W(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + W(n) + " ").replace(Ht, " ").indexOf(t) > -1)return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        pe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ft = e.location, Lt = pe.now(), Nt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, i = null, r = pe.trim(t + "");
        return r && !pe.trim(r.replace(qt, function (e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Bt = /#.*$/, Rt = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gt = /^(?:GET|HEAD)$/, Xt = /^\/\//,
        Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ut = {}, Yt = {}, Kt = "*/".concat("*"),
        Qt = Ft.href, Zt = Vt.exec(Qt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qt,
            type: "GET",
            isLocal: Wt.test(Zt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: G(Ut),
        ajaxTransport: G(Yt),
        ajax: function (t, n) {
            function i(t, n, i, r) {
                var o, u, y, b, x, C = n;
                2 !== w && (w = 2, c && e.clearTimeout(c), d = void 0, s = r || "", _.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, i && (b = U(p, _, i)), b = Y(p, b, _, o), o ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (pe.lastModified[a] = x), (x = _.getResponseHeader("etag")) && (pe.etag[a] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, u = b.data, y = b.error, o = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || C) + "", o ? m.resolveWith(f, [u, C, _]) : m.rejectWith(f, [_, C, y]), _.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [_, p, o ? u : y]), g.fireWith(f, [_, C]), l && (h.trigger("ajaxComplete", [_, p]), --pe.active || pe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, c, l, d, u, p = pe.ajaxSetup({}, n), f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? pe(f) : pe.event, m = pe.Deferred(),
                g = pe.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", _ = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!u)for (u = {}; t = zt.exec(s);)u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return w || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e)if (w < 2)for (t in e)v[t] = [v[t], e[t]]; else _.always(e[_.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return d && d.abort(t), i(0, t), this
                    }
                };
            if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, p.url = ((t || p.url || Qt) + "").replace(Bt, "").replace(Xt, Zt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = pe.trim(p.dataType || "*").toLowerCase().match(Te) || [""], null == p.crossDomain && (r = Vt.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Zt[1] && r[2] === Zt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Zt[3] || ("http:" === Zt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), X(Ut, p, n, _), 2 === w)return _;
            l = pe.event && p.global, l && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Gt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Nt.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Rt.test(a) ? a.replace(Rt, "$1_=" + Lt++) : a + (Nt.test(a) ? "&" : "?") + "_=" + Lt++)), p.ifModified && (pe.lastModified[a] && _.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && _.setRequestHeader("If-None-Match", pe.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)_.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || 2 === w))return _.abort();
            x = "abort";
            for (o in{success: 1, error: 1, complete: 1})_[o](p[o]);
            if (d = X(Yt, p, n, _)) {
                if (_.readyState = 1, l && h.trigger("ajaxSend", [_, p]), 2 === w)return _;
                p.async && p.timeout > 0 && (c = e.setTimeout(function () {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, d.send(y, i)
                } catch (e) {
                    if (!(w < 2))throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function (e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function (e, t) {
        pe[t] = function (e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function (e) {
        return pe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, pe.fn.extend({
        wrapAll: function (e) {
            if (pe.isFunction(e))return this.each(function (t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return pe.isFunction(e) ? this.each(function (t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = pe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = pe.isFunction(e);
            return this.each(function (n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function (e) {
        return ue.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }, pe.expr.filters.visible = function (e) {
        return !pe.expr.filters.hidden(e)
    };
    var Jt = /%20/g, en = /\[\]$/, tn = /\r?\n/g, nn = /^(?:submit|button|image|reset|file)$/i,
        rn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e)Z(n, e[n], t, r);
        return i.join("&").replace(Jt, "+")
    }, pe.fn.extend({
        serialize: function () {
            return pe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && rn.test(this.nodeName) && !nn.test(e) && (this.checked || !Le.test(e))
            }).map(function (e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                    return {name: t.name, value: e.replace(tn, "\r\n")}
                }) : {name: t.name, value: n.replace(tn, "\r\n")}
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? ee() : ie.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || ee()
    } : J;
    var on = 0, an = {}, sn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in an)an[e](void 0, !0)
    }), ue.cors = !!sn && "withCredentials" in sn, sn = ue.ajax = !!sn, sn && pe.ajaxTransport(function (t) {
        if (!t.crossDomain || ue.cors) {
            var n;
            return {
                send: function (i, r) {
                    var o, a = t.xhr(), s = ++on;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null), n = function (e, i) {
                        var o, c, l;
                        if (n && (i || 4 === a.readyState))if (delete an[s], n = void 0, a.onreadystatechange = pe.noop, i) 4 !== a.readyState && a.abort(); else {
                            l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                c = a.statusText
                            } catch (e) {
                                c = ""
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                        }
                        l && r(o, c, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = an[s] = n : n()
                }, abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function (i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [], ln = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = cn.pop() || pe.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a,
            s = !1 !== t.jsonp && (ln.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ln, "$1" + r) : !1 !== t.jsonp && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || pe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, cn.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), ue.createHTMLDocument = function () {
        if (!ie.implementation.createHTMLDocument)return !1;
        var e = ie.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), pe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ue.createHTMLDocument ? ie.implementation.createHTMLDocument("") : ie);
        var i = xe.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
    };
    var dn = pe.fn.load;
    pe.fn.load = function (e, t, n) {
        if ("string" != typeof e && dn)return dn.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(a, o || [e.responseText, t, e])
                })
            }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        pe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function (e) {
        return pe.grep(pe.timers, function (t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, c, l, d = pe.css(e, "position"), u = pe(e), p = {};
            "static" === d && (e.style.position = "relative"), s = u.offset(), o = pe.css(e, "top"), c = pe.css(e, "left"), l = ("absolute" === d || "fixed" === d) && pe.inArray("auto", [o, c]) > -1, l ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, pe.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
            if (o)return t = o.documentElement, pe.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += pe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");)e = e.offsetParent;
                return e || ut
            })
        }
    }), pe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (i) {
            return Fe(this, function (e, i, r) {
                var o = te(e);
                if (void 0 === r)return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(n ? pe(o).scrollLeft() : r, n ? r : pe(o).scrollTop()) : e[i] = r
            }, e, i, arguments.length, null)
        }
    }), pe.each(["top", "left"], function (e, t) {
        pe.cssHooks[t] = M(ue.pixelPosition, function (e, n) {
            if (n)return n = ft(e, t), lt.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({Height: "height", Width: "width"}, function (e, t) {
        pe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            pe.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === r ? "margin" : "border");
                return Fe(this, function (t, n, i) {
                    var r;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, a) : pe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function () {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return pe
    });
    var un = e.jQuery, pn = e.$;
    return pe.noConflict = function (t) {
        return e.$ === pe && (e.$ = pn), t && e.jQuery === pe && (e.jQuery = un), pe
    }, t || (e.jQuery = e.$ = pe), pe
}), function () {
    var e, t, n, i, r, o, a, s, c, l;
    t = window.device, e = {}, window.device = e, i = window.document.documentElement, l = window.navigator.userAgent.toLowerCase(), e.ios = function () {
        return e.iphone() || e.ipod() || e.ipad()
    }, e.iphone = function () {
        return r("iphone")
    }, e.ipod = function () {
        return r("ipod")
    }, e.ipad = function () {
        return r("ipad")
    }, e.android = function () {
        return r("android")
    }, e.androidPhone = function () {
        return e.android() && r("mobile")
    }, e.androidTablet = function () {
        return e.android() && !r("mobile")
    }, e.blackberry = function () {
        return r("blackberry") || r("bb10") || r("rim")
    }, e.blackberryPhone = function () {
        return e.blackberry() && !r("tablet")
    }, e.blackberryTablet = function () {
        return e.blackberry() && r("tablet")
    }, e.windows = function () {
        return r("windows")
    }, e.windowsPhone = function () {
        return e.windows() && r("phone")
    }, e.windowsTablet = function () {
        return e.windows() && r("touch") && !e.windowsPhone()
    }, e.fxos = function () {
        return (r("(mobile;") || r("(tablet;")) && r("; rv:")
    }, e.fxosPhone = function () {
        return e.fxos() && r("mobile")
    }, e.fxosTablet = function () {
        return e.fxos() && r("tablet")
    }, e.meego = function () {
        return r("meego")
    }, e.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, e.nodeWebkit = function () {
        return "object" == typeof window.process
    }, e.mobile = function () {
        return e.androidPhone() || e.iphone() || e.ipod() || e.windowsPhone() || e.blackberryPhone() || e.fxosPhone() || e.meego()
    }, e.tablet = function () {
        return e.ipad() || e.androidTablet() || e.blackberryTablet() || e.windowsTablet() || e.fxosTablet()
    }, e.desktop = function () {
        return !e.tablet() && !e.mobile()
    }, e.television = function () {
        var e;
        for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], e = 0; e < television.length;) {
            if (r(television[e]))return !0;
            e++
        }
        return !1
    }, e.webkit = function () {
        return r("chrome") || r("safari")
    }, e.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, e.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, e.noConflict = function () {
        return window.device = t, this
    }, r = function (e) {
        return -1 !== l.indexOf(e)
    }, a = function (e) {
        var t;
        return t = new RegExp(e, "i"), i.className.match(t)
    }, n = function (e) {
        a(e) || (i.className = i.className.trim() + " " + e)
    }, c = function (e) {
        a(e) && (i.className = i.className.replace(" " + e, ""))
    }, e.ios() ? e.ipad() ? n("ios ipad tablet") : e.iphone() ? n("ios iphone mobile") : e.ipod() && n("ios ipod mobile") : e.android() ? n(e.androidTablet() ? "android tablet" : "android mobile") : e.blackberry() ? n(e.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : e.windows() ? n(e.windowsTablet() ? "windows tablet" : e.windowsPhone() ? "windows mobile" : "desktop") : e.fxos() ? n(e.fxosTablet() ? "fxos tablet" : "fxos mobile") : e.meego() ? n("meego mobile") : e.nodeWebkit() ? n("node-webkit") : e.television() ? n("television") : e.desktop() && n("desktop"), e.cordova() && n("cordova"), e.webkit() && n("webkit"), e.webkit() || e.desktop() || n("web-view"), o = function () {
        e.landscape() ? (c("portrait"), n("landscape")) : (c("landscape"), n("portrait"))
    }, s = window.hasOwnProperty("onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(s, o, !1) : window.attachEvent ? window.attachEvent(s, o) : window[s] = o, o(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.device = e
}.call(this), function () {
    "use strict";
    var e = {};
    e.parse = function (e) {
        return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#)/, ""), e ? e.trim().split("&").reduce(function (e, t) {
            var n = t.replace(/\+/g, " ").split("="), i = n[0], r = n[1];
            return i = decodeURIComponent(i), r = void 0 === r ? null : decodeURIComponent(r), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r, e
        }, {}) : {})
    }, e.stringify = function (e) {
        return e ? Object.keys(e).map(function (t) {
            var n = e[t];
            return Array.isArray(n) ? n.map(function (e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }).join("&") : ""
    }, "function" == typeof define && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.queryString = e
}(), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";
    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
    }

    function n(t) {
        var n = t.target, i = e(n);
        if (!i.is("[type=submit],[type=image]")) {
            var r = i.closest("[type=submit]");
            if (0 === r.length)return;
            n = r[0]
        }
        var o = this;
        if (o.clk = n, "image" == n.type)if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var a = i.offset();
            o.clk_x = t.pageX - a.left, o.clk_y = t.pageY - a.top
        } else o.clk_x = t.pageX - n.offsetLeft, o.clk_y = t.pageY - n.offsetTop;
        setTimeout(function () {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }

    function i() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var r = {};
    r.fileapi = void 0 !== e("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
    var o = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!o)return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function n(n) {
            var i, r, o = e.param(n, t.traditional).split("&"), a = o.length, s = [];
            for (i = 0; i < a; i++)o[i] = o[i].replace(/\+/g, " "), r = o[i].split("="), s.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
            return s
        }

        function a(n) {
            function r(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (e) {
                    i("cannot get iframe.contentWindow document: " + e)
                }
                if (t)return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (n) {
                    i("cannot get iframe.contentDocument: " + n), t = e.document
                }
                return t
            }

            function a() {
                function t() {
                    try {
                        var e = r(v).readyState;
                        i("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (e) {
                        i("Server abort: ", e, " (", e.name, ")"), c(S), _ && clearTimeout(_), _ = void 0
                    }
                }

                var n = d.attr2("target"), o = d.attr2("action"),
                    a = d.attr("enctype") || d.attr("encoding") || "multipart/form-data";
                C.setAttribute("target", m), s && !/post/i.test(s) || C.setAttribute("method", "POST"), o != p.url && C.setAttribute("action", p.url), p.skipEncodingOverride || s && !/post/i.test(s) || d.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), p.timeout && (_ = setTimeout(function () {
                    x = !0, c(k)
                }, p.timeout));
                var l = [];
                try {
                    if (p.extraData)for (var u in p.extraData)p.extraData.hasOwnProperty(u) && (e.isPlainObject(p.extraData[u]) && p.extraData[u].hasOwnProperty("name") && p.extraData[u].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + p.extraData[u].name + '">').val(p.extraData[u].value).appendTo(C)[0]) : l.push(e('<input type="hidden" name="' + u + '">').val(p.extraData[u]).appendTo(C)[0]));
                    p.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", c) : v.addEventListener("load", c, !1), setTimeout(t, 15);
                    try {
                        C.submit()
                    } catch (e) {
                        var f = document.createElement("form").submit;
                        f.apply(C)
                    }
                } finally {
                    C.setAttribute("action", o), C.setAttribute("enctype", a), n ? C.setAttribute("target", n) : d.removeAttr("target"), e(l).remove()
                }
            }

            function c(t) {
                if (!y.aborted && !M) {
                    if (E = r(v), E || (i("cannot access response document"), t = S), t === k && y)return y.abort("timeout"), void $.reject(y, "timeout");
                    if (t == S && y)return y.abort("server abort"), void $.reject(y, "error", "server abort");
                    if (E && E.location.href != p.iframeSrc || x) {
                        v.detachEvent ? v.detachEvent("onload", c) : v.removeEventListener("load", c, !1);
                        var n, o = "success";
                        try {
                            if (x)throw"timeout";
                            var a = "xml" == p.dataType || E.XMLDocument || e.isXMLDoc(E);
                            if (i("isXml=" + a), !a && window.opera && (null === E.body || !E.body.innerHTML) && --D)return i("requeing onLoad callback, DOM not available"), void setTimeout(c, 250);
                            var s = E.body ? E.body : E.documentElement;
                            y.responseText = s ? s.innerHTML : null, y.responseXML = E.XMLDocument ? E.XMLDocument : E, a && (p.dataType = "xml"), y.getResponseHeader = function (e) {
                                return {"content-type": p.dataType}[e.toLowerCase()]
                            }, s && (y.status = Number(s.getAttribute("status")) || y.status, y.statusText = s.getAttribute("statusText") || y.statusText);
                            var l = (p.dataType || "").toLowerCase(), d = /(json|script|text)/.test(l);
                            if (d || p.textarea) {
                                var u = E.getElementsByTagName("textarea")[0];
                                if (u) y.responseText = u.value, y.status = Number(u.getAttribute("status")) || y.status, y.statusText = u.getAttribute("statusText") || y.statusText; else if (d) {
                                    var h = E.getElementsByTagName("pre")[0], m = E.getElementsByTagName("body")[0];
                                    h ? y.responseText = h.textContent ? h.textContent : h.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else"xml" == l && !y.responseXML && y.responseText && (y.responseXML = A(y.responseText));
                            try {
                                O = I(y, l, p)
                            } catch (e) {
                                o = "parsererror", y.error = n = e || o
                            }
                        } catch (e) {
                            i("error caught: ", e), o = "error", y.error = n = e || o
                        }
                        y.aborted && (i("upload aborted"), o = null), y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === o ? (p.success && p.success.call(p.context, O, "success", y), $.resolve(y.responseText, "success", y), f && e.event.trigger("ajaxSuccess", [y, p])) : o && (void 0 === n && (n = y.statusText), p.error && p.error.call(p.context, y, o, n), $.reject(y, "error", n), f && e.event.trigger("ajaxError", [y, p, n])), f && e.event.trigger("ajaxComplete", [y, p]), f && !--e.active && e.event.trigger("ajaxStop"), p.complete && p.complete.call(p.context, y, o), M = !0, p.timeout && clearTimeout(_), setTimeout(function () {
                            p.iframeTarget ? g.attr("src", p.iframeSrc) : g.remove(), y.responseXML = null
                        }, 100)
                    }
                }
            }

            var l, u, p, f, m, g, v, y, b, w, x, _, C = d[0], $ = e.Deferred();
            if ($.abort = function (e) {
                    y.abort(e)
                }, n)for (u = 0; u < h.length; u++)l = e(h[u]), o ? l.prop("disabled", !1) : l.removeAttr("disabled");
            if (p = e.extend(!0, {}, e.ajaxSettings, t), p.context = p.context || p, m = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (g = e(p.iframeTarget), w = g.attr2("name"), w ? m = w : g.attr2("name", m)) : (g = e('<iframe name="' + m + '" src="' + p.iframeSrc + '" />'), g.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), v = g[0], y = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        i("aborting upload... " + n), this.aborted = 1;
                        try {
                            v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                        } catch (e) {
                        }
                        g.attr("src", p.iframeSrc), y.error = n, p.error && p.error.call(p.context, y, n, t), f && e.event.trigger("ajaxError", [y, p, n]), p.complete && p.complete.call(p.context, y, n)
                    }
                }, f = p.global, f && 0 == e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [y, p]), p.beforeSend && !1 === p.beforeSend.call(p.context, y, p))return p.global && e.active--, $.reject(), $;
            if (y.aborted)return $.reject(), $;
            (b = C.clk) && (w = b.name) && !b.disabled && (p.extraData = p.extraData || {}, p.extraData[w] = b.value, "image" == b.type && (p.extraData[w + ".x"] = C.clk_x, p.extraData[w + ".y"] = C.clk_y));
            var k = 1, S = 2, T = e("meta[name=csrf-token]").attr("content"),
                j = e("meta[name=csrf-param]").attr("content");
            j && T && (p.extraData = p.extraData || {}, p.extraData[j] = T), p.forceSync ? a() : setTimeout(a, 10);
            var O, E, M, D = 50, A = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                }, P = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                }, I = function (t, n, i) {
                var r = t.getResponseHeader("content-type") || "", o = "xml" === n || !n && r.indexOf("xml") >= 0,
                    a = o ? t.responseXML : t.responseText;
                return o && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (a = i.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && r.indexOf("json") >= 0 ? a = P(a) : ("script" === n || !n && r.indexOf("javascript") >= 0) && e.globalEval(a)), a
            };
            return $
        }

        if (!this.length)return i("ajaxSubmit: skipping submit process - no element selected"), this;
        var s, c, l, d = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), s = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: s || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var u = {};
        if (this.trigger("form-pre-serialize", [this, t, u]), u.veto)return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t))return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var f, h = [], m = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, f = e.param(t.data, p)), t.beforeSubmit && !1 === t.beforeSubmit(m, this, t))return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [m, this, t, u]), u.veto)return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(m, p);
        f && (g = g ? g + "&" + f : f), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var v = [];
        if (t.resetForm && v.push(function () {
                d.resetForm()
            }), t.clearForm && v.push(function () {
                d.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {
                };
            v.push(function (n) {
                var i = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[i](n).each(y, arguments)
            })
        } else t.success && v.push(t.success);
        if (t.success = function (e, n, i) {
                for (var r = t.context || this, o = 0, a = v.length; o < a; o++)v[o].apply(r, [e, n, i || d, d])
            }, t.error) {
            var b = t.error;
            t.error = function (e, n, i) {
                var r = t.context || this;
                b.apply(r, [e, n, i, d])
            }
        }
        if (t.complete) {
            var w = t.complete;
            t.complete = function (e, n) {
                var i = t.context || this;
                w.apply(i, [e, n, d])
            }
        }
        var x = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }), _ = x.length > 0, C = "multipart/form-data", $ = d.attr("enctype") == C || d.attr("encoding") == C,
            k = r.fileapi && r.formdata;
        i("fileAPI :" + k);
        var S, T = (_ || $) && !k;
        !1 !== t.iframe && (t.iframe || T) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            S = a(m)
        }) : S = a(m) : S = (_ || $) && k ? function (i) {
            for (var r = new FormData, o = 0; o < i.length; o++)r.append(i[o].name, i[o].value);
            if (t.extraData) {
                var a = n(t.extraData);
                for (o = 0; o < a.length; o++)a[o] && r.append(a[o][0], a[o][1])
            }
            t.data = null;
            var c = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: s || "POST"
            });
            t.uploadProgress && (c.xhr = function () {
                var n = e.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress", function (e) {
                    var n = 0, i = e.loaded || e.position, r = e.total;
                    e.lengthComputable && (n = Math.ceil(i / r * 100)), t.uploadProgress(e, i, r, n)
                }, !1), n
            }), c.data = null;
            var l = c.beforeSend;
            return c.beforeSend = function (e, n) {
                t.formData ? n.data = t.formData : n.data = r, l && l.call(this, e, n)
            }, e.ajax(c)
        }(m) : e.ajax(t), d.removeData("jqxhr").data("jqxhr", S);
        for (var j = 0; j < h.length; j++)h[j] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (r) {
        if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
            var o = {s: this.selector, c: this.context};
            return !e.isReady && o.s ? (i("DOM not ready, queuing ajaxForm"), e(function () {
                e(o.s, o.c).ajaxForm(r)
            }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, n)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, n) {
        var i = [];
        if (0 === this.length)return i;
        var o, a = this[0], s = this.attr("id"), c = t ? a.getElementsByTagName("*") : a.elements;
        if (c && !/MSIE [678]/.test(navigator.userAgent) && (c = e(c).get()), s && (o = e(':input[form="' + s + '"]').get(), o.length && (c = (c || []).concat(o))), !c || !c.length)return i;
        var l, d, u, p, f, h, m;
        for (l = 0, h = c.length; l < h; l++)if (f = c[l], (u = f.name) && !f.disabled)if (t && a.clk && "image" == f.type) a.clk == f && (i.push({
            name: u,
            value: e(f).val(),
            type: f.type
        }), i.push({name: u + ".x", value: a.clk_x}, {
            name: u + ".y",
            value: a.clk_y
        })); else if ((p = e.fieldValue(f, !0)) && p.constructor == Array)for (n && n.push(f), d = 0, m = p.length; d < m; d++)i.push({
            name: u,
            value: p[d]
        }); else if (r.fileapi && "file" == f.type) {
            n && n.push(f);
            var g = f.files;
            if (g.length)for (d = 0; d < g.length; d++)i.push({
                name: u,
                value: g[d],
                type: f.type
            }); else i.push({name: u, value: "", type: f.type})
        } else null !== p && void 0 !== p && (n && n.push(f), i.push({
            name: u,
            value: p,
            type: f.type,
            required: f.required
        }));
        if (!t && a.clk) {
            var v = e(a.clk), y = v[0];
            u = y.name, u && !y.disabled && "image" == y.type && (i.push({
                name: u,
                value: v.val()
            }), i.push({name: u + ".x", value: a.clk_x}, {name: u + ".y", value: a.clk_y}))
        }
        return i
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var i = this.name;
            if (i) {
                var r = e.fieldValue(this, t);
                if (r && r.constructor == Array)for (var o = 0, a = r.length; o < a; o++)n.push({
                    name: i,
                    value: r[o]
                }); else null !== r && void 0 !== r && n.push({name: this.name, value: r})
            }
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], i = 0, r = this.length; i < r; i++) {
            var o = this[i], a = e.fieldValue(o, t);
            null === a || void 0 === a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
        }
        return n
    }, e.fieldValue = function (t, n) {
        var i = t.name, r = t.type, o = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == o && -1 == t.selectedIndex))return null;
        if ("select" == o) {
            var a = t.selectedIndex;
            if (a < 0)return null;
            for (var s = [], c = t.options, l = "select-one" == r, d = l ? a + 1 : c.length,
                     u = l ? a : 0; u < d; u++) {
                var p = c[u];
                if (p.selected) {
                    var f = p.value;
                    if (f || (f = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), l)return f;
                    s.push(f)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var i = this.type, r = this.tagName.toLowerCase();
            n.test(i) || "textarea" == r ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}), function (e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || n)
}(function (e) {
    var t = function (t, n, i) {
        var r = {
            invalid: [], getCaret: function () {
                try {
                    var e, n = 0, i = t.get(0), o = document.selection, a = i.selectionStart;
                    return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? (e = o.createRange(), e.moveStart("character", -r.val().length), n = e.text.length) : (a || "0" === a) && (n = a), n
                } catch (e) {
                }
            }, setCaret: function (e) {
                try {
                    if (t.is(":focus")) {
                        var n, i = t.get(0);
                        i.setSelectionRange ? i.setSelectionRange(e, e) : (n = i.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                    }
                } catch (e) {
                }
            }, events: function () {
                t.on("keydown.mask", function (e) {
                    t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val())
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour).on("paste.mask drop.mask", function () {
                    setTimeout(function () {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function () {
                    t.data("changed", !0)
                }).on("blur.mask", function () {
                    s === r.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                }).on("blur.mask", function () {
                    s = r.val()
                }).on("focus.mask", function (t) {
                    !0 === i.selectOnFocus && e(t.target).select()
                }).on("focusout.mask", function () {
                    i.clearIfNotMatch && !o.test(r.val()) && r.val("")
                })
            }, getRegexMask: function () {
                for (var e, t, i, r, o, s, c = [],
                         l = 0; l < n.length; l++)e = a.translation[n.charAt(l)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, r = e.recursive, r ? (c.push(n.charAt(l)), o = {
                    digit: n.charAt(l),
                    pattern: t
                }) : c.push(i || r ? t + "?" : t)) : c.push(n.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return s = c.join(""), o && (s = s.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(s)
            }, destroyEvents: function () {
                t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
            }, val: function (e) {
                var n, i = t.is("input"), r = i ? "val" : "text";
                return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
            }, calculateCaretPosition: function (e, n) {
                var i = n.length, r = t.data("mask-previus-value"), o = r.length;
                return 8 === t.data("mask-keycode") && r !== n ? e -= n.slice(0, e).length - r.slice(0, e).length : r !== n && (e >= o ? e = i : e += n.slice(0, e).length - r.slice(0, e).length), e
            }, behaviour: function (n) {
                n = n || window.event, r.invalid = [];
                var i = t.data("mask-keycode");
                if (-1 === e.inArray(i, a.byPassKeys)) {
                    var o = r.getMasked(), s = r.getCaret();
                    return setTimeout(function (e, t) {
                        r.setCaret(r.calculateCaretPosition(e, t))
                    }, 10, s, o), r.val(o), r.setCaret(s), r.callbacks(n)
                }
            }, getMasked: function (e, t) {
                var o, s, c = [], l = void 0 === t ? r.val() : t + "", d = 0, u = n.length, p = 0, f = l.length, h = 1,
                    m = "push", g = -1;
                i.reverse ? (m = "unshift", h = -1, o = 0, d = u - 1, p = f - 1, s = function () {
                    return d > -1 && p > -1
                }) : (o = u - 1, s = function () {
                    return d < u && p < f
                });
                for (var v; s();) {
                    var y = n.charAt(d), b = l.charAt(p), w = a.translation[y];
                    w ? (b.match(w.pattern) ? (c[m](b), w.recursive && (-1 === g ? g = d : d === o && (d = g - h), o === g && (d -= h)), d += h) : b === v ? v = void 0 : w.optional ? (d += h, p -= h) : w.fallback ? (c[m](w.fallback), d += h, p -= h) : r.invalid.push({
                        p: p,
                        v: b,
                        e: w.pattern
                    }), p += h) : (e || c[m](y), b === y ? p += h : v = y, d += h)
                }
                var x = n.charAt(o);
                return u !== f + 1 || a.translation[x] || c.push(x), c.join("")
            }, callbacks: function (e) {
                var o = r.val(), a = o !== s, c = [o, e, t, i], l = function (e, t, n) {
                    "function" == typeof i[e] && t && i[e].apply(this, n)
                };
                l("onChange", !0 === a, c), l("onKeyPress", !0 === a, c), l("onComplete", o.length === n.length, c), l("onInvalid", r.invalid.length > 0, [o, e, t, r.invalid, i])
            }
        };
        t = e(t);
        var o, a = this, s = r.val();
        n = "function" == typeof n ? n(r.val(), void 0, t, i) : n, a.mask = n, a.options = i, a.remove = function () {
            var e = r.getCaret();
            return r.destroyEvents(), r.val(a.getCleanVal()), r.setCaret(e), t
        }, a.getCleanVal = function () {
            return r.getMasked(!0)
        }, a.getMaskedVal = function (e) {
            return r.getMasked(!1, e)
        }, a.init = function (s) {
            if (s = s || !1, i = i || {}, a.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, a.byPassKeys = e.jMaskGlobals.byPassKeys, a.translation = e.extend({}, e.jMaskGlobals.translation, i.translation), a = e.extend(!0, {}, a, i), o = r.getRegexMask(), s) r.events(), r.val(r.getMasked()); else {
                i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off");
                for (var c = 0, l = !0; c < n.length; c++) {
                    var d = a.translation[n.charAt(c)];
                    if (d && d.recursive) {
                        l = !1;
                        break
                    }
                }
                l && t.attr("maxlength", n.length), r.destroyEvents(), r.events();
                var u = r.getCaret();
                r.val(r.getMasked()), r.setCaret(u)
            }
        }, a.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var n = function () {
        var n = e(this), r = {}, o = n.attr("data-mask");
        if (n.attr("data-mask-reverse") && (r.reverse = !0), n.attr("data-mask-clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (r.selectOnFocus = !0), i(n, o, r))return n.data("mask", new t(this, o, r))
    }, i = function (t, n, i) {
        i = i || {};
        var r = e(t).data("mask"), o = JSON.stringify, a = e(t).val() || e(t).text();
        try {
            return "function" == typeof n && (n = n(a)), "object" != typeof r || o(r.options) !== o(i) || r.mask !== n
        } catch (e) {
        }
    };
    e.fn.mask = function (n, r) {
        r = r || {};
        var o = this.selector, a = e.jMaskGlobals, s = a.watchInterval, c = r.watchInputs || a.watchInputs,
            l = function () {
                if (i(this, n, r))return e(this).data("mask", new t(this, n, r))
            };
        return e(this).each(l), o && "" !== o && c && (clearInterval(e.maskWatchers[o]), e.maskWatchers[o] = setInterval(function () {
            e(document).find(o).each(l)
        }, s)), this
    }, e.fn.masked = function (e) {
        return this.data("mask").getMaskedVal(e)
    }, e.fn.unmask = function () {
        return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function () {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, e.fn.cleanVal = function () {
        return this.data("mask").getCleanVal()
    }, e.applyDataMask = function (t) {
        t = t || e.jMaskGlobals.maskElements, (t instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(n)
    };
    var r = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && function (e) {
            var t, n = document.createElement("div");
            return e = "on" + e, t = e in n, t || (n.setAttribute(e, "return;"), t = "function" == typeof n[e]), n = null, t
        }("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {pattern: /\d/},
            9: {pattern: /\d/, optional: !0},
            "#": {pattern: /\d/, recursive: !0},
            A: {pattern: /[a-zA-Z0-9]/},
            S: {pattern: /[a-zA-Z]/}
        }
    };
    e.jMaskGlobals = e.jMaskGlobals || {}, r = e.jMaskGlobals = e.extend(!0, {}, r, e.jMaskGlobals), r.dataMask && e.applyDataMask(), setInterval(function () {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, r.watchInterval)
}, window.jQuery, window.Zepto), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var a = t || window.event, s = c.call(arguments, 1), l = 0, u = 0, p = 0, f = 0, h = 0, m = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (p = -1 * a.detail), "wheelDelta" in a && (p = a.wheelDelta), "wheelDeltaY" in a && (p = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * p, p = 0), l = 0 === p ? u : p, "deltaY" in a && (p = -1 * a.deltaY, l = p), "deltaX" in a && (u = a.deltaX, 0 === p && (l = -1 * u)), 0 !== p || 0 !== u) {
            if (1 === a.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                l *= g, p *= g, u *= g
            } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                l *= v, p *= v, u *= v
            }
            if (f = Math.max(Math.abs(p), Math.abs(u)), (!o || f < o) && (o = f, i(a, f) && (o /= 40)), i(a, f) && (l /= 40, u /= 40, p /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), d.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                h = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = u, t.deltaY = p, t.deltaFactor = o, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, s.unshift(t, l, u, p), r && clearTimeout(r), r = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function n() {
        o = null
    }

    function i(e, t) {
        return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }

    var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        c = Array.prototype.slice;
    if (e.event.fixHooks)for (var l = a.length; l;)e.event.fixHooks[a[--l]] = e.event.mouseHooks;
    var d = e.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener)for (var n = s.length; n;)this.addEventListener(s[--n], t, !1); else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var n = s.length; n;)this.removeEventListener(s[--n], t, !1); else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
            var n = e(t), i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.fn.jScrollPane = function (t) {
        function n(t, n) {
            function i(n) {
                var o, s, l, d, u, h, m = !1, g = !1;
                if (N = n, void 0 === q) u = t.scrollTop(), h = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), B = t.innerWidth() + ve, R = t.innerHeight(), t.width(B), q = e('<div class="jspPane" />').css("padding", ge).append(t.children()), z = e('<div class="jspContainer" />').css({
                    width: B + "px",
                    height: R + "px"
                }).append(q).appendTo(t); else {
                    if (t.css("width", ""), m = N.stickToBottom && S(), g = N.stickToRight && T(), d = t.innerWidth() + ve != B || t.outerHeight() != R, d && (B = t.innerWidth() + ve, R = t.innerHeight(), z.css({
                            width: B + "px",
                            height: R + "px"
                        })), !d && ye == W && q.outerHeight() == G)return void t.width(B);
                    ye = W, q.css("width", ""), t.width(B), z.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                q.css("overflow", "auto"), W = n.contentWidth ? n.contentWidth : q[0].scrollWidth, G = q[0].scrollHeight, q.css("overflow", ""), X = W / B, V = G / R, U = V > 1, Y = X > 1, Y || U ? (t.addClass("jspScrollable"), o = N.maintainPosition && (Z || te), o && (s = $(), l = k()), r(), a(), c(), o && (_(g ? W - B : s, !1), x(m ? G - R : l, !1)), M(), j(), F(), N.enableKeyboardNavigation && A(), N.clickOnTrack && p(), I(), N.hijackInternalLinks && H()) : (t.removeClass("jspScrollable"), q.css({
                    top: 0,
                    left: 0,
                    width: z.width() - ve
                }), O(), D(), P(), f()), N.autoReinitialise && !me ? me = setInterval(function () {
                    i(N)
                }, N.autoReinitialiseDelay) : !N.autoReinitialise && me && clearInterval(me), u && t.scrollTop(0) && x(u, !1), h && t.scrollLeft(0) && _(h, !1), t.trigger("jsp-initialised", [Y || U])
            }

            function r() {
                U && (z.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ne = z.find(">.jspVerticalBar"), ie = ne.find(">.jspTrack"), K = ie.find(">.jspDrag"), N.showArrows && (se = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", d(0, -1)).bind("click.jsp", E), ce = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", d(0, 1)).bind("click.jsp", E), N.arrowScrollOnHover && (se.bind("mouseover.jsp", d(0, -1, se)), ce.bind("mouseover.jsp", d(0, 1, ce))), l(ie, N.verticalArrowPositions, se, ce)), oe = R, z.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    oe -= e(this).outerHeight()
                }), K.hover(function () {
                    K.addClass("jspHover")
                }, function () {
                    K.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", E), K.addClass("jspActive");
                    var n = t.pageY - K.position().top;
                    return e("html").bind("mousemove.jsp", function (e) {
                        m(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), o())
            }

            function o() {
                ie.height(oe + "px"), Z = 0, re = N.verticalGutter + ie.outerWidth(), q.width(B - re - ve);
                try {
                    0 === ne.position().left && q.css("margin-left", re + "px")
                } catch (e) {
                }
            }

            function a() {
                Y && (z.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), le = z.find(">.jspHorizontalBar"), de = le.find(">.jspTrack"), J = de.find(">.jspDrag"), N.showArrows && (fe = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", d(-1, 0)).bind("click.jsp", E), he = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", d(1, 0)).bind("click.jsp", E), N.arrowScrollOnHover && (fe.bind("mouseover.jsp", d(-1, 0, fe)), he.bind("mouseover.jsp", d(1, 0, he))), l(de, N.horizontalArrowPositions, fe, he)), J.hover(function () {
                    J.addClass("jspHover")
                }, function () {
                    J.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", E), J.addClass("jspActive");
                    var n = t.pageX - J.position().left;
                    return e("html").bind("mousemove.jsp", function (e) {
                        v(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), ue = z.innerWidth(), s())
            }

            function s() {
                z.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    ue -= e(this).outerWidth()
                }), de.width(ue + "px"), te = 0
            }

            function c() {
                if (Y && U) {
                    var t = de.outerHeight(), n = ie.outerWidth();
                    oe -= t, e(le).find(">.jspCap:visible,>.jspArrow").each(function () {
                        ue += e(this).outerWidth()
                    }), ue -= n, R -= n, B -= t, de.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), o(), s()
                }
                Y && q.width(z.outerWidth() - ve + "px"), G = q.outerHeight(), V = G / R, Y && (pe = Math.ceil(1 / X * ue), pe > N.horizontalDragMaxWidth ? pe = N.horizontalDragMaxWidth : pe < N.horizontalDragMinWidth && (pe = N.horizontalDragMinWidth), J.width(pe + "px"), ee = ue - pe, y(te)), U && (ae = Math.ceil(1 / V * oe), ae > N.verticalDragMaxHeight ? ae = N.verticalDragMaxHeight : ae < N.verticalDragMinHeight && (ae = N.verticalDragMinHeight), K.height(ae + "px"), Q = oe - ae, g(Z))
            }

            function l(e, t, n, i) {
                var r, o = "before", a = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == o ? a = t : t == a && (o = t, r = n, n = i, i = r), e[o](n)[a](i)
            }

            function d(e, t, n) {
                return function () {
                    return u(e, t, this, n), this.blur(), !1
                }
            }

            function u(t, n, i, r) {
                i = e(i).addClass("jspActive");
                var o, a, s = !0, c = function () {
                    0 !== t && be.scrollByX(t * N.arrowButtonSpeed), 0 !== n && be.scrollByY(n * N.arrowButtonSpeed), a = setTimeout(c, s ? N.initialDelay : N.arrowRepeatFreq), s = !1
                };
                c(), o = r ? "mouseout.jsp" : "mouseup.jsp", r = r || e("html"), r.bind(o, function () {
                    i.removeClass("jspActive"), a && clearTimeout(a), a = null, r.unbind(o)
                })
            }

            function p() {
                f(), U && ie.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), r = i.offset(), o = t.pageY - r.top - Z, a = !0, s = function () {
                            var e = i.offset(), r = t.pageY - e.top - ae / 2, l = R * N.scrollPagePercent,
                                d = Q * l / (G - R);
                            if (o < 0) Z - d > r ? be.scrollByY(-l) : m(r); else {
                                if (!(o > 0))return void c();
                                Z + d < r ? be.scrollByY(l) : m(r)
                            }
                            n = setTimeout(s, a ? N.initialDelay : N.trackClickRepeatFreq), a = !1
                        }, c = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                        };
                        return s(), e(document).bind("mouseup.jsp", c), !1
                    }
                }), Y && de.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), r = i.offset(), o = t.pageX - r.left - te, a = !0, s = function () {
                            var e = i.offset(), r = t.pageX - e.left - pe / 2, l = B * N.scrollPagePercent,
                                d = ee * l / (W - B);
                            if (o < 0) te - d > r ? be.scrollByX(-l) : v(r); else {
                                if (!(o > 0))return void c();
                                te + d < r ? be.scrollByX(l) : v(r)
                            }
                            n = setTimeout(s, a ? N.initialDelay : N.trackClickRepeatFreq), a = !1
                        }, c = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                        };
                        return s(), e(document).bind("mouseup.jsp", c), !1
                    }
                })
            }

            function f() {
                de && de.unbind("mousedown.jsp"), ie && ie.unbind("mousedown.jsp")
            }

            function h() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), K && K.removeClass("jspActive"), J && J.removeClass("jspActive")
            }

            function m(n, i) {
                if (U) {
                    n < 0 ? n = 0 : n > Q && (n = Q);
                    var r = new e.Event("jsp-will-scroll-y");
                    if (t.trigger(r, [n]), !r.isDefaultPrevented()) {
                        var o = n || 0, a = 0 === o, s = o == Q, c = n / Q, l = -c * (G - R);
                        void 0 === i && (i = N.animateScroll), i ? be.animate(K, "top", n, g, function () {
                            t.trigger("jsp-user-scroll-y", [-l, a, s])
                        }) : (K.css("top", n), g(n), t.trigger("jsp-user-scroll-y", [-l, a, s]))
                    }
                }
            }

            function g(e) {
                void 0 === e && (e = K.position().top), z.scrollTop(0), Z = e || 0;
                var n = 0 === Z, i = Z == Q, r = e / Q, o = -r * (G - R);
                we == n && _e == i || (we = n, _e = i, t.trigger("jsp-arrow-change", [we, _e, xe, Ce])), b(n, i), q.css("top", o), t.trigger("jsp-scroll-y", [-o, n, i]).trigger("scroll")
            }

            function v(n, i) {
                if (Y) {
                    n < 0 ? n = 0 : n > ee && (n = ee);
                    var r = new e.Event("jsp-will-scroll-x");
                    if (t.trigger(r, [n]), !r.isDefaultPrevented()) {
                        var o = n || 0, a = 0 === o, s = o == ee, c = n / ee, l = -c * (W - B);
                        void 0 === i && (i = N.animateScroll), i ? be.animate(J, "left", n, y, function () {
                            t.trigger("jsp-user-scroll-x", [-l, a, s])
                        }) : (J.css("left", n), y(n), t.trigger("jsp-user-scroll-x", [-l, a, s]))
                    }
                }
            }

            function y(e) {
                void 0 === e && (e = J.position().left), z.scrollTop(0), te = e || 0;
                var n = 0 === te, i = te == ee, r = e / ee, o = -r * (W - B);
                xe == n && Ce == i || (xe = n, Ce = i, t.trigger("jsp-arrow-change", [we, _e, xe, Ce])), w(n, i), q.css("left", o), t.trigger("jsp-scroll-x", [-o, n, i]).trigger("scroll")
            }

            function b(e, t) {
                N.showArrows && (se[e ? "addClass" : "removeClass"]("jspDisabled"), ce[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function w(e, t) {
                N.showArrows && (fe[e ? "addClass" : "removeClass"]("jspDisabled"), he[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function x(e, t) {
                m(e / (G - R) * Q, t)
            }

            function _(e, t) {
                v(e / (W - B) * ee, t)
            }

            function C(t, n, i) {
                var r, o, a, s, c, l, d, u, p, f = 0, h = 0;
                try {
                    r = e(t)
                } catch (e) {
                    return
                }
                for (o = r.outerHeight(), a = r.outerWidth(), z.scrollTop(0), z.scrollLeft(0); !r.is(".jspPane");)if (f += r.position().top, h += r.position().left, r = r.offsetParent(), /^body|html$/i.test(r[0].nodeName))return;
                s = k(), l = s + R, f < s || n ? u = f - N.horizontalGutter : f + o > l && (u = f - R + o + N.horizontalGutter), isNaN(u) || x(u, i), c = $(), d = c + B, h < c || n ? p = h - N.horizontalGutter : h + a > d && (p = h - B + a + N.horizontalGutter), isNaN(p) || _(p, i)
            }

            function $() {
                return -q.position().left
            }

            function k() {
                return -q.position().top
            }

            function S() {
                var e = G - R;
                return e > 20 && e - k() < 10
            }

            function T() {
                var e = W - B;
                return e > 20 && e - $() < 10
            }

            function j() {
                z.unbind(ke).bind(ke, function (e, t, n, i) {
                    te || (te = 0), Z || (Z = 0);
                    var r = te, o = Z, a = e.deltaFactor || N.mouseWheelSpeed;
                    return be.scrollBy(n * a, -i * a, !1), r == te && o == Z
                })
            }

            function O() {
                z.unbind(ke)
            }

            function E() {
                return !1
            }

            function M() {
                q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (e) {
                    C(e.target, !1)
                })
            }

            function D() {
                q.find(":input,a").unbind("focus.jsp")
            }

            function A() {
                function n() {
                    var e = te, t = Z;
                    switch (i) {
                        case 40:
                            be.scrollByY(N.keyboardSpeed, !1);
                            break;
                        case 38:
                            be.scrollByY(-N.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            be.scrollByY(R * N.scrollPagePercent, !1);
                            break;
                        case 33:
                            be.scrollByY(-R * N.scrollPagePercent, !1);
                            break;
                        case 39:
                            be.scrollByX(N.keyboardSpeed, !1);
                            break;
                        case 37:
                            be.scrollByX(-N.keyboardSpeed, !1)
                    }
                    return r = e != te || t != Z
                }

                var i, r, o = [];
                Y && o.push(le[0]), U && o.push(ne[0]), q.bind("focus.jsp", function () {
                    t.focus()
                }), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (t) {
                    if (t.target === this || o.length && e(t.target).closest(o).length) {
                        var a = te, s = Z;
                        switch (t.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                i = t.keyCode, n();
                                break;
                            case 35:
                                x(G - R), i = null;
                                break;
                            case 36:
                                x(0), i = null
                        }
                        return !(r = t.keyCode == i && a != te || s != Z)
                    }
                }).bind("keypress.jsp", function (t) {
                    if (t.keyCode == i && n(), t.target === this || o.length && e(t.target).closest(o).length)return !r
                }), N.hideFocus ? (t.css("outline", "none"), "hideFocus" in z[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in z[0] && t.attr("hideFocus", !1))
            }

            function P() {
                t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), q.unbind(".jsp")
            }

            function I() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, i = escape(location.hash.substr(1));
                    try {
                        t = e("#" + i + ', a[name="' + i + '"]')
                    } catch (e) {
                        return
                    }
                    t.length && q.find(i) && (0 === z.scrollTop() ? n = setInterval(function () {
                        z.scrollTop() > 0 && (C(t, !0), e(document).scrollTop(z.position().top), clearInterval(n))
                    }, 50) : (C(t, !0), e(document).scrollTop(z.position().top)))
                }
            }

            function H() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate('a[href*="#"]', "click", function (t) {
                    var n, i, r, o, a, s, c = this.href.substr(0, this.href.indexOf("#")), l = location.href;
                    if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), c === l) {
                        n = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            i = e("#" + n + ', a[name="' + n + '"]')
                        } catch (e) {
                            return
                        }
                        i.length && (r = i.closest(".jspScrollable"), o = r.data("jsp"), o.scrollToElement(i, !0), r[0].scrollIntoView && (a = e(window).scrollTop(), ((s = i.offset().top) < a || s > a + e(window).height()) && r[0].scrollIntoView()), t.preventDefault())
                    }
                }))
            }

            function F() {
                var e, t, n, i, r, o = !1;
                z.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (a) {
                    var s = a.originalEvent.touches[0];
                    e = $(), t = k(), n = s.pageX, i = s.pageY, r = !1, o = !0
                }).bind("touchmove.jsp", function (a) {
                    if (o) {
                        var s = a.originalEvent.touches[0], c = te, l = Z;
                        return be.scrollTo(e + n - s.pageX, t + i - s.pageY), r = r || Math.abs(n - s.pageX) > 5 || Math.abs(i - s.pageY) > 5, c == te && l == Z
                    }
                }).bind("touchend.jsp", function (e) {
                    o = !1
                }).bind("click.jsp-touchclick", function (e) {
                    if (r)return r = !1, !1
                })
            }

            function L() {
                var e = k(), n = $();
                t.removeClass("jspScrollable").unbind(".jsp"), q.unbind(".jsp"), t.replaceWith($e.append(q.children())), $e.scrollTop(e), $e.scrollLeft(n), me && clearInterval(me)
            }

            var N, q, B, R, z, W, G, X, V, U, Y, K, Q, Z, J, ee, te, ne, ie, re, oe, ae, se, ce, le, de, ue, pe, fe, he,
                me, ge, ve, ye, be = this, we = !0, xe = !0, _e = !1, Ce = !1, $e = t.clone(!1, !1).empty(),
                ke = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === t.css("box-sizing") ? (ge = 0, ve = 0) : (ge = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), ve = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(be, {
                reinitialise: function (t) {
                    t = e.extend({}, N, t), i(t)
                }, scrollToElement: function (e, t, n) {
                    C(e, t, n)
                }, scrollTo: function (e, t, n) {
                    _(e, n), x(t, n)
                }, scrollToX: function (e, t) {
                    _(e, t)
                }, scrollToY: function (e, t) {
                    x(e, t)
                }, scrollToPercentX: function (e, t) {
                    _(e * (W - B), t)
                }, scrollToPercentY: function (e, t) {
                    x(e * (G - R), t)
                }, scrollBy: function (e, t, n) {
                    be.scrollByX(e, n), be.scrollByY(t, n)
                }, scrollByX: function (e, t) {
                    v(($() + Math[e < 0 ? "floor" : "ceil"](e)) / (W - B) * ee, t)
                }, scrollByY: function (e, t) {
                    m((k() + Math[e < 0 ? "floor" : "ceil"](e)) / (G - R) * Q, t)
                }, positionDragX: function (e, t) {
                    v(e, t)
                }, positionDragY: function (e, t) {
                    m(e, t)
                }, animate: function (e, t, n, i, r) {
                    var o = {};
                    o[t] = n, e.animate(o, {
                        duration: N.animateDuration,
                        easing: N.animateEase,
                        queue: !1,
                        step: i,
                        complete: r
                    })
                }, getContentPositionX: function () {
                    return $()
                }, getContentPositionY: function () {
                    return k()
                }, getContentWidth: function () {
                    return W
                }, getContentHeight: function () {
                    return G
                }, getPercentScrolledX: function () {
                    return $() / (W - B)
                }, getPercentScrolledY: function () {
                    return k() / (G - R)
                }, getIsScrollableH: function () {
                    return Y
                }, getIsScrollableV: function () {
                    return U
                }, getContentPane: function () {
                    return q
                }, scrollToBottom: function (e) {
                    m(Q, e)
                }, hijackInternalLinks: e.noop, destroy: function () {
                    L()
                }
            }), i(n)
        }

        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            t[this] = t[this] || t.speed
        }), this.each(function () {
            var i = e(this), r = i.data("jsp");
            r ? r.reinitialise(t) : (e("script", i).filter('[type="text/javascript"],:not([type])').remove(), r = new n(i, t), i.data("jsp", r))
        })
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}), function (e) {
    var t = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function () {
            return !0
        },
        onSlideBefore: function () {
            return !0
        },
        onSlideAfter: function () {
            return !0
        },
        onSlideNext: function () {
            return !0
        },
        onSlidePrev: function () {
            return !0
        },
        onSliderResize: function () {
            return !0
        }
    };
    e.fn.bxSlider = function (n) {
        if (0 === this.length)return this;
        if (this.length > 1)return this.each(function () {
            e(this).bxSlider(n)
        }), this;
        var r = {}, o = this, a = e(window).width(), s = e(window).height();
        if (!e(o).data("bxSlider")) {
            var c = function () {
                e(o).data("bxSlider") || (r.settings = e.extend({}, t, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {index: r.settings.startSlide}, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode && function () {
                        for (var e = document.createElement("div"),
                                 t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                 n = 0; n < t.length; n++)if (void 0 !== e.style[t[n]])return r.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function () {
                    e(this).data("origStyle", e(this).attr("style"))
                }), l())
            }, l = function () {
                var t = r.children.eq(r.settings.startSlide);
                o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), r.viewport = o.parent(), r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"), r.loader = e('<div class="bx-loading" />'), r.viewport.prepend(r.loader), o.css({
                    width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"), r.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), r.viewport.parent().css({maxWidth: f()}), r.children.css({
                    float: "horizontal" === r.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), r.children.css("width", h()), "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" === r.settings.mode && (r.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), r.children.eq(r.settings.startSlide).css({
                    zIndex: r.settings.slideZIndex,
                    display: "block"
                })), r.controls.el = e('<div class="bx-controls" />'), r.settings.captions && $(), r.active.last = r.settings.startSlide === g() - 1, r.settings.video && o.fitVids(), ("all" === r.settings.preloadImages || r.settings.ticker) && (t = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && _(), r.settings.auto && r.settings.autoControls && C(), r.settings.pager && x(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), d(t, u)
            }, d = function (t, n) {
                var i = t.find('img:not([src=""]), iframe').length, r = 0;
                if (0 === i)return void n();
                t.find('img:not([src=""]), iframe').each(function () {
                    e(this).one("load error", function () {
                        ++r === i && n()
                    }).each(function () {
                        this.complete && e(this).trigger("load")
                    })
                })
            }, u = function () {
                if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
                    var t = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
                        n = r.children.slice(0, t).clone(!0).addClass("bx-clone"),
                        i = r.children.slice(-t).clone(!0).addClass("bx-clone");
                    r.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)), o.append(n).prepend(i)
                }
                r.loader.remove(), y(), "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(p()), o.redrawSlider(), r.settings.onSliderLoad.call(o, r.active.index), r.initialized = !0, r.settings.responsive && e(window).bind("resize", W), r.settings.auto && r.settings.autoStart && (g() > 1 || r.settings.autoSlideForOnePage) && P(), r.settings.ticker && I(), r.settings.pager && E(r.settings.startSlide), r.settings.controls && A(), r.settings.touchEnabled && !r.settings.ticker && N(), r.settings.keyboardEnabled && !r.settings.ticker && e(document).keydown(L)
            }, p = function () {
                var t = 0, n = e();
                if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)if (r.carousel) {
                    var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * v();
                    for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++)n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
                } else n = r.children.eq(r.active.index); else n = r.children;
                return "vertical" === r.settings.mode ? (n.each(function (n) {
                    t += e(this).outerHeight()
                }), r.settings.slideMargin > 0 && (t += r.settings.slideMargin * (r.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function () {
                    return e(this).outerHeight(!1)
                }).get()), "border-box" === r.viewport.css("box-sizing") ? t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), t
            }, f = function () {
                var e = "100%";
                return r.settings.slideWidth > 0 && (e = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), e
            }, h = function () {
                var e = r.settings.slideWidth, t = r.viewport.width();
                if (0 === r.settings.slideWidth || r.settings.slideWidth > t && !r.carousel || "vertical" === r.settings.mode) e = t; else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
                    if (t > r.maxThreshold)return e;
                    t < r.minThreshold ? e = (t - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides : r.settings.shrinkItems && (e = Math.floor((t + r.settings.slideMargin) / Math.ceil((t + r.settings.slideMargin) / (e + r.settings.slideMargin)) - r.settings.slideMargin))
                }
                return e
            }, m = function () {
                var e = 1, t = null;
                return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? e = r.settings.minSlides : r.viewport.width() > r.maxThreshold ? e = r.settings.maxSlides : (t = r.children.first().width() + r.settings.slideMargin, e = Math.floor((r.viewport.width() + r.settings.slideMargin) / t)) : "vertical" === r.settings.mode && (e = r.settings.minSlides), e
            }, g = function () {
                var e = 0, t = 0, n = 0;
                if (r.settings.moveSlides > 0)if (r.settings.infiniteLoop) e = Math.ceil(r.children.length / v()); else for (; t < r.children.length;)++e, t = n + m(), n += r.settings.moveSlides <= m() ? r.settings.moveSlides : m(); else e = Math.ceil(r.children.length / m());
                return e
            }, v = function () {
                return r.settings.moveSlides > 0 && r.settings.moveSlides <= m() ? r.settings.moveSlides : m()
            }, y = function () {
                var e, t, n;
                r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (t = r.children.last(), e = t.position(), b(-(e.left - (r.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (n = r.children.length - r.settings.minSlides, e = r.children.eq(n).position(), b(-e.top, "reset", 0)) : (e = r.children.eq(r.active.index * v()).position(), r.active.index === g() - 1 && (r.active.last = !0), void 0 !== e && ("horizontal" === r.settings.mode ? b(-e.left, "reset", 0) : "vertical" === r.settings.mode && b(-e.top, "reset", 0)))
            }, b = function (t, n, i, a) {
                var s, c;
                r.usingCSS ? (c = "vertical" === r.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (o.css(r.animProp, c), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (t) {
                    e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M())
                }) : M()) : "reset" === n ? o.css(r.animProp, c) : "ticker" === n && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, c), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (t) {
                        e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(a.resetValue, "reset", 0), H())
                    }) : (b(a.resetValue, "reset", 0), H()))) : (s = {}, s[r.animProp] = t, "slide" === n ? o.animate(s, i, r.settings.easing, function () {
                    M()
                }) : "reset" === n ? o.css(r.animProp, t) : "ticker" === n && o.animate(s, i, "linear", function () {
                        b(a.resetValue, "reset", 0), H()
                    }))
            }, w = function () {
                for (var t = "", n = "", i = g(),
                         o = 0; o < i; o++)n = "", r.settings.buildPager && e.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (n = r.settings.buildPager(o), r.pagerEl.addClass("bx-custom-pager")) : (n = o + 1, r.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + n + "</a></div>";
                r.pagerEl.html(t)
            }, x = function () {
                r.settings.pagerCustom ? r.pagerEl = e(r.settings.pagerCustom) : (r.pagerEl = e('<div class="bx-pager" />'), r.settings.pagerSelector ? e(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), w()), r.pagerEl.on("click touchend", "a", O)
            }, _ = function () {
                r.controls.next = e('<a class="bx-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = e('<a class="bx-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click touchend", k), r.controls.prev.bind("click touchend", S), r.settings.nextSelector && e(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && e(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = e('<div class="bx-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))
            }, C = function () {
                r.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = e('<div class="bx-controls-auto" />'), r.controls.autoEl.on("click", ".bx-start", T), r.controls.autoEl.on("click", ".bx-stop", j), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? e(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl), D(r.settings.autoStart ? "stop" : "start")
            }, $ = function () {
                r.children.each(function (t) {
                    var n = e(this).find("img:first").attr("title");
                    void 0 !== n && ("" + n).length && e(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
                })
            }, k = function (e) {
                e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
            }, S = function (e) {
                e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
            }, T = function (e) {
                o.startAuto(), e.preventDefault()
            }, j = function (e) {
                o.stopAuto(), e.preventDefault()
            }, O = function (t) {
                var n, i;
                t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), n = e(t.currentTarget), void 0 !== n.attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index"))) !== r.active.index && o.goToSlide(i))
            }, E = function (t) {
                var n = r.children.length;
                if ("short" === r.settings.pagerType)return r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(t + 1 + r.settings.pagerShortSeparator + n);
                r.pagerEl.find("a").removeClass("active"), r.pagerEl.each(function (n, i) {
                    e(i).find("a").eq(t).addClass("active")
                })
            }, M = function () {
                if (r.settings.infiniteLoop) {
                    var e = "";
                    0 === r.active.index ? e = r.children.eq(0).position() : r.active.index === g() - 1 && r.carousel ? e = r.children.eq((g() - 1) * v()).position() : r.active.index === r.children.length - 1 && (e = r.children.eq(r.children.length - 1).position()), e && ("horizontal" === r.settings.mode ? b(-e.left, "reset", 0) : "vertical" === r.settings.mode && b(-e.top, "reset", 0))
                }
                r.working = !1, r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)
            }, D = function (e) {
                r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[e]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
            }, A = function () {
                1 === g() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === g() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
            }, P = function () {
                if (r.settings.autoDelay > 0) {
                    setTimeout(o.startAuto, r.settings.autoDelay)
                } else o.startAuto(), e(window).focus(function () {
                    o.startAuto()
                }).blur(function () {
                    o.stopAuto()
                });
                r.settings.autoHover && o.hover(function () {
                    r.interval && (o.stopAuto(!0), r.autoPaused = !0)
                }, function () {
                    r.autoPaused && (o.startAuto(!0), r.autoPaused = null)
                })
            }, I = function () {
                var t, n, i, a, s, c, l, d, u = 0;
                "next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("bx-clone")) : (o.prepend(r.children.clone().addClass("bx-clone")), t = r.children.first().position(), u = "horizontal" === r.settings.mode ? -t.left : -t.top), b(u, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && (r.usingCSS ? (a = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function () {
                    n = o.css("-" + r.cssPrefix + "-transform"), i = parseFloat(n.split(",")[a]), b(i, "reset", 0)
                }, function () {
                    d = 0, r.children.each(function (t) {
                        d += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                    }), s = r.settings.speed / d, c = "horizontal" === r.settings.mode ? "left" : "top", l = s * (d - Math.abs(parseInt(i))), H(l)
                })) : r.viewport.hover(function () {
                    o.stop()
                }, function () {
                    d = 0, r.children.each(function (t) {
                        d += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                    }), s = r.settings.speed / d, c = "horizontal" === r.settings.mode ? "left" : "top", l = s * (d - Math.abs(parseInt(o.css(c)))), H(l)
                })), H()
            }, H = function (e) {
                var t, n, i, a = e || r.settings.speed, s = {left: 0, top: 0}, c = {left: 0, top: 0};
                "next" === r.settings.autoDirection ? s = o.find(".bx-clone").first().position() : c = r.children.first().position(), t = "horizontal" === r.settings.mode ? -s.left : -s.top, n = "horizontal" === r.settings.mode ? -c.left : -c.top, i = {resetValue: n}, b(t, "ticker", a, i)
            }, F = function (t) {
                var n = e(window), i = {top: n.scrollTop(), left: n.scrollLeft()}, r = t.offset();
                return i.right = i.left + n.width(), i.bottom = i.top + n.height(), r.right = r.left + t.outerWidth(), r.bottom = r.top + t.outerHeight(), !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom)
            }, L = function (e) {
                var t = document.activeElement.tagName.toLowerCase();
                if (null == new RegExp(t, ["i"]).exec("input|textarea") && F(o)) {
                    if (39 === e.keyCode)return k(e), !1
                        ;
                    if (37 === e.keyCode)return S(e), !1
                }
            }, N = function () {
                r.touch = {
                    start: {x: 0, y: 0},
                    end: {x: 0, y: 0}
                }, r.viewport.bind("touchstart MSPointerDown pointerdown", q), r.viewport.on("click", ".bxslider a", function (e) {
                    r.viewport.hasClass("click-disabled") && (e.preventDefault(), r.viewport.removeClass("click-disabled"))
                })
            }, q = function (e) {
                if (r.controls.el.addClass("disabled"), r.working) e.preventDefault(), r.controls.el.removeClass("disabled"); else {
                    r.touch.originalPos = o.position();
                    var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t];
                    if ("function" == typeof PointerEvent && void 0 === t.pointerId)return;
                    r.touch.start.x = n[0].pageX, r.touch.start.y = n[0].pageY, r.viewport.get(0).setPointerCapture && (r.pointerId = t.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)), r.viewport.bind("touchmove MSPointerMove pointermove", R), r.viewport.bind("touchend MSPointerUp pointerup", z), r.viewport.bind("MSPointerCancel pointercancel", B)
                }
            }, B = function (e) {
                b(r.touch.originalPos.left, "reset", 0), r.controls.el.removeClass("disabled"), r.viewport.unbind("MSPointerCancel pointercancel", B), r.viewport.unbind("touchmove MSPointerMove pointermove", R), r.viewport.unbind("touchend MSPointerUp pointerup", z), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
            }, R = function (e) {
                var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t],
                    i = Math.abs(n[0].pageX - r.touch.start.x), o = Math.abs(n[0].pageY - r.touch.start.y), a = 0,
                    s = 0;
                3 * i > o && r.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * o > i && r.settings.preventDefaultSwipeY && e.preventDefault(), "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (s = n[0].pageX - r.touch.start.x, a = r.touch.originalPos.left + s) : (s = n[0].pageY - r.touch.start.y, a = r.touch.originalPos.top + s), b(a, "reset", 0))
            }, z = function (e) {
                r.viewport.unbind("touchmove MSPointerMove pointermove", R), r.controls.el.removeClass("disabled");
                var t = e.originalEvent, n = void 0 !== t.changedTouches ? t.changedTouches : [t], i = 0, a = 0;
                r.touch.end.x = n[0].pageX, r.touch.end.y = n[0].pageY, "fade" === r.settings.mode ? (a = Math.abs(r.touch.start.x - r.touch.end.x)) >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : ("horizontal" === r.settings.mode ? (a = r.touch.end.x - r.touch.start.x, i = r.touch.originalPos.left) : (a = r.touch.end.y - r.touch.start.y, i = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && a > 0 || r.active.last && a < 0) ? b(i, "reset", 200) : Math.abs(a) >= r.settings.swipeThreshold ? (a < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : b(i, "reset", 200)), r.viewport.unbind("touchend MSPointerUp pointerup", z), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
            }, W = function (t) {
                if (r.initialized)if (r.working) window.setTimeout(W, 10); else {
                    var n = e(window).width(), i = e(window).height();
                    a === n && s === i || (a = n, s = i, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index))
                }
            }, G = function (e) {
                var t = m();
                r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(e, e + t).attr("aria-hidden", "false"))
            }, X = function (e) {
                return e < 0 ? r.settings.infiniteLoop ? g() - 1 : r.active.index : e >= g() ? r.settings.infiniteLoop ? 0 : r.active.index : e
            };
            return o.goToSlide = function (t, n) {
                var i, a, s, c, l = !0, d = 0, u = {left: 0, top: 0}, f = null;
                if (r.oldIndex = r.active.index, r.active.index = X(t), !r.working && r.active.index !== r.oldIndex) {
                    if (r.working = !0, void 0 !== (l = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)) && !l)return r.active.index = r.oldIndex, void(r.working = !1);
                    "next" === n ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (l = !1) : "prev" === n && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (l = !1)), r.active.last = r.active.index >= g() - 1, (r.settings.pager || r.settings.pagerCustom) && E(r.active.index), r.settings.controls && A(), "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== p() && r.viewport.animate({height: p()}, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({zIndex: 0}), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function () {
                        e(this).css("zIndex", r.settings.slideZIndex), M()
                    })) : (r.settings.adaptiveHeight && r.viewport.height() !== p() && r.viewport.animate({height: p()}, r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (f = r.children.eq(r.children.length - 1), u = f.position(), d = r.viewport.width() - f.outerWidth()) : (i = r.children.length - r.settings.minSlides, u = r.children.eq(i).position()) : r.carousel && r.active.last && "prev" === n ? (a = 1 === r.settings.moveSlides ? r.settings.maxSlides - v() : (g() - 1) * v() - (r.children.length - r.settings.maxSlides), f = o.children(".bx-clone").eq(a), u = f.position()) : "next" === n && 0 === r.active.index ? (u = o.find("> .bx-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : t >= 0 && (c = t * parseInt(v()), u = r.children.eq(c).position()), void 0 !== u ? (s = "horizontal" === r.settings.mode ? -(u.left - d) : -u.top, b(s, "slide", r.settings.speed)) : r.working = !1), r.settings.ariaHidden && G(r.active.index * v())
                }
            }, o.goToNextSlide = function () {
                if (r.settings.infiniteLoop || !r.active.last) {
                    var e = parseInt(r.active.index) + 1;
                    o.goToSlide(e, "next")
                }
            }, o.goToPrevSlide = function () {
                if (r.settings.infiniteLoop || 0 !== r.active.index) {
                    var e = parseInt(r.active.index) - 1;
                    o.goToSlide(e, "prev")
                }
            }, o.startAuto = function (e) {
                r.interval || (r.interval = setInterval(function () {
                    "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                }, r.settings.pause), r.settings.autoControls && !0 !== e && D("stop"))
            }, o.stopAuto = function (e) {
                r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && !0 !== e && D("start"))
            }, o.getCurrentSlide = function () {
                return r.active.index
            }, o.getCurrentSlideElement = function () {
                return r.children.eq(r.active.index)
            }, o.getSlideElement = function (e) {
                return r.children.eq(e)
            }, o.getSlideCount = function () {
                return r.children.length
            }, o.isWorking = function () {
                return r.working
            }, o.redrawSlider = function () {
                r.children.add(o.find(".bx-clone")).outerWidth(h()), r.viewport.css("height", p()), r.settings.ticker || y(), r.active.last && (r.active.index = g() - 1), r.active.index >= g() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && (w(), E(r.active.index)), r.settings.ariaHidden && G(r.active.index * v())
            }, o.destroySlider = function () {
                r.initialized && (r.initialized = !1, e(".bx-clone", this).remove(), r.children.each(function () {
                    void 0 !== e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                }), void 0 !== e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), e(".bx-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && e(window).unbind("resize", W), r.settings.keyboardEnabled && e(document).unbind("keydown", L), e(this).removeData("bxSlider"))
            }, o.reloadSlider = function (t) {
                void 0 !== t && (n = t), o.destroySlider(), c(), e(o).data("bxSlider", this)
            }, c(), e(o).data("bxSlider", this), this
        }
    }
}(jQuery), function (e, t) {
    "function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    var t = function () {
        "use strict";
        return {
            isMsie: function () {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            }, isBlankString: function (e) {
                return !e || /^\s*$/.test(e)
            }, escapeRegExChars: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (e) {
                return "string" == typeof e
            }, isNumber: function (e) {
                return "number" == typeof e
            }, isArray: e.isArray, isFunction: e.isFunction, isObject: e.isPlainObject, isUndefined: function (e) {
                return void 0 === e
            }, isElement: function (e) {
                return !(!e || 1 !== e.nodeType)
            }, isJQuery: function (t) {
                return t instanceof e
            }, toStr: function (e) {
                return t.isUndefined(e) || null === e ? "" : e + ""
            }, bind: e.proxy, each: function (t, n) {
                function i(e, t) {
                    return n(t, e)
                }

                e.each(t, i)
            }, map: e.map, filter: e.grep, every: function (t, n) {
                var i = !0;
                return t ? (e.each(t, function (e, r) {
                    return !!(i = n.call(null, r, e, t)) && void 0
                }), !!i) : i
            }, some: function (t, n) {
                var i = !1;
                return t ? (e.each(t, function (e, r) {
                    return !(i = n.call(null, r, e, t)) && void 0
                }), !!i) : i
            }, mixin: e.extend, identity: function (e) {
                return e
            }, clone: function (t) {
                return e.extend(!0, {}, t)
            }, getIdGenerator: function () {
                var e = 0;
                return function () {
                    return e++
                }
            }, templatify: function (t) {
                function n() {
                    return String(t)
                }

                return e.isFunction(t) ? t : n
            }, defer: function (e) {
                setTimeout(e, 0)
            }, debounce: function (e, t, n) {
                var i, r;
                return function () {
                    var o, a, s = this, c = arguments;
                    return o = function () {
                        i = null, n || (r = e.apply(s, c))
                    }, a = n && !i, clearTimeout(i), i = setTimeout(o, t), a && (r = e.apply(s, c)), r
                }
            }, throttle: function (e, t) {
                var n, i, r, o, a, s;
                return a = 0, s = function () {
                    a = new Date, r = null, o = e.apply(n, i)
                }, function () {
                    var c = new Date, l = t - (c - a);
                    return n = this, i = arguments, 0 >= l ? (clearTimeout(r), r = null, a = c, o = e.apply(n, i)) : r || (r = setTimeout(s, l)), o
                }
            }, stringify: function (e) {
                return t.isString(e) ? e : JSON.stringify(e)
            }, noop: function () {
            }
        }
    }(), n = function () {
        "use strict";
        function e(e) {
            var a, s;
            return s = t.mixin({}, o, e), a = {css: r(), classes: s, html: n(s), selectors: i(s)}, {
                css: a.css,
                html: a.html,
                classes: a.classes,
                selectors: a.selectors,
                mixin: function (e) {
                    t.mixin(e, a)
                }
            }
        }

        function n(e) {
            return {wrapper: '<span class="' + e.wrapper + '"></span>', menu: '<div class="' + e.menu + '"></div>'}
        }

        function i(e) {
            var n = {};
            return t.each(e, function (e, t) {
                n[t] = "." + e
            }), n
        }

        function r() {
            var e = {
                wrapper: {position: "relative", display: "inline-block"},
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
                inputWithNoHint: {position: "relative", verticalAlign: "top"},
                menu: {position: "absolute", top: "100%", left: "0", zIndex: "45", display: "none"},
                ltr: {left: "0", right: "auto"},
                rtl: {left: "auto", right: " 0"}
            };
            return t.isMsie() && t.mixin(e.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), e
        }

        var o = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return e
    }(), i = function () {
        "use strict";
        function n(t) {
            t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
        }

        var i, r;
        return i = "typeahead:", r = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        }, t.mixin(n.prototype, {
            _trigger: function (t, n) {
                var r;
                return r = e.Event(i + t), (n = n || []).unshift(r), this.$el.trigger.apply(this.$el, n), r
            }, before: function (e) {
                var t, n;
                return t = [].slice.call(arguments, 1), n = this._trigger("before" + e, t), n.isDefaultPrevented()
            }, trigger: function (e) {
                var t;
                this._trigger(e, [].slice.call(arguments, 1)), (t = r[e]) && this._trigger(t, [].slice.call(arguments, 1))
            }
        }), n
    }(), r = function () {
        "use strict";
        function e(e, t, n, i) {
            var r;
            if (!n)return this;
            for (t = t.split(s), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; r = t.shift();)this._callbacks[r] = this._callbacks[r] || {
                    sync: [],
                    async: []
                }, this._callbacks[r][e].push(n);
            return this
        }

        function t(t, n, i) {
            return e.call(this, "async", t, n, i)
        }

        function n(t, n, i) {
            return e.call(this, "sync", t, n, i)
        }

        function i(e) {
            var t;
            if (!this._callbacks)return this;
            for (e = e.split(s); t = e.shift();)delete this._callbacks[t];
            return this
        }

        function r(e) {
            var t, n, i, r, a;
            if (!this._callbacks)return this;
            for (e = e.split(s), i = [].slice.call(arguments, 1); (t = e.shift()) && (n = this._callbacks[t]);)r = o(n.sync, this, [t].concat(i)), a = o(n.async, this, [t].concat(i)), r() && c(a);
            return this
        }

        function o(e, t, n) {
            function i() {
                for (var i, r = 0, o = e.length; !i && o > r; r += 1)i = !1 === e[r].apply(t, n);
                return !i
            }

            return i
        }

        function a(e, t) {
            return e.bind ? e.bind(t) : function () {
                e.apply(t, [].slice.call(arguments, 0))
            }
        }

        var s = /\s+/, c = function () {
            return window.setImmediate ? function (e) {
                setImmediate(function () {
                    e()
                })
            } : function (e) {
                setTimeout(function () {
                    e()
                }, 0)
            }
        }();
        return {onSync: n, onAsync: t, off: i, trigger: r}
    }(), o = function (e) {
        "use strict";
        function n(e, n, i) {
            for (var r, o = [], a = 0, s = e.length; s > a; a++)o.push(t.escapeRegExChars(e[a]));
            return r = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
        }

        var i = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
        return function (r) {
            function o(t) {
                var n, i, o;
                return (n = s.exec(t.data)) && (o = e.createElement(r.tagName), r.className && (o.className = r.className), i = t.splitText(n.index), i.splitText(n[0].length), o.appendChild(i.cloneNode(!0)), t.parentNode.replaceChild(o, i)), !!n
            }

            function a(e, t) {
                for (var n,
                         i = 0; i < e.childNodes.length; i++)n = e.childNodes[i], 3 === n.nodeType ? i += t(n) ? 1 : 0 : a(n, t)
            }

            var s;
            r = t.mixin({}, i, r), r.node && r.pattern && (r.pattern = t.isArray(r.pattern) ? r.pattern : [r.pattern], s = n(r.pattern, r.caseSensitive, r.wordsOnly), a(r.node, o))
        }
    }(window.document), a = function () {
        "use strict";
        function n(n, r) {
            n = n || {}, n.input || e.error("input is missing"), r.mixin(this), this.$hint = e(n.hint), this.$input = e(n.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = i(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop)
        }

        function i(t) {
            return e('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }

        function o(e, t) {
            return n.normalizeQuery(e) === n.normalizeQuery(t)
        }

        function a(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        var s;
        return s = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, n.normalizeQuery = function (e) {
            return t.toStr(e).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, t.mixin(n.prototype, r, {
            _onBlur: function () {
                this.resetInputValue(), this.trigger("blurred")
            }, _onFocus: function () {
                this.queryWhenFocused = this.query, this.trigger("focused")
            }, _onKeydown: function (e) {
                var t = s[e.which || e.keyCode];
                this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e)
            }, _onInput: function () {
                this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
            }, _managePreventDefault: function (e, t) {
                var n;
                switch (e) {
                    case"up":
                    case"down":
                        n = !a(t);
                        break;
                    default:
                        n = !1
                }
                n && t.preventDefault()
            }, _shouldTrigger: function (e, t) {
                var n;
                switch (e) {
                    case"tab":
                        n = !a(t);
                        break;
                    default:
                        n = !0
                }
                return n
            }, _checkLanguageDirection: function () {
                var e = (this.$input.css("direction") || "ltr").toLowerCase();
                this.dir !== e && (this.dir = e, this.$hint.attr("dir", e), this.trigger("langDirChanged", e))
            }, _setQuery: function (e, t) {
                var n, i;
                n = o(e, this.query), i = !!n && this.query.length !== e.length, this.query = e, t || n ? !t && i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            }, bind: function () {
                var e, n, i, r, o = this;
                return e = t.bind(this._onBlur, this), n = t.bind(this._onFocus, this), i = t.bind(this._onKeydown, this), r = t.bind(this._onInput, this), this.$input.on("blur.tt", e).on("focus.tt", n).on("keydown.tt", i), !t.isMsie() || t.isMsie() > 9 ? this.$input.on("input.tt", r) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                    s[e.which || e.keyCode] || t.defer(t.bind(o._onInput, o, e))
                }), this
            }, focus: function () {
                this.$input.focus()
            }, blur: function () {
                this.$input.blur()
            }, getLangDir: function () {
                return this.dir
            }, getQuery: function () {
                return this.query || ""
            }, setQuery: function (e, t) {
                this.setInputValue(e), this._setQuery(e, t)
            }, hasQueryChangedSinceLastFocus: function () {
                return this.query !== this.queryWhenFocused
            }, getInputValue: function () {
                return this.$input.val()
            }, setInputValue: function (e) {
                this.$input.val(e), this.clearHintIfInvalid(), this._checkLanguageDirection()
            }, resetInputValue: function () {
            }, getHint: function () {
                return this.$hint.val()
            }, setHint: function (e) {
                this.$hint.val(e)
            }, clearHint: function () {
                this.setHint("")
            }, clearHintIfInvalid: function () {
                var e, t, n;
                e = this.getInputValue(), t = this.getHint(), n = e !== t && 0 === t.indexOf(e), !("" !== e && n && !this.hasOverflow()) && this.clearHint()
            }, hasFocus: function () {
                return this.$input.is(":focus")
            }, hasOverflow: function () {
                var e = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
            }, isCursorAtEnd: function () {
                var e, n, i;
                return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : !document.selection || (i = document.selection.createRange(), i.moveStart("character", -e), e === i.text.length)
            }, destroy: function () {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = e("<div>")
            }
        }), n
    }(), s = function () {
        "use strict";
        function n(n, r) {
            n = n || {}, n.templates = n.templates || {}, n.templates.notFound = n.templates.notFound || n.templates.empty, n.source || e.error("missing source"), n.node || e.error("missing node"), n.name && !s(n.name) && e.error("invalid dataset name: " + n.name), r.mixin(this), this.highlight = !!n.highlight, this.name = n.name || l(), this.limit = n.limit || 5, this.displayFn = i(n.display || n.displayKey), this.templates = a(n.templates, this.displayFn), this.source = n.source.__ttAdapter ? n.source.__ttAdapter() : n.source, this.async = t.isUndefined(n.async) ? this.source.length > 2 : !!n.async, this._resetLastSuggestion(), this.$el = e(n.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
        }

        function i(e) {
            function n(t) {
                return t[e]
            }

            return e = e || t.stringify, t.isFunction(e) ? e : n
        }

        function a(n, i) {
            function r(t) {
                return e("<div>").text(i(t))
            }

            return {
                notFound: n.notFound && t.templatify(n.notFound),
                pending: n.pending && t.templatify(n.pending),
                header: n.header && t.templatify(n.header),
                footer: n.footer && t.templatify(n.footer),
                suggestion: n.suggestion || r
            }
        }

        function s(e) {
            return /^[_a-zA-Z0-9-]+$/.test(e)
        }

        var c, l;
        return c = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        }, l = t.getIdGenerator(), n.extractData = function (t) {
            var n = e(t);
            return n.data(c.obj) ? {val: n.data(c.val) || "", obj: n.data(c.obj) || null} : null
        }, t.mixin(n.prototype, r, {
            _overwrite: function (e, t) {
                t = t || [], t.length ? this._renderSuggestions(e, t) : this.async && this.templates.pending ? this._renderPending(e) : !this.async && this.templates.notFound ? this._renderNotFound(e) : this._empty(), this.trigger("rendered", this.name, t, !1)
            }, _append: function (e, t) {
                t = t || [], t.length && this.$lastSuggestion.length ? this._appendSuggestions(e, t) : t.length ? this._renderSuggestions(e, t) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(e), this.trigger("rendered", this.name, t, !0)
            }, _renderSuggestions: function (e, t) {
                var n;
                n = this._getSuggestionsFragment(e, t), this.$lastSuggestion = n.children().last(), this.$el.html(n).prepend(this._getHeader(e, t)).append(this._getFooter(e, t))
            }, _appendSuggestions: function (e, t) {
                var n, i;
                n = this._getSuggestionsFragment(e, t), i = n.children().last(), this.$lastSuggestion.after(n), this.$lastSuggestion = i
            }, _renderPending: function (e) {
                var t = this.templates.pending;
                this._resetLastSuggestion(), t && this.$el.html(t({query: e, dataset: this.name}))
            }, _renderNotFound: function (e) {
                var t = this.templates.notFound;
                this._resetLastSuggestion(), t && this.$el.html(t({query: e, dataset: this.name}))
            }, _empty: function () {
                this.$el.empty(), this._resetLastSuggestion()
            }, _getSuggestionsFragment: function (n, i) {
                var r, a = this;
                return r = document.createDocumentFragment(), t.each(i, function (t) {
                    var i, o;
                    o = a._injectQuery(n, t), i = e(a.templates.suggestion(o)).data(c.obj, t).data(c.val, a.displayFn(t)).addClass(a.classes.suggestion + " " + a.classes.selectable), r.appendChild(i[0])
                }), this.highlight && o({className: this.classes.highlight, node: r, pattern: n}), e(r)
            }, _getFooter: function (e, t) {
                return this.templates.footer ? this.templates.footer({
                    query: e,
                    suggestions: t,
                    dataset: this.name
                }) : null
            }, _getHeader: function (e, t) {
                return this.templates.header ? this.templates.header({
                    query: e,
                    suggestions: t,
                    dataset: this.name
                }) : null
            }, _resetLastSuggestion: function () {
                this.$lastSuggestion = e()
            }, _injectQuery: function (e, n) {
                return t.isObject(n) ? t.mixin({_query: e}, n) : n
            }, update: function (t) {
                function n(e) {
                    a || (a = !0, e = (e || []).slice(0, r.limit), s = e.length, r._overwrite(t, e), s < r.limit && r.async && r.trigger("asyncRequested", t))
                }

                function i(n) {
                    n = n || [], !o && s < r.limit && (r.cancel = e.noop, s += n.length, r._append(t, n.slice(0, r.limit)), r.async && r.trigger("asyncReceived", t))
                }

                var r = this, o = !1, a = !1, s = 0;
                this.cancel(), this.cancel = function () {
                    o = !0, r.cancel = e.noop, r.async && r.trigger("asyncCanceled", t)
                }, this.source(t, n, i), !a && n([])
            }, cancel: e.noop, clear: function () {
                this._empty(), this.cancel(), this.trigger("cleared")
            }, isEmpty: function () {
                return this.$el.is(":empty")
            }, destroy: function () {
                this.$el = e("<div>")
            }
        }), n
    }(), c = function () {
        "use strict";
        function n(n, i) {
            function r(t) {
                var n = o.$node.find(t.node).first();
                return t.node = n.length ? n : e("<div>").appendTo(o.$node), new s(t, i)
            }

            var o = this;
            n = n || {}, n.node || e.error("node is required"), i.mixin(this), this.$node = e(n.node), this.query = null, this.datasets = t.map(n.datasets, r)
        }

        return t.mixin(n.prototype, r, {
            _onSelectableClick: function (t) {
                this.trigger("selectableClicked", e(t.currentTarget))
            }, _onRendered: function (e, t, n, i) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", t, n, i)
            }, _onCleared: function () {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
            }, _propagate: function () {
                this.trigger.apply(this, arguments)
            }, _allDatasetsEmpty: function () {
                function e(e) {
                    return e.isEmpty()
                }

                return t.every(this.datasets, e)
            }, _getSelectables: function () {
                return this.$node.find(this.selectors.selectable)
            }, _removeCursor: function () {
                var e = this.getActiveSelectable();
                e && e.removeClass(this.classes.cursor)
            }, _ensureVisible: function (e) {
                var t, n, i, r;
                t = e.position().top, n = t + e.outerHeight(!0), i = this.$node.scrollTop(), r = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), 0 > t ? this.$node.scrollTop(i + t) : n > r && this.$node.scrollTop(i + (n - r))
            }, bind: function () {
                var e, n = this;
                return e = t.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, e), t.each(this.datasets, function (e) {
                    e.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n)
                }), this
            }, isOpen: function () {
                return this.$node.hasClass(this.classes.open)
            }, open: function () {
                this.$node.addClass(this.classes.open)
            }, close: function () {
                this.$node.removeClass(this.classes.open), this._removeCursor()
            }, setLanguageDirection: function (e) {
                this.$node.attr("dir", e)
            }, selectableRelativeToCursor: function (e) {
                var t, n, i, r;
                return n = this.getActiveSelectable(), t = this._getSelectables(), i = n ? t.index(n) : -1, r = i + e, r = (r + 1) % (t.length + 1) - 1, r = -1 > r ? t.length - 1 : r, -1 === r ? null : t.eq(r)
            }, setCursor: function (e) {
                this._removeCursor(), (e = e && e.first()) && (e.addClass(this.classes.cursor), this._ensureVisible(e))
            }, getSelectableData: function (e) {
                return e && e.length ? s.extractData(e) : null
            }, getActiveSelectable: function () {
                var e = this._getSelectables().filter(this.selectors.cursor).first();
                return e.length ? e : null
            }, getTopSelectable: function () {
                var e = this._getSelectables().first();
                return e.length ? e : null
            }, update: function (e) {
                function n(t) {
                    t.update(e)
                }

                var i = e !== this.query;
                return i && (this.query = e, t.each(this.datasets, n)), i
            }, empty: function () {
                function e(e) {
                    e.clear()
                }

                t.each(this.datasets, e), this.query = null, this.$node.addClass(this.classes.empty)
            }, destroy: function () {
                function n(e) {
                    e.destroy()
                }

                this.$node.off(".tt"), this.$node = e("<div>"), t.each(this.datasets, n)
            }
        }), n
    }(), l = function () {
        "use strict";
        function e() {
            c.apply(this, [].slice.call(arguments, 0))
        }

        var n = c.prototype;
        return t.mixin(e.prototype, c.prototype, {
            open: function () {
                return !this._allDatasetsEmpty() && this._show(), n.open.apply(this, [].slice.call(arguments, 0))
            }, close: function () {
                return this._hide(), n.close.apply(this, [].slice.call(arguments, 0))
            }, _onRendered: function () {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onRendered.apply(this, [].slice.call(arguments, 0))
            }, _onCleared: function () {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onCleared.apply(this, [].slice.call(arguments, 0))
            }, setLanguageDirection: function (e) {
                return this.$node.css("ltr" === e ? this.css.ltr : this.css.rtl), n.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
            }, _hide: function () {
                this.$node.hide()
            }, _show: function () {
                this.$node.css("display", "block")
            }
        }), e
    }(), d = function () {
        "use strict";
        function n(n, r) {
            var o, a, s, c, l, d, u, p, f, h, m;
            n = n || {}, n.input || e.error("missing input"), n.menu || e.error("missing menu"), n.eventBus || e.error("missing event bus"), r.mixin(this), this.eventBus = n.eventBus, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.input = n.input, this.menu = n.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), o = i(this, "activate", "open", "_onFocused"), a = i(this, "deactivate", "_onBlurred"), s = i(this, "isActive", "isOpen", "_onEnterKeyed"), c = i(this, "isActive", "isOpen", "_onTabKeyed"), l = i(this, "isActive", "_onEscKeyed"), d = i(this, "isActive", "open", "_onUpKeyed"), u = i(this, "isActive", "open", "_onDownKeyed"), p = i(this, "isActive", "isOpen", "_onLeftKeyed"), f = i(this, "isActive", "isOpen", "_onRightKeyed"), h = i(this, "_openIfActive", "_onQueryChanged"), m = i(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", o, this).onSync("blurred", a, this).onSync("enterKeyed", s, this).onSync("tabKeyed", c, this).onSync("escKeyed", l, this).onSync("upKeyed", d, this).onSync("downKeyed", u, this).onSync("leftKeyed", p, this).onSync("rightKeyed", f, this).onSync("queryChanged", h, this).onSync("whitespaceChanged", m, this).onSync("langDirChanged", this._onLangDirChanged, this)
        }

        function i(e) {
            var n = [].slice.call(arguments, 1);
            return function () {
                var i = [].slice.call(arguments);
                t.each(n, function (t) {
                    return e[t].apply(e, i)
                })
            }
        }

        return t.mixin(n.prototype, {
            _hacks: function () {
                var n, i;
                n = this.input.$input || e("<div>"), i = this.menu.$node || e("<div>"), n.on("blur.tt", function (e) {
                    var r, o, a;
                    r = document.activeElement, o = i.is(r), a = i.has(r).length > 0, t.isMsie() && (o || a) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function () {
                        n.focus()
                    }))
                }), i.on("mousedown.tt", function (e) {
                    e.preventDefault()
                })
            }, _onSelectableClicked: function (e, t) {
                this.select(t)
            }, _onDatasetCleared: function () {
                this._updateHint()
            }, _onDatasetRendered: function (e, t, n, i) {
                this._updateHint(), this.eventBus.trigger("render", n, i, t)
            }, _onAsyncRequested: function (e, t, n) {
                this.eventBus.trigger("asyncrequest", n, t)
            }, _onAsyncCanceled: function (e, t, n) {
                this.eventBus.trigger("asynccancel", n, t)
            }, _onAsyncReceived: function (e, t, n) {
                this.eventBus.trigger("asyncreceive", n, t)
            }, _onFocused: function () {
                this._minLengthMet() && this.menu.update(this.input.getQuery())
            }, _onBlurred: function () {
                this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
            }, _onEnterKeyed: function (e, t) {
                var n;
                (n = this.menu.getActiveSelectable()) && this.select(n) && t.preventDefault()
            }, _onTabKeyed: function (e, t) {
                var n;
                (n = this.menu.getActiveSelectable()) ? this.select(n) && t.preventDefault() : (n = this.menu.getTopSelectable()) && this.autocomplete(n) && t.preventDefault()
            }, _onEscKeyed: function () {
                this.close()
            }, _onUpKeyed: function () {
                this.moveCursor(-1)
            }, _onDownKeyed: function () {
                this.moveCursor(1)
            }, _onLeftKeyed: function () {
                "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            }, _onRightKeyed: function () {
                "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            }, _onQueryChanged: function (e, t) {
                this._minLengthMet(t) ? this.menu.update(t) : this.menu.empty()
            }, _onWhitespaceChanged: function () {
                this._updateHint()
            }, _onLangDirChanged: function (e, t) {
                this.dir !== t && (this.dir = t, this.menu.setLanguageDirection(t))
            }, _openIfActive: function () {
                this.isActive() && this.open()
            }, _minLengthMet: function (e) {
                return e = t.isString(e) ? e : this.input.getQuery() || "", e.length >= this.minLength
            }, _updateHint: function () {
                var e, n, i, r, o, s, c;
                e = this.menu.getTopSelectable(), n = this.menu.getSelectableData(e), i = this.input.getInputValue(), !n || t.isBlankString(i) || this.input.hasOverflow() ? this.input.clearHint() : (r = a.normalizeQuery(i), o = t.escapeRegExChars(r), s = new RegExp("^(?:" + o + ")(.+$)", "i"), (c = s.exec(n.val)) && this.input.setHint(i + c[1]))
            }, isEnabled: function () {
                return this.enabled
            }, enable: function () {
                this.enabled = !0
            }, disable: function () {
                this.enabled = !1
            }, isActive: function () {
                return this.active
            }, activate: function () {
                return !!this.isActive() || !(!this.isEnabled() || this.eventBus.before("active")) && (this.active = !0, this.eventBus.trigger("active"), !0)
            }, deactivate: function () {
                return !this.isActive() || !this.eventBus.before("idle") && (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0)
            }, isOpen: function () {
                return this.menu.isOpen()
            }, open: function () {
                return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
            }, close: function () {
                return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
            }, setVal: function (e) {
                this.input.setQuery(t.toStr(e))
            }, getVal: function () {
                return this.input.getQuery()
            }, select: function (e) {
                var t = this.menu.getSelectableData(e);
                return !(!t || this.eventBus.before("select", t.obj)) && (this.input.setQuery(t.val, !0), this.eventBus.trigger("select", t.obj), this.close(), !0)
            }, autocomplete: function (e) {
                var t, n;
                return t = this.input.getQuery(), n = this.menu.getSelectableData(e), !(!(n && t !== n.val) || this.eventBus.before("autocomplete", n.obj)) && (this.input.setQuery(n.val), this.eventBus.trigger("autocomplete", n.obj), !0)
            }, moveCursor: function (e) {
                var t, n, i, r;
                return t = this.input.getQuery(), n = this.menu.selectableRelativeToCursor(e), i = this.menu.getSelectableData(n), r = i ? i.obj : null, !(this._minLengthMet() && this.menu.update(t)) && !this.eventBus.before("cursorchange", r) && (this.menu.setCursor(n), i ? this.input.setInputValue(i.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", r), !0)
            }, destroy: function () {
                this.input.destroy(), this.menu.destroy()
            }
        }), n
    }();
    !function () {
        "use strict";
        function r(t, n) {
            t.each(function () {
                var t, i = e(this);
                (t = i.data(m.typeahead)) && n(t, i)
            })
        }

        function o(e, t) {
            return e.clone().addClass(t.classes.hint).removeData().css(t.css.hint).css(u(e)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            })
        }

        function s(e, t) {
            e.data(m.attrs, {
                dir: e.attr("dir"),
                autocomplete: e.attr("autocomplete"),
                spellcheck: e.attr("spellcheck"),
                style: e.attr("style")
            }), e.addClass(t.classes.input).attr({autocomplete: "off", spellcheck: !1});
            try {
                !e.attr("dir") && e.attr("dir", "auto")
            } catch (e) {
            }
            return e
        }

        function u(e) {
            return {
                backgroundAttachment: e.css("background-attachment"),
                backgroundClip: e.css("background-clip"),
                backgroundColor: e.css("background-color"),
                backgroundImage: e.css("background-image"),
                backgroundOrigin: e.css("background-origin"),
                backgroundPosition: e.css("background-position"),
                backgroundRepeat: e.css("background-repeat"),
                backgroundSize: e.css("background-size")
            }
        }

        function p(e) {
            var n, i;
            n = e.data(m.www), i = e.parent().filter(n.selectors.wrapper), t.each(e.data(m.attrs), function (n, i) {
                t.isUndefined(n) ? e.removeAttr(i) : e.attr(i, n)
            }), e.removeData(m.typeahead).removeData(m.www).removeData(m.attr).removeClass(n.classes.input), i.length && (e.detach().insertAfter(i), i.remove())
        }

        function f(n) {
            var i, r;
            return i = t.isJQuery(n) || t.isElement(n), r = i ? e(n).first() : [], r.length ? r : null
        }

        var h, m, g;
        h = e.fn.typeahead, m = {www: "tt-www", attrs: "tt-attrs", typeahead: "tt-typeahead"}, g = {
            initialize: function (r, u) {
                function p() {
                    var n, p, g, v, y, b, w, x, _, C, $;
                    t.each(u, function (e) {
                        e.highlight = !!r.highlight
                    }), n = e(this), p = e(h.html.wrapper), g = f(r.hint), v = f(r.menu), y = !1 !== r.hint && !g, b = !1 !== r.menu && !v, y && (g = o(n, h)), b && (v = e(h.html.menu).css(h.css.menu)), g && g.val(""), n = s(n, h), (y || b) && (p.css(h.css.wrapper), n.css(y ? h.css.input : h.css.inputWithNoHint), n.wrap(p).parent().prepend(y ? g : null).append(b ? v : null)), $ = b ? l : c, w = new i({el: n}), x = new a({
                        hint: g,
                        input: n
                    }, h), _ = new $({node: v, datasets: u}, h), C = new d({
                        input: x,
                        menu: _,
                        eventBus: w,
                        minLength: r.minLength
                    }, h), n.data(m.www, h), n.data(m.typeahead, C)
                }

                var h;
                return u = t.isArray(u) ? u : [].slice.call(arguments, 1), r = r || {}, h = n(r.classNames), this.each(p)
            }, isEnabled: function () {
                var e;
                return r(this.first(), function (t) {
                    e = t.isEnabled()
                }), e
            }, enable: function () {
                return r(this, function (e) {
                    e.enable()
                }), this
            }, disable: function () {
                return r(this, function (e) {
                    e.disable()
                }), this
            }, isActive: function () {
                var e;
                return r(this.first(), function (t) {
                    e = t.isActive()
                }), e
            }, activate: function () {
                return r(this, function (e) {
                    e.activate()
                }), this
            }, deactivate: function () {
                return r(this, function (e) {
                    e.deactivate()
                }), this
            }, isOpen: function () {
                var e;
                return r(this.first(), function (t) {
                    e = t.isOpen()
                }), e
            }, open: function () {
                return r(this, function (e) {
                    e.open()
                }), this
            }, close: function () {
                return r(this, function (e) {
                    e.close()
                }), this
            }, select: function (t) {
                var n = !1, i = e(t);
                return r(this.first(), function (e) {
                    n = e.select(i)
                }), n
            }, autocomplete: function (t) {
                var n = !1, i = e(t);
                return r(this.first(), function (e) {
                    n = e.autocomplete(i)
                }), n
            }, moveCursor: function (e) {
                var t = !1;
                return r(this.first(), function (n) {
                    t = n.moveCursor(e)
                }), t
            }, val: function (e) {
                var t;
                return arguments.length ? (r(this, function (t) {
                    t.setVal(e)
                }), this) : (r(this.first(), function (e) {
                    t = e.getVal()
                }), t)
            }, destroy: function () {
                return r(this, function (e, t) {
                    p(t), e.destroy()
                }), this
            }
        }, e.fn.typeahead = function (e) {
            return g[e] ? g[e].apply(this, [].slice.call(arguments, 1)) : g.initialize.apply(this, arguments)
        }, e.fn.typeahead.noConflict = function () {
            return e.fn.typeahead = h, this
        }
    }()
});
var dateFormat = function () {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        n = /[^-+\dA-Z]/g, i = function (e, t) {
            for (e = String(e), t = t || 2; e.length < t;)e = "0" + e;
            return e
        };
    return function (r, o, a) {
        var s = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(r) || /\d/.test(r) || (o = r, r = void 0), r = r ? new Date(r) : new Date, isNaN(r))throw SyntaxError("invalid date");
        o = String(s.masks[o] || o || s.masks.default), "UTC:" == o.slice(0, 4) && (o = o.slice(4), a = !0);
        var c = a ? "getUTC" : "get", l = r[c + "Date"](), d = r[c + "Day"](), u = r[c + "Month"](),
            p = r[c + "FullYear"](), f = r[c + "Hours"](), h = r[c + "Minutes"](), m = r[c + "Seconds"](),
            g = r[c + "Milliseconds"](), v = a ? 0 : r.getTimezoneOffset(), y = {
                d: l,
                dd: i(l),
                ddd: s.i18n.dayNames[d],
                dddd: s.i18n.dayNames[d + 7],
                m: u + 1,
                mm: i(u + 1),
                mmm: s.i18n.monthNames[u],
                mmmm: s.i18n.monthNames[u + 12],
                yy: String(p).slice(2),
                yyyy: p,
                h: f % 12 || 12,
                hh: i(f % 12 || 12),
                H: f,
                HH: i(f),
                M: h,
                MM: i(h),
                s: m,
                ss: i(m),
                l: i(g, 3),
                L: i(g > 99 ? Math.round(g / 10) : g),
                t: f < 12 ? "a" : "p",
                tt: f < 12 ? "am" : "pm",
                T: f < 12 ? "A" : "P",
                TT: f < 12 ? "AM" : "PM",
                Z: a ? "UTC" : (String(r).match(t) || [""]).pop().replace(n, ""),
                o: (v > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
                S: ["th", "st", "nd", "rd"][l % 10 > 3 ? 0 : (l % 100 - l % 10 != 10) * l % 10]
            };
        return o.replace(e, function (e) {
            return e in y ? y[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: ["Вскр", "Пон", "Втр", "Ср", "Чтв", "Пт", "Сбт", "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    monthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек", "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
}, Date.prototype.format = function (e, t) {
    return dateFormat(this, e, t)
}, function () {
    function e(e) {
        function t(t, n, i, r, o, a) {
            for (; o >= 0 && a > o; o += e) {
                var s = r ? r[o] : o;
                i = n(i, t[s], s, t)
            }
            return i
        }

        return function (n, i, r, o) {
            i = b(i, o, 4);
            var a = !S(n) && y.keys(n), s = (a || n).length, c = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (r = n[a ? a[c] : c], c += e), t(n, i, r, a, c, s)
        }
    }

    function t(e) {
        return function (t, n, i) {
            n = w(n, i);
            for (var r = k(t), o = e > 0 ? 0 : r - 1; o >= 0 && r > o; o += e)if (n(t[o], o, t))return o;
            return -1
        }
    }

    function n(e, t, n) {
        return function (i, r, o) {
            var a = 0, s = k(i);
            if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1; else if (n && o && s)return o = n(i, r), i[o] === r ? o : -1;
            if (r !== r)return o = t(d.call(i, a, s), y.isNaN), o >= 0 ? o + a : -1;
            for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)if (i[o] === r)return o;
            return -1
        }
    }

    function i(e, t) {
        var n = M.length, i = e.constructor, r = y.isFunction(i) && i.prototype || s, o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;)(o = M[n]) in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o)
    }

    var r = this, o = r._, a = Array.prototype, s = Object.prototype, c = Function.prototype, l = a.push, d = a.slice,
        u = s.toString, p = s.hasOwnProperty, f = Array.isArray, h = Object.keys, m = c.bind, g = Object.create,
        v = function () {
        }, y = function (e) {
            return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var b = function (e, t, n) {
        if (void 0 === t)return e;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                };
            case 4:
                return function (n, i, r, o) {
                    return e.call(t, n, i, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }, w = function (e, t, n) {
        return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
    };
    y.iteratee = function (e, t) {
        return w(e, t, 1 / 0)
    };
    var x = function (e, t) {
        return function (n) {
            var i = arguments.length;
            if (2 > i || null == n)return n;
            for (var r = 1; i > r; r++)for (var o = arguments[r], a = e(o), s = a.length, c = 0; s > c; c++) {
                var l = a[c];
                t && void 0 !== n[l] || (n[l] = o[l])
            }
            return n
        }
    }, _ = function (e) {
        if (!y.isObject(e))return {};
        if (g)return g(e);
        v.prototype = e;
        var t = new v;
        return v.prototype = null, t
    }, C = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    }, $ = Math.pow(2, 53) - 1, k = C("length"), S = function (e) {
        var t = k(e);
        return "number" == typeof t && t >= 0 && $ >= t
    };
    y.each = y.forEach = function (e, t, n) {
        t = b(t, n);
        var i, r;
        if (S(e))for (i = 0, r = e.length; r > i; i++)t(e[i], i, e); else {
            var o = y.keys(e);
            for (i = 0, r = o.length; r > i; i++)t(e[o[i]], o[i], e)
        }
        return e
    }, y.map = y.collect = function (e, t, n) {
        t = w(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = Array(r), a = 0; r > a; a++) {
            var s = i ? i[a] : a;
            o[a] = t(e[s], s, e)
        }
        return o
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function (e, t, n) {
        var i;
        return i = S(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== i && -1 !== i ? e[i] : void 0
    }, y.filter = y.select = function (e, t, n) {
        var i = [];
        return t = w(t, n), y.each(e, function (e, n, r) {
            t(e, n, r) && i.push(e)
        }), i
    }, y.reject = function (e, t, n) {
        return y.filter(e, y.negate(w(t)), n)
    }, y.every = y.all = function (e, t, n) {
        t = w(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; r > o; o++) {
            var a = i ? i[o] : o;
            if (!t(e[a], a, e))return !1
        }
        return !0
    }, y.some = y.any = function (e, t, n) {
        t = w(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; r > o; o++) {
            var a = i ? i[o] : o;
            if (t(e[a], a, e))return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function (e, t, n, i) {
        return S(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0
    }, y.invoke = function (e, t) {
        var n = d.call(arguments, 2), i = y.isFunction(t);
        return y.map(e, function (e) {
            var r = i ? t : e[t];
            return null == r ? r : r.apply(e, n)
        })
    }, y.pluck = function (e, t) {
        return y.map(e, y.property(t))
    }, y.where = function (e, t) {
        return y.filter(e, y.matcher(t))
    }, y.findWhere = function (e, t) {
        return y.find(e, y.matcher(t))
    }, y.max = function (e, t, n) {
        var i, r, o = -1 / 0, a = -1 / 0;
        if (null == t && null != e) {
            e = S(e) ? e : y.values(e);
            for (var s = 0, c = e.length; c > s; s++)(i = e[s]) > o && (o = i)
        } else t = w(t, n), y.each(e, function (e, n, i) {
            ((r = t(e, n, i)) > a || r === -1 / 0 && o === -1 / 0) && (o = e, a = r)
        });
        return o
    }, y.min = function (e, t, n) {
        var i, r, o = 1 / 0, a = 1 / 0;
        if (null == t && null != e) {
            e = S(e) ? e : y.values(e);
            for (var s = 0, c = e.length; c > s; s++)i = e[s], o > i && (o = i)
        } else t = w(t, n), y.each(e, function (e, n, i) {
            r = t(e, n, i), (a > r || 1 / 0 === r && 1 / 0 === o) && (o = e, a = r)
        });
        return o
    }, y.shuffle = function (e) {
        for (var t, n = S(e) ? e : y.values(e), i = n.length, r = Array(i),
                 o = 0; i > o; o++)t = y.random(0, o), t !== o && (r[o] = r[t]), r[t] = n[o];
        return r
    }, y.sample = function (e, t, n) {
        return null == t || n ? (S(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }, y.sortBy = function (e, t, n) {
        return t = w(t, n), y.pluck(y.map(e, function (e, n, i) {
            return {value: e, index: n, criteria: t(e, n, i)}
        }).sort(function (e, t) {
            var n = e.criteria, i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)return 1;
                if (i > n || void 0 === i)return -1
            }
            return e.index - t.index
        }), "value")
    };
    var T = function (e) {
        return function (t, n, i) {
            var r = {};
            return n = w(n, i), y.each(t, function (i, o) {
                var a = n(i, o, t);
                e(r, i, a)
            }), r
        }
    };
    y.groupBy = T(function (e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), y.indexBy = T(function (e, t, n) {
        e[n] = t
    }), y.countBy = T(function (e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1
    }), y.toArray = function (e) {
        return e ? y.isArray(e) ? d.call(e) : S(e) ? y.map(e, y.identity) : y.values(e) : []
    }, y.size = function (e) {
        return null == e ? 0 : S(e) ? e.length : y.keys(e).length
    }, y.partition = function (e, t, n) {
        t = w(t, n);
        var i = [], r = [];
        return y.each(e, function (e, n, o) {
            (t(e, n, o) ? i : r).push(e)
        }), [i, r]
    }, y.first = y.head = y.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t)
    }, y.initial = function (e, t, n) {
        return d.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, y.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }, y.rest = y.tail = y.drop = function (e, t, n) {
        return d.call(e, null == t || n ? 1 : t)
    }, y.compact = function (e) {
        return y.filter(e, y.identity)
    };
    var j = function (e, t, n, i) {
        for (var r = [], o = 0, a = i || 0, s = k(e); s > a; a++) {
            var c = e[a];
            if (S(c) && (y.isArray(c) || y.isArguments(c))) {
                t || (c = j(c, t, n));
                var l = 0, d = c.length;
                for (r.length += d; d > l;)r[o++] = c[l++]
            } else n || (r[o++] = c)
        }
        return r
    };
    y.flatten = function (e, t) {
        return j(e, t, !1)
    }, y.without = function (e) {
        return y.difference(e, d.call(arguments, 1))
    }, y.uniq = y.unique = function (e, t, n, i) {
        y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = w(n, i));
        for (var r = [], o = [], a = 0, s = k(e); s > a; a++) {
            var c = e[a], l = n ? n(c, a, e) : c;
            t ? (a && o === l || r.push(c), o = l) : n ? y.contains(o, l) || (o.push(l), r.push(c)) : y.contains(r, c) || r.push(c)
        }
        return r
    }, y.union = function () {
        return y.uniq(j(arguments, !0, !0))
    }, y.intersection = function (e) {
        for (var t = [], n = arguments.length, i = 0, r = k(e); r > i; i++) {
            var o = e[i];
            if (!y.contains(t, o)) {
                for (var a = 1; n > a && y.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, y.difference = function (e) {
        var t = j(arguments, !0, !0, 1);
        return y.filter(e, function (e) {
            return !y.contains(t, e)
        })
    }, y.zip = function () {
        return y.unzip(arguments)
    }, y.unzip = function (e) {
        for (var t = e && y.max(e, k).length || 0, n = Array(t), i = 0; t > i; i++)n[i] = y.pluck(e, i);
        return n
    }, y.object = function (e, t) {
        for (var n = {}, i = 0, r = k(e); r > i; i++)t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function (e, t, n, i) {
        n = w(n, i, 1);
        for (var r = n(t), o = 0, a = k(e); a > o;) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < r ? o = s + 1 : a = s
        }
        return o
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function (e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; i > o; o++, e += n)r[o] = e;
        return r
    };
    var O = function (e, t, n, i, r) {
        if (!(i instanceof t))return e.apply(n, r);
        var o = _(e.prototype), a = e.apply(o, r);
        return y.isObject(a) ? a : o
    };
    y.bind = function (e, t) {
        if (m && e.bind === m)return m.apply(e, d.call(arguments, 1));
        if (!y.isFunction(e))throw new TypeError("Bind must be called on a function");
        var n = d.call(arguments, 2), i = function () {
            return O(e, i, t, this, n.concat(d.call(arguments)))
        };
        return i
    }, y.partial = function (e) {
        var t = d.call(arguments, 1), n = function () {
            for (var i = 0, r = t.length, o = Array(r), a = 0; r > a; a++)o[a] = t[a] === y ? arguments[i++] : t[a];
            for (; i < arguments.length;)o.push(arguments[i++]);
            return O(e, n, this, this, o)
        };
        return n
    }, y.bindAll = function (e) {
        var t, n, i = arguments.length;
        if (1 >= i)throw new Error("bindAll must be passed function names");
        for (t = 1; i > t; t++)n = arguments[t], e[n] = y.bind(e[n], e);
        return e
    }, y.memoize = function (e, t) {
        var n = function (i) {
            var r = n.cache, o = "" + (t ? t.apply(this, arguments) : i);
            return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
        };
        return n.cache = {}, n
    }, y.delay = function (e, t) {
        var n = d.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function (e, t, n) {
        var i, r, o, a = null, s = 0;
        n || (n = {});
        var c = function () {
            s = !1 === n.leading ? 0 : y.now(), a = null, o = e.apply(i, r), a || (i = r = null)
        };
        return function () {
            var l = y.now();
            s || !1 !== n.leading || (s = l);
            var d = t - (l - s);
            return i = this, r = arguments, 0 >= d || d > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(i, r), a || (i = r = null)) : a || !1 === n.trailing || (a = setTimeout(c, d)), o
        }
    }, y.debounce = function (e, t, n) {
        var i, r, o, a, s, c = function () {
            var l = y.now() - a;
            t > l && l >= 0 ? i = setTimeout(c, t - l) : (i = null, n || (s = e.apply(o, r), i || (o = r = null)))
        };
        return function () {
            o = this, r = arguments, a = y.now();
            var l = n && !i;
            return i || (i = setTimeout(c, t)), l && (s = e.apply(o, r), o = r = null), s
        }
    }, y.wrap = function (e, t) {
        return y.partial(t, e)
    }, y.negate = function (e) {
        return function () {
            return !e.apply(this, arguments)
        }
    }, y.compose = function () {
        var e = arguments, t = e.length - 1;
        return function () {
            for (var n = t, i = e[t].apply(this, arguments); n--;)i = e[n].call(this, i);
            return i
        }
    }, y.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, y.before = function (e, t) {
        var n;
        return function () {
            return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var E = !{toString: null}.propertyIsEnumerable("toString"),
        M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function (e) {
        if (!y.isObject(e))return [];
        if (h)return h(e);
        var t = [];
        for (var n in e)y.has(e, n) && t.push(n);
        return E && i(e, t), t
    }, y.allKeys = function (e) {
        if (!y.isObject(e))return [];
        var t = [];
        for (var n in e)t.push(n);
        return E && i(e, t), t
    }, y.values = function (e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++)i[r] = e[t[r]];
        return i
    }, y.mapObject = function (e, t, n) {
        t = w(t, n);
        for (var i, r = y.keys(e), o = r.length, a = {}, s = 0; o > s; s++)i = r[s], a[i] = t(e[i], i, e);
        return a
    }, y.pairs = function (e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++)i[r] = [t[r], e[t[r]]];
        return i
    }, y.invert = function (e) {
        for (var t = {}, n = y.keys(e), i = 0, r = n.length; r > i; i++)t[e[n[i]]] = n[i];
        return t
    }, y.functions = y.methods = function (e) {
        var t = [];
        for (var n in e)y.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function (e, t, n) {
        t = w(t, n);
        for (var i, r = y.keys(e), o = 0, a = r.length; a > o; o++)if (i = r[o], t(e[i], i, e))return i
    }, y.pick = function (e, t, n) {
        var i, r, o = {}, a = e;
        if (null == a)return o;
        y.isFunction(t) ? (r = y.allKeys(a), i = b(t, n)) : (r = j(arguments, !1, !1, 1), i = function (e, t, n) {
            return t in n
        }, a = Object(a));
        for (var s = 0, c = r.length; c > s; s++) {
            var l = r[s], d = a[l];
            i(d, l, a) && (o[l] = d)
        }
        return o
    }, y.omit = function (e, t, n) {
        if (y.isFunction(t)) t = y.negate(t); else {
            var i = y.map(j(arguments, !1, !1, 1), String);
            t = function (e, t) {
                return !y.contains(i, t)
            }
        }
        return y.pick(e, t, n)
    }, y.defaults = x(y.allKeys, !0), y.create = function (e, t) {
        var n = _(e);
        return t && y.extendOwn(n, t), n
    }, y.clone = function (e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }, y.tap = function (e, t) {
        return t(e), e
    }, y.isMatch = function (e, t) {
        var n = y.keys(t), i = n.length;
        if (null == e)return !i;
        for (var r = Object(e), o = 0; i > o; o++) {
            var a = n[o];
            if (t[a] !== r[a] || !(a in r))return !1
        }
        return !0
    };
    var D = function (e, t, n, i) {
        if (e === t)return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var r = u.call(e);
        if (r !== u.call(t))return !1;
        switch (r) {
            case"[object RegExp]":
            case"[object String]":
                return "" + e == "" + t;
            case"[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e == +t
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t)return !1;
            var a = e.constructor, s = t.constructor;
            if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t)return !1
        }
        n = n || [], i = i || [];
        for (var c = n.length; c--;)if (n[c] === e)return i[c] === t;
        if (n.push(e), i.push(t), o) {
            if ((c = e.length) !== t.length)return !1;
            for (; c--;)if (!D(e[c], t[c], n, i))return !1
        } else {
            var l, d = y.keys(e);
            if (c = d.length, y.keys(t).length !== c)return !1;
            for (; c--;)if (l = d[c], !y.has(t, l) || !D(e[l], t[l], n, i))return !1
        }
        return n.pop(), i.pop(), !0
    };
    y.isEqual = function (e, t) {
        return D(e, t)
    }, y.isEmpty = function (e) {
        return null == e || (S(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
    }, y.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, y.isArray = f || function (e) {
            return "[object Array]" === u.call(e)
        }, y.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        y["is" + e] = function (t) {
            return u.call(t) === "[object " + e + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function (e) {
        return y.has(e, "callee")
    }), "function" != typeof/./ && "object" != typeof Int8Array && (y.isFunction = function (e) {
        return "function" == typeof e || !1
    }), y.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, y.isNaN = function (e) {
        return y.isNumber(e) && e !== +e
    }, y.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === u.call(e)
    }, y.isNull = function (e) {
        return null === e
    }, y.isUndefined = function (e) {
        return void 0 === e
    }, y.has = function (e, t) {
        return null != e && p.call(e, t)
    }, y.noConflict = function () {
        return r._ = o, this
    }, y.identity = function (e) {
        return e
    }, y.constant = function (e) {
        return function () {
            return e
        }
    }, y.noop = function () {
    }, y.property = C, y.propertyOf = function (e) {
        return null == e ? function () {
        } : function (t) {
            return e[t]
        }
    }, y.matcher = y.matches = function (e) {
        return e = y.extendOwn({}, e), function (t) {
            return y.isMatch(t, e)
        }
    }, y.times = function (e, t, n) {
        var i = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var r = 0; e > r; r++)i[r] = t(r);
        return i
    }, y.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, y.now = Date.now || function () {
            return (new Date).getTime()
        };
    var A = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, P = y.invert(A),
        I = function (e) {
            var t = function (t) {
                return e[t]
            }, n = "(?:" + y.keys(e).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
            return function (e) {
                return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
            }
        };
    y.escape = I(A), y.unescape = I(P), y.result = function (e, t, n) {
        var i = null == e ? void 0 : e[t];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i
    };
    var H = 0;
    y.uniqueId = function (e) {
        var t = ++H + "";
        return e ? e + t : t
    }, y.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var F = /(.)^/, L = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        N = /\\|'|\r|\n|\u2028|\u2029/g, q = function (e) {
            return "\\" + L[e]
        };
    y.template = function (e, t, n) {
        !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
        var i = RegExp([(t.escape || F).source, (t.interpolate || F).source, (t.evaluate || F).source].join("|") + "|$", "g"),
            r = 0, o = "__p+='";
        e.replace(i, function (t, n, i, a, s) {
            return o += e.slice(r, s).replace(N, q), r = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o)
        } catch (e) {
            throw e.source = o, e
        }
        var s = function (e) {
            return a.call(this, e, y)
        };
        return s.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", s
    }, y.chain = function (e) {
        var t = y(e);
        return t._chain = !0, t
    };
    var B = function (e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function (e) {
        y.each(y.functions(e), function (t) {
            var n = y[t] = e[t];
            y.prototype[t] = function () {
                var e = [this._wrapped];
                return l.apply(e, arguments), B(this, n.apply(y, e))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = a[e];
        y.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], B(this, n)
        }
    }), y.each(["concat", "join", "slice"], function (e) {
        var t = a[e];
        y.prototype[e] = function () {
            return B(this, t.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function () {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return y
    })
}.call(this), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.textMaskCore = t() : e.textMaskCore = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i])return n[i].exports;
            var r = n[i] = {exports: {}, id: i, loaded: !1};
            return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(3);
        Object.defineProperty(t, "conformToMask", {
            enumerable: !0, get: function () {
                return i(r).default
            }
        });
        var o = n(2);
        Object.defineProperty(t, "adjustCaretPosition", {
            enumerable: !0, get: function () {
                return i(o).default
            }
        });
        var a = n(5);
        Object.defineProperty(t, "createTextMaskInputElement", {
            enumerable: !0, get: function () {
                return i(a).default
            }
        })
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.placeholderChar = "_"
    }, function (e, t) {
        "use strict";
        function n(e) {
            var t = e.previousConformedValue, n = void 0 === t ? r : t, o = e.previousPlaceholder,
                a = void 0 === o ? r : o, s = e.currentCaretPosition, c = void 0 === s ? 0 : s, l = e.conformedValue,
                d = e.rawValue, u = e.placeholderChar, p = e.placeholder, f = e.indexesOfPipedChars,
                h = void 0 === f ? i : f, m = e.caretTrapIndexes, g = void 0 === m ? i : m;
            if (0 === c)return 0;
            var v = d.length, y = n.length, b = p.length, w = l.length, x = v - y, _ = x > 0, C = 0 === y;
            if (x > 1 && !_ && !C)return c;
            var $ = _ && (n === l || l === p), k = 0, S = void 0, T = void 0;
            if ($) k = c - x; else {
                var j = l.toLowerCase(), O = d.toLowerCase(), E = O.substr(0, c).split(r), M = E.filter(function (e) {
                    return -1 !== j.indexOf(e)
                });
                T = M[M.length - 1];
                var D = a.substr(0, M.length).split(r).filter(function (e) {
                        return e !== u
                    }).length, A = p.substr(0, M.length).split(r).filter(function (e) {
                        return e !== u
                    }).length, P = A !== D,
                    I = void 0 !== a[M.length - 1] && void 0 !== p[M.length - 2] && a[M.length - 1] !== u && a[M.length - 1] !== p[M.length - 1] && a[M.length - 1] === p[M.length - 2];
                !_ && (P || I) && D > 0 && p.indexOf(T) > -1 && void 0 !== d[c] && (S = !0, T = d[c]);
                for (var H = h.map(function (e) {
                    return j[e]
                }), F = H.filter(function (e) {
                    return e === T
                }).length, L = M.filter(function (e) {
                    return e === T
                }).length, N = p.substr(0, p.indexOf(u)).split(r).filter(function (e, t) {
                    return e === T && d[t] !== e
                }).length, q = N + L + F + (S ? 1 : 0), B = 0, R = 0; R < w; R++) {
                    var z = j[R];
                    if (k = R + 1, z === T && B++, B >= q)break
                }
            }
            if (_) {
                for (var W = k,
                         G = k; G <= b; G++)if (p[G] === u && (W = G), p[G] === u || -1 !== g.indexOf(G) || G === b)return W
            } else if (S) {
                for (var X = k - 1; X >= 0; X--)if (l[X] === T || -1 !== g.indexOf(X) || 0 === X)return X
            } else for (var V = k; V >= 0; V--)if (p[V - 1] === u || -1 !== g.indexOf(V) || 0 === V)return V
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
        var i = [], r = ""
    }, function (e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.guide,
                s = void 0 === i || i, c = n.previousConformedValue, l = void 0 === c ? a : c, d = n.placeholderChar,
                u = void 0 === d ? o.placeholderChar : d, p = n.placeholder,
                f = void 0 === p ? (0, r.convertMaskToPlaceholder)(t, u) : p, h = n.currentCaretPosition,
                m = n.keepCharPositions, g = !1 === s && void 0 !== l, v = e.length, y = l.length, b = f.length,
                w = t.length, x = v - y, _ = x > 0, C = h + (_ ? -x : 0), $ = C + Math.abs(x);
            if (!0 === m && !_) {
                for (var k = a, S = C; S < $; S++)f[S] === u && (k += u);
                e = e.slice(0, C) + k + e.slice(C, v)
            }
            for (var T = e.split(a).map(function (e, t) {
                return {char: e, isNew: t >= C && t < $}
            }), j = v - 1; j >= 0; j--) {
                var O = T[j].char;
                if (O !== u) {
                    O === f[j >= C && y === w ? j - x : j] && T.splice(j, 1)
                }
            }
            var E = a, M = !1;
            e:for (var D = 0; D < b; D++) {
                var A = f[D];
                if (A === u) {
                    if (T.length > 0)for (; T.length > 0;) {
                        var P = T.shift(), I = P.char, H = P.isNew;
                        if (I === u && !0 !== g) {
                            E += u;
                            continue e
                        }
                        if (t[D].test(I)) {
                            if (!0 === m && !1 !== H && l !== a && !1 !== s && _) {
                                for (var F = T.length, L = null, N = 0; N < F; N++) {
                                    var q = T[N];
                                    if (q.char !== u && !1 === q.isNew)break;
                                    if (q.char === u) {
                                        L = N;
                                        break
                                    }
                                }
                                null !== L ? (E += I, T.splice(L, 1)) : D--
                            } else E += I;
                            continue e
                        }
                        M = !0
                    }
                    !1 === g && (E += f.substr(D, b));
                    break
                }
                E += A
            }
            if (g && !1 === _) {
                for (var B = null, R = 0; R < E.length; R++)f[R] === u && (B = R);
                E = null !== B ? E.substr(0, B + 1) : a
            }
            return {conformedValue: E, meta: {someCharsRejected: M}}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = i;
        var r = n(4), o = n(1), a = ""
    }, function (e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.placeholderChar;
            if (-1 !== e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " + JSON.stringify(t) + "\n\nThe mask that was received is: " + JSON.stringify(e));
            return e.map(function (e) {
                return e instanceof RegExp ? t : e
            }).join("")
        }

        function r(e) {
            return "string" == typeof e || e instanceof String
        }

        function o(e) {
            return "number" == typeof e && void 0 === e.length && !isNaN(e)
        }

        function a(e) {
            for (var t = [], n = void 0; -1 !== (n = e.indexOf(l));)t.push(n), e.splice(n, 1);
            return {maskWithoutCaretTraps: e, indexes: t}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.convertMaskToPlaceholder = i, t.isString = r, t.isNumber = o, t.processCaretTraps = a;
        var s = n(1), c = [], l = "[]"
    }, function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e) {
            var t = {previousConformedValue: void 0, previousPlaceholder: void 0};
            return {
                state: t, update: function (n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, r = i.inputElement,
                        l = i.mask, u = i.guide, v = i.pipe, b = i.placeholderChar,
                        w = void 0 === b ? h.placeholderChar : b, x = i.keepCharPositions, _ = void 0 !== x && x,
                        C = i.showMask, $ = void 0 !== C && C;
                    if (void 0 === n && (n = r.value), n !== t.previousConformedValue) {
                        (void 0 === l ? "undefined" : c(l)) === y && void 0 !== l.pipe && void 0 !== l.mask && (v = l.pipe, l = l.mask);
                        var k = void 0, S = void 0;
                        if (l instanceof Array && (k = (0, f.convertMaskToPlaceholder)(l, w)), !1 !== l) {
                            var T = a(n), j = r.selectionEnd, O = t.previousConformedValue, E = t.previousPlaceholder,
                                M = void 0;
                            if ((void 0 === l ? "undefined" : c(l)) === m) {
                                if (!1 === (S = l(T, {
                                        currentCaretPosition: j,
                                        previousConformedValue: O,
                                        placeholderChar: w
                                    })))return;
                                var D = (0, f.processCaretTraps)(S), A = D.maskWithoutCaretTraps, P = D.indexes;
                                S = A, M = P, k = (0, f.convertMaskToPlaceholder)(S, w)
                            } else S = l;
                            var I = {
                                    previousConformedValue: O,
                                    guide: u,
                                    placeholderChar: w,
                                    pipe: v,
                                    placeholder: k,
                                    currentCaretPosition: j,
                                    keepCharPositions: _
                                }, H = (0, p.default)(T, S, I), F = H.conformedValue,
                                L = (void 0 === v ? "undefined" : c(v)) === m, N = {};
                            L && (N = v(F, s({rawValue: T}, I)), !1 === N ? N = {
                                value: O,
                                rejected: !0
                            } : (0, f.isString)(N) && (N = {value: N}));
                            var q = L ? N.value : F, B = (0, d.default)({
                                previousConformedValue: O,
                                previousPlaceholder: E,
                                conformedValue: q,
                                placeholder: k,
                                rawValue: T,
                                currentCaretPosition: j,
                                placeholderChar: w,
                                indexesOfPipedChars: N.indexesOfPipedChars,
                                caretTrapIndexes: M
                            }), R = q === k && 0 === B, z = $ ? k : g, W = R ? z : q;
                            t.previousConformedValue = W, t.previousPlaceholder = k, r.value !== W && (r.value = W, o(r, B))
                        }
                    }
                }
            }
        }

        function o(e, t) {
            document.activeElement === e && (b ? w(function () {
                return e.setSelectionRange(t, t, v)
            }, 0) : e.setSelectionRange(t, t, v))
        }

        function a(e) {
            if ((0, f.isString)(e))return e;
            if ((0, f.isNumber)(e))return String(e);
            if (void 0 === e || null === e)return g;
            throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = r;
        var l = n(2), d = i(l), u = n(3), p = i(u), f = n(4), h = n(1), m = "function", g = "", v = "none",
            y = "object", b = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            w = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout
    }])
}), function () {
    var e = window.BrowserCookies = {
        set: function (e, t, n) {
            var i = n || {}, r = {}, o = i.expires || r.expires, a = i.domain || r.domain,
                s = void 0 !== i.path ? i.path : void 0 !== r.path ? r.path : "/",
                c = void 0 !== i.secure ? i.secure : r.secure, l = void 0 !== i.httponly ? i.httponly : r.httponly,
                d = o ? new Date("number" == typeof o ? (new Date).getTime() + 864e5 * o : o) : 0;
            document.cookie = e.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + t.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d && d.getTime() >= 0 ? ";expires=" + d.toUTCString() : "") + (a ? ";domain=" + a : "") + (s ? ";path=" + s : "") + (c ? ";secure" : "") + (l ? ";httponly" : "")
        }, get: function (e) {
            for (var t = document.cookie.split(";"); t.length;) {
                var n = t.pop(), i = n.indexOf("=");
                i = i < 0 ? n.length : i;
                if (decodeURIComponent(n.slice(0, i).replace(/^\s+/, "")) === e)return decodeURIComponent(n.slice(i + 1))
            }
            return null
        }, erase: function (t, n) {
            e.set(t, "", {expires: -1, domain: n && n.domain, path: n && n.path, secure: 0, httponly: 0})
        }, all: function () {
            for (var e = {}, t = document.cookie.split(";"); t.length;) {
                var n = t.pop(), i = n.indexOf("=");
                i = i < 0 ? n.length : i;
                e[decodeURIComponent(n.slice(0, i).replace(/^\s+/, ""))] = decodeURIComponent(n.slice(i + 1))
            }
            return e
        }
    }
}(), function () {
    var e = window.BasketId = {
        hasStorage: !1,
        currentId: null,
        get: null,
        set: null,
        handlers: [],
        timerId: null,
        init: function () {
            try {
                localStorage.setItem("isSupport", "value"), localStorage.removeItem("isSupport"), e.hasStorage = !0
            } catch (e) {
            }
            e.get = e.hasStorage ? e.getFromLocalStorage : e.getFromCookies, e.set = e.hasStorage ? e.setToLocalStorage : e.setToCookies, e.currentId = document.documentElement.dataset ? document.documentElement.dataset.basket : document.documentElement.getAttribute("data-basket"), e.set(e.currentId), e.hasStorage ? window.addEventListener("storage", function (t) {
                if ("basketid" === t.key) {
                    var n = localStorage.getItem("basketid");
                    e.isChanged(n) && e.changed(n)
                }
            }) : e.timerId = setInterval(function () {
                var t = BrowserCookies.get("basketid");
                e.isChanged(t) && e.changed(t)
            }, 300)
        },
        isChanged: function (t) {
            return t != e.currentId
        },
        getFromCookies: function () {
            return BrowserCookies.get("basketid")
        },
        getFromLocalStorage: function () {
            return localStorage.getItem("basketid")
        },
        setToCookies: function (e) {
            BrowserCookies.set("basketid", e)
        },
        setToLocalStorage: function (e) {
            localStorage.setItem("basketid", e)
        },
        onChange: function (t) {
            e.handlers.push(t)
        },
        changed: function (t) {
            e.handlers.forEach(function (e) {
                e(t)
            }), e.currentId = t, e.set(t)
        }
    };
    e.init()
}();
var desktopWidth = $(window).width() >= 1024;
$(window).resize(function () {
    desktopWidth = $(window).width() >= 1024
});
var modalScrollTop = 0;
$.jMaskGlobals = {watchInterval: 150, translation: {n: {pattern: /\d/}}}, $(document).ready(function () {
    $(".items-wrap").on("mousewheel", function () {
        return !1
    })
}), function (e) {
    e(document).on("click", ".switch.tab .btn", function () {
        var t = e(this).attr("data-target"), n = e(this).attr("data-parent");
        e("#" + n + " .tab-content.active").removeClass("active"), e("#" + t).addClass("active")
    }), e(document).on("click", ".nav-tabs a", function () {
        var t = e(this).parent(), n = e(this).parents(".nav-tabs"), i = e(this).attr("data-target"),
            r = e(this).parents(".nav-tabs").attr("data-target"), o = e("#" + i), a = e("#" + r);
        if (e(this).attr("data-addclass")) {
            var s = e(this).attr("data-addclass"), c = e(this).attr("data-addclass-to");
            e("#" + c).addClass(s), console.log("#" + c)
        }
        if (e(this).attr("href")) {
            var l = e(this).attr("href");
            l !== window.location.pathname && window.history.pushState({path: l}, "", l)
        }
        return n.find(".active").removeClass("active"), t.addClass("active"), a.find(".active").removeClass("active"), o.addClass("active"), e.each(n.find("a"), function (t) {
            if (!e(this).parent().hasClass("active")) {
                var n = e(this).attr("data-addclass"), i = e(this).attr("data-addclass-to");
                e("#" + i).removeClass(n)
            }
        }), !1
    })
}(jQuery);
var delay = function () {
    var e;
    return function (t, n) {
        window.clearTimeout(e), e = window.setTimeout(t, n || 5e3)
    }
}();
$.exists = function (e) {
    return $(e).length > 0
}, $.fn.loading = function (e) {
    $.extend({show: !0}, e).show ? 0 === this.find(".white-fade").length && $('<div class="white-fade"></div>').appendTo(this) : this.find(".white-fade").remove()
}, $.fn.showFade = function (e) {
    $.extend({
        show: !0
    }, e).show ? 0 === this.find(".fade.in").length && ($("body").addClass("d-oh"), $('<div class="fade in"></div>').appendTo(this)) : ($("body").removeClass("d-oh"), this.find(".fade.in").remove())
}, $(document).ready(function () {
    function e(e) {
        if (!e.parent(".select-container").hasClass("no-highlight") && 0 != e.length) {
            var t = e[0].selectedIndex, n = e.parent(".select-container");
            0 === t ? n.removeClass("selected").removeClass("active") : (n.addClass("selected"), $.exists(n.find(".name")) && n.find(".name").text(e[0].options[t].text)), n.find(".icons").length && (n.find(".icons .active").removeClass("active"), n.find(".icons div:eq(" + t + ")").addClass("active")), n.find(".labels").length && (n.find(".labels .active").removeClass("active"), n.find(".labels div:eq(" + t + ")").addClass("active")), n.find(".prices").length && (n.find(".prices .active").removeClass("active"), n.find(".prices div:eq(" + t + ")").addClass("active"))
        }
    }

    $("body").on("keyup", function (e) {
        27 === e.keyCode && ($("#modal-product").length && Product.closeProduct(), $(".modal.active").each(function () {
            $(this).find(".btn-close").trigger("click")
        }))
    }), $(".btn-group.radio label").parent().removeClass("active"), $(".btn-group.radio :checked").parent().addClass("active"), $(".btn-group.radio").on("click", function () {
        $(this).find("input").parent().removeClass("active"), $(this).find(":checked").parent().addClass("active")
    }), $(".select-container select.select-filter").each(function () {
        $(this)[0].selectedIndex = 0
    }), $(document).on("change", ".select-container select", function () {
        e($(this))
    }), e($(".select-container select"))
}), showFade = function (e) {
    if ($("html").hasClass("ios") && $("html").hasClass("webkit") && (window.userScrollTop = $("body").scrollTop()), $("html").hasClass("desktop") ? $("html, body").addClass("d-oh") : $("html, body").addClass("m-oh"), 0 == $(".fade.in").length) {
        var t = $("<div />", {class: "fade in"});
        e && t.attr("rel", e), t.appendTo("body")
    }
    $(window).resize()
}, hideFade = function (e) {
    var t = $(".fade.in:not(.second)");
    e && (t = t.filter('[rel="' + e + '"]')), t.length && (t.remove(), $("html, body").removeClass("d-oh m-oh").css("min-height", "none"), $("html").hasClass("ios") && $("html").hasClass("webkit") && void 0 != window.userScrollTop && ($("body").scrollTop(window.userScrollTop), delete window.userScrollTop)), $(window).resize()
}, $(window).on("resize", function () {
    $("html").hasClass("d-oh") || $("html").hasClass("d-oh") ? $("body").css("min-height", window.innerHeight) : $("body").css("min-height", "none")
});
var entriesGroup = {
    quantity: 0, entries: function (e) {
        return entriesGroup.optionsGroup(e)
    }, optionsGroup: function (e) {
        var t = {};
        for (var n in e) {
            var i = e[n];
            t[i.bentry_id || i.entry_id] = i, t[i.bentry_id || i.entry_id].options = []
        }
        for (var n in t) {
            var i = t[n];
            if (-1 !== ["options", "constructors"].indexOf(i.cat_type)) {
                if (t[i.attach_to]) {
                    var r = t[i.attach_to].options;
                    if (_.isEmpty(_.findWhere(r, {item_id: i.item_id}))) {
                        var o = {
                            item_id: i.item_id,
                            cat_type: i.cat_type,
                            old_price: i.old_price || 0,
                            price: i.price || 0,
                            title: i.title,
                            available: i.available,
                            quantity: 1
                        };
                        t[i.attach_to].options.push(o)
                    } else {
                        for (var a in r)r[a].item_id === i.item_id && r[a].quantity++;
                        t[i.attach_to].options = r
                    }
                }
                delete t[n]
            }
        }
        return entriesGroup.entriesHash(t)
    }, entriesHash: function (e) {
        for (var t in e) {
            var n = e[t], i = [n.item_id];
            for (var r in n.options) {
                var o = n.options[r];
                o.quantity > 1 ? i.push(o.item_id + "x" + o.quantity) : i.push(o.item_id)
            }
            i = i.sort(function (e, t) {
                return parseInt(e) - parseInt(t)
            }), i.push(n.price), e[t].unique = i.join("_")
        }
        return entriesGroup.entriesUnique(e)
    }, entriesUnique: function (e) {
        entriesGroup.quantity = Object.keys(e).length;
        var t = {};
        for (var n in e) {
            var i = e[n], r = i.unique;
            void 0 === t[r] ? t[r] = {
                bentry_id: i.bentry_id || i.entry_id,
                item_id: i.item_id,
                title: i.title,
                old_price: null === i.old_price ? i.price : i.old_price,
                price: i.price || 0,
                quantity: 1,
                available: i.available || 0,
                promo_ids: i.promo_ids,
                icon: i.icon,
                icon_hover: i.icon_hover,
                options: function (e) {
                    var t = [], n = [], i = [], r = 0, o = 0;
                    for (var a in e) {
                        for (var s = 0; s < e[a].quantity; s++)i.push(e[a].item_id);
                        var c = e[a].title + (e[a].quantity > 1 ? " x " + e[a].quantity : "");
                        e[a].old_price ? r += e[a].old_price * e[a].quantity : r += e[a].price * e[a].quantity, o += e[a].price * e[a].quantity, "constructors" == e[a].cat_type ? n.push(c) : t.push(c)
                    }
                    return {ids: i, title: t.join(", "), components: n.join(", "), old_price: r, price: o}
                }(i.options)
            } : (t[r].quantity++, t[r].bentry_id = i.bentry_id, t[r].price = 0 === t[r].price ? i.price : t[r].price)
        }
        return t
    }
}, Forms = {
    formSwitch: function () {
        var e = $(this).closest(".switch");
        e.removeClass("pos-0 pos-1 pos-2 pos-3 pos-4 pos-5"), e.addClass("pos-" + $(this).index()), e.find(".btn.active").removeClass("active"), $(this).addClass("active")
    }, switchSelect: function (e, t) {
        var n = $(e);
        n.removeClass("pos-0 pos-1 pos-2 pos-3 pos-4 pos-5"), n.addClass("pos-" + t), n.find(".btn.active").removeClass("active"), n.find(".btn").eq(t).addClass("active")
    }
};
$(document).on("submit", "form.ajax", function (e) {
    e.preventDefault();
    var t = $(this);
    $.ajax({
        type: "POST",
        url: "/api/message/vacancy/",
        data: t.serializeArray(),
        dataType: "json",
        beforeSend: function () {
            $(t).find(".form-control.error").each(function () {
                $(this).removeClass("error").siblings(".error").remove()
            })
        }
    }).done(function (e) {
        $.isEmptyObject(e) || ("success" == e.state ? t.parent().html($("<div />", {
            class: "successtext",
            text: e.msg
        })) : $.isEmptyObject(e.errors) ? t.parent().html($("<div />", {
            class: "errortext",
            text: e.msg || "Ошибка отправки формы."
        })) : _.each(e.errors, function (e) {
            $(t).find('.form-control[name="' + e.field + '"]').each(function () {
                $(this).addClass("error").after($("<div />", {class: "error", text: e.desc}))
            })
        }))
    }).fail(function () {
        t.parent().html($("<div />", {class: "errortext", text: "Ошибка отправки формы."}))
    })
}), $(function () {
    $(document).on("click", ".switch .btn", Forms.formSwitch), $("input.phone, input.telephone").each(function (e, t) {
        var n = $(t);
        n.data("mask") && n.data("mask").destroy(), n.data("mask", Masked({
            inputElement: n,
            mask: [8, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/],
            focusPlaceholder: "8 (___) ___-__-__",
            onBlur: function () {
                11 !== n.val().replace(/[^0-9]/gim, "").length && n.val("").trigger("change")
            }
        }))
    }), $("input.age").mask("nn"), $(document).on("click", ".form-actions .btn", function (e) {
        e.preventDefault();
        var t = $(this), n = t.closest(".form-actions");
        n.toggleClass("default-hide"), n.toggleClass("default-show")
    })
});
var Menu = {
    close: function () {
        $(".top-menu .top-nav li.menu-element.active").removeClass("active"), $("html").removeClass("m-oh"), $(".fade.in.second").remove()
    }, active: function (e) {
        $(".top-menu .top-nav li.menu-element.active").removeClass("active"), $("html").addClass("m-oh"), $("<div />", {class: "fade in second"}).appendTo("body"), $(e).addClass("active")
    }
};
$(document).ready(function () {
    function e() {
        if ($.exists(".top-menu")) {
            var e = $(".top-line"), t = $(".top-menu"), n = t.find(".top-nav > li").length;
            window.innerWidth >= 1024 ? (t.find(".top-nav > li").css("width", "auto"), $(document).scrollTop() > e.height() ? (t.addClass("fixed"), e.addClass("fixMenu")) : (t.removeClass("fixed"), e.removeClass("fixMenu"))) : (t.find(".top-nav > li").css("width", 100 / n + "%"), t.removeClass("fixed"), e.removeClass("fixMenu"))
        }
    }

    function t(e) {
        var t = e.find(".menu-element");
        if (window.innerWidth >= 1024) {
            if (t.length) {
                var n = Math.floor(($(window).scrollTop() + $(window).innerHeight() - e.offset().top - 20) / t.eq(0).outerHeight());
                t.length >= n ? e.height(n * t.eq(0).outerHeight()).jScrollPane() : (e.length && e.data("jsp") && e.data("jsp").destroy(), e.height("auto"))
            }
        } else e.length && e.data("jsp") && e.data("jsp").destroy(), e.height("auto")
    }

    e(), $(window).on({
        scroll: e, resize: function () {
            e(), $(".top-menu .menu-element .dropdown").each(function () {
                t($(this))
            })
        }
    }), $(".top-nav > .menu-element").hover(function () {
        t($(this).find(".dropdown"))
    }, function () {
        t($(this).find(".dropdown"))
    }), $(".top-menu .menu-element").on("mousewheel", ".dropdown.jspScrollable", function (e) {
        return e.preventDefault(), !1
    }), $(".top-menu li.menu-element").on("click", function (e) {
        desktopWidth || ($(this).hasClass("active") ? Menu.close() : Menu.active(this))
    }), $(".top-menu li.menu-element .dropdown").on("click", function (e) {
        e.stopPropagation()
    }), $(".top-menu li.menu-element .dropdown a").on("click", function (e) {
        desktopWidth && !$.isEmptyObject($(this).data("anchor")) ? 0 === e.button && (e.preventDefault(), Category.scroll($(this))) : Menu.close()
    })
});
var Order = {
    emptyItems: !0,
    blockActions: !1,
    startPage: !0,
    isOrderPage: !1,
    response: {},
    delivery: {},
    paument: {},
    desiredTime: {},
    couponBlock: null,
    noApart: !1,
    blockInit: function () {
        Order.block(), $(document).on("click", "#cart-widget .item .close", function (e) {
            Order.remove(e, !0)
        }), $(window).on("focus", function () {
            Order.load(function () {
                Order.blockRender()
            })
        }), BasketId.onChange(function (e) {
            Order.blockRender()
        })
    },
    block: function (e) {
        e ? (Order.response = Order.basketRewriting(e), Order.render()) : Order.loadCache(function (e) {
            Order.blockRender(e), Order.btnDistrict(e)
        })
    },
    blockRender: function () {
        var e = Order.response, t = $("#cart-widget"), n = t.find(".items-wrap");
        if ($.isEmptyObject(e) || $.isEmptyObject(e.sum) || !e.total.common) t.addClass("empty"), t.find(".count").html($("<span/>", {text: "Корзина пуста"})), t.find(".num").text(0), n.empty(); else {
            t.removeClass("empty");
            var i = n.find(".items");
            t.find(".count").html(e.sum.block_text), t.find(".num").text(e.total.common), 0 === i.length ? i = $("<ul/>").addClass("unstyled items").appendTo(n) : i.empty(), $.each(e.entries, function (e, t) {
                t.available && i.append('<li class="product item" data-bentry_id="' + t.bentry_id + '"><div class="i" style="background-image: url(\'' + t.icon_hover + '\');"></div><div class="name" title="' + t.title + '">' + t.title + '</div><div class="info">' + t.quantity + "шт., " + priceFormat(t.price + t.options.price) + '</div><button class="close"></button></li>')
            }), desktopWidth && n.jScrollPane()
        }
    },
    basketRewriting: function (e) {
        if (!$.isEmptyObject(e)) {
            var t = entriesGroup.entries(e.entries);
            e.sum.quantity = entriesGroup.quantity, e.entries = t;
            var n = declension(e.sum.quantity, ["товар на", "товара на", "товаров на"]);
            e.sum.block_text = '<span class="num">' + e.sum.quantity + "</span> <span>" + n + "</span> <span>" + priceFormat(e.sum.total_sum, !0) + "</span>"
        }
        return Order.emptyItems = $.isEmptyObject(e) || !e.success || !e.sum.quantity, e
    },
    btnDistrict: function () {
        var e = Order.response, t = "Куда доставить?";
        empty(e) || ($("html").data("delivery", e.basket.delivery_id), $("html").data("district", e.order.district_id)), $.isEmptyObject(e) || (1 != e.basket.delivery_id || empty(e.basket.address_house) ? 2 != e.basket.delivery_id || empty(e.basket.district_address) || (t = e.basket.district_address) : t = e.basket.address_house), $("#district-edit #name").text(t)
    },
    loadCache: function (e) {
        var t = $.ajax({
            type: "GET",
            url: "/ajax/basket/",
            timeout: 15e3,
            data: {
                delivery_id: $("html").data("delivery"),
                channel_id: $("html").data("channel"),
                district_id: $("html").data("district"),
                ts: (new Date).getTime()
            },
            dataType: "json"
        });
        t.done(function (t) {
            Order.response = Order.basketRewriting(t), e(Order.response)
        }), t.fail(function () {
            log("Временно не доступно")
        })
    },
    load: function (e) {
        if (Order.blockActions) setTimeout(function () {
            Order.load(e)
        }, 500); else {
            Order.blockActions = !0;
            var t = {format: !0, ts: (new Date).getTime()};
            type = "GET", act = "load/", $.exists($("html").data("basket")) || (t = {
                channel_id: $("html").data("channel"),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            }, type = "POST", act = "create/");
            var n = $.ajax({type: type, url: "/api/basket/" + act, timeout: 15e3, data: t, dataType: "json"});
            n.done(function (t) {
                checkError(t) ? (_.isEmpty($("html").data("basket")) && ($("html").data("basket", t.basket.basket_id), BasketId.set(t.basket.basket_id.toString())), Order.response = Order.basketRewriting(t), e(Order.response), Order.showErrors(), Order.blockActions = !1) : t.fatal_error && ($("#cart-form-msg .title").text(t.fatal_error), $("#cart-form, #cart-items").addClass("hide"), $("#cart-form-msg").removeClass("hide"), $(window).triggerHandler("resize"))
            }), n.fail(function () {
                log("Временно не доступно")
            })
        }
    },
    change: function (e, t, n) {
        if (Order.blockActions) setTimeout(function () {
            Order.change(e, t, n)
        }, 500); else {
            Order.blockActions = !0;
            var i = ($("#cart-form"), {format: !0, _csrf: $('meta[name="csrf-token"]').attr("content")}),
                r = $.ajax({type: "POST", url: "/api/basket/change/", data: $.extend(i, e), dataType: "json"});
            r.done(function (e) {
                Order.removeAllErrors(), checkError(e) && (Order.response = Order.basketRewriting(e), Order.emptyItems || Order.formTimeSelect(n), t && t(Order.response), Order.blockActions = !1, Order.loadPayments(function () {
                    Order.paymentAvailable() ? Order.renderPayment() : Order.setFirstPayment(function () {
                        Order.renderPayment()
                    })
                }))
            }), r.fail(function () {
                log("Временно не доступно")
            })
        }
    },
    contentRender: function () {
        var e = Order.response, t = $("#items-tpl").html(), n = $("table.cart tbody");
        n.empty(), $("#cart-items").removeClass("hide"), $("#cart-items-empty").addClass("hide");
        var i = _.pluck(_.where(e.promos, {promo_action: "gift"}), "promo_id");
        $.each(e.entries, function (e, r) {
            r.old_price += r.options.old_price, r.price += r.options.price;
            var o = $(_.template(t)(r));
            o.data({
                bentry_id: r.bentry_id,
                item_id: r.item_id,
                opt_ids: r.options.ids
            }), (_.intersection(i, r.promo_ids).length || 0 == r.available) && o.find(".qnt .add").prop("disabled", !0), n.append(o)
        });
        var r = _.template($("#items-promo-tpl").html());
        n.append(r(e)), e.bonus.count ? ($("#bonusBar").removeClass("hide"), e.basket.bonus ? $("#use-bonuses").addClass("checked") : $("#use-bonuses").removeClass("checked"), Order.startPage ? ($("#bonus-discount .val").text(e.sum.bonus_discount), 0 == e.sum.bonus_discount ? $("#bonus-discount").addClass("hide") : $("#bonus-discount").removeClass("hide")) : (e.sum.bonus_discount > 0 && $("#bonus-discount").removeClass("hide"), $({p: parseInt($("#bonus-discount .val").text())}).animate({p: e.sum.bonus_discount}, {
            duration: 600,
            step: function (e) {
                $("#bonus-discount .val").text(parseInt(e))
            },
            complete: function () {
                0 == e.sum.bonus_discount && $("#bonus-discount").addClass("hide")
            }
        }))) : $("#bonusBar").addClass("hide"), empty(e.basket.coupon_code) || $('input[name="coupon_code"]').val(e.basket.coupon_code), 2 === e.basket.delivery_id ? $("#delivery-price").parent(".total").addClass("hide") : $("#delivery-price").parent(".total").removeClass("hide"), empty(e.sum.total_discount) ? $("#discount-sum").addClass("hide") : ($("#discount-sum").removeClass("hide"), $("#discount-sum > span").text(priceFormat(e.sum.total_discount))), Order.startPage ? ($("#total-sum").text(priceFormat(e.sum.total_sum, !0)), $("#delivery-price").text(priceFormat(e.sum.delivery_price + e.sum.polygon_price))) : ($({p: parseInt($("#total-sum").text())}).animate({p: e.sum.total_sum}, {
            duration: 600,
            step: function (e) {
                $("#total-sum").text(priceFormat(0 | e, !0))
            }
        }), $({d: parseInt($("#delivery-price").text())}).animate({d: e.sum.delivery_price + e.sum.polygon_price}, {
            duration: 600,
            step: function (e) {
                $("#delivery-price").text(priceFormat(0 | e))
            }
        }))
    },
    giftsRender: function () {
        showFade();
        var e = $("#gifts-tpl").html(), t = $("#modal-gift .gift-list");
        t.empty();
        var n = [];
        Order.response.promos.forEach(function (e) {
            Order.response.gifts.forEach(function (t) {
                t.promo_id === e.promo_id && n.push({gift: t, promo: e.promo_title})
            })
        });
        var i = "";
        $.each(n, function (n, r) {
            i !== r.promo && (i = r.promo, t.append('<h2 class="clear gifts-promo-title">' + i + "</h2>"));
            var o = _.template(e);
            t.append(o(r.gift))
        }), $("#modal-gift").fadeIn(250, function () {
            $(this).addClass("active")
        })
    },
    giftsAdd: function (e) {
        e.preventDefault();
        var t = $(e.target).closest("li");
        $.ajax({
            type: "POST",
            url: "/api/basket/addgift/",
            timeout: 5e3,
            data: {
                promo_id: t.data("promo"),
                item_id: t.data("item"),
                item_ids: t.find(".free-select").attr("value"),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            },
            dataType: "json"
        }).done(function (e) {
            checkError(e) && (Order.response = Order.basketRewriting(e), Order.render(), $.isEmptyObject(Order.response.gifts) ? Order.giftsClose() : (hideFade(), Order.giftsRender()), log("Подарок добавлен в корзину", "info", 2e3))
        })
    },
    giftsClose: function () {
        hideFade(), $("#modal-gift").fadeOut(250, function () {
            $(this).removeClass("active")
        })
    },
    "couponСode": function () {
        var e = $.trim($('input[name="coupon_code"]').val());
        Order.change({coupon_code: e}, function (e) {
            Order.render()
        })
    },
    render: function (e) {
        var t = Order.response;
        Order.blockRender(), Order.btnDistrict(), $("#cart-wrapper").removeClass("hide"), Order.isOrderPage && (Order.emptyItems ? ($("#cart-form, #cart-items, #cart-form-msg").addClass("hide"), $("#cart-items-empty").removeClass("hide"), Order.startPage && $(".top-line .nav .status").length && (location = $(".top-line .nav .status .btn-status").attr("href"))) : ($("#cart-form, #cart-items").removeClass("hide"), $("#cart-items-empty").addClass("hide"), Order.contentRender(), Order.formInputSet(), timeSelect.render(t), Order.showErrors(), Order.formBlocked(t))), $(window).triggerHandler("resize")
    },
    remove: function (e) {
        var t = $(e.target).closest("tr,li"), n = $.ajax({
            type: "POST",
            url: "/api/basket/remove/",
            timeout: 5e3,
            data: {bentry_ids: t.data("bentry_id"), format: !0, _csrf: $('meta[name="csrf-token"]').attr("content")},
            dataType: "json"
        });
        n.done(function (e) {
            checkError(e) && (Order.response = Order.basketRewriting(e), Order.render())
        }), n.fail(function () {
            log("Временно не доступно")
        })
    },
    add: function (e) {
        var t = $(e.target).closest("tr"), n = $.ajax({
            type: "POST",
            url: "/api/basket/addall/",
            timeout: 5e3,
            data: {
                base_item_id: t.data("item_id"),
                item_ids: t.data("opt_ids").join(),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            },
            dataType: "json"
        });
        n.done(function (e) {
            checkError(e) && (goalListener.reach({caption: "BUY"}), Order.response = Order.basketRewriting(e), Order.render())
        }), n.fail(function () {
            log("Временно не доступно")
        })
    },
    formLoad: function (e, t, n) {
        var i = $.ajax({
            type: "GET",
            url: "/api/application/" + e + "/",
            data: $.extend(t, {channel_id: $("html").data("channel")}),
            dataType: "json"
        });
        i.done(function (e) {
            checkError(e) && n(e)
        }), i.fail(function () {
            Order.formFail()
        })
    },
    formInputSet: function () {
        var e = Order.response;
        $.each(e.fields, function (e, t) {
            "coupon_code" == e && (t ? $("#coupon-code").removeClass("disabled") : $("#coupon-code").addClass("disabled")), $("#cart-wrapper").find('[name="' + e + '"]').prop("disabled", !t)
        }), ["address_house", "address_apart", "address_entr", "address_floor", "phone", "customer_name", "cash", "comment"].forEach(function (e) {
            switch (e) {
                case"address_house":
                    var t = $('#cart-wrapper input[name="' + e + '"]'), n = t.closest(".form-controls");
                    n.find(".geo-target"), t.typeahead("destroy").val(Order.response.basket[e]), n.find(".hint .desc").text(Order.response.basket.address_house ? Order.response.basket.address_house : n.find(".hint .desc").data("default")), Order.response.basket.client_point_lt && Order.response.basket.client_point_ln && Order.response.basket.point_lt && Order.response.basket.point_ln ? (t.prop("disabled", !0), n.addClass("setPoint")) : (t.typeahead({
                        hint: !1,
                        highlight: !1,
                        minLength: 3
                    }, {
                        limit: 20, source: function (e, t, n) {
                            function i(e, t) {
                                var n = new Array;
                                return $.each(t, function (t, i) {
                                    -1 != i.toLowerCase().indexOf(e.toLowerCase()) && n.push(i)
                                }), n
                            }

                            var r = $(this);
                            if (matches = i(e, r.data("cache")), matches.length > 0)return t(matches);
                            $.get("/api/address/?q=" + e, function (t) {
                                r.data("cache", t), n(i(e, t))
                            })
                        }
                    }), t.prop("disabled", !1), n.removeClass("setPoint"));
                    break;
                default:
                    $('#cart-wrapper .form-control[name="' + e + '"]').val(Order.response.basket[e])
            }
        }), Phone.init()
    },
    formSwitchRender: function () {
        var e = Order.response;
        if (!$.isEmptyObject(Order.delivery) && !empty(e.basket.delivery_id)) {
            var t = empty(e.basket.delivery_id) ? 0 : _.findIndex(Order.delivery, function (t) {
                return t.delivery_id === e.basket.delivery_id
            });
            Forms.switchSelect($("#delivery"), t), Order.formDeliveryEvent(null, !0), Order.formTimeSelect(!0)
        }
        if (!$.isEmptyObject(Order.payment) && !empty(e.basket.payment_id)) {
            var t = empty(e.basket.payment_id) ? 0 : _.findIndex(Order.payment, function (t) {
                return t.payment_id === e.basket.payment_id
            });
            Forms.switchSelect($("#payment"), t)
        }
        t = null === e.basket.desired_time ? 0 : 1, Forms.switchSelect($("#delivery-time .delivery-time"), t)
    },
    form: function () {
        if (Order.emptyItems)return !1;
        Phone.init(), Order.formLoad("deliveries", {}, function (e) {
            Order.delivery = e;
            var t = $("#form-delivery-tpl").html(), n = $("#delivery");
            n.empty();
            var i = 0;
            Order.delivery.length <= 1 && n.parents(".form-row").addClass("hide");
            for (var r in e) {
                Order.response.basket.delivery_id === e[r].delivery_id && (i = r);
                var o = _.template(t);
                n.append(o(e[r]))
            }
            $("<div/>").addClass("slide-button").appendTo(n), Forms.switchSelect(n, i), Order.formDeliveryEvent(null, !0), Order.formTimeSelect(!0), timeSelect.event();
            var a = _.findWhere(Order.delivery, {delivery_logic: "selfdelivery"});
            $.isEmptyObject(a) || Order.formLoad("districts", {delivery_id: a.delivery_id}, function (e) {
                var t = $('#form-district select[name="district"]');
                t.empty();
                for (var n in e)t.append('<option value="' + e[n].district_id + '">' + e[n].district_address + "</option>");
                empty(Order.response.order.district_id) || t.val(Order.response.order.district_id)
            })
        }), Order.loadPayments(function () {
            Order.paymentAvailable() ? Order.renderPayment() : Order.setFirstPayment(function (e) {
                Order.renderPayment()
            })
        }), Order.response.basket.client_id && $.ajax({
            type: "GET",
            url: "/api/client/addresses/",
            data: {location_id: $("html").data("location")},
            dataType: "json",
            success: function (e) {
                if (1 == e.success && !_.isEmpty(e.addresses)) {
                    $("#address-house .arrow").removeClass("hide");
                    var t = $("#client_addresses").empty();
                    _.each(e.addresses, function (e) {
                        var n = [];
                        e.place_name && n.push(e.place_name), e.street_name && n.push(e.street_name), n.push(e.house_name);
                        var i = $("<div/>", {class: "item", text: n.join(", ")});
                        Order.response.basket.address_house == n.join(", ") && i.addClass("selected"), i.data({
                            address_house: n.join(", "),
                            address_apart: e.address_apart,
                            address_floor: e.address_floor,
                            address_entr: e.address_entr
                        }), t.append(i)
                    })
                }
            }
        })
    },
    renderPayment: function () {
        var e = $("#form-payment-tpl").html(), t = $("#payment");
        t.removeClass(function (e, t) {
            var n = [], i = t.split(" ");
            for (var r in i) {
                var o = i[r];
                0 === o.indexOf("way-") && n.push(o)
            }
            return n.join(" ")
        }), t.empty().addClass("way-" + Order.payment.length);
        var n = 0, i = !0;
        for (var r in Order.payment) {
            var o = $.extend({}, Order.payment[r], {selected: !1});
            Order.response.basket.payment_id === o.payment_id && (n = r, "cash" === Order.payment[r].payment_logic && (i = !1));
            var a = _.template(e);
            t.append(a(o))
        }
        i ? $("#cash").hide() : $("#cash").show(), $("<div/>").addClass("slide-button").appendTo(t), Forms.switchSelect(t, n)
    },
    paymentAvailable: function () {
        var e = !1;
        return $.isEmptyObject(Order.payment) || empty(Order.response.basket.payment_id) || (e = -1 !== _.findIndex(Order.payment, {payment_id: Order.response.basket.payment_id})), e
    },
    setFirstPayment: function (e) {
        var t = "function" == typeof e ? e : function () {
        }, n = _.first(Order.payment);
        if (!n)return void t();
        Order.change({payment_id: n.payment_id}, t)
    },
    loadPayments: function (e) {
        var t = "function" == typeof e ? e : function () {
        }, n = {};
        Order.response && Order.response.order && Order.response.order.district_id && (n.district_id = Order.response.order.district_id), Order.formLoad("payments", n, function (e) {
            Order.payment = e, t(e)
        })
    },
    formBlocked: function (e) {
        var t = {hide: !1, text: ""}, n = $("#cart-form .blocked-message");
        n.empty(), $("#cart-form-msg .title").empty();
        for (var i in e.errors)if ("block" === e.errors[i].level)switch (e.errors[i].caption) {
            case"channel_id_is_blocked_temporarily":
            case"channel_doesnt_work_now":
                t.hide = !0, t.text = e.errors[i].text;
                var r = $("#cart-form-msg .scheduleInfo"), o = {start: !1, end: !1};
                e.work_time.channel_shift_start && (o.start = e.work_time.channel_shift_start.replace(/\d{4}-\d{2}-\d{2} (\d{2}:\d{2}):\d{2}/, "$1")), e.work_time.channel_shift_end && (o.end = e.work_time.channel_shift_end.replace(/\d{4}-\d{2}-\d{2} (\d{2}:\d{2}):\d{2}/, "$1")), o.start && o.end ? (r.find("#work_from").text(o.start), r.find("#work_to").text(o.end), r.find(".workday").removeClass("hide"), r.find(".today").removeClass("hide"), r.find(".weekend").addClass("hide")) : (r.find(".workday").addClass("hide"), r.find(".today").addClass("hide"), r.find(".weekend").removeClass("hide")), r.removeClass("hide");
                break;
            case"district_id_is_blocked_temporarily":
            case"district_doesnt_work_now":
            case"some_items_are_not_available":
                n.append(e.errors[i].text).append(" "), $("#cart-form #submit").prop("disabled", !0)
        }
        t.hide ? Order.formFail(t.text) : ($("#cart-form-msg").addClass("hide"), $("#cart-form, .cart-page .header.cart").removeClass("hide"))
    },
    formDeliveryEvent: function (e, t) {
        var n = parseInt(t ? Order.response.basket.delivery_id : $(this).find('input[name="delivery"]').val());
        "address" === (n ? _.findWhere(Order.delivery, {delivery_id: n}) : _.first(Order.delivery)).delivery_logic ? ($("#form-district").hide(), $("#address-house, #address-apartment").show(), $("#delivery-time label.form-label").text("Время доставки")) : ($("#form-district").show(), $("#address-house, #address-apartment").hide(), $("#delivery-time label.form-label").text("Когда заберете?")), Order.formDeliveryTimeEvent(null), null !== e && Order.change({delivery_id: n}, function (e) {
            $('#form-district [name="district"]').val(Order.response.order.district_id), Forms.switchSelect($("#delivery-time .delivery-time"), 0), Order.render(!0)
        })
    },
    formPaymentEvent: function (e, t) {
        var n = parseInt(t ? Order.response.basket.payment_id : $(this).find('input[name="payment"]').val());
        "cash" === (n ? _.findWhere(Order.payment, {payment_id: n}) : _.first(Order.payment)).payment_logic ? $("#cash").show() : $("#cash").hide(), null !== e && Order.change({payment_id: n}, function (e) {
            Order.render(!0)
        })
    },
    formDeliveryTimeEvent: function (e) {
        var t = $('.btn.active input[name="delivery_time"]').val();
        if (null !== e) {
            var n = 0;
            "time" === t && (n = Order.response.time.min_desired_time_s), Order.change({desired_time: n}, function (e) {
                Order.render(!0)
            })
        }
    },
    formTimeSelect: function (e) {
        var t = parseInt($('#delivery .btn.active input[name="delivery"]').val()),
            n = t ? _.findWhere(Order.delivery, {delivery_id: t}) : _.first(Order.delivery),
            i = empty(Order.response.basket.desired_time) ? "fast" : "time";
        if ($.isEmptyObject(n))return !1;
        Forms.switchSelect($("#delivery-time .delivery-time"), "time" == i ? 1 : 0), timeSelect.render(Order.response, e), empty(Order.response.time.min_desired_time_s) || Order.response.time.now_s >= Order.response.time.max_desired_time_s || empty(Order.response.order.district_id) ? $("#delivery-time").hide() : ($("#delivery-time").show(), "time" === i ? $("#delivery-time .time-select").show() : $("#delivery-time .time-select").hide())
    },
    formFail: function (e) {
        $("#cart-form, #cart-items, .cart-page .header.cart").addClass("hide"), $("#cart-form-msg .title").text(e || "Временно не доступно"), $("#cart-form-msg").removeClass("hide")
    },
    interval: function () {
        Order.updateTimer && clearInterval(Order.updateTimer), Order.updateTimer = setInterval(function () {
            console.log("Обновление 1 раз в минуту");
            var e = new Date(1e3 * Order.response.time.now_s);
            e.setMinutes(e.getMinutes() + 1), Order.response.time.now_s = e.getTime() / 1e3, Order.formTimeSelect(!0)
        }, 6e4)
    },
    toggleBonuses: function () {
        Order.change({bonus: Order.response.basket.bonus ? 0 : 1}, Order.render)
    },
    save: function () {
        if (Order.blockActions)return void setTimeout(function () {
            Order.save()
        }, 500);
        Order.brief().done(function (e) {
            return Order.response = Order.basketRewriting(e), Order.removeAllErrors(), 0 !== Order.response.errors.length ? void Order.showErrors() : "address" !== _.findWhere(Order.delivery, {delivery_id: Order.response.basket.delivery_id}).delivery_logic || 0 !== Order.response.basket.address_apart.length || Order.noApart ? Order.blockActions ? void setTimeout(function () {
                Order.save()
            }, 500) : void $.ajax({
                type: "POST",
                url: "/api/basket/save/",
                data: {format: !0, _csrf: $('meta[name="csrf-token"]').attr("content")},
                dataType: "json"
            }).done(function (e) {
                Order.removeAllErrors(), checkError(e) ? (goalListener.reach({caption: "ORDER"}), location = e.paydata ? e.paydata.pay_page : $("html").data("location-url") + "status.html") : (Order.response = Order.basketRewriting(e), Order.showErrors())
            }) : void Order.showApartWarning()
        })
    },
    brief: function (e) {
        return $.ajax({
            type: "POST",
            url: "/api/basket/brief/",
            data: {format: !0, _csrf: $('meta[name="csrf-token"]').attr("content")},
            dataType: "json"
        })
    },
    removeInputError: function () {
        var e = void 0 !== $(this).attr("name") ? $(this).attr("name") : $(this).attr("id");
        $(this).removeClass("error"), $("#" + e + "-error").removeClass("show").addClass("hide")
    },
    removeAllErrors: function () {
        $("#cart-form").find(".form-control").each(function () {
            $(this).removeClass("error"), $("#cart-form").find("#" + $(this).attr("name") + "-error").addClass("hide")
        })
    },
    showErrors: function () {
        if (couponBlockTime = document.cookie.match(/couponBlockTime=(\d+)/), couponBlockTime && (Order.couponBlock && clearTimeout(Order.couponBlock), Order.couponBlock = setTimeout(function () {
                $("#coupon-code").removeClass("disabled").find('[name="coupon_code"]').prop("disabled", !1)
            }, couponBlockTime[1] - (new Date).getTime())), $.each(Order.response.errors, function (e, t) {
                ~["entries", "client_id"].indexOf(t.field) ? "system" == t.level ? log(t.text, "error", 3e3) : log(t.text, t.level, 3e3) : "coupon_code" == t.field ? (log(t.text, "error", 3e3), "coupon_code_limit_is_temporarily_exceeded" == t.caption && (couponBlockTime = new Date, couponBlockTime.setSeconds(couponBlockTime.getSeconds() + t.coupon_blocked_s), document.cookie = "couponBlockTime=" + couponBlockTime.getTime() + ";expires=" + couponBlockTime.toUTCString() + ";path=/", Order.couponBlock && clearTimeout(Order.couponBlock), Order.couponBlock = setTimeout(function () {
                    $("#coupon-code").removeClass("disabled").find('[name="' + t.field + '"]').prop("disabled", !1)
                }, 1e3 * t.coupon_blocked_s))) : ("address_house" == t.field || "address_isnt_in_delivery_zone" == t.caption) && Order.response.basket && Order.response.basket.client_point_lt && Order.response.basket.client_point_ln ? ($('[name="address_house"]').typeahead("destroy"), $("#address-house .form-controls").addClass("setPoint error"), $("#address-house .form-controls .hint .desc").text(t.text)) : $("#cart-form").find('[name="' + t.field + '"]').each(function () {
                    "notice" != t.level && $(this).addClass("error"), $("#" + $(this).attr("name") + "-error").html(t.text).removeClass("hide")
                })
            }), $("#cart-form .blocked-message").text() || $("#cart-form #submit").prop("disabled", !1), $(".form-control.error").length) {
            var e = Math.ceil($(".form-control.error:first").offset().top) - 10;
            desktopWidth && (e -= $(".desktop .top-menu").outerHeight(!0)), $(document).scrollTop() > e && $("html, body").stop(!0).animate({scrollTop: e}, 500)
        }
    },
    showApartWarning: function (e, t) {
        showFade(), $("#modal-apart-warning").fadeIn(250, function () {
            $(this).addClass("active")
        })
    },
    closeApartWarning: function () {
        $("#cart-form .blocked-message").text() || $("#cart-form #submit").prop("disabled", !1), hideFade(), $("#modal-apart-warning").fadeOut(250, function () {
            $(this).removeClass("active")
        })
    }
};
$(function () {
    if ($(document).on("click touchstart", "#cart-widget a", function (e) {
            e.preventDefault(), $(this).hasClass("clicked") || ($(this).addClass("clicked"), $("#cart-widget").hasClass("empty") ? $(".top-line .nav .status").length ? location = $(".top-line .nav .status .btn-status").attr("href") : (log("Корзина пуста", "info", 1e3), $(this).removeClass("clicked")) : (goalListener.reach({caption: "BASKET"}), location = $(this).data("href")))
        }), $(window).on("resize", function () {
            var e = $(window).innerHeight() - $(".top-line").outerHeight(!0) - $(".top-menu").outerHeight(!0) - $(".bottom:visible").outerHeight(!0) - $(".cart-page .header").not(".hide").outerHeight(!0) - $(".cart-page .content").outerHeight(!0) + $(".cart-page .content").height() - $("#cart-wrapper").outerHeight(!0) + $("#cart-wrapper").height() - parseInt($("body > .wrapper").css("padding-top")) - 5;
            $("#cart-form").hasClass("hide") ? $("#cart-wrapper").height(e) : $("#cart-wrapper").height("auto"), $('#cart-form #cash [name="cash"]').attr("placeholder", window.innerWidth < 1024 ? "Сдача с" : "0")
        }), !$.exists(".cart-page"))return void($.exists("#cart-widget") && Order.blockInit());
    Order.isOrderPage = !0, Order.load(function () {
        Order.render(), Order.form(), Order.interval(), Order.startPage = !1
    }), setTimeout(function () {
        $(window).on("focus", function () {
            Order.startPage || Order.load(function () {
                Order.removeAllErrors(), Order.render(), Order.form()
            })
        })
    }, 1e3), $(document).on("click", function (e) {
        var t = $(e.target).closest("#modal-gift li");
        $(".free-list.show").not(t.find(".free-list")).removeClass("show"), $(e.target).closest("#modal-gift li .free-select, #modal-gift li .free-list").length || t.find(".free-list.show").removeClass("show")
    }), $(document).on("click", "#gift-selected", Order.giftsRender), $(document).on("click", "#use-bonuses", Order.toggleBonuses), $(document).on("click", "#modal-gift .gift-list .click, #modal-gift .gift-list .btn", Order.giftsAdd), $(document).on("click", "#modal-gift .gift-list .free-select", function (e) {
        $(e.target).closest("li").find(".free-list").toggleClass("show")
    }), $(document).on("click", "#modal-gift .gift-list .free-list .label", function (e) {
        e.stopPropagation();
        var t = $(this).closest("li"), n = t.find(".free-select")
        ;0 != $(this).attr("value") ? n.addClass("selected") : n.removeClass("selected"), n.attr("value", $(this).attr("value")), n.find(".free-icon").css("background-image", $(this).find(".i").css("background-image")), n.find(".free-name span").text($(this).find(".title").text()), t.find(".free-list").removeClass("show")
    }), $(document).on("change", '#coupon-code input[type="text"]', function (e) {
        Order.couponСode()
    }), $(document).on("click", "#cart-wrapper .qnt .add", function (e) {
        $(e.target).hasClass("disabled") || Order.add(e, !1)
    }), $(document).on("click", "#cart-wrapper .qnt .remove, #cart-widget .item .close", function (e) {
        Order.remove(e, !1)
    }), $(document).on("click", "#delivery .btn", Order.formDeliveryEvent), $(document).on("click", "#payment .btn", Order.formPaymentEvent), $(document).on("click", "#delivery-time .switch .btn", Order.formDeliveryTimeEvent), $(document).on("change", '#cart-form select[name="district"]', function () {
        "" !== $(this).val() && Order.change({delivery_district: $(this).val()}, function () {
            Order.render(!0)
        })
    }), $(document).on("click", function (e) {
        $(e.target).closest("#address-house .arrow").length || $("#client_addresses").addClass("hide")
    }), $(document).on("click", "#address-house .arrow", function () {
        $("#client_addresses").toggleClass("hide")
    }), $(document).on("click", "#address-house .clear", function () {
        Order.change({address_house: null, point: null}, function () {
            Order.render()
        })
    }), $(document).on("click", "#client_addresses .item", function () {
        Order.change($(this).data(), function () {
            Order.render()
        })
    }), $(document).on("change", '[name="address_apart"],[name="address_entr"],[name="address_floor"],[name="phone"],[name="customer_name"],[name="cash"],[name="comment"]', function () {
        var e = $(this), t = new Object;
        t[e.attr("name")] = e.val(), Order.change(t)
    }), $(document).on("change", '[name="address_house"]', function () {
        var e = $(this);
        e.typeahead("close"), Order.change({point: null, address_house: e.val()}, function () {
            Order.render(!0)
        })
    }), $(document).on("typeahead:select typeahead:autocomplete", '[name="address_house"]', function () {
        "," != $.trim($(this).val()).substr(-1) && $(this).trigger("change")
    }), $(document).on("focusin focusout", "#cart-wrapper", function (e) {
        $(e.target).is("input, textarea, select") && $("html").hasClass("web-view") && ($(".wrapper").toggleClass("no-padding", "focusin" === e.type), $(".top-menu").toggleClass("hide", "focusin" === e.type))
    }), $(document).on("click", "#cart-form #submit", function () {
        $(this).prop("disabled", !0), Order.save()
    }), $("#modal-apart-warning .js-set-apart").click(function () {
        Order.closeApartWarning(), $('#address-apartment [name="address_apart"]').focus()
    }), $("#modal-apart-warning .js-no-apart").click(function () {
        Order.noApart = !0, Order.closeApartWarning(), Order.save()
    })
});
var Phone = {
    init: function () {
        this.el = $(".tel-universal"), this.input = this.el.find("input[name=phone]"), this.prefix = this.el.data("telephone-prefix"), this.code = this.el.data("telephone-code").toString(), this.len = +this.el.data("telephone-length");
        var e = this.getType(this.input.val());
        this.mask(e), this.el.find(".tel-type .btn.active").not("." + e).removeClass("active"), this.el.find(".tel-type .btn." + e).addClass("active"), this.el.off("click").on("click", ".tel-type .btn", function () {
            $(this).hasClass("active") || (Phone.el.find(".tel-type .btn.active").removeClass("active"), $(this).addClass("active"), $(this).hasClass("mobile") ? Phone.mask("mobile", !0) : Phone.mask("stationary", !0))
        })
    }, getType: function (e) {
        return 0 === e.replace(/[^0-9]/gim, "").indexOf(this.prefix + "" + this.code) ? "stationary" : "mobile"
    }, mask: function (e, t) {
        t && "" != this.input.val() && this.input.val("").trigger("change"), this.input.data("mask") && (this.input.data("mask").destroy(), this.input.data("mask", null));
        var n = [this.prefix, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/],
            i = this.prefix + " (___) ___-__-__";
        if ("mobile" != e)switch ((this.len >= 5 || this.len <= 7) && (n = [this.prefix, " ", "("], n = n.concat((this.code + "").split("").map(function (e) {
            return +e
        })), n = n.concat([")", " "])), this.len) {
            case 5:
                n = n.concat([/\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]), i = this.prefix + " (" + this.code + ") _-__-__";
                break;
            case 6:
                n = n.concat([/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]), i = this.prefix + " (" + this.code + ") ___-___";
                break;
            case 7:
                n = n.concat([/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]), i = this.prefix + " (" + this.code + ") ___-____"
        }
        if ("mobile" != e) {
            var r = this.input.val().replace(/[^0-9]/gim, ""), o = [], a = 0;
            n.some(function (e) {
                if (e instanceof RegExp) {
                    if (o.push(r[a] ? r[a] : "_"), a === r.length)return !0;
                    a++
                } else"number" == typeof e && a++, o.push(e);
                return !1
            }), o = o.join(""), this.input.val(o)
        }
        var s = Masked({inputElement: this.input, mask: n});
        this.input.attr("placeholder", i).data("mask", s)
    }
}, timeSelect = {
    offset: 0, render: function (e, t) {
        var n = $("#time-select");
        if (n.find("select").empty(), this.offset = 60 * (new Date).getTimezoneOffset() + e.time.offset, null != e.time.min_desired_time && null != e.time.max_desired_time)for (var i = new Date(1e3 * (e.time.min_desired_time_s + timeSelect.offset)),
                                                                                                                                                                                     r = new Date(1e3 * (e.basket.desired_time_s + timeSelect.offset)),
                                                                                                                                                                                     o = new Date(1e3 * (e.time.max_desired_time_s + timeSelect.offset)),
                                                                                                                                                                                     a = new Date(new Date(i).setMinutes(0)); a.getTime() <= o.getTime(); a.setHours(a.getHours() + 1))if (r.getHours() == a.getHours()) {
            var s = new Date(a);
            s.setHours(s.getHours() + 1);
            for (var c = new Date(a); c.getTime() < s.getTime(); c.setMinutes(c.getMinutes() + e.time.desired_time_step))c.getTime() >= i.getTime() && c.getTime() <= o.getTime() && n.find('select[name="minutes"]').append('<option value="' + c.getMinutes() + '"' + (r.getMinutes() == c.getMinutes() ? " selected" : "") + ">" + pad(c.getMinutes(), 2) + "</option>");
            n.find('select[name="hours"]').append('<option value="' + a.getHours() + '" selected data-time="' + a.getTime() + '">' + pad(a.getHours(), 2) + "</option>")
        } else n.find('select[name="hours"]').append('<option value="' + a.getHours() + '" data-time="' + a.getTime() + '">' + pad(a.getHours(), 2) + "</option>")
    }, event: function () {
        $(document).on("change", 'select[name="hours"], select[name="minutes"]', function () {
            var e = new Date($('select[name="hours"] option:selected').data("time"));
            e.setMinutes($('select[name="minutes"]').val()), Order.change({desired_time: e.getTime() / 1e3 - timeSelect.offset}, function (e) {
                Order.render()
            }, !1)
        })
    }
}, Product = {
    setControls: function () {
        var e = $("#modal-product").data("page"), t = $("li[data-page=" + e + "]"),
            n = t.prev(".itemgroup").find('a[rel="product"]').attr("href");
        empty(n) ? $(".modalcontrol.prev").addClass("hide").attr("href", "") : $(".modalcontrol.prev").removeClass("hide").attr("href", n);
        var i = t.next(".itemgroup").find('a[rel="product"]').attr("href");
        empty(i) ? $(".modalcontrol.next").addClass("hide").attr("href", "") : $(".modalcontrol.next").removeClass("hide").attr("href", i)
    }, closeProduct: function (e) {
        if ($("#modal-product, .modal-controls").remove(), hideFade(), !$("#client").length && ($("title").text($("#category_title").val()), e)) {
            var t = window.location.href;
            t = t.substr(0, t.lastIndexOf("/") + 1), window.history.pushState({path: t}, "", t), $("html").removeData("openpage openitem openurl")
        }
    }, load: function (e) {
        var t = $(e).closest("li"), n = $("html").data("channel"), i = $("html").data("district"), r = t.data("page"),
            o = t.data("item"), a = $(e).attr("href");
        return !!District.initDistrict(r, o, a) && (a !== window.location.pathname && window.history.pushState({path: a}, null, a), showFade(), $.ajax({
                type: "GET",
                url: "/ajax/itemgroup/",
                data: {channel_id: n, district_id: i, page_id: r, item_id: o},
                dataType: "html"
            }).done(function (e) {
                var t = $("<div/>").html(e);
                $("title").text(t.find("#modal-product").data("title")), t.find(".product-fade").hide(), t.appendTo("body"), t.find(".product-fade").fadeIn(500, function () {
                    Product.setControls(), itemzoom()
                })
            }).fail(function () {
                log("Временно недоступно")
            }), !1)
    }, moveModal: function (e) {
        var t = $('.itemgroup .click[href="' + e + '"]').closest("li"), n = $("html").data("channel"),
            i = $("html").data("district"), r = t.data("page"), o = t.data("item");
        e !== window.location.pathname && window.history.pushState({path: e}, null, e), $("#modal-product").fadeOut(300, function () {
            $.ajax({
                type: "GET",
                url: "/ajax/itemgroup/",
                data: {channel_id: n, district_id: i, page_id: r, item_id: o},
                dataType: "html"
            }).done(function (e) {
                var t = $("<div/>").html(e);
                $("title").text(t.find("#modal-product").data("title")), $("#modal-product").replaceWith(t.find("#modal-product")), $("#modal-product").fadeIn(500, function () {
                    Product.setControls(), itemzoom()
                })
            }).fail(function () {
                log("Временно недоступно")
            })
        })
    }, select: function () {
        var e = $(this).closest("#modal-product").find(".select-items");
        Product.listPos(), e.toggleClass("active")
    }, listPos: function () {
        var e = {};
        e.el = $("#modal-product .select-items .list"), desktopWidth ? (e.height = e.el.find(".item").length * e.el.find(".item").height(), e.maxHeight = parseInt(e.el.css("max-height")), e.height > e.maxHeight && (e.height = e.maxHeight), e.el.css("margin-top", -e.height / 2)) : e.el.css("margin-top", 0)
    }, freeSelect: function (e) {
        if ($(this).hasClass("focus")) $(this).removeClass("focus"); else {
            var t = $("#modal-product"), n = $(this), i = n.find(".list");
            i.data({
                topSpace: n.position().top,
                bottomSpace: t.outerHeight() - n.height() - n.position().top
            }), desktopWidth ? (i.data({
                listMargin: i.outerHeight(!0) - i.height(),
                itemHeight: i.find(".label").outerHeight(!0),
                itemMargin: i.find(".label").outerHeight(!0) - i.find(".label").outerHeight()
            }), i.data("topSpace") > i.data("bottomSpace") ? (i.data("visible", (i.data("topSpace") - i.data("listMargin")) / i.data("itemHeight")), i.css({
                top: "auto",
                bottom: "100%"
            })) : (i.data("visible", (i.data("bottomSpace") - i.data("listMargin")) / i.data("itemHeight")), i.css({
                top: "100%",
                bottom: "auto"
            })), i.data("visible") < i.find(".label").length ? i.css("max-height", Math.floor(i.data("visible")) * i.data("itemHeight") - i.data("itemMargin")) : i.css("max-height", "none")) : (i.css("max-height", "none"), i.data("topSpace") > i.data("bottomSpace") ? (i.css({
                top: "auto",
                bottom: "100%"
            }), t.scrollTop() > n.position().top - i.outerHeight() && t.animate({scrollTop: n.position().top - i.outerHeight()}, 500)) : i.css({
                top: "100%",
                bottom: "auto"
            })), n.addClass("focus")
        }
    }, loadItem: function (e) {
        if (e.preventDefault(), $(this).hasClass("active")) $(".select-items.active").removeClass("active"); else {
            var t = $("#modal-product"), n = $(this).data("value"), i = $(this).attr("href"),
                r = $("html").data("channel"), o = $("html").data("district");
            t.fadeOut(300, function () {
                $.ajax({
                    type: "GET",
                    url: "/ajax/itemgroup/",
                    data: {channel_id: r, district_id: o, page_id: n},
                    dataType: "html"
                }).done(function (e) {
                    var n = $("<div/>").html(e).find("#modal-product");
                    t.replaceWith(n), $("#modal-product").fadeIn(500, function () {
                        itemzoom()
                    }), $("title").text(n.data("title")), window.history.pushState({path: i}, null, i)
                }).fail(function () {
                    log("Временно недоступно")
                })
            })
        }
    }, loadCall: function (e, t, n, i, r) {
        r !== window.location.pathname && window.history.pushState({path: r}, null, r), $.ajax({
            type: "GET",
            url: "/ajax/itemgroup/",
            data: {channel_id: e, district_id: t, page_id: n, item_id: i},
            dataType: "html"
        }).done(function (e) {
            e ? (showFade(), $(e).find(".product-fade").hide(), $("title").text($(e).find("#itemgroup_title").val()), $(e).appendTo("body"), $("#modal-product").find(".product-fade").fadeIn(500, function () {
                Product.setControls(), itemzoom()
            })) : (hideFade(), window.history.replaceState({}, null, $("html").data("location-url"))), $("html").removeData("openpage openitem openurl")
        }).fail(function () {
            log("Временно недоступно")
        })
    }, changePrice: function () {
        var e = $("#modal-product #price-product"), t = e.data("hide-zeroes"), n = e.data("dec-point"),
            i = e.data("thousands-sep"), r = parseFloat(e.data("price")), o = parseFloat(e.data("old-price"));
        $("#modal-product").find(".btn-checkbox.active").each(function (e) {
            r += parseFloat($(this).data("price")), isNaN(o) || (o += parseFloat($(this).attr("data-price")))
        });
        var a = 2;
        1 === parseInt(t) && r - parseInt(r) == 0 && (a = 0);
        var s = numberFormat(r, a, null, n, i) + " " + e.data("currency");
        if (!isNaN(o))var c = numberFormat(o, a, null, n, i) + " " + e.data("currency");
        e.find(".new-price").length ? (e.find(".new-price").text(s), isNaN(o) || e.find(".old-price").text(c)) : e.text(s)
    }, basketItem: function (e) {
        var t = $('[data-item="' + e + '"]');
        return !!District.initDistrict(null, e, null) && ($.ajax({
                timeout: 5e3,
                type: "POST",
                url: "/api/basket/addall/",
                data: {base_item_id: e, format: !0, _csrf: $('meta[name="csrf-token"]').attr("content")},
                dataType: "json"
            }).done(function (n) {
                if (checkError(n)) {
                    if (goalListener.reach({caption: "BUY"}), t.length) {
                        var i = t.find(".btn");
                        i.data("timer") && clearTimeout(i.data("timer")), i.text(_.where(n.entries, {item_id: e}).length + " шт"), i.data("timer", setTimeout(function () {
                            i.text("Еще")
                        }, 1e3))
                    }
                    Order.block(n)
                } else Product.showErrors(n.errors)
            }).fail(function (e, t) {
                log("Временно недоступно"), Product.change()
            }), !1)
    }, basket: function (e) {
        var t = $("#modal-product"), n = t.data("page"), i = t.data("item"), r = window.location.pathname;
        if (!District.initDistrict(n, i, r))return !1;
        var o = [];
        t.find(".free-select").each(function () {
            var e = parseInt($(this).attr("value"));
            e && o.push(e)
        }), t.find(".btn-checkbox.active").each(function (e) {
            var t = parseInt($(this).attr("data-id"));
            t && o.push(t)
        });
        $.ajax({
            type: "POST",
            url: "/api/basket/addall/",
            data: {
                base_item_id: i,
                item_ids: o.join(),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            },
            dataType: "json"
        }).done(function (t) {
            if (checkError(t)) {
                goalListener.reach({caption: "BUY"});
                var n = $(".purchase .tooltip"), r = $(".purchase .continue");
                n.data("timer") && clearTimeout(n.data("timer")), $(e.target).text("Еще"), n.find(".value").text(_.where(t.entries, {item_id: i}).length), n.fadeIn(300, function () {
                    r.show(), n.data("timer", setTimeout(function () {
                        n.fadeOut(300)
                    }, 1e3))
                }), Order.block(t)
            } else Product.showErrors(t.errors)
        }).fail(function (e, t) {
            log("Временно недоступно"), Product.change()
        })
    }, change: function () {
        $(".purchase__tooltip").fadeOut(300), $(".actions .btn.buy").text("Купить")
    }, showErrors: function (e) {
        $.each(e, function (e, t) {
            if ("user" === t.level) {
                var n = t.crucial ? "error" : "info";
                log(t.text, n, 2e3)
            }
        })
    }
};
!function (e) {
    e(function () {
        e("#modal-product").length && (showFade(), Product.setControls(), itemzoom())
    }), e(document).on("click", function (t) {
        e(t.target).closest(".select-items .list, .btn.info").length || e(".select-items.active").removeClass("active"), e(t.target).closest(".free-select").length || e(".free-select.focus").removeClass("focus")
    }), e(document).on("click", "#modal-product .info", Product.select), e(document).on("click", "#modal-product .select-items .item", Product.loadItem), e(document).on("click", "#modal-product .free-select", Product.freeSelect), e(document).on("click", "#modal-product .btn.buy", Product.basket), e(document).on("click", "#modal-product .free-select .list .label", function (t) {
        t.stopPropagation();
        var n = e(this).closest(".free-select");
        0 != e(this).attr("value") ? n.addClass("selected") : n.removeClass("selected"), n.attr("value", e(this).attr("value")), n.find(".free-icon").css("background-image", e(this).find(".i").css("background-image")), n.find(".free-name span").text(e(this).find(".title").text()), Product.change(), n.removeClass("focus")
    }), e(document).on("click", "#modal-product .btn-checkbox", function () {
        var t = e(this), n = t.closest(".btns");
        if (t.hasClass("active")) t.removeClass("active"), t.find('input[type="hidden"]').val("1"), t.data("opt") && t.find(".i").css("backgroundImage", "url(" + t.data("opt") + ")"); else {
            var i = t.closest("div.item").data("category-max-count"),
                r = n.find("div[data-category=" + t.closest("div.item").data("category") + "]>button.active").length;
            if (r < i) t.addClass("active"), t.find('input[type="hidden"]').val(""), t.data("opthover") && t.find(".i").css("backgroundImage", "url(" + t.data("opthover") + ")"); else {
                if (1 != i || 1 != r)return log("Нельзя выбрать больше " + parrent.data("category-max-count") + " топпингов."), !1;
                n.find("div[data-category=" + t.closest("div.item").data("category") + "]>button.active").each(function () {
                    var t = e(this);
                    t.removeClass("active"), t.find('input[type="hidden"]').val("1"), t.data("opt") && t.find(".i").css("backgroundImage", "url(" + t.data("opt") + ")")
                }), t.addClass("active"), t.find('input[type="hidden"]').val(""), t.data("opthover") && t.find(".i").css("backgroundImage", "url(" + t.data("opthover") + ")")
            }
        }
        Product.change(), Product.changePrice()
    }), e(document).on("click", ".modal-controls, #modal-product .btn-close, #modal-product .btn.continue", function (e) {
        Product.closeProduct(e)
    }), e(document).on("click", ".modal-controls a", function (t) {
        t.preventDefault(), t.stopPropagation(), Product.moveModal(e(this).attr("href"))
    }), e(document).keyup(function (t) {
        if (37 === t.which) {
            var n = e(".modal-controls .prev:not(.hide)").attr("href");
            void 0 !== n && Product.moveModal(n)
        }
        if (39 === t.which) {
            var n = e(".modal-controls .next:not(.hide)").attr("href");
            void 0 !== n && Product.moveModal(n)
        }
    }), window.onresize = function (t) {
        e("#modal-product .select-items").hasClass("active") && Product.listPos()
    }, window.onpopstate = function (t) {
        var n = e('.itemgroup .click[href="' + window.location.pathname + '"]');
        n.length ? e("#modal-product").length ? Product.moveModal(window.location.pathname) : Product.load(n) : e("#modal-product").length && Product.closeProduct(t)
    }
}(jQuery);
var Category = {
    filter: function (e) {
        e.stopPropagation();
        var t = $(this), n = t.closest(".filter-select");
        if (t.attr("value") != n.attr("value")) {
            var i = n.closest(".category"), r = {
                channel_id: $("html").data("channel"),
                district_id: $("html").data("district"),
                location_url: $("html").data("location-url"),
                category_id: i.data("category"),
                limit: "all"
            };
            i.find(".container.items").addClass("loading"), "all" != t.attr("value") && (r[n.attr("name")] = t.attr("value")), $.ajax({
                type: "GET",
                url: "/ajax/items/",
                data: r,
                dataType: "html"
            }).done(function (e) {
                n.attr("value", t.attr("value")), n.find(".name").text(t.text()), i.find(".container.items").removeClass("loading"), "all" == t.attr("value") ? n.removeClass("selected") : n.addClass("selected"), i.find(".container.items").html(e), Category.preloader(), n.removeClass("focus"), $("html, body").animate({scrollTop: Math.ceil(i.offset().top) - $(".desktop .top-menu").outerHeight(!0)}, 800)
            })
        } else n.removeClass("focus")
    }, setSelects: function () {
        var e = queryString.parse(location.search);
        for (var t in e)$('select[name="' + t + '"]').find('option[value="' + e[t] + '"]').attr("selected", !0).siblings().attr("selected", !1)
    }, scroll: function (e) {
        $.exists("#" + e.data("anchor")) ? $("html, body").stop(!0).animate({scrollTop: Math.ceil($("#" + e.data("anchor")).offset().top) - $(".desktop .top-menu").outerHeight(!0)}, 800) : location = e.attr("href")
    }, preloader: function () {
        $(".thumbs-list .img .image").load(function () {
            var e = $(this).parent(".img");
            e.removeClass("load"), e.find(".preloader").remove(), $(this).fadeIn(), e.find(".sticker-left, .sticker-right").fadeIn()
        }).each(function () {
            this.complete && $(this).load()
        }).error(function () {
        })
    }
};
!function (e) {
    e(document).on("click", function (t) {
        e(".filter-select.focus").not(e(t.target).closest(".filter-select")).removeClass("focus")
    }), e(document).on("click", ".filter-select", function () {
        e(this).toggleClass("focus")
    }), e(document).on("click", ".filter-select .list .item", Category.filter), e(document).ready(function () {
        Category.preloader()
    })
}(jQuery), Constructor = {
    renderTimeout: null, init: function () {
        $.ajax({
            type: "GET",
            url: "/api/constructor/",
            dataType: "json",
            data: {
                channel_id: $("html").data("channel"),
                district_id: $("html").data("district"),
                caption: constructortype
            },
            success: function (e) {
                checkError(e) && (Constructor = _.extend(Constructor, e), Constructor.data = _.sortBy(Constructor.data, "position"), Constructor.menuRender(), Constructor.render(), Constructor.reset(), $(".block-title .i").css("background-image", "url(" + Constructor.settings.constructor_settings.constructor + ")"), $("body").hasClass("constuctor_loaded") || Constructor.addEvents(), $("body").addClass("constuctor_loaded"), $(".pageloading").fadeOut(500))
            },
            error: function () {
                log("Временно не доступно")
            }
        })
    }, menuRender: function () {
        var e = $("<ul/>");
        Constructor.data.length <= 1 ? $(".contstuctor-wrap").addClass("noMenu") : (_.each(Constructor.data, function (t) {
            var n = $(_.template($("#menuTpl").html())(_.extend(_.pick(t, "category_id", "title"), {
                inactive: t.constructor_category_settings.cat_inactive,
                active: t.constructor_category_settings.cat_active
            })));
            e.append($("<li/>").append(n))
        }), $(".ingredients_cat .sld").html(e))
    }, render: function () {
        var e = $("<div/>");
        _.each(Constructor.data, function (t) {
            var n = $("<ul/>");
            t.items.length ? (t.items = _.sortBy(t.items, "position"), _.each(t.items, function (e) {
                var t = $(_.template($("#itemTpl").html())(_.pick(e, "item_id", "title", "weight", "price"))),
                    i = document.createElement("canvas"), r = i.getContext("2d"), o = new Image;
                o.onload = function () {
                    i.width = o.width, i.height = o.height, r.drawImage(o, 0, 0), t.find(".sampleWrap .sample").append(i)
                }, t.data(_.extend(_.pick(e, "item_id", "category_id", "weight", "price", "position"), {
                    placement: e.constructor_ingredient_settings.constructor_place,
                    count: 0,
                    max: e.constructor_ingredient_settings.constructor_count
                })), e.image_constructor && (e.image_constructor.tiny && (o.src = e.image_constructor.tiny), _.each(e.image_constructor, function (e, n) {
                    t.data(n, e)
                })), e.constructor_ingredient_settings.constructor_is_default && t.addClass("item_default"), e.constructor_ingredient_settings.constructor_is_required && t.addClass("item_required"), n.append($("<li/>").append(t))
            })) : n.append($("<h2/>", {text: "Ингредиенты временно недоступны для заказа"}));
            var i = $(_.template($("#sectionTpl").html())(_.pick(t, "category_id", "title")));
            i.data(_.extend(_.pick(t, "category_id", "title"), {
                count: 0,
                min: t.constructor_category_settings.constructor_cat_min,
                max: t.constructor_category_settings.constructor_cat_max
            })), i.append(n), e.append(i)
        }), $(".constructor .ingredients").html(e);
        var t = _.find(Constructor.options, function (e) {
            return "free_sauce" == e.options_category_settings.options_category_logic
        }), n = $("#constructor_result .free-select");
        _.isEmpty(t) ? n.remove() : (n.find(".list .label").not('[data-id=""]').remove(), _.each(t.items, function (e) {
            var t = $(_.template($("#optionTpl").html())(_.pick(e, "item_id", "title", "image_option")));
            t.data(e), n.find(".list").append(t)
        }), n.find("select").trigger("change"));
        var i = _.filter(Constructor.options, function (e) {
            return "toppings" == e.options_category_settings.options_category_logic
        }), n = $(".constructor .toppings");
        n.empty(), _.isEmpty(i) ? n.remove() : i.forEach(function (e) {
            n.append('<h2 class="title">' + e.title + "</h2>");
            var t = $('<div class="list" data-max="' + e.options_category_settings.options_max_available + '" data-category="' + e.category_id + '"></div>');
            _.each(e.items, function (e) {
                var n = $(_.template($("#toppingTpl").html())(e));
                n.data(e), t.append(n)
            }), n.append(t)
        }), $(window).resize()
    }, addToCart: function (e) {
        var t = e.closest(".section");
        if (!(e.data("count") >= e.data("max"))) {
            if (t.data("count") >= t.data("max"))return log("В этой категории не может быть больше " + t.data("max") + " ингредиентов.", "error", 1e3);
            if (e.data("weight") > Constructor.settings.constructor_settings.max_constructor_weight - Constructor.cart.total.weight)return log("Вес не должен превышать " + Constructor.settings.constructor_settings.max_constructor_weight + " гр.", "error", 1e3);
            e.addClass("active_item"), t.data("count", t.data("count") + 1), e.data("count", e.data("count") + 1);
            var n = _.pick(e.data(), "item_id", "category_id", "price", "weight", "count", "position", "placement");
            if (_.extend(n, {
                    double: _.where(Constructor.cart.items, {double: 0}).length,
                    layout: e.data("bigx" + n.count)
                }), Constructor.cart.items.push(n), 1 == t.data("max")) {
                if (e.hasClass("active_item"))return !1;
                t.find(".active_item").each(function () {
                    var e = $(this);
                    _.each(Constructor.cart.items, function (n, i) {
                        null != n && n.item_id == e.data("item_id") && n.count == e.data("count") && (Constructor.cart.items.splice(i, 1), t.data("count", t.data("count") - 1), e.data("count", e.data("count") - 1))
                    })
                })
            }
        }
    }, removeFromCart: function (e) {
        if (e.hasClass("required_item"))return !1;
        var t = e.closest(".section");
        _.each(Constructor.cart.items, function (n, i) {
            null != n && n.item_id == e.data("item_id") && n.count == e.data("count") && (Constructor.cart.items.splice(i, 1), t.data("count", t.data("count") - 1), e.data("count", e.data("count") - 1))
        })
    }, setFreeSauce: function (e) {
        var t = e.closest(".free-select");
        0 != e.data("id") ? t.addClass("selected") : t.removeClass("selected"), t.find(".free-icon").css("background-image", e.find(".i").css("background-image")), t.find(".free-name span").text(e.find(".title").text()), t.removeClass("focus"), Constructor.cart.freeSauce = e.data("id")
    }, addTopping: function (e) {
        var t = e.closest(".list"), n = t.data("category"), i = t.data("max"),
            r = Constructor.cart.toppings.filter(function (e) {
                return e.category_id == n
            }).length;
        if (r >= i)if (1 == i && 1 == r) {
            var o = _.pick(e.data(), "item_id", "price", "weight"),
                a = Constructor.settings.constructor_settings.max_constructor_weight - Constructor.cart.total.weight;
            if (Constructor.cart.toppings.forEach(function (e) {
                    e.category_id == n && (a += e.weight)
                }), o.weight > a)return log("Вес не должен превышать " + Constructor.settings.constructor_settings.max_constructor_weight + " гр.", "error", 1e3);
            Constructor.cart.toppings = Constructor.cart.toppings.filter(function (e) {
                return e.category_id != n
            }), t.find("button").each(function () {
                var e = $(this);
                e.removeClass("active").find(".i").css("backgroundImage", "url(" + e.data("image_option").opt + ")")
            }), o.category_id = n, Constructor.cart.toppings.push(o), e.addClass("active").find(".i").css("backgroundImage", "url(" + e.data("image_option").opthover + ")")
        } else log("Нельзя выбрать больше " + t.data("max") + " топпингов.", "error", 1e3); else {
            var o = _.pick(e.data(), "item_id", "price", "weight");
            if (o.weight > Constructor.settings.constructor_settings.max_constructor_weight - Constructor.cart.total.weight)return log("Вес не должен превышать " + Constructor.settings.constructor_settings.max_constructor_weight + " гр.", "error", 1e3);
            o.category_id = n, Constructor.cart.toppings.push(o), e.addClass("active").find(".i").css("backgroundImage", "url(" + e.data("image_option").opthover + ")")
        }
    }, removeTopping: function (e) {
        _.each(Constructor.cart.toppings, function (t, n) {
            null != t && t.item_id == e.data("item_id") && (Constructor.cart.toppings.splice(n, 1), e.removeClass("active").find(".i").css("backgroundImage", "url(" + e.data("image_option").opt + ")"))
        })
    }, renderQueue: function () {
        Constructor.renderTimeout && clearTimeout(Constructor.renderTimeout), _.every(Constructor.images) ? Constructor.renderResultImage() : Constructor.renderTimeout = setTimeout(Constructor.renderQueue, 300)
    }, renderResultImage: function () {
        var e = new Array, t = [], n = [], i = [], r = [];
        Constructor.settings.constructor_settings.constructor_base_pic && e.push({
            src: Constructor.settings.constructor_settings.constructor_base_pic,
            placement: "base"
        }), _.each(Constructor.cart.items, function (t) {
            t.layout && e.push(_.extend(_.pick(t, "placement", "double"), {src: t.layout}))
        });
        var o = 0;
        _.each(e, function (a) {
            var s = new Image;
            switch (s.onload = function () {
                if (++o === e.length) {
                    var a = Constructor.settings.constructor_settings.constructor_field_width,
                        s = Constructor.settings.constructor_settings.constructor_field_height,
                        c = Constructor.settings.constructor_settings.constructor_inner_position_top,
                        l = Constructor.settings.constructor_settings.constructor_inner_position_left,
                        d = Constructor.settings.constructor_settings.constructor_inner_size,
                        u = u = document.getElementById("result");
                    context = u.getContext("2d");
                    var p = $(u).clone();
                    p[0].getContext("2d").drawImage(u, 0, 0), p.insertAfter($(u)).css("z-index", 10), u.width = a, u.height = s, context.clearRect(0, 0, u.width, u.height), _.each(t, function (e) {
                        context.drawImage(e, 0, 0, a, s)
                    });
                    var f = 2 / n.length, h = 0;
                    _.each(n, function (e) {
                        context.save(), context.beginPath(), context.moveTo(l, c), "halves" == Constructor.settings.caption ? context.arc(l, c, a / 2, (.5 + e.double) * Math.PI, (1.5 + e.double) * Math.PI, !1) : context.arc(l, c, a / 2, (h + f) * Math.PI, h * Math.PI, !0), context.moveTo(l, c), context.closePath(), context.clip(), context.drawImage(e, l - d / 2, c - d / 2, d, d), context.restore(), h += f
                    }), _.each(r, function (e) {
                        context.drawImage(e, 0, 0, a, s)
                    }), _.each(i, function (e) {
                        context.drawImage(e, 0, 0, a, s)
                    }), p.fadeOut(400, function () {
                        p.remove()
                    })
                }
            }, a.placement) {
                case"base":
                    t.push(s);
                    break;
                case"inner":
                    n.push(s);
                    break;
                case"outer":
                    i.push(s);
                    break;
                default:
                    r.push(s)
            }
            s.src = a.src, s.double = a.double
        })
    }, setIcons: function () {
        $(".more, .over-btn, .closer-btn").remove(), $(".ingredients .section").each(function () {
            var e = $(this);
            e.data("count") > 0 ? $(".ingredients_cat .cat-button[rel=" + e.attr("id") + "]").append($("<b/>", {
                class: "ing_count",
                text: e.data("count")
            })) : $(".ingredients_cat .cat-button[rel=" + e.attr("id") + "] .ing_count").remove(), e.find(".item").each(function () {
                var t = $(this);
                t.data("count") > 0 ? (t.addClass("active_item"), !t.hasClass("item_required") || t.data("count") > 1 ? t.append($("<a/>", {class: "closer-btn"})) : t.find(".closer-btn").remove(), e.data("max") > 1 && t.append($("<a/>", {
                    class: "more",
                    text: "x" + t.data("count")
                })), t.data("count") < t.data("max") && e.data("count") < e.data("max") ? t.append($("<a/>", {
                    class: "over-btn",
                    text: "+ещё"
                })) : t.find(".over-btn").remove()) : t.removeClass("active_item").find(".closer-btn, .more, .over-btn").remove()
            })
        })
    }, calc: function () {
        var e = 0, t = 0, n = new Array;
        $("#save").text("Купить"), _.each(Constructor.cart.items, function (i) {
            e += i.price, t += i.weight, n.push(i.item_id)
        }), Constructor.cart.freeSauce && n.push(parseInt(Constructor.cart.freeSauce)), _.each(Constructor.cart.toppings, function (i) {
            e += i.price, t += i.weight, n.push(i.item_id)
        }), Constructor.cart.total = {
            sum: e,
            weight: t
        }, $(".all_weight").text(t), $(".all_price").text(e), Constructor.cart.items = _.sortBy(Constructor.cart.items, "position"), history.replaceState({}, null, window.location.pathname + "#" + n.sort(function (e, t) {
                return e - t
            }).join(","))
    }, reset: function () {
        if (Constructor.resultImage = [], Constructor.cart = {
                items: [],
                freeSauce: null,
                toppings: [],
                total: {}
            }, $(".section").data("count", 0).find(".item").data("count", 0).removeClass("active_item"), $(".free-select").removeClass("selected").each(function () {
                $(this).find(".free-icon").removeAttr("style"), $(this).find(".free-name").each(function () {
                    $(this).find("span").text($(this).data("default"))
                })
            }), $(".toppings .btn.active").each(function () {
                $(this).removeClass("active").find(".i").css("background-image", 'url("' + $(this).data("image_option").opt + '")')
            }), location.hash) {
            var e = location.hash.substr(1).split(",");
            _.each(e, function (e) {
                if (e) {
                    var t = $(".ingredients .item[data-id=" + e + "]").first();
                    t.length && Constructor.addToCart(t);
                    var n = $(".free-select .label[data-id=" + e + "]").first();
                    n.length && Constructor.setFreeSauce(n);
                    var i = $(".toppings .btn[data-id=" + e + "]").first();
                    i.length && Constructor.addTopping(i)
                }
            })
        }
        $(".item.item_default").not(".active_item").each(function () {
            Constructor.addToCart($(this))
        }), Constructor.setIcons(), Constructor.calc(), Constructor.renderQueue()
    }, save: function () {
        if (!District.initDistrict())return !1;
        var e = [];
        for (var t in Constructor.data) {
            var n = Constructor.data[t];
            if (_.where(Constructor.cart.items, {category_id: n.category_id}).length < n.constructor_category_settings.constructor_cat_min)return Constructor.error("Необходимо выбрать " + (n.constructor_category_settings.constructor_cat_min > 1 ? n.constructor_category_settings.constructor_cat_min + " " : "") + n.title.toLowerCase() + ".")
        }
        return Constructor.cart.total.weight > Constructor.settings.constructor_settings.max_constructor_weight ? Constructor.error("Вес не должен превышать " + Constructor.settings.constructor_settings.max_constructor_weight + " гр.") : Constructor.cart.total.sum < Constructor.settings.constructor_settings.constructor_min_price ? Constructor.error("Сумма минимального заказа составляет " + Constructor.settings.constructor_settings.constructor_min_price + " руб.") : (_.each(Constructor.cart.items, function (t) {
            t && e.push(t.item_id)
        }), Constructor.cart.freeSauce && e.push(Constructor.cart.freeSauce), _.each(Constructor.cart.toppings, function (t) {
            null != t && t.item_id && e.push(t.item_id)
        }), void $.ajax({
            type: "POST",
            url: "/api/basket/addall/",
            dataType: "json",
            data: {
                base_item_id: Constructor.settings.constructor_settings.item_to_attach,
                item_ids: e.join(),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            },
            success: function (e) {
                checkError(e) ? (goalListener.reach({caption: "BUY"}), $("#save").text("Ещё"), log("Добавлено в корзину...", "info", 2e3), Order.block(e), showErrors(e.errors)) : showErrors(e.errors)
            },
            error: function () {
                log("Временно не доступно")
            }
        }))
    }, error: function (e) {
        return log(e, "error", 2e3), !1
    }, addEvents: function () {
        function e() {
            $(window).off("scroll", t), desktopWidth ? ($(window).on("scroll", t), t()) : $("#ingredients_cat, #constructor_result").removeClass("fixed")
        }

        function t() {
            var e = $(".top-menu"), t = $(".contstuctor-wrap"), i = $(".ingredients_cat-wrap"),
                r = ($(".ingredients .section:first"), $(".constructor_result-wrap")), o = $("#constructor_result");
            if ($(window).scrollTop() >= t.offset().top - e.outerHeight() ? $("#ingredients_cat").addClass("fixed") : $("#ingredients_cat").removeClass("fixed"),
                    $(window).scrollTop() <= e.outerHeight() + i.outerHeight() ? ($("#ingredients_cat .active_item").removeClass("active_item"), $("#ingredients_cat").find(".cat-button:first").parent().addClass("active_item")) : $(".contstuctor-wrap .ingredients-wrap .section").each(function () {
                        $(window).scrollTop() >= Math.floor($(this).offset().top - e.outerHeight() - i.outerHeight()) && ($("#ingredients_cat").find(".sld .active_item").removeClass("active_item"), $(window).scrollTop() + $(window).height() > $(document).height() - $(".bottom").height() / 2 ? $("#ingredients_cat").find(".cat-button:last").parent().addClass("active_item") : $("#ingredients_cat").find('.cat-button[rel="' + $(this).attr("id") + '"]').parent().addClass("active_item"))
                    }), n(), r.outerHeight() > o.outerHeight() && $(window).scrollTop() > Math.floor(t.offset().top - e.outerHeight())) {
                var a = $(document).outerHeight() - $(window).scrollTop() - o.outerHeight() - e.outerHeight() - i.outerHeight() - $(".bottom").outerHeight();
                a > 0 && (a = 0), o.addClass("fixed").css("top", e.outerHeight() + i.outerHeight() + a)
            } else o.removeClass("fixed").css("top", 0)
        }

        function n() {
            var e = $(".ingredients_cat .active_item");
            if (0 === e.length)return !1;
            $(".contstuctor-wrap .slide-button").css({
                left: e.offset().left - $(".ingredients_cat").offset().left,
                display: "block"
            })
        }

        $(document).on("click", "#start_over", function (e) {
            e.preventDefault(), history.replaceState({}, null, location.pathname), Constructor.reset()
        }), $(document).on("click", "#save", function (e) {
            e.preventDefault(), Constructor.save()
        }), $(document).on("click", ".constructor .ingredients .item", function () {
            Constructor.addToCart($(this)), Constructor.setIcons(), Constructor.calc(), Constructor.renderQueue()
        }), $(document).on("click", ".constructor .ingredients .item .closer-btn", function (e) {
            e.stopPropagation(), Constructor.removeFromCart($(this).parent(".item")), Constructor.setIcons(), Constructor.calc(), Constructor.renderResultImage()
        }), $(document).on("click", ".constructor .toppings .btn", function () {
            $(this).hasClass("active") ? Constructor.removeTopping($(this)) : Constructor.addTopping($(this)), Constructor.calc()
        }), e(), $(window).on("resize", function () {
            desktopWidth = $(window).width() >= 1024, e()
        }), $(document).on("click", ".ingredients_cat li", function () {
            var e = "#" + $(this).children().attr("rel");
            $("html, body").animate({scrollTop: Math.ceil($(e).offset().top - $(".ingredients_cat-wrap").height() - $(".top-menu").height())}, 200), n()
        })
    }
}, $(document).ready(function () {
    $.exists(".constructor") && (District.initDistrict(), Constructor.init(), window.onpopstate = function () {
        Constructor.reset()
    }, $(document).on("click", "#constructor_result .free-select", function () {
        var e = $(this);
        e.hasClass("focus") ? e.removeClass("focus") : (e.addClass("focus"), $(document).scrollTop() > e.find(".list").offset().top - 10 && $("html, body").animate({scrollTop: e.find(".list").offset().top - 10}, 200))
    }), $(document).on("click", "#constructor_result .free-select .list .label", function (e) {
        e.stopPropagation(), Constructor.setFreeSauce($(this)), Constructor.calc()
    }))
});
var Cities = {
    initModal: function (e) {
        if (!$(e.target).hasClass("disabled")) {
            Cities.closeModal(), Menu.close(), e.preventDefault();
            $.ajax({type: "GET", url: "/ajax/locations/", dataType: "html"}).done(function (e) {
                $("#modal-cities .cities").html(e)
            }), showFade(), $("#modal-cities").fadeIn(250, function () {
                $(this).addClass("active")
            })
        }
    }, closeModal: function () {
        $("#modal-cities").fadeOut(100, function () {
            $(this).removeClass("active"), hideFade()
        })
    }
};
!function (e) {
    e(document).on("click", ".btn-cities", Cities.initModal)
}(jQuery);
var District = {
    editDistrict: function (e) {
        e.preventDefault(), District.closeModal(), Menu.close(), District.formDistrict()
    }, initDistrict: function (e, t, n) {
        return _.every(e, t, n) && $("html").data({
            openpage: e,
            openitem: t,
            openurl: n
        }), !empty($("html").data("district")) || (Menu.close(), District.formDistrict())
    }, load: function (e, t, n) {
        $.ajax({
            type: "GET",
            url: "/api/application/" + e + "/",
            timeout: 5e3,
            data: $.extend(t, {channel_id: $("html").data("channel")}),
            dataType: "json"
        }).done(function (e) {
            n(e)
        })
    }, formDistrict: function () {
        return $.exists("#modal-product") && Product.closeProduct(), showFade(), $("#modal-district").fadeIn(250, function () {
            $(this).addClass("active")
        }), $.ajax({
            type: "GET",
            url: "/ajax/district/",
            data: {location_id: $("html").data("location"), channel_id: $("html").data("channel")},
            dataType: "html"
        }).done(function (e) {
            $("#modal-district").html(e), $.isEmptyObject(Order.response) || District.showErrors(Order.response.errors, $("#modal-district"));
            var t = $("#modal-district .switch.tab .btn.active"), n = t.data("target"), i = t.data("parent");
            $("#" + i + " .tab-content.active").removeClass("active"), $("#" + n).addClass("active"), $("#modal-district .autocomplete").typeahead("destroy").typeahead({
                hint: !1,
                highlight: !1,
                minLength: 3
            }, {
                limit: 20, source: function (e, t, n) {
                    function i(e, t) {
                        var n = new Array;
                        return $.each(t, function (t, i) {
                            -1 != i.toLowerCase().indexOf(e.toLowerCase()) && n.push(i)
                        }), n
                    }

                    var r = $(this);
                    if (matches = i(e, r.data("cache")), matches.length > 0)return t(matches);
                    $.get("/api/address/?q=" + e, function (t) {
                        r.data("cache", t), n(i(e, t))
                    })
                }
            });
            var r = $('#modal-district [data-target="selfdelivery-tab"] input').val();
            District.load("districts", {delivery_id: r}, function (e) {
                var t = $('#selfdelivery-tab select[name="district_id"]');
                t.empty();
                for (var n in e)t.append('<option value="' + e[n].district_id + '">' + e[n].district_address + "</option>");
                !empty($("html").data("district")) && t.find('[value="' + $("html").data("district") + '"]').length && t.val($("html").data("district"))
            }), $.ajax({
                type: "GET",
                url: "/api/client/addresses/",
                timeout: 5e3,
                data: {location_id: $("html").data("location")},
                dataType: "json",
                success: function (e) {
                    if (1 == e.success && !_.isEmpty(e.addresses)) {
                        $("#address-tab .wrap .arrow").removeClass("hide");
                        var t = $("#address-tab .wrap #client_addresses").empty();
                        _.each(e.addresses, function (e) {
                            var n = [];
                            e.place_name && n.push(e.place_name), e.street_name && n.push(e.street_name), n.push(e.house_name);
                            var i = $("<div/>", {class: "item", text: n.join(", ")});
                            Order.response.length && Order.response.basket.address_house == n.join(", ") && i.addClass("selected"), i.data({
                                address_house: n.join(", "),
                                address_apart: e.address_apart,
                                address_floor: e.address_floor,
                                address_entr: e.address_entr
                            }), t.append(i)
                        })
                    }
                }
            })
        }), !1
    }, updateDistrict: function (e) {
        var t = $(e.target).parents(".tab-content");
        if ("selfdelivery" === t.data("logic"))var n = $('#district-tabs select[name="district_id"]').val(); else {
            var i = $('#district-tabs input[name="address_house"]').val();
            if (empty(i))return $('#modal-district [name="address_house"]').each(function () {
                $(this).addClass("error"), $("#modal-district ." + $(this).attr("name") + "-error").text("Не заполнен адрес доставки.").removeClass("hide")
            }), !1
        }
        $.ajax({
            type: "POST",
            url: "/api/basket/" + (empty($("html").data("basket")) ? "create" : "change") + "/",
            data: {
                channel_id: $("html").data("channel"),
                delivery_id: $("#modal-district .switch .active input").val(),
                delivery_district: n,
                address_house: i,
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            },
            dataType: "json"
        }).done(function (n) {
            if (District.removeAllErrors(t), n) {
                e.target.value = n.basket.address_house, $("html").data("basket", n.basket.basket_id), $("html").data("delivery", n.basket.delivery_id), $("html").data("district", n.order.district_id), BasketId.set(n.basket.basket_id.toString()), Order.block(n);
                var i = "address-tab" === t.attr("id");
                if (i) {
                    var r = t.find("button");
                    if (r.hasClass("white"))return District.closeModal(), void District.update()
                }
                if (emptyErrors(n.errors) && "click" == e.type) District.closeModal(), District.update(); else if (District.showErrors(n.errors, t), i && n.errors.filter(function (e) {
                        return "address_is_banned_online_payment_only" === e.caption
                    }).length > 0) {
                    var o = r.data("text");
                    r.data("text", r.text()).text(o), r.removeClass("green").addClass("white")
                }
            }
        }).fail(function () {
            log("Временно недоступно")
        })
    }, setAddress: function (e) {
        $.ajax({
            timeout: 3e3,
            type: "POST",
            url: "/api/basket/" + (empty($("html").data("basket")) ? "create" : "change") + "/",
            data: _.extend({
                channel_id: $("html").data("channel"),
                format: !0,
                _csrf: $('meta[name="csrf-token"]').attr("content")
            }, e),
            dataType: "json"
        }).done(function (e) {
            $("html").data("basket", e.basket.basket_id), $("html").data("delivery", e.basket.delivery_id), $("html").data("district", e.order.district_id), BasketId.set(e.basket.basket_id.toString()), Order.block(e), emptyErrors(e.errors) ? (District.closeModal(), District.update()) : District.showErrors(e.errors, $("#modal-district"))
        })
    }, update: function () {
        $.exists("#category") && "index" === $("#category").attr("data-action") ? District.updateIndex() : $.exists("#category") ? District.updateCategory() : $.exists(".constructor") ? Constructor.init() : $.exists("#delivery-map") && ($("#delivery-map").data({
                point: response.order.point.join(";"),
                address: response.basket.address_house
            }), DeliveryZone.setPoint()), $("html").data("openpage") ? Product.loadCall($("html").data("channel"), $("html").data("district"), $("html").data("openpage"), $("html").data("openitem"), $("html").data("openurl")) : ($("html").data("openitem") && Product.basketItem($("html").data("openitem")), $("html").removeData("openpage openitem openurl"))
    }, updateIndex: function () {
        var e = $("#category"), t = e.find(".content"), n = t.find(".container"), i = $("html").data("channel"),
            r = $("html").data("district"), o = e.attr("data-categories_to_show"),
            a = e.data("items_in_category_per_index");
        t.loading(), n.addClass("loading"), $.ajax({
            type: "GET",
            url: "/ajax/index/",
            data: {channel_id: i, district_id: r, categories_to_show: o, items_in_category_per_index: a, limit: "all"},
            dataType: "html"
        }).done(function (i) {
            t.loading({show: !1}), n.removeClass("loading"), n.find(".clear").remove(), e.replaceWith(i), Category.preloader()
        })
    }, updateCategory: function () {
        var e = $("#category"), t = e.find(".content"), n = t.find(".container"), i = e.data("category"),
            r = $("html").data("channel"), o = $("html").data("district"), a = $("html").data("location-url");
        t.loading(), n.addClass("loading"), $.ajax({
            type: "GET",
            url: "/ajax/items/",
            data: {location_url: a, category_id: i, channel_id: r, district_id: o, limit: "all"},
            dataType: "html"
        }).done(function (i) {
            t.loading({show: !1}), n.removeClass("loading"), n.find(".clear").remove(), n.find(".thumbs-list").replaceWith(i), Category.preloader(), $("html, body").animate({scrollTop: Math.ceil(e.offset().top) - $(".desktop .top-menu").outerHeight(!0)}, 800)
        })
    }, closeModal: function () {
        $("#modal-district").fadeOut(100, function () {
            $(this).removeClass("active"), hideFade()
        })
    }, removeInputError: function () {
        var e = void 0 !== $(this).attr("name") ? $(this).attr("name") : $(this).attr("id");
        $(this).removeClass("error"), $("." + e + "-error").addClass("hide")
    }, removeAllErrors: function (e) {
        $(e).find(".form-control").each(function () {
            $(this).removeClass("error"), $(e).find("." + $(this).attr("name") + "-error").addClass("hide")
        })
    }, showErrors: function (e, t) {
        $.each(e, function (e, n) {
            $(t).find('[name="' + n.field + '"]').each(function () {
                "notice" != n.level && $(this).addClass("error"), $(t).find("." + $(this).attr("name") + "-error").html(n.text).removeClass("hide")
            })
        })
    }
};
!function (e) {
    e(document).on("click", "#district-edit", District.editDistrict), e(document).on("click", '#modal-district [type="submit"]', District.updateDistrict), e(document).on("change", '#modal-district [name ="address_house"]', function () {
        e(this).removeClass("error"), e(this).closest(".form-row").find("." + e(this).attr("name") + "-error").addClass("hide"), e(this).typeahead("close");
        var t = e(this).closest(".std-form").find(".tab-content#address-tab button");
        if (t.hasClass("white")) {
            t.removeClass("white").addClass("green");
            var n = t.data("text");
            t.data("text", t.text()).text(n)
        }
    }), e(document).on("typeahead:select typeahead:autocomplete", '#modal-district [name="address_house"]', function () {
        "," != e.trim(e(this).val()).substr(-1) && e(this).trigger("change")
    }), e(document).on("click", "#address-tab .wrap .arrow", function () {
        e("#address-tab .wrap #client_addresses").toggleClass("hide")
    }), e(document).on("click", "#address-tab .wrap #client_addresses .item", function () {
        District.setAddress(e(this).data())
    }), e(document).on("click", "#modal-district #address-tab .geo-target", function () {
        Map.show()
    })
}(jQuery);
var Feedback = {
    el: $("#modal-feedback"), init: function () {
        this.el.length && (this.el.off(), this.el.on("mouseenter", ".rateBar .item", function () {
            $(this).addClass("hover"), $(this).prevAll(".item").addClass("hover"), $(this).nextAll(".item").removeClass("hover")
        }), this.el.on("click", ".rateBar .item", function () {
            $(this).addClass("selected"), $(this).prevAll(".item").addClass("selected"), $(this).nextAll(".item").removeClass("selected"), Feedback.el.find('[type="submit"]').prop("disabled", !1)
        }), this.el.on("mouseleave", ".rateBar", function () {
            $(this).find(".item").removeClass("hover")
        }), this.el.on("change", '.file input[type="file"]', function () {
            var e = $(this).siblings('label[for="' + $(this).attr("id") + '"]'), t = $(this).closest(".form-row.file");
            if (this.files.length) {
                if ("image/jpeg" != this.files[0].type) log("Не поддерживаемый тип изображения (необходим jpeg)"); else {
                    if (!(this.files[0].size > 18874368))return e.text(this.files[0].name), void t.addClass("selected");
                    log("Размер фотографии не должен превышать 18 МБ")
                }
                this.value = null
            }
            e.text(e.data("text")), t.removeClass("selected")
        }), this.el.on("click", ".file .clear", function () {
            $(this).parent(".form-row.file").removeClass("selected").find('input[type="file"]').val("").trigger("change")
        }), this.el.on("click", '[type="submit"]', Feedback.send))
    }, check: function () {
        Status.response && "delivered" == Status.response.status.type ? (Status.reloadTimer && clearTimeout(Status.reloadTimer), Status.reloadTimer = setTimeout(Feedback.show, 3e3)) : Feedback.close()
    }, show: function () {
        if (showFade(), !Feedback.el.hasClass("active")) {
            $('#modal-approve [name="not_arrived"]').prop("disabled", !0), Feedback.el.find('button[type="submit"]').prop("disabled", !Feedback.el.find(".rateBar .item.selected").length);
            var e = Feedback.el.find('input[type="file"]'), t = e.closest(".form-row.file"),
                n = e.siblings('label[for="' + e.attr("id") + '"]');
            e[0].files.length ? (t.addClass("selected"), n.text(e[0].files[0].name)) : (t.removeClass("selected"), n.text(n.data("text"))), Feedback.el.fadeIn(250, function () {
                $(this).addClass("active")
            })
        }
    }, close: function () {
        this.el.hasClass("active") && (this.el.fadeOut(250, function () {
            $(this).removeClass("active")
        }), Status.reloadTimer && clearTimeout(Status.reloadTimer), Status.reloadTimer = setTimeout(Feedback.show, 3e4), hideFade())
    }, send: function (e) {
        var t = Feedback.el.find(".rateBar .item.selected").length;
        if (!t)return log("Вы забыли дать оценку.", "info", 1500), !1;
        var n = new FormData;
        n.append("_csrf", $("meta[name=csrf-token]").prop("content")), n.append("rate", t), n.append("feedback", $('#modal-feedback [name="msg"]').val()), $('#modal-feedback [name="photo"]').val() && n.append("photo", $('#modal-feedback [name="photo"]')[0].files[0]);
        var i = $.ajax({
            type: "POST",
            processData: !1,
            contentType: !1,
            url: "/api/order/feedback/",
            data: n,
            dataType: "json"
        });
        i.done(function (e) {
            e.success && (Feedback.close(), setTimeout(function () {
                location = $("html").data("location-url")
            }, 1e3))
        }), i.fail(function () {
            log("Проверьте интернет-подключение")
        })
    }
}, Approve = {
    not_arrived_interval: 120, el: $("#modal-approve"), init: function () {
        this.el.length && (this.el.off(), this.el.on("focus keypress", '[name="code"]', function () {
            $(".code-error").addClass("hide").text("")
        }), this.el.on("keypress", '[name="code"]', function (e) {
            if (e.charCode && (e.charCode < 48 || e.charCode > 57))return !1
        }), this.el.on("keyup", '[name="code"]', function (e) {
            4 == $(this).val().length ? $('#modal-approve [name="approve"]').prop("disabled", !1) : $('#modal-approve [name="approve"]').prop("disabled", !0)
        }), this.el.on("keydown", '[name="code"]', function (e) {
            13 == e.keyCode && Approve.send()
        }), this.el.on("click", '[name="approve"]', Approve.send), this.el.on("click", '[name="cancel"]', Approve.cancel))
    }, check: function () {
        Status.response && Status.response.show_approval_code ? Approve.show() : Approve.close()
    }, show: function () {
        showFade(), Approve.timer(), this.el.hasClass("active") || (this.el.find('[name="code"]').val(""), this.el.find('[name="approve"]').prop("disabled", !0), this.el.fadeIn(250, function () {
            $(this).addClass("active")
        }))
    }, close: function () {
        this.el.hasClass("active") && (this.el.fadeOut(250, function () {
            $(this).removeClass("active")
        }), hideFade())
    }, timer: function () {
        var e = Approve.not_arrived_interval - Status.response.timer;
        e <= 0 ? ($(".cancelBar .before").hide(), $(".cancelBar .after").show(), e = 0) : ($(".cancelBar .before").show(), $(".cancelBar .after").hide(), Approve.timeOut && clearTimeout(Approve.timeOut), Approve.timeOut = setTimeout(Approve.timer, 1e3)), $("#cancel-timer").text(("00" + Math.floor(e / 60)).substr(-2) + ":" + ("00" + Math.ceil(e % 60)).substr(-2)), Status.response.timer++
    }, send: function () {
        var e = Approve.el.find('[name="approve"]');
        e.prop("disabled") || (e.prop("disabled", !0), $.ajax({
            type: "POST",
            url: "/api/order/approve/",
            data: {_csrf: $("meta[name=csrf-token]").prop("content"), code: Approve.el.find('[name="code"]').val()},
            dataType: "json",
            beforeSend: function () {
                Approve.el.find('[name="code"]').val("")
            }
        }).done(function (e) {
            e.success ? Approve.close() : (Approve.el.find(".code-error").text(e.message).removeClass("hide"), Approve.errorTimer && clearTimeout(Approve.errorTimer), Approve.errorTimer = setTimeout(function () {
                Approve.el.find('.form-control[name="code"]').focus()
            }, 3e3)), Status.load()
        }).fail(function () {
            log("Проверьте интернет-подключение")
        }))
    }, cancel: function () {
        $.ajax({
            type: "POST",
            url: "/api/order/cancel/",
            data: {_csrf: $("meta[name=csrf-token]").prop("content")},
            dataType: "json"
        }).done(function () {
            Approve.close(), Status.load()
        }).fail(function () {
            log("Временно недоступно")
        })
    }
}, Map = {
    $el: null,
    map: null,
    polygons: [],
    point: null,
    location: null,
    around: null,
    centerOfMap: 0,
    zoomOfMap: 17,
    timeout: null,
    init: function () {
        this.location_name = null, this.polygons = [], $.ajax({
            method: "GET",
            url: "/api/application/polygons/",
            timeout: 5e3,
            data: {location_id: $("html").data("location")},
            dataType: "json",
            success: function (e) {
                Map.location = e.location_name, e.polygons.forEach(function (e) {
                    var t = [];
                    e.polygon_map.forEach(function (e) {
                        t.push(new google.maps.LatLng(e[0], e[1]))
                    }), Map.polygons.push(new google.maps.Polygon({
                        paths: t,
                        name: e.polygon_name,
                        strokeColor: "#1d74cf",
                        strokeOpacity: .8,
                        fillColor: "#33cccc",
                        fillOpacity: .25
                    }))
                })
            }
        }), $("#cart-form #address-house .geo-target").on("click", Map.show), $(document).on("click", ".modal.map .btn-close", Map.close), $(document).on("click", ".modal.map .btn-ok", Map.sendPosition), $(document).on("click", ".modal.map #addressBar .list .item", Map.sendAddress)
    },
    show: function () {
        showFade("map"), $.ajax({method: "GET", url: "/ajax/modal-map/", dataType: "html"}).done(function (e) {
            Map.$el = $(e), Map.$el.appendTo("body"), Map.$el.fadeIn(250), setTimeout(function () {
                $(this).addClass("active"), Map.render()
            }, 250)
        })
    },
    render: function (e, t) {
        var n = null;
        Order.response.basket && Order.response.basket.client_point_lt && Order.response.basket.client_point_ln ? n = [Order.response.basket.client_point_lt, Order.response.basket.client_point_ln] : Order.response.order && Order.response.order.point_lt && Order.response.order.point_ln && (n = [Order.response.order.point_lt, Order.response.order.point_ln]), null === n && (n = $('meta[name="ICBM"]').attr("content").split(",")), Map.map = new google.maps.Map(document.getElementById("map"), {
            center: e || new google.maps.LatLng(n[0], n[1]),
            zoom: t || 17,
            gestureHandling: "greedy",
            mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeControl: !0,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                position: google.maps.ControlPosition.LEFT_TOP,
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            fullscreenControl: !1,
            streetViewControl: !1,
            zoomControl: !0,
            zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER}
        });
        var i = document.createElement("div"), r = document.createElement("button");
        r.style.backgroundColor = "#fff", r.style.border = "none", r.style.outline = "none", r.style.width = "28px", r.style.height = "28px", r.style.borderRadius = "2px", r.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)", r.style.cursor = "pointer", r.style.marginRight = "10px", r.style.padding = "0", r.title = "Мое местоположение", i.appendChild(r);
        var o = document.createElement("div");
        o.style.margin = "5px", o.style.width = "18px", o.style.height = "18px", o.style.backgroundImage = "url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)", o.style.backgroundSize = "180px 18px", o.style.backgroundPosition = "0 0", o.style.backgroundRepeat = "no-repeat", r.appendChild(o), google.maps.event.addListener(Map.map, "center_changed", function () {
            o.style["background-position"] = "0 0"
        }), r.addEventListener("click", function () {
            var e = "0", t = setInterval(function () {
                e = "-18" === e ? "0" : "-18", o.style["background-position"] = e + "px 0"
            }, 500);
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (e) {
                var n = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
                Map.map.setCenter(n), Map.map.panTo(n), Map.geocode(), clearInterval(t), o.style["background-position"] = "-144px 0"
            }) : (clearInterval(t), o.style["background-position"] = "0 0")
        }), Map.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(i), google.maps.event.addDomListener(window, "resize", function () {
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (Map.timeout && clearTimeout(Map.timeout), Map.timeout = setTimeout(function () {
                Map.render(Map.centerOfMap, Map.zoomOfMap)
            }, 350)) : (Map.map.setCenter(Map.centerOfMap), google.maps.event.trigger(Map.map, "resize"), google.maps.event.trigger(Map.map, "center_changed"))
        }), this.map.addListener("dragend", Map.geocode), this.map.addListener("idle", function () {
            Map.centerOfMap = Map.map.getCenter()
        }), this.map.addListener("zoom_changed", function () {
            Map.zoomOfMap = Map.map.getZoom()
        }), navigator.geolocation && navigator.geolocation.getCurrentPosition(function (e) {
            var t = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
            Map.map.panTo(t), Map.geocode()
        }), Map.polygons.length && Map.polygons.forEach(function (e) {
            e.setMap(Map.map)
        })
    },
    geocode: function () {
        var e = Map.map.getCenter();
        Map.centerOfMap = e, Map.around = null, $('meta[name="ICBM"]').attr("content", e.lat() + "," + e.lng()), $.ajax({
            method: "GET",
            url: "https://geocode-maps.yandex.ru/1.x/",
            data: {
                geocode: e.lng() + "," + e.lat(),
                results: Math.ceil(window.innerWidth / 200),
                kind: "house",
                format: "json"
            },
            dataType: "json",
            success: function (e) {
                var t = Map.$el.find("#addressBar");
                if (t.length) t.removeClass("show"); else {
                    var t = $(_.template($("#addressListTpl").html())());
                    Map.map.controls[google.maps.ControlPosition.LEFT_TOP].push(t[0])
                }
                if (e.response.GeoObjectCollection.featureMember.length) {
                    var n = t.find(".list");
                    n.empty();
                    for (var i in e.response.GeoObjectCollection.featureMember) {
                        var r = [],
                            o = e.response.GeoObjectCollection.featureMember[i].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components;
                        for (j in o)"locality" == o[j].kind && o[j].name != $(".btn-cities").text() && r.push(o[j].name), "district" == o[j].kind && 0 == _.size(_.where(o, {kind: "street"})) && r.push(o[j].name), "street" == o[j].kind && r.push(o[j].name), "house" == o[j].kind && r.push(o[j].name);
                        Map.around || (Map.around = r.join(", ")), n.append($('<div class="item">' + r.join(", ") + "</div>"))
                    }
                    t.addClass("show")
                } else Map.around = null
            }
        })
    },
    sendPosition: function () {
        var e = Map.map.getCenter(),
            t = {point: e.lat() + "," + e.lng(), address_house: Map.around ? "Рядом с " + Map.around : null};
        $("#cart-wrapper").length ? Order.change(t, function () {
            Order.render()
        }) : District.setAddress(t), Map.close()
    },
    sendAddress: function (e) {
        var t = {address_house: $(e.target).text(), point: null};
        $("#cart-wrapper").length ? Order.change(t, function () {
            Order.render()
        }) : District.setAddress(t), Map.close()
    },
    close: function () {
        Map.$el.find("#addressBar").removeClass("show"), Map.$el.fadeOut(250, function () {
            $(this).remove(), hideFade("map")
        }), Map.polygons.length && Map.polygons.forEach(function (e) {
            e.setMap(null)
        })
    }
}, SmartBanner = {
    $el: null, init: function (e) {
        this.getCookie("smartbanner") || $.ajax({
            type: "GET",
            url: "/ajax/smart-banner/",
            data: {os: e},
            dataType: "html",
            success: function (e) {
                SmartBanner.$el = $(e), SmartBanner.$el.length && (SmartBanner.$el.appendTo("body"), SmartBanner.$el.on("click", ".close, .link", function (e) {
                    SmartBanner.close(SmartBanner.$el.data("block"))
                }))
            }
        })
    }, close: function (e) {
        e && this.setCookie("smartbanner", !0, e), SmartBanner.$el.remove()
    }, setCookie: function (e, t, n) {
        var i = new Date;
        i.setDate(i.getDate() + n), t = encodeURI(t) + (null == n ? "" : "; expires=" + i.toUTCString()), document.cookie = e + "=" + t + "; path=/;"
    }, getCookie: function (e) {
        var t, n, i = document.cookie.split(";");
        for (var r in i)if (t = i[r].substr(0, i[r].indexOf("=")), n = i[r].substr(i[r].indexOf("=") + 1), (t = t.replace(/^\s+|\s+$/g, "")) == e)return decodeURI(n);
        return null
    }
};
$(function () {
    if (!$("html").hasClass("mPage")) {
        ["android", "ios"].some(function (e) {
            if ($("html").hasClass(e))return SmartBanner.init(e), !0
        })
    }
});
var Schedule = {
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    update: function () {
        var e = {}, t = $("html");
        t.data("district") ? e.district_id = t.data("district") : e.channel_id = t.data("channel"), $.ajax({
            type: "GET",
            url: "/api/time/worktime/",
            timeout: 5e3,
            dataType: "json",
            data: e,
            success: function (e) {
                e.from && e.to ? ($("#schedule_widget #work_from").text(e.from), $("#schedule_widget #work_to").text(e.to), $("#schedule_widget .workday").removeClass("hide"), $("#schedule_widget .today").removeClass("hide"), $("#schedule_widget .weekend").addClass("hide")) : ($("#schedule_widget .workday").addClass("hide"), $("#schedule_widget .today").addClass("hide"), $("#schedule_widget .weekend").removeClass("hide")), $("#schedule_widget").removeClass("hide")
            }
        })
    },
    render: function (e) {
        var e = e || new Date, t = {month: e.getMonth() + 1};
        $("html").data("district") ? t.district_id = $("html").data("district") : t.channel_id = $("html").data("channel"), $.ajax({
            type: "GET",
            url: "/api/time/days/",
            timeout: 5e3,
            dataType: "json",
            data: t,
            success: function (t) {
                var n = _.template($("#schedule-tpl").html()), i = _.template($("#day-tpl").html()), r = $("<tr/>"),
                    o = {day: null, month: null, fromHour: null, fromMinute: null, toHour: null, toMinute: null},
                    a = new Date(e.getFullYear(), e.getMonth(), 1), s = a.getDay() ? a.getDay() - 1 : 6,
                    c = new Date(e);
                c.setMonth(c.getMonth() - 1);
                var l = new Date(e);
                l.setMonth(l.getMonth() + 1), s && a.setDate(a.getDate() - s), $(".schedule").html(n({
                    cur_month: Schedule.months[e.getMonth()],
                    prev_month: Schedule.months[c.getMonth()],
                    next_month: Schedule.months[l.getMonth()],
                    cur_year: e.getFullYear()
                }));
                var d = new Date;
                for (e.getMonth() <= d.getMonth() ? $(".schedule .calendarcontrols.prev").remove() : $(".schedule .calendarcontrols.prev").data("date", c), e.getMonth() > d.getMonth() ? $(".schedule .calendarcontrols.next").remove() : $(".schedule .calendarcontrols.next").data("date", l); ;) {
                    var u = a.getFullYear() + "-" + ("00" + (a.getMonth() + 1)).substr(-2) + "-" + ("00" + a.getDate()).substr(-2);
                    if (_.has(t, u)) {
                        var p = $(i(_.extend(o, {
                            day: a.getDate(),
                            fromHour: t[u].from ? t[u].from.replace(/(\d{2}):\d{2}:\d{2}/, "$1") : null,
                            fromMinute: t[u].from ? t[u].from.replace(/\d{2}:(\d{2}):\d{2}/, "$1") : null,
                            toHour: t[u].to ? t[u].to.replace(/(\d{2}):\d{2}:\d{2}/, "$1") : null,
                            toMinute: t[u].to ? t[u].to.replace(/\d{2}:(\d{2}):\d{2}/, "$1") : null
                        })));
                        p.find(".month").remove(), 1 == t[u].today && p.addClass("monthday"), 1 == t[u].holiday && (p.addClass("holiday"), t[u].holiday_name && p.attr("title", t[u].holiday_name)), p.appendTo(r)
                    } else {
                        var p = $(i(_.extend(o, {day: a.getDate(), month: Schedule.months[a.getMonth()]})));
                        p.find(".time").remove(), p.addClass("past").appendTo(r)
                    }
                    if (7 == r.find("td").length && ($("#calendar table tbody").append(r), r = $("<tr/>")), a.setDate(a.getDate() + 1), 1 == a.getDay() && a.getMonth() != e.getMonth())break
                }
            }
        })
    }
};
$(function () {
    $("#schedule_widget").length && Schedule.update(), $(".schedule").length && (Schedule.render(), $(".schedule").on("click", ".calendarcontrols", function () {
        Schedule.render($(this).data("date"))
    }))
});
var Client = {
    data: {}, init: function () {
        $("#client").length && (Client.addEvents(), $.ajax({
            type: "GET",
            url: "/api/client/load/",
            timeout: 5e3,
            dataType: "json",
            success: function (e) {
                e.success && (Client.data = _.extend(Client.data, _.omit(e, "success")), Client.render(e))
            },
            fail: function () {
                log("Временно не доступно")
            }
        })), $("#modal-login").remove(), $("#login-btn").on("click", function () {
            Client.showForm()
        }), $.ajax({
            type: "GET",
            url: "/ajax/login/",
            data: String((new Date).getTime()),
            dataType: "html",
            success: function (e) {
                Client.form = $(e), Client.form.on("click", ".btn-close, .closeForm", Client.closeForm), Client.form.on("click", ".toFrame", function () {
                    Client.toFrame($(this).attr("rel"))
                }), Client.form.on("click", "button[type=submit]", Client.submit), Client.form.on("keypress", "input", function (e) {
                    13 == e.keyCode && Client.submit(e)
                }), $("body").append(Client.form), Client.form.find("input[name=phone]").each(function (e, t) {
                    var n = $(t);
                    n.data("mask") && n.data("mask").destroy(), n.data("mask", Masked({
                        inputElement: n,
                        mask: [8, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/],
                        focusPlaceholder: "8 (___) ___-__-__",
                        onBlur: function () {
                            11 !== n.val().replace(/[^0-9]/gim, "").length && n.val("").trigger("change")
                        }
                    }))
                })
            }
        })
    }, showForm: function (e) {
        showFade(), e ? Client.toFrame(e) : Client.toFrame(Client.form.find(".frame.df").attr("id")), Client.form.fadeIn(250, function () {
            $(this).addClass("active")
        })
    }, closeForm: function (e) {
        Client.form.fadeOut(100, function () {
            $(this).removeClass("active").find(".form-control").removeClass("error").val("").closest(".form-row").find("span.error").addClass("hide").text(""), hideFade()
        })
    }, toFrame: function (e) {
        var t = Client.form.find(".frame#" + e);
        Client.form.find(".modal-header h3").text(t.data("title")), Client.form.find(".frame").not(t).removeClass("active"), t.find("input[type=password]").val(""), t.addClass("active")
    }, submit: function (e) {
        var t = $(e.target), n = t.closest(".frame"), i = new Array({name: "act", value: n.attr("id")});
        n.find(".msg.error").addClass("hide"), n.find(".form-row .form-control.error").removeClass("error"), n.find(".form-row span.error").text("").addClass("hide"), n.find('button[type="submit"]').prop("disabled", !0), i = i.concat(n.find("input").serializeArray()), $.ajax({
            type: "POST",
            url: "/api/client/" + n.attr("id") + "/",
            dataType: "json",
            data: n.find("input").serializeArray(),
            complete: function () {
                n.find('button[type="submit"]').prop("disabled", !1)
            },
            success: function (e) {
                switch (n.attr("id")) {
                    case"auth":
                        Client.checkErrors(e) && (location = $("html").data("location-url") + "client.html");
                        break;
                    case"logout":
                        Client.checkErrors(e) && (location = $("html").data("location-url"));
                        break;
                    case"confirm-restore":
                        Client.checkErrors(e) && ($("#restore-pass input[name=client_id]").val(e.client_id), Client.toFrame("restore-pass"));
                        break;
                    case"restore-pass":
                        Client.checkErrors(e) && Client.toFrame("auth");
                        break;
                    case"del-address":
                        Client.checkErrors(e) && (Client.closeForm(), Client.render(e));
                        break;
                    case"change-pass":
                        Client.checkErrors(e) && Client.closeForm();
                        break;
                    case"change-phone":
                        Client.checkErrors(e) && (Client.closeForm(), Client.render(e))
                }
            },
            error: function () {
                log("Временно не доступно")
            }
        })
    }, checkErrors: function (e, t) {
        var n;
        return n = "page" == t ? Client.page.find(".frame.active") : Client.form.find(".frame.active"), !!e.success || ($.isEmptyObject(e.errors) || $.each(e.errors, function (e, t) {
            if ("log" == t.field) log(t.msg, "error", 3e3); else {
                var i = n.find(".form-row .form-control[name=" + t.field + "]");
                i.length || (i = n.find("[name=" + t.field + "]").closest(".form-control")), $.isEmptyObject(i) || (i.addClass("error"), i.closest(".form-row").find("span.error").text(t.msg).removeClass("hide"))
            }
        }), !1)
    }, addEvents: function () {
        if (this.page = $("#client"), this.page.on("click", "#logout", function () {
                Client.showForm($(this).attr("id"))
            }), this.page.on("click", ".nav .item", function (e) {
                $(this).hasClass("active") || Client.selectTab($(e.target).attr("rel"))
            }), this.page.on("click", ".banner .total .close", function (e) {
                $(this).closest(".banner").hide()
            }), !this.page.find(".item.active").length) {
            var e = window.location.hash.substr(1);
            e && this.page.find('.item[rel="' + e + '"]').length ? this.page.find('.item[rel="' + e + '"]').trigger("click") : this.page.find(".item:first").trigger("click")
        }
        this.page.on("click", "#info .data button.btn", this.edit), this.page.on("click", "#info .data .showForm", function () {
            Client.showForm($(this).attr("rel"))
        }), this.page.on("click", "#info .addresses .status button", this.setDefault), this.page.on("click", "#info .addresses .del button", function () {
            var e = $(this).closest(".item").attr("rel");
            $("#del-address input[name=address_id]").val(e), Client.showForm($(this).attr("rel"))
        }), this.page.on("click", "#items .item .like", this.toggleFav), this.page.on("click", "#items .item .control .click", this.clickItem)
    }, selectTab: function (e) {
        window.location.hash = e,
            Client.page.find('.nav .item[rel="' + e + '"]').addClass("active").siblings(".item.active").removeClass("active"), Client.page.find(".frames .frame#" + e).addClass("active").siblings(".frame.active").removeClass("active")
    }, render: function (e) {
        if (void 0 !== e.info && (e.info.banned ? Client.page.find(".blacklist").removeClass("hide") : Client.page.find(".blacklist").addClass("hide"), $("#client_name .val").text(e.info.name), Client.page.find(".banner .total .balance .val, #bonuses .title .balance .val").text(e.info.bonuses), Client.page.find(".unit, .banner .total .balance .unit, #bonuses .title .balance .unit").text(e.info.bonuses_unit), e.info.bonus_rate ? Client.page.find(".banner .status .val, #bonuses .title .status .val").text(e.info.bonus_rate) : Client.page.find(".banner .status, #bonuses .title .status").addClass("hide"), e.info.bonuses ? $("#client_bonuses").removeClass("hide") : $("#client_bonuses").addClass("hide"), e.info.sex && this.page.find('select[name="sex"]').val(e.info.sex), this.page.find('.form-control[name="birthday"]').val(e.info.birthday).mask("nn.nn.nnnn")), void 0 !== e.items)if (_.isEmpty(e.items)) Client.page.find("#items .empty").removeClass("hide"), Client.page.find("#items .list").addClass("hide").empty(); else {
            Client.page.find("#items .empty").addClass("hide"), Client.page.find("#items .list").empty().removeClass("hide");
            var t = _.template($("#itemTpl").html());
            _.each(e.items, function (e) {
                var n = $(t(e));
                e.like_id && n.addClass("fav"), n.data(e), Client.page.find("#items .list").append(n)
            })
        }
        if (void 0 !== e.addresses)if (_.isEmpty(e.addresses)) Client.page.find("#info .addresses .empty").removeClass("hide"), Client.page.find("#info .addresses .tables").addClass("hide").empty(); else {
            Client.page.find("#info .addresses .empty").addClass("hide"), Client.page.find("#info .addresses .tables").empty().removeClass("hide");
            var n = [];
            _.each(e.addresses, function (e) {
                var t = _.pick(e, "location_id", "location_name"), i = _.omit(e, "location_id", "location_name"),
                    r = _.findWhere(n, t);
                _.isEmpty(r) ? n.push(_.extend(t, {addresses: [i]})) : r.addresses.push(i)
            });
            var i = _.template($("#addressGroupTpl").html()), r = _.template($("#addressTpl").html());
            _.each(n, function (e) {
                var t = $(i(e));
                _.each(e.addresses, function (e) {
                    var n = [];
                    _.each(["place_name", "street_name", "house_name", "address_apart", "address_floor", "address_entr"], function (t) {
                        e[t] && n.push(e[t])
                    }), e.string = n.join(", ");
                    var i = $(r(e));
                    e.default && i.addClass("main"), t.find(".table").append(i)
                }), Client.page.find("#info .addresses .tables").append(t)
            })
        }
        if (void 0 !== e.bonuses) {
            if (Client.page.find("#bonuses .table").empty(), Client.page.find(".banner .total .history").empty(), _.isEmpty(e.bonuses)) Client.page.find("#bonuses .empty").removeClass("hide"), Client.page.find("#bonuses .total").addClass("hide"), Client.page.find("#bonuses .table").addClass("hide").empty(); else {
                Client.page.find("#bonuses .empty").addClass("hide"), Client.page.find("#bonuses .total").removeClass("hide"), Client.page.find("#bonuses .table").removeClass("hide");
                var o = _.template($("#bonusTpl").html()), a = _.template($("#bannerBonusTpl").html()), s = 3;
                _.each(e.bonuses, function (e, t) {
                    e.value > 0 && (e.value = "+" + e.value);
                    var n = $(o(e));
                    if (n.addClass(e.type), Client.page.find("#bonuses .table").append(n), "deffered" != e.type && s > 0) {
                        e.value = Math.abs(e.value);
                        var i = $(a(e));
                        i.addClass(e.type), Client.page.find(".banner .total .history").append(i), s--
                    }
                })
            }
        }
    }, edit: function (e) {
        var t = $(e.target);
        t.prop("disabled", !0), $.ajax({
            type: "POST",
            url: "/api/client/edit/",
            timeout: 5e3,
            data: Client.page.find("#info input, #info select").serialize(),
            dataType: "json",
            beforeSend: function () {
                $(".form-row .form-control.error").each(function () {
                    $(this).removeClass("error"), $(this).closest(".form-row").find("span.error").addClass("hide").empty()
                })
            },
            success: function (e) {
                Client.checkErrors(e, "page") && (log("Данные успешно сохранены", "info", 1500), Client.render(e))
            },
            complete: function () {
                t.prop("disabled", !1)
            },
            fail: function () {
                log("Временно не доступно")
            }
        })
    }, setDefault: function (e) {
        var t = $(e.target);
        $.ajax({
            type: "POST",
            url: "/api/client/set-default",
            timeout: 5e3,
            data: {_csrf: $("meta[name=csrf-token]").prop("content"), address_id: t.closest(".item[rel]").attr("rel")},
            success: function (e) {
                e.success && Client.render(e)
            },
            fail: function () {
                log("Временно не доступно")
            }
        })
    }, toggleFav: function (e) {
        var t = $(e.target).closest(".item");
        $.ajax({
            type: "POST",
            url: "/api/client/" + (t.hasClass("fav") ? "unset-fav" : "set-fav") + "/",
            timeout: 5e3,
            data: t.hasClass("fav") ? {
                _csrf: $("meta[name=csrf-token]").prop("content"),
                like_id: t.data("like_id")
            } : {
                _csrf: $("meta[name=csrf-token]").prop("content"),
                item_id: t.data("item_id"),
                components: t.data("components")
            },
            success: function (e) {
                e.success && Client.render(e)
            },
            fail: function () {
                log("Временно не доступно")
            }
        })
    }, clickItem: function (e) {
        var t = $(e.target).trigger("blur").closest(".item");
        if (t.data("constructor")) location = t.data("url"); else if (t.data("itemgroup_id")) {
            if (!District.initDistrict(t.data("page_id"), t.data("item_id"), t.data("url")))return !1;
            showFade(), $.ajax({
                type: "GET",
                url: "/ajax/itemgroup/",
                data: {
                    channel_id: $("html").data("channel"),
                    district_id: $("html").data("district"),
                    page_id: t.data("page_id")
                },
                dataType: "html",
                success: function (e) {
                    e ? ($(e).find(".product-fade").hide(), $(e).appendTo("body"), $("#modal-product").find(".product-fade").fadeIn(500, function () {
                        itemzoom()
                    })) : hideFade()
                }
            })
        } else Product.basketItem(t.data("item_id"))
    }
};
$(function () {
    Client.init()
});
var Share = {
    data: {url: null, title: null}, lastIndex: -1, share: function (e, t, n) {
        e.preventDefault();
        var i = e.target || e.srcElement, r = $(i).data("share") || $(i).attr("class");
        n = Share.data.title || $("head > title").text(), t = Share.data.url || window.location.href;
        var o = "";
        switch (r) {
            case"vk":
                o = "http://vk.com/share.php?", o += "url=" + encodeURIComponent(t), o += "&title=" + encodeURIComponent(n), o += "&noparse=false";
                break;
            case"fb":
                o = "http://www.facebook.com/sharer.php?s=100", o += "&p[title]=" + encodeURIComponent(n), o += "&p[url]=" + encodeURIComponent(t);
                break;
            case"mr":
                o = "http://connect.mail.ru/share?", o += "&title=" + encodeURIComponent(n), o += "&url=" + encodeURIComponent(t);
                break;
            case"tw":
                o = "http://twitter.com/share?", o += "text=" + encodeURIComponent(n.substr(0, 100) + "..."), o += "&url=" + encodeURIComponent(t);
                break;
            case"gplus":
                o = "https://plus.google.com/share?", o += "url=" + encodeURIComponent(t);
                break;
            case"ok":
                o = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1", o += "&st._surl=" + encodeURIComponent(t)
        }
        window.open(o, "", "left=" + (screen.width - 800) / 2 + ",top=" + (screen.height - 600) / 2 + ",toolbar=0,status=0,width=626,height=536")
    }, toggleMenu: function (e) {
        e.stopPropagation();
        var t = $(".share-menu").index($(this));
        Share.data = {url: "http://" + window.location.hostname + $(this).data("url"), title: $(this).data("title")};
        var n = $("#share_menu_list"), i = $(this).offset().top, r = $(this).offset().left;
        n.css({
            top: i - (n.outerHeight() + 10),
            left: r
        }), Share.lastIndex === t ? n.toggle() : (Share.lastIndex = t, !1 === n.is(":visible") && n.toggle())
    }, hideList: function (e) {
        !1 === $(e.target).hasClass("share-menu") && $("#share_menu_list").hide()
    }
};
$(document).on("click", ".share-menu", Share.toggleMenu), $(document).on("click", ".share__item, .share-menu__item", Share.share), $(document).on("mouseup", Share.hideList), $(window).on("resize", Share.hideList);
var yP, yE, Banners = {
    init: function () {
        desktopWidth ? $(".bannerGroup").not(".loaded").each(function () {
            var e = $(this).data("group-id");
            e && Banners.load($(this), e)
        }) : $(".bannerGroup").empty().removeClass("loaded")
    }, load: function (e, t) {
        $.ajax({
            type: "GET",
            url: "/ajax/banners/",
            data: {channel_id: $("html").data("channel"), banners_group: t},
            dataType: "html",
            success: function (t) {
                t ? e.html(t).addClass("loaded").find(".carousel").bxSlider({
                    useCSS: !1,
                    startSlide: 0,
                    controls: !1,
                    auto: e.find(".carousel").children().length > 1,
                    pager: e.find(".carousel").children().length > 1,
                    pause: 6e3,
                    autoHover: !0,
                    infiniteLoop: !0,
                    touchEnabled: !0
                }) : e.remove()
            }
        })
    }
};
$(document).ready(function () {
    Banners.init(), $(document).on("click", ".video-item a", function () {
        $("body").append('<div id="video-player"><div id="player"></div><button class="close" type="button"></button></div>');
        var e = $(this).attr("data-videoid");
        return showFade(), yP = new YT.Player("player", {
            height: 562,
            width: 1e3,
            videoId: e,
            playerVars: {
                autohide: 1,
                autoplay: 1,
                controls: 0,
                html5: 0,
                loop: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                origin: window.location.origin || window.location.protocol + "//" + window.location.host
            },
            events: {
                onReady: function () {
                    $("#video-player").append('<div class="progress-bar" style=""></div>')
                }, onStateChange: function (e) {
                    e.data === YT.PlayerState.ENDED || (e.data === YT.PlayerState.PLAYING ? (p(), yE = setInterval(p, 33)) : (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.BUFFERING) && clearInterval(yE)), p()
                }
            }
        }), $("#video-player .close").click(function () {
            $("#video-player").remove(), hideFade(), clearInterval(yE)
        }), $(window).resize(function () {
            $(window).width() < 1005 && yP.pauseVideo()
        }), !1
    }), $("body").on("keyup", function (e) {
        27 === e.keyCode && $("#video-player").length > 0 && ($("#video-player").remove(), hideFade())
    })
});
var DeliveryZone = {
    map: null, polygons: [], point: null, content: null, infoWindow: null, init: function () {
        var e = $('meta[name="ICBM"]').attr("content");
        if (!empty(e)) {
            var t = e.split(",");
            this.map = new google.maps.Map(document.getElementById("delivery-map"), {
                center: new google.maps.LatLng(t[0], t[1]),
                zoom: 12,
                gestureHandling: "greedy",
                disableDefaultUI: !0
            }), this.setPoint(), this.loadPolygons(), this.loadDistricts()
        }
        this.content = _.template(document.getElementById("infoTPL").innerHTML), this.infoWindow = new google.maps.InfoWindow, this.infoWindow.addListener("closeclick", function () {
            DeliveryZone.unselect(), DeliveryZone.renderPolygons()
        }), this.map.addListener("click", function () {
            DeliveryZone.unselect(), DeliveryZone.renderPolygons()
        })
    }, setPoint: function () {
        var e = $("#delivery-map"), t = e.data("point").split(";");
        this.point && this.point.setMap(null), e.data("point") && (this.point = new google.maps.Marker({
            position: new google.maps.LatLng(t[0], t[1]),
            title: e.data("address"),
            icon: {
                url: iconPaths.place,
                size: new google.maps.Size(22, 32),
                scaledSize: new google.maps.Size(22, 32),
                anchor: new google.maps.Point(11, 32)
            },
            map: this.map
        }))
    }, loadPolygons: function () {
        $.ajax({
            type: "GET",
            url: "/api/application/polygons/",
            timeout: 5e3,
            data: {location_id: $("html").data("location")},
            dataType: "json",
            success: function (e) {
                e.polygons.forEach(function (e) {
                    var t = [];
                    e.polygon_map.forEach(function (e) {
                        t.push(new google.maps.LatLng(e[0], e[1]))
                    });
                    var n = new google.maps.Polygon({
                        paths: t,
                        name: e.polygon_name,
                        polygon_price: e.polygon_price,
                        polygon_minsum: e.polygon_minsum,
                        polygon_time: e.polygon_time,
                        blocked: e.blocked,
                        block_from: e.block_from,
                        block_to: e.block_to,
                        selected: !1
                    });
                    n.addListener("click", function (e) {
                        var t = this;
                        DeliveryZone.unselect(), t.set("selected", !0), DeliveryZone.renderPolygons(), DeliveryZone.infoWindow.setContent(DeliveryZone.content(t)), DeliveryZone.infoWindow.setPosition(e.latLng.toJSON()), DeliveryZone.infoWindow.open(DeliveryZone.map)
                    }), DeliveryZone.polygons.push(n), DeliveryZone.renderPolygons()
                })
            },
            error: function () {
                log("Информация о зонах доставки временно недоступна")
            }
        })
    }, renderPolygons: function () {
        DeliveryZone.polygons.forEach(function (e) {
            e.setOptions({
                strokeColor: e.blocked ? "#ff3000" : e.selected ? "#0bda51" : "#1d74cf",
                strokeOpacity: .8,
                fillColor: e.blocked ? "#ffb57a" : e.selected ? "#66FF66" : "#33cccc",
                fillOpacity: e.blocked || e.selected ? .45 : .25,
                zIndex: e.blocked ? 2 : e.selected ? 3 : 1
            }), e.setMap(DeliveryZone.map)
        })
    }, unselect: function () {
        this.polygons.forEach(function (e) {
            e.get("selected") && e.set("selected", !1)
        }), this.infoWindow.close()
    }, loadDistricts: function () {
        $.ajax({
            type: "GET",
            url: "/api/application/districts/",
            timeout: 5e3,
            data: {channel_id: $("html").data("channel"), delivery_id: 2},
            dataType: "json",
            success: function (e) {
                e.error || e.forEach(function (e) {
                    new google.maps.Marker({
                        position: {lat: e.point[0], lng: e.point[1]},
                        title: e.district_address,
                        icon: {
                            url: iconPaths.cafe,
                            size: new google.maps.Size(32, 32),
                            scaledSize: new google.maps.Size(32, 32),
                            anchor: new google.maps.Point(16, 16)
                        },
                        map: DeliveryZone.map
                    })
                })
            },
            error: function () {
                log("Информация о филлиалах недоступна")
            }
        })
    }, rectime: function (e) {
        var t = parseInt(e / 3600) % 24, n = parseInt(e / 60) % 60, i = e % 60, r = [];
        return t > 0 && r.push(("0" + t).substr(-2) + " ч"), n > 0 && r.push(("0" + n).substr(-2) + " мин"), i > 0 && r.push(("0" + i).substr(-2) + " сек"), r.join(" ")
    }
};
$(function () {
    $("#delivery-map").length && DeliveryZone.init()
});
var Cam = {
    cams: {}, load: function () {
        var e = $.ajax({
            timeout: 5e3,
            type: "GET",
            url: "/api/application/cam/",
            data: {channel_id: $("html").data("channel"), site_id: $(".cam-page").data("site")},
            dataType: "json"
        });
        e.done(function (e) {
            empty(e) || (Cam.cams = e, Cam.selectRender(), Cam.camRender())
        }), e.fail(function (e) {
            log("Временно не доступно")
        })
    }, selectRender: function () {
        $("#cam-select").removeClass("hide"), $.each(Cam.cams, function (e, t) {
            $.each(t.cameras, function (e, n) {
                $("#cam-select select").append($("<option/>", {value: t.district_id + "_" + e, text: n.cam_title}))
            })
        }), $("#cam-select").change(Cam.selectClickRender)
    }, selectClickRender: function () {
        var e = $(this).val(), t = e.split("_"), n = Cam.cams[t[0]].cameras[t[1]];
        $("#cam-content").html(n.cam_code)
    }, camRender: function () {
        for (var e in Cam.cams)break;
        $("#cam-content").html(Cam.cams[e].cameras[0].cam_code)
    }
};
$(function () {
    $.exists(".cam-page") && Cam.load()
});
var Status = {
    response: {}, payments: [], init: function () {
        $.ajax({
            type: "GET",
            url: "/api/application/payments/",
            timeout: 5e3,
            data: {channel_id: $("html").data("channel")},
            dataType: "json",
            success: function (e) {
                Status.payments = e, $(window).on("focus", Status.load), Status.load(function () {
                    Approve.init(), Feedback.init()
                })
            }
        })
    }, load: function (e) {
        var t = $.ajax({type: "GET", url: "/api/order/load/", data: {ts: (new Date).getTime()}, dataType: "json"});
        t.done(function (t) {
            Status.reloadTimer && clearTimeout(Status.reloadTimer), Status.reloadTimer = setTimeout(Status.load, 6e4), !_.isEmpty(t) && checkError(t) ? (Status.response = t, e && "function" == typeof e && e(), $(".status-error").addClass("hide"), $(".status-wrapper").removeClass("hide"), Status.statusBar(), Status.statusStep(), Status.statusContent(), Status.statusImage(), Status.statusInfo(), Status.statusItems(), Approve.check(), Feedback.check()) : ($(".status-wrapper").addClass("hide"), $(".status-error").removeClass("hide"), setTimeout(function () {
                location = $("html").data("location-url")
            }, 1e3)), $(window).resize()
        }), t.fail(function () {
            $(".status-wrapper").addClass("hide"), $(".status-error").removeClass("hide")
        })
    }, statusBar: function () {
        var e = $(".status-line"), t = {
            address: new Array("Проверка", "В работе", "Готовится", "Комплектуется", "Доставляется", "Доставлен"),
            selfdelivery: new Array("Проверка", "В работе", "Готовится", "Готов", "Выдан")
        };
        for (var n in t[Status.response.delivery_logic])e.find(".step-" + (parseInt(n) + 1) + " .label").text(t[Status.response.delivery_logic][n]);
        "selfdelivery" === Status.response.delivery_logic ? e.addClass("selfdelivery") : e.removeClass("selfdelivery")
    }, statusStep: function () {
        var e = 0, t = $(".status-line");
        switch (1 == Status.response.rejected && t.addClass("rejected"), t.find(".active").removeClass("active"), Status.response.status.type) {
            case"wait_approve":
            case"not_approved":
            case"pay_online":
            case"wait_prepaid":
                e = 1;
                break;
            case"wait_logisting":
            case"logisting":
                e = 2;
                break;
            case"wait_assembling":
            case"assembling":
                e = 3;
                break;
            case"wait_delivering":
                e = 4;
                break;
            case"delivering":
                e = "selfdelivery" == Status.response.delivery_logic ? 4 : 5;
                break;
            case"delivered":
                e = "selfdelivery" == Status.response.delivery_logic ? 5 : 6
        }
        t.find(".step-" + e).addClass("active")
    }, statusImage: function () {
        var e = 0, t = $(".status-image-wrapp");
        if (1 == Status.response.rejected) e = 2; else switch (Status.response.status.type) {
            case"wait_approve":
                e = 1;
                break;
            case"not_approved":
                e = "online" === Status.response.payment_logic ? 10 : 2;
                break;
            case"pay_online":
            case"wait_prepaid":
                e = 3;
                break;
            case"wait_logisting":
            case"logisting":
                e = "online" === Status.response.payment_logic ? 11 : 4;
                break;
            case"wait_assembling":
                e = 5;
                break;
            case"assembling":
                e = 6;
                break;
            case"wait_delivering":
                e = 7;
                break;
            case"delivering":
                e = 8;
                break;
            case"delivered":
                e = 9
        }
        -1 === [2, 9, 10].indexOf(e) ? t.addClass("inProcess") : t.removeClass("inProcess"), t.html($("<div/>").addClass("status-image pic-" + e + " show"))
    }, statusContent: function () {
        var e = Status.response.status.name;
        "selfdelivery" != Status.response.delivery_logic && "wait_delivering" === Status.response.status.type && (e = "Комплектуется"), $(".status-name").text(e), $(".status-description").text(Status.response.status.description)
    }, statusInfo: function () {
        $(".status-number").text(Status.response.invoice_id), $(".status-added .val").text(Status.response.added_on), Status.response.order_place ? $(".status-address .val").text(Status.response.order_place) : $(".status-address").hide();
        var e = String(Status.response.phone), t = "8 (nnn) nnn-nn-nn";
        if (9 != e.charAt(1))switch (e.length) {
            case 10:
                t = "8 (nnnn) nnn-nn";
                break;
            case 11:
                t = "8 (nnnn) nnn-nnn";
                break;
            case 12:
                t = "8 (nnnn) nnn-nnnn";
                break;
            default:
                t = ""
        }
        $(".status-phone .val").unmask().text(e).mask(t);
        var n = _.findWhere(Status.payments, {
            payment_id: Status.response.payment_id,
            payment_logic: Status.response.payment_logic
        });
        if (Status.response.paydata && "pay_online" == Status.response.status.type ? $(".status-pay").html($("<a/>").attr({
                href: Status.response.paydata.pay_page,
                target: "_blank"
            }).text(n.payment_name)) : $(".status-pay").html($('<span class="val" />').text(n.payment_name)), !Status.response.rejected && Status.response.deliver_on) {
            var i = $(".status-time");
            i.show(), i.find(".value").text(Status.response.deliver_on), "selfdelivery" == Status.response.delivery_logic ? i.find(".desc").text("Можно забрать в:") : "address" == Status.response.delivery_logic && (Status.response.desired_time ? i.find(".desc").text("Будет доставлен к:") : i.find(".desc").text("Будет доставлен до:"))
        } else $(".status-time").hide();
        $(".status-total > .value").text(priceFormat(Status.response.to_pay, !0)), "selfdelivery" == Status.response.delivery_logic ? $(".status-delivery").empty() : $(".status-delivery > .value").text(priceFormat(parseInt(Status.response.deliveryPrice) + parseInt(Status.response.polygonPrice)))
    }, statusItems: function () {
        var e = $("#items-tpl").html(), t = $(".status-items .items tbody");
        if (t.empty(), !$.isEmptyObject(Status.response) && !$.isEmptyObject(Status.response.entries)) {
            var n = entriesGroup.entries(Status.response.entries);
            Status.response.quantity = entriesGroup.quantity, Status.response.entries = [];
            for (var i in n)Status.response.entries.push(n[i]);
            Status.response.entries.sort(function (e, t) {
                return e.bentry_id - t.bentry_id
            }), $.each(Status.response.entries, function (n, i) {
                var r = _.template(e);
                t.append(r(i))
            })
        }
    }
};
$(function () {
    $.exists(".status-page") && Status.init();
    $(window).on("resize", function () {
        $("#status-wrapper").css("min-height", $(window).innerHeight() - $(".top-line").outerHeight(!0) - $(".top-menu").outerHeight(!0) - $(".bottom:visible").outerHeight(!0) - $(".status-page .header").outerHeight(!0) - $(".status-page .content").outerHeight(!0) + $(".status-page .content").height() - $("#status-wrapper").outerHeight(!0) + $("#status-wrapper").height() - parseInt($("body > .wrapper").css("padding-top")) - 5)
    }), $(window).resize()
}), Slider = {
    el: null, activeSlide: null, duration: 8e3, init: function () {
        this.el = $(".mPage .backg_image_wrapp"), this.el.removeClass("hide"), this.activeSlide = this.el.find(".backg_image:first").addClass("active"), setTimeout(Slider.nextSlide, Slider.duration)
    }, nextSlide: function () {
        var e = Slider.activeSlide.next(".backg_image");
        0 == e.length && (e = Slider.el.find(".backg_image:first")), e.addClass("next"), Slider.activeSlide.fadeOut(2e3, function () {
            $(this).removeClass("active").show(), Slider.activeSlide = e.addClass("active").removeClass("next")
        }), setTimeout(Slider.nextSlide, Slider.duration)
    }
}, $(function () {
    if ($.exists(".mPage")) {
        var e = $(".mPage .backg_player");
        $(".mPage").hasClass("desktop") ? (e.removeClass("hide"), $("#player")[0].play()) : (e.addClass("hide"), Slider.init())
    }
});
var goalListener = {
    counters: {yandex: null}, getCounter: function (e) {
        if ("yandex" == e)for (objName in window)if (new RegExp("yaCounter").test(objName))return this.counters.yandex = window[objName], this.counters.yandex;
        return !1
    }, reach: function (e) {
        if (e) {
            var t = this.getCounter("yandex");
            t && e.caption && t.reachGoal(e.caption)
        }
    }
};
$(document).ready(function () {
}), $(function () {
    function e() {
        var e = window.getSelection(),
            i = e + " <br /><br />" + t + " <a href='" + window.location.protocol + "//" + n + "/'>" + n + "</a><br />",
            r = document.createElement("div");
        r.style.position = "absolute", r.style.left = "-99999px", document.body.appendChild(r), r.innerHTML = i, e.selectAllChildren(r), setTimeout(function () {
            document.body.removeChild(r)
        }, 0)
    }

    var t = "Источник контента:", n = window.location.hostname;
    document.body.addEventListener("copy", e)
}), function () {
    function e() {
        return document.documentElement.dataset ? document.documentElement.dataset.locationUrl : document.documentElement.getAttribute("data-location-url")
    }

    function t() {
        var t, i = e();
        n ? i !== localStorage.getItem("current-location") && (t = localStorage.getItem("current-location")) : i !== BrowserCookies.get("current-location") && (t = BrowserCookies.get("current-location")), t && (window.location.pathname = window.location.pathname.replace(i, t))
    }

    var n = !1;
    try {
        localStorage.setItem("isSupport", "value"), localStorage.removeItem("isSupport"), n = !0
    } catch (e) {
    }
    window.checkCurrentLocation = t, n ? (localStorage.setItem("current-location", e()), window.addEventListener("storage", function (e) {
        "current-location" === e.key && t()
    })) : (BrowserCookies.set("current-location", e()), window.addEventListener("focus", function () {
        t()
    }))
}();
/**
 * Created by nd on 04.12.2017.
 */
