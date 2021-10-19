//SELECTORES//
const btn1E1 = document.querySelector("#btn1E1");
const btn2E1 = document.querySelector("#btn2E1");
const btn1E2 = document.querySelector("#btn1E2");
const btn2E2 = document.querySelector("#btn2E2");
const btn1E3 = document.querySelector("#btn1E3");
const btn2E3 = document.querySelector("#btn2E3");
const btn1E4 = document.querySelector("#btn1E4");
const btn2E4 = document.querySelector("#btn2E4");
const btn1E5 = document.querySelector("#btn1E5");
const btn2E5 = document.querySelector("#btn2E5");
const btnE6 = document.querySelector("#btnE6");
const btn1E7 = document.querySelector("#btn1E7");
const btn2E7 = document.querySelector("#btn2E7");
const btn3E7 = document.querySelector("#btn3E7");
const btnE8 = document.querySelector("#btnE8");
const btnE9 = document.querySelector("#btnE9");

const resultado1E1 = document.querySelector("#resultado1E1");
const resultado2E1 = document.querySelector("#resultado2E1");
const resultado1E2 = document.querySelector("#resultado1E2");
const resultado2E2 = document.querySelector("#resultado2E2");
const resultadoE3 = document.querySelector("#resultadoE3");
const resultadoE4 = document.querySelector("#resultadoE4");
const resultadoE5 = document.querySelector("#resultadoE5");
const resultadoE6 = document.querySelector("#resultadoE6");
const resultado1E7 = document.querySelector("#resultado1E7");
const resultado2E7 = document.querySelector("#resultado2E7");
const resultado3E7 = document.querySelector("#resultado3E7");
const resultadoE8 = document.querySelector("#resultadoE8");
const resultadoE9 = document.querySelector("#resultadoE9");


//EVENT LISTENERS//
btn1E1.addEventListener("click", solucion1E1);
btn2E1.addEventListener("click", solucion2E1);
btn1E2.addEventListener("click", solucion1E2);
btn2E2.addEventListener("click", solucion2E2);
btn1E3.addEventListener("click", solucion1E3);
btn2E3.addEventListener("click", solucion2E3);
btn1E4.addEventListener("click", solucion1E4);
btn2E4.addEventListener("click", solucion2E4);
btn1E5.addEventListener("click", solucion1E5);
btn2E5.addEventListener("click", solucion2E5);
btnE6.addEventListener("click", solucionE6);
btn1E7.addEventListener("click", solucion1E7);
btn2E7.addEventListener("click", solucion2E7);
btn3E7.addEventListener("click", solucion3E7);
btnE8.addEventListener("click", solucionE8);
btnE9.addEventListener("click", solucionE9);


//FUNCIONES GENERALES//
function generarArray(array,input){
    array.push(input);
    console.log(array)
    return array
}

function contarLetrasArray(array){
    let arrayContador = [];
    for(let i = 0; i < array.length; i++){
        arrayContador.push(array[i].length)
    }
    return arrayContador;
}

function buscarMayor(array){
    let mayor = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++){
        if(array[i]>= mayor){
            mayor = array[i];
        }
    }
    return mayor
}

function calcularPromedioArray(array){
    let suma = 0
    for (let i = 0; i < array.length;  i++){
        suma += array[i];
    }
    return suma/(array.length);
}

function arrayMayores20(array){
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]>20){
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function ingresarAlias(array,alias){
    if (array.indexOf(alias) == -1){
        array.push(alias);
    }
    return array;
}

function mostrarArray(array){
    let resultado = ''
    if( Array.isArray(array)){
        for (elements of array){
            resultado += elements + "<br>"
        }
    } else {
        resultado = "No existe"
    }
    return resultado
}

function buscarPorIndice(array,index){
    return `En la posicion ${index} se encuentra: ${array[index]} <p>Cantidad de elementos: ${array.length}</p>`
}

function buscarReemplazar(array,viejo,nuevo){
    let check = 0;
    for (let i = 0; i<array.length;i++){
        if (array[i] == viejo){
            array[i]=nuevo;
            check++
        }
    }
    if (check > 0){
        return array
    } else {
        return "No existe ese elemento"
    }
}

function fibonacci(largo){
    let array = [1,1]
    for(let i = 2; i< largo; i++){
        array.push(array[i-2]+array[i-1]);
    }
    return array
}

function fibonacci2(tope){
    let array = [1,1]
    let i =2;
    while (array[i-1]<= tope){
        array.push(array[i-2]+array[i-1]);
        i++;
    }
    return array
}

//FUNCIONES SOLUCIONES//
let arrayE1 = []
function solucion1E1() {
    console.log("click")
    let valor1 = document.querySelector("#valor1E1").value;
    resultado1E1.innerHTML = generarArray(arrayE1,valor1);
    btn2E1.disabled = false
}

function solucion2E1() {
    resultado2E1.innerHTML = contarLetrasArray(arrayE1);
}

let arrayE2 = []
function solucion1E2() {
    let valor1 = document.querySelector("#valor1E2").value;
    resultado1E2.innerHTML = generarArray(arrayE2, valor1);
    btn2E2.disabled = false
}

function solucion2E2() {
    resultado2E2.innerHTML = buscarMayor(arrayE2);
}

let arrayE3 = []
function solucion1E3() {
    let valor1 = document.querySelector("#valor1E3").value;
    document.querySelector("#valor1E3").value=''
    generarArray(arrayE3,valor1);
    btn2E3.disabled = false;
}

function solucion2E3() {
    resultadoE3.innerHTML = arrayE3;
}

let arrayE4 = []
function solucion1E4() {
    let valor1 = parseFloat(document.querySelector("#valor1E4").value);
    document.querySelector("#valor1E4").value=''
    generarArray(arrayE4,valor1);
    btn2E4.disabled = false;
}

function solucion2E4() {
    resultadoE4.innerHTML = calcularPromedioArray(arrayE4);
}

let arrayE5 = []
function solucion1E5() {
    let valor1 = parseFloat(document.querySelector("#valor1E5").value);
    document.querySelector("#valor1E5").value=''
    generarArray(arrayE5,valor1);
    btn2E5.disabled = false;
}

function solucion2E5() {
    resultadoE5.innerHTML = arrayMayores20(arrayE5);
}

let arrayE6 = []
function solucionE6() {
    let valor1 = document.querySelector("#valor1E6").value;
    resultadoE6.innerHTML = ingresarAlias(arrayE6,valor1);
}

let arrayE7 = []
function solucion1E7() {
    let valor1 = document.querySelector("#valor1E7").value;
    resultado1E7.innerHTML = mostrarArray(generarArray(arrayE7,valor1));
}

function solucion2E7() {
    resultado2E7.innerHTML = buscarPorIndice(arrayE7,document.querySelector("#valor2E7").value);
}

function solucion3E7() {
    resultado3E7.innerHTML = mostrarArray(buscarReemplazar(arrayE7,document.querySelector("#valor3E7").value,document.querySelector("#valor4E7").value));
}

function solucionE8() {
    resultadoE8.innerHTML = mostrarArray(fibonacci(20));
}

function solucionE9() {
    resultadoE9.innerHTML = mostrarArray(fibonacci2(1000));
}