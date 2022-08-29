let text = document.querySelector("#_text");
const startBtn = document.querySelector("#_startBtn");
const stopBtn = document.querySelector("#_stopBtn");

let arr = [
  "text 0",
  "text 1",
  "text 2",
  "text 3",
  "text 4",
  "text 5",
  "text 6",
  "text 7",
  "text 8",
  "text 9",
  "text 10",
];

//
let timerCounter = 0;
let timerId;

text.textContent = arr[0];

function timerStart() {
  timerId = setInterval(function () {
    timerCounter++;
    text.textContent = arr[timerCounter];
    console.log(timerCounter);
    if (arr.length <= timerCounter) {
      timerCounter = 0;
      text.textContent = arr[timerCounter];
    }
  }, 1000);

  startBtn.removeEventListener("click", timerStart);
}

startBtn.addEventListener("click", timerStart);

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
  startBtn.addEventListener("click", timerStart);
});
