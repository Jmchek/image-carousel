import "./style.css";

function imageCarousel() {
  const nextBttn = document.querySelector(".next");
  const wideDivGrbbr = document.querySelector(".wide-div");
  const prevBttn = document.querySelector(".prev");
  const navBubbles = document.querySelectorAll(".nav-dot");
  let leftPos = 0;
  let index = 0;

  nextBttn.addEventListener("click", (x) => {
    if (leftPos < -2500 || index == 4) {
      leftPos = 750;
      index = 0;
      wideDivGrbbr.style.setProperty("left", leftPos - 750 + "px");
      leftPos -= 750;
      changeActiveDot(navBubbles, index);
    } else {
      wideDivGrbbr.style.setProperty("left", leftPos - 750 + "px");
      leftPos -= 750;
      changeActiveDot(navBubbles, index + 1);
      index += 1;
    }
  });

  prevBttn.addEventListener("click", (x) => {
    if (leftPos == 0 || index == 0) {
      leftPos = -3750;
      index = 4;
      wideDivGrbbr.style.setProperty("left", leftPos + 750 + "px");
      leftPos += 750;
      changeActiveDot(navBubbles, index);
    } else {
      wideDivGrbbr.style.setProperty("left", leftPos + 750 + "px");
      leftPos += 750;
      changeActiveDot(navBubbles, index - 1);
      index -= 1;
    }
  });

  function changeActiveDot(arr, newIndex) {
    arr.forEach((x, indx, thisArr) => {
      if (thisArr[indx].classList.contains("active")) {
        thisArr[indx].classList.remove("active");
      }
      thisArr[newIndex].classList.add("active");
    });
  }

  navBubbles.forEach((y, index, arr) => {
    y.addEventListener("click", (z) => {
      switch (index) {
        case 0:
          wideDivGrbbr.style.setProperty("left", 0 + "px");
          changeActiveDot(arr, 0);
          break;
        case 1:
          wideDivGrbbr.style.setProperty("left", -750 + "px");
          changeActiveDot(arr, 1);
          break;
        case 2:
          wideDivGrbbr.style.setProperty("left", -1500 + "px");
          changeActiveDot(arr, 2);
          break;
        case 3:
          wideDivGrbbr.style.setProperty("left", -2250 + "px");
          changeActiveDot(arr, 3);
          break;
        case 4:
          wideDivGrbbr.style.setProperty("left", -3000 + "px");
          changeActiveDot(arr, 4);
          break;
        default:
          console.log("No slide was found.");
      }
    });
  });
}

imageCarousel();
