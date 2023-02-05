// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const CounterPlugin = function ({
  rootSeslector,
  initualValue = 0,
  step = 1,
} = {}) {
  this._value = initualValue;
  this._step = step;

  this._refs = this._getRefs(rootSeslector);
  this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.conteiner = document.querySelector(rootSelector);

  refs.incrementBtn = refs.conteiner.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.conteiner.querySelector('[data-action="decrement"]');
  refs.value = refs.conteiner.querySelector('#value');

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

const counter = new CounterPlugin({ rootSeslector: '#counter' });
