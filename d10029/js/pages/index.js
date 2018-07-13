/**
 * Create By Anonymous
 */
;(function ($, document, window, undefined) {
  $('.j_mask_hover li').each(function () {
    $(this).hoverdir({
      hoverElem: '.hover-mask'
    });
  });


  var BrandSwiper = (function () {
    var mySwiper = new Swiper($('#J_Brand'), {
      loop: true,
      speed: 600,
      paginationClickable: true,
      pagination: '.swiper-customer-pagination',
      nextButton: '.customer-button-next',
      prevButton: '.customer-button-prev'
    })
  }());
})(jQuery, document, window);