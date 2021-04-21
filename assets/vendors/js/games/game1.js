
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);







var questions = [
  {
    number: 1,
    correctAnswer: 1,
    question: 'საქართველო არის სამართლებრივი სახელმწიფო, რაც ნიშნავს, რომ ხელისუფლება ხორციელდება....',
    answers: [
      {
        isCorrect: true,
        text: "საქართველოს კონსტიტუციითა და კანონით დადგენილ ფარგლებში"
      },
      {
        isCorrect: false,
        text: "უძველესი ჩვეულებებისა და ადათ-წესების შესაბამისად"
      },
      {
        isCorrect: false,
        text: "გამორჩეული ადამიანების ნება-სურვილის მიხედვით"
      },
      {
        isCorrect: false,
        text: "უცხო ქვეყნების გადაწყვეტილებებით"
      },
    ]
  },
  {
    number: 2,
    correctAnswer: 1,
    question: 'სახელმწიფო ცნობს და იცავს......',
    answers: [
      {
        isCorrect: true,
        text: "ადამიანის საყოველთაოდ აღიარებულ უფლებებსა და თავისუფლებებს"
      },
      {
        isCorrect: false,
        text: "მხოლოდ სამშობლოს წინაშე დიდი დამსახურების მქონე ადამიანების უფლებებსა და ნება-სურვილს"
      },
      {
        isCorrect: false,
        text: "მხოლოდ ქართველების უფლებებსა და თავისუფლებებს"
      },
      {
        isCorrect: false,
        text: "იმ ადამიანების უფლებებს, რომლებსაც  წაკითხული აქვთ  კონსტიტუცია"
      },
    ]
  },
  {
    number: 3,
    correctAnswer: 1,
    question: 'საქართველოში ყველა ადამიანი სამართლის წინაშე…',
    answers: [
      {
        isCorrect: true,
        text: "თანასწორია"
      },
      {
        isCorrect: false,
        text: "თანასწორია, მაგრამ კანონი უშვებს გამონაკლის შემთხვევებსაც"
      },
      {
        isCorrect: false,
        text: "თანასწორია, თუმცა შეიძლება პრივილეგიის ყიდვა ან დამსახურებით მოპოვება"
      },
      {
        isCorrect: false,
        text: "უთანასწოროა"
      },
    ]
  },
  {
    number: 4,
    correctAnswer: 1,
    question: 'აკრძალულია ადამიანის...',
    answers: [
      {
        isCorrect: true,
        text: "დისკრიმინაცია მისი რასის, კანის ფერის, სქესის, წარმოშობის ან სხვა რაიმე მისთვის დამახასიათებელი ნიშან-თვისების მიხედვით"
      },
      {
        isCorrect: false,
        text: "თანასწორად მოპყრობა, თუკი იგი ამას არ იმსახურებს"
      },
      {
        isCorrect: false,
        text: "მონაწილეობა კანონების შექმნის პროცესში"
      },
      {
        isCorrect: false,
        text: "მონაწილეობა ქვეყნის მმართველების არჩევაში"
      },
    ]
  },
]

var index = 0;


function getCorrectAnsweersMarkup(correctAnswer){
  if(correctAnswer !== 0) {
    $('#ProgressLine').removeClass(`line__${correctAnswer - 1}`)
    $('#ProgressLine').addClass(`line__${correctAnswer}`)
  }
  $('#ProgressText').html(`კითხვა <span class="purple">${correctAnswer}</span> / ${questions.length} დან`)

}

function getQuestionsMarkup(index){

  const questionMarkup = questions.map((q, i) => (
    `<div class="col-12 col-lg-8 page__content-col m-auto ${q.number} questionContainer ${index + 1 === q.number ? "active" : ""}" style="display: ${index + 1 === q.number ? "block" : "none"}">
      <h2 class="game__text lg mb-34 GameQuestion">${q.number}. ${q.question}</h2>
      
      <div class="game__answer__drop__container DroppableItem" data-append="false">
        <p class="game__answer__drop__container__placeholder">ჩააგდეთ სწორი პასუხი</p>
      </div>
      
      <div class="game__line"></div>

      <h2 class="game__title mb-34">სავარაუდო პასუხები</h2>

      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[0].isCorrect}'>
            <p class="game__text md">${q.answers[0].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[1].isCorrect}'>
            <p class="game__text md">${q.answers[1].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[2].isCorrect}'>
            <p class="game__text md">${q.answers[2].text}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="game__answer__container DraggableItem" data-isCorrect='${q.answers[3].isCorrect}'>
            <p class="game__text md">${q.answers[3].text}</p>
          </div>
        </div>
      </div>
      <div class="game__line"></div>
    </div>`
  ))

  return questionMarkup

}


$( function() {
  const randomArray = questions.map(array => {
    var answers = array.answers.sort(function() {return 0.5 - Math.random()})

    return {...array, answers}
  })

  questions = randomArray

  const items = getQuestionsMarkup(index)

  $('#GameWrapper').append(items)
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

  if($('.questionContainer.active .DroppableItem').attr('data-append') == 'true') {
      $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
  } else {
      $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')
  }
});


$( "#prevStep" ).click(function() {
  index--
  
  if(index < 0) {
    index = questions.length -1
  }
  
  $('.questionContainer').removeClass('active');
  $('.questionContainer').attr('style', 'display: none');
  $('.questionContainer')[index].removeAttribute('style');
  $('.questionContainer')[index].classList.add('active')
  
  if($('.questionContainer.active .DroppableItem').attr('data-append') == 'true') {
      $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')
  } else {
      $('#DogImage').attr('src', '../assets/img/illustrations/fiqrobs-image.gif')
  }

});


$( function() {
    let incorrect = 0;
    let attempt = 0;
    let correctAnswer = 0;

    getCorrectAnsweersMarkup(correctAnswer)

    $( ".DraggableItem" ).draggable({ revert: "invalid" });
    $( ".DroppableItem" ).droppable({
      drop: function( event, ui ) {
          if($( this ).attr('data-append') == 'false' && ui.draggable.attr('data-isCorrect') == 'true') {
            incorrect = 0
            correctAnswer++
            $( this ).append(ui.draggable)
            getCorrectAnsweersMarkup(correctAnswer)
            $(this).find('.DraggableItem').removeAttr('style')
            $( this ).attr('data-append', true)
            $('#DogImage').attr('src', '../assets/img/illustrations/correct-image.gif')

        } else {
            attempt--
            if(incorrect < 2) {
                incorrect++
                $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

            } else if(incorrect === 2 || incorrect > 2) {
              $('#notificationModal').modal('show');
              $('#DogImage').attr('src', '../assets/img/illustrations/incorrect-image.gif')

              // $('#myModal').modal('toggle');
              // $('#myModal').modal('hide');
            }

            ui.draggable.attr('style', "position: relative")
        }
        attempt++
      }
    });
});