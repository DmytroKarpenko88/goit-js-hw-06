// Напиши скрипт, який під час набору тексту в інпуті
// input#name-input (подія input), підставляє його поточне значення
// в span#name-output. Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const valueInput = event.currentTarget.value;
  if (valueInput !== '') {
    output.textContent = valueInput;
  } else {
    output.textContent = 'Anonymous';
  }
});
