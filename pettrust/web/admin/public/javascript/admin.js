/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */ ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() {
                    if (!b || !b.requirejs) {
                        b ? c = b : b = {};
                        var a, c, d;
                        ! function(b) {
                            function e(a, b) {
                                return u.call(a, b)
                            }

                            function f(a, b) {
                                var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                    o = s.map,
                                    p = o && o["*"] || {};
                                if (a && "." === a.charAt(0))
                                    if (b) {
                                        for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                            if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                            else if (".." === m) {
                                            if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                            k > 0 && (a.splice(k - 1, 2), k -= 2)
                                        }
                                        a = a.join("/")
                                    } else 0 === a.indexOf("./") && (a = a.substring(2));
                                if ((n || p) && o) {
                                    for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                        if (d = c.slice(0, k).join("/"), n)
                                            for (l = n.length; l > 0; l -= 1)
                                                if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                                    f = e, h = k;
                                                    break
                                                }
                                        if (f) break;
                                        !i && p && p[d] && (i = p[d], j = k)
                                    }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                }
                                return a
                            }

                            function g(a, c) {
                                return function() {
                                    var d = v.call(arguments, 0);
                                    return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                                }
                            }

                            function h(a) {
                                return function(b) {
                                    return f(b, a)
                                }
                            }

                            function i(a) {
                                return function(b) {
                                    q[a] = b
                                }
                            }

                            function j(a) {
                                if (e(r, a)) {
                                    var c = r[a];
                                    delete r[a], t[a] = !0, m.apply(b, c)
                                }
                                if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                                return q[a]
                            }

                            function k(a) {
                                var b, c = a ? a.indexOf("!") : -1;
                                return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                            }

                            function l(a) {
                                return function() {
                                    return s && s.config && s.config[a] || {}
                                }
                            }
                            var m, n, o, p, q = {},
                                r = {},
                                s = {},
                                t = {},
                                u = Object.prototype.hasOwnProperty,
                                v = [].slice,
                                w = /\.js$/;
                            o = function(a, b) {
                                var c, d = k(a),
                                    e = d[0];
                                return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                    f: e ? e + "!" + a : a,
                                    n: a,
                                    pr: e,
                                    p: c
                                }
                            }, p = {
                                require: function(a) {
                                    return g(a)
                                },
                                exports: function(a) {
                                    var b = q[a];
                                    return "undefined" != typeof b ? b : q[a] = {}
                                },
                                module: function(a) {
                                    return {
                                        id: a,
                                        uri: "",
                                        exports: q[a],
                                        config: l(a)
                                    }
                                }
                            }, m = function(a, c, d, f) {
                                var h, k, l, m, n, s, u = [],
                                    v = typeof d;
                                if (f = f || a, "undefined" === v || "function" === v) {
                                    for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                        if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                        else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                    else if ("module" === k) h = u[n] = p.module(a);
                                    else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                    else {
                                        if (!m.p) throw new Error(a + " missing " + k);
                                        m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                    }
                                    l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                                } else a && (q[a] = d)
                            }, a = c = n = function(a, c, d, e, f) {
                                if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                                if (!a.splice) {
                                    if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                    c.splice ? (a = c, c = d, d = null) : a = b
                                }
                                return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                                    m(b, a, c, d)
                                }, 4), n
                            }, n.config = function(a) {
                                return n(a)
                            }, a._defined = q, d = function(a, b, c) {
                                if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                            }, d.amd = {
                                jQuery: !0
                            }
                        }(), b.requirejs = a, b.require = c, b.define = d
                    }
                }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                    var b = a || $;
                    return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
                }), b.define("select2/utils", ["jquery"], function(a) {
                    function b(a) {
                        var b = a.prototype,
                            c = [];
                        for (var d in b) {
                            var e = b[d];
                            "function" == typeof e && "constructor" !== d && c.push(d)
                        }
                        return c
                    }
                    var c = {};
                    c.Extend = function(a, b) {
                        function c() {
                            this.constructor = a
                        }
                        var d = {}.hasOwnProperty;
                        for (var e in b) d.call(b, e) && (a[e] = b[e]);
                        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                    }, c.Decorate = function(a, c) {
                        function d() {
                            var b = Array.prototype.unshift,
                                d = c.prototype.constructor.length,
                                e = a.prototype.constructor;
                            d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                        }

                        function e() {
                            this.constructor = d
                        }
                        var f = b(c),
                            g = b(a);
                        c.displayName = a.displayName, d.prototype = new e;
                        for (var h = 0; h < g.length; h++) {
                            var i = g[h];
                            d.prototype[i] = a.prototype[i]
                        }
                        for (var j = (function(a) {
                                var b = function() {};
                                a in d.prototype && (b = d.prototype[a]);
                                var e = c.prototype[a];
                                return function() {
                                    var a = Array.prototype.unshift;
                                    return a.call(arguments, b), e.apply(this, arguments)
                                }
                            }), k = 0; k < f.length; k++) {
                            var l = f[k];
                            d.prototype[l] = j(l)
                        }
                        return d
                    };
                    var d = function() {
                        this.listeners = {}
                    };
                    return d.prototype.on = function(a, b) {
                        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                    }, d.prototype.trigger = function(a) {
                        var b = Array.prototype.slice,
                            c = b.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, d.prototype.invoke = function(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
                    }, c.Observable = d, c.generateChars = function(a) {
                        for (var b = "", c = 0; a > c; c++) {
                            var d = Math.floor(36 * Math.random());
                            b += d.toString(36)
                        }
                        return b
                    }, c.bind = function(a, b) {
                        return function() {
                            a.apply(b, arguments)
                        }
                    }, c._convertData = function(a) {
                        for (var b in a) {
                            var c = b.split("-"),
                                d = a;
                            if (1 !== c.length) {
                                for (var e = 0; e < c.length; e++) {
                                    var f = c[e];
                                    f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                }
                                delete a[b]
                            }
                        }
                        return a
                    }, c.hasScroll = function(b, c) {
                        var d = a(c),
                            e = c.style.overflowX,
                            f = c.style.overflowY;
                        return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
                    }, c.escapeMarkup = function(a) {
                        var b = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                            return b[a]
                        })
                    }, c.appendMany = function(b, c) {
                        if ("1.7" === a.fn.jquery.substr(0, 3)) {
                            var d = a();
                            a.map(c, function(a) {
                                d = d.add(a)
                            }), c = d
                        }
                        b.append(c)
                    }, c
                }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                    function c(a, b, d) {
                        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                    }, c.prototype.clear = function() {
                        this.$results.empty()
                    }, c.prototype.displayMessage = function(b) {
                        var c = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            e = this.options.get("translations").get(b.message);
                        d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                    }, c.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, c.prototype.append = function(a) {
                        this.hideLoading();
                        var b = [];
                        if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        a.results = this.sort(a.results);
                        for (var c = 0; c < a.results.length; c++) {
                            var d = a.results[c],
                                e = this.option(d);
                            b.push(e)
                        }
                        this.$results.append(b)
                    }, c.prototype.position = function(a, b) {
                        var c = b.find(".select2-results");
                        c.append(a)
                    }, c.prototype.sort = function(a) {
                        var b = this.options.get("sorter");
                        return b(a)
                    }, c.prototype.highlightFirstItem = function() {
                        var a = this.$results.find(".select2-results__option[aria-selected]"),
                            b = a.filter("[aria-selected=true]");
                        b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, c.prototype.setClasses = function() {
                        var b = this;
                        this.data.current(function(c) {
                            var d = a.map(c, function(a) {
                                    return a.id.toString()
                                }),
                                e = b.$results.find(".select2-results__option[aria-selected]");
                            e.each(function() {
                                var b = a(this),
                                    c = a.data(this, "data"),
                                    e = "" + c.id;
                                null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                            })
                        })
                    }, c.prototype.showLoading = function(a) {
                        this.hideLoading();
                        var b = this.options.get("translations").get("searching"),
                            c = {
                                disabled: !0,
                                loading: !0,
                                text: b(a)
                            },
                            d = this.option(c);
                        d.className += " loading-results", this.$results.prepend(d)
                    }, c.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, c.prototype.option = function(b) {
                        var c = document.createElement("li");
                        c.className = "select2-results__option";
                        var d = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                        for (var e in d) {
                            var f = d[e];
                            c.setAttribute(e, f)
                        }
                        if (b.children) {
                            var g = a(c),
                                h = document.createElement("strong");
                            h.className = "select2-results__group";
                            a(h);
                            this.template(b, h);
                            for (var i = [], j = 0; j < b.children.length; j++) {
                                var k = b.children[j],
                                    l = this.option(k);
                                i.push(l)
                            }
                            var m = a("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            m.append(i), g.append(h), g.append(m)
                        } else this.template(b, c);
                        return a.data(c, "data", b), c
                    }, c.prototype.bind = function(b, c) {
                        var d = this,
                            e = b.id + "-results";
                        this.$results.attr("id", e), b.on("results:all", function(a) {
                            d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("results:append", function(a) {
                            d.append(a.data), b.isOpen() && d.setClasses()
                        }), b.on("query", function(a) {
                            d.hideMessages(), d.showLoading(a)
                        }), b.on("select", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("unselect", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("open", function() {
                            d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                        }), b.on("close", function() {
                            d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                        }), b.on("results:toggle", function() {
                            var a = d.getHighlightedResults();
                            0 !== a.length && a.trigger("mouseup")
                        }), b.on("results:select", function() {
                            var a = d.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = a.data("data");
                                "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                    data: b
                                })
                            }
                        }), b.on("results:previous", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a);
                            if (0 !== c) {
                                var e = c - 1;
                                0 === a.length && (e = 0);
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top,
                                    h = f.offset().top,
                                    i = d.$results.scrollTop() + (h - g);
                                0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                            }
                        }), b.on("results:next", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a),
                                e = c + 1;
                            if (!(e >= b.length)) {
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                    h = f.offset().top + f.outerHeight(!1),
                                    i = d.$results.scrollTop() + h - g;
                                0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                            }
                        }), b.on("results:focus", function(a) {
                            a.element.addClass("select2-results__option--highlighted")
                        }), b.on("results:message", function(a) {
                            d.displayMessage(a)
                        }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                            var b = d.$results.scrollTop(),
                                c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                e = a.deltaY > 0 && b - a.deltaY <= 0,
                                f = a.deltaY < 0 && c <= d.$results.height();
                            e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this),
                                e = c.data("data");
                            return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                                originalEvent: b,
                                data: e
                            }) : d.trigger("close", {})) : void d.trigger("select", {
                                originalEvent: b,
                                data: e
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this).data("data");
                            d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                                data: c,
                                element: a(this)
                            })
                        })
                    }, c.prototype.getHighlightedResults = function() {
                        var a = this.$results.find(".select2-results__option--highlighted");
                        return a
                    }, c.prototype.destroy = function() {
                        this.$results.remove()
                    }, c.prototype.ensureHighlightVisible = function() {
                        var a = this.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = this.$results.find("[aria-selected]"),
                                c = b.index(a),
                                d = this.$results.offset().top,
                                e = a.offset().top,
                                f = this.$results.scrollTop() + (e - d),
                                g = e - d;
                            f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                        }
                    }, c.prototype.template = function(b, c) {
                        var d = this.options.get("templateResult"),
                            e = this.options.get("escapeMarkup"),
                            f = d(b, c);
                        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                    }, c
                }), b.define("select2/keys", [], function() {
                    var a = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return a
                }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, b.Observable), d.prototype.render = function() {
                        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                    }, d.prototype.bind = function(a, b) {
                        var d = this,
                            e = (a.id + "-container", a.id + "-results");
                        this.container = a, this.$selection.on("focus", function(a) {
                            d.trigger("focus", a)
                        }), this.$selection.on("blur", function(a) {
                            d._handleBlur(a)
                        }), this.$selection.on("keydown", function(a) {
                            d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                        }), a.on("results:focus", function(a) {
                            d.$selection.attr("aria-activedescendant", a.data._resultId)
                        }), a.on("selection:update", function(a) {
                            d.update(a.data)
                        }), a.on("open", function() {
                            d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                        }), a.on("close", function() {
                            d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                        }), a.on("enable", function() {
                            d.$selection.attr("tabindex", d._tabindex)
                        }), a.on("disable", function() {
                            d.$selection.attr("tabindex", "-1")
                        })
                    }, d.prototype._handleBlur = function(b) {
                        var c = this;
                        window.setTimeout(function() {
                            document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                        }, 1)
                    }, d.prototype._attachCloseHandler = function(b) {
                        a(document.body).on("mousedown.select2." + b.id, function(b) {
                            var c = a(b.target),
                                d = c.closest(".select2"),
                                e = a(".select2.select2-container--open");
                            e.each(function() {
                                var b = a(this);
                                if (this != d[0]) {
                                    var c = b.data("element");
                                    c.select2("close")
                                }
                            })
                        })
                    }, d.prototype._detachCloseHandler = function(b) {
                        a(document.body).off("mousedown.select2." + b.id)
                    }, d.prototype.position = function(a, b) {
                        var c = b.find(".selection");
                        c.append(a)
                    }, d.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, d.prototype.update = function(a) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, d
                }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                    function e() {
                        e.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(e, b), e.prototype.render = function() {
                        var a = e.__super__.render.call(this);
                        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                    }, e.prototype.bind = function(a, b) {
                        var c = this;
                        e.__super__.bind.apply(this, arguments);
                        var d = a.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                            1 === a.which && c.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                            a.isOpen() || c.$selection.focus()
                        }), a.on("selection:update", function(a) {
                            c.update(a.data)
                        })
                    }, e.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, e.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection"),
                            d = this.options.get("escapeMarkup");
                        return d(c(a, b))
                    }, e.prototype.selectionContainer = function() {
                        return a("<span></span>")
                    }, e.prototype.update = function(a) {
                        if (0 === a.length) return void this.clear();
                        var b = a[0],
                            c = this.$selection.find(".select2-selection__rendered"),
                            d = this.display(b, c);
                        c.empty().append(d), c.prop("title", b.title || b.text)
                    }, e
                }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                    function d(a, b) {
                        d.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(d, b), d.prototype.render = function() {
                        var a = d.__super__.render.call(this);
                        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                    }, d.prototype.bind = function(b, c) {
                        var e = this;
                        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                            e.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                            if (!e.options.get("disabled")) {
                                var c = a(this),
                                    d = c.parent(),
                                    f = d.data("data");
                                e.trigger("unselect", {
                                    originalEvent: b,
                                    data: f
                                })
                            }
                        })
                    }, d.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, d.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection"),
                            d = this.options.get("escapeMarkup");
                        return d(c(a, b))
                    }, d.prototype.selectionContainer = function() {
                        var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return b
                    }, d.prototype.update = function(a) {
                        if (this.clear(), 0 !== a.length) {
                            for (var b = [], d = 0; d < a.length; d++) {
                                var e = a[d],
                                    f = this.selectionContainer(),
                                    g = this.display(e, f);
                                f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                            }
                            var h = this.$selection.find(".select2-selection__rendered");
                            c.appendMany(h, b)
                        }
                    }, d
                }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                    function b(a, b, c) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                    }
                    return b.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, b.prototype.createPlaceholder = function(a, b) {
                        var c = this.selectionContainer();
                        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                    }, b.prototype.update = function(a, b) {
                        var c = 1 == b.length && b[0].id != this.placeholder.id,
                            d = b.length > 1;
                        if (d || c) return a.call(this, b);
                        this.clear();
                        var e = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(e)
                    }, b
                }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                    function c() {}
                    return c.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                            d._handleClear(a)
                        }), b.on("keypress", function(a) {
                            d._handleKeyboardClear(a, b)
                        })
                    }, c.prototype._handleClear = function(a, b) {
                        if (!this.options.get("disabled")) {
                            var c = this.$selection.find(".select2-selection__clear");
                            if (0 !== c.length) {
                                b.stopPropagation();
                                for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                    var f = {
                                        data: d[e]
                                    };
                                    if (this.trigger("unselect", f), f.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, c.prototype._handleKeyboardClear = function(a, c, d) {
                        d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
                    }, c.prototype.update = function(b, c) {
                        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                            var d = a('<span class="select2-selection__clear">&times;</span>');
                            d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                        }
                    }, c
                }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b, c) {
                        a.call(this, b, c)
                    }
                    return d.prototype.render = function(b) {
                        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = c, this.$search = c.find("input");
                        var d = b.call(this);
                        return this._transferTabIndex(), d
                    }, d.prototype.bind = function(a, b, d) {
                        var e = this;
                        a.call(this, b, d), b.on("open", function() {
                            e.$search.trigger("focus")
                        }), b.on("close", function() {
                            e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                        }), b.on("enable", function() {
                            e.$search.prop("disabled", !1), e._transferTabIndex()
                        }), b.on("disable", function() {
                            e.$search.prop("disabled", !0)
                        }), b.on("focus", function(a) {
                            e.$search.trigger("focus")
                        }), b.on("results:focus", function(a) {
                            e.$search.attr("aria-activedescendant", a.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                            e.trigger("focus", a)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                            e._handleBlur(a)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                            a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                            var b = a.which;
                            if (b === c.BACKSPACE && "" === e.$search.val()) {
                                var d = e.$searchContainer.prev(".select2-selection__choice");
                                if (d.length > 0) {
                                    var f = d.data("data");
                                    e.searchRemoveChoice(f), a.preventDefault()
                                }
                            }
                        });
                        var f = document.documentMode,
                            g = f && 11 >= f;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                            return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                            if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                            var b = a.which;
                            b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                        })
                    }, d.prototype._transferTabIndex = function(a) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, d.prototype.createPlaceholder = function(a, b) {
                        this.$search.attr("placeholder", b.text)
                    }, d.prototype.update = function(a, b) {
                        var c = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                    }, d.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var a = this.$search.val();
                            this.trigger("query", {
                                term: a
                            })
                        }
                        this._keyUpPrevented = !1
                    }, d.prototype.searchRemoveChoice = function(a, b) {
                        this.trigger("unselect", {
                            data: b
                        }), this.$search.val(b.text), this.handleSearch()
                    }, d.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var a = "";
                        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var b = this.$search.val().length + 1;
                            a = .75 * b + "em"
                        }
                        this.$search.css("width", a)
                    }, d
                }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                    function b() {}
                    return b.prototype.bind = function(b, c, d) {
                        var e = this,
                            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            g = ["opening", "closing", "selecting", "unselecting"];
                        b.call(this, c, d), c.on("*", function(b, c) {
                            if (-1 !== a.inArray(b, f)) {
                                c = c || {};
                                var d = a.Event("select2:" + b, {
                                    params: c
                                });
                                e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                            }
                        })
                    }, b
                }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                    function c(a) {
                        this.dict = a || {}
                    }
                    return c.prototype.all = function() {
                        return this.dict
                    }, c.prototype.get = function(a) {
                        return this.dict[a]
                    }, c.prototype.extend = function(b) {
                        this.dict = a.extend({}, b.all(), this.dict)
                    }, c._cache = {}, c.loadPath = function(a) {
                        if (!(a in c._cache)) {
                            var d = b(a);
                            c._cache[a] = d
                        }
                        return new c(c._cache[a])
                    }, c
                }), b.define("select2/diacritics", [], function() {
                    var a = {
                        "�𣺿": "A",
                        "嚗�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "�": "A",
                        "��": "A",
                        "�": "A",
                        "��": "A",
                        "廕�": "A",
                        "�": "A",
                        "ゾ": "A",
                        "��": "A",
                        "�": "A",
                        "�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廕�": "A",
                        "廎�": "A",
                        "�": "A",
                        "�": "A",
                        "漹�": "A",
                        "�蠧": "AA",
                        "�": "AE",
                        "ダ": "AE",
                        "ウ": "AE",
                        "�𢤦": "AO",
                        "�𡞱": "AU",
                        "�𤨪": "AV",
                        "�㦤": "AV",
                        "�尐": "AY",
                        "�浲": "B",
                        "嚗�": "B",
                        "廎�": "B",
                        "廎�": "B",
                        "廎�": "B",
                        "�": "B",
                        "�": "B",
                        "�": "B",
                        "�𡢄": "C",
                        "嚗�": "C",
                        "�": "C",
                        "��": "C",
                        "��": "C",
                        "��": "C",
                        "��": "C",
                        "廎�": "C",
                        "��": "C",
                        "�": "C",
                        "�䔿": "C",
                        "�𣺉": "D",
                        "嚗�": "D",
                        "廎�": "D",
                        "��": "D",
                        "廎�": "D",
                        "廎�": "D",
                        "廎�": "D",
                        "廎�": "D",
                        "��": "D",
                        "��": "D",
                        "��": "D",
                        "��": "D",
                        "�𥥖": "D",
                        "サ": "DZ",
                        "�": "DZ",
                        "ザ": "Dz",
                        "�": "Dz",
                        "�冨": "E",
                        "嚗�": "E",
                        "��": "E",
                        "��": "E",
                        "��": "E",
                        "廙�": "E",
                        "廕�": "E",
                        "廙�": "E",
                        "廙�": "E",
                        "廕�": "E",
                        "��": "E",
                        "廎�": "E",
                        "廎�": "E",
                        "��": "E",
                        "��": "E",
                        "��": "E",
                        "廕�": "E",
                        "��": "E",
                        "�": "E",
                        "�": "E",
                        "廕�": "E",
                        "廙�": "E",
                        "�": "E",
                        "廎�": "E",
                        "��": "E",
                        "廎�": "E",
                        "廎�": "E",
                        "��": "E",
                        "��": "E",
                        "�凃": "F",
                        "嚗�": "F",
                        "廎�": "F",
                        "��": "F",
                        "�𥺁": "F",
                        "�𠗠": "G",
                        "嚗�": "G",
                        "ジ": "G",
                        "��": "G",
                        "廎�": "G",
                        "��": "G",
                        "��": "G",
                        "オ": "G",
                        "罌": "G",
                        "エ": "G",
                        "��": "G",
                        "���": "G",
                        "�嚿": "G",
                        "�𠹭": "G",
                        "�䓝": "H",
                        "嚗�": "H",
                        "臚": "H",
                        "廎�": "H",
                        "廎�": "H",
                        "��": "H",
                        "廎�": "H",
                        "廎�": "H",
                        "廎�": "H",
                        "藻": "H",
                        "漹�": "H",
                        "漹�": "H",
                        "���": "H",
                        "�𠒣": "I",
                        "嚗�": "I",
                        "��": "I",
                        "��": "I",
                        "��": "I",
                        "蘑": "I",
                        "蘆": "I",
                        "蘇": "I",
                        "襤": "I",
                        "��": "I",
                        "廎�": "I",
                        "廙�": "I",
                        "��": "I",
                        "��": "I",
                        "��": "I",
                        "廙�": "I",
                        "蠔": "I",
                        "廎�": "I",
                        "��": "I",
                        "�𠒒": "J",
                        "嚗�": "J",
                        "譬": "J",
                        "��": "J",
                        "��": "K",
                        "嚗�": "K",
                        "廎�": "K",
                        "ガ": "K",
                        "廎�": "K",
                        "譯": "K",
                        "廎�": "K",
                        "��": "K",
                        "漹�": "K",
                        "��": "K",
                        "��": "K",
                        "��": "K",
                        "�攟": "K",
                        "��": "L",
                        "嚗�": "L",
                        "醴": "L",
                        "贏": "L",
                        "躅": "L",
                        "廎�": "L",
                        "廎�": "L",
                        "躉": "L",
                        "廎�": "L",
                        "廎�": "L",
                        "�": "L",
                        "�": "L",
                        "漹�": "L",
                        "漹�": "L",
                        "���": "L",
                        "��": "L",
                        "��": "L",
                        "��": "LJ",
                        "��": "Lj",
                        "��": "M",
                        "嚗�": "M",
                        "廎�": "M",
                        "廜�": "M",
                        "廜�": "M",
                        "漹�": "M",
                        "��": "M",
                        "��": "N",
                        "嚗�": "N",
                        "ゼ": "N",
                        "�": "N",
                        "��": "N",
                        "廜�": "N",
                        "��": "N",
                        "廜�": "N",
                        "�": "N",
                        "廜�": "N",
                        "廜�": "N",
                        "��": "N",
                        "��": "N",
                        "���": "N",
                        "�䣳": "N",
                        "��": "NJ",
                        "��": "Nj",
                        "��": "O",
                        "嚗�": "O",
                        "��": "O",
                        "��": "O",
                        "��": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "��": "O",
                        "廜�": "O",
                        "�": "O",
                        "廜�": "O",
                        "��": "O",
                        "廜�": "O",
                        "廜�": "O",
                        "��": "O",
                        "�": "O",
                        "�": "O",
                        "��": "O",
                        "�": "O",
                        "廙�": "O",
                        "��": "O",
                        "��": "O",
                        "��": "O",
                        "��": "O",
                        "��": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "廙�": "O",
                        "ギ": "O",
                        "グ": "O",
                        "��": "O",
                        "ヂ": "O",
                        "�": "O",
                        "��": "O",
                        "���": "O",
                        "���": "O",
                        "②": "OI",
                        "���": "OO",
                        "冈": "OU",
                        "��": "P",
                        "嚗�": "P",
                        "廜�": "P",
                        "廜�": "P",
                        "④": "P",
                        "漹�": "P",
                        "���": "P",
                        "���": "P",
                        "���": "P",
                        "��": "Q",
                        "嚗�": "Q",
                        "���": "Q",
                        "���": "Q",
                        "��": "Q",
                        "���": "R",
                        "嚗�": "R",
                        "��": "R",
                        "廜�": "R",
                        "��": "R",
                        "��": "R",
                        "��": "R",
                        "廜�": "R",
                        "廜�": "R",
                        "��": "R",
                        "廜�": "R",
                        "��": "R",
                        "漹�": "R",
                        "���": "R",
                        "�𩵼": "R",
                        "��": "R",
                        "���": "S",
                        "嚗�": "S",
                        "廕�": "S",
                        "��": "S",
                        "廜�": "S",
                        "��": "S",
                        "廜�": "S",
                        "��": "S",
                        "廜�": "S",
                        "廜�": "S",
                        "廜�": "S",
                        "��": "S",
                        "��": "S",
                        "漹�": "S",
                        "�𠸊": "S",
                        "��": "S",
                        "���": "T",
                        "嚗�": "T",
                        "廜�": "T",
                        "聾": "T",
                        "廜�": "T",
                        "��": "T",
                        "籠": "T",
                        "廜�": "T",
                        "廜�": "T",
                        "臟": "T",
                        "⑵": "T",
                        "⑷": "T",
                        "�": "T",
                        "��": "T",
                        "�銁": "TZ",
                        "���": "U",
                        "嚗�": "U",
                        "��": "U",
                        "��": "U",
                        "��": "U",
                        "襯": "U",
                        "廜�": "U",
                        "讀": "U",
                        "廜�": "U",
                        "贗": "U",
                        "��": "U",
                        "��": "U",
                        "��": "U",
                        "��": "U",
                        "��": "U",
                        "廙�": "U",
                        "躓": "U",
                        "酈": "U",
                        "��": "U",
                        "��": "U",
                        "��": "U",
                        "⑸": "U",
                        "廙�": "U",
                        "廙�": "U",
                        "廙�": "U",
                        "廙�": "U",
                        "廙�": "U",
                        "廙�": "U",
                        "廜�": "U",
                        "鑑": "U",
                        "廜�": "U",
                        "廜�": "U",
                        "�": "U",
                        "���": "V",
                        "嚗�": "V",
                        "廜�": "V",
                        "廜�": "V",
                        "⑻": "V",
                        "���": "V",
                        "�": "V",
                        "���": "VY",
                        "���": "W",
                        "嚗�": "W",
                        "廕�": "W",
                        "廕�": "W",
                        "霽": "W",
                        "廕�": "W",
                        "廕�": "W",
                        "廕�": "W",
                        "漹�": "W",
                        "���": "X",
                        "嚗�": "X",
                        "廕�": "X",
                        "廕�": "X",
                        "���": "Y",
                        "嚗�": "Y",
                        "廙�": "Y",
                        "��": "Y",
                        "韃": "Y",
                        "廙�": "Y",
                        "�": "Y",
                        "廕�": "Y",
                        "顫": "Y",
                        "廙�": "Y",
                        "廙�": "Y",
                        "⑼": "Y",
                        "��": "Y",
                        "廙�": "Y",
                        "���": "Z",
                        "嚗�": "Z",
                        "饕": "Z",
                        "廕�": "Z",
                        "驍": "Z",
                        "鬚": "Z",
                        "廕�": "Z",
                        "廕�": "Z",
                        "ⅰ": "Z",
                        "𧘇": "Z",
                        "漹�": "Z",
                        "漹�": "Z",
                        "�𢒰": "Z",
                        "���": "a",
                        "嚚�": "a",
                        "廕�": "a",
                        "��": "a",
                        "獺": "a",
                        "璽": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "瓊": "a",
                        "�": "a",
                        "�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "�": "a",
                        "ゥ": "a",
                        "瓣": "a",
                        "��": "a",
                        "廕�": "a",
                        "疇": "a",
                        "タ": "a",
                        "��": "a",
                        "�": "a",
                        "�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廕�": "a",
                        "廎�": "a",
                        "�": "a",
                        "漹�": "a",
                        "��": "a",
                        "�裵": "aa",
                        "疆": "ae",
                        "チ": "ae",
                        "ェ": "ae",
                        "�𨑳": "ao",
                        "�溸": "au",
                        "�𡠠": "av",
                        "�㚹": "av",
                        "�秣": "ay",
                        "���": "b",
                        "嚚�": "b",
                        "廎�": "b",
                        "廎�": "b",
                        "廎�": "b",
                        "�": "b",
                        "�": "b",
                        "��": "b",
                        "���": "c",
                        "嚚�": "c",
                        "��": "c",
                        "��": "c",
                        "��": "c",
                        "��": "c",
                        "癟": "c",
                        "廎�": "c",
                        "��": "c",
                        "�": "c",
                        "�暶": "c",
                        "��": "c",
                        "���": "d",
                        "嚚�": "d",
                        "廎�": "d",
                        "��": "d",
                        "廎�": "d",
                        "廎�": "d",
                        "廎�": "d",
                        "廎�": "d",
                        "��": "d",
                        "��": "d",
                        "��": "d",
                        "��": "d",
                        "�亚": "d",
                        "シ": "dz",
                        "�": "dz",
                        "���": "e",
                        "嚚�": "e",
                        "癡": "e",
                        "矇": "e",
                        "礙": "e",
                        "廙�": "e",
                        "廕�": "e",
                        "廙�": "e",
                        "廙�": "e",
                        "廕�": "e",
                        "��": "e",
                        "廎�": "e",
                        "廎�": "e",
                        "��": "e",
                        "��": "e",
                        "禱": "e",
                        "廕�": "e",
                        "��": "e",
                        "�": "e",
                        "��": "e",
                        "廕�": "e",
                        "廙�": "e",
                        "�": "e",
                        "廎�": "e",
                        "��": "e",
                        "廎�": "e",
                        "廎�": "e",
                        "��": "e",
                        "��": "e",
                        "��": "e",
                        "���": "f",
                        "嚚�": "f",
                        "廎�": "f",
                        "��": "f",
                        "�𦉘": "f",
                        "���": "g",
                        "嚚�": "g",
                        "ス": "g",
                        "��": "g",
                        "廎�": "g",
                        "��": "g",
                        "纂": "g",
                        "カ": "g",
                        "耀": "g",
                        "ォ": "g",
                        "��": "g",
                        "�鱝": "g",
                        "廘�": "g",
                        "�踎": "g",
                        "���": "h",
                        "嚚�": "h",
                        "艦": "h",
                        "廎�": "h",
                        "廎�": "h",
                        "��": "h",
                        "廎�": "h",
                        "廎�": "h",
                        "廎�": "h",
                        "廕�": "h",
                        "藹": "h",
                        "漹�": "h",
                        "漹�": "h",
                        "犮": "h",
                        "��": "hv",
                        "���": "i",
                        "嚚�": "i",
                        "穫": "i",
                        "穩": "i",
                        "簾": "i",
                        "藺": "i",
                        "蘋": "i",
                        "蘊": "i",
                        "簿": "i",
                        "廎�": "i",
                        "廙�": "i",
                        "��": "i",
                        "��": "i",
                        "��": "i",
                        "廙�": "i",
                        "蠕": "i",
                        "廎�": "i",
                        "禸": "i",
                        "覺": "i",
                        "���": "j",
                        "嚚�": "j",
                        "警": "j",
                        "ゴ": "j",
                        "��": "j",
                        "���": "k",
                        "嚚�": "k",
                        "廎�": "k",
                        "キ": "k",
                        "廎�": "k",
                        "譟": "k",
                        "廎�": "k",
                        "��": "k",
                        "漹�": "k",
                        "��": "k",
                        "��": "k",
                        "��": "k",
                        "�𢶠": "k",
                        "���": "l",
                        "嚚�": "l",
                        "�": "l",
                        "贍": "l",
                        "躂": "l",
                        "廎�": "l",
                        "廎�": "l",
                        "躁": "l",
                        "廎�": "l",
                        "廎�": "l",
                        "鰱": "l",
                        "�": "l",
                        "��": "l",
                        "伎": "l",
                        "漹�": "l",
                        "���": "l",
                        "��": "l",
                        "���": "l",
                        "��": "lj",
                        "���": "m",
                        "嚚�": "m",
                        "廎�": "m",
                        "廜�": "m",
                        "廜�": "m",
                        "伀": "m",
                        "伔": "m",
                        "���": "n",
                        "嚚�": "n",
                        "ソ": "n",
                        "�": "n",
                        "簽": "n",
                        "廜�": "n",
                        "��": "n",
                        "廜�": "n",
                        "�": "n",
                        "廜�": "n",
                        "廜�": "n",
                        "��": "n",
                        "价": "n",
                        "��": "n",
                        "���": "n",
                        "�𤟠": "n",
                        "��": "nj",
                        "���": "o",
                        "嚚�": "o",
                        "簷": "o",
                        "籀": "o",
                        "繫": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "繭": "o",
                        "廜�": "o",
                        "�": "o",
                        "廜�": "o",
                        "��": "o",
                        "廜�": "o",
                        "廜�": "o",
                        "��": "o",
                        "�": "o",
                        "�": "o",
                        "繹": "o",
                        "�": "o",
                        "廙�": "o",
                        "��": "o",
                        "��": "o",
                        "��": "o",
                        "��": "o",
                        "①": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "廙�": "o",
                        "ク": "o",
                        "ケ": "o",
                        "繪": "o",
                        "ッ": "o",
                        "��": "o",
                        "���": "o",
                        "���": "o",
                        "伂": "o",
                        "③": "oi",
                        "龱": "ou",
                        "���": "oo",
                        "���": "p",
                        "嚚�": "p",
                        "廜�": "p",
                        "廜�": "p",
                        "⑤": "p",
                        "廘�": "p",
                        "���": "p",
                        "���": "p",
                        "���": "p",
                        "���": "q",
                        "嚚�": "q",
                        "��": "q",
                        "���": "q",
                        "���": "q",
                        "�摱": "r",
                        "嚚�": "r",
                        "��": "r",
                        "廜�": "r",
                        "��": "r",
                        "��": "r",
                        "��": "r",
                        "廜�": "r",
                        "廜�": "r",
                        "��": "r",
                        "廜�": "r",
                        "��": "r",
                        "刓": "r",
                        "���": "r",
                        "�𠿬": "r",
                        "��": "r",
                        "�𤙥": "s",
                        "嚚�": "s",
                        "��": "s",
                        "��": "s",
                        "廜�": "s",
                        "��": "s",
                        "廜�": "s",
                        "禳": "s",
                        "廜�": "s",
                        "廜�": "s",
                        "廜�": "s",
                        "��": "s",
                        "��": "s",
                        "�": "s",
                        "�恢": "s",
                        "��": "s",
                        "廕�": "s",
                        "�𢭪": "t",
                        "嚚�": "t",
                        "廜�": "t",
                        "廕�": "t",
                        "聽": "t",
                        "廜�": "t",
                        "��": "t",
                        "籟": "t",
                        "廜�": "t",
                        "廜�": "t",
                        "襲": "t",
                        "⑶": "t",
                        "��": "t",
                        "漹�": "t",
                        "���": "t",
                        "�𢅺": "tz",
                        "�㨩": "u",
                        "嚚�": "u",
                        "羅": "u",
                        "繳": "u",
                        "羶": "u",
                        "觼": "u",
                        "廜�": "u",
                        "贖": "u",
                        "廜�": "u",
                        "躑": "u",
                        "羹": "u",
                        "��": "u",
                        "��": "u",
                        "��": "u",
                        "��": "u",
                        "廙�": "u",
                        "轡": "u",
                        "鑄": "u",
                        "��": "u",
                        "��": "u",
                        "��": "u",
                        "⑹": "u",
                        "廙�": "u",
                        "廙�": "u",
                        "廙�": "u",
                        "廙�": "u",
                        "廙�": "u",
                        "廙�": "u",
                        "廜�": "u",
                        "鑒": "u",
                        "廜�": "u",
                        "廜�": "u",
                        "��": "u",
                        "�𢬢": "v",
                        "嚚�": "v",
                        "廜�": "v",
                        "廜�": "v",
                        "��": "v",
                        "���": "v",
                        "��": "v",
                        "�辺": "vy",
                        "�𣑐": "w",
                        "嚚�": "w",
                        "廕�": "w",
                        "廕�": "w",
                        "霾": "w",
                        "廕�": "w",
                        "廕�": "w",
                        "廕�": "w",
                        "廕�": "w",
                        "漹�": "w",
                        "�𩣪": "x",
                        "嚚�": "x",
                        "廕�": "x",
                        "廕�": "x",
                        "�𢹸": "y",
                        "嚚�": "y",
                        "廙�": "y",
                        "羸": "y",
                        "韁": "y",
                        "廙�": "y",
                        "�": "y",
                        "廕�": "y",
                        "藩": "y",
                        "廙�": "y",
                        "廕�": "y",
                        "廙�": "y",
                        "⑽": "y",
                        "��": "y",
                        "廙�": "y",
                        "�挷": "z",
                        "嚚�": "z",
                        "驕": "z",
                        "廕�": "z",
                        "髒": "z",
                        "鱉": "z",
                        "廕�": "z",
                        "廕�": "z",
                        "ⅱ": "z",
                        "�": "z",
                        "�": "z",
                        "漹�": "z",
                        "�边": "z",
                        "�": "��",
                        "��": "��",
                        "��": "��",
                        "��": "��",
                        "峈": "��",
                        "��": "��",
                        "��": "峊",
                        "峆": "峊",
                        "��": "峏",
                        "峎": "帢",
                        "峟": "庰",
                        "峸": "庢",
                        "巹": "庣",
                        "��": "庣",
                        "��": "庣",
                        "��": "怷",
                        "��": "�",
                        "��": "�",
                        "帡": "�",
                        "��": "��",
                        "�": "�"
                    };
                    return a
                }), b.define("select2/data/base", ["../utils"], function(a) {
                    function b(a, c) {
                        b.__super__.constructor.call(this)
                    }
                    return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, b.prototype.query = function(a, b) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                        var d = b.id + "-result-";
                        return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
                    }, b
                }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, a), d.prototype.current = function(a) {
                        var b = [],
                            d = this;
                        this.$element.find(":selected").each(function() {
                            var a = c(this),
                                e = d.item(a);
                            b.push(e)
                        }), a(b)
                    }, d.prototype.select = function(a) {
                        var b = this;
                        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(d) {
                            var e = [];
                            a = [a], a.push.apply(a, d);
                            for (var f = 0; f < a.length; f++) {
                                var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        });
                        else {
                            var d = a.id;
                            this.$element.val(d), this.$element.trigger("change")
                        }
                    }, d.prototype.unselect = function(a) {
                        var b = this;
                        if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                            for (var e = [], f = 0; f < d.length; f++) {
                                var g = d[f].id;
                                g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        })
                    }, d.prototype.bind = function(a, b) {
                        var c = this;
                        this.container = a, a.on("select", function(a) {
                            c.select(a.data)
                        }), a.on("unselect", function(a) {
                            c.unselect(a.data)
                        })
                    }, d.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            c.removeData(this, "data")
                        })
                    }, d.prototype.query = function(a, b) {
                        var d = [],
                            e = this,
                            f = this.$element.children();
                        f.each(function() {
                            var b = c(this);
                            if (b.is("option") || b.is("optgroup")) {
                                var f = e.item(b),
                                    g = e.matches(a, f);
                                null !== g && d.push(g)
                            }
                        }), b({
                            results: d
                        })
                    }, d.prototype.addOptions = function(a) {
                        b.appendMany(this.$element, a)
                    }, d.prototype.option = function(a) {
                        var b;
                        a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                        var d = c(b),
                            e = this._normalizeItem(a);
                        return e.element = b, c.data(b, "data", e), d
                    }, d.prototype.item = function(a) {
                        var b = {};
                        if (b = c.data(a[0], "data"), null != b) return b;
                        if (a.is("option")) b = {
                            id: a.val(),
                            text: a.text(),
                            disabled: a.prop("disabled"),
                            selected: a.prop("selected"),
                            title: a.prop("title")
                        };
                        else if (a.is("optgroup")) {
                            b = {
                                text: a.prop("label"),
                                children: [],
                                title: a.prop("title")
                            };
                            for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                var g = c(d[f]),
                                    h = this.item(g);
                                e.push(h)
                            }
                            b.children = e
                        }
                        return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                    }, d.prototype._normalizeItem = function(a) {
                        c.isPlainObject(a) || (a = {
                            id: a,
                            text: a
                        }), a = c.extend({}, {
                            text: ""
                        }, a);
                        var b = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                    }, d.prototype.matches = function(a, b) {
                        var c = this.options.get("matcher");
                        return c(a, b)
                    }, d
                }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        var c = b.get("data") || [];
                        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                    }
                    return b.Extend(d, a), d.prototype.select = function(a) {
                        var b = this.$element.find("option").filter(function(b, c) {
                            return c.value == a.id.toString()
                        });
                        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                    }, d.prototype.convertToOptions = function(a) {
                        function d(a) {
                            return function() {
                                return c(this).val() == a.id
                            }
                        }
                        for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                                return e.item(c(this)).id
                            }).get(), h = [], i = 0; i < a.length; i++) {
                            var j = this._normalizeItem(a[i]);
                            if (c.inArray(j.id, g) >= 0) {
                                var k = f.filter(d(j)),
                                    l = this.item(k),
                                    m = c.extend(!0, {}, j, l),
                                    n = this.option(m);
                                k.replaceWith(n)
                            } else {
                                var o = this.option(j);
                                if (j.children) {
                                    var p = this.convertToOptions(j.children);
                                    b.appendMany(o, p)
                                }
                                h.push(o)
                            }
                        }
                        return h
                    }, d
                }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                    }
                    return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                        var b = {
                            data: function(a) {
                                return c.extend({}, a, {
                                    q: a.term
                                })
                            },
                            transport: function(a, b, d) {
                                var e = c.ajax(a);
                                return e.then(b), e.fail(d), e
                            }
                        };
                        return c.extend({}, b, a, !0)
                    }, d.prototype.processResults = function(a) {
                        return a
                    }, d.prototype.query = function(a, b) {
                        function d() {
                            var d = f.transport(f, function(d) {
                                var f = e.processResults(d, a);
                                e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                            }, function() {
                                d.status && "0" === d.status || e.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            e._request = d
                        }
                        var e = this;
                        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var f = c.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                    }, d
                }), b.define("select2/data/tags", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e = d.get("tags"),
                            f = d.get("createTag");
                        void 0 !== f && (this.createTag = f);
                        var g = d.get("insertTag");
                        if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                            for (var h = 0; h < e.length; h++) {
                                var i = e[h],
                                    j = this._normalizeItem(i),
                                    k = this.option(j);
                                this.$element.append(k)
                            }
                    }
                    return b.prototype.query = function(a, b, c) {
                        function d(a, f) {
                            for (var g = a.results, h = 0; h < g.length; h++) {
                                var i = g[h],
                                    j = null != i.children && !d({
                                        results: i.children
                                    }, !0),
                                    k = i.text === b.term;
                                if (k || j) return f ? !1 : (a.data = g, void c(a))
                            }
                            if (f) return !0;
                            var l = e.createTag(b);
                            if (null != l) {
                                var m = e.option(l);
                                m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                            }
                            a.results = g, c(a)
                        }
                        var e = this;
                        return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                    }, b.prototype.createTag = function(b, c) {
                        var d = a.trim(c.term);
                        return "" === d ? null : {
                            id: d,
                            text: d
                        }
                    }, b.prototype.insertTag = function(a, b, c) {
                        b.unshift(c)
                    }, b.prototype._removeOldTags = function(b) {
                        var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        c.each(function() {
                            this.selected || a(this).remove()
                        })
                    }, b
                }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                    function b(a, b, c) {
                        var d = c.get("tokenizer");
                        void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                    }
                    return b.prototype.bind = function(a, b, c) {
                        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                    }, b.prototype.query = function(b, c, d) {
                        function e(b) {
                            var c = g._normalizeItem(b),
                                d = g.$element.find("option").filter(function() {
                                    return a(this).val() === c.id
                                });
                            if (!d.length) {
                                var e = g.option(c);
                                e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e])
                            }
                            f(c)
                        }

                        function f(a) {
                            g.trigger("select", {
                                data: a
                            })
                        }
                        var g = this;
                        c.term = c.term || "";
                        var h = this.tokenizer(c, this.options, e);
                        h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                    }, b.prototype.tokenizer = function(b, c, d, e) {
                        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                                return {
                                    id: a.term,
                                    text: a.term
                                }
                            }; h < g.length;) {
                            var j = g[h];
                            if (-1 !== a.inArray(j, f)) {
                                var k = g.substr(0, h),
                                    l = a.extend({}, c, {
                                        term: k
                                    }),
                                    m = i(l);
                                null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                            } else h++
                        }
                        return {
                            term: g
                        }
                    }, b
                }), b.define("select2/data/minimumInputLength", [], function() {
                    function a(a, b, c) {
                        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: b.term,
                                params: b
                            }
                        }) : void a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumInputLength", [], function() {
                    function a(a, b, c) {
                        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: b.term,
                                params: b
                            }
                        }) : void a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumSelectionLength", [], function() {
                    function a(a, b, c) {
                        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        var d = this;
                        this.current(function(e) {
                            var f = null != e ? e.length : 0;
                            return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: d.maximumSelectionLength
                                }
                            }) : void a.call(d, b, c)
                        })
                    }, a
                }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                    function c(a, b) {
                        this.$element = a, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                    }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, c
                }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                    function c() {}
                    return c.prototype.render = function(b) {
                        var c = b.call(this),
                            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                    }, c.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), this.$search.on("keydown", function(a) {
                            e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                        }), this.$search.on("input", function(b) {
                            a(this).off("keyup")
                        }), this.$search.on("keyup input", function(a) {
                            e.handleSearch(a)
                        }), c.on("open", function() {
                            e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                                e.$search.focus()
                            }, 0)
                        }), c.on("close", function() {
                            e.$search.attr("tabindex", -1), e.$search.val("")
                        }), c.on("focus", function() {
                            c.isOpen() && e.$search.focus()
                        }), c.on("results:all", function(a) {
                            if (null == a.query.term || "" === a.query.term) {
                                var b = e.showSearch(a);
                                b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, c.prototype.handleSearch = function(a) {
                        if (!this._keyUpPrevented) {
                            var b = this.$search.val();
                            this.trigger("query", {
                                term: b
                            })
                        }
                        this._keyUpPrevented = !1
                    }, c.prototype.showSearch = function(a, b) {
                        return !0
                    }, c
                }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                    function a(a, b, c, d) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                    }
                    return a.prototype.append = function(a, b) {
                        b.results = this.removePlaceholder(b.results), a.call(this, b)
                    }, a.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, a.prototype.removePlaceholder = function(a, b) {
                        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                            var e = b[d];
                            this.placeholder.id === e.id && c.splice(d, 1)
                        }
                        return c
                    }, a
                }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                    function b(a, b, c, d) {
                        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return b.prototype.append = function(a, b) {
                        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                    }, b.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), c.on("query", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), c.on("query:append", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), this.$results.on("scroll", function() {
                            var b = a.contains(document.documentElement, e.$loadingMore[0]);
                            if (!e.loading && b) {
                                var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                    d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                                c + 50 >= d && e.loadMore()
                            }
                        })
                    }, b.prototype.loadMore = function() {
                        this.loading = !0;
                        var b = a.extend({}, {
                            page: 1
                        }, this.lastParams);
                        b.page++, this.trigger("query:append", b)
                    }, b.prototype.showLoadingMore = function(a, b) {
                        return b.pagination && b.pagination.more
                    }, b.prototype.createLoadingMore = function() {
                        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            c = this.options.get("translations").get("loadingMore");
                        return b.html(c(this.lastParams)), b
                    }, b
                }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                    function c(b, c, d) {
                        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                    }
                    return c.prototype.bind = function(a, b, c) {
                        var d = this,
                            e = !1;
                        a.call(this, b, c), b.on("open", function() {
                            d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }), b.on("results:append", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }))
                        }), b.on("close", function() {
                            d._hideDropdown(), d._detachPositioningHandler(b)
                        }), this.$dropdownContainer.on("mousedown", function(a) {
                            a.stopPropagation()
                        })
                    }, c.prototype.destroy = function(a) {
                        a.call(this), this.$dropdownContainer.remove()
                    }, c.prototype.position = function(a, b, c) {
                        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = c
                    }, c.prototype.render = function(b) {
                        var c = a("<span></span>"),
                            d = b.call(this);
                        return c.append(d), this.$dropdownContainer = c, c
                    }, c.prototype._hideDropdown = function(a) {
                        this.$dropdownContainer.detach()
                    }, c.prototype._attachPositioningHandler = function(c, d) {
                        var e = this,
                            f = "scroll.select2." + d.id,
                            g = "resize.select2." + d.id,
                            h = "orientationchange.select2." + d.id,
                            i = this.$container.parents().filter(b.hasScroll);
                        i.each(function() {
                            a(this).data("select2-scroll-position", {
                                x: a(this).scrollLeft(),
                                y: a(this).scrollTop()
                            })
                        }), i.on(f, function(b) {
                            var c = a(this).data("select2-scroll-position");
                            a(this).scrollTop(c.y)
                        }), a(window).on(f + " " + g + " " + h, function(a) {
                            e._positionDropdown(), e._resizeDropdown()
                        })
                    }, c.prototype._detachPositioningHandler = function(c, d) {
                        var e = "scroll.select2." + d.id,
                            f = "resize.select2." + d.id,
                            g = "orientationchange.select2." + d.id,
                            h = this.$container.parents().filter(b.hasScroll);
                        h.off(e), a(window).off(e + " " + f + " " + g)
                    }, c.prototype._positionDropdown = function() {
                        var b = a(window),
                            c = this.$dropdown.hasClass("select2-dropdown--above"),
                            d = this.$dropdown.hasClass("select2-dropdown--below"),
                            e = null,
                            f = this.$container.offset();
                        f.bottom = f.top + this.$container.outerHeight(!1);
                        var g = {
                            height: this.$container.outerHeight(!1)
                        };
                        g.top = f.top, g.bottom = f.top + g.height;
                        var h = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            i = {
                                top: b.scrollTop(),
                                bottom: b.scrollTop() + b.height()
                            },
                            j = i.top < f.top - h.height,
                            k = i.bottom > f.bottom + h.height,
                            l = {
                                left: f.left,
                                top: g.bottom
                            },
                            m = this.$dropdownParent;
                        "static" === m.css("position") && (m = m.offsetParent());
                        var n = m.offset();
                        l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                    }, c.prototype._resizeDropdown = function() {
                        var a = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                    }, c.prototype._showDropdown = function(a) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, c
                }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function a(b) {
                        for (var c = 0, d = 0; d < b.length; d++) {
                            var e = b[d];
                            e.children ? c += a(e.children) : c++
                        }
                        return c
                    }

                    function b(a, b, c, d) {
                        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                    }
                    return b.prototype.showSearch = function(b, c) {
                        return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
                    }, b
                }), b.define("select2/dropdown/selectOnClose", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("close", function(a) {
                            d._handleSelectOnClose(a)
                        })
                    }, a.prototype._handleSelectOnClose = function(a, b) {
                        if (b && null != b.originalSelect2Event) {
                            var c = b.originalSelect2Event;
                            if ("select" === c._type || "unselect" === c._type) return
                        }
                        var d = this.getHighlightedResults();
                        if (!(d.length < 1)) {
                            var e = d.data("data");
                            null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                                data: e
                            })
                        }
                    }, a
                }), b.define("select2/dropdown/closeOnSelect", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("select", function(a) {
                            d._selectTriggered(a)
                        }), b.on("unselect", function(a) {
                            d._selectTriggered(a)
                        })
                    }, a.prototype._selectTriggered = function(a, b) {
                        var c = b.originalEvent;
                        c && c.ctrlKey || this.trigger("close", {
                            originalEvent: c,
                            originalSelect2Event: b
                        })
                    }, a
                }), b.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(a) {
                            var b = a.input.length - a.maximum,
                                c = "Please delete " + b + " character";
                            return 1 != b && (c += "s"), c
                        },
                        inputTooShort: function(a) {
                            var b = a.minimum - a.input.length,
                                c = "Please enter " + b + " or more characters";
                            return c
                        },
                        loadingMore: function() {
                            return "Loading more results��"
                        },
                        maximumSelected: function(a) {
                            var b = "You can only select " + a.maximum + " item";
                            return 1 != a.maximum && (b += "s"), b
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching��"
                        }
                    }
                }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                    function D() {
                        this.reset()
                    }
                    D.prototype.apply = function(l) {
                        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                            if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                var C = b(l.amdBase + "compat/query");
                                l.dataAdapter = j.Decorate(l.dataAdapter, C)
                            }
                            if (null != l.initSelection) {
                                var D = b(l.amdBase + "compat/initSelection");
                                l.dataAdapter = j.Decorate(l.dataAdapter, D)
                            }
                        }
                        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                            if (l.multiple) l.dropdownAdapter = u;
                            else {
                                var E = j.Decorate(u, v);
                                l.dropdownAdapter = E
                            }
                            if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                var F = b(l.amdBase + "compat/dropdownCss");
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                            }
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                        }
                        if (null == l.selectionAdapter) {
                            if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                var G = b(l.amdBase + "compat/containerCss");
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                            }
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                        }
                        if ("string" == typeof l.language)
                            if (l.language.indexOf("-") > 0) {
                                var H = l.language.split("-"),
                                    I = H[0];
                                l.language = [l.language, I]
                            } else l.language = [l.language];
                        if (a.isArray(l.language)) {
                            var J = new k;
                            l.language.push("en");
                            for (var K = l.language, L = 0; L < K.length; L++) {
                                var M = K[L],
                                    N = {};
                                try {
                                    N = k.loadPath(M)
                                } catch (O) {
                                    try {
                                        M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                    } catch (P) {
                                        l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                J.extend(N)
                            }
                            l.translations = J
                        } else {
                            var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                R = new k(l.language);
                            R.extend(Q), l.translations = R
                        }
                        return l
                    }, D.prototype.reset = function() {
                        function b(a) {
                            function b(a) {
                                return l[a] || a
                            }
                            return a.replace(/[^\u0000-\u007E]/g, b)
                        }

                        function c(d, e) {
                            if ("" === a.trim(d.term)) return e;
                            if (e.children && e.children.length > 0) {
                                for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                    var h = e.children[g],
                                        i = c(d, h);
                                    null == i && f.children.splice(g, 1)
                                }
                                return f.children.length > 0 ? f : c(d, f)
                            }
                            var j = b(e.text).toUpperCase(),
                                k = b(d.term).toUpperCase();
                            return j.indexOf(k) > -1 ? e : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: j.escapeMarkup,
                            language: C,
                            matcher: c,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(a) {
                                return a
                            },
                            templateResult: function(a) {
                                return a.text
                            },
                            templateSelection: function(a) {
                                return a.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, D.prototype.set = function(b, c) {
                        var d = a.camelCase(b),
                            e = {};
                        e[d] = c;
                        var f = j._convertData(e);
                        a.extend(this.defaults, f)
                    };
                    var E = new D;
                    return E
                }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                    function e(b, e) {
                        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                            var f = a(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                        }
                    }
                    return e.prototype.fromElement = function(a) {
                        var c = ["select2"];
                        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                        var e = {};
                        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                        var f = b.extend(!0, {}, e);
                        f = d._convertData(f);
                        for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                        return this
                    }, e.prototype.get = function(a) {
                        return this.options[a]
                    }, e.prototype.set = function(a, b) {
                        this.options[a] = b
                    }, e
                }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                    var e = function(a, c) {
                        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                        var d = a.attr("tabindex") || 0;
                        a.data("old-tabindex", d), a.attr("tabindex", "-1");
                        var f = this.options.get("dataAdapter");
                        this.dataAdapter = new f(a, this.options);
                        var g = this.render();
                        this._placeContainer(g);
                        var h = this.options.get("selectionAdapter");
                        this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                        var i = this.options.get("dropdownAdapter");
                        this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                        var j = this.options.get("resultsAdapter");
                        this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var k = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                            k.trigger("selection:update", {
                                data: a
                            })
                        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                    };
                    return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                        var b = "";
                        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                    }, e.prototype._placeContainer = function(a) {
                        a.insertAfter(this.$element);
                        var b = this._resolveWidth(this.$element, this.options.get("width"));
                        null != b && a.css("width", b)
                    }, e.prototype._resolveWidth = function(a, b) {
                        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == b) {
                            var d = this._resolveWidth(a, "style");
                            return null != d ? d : this._resolveWidth(a, "element")
                        }
                        if ("element" == b) {
                            var e = a.outerWidth(!1);
                            return 0 >= e ? "auto" : e + "px"
                        }
                        if ("style" == b) {
                            var f = a.attr("style");
                            if ("string" != typeof f) return null;
                            for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                                var j = g[h].replace(/\s/g, ""),
                                    k = j.match(c);
                                if (null !== k && k.length >= 1) return k[1]
                            }
                            return null
                        }
                        return b
                    }, e.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, e.prototype._registerDomEvents = function() {
                        var b = this;
                        this.$element.on("change.select2", function() {
                            b.dataAdapter.current(function(a) {
                                b.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }), this.$element.on("focus.select2", function(a) {
                            b.trigger("focus", a)
                        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != d ? (this._observer = new d(function(c) {
                            a.each(c, b._syncA), a.each(c, b._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                    }, e.prototype._registerDataEvents = function() {
                        var a = this;
                        this.dataAdapter.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerSelectionEvents = function() {
                        var b = this,
                            c = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            b.toggleDropdown()
                        }), this.selection.on("focus", function(a) {
                            b.focus(a)
                        }), this.selection.on("*", function(d, e) {
                            -1 === a.inArray(d, c) && b.trigger(d, e)
                        })
                    }, e.prototype._registerDropdownEvents = function() {
                        var a = this;
                        this.dropdown.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerResultsEvents = function() {
                        var a = this;
                        this.results.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerEvents = function() {
                        var a = this;
                        this.on("open", function() {
                            a.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            a.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            a.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            a.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            a.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(b) {
                            a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                                a.trigger("results:all", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("query:append", function(b) {
                            this.dataAdapter.query(b, function(c) {
                                a.trigger("results:append", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("keypress", function(b) {
                            var c = b.which;
                            a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                        })
                    }, e.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, e.prototype._syncSubtree = function(a, b) {
                        var c = !1,
                            d = this;
                        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                            if (b)
                                if (b.addedNodes && b.addedNodes.length > 0)
                                    for (var e = 0; e < b.addedNodes.length; e++) {
                                        var f = b.addedNodes[e];
                                        f.selected && (c = !0)
                                    } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                                else c = !0;
                            c && this.dataAdapter.current(function(a) {
                                d.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }
                    }, e.prototype.trigger = function(a, b) {
                        var c = e.__super__.trigger,
                            d = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === b && (b = {}), a in d) {
                            var f = d[a],
                                g = {
                                    prevented: !1,
                                    name: a,
                                    args: b
                                };
                            if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                        }
                        c.call(this, a, b)
                    }, e.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, e.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, e.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, e.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, e.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, e.prototype.focus = function(a) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, e.prototype.enable = function(a) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                        var b = !a[0];
                        this.$element.prop("disabled", b)
                    }, e.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var a = [];
                        return this.dataAdapter.current(function(b) {
                            a = b
                        }), a
                    }, e.prototype.val = function(b) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                        var c = b[0];
                        a.isArray(c) && (c = a.map(c, function(a) {
                            return a.toString()
                        })), this.$element.val(c).trigger("change")
                    }, e.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
                    }, e.prototype.render = function() {
                        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                    }, e
                }), b.define("select2/compat/utils", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e, f, g = [];
                        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && g.push(this)
                        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f))
                        })), b.attr("class", g.join(" "))
                    }
                    return {
                        syncCssClasses: b
                    }
                }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("containerCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptContainerCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("containerCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("dropdownCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptDropdownCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("dropdownCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                    function b(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        var d = this;
                        return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) {
                            d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                        })
                    }, b
                }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                    function b(a, b, c) {
                        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        function d(b, c) {
                            var e = [];
                            return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                        }
                        for (var e = [], f = 0; f < this._currentData.length; f++) {
                            var g = this._currentData[f];
                            e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                        }
                        c(e)
                    }, b.prototype.select = function(b, c) {
                        if (this.options.get("multiple")) {
                            var d = this.$element.val();
                            d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                        } else this.current(function(b) {
                            a.map(b, function(a) {
                                a.selected = !1
                            })
                        }), this.$element.val(c.id), this.$element.trigger("change")
                    }, b.prototype.unselect = function(a, b) {
                        var c = this;
                        b.selected = !1, this.current(function(a) {
                            for (var d = [], e = 0; e < a.length; e++) {
                                var f = a[e];
                                b.id != f.id && d.push(f.id)
                            }
                            c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                        })
                    }, b.prototype.query = function(a, b, c) {
                        for (var d = [], e = 0; e < this._currentData.length; e++) {
                            var f = this._currentData[e],
                                g = this.matches(b, f);
                            null !== g && d.push(g)
                        }
                        c({
                            results: d
                        })
                    }, b.prototype.addOptions = function(b, c) {
                        var d = a.map(c, function(b) {
                            return a.data(b[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, d)
                    }, b
                }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                    function b(b) {
                        function c(c, d) {
                            var e = a.extend(!0, {}, d);
                            if (null == c.term || "" === a.trim(c.term)) return e;
                            if (d.children) {
                                for (var f = d.children.length - 1; f >= 0; f--) {
                                    var g = d.children[f],
                                        h = b(c.term, g.text, g);
                                    h || e.children.splice(f, 1)
                                }
                                if (e.children.length > 0) return e
                            }
                            return b(c.term, d.text, d) ? e : null
                        }
                        return c
                    }
                    return b
                }), b.define("select2/compat/query", [], function() {
                    function a(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        b.callback = c;
                        var d = this.options.get("query");
                        d.call(null, b)
                    }, a
                }), b.define("select2/dropdown/attachContainer", [], function() {
                    function a(a, b, c) {
                        a.call(this, b, c)
                    }
                    return a.prototype.position = function(a, b, c) {
                        var d = c.find(".dropdown-wrapper");
                        d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                    }, a
                }), b.define("select2/dropdown/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }), b.define("select2/selection/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }),
                function(c) {
                    "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                }(function(a) {
                    function b(b) {
                        var g = b || window.event,
                            h = i.call(arguments, 1),
                            j = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0;
                        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                            if (1 === g.deltaMode) {
                                var q = a.data(this, "mousewheel-line-height");
                                j *= q, m *= q, l *= q
                            } else if (2 === g.deltaMode) {
                                var r = a.data(this, "mousewheel-page-height");
                                j *= r, m *= r, l *= r
                            }
                            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                var s = this.getBoundingClientRect();
                                o = b.clientX - s.left, p = b.clientY - s.top
                            }
                            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                        }
                    }

                    function c() {
                        f = null
                    }

                    function d(a, b) {
                        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
                    }
                    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        i = Array.prototype.slice;
                    if (a.event.fixHooks)
                        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                    var k = a.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                            else this.onmousewheel = b;
                            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                            else this.onmousewheel = null;
                            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(b) {
                            var c = a(b),
                                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(b) {
                            return a(b).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    a.fn.extend({
                        mousewheel: function(a) {
                            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(a) {
                            return this.unbind("mousewheel", a)
                        }
                    })
                }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                    if (null == a.fn.select2) {
                        var e = ["open", "close", "destroy"];
                        a.fn.select2 = function(b) {
                            if (b = b || {}, "object" == typeof b) return this.each(function() {
                                var d = a.extend(!0, {}, b);
                                new c(a(this), d)
                            }), this;
                            if ("string" == typeof b) {
                                var d, f = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var c = a(this).data("select2");
                                    null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                                }), a.inArray(b, e) > -1 ? this : d
                            }
                            throw new Error("Invalid arguments for Select2: " + b)
                        }
                    }
                    return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                }), {
                    define: b.define,
                    require: b.require
                }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});
