/**
 * Create By AnyGong anonymous
 */
;(function ($, document, window, undefined) {


  var qq = (function () {
    var $accordion = $('#J_How_Accordion');
    $accordion.on('click', '.j_accordion_head', function () {
      $(this).toggleClass('is-show');
      var $content = $(this).parent().find('.j_accordion_content');
      $content.slideToggle();
    })
  }())


})(jQuery, document, window);
