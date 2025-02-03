
//scripts here

const numberButton = document.querySelectorAll(".numbers");
const operatorButton = document.querySelectorAll(".operators");
const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let num1 = "";
let num2 = "";
let result = null;
let oprtr = "";
let useResult = false;

function numberInput() {
    numberButton.forEach((button) => {
        button.onclick = () => {
            if(oprtr == "=" & result != null) {
                num1 = "";
                num1 += button.textContent;
                console.log("num1 " + num1);
                operations();
            }
            else if(oprtr == "" ) {
                num1 += button.textContent;
                console.log("num1 " + num1);
                operations();
            }
            else {
                num2 += button.textContent;
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
    if(num1 != "" & num2 != "") {
        result = operate(num1, num2, oprtr);
        num1 = String(result);
        num2 = "";
        oprtr = "=";
    }
    else if(num1 != "" & num2 == "") {
        result = parseFloat(num1);
    }
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
