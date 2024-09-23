const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const opc = document.getElementById("opcao");
const calc = document.getElementById("calc");

function somar(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function div(num1,num2){
    if(num1 == 0 || num2 ==0){
        alert("Impossível dividir por 0")
    }
    return num1/num2;
}
function mult(num1,num2){
    return num1 * num2;
}
calc.addEventListener("click"),()=>{

    const valor1 = parseFloat(num1.value);
    
}

