const slider = $(".carusel").bxSlider({
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