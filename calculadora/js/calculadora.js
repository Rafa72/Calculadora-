let numero = document.querySelectorAll(".botaoNumero");
let igual = document.querySelector("#igual");
let mais = document.querySelector("#soma");
let menos = document.querySelector("#subtracao");
let divide = document.querySelector("#divisao");
let multiplica = document.querySelector("#multiplica");
let apaga = document.querySelector("#apaga");
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let resultado = document.querySelector("#resultado");
let foco = n1;
let sinal;
for(let i = 0; i < numero.length; i++){
    numero[i].onclick = function(){
        foco.value += numero[i].value;
    }
}
apaga.onclick = function(){
    foco.value = ""
}
n1.onfocus = function() {
    foco = n1;
}
n2.onfocus = function(){
    foco = n2;
}

mais.onclick = function(){
    sinal = "+";
    document.querySelector("#operador").innerHTML = sinal;
}
menos.onclick = function(){
    sinal = "-";
    document.querySelector("#operador").innerHTML = sinal;
}
divide.onclick = function(){
    sinal = "/";
    document.querySelector("#operador").innerHTML = sinal;
}
multiplica.onclick = function(){
    sinal = "*";
    document.querySelector("#operador").innerHTML = sinal;
}
igual.onclick = function(){
    let result = 0;
    if(sinal == "+"){
        result = parseInt(n1.value) + parseInt(n2.value); 
        resultado.value = result; 
    } else if(sinal == "-"){
        result = parseInt(n1.value) - parseInt(n2.value); 
        resultado.value = result; 
    } else if(sinal == "/"){
        result = parseInt(n1.value) / parseInt(n2.value); 
        resultado.value = result; 
    } else if(sinal == "*"){ 
        result = parseInt(n1.value) * parseInt(n2.value); 
        resultado.value = result; 
    } else{
        alert("ESCOLHA A OPERAÇÃO, SEU ENERGÚMENO")
    }
}
