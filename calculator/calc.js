
const display = document.getElementById('display');
const calculate = document.getElementById('calculate')



const value = document.querySelectorAll('input[value]');
value.forEach((item)=>{
      item.addEventListener('click',()=>{ 
        if ( item.value=='=') {
          display.value = eval(display.value);
       }else if(item.value=='DEL'){
        display.value=display.value.slice(0,-1);
       }else{
        display.value += item.value;
       }
      })
    })

const clear = document.getElementById('clear')
 clear.addEventListener('click',()=>{
    display.value = '';
 })
 

