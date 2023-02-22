

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

  // Udskriv resultatet i et element med id="demo"
  document.getElementById("ur").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Når countdown er ovre, vil der står dette...
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ur").innerHTML = "EXPIRED";
  }
}, 1000);


//Dropdown i footer
// Hent elementerne fra DOM
const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownList = document.querySelector('#dropdown-list');

// Tilføj en event listener til dropdown-knappen
dropdownBtn.addEventListener('mouseover', () => {
  // Vis dropdown-menuen ved at ændre display-stilen
  dropdownList.style.display = 'block';
});

// Tilføj en event listener til dropdown-listen
dropdownList.addEventListener('mouseout', () => {
  // Skjul dropdown-menuen ved at ændre display-stilen
  dropdownList.style.display = 'none';
});

//billedegalleri
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidesfade");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
