inicializar()

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
    document.querySelector("#btnE15").addEventListener("click", solucionEjercicio15);
    document.querySelector("#btnE15").addEventListener("click", solucionEjercicio15);
    document.querySelector("#btnE16").addEventListener("click", solucionEjercicio16);
    document.querySelector("#btnE17").addEventListener("click", solucionEjercicio17);
    document.querySelector("#btnE18").addEventListener("click", solucionEjercicio18);
    document.querySelector("#btnE19").addEventListener("click", solucionEjercicio19);
    document.querySelector("#btnE20").addEventListener("click", solucionEjercicio20);
    document.querySelector("#btnE21").addEventListener("click", solucionEjercicio21);
    document.querySelector("#btnE22").addEventListener("click", solucionEjercicio22);
    document.querySelector("#btnE23").addEventListener("click", solucionEjercicio23);
    document.querySelector("#btnE24").addEventListener("click", solucionEjercicio24);
    document.querySelector("#btn1E25").addEventListener("click", solucion1Ejercicio25);
    document.querySelector("#btn2E25").addEventListener("click", solucion2Ejercicio25);
    document.querySelector("#btnE26").addEventListener("click", solucionEjercicio26);
    document.querySelector("#btn1E27").addEventListener("click", solucion1Ejercicio27);
    document.querySelector("#btn2E27").addEventListener("click", solucion2Ejercicio27);
    document.querySelector("#btn3E27").addEventListener("click", solucion3Ejercicio27);
    document.querySelector("#btn4E27").addEventListener("click", solucion4Ejercicio27);
    document.querySelector("#btnE28").addEventListener("click", solucionEjercicio28);
    document.querySelector("#btn2E28").addEventListener("click", resetEjercicio28);
   /* document.querySelector("#btn1E30").addEventListener("click", Elegir1Ejercicio30);
    document.querySelector("#btn2E30").addEventListener("click", Elegir2Ejercicio30);*/
}

function solucionEjercicio1() {
    let valor = parseFloat(document.querySelector("#valorE1").value);
    let resultado;
    
    if (valor > 0){
        resultado = "Positivo";
    } else if (valor < 0){
        resultado = "Negativo";
    } else {
        resultado = "Cero";
    }
    
    document.querySelector("#resultadoE1").innerHTML = resultado;
}

function solucionEjercicio2() {
    let valor = parseFloat(document.querySelector("#valorE2").value);
    let resultado;

    if (valor > 10) {
        resultado = "Mayor que diez";
        alert(resultado);
    } else {
        resultado = "Menor o igual que diez";
    }
}

function solucionEjercicio3() {
    let valor = parseFloat(document.querySelector("#valorE3").value);
    let resultado;

    if (valor > 20) {
        resultado = "Es mayor que 20";
    } else {
        resultado = "Es menor o igual que 20";
    }
    alert(resultado);
}

function solucionEjercicio4() {
    let valor = parseFloat(document.querySelector("#valorE4").value);
    let resultado = valor;

    if (valor < 0){
        resultado = -valor;
    }

    document.querySelector("#resultadoE4").innerHTML = resultado;
}

function solucionEjercicio5() {
    let valor = parseInt(document.querySelector("#valorE5").value);
    let resultado;

    if (valor > 10 && valor < 20){
        resultado = "El valor es mayor que 10 y menor que 20";
    } else {
        resultado = "El valor no esta dentro del rango";
    }
    document.querySelector("#resultadoE5").innerHTML = resultado;
}

function solucionEjercicio6() {
    let valor = parseInt(document.querySelector("#valorE6").value);
    let resultado;

    let multiploTres = valor%3;
    let multiploSiete = valor%7;

    if (multiploSiete === 0 && multiploTres === 0){
        resultado = "Es multiplo de 3 y 7 simultaneamente";
    } else if (multiploTres === 0) {
        resultado = "Es multiplo de 3";
    } else if (multiploSiete === 0) {
        resultado = "Es multiplo de 7";
    } else {
        resultado = "No es multiplo de 3 ni 7";
    }

    document.querySelector("#resultadoE6").innerHTML = resultado;
}

function solucionEjercicio7() {
    let valor = parseFloat(document.querySelector("#valorE7").value);
    let resultado;

    if (valor < -20 || valor > 20){
        resultado = "CUMPLE"
    } else {
        resultado = "NO CUMPLE"
    }
    alert(resultado);
}

