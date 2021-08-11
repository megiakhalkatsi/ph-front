

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


function getCorrectAnsweersMarkup(index){
  if(index !== 0) {
      if(index > 1) {
          $('#ProgressLine').removeClass(`progress-${(index - 1) * 25}`)
      }
    $('#ProgressLine').addClass(`progress-${index * 25}`)
  }
  $('#ProgressText').html(`კითხვა <span class="purple">${index}</span> / ${questions.length} დან`)

}

function getQuestionsMarkup(index){

  const questionMarkup = questions.map((q, i) => (
    `<div class="col-12 col-lg-8 page__content-col m-auto ${q.number} questionContainer ${index + 1 === q.number ? "active" : ""}" style="display: ${index + 1 === q.number ? "block" : "none"}">
      <h2 class="game__text lg mb-34 GameQuestion">${q.number}. ${q.question}</h2>
      
      <div class="game__answer__drop__container DroppableItem" data-append="false">
        <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
      </div>
      
      <div class="game__line"></div>

      <h2 class="game__title mb-34">სავარაუდო პასუხები</h2>

      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[0].isCorrect}'>
            <p class="game__text md">${q.answers[0].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[1].isCorrect}'>
            <p class="game__text md">${q.answers[1].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[2].isCorrect}'>
            <p class="game__text md">${q.answers[2].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[3].isCorrect}'>
            <p class="game__text md">${q.answers[3].text}</p>
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

$( "#successModalBtn" ).click(function() {
  document.querySelector('.game__result__container').classList.remove('active')
  document.querySelector('.game__result__container').setAttribute('style', 'z-index: 11')

 window.location.reload()
});


$( function() {
    var incorrect = 0;
    var attempt = 0;
    var correctAnswer = 0;

    getCorrectAnsweersMarkup(attempt)

    $( ".DraggableItem" ).draggable({ revert: "invalid" });
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-isCorrect') == 'true') {
            incorrect = 0
            correctAnswer++
            $( this ).append(ui.draggable)
            getCorrectAnsweersMarkup(correctAnswer)
            $(this).find('.DraggableItem').removeAttr('style')
            $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

            if(correctAnswer === 4) {
              setTimeout(() => {
                document.querySelector('.game__result__container').classList.add('active')
                document.querySelector('.game__result__container').setAttribute('style', 'z-index: 11')
            }, 2000)
            }
        } else {
            attempt--
            if(incorrect < 2) {
                incorrect++
                $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

            } else if(incorrect === 2 || incorrect > 2) {
              $('#notificationModal').modal('show');
              $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

              // $('#myModal').modal('toggle');
              // $('#myModal').modal('hide');
            }

            ui.draggable.attr('style', "position: relative")
        }
        attempt++
      }
    });
});