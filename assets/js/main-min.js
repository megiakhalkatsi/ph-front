var header=document.getElementById("header");function fixedHeaderFunction(){window.pageYOffset>50?header.classList.add("sticky"):header.classList.remove("sticky")}function clickers(){$(".header__nav__item-link").click(function(){$(".header__nav__item-link").removeClass("active"),$(this).addClass("active")}),$(".header__nav__search").click(function(){$(this).toggleClass("active"),$(".search__container").toggleClass("active"),$("body").toggleClass("open-modal")}),$(".search__close").click(function(){$(".search__container").removeClass("active"),$("body").removeClass("open-modal")}),$(".resource__item__video").click(function(){$("iframe",this)[0].src+="&amp;autoplay=1",$(this).addClass("open")}),$(".header__nav__menuIcon").click(function(){$(this).toggleClass("open"),$(".header__nav__list__container").toggleClass("active")}),$(".choose__teacher").click(function(){$(".chooseRoleModal__bottom").addClass("active")}),$(".choose__student").click(function(){$(".chooseRoleModal__bottom").removeClass("active")}),$(".filter__row").click(function(){$(".filter__form").toggleClass("active")}),$(".readMoreBtn").click(function(){$(".moreText").toggleClass("inline"),$(this).hide()})}function burgerMenuResponsive(e){e.matches&&($(".header__nav__menuIcon").removeClass("open"),$(".header__nav__list__container").removeClass("active"))}window.onscroll=function(){fixedHeaderFunction()},clickers(),$("#tableOfConents").on("shown.bs.modal",function(){$("body").addClass("open-modal")}).on("hidden.bs.modal",function(){$("body").removeClass("open-modal")});var x=window.matchMedia("(min-width: 991px)");burgerMenuResponsive(x),x.addListener(burgerMenuResponsive);for(var imgs=document.getElementsByClassName("resource__item__img"),i=0;i<imgs.length;i++)imgs[i].onclick=function(){imageZoom(this)};function imageZoom(e){document.getElementById("image-fullscreen").style.background="black url("+e.src+") no-repeat center center",document.getElementById("image-fullscreen").style.backgroundSize="contain",console.log(document.getElementById("image-fullscreen").style)}function onloadPage(){$(".page__onload").addClass("active")}$(function(){$('.header__nav__list a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("active")}),window.onload=onloadPage,$(".custom-select").each(function(){var e=$(this).attr("class"),t=($(this).attr("id"),$(this).attr("name"),'<div class="'+e+'">');t+='<span class="custom-select-trigger">'+$(this).attr("placeholder")+"</span>",t+='<div class="custom-options">',$(this).find("option").each(function(){t+='<span class="custom-option '+$(this).attr("class")+'" data-value="'+$(this).attr("value")+'">'+$(this).html()+"</span>"}),t+="</div></div>",$(this).wrap('<div class="custom-select-wrapper"></div>'),$(this).hide(),$(this).after(t)}),$(".custom-select-trigger").each(function(){$(this).addClass("selected"),$(this).text($(this).parents(".custom-select").children(".custom-options").children(".custom-option:first-child").text())}),$(".custom-option:first-of-type").hover(function(){$(this).parents(".custom-options").addClass("option-hover")},function(){$(this).parents(".custom-options").removeClass("option-hover")}),$(".custom-select-trigger").on("click",function(){$("html").one("click",function(){$(".custom-select").removeClass("opened")}),$(this).parents(".custom-select").toggleClass("opened"),event.stopPropagation()}),$(".custom-option").on("click",function(){$("#txtData").hide(),$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")),$(this).parents(".custom-options").find(".custom-option").removeClass("selection"),$(this).addClass("selection"),$(this).parents(".custom-select").removeClass("opened"),$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text()),$(this).parents(".custom-select").find(".custom-select-trigger").addClass("selected")}),$(".custom-option.select_other").on("click",function(){$("#txtData").show()});const dropdownToggler=()=>{document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})})};document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})});const selectDropdown=()=>{document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let o=t.target.parentElement.children;for(let e=0;e<o.length;e++)o[e].classList.contains("dropdown__item--active")&&o[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(o=>{if(o.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=o.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),$(e).addClass("active"),o.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})})};document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let o=t.target.parentElement.children;for(let e=0;e<o.length;e++)o[e].classList.contains("dropdown__item--active")&&o[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(o=>{if(o.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=o.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),$(e).addClass("active"),o.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})});const togglePassword=document.querySelector("#togglePassword"),password=document.querySelector("#password");togglePassword.addEventListener("click",function(e){const t="password"===password.getAttribute("type")?"text":"password";password.setAttribute("type",t)}),function(){"use strict";var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("submit",function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated"),$(".form__label").addClass("error"),$(".form__error__message").addClass("active")},!1)})}();