


$( ".clickableItem2" ).click(function() {
    if(atampt <= 5) {
        if($(this).attr('style') == "opacity: 0" && atampt < 5) {
            $(this).attr('style', 'opacity: 1')

            $( ".clickableItem" )[parseInt($(this).attr('data-clickable')) - 1].setAttribute('style', 'opacity: 1')
            atampt++
            
        } else if($(this).attr('style') == "opacity: 1") {
            $(this).attr('style', 'opacity: 0')
            $( ".clickableItem" )[parseInt($(this).attr('data-clickable')) - 1].setAttribute('style', 'opacity: 0')

            atampt--

        } else {
            $('#notificationModal').modal('show');
        }
    } else {
        $('#notificationModal').modal('show');
    }
});


let atampt = 0;

function afterClick(element) {
    if(atampt <= 5) {
        $( ".clickableItem2" ).each(function( index ) {
            if(element.attr('data-index') == $( ".clickableItem2" )[index].getAttribute('data-clickable')) {

                if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 0" && atampt < 5) {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 1')
                    $(element).attr('style', 'opacity: 1')
                    atampt++
                    
                } else if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 1") {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 0')
                    $(element).attr('style', 'opacity: 0')
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
   $('.clickableItem2').attr('style', 'opacity: 0')
})
