

let answer=document.getElementById('answer');
let screenValue=' ';
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
            let price=document.getElementById('price').value;
            
            // console.log(price);
            let time=document.getElementById('time').value;
            // console.log(time);
            
            let rate=document.getElementById('rate').value;
            // console.log(rate);
            let screenValue=(price*time*rate)/100;

            answer.value= screenValue;
        })
    }