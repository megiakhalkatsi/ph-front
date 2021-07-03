




let attamp = 0;
let correctAnswer = 0;
let correct = 0;
let incorrect = 0;
let index = 0;



$( function() {
    $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone"})
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
        attamp++
        ui.draggable[0].setAttribute('style', 'display: none');
        var new_signature = $(ui.helper).clone();
        $(this).append(new_signature);
        $(new_signature).removeAttr('style')
      }
    });
});




$( "#resetButton" ).click(function() {
    $('.game__answer__container').attr('style', 'display: block')
    $('.DroppableItem').html('')
    $('#completBtn').attr('style', 'display: none')
    $('#finishButton').attr('style', 'display: block')


    attamp = 0;
    correctAnswer = 0;
    correct = 0;
    incorrect = 0;
    index = 0;
  });


$( "#finishButton" ).click(function() {
    if(attamp < 8) {
        $('#notificationModal').modal('show');
    } else {
        $( ".tbody1 .DraggableItem" ).each(function( l ) {
            if($(this).attr('data-correct') == "true" && $(this).parent().attr('data-answer') === 'true') {
                $(this).addClass('success')
                index++
                correctAnswer++
                correct++
            } else {
                $(this).addClass('error')
                incorrect++
            }
        });
    
    
        $( ".tbody2 .DraggableItem" ).each(function( l ) {
            if($(this).attr('data-correct') === "false" && $(this).parent().attr('data-answer') === 'false') {
                $(this).addClass('success')
                correctAnswer++
                index++
            } else {
                $(this).addClass('error')
                incorrect++
            }
        });
    
    
        $('#finishButton').attr('style', 'display: none')
        $('#completBtn').attr('style', 'display: block')


    }    

    if(index === 8 && correctAnswer >= 4) {
        $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
    } else {
        $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
    }
})
  


$( "#completBtn" ).click(function() {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
});
  


$( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
  
    if(correctAnswer >= 4) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correctAnswer}/8 კითხვა`
    }
    
    if(correctAnswer < 4) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correctAnswer}/8 კითხვა`
    }
});


$( "#gameReset" ).click(function() {
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    $('.DroppableItem').html('')
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.game__result__container').removeAttribute('style')
    $('.game__answer__container').attr('style', 'display: block')
    $('#finishButton').attr('style', 'display: block')
    $('#completBtn').attr('style', 'display: none')
    
    $('.game__table__td .game__answer__container').remove()
  
    
    attamp = 0;
    correctAnswer = 0;
    correct = 0;
    incorrect = 0;
    index = 0;
  });



$( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });