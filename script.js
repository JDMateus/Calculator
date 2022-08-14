const buttons = document.querySelectorAll('.orange, .gray');
const display = document.querySelector('[name="display"]');
const equals = document.querySelector('[value="="]');

const addToInput = function (value) {
  display.value += value;
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    addToInput(button.value);
  });
});

equals.addEventListener('click', () => {
  display.value = eval(display.value);
});