function solucionEjercicio8() {
    let valor = parseFloat(document.querySelector("#valorE8").value);
    let resultado;

    if (valor > 30){
        resultado = "Es mayor que 30"
    } else if (valor < 10) {
        resultado = "Es menor que 10"
    } else {
        resultado = "Esta entre 10 y 30"
    }
    alert(resultado);
}

function solucionEjercicio9() {
    let diatxt = document.querySelector("#valor1E9").value;
    let dia = diatxt.toLowerCase();
    let temperatura = parseFloat(document.querySelector("#valor2E9").value);
    var diastrabajo = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

    let trabajo;
    let abrigo;

    if (dia == "domingo"){
        trabajo = "Quedarse en casa, hoy no trabaja"
    } else if ( diastrabajo.includes(dia)){
        trabajo = "Ir al trabajo"
    } else {
        trabajo = "No se ingreso correctamente el dia"
    }

    if (temperatura > 20){
        abrigo = "Ponerse ropa comoda"
    } else if (temperatura < 10) {
        abrigo = "Abrigarse mucho"
    } else {
        abrigo = "Abrigo moderado"
    }

    document.querySelector("#resultadoE9").innerHTML = `Levantarse <br> ${abrigo} <br> ${trabajo}`
}

function solucionEjercicio10() {
    let valor1 = parseFloat(document.querySelector("#valor1E10").value);
    let valor2 = parseFloat(document.querySelector("#valor2E10").value);
    let resultado;

    if (valor1 > valor2) {
        resultado = valor1 - valor2;
    } else {
        resultado = valor2 - valor1;
    }
    document.querySelector("#resultadoE10").innerHTML = resultado;
}

function solucionEjercicio11() {
    let valor1 = parseFloat(document.querySelector("#valor1E11").value);
    let valor2 = parseFloat(document.querySelector("#valor2E11").value);
    let valor3txt = document.querySelector("#valor3E11").value;
    let valor3 = valor3txt.toUpperCase();
    let resultado;

    if (valor3 == "S"){
        resultado = valor1 + valor2;
    }
    else if (valor3 == "R"){
        resultado = valor1 - valor2;
    }
    else if (valor3 == "M"){
        resultado = valor1*valor2;
    }
    else if (valor3 == "D"){
        resultado = valor1/valor2;
    } else {
        resultado = "No se ingreso la operacion correctamente"
    }
    document.querySelector("#resultadoE11").innerHTML = resultado;
}

function solucionEjercicio12() {
    let valortxt = document.querySelector("#valor1E12").value;
    let valor = valortxt.toUpperCase(); 
    let resultado;
    var vocales = ["A", "E", "I", "O", "U"];

    if (vocales.includes(valor)){
        resultado = "Es vocal";
    }
    else {
        resultado = "No es vocal";
    }
    document.querySelector("#resultadoE12").innerHTML = resultado;
}

function solucionEjercicio13() {
    let valor1 = parseInt(document.querySelector("#valor1E13").value);
    let valor2 = parseInt(document.querySelector("#valor2E13").value);
    let check = valor2%valor1;

    if (check === 0){
        resultado = `${valor1} es multiplo de ${valor2}`;
    } else {
        resultado = `${valor1} NO es multiplo de ${valor2}`
    }

    document.querySelector("#resultadoE13").innerHTML = resultado;
}

function solucionEjercicio14() {
    let valor1 = parseInt(document.querySelector("#valor1E14").value);
    let valor2txt = document.querySelector("#valor2E14").value;
    let valor2 = valor2txt.toLowerCase();
    let resultado;

    if (valor2 == "s"){
        valor1 = 2*valor1;
    }

    if (valor1 >= 60000){
        resultado = "Destino lejano: Europa";
    } else if (valor1 >= 30000){
        resultado = "Destino intermedio: America del Norte";
    } else if (valor1 >= 15000){
        resultado = "Destino cercano: America del Sur";
    } else {
        resultado = "Usted no dispone de las millas suficientes";
    }
    
    document.querySelector("#resultadoE14").innerHTML = resultado;
}

function solucionEjercicio15() {
    let valortxt = document.querySelector("#valor1E15").value;
    let valor = valortxt.toUpperCase();
    var codigos =   ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"]
    var departamentos = ["Canelones", "Maldonado", "Rocha", "Treinta y Tres", "Cerro largo", "Rivera", "Artigas", "Salto", "Paysandu", "Rio negro", "Soriano", "Colonia"," San jose", "Flores", "Florida", "Lavalleja", "Durazno", "Tacuarembo", "Montevideo"]

    let buscar = codigos.includes(valor);
    let posicion;
    let resultado;

    if (buscar){
        posicion = codigos.indexOf(valor);
        resultado = departamentos[posicion];
    } else{
        resultado = "No se ingreso un Codigo correcto"
    }

    document.querySelector("#resultadoE15").innerHTML = resultado;
}

