//SELECTORES//
const btn1 = document.querySelector("#btnE1");
const btn2 = document.querySelector("#btnE2");
const btn3 = document.querySelector("#btnE3");
const btn4 = document.querySelector("#btnE4");
const btn5 = document.querySelector("#btnE5");
const btn6 = document.querySelector("#btnE6");
const btn7 = document.querySelector("#btnE7");
const btn8 = document.querySelector("#btnE8");
const btn9 = document.querySelector("#btnE9");
const btn10 = document.querySelector("#btnE10");
const btn11 = document.querySelector("#btnE11");
const btn12 = document.querySelector("#btnE12");
const btn13 = document.querySelector("#btnE13");
const btn14 = document.querySelector("#btnE14");

const resultadoE1 = document.querySelector("#resultadoE1");
const resultadoE2 = document.querySelector("#resultadoE2");
const resultadoE3 = document.querySelector("#resultadoE3");
const resultadoE4 = document.querySelector("#resultadoE4");
const resultadoE5 = document.querySelector("#resultadoE5");
const resultadoE6 = document.querySelector("#resultadoE6");
const resultadoE7 = document.querySelector("#resultadoE7");
const resultadoE8 = document.querySelector("#resultadoE8");
const resultadoE9 = document.querySelector("#resultadoE9");
const resultadoE10 = document.querySelector("#resultadoE10");
const resultadoE11 = document.querySelector("#resultadoE11");
const resultadoE12 = document.querySelector("#resultadoE12");
const resultadoE13 = document.querySelector("#resultadoE13");
const resultadoE14 = document.querySelector("#resultadoE14");



//EVENT LISTENERS//

btn1.addEventListener("click", solucionE1);
btn2.addEventListener("click", solucionE2);
btn3.addEventListener("click", solucionE3);
btn4.addEventListener("click", solucionE4);
btn5.addEventListener("click", solucionE5);
btn6.addEventListener("click", solucionE6);
btn7.addEventListener("click", solucionE7);
btn8.addEventListener("click", solucionE8);
btn9.addEventListener("click", solucionE9);
btn10.addEventListener("click", solucionE10);
btn11.addEventListener("click", solucionE11);
btn12.addEventListener("click", solucionE12);
btn13.addEventListener("click", solucionE13);
btn14.addEventListener("click", solucionE14);

//FUNCIONES GENERALES//
function invertirString(texto) {
    let i = texto.length-1;
    let strInv = "";
    for (i; i >= 0; i--){
        strInv += texto[i];
    }
    return strInv
}

function contarCaracterRepetido(texto,a){
    let i = texto.length-1
    let vecesRepetido = 0;
    for(i; i>=0;i--){
        if (texto[i]==a){
            vecesRepetido++;
        }
    }
    return vecesRepetido;
}

function contarVocales(texto){
    let a = contarCaracterRepetido(texto,"a");
    let e = contarCaracterRepetido(texto,"e");
    let i = contarCaracterRepetido(texto,"i");
    let o = contarCaracterRepetido(texto,"o");
    let u = contarCaracterRepetido(texto,"u");
    let total = a+e+i+o+u;
    return total;
}

function buscarSubCadena(cad,subCad){
    let resultado = ''
    let pos = cad.indexOf(subCad);
    if (pos == -1) {
        resultado = "La subcadena NO esta contenida"
    } else {
        resultado = "La subcadena SI esta contenida"
    }
    return resultado;   
}

function contarPalabras(texto){
    //Borrar todos los espacios al principio y final del string con trim. Guardar en una nueva variable
    let textoMod = texto.trim();
    //Sobrescirbir la variable TextoMod, donde todos los espacios, simples y dobles son sustituidos por un espacio simple.
    //La expresion regular \s+ corresponde a espacios en blancos consecutivos. /g hace la bsuqueda global. 
    textoMod = textoMod.replace(/\s+/g," ")
    //Defino resultado como un array usando la funcion split. Cada token del array es las palabras separadas por espacios en el string textoMod.
    let resultado = textoMod.split(" ").length
    return resultado;
}

function primeraUltimaLetra(texto){
    let textoMod = texto.toLowerCase();
    let i = textoMod.length-1;
    let resultado;

    if (textoMod[0]==textoMod[i]){
        resultado = "La primer letra y la ultima son la misma"
    } else {
        resultado = "La primer letra y la ultima no son la misma"
    }
    return resultado;
}

function buscarMatricula(texto){

    let primerLetra = (texto[0]).toUpperCase();
    let codigoDepartamentos = ["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S"];
    let departamentos = ["Canelones","Maldonado","Rocha","Treinta y Tres","Cerro Largo","Rivera","Artigas","Salto","Paysandu","Rio Negro","Soriano","Colonia","San Jose","Flores","Florida","Lavalleja","Durazno","Tacuarembo","Montevideo"]
    let resultado;
    
    if(texto.length == 7 && texto[3]=="-"){
        if(codigoDepartamentos.indexOf(primerLetra)>-1){
            resultado = departamentos[codigoDepartamentos.indexOf(primerLetra)];
        } else {
            resultado = "El primer numero de la matricula es incorrecto"
        }
    } else {
        resultado = "La matricula ingresada no tiene el formato correcto"
    }
    
    return resultado;    
}

