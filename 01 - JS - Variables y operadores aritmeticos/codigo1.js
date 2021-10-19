inicializar();

function inicializar() {
    document.querySelector("#btnE1").addEventListener("click", solucionEjercicio1);
    document.querySelector("#btnE2").addEventListener("click", solucionEjercicio2);
    document.querySelector("#btnE3").addEventListener("click", solucionEjercicio3);
    document.querySelector("#btnE4").addEventListener("click", solucionEjercicio4);
    document.querySelector("#btnE5").addEventListener("click", solucionEjercicio5);
    document.querySelector("#btnE6").addEventListener("click", solucionEjercicio6);
    document.querySelector("#btnE7").addEventListener("click", solucionEjercicio7);
    document.querySelector("#btnE8").addEventListener("click", solucionEjercicio8);
    document.querySelector("#btnE9").addEventListener("click", solucionEjercicio9);
    document.querySelector("#btnE10").addEventListener("click", solucionEjercicio10);
    document.querySelector("#btnE11").addEventListener("click", solucionEjercicio11);
    document.querySelector("#btnE12").addEventListener("click", solucionEjercicio12);
    document.querySelector("#btnE13").addEventListener("click", solucionEjercicio13);
    document.querySelector("#btnE14").addEventListener("click", solucionEjercicio14);
    document.querySelector("#btn1E15").addEventListener("click", calculoEjercicio15);
    document.querySelector("#btn2E15").addEventListener("click", solucionEjercicio15);
    document.querySelector("#btn1E16").addEventListener("click", calculoEjercicio16);
    document.querySelector("#btn2E16").addEventListener("click", solucionEjercicio16);
    document.querySelector("#btnE17").addEventListener("click", solucionEjercicio17);
}

function solucionEjercicio1() {
    let nombre = document.querySelector("#txtNombreE1").value;
    let apellido = document.querySelector("#txtApellidoE1").value;

    let resultado = apellido + ", " + nombre;

    document.querySelector("#resultadoE1").innerHTML = resultado;
}

function solucionEjercicio2(){
    let valor1 = parseInt(document.querySelector("#valor1E2").value);
    let valor2 = parseInt(document.querySelector("#valor2E2").value);

    let resultado = valor1 + valor2;

    document.querySelector("#resultadoE2").innerHTML = resultado;
}

function solucionEjercicio3() {
    let valor1txt = document.querySelector("#valor1E3").value;
    let valor1 = parseInt(valor1txt);
    let valor2txt = document.querySelector("#valor2E3").value;
    let valor2 = parseInt(valor2txt);
    let valor3txt = document.querySelector("#valor3E3").value;
    let valor3 = parseInt(valor3txt);

    let resultado = valor1 + valor2 + valor3;

    document.querySelector("#resultadoE3").innerHTML = resultado;
}

function solucionEjercicio4() {
    let valor1txt = document.querySelector("#valor1E4").value;
    let valor1 = parseInt(valor1txt);
    let valor2txt = document.querySelector("#valor2E4").value;
    let valor2 = parseInt(valor2txt);

    let resultado1 = valor1 + valor2;
    let resultado2 = valor1*valor2;

    document.querySelector("#resultadoE41").innerHTML = "La suma de los dos valores es: " + resultado1;
    document.querySelector("#resultadoE42").innerHTML = "La multiplicacion de los dos valores es: " + resultado2;
}

function solucionEjercicio5() {
    let ladotxt = document.querySelector("#ladoE5").value;
    let lado = parseInt(ladotxt);

    let resultado = lado*lado;

    document.querySelector("#resultadoE5").innerHTML = resultado;
}

function solucionEjercicio6() {
    let valor1txt = document.querySelector("#valor1E6").value;
    let valor1 = parseInt(valor1txt);
    let valor2txt = document.querySelector("#valor2E6").value;
    let valor2 = parseInt(valor2txt);

    let resultado = valor1/valor2;

    document.querySelector("#resultadoE6").innerHTML = resultado;
}

