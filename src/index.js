import './style.css';

const frameGrbbr = document.querySelector('.picture-frame');
const nextBttn = document.querySelector('.next');
const wideDivGrbbr = document.querySelector('.wide-div');
let currentPosition = parseInt(nextBttn.style.right);

// console.log(nextBttn.getBoundingClientRect());

nextBttn.addEventListener('click', x => {
    // let leftPos = 0;

    // if (leftPos == 0){
    // wideDivGrbbr.style.left = leftPos - 750 + "px";
    // leftPos -= 750;
    // } else {
    //     wideDivGrbbr.style.left += leftPos - 750 + "px";
    // }
    // wideDivGrbbr.style.left = leftPos - 750 + "px";
    // leftPos -= 750;
    wideDivGrbbr.style.setProperty('left', '-750px');
});