/*
Name: 			Style Switcher Initializer
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		3.0
*/
var styleSwitcher={initialized:!1,defaults:{saveToStorage:!0,preserveCookies:!1,colorPrimary:"#2388ED",borderRadius:"4px",layoutStyle:"wide",backgroundPattern:"",showSwitcher:!1},initialize:function(){var a=this,b=$("html").data("style-switcher-options"),c=$("#styleSwitcherScript").data("base-path")?$("#styleSwitcherScript").data("base-path"):"",d=$("head"),e=$("#styleSwitcherScript").data("skin-src")?$("#styleSwitcherScript").data("skin-src"):c+"master/less/skin-default.less";if(a.basePath=c,a.skinSrc=e,!this.initialized){if(a.options=$.extend({},a.defaults),$("html").addClass("style-switcher-active"),String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},jQuery.styleSwitcherCachedScript=function(a,b){return b=$.extend(b||{},{dataType:"script",cache:!0,url:a}),jQuery.ajax(b)},null!=$.cookie("borderRadius")&&(a.options.borderRadius=$.cookie("borderRadius")),null!=$.cookie("colorPrimary")&&(a.options.colorPrimary="#"+$.cookie("colorPrimary")),null!=$.cookie("colorSecondary")&&(a.options.colorSecondary="#"+$.cookie("colorSecondary")),null!=$.cookie("colorTertiary")&&(a.options.colorTertiary="#"+$.cookie("colorTertiary")),null!=$.cookie("colorQuaternary")&&(a.options.colorQuaternary="#"+$.cookie("colorQuaternary")),b&&"no"==$.cookie("viewSite")&&(b=b.replace(/'/g,'"'),a.options=$.extend({},a.options,JSON.parse(b)),a.options.preserveCookies=!0,a.options.saveToStorage=!1),d.append($('<link rel="stylesheet">').attr("href",c+"master/style-switcher/style-switcher.css")),$("[data-icon]").get(0)&&$(window).on("theme.plugin.icon.svg.ready",function(){setTimeout(function(){$.event.trigger({type:"styleSwitcher.modifyVars",options:a.options})},10)}),null==$.cookie("showSwitcher")&&!a.options.showSwitcher&&$.cookie("initialized")&&!$(".sw-view-site").get(0)&&"no"==$.cookie("viewSite"))return void a.initializeSimpleMode();d.append($('<link id="realtimeskin" rel="stylesheet/less">').attr("href",e)),d.append($('<link rel="stylesheet">').attr("href",c+"master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css")),setTimeout(function(){$("#ez-skin").remove()},300),$.styleSwitcherCachedScript(c+"master/style-switcher/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js").done(function(d,e){less={async:!0,env:"production",modifyVars:{"@border-radius":a.options.borderRadius,"@color-primary":a.options.colorPrimary}},$.styleSwitcherCachedScript(c+"master/less/less.js").done(function(d,e){$.ajax({url:c+"master/style-switcher/style.switcher.html"}).done(function(c){$("body").append(c),a.container=$("#styleSwitcher"),a.build(),a.events(),b||(null!=$.cookie("layoutStyle")&&(a.options.layoutStyle=$.cookie("layoutStyle")),null!=$.cookie("backgroundPattern")&&(a.options.backgroundPattern=$.cookie("backgroundPattern"))),a.setLayoutStyle(a.options.layoutStyle),a.setBackgroundPattern(a.options.backgroundPattern),a.setColors(),a.setBorderRadius(a.options.borderRadius),$("#styleSwitcherSimple").remove(),a.initialized=!0,null==$.cookie("initialized")&&$.cookie("initialized",!0)})})}),$.styleSwitcherCachedScript(c+"master/style-switcher/cssbeautify/cssbeautify.js").done(function(a,b){}),null!=$.cookie("colorPrimary")&&$(".sw-view-site:not([data-sw-color])").prev().find("input").val($.cookie("colorPrimary")),self.loadingPreview=!1,self.livepreviewRedirect=function(){$(".sw-view-site").on("mousedown",function(b){if(!self.loadingPreview){self.loadingPreview=!0;var c=$(this).data("sw-color");b.preventDefault(),b.stopPropagation(),$.removeCookie("borderRadius"),$.removeCookie("colorPrimary"),$.removeCookie("layoutStyle"),$.removeCookie("backgroundPattern"),"undefined"!=typeof localStorage&&(localStorage.removeItem("ez-skin.css"),localStorage.removeItem("ez-layout"),localStorage.removeItem(a.skinSrc)),$.cookie("showSwitcher",!0),$.cookie("hideSwitcherTimeout",2e3),void 0!=c?$.cookie("colorPrimary",c.replace("#","")):$.cookie("colorPrimary",$(this).prev().find("input").val().replace("#","")),$.cookie("viewSite","yes");var d=$(this).attr("data-sw-url")?$(this).attr("data-sw-url"):"multi-purpose-1.html";return 2!=b.which?window.location=d:window.open(d,"_blank"),setTimeout(function(){self.loadingPreview=!1},1e3),!1}})},self.livepreviewRedirect(),$.cookie("viewSite","no")}},initializeSimpleMode:function(){var a=this,b=($("#header .header-logo img"),$("#header .header-logo img").attr("src"),'<div id="styleSwitcherSimple" class="style-switcher style-switcher-simple d-none d-md-block"><a id="styleSwitcherSimpleOpen" class="style-switcher-open" href="#"><i class="fas fa-cogs"></i></a></div>');$("body").append(b),$("#styleSwitcherSimpleOpen").on("click",function(b){b.preventDefault(),$(this).find(".fa").removeClass().addClass("fas fa-cog fa-spin fa-fw"),$.cookie("showSwitcher",!0),a.initialized=!1,a.initialize()})},build:function(){var a=this,b=a.container.find(".color-primary input");$(".sw-select-color .btn-colorpicker").on("mousedown",function(a){var b,c=$(this),d=$(this).closest(".image-frame-wrapper").find("> a").attr("href");return a.stopPropagation(),a.preventDefault(),c.colorpicker({format:"hex"}).colorpicker("show").on("create",function(a){b=$(".colorpicker").last(),b.append('<a href="#" class="btn btn-dark sw-view-site align-items-center font-weight-semibold rounded-0 w-100 text-0" data-sw-color="#23ed5c" data-sw-url="'+d+'" style="padding: 0.7rem 0.56rem;">LIVE PREVIEW <i class="fas fa-angle-right ml-2"></i></a>'),self.livepreviewRedirect()}).on("hidePicker",function(a){c.closest(".image-frame").removeClass("show"),c.closest(".hover-effect-3").removeClass("show")}).on("changeColor",function(a){var d=c.colorpicker("getValue");b.find(".sw-view-site").attr("data-sw-color",d)}),c.closest(".image-frame").addClass("show"),c.closest(".hover-effect-3").addClass("show"),!1}),b.val(a.options.colorPrimary).parent().colorpicker({format:"hex"}),$(".colorpicker").on("mousedown touchstart",function(b){b.preventDefault(),a.isChanging=!0}).on("mouseup touchend",function(c){c.preventDefault(),a.isChanging=!1,a.options.colorPrimary=b.val(),a.setColors(),$.cookie("viewSite","yes")}),$(".colorpicker-element input").on("blur",function(c){a.options.colorPrimary=b.val(),a.setColors(),$.cookie("viewSite","yes")}),this.container.find(".options-links.borders a").on("click",function(b){b.preventDefault(),a.setBorderRadius($(this).attr("data-border-radius"))}),this.container.find(".options-links.layout a").on("click",function(b){a.setLayoutStyle($(this).attr("data-layout-type"),!0)});var c=this.container.find("ul[data-type=patterns]");c.find("a").on("click",function(b){b.preventDefault(),a.setBackgroundPattern($(this).attr("data-pattern"))}),a.container.find(".reset").on("click",function(b){b.preventDefault(),a.reset()}),a.container.find(".get-css").on("click",function(b){b.preventDefault(),a.getCss()}),$(".sw-view-site:not([data-sw-color])").each(function(){try{$(this).prev().colorpicker("destroy").colorpicker({format:"hex"})}catch(a){}}),$(".expandable-selector .sw-view-site[data-sw-color]").each(function(){var a=$(this).data("sw-color");$(this).css({background:a})})},events:function(){var a=this;$("#styleSwitcherOpen").on("click",function(b){b.preventDefault(),a.container.toggleClass("active")}),null!=$.cookie("showSwitcher")&&($("#styleSwitcherOpen").trigger("click"),$.removeCookie("showSwitcher")),null!=$.cookie("hideSwitcherTimeout")&&(setTimeout(function(){$("#styleSwitcherOpen").trigger("click")},$.cookie("hideSwitcherTimeout")),$.removeCookie("hideSwitcherTimeout"))},setColors:function(a,b){var c=this;return this.isChanging?!1:(a&&(c.options["color"+b.capitalize()]=a,c.container.find(".color-"+b+" input").val(a)),c.options.preserveCookies||$.cookie("colorPrimary",c.options.colorPrimary.replace("#","")),void c.modifyVars())},setBorderRadius:function(a){var b=this;b.options.borderRadius=a,b.options.preserveCookies||$.cookie("borderRadius",a),b.modifyVars();var c=this.container.find(".options-links.borders");c.find(".active").removeClass("active"),c.find("a[data-border-radius="+a+"]").addClass("active"),$.event.trigger({type:"styleSwitcher.setBorderRadius",radius:a})},setLayoutStyle:function(a,b){var c=this;if(c.options.preserveCookies||$.cookie("layoutStyle",a),this.options.saveToStorage&&"undefined"!=typeof localStorage&&localStorage.setItem("ez-layout",a),b)return $.cookie("showSwitcher",!0),window.location.reload(),!1;var d=this.container.find(".options-links.layout"),e=this.container.find(".patterns");d.find(".active").removeClass("active"),"rtl"==a&&$('html[dir="rtl"]').get(0)||"dark"==a&&$("html").hasClass("dark")||"boxed"==a&&$("html").hasClass("boxed")?d.find("a[data-layout-type="+a+"]").addClass("active"):d.find('a[data-layout-type="wide"]').addClass("active"),$("html").hasClass("boxed")?(e.show(),$("html").addClass("boxed"),null==$.cookie("backgroundPattern")&&this.container.find("ul[data-type=patterns] li:first a").trigger("click")):(e.hide(),$("html").removeClass("boxed"),$.removeCookie("backgroundPattern")),$.event.trigger({type:"styleSwitcher.setLayoutStyle",style:a})},setBackgroundPattern:function(a){var b=this;if(""==a)return this;var c=$("html").hasClass("boxed");c&&$("body").css("background-image","url(img/patterns/"+a+".png)"),b.options.preserveCookies||$.cookie("backgroundPattern",a),$.event.trigger({type:"styleSwitcher.setBackgroundPattern",pattern:a})},modifyVars:function(){var a=this;window.clearTimeout(a.timer),a.timer=window.setTimeout(function(){less.modifyVars({"@border-radius":a.options.borderRadius,"@color-primary":a.options.colorPrimary}),a.options.saveToStorage&&"undefined"!=typeof localStorage&&setTimeout(function(){localStorage.setItem("ez-skin.css",$('style[id^="less:"]').text())},200),$.event.trigger({type:"styleSwitcher.modifyVars",options:a.options})},300)},reset:function(){var a=this;$.removeCookie("borderRadius"),$.removeCookie("colorPrimary"),$.removeCookie("layoutStyle"),$.removeCookie("backgroundPattern"),$.cookie("showSwitcher",!0),"undefined"!=typeof localStorage&&(localStorage.removeItem("ez-skin.css"),localStorage.removeItem("ez-layout"),localStorage.removeItem(a.skinSrc)),window.location.reload()},getCss:function(){raw="";var a=$("html").hasClass("boxed");a?(raw='body { background-image: url("../../img/patterns/'+$.cookie("backgroundPattern")+'.png"); }',$("#addBoxedClassInfo").show()):$("#addBoxedClassInfo").hide(),$("#getCSSTextarea").text($('style[id^="less:"]').text()).focus(function(){var a=$(this);a.select(),a.mouseup(function(){return a.unbind("mouseup"),!1})}),$("#getCSSModal").modal("show"),options={indent:"	",autosemicolon:!0},raw+=$("#getCSSTextarea").text(),$("#getCSSTextarea").text(cssbeautify(raw,options))}};styleSwitcher.initialize();