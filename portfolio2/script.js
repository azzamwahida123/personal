$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    })

    // ========== SLIDE UP ==========
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // ========== TYPED ANIMATE ==========
    var typed = new Typed('.typing',{
        strings: ['Designer', 'Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true
    });

    // ========== TOGGLE MENU/NAVBAR ==========
    $('.toggle').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.toggle i').toggleClass('active');
    })
})