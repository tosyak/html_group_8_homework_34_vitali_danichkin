/**
 * Created by tosyak on 07.03.2017.
 */
// menu class toggle
$(".hamburger").click(function() {
    $(".menu").toggleClass('menudisplay')
});

//slider
$('.slider').slick({
    autoplay: true,
    arrows: false
});

//popup
$('#popup-open').click(function () {
    $('.popup').show()
});
$('.popup').click(function () {
    $('.popup').hide()
});

//scroll
smoothScroll.init();
