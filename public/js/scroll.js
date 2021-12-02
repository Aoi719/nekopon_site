const pageTop = document.getElementById('js-pageTop');
pageTop.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});