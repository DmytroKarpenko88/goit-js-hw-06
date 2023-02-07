/*Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

const onBtnChabgeColor = refs.btn.addEventListener('click', ChangeColor);

function ChangeColor() {
  const hexColor = getRandomHexColor();
  const body = document.querySelector('body');
  refs.span.textContent = hexColor;

  body.style.backgroundColor = hexColor;
}
