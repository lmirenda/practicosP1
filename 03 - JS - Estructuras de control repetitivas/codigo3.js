inicializar() 

function inicializar() {
    document.querySelector("#btn").addEventListener("click", Metodo);
    document.querySelector("#btn").addEventListener("click", borrarEjercicio);
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
    document.querySelector("#btnE16").addEventListener("click", solucionEjercicio16);
    document.querySelector("#btnE17").addEventListener("click", solucionEjercicio17);
    document.querySelector("#btnE18").addEventListener("click", solucionEjercicio18);
}

let metodoSeleccionado; 

function Metodo() {
    const radioButtons = document.querySelectorAll('input[name="metodo"]');                 // Armo un array con los 3 metodos en los radio buttons.
    for (const rb of radioButtons) {
        if (rb.checked) {
            metodoSeleccionado = rb.value;
            break;
        }
    }
    document.querySelector("#resultado").innerHTML = `Metodo seleccionado: <b> ${metodoSeleccionado} </b>`
   
}

function borrarEjercicio() {
    document.querySelector("#resultadoE1").innerHTML = '';
    document.querySelector("#resultadoE2").innerHTML = '';
    document.querySelector("#resultadoE3").innerHTML = '';
    document.querySelector("#resultadoE4").innerHTML = '';
    document.querySelector("#resultadoE5").innerHTML = '';
    document.querySelector("#resultadoE6").innerHTML = '';
    document.querySelector("#resultadoE7").innerHTML = '';
    document.querySelector("#resultadoE8").innerHTML = '';
    document.querySelector("#resultadoE9").innerHTML = '';
    document.querySelector("#resultadoE10").innerHTML = '';
    document.querySelector("#resultadoE11").innerHTML = '';
    document.querySelector("#resultadoE12").innerHTML = '';
    document.querySelector("#resultadoE13").innerHTML = '';
    document.querySelector("#resultadoE14").innerHTML = '';
    document.querySelector("#resultadoE15").innerHTML = '';
    document.querySelector("#resultadoE16").innerHTML = '';
    document.querySelector("#resultadoE17").innerHTML = '';
}

function solucionEjercicio1() {
    let resultado ='';
    var i = 1;
    switch (metodoSeleccionado) {
        case "for":
            for (i = 1; i < 1001; i++) {
                resultado += i + "<br>";
            }
            break;
        case "while":
            while (i < 1001) {
                resultado += i + " <br>";
                i++;
            }
            break;
        case "doWhile":
            do{
                resultado += i + " <br>";
                i++;
            } while (i < 1001);
            break;    
        default:
            alert("Debes seleccionar un metodo");
            break;
    }
    document.getElementById("resultadoE1").innerHTML = resultado;
}

function solucionEjercicio2() {
    let i = -100;
    let resultado = '';
    switch (metodoSeleccionado) {
        case "for" :
            for (i; i < 11 ; i++) {
                resultado += i + "<br>";
            }
            break;
        case "while":
            while (i<11) {
                resultado += i + "<br>";
                i++;
            }
            break;
        case "doWhile":
            do {
                resultado += i + "<br>";
                i++
            } while (i<11)
            break;
        default: 
        alert("Debes seleccionar un metodo");
        break
    }
    document.querySelector("#resultadoE2").innerHTML = resultado;
}

function solucionEjercicio3() {
    let i = 40;
    let resultado = "";
    switch (metodoSeleccionado) {
        case "for":
            for (i; i > 9; i--) {
                resultado += i + "<br>";
            }
            break;
        case "while": 
            while (i > 9) {
                resultado += i + "<br>";
                i--;
            }
            break;
        case "doWhile":
            do {
                resultado += i + "<br>";
                i--;
            } while (i > 9);
            break;
        default:
            alert("Debes seleccionar un metodo");;
            break;
    }
    document.querySelector("#resultadoE3").innerHTML = resultado;
}

function solucionEjercicio4() {
    let i = 20;
    let resultado = ""
    switch (metodoSeleccionado) {
        case "for":
            for (i; i > -31 ; i--)
            resultado += i + "<br>"            
            break;
        case "while":
            while (i > -31) {
                resultado += i + "<br>"
                i--;
            }
            break;
        case "doWhile":
            do {
                resultado += i + "<br>";
                i--;
            }while (i > -31);
            break;
        default:
            alert("Debes seleccionar un metodo");
            break;
    }
    document.querySelector("#resultadoE4").innerHTML = resultado;
}

