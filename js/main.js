$(function() {

  //global-navの位置固定

  let globalNavOffset = $('#global-nav').offset();
  $(window).scroll(function () {
      if ($(window).scrollTop() > globalNavOffset.top) {
          $('#global-nav').addClass('fixed-header');
      } else {
          $('#global-nav').removeClass('fixed-header');
      }
  });

  //sns-buttonの位置固定
  $(window).scroll(function () {
      if ($(window).scrollTop() > globalNavOffset.top) {
          $('#sns-button').addClass('sns-button--fixed');
      } else {
          $('#sns-button').removeClass('sns-button--fixed');
      }
  });

  //スムーススクロール
  $('a[href^="#"]').click(function() {
    let speed = 500;
    let adjust = 0;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });
  
});