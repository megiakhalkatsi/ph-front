

let atampt = 0;

function afterClick(element) {
    if(atampt <= 5) {
        $( ".clickableItem" ).each(function( index ) {
            if(element == $( ".clickableItem2" )[index].getAttribute('data-clickable')) {

                if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 0" && atampt < 5) {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 1')
                    atampt++
                    
                } else if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 1") {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 0')
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
    afterClick($(this).attr('data-index'))
});

$( "#resetBtn" ).click(function() {
   atampt = 0
   $('.clickableItem2').attr('style', 'opacity: 0')
})