function solucionEjercicio5() {
    let i = 1;
    let resultado = '';
    let multiplo = 5;
    switch (metodoSeleccionado) {
        case "for":
            for (i; i<451 ; i++) {
                if (i%multiplo == 0) {
                    resultado += i + "<br>";
                }
            }
            break;
        case "while": 
            while (i < 451) {
                if (i%multiplo == 0) {
                    resultado += i  + "<br>";
                }
                i++;
            }
            break;
        case "doWhile":
            do {
                if (i%multiplo == 0) {
                    resultado += i + "<br>";
                }
                i++;
            }while (i < 451);
            break;
        default:
            alert("Debes seleccionar un metodo");
            break;
    }
    document.querySelector("#resultadoE5").innerHTML = resultado;
}

function solucionEjercicio6() {
    let i = -33;
    let multiplo = 4;
    let resultado = "";
    switch (metodoSeleccionado) {
        case "for": 
            for (i; i < 231; i++) {
                if (i%multiplo == 0) {
                    resultado += i + "<br>";
                }
            }
            break
         case "while":
            while (i<231) {
                 if(i%multiplo == 0) {
                     resultado += i + "<br>";
                 }
                 i++;
             }
            break;
        case "doWhile":
            do {
                if(i%multiplo == 0) {
                    resultado += i + "<br>"
                }
                i++;
            } while (i < 231);
            break;
        default:
            alert("Debes seleccionar un metodo");
            break;
    }
    document.querySelector("#resultadoE6").innerHTML = resultado;
}

function solucionEjercicio7() {
    let i = parseInt(document.querySelector("#valor1E7").value);
    let resultado = '';
    let j = 1;

    if (isNaN(i)) {
        resultado = "No se ingreso un numero"
    } else if (i < 2) {
        resultado = "El numero ingresado es menor que 2"
    } else if ( i >50) {
        resultado = "El numero ingresado es mayor que 50"
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for(j; j < i + 1; j++) {
                    resultado += "-"
                }
                break;
            case "while":
                while (j < i + 1){
                    resultado += "-";
                    j++
                }
                break;
            case "doWhile":
                do {
                    resultado += "-";
                    j++;
                } while (j < i+1);
                break;
            default: 
                alert("Debes seleccionar un metodo")
        }
    }
    document.querySelector("#resultadoE7").innerHTML = resultado;
}

function solucionEjercicio8() {
    let valor1 = parseInt(document.querySelector("#valor1E8").value);
    let valor2 = parseInt(document.querySelector("#valor2E8").value);
    let menor;
    let mayor;
    let resultado = "";

    if (valor1 > valor2) {
        mayor = valor1;
        menor = valor2;
    } else if ( valor2 > valor1) {
        mayor = valor2;
        menor = valor1;
    }

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "No se ingreso un numero"
    } else if (valor1 == valor2) {
        resultado = valor1;
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for(menor; menor < mayor + 1; menor++){
                    resultado += menor + "<br>";
                }
                break;
            case "while":
                while (menor < mayor + 1){
                    resultado += menor + "<br>";
                    menor++;
                }
                break;
            case "doWhile":
                do {
                    resultado += menor + "<br>"
                    menor++;
                } while (menor < mayor + 1);
                break;
            default: 
                alert("Debes seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE8").innerHTML = resultado;
}

function solucionEjercicio9() {
    let valor1 = parseInt(document.querySelector("#valor1E9").value);
    let valor2 = parseInt(document.querySelector("#valor2E9").value);
    let resultado = 0;
    let i = 1;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Uno de los datos ingresados no es un numero"
    } else if (valor1 === 0 || valor2 === 0) {
        resultado = 0;
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for(i; i < valor1 + 1; i++) {
                    resultado += valor2;
                }
                break;
            case "while":
                while (i < valor1 + 1) {
                    resultado += valor2;
                    i++;
                }
                break;
            case "doWhile":
                do {
                    resultado += valor2;
                    i++;
                } while  (i < valor1 + 1);
                break;
            default: 
                alert("Debers seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE9").innerHTML = resultado;
}

