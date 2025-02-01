
//script here

let num1 = 0.0;
let num2 = 0.0;
let num3 = 0.0;
let currentinput = "";
let operator = "";
let newInput = true;

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
    newInput = true;
    currentinput = currentinput+ "1";
    console.log("CI: " + currentinput);
}
calc2.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "2";
    console.log("CI: " + currentinput);
}
calc3.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "3";
    console.log("CI: " + currentinput);
}
calc4.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "4";
    console.log("CI: " + currentinput);
}
calc5.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "5";
    console.log("CI: " + currentinput);
}
calc6.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "6";
    console.log("CI: " + currentinput);
}
calc7.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "7";
    console.log("CI: " + currentinput);
}
calc8.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "8";
    console.log("CI: " + currentinput);
}
calc9.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "9";
    console.log("CI: " + currentinput);
}
calc0.onclick = () => {
    newInput = true;
    currentinput = currentinput+ "0";
    console.log("CI: " + currentinput);
}

calcAdd.onclick = () => {
    if(newInput){   
        num1 = parseFloat(currentinput);
        newInput = false;
        currentinput = "";
    }
    else{
        num1 = num3;
        operate();
    }
    operator = "+";
    console.log(operator);
}
calcSubt.onclick = () => {
    if(firstNum){
    }
    operator = "-";
}
calcMult.onclick = () => {
    if(firstNum){
    }
    operator = "*";
}
calcDiv.onclick = () => {
    if(firstNum){
    }
    operator = "/";
}

calcEql.onclick = () => {
    operate();
}

function operate(){
    switch(operator) {
        case("+"):
        num2 = parseFloat(currentinput);
        num3 = num1 + num2;
        console.log("num3: " + num3);
        break;

        case("-"):
        break;

        case("*"):
        break;
      
        case("/"):
        break;  
    }
    currentinput="";
}