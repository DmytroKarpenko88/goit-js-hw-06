/* Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. 
Натисненням на кнопку Очистити, 
колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  countBoxes: document.querySelector('input[type="number"]'),
};

const onCreateBox = refs.create.addEventListener('click', createBoxes);
const onDestroyBox = refs.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  // boxes.innerHTML = '';
  amount = refs.countBoxes.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const hexColor = getRandomHexColor();

    box.classList.add('box');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = hexColor;
    refs.boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
