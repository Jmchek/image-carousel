import './style.css';

const nextBttn = document.querySelector('.next');
const wideDivGrbbr = document.querySelector('.wide-div');
const prevBttn = document.querySelector('.prev');

console.log(wideDivGrbbr.getBoundingClientRect());

function imageCarousel() {
  let leftPos = 0;

  nextBttn.addEventListener("click", (x) => {
    if (leftPos < -2500) {
      leftPos = 750;
    }

    wideDivGrbbr.style.setProperty("left", (leftPos - 750) + "px");
    leftPos -= 750;
  });

  prevBttn.addEventListener("click", (x) => {
    if (leftPos == 0) {
      leftPos = -3750;
    }

    wideDivGrbbr.style.setProperty("left", (leftPos + 750) + "px");
    leftPos += 750;
  });
}

imageCarousel();