function solucionEjercicio7() {
    let valor1txt = document.querySelector("#valor1E7").value;
    let valor1 = parseInt(valor1txt);
    let valor2txt = document.querySelector("#valor2E7").value;
    let valor2 = parseInt(valor2txt);
    
    let resultado = valor1%valor2;

    document.querySelector("#resultadoE7").innerHTML = resultado;
}

function solucionEjercicio8() {
    let valor1txt = document.querySelector("#valor1E8").value;
    let valor2txt = document.querySelector("#valor2E8").value;
    let valor3txt = document.querySelector("#valor3E8").value;
    let valor1 = parseInt(valor1txt);
    let valor2 = parseInt(valor2txt);
    let valor3 = parseInt(valor3txt);

    let resultado = valor1 + valor2 - valor3;

    document.querySelector("#resultadoE8").innerHTML = resultado;
}

function solucionEjercicio9() {
    let valor1txt = document.querySelector("#valor1E9").value;
    let valor2txt = document.querySelector("#valor2E9").value;
    let valor3txt = document.querySelector("#valor3E9").value;
    let valor1 = parseInt(valor1txt);
    let valor2 = parseInt(valor2txt);
    let valor3 = parseInt(valor3txt);

    let resultado = valor1*valor1 - (valor2 + valor3);

    document.querySelector("#resultadoE9").innerHTML = resultado;
}

function solucionEjercicio10() {
    let valor1txt = document.querySelector("#valor1E10").value;
    let valor2txt = document.querySelector("#valor2E10").value;
    let valor1 = parseInt(valor1txt);
    let valor2 = parseInt(valor2txt);

    let resultado = valor1 + valor1*(valor2/100);

    document.querySelector("#resultadoE10").innerHTML = resultado;
}

function solucionEjercicio11() {
    let valor1txt = document.querySelector("#valor1E11").value;
    let valor1 = parseInt(valor1txt);
    
    let resultado = 1.22*valor1;

    document.querySelector("#resultadoE11").innerHTML = resultado;
}

function solucionEjercicio12() {
    let masatxt = document.querySelector("#masa").value;
    let alturatxt = document.querySelector("#altura").value;
    let masa = parseInt(masatxt);
    let altura = parseFloat(alturatxt);

    let resultado = masa/(altura*altura);

    document.querySelector("#resultadoE12").innerHTML = resultado;
}

let contadorE13 = 0;
function solucionEjercicio13() {
    contadorE13++;

    let resultado = contadorE13;
    document.querySelector("#resultadoE13").innerHTML = resultado;
}

let contadorE14 = 0;
function solucionEjercicio14() {
    contadorE13 = contadorE13 + 3;

    let resultado = contadorE13;
    document.querySelector("#resultadoE14").innerHTML = resultado;
}

let contadorE15 = 0;
let resuladoE15 = null;
function calculoEjercicio15(){
    let valortxt = document.querySelector("#valorE15").value;
    let valor = parseInt(valortxt);

    contadorE15 = contadorE15 + valor;
    resultadoE15 = contadorE15;
}

function solucionEjercicio15() {
    document.querySelector("#resultadoE15").innerHTML = resultadoE15;
}

let resultadoE16 = null;
function calculoEjercicio16() {
    let valor1 = parseInt(document.querySelector("#valor1E16").value);
    let valor2 = parseInt(document.querySelector("#valor2E16").value);
    let valor3 = parseInt(document.querySelector("#valor3E16").value);

    resultadoE16 = 3*valor1 + valor2 + 0*valor3;
}

function solucionEjercicio16() {
    document.querySelector("#resultadoE16").innerHTML = resultadoE16;
}

function solucionEjercicio17() {
    let N60 = parseInt(document.querySelector("#valorE17").value);
    let TF = 50 + (N60 -40)/4;
    let C = (TF - 32)/1.8;
    let TC = 10 + (N60 - 40)/7;

    let resultado = "TF = " + TF + " <br> C = " + C + " <br> TC = " + TC;

    document.querySelector("#resultadoE17").innerHTML = resultado;
}