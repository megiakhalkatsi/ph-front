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


// // focusMethod = function getFocus() {
// //     document.getElementById("myTextField").focus();
// //   }
  
// function clickers() {
//     $('.header__nav__item-link').click(function () {
//         $('.header__nav__item-link').removeClass('active')
//         $(this).addClass('active');
//     })
//     $('.header__nav__search').click(function () {
//         $(this).toggleClass('active');
//         $('.search__container').toggleClass('active');
//         $("body").toggleClass("open-modal");
//         $("#searchInput").focus();
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
// var imgs = document.querySelectorAll('.resource__item__img, .section__theme__page__img');

// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].onclick = function () { imageZoom(this); }
// }
// function imageZoom(ele) {
//     document.getElementById("image-fullscreen").style.background = 'black url(' + ele.src + ') no-repeat center center';
//     document.getElementById("image-fullscreen").style.backgroundSize = 'contain';
//     console.log(document.getElementById("image-fullscreen").style);
// }

// $(window).click(function() {
//     $('#fullscreenImgModal').modal('hide');
// });
// $('.image-fullscreen').click(function(e) {
//     e.stopPropagation();
// });

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

// $(window).click(function() {
//     $('.language__desktop').removeClass('open')  
//     $('.language__desktop .dropdown').removeClass('open')  
//     $('#language__mobile').removeClass('open')  
//     $('#language__mobile .dropdown').removeClass('open')  
// });
// $('.language__desktop').click(function(e) {
//     e.stopPropagation();
// });
// $('#language__mobile').click(function(e) {
//     e.stopPropagation();
// });

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








var index = 0;
var correct = 0;
var attampt = 0;



