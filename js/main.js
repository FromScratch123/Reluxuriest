$(function() {

  //hambarger-menuの表示切替
  let hambarger = $('#hambarger');
  hambarger.click(function (e){
     $('.drawer').toggleClass('js-drawer--show');
     $('.hambarger__bar1').toggleClass('js-drawer--show');
     $('.hambarger__bar2').toggleClass('js-drawer--show');
     $('.hambarger__bar3').toggleClass('js-drawer--show');
    e.stopPropagation(); //clickイベント中断
     $('.hambarger__a').click(function () {
        $('.drawer').removeClass('js-drawer--show');
        $('.hambarger__bar1').removeClass('js-drawer--show');
        $('.hambarger__bar2').removeClass('js-drawer--show');
        $('.hambarger__bar3').removeClass('js-drawer--show');
     });

     $(window).click(function () {
        $('.drawer').removeClass('js-drawer--show');
        $('.hambarger__bar1').removeClass('js-drawer--show');
        $('.hambarger__bar2').removeClass('js-drawer--show');
        $('.hambarger__bar3').removeClass('js-drawer--show');
     });
     
  });

  

  //hambarger-menuの移動
  let globalNavAreaOffset = $('.global-nav-area').offset();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= globalNavAreaOffset.top) {
        $('.hambarger').css({ 'position':'fixed'});
        $('.drawer').css({ 'position':'fixed'});
    } else {
        $('.hambarger').css({'position':'absolute'});
        $('drawer').css({'position':'absolute'});
    }
});


  //global-navの位置固定
  let globalNavOffset = $('#global-nav').offset();
  $(window).scroll(function () {
      if ($(this).scrollTop() > globalNavOffset.top) {
          $('#global-nav').addClass('global-nav-header--fixed');
      } else {
          $('#global-nav').removeClass('global-nav-header--fixed');
      }
  });

  //rsv-buttonの消去
  
  $(window).scroll(function () {
    let footerOffset = $('#footer').offset();
    let rsvButton = $('#rsv-button--fixed');
    let rsvButtonTel = $('.rsv-by-phone__square-button');
    let rsvButtonLine = $('.rsv-by-line__square-button');
    let rsvButtonOffset = $
    ('#rsv-button--fixed').offset();
     if(rsvButtonOffset.top + rsvButton.height() > footerOffset.top) {
        rsvButtonTel.hide("drop", {direction:"right"}, 1000);
        rsvButtonLine.hide('drop', {direction:"right"}, 1000);
     } else {
        rsvButtonTel.show("drop", {direction:"left"}, 1000);
        rsvButtonLine.show("drop", {direction:"left"}, 1000);
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
        
        if($(window).scrollTop() >= $(this).offset().top - 50
        //  js-showupのtranslateY(50)分を調整
        ) {
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

    //TOPへ戻る(HOME/MENU)
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