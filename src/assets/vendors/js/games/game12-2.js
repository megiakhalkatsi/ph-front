



var questions = [
    {
        id: 1,
        question: "დაშვებული უნდა იყოს თუ არა მარიხუანის სამედიცინო მიზნებით გამოყენება?",
        answers: [
            {
                text: 'კი',
                country: "საქართველო",

            },
            {
                text: 'არა',
                country: 'არაბთა გაერთიანებული საამიროები, იაპონია',

            },
            {
                text: 'მხოლოდ იმ შემთხვევაში, თუ სხვა წამლით ადამიანის მკურნალობა არ გამოდის და აუცილებელია მარიხუანის შემცველობის სუბსტანციის გამოყენება',
                country: 'დიდი ბრიტანეთი',

            },

        ]
    },
    {
        id: 2,
        question: "დაშვებული უნდა იყოს თუ არა მარიხუანის მოხმარება ბარში?",
        answers: [
            {
                text: 'მხოლოდ სპეციალიზებულ ადგილებში, რომლებიც ლიცენზიას მოიპოვებენ და მკაცრად გაკონტროლდება ლიცენზიის პირობები',
                country: "არაბთა გაერთიანებული საამიროები",

            },
            {
                text: 'არა, არსად არ შეიძლება მარიხუანის მოხმარება',
                country: "აშშ",

            },
            {
                text: 'არა, საჯარო სივრცეში არ შეიძლება მოხმარება, სახლში მცირე ოდენობის მოხმარებისათვის არავის დასჯიან',
                country: "იაპონია",

            },
        ]
    },
    {
        id: 3,
        question: "რა სასჯელს მოიფიქრებდით მარიხუანის გასაღებისათვის?",
        answers: [
            {
                text: 'სიკვდილით დასჯა',
                country: "გერმანია",

            },
            {
                text: 'თუ კრიმინალურ ჯგუფებთან არ არის შეკრული და განსაკუთრებით დიდი ოდენობა არ არის, მაშინ არ დავსჯიდი საერთოდ',
                country: "დიდი ბრიტანეთი",

            },
            {
                text: '5 წელი ციხე, მაგრამ თუ არასრულწლოვანიც ჩართულია საქმეში, დაუმძიმდება სასჯელი 15 წლამდე',
                country: "აშშ, არაბთა გაერთიანებული საამიროები, იაპონია",
            },
            {
                text: '3 წელი ციხე და გამოსასწორებელი სამუშაო საშუალო ოდენობის მარიხუანის შენახვაზე, დიდ ოდენობაზე სასჯელი 10 წლამდე იზრდება',
                country: "იაპონია",
            },
            {
                text: 'ფულად ჯარიმას დავაკისრებდი, მაგრამ არა პატიმრობას',
                country: "იაპონია",

            },
        ]
    },
    {
        id: 4,
        question: "უნდა ისჯებოდეს თუ არა მოხმარება?",
        answers: [
            {
                text: 'მცირე ოდენობაზე მხოლოდ ჯარიმით უნდა დაისაჯოს',
                country: "გერმანია",
            },
            {
                text: 'უნდა ისჯებოდეს მკაცრად',
                country: "დიდი ბრიტანეთი",

            },
            {
                text: 'არ უნდა ისჯებოდეს, თუ არასრულწლოვანიც არ არის ჩართული',
                country: "აშშ, არაბთა გაერთიანებული საამიროები, იაპონია",
            },
            {
                text: 'ოფიციალურად აკრძალული უნდა იყოს მოხმარება, მაგრამ პრაქტიკაში მცირე ოდენობის გამო არავის უნდა სჯიდეს, თვალი უნდა დავხუჭოთ',
                country: "იაპონია",
            },
        ]
    },
]

var index = 0;
var attampt = 0;


function getQuestionsMarkup3(data, i){
    const questionMarkup = 
      `<div class="questionContainer ${index === i ? "active" : ""}">
        <div class="game__quiz__quest">
                <span class="text">${data.question}</span>
            </div>
            <div class="game__quiz__answ__cont">
                <div class="game__quiz__answ blue" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[0].country}"></div>
                    <span class="text">${data.answers[0].text}</span>
                </div>

                <div class="game__quiz__answ yellow success" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[1].country}"></div>
                    <span class="text">${data.answers[1].text}</span>
                </div>

                <div class="game__quiz__answ pink error" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[2].country}"></div>
                    <span class="text">${data.answers[2].text}</span>
                </div>
            </div>
        </div>`

    return questionMarkup
  
}


