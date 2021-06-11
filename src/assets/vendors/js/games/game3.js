



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

let arr;

let incorrect = 0;
let correctAnswer = 0;
let attampt = 0;

var index = 0;
var parentCorrectNum = 0;
var parentinCorrectNum = 0;


function getCorrectAnsweersMarkup(correct){
  if(correct !== 0) {
    $('#ProgressLine').removeClass(`line__${correct - 1}`)
    $('#ProgressLine').addClass(`line__${correct}`)
  }
  $('#ProgressText').html(`კითხვა <span class="purple">${correct}</span> / 10 დან`)
}

function getQuestionsMarkup(index, array){

  const questionMarkup = array.map((q, i) => (
    `<h2 class="game__dragAndDrop__text ${q.number} questionContainer ${index + 1 === q.number ? "active" : ""}" style="display: ${index + 1 === q.number ? "block" : "none"}">
      ${q.number}. ${q.question} 
        <div class="game__answer__drop__container DroppableItem ui-droppable" data-append="false" data-correct=${q.correctAnswer}>
          <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
        </div>
      ${q.question2} ${q.question3 && `<div class="game__answer__drop__container DroppableItem" data-append="false" data-correct=${q.correctAnswer2}>
      <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
    </div>`}
    </h2>`
  ))
  return questionMarkup
}


$( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone",
start: function( event, ui ) {
  $('.definition__content').attr('style', 'display: none;')
}});

$( function() {
  const randomArray = questions.sort(function() {return 0.5 - Math.random()})
  const modifier = randomArray.map((q, i) => {
    return {...q, number: i + 1}
  })
  arr = modifier
  questions = modifier

  const items = getQuestionsMarkup(index, questions)

  $('.questions').append(items)
});


$( "#nextStep" ).click(function() {
  index++

  if(index === arr.length || index > 9 ) {
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
    index = arr.length -1
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
  if(parentCorrectNum > 5) {
    $('.game__result__container').removeClass('active')
    $('.mainBody').attr('style', 'display: none')
      $('.success').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      $('#correctAnswers1').html(`${correctAnswer}/10 კითხვა`)
  }
  
  if(parentCorrectNum <= 5) {
    $('.game__result__container').removeClass('active')
    $('.mainBody').attr('style', 'display: none')
      $('.fail').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      $('#correctAnswers2').html(`${correctAnswer}/10 კითხვა`)
  }
});


$( "#gameReset" ).click(function() {
    $('.mainBody').removeAttr('style')
    document.querySelector('.fail').setAttribute('style', 'display: none')
    document.querySelector('.success').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')

  incorrect = 0;
  correctAnswer = 0;
  attampt = 0;
    
  index = 0;
  parentCorrectNum = 0;
  parentinCorrectNum = 0;

  getCorrectAnsweersMarkup(attampt)
    $('.questions').html('')
  
    const items = getQuestionsMarkup(0, arr)
  
    $('.questions').append(items)

    $('.DroppableItem').attr('data-append', false)

    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          console.log('11111111111111')
          if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') == event.target.getAttribute('data-correct')) {
            correctAnswer++
            parentCorrectNum = correctAnswer;
            attampt++

            var new_signature = $(ui.helper).clone();
            $(this).append(new_signature);
            $(new_signature).removeAttr('style')
            $(new_signature).addClass('success')
            getCorrectAnsweersMarkup(attampt)


            $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))

            $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

        } else if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') !== event.target.getAttribute('data-correct')) {
          incorrect++
          attampt++
          parentinCorrectNum = incorrect
          var new_signature = $(ui.helper).clone();
          $(this).append(new_signature);
          $(new_signature).removeAttr('style')
          $(new_signature).addClass('error')
          getCorrectAnsweersMarkup(attampt)
      
            $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))
            $( this ).attr('data-append', true)
          $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

            ui.draggable.attr('style', "position: relative")
        }

        if(attampt === 10) {
          setTimeout(() => {
              document.querySelector('.game__result__container').classList.add('active')
              document.querySelector('.game__result__container').setAttribute('style', 'z-index: 11')
          }, 2000)
        }

        
      }
    }); 

});


$( ".completGame" ).click(function() {
  $('.mainBody').removeAttr('style')
    document.querySelector('.fail').setAttribute('style', 'display: none')
    document.querySelector('.success').setAttribute('style', 'display: none; position: absolute;top: 0;left: 0;right: 0;z-index: 11111;}')
    document.querySelector('.game__result__container').classList.remove('active')
});

$( ".completGame2" ).click(function() {
  $('.mainBody').removeAttr('style')
    document.querySelector('.fail').setAttribute('style', 'display: none')
  $('.success').removeAttr('style')
  $('.success').attr('style', 'display: none');
    document.querySelector('.game__result__container').classList.remove('active')
});


$( ".game__answer__container" ).mouseenter(function() {
  $(this).children('.definition__content').attr('style', 'display: block')
});

$( ".game__answer__container" ).mouseleave(function() {
  $(this).children('.definition__content').removeAttr('style')
});


$( function() {
    getCorrectAnsweersMarkup(attampt)

    $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone",
    start: function( event, ui ) {
      $('.definition__content').attr('style', 'display: none;')
    }});

    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') == event.target.getAttribute('data-correct')) {
            correctAnswer++
            parentCorrectNum = correctAnswer;
            attampt++
            var new_signature = $(ui.helper).clone();
            $(this).append(new_signature);
            $(new_signature).removeAttr('style')
            $(new_signature).addClass('success')
            getCorrectAnsweersMarkup(attampt)


            $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))

            $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

        } else if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-correct') !== event.target.getAttribute('data-correct')) {
          incorrect++
          attampt++
          parentinCorrectNum = incorrect
          var new_signature = $(ui.helper).clone();
          $(this).append(new_signature);
          $(new_signature).removeAttr('style')
          $(new_signature).addClass('error')
          getCorrectAnsweersMarkup(attampt)
      
            $(this).find('.DraggableItem p').text($(this).find('.DraggableItem p').attr('modifierName'))
            $( this ).attr('data-append', true)
          $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

            ui.draggable.attr('style', "position: relative")
        }

        if(attampt === 10) {
          setTimeout(() => {
              document.querySelector('.game__result__container').classList.add('active')
              document.querySelector('.game__result__container').setAttribute('style', 'z-index: 11')
          }, 2000)
        }

        
      }
    });  
});

