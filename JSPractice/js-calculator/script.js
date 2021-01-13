//get all button and display
let calc_buttons = document.getElementsByClassName("calc-btn");
let display = document.getElementById("display");
// console.log(calc_buttons,display);

//this is a flag which tell us display reach to result or not
//for starting it is set to false when result come it set to true
let isDisplayHasResult = false;

//reset display function
function resetDisplay() {
  display.value = 0;
  setToLocalStorage(display.value);
}

//dummy function;
function foo(Element) {
  console.log("this is call the foo()" + Element);
}

function removeFirstZeros(str) {
  // console.log(str.length);
  return str.replace(/^0+/, "");
}

function setToLocalStorage(item) {
  localStorage.setItem("valDisplay", item);
}
function getFromLocalStorage() {
  return localStorage.getItem("valDisplay");
}

function doWhenButtonClicked(calc_btn) {
  //when button other then c and = is clicked, display value should change
  switch (calc_btn.id) {
    case "equal":
      {
        // console.log(calc_btn);
        //print result on display and set flag to true
        try{
        //before going to evaluation remove first 0 why? try 010 without removing zero and press = ;
            let finalEvalString = removeFirstZeros(display.value);
            display.value = eval(finalEvalString);
            isDisplayHasResult = true;
        } catch(error){
            console.log(error);
            display.value = "Error";
            setTimeout(() => {
                resetDisplay();            
            },1000);
        }
      }
      break;
    case "clear":
      {
        // console.log(calc_btn);
        //do reset display
        resetDisplay();
      }
      break;
    default: {
      display.value += calc_btn.textContent;
    }
  }
  setToLocalStorage(display.value);
}

function init() {
  resetDisplay();
  const valueOfDisplay = getFromLocalStorage();
  if (valueOfDisplay) {
    display.value = valueOfDisplay;
  }
}
init();

//add click event listener to all button
for (let i = 0; i < calc_buttons.length; i++) {
  calc_buttons[i].addEventListener("click", function () {
    //when button is press
    doWhenButtonClicked(calc_buttons[i]);
  });
}

//Esc key press display should be reset
const validKeyArray = ["1","2","3","4","5","6","7","8","9","0",".","Enter","Escape","+","-","/","*"];

document.onkeydown = function (event) {
  //this line will help you to get when 1,2,3 etc key press how event looks like
  // console.log(event);

  evt = event || window.event;
  console.log("key" + evt.key + "pressed");
  if (validKeyArray.indexOf(evt.key)>=0) {
    switch (evt.key) {
      case "Enter":
        {
          let equal_btn = document.getElementById("equal");
          doWhenButtonClicked(equal_btn);
        }
        break;
      case "Escape":
      case "Esc":
        {
          resetDisplay();
        }
        break;
      default: {
        //do nothing;
        let btn = document.getElementById(evt.key);
        btn.classList.add("active");
        setTimeout(() => {
            btn.classList.remove("active");
        },100);
        doWhenButtonClicked(btn);        
      }
    }
  }else{
    //do nothing
  }
};
