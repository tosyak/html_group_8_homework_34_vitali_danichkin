

$(window).scroll(function() {
    if ($(this).scrollTop() > 700){
        $('header').addClass("fixed");
    }
    else{
        $('header').removeClass("fixed");
    }
});