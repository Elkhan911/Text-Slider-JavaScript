let sliderText = document.querySelector("#_sliderText");
const startBtn1 = document.querySelector("#_startBtn1");
const stopBtn1 = document.querySelector("#_stopBtn1");
const leftBtn1 = document.querySelector("#_leftBtn1");
const rightBtn1 = document.querySelector("#_rightBtn1");

const startBtn2 = document.querySelector("#_startBtn2");
const stopBtn2 = document.querySelector("#_stopBtn2");
const leftBtn2 = document.querySelector("#_leftBtn2");
const rightBtn2 = document.querySelector("#_rightBtn2");

// массив текста
let arr1 = [
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

let arr2 = [
  "picture1.jpg",
  "picture2.jpg",
  "picture3.jpg",
  "picture4.jpg",
  "picture5.jpg",
  "picture6.jpg",
  "picture7.jpg",
  "picture9.jpg",
  "picture10.jpg",
  "picture11.jpg",
  "picture12.jpg",
  "picture13.jpg",
  "picture14.jpg",
  "picture15.jpg",
  "picture16.jpg",
];

// счетчик для таймера
let timerCounter = 0;
// идентифкатора таймера
let timerId;

// текст по умолчанию для слайдера
sliderText.textContent = arr1[0];

// функция для запуская таймера
function timerStart() {
  timerId = setInterval(function () {
    timerCounter++;
    sliderText.textContent = arr1[timerCounter];
    if (arr1.length <= timerCounter) {
      timerCounter = 0;
      sliderText.textContent = arr1[timerCounter];
    }
  }, 3000);

  startBtn1.removeEventListener("click", timerStart);
}

// функция для паузы таймера
function timerPause() {
  clearInterval(timerId);
  startBtn1.addEventListener("click", timerStart);
}

// функция пролистнуть слайдер вперед
function goForward() {
  sliderText.textContent = arr1[timerCounter];
  if (timerCounter <= 1) {
    timerCounter = 1;
  }
  timerCounter--;
}

// функция пролистнуть слайдер назад
function goBack() {
  sliderText.textContent = arr1[timerCounter];
  if (timerCounter == arr1.length - 1) {
    timerCounter = 9;
  }
  timerCounter++;
}

startBtn1.addEventListener("click", timerStart(arr1));
stopBtn1.addEventListener("click", timerPause);

leftBtn1.addEventListener("click", goForward);
rightBtn1.addEventListener("click", goBack);

startBtn2.addEventListener("click", function () {});
