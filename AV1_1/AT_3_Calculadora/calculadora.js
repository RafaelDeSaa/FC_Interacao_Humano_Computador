function adicao(num1, num2){
    return num1 + num2;
}
function subtracao(num1, num2){
    return num1 - num2;
}
function multiplicacao(num1, num2){
    return num1 * num2;
}
function divisao(num1, num2){
    if(num1 ===0 || num2 ===0){
        return "Impossível dividir por 0"
    }
    return num1/num2;
}
function numeroParOuImpar(num){
    if(num % 2 === 0){
        return "Número par";
    }else{
        return "Numero é impar"
    }
}
function intervaloNumero(num1, num2){
    soma = 1;
    while(num1 < num2){
        num1 ++
        soma = soma + num1;
    }
    return soma;
}

function fatorial(num){
    if(num <= 1){
        return 1;
    }
    return num * fatorial(num -1);
}

let soma = adicao(5,3)
console.log(soma)

let sub = subtracao(10,5)
console.log(sub)

let mult = multiplicacao(3,5)
console.log(mult)

let div1 = divisao(10,5)
console.log(div1)
let div2 = divisao(0.2)
console.çog(div2)
