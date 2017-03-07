// var header = $('.header');
//
//
// function showSteackyHeader() {
//     header.addClass('fixed');
//
//
//
// }
// function hideSteackyHeader() {
//     header.removeClass('fixed');
//
//
// }
// $(document).scroll(function () {
//     var scrollSize = 100;
//     var y = $(this).scrollTop();
//     (y >= scrollSize) ? showSteackyHeader() : hideSteackyHeader();
// });


$(window).scroll(function() {
    if ($(this).scrollTop() > 700){
        $('header').addClass("fixed");
    }
    else{
        $('header').removeClass("fixed");
    }
});