

var questions = [
  {
    number: 1,
    correctAnswer: 26,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენი პროცენტის მიმართ გამოიყენეს მშობლებმა/მშობელმა აღზრდის მხოლოდ არაძალადობრივი მეთოდი? ',
  },
  {
    number: 2,
    correctAnswer: 26,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენ პროცენტს გამოუცდია ფიზიკური დასჯა მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 3,
    correctAnswer: 5,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენ პროცენტს გამოუცდია მკაცრი ფიზიკური დასჯა მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 4,
    correctAnswer: 66,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენი პროცენტს გამოუცდია ფსიქოლოგიური აგრესია მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 5,
    correctAnswer: 85,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება სკოლის სრულ საშუალო საფეხურს (X-XII კლ?',
  },
  {
    number: 6,
    correctAnswer: 96,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება სკოლის საბაზო საფეხურს (VII-IX კლ)?',
  },
  {
    number: 7,
    correctAnswer: 98,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება დაწყებით საფეხურს (I-VI კლ)?',
  },
  {
    number: 8,
    correctAnswer: 6,
    question: 'ოჯახების რამდენ პროცენტს არ გააჩნია ადეკვატური საშუალებები ხელის დასაბანად წყლის, საპნის ან ხელის დასაბანი ფხვნილის უქონლობის გამო?',
  },
  {
    number: 9,
    correctAnswer: 27,
    question: '6-23 თვის ბავშვების რამდენი პროცენტი იღებს საკვები რაციონის მინიმალურ მრავალფეროვნებას და მინიმალური სიხშირით?',
  },
  {
    number: 10,
    correctAnswer: 14,
    question: 'კვლევის მომენტისათვის 20-24 წლის გოგონების რამდენი პროცენტი დაქორწინდა 18 წლამდე?',
  },
  {
    number: 11,
    correctAnswer: 47,
    question: '18 წლამდე დაქორწინებული 20-24 წლის გოგონების რამდენ პროცენტს აქვს მიღებული მხოლოდ დაწყებითი ან არასრული საშუალო განათლება?',
  },
]


var questions2 = [
  {
    number: 1,
    correctAnswer: 26,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენი პროცენტის მიმართ გამოიყენეს მშობლებმა/მშობელმა აღზრდის მხოლოდ არაძალადობრივი მეთოდი? ',
  },
  {
    number: 2,
    correctAnswer: 26,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენ პროცენტს გამოუცდია ფიზიკური დასჯა მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 3,
    correctAnswer: 5,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენ პროცენტს გამოუცდია მკაცრი ფიზიკური დასჯა მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 4,
    correctAnswer: 66,
    question: '1-14 წლამდე ასაკის ბავშვების რამდენი პროცენტს გამოუცდია ფსიქოლოგიური აგრესია მშობლის/მშობლების მხრიდან?',
  },
  {
    number: 5,
    correctAnswer: 85,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება სკოლის სრულ საშუალო საფეხურს (X-XII კლ?',
  },
  {
    number: 6,
    correctAnswer: 96,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება სკოლის საბაზო საფეხურს (VII-IX კლ)?',
  },
  {
    number: 7,
    correctAnswer: 98,
    question: 'შესაბამისი ასაკის ბავშვების რამდენი პროცენტი სარგებლობს განათლების მიღების უფლებით და ესწრება დაწყებით საფეხურს (I-VI კლ)?',
  },
  {
    number: 8,
    correctAnswer: 6,
    question: 'ოჯახების რამდენ პროცენტს არ გააჩნია ადეკვატური საშუალებები ხელის დასაბანად წყლის, საპნის ან ხელის დასაბანი ფხვნილის უქონლობის გამო?',
  },
  {
    number: 9,
    correctAnswer: 27,
    question: '6-23 თვის ბავშვების რამდენი პროცენტი იღებს საკვები რაციონის მინიმალურ მრავალფეროვნებას და მინიმალური სიხშირით?',
  },
  {
    number: 10,
    correctAnswer: 14,
    question: 'კვლევის მომენტისათვის 20-24 წლის გოგონების რამდენი პროცენტი დაქორწინდა 18 წლამდე?',
  },
  {
    number: 11,
    correctAnswer: 47,
    question: '18 წლამდე დაქორწინებული 20-24 წლის გოგონების რამდენ პროცენტს აქვს მიღებული მხოლოდ დაწყებითი ან არასრული საშუალო განათლება?',
  },
]

var index = 0;
var attampt = 0;
let activeQuestion;
var correctAnswer;
var selectedAnswer = 0;
var correctAnswerCount = 0;

var slider = document.getElementById("myRange");
var output = document.querySelector(".purple3");
output.innerHTML = `${slider.value}%`;

slider.oninput = function() {
  output.innerHTML = `${this.value}%`;
  selectedAnswer = this.value;

  document.querySelector('.game__percent__answer .purple3').innerText = `${this.value}%`
  document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
}


function getCorrectAnsweersMarkup(index){
  if(index !== 0) {
      if(index > 1) {
          $('#ProgressLine').removeClass(`progress-${(index - 1) * 9}`)
      } else if(index === 11) {
          $('#ProgressLine').removeClass(`progress-99`)

      }

      if(index === 11) {
          $('#ProgressLine').addClass(`progress-100`)
      } else {
          $('#ProgressLine').addClass(`progress-${index * 9}`)
      }
  }
  $('#ProgressText').html(`კითხვა <span class="purple">${index}</span> / 11 დან`)

}



$( function() {
  const randomArray = questions.sort(function() {return 0.5 - Math.random()})

  questions = randomArray

  correctAnswer = randomArray[index].correctAnswer
  activeQuestion = randomArray[index].number

  document.querySelector('.game__percent__title').innerText = randomArray[index].question
});


$('#checkAnswer').click(() => {
    attampt++

    getCorrectAnsweersMarkup(attampt)

    let selected = parseInt(selectedAnswer)
    let formula1 = selected - correctAnswer < 11
    let formula2 = correctAnswer - selected < 11

    if(formula1 && (selected - correctAnswer >= 0) || formula2 && (correctAnswer - selected >= 0)) {
        correctAnswerCount++
        document.querySelector('.purple3').innerText = `${selectedAnswer}%`;
        document.querySelector('.purple3').setAttribute('style', 'color: #80c78b')

        let r = questions.map(w => {
            if(activeQuestion === w.number) {
                return { ...w, selectAnswer: true, selectedAnswer: selectedAnswer, iscorrect: true, isDisabled: true }
            }

            return w
        })

        questions = r;
      } else {
          $('.modalContainer').modal('show');
          document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
          document.querySelector('.purple3').removeAttribute('style')
          document.querySelector('.purple3').innerText = `${selectedAnswer}%`;
          document.querySelector('.modalCorrectAnswer').innerText = `${correctAnswer}%`;
          document.querySelector('.modalMyAnswer').innerText = `${selectedAnswer}%`

          let r = questions.map(w => {
              if(activeQuestion === w.number) {
                  return { ...w, selectAnswer: true, selectedAnswer: selectedAnswer, iscorrect: false, isDisabled: true }
              }

              return w
          })

          questions = r;
    }

    slider.disabled = true;

    if(attampt === 11) {
      document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
    }
})



$( "#nextStep" ).click(function() {
  index++

  if(index === questions.length || index > 11 ) {
    index = 0
  } 

  const items = questions[index]
  correctAnswer = items.correctAnswer
  activeQuestion = items.number
  selectedAnswer = items.selectedAnswer
  document.querySelector('.game__percent__title').innerText = items.question

  if(items.selectAnswer === true && items.iscorrect == true) {
      document.querySelector('.purple3').innerText = `${items.correctAnswer}%`;
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
      document.querySelector('.purple3').setAttribute('style', 'color: #80c78b')
      slider.value = items.selectedAnswer;
      slider.disabled = true;
      output.innerHTML = `${items.selectedAnswer}%`;

  } else if(items.selectAnswer === true && items.iscorrect == false) {
      document.querySelector('.purple3').innerText = `${items.selectedAnswer}%`;
      document.querySelector('.purple3').removeAttribute('style')
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
      slider.disabled = true;
      slider.value = items.selectedAnswer;
      output.innerHTML = `${items.selectedAnswer}%`;
  } else {
      document.querySelector('.purple3').innerText = '';
      document.querySelector('.purple3').removeAttribute('style')
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: none')
      selectedAnswer = 0;
      slider.value = 0;
      slider.disabled = false;
      output.innerHTML = `0%`;
  }
});


$( "#prevStep" ).click(function() {
  index--
  
  if(index < 0) {
    index = questions.length -1
  }

  const items = questions[index]
  correctAnswer = items.correctAnswer
  activeQuestion = items.number
  selectedAnswer = items.selectedAnswer
  document.querySelector('.game__percent__title').innerText = items.question

  if(items.selectAnswer === true && items.iscorrect == true) {
      document.querySelector('.purple3').innerText = `${items.correctAnswer}%`;
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
      document.querySelector('.purple3').setAttribute('style', 'color: #80c78b')
      slider.value = items.selectedAnswer;
      slider.disabled = true;
      output.innerHTML = `${items.selectedAnswer}%`;

  } else if(items.selectAnswer === true && items.iscorrect == false) {
      document.querySelector('.purple3').innerText = `${items.selectedAnswer}%`;
      document.querySelector('.purple3').removeAttribute('style')
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: block')
      slider.value = items.selectedAnswer;
      slider.disabled = true;
      output.innerHTML = `${items.selectedAnswer}%`;

  } else {
      document.querySelector('.purple3').innerText = '';
      document.querySelector('.purple3').removeAttribute('style')
      document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: none')
      selectedAnswer = 0;
      slider.value = 0;
      slider.disabled = false;
      output.innerHTML = `0%`;
  }
});



$( "#successModalBtn" ).click(function() {
  document.querySelector('.mainBody').setAttribute('style', 'display: none')
  document.querySelector('.game__result__container').setAttribute('style', 'display: none')

  if(correctAnswerCount >= 6) {
      $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      document.querySelector('.successModal #correctAnswers').innerHTML = `${correctAnswerCount}/11 კითხვა`
  }
  
  if(correctAnswerCount <= 5) {
      $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      document.querySelector('.failModal #correctAnswers').innerHTML = `${correctAnswerCount}/11 კითხვა`
  }
});

$( "#gameReset" ).click(function() {
  document.querySelector('.failModal').setAttribute('style', 'display: none')
  document.querySelector('.successModal').setAttribute('style', 'display: none')
  document.querySelector('.game__result__container').classList.remove('active')

  document.querySelector('.mainBody').removeAttribute('style')
  document.querySelector('.game__result__container').removeAttribute('style')
  document.querySelector('.game__percent__answer .purple3').setAttribute('style', 'display: none')

  slider.value = 0;

  const randomArray = questions2.sort(function() {return 0.5 - Math.random()})

  questions = randomArray

  correctAnswer = randomArray[index].correctAnswer
  activeQuestion = randomArray[index].number
  document.querySelector('.game__percent__title').innerText = randomArray[index].question

  getCorrectAnsweersMarkup(0)
  document.querySelector('.game__progress__circle').classList.remove('progress-100')
  
  index = 0;
  attampt = 0;
  activeQuestion;
  correctAnswer;
  selectedAnswer = 0;
  correctAnswerCount = 0;
});

$( ".completGame" ).click(function() {
  document.querySelector('.mainBody').removeAttribute('style')
  document.querySelector('.failModal').setAttribute('style', 'display: none')
  document.querySelector('.successModal').setAttribute('style', 'display: none')
  document.querySelector('.game__result__container').classList.remove('active')
});