let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let list = document.querySelectorAll('.list');




menuIcon.addEventListener("click", () => {
    menu.style.display='block';
  });
  
  menu.showPopover();
  menu.hidePopover();
  // `toggle` only fires once











