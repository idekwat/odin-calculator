
//scripts here

const numberButton = document.querySelectorAll(".numbers");
const operatorButton = document.querySelectorAll(".operators");
const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const periodButton = document.getElementById("period");

let num1 = "";
let num2 = "";
let result = null;
let oprtr = "";
let useResult = false;
let hasPeriod = false;

function numberInput() {
    numberButton.forEach((button) => {
        button.onclick = () => {
            if(oprtr == "=" & result != null) {
                num1 = "";
                num1 += button.textContent;
                if(num1.charAt(num1.length-1) == "."){
                    periodButton.disabled = true;
                }
                console.log("num1 " + num1);
                operations();
            }
            else if(oprtr == "" ) {
                num1 += button.textContent;
                if(num1.charAt(num1.length-1) == "."){
                    periodButton.disabled = true;
                }
                console.log("num1 " + num1);
                operations();
            }
            else {
                num2 += button.textContent;
                if(num2.charAt(num2.length-1) == "."){
                    periodButton.disabled = true;
                }
                console.log("num2 " + num2);
            }
        }
    })
}

function operations() {
    operatorButton.forEach((button) => {
        button.onclick = () => {
            if(num1 == "") {
                alert("Input a number first!");
            }
            else {
                oprtr = button.textContent;
                console.log(oprtr);
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
            return parseFloat(num1) + parseFloat(num2);
        }
        break;
        case("-"):
        if(num1 != "" & num2 != "") {
            return parseFloat(num1) - parseFloat(num2);
        }
        break;
        case("x"):
        if(num1 != "" & num2 != "") {
            return parseFloat(num1) * parseFloat(num2);
        }
        break;
        case("/"):
        if(num1 != "" & num2 != "") {
            return num2 == "0" ? alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") + clearEverything(): parseFloat(num1) / parseFloat(num2);
        }
        break;
    }
}

equalButton.onclick = () => {
    toCalculate();
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
    periodButton.disabled = false;
    console.log("Result " + result);
}

clearButton.onclick = () => {
    clearEverything();
}

function clearEverything() {
    num1 = "";
    num2 = "";
    oprtr = "";
    hasOperator = false;
}
numberInput();
