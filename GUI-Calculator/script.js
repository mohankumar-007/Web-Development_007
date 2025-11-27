const display = document.getElementById('display');

function appendOnClick(value) {
   display.value += value;

}
function clearScreen(){
    display.value = '';
}
function calculate(){
    try{
        const safe =display.value.replace(/[^-()\d/*+.]/g, '');
        const result = new Function(`return ${safe}`)();
          display.value = result;

    }
    catch(error){
        display.value ='Invalid Input';
    }
}