var questions = [
    {
        id: 1,
        question: "მოგესალმებით, მე თეონა მქვია. მირჩიეს, რომ კვალიფიციური იურიდიული დახმარების მისაღებად თქვენთვის მომემართა. ჩემმა მეზობელმა წყალი ჩამომიშვა და ახლად გაკეთებული რემონტი დამიზიანა. თავად პასუხისმგებლობას თავს არიდებს და ზიანის ანაზღაურებაზე უარს მეუბნება. ვის შემიძლია მივმართო ჩემი უფლებების დასაცავად?",
        hint: "ყოველ ადამიანს აქვს უფლება, თავის უფლებათა და თავისუფლებათა დასაცავად პირადად ან წარმომადგენლის მეშვეობით პირდაპირ მიმართოს სასამართლოს.",
        answers: [
            {
                text: 'თქვენ შეგიძლიათ, მიმართოთ პოლიციას',
                isCorrect: false,
            },
            {
                text: 'თქვენ შეგიძლიათ, მიმართოთ მერიას',
                isCorrect: false,
            },
            {
                text: 'თქვენ შეგიძლიათ, მიმართოთ სასამართლოს.',
                isCorrect: true,
            },
        ]
    },
    {
        id: 2,
        question: "გმადლობთ პასუხისთვის. ჩემი ნათლია ერთ-ერთ სამინისტროში მუშაობს მაღალ თანამდებობაზე. როგორ ფიქრობთ, მისი გავლენა ძალიან დამეხმარება?",
        hint: "მოსამართლე დამოუკიდებელია და ემორჩილება მხოლოდ საქართველოს კონსტიტუციასა და კანონებს. არავის არა აქვს უფლება, მოსამართლეს მოსთხოვოს ანგარიში ან მიუთითოს, როგორი გადაწყვეტილება მიიღოს კონკრეტულ საქმეზე.",
        answers: [
            {
                text: 'მაღალჩინოსნის გავლენას ყოველთვის გარდამტეხი როლი შეუძლია ითამაშოს ასეთ საქმეებში.',
                isCorrect: false,
            },
            {
                text: 'სასამართლო დამოუკიდებელია და დაუშვებელია მის საქმიანობაში ჩარევა ნებისმიერი გარე პირის მიერ, მიუხედავად მისი თანამდებობისა.',
                isCorrect: true,
            },
            {
                text: 'დიახ, სასამართლო ანგარიშვალდებულია სამინისტროების წინაშე.',
                isCorrect: false,
            },
        ]
    },
    {
        id: 3,
        question: "ჩემმა მეზობელმა რომ წყალი ჩამომიშვა, ეს რა კატეგორიის საქმეა?",
        hint: "სამართლის დარგებია: სისხლის სამართალი - დანაშაულის ცნება, სასჯელი, დანაშაულის გამოძიება, დამნაშავის დასჯა;       ადმინისტრაციული სამართალი - სახელმწიფო ორგანოებისა და დაწესებულებების საქმიანობა, საზოგადოებრივი წესრიგის რეგულირება; სამოქალაქო სამართალი - პირთა თანასწორობაზე დამყარებული კერძო ხასიათის ქონებრივი, საოჯახო და პირადი ურთიერთობები.",
        answers: [
            {
                text: 'წყლის ჩამოშვება სისხლის სამართლის დანაშაულია!',
                isCorrect: false,
            },
            {
                text: 'ეს საკითხი პოლიციამ უნდა გადაწყვიტოს',
                isCorrect: false,
            },
            {
                text: 'მეზობლებს შორის დავა სამოქალაქო სამართლის დავას განეკუთვნება.',
                isCorrect: true,
            },
        ]
    },
    {
        id: 4,
        question: "ესე იგი, სასამართლოს რომ მივმართავ, მოსამართლე თავად მოიძიებს ფაქტებს, გამოიკვლევს საქმეს და დაადგენს სიმართლეს?",
        hint: " სასამართლოში საქმე განიხილება მხარეთა თანასწორობისა და შეჯიბრებითობის პრინციპის მიხედვით, რაც იმას ნიშნავს, რომ საქმეში მონაწილე მხარეებს აქვთ თანაბარი შესაძლებლობა, წარადგინონ თავიანთი პოზიციის დამადასტურებელი მტკიცებულებები.",
        answers: [
            {
                text: 'დიახ, სასამართლოს ფუნქცია ჭეშმარიტების დადგენაა.',
                isCorrect: false,
            },
            {
                text: 'თქვენ თავად უნდა წარუდგინოთ თქვენი სიმართლის დამადასტურებელი მტკიცებულებები სასამართლოს.',
                isCorrect: true,
            },
            {
                text: 'მოსამართლე იმავდროულად გამომძიებელიც არის.',
                isCorrect: false,
            },
        ]
    },
    {
        id: 5,
        question: "რა შემიძლია გავაკეთო, თუ სასამართლო ჩემს საწინააღმდეგოდ მიიღებს გადაწყვეტილებას?",
        hint: "საქართველოს საერთო სასამართლოების სისტემა სამი ინსტანციისაგან შედგება. საქმის განხილვა იწყება რაიონულ/საქალაქო სასამართლოში. რაიონული/საქალაქო სასამართლოს გადაწყვეტილება შესაძლოა გასაჩივრდეს სააპელაციო სასამართლოში, რომელიც მდებარეობს თბილისსა და ქუთაისში. სააპელაციო სასამართლოს გადაწყვეტილება კანონის შესაბამისად შეიძლება გასაჩივრდეს საქართველოს უზენაეს სასამართლოში, რომელიც მდებარეობს თბილისში.",
        answers: [
            {
                text: 'სასამართლოს გადაწყვეტილება საბოლოოა და არ საჩივრდება.',
                isCorrect: false,
            },
            {
                text: 'თუ მიიჩნევთ, რომ სასამართლომ უკანონოდ გამოიტანა თქვენს საწინააღმდეგოდ გადაწყვეტილება, შეგიძლიათ ეს გადაწყვეტილება გაასაჩივროთ სააპელაციო სასამართლოში.',
                isCorrect: true,
            },
            {
                text: 'სასამართლოს გადაწყვეტილება შეგიძლიათ გაასაჩივროთ პროკურატურაში',
                isCorrect: false,
            },
        ]
    },
]



