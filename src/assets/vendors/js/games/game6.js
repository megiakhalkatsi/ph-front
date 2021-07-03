

var questions = [
    {
        title: "განაჩენი გამოუტანოს და დამნაშავედ ცნოს ბრალდებული;",
        index: 1,
        correct: false,
    },
    {
        title: "გადაწყვიტოს მოსწავლე დამნაშავეა თუ არა სკოლის შინაგანაწესის დარღვევაში;",
        index: 2,
        correct: false,
    },
    {
        title: "ცვლილებები შეიტანოს საგზაო მოძრაობის წესების შესახებ კანონში;",
        index: 3,
        correct: false,
    },
    {
        title: "გადაწყვიტოს ქონებრივი დავა მეზობლებს შორის;",
        index: 4,
        correct: false,
    },
    {
        title: "მიანიჭოს მოქალაქეობა მოქალაქეობის არმქონე პირს;",
        index: 5,
        correct: false,
    },
    {
        title: "მონაწილეობა მიიღოს მიტინგში მომიტინგეების პოზიციის მხარდასაჭერად;",
        index: 6,
        correct: false,
    },
    {
        title: "მოხალისედ ჩაერთოს სხვადასხვა გასართობ ღონისძიებაში;",
        index: 7,
        correct: false,
    },
    {
        title: "გამოავლინოს და აღკვეთოს დანაშაული",
        index: 8,
        correct: true
    },
    {
        title: "მიიღოს გადაუდებელი ზომები, თუ ადამიანის სიცოცხლესა და ჯანმრთელობას საფრთხე შეექმნა, აგრეთვე ავარიის, კატასტროფის, ხანძრის, სტიქიური უბედურებისა და სხვა საგანგებო შემთხვევების დროს უმეთვალყურეოდ დარჩენილი ქონების დასაცავად",
        index: 9,
        correct: true
    },
    {
        title: "მოაწესრიგოს საგზაო მოძრაობა, ზედამხედველობა გაუწიოს საგზაო მოძრაობის წესების დაცვას;",
        index: 10,
        correct: true
    },
    {
        title: "უზრუნველყოს მშვიდობიანი მიტინგების, დემონსტრაციებისა და მოქალაქეთა მასობრივი ღონისძიებების მონაწილეთა უსაფრთხოება.",
        index: 11,
        correct: true
    },
]


let incorrectAttampt = 0;
let correctAttampt = 0;
let error = false

function getQuestionsMarkup(){
    const questionMarkup = questions.map((q, i) => (
      `<label class="checkbox-container">
            <input class="checkboxItem" type="checkbox" data-index=${q.index} data-correct=${q.correct}>
            <span class="checkmark"></span>
            <span class="text">${q.title}</span>
        </label>`
    ))
  
    return questionMarkup
  }

  
function getRandomElements() {
     var answers = questions.sort(function() {return 0.5 - Math.random()})
  
    questions = answers
  
    const items = getQuestionsMarkup()
  
    $('#GameWrapper').append(items)
}

$( function() {
   getRandomElements()
});



$( function() {
    const checkboxes = document.querySelectorAll(".checkboxItem");
    checkboxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            if(!error) {
                if(e.target.checked === true){
                    if(e.target.getAttribute('data-correct') == 'true') {
                        e.target.setAttribute('checked', true)
                        e.target.checked = true;
                        e.target.parentElement.classList.add('correct') 
                        correctAttampt++
                        document.querySelector('.purple').innerText = `${correctAttampt}/4`
                        $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
                        clearTimeout(timeout)
                        
                    } else if(incorrectAttampt < 2) {
                        incorrectAttampt++
                        e.target.parentElement.classList.add('incorrect')
                        $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
                           const timeout = setTimeout(() => {
                            $('.checkbox-container').removeAttr('incorrect')
                            for(var i = 0; i < document.querySelectorAll('.checkbox-container.incorrect').length; i++) {
                                 document.querySelectorAll('.checkbox-container.incorrect')[i].querySelector('input').checked = false;   
                            }

                            clearTimeout(timeout)
                            incorrectAttampt = 0
                        }, 3000)
                    } else {
                        e.target.checked = false;
                        $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
                        $('#notificationModal').modal('show');
                    }

                } else if(e.target.checked === false && incorrectAttampt <= 2) {
                    e.target.removeAttribute('checked')
                    e.target.checked = false;

                    if(e.target.getAttribute('data-correct') == 'false') {
                        incorrectAttampt--
                    } else if(e.target.getAttribute('data-correct') == 'true') {
                        correctAttampt--
                    }
                } 
            } else {
                e.target.checked = true
            }
        })
    });
});



$( "#resetButton" ).click(function() {
    error = false
    $('.checkbox-container').removeClass('incorrect')
    $('.checkbox-container').removeClass('correct')
    $('.checkboxItem').attr('checked', false)
    $(".checkboxItem").prop("checked", false);
    incorrectAttampt = 0;
    correctAttampt = 0;
    $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
    $('.successModal').attr('style', 'display: none; position: fixed; top: 0;left: 0;right: 0; z-index: 11111;')

});



$( "#resetButton2" ).click(function() {
    error = false
    $('.checkbox-container').removeClass('incorrect')
    $('.checkbox-container').removeClass('correct')
    $('.checkboxItem').attr('checked', false)
    $(".checkboxItem").prop("checked", false);
    incorrectAttampt = 0;
    correctAttampt = 0;
    $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
    $('.successModal').attr('style', 'display: none; position: fixed; top: 0;left: 0;right: 0; z-index: 11111;')
});


$( "#completBtn" ).click(function() {
    if(correctAttampt === 3) {
        $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
        $('.successModal').attr('style', 'display: block; height: 100vh; position: fixed; top: 0;left: 0;right: 0; z-index: 11111;')
    } else {
        error = true
        $('.checkboxItem').attr('checked', true)
    $(".checkboxItem").prop("checked", true);
        $('.checkbox-container').addClass('incorrect')
        $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
    }
});
