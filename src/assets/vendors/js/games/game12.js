

var questions = [
    {
        id: 1,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?111111",
        isMultiAnswer: true,
        desc: "ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს.",
        answers: [
            {
                id: 1,
                text: 'ნებადართული უნდა იყოს234',
                isCorrect: true
            },
            {
                id: 2,
                text: 'ნებისმიერ შემთხვევაში უნდა იყოს აკრძალული',
                isCorrect: true
            },
            {
                id: 3,
                text: 'მარტო სპეციალური ლიცენზიის მქონეს მივცემდი ფუნქციონირების საშუალებას',
                isCorrect: false
            },
            {
                id: 4,
                text: 'მარტო ლატარია და სპორტული ფსონი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: false
            },
        ]
    },
    {
        id: 2,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?222222",
        isMultiAnswer: true,
        desc: "ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია",
        answers: [
            {
                id: 1,
                text: 'ნებადართული უნდა იყოს',
                isCorrect: true
            },
            {
                id: 2,
                text: 'ნებისმიერ შემთხვევაში უნდა იყოს აკრძალული',
                isCorrect: true
            },
            {
                id: 3,
                text: 'მარტო სპეციალური ლიცენზიის მქონეს მივცემდი ფუნქციონირების საშუალებას',
                isCorrect: false
            },
            {
                id: 4,
                text: 'მარტო ლატარია და სპორტული ფსონი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: true
            },
        ]
    },
    {
        id: 3,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?333333",
        isMultiAnswer: true,
        desc: "",
        answers: [
            {
                id: 1,
                text: 'ნებადართული უნდა იყოს23423423',
                isCorrect: true
            },
            {
                id: 2,
                text: 'ნებისმიერ შემთხვევაში უნდა იყოს აკრძალული',
                isCorrect: false
            },
            {
                id: 3,
                text: 'მარტო სპეციალური ლიცენზიის მქონეს მივცემდი ფუნქციონირების საშუალებას',
                isCorrect: false
            },
            {
                id: 4,
                text: 'მარტო ლატარია და სპორტული ფსონი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: false
            },
        ]
    },
    {
        id: 4,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?333333",
        isMultiAnswer: true,
        desc: "",
        answers: [
            {
                id: 1,
                text: 'ნებადართული უნდა იყოს23423423',
                isCorrect: true
            },
            {
                id: 2,
                text: 'ნებისმიერ შემთხვევაში უნდა იყოს აკრძალული',
                isCorrect: false
            },
            {
                id: 3,
                text: 'მარტო სპეციალური ლიცენზიის მქონეს მივცემდი ფუნქციონირების საშუალებას',
                isCorrect: false
            },
            {
                id: 4,
                text: 'მარტო ლატარია და სპორტული ფსონი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: false
            },
        ]
    },
]

color = [
    "blue",
    "yellow",
    "purple",
    "pink",
]

var corAnswers = 0
var failAnswers = 0

var index = 0;
var attampt = 0;

var correct = 0;
var incorrect = 0;

var correctAnswers = []
var selectedAnswer = []

function getQuestionsMarkup(){
    const questionMarkup = questions.map((q, i) => (
      `<span class="text">${questions[i].question}</span>
      <div style="display: none;" class="game__quiz__quest-div" data-bs-toggle="modal" data-bs-target="#gameQuizQuest"> ? </div>`
    ))
    return questionMarkup
}

function getAnswersMarkup(){
    const questionMarkup = questions.map((q, i) => (
        q.answers.map((a, ind) => (
            `<div class="game__quiz__answ ${color[ind]}" data-id=${a.id} data-correct=${a.isCorrect}>
                  <div class="game__checkbox"></div>
                  <span class="text">${a.text}</span>
              </div>`
          ))
    ))

    return questionMarkup
}
  
