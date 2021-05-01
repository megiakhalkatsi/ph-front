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
//     })
//     $('.search__close').click(function () {
//         $('.search__result').removeClass('active');
//         $('.search__container').removeClass('active');
//     })
//     $('.search__icon').click(function () {
//         $('.search__result').addClass('active');
//         $('.search__container').addClass('result__active');
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
//     $('.header__nav__menuIcon').click(function(){
//         $(this).toggleClass('open');
//         $('.header__nav__list__container').toggleClass('active');
//     });
//     //choose role notification
//     $('.choose__teacher').click(function(){
//         $('.chooseRoleModal__bottom').addClass('active');
//     });
//     $('.choose__student').click(function(){
//         $('.chooseRoleModal__bottom').removeClass('active');
//     });
//     //filter - responsive
//     $('.filter__row').click(function(){
//         $('.filter__form').toggleClass('active');
//     });
// }
// clickers();

// function burgerMenuResponsive(x) {
//     if (x.matches) { // If media query matches
//         $('.header__nav__menuIcon').removeClass('open');
//         $('.header__nav__list__container').removeClass('active');
//     }
//   }
//   var x = window.matchMedia("(min-width: 991px)")
//   burgerMenuResponsive(x) // Call listener function at run time
//   x.addListener(burgerMenuResponsive) // Attach listener function on state changes

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

//         $('a[data-bs-toggle="tab"]').on("click", function() {
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

//     $(window).on('hashchange', function() {
//         tabLocation();
//     });
// }

// tabsLink();

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



// // $( "#DogImage" ).draggable({ revert: "invalid" });



