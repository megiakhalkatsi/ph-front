



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