//! moment.js
//! version : 2.10.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return Dc.apply(null, arguments)
    }

    function b(a) {
        Dc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return za(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.nullInput && !b.invalidFormat && !b.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(0 / 0);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Fc.length > 0)
            for (c in Fc) d = Fc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }

    function n(b) {
        m(this, b), this._d = new Date(+b._d), Gc === !1 && (Gc = !0, a.updateOffset(this), Gc = !1)
    }

    function o(a) {
        return a instanceof n || null != a && null != a._isAMomentObject
    }

    function p(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function q(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && p(a[d]) !== p(b[d])) && g++;
        return g + f
    }

    function r() {}

    function s(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function t(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = s(a[f]).split("-"), b = e.length, c = s(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = u(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && q(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function u(a) {
        var b = null;
        if (!Hc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Ec._abbr, require("./locale/" + a), v(b)
        } catch (c) {}
        return Hc[a]
    }

    function v(a, b) {
        var c;
        return a && (c = "undefined" == typeof b ? x(a) : w(a, b), c && (Ec = c)), Ec._abbr
    }

    function w(a, b) {
        return null !== b ? (b.abbr = a, Hc[a] || (Hc[a] = new r), Hc[a].set(b), v(a), Hc[a]) : (delete Hc[a], null)
    }

    function x(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ec;
        if (!c(a)) {
            if (b = u(a)) return b;
            a = [a]
        }
        return t(a)
    }

    function y(a, b) {
        var c = a.toLowerCase();
        Ic[c] = Ic[c + "s"] = Ic[b] = a
    }

    function z(a) {
        return "string" == typeof a ? Ic[a] || Ic[a.toLowerCase()] : void 0
    }

    function A(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = z(c), b && (d[b] = a[c]));
        return d
    }

    function B(b, c) {
        return function(d) {
            return null != d ? (D(this, b, d), a.updateOffset(this, c), this) : C(this, b)
        }
    }

    function C(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function D(a, b, c) {
        return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function E(a, b) {
        var c;
        if ("object" == typeof a)
            for (c in a) this.set(c, a[c]);
        else if (a = z(a), "function" == typeof this[a]) return this[a](b);
        return this
    }

    function F(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }

    function G(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Mc[a] = e), b && (Mc[b[0]] = function() {
            return F(e.apply(this, arguments), b[1], b[2])
        }), c && (Mc[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function H(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function I(a) {
        var b, c, d = a.match(Jc);
        for (b = 0, c = d.length; c > b; b++) Mc[d[b]] ? d[b] = Mc[d[b]] : d[b] = H(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function J(a, b) {
        return a.isValid() ? (b = K(b, a.localeData()), Lc[b] || (Lc[b] = I(b)), Lc[b](a)) : a.localeData().invalidDate()
    }

    function K(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Kc.lastIndex = 0; d >= 0 && Kc.test(a);) a = a.replace(Kc, c), Kc.lastIndex = 0, d -= 1;
        return a
    }

    function L(a, b, c) {
        _c[a] = "function" == typeof b ? b : function(a) {
            return a && c ? c : b
        }
    }

    function M(a, b) {
        return f(_c, a) ? _c[a](b._strict, b._locale) : new RegExp(N(a))
    }

    function N(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function O(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                c[b] = p(a)
            }), c = 0; c < a.length; c++) ad[a[c]] = d
    }

    function P(a, b) {
        O(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function Q(a, b, c) {
        null != b && f(ad, a) && ad[a](b, c._a, c, a)
    }

    function R(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function S(a) {
        return this._months[a.month()]
    }

    function T(a) {
        return this._monthsShort[a.month()]
    }

    function U(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function V(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), R(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function W(b) {
        return null != b ? (V(this, b), a.updateOffset(this, !0), this) : C(this, "Month")
    }

    function X() {
        return R(this.year(), this.month())
    }

    function Y(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[cd] < 0 || c[cd] > 11 ? cd : c[dd] < 1 || c[dd] > R(c[bd], c[cd]) ? dd : c[ed] < 0 || c[ed] > 24 || 24 === c[ed] && (0 !== c[fd] || 0 !== c[gd] || 0 !== c[hd]) ? ed : c[fd] < 0 || c[fd] > 59 ? fd : c[gd] < 0 || c[gd] > 59 ? gd : c[hd] < 0 || c[hd] > 999 ? hd : -1, j(a)._overflowDayOfYear && (bd > b || b > dd) && (b = dd), j(a).overflow = b), a
    }

    function Z(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function $(a, b) {
        var c = !0,
            d = a + "\n" + (new Error).stack;
        return g(function() {
            return c && (Z(d), c = !1), b.apply(this, arguments)
        }, b)
    }

    function _(a, b) {
        kd[a] || (Z(b), kd[a] = !0)
    }

    function aa(a) {
        var b, c, d = a._i,
            e = ld.exec(d);
        if (e) {
            for (j(a).iso = !0, b = 0, c = md.length; c > b; b++)
                if (md[b][1].exec(d)) {
                    a._f = md[b][0] + (e[6] || " ");
                    break
                }
            for (b = 0, c = nd.length; c > b; b++)
                if (nd[b][1].exec(d)) {
                    a._f += nd[b][0];
                    break
                }
            d.match(Yc) && (a._f += "Z"), ta(a)
        } else a._isValid = !1
    }

    function ba(b) {
        var c = od.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (aa(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ca(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function da(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function ea(a) {
        return fa(a) ? 366 : 365
    }

    function fa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ga() {
        return fa(this.year())
    }

    function ha(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = Aa(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function ia(a) {
        return ha(a, this._week.dow, this._week.doy).week
    }

    function ja() {
        return this._week.dow
    }

    function ka() {
        return this._week.doy
    }

    function la(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function ma(a) {
        var b = ha(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function na(a, b, c, d, e) {
        var f, g, h = da(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : ea(a - 1) + g
        }
    }

    function oa(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function pa(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function qa(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function ra(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = qa(a), a._w && null == a._a[dd] && null == a._a[cd] && sa(a), a._dayOfYear && (e = pa(a._a[bd], d[bd]), a._dayOfYear > ea(e) && (j(a)._overflowDayOfYear = !0), c = da(e, 0, a._dayOfYear), a._a[cd] = c.getUTCMonth(), a._a[dd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[ed] && 0 === a._a[fd] && 0 === a._a[gd] && 0 === a._a[hd] && (a._nextDay = !0, a._a[ed] = 0), a._d = (a._useUTC ? da : ca).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ed] = 24)
        }
    }

    function sa(a) {
        var b, c, d, e, f, g, h;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = pa(b.GG, a._a[bd], ha(Aa(), 1, 4).year), d = pa(b.W, 1), e = pa(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = pa(b.gg, a._a[bd], ha(Aa(), f, g).year), d = pa(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = na(c, d, e, g, f), a._a[bd] = h.year, a._dayOfYear = h.dayOfYear
    }

    function ta(b) {
        if (b._f === a.ISO_8601) return void aa(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            k = 0;
        for (e = K(b._f, b._locale).match(Jc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(M(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Mc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), Q(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ed] <= 12 && b._a[ed] > 0 && (j(b).bigHour = void 0), b._a[ed] = ua(b._locale, b._a[ed], b._meridiem), ra(b), Y(b)
    }

    function ua(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function va(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(0 / 0));
        for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], ta(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function wa(a) {
        if (!a._d) {
            var b = A(a._i);
            a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ra(a)
        }
    }

    function xa(a) {
        var b, e = a._i,
            f = a._f;
        return a._locale = a._locale || x(a._l), null === e || void 0 === f && "" === e ? l({
            nullInput: !0
        }) : ("string" == typeof e && (a._i = e = a._locale.preparse(e)), o(e) ? new n(Y(e)) : (c(f) ? va(a) : f ? ta(a) : d(e) ? a._d = e : ya(a), b = new n(Y(a)), b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b))
    }

    function ya(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ba(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10)
        }), ra(b)) : "object" == typeof f ? wa(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function za(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, xa(f)
    }

    function Aa(a, b, c, d) {
        return za(a, b, c, d, !1)
    }

    function Ba(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
        for (d = b[0], e = 1; e < b.length; ++e) b[e][a](d) && (d = b[e]);
        return d
    }

    function Ca() {
        var a = [].slice.call(arguments, 0);
        return Ba("isBefore", a)
    }

    function Da() {
        var a = [].slice.call(arguments, 0);
        return Ba("isAfter", a)
    }

    function Ea(a) {
        var b = A(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = x(), this._bubble()
    }

    function Fa(a) {
        return a instanceof Ea
    }

    function Ga(a, b) {
        G(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + F(~~(a / 60), 2) + b + F(~~a % 60, 2)
        })
    }

    function Ha(a) {
        var b = (a || "").match(Yc) || [],
            c = b[b.length - 1] || [],
            d = (c + "").match(td) || ["-", 0, 0],
            e = +(60 * d[1]) + p(d[2]);
        return "+" === d[0] ? e : -e
    }

    function Ia(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Aa(b).local();
        return c._isUTC ? Aa(b).zone(c._offset || 0) : Aa(b).local()
    }

    function Ja(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Ka(b, c) {
        var d, e = this._offset || 0;
        return null != b ? ("string" == typeof b && (b = Ha(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this)
    }

    function La(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Ma(a) {
        return this.utcOffset(0, a)
    }

    function Na(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), this
    }

    function Oa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(this._i)), this
    }

    function Pa(a) {
        return a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
    }

    function Qa() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ra() {
        if (this._a) {
            var a = this._isUTC ? h(this._a) : Aa(this._a);
            return this.isValid() && q(this._a, a.toArray()) > 0
        }
        return !1
    }

    function Sa() {
        return !this._isUTC
    }

    function Ta() {
        return this._isUTC
    }

    function Ua() {
        return this._isUTC && 0 === this._offset
    }

    function Va(a, b) {
        var c, d, e, g = a,
            h = null;
        return Fa(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = ud.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: p(h[dd]) * c,
            h: p(h[ed]) * c,
            m: p(h[fd]) * c,
            s: p(h[gd]) * c,
            ms: p(h[hd]) * c
        }) : (h = vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Wa(h[2], c),
            M: Wa(h[3], c),
            d: Wa(h[4], c),
            h: Wa(h[5], c),
            m: Wa(h[6], c),
            s: Wa(h[7], c),
            w: Wa(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function Wa(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Xa(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Ya(a, b) {
        var c;
        return b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function Za(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (_(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), this
        }
    }

    function $a(b, c, d, e) {
        var f = c._milliseconds,
            g = c._days,
            h = c._months;
        e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && D(b, "Date", C(b, "Date") + g * d), h && V(b, C(b, "Month") + h * d), e && a.updateOffset(b, g || h)
    }

    function _a(a) {
        var b = a || Aa(),
            c = Ia(b, this).startOf("day"),
            d = this.diff(c, "days", !0),
            e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(e, this, Aa(b)))
    }

    function ab() {
        return new n(this)
    }

    function bb(a, b) {
        var c;
        return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this > +a) : (c = o(a) ? +a : +Aa(a), c < +this.clone().startOf(b))
    }

    function cb(a, b) {
        var c;
        return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +a > +this) : (c = o(a) ? +a : +Aa(a), +this.clone().endOf(b) < c)
    }

    function db(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function eb(a, b) {
        var c;
        return b = z(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this === +a) : (c = +Aa(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    }

    function fb(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function gb(a, b, c) {
        var d, e, f = Ia(a, this),
            g = 6e4 * (f.utcOffset() - this.utcOffset());
        return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = hb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : fb(e)
    }

    function hb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function ib() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function jb() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : J(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function kb(b) {
        var c = J(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function lb(a, b) {
        return this.isValid() ? Va({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function mb(a) {
        return this.from(Aa(), a)
    }

    function nb(a, b) {
        return this.isValid() ? Va({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function ob(a) {
        return this.to(Aa(), a)
    }

    function pb(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = x(a), null != b && (this._locale = b), this)
    }

    function qb() {
        return this._locale
    }

    function rb(a) {
        switch (a = z(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function sb(a) {
        return a = z(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function tb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function ub() {
        return Math.floor(+this / 1e3)
    }

    function vb() {
        return this._offset ? new Date(+this) : this._d
    }

    function wb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function xb() {
        return k(this)
    }

    function yb() {
        return g({}, j(this))
    }

    function zb() {
        return j(this).overflow
    }

    function Ab(a, b) {
        G(0, [a, a.length], 0, b)
    }

    function Bb(a, b, c) {
        return ha(Aa([a, 11, 31 + b - c]), b, c).week
    }

    function Cb(a) {
        var b = ha(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Db(a) {
        var b = ha(this, 1, 4).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Eb() {
        return Bb(this.year(), 1, 4)
    }

    function Fb() {
        var a = this.localeData()._week;
        return Bb(this.year(), a.dow, a.doy)
    }

    function Gb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Hb(a, b) {
        if ("string" == typeof a)
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a) return null
            } else a = parseInt(a, 10);
        return a
    }

    function Ib(a) {
        return this._weekdays[a.day()]
    }

    function Jb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Kb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Lb(a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
            if (this._weekdaysParse[b] || (c = Aa([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
    }

    function Mb(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Hb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Nb(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Ob(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }

    function Pb(a, b) {
        G(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Qb(a, b) {
        return b._meridiemParse
    }

    function Rb(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Sb(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Tb(a) {
        G(0, [a, 3], 0, "millisecond")
    }

    function Ub() {
        return this._isUTC ? "UTC" : ""
    }

    function Vb() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Wb(a) {
        return Aa(1e3 * a)
    }

    function Xb() {
        return Aa.apply(null, arguments).parseZone()
    }

    function Yb(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.call(b, c) : d
    }

    function Zb(a) {
        var b = this._longDateFormat[a];
        return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a] = b), b
    }

    function $b() {
        return this._invalidDate
    }

    function _b(a) {
        return this._ordinal.replace("%d", a)
    }

    function ac(a) {
        return a
    }

    function bc(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function cc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }

    function dc(a) {
        var b, c;
        for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function ec(a, b, c, d) {
        var e = x(),
            f = h().set(d, b);
        return e[c](f, a)
    }

    function fc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return ec(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = ec(a, f, c, e);
        return g
    }

    function gc(a, b) {
        return fc(a, b, "months", 12, "month")
    }

    function hc(a, b) {
        return fc(a, b, "monthsShort", 12, "month")
    }

    function ic(a, b) {
        return fc(a, b, "weekdays", 7, "day")
    }

    function jc(a, b) {
        return fc(a, b, "weekdaysShort", 7, "day")
    }

    function kc(a, b) {
        return fc(a, b, "weekdaysMin", 7, "day")
    }

    function lc() {
        var a = this._data;
        return this._milliseconds = Rd(this._milliseconds), this._days = Rd(this._days), this._months = Rd(this._months), a.milliseconds = Rd(a.milliseconds), a.seconds = Rd(a.seconds), a.minutes = Rd(a.minutes), a.hours = Rd(a.hours), a.months = Rd(a.months), a.years = Rd(a.years), this
    }

    function mc(a, b, c, d) {
        var e = Va(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function nc(a, b) {
        return mc(this, a, b, 1)
    }

    function oc(a, b) {
        return mc(this, a, b, -1)
    }

    function pc() {
        var a, b, c, d = this._milliseconds,
            e = this._days,
            f = this._months,
            g = this._data,
            h = 0;
        return g.milliseconds = d % 1e3, a = fb(d / 1e3), g.seconds = a % 60, b = fb(a / 60), g.minutes = b % 60, c = fb(b / 60), g.hours = c % 24, e += fb(c / 24), h = fb(qc(e)), e -= fb(rc(h)), f += fb(e / 30), e %= 30, h += fb(f / 12), f %= 12, g.days = e, g.months = f, g.years = h, this
    }

    function qc(a) {
        return 400 * a / 146097
    }

    function rc(a) {
        return 146097 * a / 400
    }

    function sc(a) {
        var b, c, d = this._milliseconds;
        if (a = z(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + 12 * qc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(rc(this._months / 12)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function tc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12)
    }

    function uc(a) {
        return function() {
            return this.as(a)
        }
    }

    function vc(a) {
        return a = z(a), this[a + "s"]()
    }

    function wc(a) {
        return function() {
            return this._data[a]
        }
    }

    function xc() {
        return fb(this.days() / 7)
    }

    function yc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function zc(a, b, c) {
        var d = Va(a).abs(),
            e = fe(d.as("s")),
            f = fe(d.as("m")),
            g = fe(d.as("h")),
            h = fe(d.as("d")),
            i = fe(d.as("M")),
            j = fe(d.as("y")),
            k = e < ge.s && ["s", e] || 1 === f && ["m"] || f < ge.m && ["mm", f] || 1 === g && ["h"] || g < ge.h && ["hh", g] || 1 === h && ["d"] || h < ge.d && ["dd", h] || 1 === i && ["M"] || i < ge.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, yc.apply(null, k)
    }

    function Ac(a, b) {
        return void 0 === ge[a] ? !1 : void 0 === b ? ge[a] : (ge[a] = b, !0)
    }

    function Bc(a) {
        var b = this.localeData(),
            c = zc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Cc() {
        var a = he(this.years()),
            b = he(this.months()),
            c = he(this.days()),
            d = he(this.hours()),
            e = he(this.minutes()),
            f = he(this.seconds() + this.milliseconds() / 1e3),
            g = this.asSeconds();
        return g ? (0 > g ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    }
    var Dc, Ec, Fc = a.momentProperties = [],
        Gc = !1,
        Hc = {},
        Ic = {},
        Jc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        Kc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Lc = {},
        Mc = {},
        Nc = /\d/,
        Oc = /\d\d/,
        Pc = /\d{3}/,
        Qc = /\d{4}/,
        Rc = /[+-]?\d{6}/,
        Sc = /\d\d?/,
        Tc = /\d{1,3}/,
        Uc = /\d{1,4}/,
        Vc = /[+-]?\d{1,6}/,
        Wc = /\d+/,
        Xc = /[+-]?\d+/,
        Yc = /Z|[+-]\d\d:?\d\d/gi,
        Zc = /[+-]?\d+(\.\d{1,3})?/,
        $c = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        _c = {},
        ad = {},
        bd = 0,
        cd = 1,
        dd = 2,
        ed = 3,
        fd = 4,
        gd = 5,
        hd = 6;
    G("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), G("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), G("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), y("month", "M"), L("M", Sc), L("MM", Sc, Oc), L("MMM", $c), L("MMMM", $c), O(["M", "MM"], function(a, b) {
        b[cd] = p(a) - 1
    }), O(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[cd] = e : j(c).invalidMonth = a
    });
    var id = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        jd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        kd = {};
    a.suppressDeprecationWarnings = !1;
    var ld = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        md = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        nd = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        od = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = $("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), G(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), y("year", "y"), L("Y", Xc), L("YY", Sc, Oc), L("YYYY", Uc, Qc), L("YYYYY", Vc, Rc), L("YYYYYY", Vc, Rc), O(["YYYY", "YYYYY", "YYYYYY"], bd), O("YY", function(b, c) {
        c[bd] = a.parseTwoDigitYear(b)
    }), a.parseTwoDigitYear = function(a) {
        return p(a) + (p(a) > 68 ? 1900 : 2e3)
    };
    var pd = B("FullYear", !1);
    G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), y("week", "w"), y("isoWeek", "W"), L("w", Sc), L("ww", Sc, Oc), L("W", Sc), L("WW", Sc, Oc), P(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = p(a)
    });
    var qd = {
        dow: 0,
        doy: 6
    };
    G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), L("DDD", Tc), L("DDDD", Pc), O(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = p(a)
    }), a.ISO_8601 = function() {};
    var rd = $("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Aa.apply(null, arguments);
            return this > a ? this : a
        }),
        sd = $("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Aa.apply(null, arguments);
            return a > this ? this : a
        });
    Ga("Z", ":"), Ga("ZZ", ""), L("Z", Yc), L("ZZ", Yc), O(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = Ha(a)
    });
    var td = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var ud = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        vd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Va.fn = Ea.prototype;
    var wd = Za(1, "add"),
        xd = Za(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var yd = $("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    G(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), G(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Ab("gggg", "weekYear"), Ab("ggggg", "weekYear"), Ab("GGGG", "isoWeekYear"), Ab("GGGGG", "isoWeekYear"), y("weekYear", "gg"), y("isoWeekYear", "GG"), L("G", Xc), L("g", Xc), L("GG", Sc, Oc), L("gg", Sc, Oc), L("GGGG", Uc, Qc), L("gggg", Uc, Qc), L("GGGGG", Vc, Rc), L("ggggg", Vc, Rc), P(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = p(a)
    }), P(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), G("Q", 0, 0, "quarter"), y("quarter", "Q"), L("Q", Nc), O("Q", function(a, b) {
        b[cd] = 3 * (p(a) - 1)
    }), G("D", ["DD", 2], "Do", "date"), y("date", "D"), L("D", Sc), L("DD", Sc, Oc), L("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), O(["D", "DD"], dd), O("Do", function(a, b) {
        b[dd] = p(a.match(Sc)[0], 10)
    });
    var zd = B("Date", !0);
    G("d", 0, "do", "day"), G("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), G("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), G("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), y("day", "d"), y("weekday", "e"), y("isoWeekday", "E"), L("d", Sc), L("e", Sc), L("E", Sc), L("dd", $c), L("ddd", $c), L("dddd", $c), P(["dd", "ddd", "dddd"], function(a, b, c) {
        var d = c._locale.weekdaysParse(a);
        null != d ? b.d = d : j(c).invalidWeekday = a
    }), P(["d", "e", "E"], function(a, b, c, d) {
        b[d] = p(a)
    });
    var Ad = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Bd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Cd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }), Pb("a", !0), Pb("A", !1), y("hour", "h"), L("a", Qb), L("A", Qb), L("H", Sc), L("h", Sc), L("HH", Sc, Oc), L("hh", Sc, Oc), O(["H", "HH"], ed), O(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), O(["h", "hh"], function(a, b, c) {
        b[ed] = p(a), j(c).bigHour = !0
    });
    var Dd = /[ap]\.?m?\.?/i,
        Ed = B("Hours", !0);
    G("m", ["mm", 2], 0, "minute"), y("minute", "m"), L("m", Sc), L("mm", Sc, Oc), O(["m", "mm"], fd);
    var Fd = B("Minutes", !1);
    G("s", ["ss", 2], 0, "second"), y("second", "s"), L("s", Sc), L("ss", Sc, Oc), O(["s", "ss"], gd);
    var Gd = B("Seconds", !1);
    G("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), G(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), Tb("SSS"), Tb("SSSS"), y("millisecond", "ms"), L("S", Tc, Nc), L("SS", Tc, Oc), L("SSS", Tc, Pc), L("SSSS", Wc), O(["S", "SS", "SSS", "SSSS"], function(a, b) {
        b[hd] = p(1e3 * ("0." + a))
    });
    var Hd = B("Milliseconds", !1);
    G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
    var Id = n.prototype;
    Id.add = wd, Id.calendar = _a, Id.clone = ab, Id.diff = gb, Id.endOf = sb, Id.format = kb, Id.from = lb, Id.fromNow = mb, Id.to = nb, Id.toNow = ob, Id.get = E, Id.invalidAt = zb, Id.isAfter = bb, Id.isBefore = cb, Id.isBetween = db, Id.isSame = eb, Id.isValid = xb, Id.lang = yd, Id.locale = pb, Id.localeData = qb, Id.max = sd, Id.min = rd, Id.parsingFlags = yb, Id.set = E, Id.startOf = rb, Id.subtract = xd, Id.toArray = wb, Id.toDate = vb, Id.toISOString = jb, Id.toJSON = jb, Id.toString = ib, Id.unix = ub, Id.valueOf = tb, Id.year = pd, Id.isLeapYear = ga, Id.weekYear = Cb, Id.isoWeekYear = Db, Id.quarter = Id.quarters = Gb, Id.month = W, Id.daysInMonth = X, Id.week = Id.weeks = la, Id.isoWeek = Id.isoWeeks = ma, Id.weeksInYear = Fb, Id.isoWeeksInYear = Eb, Id.date = zd, Id.day = Id.days = Mb, Id.weekday = Nb, Id.isoWeekday = Ob, Id.dayOfYear = oa, Id.hour = Id.hours = Ed, Id.minute = Id.minutes = Fd, Id.second = Id.seconds = Gd, Id.millisecond = Id.milliseconds = Hd, Id.utcOffset = Ka, Id.utc = Ma, Id.local = Na, Id.parseZone = Oa, Id.hasAlignedHourOffset = Pa, Id.isDST = Qa, Id.isDSTShifted = Ra, Id.isLocal = Sa, Id.isUtcOffset = Ta, Id.isUtc = Ua, Id.isUTC = Ua, Id.zoneAbbr = Ub, Id.zoneName = Vb, Id.dates = $("dates accessor is deprecated. Use date instead.", zd), Id.months = $("months accessor is deprecated. Use month instead", W), Id.years = $("years accessor is deprecated. Use year instead", pd), Id.zone = $("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
    var Jd = Id,
        Kd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Ld = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        Md = "Invalid date",
        Nd = "%d",
        Od = /\d{1,2}/,
        Pd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Qd = r.prototype;
    Qd._calendar = Kd, Qd.calendar = Yb, Qd._longDateFormat = Ld, Qd.longDateFormat = Zb, Qd._invalidDate = Md, Qd.invalidDate = $b, Qd._ordinal = Nd, Qd.ordinal = _b, Qd._ordinalParse = Od, Qd.preparse = ac, Qd.postformat = ac, Qd._relativeTime = Pd, Qd.relativeTime = bc, Qd.pastFuture = cc, Qd.set = dc, Qd.months = S, Qd._months = id, Qd.monthsShort = T, Qd._monthsShort = jd, Qd.monthsParse = U, Qd.week = ia, Qd._week = qd, Qd.firstDayOfYear = ka, Qd.firstDayOfWeek = ja, Qd.weekdays = Ib, Qd._weekdays = Ad, Qd.weekdaysMin = Kb, Qd._weekdaysMin = Cd, Qd.weekdaysShort = Jb, Qd._weekdaysShort = Bd, Qd.weekdaysParse = Lb, Qd.isPM = Rb, Qd._meridiemParse = Dd, Qd.meridiem = Sb, v("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === p(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = $("moment.lang is deprecated. Use moment.locale instead.", v), a.langData = $("moment.langData is deprecated. Use moment.localeData instead.", x);
    var Rd = Math.abs,
        Sd = uc("ms"),
        Td = uc("s"),
        Ud = uc("m"),
        Vd = uc("h"),
        Wd = uc("d"),
        Xd = uc("w"),
        Yd = uc("M"),
        Zd = uc("y"),
        $d = wc("milliseconds"),
        _d = wc("seconds"),
        ae = wc("minutes"),
        be = wc("hours"),
        ce = wc("days"),
        de = wc("months"),
        ee = wc("years"),
        fe = Math.round,
        ge = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        he = Math.abs,
        ie = Ea.prototype;
    ie.abs = lc, ie.add = nc, ie.subtract = oc, ie.as = sc, ie.asMilliseconds = Sd, ie.asSeconds = Td, ie.asMinutes = Ud, ie.asHours = Vd, ie.asDays = Wd, ie.asWeeks = Xd, ie.asMonths = Yd, ie.asYears = Zd, ie.valueOf = tc, ie._bubble = pc, ie.get = vc, ie.milliseconds = $d, ie.seconds = _d, ie.minutes = ae, ie.hours = be, ie.days = ce, ie.weeks = xc, ie.months = de, ie.years = ee, ie.humanize = Bc, ie.toISOString = Cc, ie.toString = Cc, ie.toJSON = Cc, ie.locale = pb, ie.localeData = qb, ie.toIsoString = $("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Cc), ie.lang = yd, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), L("x", Xc), L("X", Zc), O("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), O("x", function(a, b, c) {
        c._d = new Date(p(a))
    }), a.version = "2.10.3", b(Aa), a.fn = Jd, a.min = Ca, a.max = Da, a.utc = h, a.unix = Wb, a.months = gc, a.isDate = d, a.locale = v, a.invalid = l, a.duration = Va, a.isMoment = o, a.weekdays = ic, a.parseZone = Xb, a.localeData = x, a.isDuration = Fa, a.monthsShort = hc, a.weekdaysMin = kc, a.defineLocale = w, a.weekdaysShort = jc, a.normalizeUnits = z, a.relativeTimeThreshold = Ac;
    var je = a;
    return je
});
/**
 * @version: 2.1.19
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: https://www.improvely.com/
 */

(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['moment', 'jquery', 'exports'], function(momentjs, $, exports) {
            root.daterangepicker = factory(root, exports, momentjs, $);
        });

    } else if (typeof exports !== 'undefined') {
        var momentjs = require('moment');
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined; //isomorphic issue
        if (!jQuery) {
            try {
                jQuery = require('jquery');
                if (!jQuery.fn) jQuery.fn = {}; //isomorphic issue
            } catch (err) {
                if (!jQuery) throw new Error('jQuery dependency not found');
            }
        }

        factory(root, exports, momentjs, jQuery);

        // Finally, as a browser global.
    } else {
        root.daterangepicker = factory(root, {}, root.moment || moment, (root.jQuery || root.Zepto || root.ender || root.$));
    }

}(this || {}, function(root, daterangepicker, moment, $) { // 'this' doesn't exist on a server

    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            format: 'MM/DD/YYYY',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() {};

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
            '<div class="calendar left">' +
            '<div class="daterangepicker_input">' +
            '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
            '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
            '<div class="calendar-time">' +
            '<div></div>' +
            '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
            '</div>' +
            '</div>' +
            '<div class="calendar-table"></div>' +
            '</div>' +
            '<div class="calendar right">' +
            '<div class="daterangepicker_input">' +
            '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
            '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
            '<div class="calendar-time">' +
            '<div></div>' +
            '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
            '</div>' +
            '</div>' +
            '<div class="calendar-table"></div>' +
            '</div>' +
            '<div class="ranges">' +
            '<div class="range_inputs">' +
            '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
            '<button class="cancelBtn" type="button"></button>' +
            '</div>' +
            '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
                this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
                this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
                this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
                this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
                this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
                this.locale.customRangeLabel = options.locale.customRangeLabel;

        }

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate)) || (maxDate && start.isAfter(maxDate)))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li>' + range + '</li>';
            }
            list += '<li>' + this.locale.customRangeLabel + '</li>';
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input i').hide();
            if (!this.timePicker) {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            var ranges = this.container.find('.ranges');
            var html = ranges.clone();
            ranges.remove();
            this.container.find('.calendar.left').parent().prepend(html);
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            //.on('keyup.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate))
                this.startDate = this.minDate;

            if (this.maxDate && this.startDate.isAfter(this.maxDate))
                this.startDate = this.maxDate;

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate;

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    var cname = '',
                        disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate ? this.endDate.clone() : this.previousRightTime.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                    if (selected.isBefore(this.startDate))
                        selected = this.startDate.clone();

                    if (selected.isAfter(maxDate))
                        selected = maxDate.clone();

                }
            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = {
                    top: 0,
                    left: 0
                },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 -
                        this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) {
                this.outsideClick(e);
            }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
                .on('mousedown.daterangepicker', this._outsideClickProxy)
                // also support mobile devices
                .on('touchend.daterangepicker', this._outsideClickProxy)
                // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
                .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
                // and also close when focus changes to outside the picker (eg. tabbing between controls)
                .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) {
                this.move(e);
            }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
            ) return;
            this.hide();
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end, 
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                    this.calculateChosenLabel();
                    this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

        },

        calculateChosenLabel: function() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.' + leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateCalendars();
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
            }
        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

/*! version : 4.15.35
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('moment'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
        }
        if (typeof moment === 'undefined') {
            throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';
        }
        factory(jQuery, moment);
    }
}(function($, moment) {
    'use strict';
    if (!moment) {
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
    }

    var dateTimePicker = function(element, options) {
        var picker = {},
            date = moment().startOf('d'),
            viewDate = date.clone(),
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [{
                    clsName: 'days',
                    navFnc: 'M',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'y',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'y',
                    navStep: 10
                },
                {
                    clsName: 'decades',
                    navFnc: 'y',
                    navStep: 100
                }
            ],
            viewModes = ['days', 'months', 'years', 'decades'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            keyMap = {
                'up': 38,
                38: 'up',
                'down': 40,
                40: 'down',
                'left': 37,
                37: 'left',
                'right': 39,
                39: 'right',
                'tab': 9,
                9: 'tab',
                'escape': 27,
                27: 'escape',
                'enter': 13,
                13: 'enter',
                'pageUp': 33,
                33: 'pageUp',
                'pageDown': 34,
                34: 'pageDown',
                'shift': 16,
                16: 'shift',
                'control': 17,
                17: 'control',
                'space': 32,
                32: 'space',
                't': 84,
                84: 't',
                'delete': 46,
                46: 'delete'
            },
            keyState = {},

            /********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/
            isEnabled = function(granularity) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            },
            hasTime = function() {
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
            },

            hasDate = function() {
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
            },

            getDatePickerTemplate = function() {
                var headTemplate = $('<thead>')
                    .append($('<tr>')
                        .append($('<th>').addClass('prev').attr('data-action', 'previous')
                            .append($('<span>').addClass(options.icons.previous))
                        )
                        .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
                        .append($('<th>').addClass('next').attr('data-action', 'next')
                            .append($('<span>').addClass(options.icons.next))
                        )
                    ),
                    contTemplate = $('<tbody>')
                    .append($('<tr>')
                        .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
                    );

                return [
                    $('<div>').addClass('datepicker-days')
                    .append($('<table>').addClass('table-condensed')
                        .append(headTemplate)
                        .append($('<tbody>'))
                    ),
                    $('<div>').addClass('datepicker-months')
                    .append($('<table>').addClass('table-condensed')
                        .append(headTemplate.clone())
                        .append(contTemplate.clone())
                    ),
                    $('<div>').addClass('datepicker-years')
                    .append($('<table>').addClass('table-condensed')
                        .append(headTemplate.clone())
                        .append(contTemplate.clone())
                    ),
                    $('<div>').addClass('datepicker-decades')
                    .append($('<table>').addClass('table-condensed')
                        .append(headTemplate.clone())
                        .append(contTemplate.clone())
                    )
                ];
            },

            getTimePickerMainTemplate = function() {
                var topRow = $('<tr>'),
                    middleRow = $('<tr>'),
                    bottomRow = $('<tr>');

                if (isEnabled('h')) {
                    topRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Increment Hour'
                            }).addClass('btn').attr('data-action', 'incrementHours')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-hour').attr({
                            'data-time-component': 'hours',
                            'title': 'Pick Hour'
                        }).attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Decrement Hour'
                            }).addClass('btn').attr('data-action', 'decrementHours')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('m')) {
                    if (isEnabled('h')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Increment Minute'
                            }).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-minute').attr({
                            'data-time-component': 'minutes',
                            'title': 'Pick Minute'
                        }).attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Decrement Minute'
                            }).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('s')) {
                    if (isEnabled('m')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Increment Second'
                            }).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-second').attr({
                            'data-time-component': 'seconds',
                            'title': 'Pick Second'
                        }).attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({
                                href: '#',
                                tabindex: '-1',
                                'title': 'Decrement Second'
                            }).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));
                }

                if (!use24Hours) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>')
                        .append($('<button>').addClass('btn btn-primary').attr({
                            'data-action': 'togglePeriod',
                            tabindex: '-1',
                            'title': 'Toggle Period'
                        })));
                    bottomRow.append($('<td>').addClass('separator'));
                }

                return $('<div>').addClass('timepicker-picker')
                    .append($('<table>').addClass('table-condensed')
                        .append([topRow, middleRow, bottomRow]));
            },

            getTimePickerTemplate = function() {
                var hoursView = $('<div>').addClass('timepicker-hours')
                    .append($('<table>').addClass('table-condensed')),
                    minutesView = $('<div>').addClass('timepicker-minutes')
                    .append($('<table>').addClass('table-condensed')),
                    secondsView = $('<div>').addClass('timepicker-seconds')
                    .append($('<table>').addClass('table-condensed')),
                    ret = [getTimePickerMainTemplate()];

                if (isEnabled('h')) {
                    ret.push(hoursView);
                }
                if (isEnabled('m')) {
                    ret.push(minutesView);
                }
                if (isEnabled('s')) {
                    ret.push(secondsView);
                }

                return ret;
            },

            getToolbar = function() {
                var row = [];
                if (options.showTodayButton) {
                    row.push($('<td>').append($('<a>').attr({
                        'data-action': 'today',
                        'title': options.tooltips.today
                    }).append($('<span>').addClass(options.icons.today))));
                }
                if (!options.sideBySide && hasDate() && hasTime()) {
                    row.push($('<td>').append($('<a>').attr({
                        'data-action': 'togglePicker',
                        'title': 'Select Time'
                    }).append($('<span>').addClass(options.icons.time))));
                }
                if (options.showClear) {
                    row.push($('<td>').append($('<a>').attr({
                        'data-action': 'clear',
                        'title': options.tooltips.clear
                    }).append($('<span>').addClass(options.icons.clear))));
                }
                if (options.showClose) {
                    row.push($('<td>').append($('<a>').attr({
                        'data-action': 'close',
                        'title': options.tooltips.close
                    }).append($('<span>').addClass(options.icons.close))));
                }
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
            },

            getTemplate = function() {
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                    content = $('<ul>').addClass('list-unstyled'),
                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

                if (options.inline) {
                    template.removeClass('dropdown-menu');
                }

                if (use24Hours) {
                    template.addClass('usetwentyfour');
                }
                if (isEnabled('s') && !use24Hours) {
                    template.addClass('wider');
                }

                if (options.sideBySide && hasDate() && hasTime()) {
                    template.addClass('timepicker-sbs');
                    if (options.toolbarPlacement === 'top') {
                        template.append(toolbar);
                    }
                    template.append(
                        $('<div>').addClass('row')
                        .append(dateView.addClass('col-md-6'))
                        .append(timeView.addClass('col-md-6'))
                    );
                    if (options.toolbarPlacement === 'bottom') {
                        template.append(toolbar);
                    }
                    return template;
                }

                if (options.toolbarPlacement === 'top') {
                    content.append(toolbar);
                }
                if (hasDate()) {
                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
                }
                if (options.toolbarPlacement === 'default') {
                    content.append(toolbar);
                }
                if (hasTime()) {
                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
                }
                if (options.toolbarPlacement === 'bottom') {
                    content.append(toolbar);
                }
                return template.append(content);
            },

            dataToOptions = function() {
                var eData,
                    dataOptions = {};

                if (element.is('input') || options.inline) {
                    eData = element.data();
                } else {
                    eData = element.find('input').data();
                }

                if (eData.dateOptions && eData.dateOptions instanceof Object) {
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
                }

                $.each(options, function(key) {
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                    if (eData[attributeName] !== undefined) {
                        dataOptions[key] = eData[attributeName];
                    }
                });
                return dataOptions;
            },

            place = function() {
                var position = (component || element).position(),
                    offset = (component || element).offset(),
                    vertical = options.widgetPositioning.vertical,
                    horizontal = options.widgetPositioning.horizontal,
                    parent;

                if (options.widgetParent) {
                    parent = options.widgetParent.append(widget);
                } else if (element.is('input')) {
                    parent = element.after(widget).parent();
                } else if (options.inline) {
                    parent = element.append(widget);
                    return;
                } else {
                    parent = element;
                    element.children().first().after(widget);
                }

                // Top and bottom logic
                if (vertical === 'auto') {
                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                        widget.height() + element.outerHeight() < offset.top) {
                        vertical = 'top';
                    } else {
                        vertical = 'bottom';
                    }
                }

                // Left and right logic
                if (horizontal === 'auto') {
                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
                        offset.left + widget.outerWidth() > $(window).width()) {
                        horizontal = 'right';
                    } else {
                        horizontal = 'left';
                    }
                }

                if (vertical === 'top') {
                    widget.addClass('top').removeClass('bottom');
                } else {
                    widget.addClass('bottom').removeClass('top');
                }

                if (horizontal === 'right') {
                    widget.addClass('pull-right');
                } else {
                    widget.removeClass('pull-right');
                }

                // find the first parent element that has a relative css positioning
                if (parent.css('position') !== 'relative') {
                    parent = parent.parents().filter(function() {
                        return $(this).css('position') === 'relative';
                    }).first();
                }

                if (parent.length === 0) {
                    throw new Error('datetimepicker component should be placed within a relative positioned container');
                }

                widget.css({
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                    bottom: vertical === 'top' ? position.top + element.outerHeight() : 'auto',
                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
                });
            },

            notifyEvent = function(e) {
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
                    return;
                }
                element.trigger(e);
            },

            viewUpdate = function(e) {
                if (e === 'y') {
                    e = 'YYYY';
                }
                notifyEvent({
                    type: 'dp.update',
                    change: e,
                    viewDate: viewDate.clone()
                });
            },

            showMode = function(dir) {
                if (!widget) {
                    return;
                }
                if (dir) {
                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
                }
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },

            fillDow = function() {
                var row = $('<tr>'),
                    currentDate = viewDate.clone().startOf('w').startOf('d');

                if (options.calendarWeeks === true) {
                    row.append($('<th>').addClass('cw').text('#'));
                }

                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                    currentDate.add(1, 'd');
                }
                widget.find('.datepicker-days thead').append(row);
            },

            isInDisabledDates = function(testDate) {
                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInEnabledDates = function(testDate) {
                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInDisabledHours = function(testDate) {
                return options.disabledHours[testDate.format('H')] === true;
            },

            isInEnabledHours = function(testDate) {
                return options.enabledHours[testDate.format('H')] === true;
            },

            isValid = function(targetMoment, granularity) {
                if (!targetMoment.isValid()) {
                    return false;
                }
                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
                    return false;
                }
                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
                    return false;
                }
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                    return false;
                }
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                    return false;
                }
                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                    return false;
                }
                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                    return false;
                }
                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                    return false;
                }
                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                    var found = false;
                    $.each(options.disabledTimeIntervals, function() {
                        if (targetMoment.isBetween(this[0], this[1])) {
                            found = true;
                            return false;
                        }
                    });
                    if (found) {
                        return false;
                    }
                }
                return true;
            },

            fillMonths = function() {
                var spans = [],
                    monthsShort = viewDate.clone().startOf('y').startOf('d');
                while (monthsShort.isSame(viewDate, 'y')) {
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');
                }
                widget.find('.datepicker-months td').empty().append(spans);
            },

            updateMonths = function() {
                var monthsView = widget.find('.datepicker-months'),
                    monthsViewHeader = monthsView.find('th'),
                    months = monthsView.find('tbody').find('span');

                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);

                monthsView.find('.disabled').removeClass('disabled');

                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                    monthsViewHeader.eq(0).addClass('disabled');
                }

                monthsViewHeader.eq(1).text(viewDate.year());

                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                    monthsViewHeader.eq(2).addClass('disabled');
                }

                months.removeClass('active');
                if (date.isSame(viewDate, 'y') && !unset) {
                    months.eq(date.month()).addClass('active');
                }

                months.each(function(index) {
                    if (!isValid(viewDate.clone().month(index), 'M')) {
                        $(this).addClass('disabled');
                    }
                });
            },

            updateYears = function() {
                var yearsView = widget.find('.datepicker-years'),
                    yearsViewHeader = yearsView.find('th'),
                    startYear = viewDate.clone().subtract(5, 'y'),
                    endYear = viewDate.clone().add(6, 'y'),
                    html = '';

                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.nextDecade);
                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.prevDecade);

                yearsView.find('.disabled').removeClass('disabled');

                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                    yearsViewHeader.eq(0).addClass('disabled');
                }

                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                    yearsViewHeader.eq(2).addClass('disabled');
                }

                while (!startYear.isAfter(endYear, 'y')) {
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');
                }

                yearsView.find('td').html(html);
            },

            updateDecades = function() {
                var decadesView = widget.find('.datepicker-decades'),
                    decadesViewHeader = decadesView.find('th'),
                    startDecade = viewDate.isBefore(moment({
                        y: 1999
                    })) ? moment({
                        y: 1899
                    }) : moment({
                        y: 1999
                    }),
                    endDecade = startDecade.clone().add(100, 'y'),
                    html = '';

                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);

                decadesView.find('.disabled').removeClass('disabled');

                if (startDecade.isSame(moment({
                        y: 1900
                    })) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
                    decadesViewHeader.eq(0).addClass('disabled');
                }

                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

                if (startDecade.isSame(moment({
                        y: 2000
                    })) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
                    decadesViewHeader.eq(2).addClass('disabled');
                }

                while (!startDecade.isAfter(endDecade, 'y')) {
                    html += '<span data-action="selectDecade" class="decade' + (startDecade.isSame(date, 'y') ? ' active' : '') +
                        (!isValid(startDecade, 'y') ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                    startDecade.add(12, 'y');
                }
                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

                decadesView.find('td').html(html);
            },

            fillDate = function() {
                var daysView = widget.find('.datepicker-days'),
                    daysViewHeader = daysView.find('th'),
                    currentDate,
                    html = [],
                    row,
                    clsName,
                    i;

                if (!hasDate()) {
                    return;
                }

                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);

                daysView.find('.disabled').removeClass('disabled');
                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));

                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                    daysViewHeader.eq(0).addClass('disabled');
                }
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                    daysViewHeader.eq(2).addClass('disabled');
                }

                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');

                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
                    if (currentDate.weekday() === 0) {
                        row = $('<tr>');
                        if (options.calendarWeeks) {
                            row.append('<td class="cw">' + currentDate.week() + '</td>');
                        }
                        html.push(row);
                    }
                    clsName = '';
                    if (currentDate.isBefore(viewDate, 'M')) {
                        clsName += ' old';
                    }
                    if (currentDate.isAfter(viewDate, 'M')) {
                        clsName += ' new';
                    }
                    if (currentDate.isSame(date, 'd') && !unset) {
                        clsName += ' active';
                    }
                    if (!isValid(currentDate, 'd')) {
                        clsName += ' disabled';
                    }
                    if (currentDate.isSame(moment(), 'd')) {
                        clsName += ' today';
                    }
                    if (currentDate.day() === 0 || currentDate.day() === 6) {
                        clsName += ' weekend';
                    }
                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');
                }

                daysView.find('tbody').empty().append(html);

                updateMonths();

                updateYears();

                updateDecades();
            },

            fillHours = function() {
                var table = widget.find('.timepicker-hours table'),
                    currentHour = viewDate.clone().startOf('d'),
                    html = [],
                    row = $('<tr>');

                if (viewDate.hour() > 11 && !use24Hours) {
                    currentHour.hour(12);
                }
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');
                }
                table.empty().append(html);
            },

            fillMinutes = function() {
                var table = widget.find('.timepicker-minutes table'),
                    currentMinute = viewDate.clone().startOf('h'),
                    html = [],
                    row = $('<tr>'),
                    step = options.stepping === 1 ? 5 : options.stepping;

                while (viewDate.isSame(currentMinute, 'h')) {
                    if (currentMinute.minute() % (step * 4) === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');
                }
                table.empty().append(html);
            },

            fillSeconds = function() {
                var table = widget.find('.timepicker-seconds table'),
                    currentSecond = viewDate.clone().startOf('m'),
                    html = [],
                    row = $('<tr>');

                while (viewDate.isSame(currentSecond, 'm')) {
                    if (currentSecond.second() % 20 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');
                }

                table.empty().append(html);
            },

            fillTime = function() {
                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');

                if (!use24Hours) {
                    toggle = widget.find('.timepicker [data-action=togglePeriod]');
                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');

                    toggle.text(date.format('A'));

                    if (isValid(newDate, 'h')) {
                        toggle.removeClass('disabled');
                    } else {
                        toggle.addClass('disabled');
                    }
                }
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

                fillHours();
                fillMinutes();
                fillSeconds();
            },

            update = function() {
                if (!widget) {
                    return;
                }
                fillDate();
                fillTime();
            },

            setValue = function(targetMoment) {
                var oldDate = unset ? null : date;

                // case of calling setValue(null or false)
                if (!targetMoment) {
                    unset = true;
                    input.val('');
                    element.data('date', '');
                    notifyEvent({
                        type: 'dp.change',
                        date: false,
                        oldDate: oldDate
                    });
                    update();
                    return;
                }

                targetMoment = targetMoment.clone().locale(options.locale);

                if (options.stepping !== 1) {
                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping) % 60).seconds(0);
                }

                if (isValid(targetMoment)) {
                    date = targetMoment;
                    viewDate = date.clone();
                    input.val(date.format(actualFormat));
                    element.data('date', date.format(actualFormat));
                    unset = false;
                    update();
                    notifyEvent({
                        type: 'dp.change',
                        date: date.clone(),
                        oldDate: oldDate
                    });
                } else {
                    if (!options.keepInvalid) {
                        input.val(unset ? '' : date.format(actualFormat));
                    }
                    notifyEvent({
                        type: 'dp.error',
                        date: targetMoment
                    });
                }
            },

            hide = function() {
                ///<summary>Hides the widget. Possibly will emit dp.hide</summary>
                var transitioning = false;
                if (!widget) {
                    return picker;
                }
                // Ignore event if in the middle of a picker transition
                widget.find('.collapse').each(function() {
                    var collapseData = $(this).data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        transitioning = true;
                        return false;
                    }
                    return true;
                });
                if (transitioning) {
                    return picker;
                }
                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.hide();

                $(window).off('resize', place);
                widget.off('click', '[data-action]');
                widget.off('mousedown', false);

                widget.remove();
                widget = false;

                notifyEvent({
                    type: 'dp.hide',
                    date: date.clone()
                });

                input.blur();

                return picker;
            },

            clear = function() {
                setValue(null);
            },

            /********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
            actions = {
                next: function() {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                previous: function() {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                pickerSwitch: function() {
                    showMode(1);
                },

                selectMonth: function(e) {
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
                    viewDate.month(month);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('M');
                },

                selectYear: function(e) {
                    var year = parseInt($(e.target).text(), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDecade: function(e) {
                    var year = parseInt($(e.target).data('selection'), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDay: function(e) {
                    var day = viewDate.clone();
                    if ($(e.target).is('.old')) {
                        day.subtract(1, 'M');
                    }
                    if ($(e.target).is('.new')) {
                        day.add(1, 'M');
                    }
                    setValue(day.date(parseInt($(e.target).text(), 10)));
                    if (!hasTime() && !options.keepOpen && !options.inline) {
                        hide();
                    }
                },

                incrementHours: function() {
                    var newDate = date.clone().add(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                incrementMinutes: function() {
                    var newDate = date.clone().add(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                incrementSeconds: function() {
                    var newDate = date.clone().add(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                decrementHours: function() {
                    var newDate = date.clone().subtract(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                decrementMinutes: function() {
                    var newDate = date.clone().subtract(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                decrementSeconds: function() {
                    var newDate = date.clone().subtract(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                togglePeriod: function() {
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
                },

                togglePicker: function(e) {
                    var $this = $(e.target),
                        $parent = $this.closest('ul'),
                        expanded = $parent.find('.in'),
                        closed = $parent.find('.collapse:not(.in)'),
                        collapseData;

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
                            expanded.collapse('hide');
                            closed.collapse('show');
                        } else { // otherwise just toggle in class on the two views
                            expanded.removeClass('in');
                            closed.addClass('in');
                        }
                        if ($this.is('span')) {
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                        } else {
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        }

                        // NOTE: uncomment if toggled state will be restored in show()
                        //if (component) {
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        //}
                    }
                },

                showPicker: function() {
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    widget.find('.timepicker .timepicker-picker').show();
                },

                showHours: function() {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-hours').show();
                },

                showMinutes: function() {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-minutes').show();
                },

                showSeconds: function() {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-seconds').show();
                },

                selectHour: function(e) {
                    var hour = parseInt($(e.target).text(), 10);

                    if (!use24Hours) {
                        if (date.hours() >= 12) {
                            if (hour !== 12) {
                                hour += 12;
                            }
                        } else {
                            if (hour === 12) {
                                hour = 0;
                            }
                        }
                    }
                    setValue(date.clone().hours(hour));
                    actions.showPicker.call(picker);
                },

                selectMinute: function(e) {
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                selectSecond: function(e) {
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                clear: clear,

                today: function() {
                    if (isValid(moment(), 'd')) {
                        setValue(moment());
                    }
                },

                close: hide
            },

            doAction = function(e) {
                if ($(e.currentTarget).is('.disabled')) {
                    return false;
                }
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
                return false;
            },

            show = function() {
                ///<summary>Shows the widget. Possibly will emit dp.show and dp.change</summary>
                var currentMoment,
                    useCurrentGranularity = {
                        'year': function(m) {
                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                        },
                        'month': function(m) {
                            return m.date(1).hours(0).seconds(0).minutes(0);
                        },
                        'day': function(m) {
                            return m.hours(0).seconds(0).minutes(0);
                        },
                        'hour': function(m) {
                            return m.seconds(0).minutes(0);
                        },
                        'minute': function(m) {
                            return m.seconds(0);
                        }
                    };

                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
                    return picker;
                }
                if (input.val() !== undefined && input.val().trim().length !== 0) {
                    setValue(parseInputDate(input.val().trim()));
                } else if (options.useCurrent && unset && ((input.is('input') && input.val().trim().length === 0) || options.inline)) {
                    currentMoment = moment();
                    if (typeof options.useCurrent === 'string') {
                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
                    }
                    setValue(currentMoment);
                }

                widget = getTemplate();

                fillDow();
                fillMonths();

                widget.find('.timepicker-hours').hide();
                widget.find('.timepicker-minutes').hide();
                widget.find('.timepicker-seconds').hide();

                update();
                showMode();

                $(window).on('resize', place);
                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
                widget.on('mousedown', false);

                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.show();
                place();

                if (options.focusOnShow && !input.is(':focus')) {
                    input.focus();
                }

                notifyEvent({
                    type: 'dp.show'
                });
                return picker;
            },

            toggle = function() {
                /// <summary>Shows or hides the widget</summary>
                return (widget ? hide() : show());
            },

            parseInputDate = function(inputDate) {
                if (options.parseInputDate === undefined) {
                    if (moment.isMoment(inputDate) || inputDate instanceof Date) {
                        inputDate = moment(inputDate);
                    } else {
                        inputDate = moment(inputDate, parseFormats, options.useStrict);
                    }
                } else {
                    inputDate = options.parseInputDate(inputDate);
                }
                inputDate.locale(options.locale);
                return inputDate;
            },

            keydown = function(e) {
                var handler = null,
                    index,
                    index2,
                    pressedKeys = [],
                    pressedModifiers = {},
                    currentKey = e.which,
                    keyBindKeys,
                    allModifiersPressed,
                    pressed = 'p';

                keyState[currentKey] = pressed;

                for (index in keyState) {
                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                        pressedKeys.push(index);
                        if (parseInt(index, 10) !== currentKey) {
                            pressedModifiers[index] = true;
                        }
                    }
                }

                for (index in options.keyBinds) {
                    if (options.keyBinds.hasOwnProperty(index) && typeof(options.keyBinds[index]) === 'function') {
                        keyBindKeys = index.split(' ');
                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                            allModifiersPressed = true;
                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                    allModifiersPressed = false;
                                    break;
                                }
                            }
                            if (allModifiersPressed) {
                                handler = options.keyBinds[index];
                                break;
                            }
                        }
                    }
                }

                if (handler) {
                    handler.call(picker, widget);
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

            keyup = function(e) {
                keyState[e.which] = 'r';
                e.stopPropagation();
                e.preventDefault();
            },

            change = function(e) {
                var val = $(e.target).val().trim(),
                    parsedDate = val ? parseInputDate(val) : null;
                setValue(parsedDate);
                e.stopImmediatePropagation();
                return false;
            },

            attachDatePickerElementEvents = function() {
                input.on({
                    'change': change,
                    'blur': options.debug ? '' : hide,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? show : ''
                });

                if (element.is('input')) {
                    input.on({
                        'focus': show
                    });
                } else if (component) {
                    component.on('click', toggle);
                    component.on('mousedown', false);
                }
            },

            detachDatePickerElementEvents = function() {
                input.off({
                    'change': change,
                    'blur': blur,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? hide : ''
                });

                if (element.is('input')) {
                    input.off({
                        'focus': show
                    });
                } else if (component) {
                    component.off('click', toggle);
                    component.off('mousedown', false);
                }
            },

            indexGivenDates = function(givenDatesArray) {
                // Store given enabledDates and disabledDates as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledDates['2014-02-27'] === true)
                var givenDatesIndexed = {};
                $.each(givenDatesArray, function() {
                    var dDate = parseInputDate(this);
                    if (dDate.isValid()) {
                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    }
                });
                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
            },

            indexGivenHours = function(givenHoursArray) {
                // Store given enabledHours and disabledHours as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledHours['2014-02-27'] === true)
                var givenHoursIndexed = {};
                $.each(givenHoursArray, function() {
                    givenHoursIndexed[this] = true;
                });
                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
            },

            initFormatting = function() {
                var format = options.format || 'L LT';

                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(formatInput) {
                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(formatInput2) { //temp fix for #740
                        return date.localeData().longDateFormat(formatInput2) || formatInput2;
                    });
                });


                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                    parseFormats.push(actualFormat);
                }

                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);

                if (isEnabled('y')) {
                    minViewModeNumber = 2;
                }
                if (isEnabled('M')) {
                    minViewModeNumber = 1;
                }
                if (isEnabled('d')) {
                    minViewModeNumber = 0;
                }

                currentViewMode = Math.max(minViewModeNumber, currentViewMode);

                if (!unset) {
                    setValue(date);
                }
            };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function() {
            ///<summary>Destroys the widget and removes all attached event listeners</summary>
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.disable = function() {
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
            hide();
            if (component && component.hasClass('btn')) {
                component.addClass('disabled');
            }
            input.prop('disabled', true);
            return picker;
        };

        picker.enable = function() {
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {
                component.removeClass('disabled');
            }
            input.prop('disabled', false);
            return picker;
        };

        picker.ignoreReadonly = function(ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function(newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function(key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.date = function(newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.date">
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
            return picker;
        };

        picker.format = function(newFormat) {
            ///<summary>test su</summary>
            ///<param name="newFormat">info about para</param>
            ///<returns type="string|boolean">returns foo</returns>
            if (arguments.length === 0) {
                return options.format;
            }

            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
                throw new TypeError('format() expects a sting or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.dayViewHeaderFormat = function(newFormat) {
            if (arguments.length === 0) {
                return options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            options.dayViewHeaderFormat = newFormat;
            return picker;
        };

        picker.extraFormats = function(formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.disabledDates = function(dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
            }

            if (!dates) {
                options.disabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            options.disabledDates = indexGivenDates(dates);
            options.enabledDates = false;
            update();
            return picker;
        };

        picker.enabledDates = function(dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
            ///<returns type="array">options.enabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
            }

            if (!dates) {
                options.enabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            options.enabledDates = indexGivenDates(dates);
            options.disabledDates = false;
            update();
            return picker;
        };

        picker.daysOfWeekDisabled = function(daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return options.daysOfWeekDisabled.splice(0);
            }

            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
                options.daysOfWeekDisabled = false;
                update();
                return picker;
            }

            if (!(daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function(previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'd')) {
                    date.add(1, 'd');
                    if (tries === 7) {
                        throw 'Tried 7 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.maxDate = function(maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if ((typeof maxDate === 'boolean') && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = moment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.minDate = function(minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if ((typeof minDate === 'boolean') && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = moment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone().add(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.defaultDate = function(defaultDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = moment();
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if (options.defaultDate && options.inline || (input.val().trim() === '' && input.attr('placeholder') === undefined)) {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function(locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.stepping = function(stepping) {
            if (arguments.length === 0) {
                return options.stepping;
            }

            stepping = parseInt(stepping, 10);
            if (isNaN(stepping) || stepping < 1) {
                stepping = 1;
            }
            options.stepping = stepping;
            return picker;
        };

        picker.useCurrent = function(useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return options.useCurrent;
            }

            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            options.useCurrent = useCurrent;
            return picker;
        };

        picker.collapse = function(collapse) {
            if (arguments.length === 0) {
                return options.collapse;
            }

            if (typeof collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (options.collapse === collapse) {
                return picker;
            }
            options.collapse = collapse;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.icons = function(icons) {
            if (arguments.length === 0) {
                return $.extend({}, options.icons);
            }

            if (!(icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }
            $.extend(options.icons, icons);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.tooltips = function(tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, options.tooltips);
            }

            if (!(tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(options.tooltips, tooltips);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.useStrict = function(useStrict) {
            if (arguments.length === 0) {
                return options.useStrict;
            }

            if (typeof useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            options.useStrict = useStrict;
            return picker;
        };

        picker.sideBySide = function(sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function(viewMode) {
            if (arguments.length === 0) {
                return options.viewMode;
            }

            if (typeof viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (viewModes.indexOf(viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
            }

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };

        picker.toolbarPlacement = function(toolbarPlacement) {
            if (arguments.length === 0) {
                return options.toolbarPlacement;
            }

            if (typeof toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            options.toolbarPlacement = toolbarPlacement;

            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetPositioning = function(widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, options.widgetPositioning);
            }

            if (({}).toString.call(widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (widgetPositioning.horizontal) {
                if (typeof widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
            }
            if (widgetPositioning.vertical) {
                if (typeof widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                options.widgetPositioning.vertical = widgetPositioning.vertical;
            }
            update();
            return picker;
        };

        picker.calendarWeeks = function(calendarWeeks) {
            if (arguments.length === 0) {
                return options.calendarWeeks;
            }

            if (typeof calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            options.calendarWeeks = calendarWeeks;
            update();
            return picker;
        };

        picker.showTodayButton = function(showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function(showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetParent = function(widgetParent) {
            if (arguments.length === 0) {
                return options.widgetParent;
            }

            if (typeof widgetParent === 'string') {
                widgetParent = $(widgetParent);
            }

            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            options.widgetParent = widgetParent;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.keepOpen = function(keepOpen) {
            if (arguments.length === 0) {
                return options.keepOpen;
            }

            if (typeof keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            options.keepOpen = keepOpen;
            return picker;
        };

        picker.focusOnShow = function(focusOnShow) {
            if (arguments.length === 0) {
                return options.focusOnShow;
            }

            if (typeof focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            options.focusOnShow = focusOnShow;
            return picker;
        };

        picker.inline = function(inline) {
            if (arguments.length === 0) {
                return options.inline;
            }

            if (typeof inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            options.inline = inline;
            return picker;
        };

        picker.clear = function() {
            clear();
            return picker;
        };

        picker.keyBinds = function(keyBinds) {
            options.keyBinds = keyBinds;
            return picker;
        };

        picker.debug = function(debug) {
            if (typeof debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            options.debug = debug;
            return picker;
        };

        picker.allowInputToggle = function(allowInputToggle) {
            if (arguments.length === 0) {
                return options.allowInputToggle;
            }

            if (typeof allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            options.allowInputToggle = allowInputToggle;
            return picker;
        };

        picker.showClose = function(showClose) {
            if (arguments.length === 0) {
                return options.showClose;
            }

            if (typeof showClose !== 'boolean') {
                throw new TypeError('showClose() expects a boolean parameter');
            }

            options.showClose = showClose;
            return picker;
        };

        picker.keepInvalid = function(keepInvalid) {
            if (arguments.length === 0) {
                return options.keepInvalid;
            }

            if (typeof keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            options.keepInvalid = keepInvalid;
            return picker;
        };

        picker.datepickerInput = function(datepickerInput) {
            if (arguments.length === 0) {
                return options.datepickerInput;
            }

            if (typeof datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            options.datepickerInput = datepickerInput;
            return picker;
        };

        picker.parseInputDate = function(parseInputDate) {
            if (arguments.length === 0) {
                return options.parseInputDate;
            }

            if (typeof parseInputDate !== 'function') {
                throw new TypeError('parseInputDate() sholud be as function');
            }

            options.parseInputDate = parseInputDate;

            return picker;
        };

        picker.disabledTimeIntervals = function(disabledTimeIntervals) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledTimeIntervals</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
            }

            if (!disabledTimeIntervals) {
                options.disabledTimeIntervals = false;
                update();
                return picker;
            }
            if (!(disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            options.disabledTimeIntervals = disabledTimeIntervals;
            update();
            return picker;
        };

        picker.disabledHours = function(hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
            ///<returns type="array">options.disabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
            }

            if (!hours) {
                options.disabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            options.disabledHours = indexGivenHours(hours);
            options.enabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.enabledHours = function(hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
            ///<returns type="array">options.enabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
            }

            if (!hours) {
                options.enabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            options.enabledHours = indexGivenHours(hours);
            options.disabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.viewDate = function(newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.viewDate">
            ///<summary>Returns the component's model current viewDate, a moment object or null if not set.</summary>
            ///<returns type="Moment">viewDate.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, viewDate, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                return viewDate.clone();
            }

            if (!newDate) {
                viewDate = date.clone();
                return picker;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            viewDate = parseInputDate(newDate);
            viewUpdate();
            return picker;
        };

        // initializing element and component attributes
        if (element.is('input')) {
            input = element;
        } else {
            input = element.find(options.datepickerInput);
            if (input.size() === 0) {
                input = element.find('input');
            } else if (!input.is('input')) {
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (element.find('.datepickerbutton').size() === 0) {
                component = element.find('.input-group-addon');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!options.inline && !input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

        if (input.prop('disabled')) {
            picker.disable();
        }
        if (input.is('input') && input.val().trim().length !== 0) {
            setValue(parseInputDate(input.val().trim()));
        } else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        if (options.inline) {
            show();
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    $.fn.datetimepicker = function(options) {
        return this.each(function() {
            var $this = $(this);
            if (!$this.data('DateTimePicker')) {
                // create a private copy of the defaults object
                options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                $this.data('DateTimePicker', dateTimePicker($this, options));
            }
        });
    };

    $.fn.datetimepicker.defaults = {
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        keyBinds: {
            up: function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
            },
            down: function(widget) {
                if (!widget) {
                    this.show();
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
            },
            'control up': function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
            },
            'control down': function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
            },
            left: function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
            },
            right: function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
            },
            pageUp: function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
            },
            pageDown: function(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || moment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
            },
            enter: function() {
                this.hide();
            },
            escape: function() {
                this.hide();
            },
            //tab: function (widget) { //this break the flow of the form. disabling for now
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
            //    if(toggle.length > 0) toggle.click();
            //},
            'control space': function(widget) {
                if (widget.find('.timepicker').is(':visible')) {
                    widget.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function() {
                this.date(moment());
            },
            'delete': function() {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };
}));
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
}(this, function a(b, c) {
    "use strict";

    function d(a) {
        var b = q[o.locale];
        return b ? b[a] : q.en[a]
    }

    function e(a, c, d) {
        a.stopPropagation(), a.preventDefault();
        var e = b.isFunction(d) && d.call(c, a) === !1;
        e || c.modal("hide")
    }

    function f(a) {
        var b, c = 0;
        for (b in a) c++;
        return c
    }

    function g(a, c) {
        var d = 0;
        b.each(a, function(a, b) {
            c(a, b, d++)
        })
    }

    function h(a) {
        var c, d;
        if ("object" != typeof a) throw new Error("Please supply an object of options");
        if (!a.message) throw new Error("Please specify a message");
        return a = b.extend({}, o, a), a.buttons || (a.buttons = {}), c = a.buttons, d = f(c), g(c, function(a, e, f) {
            if (b.isFunction(e) && (e = c[a] = {
                    callback: e
                }), "object" !== b.type(e)) throw new Error("button with key " + a + " must be an object");
            e.label || (e.label = a), e.className || (e.className = 2 >= d && f === d - 1 ? "btn-primary" : "btn-default")
        }), a
    }

    function i(a, b) {
        var c = a.length,
            d = {};
        if (1 > c || c > 2) throw new Error("Invalid argument length");
        return 2 === c || "string" == typeof a[0] ? (d[b[0]] = a[0], d[b[1]] = a[1]) : d = a[0], d
    }

    function j(a, c, d) {
        return b.extend(!0, {}, a, i(c, d))
    }

    function k(a, b, c, d) {
        var e = {
            className: "bootbox-" + a,
            buttons: l.apply(null, b)
        };
        return m(j(e, d, c), b)
    }

    function l() {
        for (var a = {}, b = 0, c = arguments.length; c > b; b++) {
            var e = arguments[b],
                f = e.toLowerCase(),
                g = e.toUpperCase();
            a[f] = {
                label: d(g)
            }
        }
        return a
    }

    function m(a, b) {
        var d = {};
        return g(b, function(a, b) {
            d[b] = !0
        }), g(a.buttons, function(a) {
            if (d[a] === c) throw new Error("button key " + a + " is not allowed (options are " + b.join("\n") + ")")
        }), a
    }
    var n = {
            dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
            header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
            footer: "<div class='modal-footer'></div>",
            closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
            form: "<form class='bootbox-form'></form>",
            inputs: {
                text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
                textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
                email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
                select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
                checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
                date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
                time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
                number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
                password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
            }
        },
        o = {
            locale: "en",
            backdrop: "static",
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        },
        p = {};
    p.alert = function() {
        var a;
        if (a = k("alert", ["ok"], ["message", "callback"], arguments), a.callback && !b.isFunction(a.callback)) throw new Error("alert requires callback property to be a function when provided");
        return a.buttons.ok.callback = a.onEscape = function() {
            return b.isFunction(a.callback) ? a.callback.call(this) : !0
        }, p.dialog(a)
    }, p.confirm = function() {
        var a;
        if (a = k("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function() {
                return a.callback.call(this, !1)
            }, a.buttons.confirm.callback = function() {
                return a.callback.call(this, !0)
            }, !b.isFunction(a.callback)) throw new Error("confirm requires a callback");
        return p.dialog(a)
    }, p.prompt = function() {
        var a, d, e, f, h, i, k;
        if (f = b(n.form), d = {
                className: "bootbox-prompt",
                buttons: l("cancel", "confirm"),
                value: "",
                inputType: "text"
            }, a = m(j(d, arguments, ["title", "callback"]), ["cancel", "confirm"]), i = a.show === c ? !0 : a.show, a.message = f, a.buttons.cancel.callback = a.onEscape = function() {
                return a.callback.call(this, null)
            }, a.buttons.confirm.callback = function() {
                var c;
                switch (a.inputType) {
                    case "text":
                    case "textarea":
                    case "email":
                    case "select":
                    case "date":
                    case "time":
                    case "number":
                    case "password":
                        c = h.val();
                        break;
                    case "checkbox":
                        var d = h.find("input:checked");
                        c = [], g(d, function(a, d) {
                            c.push(b(d).val())
                        })
                }
                return a.callback.call(this, c)
            }, a.show = !1, !a.title) throw new Error("prompt requires a title");
        if (!b.isFunction(a.callback)) throw new Error("prompt requires a callback");
        if (!n.inputs[a.inputType]) throw new Error("invalid prompt type");
        switch (h = b(n.inputs[a.inputType]), a.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                h.val(a.value);
                break;
            case "select":
                var o = {};
                if (k = a.inputOptions || [], !b.isArray(k)) throw new Error("Please pass an array of input options");
                if (!k.length) throw new Error("prompt with select requires options");
                g(k, function(a, d) {
                    var e = h;
                    if (d.value === c || d.text === c) throw new Error("given options in wrong format");
                    d.group && (o[d.group] || (o[d.group] = b("<optgroup/>").attr("label", d.group)), e = o[d.group]), e.append("<option value='" + d.value + "'>" + d.text + "</option>")
                }), g(o, function(a, b) {
                    h.append(b)
                }), h.val(a.value);
                break;
            case "checkbox":
                var q = b.isArray(a.value) ? a.value : [a.value];
                if (k = a.inputOptions || [], !k.length) throw new Error("prompt with checkbox requires options");
                if (!k[0].value || !k[0].text) throw new Error("given options in wrong format");
                h = b("<div/>"), g(k, function(c, d) {
                    var e = b(n.inputs[a.inputType]);
                    e.find("input").attr("value", d.value), e.find("label").append(d.text), g(q, function(a, b) {
                        b === d.value && e.find("input").prop("checked", !0)
                    }), h.append(e)
                })
        }
        return a.placeholder && h.attr("placeholder", a.placeholder), a.pattern && h.attr("pattern", a.pattern), a.maxlength && h.attr("maxlength", a.maxlength), f.append(h), f.on("submit", function(a) {
            a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click()
        }), e = p.dialog(a), e.off("shown.bs.modal"), e.on("shown.bs.modal", function() {
            h.focus()
        }), i === !0 && e.modal("show"), e
    }, p.dialog = function(a) {
        a = h(a);
        var d = b(n.dialog),
            f = d.find(".modal-dialog"),
            i = d.find(".modal-body"),
            j = a.buttons,
            k = "",
            l = {
                onEscape: a.onEscape
            };
        if (b.fn.modal === c) throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");
        if (g(j, function(a, b) {
                k += "<button data-bb-handler='" + a + "' type='button' class='btn " + b.className + "'>" + b.label + "</button>", l[a] = b.callback
            }), i.find(".bootbox-body").html(a.message), a.animate === !0 && d.addClass("fade"), a.className && d.addClass(a.className), "large" === a.size ? f.addClass("modal-lg") : "small" === a.size && f.addClass("modal-sm"), a.title && i.before(n.header), a.closeButton) {
            var m = b(n.closeButton);
            a.title ? d.find(".modal-header").prepend(m) : m.css("margin-top", "-10px").prependTo(i)
        }
        return a.title && d.find(".modal-title").html(a.title), k.length && (i.after(n.footer), d.find(".modal-footer").html(k)), d.on("hidden.bs.modal", function(a) {
            a.target === this && d.remove()
        }), d.on("shown.bs.modal", function() {
            d.find(".btn-primary:first").focus()
        }), "static" !== a.backdrop && d.on("click.dismiss.bs.modal", function(a) {
            d.children(".modal-backdrop").length && (a.currentTarget = d.children(".modal-backdrop").get(0)), a.target === a.currentTarget && d.trigger("escape.close.bb")
        }), d.on("escape.close.bb", function(a) {
            l.onEscape && e(a, d, l.onEscape)
        }), d.on("click", ".modal-footer button", function(a) {
            var c = b(this).data("bb-handler");
            e(a, d, l[c])
        }), d.on("click", ".bootbox-close-button", function(a) {
            e(a, d, l.onEscape)
        }), d.on("keyup", function(a) {
            27 === a.which && d.trigger("escape.close.bb")
        }), b(a.container).append(d), d.modal({
            backdrop: a.backdrop ? "static" : !1,
            keyboard: !1,
            show: !1
        }), a.show && d.modal("show"), d
    }, p.setDefaults = function() {
        var a = {};
        2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], b.extend(o, a)
    }, p.hideAll = function() {
        return b(".bootbox").modal("hide"), p
    };
    var q = {
        bg_BG: {
            OK: "ÐžÐº",
            CANCEL: "ÐžÑ‚ÐºÐ°Ð·",
            CONFIRM: "ÐŸÐ¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´Ð°Ð²Ð°Ð¼"
        },
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "ZruÅ¡it",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Î•Î½Ï„Î¬Î¾ÎµÎ¹",
            CANCEL: "Î‘ÎºÏÏÏ‰ÏƒÎ·",
            CONFIRM: "Î•Ï€Î¹Î²ÎµÎ²Î±Î¯Ï‰ÏƒÎ·"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fa: {
            OK: "Ù‚Ø¨ÙˆÙ„",
            CANCEL: "Ù„ØºÙˆ",
            CONFIRM: "ØªØ§ÛŒÛŒØ¯"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "××™×©×•×¨",
            CANCEL: "×‘×™×˜×•×œ",
            CONFIRM: "××™×©×•×¨"
        },
        hu: {
            OK: "OK",
            CANCEL: "MÃ©gsem",
            CONFIRM: "MegerÅ‘sÃ­t"
        },
        hr: {
            OK: "OK",
            CANCEL: "Odustani",
            CONFIRM: "Potvrdi"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "ã‚­ãƒ£ãƒ³ã‚»ãƒ«",
            CONFIRM: "ç¢ºèª"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "AtÅ¡aukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "ApstiprinÄt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "PotwierdÅº"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "ÐžÑ‚Ð¼ÐµÐ½Ð°",
            CONFIRM: "ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ"
        },
        sq: {
            OK: "OK",
            CANCEL: "Anulo",
            CONFIRM: "Prano"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        th: {
            OK: "à¸•à¸à¸¥à¸‡",
            CANCEL: "à¸¢à¸à¹€à¸¥à¸´à¸",
            CONFIRM: "à¸¢à¸·à¸™à¸¢à¸±à¸™"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "Ä°ptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "å–æ¶ˆ",
            CONFIRM: "ç¡®è®¤"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "å–æ¶ˆ",
            CONFIRM: "ç¢ºèª"
        }
    };
    return p.addLocale = function(a, c) {
        return b.each(["OK", "CANCEL", "CONFIRM"], function(a, b) {
            if (!c[b]) throw new Error("Please supply a translation for '" + b + "'")
        }), q[a] = {
            OK: c.OK,
            CANCEL: c.CANCEL,
            CONFIRM: c.CONFIRM
        }, p
    }, p.removeLocale = function(a) {
        return delete q[a], p
    }, p.setLocale = function(a) {
        return p.setDefaults("locale", a)
    }, p.init = function(c) {
        return a(c || b)
    }, p
});
//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' &&
        typeof require === 'function' ? factory(require('../moment')) :
        typeof define === 'function' && define.amd ? define(['../moment'], factory) :
        factory(global.moment)
}(this, function(moment) {
    'use strict';


    var zh_tw = moment.defineLocale('zh-tw', {
        months: 'ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ'.split('_'),
        monthsShort: '1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ'.split('_'),
        weekdays: 'æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­'.split('_'),
        weekdaysShort: 'é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­'.split('_'),
        weekdaysMin: 'æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­'.split('_'),
        longDateFormat: {
            LT: 'Ahé»žmmåˆ†',
            LTS: 'Ahé»žmåˆ†sç§’',
            L: 'YYYYå¹´MMMDæ—¥',
            LL: 'YYYYå¹´MMMDæ—¥',
            LLL: 'YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†',
            LLLL: 'YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†',
            l: 'YYYYå¹´MMMDæ—¥',
            ll: 'YYYYå¹´MMMDæ—¥',
            lll: 'YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†',
            llll: 'YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†'
        },
        meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
        meridiemHour: function(hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'å‡Œæ™¨' || meridiem === 'æ—©ä¸Š' || meridiem === 'ä¸Šåˆ') {
                return hour;
            } else if (meridiem === 'ä¸­åˆ') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'ä¸‹åˆ' || meridiem === 'æ™šä¸Š') {
                return hour + 12;
            }
        },
        meridiem: function(hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return 'å‡Œæ™¨';
            } else if (hm < 900) {
                return 'æ—©ä¸Š';
            } else if (hm < 1130) {
                return 'ä¸Šåˆ';
            } else if (hm < 1230) {
                return 'ä¸­åˆ';
            } else if (hm < 1800) {
                return 'ä¸‹åˆ';
            } else {
                return 'æ™šä¸Š';
            }
        },
        calendar: {
            sameDay: '[ä»Šå¤©]LT',
            nextDay: '[æ˜Žå¤©]LT',
            nextWeek: '[ä¸‹]ddddLT',
            lastDay: '[æ˜¨å¤©]LT',
            lastWeek: '[ä¸Š]ddddLT',
            sameElse: 'L'
        },
        ordinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
        ordinal: function(number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + 'æ—¥';
                case 'M':
                    return number + 'æœˆ';
                case 'w':
                case 'W':
                    return number + 'é€±';
                default:
                    return number;
            }
        },
        relativeTime: {
            future: '%så…§',
            past: '%så‰',
            s: 'å¹¾ç§’',
            m: '1 åˆ†é˜',
            mm: '%d åˆ†é˜',
            h: '1 å°æ™‚',
            hh: '%d å°æ™‚',
            d: '1 å¤©',
            dd: '%d å¤©',
            M: '1 å€‹æœˆ',
            MM: '%d å€‹æœˆ',
            y: '1 å¹´',
            yy: '%d å¹´'
        }
    });

    return zh_tw;

}));
! function(a) {
    "use strict";
    "object" == typeof exports ? module.exports = a(window.jQuery) : "function" == typeof define && define.amd ? define(["jquery"], a) : window.jQuery && !window.jQuery.fn.colorpicker && a(window.jQuery)
}(function(a) {
    "use strict";
    var b = function(b, c) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, c && a.extend(this.colors, c), b && (void 0 !== b.toLowerCase ? (b += "", this.setColor(b)) : void 0 !== b.h && (this.value = b))
    };
    b.prototype = {
        constructor: b,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function(a) {
            return "number" == typeof a ? a : isNaN(a) || null === a || "" === a || void 0 === a ? 1 : void 0 !== a.toLowerCase ? parseFloat(a) : 1
        },
        isTransparent: function(a) {
            return a ? (a = a.toLowerCase().trim(), "transparent" === a || a.match(/#?00000000/) || a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)) : !1
        },
        rgbaIsTransparent: function(a) {
            return 0 === a.r && 0 === a.g && 0 === a.b && 0 === a.a
        },
        setColor: function(a) {
            a = a.toLowerCase().trim(), a && (this.isTransparent(a) ? this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.value = this.stringToHSB(a) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        },
        stringToHSB: function(b) {
            b = b.toLowerCase();
            var c;
            "undefined" != typeof this.colors[b] && (b = this.colors[b], c = "alias");
            var d = this,
                e = !1;
            return a.each(this.stringParsers, function(a, f) {
                var g = f.re.exec(b),
                    h = g && f.parse.apply(d, [g]),
                    i = c || f.format || "rgba";
                return h ? (e = i.match(/hsla?/) ? d.RGBtoHSB.apply(d, d.HSLtoRGB.apply(d, h)) : d.RGBtoHSB.apply(d, h), d.origFormat = i, !1) : !0
            }), e
        },
        setHue: function(a) {
            this.value.h = 1 - a
        },
        setSaturation: function(a) {
            this.value.s = a
        },
        setBrightness: function(a) {
            this.value.b = 1 - a
        },
        setAlpha: function(a) {
            this.value.a = parseInt(100 * (1 - a), 10) / 100
        },
        toRGB: function(a, b, c, d) {
            a || (a = this.value.h, b = this.value.s, c = this.value.b), a *= 360;
            var e, f, g, h, i;
            return a = a % 360 / 60, i = c * b, h = i * (1 - Math.abs(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], {
                r: Math.round(255 * e),
                g: Math.round(255 * f),
                b: Math.round(255 * g),
                a: d || this.value.a
            }
        },
        toHex: function(a, b, c, d) {
            var e = this.toRGB(a, b, c, d);
            return this.rgbaIsTransparent(e) ? "transparent" : "#" + (1 << 24 | parseInt(e.r) << 16 | parseInt(e.g) << 8 | parseInt(e.b)).toString(16).substr(1)
        },
        toHSL: function(a, b, c, d) {
            a = a || this.value.h, b = b || this.value.s, c = c || this.value.b, d = d || this.value.a;
            var e = a,
                f = (2 - b) * c,
                g = b * c;
            return g /= f > 0 && 1 >= f ? f : 2 - f, f /= 2, g > 1 && (g = 1), {
                h: isNaN(e) ? 0 : e,
                s: isNaN(g) ? 0 : g,
                l: isNaN(f) ? 0 : f,
                a: isNaN(d) ? 0 : d
            }
        },
        toAlias: function(a, b, c, d) {
            var e = this.toHex(a, b, c, d);
            for (var f in this.colors)
                if (this.colors[f] === e) return f;
            return !1
        },
        RGBtoHSB: function(a, b, c, d) {
            a /= 255, b /= 255, c /= 255;
            var e, f, g, h;
            return g = Math.max(a, b, c), h = g - Math.min(a, b, c), e = 0 === h ? null : g === a ? (b - c) / h : g === b ? (c - a) / h + 2 : (a - b) / h + 4, e = (e + 360) % 6 * 60 / 360, f = 0 === h ? 0 : h / g, {
                h: this._sanitizeNumber(e),
                s: f,
                b: g,
                a: this._sanitizeNumber(d)
            }
        },
        HueToRGB: function(a, b, c) {
            return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
        },
        HSLtoRGB: function(a, b, c, d) {
            0 > b && (b = 0);
            var e;
            e = .5 >= c ? c * (1 + b) : c + b - c * b;
            var f = 2 * c - e,
                g = a + 1 / 3,
                h = a,
                i = a - 1 / 3,
                j = Math.round(255 * this.HueToRGB(f, e, g)),
                k = Math.round(255 * this.HueToRGB(f, e, h)),
                l = Math.round(255 * this.HueToRGB(f, e, i));
            return [j, k, l, this._sanitizeNumber(d)]
        },
        toString: function(a) {
            a = a || "rgba";
            var b = !1;
            switch (a) {
                case "rgb":
                    return b = this.toRGB(), this.rgbaIsTransparent(b) ? "transparent" : "rgb(" + b.r + "," + b.g + "," + b.b + ")";
                case "rgba":
                    return b = this.toRGB(), "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
                case "hsl":
                    return b = this.toHSL(), "hsl(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%)";
                case "hsla":
                    return b = this.toHSL(), "hsla(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%," + b.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return this.toAlias() || this.toHex();
                default:
                    return b
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(a) {
                return [a[1], a[2], a[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), 1]
            }
        }],
        colorNameToHex: function(a) {
            return "undefined" != typeof this.colors[a.toLowerCase()] ? this.colors[a.toLowerCase()] : !1
        }
    };
    var c = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "right",
            customClass: null,
            colorSelectors: null
        },
        d = function(d, e) {
            if (this.element = a(d).addClass("colorpicker-element"), this.options = a.extend(!0, {}, c, this.element.data(), e), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? a(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new b(this.options.color !== !1 ? this.options.color : this.getValue(), this.options.colorSelectors), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.picker = a(this.options.template), this.options.customClass && this.picker.addClass(this.options.customClass), this.options.inline ? this.picker.addClass("colorpicker-inline colorpicker-visible") : this.picker.addClass("colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format || this.options.format === !1) && this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), this.options.colorSelectors) {
                var f = this;
                a.each(this.options.colorSelectors, function(b, c) {
                    var d = a("<i />").css("background-color", c).data("class", b);
                    d.click(function() {
                        f.setValue(a(this).css("background-color"))
                    }), f.picker.find(".colorpicker-selectors").append(d)
                }), this.picker.find(".colorpicker-selectors").show()
            }
            this.picker.on("mousedown.colorpicker touchstart.colorpicker", a.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : a("body")), this.input !== !1 && (this.input.on({
                "keyup.colorpicker": a.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": a.proxy(this.change, this)
            }), this.component === !1 && this.element.on({
                "focus.colorpicker": a.proxy(this.show, this)
            }), this.options.inline === !1 && this.element.on({
                "focusout.colorpicker": a.proxy(this.hide, this)
            })), this.component !== !1 && this.component.on({
                "click.colorpicker": a.proxy(this.show, this)
            }), this.input === !1 && this.component === !1 && this.element.on({
                "click.colorpicker": a.proxy(this.show, this)
            }), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": a.proxy(this.show, this),
                "focus.colorpicker": a.proxy(this.show, this)
            }), this.update(), a(a.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    d.Color = b, d.prototype = {
        constructor: d,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (this.options.inline !== !1 || this.options.container) return !1;
            var a = this.container && this.container[0] !== document.body ? "position" : "offset",
                b = this.component || this.element,
                c = b[a]();
            "right" === this.options.align && (c.left -= this.picker.outerWidth() - b.outerWidth()), this.picker.css({
                top: c.top + b.outerHeight(),
                left: c.left
            })
        },
        show: function(b) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), a(window).on("resize.colorpicker", a.proxy(this.reposition, this)), !b || this.hasInput() && "color" !== this.input.attr("type") || b.stopPropagation && b.preventDefault && (b.stopPropagation(), b.preventDefault()), this.options.inline === !1 && a(window.document).on({
                "mousedown.colorpicker": a.proxy(this.hide, this)
            }), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), a(window).off("resize.colorpicker", this.reposition), a(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(a) {
            return a = a || this.color.toString(this.format), this.element.data("color", a), a
        },
        updateInput: function(a) {
            if (a = a || this.color.toString(this.format), this.input !== !1) {
                if (this.options.colorSelectors) {
                    var c = new b(a, this.options.colorSelectors),
                        d = c.toAlias();
                    "undefined" != typeof this.options.colorSelectors[d] && (a = d)
                }
                this.input.prop("value", a)
            }
            return a
        },
        updatePicker: function(a) {
            void 0 !== a && (this.color = new b(a, this.options.colorSelectors));
            var c = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                d = this.picker.find("i");
            return 0 !== d.length ? (this.options.horizontal === !1 ? (c = this.options.sliders, d.eq(1).css("top", c.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", c.alpha.maxTop * (1 - this.color.value.a))) : (c = this.options.slidersHorz, d.eq(1).css("left", c.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", c.alpha.maxLeft * (1 - this.color.value.a))), d.eq(0).css({
                top: c.saturation.maxTop - this.color.value.b * c.saturation.maxTop,
                left: this.color.value.s * c.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), a) : void 0
        },
        updateComponent: function(a) {
            if (a = a || this.color.toString(this.format), this.component !== !1) {
                var b = this.component.find("i").eq(0);
                b.length > 0 ? b.css({
                    backgroundColor: a
                }) : this.component.css({
                    backgroundColor: a
                })
            }
            return a
        },
        update: function(a) {
            var b;
            return (this.getValue(!1) !== !1 || a === !0) && (b = this.updateComponent(), this.updateInput(b), this.updateData(b), this.updatePicker()), b
        },
        setValue: function(a) {
            this.color = new b(a, this.options.colorSelectors), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: a
            })
        },
        getValue: function(a) {
            a = void 0 === a ? "#000000" : a;
            var b;
            return b = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === b || "" === b || null === b) && (b = a), b
        },
        hasInput: function() {
            return this.input !== !1
        },
        isDisabled: function() {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        },
        disable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        enable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(b) {
            b.pageX || b.pageY || !b.originalEvent || (b.pageX = b.originalEvent.touches[0].pageX, b.pageY = b.originalEvent.touches[0].pageY), b.stopPropagation(), b.preventDefault();
            var c = a(b.target),
                d = c.closest("div"),
                e = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!d.is(".colorpicker")) {
                if (d.is(".colorpicker-saturation")) this.currentSlider = a.extend({}, e.saturation);
                else if (d.is(".colorpicker-hue")) this.currentSlider = a.extend({}, e.hue);
                else {
                    if (!d.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = a.extend({}, e.alpha)
                }
                var f = d.offset();
                this.currentSlider.guide = d.find("i")[0].style, this.currentSlider.left = b.pageX - f.left, this.currentSlider.top = b.pageY - f.top, this.mousePointer = {
                    left: b.pageX,
                    top: b.pageY
                }, a(document).on({
                    "mousemove.colorpicker": a.proxy(this.mousemove, this),
                    "touchmove.colorpicker": a.proxy(this.mousemove, this),
                    "mouseup.colorpicker": a.proxy(this.mouseup, this),
                    "touchend.colorpicker": a.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(a) {
            a.pageX || a.pageY || !a.originalEvent || (a.pageX = a.originalEvent.touches[0].pageX, a.pageY = a.originalEvent.touches[0].pageY), a.stopPropagation(), a.preventDefault();
            var b = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((a.pageX || this.mousePointer.left) - this.mousePointer.left))),
                c = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((a.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = b + "px", this.currentSlider.guide.top = c + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, b / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, c / this.currentSlider.maxTop), "setAlpha" === this.currentSlider.callTop && this.options.format === !1 && (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(b) {
            return b.stopPropagation(), b.preventDefault(), a(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(a) {
            this.keyup(a)
        },
        keyup: function(a) {
            38 === a.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === a.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = new b(this.input.val(), this.options.colorSelectors), this.color.origFormat && this.options.format === !1 && (this.format = this.color.origFormat), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, a.colorpicker = d, a.fn.colorpicker = function(b) {
        var c, e = arguments,
            f = this.each(function() {
                var f = a(this),
                    g = f.data("colorpicker"),
                    h = "object" == typeof b ? b : {};
                g || "string" == typeof b ? "string" == typeof b && (c = g[b].apply(g, Array.prototype.slice.call(e, 1))) : f.data("colorpicker", new d(this, h))
            });
        return "getValue" === b ? c : f
    }, a.fn.colorpicker.constructor = d
});
! function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(s, !0);
                if (o) return o(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(e, t) {
        ! function() {
            "use strict";

            function e(t, n) {
                function i(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                var o;
                if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
                    for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, l = s.length; l > c; c++) a[s[c]] = i(a[s[c]], a);
                    r && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                        var i = Node.prototype.removeEventListener;
                        "click" === e ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
                    }, t.addEventListener = function(e, n, r) {
                        var i = Node.prototype.addEventListener;
                        "click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
                            e.propagationStopped || n(e)
                        }), r) : i.call(t, e, n, r)
                    }), "function" == typeof t.onclick && (o = t.onclick, t.addEventListener("click", function(e) {
                        o(e)
                    }, !1), t.onclick = null)
                }
            }
            var n = navigator.userAgent.indexOf("Windows Phone") >= 0,
                r = navigator.userAgent.indexOf("Android") > 0 && !n,
                i = /iP(ad|hone|od)/.test(navigator.userAgent) && !n,
                o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                s = i && /OS [6-7]_\d/.test(navigator.userAgent),
                a = navigator.userAgent.indexOf("BB10") > 0;
            e.prototype.needsClick = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (e.disabled) return !0;
                        break;
                    case "input":
                        if (i && "file" === e.type || e.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(e.className)
            }, e.prototype.needsFocus = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !r;
                    case "input":
                        switch (e.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !e.disabled && !e.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(e.className)
                }
            }, e.prototype.sendClick = function(e, t) {
                var n, r;
                document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
            }, e.prototype.determineEventType = function(e) {
                return r && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
            }, e.prototype.focus = function(e) {
                var t;
                i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
            }, e.prototype.updateScrollParent = function(e) {
                var t, n;
                if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
                    n = e;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            t = n, e.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                t && (t.fastClickLastScrollTop = t.scrollTop)
            }, e.prototype.getTargetElementFromEventTarget = function(e) {
                return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
            }, e.prototype.onTouchStart = function(e) {
                var t, n, r;
                if (e.targetTouches.length > 1) return !0;
                if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
                    if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                    if (!o) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
            }, e.prototype.touchHasMoved = function(e) {
                var t = e.changedTouches[0],
                    n = this.touchBoundary;
                return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
            }, e.prototype.onTouchMove = function(e) {
                return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
            }, e.prototype.findControl = function(e) {
                return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, e.prototype.onTouchEnd = function(e) {
                var t, n, a, c, l, u = this.targetElement;
                if (!this.trackingClick) return !0;
                if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (l = e.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
                    if (t = this.findControl(u)) {
                        if (this.focus(u), r) return !1;
                        u = t
                    }
                } else if (this.needsFocus(u)) return e.timeStamp - n > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), i && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
                return i && !o && (c = u.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
            }, e.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null
            }, e.prototype.onMouse = function(e) {
                return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
            }, e.prototype.onClick = function(e) {
                var t;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
            }, e.prototype.destroy = function() {
                var e = this.layer;
                r && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, e.notNeeded = function(e) {
                var t, n, i, o;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!r) return !0;
                    if (t = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
                return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction ? !0 : !1)
            }, e.attach = function(t, n) {
                return new e(t, n)
            }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return e
            }) : "undefined" != typeof t && t.exports ? (t.exports = e.attach, t.exports.FastClick = e) : window.FastClick = e
        }()
    }, {}],
    2: [function(e) {
        window.Origami = {
            fastclick: e("./bower_components/fastclick/lib/fastclick.js")
        }
    }, {
        "./bower_components/fastclick/lib/fastclick.js": 1
    }]
}, {}, [2]);;
(function() {
    function trigger() {
        document.dispatchEvent(new CustomEvent('o.load'))
    };
    document.addEventListener('load', trigger);
    if (document.readyState === 'ready') trigger();
}());
(function() {
    function trigger() {
        document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'))
    };
    document.addEventListener('DOMContentLoaded', trigger);
    if (document.readyState === 'interactive') trigger();
}())
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.6
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
    throw new Error("AdminLTE requires jQuery");
}

/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
    //Add slimscroll to navbar menus
    //This requires you to load the slimscroll plugin
    //in every page before app.js
    navbarMenuSlimscroll: true,
    navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
    navbarMenuHeight: "200px", //The height of the inner menu
    //General animation speed for JS animated elements such as box collapse/expand and
    //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
    //'fast', 'normal', or 'slow'
    animationSpeed: 500,
    //Sidebar push menu toggle button selector
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    //Activate sidebar push menu
    sidebarPushMenu: true,
    //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
    sidebarSlimScroll: true,
    //Enable sidebar expand on hover effect for sidebar mini
    //This option is forced to true if both the fixed layout and sidebar mini
    //are used together
    sidebarExpandOnHover: false,
    //BoxRefresh Plugin
    enableBoxRefresh: true,
    //Bootstrap.js tooltip
    enableBSToppltip: true,
    BSTooltipSelector: "[data-toggle='tooltip']",
    //Enable Fast Click. Fastclick.js creates a more
    //native touch experience with touch devices. If you
    //choose to enable the plugin, make sure you load the script
    //before AdminLTE's app.js
    enableFastclick: false,
    //Control Sidebar Options
    enableControlSidebar: true,
    controlSidebarOptions: {
        //Which button should trigger the open/close event
        toggleBtnSelector: "[data-toggle='control-sidebar']",
        //The sidebar selector
        selector: ".control-sidebar",
        //Enable slide over content
        slide: true
    },
    //Box Widget Plugin. Enable this plugin
    //to allow boxes to be collapsed and/or removed
    enableBoxWidget: true,
    //Box Widget plugin options
    boxWidgetOptions: {
        boxWidgetIcons: {
            //Collapse icon
            collapse: 'fa-minus',
            //Open icon
            open: 'fa-plus',
            //Remove icon
            remove: 'fa-times'
        },
        boxWidgetSelectors: {
            //Remove button selector
            remove: '[data-widget="remove"]',
            //Collapse button selector
            collapse: '[data-widget="collapse"]'
        }
    },
    //Direct Chat plugin options
    directChat: {
        //Enable direct chat by default
        enable: true,
        //The button to open and close the chat contacts pane
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    //Define the set of colors to use globally around the website
    colors: {
        lightBlue: "#3c8dbc",
        red: "#f56954",
        green: "#00a65a",
        aqua: "#00c0ef",
        yellow: "#f39c12",
        blue: "#0073b7",
        navy: "#001F3F",
        teal: "#39CCCC",
        olive: "#3D9970",
        lime: "#01FF70",
        orange: "#FF851B",
        fuchsia: "#F012BE",
        purple: "#8E24AA",
        maroon: "#D81B60",
        black: "#222222",
        gray: "#d2d6de"
    },
    //The standard screen sizes that bootstrap uses.
    //If you change these in the variables.less file, change
    //them here too.
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function() {
    "use strict";

    //Fix for IE page transitions
    $("body").removeClass("hold-transition");

    //Extend options if external options exist
    if (typeof AdminLTEOptions !== "undefined") {
        $.extend(true,
            $.AdminLTE.options,
            AdminLTEOptions);
    }

    //Easy access to options
    var o = $.AdminLTE.options;

    //Set up the object
    _init();

    //Activate the layout maker
    $.AdminLTE.layout.activate();

    //Enable sidebar tree view controls
    $.AdminLTE.tree('.sidebar');

    //Enable control sidebar
    if (o.enableControlSidebar) {
        $.AdminLTE.controlSidebar.activate();
    }

    //Add slimscroll to navbar dropdown
    if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
        $(".navbar .menu").slimscroll({
            height: o.navbarMenuHeight,
            alwaysVisible: false,
            size: o.navbarMenuSlimscrollWidth
        }).css("width", "100%");
    }

    //Activate sidebar push menu
    if (o.sidebarPushMenu) {
        $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
    }

    //Activate Bootstrap tooltip
    if (o.enableBSToppltip) {
        $('body').tooltip({
            selector: o.BSTooltipSelector
        });
    }

    //Activate box widget
    if (o.enableBoxWidget) {
        $.AdminLTE.boxWidget.activate();
    }

    //Activate fast click
    if (o.enableFastclick && typeof FastClick != 'undefined') {
        FastClick.attach(document.body);
    }

    //Activate direct chat widget
    if (o.directChat.enable) {
        $(document).on('click', o.directChat.contactToggleSelector, function() {
            var box = $(this).parents('.direct-chat').first();
            box.toggleClass('direct-chat-contacts-open');
        });
    }

    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     */
    $('.btn-group[data-toggle="btn-toggle"]').each(function() {
        var group = $(this);
        $(this).find(".btn").on('click', function(e) {
            group.find(".btn.active").removeClass("active");
            $(this).addClass("active");
            e.preventDefault();
        });

    });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
    'use strict';
    /* Layout
     * ======
     * Fixes the layout height in case min-height fails.
     *
     * @type Object
     * @usage $.AdminLTE.layout.activate()
     *        $.AdminLTE.layout.fix()
     *        $.AdminLTE.layout.fixSidebar()
     */
    $.AdminLTE.layout = {
        activate: function() {
            var _this = this;
            _this.fix();
            _this.fixSidebar();
            $(window, ".wrapper").resize(function() {
                _this.fix();
                _this.fixSidebar();
            });
        },
        fix: function() {
            //Get window height and the wrapper height
            var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
            var window_height = $(window).height();
            var sidebar_height = $(".sidebar").height();
            //Set the min-height of the content and sidebar based on the
            //the height of the document.
            if ($("body").hasClass("fixed")) {
                $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
            } else {
                var postSetWidth;
                if (window_height >= sidebar_height) {
                    $(".content-wrapper, .right-side").css('min-height', window_height - neg);
                    postSetWidth = window_height - neg;
                } else {
                    $(".content-wrapper, .right-side").css('min-height', sidebar_height);
                    postSetWidth = sidebar_height;
                }

                //Fix for the control sidebar height
                var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                if (typeof controlSidebar !== "undefined") {
                    if (controlSidebar.height() > postSetWidth)
                        $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
                }

            }
        },
        fixSidebar: function() {
            //Make sure the body tag has the .fixed class
            if (!$("body").hasClass("fixed")) {
                if (typeof $.fn.slimScroll != 'undefined') {
                    $(".sidebar").slimScroll({
                        destroy: true
                    }).height("auto");
                }
                return;
            } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
                window.console.error("Error: the fixed layout requires the slimscroll plugin!");
            }
            //Enable slimscroll for fixed layout
            if ($.AdminLTE.options.sidebarSlimScroll) {
                if (typeof $.fn.slimScroll != 'undefined') {
                    //Destroy if it exists
                    $(".sidebar").slimScroll({
                        destroy: true
                    }).height("auto");
                    //Add slimscroll
                    $(".sidebar").slimscroll({
                        height: ($(window).height() - $(".main-header").height()) + "px",
                        color: "rgba(0,0,0,0.2)",
                        size: "3px"
                    });
                }
            }
        }
    };

    /* PushMenu()
     * ==========
     * Adds the push menu functionality to the sidebar.
     *
     * @type Function
     * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
     */
    $.AdminLTE.pushMenu = {
        activate: function(toggleBtn) {
            //Get the screen sizes
            var screenSizes = $.AdminLTE.options.screenSizes;

            //Enable sidebar toggle
            $(document).on('click', toggleBtn, function(e) {
                e.preventDefault();

                //Enable sidebar push menu
                if ($(window).width() > (screenSizes.sm - 1)) {
                    if ($("body").hasClass('sidebar-collapse')) {
                        $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                    } else {
                        $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    }
                }
                //Handle sidebar push menu for small screens
                else {
                    if ($("body").hasClass('sidebar-open')) {
                        $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    } else {
                        $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                    }
                }
            });

            $(".content-wrapper").click(function() {
                //Enable hide menu when clicking on the content-wrapper on small screens
                if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
                    $("body").removeClass('sidebar-open');
                }
            });

            //Enable expand on hover for sidebar mini
            if ($.AdminLTE.options.sidebarExpandOnHover ||
                ($('body').hasClass('fixed') &&
                    $('body').hasClass('sidebar-mini'))) {
                this.expandOnHover();
            }
        },
        expandOnHover: function() {
            var _this = this;
            var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
            //Expand sidebar on hover
            $('.main-sidebar').hover(function() {
                if ($('body').hasClass('sidebar-mini') &&
                    $("body").hasClass('sidebar-collapse') &&
                    $(window).width() > screenWidth) {
                    _this.expand();
                }
            }, function() {
                if ($('body').hasClass('sidebar-mini') &&
                    $('body').hasClass('sidebar-expanded-on-hover') &&
                    $(window).width() > screenWidth) {
                    _this.collapse();
                }
            });
        },
        expand: function() {
            $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
        },
        collapse: function() {
            if ($('body').hasClass('sidebar-expanded-on-hover')) {
                $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
            }
        }
    };

    /* Tree()
     * ======
     * Converts the sidebar into a multilevel
     * tree view menu.
     *
     * @type Function
     * @Usage: $.AdminLTE.tree('.sidebar')
     */
    $.AdminLTE.tree = function(menu) {
        var _this = this;
        var animationSpeed = $.AdminLTE.options.animationSpeed;
        $(document).off('click', menu + ' li a')
            .on('click', menu + ' li a', function(e) {
                //Get the clicked link and the next element
                var $this = $(this);
                var checkElement = $this.next();

                //Check if the next element is a menu and is visible
                if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
                    //Close the menu
                    checkElement.slideUp(animationSpeed, function() {
                        checkElement.removeClass('menu-open');
                        //Fix the layout in case the sidebar stretches over the height of the window
                        //_this.layout.fix();
                    });
                    checkElement.parent("li").removeClass("active");
                }
                //If the menu is not visible
                else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                    //Get the parent menu
                    var parent = $this.parents('ul').first();
                    //Close all open menus within the parent
                    var ul = parent.find('ul:visible').slideUp(animationSpeed);
                    //Remove the menu-open class from the parent
                    ul.removeClass('menu-open');
                    //Get the parent li
                    var parent_li = $this.parent("li");

                    //Open the target menu and add the menu-open class
                    checkElement.slideDown(animationSpeed, function() {
                        //Add the class active to the parent li
                        checkElement.addClass('menu-open');

                        //éš¨ä¾¿é»žæ“Šliå°±æ´—æŽ‰activeClass
                        // parent.find('li.active').removeClass('active');

                        parent_li.addClass('active');
                        //Fix the layout in case the sidebar stretches over the height of the window
                        _this.layout.fix();
                    });
                }
                //if this isn't a link, prevent the page from being redirected
                if (checkElement.is('.treeview-menu')) {
                    e.preventDefault();
                }
            });
    };

    /* ControlSidebar
     * ==============
     * Adds functionality to the right sidebar
     *
     * @type Object
     * @usage $.AdminLTE.controlSidebar.activate(options)
     */
    $.AdminLTE.controlSidebar = {
        //instantiate the object
        activate: function() {
            //Get the object
            var _this = this;
            //Update options
            var o = $.AdminLTE.options.controlSidebarOptions;
            //Get the sidebar
            var sidebar = $(o.selector);
            //The toggle button
            var btn = $(o.toggleBtnSelector);

            //Listen to the click event
            btn.on('click', function(e) {
                e.preventDefault();
                //If the sidebar is not open
                if (!sidebar.hasClass('control-sidebar-open') &&
                    !$('body').hasClass('control-sidebar-open')) {
                    //Open the sidebar
                    _this.open(sidebar, o.slide);
                } else {
                    _this.close(sidebar, o.slide);
                }
            });

            //If the body has a boxed layout, fix the sidebar bg position
            var bg = $(".control-sidebar-bg");
            _this._fix(bg);

            //If the body has a fixed layout, make the control sidebar fixed
            if ($('body').hasClass('fixed')) {
                _this._fixForFixed(sidebar);
            } else {
                //If the content height is less than the sidebar's height, force max height
                if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
                    _this._fixForContent(sidebar);
                }
            }
        },
        //Open the control sidebar
        open: function(sidebar, slide) {
            //Slide over content
            if (slide) {
                sidebar.addClass('control-sidebar-open');
            } else {
                //Push the content by adding the open class to the body instead
                //of the sidebar itself
                $('body').addClass('control-sidebar-open');
            }
        },
        //Close the control sidebar
        close: function(sidebar, slide) {
            if (slide) {
                sidebar.removeClass('control-sidebar-open');
            } else {
                $('body').removeClass('control-sidebar-open');
            }
        },
        _fix: function(sidebar) {
            var _this = this;
            if ($("body").hasClass('layout-boxed')) {
                sidebar.css('position', 'absolute');
                sidebar.height($(".wrapper").height());
                if (_this.hasBindedResize) {
                    return;
                }
                $(window).resize(function() {
                    _this._fix(sidebar);
                });
                _this.hasBindedResize = true;
            } else {
                sidebar.css({
                    'position': 'fixed',
                    'height': 'auto'
                });
            }
        },
        _fixForFixed: function(sidebar) {
            sidebar.css({
                'position': 'fixed',
                'max-height': '100%',
                'overflow': 'auto',
                'padding-bottom': '50px'
            });
        },
        _fixForContent: function(sidebar) {
            $(".content-wrapper, .right-side").css('min-height', sidebar.height());
        }
    };

    /* BoxWidget
     * =========
     * BoxWidget is a plugin to handle collapsing and
     * removing boxes from the screen.
     *
     * @type Object
     * @usage $.AdminLTE.boxWidget.activate()
     *        Set all your options in the main $.AdminLTE.options object
     */
    $.AdminLTE.boxWidget = {
        selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
        icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
        animationSpeed: $.AdminLTE.options.animationSpeed,
        activate: function(_box) {
            var _this = this;
            if (!_box) {
                _box = document; // activate all boxes per default
            }
            //Listen for collapse event triggers
            $(_box).on('click', _this.selectors.collapse, function(e) {
                e.preventDefault();
                _this.collapse($(this));
            });

            //Listen for remove event triggers
            $(_box).on('click', _this.selectors.remove, function(e) {
                e.preventDefault();
                _this.remove($(this));
            });
        },
        collapse: function(element) {
            var _this = this;
            //Find the box parent
            var box = element.parents(".box").first();
            //Find the body and the footer
            var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
            if (!box.hasClass("collapsed-box")) {
                //Convert minus into plus
                element.children(":first")
                    .removeClass(_this.icons.collapse)
                    .addClass(_this.icons.open);
                //Hide the content
                box_content.slideUp(_this.animationSpeed, function() {
                    box.addClass("collapsed-box");
                });
            } else {
                //Convert plus into minus
                element.children(":first")
                    .removeClass(_this.icons.open)
                    .addClass(_this.icons.collapse);
                //Show the content
                box_content.slideDown(_this.animationSpeed, function() {
                    box.removeClass("collapsed-box");
                });
            }
        },
        remove: function(element) {
            //Find the box parent
            var box = element.parents(".box").first();
            box.slideUp(this.animationSpeed);
        }
    };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function($) {

    "use strict";

    $.fn.boxRefresh = function(options) {

        // Render options
        var settings = $.extend({
            //Refresh button selector
            trigger: ".refresh-btn",
            //File source to be loaded (e.g: ajax/src.php)
            source: "",
            //Callbacks
            onLoadStart: function(box) {
                return box;
            }, //Right after the button has been clicked
            onLoadDone: function(box) {
                return box;
            } //When the source has been loaded

        }, options);

        //The overlay
        var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

        return this.each(function() {
            //if a source is specified
            if (settings.source === "") {
                if (window.console) {
                    window.console.log("Please specify a source first - boxRefresh()");
                }
                return;
            }
            //the box
            var box = $(this);
            //the button
            var rBtn = box.find(settings.trigger).first();

            //On trigger click
            rBtn.on('click', function(e) {
                e.preventDefault();
                //Add loading overlay
                start(box);

                //Perform ajax call
                box.find(".box-body").load(settings.source, function() {
                    done(box);
                });
            });
        });

        function start(box) {
            //Add overlay and loading img
            box.append(overlay);

            settings.onLoadStart.call(box);
        }

        function done(box) {
            //Remove overlay and loading img
            box.find(overlay).remove();

            settings.onLoadDone.call(box);
        }

    };

})(jQuery);

/*
 * EXPLICIT BOX CONTROLS
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 * @usage $("#box-widget").toggleBox();
 * @usage $("#box-widget").removeBox();
 */
(function($) {

    'use strict';

    $.fn.activateBox = function() {
        $.AdminLTE.boxWidget.activate(this);
    };

    $.fn.toggleBox = function() {
        var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
        $.AdminLTE.boxWidget.collapse(button);
    };

    $.fn.removeBox = function() {
        var button = $($.AdminLTE.boxWidget.selectors.remove, this);
        $.AdminLTE.boxWidget.remove(button);
    };

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function($) {

    'use strict';

    $.fn.todolist = function(options) {
        // Render options
        var settings = $.extend({
            //When the user checks the input
            onCheck: function(ele) {
                return ele;
            },
            //When the user unchecks the input
            onUncheck: function(ele) {
                return ele;
            }
        }, options);

        return this.each(function() {

            if (typeof $.fn.iCheck != 'undefined') {
                $('input', this).on('ifChecked', function() {
                    var ele = $(this).parents("li").first();
                    ele.toggleClass("done");
                    settings.onCheck.call(ele);
                });

                $('input', this).on('ifUnchecked', function() {
                    var ele = $(this).parents("li").first();
                    ele.toggleClass("done");
                    settings.onUncheck.call(ele);
                });
            } else {
                $('input', this).on('change', function() {
                    var ele = $(this).parents("li").first();
                    ele.toggleClass("done");
                    if ($('input', ele).is(":checked")) {
                        settings.onCheck.call(ele);
                    } else {
                        settings.onUncheck.call(ele);
                    }
                });
            }
        });
    };
}(jQuery));

$(function() {
    if ($(".mceEditor").length) {
        tinyMCE.init({
            subfolder: "",
            relative_urls: false,
            language: 'zh_TW',
            mode: "specific_textareas",
            editor_selector: "mceEditor",
            menubar: false,
            plugins: [
                'advlist autolink  link image charmap preview anchor lists',
                'searchreplace code',
                'media table contextmenu paste code jbimages'
            ],
            toolbar: 'undo redo | fontselect fontsizeselect | table charmap searchreplace | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image jbimages | newdocument code preview',
            font_formats: 'å¾®è»Ÿæ­£é»‘é«”=å¾®è»Ÿæ­£é»‘é«”,Microsoft JhengHei;' + 'æ–°ç´°æ˜Žé«”=æ–°ç´°æ˜Žé«”,PMingLiU;' + 'æ¨™æ¥·é«”=æ¨™æ¥·é«”,DFKai-sb;' + 'Andale Mono=andale mono,times;' + 'Arial=arial,helvetica,sans-serif;' + 'Arial Black=arial black,avant garde;' + 'Book Antiqua=book antiqua,palatino;' + 'Comic Sans MS=comic sans ms,sans-serif;' + 'Courier New=courier new,courier;' + 'Georgia=georgia,palatino;' + 'Helvetica=helvetica;' + 'Impact=impact,chicago;' + 'Symbol=symbol;' + 'Tahoma=tahoma,arial,helvetica,sans-serif;' + 'Terminal=terminal,monaco;' + 'Times New Roman=times new roman,times;' + 'Trebuchet MS=trebuchet ms,geneva;' + 'Verdana=verdana,geneva;' + 'Webdings=webdings;' + 'Wingdings=wingdings,zapf dingbats'
        });
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    //Date picker
    if ($('.datetimepicker').length) {
        $('.datetimepicker').each(function() {
            $(this).datetimepicker({
                locale: 'zh-tw',
                format: 'YYYY-MM-DD HH:mm:ss'
            });
        })
    }
    if ($('.datepicker').length) {
        $('.datepicker').each(function() {
            $(this).datetimepicker({
                locale: 'zh-tw',
                format: 'YYYY-MM-DD'
            });
        })
    }

    //Initialize Select2 Elements
    if ($('.select2').length) {
        $(".select2").select2();
    }

    //Colorpicker
    if ($('.mycolorpicker').length) {
        $('.mycolorpicker').colorpicker();
    }

    //nest select2å°ˆç”¨
    if ($('.selectWithGroup').length || $('.selectGroup').length) {
        $('.selectWithGroup, .selectGroup').select2({
            templateResult: function(data) {
                if (!data.element) {
                    return data.text;
                }
                var $element = $(data.element);
                var $wrapper = $('<span></span>');
                $wrapper.addClass($element[0].className);
                $wrapper.text(data.text);

                return $wrapper;
            }
        });
    }

    //confirm-ajax è‹¥methodç‚ºdelete or patchéœ€ä½¿ç”¨data(method)
    $('.confirm-ajax').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            text = 'ç¢ºå®š' + $(this).text() + 'å—Žï¼Ÿ',
            _method = $(this).data('method') ? $(this).data('method') : 'post',
            action = $(this).attr('href');
        bootbox.confirm({
            message: text,
            buttons: {
                confirm: {
                    label: 'æ˜¯',
                    className: 'btn-primary btn-sm'
                },
                cancel: {
                    label: 'å¦',
                    className: 'btn-default pull-left btn-sm'
                }
            },
            size: 'small',
            callback: function(result) {
                if (result) {
                    $.ajax({
                        url: action,
                        type: 'post',
                        data: {
                            _method: _method
                        }
                    }).success(function(data) {
                        if (data.status === 'success') {
                            $this.parent().parent('tr').remove();
                            $('.box-info').before('<div class="alert alert-dismissible alert-success"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">Ã—</button> <i class="icon fa fa-check"></i>' + data.msg + '</div>');
                        }
                    });
                }
            }
        });
        return false;
    });
})

/* confirm bootbox
 * ç•¶<form onsubmit="return confirmDelete(this);">
 */
function confirmFormSubmit(thisForm, message) {
    var form = thisForm;
    bootbox.confirm({
        message: message,
        buttons: {
            confirm: {
                label: 'delete',
                className: 'btn-primary btn-sm'
            },
            cancel: {
                label: 'cancel',
                className: 'btn-default pull-left btn-sm'
            }
        },
        size: 'small',
        callback: function(result) {
            if (result) {
                form.submit();
            }
        }
    });
    return false;
}

/*
 * size:'large','small'
 * */
function bootAlert(message, size) {
    bootbox.alert({
        message: message,
        size: size,
        buttons: {
            ok: {
                label: 'OK',
                className: 'btn-primary btn-sm'
            }
        },
    })
}
//# sourceMappingURL=admin.js.map