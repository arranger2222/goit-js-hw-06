const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', ()=>{
    textRef.style.fontSize = `${rangeRef.value}px`;
    });
