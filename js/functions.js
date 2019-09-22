/*!
  * Portfolio javascript functions
  * AriaRay Brown, 9-2019
  */

//function toggleNavBar() {
	
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    
    mainNav.classList.toggle('active');
});

//}

