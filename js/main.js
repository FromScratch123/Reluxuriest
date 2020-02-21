$(function() {


  //global-navの位置固定
  let globalNavOffset = $('#global-nav').offset();
  $(window).scroll(function () {

      if ($(this).scrollTop() > globalNavOffset.top) {
          $('#global-nav').addClass('global-nav-header--fixed');
      } else {
          $('#global-nav').removeClass('global-nav-header--fixed');
      }
  });

  //sns-buttonの位置固定
  $(window).scroll(function () {
      if ($(this).scrollTop() > globalNavOffset.top) {
          $('#sns-button').addClass('sns-button--fixed');
      } else {
          $('#sns-button').removeClass('sns-button--fixed');
      }
  });

  //スムーススクロール
  $('a[href^="#"]').click(function() {
    let speed = 500;
    let adjust = 80;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - adjust;
    
    if(target.hasClass("js-hidden")){
        $('body,html').animate({scrollTop:position - 50 //js-showupのtranslateY(50)分を調整
        }, speed, 'swing');
    } else {
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    }
 });


    //リロード時の各セクション表示処理
    $('section').each(function () {
        
        if($(window).scrollTop() >= $(this).offset().top) {
            $(this).removeClass('js-hidden');
        }
    });

    //各sectionの出現
    $(window).scroll(function () {
        $('.js-hidden').each(function () {
            let targetOffset = $(this).offset();
            let windowHeight = $(window).height();
            if($(window).scrollTop() >= targetOffset.top - windowHeight + windowHeight / 5) {
                $(this).addClass('js-showup').removeClass('js-hidden');
            }
        });
    });

    //TOPへ戻る
    let scrollUp = $('#scroll-up');
        scrollUp.hide();
    let newsSection = $('#news').offset();

     $(window).scroll(function () {
        if ($(this).scrollTop() > newsSection.top ) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }
    });
  
});