function solucionEjercicio16() {
    let a = parseFloat(document.querySelector("#valor1E16").value);
    let b = parseFloat(document.querySelector("#valor2E16").value);
    let c = parseFloat(document.querySelector("#valor3E16").value);
    let resultado;

    if (a > b && a > c ){
        resultado = "a es el mayor de los tres"
    }
    document.querySelector("#resultadoE16").innerHTML = resultado;
}

function solucionEjercicio17() {
    let a = parseFloat(document.querySelector("#valor1E17").value);
    let resultado;

    if (a < 0 || a > 10){
        resultado = "a esta fuera del rango"
    } else {
        resultado = "a esta dentro del rango"
    }
    document.querySelector("#resultadoE17").innerHTML = resultado;
}

function solucionEjercicio18() {
    let valor1 = parseFloat(document.querySelector("#valor1E18").value);
    let valor2 = parseFloat(document.querySelector("#valor2E18").value);
    let valor3 = parseFloat(document.querySelector("#valor3E18").value);
    let valor4 = parseFloat(document.querySelector("#valor4E18").value);
    let valor5 = parseFloat(document.querySelector("#valor5E18").value);
    let valor6 = parseFloat(document.querySelector("#valor6E18").value);


    if (valor1 < 0){
        valor1 = -valor1
    }
    if (valor2 < 0){
        valor2 = -valor2
    }
    if (valor3 < 0){
        valor3 = -valor3
    }
    if (valor4 < 0){
        valor4 = -valor4
    }
    if (valor5 < 0){
        valor5 = -valor5
    }
    if (valor6 < 0){
        valor6 = -valor6
    }
    let resultado = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;

    document.querySelector("#resultadoE18").innerHTML = resultado;
}

function solucionEjercicio19() {
    let valor1 = parseInt(document.querySelector("#valor1E19").value);
    let valor2 = parseInt(document.querySelector("#valor2E19").value);
    let valor3 = parseInt(document.querySelector("#valor3E19").value);
    let valor4 = parseInt(document.querySelector("#valor4E19").value);
    let valor5 = parseInt(document.querySelector("#valor5E19").value);
    let multiplo5 = 0;
    let mayor20 = 0;
    let ambasCondiciones = 0;

    if (valor1%5 == 0 && valor1 >20){
        multiplo5++;
        mayor20++;
        ambasCondiciones++;
    } else if (valor1%5 == 0){
        multiplo5++
    } else if (valor1 >20) {
        mayor20++;
    }

    if (valor2%5 == 0 && valor2 >20){
        multiplo5++;
        mayor20++;
        ambasCondiciones++;
    } else if (valor2%5 == 0){
        multiplo5++
    } else if (valor2 >20) {
        mayor20++;
    }

    if (valor3%5 == 0 && valor3 >20){
        multiplo5++;
        mayor20++;
        ambasCondiciones++;
    } else if (valor3%5 == 0){
        multiplo5++
    } else if (valor3 >20) {
        mayor20++;
    }

    if (valor4%5 == 0 && valor4 >20){
        multiplo5++;
        mayor20++;
        ambasCondiciones++;
    } else if (valor4%5 == 0){
        multiplo5++
    } else if (valor4 >20) {
        mayor20++;
    }

    if (valor5%5 == 0 && valor5 >20){
        multiplo5++;
        mayor20++;
        ambasCondiciones++;
    } else if (valor5%5 == 0){
        multiplo5++
    } else if (valor5 >20) {
        mayor20++;
    }

    let resultado = `${multiplo5} valores son multiplo de 5, ${mayor20} valores son mayor que 20, ${ambasCondiciones} valores cumplen ambas condiciones`
    document.querySelector("#resultadoE19").innerHTML = resultado;
}

