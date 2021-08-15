



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
                text: 'ნებადართული უნდა იყოს234',
                isCorrect: false
            },
            {
                id: 3,
                text: 'ნებადართული უნდა იყოს234',
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
        ]
    },
    {
        id: 3,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?333333",
        isMultiAnswer: true,
        desc: "234234234",
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
                text: 'მარტო ლატარია და ტოტალიზატორი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: false
            },
        ]
    },
    {
        id: 4,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?4444444444444",
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
                text: 'მარტო ლატარია და ტოტალიზატორი შეიძლება ონლაინ, კაზინო - არა',
                isCorrect: false
            },
        ]
    },
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
      `<div class="game__quiz__quest"><span class="text">${questions[i].question}</span>
      <div style="display: none;" class="game__quiz__quest-div" data-bs-toggle="modal" data-bs-target="#gameQuizQuest"> ? </div></div>`
    ))
    return questionMarkup
}

function getAnswersMarkup(){
    const questionMarkup = questions.map((q, i) => (
        q.answers.map((a) => (
            `<div class="game__quiz__answ__cont course__quiz__answ__cont"><div class="game__quiz__answ" data-id=${a.id} data-correct=${a.isCorrect}>
                  <div class="game__checkbox"></div>
                  <span class="text">${a.text}</span>
              </div></div>`
          ))
    ))

    return questionMarkup
}



$( function() {
    var answers = questions.sort(function() {return 0.5 - Math.random()})

    var randomArray = answers.map(array => {
        let an = array.answers.sort(function() {return 0.5 - Math.random()})

        return {...array, answers: an}
    })

    questions = randomArray

    
    const questionsMark = getQuestionsMarkup()
    const answersMak = getAnswersMarkup()

    
    
    let x = questionsMark.map((w, i) => {
        let div = document.createElement('div')
        div.classList.add('course__quiz__container')
        div.setAttribute('data-desc', randomArray[i].desc)

        $(div).append(questionsMark[i])
        $(div).append(answersMak[i])

        return div
    })

    x.map(w => (
        $('#mainDiv').append(w)
    ))    
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
        if(!e.target.parentElement.parentElement.getAttribute('isselected')) {

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

            if(e.target.parentElement.parentElement.querySelectorAll('.game__quiz__answ.checked').length > 0) {
                e.target.parentElement.parentElement.setAttribute('isChecked', true)
            } else {
                e.target.parentElement.parentElement.setAttribute('isChecked', false)

            }
        }

    })
});



$('#checkQuestion').click(function(e) {
    let c = 0

    $('.course__quiz__container').each(function( index ) {
        if($(this).attr('ischecked')) {
            c++
        }
    });

    if(c === questions.length) {
        
                attampt++
                $('#answersParent').removeAttr('style')
                $('#prevStep').removeAttr('style');
                $('#nextStep').removeAttr('style');
                $('#checkQuestion').attr('style', "display: none");
        
        
                var count = 0;
        
                $('#mainDiv .game__quiz__quest-div').each(function( index ) {
                    if($(this).parent().parent().attr('data-desc')) {
                        $(this).removeAttr('style')
                    }
                });
            
                $('.game__quiz__answ').each(function( index ) {
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
            
                $('.course__quiz__container').attr('isselected', 'true')
        
                if(count === correctAnswers.length) {
                    corAnswers++
            
                } else {
                    failAnswers++
                }
        
                if(attampt === 3) {
                    document.querySelector('.game__result__container').classList.add('active') 
                    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
                    document.querySelector('.game__result__container').setAttribute('data-isOpen', true);
                }

    } else {
        $('#notificationModal').modal('show');
    }

})


$(document).on( 'click', '.game__quiz__quest-div', function(){
    $('.game__quiz__quest-modal-text').text($(this).parent().parent().attr('data-desc'))
});


      

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

    if(document.querySelector('.cont.active').attr('isSelected') === "true") {
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