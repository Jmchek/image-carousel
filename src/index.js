import './style.css';

const frameGrbbr = document.querySelector('.picture-frame');
const nextBttn = document.querySelector('.next');
const wideDivGrbbr = document.querySelector('.wide-div');
let currentPosition = parseInt(nextBttn.style.right);


function imageCarousel() {
  let leftPos = -750;

  nextBttn.addEventListener("click", (x) => {
    if (leftPos < -3000) {
      leftPos = 0;
    }

    wideDivGrbbr.style.setProperty("left", leftPos + "px");
    leftPos -= 750;
  });
}

imageCarousel();