function solucionEjercicio20() {
    let valor1 = parseInt(document.querySelector("#valor1E20").value);
    let valor2_decimal = parseInt(document.querySelector("#valor2E20").value)/100;
    let valor2 = parseInt(valor2_decimal);
    let valor3 = parseInt(document.querySelector("#valor3E20").value);
    let valor4 = parseInt(document.querySelector("#valor4E20").value);
    var ingredientes = [valor1, valor2, valor3, valor4];
    let resultado;
    
   /* Solucion Alternativa sin if (condicion) 
    
    var ingredientes = [valor1, valor2, valor3, valor4];    
    
    resultado = parseInt(Math.min.apply(Math, ingredientes));

    document.querySelector("#resultadoE20").innerHTML = `La mayor cantidad de recetas que se pueden hacer es: ${resultado}`*/

   

    if (ingredientes.includes(0)){
        resultado = 0;
    } else if (valor1 <= valor2 && valor1 <= valor3 && valor1 <= valor4) {
        resultado = valor1
    } else if (valor2 <= valor1 && valor2 <= valor3 && valor2 <= valor4) {
        resultado = valor2;
    } else if (valor3 <= valor1 && valor3 <= valor2 && valor3 <= valor4) {
        resultado = valor3
    } else {
        resultado = valor4;
    }

    document.querySelector("#resultadoE20").innerHTML = `${resultado}`
}

function solucionEjercicio21() {
    let valor1 = parseInt(document.querySelector("#valor1E21").value);
    let valor2 = parseInt(document.querySelector("#valor2E21").value);
    let pagoInicial;
    let cantidadCuotas;
    let pagoCuotas;

    if (valor1 < 20000){
        pagoInicial = 0.15*valor2;
        cantidadCuotas = 7*12;
        pagoCuotas = (valor2 - pagoInicial)/cantidadCuotas;
    } else {
        pagoInicial = 0.3*valor2;
        cantidadCuotas = 12;
        pagoCuotas = (valor2 - pagoInicial)/cantidadCuotas;
    }

    let resultado = `<b>Pago incial: </b> ${pagoInicial} <br>
                     <b> Cantidad cuotas: ${cantidadCuotas} <br>
                     <b> Valor de la cuota: ${pagoCuotas}`

    document.querySelector("#resultadoE21").innerHTML = resultado;
}

function solucionEjercicio22() {
    let valor1txt = document.querySelector("#valor1E22").value;
    let valor1 = valor1txt.toLowerCase();
    let valor2 = parseInt(document.querySelector("#valor2E22").value);
    let resultado;

    if (valor1 != "si" && valor1 != "no") {
        resultado = "No se ingresaron correctamente los datos de la tarjeta"
    } else if (valor2 < 10000 && valor1 == "si") {
        resultado = 0.96*valor2;
    } else {
        resultado = valor2;
    }
    document.querySelector("#resultadoE22").innerHTML = resultado;
}

let contadorE23 = 0;
let acumuladoE23 = 0;
let perdioE23 = 0;
let aproboE23 = 0;
let buenaNotaE23 = 0;
let maximoE23 = Number.NEGATIVE_INFINITY;
let minimoE23 = Number.POSITIVE_INFINITY;
function solucionEjercicio23() {
    let valor1 = parseInt(document.querySelector("#valor1E23").value);
    acumuladoE23 = acumuladoE23 + valor1;
    contadorE23++;
    let promedio = acumuladoE23/contadorE23;
    
    if (valor1 > maximoE23){
        maximoE23 = valor1;
    }

    if(valor1 < minimoE23) {
        minimoE23 = valor1;
    }

    if (valor1 < 70) {
        perdioE23++
    } else if (valor1 > 90) {
        buenaNotaE23++
        aproboE23++
    } else if (valor1 >= 70) {
        aproboE23++
    }

    let resultado = `Perdieron: ${perdioE23} <br> Salvaron: ${aproboE23} <br> Muy buena nota: ${buenaNotaE23} <br> Promedio: ${promedio} <br> Nota maxima: ${maximoE23} <br> Nota minima: ${minimoE23}`
    
    document.querySelector("#resultadoE23").innerHTML = resultado;
}

let contadorE24 = 0;
let acumuladoE24 = 0;
let minimoE24 = Number.POSITIVE_INFINITY;
function solucionEjercicio24() {
    let valor1 = parseInt(document.querySelector("#valor1E24").value);
    contadorE24++;
    acumuladoE24 = acumuladoE24 + valor1;

    if (valor1 < minimoE24) {
        minimoE24 = valor1;
    }

    let resultado = `Total a pagar: ${acumuladoE24} <br> Empleados que cobran: ${contadorE24} <br> Sueldo mas bajo: ${minimoE24}`
    document.querySelector("#resultadoE24").innerHTML = resultado;
}