function getQuestionsMarkup4(data, i){
    const questionMarkup = `<div class="questionContainer ${index === i ? "active" : ""}">
    <div class="game__quiz__quest">
            <span class="text">${data.question}</span>
        </div>
        <div class="game__quiz__answ__cont">
            <div class="game__quiz__answ blue" style="position: relative">
                <div class="game__checkbox" data-checked="false" data-country="${data.answers[0].country}"></div>
                <span class="text">${data.answers[0].text}</span>
            </div>

            <div class="game__quiz__answ yellow success" style="position: relative">
                <div class="game__checkbox" data-checked="false" data-country="${data.answers[1].country}"></div>
                <span class="text">${data.answers[1].text}</span>
            </div>

            <div class="game__quiz__answ pink error" style="position: relative">
                <div class="game__checkbox" data-checked="false" data-country="${data.answers[2].country}"></div>
                <span class="text">${data.answers[2].text}</span>
            </div>

            <div class="game__quiz__answ purple success-border" style="position: relative">
                <div class="game__checkbox" data-checked="false" data-country="${data.answers[3].country}"></div>
                <span class="text">${data.answers[3].text}</span>
            </div>
           
        </div>
    </div>`
    return questionMarkup
  
}

function getQuestionsMarkup5(data, i){
    const questionMarkup = 
      `<div class="questionContainer ${index === i ? "active" : ""}">
        <div class="game__quiz__quest">
                <span class="text">${data.question}</span>
            </div>
            <div class="game__quiz__answ__cont">
                <div class="game__quiz__answ blue" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[0].country}"></div>
                    <span class="text">${data.answers[0].text}</span>
                </div>

                <div class="game__quiz__answ yellow success" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[1].country}"></div>
                    <span class="text">${data.answers[1].text}</span>
                </div>

                <div class="game__quiz__answ pink error" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[2].country}"></div>
                    <span class="text">${data.answers[2].text}</span>
                </div>

                <div class="game__quiz__answ purple success-border" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[3].country}"></div>
                    <span class="text">${data.answers[3].text}</span>
                </div>
                <div class="game__quiz__answ yellow success" style="position: relative">
                    <div class="game__checkbox" data-checked="false" data-country="${data.answers[4].country}"></div>
                    <span class="text">${data.answers[4].text}</span>
                </div>
            </div>
        </div>`
    return questionMarkup
  
}
  
  
$( function() {
    var answers = questions.sort(function() {return 0.5 - Math.random()})

    var randomArray = answers.map(array => {
        let an = array.answers.sort(function() {return 0.5 - Math.random()})

        return {...array, answers: an}
    })

    questions = randomArray

    let x = questions.map((w, i) => {
        if(w.answers.length === 3) {
            return getQuestionsMarkup3(w, i)

        } else if(w.answers.length === 4) {
            return getQuestionsMarkup4(w, i)
        } else {
            return getQuestionsMarkup5(w, i)
        }
    })

    $('#GameWrapper').append(...x)
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
            $(this).parent().addClass('blue')
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
                console.log(y)
                console.log(h)
                console.log(k)

                $( ".collapseModal__clp" ).each(function( index ) {
                    if($(this).attr('data-answer') === y || $(this).attr('data-answer') === h || $(this).attr('data-answer') === k) {
                        $(this).attr('style', 'display: block')
                    }    
                });

            } else {
                $('#collapseModal').modal('show');
                $('.collapseModal__clp').attr('style', 'display: none')

                let y = $(this).attr('data-country').split(',')[0]

                console.log(y)

                $( ".collapseModal__clp" ).each(function( index ) {
                    if($(this).attr('data-answer') === y) {
                        $(this).attr('style', 'display: block')
                    }    
                });
            }   
        }


        if(attampt === 15) {
            document.querySelector('.game__result__container').classList.add('active') 
            document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
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
