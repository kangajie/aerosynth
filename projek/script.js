// JavaScript untuk menampilkan menu hamburger
const hamburger = document.getElementById('hamburger-icon'); 
const navbar = document.getElementById('navbar'); 

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});