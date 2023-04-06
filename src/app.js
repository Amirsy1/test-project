const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let random = getRandom();

  document.querySelector("body").style.backgroundColor = colors[random];
});
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
