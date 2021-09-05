
$(function () {

  $('.cart-item__deleted').on('click', function(e){
    e.preventDefault();
    $($(this).attr('href')).addClass('cart-item--delete');
  });
 
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

  $('.checkout__item-title').on('click', function(){
    if($('.checkout__items').hasClass('one')){
      $('.checkout__item-title').not($(this)).removeClass('checkout__item-title--active');
      $('.checkout__item-form').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('checkout__item-title--active').next().slideToggle(300);
  });

  $('.order__top').on('click', function(){
    $(this).toggleClass('order__top--active').next().slideToggle(300);
  });

  

  $(".filter__price-input").ionRangeSlider({
    onStart: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
  },
  });

  $('.product-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.profile-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.profile-tabs__link').removeClass('profile-tabs__link--active');
    $(this).addClass('profile-tabs__link--active');

    $('.profile-tabs__item').removeClass('profile-tabs__item--active');
    $($(this).attr('href')).addClass('profile-tabs__item--active');
  });

  $('.product__variant-link').on('click', function(e){
    e.preventDefault();
    $('.product__variant-link').removeClass('product__variant-link--active');
    $(this).addClass('product__variant-link--active');

    $('.product__sum').removeClass('product__sum--active');
    $($(this).attr('href')).addClass('product__sum--active');
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

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
  loop:false,
  speed: 600,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    770: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
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

 var smallSwiper = new Swiper('.product-slider__small',{
  slidesPerView: 5,
  speed: 1000,
  slideToClickedSlide:true,
  watchSlidesProgress: true,
  freeMode: true,
 });

 var bigSwiper = new Swiper('.big-swiper',{
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  simulateTouch: false,
  thumbs: {/* Связал два слайдера */
    swiper: smallSwiper 
  }
 });
