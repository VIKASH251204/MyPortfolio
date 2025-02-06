function toggleMenu() {
  var menu2 = document.getElementById("menu2");
  var menuButton = document.getElementById("menuButton");
  var closeButton = document.getElementById("closeButton");
  
  if (menu2.style.display === "none" || menu2.style.display === "") {
      menu2.style.display = "block";
      menuButton.style.display = "none";
      closeButton.style.display = "block";
  } else {
      menu2.style.display = "none";
      menuButton.style.display = "block";
      closeButton.style.display = "none";
  }
}

  
  











