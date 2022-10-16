$('.question_item > div').on('click', function() {
    $(this).parent('.question_item').toggleClass('change-item-color');
    $(this).next('.question_text').slideToggle(200);
    $(this).children('.question_item_wrapper').children('.item-2').toggleClass('item-2-off');
})