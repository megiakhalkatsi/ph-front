
var questions = [
    {
        id: 1,
        question: "რას ფიქრობთ ონლაინ აზარტულ თამაშებზე?",
        answers: [
            {
                text: 'ნებადართული უნდა იყოს',
                country: "აშშ",

            },
            {
                text: 'ნებისმიერ შემთხვევაში უნდა იყოს აკრძალული',
                country: 'არაბთა გაერთიანებული საამიროები, იაპონია',

            },
            {
                text: 'მარტო სპეციალური ლიცენზიის მქონეს მივცემდი ფუნქციონირების საშუალებას',
                country: 'დიდი ბრიტანეთი',

            },
            {
                text: 'მარტო ლატარია და ტოტალიზატორი შეიძლება ონლაინ, კაზინო - არა',
                country: 'გერმანია',

            },
        ]
    },
    {
        id: 2,
        question: "უნდა იყოს თუ არა ნებადართული კაზინოების არსებობა?",
        answers: [
            {
                text: 'არც ერთ შემთხვევაში არ უნდა იყოს ნებადართული',
                country: "არაბთა გაერთიანებული საამიროები",

            },
            {
                text: 'თითოეულმა რეგიონმა გადაწყვიტოს, მის ტერიტორიაზე იქნება თუ არა კაზინო',
                country: "აშშ",

            },
            {
                text: 'მხოლოდ სპეციალურ ადგილებზე დავუშვებდი კაზინოს არსებობას ',
                country: "იაპონია",

            },
            {
                text: 'მხოლოდ ლიცენზიის მქონე კაზინოს ექნებოდა მუშაობის უფლება ',
                country: "დიდი ბრიტანეთი, გერმანია",

            },
        ]
    },
    {
        id: 3,
        question: "როგორ შევაჩერო მოთამაშე, რომელიც ძალიან ბევრს ხარჯავს აზარტულ თამაშებში?",
        answers: [
            {
                text: 'როგორ შევაჩერო მოთამაშე, რომელიც ძალიან ბევრს ხარჯავს აზარტულ თამაშებში?',
                country: "გერმანია",

            },
            {
                text: 'აზარტული თამაშების ოპერატორს დავავალდებულებ, ზედმეტად მხარჯველ მოთამაშეს შესთავაზოს თამაშისგან შესვენება',
                country: "დიდი ბრიტანეთი",

            },
            {
                text: 'ონლაინთამაშებს ავკრძალავ',
                country: "აშშ, არაბთა გაერთიანებული საამიროები, იაპონია",
            },
            {
                text: 'მხოლოდ რამდენიმე ადგილას იქნება თამაში შესაძლებელი და იქ მისასვლელად ადამიანი უნდა შეწუხდეს, სახლიდან შორს წავიდეს',
                country: "იაპონია",

            },
        ]
    },
]

var index = 0;
var attampt = 0;




function getQuestionsMarkup(index){

    const questionMarkup = questions.map((q, i) => (
      `<div class="questionContainer ${index === i ? "active" : ""}">
        <div class="game__quiz__quest">
                <span class="text">${questions[i].question}</span>
            </div>
            <div class="game__quiz__answ__cont">
                <div class="game__quiz__answ blue" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${q.answers[0].country}"></div>
                    <span class="text">${q.answers[0].text}</span>
                </div>

                <div class="game__quiz__answ yellow success" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${q.answers[1].country}"></div>
                    <span class="text">${q.answers[1].text}</span>
                </div>

                <div class="game__quiz__answ pink error" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${q.answers[2].country}"></div>
                    <span class="text">${q.answers[2].text}</span>
                </div>

                <div class="game__quiz__answ purple success-border" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${q.answers[3].country}"></div>
                    <span class="text">${q.answers[3].text}</span>
                </div>
            </div>
        </div>`
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

    console.log(questions)

    const items = getQuestionsMarkup(index)

    $('#GameWrapper').append(items)
});
  

  
$( function() {
    $('.game__checkbox').click(function(e) {
        if(e.target.getAttribute('data-checked') ==="true") {
            $(this).parent().removeClass('checked')
            $(this).attr('data-checked', false)
            attampt--

        } else {
            $(this).parent().addClass('checked')
            $(this).attr('data-checked', true)
            attampt++


            if($(this).attr('data-country').split(',').length == 2) {
                $('#collapseModal').modal('show');
                $('.collapseModal__clp').attr('style', 'display: none')

                let y = $(this).attr('data-country').split(',')[0].trim()
                let h = $(this).attr('data-country').split(',')[1].trim()

                $( ".collapseModal__clp" ).each(function( index ) {
                    if($(this).attr('data-answer') === y || $(this).attr('data-answer') === h) {
                        $(this).attr('style', 'display: block')
                    }    
                });

            } else if($(this).attr('data-country').split(',').length == 3) {
                $('#collapseModal').modal('show');
                $('.collapseModal__clp').attr('style', 'display: none')

                let y = $(this).attr('data-country').split(',')[0].trim()
                let h = $(this).attr('data-country').split(',')[1].trim()
                let k = $(this).attr('data-country').split(',')[2].trim()


                $( ".collapseModal__clp" ).each(function( index ) {
                    if($(this).attr('data-answer') === y || $(this).attr('data-answer') === h || $(this).attr('data-answer') === k) {
                        $(this).attr('style', 'display: block')
                    }    
                });

            } else {
                $('#collapseModal').modal('show');
                $('.collapseModal__clp').attr('style', 'display: none')
                
                let y = $(this).attr('data-country').split(',')[0]
                
                $( ".collapseModal__clp" ).each(function( index ) {
                    if($(this).attr('data-answer') === y) {
                        $(this).attr('style', 'display: block')
                    }    
                });
            }   
            
            
            if(attampt === 12) {
                document.querySelector('.game__result__container').classList.add('active') 
                document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
            }

        }
    })
});
      
    
$( "#successModalBtn" ).click(function() {
    document.querySelector('.game__result__container').classList.remove('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
  
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
});
  
  
$( "#prevStep" ).click(function() {
    index--
    
    if(index < 0) {
      index = questions.length -1
    }

    $('.questionContainer').removeClass('active')
    $('.questionContainer').attr('style', 'display: none');
    $('.questionContainer')[index].removeAttribute('style');
    $('.questionContainer')[index].classList.add('active')
  
});
  