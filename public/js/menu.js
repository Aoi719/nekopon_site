// ヘッダー色変更

// トップページのmv高さ
let topmv = $('.header').parents('.top');
let windowHeight = $(window).height();

// 下層ページのmv高さ
let articlemv = $('.header').parents('.article');
let articlemvHeight = articlemv.find('.mvContainer').height();

if($('body').hasClass('top')){
  // .headerが.topの中にあるとき＝トップで実行
  jQuery(window).on('scroll', function(){
    if(windowHeight < jQuery(this).scrollTop()) {
      jQuery('.header_image').addClass('active');
      jQuery('.pageTop').addClass('active');
    } else {
      jQuery('.header_image').removeClass('active');
      jQuery('.pageTop').removeClass('active');
    }
  });
}
if($('body').hasClass('article')){
  // .headerが.articleの中に合ったら実行
  jQuery(window).on('scroll', function(){
    if(articlemvHeight < jQuery(this).scrollTop()) {
      jQuery('.header_image').addClass('active');
    } else {
      jQuery('.header_image').removeClass('active');
    }
  });
}

//--------------------------

// SPハンバーガーメニュー
let menuBar = document.getElementById('menuBar');
let spNav = document.getElementById('spNav');

menuBar.addEventListener('click', ()=>{
  menuBar.classList.toggle('active');
  spNav.classList.toggle('active');
});