function solucionEjercicio10() {
    let valor1 = parseInt(document.querySelector("#valor1E10").value);
    let valor2 = parseInt(document.querySelector("#valor2E10").value);
    let resultado = 1;
    let mayor;
    let menor;

    if (valor1 >= valor2) {
        mayor = valor1;
        menor = valor2;
    } else {
        mayor = valor2;
        menor = valor1;
    }

    if (isNaN(valor1) || isNaN(valor2)){
        resultado = "Uno o mas de los valores ingresados no es un numero"
    } else if (valor1 == valor2) {
        resultado = "Ingresar dos numeros diferentes";
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (menor; menor < mayor + 1; menor++) {
                    resultado *= menor;
                }
                break;
            case "while":
                while (menor < mayor + 1) {
                    resultado *= menor;
                    menor++;
                }
                break;
            case "doWhile":
                do{
                    resultado *= menor;
                    menor++; 
                } while (menor < mayor + 1);
                break;
            default:    
                alert("Debes seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE10").innerHTML = resultado;
}

function solucionEjercicio11() {
    let valor1 = parseInt(document.querySelector("#valor1E11").value);
    let valor2 = parseInt(document.querySelector("#valor2E11").value);
    let valor3 = parseInt(document.querySelector("#valor3E11").value);
    let mayor;
    let menor;
    let resultado = "";

    if (valor1 > valor2) {
        mayor = valor1;
        menor = valor2;
    } else if (valor1 <= valor2) {
        menor = valor1;
        mayor = valor2;
    }
    if (valor1 == valor2 && valor3 != 1 && valor1 != valor3) 
        resultado = "El valor1 y valor2 son iguales."


    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        resultado = "En algun campo no se ingreso un numero."
    } else if (valor3 === 0) {
        resultado = "0 no es un valor valido"
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (menor; menor < mayor + 1 ; menor++) {
                    if (menor%valor3 === 0){
                        resultado += menor + "<br>";
                    }
                }
                break;
            case "while":
                while(menor < mayor + 1) {
                    if (menor%valor3 === 0) {
                        resultado += menor + "<br>";
                    }
                    menor++;
                }
                break;
            case "doWhile":
                do {
                    if(menor%valor3 === 0){
                        resultado += menor + "<br>";
                    }
                    menor++
                }while (menor < mayor + 1);
                break;
            default: 
            alert("Se debe seleccionar un metodo");
        }
    }
    if (valor3 > mayor) {
        resultado = "El valor 3 es mayor que el valor ingresado mas grande."
    }
    document.querySelector("#resultadoE11").innerHTML = resultado;
}

function solucionEjercicio12() {
    let valor1 = parseInt(document.querySelector("#valor1E12").value);
    let resultado =1;

    if (isNaN(valor1)){
        resultado = "No se ingreso un numero.";
    } else if (valor1 === 0 || valor1 == 1){
        resultado = 1;
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (valor1; valor1 > 1; valor1--){
                    resultado *= valor1;
                }
                break;
            case "while": 
            while (valor1 > 1) {
                resultado *= valor1;
                valor1--;
            }
            break;
            case "doWhile":
                do {
                    resultado *= valor1;
                    valor1--;
                } while (valor1 > 1);
                break;
            default:
                alert("Debes seleccionar un metodo");
        }
    }
    document.querySelector("#resultadoE12").innerHTML = resultado;
}

function solucionEjercicio13() {
    let iconotxt = document.querySelector("#valor1E13").value;
    let icono = iconotxt.charAt(0);
    let alto = parseInt(document.querySelector("#valor2E13").value);
    let ancho = parseInt(document.querySelector("#valor3E13").value);
    let resultado =''
    let i = 0;
    let j = 0;
    let fila = ""

    if (icono == ''){
        icono = "X"
    }

    if (alto == 0 || ancho == 0) {
        resultado = "Las dimensiones del cuadrado no pueden ser 0"
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (i; i < ancho ; i++) {
                    fila += icono;
                }
                for (j; j < alto ; j++){
                    resultado += fila +"<br>"
                }
                break;
            case "while":
                while (i < ancho) {
                    fila += icono;
                    i++;
                }
                while (j < alto) {
                    resultado += fila + "<br>"
                    j++
                }
                break;
            case "doWhile":
                do {
                    fila += icono;
                    i++
                } while(i < ancho);
                do  {
                    resultado += fila + "<br>"
                    j++
                } while (j < alto);
                break;
            default:
                alert("Debe seleccionar un metodo")
        }
    }
    document.querySelector("#resultadoE13").innerHTML = resultado;
}

