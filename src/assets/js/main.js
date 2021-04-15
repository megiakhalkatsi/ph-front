//fixed header on scroll

var header = document.getElementById("header");
function fixedHeaderFunction() {
    if (window.pageYOffset > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function () { fixedHeaderFunction() };


function clickers() {
    $('.header__nav__item-link').click(function () {
        $('.header__nav__item-link').removeClass('active')
        $(this).addClass('active');
    })
    $('.header__nav__search').click(function () {
        $(this).toggleClass('active');
        $('.search__container').toggleClass('active');
    })
    $('.search__close').click(function () {
        $('.search__result').removeClass('active');
        $('.search__container').removeClass('active');
    })
    $('.search__icon').click(function () {
        $('.search__result').addClass('active');
        $('.search__container').addClass('result__active');
    })
    $('.dropdown__item').click(function () {
        $('#txtData').hide();
    })
    $('.select_other').click(function () {
        $('#txtData').show();
    })
    //video player
    $(".resource__item__video").click(function () {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });
    //burger menu
    $('.header__nav__menuIcon').click(function(){
        $(this).toggleClass('open');
        $('.header__nav__list').toggleClass('active');
    });
    //choose role notification
    $('.choose__teacher').click(function(){
        $('.chooseRoleModal__bottom').addClass('active');
    });
    $('.choose__student').click(function(){
        $('.chooseRoleModal__bottom').removeClass('active');
    });
    //filter - responsive
    $('.filter__row').click(function(){
        $('.filter__form').toggleClass('active');
    });
}
clickers();

function burgerMenuResponsive(x) {
    if (x.matches) { // If media query matches
        $('.header__nav__menuIcon').removeClass('open');
        $('.header__nav__list').removeClass('active');
    }
  }
  var x = window.matchMedia("(min-width: 991px)")
  burgerMenuResponsive(x) // Call listener function at run time
  x.addListener(burgerMenuResponsive) // Attach listener function on state changes

//full size images
var imgs = document.getElementsByClassName("resource__item__img");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () { imageZoom(this); }
}
function imageZoom(ele) {
    document.getElementById("image-fullscreen").style.background = 'black url(' + ele.src + ') no-repeat fixed center center';
    document.getElementById("image-fullscreen").style.backgroundSize = 'contain';
    console.log(document.getElementById("image-fullscreen").style);
}

//header navigation - active items
$(function () {
    $('.header__nav__list a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

// tabs links

function tabsLink() {
    function tabLocation() { //redirect url to current tab
        let url = location.href.replace(/\/$/, "");

        if (location.hash) {
            const hash = url.split("#");
            $('#aboutTabs a[href="#' + hash[1] + '"]').tab("show");
            url = location.href.replace(/\/#/, "#");
            history.replaceState(null, null, url);
            setTimeout(() => {
                $(window).scrollTop(0);
            }, 400);
        }

        $('a[data-bs-toggle="tab"]').on("click", function() {
            let newUrl;
            const hash = $(this).attr("href");
            if (hash == "#about") {
                newUrl = url.split("#")[0];
            } else {
                newUrl = url.split("#")[0] + hash;
            }
            newUrl += " ";
            history.replaceState(null, null, newUrl);
        });
    };

    tabLocation();

    $(window).on('hashchange', function() {
        tabLocation();
    });
}

tabsLink();

// dropdown

const dropdownToggler = () => {
    let toggler = document.querySelectorAll('.dropdown--toggler')
    toggler.forEach((item) => {
        item.addEventListener('click', () => {
            let dropdowns = document.querySelectorAll('.dropdown')
            item.parentElement.classList.toggle('open')
            dropdowns.forEach((elem) => {
                if (
                    item.parentElement.getAttribute('id') ===
                    elem.getAttribute('data-for')
                ) {
                    elem.classList.toggle('open')
                }
            })
        })
    })
}
dropdownToggler()

const selectDropdown = () => {
    let dropdownItems = document.querySelectorAll('.dropdown__item')
    dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            let items = e.target.parentElement.children
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains('dropdown__item--active')) {
                    items[i].classList.remove('dropdown__item--active')
                }
            }
            let dropdownElems = document.querySelectorAll('.dropdown__elem')
            dropdownElems.forEach((elem) => {
                if (
                    elem.getAttribute('id') ===
                    item.parentElement.parentElement.getAttribute('data-for')
                ) {
                    e.target.classList.add('dropdown__item--active')
                    let selectedInfo = elem.children[0].children[0]
                    selectedInfo.innerHTML = e.target.innerHTML
                    selectedInfo.setAttribute('value', e.target.innerHTML)
                    elem.classList.remove('open')
                    e.target.parentElement.parentElement.classList.remove('open')
                }
            })
        })
    })
}
selectDropdown()

// password show function
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    // this.classList.toggle('fa-eye-slash');
});

// bootstrap forms validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated'),
                    $('.form__label').addClass('error'),
                    $('.form__error__message').addClass('active')
            }, false)
        })
})()


