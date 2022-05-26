const counter = {
    counterValue: 0,
    decrement(){
        this.counterValue -=1;
    },
    increment(){
        this.counterValue +=1;
    },    
};

const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const counterValEl = document.querySelector('#value');

decrBtnRef.addEventListener('click', ()=>{
    counter.decrement();
    counterValEl.textContent = counter.counterValue;
})

incrBtnRef.addEventListener('click', ()=>{
    counter.increment();
    counterValEl.textContent = counter.counterValue;
})
 




