
var index = 0;
var correct = 0;
var attampt = 0;



var questions = [
    {
        id: 1,
        question: "ჩემი ნათლია ავტომობილების ხელოსანია. მას ბევრი კლიენტი ჰყავს, კარგ გასამრჯელოს იღებს და კმაყოფილია თავისი საქმიანობით. შემომთავაზა, რომ მასთან წავიდე სამუშაოდ. ხელოსნობასაც მასწავლის და ყოველთვიურად ხელფასსაც გადამიხდის. ძალიან მომწონს ავტომობილებთან მუშაობა და თან მინდა, რომ ჯიბის ფულიც გამოვიმუშაო. შემიძლია, რომ დავთანხმდე ამ შემოთავაზებას?",
        question2: "გიორგი, 13 წლის:",
        image: "../assets/img/games/1.png",
        answers: [
            {
                text: 'ავტომობილების შეკეთება შესაძლოა აღმოჩნდეს მძიმე და საშიში სამუშაო. 13 წლის ბავშვისთვის ავტომობილების შეკეთება არ განეკუთვნება სამუშაოდ ნებადართულ სფეროს.',
                isCorrect: true,
            },
            {
                text: 'შეგიძლია დათანხმდე, თუ მშობლებიც თანახმა იქნებიან, რომ მუშობა დაიწყო.',
                isCorrect: false,
            },
            {
                text: '16 წლამდე საერთოდ არ შეიძლება, რომ მუშაობა დაიწყო.',
                isCorrect: false,
            },
        ]
    },
    {
        id: 2,
        question: "მე და ჩემს 11 წლის დას, ნინოს, ერთ-ერთმა წიგნის გამომცემლობამ შემოგვთავაზა, რომ ჩვენს სურათებს გამოიყენებდა ერთ-ერთი სახელმძღვანელოს გასაფორმებლად და კარგ გასამრჯელოსაც დაგვპირდა. მშობლები ჯერ კიდევ ფიქრობენ, დათანხმდნენ თუ არა ამ შემოთავაზებას. იმ შემთხვევაში, თუ დათანხმდებიან, ორივეს შეგვიძლია, რომ ჩავერთოთ ამ საქმიანობაში?",
        question2: "ლიკა, 15 წლის:",
        image: "../assets/img/games/22.png",
        answers: [
            {
                text: 'ასეთ კარგ შემოთავაზებას მშობლების თანხმობის გარეშეც შეგიძლიათ დათანხმდეთ.',
                isCorrect: false,
            },
            {
                text: 'დიახ, მშობლების თანხმობის შემთხვევაში შეგიძლიათ ორივემ მიიღოთ მონაწილეობა სახელმძღვანელოს გაფორმებაში.',
                isCorrect: true,
            },
            {
                text: 'ლიკა, მხოლოდ შენ შეგიძლია ამ საქმიანობაში მონაწილეობის მიღება მშობლის თანხმობით.',
                isCorrect: false,
            },
        ]
    },
    {
        id: 3,
        question: "ჩემს ოჯახს ფინანსურად გაუჭირდა. მინდა, რომ  მუშაობა დავიწყო და ჩემი წვლილი შევიტანო ოჯახის რჩენაში. ვნახე გამოკრული განცხადება მშენებლობაზე მუშახელის დასაქმების თაობაზე, ერთი დღის მუშაობაში 70 ლარს გადაიხდიან. როგორ ფიქრობთ, ამიყვანენ ამ სამსახურში?",
        question2: "შოთა, 16 წლის:",
        image: "../assets/img/games/3.png",
        answers: [
            {
                text: 'აუცილებლად, თუ მშობლები თუ თანახმა იქნებიან.',
                isCorrect: false,
            },
            {
                text: 'შესაძლებელია, თუ მოახერხებ, რომ სკოლას და სწავლასაც შეუთავსო.',
                isCorrect: false,
            },
            {
                text: 'შენ ჯერ კიდევ არასრულწლოვანი ხარ და დაუშვებელია მშენებლობაზე მუშად დასაქმება, რადგან ასეთ სამუშაოზე საშიში პირობებია და შესაძლოა. რომ  შენთვის მავნე  შედეგი ჰქონდეს.',
                isCorrect: true,
            },
        ]
    },
    {
        id: 4,
        question: "უკვე 5 წელია, ტანვარჯიშზე დავდივარ. ჩემმა მწვრთნელმა შემომთავაზა, მასთან ერთად დილაობით მოვამზადო პატარების ჯგუფი. ჩემი საყვარელი საქმიანობაა და თან ანაზღაურებაც მექნება, თუმცა ერთი დეტალია - კვირაში სამი დღე სკოლის გაცდენა მომიწევს. ვერ გადამიწყვეტია, დავთანხმდე თუ არა.",
        question2: "ეკა, 14 წლის:",
        image: "../assets/img/games/4.png",
        answers: [
            {
                text: 'შენთვის სკოლაში სიარული საბაზო საფეხურის დამთავრებამდე სავალდებულოა და არ შეიძლება ისეთ სამუშაოზე დასაქმება, რომელიც ამ ვალდებულების შესრულებაში ხელს შეგიშლის. ',
                isCorrect: true,
            },
            {
                text: 'შეგიძლია დათანხმდე, თუ ეს საქმიანობა შენთვის საფრთხის შემცველი არ არის.',
                isCorrect: false,
            },
            {
                text: 'უმჯობესია, მშობლებს ჰკითხო აზრი.',
                isCorrect: false,
            },
        ]
    },
    {
        id: 5,
        question: "სამოქალაქო განათლების გაკვეთილზე ვისწავლე, რომ რადგან უკვე 16 წლის ვარ, შრომისუნარიანად ვითვლები. ეს ნიშნავს, რომ ახლა უკვე შემიძლია, ნებისმიერ სამუშაოზე დავიწყო მუშაობა?",
        question2: "გიგი, 16 წლის:",
        image: "../assets/img/games/5.png",
        answers: [
            {
                text: 'დიახ, შრომისუნარიანობა ნიშნავს, რომ უფლება გაქვს, თავისუფლად გამოიყენო შენი უნარები დასაქმების ნებისმიერ სფეროში.',
                isCorrect: false,
            },
            {
                text: 'მიუხედავად იმისა, რომ 16 წლის ასაკიდან შრომისუნარიანად ითვლები, ჯერ კიდევ არ ხარ სრულწლოვანი. ამიტომ ვერ დასაქმდები ისეთ სამუშაოზე, რომელიც მძიმე, მავნე ან საშიშპირობებიან სამუშაოს შესრულებას ითვალისწინებს.',
                isCorrect: true,
            },
            {
                text: 'მშობლის თანხმობით შეგიძლია, რომ ნებისმიერ სამსახურში დაიწყო მუშაობა.',
                isCorrect: false,
            },
        ]
    },
]



