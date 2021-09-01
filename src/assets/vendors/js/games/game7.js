

let attamp = 0;
let correct = 0;
let incorrect = 0;




$( function() {
    $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone"})
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          console.log(event)
          console.log(ui)

          console.log(event.target)

            if(!event.target.querySelector('.slick-slide-drop img')) {
              attamp++
      
              var new_signature = $(ui.helper).clone();
              $(this).children('.slick-slide-drop').append(new_signature);
              $(new_signature).removeAttr('style')
      
              if(ui.draggable[0].getAttribute('data-answer') === event.target.getAttribute('data-answer')) {
                  correct++
                  event.target.querySelector('.slick-slide-drop').classList.add('success')
              } else {
                  incorrect++
                  event.target.querySelector('.slick-slide-drop').classList.add('error')
              }
          }

          if(attamp === 5) {
            document.querySelector('.game__result__container').classList.add('active') 
            document.querySelector('.game__result__container').setAttribute('style', 'z-index: 342234242')
          }
      }
    });
});




$( "#resetButton" ).click(function() {
    $('.DroppableItem .slick-slide-drop').removeClass('success')
    $('.DroppableItem .slick-slide-drop').removeClass('error')
    $('.DroppableItem .slick-slide-drop').html('')
    $('#completBtn').attr('style', 'display: none')
    $('#finishButton').attr('style', 'display: block')


    attamp = 0;
    correct = 0;
    incorrect = 0;
  });


$( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')

    if(correct === 5) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/5 კითხვა`
    } else {

        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/5 კითხვა`
    }
    
});


$( "#gameReset" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: block')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    $('.DroppableItem .slick-slide-drop').removeClass('success')
    $('.DroppableItem .slick-slide-drop').removeClass('error')
    $('.DroppableItem .slick-slide-drop').html('')
    $('#completBtn').attr('style', 'display: none')
    $('#finishButton').attr('style', 'display: block')


    attamp = 0;
    correct = 0;
    incorrect = 0;
  });



$( ".completGame" ).click(function() {
    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
  });