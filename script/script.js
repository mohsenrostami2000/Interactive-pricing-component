const slider = document.querySelector("#range");
console.log("helloe");
console.log(slider);

slider.addEventListener("click", () => {
  console.log("working");
});
// slider.addEventListener("mousemove", () => {
//   console.log("working");
//   let x = slider.value;
//   const color =
//     "linear-gradient(90deg, var(--Strong-Cyan)" +
//     x +
//     "% ,var(--Light-Grayish-Blue)" +
//     x +
//     "% )";
//   slider.style.background = color;
// });
