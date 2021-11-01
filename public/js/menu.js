// ヘッダー色変更
let windowHeight = $(window).height();
jQuery(window).on('scroll', function(){
  if(windowHeight < jQuery(this).scrollTop()) {
    jQuery('.header_image').addClass('active');
  } else {
    jQuery('.header_image').removeClass('active');
  }
});

// SPハンバーガーメニュー
let menuBar = document.getElementById('menuBar');
let spNav = document.getElementById('spNav');

menuBar.addEventListener('click', ()=>{
  menuBar.classList.toggle('active');
  spNav.classList.toggle('active');
});
