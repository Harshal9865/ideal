function toggleMenu() {
    var menu = document.getElementById('navigationMenu');
    if (menu.style.left === "-250px") {
      menu.style.left = "0";
    } else {
      menu.style.left = "-250px";
    }
  }
  
  // Show nav-toggle on smaller screens
  window.addEventListener('resize', function() {
    var menu = document.getElementById('navigationMenu');
    var toggle = document.querySelector('.nav-toggle');
    
    if (window.innerWidth <= 768) {
      menu.style.left = "-250px";
      toggle.style.display = "block";
    } else {
      menu.style.left = "0";
      toggle.style.display = "none";
    }
  });
  