let valor1E25; // valor del stock
const boton2E25 = document.querySelector("#btn2E25");   // Defino el boton 2
boton2E25.disabled = true;                              // Inhabilito el boton 2 hasta que se reciba un stock
function solucion1Ejercicio25() {
    valor1E25 = parseInt(document.querySelector("#valor1E25").value);
    const button = document.querySelector("#btn1E25")
    button.disabled = true;
    document.querySelector("#resultado1E25").innerHTML =`Stock existente: ${valor1E25}`;
    boton2E25.disabled = false;
}

let maximoClienteE25;
let maximoE25 = Number.NEGATIVE_INFINITY;
let contadorE25 = 0;
let resultadoE25 = '';
function solucion2Ejercicio25() {
    let valor2 = document.querySelector("#valor2E25").value;                                    // Nombre del cliente
    let valor3 = parseInt(document.querySelector("#valor3E25").value);                          // Monto de compra
    let alerta;

    if (valor3 <= valor1E25 && valor3 > 0) {
        valor1E25 = valor1E25 - valor3;                                                         // Le descuento al stock la cantidad comprada
        contadorE25++;                                                                          // Registro en el contador que se efectuo una compra
        alerta = `Pedido realizado de manera exitosa. <br>`
        document.querySelector("#resultado1E25").innerHTML =`Stock existente: ${valor1E25}`;    // Actualizo el stock
        if (valor3 > maximoE25){
            maximoE25 = valor3;                                                                 // Si es la compra mas grande registro la cantidad
            maximoClienteE25 = valor2;                                                          // Registro el cliente asociado a la compra
        }
        resultadoE25 = `Mayor pedido: ${maximoE25} <br>
                     Cliente: ${maximoClienteE25} <br>
                     Cantidad de pedidos: ${contadorE25}`;
        if (valor1E25 == 0) {
            boton2E25.disabled = true;                                                           // Si el stock baja a 0 deshabilito el boton
        }
    } else if (valor3 <= 0) {
        alerta = `Pedido debe ser mayor a 0. <br>`
    } else if (valor3 > valor1E25) {
        alerta = `Pedido supera el stock existente. <br>`
    }
    document.querySelector("#resultado2E25").innerHTML = alerta + resultadoE25;
}

function solucionEjercicio26() {
    let valor1txt = document.querySelector("#valor1E26").value;
    let valor1 = valor1txt.toLowerCase();
    let valor2 = parseInt(document.querySelector("#valor2E26").value);
    let resultado;
    let cantidadNoches;
    let costo = 40*valor2;
    let pago;
    
    if (valor1 == "e") {
        pago = "Efectivo";
    } else if (valor1 == "t") {
        pago = "Tarjeta";
    }

    if (valor1 != "e" && valor1 != "t") {
        resultado = "No se ingreso correctamente la forma de pago"
    } else if (valor1 == "t" && valor2 >=7) {
        cantidadNoches = valor2 + 3;
        resultado = `${valor2} noches pagadas con ${pago}. <br> El usuario se hospeda ${cantidadNoches} noches <br> El costo total seran: $${costo}`
    } else if (valor1 == "e" && valor2 >=7) {
        cantidadNoches = valor2 + 2;
        resultado = `${valor2} noches pagadas con ${pago}. <br> El usuario se hospeda ${cantidadNoches} noches <br> El costo total seran: $${costo}`
    } else if (valor2 >= 3 && valor2 <7) {
        cantidadNoches = valor2 + 1;
        resultado = `${valor2} noches pagadas con ${pago}. <br> El usuario se hospeda ${cantidadNoches} noches <br> El costo total seran: $${costo}`
    } else if (valor2 < 3) {
        cantidadNoches = valor2;
        resultado = `${valor2} noches pagadas con ${pago}. <br> El usuario se hospeda ${cantidadNoches} noches <br> El costo total seran: $${costo}`
    }
    document.querySelector("#resultadoE26").innerHTML = resultado;
}

const boton2E27 = document.querySelector("#btn2E27");
const boton1E27 = document.querySelector("#btn1E27");
const boton4E27 = document.querySelector("#btn4E27");
boton2E27.disabled = true;                          // Inhabilito a jugar al jugador2 hasta que el jugador 1 ingrese un numero

