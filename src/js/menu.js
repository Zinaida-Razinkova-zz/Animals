// Open the Modal
function openFotoGallery() {
  document.getElementById('foto-modal').style.display = 'block';
}
window.openFotoGallery = openFotoGallery;

// Close the Modal
function closeGallery() {
  document.getElementById('foto-modal').style.display = 'none';
}

window.closeGallery = closeGallery;
var slideIndex = 1;
show_Slides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  show_Slides((slideIndex += n));
}
window.plusSlides = plusSlides;

function fotoSlide(n) {
  show_Slides((slideIndex = n));
}
window.fotoSlide = fotoSlide;

function show_Slides(n) {
  var i;
  var slides = document.getElementsByClassName('foto-slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
window.show_Slides = show_Slides;
