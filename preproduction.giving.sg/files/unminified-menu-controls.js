jQuery(document).ready(function(e) {
    var b = 1200,
        i = e("#main-nav"),
        d = e("#uf-dockbar-cart-trigger"),
        g = e("#uf-dockbar-sidebar-trigger"),
        h = e("#uf-dockbar-hamburger-menu"),
        k = e("#uf-dockbar-cart"),
        f = e("#uf-dockbar-sidebar"),
        j = e("#uf-dockbar-shadow-layer"),
        c = e("#uf-dockbar-search-trigger"),
        a = e("#uf-dockbar-search-desktop");
        w = e("#uf-dockbar-search-desktop-close");
    c.on("click", function(l) {
        l.preventDefault();
        if (a.hasClass("active")) {
            a.removeClass("active");
            c.css("opacity", "1");
        }
        if (a.hasClass("closing")) {
            a.removeClass("closing").addClass("active");
            c.css("opacity", "0");
            setTimeout(function() {
                a.find("input:first").focus()
            }, 100)
        } else {
            a.addClass("active");
            c.css("opacity", "0");
            setTimeout(function() {
                a.find("input:first").focus()
            }, 100)
        }
    });
    w.on("click", function(l) {
        l.preventDefault();
        if (a.hasClass("active")) {
            a.removeClass("active").addClass('closing');
            c.css("opacity", "1");
        }
    });
    h.on("click", function(l) {
        l.preventDefault();
        k.removeClass("speed-in");
        f.removeClass("speed-in");
        toggle_panel_visibility(i, j, e("body"))
    });
    d.on("click", function(l) {
        l.preventDefault();
        i.removeClass("speed-in");
        f.removeClass("speed-in");
        toggle_panel_visibility(k, j, e("body"))
    });
    g.on("click", function(l) {
        l.preventDefault();
        i.removeClass("speed-in");
        k.removeClass("speed-in");
        toggle_panel_visibility(f, j, e("body"))
    });
    j.on("click", function() {
        j.removeClass("is-visible");
        if (k.hasClass("speed-in")) {
            k.removeClass("speed-in").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                e("body").removeClass("overflow-hidden")
            });
            i.removeClass("speed-in");
            f.removeClass("speed-in")
        } else {
            if (i.hasClass("speed-in")) {
                i.removeClass("speed-in").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    e("body").removeClass("overflow-hidden")
                });
                k.removeClass("speed-in");
                f.removeClass("speed-in")
            } else {
                f.removeClass("speed-in").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    e("body").removeClass("overflow-hidden")
                });
                i.removeClass("speed-in");
                k.removeClass("speed-in")
            }
        }
    });
    move_navigation(i, b);
    e(window).on("resize", function() {
        move_navigation(i, b);
        if (e(window).width() >= b && i.hasClass("speed-in")) {
            i.removeClass("speed-in");
            j.removeClass("is-visible");
            e("body").removeClass("overflow-hidden")
        }
    })
});

function toggle_panel_visibility(b, a, c) {
    if (b.hasClass("speed-in")) {
        b.removeClass("speed-in").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            c.removeClass("overflow-hidden")
        });
        a.removeClass("is-visible")
    } else {
        b.addClass("speed-in").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            c.addClass("overflow-hidden")
        });
        a.addClass("is-visible")
    }
}

function move_navigation(b, a) {
    if ($(window).width() >= a) {
        b.detach();
        b.appendTo("#main-nav-header")
    } else {
        b.detach();
        b.insertAfter("#main-nav-header")
    }
}
