/*!
  * Javascript functions and tests
  * AriaRay Brown, 9-2019
  */

window.onload = function(){

	
  let forFunToggle = document.getElementById("forFunToggle");
  let forFun = document.getElementById("forFunGallery");

  forFunToggle.addEventListener("click", function() {

      console.log("clicked!")
      forFun.classList.toggle("open");

  });
}





