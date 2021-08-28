
$(function () {
 
  $(".star").rateYo({
    starWidth: "14px",
    normalFill: "#ccf",
    ratedFill: "#DF949D",
    halfStar: true,
    spacing: "3px",
    readOnly: true,

    //"starSvg": '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.700012L4.9 4.90001L0.699997 5.42501L3.591 8.65901L2.8 13.3L7 11.2L11.2 13.3L10.416 8.65901L13.3 5.42501L9.1 4.90001L7 0.700012ZM7 2.26801L8.638 5.55101L11.893 5.95701L9.667 8.44901L10.276 12.054L7 10.416L3.724 12.054L4.333 8.44901L2.107 5.95701L5.362 5.55101L7 2.26801Z" fill="#DF949D"/><path xmlns="http://www.w3.org/2000/svg" d="M6.99999 0.700012L9.09999 4.90001L13.3 5.42501L10.416 8.65901L11.2 13.3L6.99999 11.2L2.79999 13.3L3.59099 8.65901L0.69999 5.42501L4.89999 4.90001L6.99999 0.700012Z" /></svg>'
    "starSvg": '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.700012L4.9 4.90001L0.699997 5.42501L3.591 8.65901L2.8 13.3L7 11.2L11.2 13.3L10.416 8.65901L13.3 5.42501L9.1 4.90001L7 0.700012ZM7 2.26801L8.638 5.55101L11.893 5.95701L9.667 8.44901L10.276 12.054L7 10.416L3.724 12.054L4.333 8.44901L2.107 5.95701L5.362 5.55101L7 2.26801Z" fill="#DF949D"/><path xmlns="http://www.w3.org/2000/svg" d="M6.99999 0.700012L9.09999 4.90001L13.3 5.42501L10.416 8.65901L11.2 13.3L6.99999 11.2L2.79999 13.3L3.59099 8.65901L0.69999 5.42501L4.89999 4.90001L6.99999 0.700012Z"/></svg>'
  });
 
});

 new Swiper('.swiper',{
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 2000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
 });

 new Swiper('.bests-swiper',{
  loop:true,
  speed: 600,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });

 new Swiper('.reviews-swiper',{
  loop:true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
 });
