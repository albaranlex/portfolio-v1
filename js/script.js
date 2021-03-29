window.onload = function () {

/* Image - Slider */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}

/* FOOTER */ 
document.getElementById("footerbuttondown").onclick = function(){shrink()};
document.getElementById("footerbuttonup").onclick = function(){expand()};
document.getElementById("footer").style.height= "30px"; 
document.getElementById("footercont").style.visibility = "hidden";
document.getElementById("footerbuttonup").style.visibility="visible";
document.getElementById("footerbuttondown").style.visibility="hidden";
 
function shrink(){
  if (document.getElementById("footer").style.height= "300px") {
    document.getElementById("footer").style.height= "30px";
    document.getElementById("footerbuttondown").style.visibility="hidden";  
 	document.getElementById("footerbuttonup").style.visibility="visible";  
    document.getElementById("footercont").style.opacity="0";  
    document.getElementById("footercont").style.visibility="hidden";                              
  }
}

function expand(){
  if (document.getElementById("footer").style.height= "30px") {  
    document.getElementById("footer").style.height= "500px";
    document.getElementById("footerbuttondown").style.visibility="visible";  
 	document.getElementById("footerbuttonup").style.visibility="hidden";  
    document.getElementById("footercont").style.opacity="1";  
    document.getElementById("footercont").style.visibility="visible";                                             
  }
}
};
    
