let sliderText = document.querySelector("#_sliderText");
const startBtn = document.querySelector("#_startBtn");
const stopBtn = document.querySelector("#_stopBtn");
const leftBtn = document.querySelector("#_leftBtn");
const rightBtn = document.querySelector("#_rightBtn");

// массив текста
let arr = [
  "Все дело в мгновении. Оно определяет жизнь",
  "Не понимаю, почему люди боятся новых идей. Я боюсь старых",
  "Счастье охотнее заходит в тот дом, где всегда царит хорошее настроение",
  "Если это не весело, значит вы делаете это неправильно",
  "Сторонитесь людей, которые пытаются уменьшить ваши амбиции",
  "Если вы сами цените себя невысоко, мир не предложит вам больше",
  "Не имея возможности жить вечно, мы имеем возможность жить ярко",
  "Вечность влюблена в творения времени",
  "Жизнь — это поезд, займи свое место",
  "Где много любви, там много ошибок. Где нет любви, там все ошибка",
  "Почувствуй себя сегодня тем, кем хочешь стать завтра",
  "С самого низа все пути ведут наверх",
  "Этот миг и есть твоя жизнь",
  "Доверие — это важно. А, точнее, — это всё",
  "Бог никогда не покидал тебя",
  "Сломанные мелки по-прежнему цветные",
  "Мечтай о большем. Делай больше",
];

// счетчик для таймера
let timerCounter = 0;
// идентифкатора таймера
let timerId;

// текст по умолчанию для слайдера
sliderText.textContent = arr[0];

// функция для запуская таймера
function timerStart() {
  timerId = setInterval(function () {
    timerCounter++;
    sliderText.textContent = arr[timerCounter];
    if (arr.length <= timerCounter) {
      timerCounter = 0;
      sliderText.textContent = arr[timerCounter];
    }
  }, 5000);

  startBtn.removeEventListener("click", timerStart);
}

// функция для паузы таймера
function timerPause() {
  clearInterval(timerId);
  startBtn.addEventListener("click", timerStart);
}

// функция пролистнуть слайдер вперед
function goForward() {
  sliderText.textContent = arr[timerCounter];
  if (timerCounter <= 1) {
    timerCounter = 1;
  }
  timerCounter--;
}

// функция пролистнуть слайдер назад
function goBack() {
  sliderText.textContent = arr[timerCounter];
  if (timerCounter == arr.length - 1) {
    timerCounter = 9;
  }
  timerCounter++;
}

startBtn.addEventListener("click", timerStart);
stopBtn.addEventListener("click", timerPause);

leftBtn.addEventListener("click", goForward);
rightBtn.addEventListener("click", goBack);
