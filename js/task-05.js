const textInputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', (event) =>{
    textOutputRef.textContent = event.currentTarget.value;
})
