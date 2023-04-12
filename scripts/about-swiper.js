const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        426: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 4
        }
    }
});