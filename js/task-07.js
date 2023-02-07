/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const onChangeInputRange = refs.input.addEventListener('input', changeTextSize);

function changeTextSize(event) {
  const fontSize = refs.input.value;

  refs.text.style.fontSize = `${fontSize}px`;
}
