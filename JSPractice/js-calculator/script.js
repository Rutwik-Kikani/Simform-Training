//get all button and display
let calc_buttons = document.getElementsByClassName("calc-btn");
let display = document.getElementById("display");
// console.log(calc_buttons,display);

//this is a flag which tell us display reach to result or not
//for starting it is set to false when result come it set to true
let isDisplayHasResult = false;

//reset display function
function resetDisplay(){
    display.value = 0;
}
//clear display function
function clearDisplay(){
    display.value='';
}

//todo: on esc key press clear the display.

//this is a function which will display any data from local storage
display.addEventListener("onload",function(){
    //todo: check data is on local storage or not. and print it on display
});

//add click event listener to all button
for(let i=0;i<calc_buttons.length;i++){
    calc_buttons[i].addEventListener("click", function(){
        //when button other then c and = is click, display value should change
        switch(calc_buttons[i].id){
            case "equal": {
                //do print result on display and set flag to true
                //todo: try and catch the exceptions
                display.value = eval(display.value);
                isDisplayHasResult = true;
                // console.log(calc_buttons[i]);
            }break;
            case "clear":{
                //do reset display
                resetDisplay()
                // console.log(calc_buttons[i]);
            }break;
            default:{
                    display.value += calc_buttons[i].textContent;    
            }

        }
       
    });
}