function getQuestionsMarkup(){

    const questionMarkup = questions.map((q, i) => (
      `<div class="col-12 col-md-8 col-xl-7 offset-xl-1 page__content-col mainCont ${i === index ? "active" : ""}"" style="${i === index ? "display: block" : "display: none"}">
        <div class="game__quiz__quest">
            <span class="text"><span class="purple">${q.question2}</span> ${q.question}</span>
        </div>
        <div class="game__instruction collapsed mt-4 mb-4" data-bs-toggle="collapse" data-bs-target="#hint" aria-expanded="false" aria-controls="hint">
            <img src="../assets/img/icons/info-circle.svg" alt="instruction" class="game__instruction__img">
            <span class="game__instruction__text">სამუშაოზე მიღების მინიმალური ასაკი და შრომითი ქმედუნარიანობის წარმოშობა</span>
            <svg class="icon">
            <use xlink:href="#arrow-dropdown"></use>
            </svg>
        </div>
        <div class="collapse mt-3 mb-4" id="hint">
            <p class="game__text md mb-0 light mb-3">
                შრომითი ქმედუნარიანობა წარმოიშობა 16 წლის ასაკიდან.
            </p>
            <p class="game__text md mb-0 light mb-3">
            16 წლამდე ასაკის არასრულწლოვნის შრომითი ქმედუნარიანობა წარმოიშობა მისი კანონიერი წარმომადგენლის ან მზრუნველობის/მეურვეობის ორგანოს თანხმობით, თუ შრომითი ურთიერთობა არ ეწინააღმდეგება არასრულწლოვნის ინტერესებს, ზიანს არ აყენებს მის ზნეობრივ, ფიზიკურ და გონებრივ განვითარებას და არ უზღუდავს მას სავალდებულო დაწყებითი და საბაზო განათლების მიღების უფლებასა და შესაძლებლობას.
            </p>
            <p class="game__text md mb-0 light mb-3">
            14 წლამდე ასაკის არასრულწლოვანთან შრომითი ხელშეკრულება შეიძლება დაიდოს მხოლოდ სპორტულ, ხელოვნებასთან დაკავშირებულ და კულტურის სფეროში საქმიანობაზე, ასევე სარეკლამო სამუშაოს შესასრულებლად.
            </p>
            <p class="game__text md mb-0 light mb-3">
            აკრძალულია არასრულწლოვანთან შრომითი ხელშეკრულების დადება მძიმე, მავნე და საშიშპირობებიანი სამუშაოების შესასრულებლად.
            </p>
        </div>
        <div class="game__quiz__answ__cont">
            <div class="game__quiz__answ blue">
                <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[0].isCorrect}"></h6>
                <span class="text">${q.answers[0].text}</span>
            </div>

            <div class="game__quiz__answ yellow">
            <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[1].isCorrect}"></h6>
                <span class="text">${q.answers[1].text}</span>
            </div>

            <div class="game__quiz__answ purple">
            <h6 class="game__checkbox" data-checked="false" data-isCorrect="${q.answers[2].isCorrect}"></h6>
                <span class="text">${q.answers[2].text}</span>
            </div>
        </div>
        </div>
        <div class="col-12 col-md-4 mainCont2" style="${i === index ? "display: block" : "display: none"}">
            <img src="${q.image}" alt="" class="game__quiz__img">
        </div>
        `
    ))
    return questionMarkup 
}

  
$( function() {
    var randomArray = questions.map(array => {
        let an = array.answers.sort(function() {return 0.5 - Math.random()})

        return {...array, answers: an}
    })

    questions = randomArray

    const items = getQuestionsMarkup(index)

    $('#GameWrapper').prepend(items)
});


