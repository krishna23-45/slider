// var slideIndex = 1;

// showSlide(slideIndex);

// function cSlide(n) {
//   showSlide((slideIndex += n));
// }
// function chSlide(n) {
//   showSlide((slideIndex = n));
// }
// function showSlide(n) {
//   var i;

//   cards = document.getElementsByClassName("card");
//   cirs = document.getElementsByClassName("cir");

//   if (slideIndex > cards.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = cards.length;
//   }

//   for (i = 0; i < cards.length; i++) {
//     cards[i].style.display = "none";
//   }

//   for (i = 0; i < cards.length; i++) {
//     cirs[i].className = cirs[i].className.replace("active", "");
//   }

//   cards[slideIndex - 1].style.display = "block";
//   cirs[slideIndex - 1].className += " active";
// }

var slideIndex = 0;

showSlide();

function showSlide() {
  var i;

  cards = document.getElementsByClassName("card");
  cirs = document.getElementsByClassName("cir");
  slideIndex++;

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  if (slideIndex > cards.length) {
    slideIndex = 1;
  }

  for (i = 0; i < cards.length; i++) {
    cirs[i].className = cirs[i].className.replace("active", "");
  }
  cards[slideIndex - 1].style.display = "block";
  cirs[slideIndex - 1].className += " active";

  setTimeout(showSlide, 2000);
}
