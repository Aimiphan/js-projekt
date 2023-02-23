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

//billedegalleri
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


//Sporgsmal
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

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