var questions = [
  {
    number: 1,
    correctAnswer: 1,
    question: 'საქართველო არის სამართლებრივი სახელმწიფო, რაც ნიშნავს, რომ ხელისუფლება ხორციელდება....',
    answers: [
      {
        isCorrect: true,
        text: "საქართველოს კონსტიტუციითა და კანონით დადგენილ ფარგლებში"
      },
      {
        isCorrect: false,
        text: "უძველესი ჩვეულებებისა და ადათ-წესების შესაბამისად"
      },
      {
        isCorrect: false,
        text: "გამორჩეული ადამიანების ნება-სურვილის მიხედვით"
      },
      {
        isCorrect: false,
        text: "უცხო ქვეყნების გადაწყვეტილებებით"
      },
    ]
  },
  {
    number: 2,
    correctAnswer: 1,
    question: 'სახელმწიფო ცნობს და იცავს......',
    answers: [
      {
        isCorrect: true,
        text: "ადამიანის საყოველთაოდ აღიარებულ უფლებებსა და თავისუფლებებს"
      },
      {
        isCorrect: false,
        text: "მხოლოდ სამშობლოს წინაშე დიდი დამსახურების მქონე ადამიანების უფლებებსა და ნება-სურვილს"
      },
      {
        isCorrect: false,
        text: "მხოლოდ ქართველების უფლებებსა და თავისუფლებებს"
      },
      {
        isCorrect: false,
        text: "იმ ადამიანების უფლებებს, რომლებსაც  წაკითხული აქვთ  კონსტიტუცია"
      },
    ]
  },
  {
    number: 3,
    correctAnswer: 1,
    question: 'საქართველოში ყველა ადამიანი სამართლის წინაშე…',
    answers: [
      {
        isCorrect: true,
        text: "თანასწორია"
      },
      {
        isCorrect: false,
        text: "თანასწორია, მაგრამ კანონი უშვებს გამონაკლის შემთხვევებსაც"
      },
      {
        isCorrect: false,
        text: "თანასწორია, თუმცა შეიძლება პრივილეგიის ყიდვა ან დამსახურებით მოპოვება"
      },
      {
        isCorrect: false,
        text: "უთანასწოროა"
      },
    ]
  },
  {
    number: 4,
    correctAnswer: 1,
    question: 'აკრძალულია ადამიანის...',
    answers: [
      {
        isCorrect: true,
        text: "დისკრიმინაცია მისი რასის, კანის ფერის, სქესის, წარმოშობის ან სხვა რაიმე მისთვის დამახასიათებელი ნიშან-თვისების მიხედვით"
      },
      {
        isCorrect: false,
        text: "თანასწორად მოპყრობა, თუკი იგი ამას არ იმსახურებს"
      },
      {
        isCorrect: false,
        text: "მონაწილეობა კანონების შექმნის პროცესში"
      },
      {
        isCorrect: false,
        text: "მონაწილეობა ქვეყნის მმართველების არჩევაში"
      },
    ]
  },
]

var index = 0;




function getCorrectAnsweersMarkup(correctAnswer){
  console.log(correctAnswer)
  $('#ProgressBar').attr('style', `--v: ${correctAnswer * 45}deg`);
  $('#ProgressText').html(`კითხვა <span class="purple">${correctAnswer}</span> / ${questions.length} დან`)

}


function getQuestionsMarkup(index){

  const questionMarkup = questions.map(q => (
    `<div class="col-12 col-lg-8 page__content-col m-auto ${q.number} questionContainer" style="display: ${index + 1 === q.number ? "block" : "none"}">
      <h2 class="game__text lg mb-34 GameQuestion">${q.number}. ${q.question}</h2>
      
      <div class="game__answer__drop__container DroppableItem" data-append="false">
        <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
      </div>
      
      <div class="game__line"></div>

      <h2 class="game__title mb-34">სავარაუდო პასუხები</h2>

      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-answer="1">
            <p class="game__text md">საქართველოს კონსტიტუციითა და კანონით დადგენილ ფარგლებში</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-answer="2">
            <p class="game__text md">უძველესი ჩვეულებებისა და ადათ-წესების შესაბამისად </p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-answer="3">
            <p class="game__text md">გამორჩეული ადამიანების ნება-სურვილის მიხედვით</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-answer="4">
            <p class="game__text md">უცხო ქვეყნების გადაწყვეტილებებით</p>
          </div>
        </div>
      </div>
      <div class="game__line"></div>
    </div>`
  ))

  return questionMarkup

}


$( function() {
  const randomArray = questions.map(array => {
    var answers = array.answers.sort(function() {return 0.5 - Math.random()})

    return {...array, answers}
  })

  questions = randomArray

  const items = getQuestionsMarkup(index)

  $('#GameWrapper').append(items)
});



$( "#nextStep" ).click(function() {
  index++

  if(index === questions.length || index > 4 ) {
    index = 0
  } 
  
  console.log(index)

  $('.questionContainer').attr('style', 'display: none');
  $('.questionContainer')[index].removeAttribute('style');

});


$( "#prevStep" ).click(function() {
  index--
  
  if(index < 0) {
    index = questions.length -1
  }

  console.log(index)
  console.log(questions)

  $('.questionContainer').attr('style', 'display: none');
  $('.questionContainer')[index].removeAttribute('style');
});



$( function() {
    let incorrect = 0;
    let attempt = 0;
    let correctAnswer = 0;

    getCorrectAnsweersMarkup(correctAnswer)

    $( ".DraggableItem" ).draggable({ revert: "invalid" });
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-answer') == 1) {
            incorrect = 0
            correctAnswer++
            $( this ).append(ui.draggable)
            getCorrectAnsweersMarkup(correctAnswer)
            $(this).find('.DraggableItem').removeAttr('style')
            $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

        } else {
            attempt--
            if(incorrect < 2) {
                incorrect++

            } else if(incorrect === 2 || incorrect > 2) {
              $('#notificationModal').modal('show');
              $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

              // $('#myModal').modal('toggle');
              // $('#myModal').modal('hide');
            }
            // console.log(incorrect)

            ui.draggable.attr('style', "position: relative")
        }
        attempt++
      }
    });
});