/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://new.modernizr.com/download/?-touchevents-setclasses !*/
(function(e, t, n) {
    function u(e, t) {
        return typeof e === t;
    }
    function a() {
        var e, t, n, s, a, f, l;
        for (var c in i) if (i.hasOwnProperty(c)) {
            e = [], t = i[c];
            if (t.name) {
                e.push(t.name.toLowerCase());
                if (t.options && t.options.aliases && t.options.aliases.length) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            }
            s = u(t.fn, "function") ? t.fn() : t.fn;
            for (a = 0; a < e.length; a++) f = e[a], l = f.split("."), l.length === 1 ? o[l[0]] = s : (o[l[0]] && !(o[l[0]] instanceof Boolean) && (o[l[0]] = new Boolean(o[l[0]])), o[l[0]][l[1]] = s), r.push((s ? "" : "no-") + l.join("-"));
        }
    }
    function c(e) {
        var t = f.className, n = o._config.classPrefix || "";
        l && (t = t.baseVal);
        if (o._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        o._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), l ? f.className.baseVal = t : f.className = t);
    }
    function p() {
        return typeof t.createElement != "function" ? t.createElement(arguments[0]) : l ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function d() {
        var e = t.body;
        return e || (e = p(l ? "svg" : "body"), e.fake = !0), e;
    }
    function v(e, n, r, i) {
        var s = "modernizr", o, u, a, l, c = p("div"), h = d();
        if (parseInt(r, 10)) while (r--) a = p("div"), a.id = i ? i[r] : s + (r + 1), c.appendChild(a);
        return o = p("style"), o.type = "text/css", o.id = "s" + s, (h.fake ? h : c).appendChild(o), h.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = s, h.fake && (h.style.background = "", h.style.overflow = "hidden", l = f.style.overflow, f.style.overflow = "hidden", f.appendChild(h)), u = n(c, e), h.fake ? (h.parentNode.removeChild(h), f.style.overflow = l, f.offsetHeight) : c.parentNode.removeChild(c), !!u;
    }
    var r = [], i = [], s = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e]);
            }, 0);
        },
        addTest: function(e, t, n) {
            i.push({
                name: e,
                fn: t,
                options: n
            });
        },
        addAsyncTest: function(e) {
            i.push({
                name: null,
                fn: e
            });
        }
    }, o = function() {};
    o.prototype = s, o = new o;
    var f = t.documentElement, l = f.nodeName.toLowerCase() === "svg", h = s._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [ "", "" ];
    s._prefixes = h;
    var m = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1;
        } : function(t) {
            var n = !1;
            return v("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position === "absolute";
            }), n;
        };
    }();
    s.mq = m, o.addTest("touchevents", function() {
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) return !0;
        var n = [ "(", h.join("touch-enabled),("), "heartz", ")" ].join("");
        return m(n);
    }), a(), c(r), delete s.addTest, delete s.addAsyncTest;
    for (var g = 0; g < o._q.length; g++) o._q[g]();
    e.Modernizr = o, define("modernizr-init", function() {});
})(window, document);;