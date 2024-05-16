import './style.css';



function imageCarousel() {
  const nextBttn = document.querySelector(".next");
  const wideDivGrbbr = document.querySelector(".wide-div");
  const prevBttn = document.querySelector(".prev");
  const navBubble1 = document.querySelector(".nav-dot-1");
  const navBubble2 = document.querySelector(".nav-dot-2");
  const navBubble3 = document.querySelector(".nav-dot-3");
  const navBubble4 = document.querySelector(".nav-dot-4");
  const navBubble5 = document.querySelector(".nav-dot-5");
  let leftPos = 0;

  nextBttn.addEventListener("click", (x) => {
    if (leftPos < -2500) {
      leftPos = 750;
    }

    wideDivGrbbr.style.setProperty("left", leftPos - 750 + "px");
    leftPos -= 750;
  });

  prevBttn.addEventListener("click", (x) => {
    if (leftPos == 0) {
      leftPos = -3750;
    }

    wideDivGrbbr.style.setProperty("left", leftPos + 750 + "px");
    leftPos += 750;
  });

  navBubble1.addEventListener("click", (x) => {
    wideDivGrbbr.style.setProperty("left", 0 + "px");
  });
}

imageCarousel();