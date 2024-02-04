// topSlider
const topSlider = new Swiper('.slider', {
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.slider__nav',
      clickable: true
    }
});

// gallery
const gallery = new Swiper('.gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
});

// fancybox
Fancybox.bind("[data-fancybox]");