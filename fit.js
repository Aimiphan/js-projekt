
//Countdown
var countDownDate = new Date("Jun 1, 2023 00:00:00").getTime();

// Nedtællingen bliver opdateret hvert sekund
var x = setInterval(function() {

  // Dato og tid for i dag
  var now = new Date().getTime();

  // Afstanden mellem nu og nedtællingsdatoen
  var distance = countDownDate - now;

  // Tidsberegninger for dage, timer, minutter og sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Udskriv resultatet i et element med id="ur"
  document.getElementById("ur").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Når countdown er ovre, vil der står dette...
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ur").innerHTML = "EXPIRED";
  }
}, 1000);


//Dropdown i footer 

function toggleDropdown() {
  document.querySelector('.dropdown-content').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}
=======
// billedegalleri

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
>>>>>>> 631e91f3c69805ba485414ebb9656730c4cc9d4c
