
//script here

let num1 = "";
let num2 = "";
let num3 = 0.0;
let operator = "";
let firstNum = true;

const btn1 = document.getElementById("num1");
const btn2 = document.getElementById("num2");
const btn3 = document.getElementById("num3");
const btn4 = document.getElementById("num4");
const btn5 = document.getElementById("num5");
const btn6 = document.getElementById("num6");
const btn7 = document.getElementById("num7");
const btn8 = document.getElementById("num8");
const btn9 = document.getElementById("num9");
const btn0 = document.getElementById("num0");
const calcAdd = document.getElementById("add");
const calcSubt = document.getElementById("subtract");
const calcMult = document.getElementById("multiply");
const calcDiv = document.getElementById("divide");
const calcEql = document.getElementById("equals");
const clearEverything = document.getElementById("clear");


btn1.onclick = () => {
    if(firstNum){     num1 += "1";    console.log("num1: " + num1);}
    else {              num2 += "1";    console.log("num2: " + num2);}
}

btn2.onclick = () => {
    if(firstNum){     num1 += "2";    console.log("num1: " + num1);}
    else {              num2 += "2";    console.log("num2: " + num2);}
}

btn3.onclick = () => {
    if(firstNum){     num1 += "3";    console.log("num1: " + num1);}
    else {              num2 += "3";    console.log("num2: " + num2);}
}

btn4.onclick = () => {
    if(firstNum){     num1 += "4";    console.log("num1: " + num1);}
    else {              num2 += "4";    console.log("num2: " + num2);}
}

btn5.onclick = () => {
    if(firstNum){     num1 += "5";    console.log("num1: " + num1);}
    else {              num2 += "5";    console.log("num2: " + num2);}
}

btn6.onclick = () => {
    if(firstNum){     num1 += "6";    console.log("num1: " + num1);}
    else {              num2 += "6";    console.log("num2: " + num2);}
}

btn7.onclick = () => {
    if(firstNum){     num1 += "7";    console.log("num1: " + num1);}
    else {              num2 += "7";    console.log("num2: " + num2);}
}

btn8.onclick = () => {
    if(firstNum){     num1 += "8";    console.log("num1: " + num1);}
    else {              num2 += "8";    console.log("num2: " + num2);}
}

btn9.onclick = () => {
    if(firstNum){     num1 += "9";    console.log("num1: " + num1);}
    else {              num2 += "9";    console.log("num2: " + num2);}
}

btn0.onclick = () => {
    if(firstNum){     num1 += "0";    console.log("num1: " + num1);}
    else {              num2 += "0";    console.log("num2: " + num2);}
}

calcAdd.onclick = () => {
    operator = "+"
    firstNum = false;
}

calcSubt.onclick = () => {
    operator = "-"
    firstNum = false;
}

calcMult.onclick = () => {
    operator = "x"
    firstNum = false;
}

calcDiv.onclick = () => {
    operator = "/"
    firstNum = false;
}
calcEql.onclick = () => {
    if(num2 == "0" & operator == "/") {
        alert("NO.");
    }
    else {
        toCalc();
    }
}

function toCalc() {
    switch(operator) {
        case("+"):
        num3 = parseFloat(num1) + parseFloat(num2);
        console.log("Equals: " + num3);
        break;

        case("-"):
        num3 = parseFloat(num1) - parseFloat(num2);
        console.log("Equals: " + num3);
        break;

        case("x"):
        num3 = parseFloat(num1) * parseFloat(num2);
        console.log("Equals: " + num3);
        break;

        case("/"):
        num3 = parseFloat(num1) / parseFloat(num2);
        console.log("Equals: " + num3);
        break;
    }
}