let valor1E27;                                      // Defino una variable global para el valor ingresado por el jugador 1, asi lo puedo comprar con el del jugador 2.
let contadorE27 = 0;                                    // Defino un contador para llevar registro de los intentos ingresados por el jugador 2.
function solucion1Ejercicio27() {
    let valor1 = parseInt(document.querySelector("#valor1E27").value); // Leo el valor ingresado por el jugador 1
    let campoNumero = document.querySelector("#valor1E27");

    if (valor1 > 0 && valor1 <= 100) {              // Si se ingresa un valor valido deshabilito el boton guardar numero. Habilito el boton para adivinar. Si no alert.
        valor1E27 = valor1;
        boton2E27.disabled = false;
        boton1E27.disabled = true;
        boton4E27.disabled = true;
        campoNumero.value = ''
    } else {
        alert("No se ingreso un numero dentro de los parametros")
    }
}

function solucion2Ejercicio27() {
    let valor2 = parseInt(document.querySelector("#valor2E27").value);
    let comparar = valor2 - valor1E27;
    let pista;
    let resultado;

    if (comparar < 0) {
        comparar = - comparar;
    }

    if (valor2 > 0 && valor2 < 101) {
        contadorE27++;
        if (comparar == 0) {
            boton2E27.disabled = true;
            pista = "Adivinaste! - Presiona Reset para seguir jugando"
        }
        if (comparar > 15) {
            pista = "Estas lejos";
        }
        if (comparar <= 15 && comparar >= 10) {
            pista = "Te estas acercando";
        }
        if (comparar <= 9 && comparar >= 5) {
            pista = "Cada vez mas cerca";
        }
        if (comparar <= 4 && comparar >= 1) {
            pista = "Muy pero muy cerca";
        }
       
    } else {
        pista = "No se ingreso un numero dentro de los parametros. No se cuenta el intento";
    }
    resultado = `${pista} <br> Intentos: ${contadorE27}`;
    document.querySelector("#resultadoE27").innerHTML = resultado;
}

function solucion3Ejercicio27() {                   // Reseteo las conidicones para volver a jugar.
    valor1E27 = null;
    contadorE27 = 0;
    boton1E27.disabled = false;
    boton2E27.disabled = true;
    boton4E27.disabled = false;

    document.querySelector("#resultadoE27").innerHTML = "Valores reseteados"
}

function solucion4Ejercicio27() {                   // Opcion para jugar vs PC
    let valor = Math.floor(Math.random()*100) + 1;

    if (valor > 0 && valor <= 100) {              
        valor1E27 = valor;
        boton2E27.disabled = false;
        boton1E27.disabled = true;
        boton4E27.disabled = true;
    }
}

let valor1E28 = 0;
let valor2E28 = 0;
const botonE28 = document.querySelector("#btnE28");

function solucionEjercicio28() {
    let valor1 = parseInt(document.querySelector("#valor1E28").value);
    let valor2 = parseInt(document.querySelector("#valor2E28").value);
    let resultado;
    let ganador = ''
    
    if (valor1 <= 0 || valor2 <= 0) {
        alert("Se deben ingresar valores positivos")
    } else {
        valor1E28 = valor1E28 + valor1;
        valor2E28 = valor2E28 + valor2; 
    }
    resultado = `Puntaje equipo 1: ${valor1E28} <br> Puntaje equipo 2: ${valor2E28} <br>`

    if (valor1E28 >= 30 || valor1E28 >=30 ) {
        botonE28.disabled = true;
        if (valor1E28 > valor2E28) {
            ganador = "El ganador es el Equipo 1"
            botonE28.disabled = true;
        } 
        else if (valor1E28 < valor2E28) {
            ganador = "El ganador es el Equipo 2"
            botonE28.disabled = true;
        } else {
            ganador = "Es un empate"
        }
    }
    
    
    document.querySelector("#resultadoE28").innerHTML = resultado + ganador;
}

function resetEjercicio28() {
    botonE28.disabled = false;
    valor1E28 = 0;
    valor2E28 = 0;
    document.querySelector("#resultadoE28").innerHTML = "Valores reseteados"
}
/*
iconoP1 = ''                                                // Variable para el icono del jugador 1
iconoP2 = ''                                                // Variable para el icono del jugador 2
const radio1_checked = document.querySelector('input[name="icon1"]:checked');
const radio1_unchecked = document.querySelector('input[name="icon1"]:unchecked');
const botonElegir1 = document.querySelector("#btn1E30");
const botonElegir2 = document.querySelector("#btn2E30");
const radioElegir1 = document.querySelector("#iconosP1");

function Elegir1Ejercicio30() {
    radio1_checked.disabled = true;
    radio1_unchecked.disabled = true;


}

function Elegir2Ejercicio30() {}*/