var header=document.getElementById("header");function fixedHeaderFunction(){window.pageYOffset>50?header.classList.add("sticky"):header.classList.remove("sticky")}function clickers(){$(".header__nav__item-link").click(function(){$(".header__nav__item-link").removeClass("active"),$(this).addClass("active")}),$(".header__nav__search").click(function(){$(this).toggleClass("active"),$(".search__container").toggleClass("active")}),$(".search__close").click(function(){$(".search__result").removeClass("active"),$(".search__container").removeClass("active")}),$(".search__icon").click(function(){$(".search__result").addClass("active"),$(".search__container").addClass("result__active")}),$(".dropdown__item").click(function(){$("#txtData").hide()}),$(".select_other").click(function(){$("#txtData").show()}),$(".resource__item__video").click(function(){$("iframe",this)[0].src+="&amp;autoplay=1",$(this).addClass("open")}),$(".header__nav__menuIcon").click(function(){$(this).toggleClass("open"),$(".header__nav__list__container").toggleClass("active")}),$(".choose__teacher").click(function(){$(".chooseRoleModal__bottom").addClass("active")}),$(".choose__student").click(function(){$(".chooseRoleModal__bottom").removeClass("active")}),$(".filter__row").click(function(){$(".filter__form").toggleClass("active")}),$(".readMoreBtn").click(function(){$(".moreText").toggleClass("inline")})}function burgerMenuResponsive(e){e.matches&&($(".header__nav__menuIcon").removeClass("open"),$(".header__nav__list__container").removeClass("active"))}window.onscroll=function(){fixedHeaderFunction()},clickers();var x=window.matchMedia("(min-width: 991px)");burgerMenuResponsive(x),x.addListener(burgerMenuResponsive);for(var imgs=document.getElementsByClassName("resource__item__img"),i=0;i<imgs.length;i++)imgs[i].onclick=function(){imageZoom(this)};function imageZoom(e){document.getElementById("image-fullscreen").style.background="black url("+e.src+") no-repeat center center",document.getElementById("image-fullscreen").style.backgroundSize="contain",console.log(document.getElementById("image-fullscreen").style)}function tabsLink(){function e(){let e=location.href.replace(/\/$/,"");if(location.hash){const t=e.split("#");$('#aboutTabs a[href="#'+t[1]+'"]').tab("show"),e=location.href.replace(/\/#/,"#"),history.replaceState(null,null,e),setTimeout(()=>{$(window).scrollTop(0)},400)}$('a[data-bs-toggle="tab"]').on("click",function(){let t;const n=$(this).attr("href");t="#about"==n?e.split("#")[0]:e.split("#")[0]+n,t+=" ",history.replaceState(null,null,t)})}e(),$(window).on("hashchange",function(){e()})}$(function(){$('.header__nav__list a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("active")}),tabsLink();const dropdownToggler=()=>{document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})})};document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})});const selectDropdown=()=>{document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.parentElement.children;for(let e=0;e<n.length;e++)n[e].classList.contains("dropdown__item--active")&&n[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(n=>{if(n.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=n.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),$(e).addClass("active"),n.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})})};document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.parentElement.children;for(let e=0;e<n.length;e++)n[e].classList.contains("dropdown__item--active")&&n[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(n=>{if(n.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=n.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),$(e).addClass("active"),n.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})});const togglePassword=document.querySelector("#togglePassword"),password=document.querySelector("#password");togglePassword.addEventListener("click",function(e){const t="password"===password.getAttribute("type")?"text":"password";password.setAttribute("type",t)}),function(){"use strict";var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("submit",function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated"),$(".form__label").addClass("error"),$(".form__error__message").addClass("active")},!1)})}();