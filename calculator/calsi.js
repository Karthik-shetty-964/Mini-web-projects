let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = ' ';

// screen.value=screenValue;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // screen.value=" ";
        console.log('Buttton text is', buttonText);


        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == 'CLEAR') {
            screenValue = " ";
            screen.value = screenValue;

        } else if (buttonText == '=') {
            screen.value = eval(screenValue);


        }else if(buttonText=='CORRECT'){
              screenValue=screenValue.substr(0,screenValue.length-1);
             screen.value=screenValue;

        }else if (buttonText == 'ON') {
            screenValue = "0 ";
            screen.value = screenValue;
            

        }else if (buttonText == 'OFF') {
            screenValue = " ";
            screen.value = screenValue;
            

        }
        
        else{
            if(buttonText=='Sq'){
                screen.value=Math.sqrt(screenValue);
                return;
            }
            
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}