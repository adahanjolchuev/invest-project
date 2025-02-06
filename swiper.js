const swiper = new Swiper(".card_wrapper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  effect: "slide",
  navigation: {
    nextEl: ".partner-button-next",
    prevEl: ".partner-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

const review = new Swiper(".review_wrapper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 5,
  speed: 900,
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
});
