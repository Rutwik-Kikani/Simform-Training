"use strict";
// Code goes here!
//get all button and display
let calc_buttons = document.querySelectorAll(".calc-btn");
let display = document.getElementById("display");
let dValue = '';
console.log(calc_buttons, display);
function setToLocalStorage(item) {
    localStorage.setItem("valDisplay", item);
}
function getFromLocalStorage() {
    return localStorage.getItem("valDisplay");
}
function wrapperGetElementAttribute(element, attribute) {
    const attributeValue = element.getAttribute(attribute);
    if (typeof attributeValue === 'string') {
        return attributeValue;
    }
    else {
        throw new Error('Element has not a attribute with this value');
    }
}
function resetDisplay() {
    display.setAttribute('value', '0');
    setToLocalStorage(wrapperGetElementAttribute(display, 'value'));
    dValue = '';
}
function removeFirstZeros(str) {
    // console.log(str.length);
    return str.replace(/^0+/, "");
}
//dummy function prints the element;
function foo(Element) {
    console.log("this is call the foo()" + Element);
}
function init() {
    resetDisplay();
    const valueOfDisplay = getFromLocalStorage();
    if (valueOfDisplay) {
        display.setAttribute('value', valueOfDisplay);
    }
}
init();
function doWhenButtonClicked(calc_btn) {
    //when button other then c and = is clicked, display value should change
    switch (calc_btn.id) {
        case "equal":
            {
                //   console.log(calc_btn);
                //   print result on display and set flag to true
                try {
                    //before going to evaluation remove first 0 why? try 010 without removing zero and press = ;
                    let finalEvalString = removeFirstZeros(wrapperGetElementAttribute(display, 'value'));
                    display.setAttribute('value', eval(finalEvalString));
                    dValue = wrapperGetElementAttribute(display, 'value');
                }
                catch (error) {
                    console.log(error);
                    display.setAttribute('value', 'Error');
                    setTimeout(() => {
                        resetDisplay();
                    }, 1000);
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
            dValue += calc_btn.innerHTML;
            display.setAttribute('value', dValue);
        }
    }
    setToLocalStorage(wrapperGetElementAttribute(display, 'value'));
}
// add click event listener to all button
for (let i = 0; i < calc_buttons.length; i++) {
    calc_buttons[i].addEventListener("click", function () {
        //when button is press
        doWhenButtonClicked(calc_buttons[i]);
    });
}
const validKeyArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "Enter", "Escape", "+", "-", "/", "*"];
document.onkeydown = function (event) {
    //this line will help you to get when 1,2,3 etc key press how event looks like
    // console.log(event);
    let evt = event || window.event;
    console.log("key" + evt.key + "pressed");
    if (validKeyArray.indexOf(evt.key) >= 0) {
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
                }, 100);
                doWhenButtonClicked(btn);
            }
        }
    }
    else {
        alert("Invalid Key Press!!");
    }
};
//# sourceMappingURL=script.js.map