function solucionEjercicio14() {
    let valor1 = parseInt(document.querySelector("#valor1E14").value);
    let resultado = 1;
    let digitos = valor1;
    let i=1;

    if (isNaN(valor1)) {
        resultado = "No se ingreso un numero"
    } else if (valor1 == 0) {
        resultado = 1;
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (i; i < digitos + 1; i++) {
                    if (valor1/10 >= 1) {
                        resultado++;
                    }
                    valor1 = valor1/10;
                }
                break;
            case "while":
                while (valor1/10 >= 1) {
                    resultado++;
                    valor1 = valor1/10;
                }
                break;
            case "doWhile":
                do {
                    resultado++;
                    valor1 = valor1/10;
                } while (valor1 >= 1);
                resultado--;
                break;
            default:
                alert("Se debe seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE14").innerHTML = resultado;
}

function solucionEjercicio15() {
    let valor1 = parseInt(document.querySelector("#valor1E15").value);
    let resultado = '';
    let check = valor1;

    if (isNaN(valor1) || valor1 <= 2000) {
        resultado = "Se debe ingresar un numero mayor a 2000";
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (let i = 0; i < valor1; i++) {
                    check /= 20;
                    if (check < 100 && check > 4) {
                        resultado = check;
                    }
                }
                break;
            case "while":
                while(check > 100) {
                    check /= 20;
                    resultado = check;
                }
                break;
            case "doWhile":
                do {
                    check /= 20;
                    resultado = check;
                } while (check > 100);
                break;
            default: 
                alert("Se debe seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE15").innerHTML = resultado;
}

function solucionEjercicio16() {
    let valor1 = parseInt(document.querySelector("#valor1E16").value);
    let valor2 = parseInt(document.querySelector("#valor2E16").value);
    let resultado = '';
    let mayor;
    let menor;

    if (valor1 >= valor2) {
        mayor = valor1;
        menor = valor2;
    } else {
        mayor = valor2;
        menor = valor1;
    }

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Los valores ingresados deben ser numeros"
    } else if (menor%12 == 0) {
        resultado = menor;
    }else {
        switch (metodoSeleccionado) {
            case "for":
                let contador = 0;
                for(contador; contador<13; contador++){
                    if (menor%12 == 0 && menor <= mayor) {
                        resultado = menor;
                    }
                    else {
                        resultado = "Ningun numero comprendido entre los valores ingresados es multiplo de 4 y 6 simultaneamente"
                        menor+= 1;
                        console.log(menor);
                    }
                    
                }
                break;
            case "while":
                while (menor%12!=0) {
                    menor++
                    if (menor <= mayor) {
                        resultado = menor;
                    } else {
                        resultado = "Ningun numero comprendido entre los valores ingresados es multiplo de 4 y 6 simultaneamente"
                    }
                    ;
                }
                break;
            case "doWhile":
                let j = 0;
                do{
                    if (menor%12==0 && menor <= mayor) {
                        resultado = menor;
                    } else {
                        resultado = "Ningun numero comprendido entre los valores ingresados es multiplo de 4 y 6 simultaneamente"
                        menor+= 1;
                    }j++;
                   
                } while(j < 12);
                break;
            default:
                alert("Debes seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE16").innerHTML = resultado;
}

function solucionEjercicio17() {
    let valor1 = parseInt(document.querySelector("#valor1E17").value);
    let valor2 = parseInt(document.querySelector("#valor2E17").value);
    let resultado = '';
    let check = valor1;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Los valore ingresados deben ser numeros."
    } else if (valor2 === 0) {
        resultado = "El divisor no puede ser cero"
    } else if (valor2 > valor1){
        resultado = valor1;       
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for (let i = 0; i < valor1 + 1 ; i++) {
                    if (check <= valor2 && check >= 0) {
                        resultado = check;
                    }
                    check -= valor2;
                }break;
            case "while":
                while (check >= valor2) {
                    check -= valor2;
                    resultado = check;
                }
                break;
            case "doWhile":
                do {
                    check -= valor2;
                    if (check >= 0) {
                        resultado = check;
                    }
                    
                }while (check >= valor2);
                break;
            default:
                alert("Debes seleccionar un metodo");
                break;
        }
    }

    
    document.querySelector("#resultadoE17").innerHTML = resultado;
}

function solucionEjercicio18() {
    let valor1 = parseInt(document.querySelector("#valor1E18").value);
    let resultado = '';

    if (isNaN(valor1) || valor1 === 0) {
        resultado = "Ingresar un numero mayor a 0";
    } else {
        switch (metodoSeleccionado) {
            case "for":
                for(let i = 30; i < 200; i++){
                    if(i%valor1 ==  0 && i%2 == 0) {
                        resultado += i + "<br>";
                    }
                }
                break;
            case "while":
                let i = 30;
                while (i < 200) {
                    if(i%valor1 ==  0 && i%2 == 0) {
                        resultado += i + "<br>";
                    }
                    i++
                }
                break;
            case "doWhile":
                let j = 30;
                do{
                    if(j%valor1 ==  0 && j%2 == 0) {
                        resultado += j + "<br>";
                    }
                    j++;
                }while (j < 200);
                break;
            default:
                alert("Debes seleccionar un metodo");
                break;
        }
    }
    document.querySelector("#resultadoE18").innerHTML = resultado;
}