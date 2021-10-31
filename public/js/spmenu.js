let menuBar = document.getElementById('menuBar');
let spNav = document.getElementById('spNav');

menuBar.addEventListener('click', ()=>{
  menuBar.classList.toggle('active');
  spNav.classList.toggle('active');
});