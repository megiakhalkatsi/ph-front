



let incorrectAnswer = 0;
let correctAnswer = 0;
let arr = []
let index = 0;
let attampt = 0;

$('.game__difference__img__container').mousedown(function (event) {
    index ++
    attampt ++


        if (!event) event = window.event;
        var x = event.pageX;
        var y = event.pageY;
        var canvasPos = $(this).offset();
        var styles = {
          "left": x - canvasPos.left,
          "top": y - canvasPos.top
        };
        var template

        if(event.target.classList.contains('divider') || event.target.classList.contains('divider2')) {
          template = $(`<div class="game__difference__circle issuccess"></div>`);
        } else {
          template = $(`<div class="game__difference__circle iserror"></div>`);
        }

        $(template).css(styles)
          .show();
        $(template).remove();
        $('.game__difference__img__container').append(template);
      
        if(event.target.classList.contains('divider') && !arr.includes('divider')) {
          arr.push('divider')
          correctAnswer++
        } else if(event.target.classList.contains('divider2') && !arr.includes('divider2')) {
            arr.push('divider2')
            correctAnswer++
        } else {
          incorrectAnswer++
        }
});





  $( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
  
    if(correctAnswer === 2 && incorrectAnswer === 0) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correctAnswer}/2 სწორად არჩეული განსხვავება`
    }
    
    if(correctAnswer < 2 || incorrectAnswer > 0) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correctAnswer}/${incorrectAnswer} სწორად არჩეული განსხვავება`
    }
  });
  
  $( "#gameReset, #gameReset2" ).click(function() {
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    document.querySelector('.game__result__container').removeAttribute('style')
    document.getElementById('compl').setAttribute('style', 'display: none')
    document.getElementById('checkAnswer').setAttribute('style', 'display: block')

    document.querySelector('.mainBody').removeAttribute('style')
    $('.game__difference__circle').remove()


    incorrectAnswer = 0;
    correctAnswer = 0;
    arr = []
    attampt = 0;
    index = 0;
  });
  
  $( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });
  
  $( "#checkAnswer" ).click(function() {
      document.getElementById('compl').setAttribute('style', 'display: block')
      document.getElementById('checkAnswer').setAttribute('style', 'display: none')

      if($('.game__difference__img__container2 .game__difference__circle').hasClass('issuccess')) {
        $('.game__difference__img__container2 .game__difference__circle.issuccess').addClass('success')
      } 
      
      if($('.game__difference__img__container2 .game__difference__circle').hasClass('iserror')) {
        $('.game__difference__img__container2 .game__difference__circle.iserror').addClass('error')
      }
  });
  
  $( "#compl" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
  });