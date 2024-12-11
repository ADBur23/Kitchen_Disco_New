"use strict";

const modal = document.querySelector(".modal");
const button = document.querySelectorAll(".btn-show-off");
const modalText = document.querySelector(".modal-body");
const modalTitle = document.querySelector(".modal-title");
console.log(button);
// const modalShow = document.querySelector("divbutton");

// console.log(modalShow);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    console.log("button pressed");
    if (i === 0) {
      modalText.innerText = "this is number one";
    } else if (i === 1) {
      modalText.innerText = "this is number two";
    } else if (i === 2) {
      modalText.innerText = "this is number three";
    } else if (i === 3) {
      modalText.innerText = "this is number four";
    } else if (i === 4) {
      modalText.innerText = "this is number five";
    } else if (i === 5) {
      modalText.innerText = "this is number six";
    } else {
      modalText.innerText = "this is number six";
    }
  });
}

$("");
// window.onscroll = function() {fadeOut()}
// function fadeOut() {
//   document
//     .getElementsByClassName(".ant-bex")
//     .fadeOut("slow")
//     .attr("src", "../images/20240128_175556.jpg")
//     .fadeIn("slow");

//   // $(".ant-bex").fadeOut();
// }

var initialSrc = "../Images/20240129_092655.jpg";
var scrollSrc = "../Images/20240128_175556.jpg";

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 800) $(".ant-bex").attr("src", scrollSrc);
  else $(".ant-bex").attr("src", initialSrc);
});

var i = 0;
var txt =
  "Social Media. Websites. We've got your digital footprint covered, baby!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeChat").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const shake = document.querySelector(".offer-shake");
const shake2 = document.querySelector(".offer-shake-middle");
const shake3 = document.querySelector(".offer-shake-last");
shake.classList.remove("shake-transition");

// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      shake.classList.add("shake-transition");
      shake2.classList.add("shake-transition2");
      shake3.classList.add("shake-transition3");

      return;
    }

    shake.classList.remove("shake-transition");
    shake2.classList.remove("shake-transition2");
    shake3.classList.remove("shake-transition3");
  });
});

observer.observe(document.querySelector("#what-we-offer"));
