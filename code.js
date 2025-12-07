new Swiper('.image-slider', {
    //arrows
    navigation: {
        nextEl: '.gallery__right-arrow',
        prevEl: '.gallery__left-arrow',
    },
})

new Swiper('.reviews', {
    //arrows
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews__arrow-right',
        prevEl: '.reviews__arrow-left',
    },

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            navigation: {
                nextEl: '.reviews__mobile-next',
                prevEl: null,
            },       // листаем по 1
        },
        // когда ширина ≥ 857px (планшеты и больше)
        857: {
            loop: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
            // листаем сразу по 2 слайда
        }
    }
});

