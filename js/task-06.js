const textInputRef = document.querySelector('#validation-input');
const requiredLength = Number(textInputRef.dataset.length);

let userEnteredLength = 0;    

textInputRef.addEventListener('blur', ()=>{
    userEnteredLength = textInputRef.value.length;
    if(userEnteredLength === requiredLength){
        textInputRef.classList.remove('invalid');
        textInputRef.classList.add('valid');
        } else {
        textInputRef.classList.remove('valid');
        textInputRef.classList.add('invalid');
        };    
});