function sustituirCaracter(texto,a){
    let i = texto.length;
    let resultado = "";
    for(let j = 0; j < i; j++){
        if(texto[j]!=a){
            resultado+=texto[j]
        }else{
            resultado+="*"
        }
    }
    return resultado;
}

function primeraLetraMayus(texto){
    let textoMin = (texto.trim()).toLowerCase();
    console.log(textoMin);
    let resultado = ''
    for(let i=0; i < textoMin.length ;i++){
        if(i==0){
            resultado+=(textoMin[0]).toUpperCase();
        }else{
            resultado+=textoMin[i];
        }
    }
    return resultado;
}

function contarMinus(texto){
    let textoMod = texto.trim();
    let i = textoMod.length-1;
    console.log(textoMod.length);
    let resultado = 0;
    
    for(i; i>=0;i--){
        if(textoMod[i]>="a" && textoMod[i]<="z"){
            resultado++;
        }
    }
    return resultado;
}

function contarMayus(texto){
    let textoMod = texto.trim();
    let i = textoMod.length-1;
    console.log(textoMod.length);
    let resultado = 0;
    
    for(i; i>=0;i--){
        if(textoMod[i]>="A" && textoMod[i]<="Z"){
            resultado++;
        }
    }
    return resultado;
}

function palindrome(texto){
    texto = texto.toUpperCase()
    let cant = texto.length
    let iter = 0;
    let check = 0;
    let resultado = ''
    if (cant%2 == 0){
        iter = cant/2
    } else {
        iter = (cant+1)/2
    }
    console.log(iter)
    for (let i = 0; i <iter ; i++){
        let j = texto.length - 1 - i
        if(texto[i]==texto[j]){
            check++
        }
    }
    if (iter==check){
        resultado = "Es un palindromo"
    } else {
        resultado = "No es un palindromo"
    }
    return resultado;
}

function primeraLetraRepetida(texto){
    texto = texto.toUpperCase();
    let contador = 0;
    for (let i=0; i<texto.length;i++){
        if(texto[i]==texto[0]){
            contador++
        }
    }
    return contador
}

//FUNCIONES EJERCICIOS//
function solucionE1() {
    let valor = document.querySelector("#valor1E1").value;
    let resultado = invertirString(valor);
    resultadoE1.innerHTML = resultado;
}

function solucionE2() {
    let valor1 = document.querySelector("#valor1E2").value;
    let valor2 = document.querySelector("#valor2E2").value;
    let resultado = contarCaracterRepetido(valor1,valor2);
    resultadoE2.innerHTML = resultado;
}

function solucionE3() {
    let valor1 = document.querySelector("#valor1E3").value;
    let resultado = contarVocales(valor1);
    resultadoE3.innerHTML = resultado;
}

function solucionE4() {
    let valor1 = document.querySelector("#valor1E4").value;
    let resultado = valor1.toLowerCase();
    resultadoE4.innerHTML = resultado;
}

function solucionE5() {
    let valor1 = document.querySelector("#valor1E5").value;
    let resultado = valor1.toUpperCase();
    resultadoE5.innerHTML = resultado;
}

function solucionE6() {
    let valor1 = document.querySelector("#valor1E6").value;
    let valor2 = document.querySelector("#valor2E6").value;
    let resultado  = buscarSubCadena(valor1,valor2);
    resultadoE6.innerHTML = resultado;
}

function solucionE7() {
    let valor1 = document.querySelector("#valor1E7").value;
    let resultado = contarPalabras(valor1);
    resultadoE7.innerHTML = resultado;
}

function solucionE8() {
    let valor1 = document.querySelector("#valor1E8").value;
    let resultado = primeraUltimaLetra(valor1);
    resultadoE8.innerHTML = resultado;
}

function solucionE9() {
    let valor1 = document.querySelector("#valor1E9").value;
    let resultado = buscarMatricula(valor1);
    resultadoE9.innerHTML = resultado;
}

function solucionE10() {
    console.log("click")
    let valor1 = document.querySelector("#valor1E10").value;
    let valor2 = document.querySelector("#valor2E10").value;
    let resultado = sustituirCaracter(valor1,valor2);
    resultadoE10.innerHTML = resultado;
}

function solucionE11() {
    let valor1 = document.querySelector("#valor1E11").value;
    let resultado = primeraLetraMayus(valor1);
    resultadoE11.innerHTML = resultado;
}

function solucionE12() {
    let valor1 = document.querySelector("#valor1E12").value;
    let mayus = contarMayus(valor1);
    let minus = contarMinus(valor1);
    resultadoE12.innerHTML = `Mayusculas: ${mayus} <br> Minusculas: ${minus}`;
}

function solucionE13() {
    let valor1=document.querySelector("#valor1E13").value;
    let resultado = palindrome(valor1);
    resultadoE13.innerHTML = resultado;
}

function solucionE14() {
    let valor1 = document.querySelector("#valor1E14").value;
    let resultado = primeraLetraRepetida(valor1);
    resultadoE14.innerHTML = resultado;
}