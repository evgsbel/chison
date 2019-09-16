let
    arrow_prev = "<svg width='17' height='18' viewBox='0 0 17 18'  xmlns='http://www.w3.org/2000/svg'> <path d='M8.82145 16.3928L1.42859 8.99997M1.42859 8.99997H15.3929M1.42859 8.99997L8.82145 1.60711'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    arrow_next = "<svg width='17' height='18' viewBox='0 0 17 18'  xmlns='http://www.w3.org/2000/svg'> <path d='M7.99996 1.60718L15.3928 9.00003M15.3928 9.00003L1.42854 9.00003M15.3928 9.00003L7.99996 16.3929' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>";

// слайдер баннеры
$('.banner-slider').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    navText: [arrow_prev, arrow_next],
    navClass: ['slider-arrow slider-arrow_prev', 'slider-arrow slider-arrow_next'],
    navContainerClass: 'slider-arrow__wrapper',
    dotsClass: 'dots',
    dotClass: 'dots__item'
});