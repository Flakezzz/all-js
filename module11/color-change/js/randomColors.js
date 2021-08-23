const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let timerId = null;
let colorFromArray;

startBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = setInterval(() => {
    colorFromArray = colors[randomIntegerFromInterval(0, 5)];
    document.body.style.backgroundColor = colorFromArray;
    console.log(colorFromArray);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  document.body.style.backgroundColor = "#000000";
});