var questions = [
    {
      correctAnswer: 5,
      question: 'პოლიციაში შევიდა შეტყობინება, რომ სურსათის მაღაზია უცნობმა პირმა გაქურდა. მოკვლევის შედეგად დადგინდა, რომ ნიკო დანაშაულის ადგილას შენიშნა რამდენიმე მეზობელმა. როდესაც  დაკითხეს, მან თქვა, რომ დანაშაულის ადგილას შემთხვევით მოხვდა, რადგან იმ გზით მიდიოდა სახლისკენ. არსებობს საფუძველი ეჭვისათვის, რომ ნიკო დანაშაულის ადგილას შემთხვევით არ მოხვედრილა, თუმცა არ არსებობს მტკიცებულება, რომლის მიხედვითაც ნიკოს დანაშაულში მონაწილეობა დადასტურდება. პროკურორმა ნიკო',
      question2: 'ცნო',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 6,
      question: 'როდესაც დანაშაული ხდება, უფლებამოსილი პირები - გამომძიებელი და პროკურორი - ახორციელებენ დამნაშავის მოძებნა-მხილების და შემდეგ, კანონის შესაბამისად, დამნაშავის დასჯის მოქმედებებს. ამ მოქმედებათა ერთობლიობას',
      question2: 'ეწოდება.',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 3,
      question: 'გამოძიების შედეგად დადგინდა, აღმოჩნდა არაერთი მტკიცებულება იმის შესახებ, რომ ანდრომ, რომელსაც მაღალი სახელმწიფო თანამდებობა უჭირავს, არაერთგზის აიღო ქრთამი  მოქალაქეებისაგან. საგამოძიებო მოქმედებების ჩატარების შემდეგ ანდრო დააკავეს და',
      question2: 'სტატუსით.',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 2,
      correctAnswer2: 1,
      question: 'ლევანი არის სახელმწიფო თანამდებობის პირი, რომელიც უფლებამოსილია, აწარმოოს წინასწარი გამოძიება მომხდარ დანაშაულთან დაკავშირებით. იგი პასუხისმგებელია საგამოძიებო მოქმედებების სრულად და დროულად ჩატარებაზე. ნატო კი საგამოძიებო პროცესს ხელმძღვანელობს. ის პროკურატურაში მუშაობს და აქვს უფლებამოსილება, სახელმწიფოს სახელით წარუდგინოს ბრალდება პირს სასამართლოში.  ლევანის პროფესია არის',
      question2: 'ხოლო ნატოსი',
      question3: true,
      isTwoQuestion: true
    },
    {
      correctAnswer: 4,
      question: 'სასამართლომ გიორგის მიმართ გამოიტანა გამამტყუნებელი განაჩენი - ის დამნაშავედ ცნეს ქრთამის აღებისთვის. გიორგის კანონის შესაბამისად მიესაჯა თავისუფლების აღკვეთა. რა სტატუსი აქვს გიორგის?',
      question2: '',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 7,
      question: 'ცირას სურს, დეტალური ინფორმაცია მიიღოს საგამოძიებო პროცესების შესახებ და მიაჩნია, რომ პროფესიონალისაგან კონსულტაცია სჭირდება. ცირამ უნდა მიმართოს',
      question2: '',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 8,
      question: 'ხატია ქუჩაში შეესწრო ერთი მოქალაქის მიერ მეორის მიმართ ფიზიკური შეურაცხყოფის მიყენების ფაქტს. იმის გამო, რომ ხატიას შესაძლოა მნიშვნელოვანი ინფორმაცია ჰქონდეს მომხდარი შემთხვევის შესახებ, გამომძიებელმა იგი',
      question2: 'სტატუსით დასაკითხად დაიბარა.',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 10,
      question: 'იმ ქმედებას, რომელიც სისხლის სამართლის კოდექსის მიხედვით დასჯად ქმედებად არის განსაზღვრული,',
      question2: 'ეწოდება.',
      question3: '',
      isTwoQuestion: false,
    },
    {
      correctAnswer: 9,
      question: 'სასამართლომ გაითვალისწინა პროკურორის მიერ წარმოდგენილი მტკიცებულებები და ცოტნე დამნაშავედ ცნო მანქანის მოპარვისთვის. სასამართლომ ცოტნეს მიმართ გამამტყუნებელი',
      question2: 'გამოიტანა და მას 4 წლით თავისუფლების აღკვეთა მიუსაჯა.',
      question3: '',
      isTwoQuestion: false,
    },
]

  var index = 0;
  
  
  function getCorrectAnsweersMarkup(correctAnswer){
    if(correctAnswer !== 0) {
      $('#ProgressLine').removeClass(`line__${correctAnswer - 1}`)
      $('#ProgressLine').addClass(`line__${correctAnswer}`)
    }
    $('#ProgressText').html(`კითხვა <span class="purple">${correctAnswer}</span> / ${questions.length} დან`)
  
  }
  
  function getQuestionsMarkup(index){
  
    const questionMarkup = questions.map((q, i) => (
      `<h2 class="game__dragAndDrop__text ${q.number} questionContainer ${index + 1 === q.number ? "active" : ""}" style="display: ${index + 1 === q.number ? "block" : "none"}">
        ${q.number}. ${q.question} 
          <div class="game__answer__drop__container DroppableItem" data-append="false" data-correct=${q.correctAnswer} data-twoQuestions=${q.isTwoQuestion}>
            <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
          </div>
        ${q.question2} ${q.question3 && `<div class="game__answer__drop__container DroppableItem" data-append="false" data-correct=${q.correctAnswer2} data-twoQuestions=${q.isTwoQuestion}>
        <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
      </div>`}
      </h2>`
    ))
  
    return questionMarkup
  
  }
  
  
  $( function() {
    const randomArray = questions.sort(function() {return 0.5 - Math.random()})
    const modifier = randomArray.map((q, i) => {
      return {...q, number: i + 1}
    })
    questions = modifier
  
    const items = getQuestionsMarkup(index)
  
    $('#GameWrapper').append(items)
  });
  
  
  $( "#nextStep" ).click(function() {
    index++
  
    if(index === questions.length || index > 9 ) {
      index = 0
    } 
  
    $('.questionContainer').removeClass('active')
    $('.questionContainer').attr('style', 'display: none');
    $('.questionContainer')[index].removeAttribute('style');
    $('.questionContainer')[index].classList.add('active')
  
    if($('.questionContainer.active .DroppableItem').attr('data-append') == 'true') {
        $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
    } else {
        $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')
    }
  });
  
  
  $( "#prevStep" ).click(function() {
    index--
    
    if(index < 0) {
      index = questions.length -1
    }
    
    $('.questionContainer').removeClass('active');
    $('.questionContainer').attr('style', 'display: none');
    $('.questionContainer')[index].removeAttribute('style');
    $('.questionContainer')[index].classList.add('active')
    
    if($('.questionContainer.active .DroppableItem').attr('data-append') == 'true') {
        $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
    } else {
        $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')
    }
  
  });
  
  
  $( function() {
      let incorrect = 0;
      let incorrect2 = 0;
      let correctAnswer = 0;
  
      getCorrectAnsweersMarkup(correctAnswer)

      $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone" });
      $( ".DroppableItem" ).droppable({
        drop: function( event, ui ) {
            if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') === event.target.getAttribute('data-correct') && event.target.getAttribute('data-twoquestions') === "true") {
              // debugger
              incorrect2++

              var new_signature = $(ui.helper).clone();
              $(this).append(new_signature);
              $(new_signature).removeAttr('style')
              $(new_signature).addClass('success')
              $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))
              $( this ).attr('data-append', true)
              if(incorrect2 === 2) {
                correctAnswer++
                getCorrectAnsweersMarkup(correctAnswer)
                $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
              }

              ui.draggable.attr('style', "position: relative")

          } else if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') == event.target.getAttribute('data-correct')) {
              incorrect = 0
              correctAnswer++
              
              var new_signature = $(ui.helper).clone();
              $(this).append(new_signature);
              $(new_signature).removeAttr('style')
              $(new_signature).addClass('success')
              getCorrectAnsweersMarkup(correctAnswer)
              $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))
              $( this ).attr('data-append', true)
              $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

          } else if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') !== event.target.getAttribute('data-correct')) {
            incorrect++
            var new_signature = $(ui.helper).clone();
              $(this).append(new_signature);
              $(new_signature).removeAttr('style')
              $(new_signature).addClass('error')
              $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))
              $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

              ui.draggable.attr('style', "position: relative")
          }
        }
      });
  });