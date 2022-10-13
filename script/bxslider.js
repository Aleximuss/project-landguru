$('.carusel').bxSlider({
    mode: 'horizontal',
    controls: false,
    slideMargin: 100,
    touchEnabled: true
})

const slider = $(".comments-items-wrapper").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
});

$(".arrow-prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".arrow-next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});