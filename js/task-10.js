const refs = {
inputNumber: controls.firstElementChild,
createBtn: document.querySelector('button[data-create]'),
destroyBtn: document.querySelector('button[data-destroy]'),
boxesWrap: document.querySelector('#boxes'),
};
refs.boxesWrap.style.display = 'flex';
let size = 30;


refs.createBtn.addEventListener('click', () => createHandler(Number(refs.inputNumber.value)));

refs.destroyBtn.addEventListener('click', destroyHandler);


function destroyHandler() {
    size = 30;
    refs.boxesWrap.innerHTML = '';
    };

function createHandler(amount){
  destroyHandler();

  const boxArr = [];
  
  for (let i = 0; i < amount; i +=1){
    const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  box.style.margin = '5px';
  size += 10;
  boxArr.push(box);
  };
  refs.boxesWrap.append(...boxArr);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};