function getQuestionsMarkup(){

    const questionMarkup = questions.map((q, i) => (
      `<div class="mainCont" style="${i === index ? "display: block" : "display: none"}"><div class="game__quiz__quest">
            <span class="text">${q.question}</span>
        </div>

        <div class="game__quiz__answ__cont">
            <div class="game__quiz__answ">
                <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[0].isCorrect}"></h6>
                <span class="text">${q.answers[0].text}</span>
            </div>

            <div class="game__quiz__answ">
            <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[1].isCorrect}"></h6>
                <span class="text">${q.answers[1].text}</span>
            </div>

            <div class="game__quiz__answ">
            <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[2].isCorrect}"></h6>
                <span class="text">${q.answers[2].text}</span>
            </div>
        </div>

        <div class="game__instruction collapsed mt-4" data-bs-toggle="collapse" data-bs-target="#hint" aria-expanded="false" aria-controls="hint">
            <img src="../assets/img/icons/info-circle.svg" alt="instruction" class="game__instruction__img">
            <span class="game__instruction__text">მინიშნება</span>
            <svg class="icon">
                <use xlink:href="#arrow-dropdown"></use>
            </svg>
        </div>

        <div class="collapse mt-3" id="hint">
            <p class="game__text md mb-0 light">
                ${q.hint}
            </p>
        </div></div>`
    ))
    return questionMarkup 
}

  
$( function() {
    var randomArray = questions.map(array => {
        let an = array.answers.sort(function() {return 0.5 - Math.random()})

        return {...array, answers: an}
    })

    questions = randomArray

    console.log(questions)

    const items = getQuestionsMarkup(index)

    $('#GameWrapper').append(items)
});


function getCorrectAnsweersMarkup(index){
    if(index !== 0) {
        if(index > 1) {
            $('#ProgressLine').removeClass(`progress-${(index - 1) * 25}`)
        }
      $('#ProgressLine').addClass(`progress-${index * 25}`)
    }
    $('#ProgressText').html(`კითხვა <span class="purple">${index}</span> / ${questions.length} დან`)
  
  }



  
$( function() {
    $('.game__checkbox').click(function(e) {
        if(e.target.getAttribute('data-checked') === "false") {
            if(e.target.getAttribute('data-iscorrect') === "true") {
                $(this).parent().addClass('yellow')
                $(this).parent().addClass('checked')
                $(this).parent().parent().find('h6').attr('data-checked', true)
                correct++ 
                attampt++
                getCorrectAnsweersMarkup(correct)
                
            } else {
                $(this).parent().parent().find('h6').attr('data-checked', true)
                $(this).parent().addClass('pink')
                $(this).parent().addClass('checked')
                attampt++
            }

            if(attampt === 5) {
                document.querySelector('.game__result__container').classList.add('active') 
                document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
            }
        }
    })
});
      


$( "#nextStep" ).click(function() {
    index++
  
    $('.mainCont').attr('style', 'display: none');

    if(index === questions.length || index > 4 ) {
      index = 0
    } 

    $('.mainCont')[index].setAttribute('style', 'display: block');
});
  
  
$( "#prevStep" ).click(function() {
    index--

    $('.mainCont').attr('style', 'display: none');
    
    if(index < 0) {
      index = questions.length -1
    }

      $('.mainCont')[index].setAttribute('style', 'display: block');
  
});
  




$( "#completBtn" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
  });
  
  
  $( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
  
    if(correct > 3) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/5 კითხვა`
    }
    
    if(correct < 3) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/5 კითხვა`
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
    
    $('.game__quiz__answ').removeClass('blue')
    $('.game__quiz__answ').removeClass('yellow')
    $('.game__quiz__answ').removeClass('pink')
    $('.game__quiz__answ').removeClass('checked')
    $('.game__checkbox').attr('data-checked', false)

    index = 0;
    correct = 0;
    attampt = 0;
    
  });
  
  $( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });
//# sourceMappingURL=main.js.map
