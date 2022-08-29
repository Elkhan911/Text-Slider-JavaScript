let text = document.querySelector("#_text");
const startBtn = document.querySelector("#_startBtn");
const stopBtn = document.querySelector("#_stopBtn");
const leftBtn = document.querySelector("#_leftBtn");
const rightBtn = document.querySelector("#_rightBtn");

// массив текста
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

// счетчик для таймера
let timerCounter = 0;
// идентифкатора таймера
let timerId;

// текст по умолчанию для слайдера
text.textContent = arr[0];

// функция для запуская таймера
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

// функция для паузы таймера
function timerPause() {
  clearInterval(timerId);
  startBtn.addEventListener("click", timerStart);
}

startBtn.addEventListener("click", timerStart);
stopBtn.addEventListener("click", timerPause);

leftBtn.addEventListener("click", function () {
  text.textContent = arr[timerCounter];
  if (timerCounter <= 1) {
    timerCounter = 1;
  }
  timerCounter--;
  console.log(timerCounter);
});

rightBtn.addEventListener("click", function () {
  text.textContent = arr[timerCounter];
  if (timerCounter == 10) {
    timerCounter = 9;
  }
  timerCounter++;
  console.log(timerCounter);
});