function getCorrectAnsweersMarkup(index){
    if(index !== 0) {
        if(index > 1) {
            $('#ProgressLine').removeClass(`progress-${(index - 1) * 33}`)
        }
      $('#ProgressLine').addClass(`progress-${index * 33}`)
    }

    $('#ProgressText').html(`კითხვა <span class="purple">${index}</span> / ${questions.length} დან`)
}


$( function() {
    const questionsMark = getQuestionsMarkup()
    const answersMak = getAnswersMarkup()

    $('#questionParent').append(questionsMark[index])
    $('.game__quiz__quest-modal-text').text(questions[index].desc)

    
    answersMak.map((w, i) => {
        $('#answersParent').append('<div class="cont"></div>')

        w.map(t => {
            let x = new DOMParser().parseFromString(t, 'text/html');
            $('.cont')[i].append(x.body.firstChild)
        })
    })

    $('.cont').attr('style', 'display: none')

    let c = document.querySelectorAll('.cont')
    
    c[index].setAttribute('style', 'display: block')
    c[index].classList.add('active')

});

  
$( function() {
    questions.map((q,i) => {
        if(i === index) {
            q.answers.filter(a => {
                if(a.isCorrect) {
                    correctAnswers.push(a.id)
                    return a.id
                }
            })

        }
    })

    $('.game__quiz__answ').click(function(e) {

        if(document.querySelector('.cont.active').getAttribute('isSelected') != "true") {
            if(e.target.classList.contains('checked')) {
                $(this).removeClass('checked')
                e.target.removeAttribute('data-answer')
    
            } else {
                $(this).addClass('checked')
    
                if(e.target.getAttribute('data-correct') === "true") {
                    correct++
                    e.target.setAttribute('data-answer', true)
                } else {
                    incorrect++
                    e.target.setAttribute('data-answer', false)
                }
            }
        }
    })
});



$('#checkQuestion').click(function(e) {
        attampt++
        getCorrectAnsweersMarkup(attampt)
        $('#answersParent').removeAttr('style')
        $('.game__quiz__quest-div').removeAttr('style');
        $('#prevStep').removeAttr('style');
        $('#nextStep').removeAttr('style');
        $('#checkQuestion').attr('style', "display: none");
        $('.game__quiz__quest-modal-text').text(questions[index].desc)

        var count = 0;

    
        $('.cont.active .game__quiz__answ').each(function( index ) {
            if($(this).attr('data-correct') === "true" && $(this).attr('data-correct') == $(this).attr('data-answer')) {
                $(this).addClass('success')
                count++
    
            } else if($(this).attr('data-correct') === "false" && $(this).attr('data-answer') === "false") {
                $(this).addClass('error')
                $(this).addClass('checked')
                
            } else if($(this).attr('data-correct') === "true" && !$(this).attr('data-answer')) {
                $(this).addClass('success-border')
            } else {
                $(this).addClass('hidden')
            }
        });
    
        $('.cont.active').attr('isSelected', 'true')


        if(count === correctAnswers.length) {
            corAnswers++
    
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif') 
        } else {
            failAnswers++
            $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
        }

        if(attampt === 3) {
            document.querySelector('.game__result__container').classList.add('active') 
            document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
            document.querySelector('.game__result__container').setAttribute('data-isOpen', true);
        }
})

      

$( "#completed" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
            document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
            document.querySelector('.game__result__container').setAttribute('data-isOpen', true);
});

