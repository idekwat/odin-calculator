
const numberButton = document.querySelectorAll(".numbers");
const operatorButton = document.querySelectorAll(".operators");

const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const periodButton = document.getElementById("period");
const delButton = document.getElementById("backspace");

const displayHere = document.querySelector(".calcDisplay");


let num1 = "";
let num2 = "";
let result = null;
let oprtr = "";


function numberInput() {
    numberButton.forEach((button) => {
        button.onclick = () => {
            if(oprtr == "=" & result != null) {
                if(num1 == String(result)) {
                    num1 = "";
                }
                num1 += button.textContent;
                if(num1 == "." & num1.length <2) {
                    num1 = "0.";
                }
                if(num1.charAt(num1.length-1) == "."){
                    periodButton.disabled = true;
                }
                displayHere.innerText = num1;
                operations();
            }
            else if(oprtr == "" ) {
                num1 += button.textContent;
                if(num1.charAt(num1.length-1) == "."){
                    periodButton.disabled = true;
                }
                displayHere.innerText = num1;
                operations();
            }
            else {
                num2 += button.textContent;
                if(num2.charAt(num2.length-1) == "."){
                    periodButton.disabled = true;
                }
                displayHere.innerText = num2;
            }
        }
    })
}

delButton.onclick = () => {
    if(num1 != "" & num1 != "0" & oprtr == "") {
        if(num1.slice(-1) == ".") {
            periodButton.disabled = false;
        }
        num1 = num1.slice(0, num1.length-1);
        displayHere.innerText = num1;    
    }
    else if(num1 == String(result)) {
        if(num1.slice(-1) == ".") {
            periodButton.disabled = false;
        }
        num1 = num1.slice(0, num1.length-1);
        displayHere.innerText = num1;    
    }
    else {
        if(num2.slice(-1) == ".") {
            periodButton.disabled = false;
        }
        num2 = num2.slice(0, num2.length-1);
        displayHere.innerText = num2;
    }
}

function operations() {
    operatorButton.forEach((button) => {
        button.onclick = () => {
            if(num1 == "") {
                alert("Input a number first!");
            }
            else {
                oprtr = button.textContent;
                displayHere.innerText = oprtr;
                periodButton.disabled = false;
            }
            if(num1 != "" & num2 != "" & oprtr != "") {
                toCalculate();
                oprtr = button.textContent;
            }

        }
    })
}

function operate(num1, num2, oprtr) {
    switch(oprtr) {
        case("+"):
        if(num1 != "" & num2 != "") {
            return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
        }
        break;
        case("-"):
        if(num1 != "" & num2 != "") {
            return (parseFloat(num1) - parseFloat(num2)).toFixed(2);
        }
        break;
        case("x"):
        if(num1 != "" & num2 != "") {
            return (parseFloat(num1) * parseFloat(num2)).toFixed(2);
        }
        break;
        case("/"):
        if(num1 != "" & num2 != "") {
            return num2 == "0" ? alert(":( \nwhy? \nyou broke it :("): (parseFloat(num1) / parseFloat(num2)).toFixed(2);
        }
        break;
    }
}



equalButton.onclick = () => {
    if (num1 != ".") {
        toCalculate();
    }
    else {
        clearEverything();
    }
}

function toCalculate () {
    if(num1 != "" & num2 != "") {
        result = operate(num1, num2, oprtr);
        num1 = String(result);
        num2 = "";
        oprtr = "=";
    }
    else if(num1 != "" & num2 == "") {
        result = parseFloat(num1);
    }
    for(let a = 0; a<num1.length-1; a++) {
        if(num1.charAt(a) == ".") {
            periodButton.disabled = true;
        }
        else {
            periodButton.disabled = false;
        }
    }
    displayHere.innerText = result;
}

clearButton.onclick = () => {
    clearEverything();
}

function clearEverything() {
    num1 = "";
    num2 = "";
    oprtr = "";
    hasOperator = false;
    displayHere.innerText = "0";
    periodButton.disabled = false;
    numberInput();
}

numberInput();
