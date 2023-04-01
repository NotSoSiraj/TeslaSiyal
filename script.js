const menuBtn = document.getElementById('menuBtn');
const menuWrapper = document.getElementById('aMenuWrapper');
const clickClose = document.getElementById('clickClose');

menuBtn.addEventListener('click', function() {
  menuWrapper.style.display = 'block';
  menuWrapper.style.transition = '0.50s all ease-in-out';
});

clickClose.addEventListener('click', function() {
  menuWrapper.style.display = 'none';
});

menuBtn.addEventListener('click', function() {
    menuWrapper.style.display = "block";
    setTimeout(function() {
      menuWrapper.style.right = "0";
    }, 1);
  });
  
  clickClose.addEventListener('click', function() {
    menuWrapper.style.transition = '0.8s ease-in-out';
    setTimeout(function() {
      menuWrapper.style.display = "none";
    }, 330);
  });
 /*  This code uses setTimeout to add a small delay before animating the right property of the .menuWrapper class when showing the menu. The delay ensures that the display property is set to "block" before the animation starts. Similarly, the setTimeout function is used to delay hiding the menu after animating the right property. The delay ensures that the animation completes before the display property is set to "none". */
  
  
  
  
  
  