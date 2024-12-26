let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let list = document.querySelectorAll('.list');
let button = document.querySelector('.button');




menuIcon.addEventListener('click', function() {
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
  } else {
      menu.style.display = 'none';
  }
});

  
  











