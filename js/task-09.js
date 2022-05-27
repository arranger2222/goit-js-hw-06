const bodyRef = document.querySelector('body');
const changeColorBtnRef = document.querySelector('.change-color');
const colorValueTitleRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', handleSubmit);

function handleSubmit() {
  const newColor = getRandomHexColor();
  colorValueTitleRef.textContent = newColor;
  bodyRef.style.backgroundColor = newColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;;
};