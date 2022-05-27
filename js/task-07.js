const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('change', ()=>{
    textRef.style.fontSize = `${rangeRef.value}px`;
    });
