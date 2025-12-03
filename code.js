new Swiper('.image-slider', {
    //arrows
    navigation: {
        nextEl: '.gallery__right-arrow',
        prevEl: '.gallery__left-arrow',
    },
})

new Swiper('.reviews', {
    //arrows
    navigation: {
        nextEl: '.reviews__arrow-right',
        prevEl: '.reviews__arrow-left',
    },
    slidesPerView: 2,
    spaceBetween: 30,

    breakpoints: {
        //when screen less than 750px
        750: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
})