function getCorrectAnsweersMarkup(index){
    if(index !== 0) {
        if(index > 1) {
            $('#ProgressLine').removeClass(`progress-${(index - 1) * 20}`)
        }
      $('#ProgressLine').addClass(`progress-${index * 20}`)
    }
    $('#ProgressText').html(`კითხვა <span class="purple">${index}</span> / ${questions.length} დან`)
  
}




  
$( function() {
    $('.game__quiz__answ').click(function(e) {
        if(e.target.querySelector('.game__checkbox').getAttribute('data-checked') === "false" || e.target.getAttribute('data-checked') === "false") {
            if(e.target.querySelector('.game__checkbox').getAttribute('data-iscorrect') === "true") {
                $('.mainCont.active .game__quiz__answ').addClass('hidden')
                $(this).addClass('checked')
                $(this).parent().find('h6').attr('data-checked', true)
                $(this).attr('style', "background-color: #80c78b;")
                correct++ 
                attampt++
                $(this).removeClass('hidden')
                
            } else if(e.target.querySelector('.game__checkbox').getAttribute('data-iscorrect') === "false") {
                $('.mainCont.active .game__quiz__answ').addClass('hidden')
                $(this).parent().find('h6').attr('data-checked', true)
                $(this).addClass('checked')
                $(this).attr('style', "background-color: #ff97bb;")

                $( ".mainCont.active .game__checkbox" ).each(function( index ) {
                    if($(this).attr('data-iscorrect') == "true") {
                        $(this).parent().addClass('success-border')
                        $(this).parent().removeClass('hidden')
                    }
                });

                $(this).removeClass('hidden')
                attampt++
            }

            getCorrectAnsweersMarkup(attampt)

            if(attampt === 5) {
                $('#completed').removeAttr('style')
                $('#nextStep').attr('style', 'display: none')
            }
        }
    })
});
      

$( "#completed" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
});

$( "#nextStep" ).click(function() {
    index++
  
    $('.mainCont').removeClass('active');
    $('.mainCont').attr('style', 'display: none');
    $('.mainCont2').attr('style', 'display: none');

    if(index === questions.length || index > 4 ) {
      index = 0
    } 

    $('.mainCont')[index].setAttribute('style', 'display: block');
    $('.mainCont2')[index].setAttribute('style', 'display: block');
    $('.mainCont')[index].classList.add('active')
});
  
  
$( "#prevStep" ).click(function() {
    index--

    $('.mainCont').removeClass('active');
    $('.mainCont').attr('style', 'display: none');
    $('.mainCont2').attr('style', 'display: none');
    
    if(index < 0) {
      index = questions.length -1
    }

    $('.mainCont')[index].setAttribute('style', 'display: block');
    $('.mainCont2')[index].setAttribute('style', 'display: block');
    $('.mainCont')[index].classList.add('active')
  
});
  

$( "#completBtn" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
});
  
  
  $( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
  
    if(correct >= 3) {
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
    

    $('#completed').attr('style', 'display: none')
    $('#nextStep').removeAttr('style')
    $('#finishButton').attr('style', 'display: block')
    $('#completBtn').attr('style', 'display: none')
    
    $('.game__quiz__answ').removeAttr('style')
    $('.game__quiz__answ').removeClass('checked')
    $('.game__quiz__answ').removeClass('success-border')
    $('.game__quiz__answ').removeClass('hidden')
    $('.game__checkbox').attr('data-checked', false)

    index = 0;
    correct = 0;
    attampt = 0;
    
    getCorrectAnsweersMarkup(attampt)
  });
  
  $( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });