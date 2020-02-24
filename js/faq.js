$(function () {
  
  //TOPへ戻る(FAQ)
  let scrollUpFaq = $('#scroll-up__faq');
  scrollUpFaq.hide();
let cancelGroup = $('#about-cancellation').offset();

$(window).scroll(function () {
  if ($(this).scrollTop() > cancelGroup.top ) {
      scrollUpFaq.fadeIn();
  } else {
      scrollUpFaq.fadeOut();
  }
});

});