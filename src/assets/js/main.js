// //fixed header on scroll

// var header = document.getElementById("header");
// function fixedHeaderFunction() {
//     if (window.pageYOffset > 50) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// window.onscroll = function () { fixedHeaderFunction() };


// function clickers() {
//     $('.header__nav__item-link').click(function () {
//         $('.header__nav__item-link').removeClass('active')
//         $(this).addClass('active');
//     })
//     $('.header__nav__search').click(function () {
//         $(this).toggleClass('active');
//         $('.search__container').toggleClass('active');
//         $("body").toggleClass("open-modal");
//     })
//     $('.search__close').click(function () {
//         $('.search__container').removeClass('active');
//         $("body").removeClass("open-modal");
//     })
//     //video player
//     $(".resource__item__video").click(function () {
//         $('iframe', this)[0].src += "&amp;autoplay=1";
//         $(this).addClass('open');
//     });
//     //burger menu
//     $('.header__nav__menuIcon').click(function () {
//         $(this).toggleClass('open');
//         $('.header__nav__list__container').toggleClass('active');
//     });
//     //choose role notification
//     $('.choose__teacher').click(function () {
//         $('.chooseRoleModal__bottom').addClass('active');
//     });
//     $('.choose__student').click(function () {
//         $('.chooseRoleModal__bottom').removeClass('active');
//     });
//     //filter - responsive
//     $('.filter__row').click(function () {
//         $('.filter__form').toggleClass('active');
//     });
//     //read more
//     $('.readMoreBtn').click(function () {
//         $('.moreText').toggleClass('inline');
//         $(this).hide();
//     });
//     //course list - responsive
//     $('.course__list__btn').click(function () {
//         $(this).toggleClass('active');
//         $('.course__list').toggleClass('active');
//     });
//     $('#startQuiz').click(function () {
//         $(".course__intro__video__container-hide").removeClass("active");
//         $(".course__quiz__quest-hide").removeClass("active");
//     });
//     $('.course__intro__header__item .link').click(function () {
//         $(this).addClass("active");
//         $(".course__intro__header__item .close-icon").addClass("active");
//         $(".course__content__row").addClass("hide");
//         $(".course__content__resources").addClass("active");
//     });
//     $('.course__intro__header__item .close-icon').click(function () {
//         $(this).removeClass("active");
//         $(".course__intro__header__item .link").removeClass("active");
//         $(".course__content__row").removeClass("hide");
//         $(".course__content__resources").removeClass("active");
//     });
//     //profile edit - data updated
//     $('#btn-data-submit').click(function () {
//         $(".form__section").hide();
//         $(".course__data__updated").show();
//     });
// }
// clickers();

// //not scrolling background while modal is active
// $('#tableOfConents').on('shown.bs.modal', function () {
//     $("body").addClass("open-modal");
// }).on("hidden.bs.modal", function () {
//     $("body").removeClass("open-modal")
// });



// function burgerMenuResponsive(x) {
//     if (x.matches) { // If media query matches
//         $('.header__nav__menuIcon').removeClass('open');
//         $('.header__nav__list__container').removeClass('active');
//     }
// }
// var x = window.matchMedia("(min-width: 991px)")
// burgerMenuResponsive(x) // Call listener function at run time
// x.addListener(burgerMenuResponsive) // Attach listener function on state changes

// //full size images
// var imgs = document.getElementsByClassName("resource__item__img");

// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].onclick = function () { imageZoom(this); }
// }
// function imageZoom(ele) {
//     document.getElementById("image-fullscreen").style.background = 'black url(' + ele.src + ') no-repeat center center';
//     document.getElementById("image-fullscreen").style.backgroundSize = 'contain';
//     console.log(document.getElementById("image-fullscreen").style);
// }

// //header navigation - active items
// $(function () {
//     $('.header__nav__list a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// });

// // tabs links

// // function tabsLink() {
// //     var hash = window.location.hash;
// //     hash && $('#aboutTabs a[href="' + hash + '"]').tab('show');

// //     $('#aboutTabs a').click(function (e) {
// //       $(this).tab('show');
// //       var scrollmem = $('body').scrollTop();
// //       window.location.hash = this.hash;
// //       $('html,body').scrollTop(scrollmem);
// //     });
// //   };

// //   tabsLink();

// // onload page
// function onloadPage() {
//     $(".page__onload").addClass("active");
// }
// window.onload = onloadPage;

// // check when video finished

