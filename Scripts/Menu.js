﻿
function myMenu() {

    var url = GetUrl('Template', 'ControlarMenu');

        $.ajax({
            type: 'POST',
            url: url,
            data: { },
            success: function (data) {
                var n = 1;
                lmenu = data.menu;

                var removelist = window.parent.document.getElementById("side-main-menu");
                var lis = removelist.querySelectorAll("li");
                for (var i = 0; i < lis.length; i++) {
                    var li = lis[i];
                    li.parentElement.removeChild(li);
                }

                for (var k = 0; k < lmenu.length; k++) {
                    var list = window.parent.document.getElementById("side-main-menu");

                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    var span = document.createElement('span');
                    var span2 = document.createElement('span');
                    var i = document.createElement('i');
                    a.href = "javascript:";
                    a.className = "nav-link";
                    span.className = "pcoded-micon";
                    i.className = lmenu[k].icon;
                    span.appendChild(i);
                    span2.className = "pcoded-mtext";
                    txt = document.createTextNode(lmenu[k].titule);
                    span2.appendChild(txt);
                    a.appendChild(span);
                    a.appendChild(span2);
                 
                    li.className = "nav-item pcoded-hasmenu";
                    li.appendChild(a);


                    var ul = document.createElement('ul');
                    ul.className = "pcoded-submenu";
         



                    for (var l = 0; l < lmenu[k].lSubMenu.length; l++) {
                        var li2 = document.createElement('li');
                        var aa = document.createElement('a');
                        var link;
                  
                        aa.setAttribute("onclick", "addTab(this)");
                        aa.className = "";
                        aa.title = lmenu[k].lSubMenu[l].titule;
                        aa.setAttribute("src", lmenu[k].lSubMenu[l].action);
                        li2.className = "";
                        aa.innerText = lmenu[k].lSubMenu[l].titule;
                        ul.appendChild(li2);
                        li2.appendChild(aa);
                    }
                    li.appendChild(ul);

                    list.appendChild(li);
                    n += 1;
                }
                GetEventos();
            },
            error: function (data) {
                console.log(data)
            }
        });

}
function GetUrl(controller, action, id) {
    var _ret = $('#__base').val() + "{0}/{1}/{2}";
    if (typeof (id) !== 'undefined')
        _ret = _ret.replace("{2}", id);
    else
        _ret = _ret.replace("/{2}", "");
    return _ret.replace("{0}", controller).replace("{1}", action);
}
function GetEventos() {
    "use strict";
    function menuhrres() {
        $(window)[0].innerWidth < 768 ? setTimeout(function () {
            $(".sidenav-horizontal-wrapper").addClass("sidenav-horizontal-wrapper-dis").removeClass("sidenav-horizontal-wrapper"),
                $(".theme-horizontal").addClass("theme-horizontal-dis").removeClass("theme-horizontal")
        }, 400) : setTimeout(
            function () {
                $(".sidenav-horizontal-wrapper-dis").addClass("sidenav-horizontal-wrapper").removeClass("sidenav-horizontal-wrapper-dis"),
                    $(".theme-horizontal-dis").addClass("theme-horizontal").removeClass("theme-horizontal-dis")
            }, 400)
    }
    function togglemenu() {
        var e = $(window)[0].innerWidth; 0 == $(".pcoded-navbar").hasClass("theme-horizontal")
            && (e <= 1200 && e >= 992 && $(".pcoded-navbar").addClass("navbar-collapsed"), e < 992 &&
                $(".pcoded-navbar").removeClass("navbar-collapsed"))
    }
    function toggleFullScreen() {
        $(window).height(); document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ?
                document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() :
            document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ?
                document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
            $(".full-screen > i").toggleClass("icon-maximize"), $(".full-screen > i").toggleClass("icon-minimize")
    }
    $(document).ready(
        function () {
            function e(e) { 13 == e.which && s(e) }
            function s(e) {
                $(".header-chat .main-friend-chat").append('<div class="media chat-messages"><div class="media-body chat-menu-reply"><div class=""><p class="chat-cont">' +
                    $(".h-send-chat").val() + '</p></div><p class="chat-time">now</p></div></div>'), d($(".h-send-chat").val()), i(),
                    $(".h-send-chat").val(null)
            }
            function d(e) {
                setTimeout(function () { $(".header-chat .main-friend-chat").append('<div class="media chat-messages typing"><a class="media-left photo-table" href="javascript:"><img class="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"></a><div class="media-body chat-menu-content"><div class="rem-msg"><p class="chat-cont">Typing . . .</p></div><p class="chat-time">now</p></div></div>'), i() }, 1500), setTimeout(function () { document.getElementsByClassName("rem-msg")[0].innerHTML = "<p class='chat-cont'>hello superior personality you write</p> <p class='chat-cont'>" + e + "</p>", $(".rem-msg").removeClass("rem-msg"), $(".typing").removeClass("typing"), i() }, 3e3)
            } function i() {
                var e = $(".header-chat .main-friend-chat"); $(".main-chat-cont.scroll-div").slimScroll({ scrollBy: e.outerHeight(), animate: !0 })
            } togglemenu(), menuhrres(); var o = $(window)[0].innerWidth; if ($('[data-toggle="tooltip"]').tooltip(),
                $('[data-toggle="popover"]').popover(), $(".to-do-list input[type=checkbox]").on("click",
                    function () {
                        $(this).prop("checked") ? $(this).parent().addClass("done-task") :
                            $(this).parent().removeClass("done-task")
                    }), $(".mobile-menu").on("click", function () {
                        $(this).toggleClass("on")
                    }), $("#mobile-collapse").on("click", function () { $(".pcoded-navbar").toggleClass("navbar-collapsed") }),
                $(".search-btn").on("click", function () {
                    $(this); $(".main-search").addClass("open"),
                        $(".main-search .form-control").css({ width: "90px" })
                }), $(".search-close").on("click", function () {
                    $(this); $(".main-search").removeClass("open"),
                        $(".main-search .form-control").css({ width: "0" })
                }), $("#search-friends").on("keyup", function () {
                    var e = $(this).val().toLowerCase();
                    $(".header-user-list .userlist-box .media-body .chat-header").each(
                        function () { var s = $(this).text().toLowerCase(); $(this).closest(".userlist-box")[-1 !== s.indexOf(e) ? "show" : "hide"]() })
                }), $("#m-search").on("keyup", function () {
                    var e = $(this).val().toLowerCase(), s = $(this).val().length;
                    $(".pcoded-inner-navbar > li").each(function () { var d = $(this).attr("data-username"); if (d) var i = d.toLowerCase(); if (i) { -1 !== i.indexOf(e) ? $(this).show() : $(this).hide(), s > 0 ? $(".pcoded-menu-caption").hide() : $(".pcoded-menu-caption").show() } })
                }), $(".displayChatbox").on("click", function () { $(".header-user-list").toggleClass("open") }),
                $(".header-user-list .userlist-box").on("click", function () {
                    $(".header-chat").addClass("open"),
                        $(".header-user-list").toggleClass("msg-open")
                }), $(".h-back-user-list").on("click", function () {
                    $(".header-chat").removeClass("open"),
                        $(".header-user-list").removeClass("msg-open")
                }), $(".h-close-text").on("click", function () {
                    $(".header-chat").removeClass("open"), $(".header-user-list").removeClass("open"),
                        $(".header-user-list").removeClass("msg-open")
                }), $(".btn-attach").click(function () { $(".chat-attach").trigger("click") }),
                $(".h-send-chat").on("keyup", function (s) { e(s) }), $(".btn-send").on("click", function (e) { s(e) }), o <= 991 &&
                ($(".main-search").addClass("open"), $(".main-search .form-control").css({ width: "90px" })),
                $(".main-friend-cont").slimScroll({ setTop: "1px", size: "5px", wheelStep: 10, touchScrollStep: 90, alwaysVisible: !1, allowPageScroll: !0, color: "rgba(0,0,0,0.5)", height: "calc(100vh - 92px)", width: "100%" }), $(".main-chat-cont").slimScroll({ setTop: "1px", size: "5px", wheelStep: 10, touchScrollStep: 90, alwaysVisible: !1, allowPageScroll: !0, color: "rgba(0,0,0,0.5)", height: "calc(100vh - 155px)", width: "100%" }), !$(".pcoded-navbar").hasClass("theme-horizontal")) { var o = $(window)[0].innerWidth; o < 992 || $(".pcoded-navbar").hasClass("menupos-static") ? $(".navbar-content").slimScroll({ setTop: "1px", size: "5px", wheelStep: 10, touchScrollStep: 90, alwaysVisible: !1, allowPageScroll: !0, color: "rgba(0,0,0,0.5)", height: "calc(100% - 70px)", width: "100%" }) : $(".navbar-content").slimScroll({ setTop: "1px", size: "5px", wheelStep: 10, touchScrollStep: 90, alwaysVisible: !1, allowPageScroll: !0, color: "rgba(0,0,0,0.5)", height: "calc(100vh - 70px)", width: "100%" }) } $(".card-option .close-card").on("click", function () { var e = $(this); e.parents(".card").addClass("anim-close-card"), e.parents(".card").animate({ "margin-bottom": "0" }), setTimeout(function () { e.parents(".card").children(".card-block").slideToggle(), e.parents(".card").children(".card-body").slideToggle(), e.parents(".card").children(".card-header").slideToggle(), e.parents(".card").children(".card-footer").slideToggle() }, 600), setTimeout(function () { e.parents(".card").remove() }, 1500) }), $(".card-option .reload-card").on("click", function () { var e = $(this); e.parents(".card").addClass("card-load"), e.parents(".card").append('<div class="card-loader"><i class="pct-loader1 anim-rotate"></div>'), setTimeout(function () { e.parents(".card").children(".card-loader").remove(), e.parents(".card").removeClass("card-load") }, 3e3) }), $(".card-option .minimize-card").on("click", function () { var e = $(this), s = $(e.parents(".card")); $(s).children(".card-block").slideToggle(), $(s).children(".card-body").slideToggle(); s.hasClass("full-card") || $(s).css("height", "auto"), $(this).children("a").children("span").toggle() }), $(".card-option .full-card").on("click", function () {
                    var e = $(this), s = $(e.parents(".card")); if (s.toggleClass("full-card"), $(this).children("a").children("span").toggle(), s.hasClass("full-card")) { $("body").css("overflow", "hidden"), $("html,body").animate({ scrollTop: 0 }, 1e3); var d = $(s, this), i = d.offset(), o = i.left, n = i.top, t = $(window).height(), c = $(window).width(); s.animate({ marginLeft: o - 2 * o, marginTop: n - 2 * n, width: c, height: t }) } else $("body").css("overflow", ""),
                        s.removeAttr("style"), setTimeout(function () { $("html,body").animate({ scrollTop: $(s).offset().top }, 500) }, 400)
                }), setTimeout(function () { $(".loader-bg").fadeOut("slow", function () { $(this).remove() }) }, 400)
        }),

        $(window).resize(
            function () {
                togglemenu(), menuhrres()
            });
    var ost = 0; $(window).scroll(function () {
        if ($(window)[0].innerWidth >= 768) {
            var e = $(this).scrollTop(); 400 == e ?
                $(".theme-horizontal").addClass("top-nav-collapse") : e > ost && 400 < ost ? $(".theme-horizontal").addClass("top-nav-collapse").removeClass("default") :
                    $(".theme-horizontal").addClass("default").removeClass("top-nav-collapse"), ost = e
        }
    }),

        $.fn.pcodedmenu = function (e) {
            var s = (this.attr("id"), { themelayout: "vertical", MenuTrigger: "click", SubMenuTrigger: "click" }),
                e = $.extend({}, s, e), d = {
                    PcodedMenuInit: function () { d.HandleMenuTrigger(), d.HandleSubMenuTrigger(), d.HandleOffset() }, HandleSubMenuTrigger:
                        function () {
                            var s = $(window), d = s.width(); if (1 == $(".pcoded-navbar").hasClass("theme-horizontal")) if (d >= 768) {
                                var i = $(".pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu"); i.off("click").off("mouseenter mouseleave").hover(function () {
                                    $(this).addClass("pcoded-trigger")
                                },
                                    function () { $(this).removeClass("pcoded-trigger") })
                            } else { var i = $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li"); i.off("mouseenter mouseleave").off("click").on("click", function () { 0 === $(this).closest(".pcoded-submenu").length ? $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) : $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) }), $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on("click", function (e) { e.stopPropagation(), alert("click call"), 0 === $(this).closest(".pcoded-submenu").length ? $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) : $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) }) } switch (e.SubMenuTrigger) { case "click": $(".pcoded-navbar .pcoded-hasmenu").removeClass("is-hover"), $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on("click", function (e) { e.stopPropagation(), 0 === $(this).closest(".pcoded-submenu").length ? $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) : $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) }), $(".pcoded-submenu > li").on("click", function (e) { e.stopPropagation(), 0 === $(this).closest(".pcoded-submenu").length ? $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) : $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) }) }
                        },
                    HandleMenuTrigger: function () {
                        var s = $(window), d = s.width(); if (1 == $(".pcoded-navbar").hasClass("theme-horizontal")) {
                            var i =
                                $(".pcoded-inner-navbar > li"); d >= 768 ? i.off("click").off("mouseenter mouseleave").hover(function () { if ($(this).addClass("pcoded-trigger"), $(".pcoded-submenu", this).length) { var e = $(".pcoded-submenu:first", this), s = e.offset(), d = s.left, i = e.width(); $(window).height(); if (d + i <= $(window).width()) $(this).removeClass("edge"); else { var o = $(".sidenav-inner").attr("style"); $(".sidenav-inner").css({ "margin-left": parseInt(o.slice(12, o.length - 3)) - 80 }), $(".sidenav-horizontal-prev").removeClass("disabled") } } }, function () { $(this).removeClass("pcoded-trigger") }) : i.off("mouseenter mouseleave").off("click").on("click", function () { $(this).hasClass("pcoded-trigger") ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()) : ($("li.pcoded-trigger").children(".pcoded-submenu").slideUp(), $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"), $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()) })
                        }
                        switch (e.MenuTrigger) {
                            case "click":
                                $(".pcoded-navbar").removeClass("is-hover"),
                                    $(".pcoded-inner-navbar > li:not(.pcoded-menu-caption) ")
                                        .on("click",
                                            function () {
                                                $(this).hasClass("pcoded-trigger") ?
                                                    ($(this).removeClass("pcoded-trigger"),
                                                        $(this).children(".pcoded-submenu").slideUp()) :
                                                    (
                                                        $("li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                                                        $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                                                        $(this).addClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideDown()
                                                    )
                                            })
                        }
                    }, HandleOffset: function () { switch (e.themelayout) { case "horizontal": "hover" === e.SubMenuTrigger ? $("li.pcoded-hasmenu").on("mouseenter mouseleave", function (e) { if ($(".pcoded-submenu", this).length) { var s = $(".pcoded-submenu:first", this), d = s.offset(), i = d.left, o = s.width(); $(window).height(); i + o <= $(window).width() ? $(this).removeClass("edge") : $(this).addClass("edge") } }) : $("li.pcoded-hasmenu").on("click", function (e) { if (e.preventDefault(), $(".pcoded-submenu", this).length) { var s = $(".pcoded-submenu:first", this), d = s.offset(), i = d.left, o = s.width(); $(window).height(); i + o <= $(window).width() || $(this).toggleClass("edge") } }) } }
                }; d.PcodedMenuInit()
        },
        $("#pcoded").pcodedmenu({ MenuTrigger: "click", SubMenuTrigger: "click" }),
        $("#mobile-collapse,#mobile-collapse1").click(
            function (e) {
                $(window)[0].innerWidth < 992 && ($(".pcoded-navbar").toggleClass("mob-open"), e.stopPropagation())
            }),

        $(window).ready(function () {
            var e = $(window)[0].innerWidth; $(".pcoded-navbar").on("click tap",
                function (e) { e.stopPropagation() }), $(".pcoded-main-container,.pcoded-header").on("click",
                    function () {
                        e < 992 && 1 == $(".pcoded-navbar").hasClass("mob-open") && ($(".pcoded-navbar").removeClass("mob-open"),
                            $("#mobile-collapse,#mobile-collapse1").removeClass("on"))
                    }), $("#mobile-header").on("click", function () { $(".navbar-collapse,.m-header").slideToggle() })
        });

}


