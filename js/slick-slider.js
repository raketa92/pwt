(function($) {
    $(document).ready(function(){

        $('.slide-section').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2000,
            fade: true,
            cssEase: 'linear',
            // slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
        });
    });

})( jQuery );