// // create youtube player
// var player;
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('player', {
//         videoId: 'fPasjUl-Vg4',
//         events: {
//             //'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// // autoplay video
// // function onPlayerReady(event) {
// //     event.target.playVideo();
// // }

// // when video ends
// function onPlayerStateChange(event) {
//     if (event.data === 0) {
//         $(".course__intro__video__container-hide").addClass("active");
//         $(".course__quiz__quest-hide").addClass("active");
//     }
// }


// //custom select
// $(".custom-select").each(function () {
//     var classes = $(this).attr("class"),
//         id = $(this).attr("id"),
//         name = $(this).attr("name");
//     var template = '<div class="' + classes + '">';
//     template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
//     template += '<div class="custom-options">';
//     $(this).find("option").each(function () {
//         template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
//     });
//     template += '</div></div>';

//     $(this).wrap('<div class="custom-select-wrapper"></div>');
//     $(this).hide();
//     $(this).after(template);
// });
// $('.form-register .custom-select-trigger').each(function () {
//     $(this).addClass("selected");
//     $(this).text($(this).parents(".custom-select").children(".custom-options").children(".custom-option:first-child").text());
// });
// $(".custom-option:first-of-type").hover(function () {
//     $(this).parents(".custom-options").addClass("option-hover");
// }, function () {
//     $(this).parents(".custom-options").removeClass("option-hover");
// });
// $(".custom-select-trigger").on("click", function () {
//     $('html').one('click', function () {
//         $(".custom-select").removeClass("opened");
//     });
//     $(this).parents(".custom-select").toggleClass("opened");
//     event.stopPropagation();
// });
// $(".custom-option").on("click", function () {
//     $('#txtData').hide();
//     $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
//     $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
//     $(this).addClass("selection");
//     $(this).parents(".custom-select").removeClass("opened");
//     $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
//     $(this).parents(".custom-select").find(".custom-select-trigger").addClass("selected");
// });
// $(".custom-option.select_other").on("click", function () {
//     $('#txtData').show();
// });

// // dropdown

// const dropdownToggler = () => {
//     let toggler = document.querySelectorAll('.dropdown--toggler')
//     toggler.forEach((item) => {
//         item.addEventListener('click', () => {
//             let dropdowns = document.querySelectorAll('.dropdown')
//             item.parentElement.classList.toggle('open')
//             dropdowns.forEach((elem) => {
//                 if (
//                     item.parentElement.getAttribute('id') ===
//                     elem.getAttribute('data-for')
//                 ) {
//                     elem.classList.toggle('open')
//                 }
//             })
//         })
//     })
// }
// dropdownToggler()

// const selectDropdown = () => {
//     let dropdownItems = document.querySelectorAll('.dropdown__item')
//     dropdownItems.forEach((item) => {
//         item.addEventListener('click', (e) => {
//             let items = e.target.parentElement.children
//             for (let i = 0; i < items.length; i++) {
//                 if (items[i].classList.contains('dropdown__item--active')) {
//                     items[i].classList.remove('dropdown__item--active')
//                 }
//             }
//             let dropdownElems = document.querySelectorAll('.dropdown__elem')
//             dropdownElems.forEach((elem) => {
//                 if (
//                     elem.getAttribute('id') ===
//                     item.parentElement.parentElement.getAttribute('data-for')
//                 ) {
//                     e.target.classList.add('dropdown__item--active')
//                     let selectedInfo = elem.children[0].children[0]
//                     selectedInfo.innerHTML = e.target.innerHTML
//                     selectedInfo.setAttribute('value', e.target.innerHTML)
//                     $(selectedInfo).addClass('active');
//                     elem.classList.remove('open')
//                     e.target.parentElement.parentElement.classList.remove('open')
//                 }
//             })
//         })
//     })
// }
// selectDropdown()

// // password show function
// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     // this.classList.toggle('fa-eye-slash');
// });

// // bootstrap forms validation
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated'),
//                     $('.form__label').addClass('error'),
//                     $('.form__error__message').addClass('active')
//             }, false)
//         })
// })()


let correct = 0;



$('.goToPage1').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.tansatsmeliPage').attr('style', 'display: block')
})

$('.iDontWant1').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision1').attr('style', 'display: block')
})

$('.iDontWant55').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.hakerPage').attr('style', 'display: block')
})






$('.goToPage134').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.italianbank').attr('style', 'display: block')
    console.log(correct)
})

$('.iDontWant2').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision2').attr('style', 'display: block')
    console.log(correct)
})




$('.iDontWant3').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision3').attr('style', 'display: block')

    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})

$('.iDontWant33333').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision4').attr('style', 'display: block')

    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})


$('.goToPage1000').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.hakerPage2').attr('style', 'display: block')
    console.log(correct)
})




$('.continue187987').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
})


$('.iDontWant2').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision2').attr('style', 'display: block')
})


$('.continue1').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body2').attr('style', 'display: block')
    console.log(correct)
})


$('.iDontWant2555').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
})


$('.continue2').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
})



$('.resetGame').click(() => {
    correct = 0
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body1').attr('style', 'display: block')
    console.log(correct)
})


$('.completGame').click(() => {
    correct = 0

    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    document.querySelector('.rightDecision3').setAttribute('style', 'display: none')
    document.querySelector('.game__modal-body1').setAttribute('style', 'display: block')
})

$('.completGame2').click(() => {
    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})



$( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
    console.log(correct)

    if(correct === 3) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
    }
    
    if(correct < 3) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
    }
  });


    
  $( "#gameReset" ).click(function() {
      correct = 0
      document.querySelector('.failModal').setAttribute('style', 'display: none')
      document.querySelector('.successModal').setAttribute('style', 'display: none')
      document.querySelector('.game__result__container').classList.remove('active')
      document.querySelector('.game__result__container').removeAttribute('style')
      document.querySelector('.game__modal-body1').setAttribute('style', 'display: block')
  });
