$( function() {
  $('.game__dragAndDrop__container .game__answer__containe').attr('style', 'z-index: 1111')
  $('.game__answer__container').addClass('Z-index')
});


$( function() {
  $( ".DraggableItem" ).draggable({ revert: "invalid", helper : "clone", 
  start: function( event, ui ) {
    $('.definition__content').attr('style', 'display: none;')
  } })
  $( ".DroppableItem" ).droppable({
    drop: function( event, ui ) {
        if(event.target.classList.contains('game__table__td')) {
          var new_signature = $(ui.helper).clone();
          $(this).append(new_signature);
          $(new_signature).removeAttr('style')
          $('.game__table__td .game__text').attr('style', 'color: #fff')
          $('.game__table__td .game__answer__container').attr('style', 'background: #7fbcf3;')

          let rowIndex = event.target.parentElement.getAttribute('data-row')
          let DraggableItemRows = JSON.parse(ui.draggable[0].getAttribute('data-row'))
          let DraggableItemCollumn = JSON.parse(ui.draggable[0].getAttribute('data-collumn'))
          let parentIndex = event.target.getAttribute('data-index')

          if(DraggableItemRows.includes(rowIndex) && DraggableItemCollumn == parentIndex) {
              event.target.lastElementChild.setAttribute('data-correct', true)
          } else {
              event.target.lastElementChild.setAttribute('data-correct', false)
          }
        }
    }
  });
});


$( ".game__answer__container" ).mouseenter(function() {
  $(this).children('.definition__content').attr('style', 'display: block')
});

$( ".game__answer__container" ).mouseleave(function() {
  $(this).children('.definition__content').removeAttr('style')
});


var correct = 0;
var incorrect = 0;

$( "#finishButton" ).click(function() {

  let hasChild = 0;

  $.each($('.game__table__td'), function( i, l ){
      if(l.firstElementChild) {
          hasChild++
      }
  });

  if(hasChild === 12) {
      let index = 0
    
      $('.DroppableItem .DraggableItem').removeAttr('style')
    
      $.each($('.DroppableItem .DraggableItem'), function( i, l ){
              if($(l).attr('data-correct') == "true") {
                  index++
                  $(l).addClass('success')
                  correct++
              } else {
                  $(l).addClass('error')
                  incorrect++
              }
    
    
              if(index === 16) {
                  $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
              } else {
                  $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
              }
          });
    
          $('#finishButton').attr('style', 'display: none')
          $('#completBtn').attr('style', 'display: block')
  } else {
      $('#notificationModal').modal('show');
  }  
  });

$( "#resetButton" ).click(function() {
  $('.DroppableItem').html('')
  $('#completBtn').attr('style', 'display: none')
  $('#finishButton').attr('style', 'display: block')
});


$( "#completBtn" ).click(function() {
  document.querySelector('.game__result__container').classList.add('active') 
  document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
});


$( "#successModalBtn" ).click(function() {
  document.querySelector('.mainBody').setAttribute('style', 'display: none')
  document.querySelector('.game__result__container').setAttribute('style', 'display: none')

  if(correct > 8) {
      $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/16 კითხვა`
  }
  
  if(correct <= 8) {
      $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
      document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/16 კითხვა`
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
  
  $('.game__table__td .game__answer__container').remove()

  correct = 0;
  incorrect = 0;
});

$( ".completGame" ).click(function() {
  document.querySelector('.mainBody').removeAttribute('style')
  document.querySelector('.failModal').setAttribute('style', 'display: none')
  document.querySelector('.successModal').setAttribute('style', 'display: none')
  document.querySelector('.game__result__container').classList.remove('active')
});