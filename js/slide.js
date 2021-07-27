$(document).ready(function(){ 
    bxSlide();
});

function bxSlide(){
    $('.bxslide').bxSlider({
        speed: 750,
        easing: 'ease-in-out',
        pagerCustom: '.customPager',
        nextSelector: '.btn_Next',
        prevSelector: '.btn_Prev',
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
}