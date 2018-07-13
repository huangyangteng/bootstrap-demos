/**
 * Create By Anonymous
 */
;(function ($, document, window, undefined) {

  var $fixedUtils = $('.j_fixed_utils');
  window.onresize = function (e) {
    // 防止触发两次
    var res;
    if (res) clearTimeout(res);
    res = setTimeout(function () {
      position(e.currentTarget.innerWidth)
    }, 20);
  };

  function position(width) {
    var containerWidth = $fixedUtils.outerWidth();
    var minWidth = containerWidth + 1120;
    var remaining = width - minWidth;
    $fixedUtils.css({right: remaining > containerWidth ? '-' + containerWidth + 'px' : 0})
  }

  $fixedUtils.on('click', '.top', function () {
    var $scroll = $("html,body");
    var top = $scroll.offset().top;
    $scroll.animate({"scrollTop": top}, 500)
  });
  $fixedUtils.on('click', 'a', function (e) {
    var href = $(this).attr('href');
    if (href.indexOf('#') !== -1) {
      e.preventDefault();
      var $scroll = $("html,body");
      var top = $(href).offset().top - $('#J_TopNav').height();
      $scroll.animate({"scrollTop": top}, 300)
    }
  });

  position($(window).width())
  // alert('1234')


})(jQuery, document, window);
