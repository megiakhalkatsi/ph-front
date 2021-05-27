
$( function() {
  $('.game__answer__container').addClass('zIndex')
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
          $('.game__table__td .game__text').attr('style', 'color: #202631')
          $('.game__table__td .game__answer__container').attr('style', 'background: #7fbcf3')

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


$( "#finishButton" ).click(function() {
let index = 0

$.each($('.DroppableItem .DraggableItem'), function( i, l ){
  if($(l).attr('data-correct') == "true") {
    index++
    $(l).addClass('success')
  } else {
    $(l).addClass('error')
  }

  if(index === 16) {
    $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
  } else {
    $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')
  }
});
});



$( "#resetButton" ).click(function() {
$('.DroppableItem').html('')
});