$( "#nextStep" ).click(function() {
    index++

    correctAnswers = []

    const questionsMark = getQuestionsMarkup()


    if(index === questions.length || index > 3 ) {
        index = 0
    } 

    $('#questionParent').html('')
    $('#questionParent').append(questionsMark[index])
    $('.game__quiz__quest-div').removeAttr('style');
    $('.game__quiz__quest-modal-text').text(questions[index].desc)
    
    $('.cont').attr('style', 'display: none')
    $('.cont').removeClass('active')

    questions.map((q,i) => {
        if(i === index) {
            q.answers.filter(a => {
                if(a.isCorrect) {
                    correctAnswers.push(a.id)
                    return a.id
                }
            })

        }
    })

    let c = document.querySelectorAll('.cont')
    
    c[index].setAttribute('style', 'display: block')
    c[index].classList.add('active')

    if(document.querySelector('.cont.active').getAttribute('isSelected') === "true") {
        $('#prevStep').removeAttr('style');
        $('#nextStep').removeAttr('style');
        $('#checkQuestion').attr('style', "display: none");
    } else {
        $('#prevStep').attr('style', 'display: none');
        $('#nextStep').attr('style', 'display: none');
        $('#checkQuestion').attr('style', "display: block");
        $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')

    }
});
  
  
$( "#prevStep" ).click(function() {
    index--
    if(index < 0) {
        index = questions.length -1
      }
      
    correctAnswers = []

    const questionsMark = getQuestionsMarkup()
    $('#questionParent').html('')
    $('#questionParent').append(questionsMark[index])
    $('.game__quiz__quest-div').removeAttr('style');
    $('.game__quiz__quest-modal-text').text(questions[index].desc)
    
    questions.map((q,i) => {
        if(i === index) {
            q.answers.filter(a => {
                if(a.isCorrect) {
                    correctAnswers.push(a.id)
                    return a.id
                }
            })

        }
    })

    $('.cont').attr('style', 'display: none')
    $('.cont').removeClass('active')

    let c = document.querySelectorAll('.cont')
    
    c[index].setAttribute('style', 'display: block')
    c[index].classList.add('active')

    if(document.querySelector('.cont.active').getAttribute('isSelected') === "true") {
        $('#prevStep').removeAttr('style');
        $('#nextStep').removeAttr('style');
        $('#checkQuestion').attr('style', "display: none");
    } else {
        $('#prevStep').attr('style', 'display: none');
        $('#nextStep').attr('style', 'display: none');
        $('#checkQuestion').attr('style', "display: block");
        $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')

    }
  
});
  
  
$( "#successModalBtn" ).click(function() { 
    document.querySelector('.mainBody').setAttribute('style', 'display: none')

    if(corAnswers === 3) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;width: 100%; height: 100%;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${corAnswers}/3 კითხვა`
    } else {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;width: 100%; height: 100%;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${corAnswers}/3 კითხვა`
    }
});





$( "#gameReset" ).click(function() {
    const questionsMark = getQuestionsMarkup()
    // const answersMak = getAnswersMarkup()
    $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')

    $('#questionParent').html('')
    // $('#answersParent').html('')
    $('.cont').removeAttr('isselected')
    $('.cont').removeClass('active')

    document.querySelector('.mainBody').setAttribute('style', 'display: block')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    
    $('#prevStep').attr('style', 'display: none');
    $('#nextStep').attr('style', 'display: none');
    $('#checkQuestion').attr('style', "display: block");
    $('.game__quiz__answ').removeClass('hidden');

    

    corAnswers = 0
    failAnswers = 0
    
    index = 0;
    attampt = 0;
    
    correct = 0;
    incorrect = 0;
    
    correctAnswers = []
    selectedAnswer = []

    
    getCorrectAnsweersMarkup(attampt)

    $('#questionParent').append(questionsMark[index])
    $('.game__quiz__quest-modal-text').text(questions[index].desc)

    $('.game__quiz__answ').removeClass('success-border')
    $('.game__quiz__answ').removeClass('checked')
    $('.game__quiz__answ').removeClass('success')
    $('.game__quiz__answ').removeClass('error')
    $('.game__quiz__answ').removeAttr('data-answer')

    $('#ProgressLine').removeClass('progress-99')


    $('.cont').attr('style', 'display: none')

    let c = document.querySelectorAll('.cont')
    
    c[index].setAttribute('style', 'display: block')
    c[index].classList.add('active')
        

  });



$( ".completGame" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: block')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });