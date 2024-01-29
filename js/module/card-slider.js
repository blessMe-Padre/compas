export const initCardSlider = () => {

    let swiper = new Swiper('.slider__thumb', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        direction: 'vertical',
    });

    let swiper2 = new Swiper('.slider__slider', {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        thumbs: {
            swiper: swiper
        }
    });
}