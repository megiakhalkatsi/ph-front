
$( ".clickableItem2" ).click(function() {
    if(atampt <= 5) {
        if($(this).attr('style') == "opacity: 0" && atampt < 5) {
            $(this).attr('style', 'opacity: 1')

            $( ".clickableItem" )[parseInt($(this).attr('data-clickable')) - 1].setAttribute('style', 'opacity: 1')
            arr.push($(this).attr('data-title'))
            console.log(arr)
            atampt++
            
        } else if($(this).attr('style') == "opacity: 1") {
            $(this).attr('style', 'opacity: 0')
            $( ".clickableItem" )[parseInt($(this).attr('data-clickable')) - 1].setAttribute('style', 'opacity: 0')
            arr.push($(this).attr('data-title'))
            let t = arr.filter(w => w !== $(this).attr('data-title'))
            arr = t
            console.log(arr)
            atampt--

        } else {
            $('#notificationModal').modal('show');
        }
    } else {
        $('#notificationModal').modal('show');
    }
});


let atampt = 0;
var arr = []

function generateBullets() {
    const questions = arr.map(q => (
        `<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">${q}</span></li>`
    ))

    return questions
}

function afterClick(element) {
    if(atampt <= 5) {
        $( ".clickableItem2" ).each(function( index ) {
            if(element.attr('data-index') == $( ".clickableItem2" )[index].getAttribute('data-clickable')) {

                if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 0" && atampt < 5) {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 1')
                    $(element).attr('style', 'opacity: 1')
                    arr.push(element.attr('data-title'))
                    console.log(arr)
                    atampt++
                    
                } else if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 1") {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 0')
                    $(element).attr('style', 'opacity: 0')

                    arr.push(element.attr('data-title'))
                    let t = arr.filter(w => w !== element.attr('data-title'))
                    arr = t
                    console.log(arr)
                    atampt--
    
                } else {
                    $('#notificationModal').modal('show');
                }
            }
        });
    } else {
        $('#notificationModal').modal('show');
    }
}

$( ".clickableItem" ).click(function() {
    afterClick($(this))
});

$( "#resetBtn" ).click(function() {
   atampt = 0
   arr = []
   $('.clickableItem2').attr('style', 'opacity: 0')
   $('.clickableItem').attr('style', 'opacity: 0')

   $('#finishBtn').removeAttr('style')
   $('#append_div ul').html('')
   $('#append_div').attr('style', 'display: none')
   $('.mainH2').removeAttr('style')
   $('.svg__image').attr('style', 'display: block')
})

$( "#finishBtn" ).click(function() {
    document.querySelector('#append_div ul').innerHTML = ""
  $('.svg__image').attr('style', 'display: none')
  $('.mainH2').attr('style', 'display: none')
  $('#append_div ul').append(generateBullets())
  $('#append_div').attr('style', 'display: block; padding-left: 10%;')
  $('#finishBtn').attr('style', 'display: none;')

})
