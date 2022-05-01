// Your code here
document.addEventListener("keydown", function (event) {
    console.log(event);
    if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    if(event.key === "ArrowRight"){
        moveDodgerRight();
    }
  });
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#6b0";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }