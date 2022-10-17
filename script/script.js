$('.question_item > div').on('click', function() {
    $(this).parent('.question_item').toggleClass('change-item-color');
    $(this).next('.question_text').slideToggle(200);
    $(this).children('.question_item_wrapper').children('.item-2').toggleClass('item-2-off');
})

$('#home-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#home').offset().top}, 500)
})

$('#advertise-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#pricing').offset().top}, 500)
})

$('#supports-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#supports').offset().top}, 500)
})

$('#contact-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#contact').offset().top}, 500)
})