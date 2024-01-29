export const initSlider = () => {
    // слайдер "Новинки"
    const newSlider = document.querySelector('.new-swiper');
    if (newSlider) {
        const slider1 = new Swiper('.new-swiper', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                340: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                767: {
                    slidesPerView: 3,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
}