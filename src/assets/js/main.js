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
//     $('.dropdown__item').click(function () {
//         $('#txtData').hide();
//     })
//     $('.select_other').click(function () {
//         $('#txtData').show();
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

// function tabsLink() {
//     function tabLocation() { //redirect url to current tab
//         let url = location.href.replace(/\/$/, "");

//         if (location.hash) {
//             const hash = url.split("#");
//             $('#aboutTabs a[href="#' + hash[1] + '"]').tab("show");
//             url = location.href.replace(/\/#/, "#");
//             history.replaceState(null, null, url);
//             setTimeout(() => {
//                 $(window).scrollTop(0);
//             }, 400);
//         }

//         $('a[data-bs-toggle="tab"]').on("click", function () {
//             let newUrl;
//             const hash = $(this).attr("href");
//             if (hash == "#about") {
//                 newUrl = url.split("#")[0];
//             } else {
//                 newUrl = url.split("#")[0] + hash;
//             }
//             newUrl += " ";
//             history.replaceState(null, null, newUrl);
//         });
//     };

//     tabLocation();

//     $(window).on('hashchange', function () {
//         tabLocation();
//     });
// }

// tabsLink();

// // onload page
// function onloadPage() {
//     $(".page__onload").addClass("active");
// }
// window.onload = onloadPage;

// //custom select
// $(".custom-select").each(function() {
//     var classes = $(this).attr("class"),
//         id      = $(this).attr("id"),
//         name    = $(this).attr("name");
//     var template =  '<div class="' + classes + '">';
//         template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
//         template += '<div class="custom-options">';
//         $(this).find("option").each(function() {
//           template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
//         });
//     template += '</div></div>';
    
//     $(this).wrap('<div class="custom-select-wrapper"></div>');
//     $(this).hide();
//     $(this).after(template);
//   });
//   $(".custom-option:first-of-type").hover(function() {
//     $(this).parents(".custom-options").addClass("option-hover");
//   }, function() {
//     $(this).parents(".custom-options").removeClass("option-hover");
//   });
//   $(".custom-select-trigger").on("click", function() {
//     $('html').one('click',function() {
//       $(".custom-select").removeClass("opened");
//     });
//     $(this).parents(".custom-select").toggleClass("opened");
//     event.stopPropagation();
//   });
//   $(".custom-option").on("click", function() {
//     $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
//     $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
//     $(this).addClass("selection");
//     $(this).parents(".custom-select").removeClass("opened");
//     $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
//   });

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



















$( function() {
    $('.game__dragAndDrop__container .game__answer__containe').setAttribute('style', 'z-index: 1111')
    $('.game__answer__container').addClass('Z-index')
});
  
  
  $( function() {
    $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone", 
    start: function( event, ui ) {
      $('.definition__content').attr('style', 'display: none;')
    } })
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          if(event.target.classList.contains('game__table__td')) {
            var new_signature = $(ui.helper).clone();
            $(this).append(new_signature);
            $(new_signature).removeAttr('style')
            $('.game__table__td .game__text').attr('style', 'color: #fff')
            $('.game__table__td .game__answer__container').attr('style', 'background: #7fbcf3;')
  
            let rowIndex = event.target.parentElement.getAttribute('data-row')
            let DraggableItemRows = JSON.parse(ui.draggable[0].getAttribute('data-row'))
            let DraggableItemCollumn = JSON.parse(ui.draggable[0].getAttribute('data-collumn'))
            let parentIndex = event.target.getAttribute('data-index')
  
            if(DraggableItemRows.includes(rowIndex) && DraggableItemCollumn == parentIndex) {
                event.target.lastElementChild.setAttribute('data-correct', true)
            } else {
                event.target.lastElementChild.setAttribute('data-correct', false)
            }
          }
      }
    });
  });
  
  
  
  
  $( ".game__answer__container" ).mouseenter(function() {
    $(this).children('.definition__content').attr('style', 'display: block')
  });
  
  $( ".game__answer__container" ).mouseleave(function() {
    $(this).children('.definition__content').removeAttr('style')
  });
  
  
  var correct = 0;
  var incorrect = 0;
  
  $( "#finishButton" ).click(function() {
    let index = 0
  
    $('.DroppableItem .DraggableItem').removeAttr('style')
  
    $.each($('.DroppableItem .DraggableItem'), function( i, l ){
            if($(l).attr('data-correct') == "true") {
                index++
                $(l).addClass('success')
                correct++
            } else {
                $(l).addClass('error')
                incorrect++
            }
  
  
            if(index === 16) {
                $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
            } else {
                $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
            }
        });
  
        $('#finishButton').attr('style', 'display: none')
        $('#completBtn').attr('style', 'display: block')
    
    });
  
  
  
  $( "#resetButton" ).click(function() {
    $('.DroppableItem').html('')
    $('#completBtn').attr('style', 'display: none')
    $('#finishButton').attr('style', 'display: block')
  });
  
  
  $( "#completBtn" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
  });
  
  
  
  
  
  $( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')

    if(correct > 8) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/16 კითხვა`
    }
    
    if(correct <= 8) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/16 კითხვა`
    }
  });
  
  
  
  $( "#gameReset" ).click(function() {
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')

    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.game__result__container').removeAttribute('style')
    
    $('#finishButton').attr('style', 'display: block')
    $('#completBtn').attr('style', 'display: none')
    
    $('.game__table__td .game__answer__container').remove()
  
    correct = 0;
    incorrect = 0;
  });
  
  
  $( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });
  