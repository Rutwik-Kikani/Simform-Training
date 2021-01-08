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
                setToLocalStorage(display.value);
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

// 2. this approch did not work why? doubt
//this is a function which will call on display load
// window.addEventListener("load",function(){
//     console.log("Loaded");
// });

//3. this approch did not work why? becouse i set input field as readonly conform this with mentor
//add onchange eventlistner to display so that you can add it to localstorage
// display.addEventListener("input", function(){
//     console.log("display value is "+ display.value);
// });

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
      alert("Invalid Key Press!!");
  }
};
