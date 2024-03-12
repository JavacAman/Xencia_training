// -------------------------------------Script for slide show
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




// Script for hidding the card content

function myFunction1() {
  document.getElementById("myDIV").innerHTML = 'My Summer Diary <img src="c1.jpg" width="250px" height="200px">Summer is nearly here, and if you’re looking for an awesome resource to send your students off for summer break with, we suggest you check out this My Summer Vacation Diary.';
  document.getElementById("button1").style.borderColor = "red";


}

function myFunction2() {
  document.getElementById("myDIV").innerHTML = 'My Summer Diary <img src="c2.jpg" width="250px" height="200px">resource features a bucket-and-spade design, and five handy pre-lined writing prompts. The objective of this resource is for your students to write their very own “bucket ';
  document.getElementById("button2").style.borderColor = "red";

}

function myFunction3() {
  document.getElementById("myDIV").innerHTML = 'My Summer Diary <img src="c3.jpg" width="250px" height="200px">vacation-themed number charts feature a handy key for your students to find the correct colors which correspond to each number. After carefully following the key and .';
  document.getElementById("button3").style.borderColor = "red";
}

