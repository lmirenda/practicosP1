// Selectores//
const btnE1 = document.querySelector("#btnE1");
const btnE2 = document.querySelector("#btnE2");
const btnE3 = document.querySelector("#btnE3");
const btnE4 = document.querySelector("#btnE4");
const btnE5 = document.querySelector("#btnE5");
const btnE6 = document.querySelector("#btnE6");
const btnE7 = document.querySelector("#btnE7");
const btnE8 = document.querySelector("#btnE8");

const resultadoE1 = document.querySelector("#resultadoE1");
const resultadoE2 = document.querySelector("#resultadoE2");
const resultadoE3 = document.querySelector("#resultadoE3");
const resultadoE4 = document.querySelector("#resultadoE4");
const resultadoE5 = document.querySelector("#resultadoE5");
const resultadoE6 = document.querySelector("#resultadoE6");
const resultadoE7 = document.querySelector("#resultadoE7");
const resultadoE8 = document.querySelector("#resultadoE8");

//Event listeners//
btnE1.addEventListener("click", solucionEjercicio1);
btnE2.addEventListener("click", solucionEjercicio2);
btnE3.addEventListener("click", solucionEjercicio3);
btnE4.addEventListener("click", solucionEjercicio4);
btnE5.addEventListener("click", solucionEjercicio5);
btnE6.addEventListener("click", solucionEjercicio6);
btnE7.addEventListener("click", solucionEjercicio7);
btnE8.addEventListener("click", solucionEjercicio8);

//Funciones//

function buscarMayor(n1,n2) {
    let mayor;
    if (n1>=n2){
        mayor = n1;
    } else {
        mayor = n2;
    }
    return mayor;
    console.log(mayor)
}
function buscarMenor(n1,n2) {
    let menor;
    if (n1>=n2){
        menor = n2;
    } else {
        menor = n1;
    }
    return menor;
}

//Ejercicio 1
function numerosParesComprendidos(n1,n2) {
    let mayor = buscarMayor(n1,n2);
    let menor = buscarMenor(n1,n2);
    let resultado = 0;

    for (menor; menor < mayor+1; menor++) {
        if (menor%2 === 0) {
            resultado ++;
        }
    }
    return resultado;
}

//Ejercicio 2
function esMayor(edad, tope) {
    let check =''
    if (edad>tope) {
        check = "es mayor";
    } else {
        check = "no es mayor";
    }
    return check;
}

//Ejercicio 3
function esBisiesto(n){
    if (n%4===0){
       if (n%100 === 0 && n%400!=0){
           return false;
       } else if (n%400 === 0){
           return true;
       } else {
           return true;
       }
    } else {
        return false;
    }
}

//Ejercicio 4
function AreaTriangulo(b,h) {
    let area = ''
    if (isNaN(b)||isNaN(h)|| b<0 || h<0){
        return -1;
    } else {
        area = (b*h)/2;
        return area;
    }
}

//Ejercicio 5
function AreaRectangulo(ancho, alto){
    let area;
    if (isNaN(alto)||isNaN(ancho)||alto < 0 || ancho < 0){
        return -1;
    } else {
        area = ancho*alto
        return area;
    }
}

//Ejercicio 6
function temeperaturaCaF(C){
    let F =''
    if (isNaN(C)) {
        return "Debe ingresar un numero para la temperatura"
    } else if (C < -273){
        return "La temperatura debe ser mayor a -273 C"
    } else {
        F = 1.8*C+32
        return F
    }
}

//Ejercicio 7
function temperaturaFto(F,temp){
    let T = "";
    if (isNaN(F) || F < -459.67){
        return "La temperatura debe ser un numero mayor a -459.67"
    } else {
        switch (temp) {
            case "Celsius":
                T = (F-32)/1.8
                break;
            case "Kelvin":
                T = (F+459.67)/1.8
                break;
            case "Rankine":
                T = F + 459.67;
                break;
            case "Reaumur":
                T = (F-32)/2.25;
                break;
            default:
                T = "No se selecciono un metodo"
                break;
        } return T;
    }
}

//Ejercicio 8 
function exponencial(a,n) {
    let resultado = 1;
    if (isNaN(a) || isNaN(n)) {
        resultado = "La base y el exponenete deben ser numeros"
    }else if (n==0) {
        resutlado = 1;
    } else if (n<0) {
        for (n; n < 0; n++){
            resultado *= a;
        }
        resultado = 1/resultado;
    } else {
        for (let i = 0; i < n; i++){
            resultado *= a;
        }
    }
    return resultado;
}

// Funciones para probar los ejercicios //

function solucionEjercicio1() {
    let valor1 = parseInt(document.querySelector("#valor1E1").value);
    let valor2 = parseInt(document.querySelector("#valor2E1").value);

    let resultado = numerosParesComprendidos(valor1, valor2);
    resultadoE1.innerHTML = resultado;
}

function solucionEjercicio2() {
    let valor1 = parseInt(document.querySelector("#valor1E2").value);
    let valor2 = parseInt(document.querySelector("#valor2E2").value);

    let resultado = esMayor(valor1,valor2);
    resultadoE2.innerHTML = resultado;
}

function solucionEjercicio3() {
    let ano = parseInt(document.querySelector("#valor1E3").value);
    let resultado = esBisiesto(ano);
    resultadoE3.innerHTML = resultado;
}

function solucionEjercicio4() {
    let valor1 = parseInt(document.querySelector("#valor1E4").value);
    let valor2 = parseInt(document.querySelector("#valor2E4").value);

    let resultado = AreaTriangulo(valor1, valor2);
    resultadoE4.innerHTML = resultado;
}

function solucionEjercicio5() {
    let valor1 = parseInt(document.querySelector("#valor1E5").value);
    let valor2 = parseInt(document.querySelector("#valor2E5").value);

    let resultado = AreaRectangulo(valor1,valor2);
    resultadoE5.innerHTML = resultado;
}

function solucionEjercicio6() {
    let valor1 = parseInt(document.querySelector("#valor1E6").value);

    let resultado = temeperaturaCaF(valor1);
    resultadoE6.innerHTML = resultado;
}

function solucionEjercicio7() {
    let valor1 = parseFloat(document.querySelector("#valor1E7").value);
    let valor2 = document.querySelector("#valor2E7").value;

    let resultado = temperaturaFto(valor1,valor2);
    resultadoE7.innerHTML = resultado;
}

function solucionEjercicio8() {
    let valor1 = parseFloat(document.querySelector("#valor1E8").value);
    let valor2 = parseInt(document.querySelector("#valor2E8").value);

    let resultado = exponencial(valor1,valor2);
    resultadoE8.innerHTML = resultado;
}