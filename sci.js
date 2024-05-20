$('body').on('DOMMouseScroll', function(e){
    if(e.originalEvent.detail < 0) {
        console.log('up 2');
    }
    else {
        console.log('down 2');
    }
});