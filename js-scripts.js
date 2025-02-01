
//script here

let num1 = 0.0;
let num2 = 0.0;
let num3 = 0.0;
let currentinput = "";
let operator = "";
let firstNum = true;

const calc1 = document.getElementById("num1");
const calc2 = document.getElementById("num2");
const calc3 = document.getElementById("num3");
const calc4 = document.getElementById("num4");
const calc5 = document.getElementById("num5");
const calc6 = document.getElementById("num6");
const calc7 = document.getElementById("num7");
const calc8 = document.getElementById("num8");
const calc9 = document.getElementById("num9");
const calc0 = document.getElementById("num0");
const calcAdd = document.getElementById("toAdd");
const calcSubt = document.getElementById("toSubt");
const calcMult = document.getElementById("toMult");
const calcDiv = document.getElementById("toDiv");
const calcEql = document.getElementById("toEql");

calc1.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "1";
    console.log(currentinput);
}
calc2.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "2";
    console.log(currentinput);
}
calc3.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "3";
    console.log(currentinput);
}
calc4.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "4";
    console.log(currentinput);
}
calc5.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "5";
    console.log(currentinput);
}
calc6.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "6";
    console.log(currentinput);
}
calc7.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "7";
    console.log(currentinput);
}
calc8.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "8";
    console.log(currentinput);
}
calc9.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "9";
    console.log(currentinput);
}
calc0.onclick = () => {
    currentinput = ""
    currentinput = currentinput+ "0";
    console.log(currentinput);
}

calcAdd.onclick = () => {
    if(firstNum){
        num1 = 0;
        num1 += parseFloat(currentinput);
        currentinput = "";
        console.log("num1 " + num1);
        firstNum = false;
    }
    operator = "+";
}
calcSubt.onclick = () => {
    if(firstNum){
        num1 = 0;
        num1 += parseFloat(currentinput);
        currentinput = "";
        console.log("num1 " + num1);
        firstNum = false;
    }
    operator = "-";
}
calcMult.onclick = () => {
    if(firstNum){
        num1 = 0;
        num1 += parseFloat(currentinput);
        currentinput = "";
        console.log("num1 " + num1);
        firstNum = false;
    }
    operator = "*";
}
calcDiv.onclick = () => {
    if(firstNum){
        num1 = 0;
        num1 += parseFloat(currentinput);
        currentinput = "";
        console.log("num1 " + num1);
        firstNum = false;
    }
    operator = "/";
}

calcEql.onclick = () => {
        switch(operator) {
        case("+"):
        num2 = parseFloat(currentinput);
        console.log("num2 " + num2);
        num3 = num1 + num2;
        console.log(num3);
        break;

        case("-"):
        num2 = parseFloat(currentinput);
        console.log("num2 " + num2);
        num3 = num1 - num2;
        currentinput = num3;
        console.log(num3);
        break;

        case("*"):
        num2 = parseFloat(currentinput);
        console.log("num2 " + num2);
        num3 = num1 * num2;
        currentinput = num3;
        console.log(num3);
        break;
      
        case("/"):
        num2 = parseFloat(currentinput);
        console.log("num2 " + num2);
        num3 = num1 / num2;
        currentinput = num3;
        console.log(num3);
        break;  
    }
    firstNum = true;
}