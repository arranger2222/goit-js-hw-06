const controls = document.querySelector('#controls');
const inputNumberRef = controls.firstElementChild;
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesWrap = document.querySelector('#boxes');
let size = 30;
let boxArr = [];
boxesWrap.style.display = 'flex';

createBtnRef.addEventListener('click', () =>{
const getAmount = Number(inputNumberRef.value);
createBoxes(getAmount);
});

destroyBtnRef.addEventListener('click', ()=>{
  window.location.reload()
  console.log('reset');
});

function createBoxes(amount){ 
  for (let i = 0; i < amount; i +=1){
    const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  box.style.margin = '5px';
  size += 10;
  boxArr.push(box);
  };
  boxesWrap.append(...boxArr);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};




