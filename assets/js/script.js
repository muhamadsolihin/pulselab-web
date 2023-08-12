
$(document).ready(function(){
    $('.carousel').carousel();

    $('#tab-about').show();

    $(".event-option").click(function(event){
        var clickedElement = event.target;
        var dataTarget = $(clickedElement).attr('data-target');
        $('.event-tab').hide();
        $('#'.concat(dataTarget)).show();
    });


    $(window).on('resize', updateImageSource);
    $(window).on('resize', updateViewportVariables);

    // Initial update when the page loads
    updateImageSource();
})

function updateViewportVariables() {
    $(':root').css('--viewport-width', window.innerWidth + 'px');
    $(':root').css('--viewport-height', window.innerHeight + 'px');
}

function updateImageSource() {
    var smallSrc = 'assets/img/banner-mobile/';
    var largeSrc = 'assets/img/banner-desktop/';
    
    for (let index = 1; index <= 5; index++) {
        var image = $('#banner'.concat(index));
        var imageFileName = 'banner-'+index+'.png';
        
        if ($(window).width() <= 767) {
            image.attr('src', smallSrc.concat(imageFileName));
        } else {
            image.attr('src', largeSrc.concat(imageFileName));
        }
    }
}

// function updateImageSource() {
//     var smallSrc = 'assets/img/banner-mobile/';
//     var largeSrc = 'assets/img/banner-desktop/';

//     var imageExtensions = ['.jpeg', '.png', '.jpg'];
//     var windowWidth = $(window).width();

//     for (let index = 1; index <= 5; index++) {
//         var image = $('#banner'.concat(index));

//         var imageFileName = 'banner-' + index;
//         var imageExtension = '';

//         // Determine the appropriate file extension based on window width
//         if (windowWidth <= 767) {
//             imageExtension = imageExtensions[1]; // PNG for small screens
//         } else {
//             imageExtension = (index % 2 === 0) ? imageExtensions[0] : imageExtensions[2]; // JPEG and JPG alternating for large screens
//         }

//         var imageSrc = (windowWidth <= 767) ? smallSrc : largeSrc;
//         imageSrc += imageFileName + imageExtension;

//         image.attr('src', imageSrc);
//     }
// }


