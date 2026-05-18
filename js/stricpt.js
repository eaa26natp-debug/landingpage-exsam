"use strict";

let index = 0;
const slides = document.querySelectorAll(".slide");

function visSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function skiftSlide(retning) {
  index += retning;

  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  visSlide(index);
}

setInterval(() => {
  skiftSlide(1);
}, 3000); // skifter hver 3. sekund

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Søgefelt
function toggleSearch() {
  document.querySelector(".search-input").classList.toggle("active");
}

// Flip-card
const totebagCard = document.getElementById("totebagCard");
const speakerBottonsCard = document.getElementById("speakerbottonspicCard");
const modespeakerCard = document.getElementById("modespeakerCard");

if (totebagCard) {
  totebagCard.addEventListener("click", function () {
    totebagCard.classList.toggle("flipped");
  });
}

if (speakerbottonspicCard) {
  speakerbottonspicCard.addEventListener("click", function () {
    speakerbottonspicCard.classList.toggle("flipped");
  });
}


if (modespeakerCard) {
  modespeakerCard.addEventListener("click", function () {
    modespeakerCard.classList.toggle("flipped");
  });
}