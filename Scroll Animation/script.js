const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", chexBoxes);

function chexBoxes() {
  const triggrerBottom = window.innerHeight / (5 * 4);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log("Window" + triggrerBottom);
    console.log("Box" + boxTop);
    if (boxTop < triggrerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
