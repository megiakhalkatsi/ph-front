var header=document.getElementById("header");function fixedHeaderFunction(){window.pageYOffset>50?header.classList.add("sticky"):header.classList.remove("sticky")}function clickers(){$(".header__nav__item-link").click(function(){$(".header__nav__item-link").removeClass("active"),$(this).addClass("active")}),$(".header__nav__search").click(function(){$(this).toggleClass("active"),$(".search__container").toggleClass("active")}),$(".search__close").click(function(){$(".search__result").removeClass("active"),$(".search__container").removeClass("active")}),$(".search__icon").click(function(){$(".search__result").addClass("active"),$(".search__container").addClass("result__active")}),$(".dropdown__item").click(function(){$("#txtData").hide()}),$(".select_other").click(function(){$("#txtData").show()}),$(".resource__item__video").click(function(){$("iframe",this)[0].src+="&amp;autoplay=1",$(this).addClass("open")}),$(".header__nav__menuIcon").click(function(){$(this).toggleClass("open"),$(".header__nav__list").toggleClass("active")}),$(".choose__teacher").click(function(){$(".chooseRoleModal__bottom").addClass("active")}),$(".choose__student").click(function(){$(".chooseRoleModal__bottom").removeClass("active")}),$(".filter__row").click(function(){$(".filter__form").toggleClass("active")})}function burgerMenuResponsive(e){e.matches&&($(".header__nav__menuIcon").removeClass("open"),$(".header__nav__list").removeClass("active"))}window.onscroll=function(){fixedHeaderFunction()},clickers();var x=window.matchMedia("(min-width: 991px)");burgerMenuResponsive(x),x.addListener(burgerMenuResponsive);for(var imgs=document.getElementsByClassName("resource__item__img"),i=0;i<imgs.length;i++)imgs[i].onclick=function(){imageZoom(this)};function imageZoom(e){document.getElementById("image-fullscreen").style.background="black url("+e.src+") no-repeat fixed center center",document.getElementById("image-fullscreen").style.backgroundSize="contain",console.log(document.getElementById("image-fullscreen").style)}function tabsLink(){function e(){let e=location.href.replace(/\/$/,"");if(location.hash){const t=e.split("#");$('#aboutTabs a[href="#'+t[1]+'"]').tab("show"),e=location.href.replace(/\/#/,"#"),history.replaceState(null,null,e),setTimeout(()=>{$(window).scrollTop(0)},400)}$('a[data-bs-toggle="tab"]').on("click",function(){let t;const n=$(this).attr("href");t="#about"==n?e.split("#")[0]:e.split("#")[0]+n,t+=" ",history.replaceState(null,null,t)})}e(),$(window).on("hashchange",function(){e()})}$(function(){$('.header__nav__list a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("active")}),tabsLink();const dropdownToggler=()=>{document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})})};document.querySelectorAll(".dropdown--toggler").forEach(e=>{e.addEventListener("click",()=>{let t=document.querySelectorAll(".dropdown");e.parentElement.classList.toggle("open"),t.forEach(t=>{e.parentElement.getAttribute("id")===t.getAttribute("data-for")&&t.classList.toggle("open")})})});const selectDropdown=()=>{document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.parentElement.children;for(let e=0;e<n.length;e++)n[e].classList.contains("dropdown__item--active")&&n[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(n=>{if(n.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=n.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),n.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})})};document.querySelectorAll(".dropdown__item").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.parentElement.children;for(let e=0;e<n.length;e++)n[e].classList.contains("dropdown__item--active")&&n[e].classList.remove("dropdown__item--active");document.querySelectorAll(".dropdown__elem").forEach(n=>{if(n.getAttribute("id")===e.parentElement.parentElement.getAttribute("data-for")){t.target.classList.add("dropdown__item--active");let e=n.children[0].children[0];e.innerHTML=t.target.innerHTML,e.setAttribute("value",t.target.innerHTML),n.classList.remove("open"),t.target.parentElement.parentElement.classList.remove("open")}})})});const togglePassword=document.querySelector("#togglePassword"),password=document.querySelector("#password");togglePassword.addEventListener("click",function(e){const t="password"===password.getAttribute("type")?"text":"password";password.setAttribute("type",t)}),function(){"use strict";var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("submit",function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated"),$(".form__label").addClass("error"),$(".form__error__message").addClass("active")},!1)})}();var questions=[{number:1,correctAnswer:1,question:"საქართველო არის სამართლებრივი სახელმწიფო, რაც ნიშნავს, რომ ხელისუფლება ხორციელდება....",answers:[{isCorrect:!0,text:"საქართველოს კონსტიტუციითა და კანონით დადგენილ ფარგლებში"},{isCorrect:!1,text:"უძველესი ჩვეულებებისა და ადათ-წესების შესაბამისად"},{isCorrect:!1,text:"გამორჩეული ადამიანების ნება-სურვილის მიხედვით"},{isCorrect:!1,text:"უცხო ქვეყნების გადაწყვეტილებებით"}]},{number:2,correctAnswer:1,question:"სახელმწიფო ცნობს და იცავს......",answers:[{isCorrect:!0,text:"ადამიანის საყოველთაოდ აღიარებულ უფლებებსა და თავისუფლებებს"},{isCorrect:!1,text:"მხოლოდ სამშობლოს წინაშე დიდი დამსახურების მქონე ადამიანების უფლებებსა და ნება-სურვილს"},{isCorrect:!1,text:"მხოლოდ ქართველების უფლებებსა და თავისუფლებებს"},{isCorrect:!1,text:"იმ ადამიანების უფლებებს, რომლებსაც  წაკითხული აქვთ  კონსტიტუცია"}]},{number:3,correctAnswer:1,question:"საქართველოში ყველა ადამიანი სამართლის წინაშე…",answers:[{isCorrect:!0,text:"თანასწორია"},{isCorrect:!1,text:"თანასწორია, მაგრამ კანონი უშვებს გამონაკლის შემთხვევებსაც"},{isCorrect:!1,text:"თანასწორია, თუმცა შეიძლება პრივილეგიის ყიდვა ან დამსახურებით მოპოვება"},{isCorrect:!1,text:"უთანასწოროა"}]},{number:4,correctAnswer:1,question:"აკრძალულია ადამიანის...",answers:[{isCorrect:!0,text:"დისკრიმინაცია მისი რასის, კანის ფერის, სქესის, წარმოშობის ან სხვა რაიმე მისთვის დამახასიათებელი ნიშან-თვისების მიხედვით"},{isCorrect:!1,text:"თანასწორად მოპყრობა, თუკი იგი ამას არ იმსახურებს"},{isCorrect:!1,text:"მონაწილეობა კანონების შექმნის პროცესში"},{isCorrect:!1,text:"მონაწილეობა ქვეყნის მმართველების არჩევაში"}]}],index=0;function getCorrectAnsweersMarkup(e){console.log(e),$("#ProgressBar").attr("style",`--v: ${45*e}deg`),$("#ProgressText").html(`კითხვა <span class="purple">${e}</span> / ${questions.length} დან`)}function getQuestionsMarkup(e){return questions.map(t=>`<div class="col-12 col-lg-8 page__content-col m-auto ${t.number} questionContainer" style="display: ${e+1===t.number?"block":"none"}">\n      <h2 class="game__text lg mb-34 GameQuestion">${t.number}. ${t.question}</h2>\n      \n      <div class="game__answer__drop__container DroppableItem" data-append="false">\n        <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>\n      </div>\n      \n      <div class="game__line"></div>\n\n      <h2 class="game__title mb-34">სავარაუდო პასუხები</h2>\n\n      <div class="row">\n        <div class="col-12 col-lg-6">\n          <div class="game__answer__container DraggableItem" data-answer="1">\n            <p class="game__text md">საქართველოს კონსტიტუციითა და კანონით დადგენილ ფარგლებში</p>\n          </div>\n        </div>\n        <div class="col-12 col-lg-6">\n          <div class="game__answer__container DraggableItem" data-answer="2">\n            <p class="game__text md">უძველესი ჩვეულებებისა და ადათ-წესების შესაბამისად </p>\n          </div>\n        </div>\n        <div class="col-12 col-lg-6">\n          <div class="game__answer__container DraggableItem" data-answer="3">\n            <p class="game__text md">გამორჩეული ადამიანების ნება-სურვილის მიხედვით</p>\n          </div>\n        </div>\n        <div class="col-12 col-lg-6">\n          <div class="game__answer__container DraggableItem" data-answer="4">\n            <p class="game__text md">უცხო ქვეყნების გადაწყვეტილებებით</p>\n          </div>\n        </div>\n      </div>\n      <div class="game__line"></div>\n    </div>`)}$(function(){const e=questions.map(e=>{var t=e.answers.sort(function(){return.5-Math.random()});return{...e,answers:t}});questions=e;const t=getQuestionsMarkup(index);$("#GameWrapper").append(t)}),$("#nextStep").click(function(){(++index===questions.length||index>4)&&(index=0),console.log(index),$(".questionContainer").attr("style","display: none"),$(".questionContainer")[index].removeAttribute("style")}),$("#prevStep").click(function(){--index<0&&(index=questions.length-1),console.log(index),console.log(questions),$(".questionContainer").attr("style","display: none"),$(".questionContainer")[index].removeAttribute("style")}),$(function(){let e=0,t=0;getCorrectAnsweersMarkup(t),$(".DraggableItem").draggable({revert:"invalid"}),$(".DroppableItem").droppable({drop:function(n,a){"false"==$(this).attr("data-append")&&1==a.draggable.attr("data-answer")?(e=0,t++,$(this).append(a.draggable),getCorrectAnsweersMarkup(t),$(this).find(".DraggableItem").removeAttr("style"),$(this).attr("data-append",!0),$("#DogImage").attr("src","../assets/img/illustrations/correct-image.gif")):(0,e<2?e++:(2===e||e>2)&&($("#notificationModal").modal("show"),$("#DogImage").attr("src","../assets/img/illustrations/correct-image.gif")),a.draggable.attr("style","position: relative")),0}})});