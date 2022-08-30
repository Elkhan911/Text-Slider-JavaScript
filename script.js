let sliderText = document.querySelector("#_sliderText");
const startBtn1 = document.querySelector("#_startBtn1");
const pauseBtn1 = document.querySelector("#_stopBtn1");
const leftBtn1 = document.querySelector("#_leftBtn1");
const rightBtn1 = document.querySelector("#_rightBtn1");

let sliderImage = document.querySelector("_sliderImage");
const startBtn2 = document.querySelector("#_startBtn2");
const pauseBtn2 = document.querySelector("#_stopBtn2");
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

//  "images/picture7.jpg",   "images/picture11.jpg",   "images/picture13.jpg",   "images/picture14.jpg",  "images/picture15.jpg",

let arr2 = [
  "images/picture0.jpg",
  "images/picture1.jpg",
  "images/picture2.jpg",
  "images/picture3.jpg",
  "images/picture4.jpg",
  "images/picture5.jpg",
  "images/picture6.jpg",
  "images/picture7.jpg",
  "images/picture8.jpg",
  "images/picture9.jpg",
];

// счетчик для таймера
let timerCounter1 = 0;
// идентифкатора таймера
let timerId1;

// текст по умолчанию для слайдера
sliderText.textContent = arr1[0];

// функция для запуская таймера
function timerStart() {
  timerId1 = setInterval(function () {
    timerCounter1++;
    sliderText.textContent = arr1[timerCounter1];
    if (arr1.length <= timerCounter1) {
      timerCounter1 = 0;
      sliderText.textContent = arr1[timerCounter1];
    }
  }, 3000);

  startBtn1.removeEventListener("click", timerStart);
}

// функция для паузы таймера
function timerPause() {
  clearInterval(timerId1);
  startBtn1.addEventListener("click", timerStart);
}

// функция пролистнуть слайдер вперед
function goForward() {
  sliderText.textContent = arr1[timerCounter1];
  if (timerCounter1 <= 1) {
    timerCounter1 = 1;
  }
  timerCounter1--;
}

// функция пролистнуть слайдер назад
function goBack() {
  sliderText.textContent = arr1[timerCounter1];
  if (timerCounter1 == arr1.length - 1) {
    timerCounter1 = 9;
  }
  timerCounter1++;
}

startBtn1.addEventListener("click", timerStart(arr1));
pauseBtn1.addEventListener("click", timerPause);
leftBtn1.addEventListener("click", goForward);
rightBtn1.addEventListener("click", goBack);

let timerId2;
let timerCounter2 = 0;

startBtn2.addEventListener("click", function () {
  timerId2 = setInterval(function () {
    timerCounter2++;
    document.querySelector("#_sliderImage").src = arr2[timerCounter2];
  }, 3000);
});

pauseBtn2.addEventListener("click", function () {
  clearInterval(timerId2);
});

leftBtn2.addEventListener("click", function () {
  if (timerCounter2 == 0) {
    timerCounter2 = arr2.length;
  }

  timerCounter2--;
  document.querySelector("#_sliderImage").src = arr2[timerCounter2];
  console.log(arr2[timerCounter2]);
});

rightBtn2.addEventListener("click", function () {
  if (timerCounter2 == arr2.length - 1) {
    timerCounter2 = 0;
  }
  timerCounter2++;
  document.querySelector("#_sliderImage").src = arr2[timerCounter2];
  console.log(arr2[timerCounter2]);
});
