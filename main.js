const buttons = document.querySelectorAll(".button");

buttons.forEach(element => {
  element.addEventListener("mousedown", () => {
    element.classList.remove("border");
  });
  element.addEventListener("mouseup", () => {
    element.classList.add("border");
  });
});
