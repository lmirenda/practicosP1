// SELECTORES //

//Defino una constante para el boton generador
const btn = document.querySelector("#btn");
const tablaCalendario = document.querySelector("#Calendario")

/* ---------------------------------------------------------*/ 

// EVENT LISTENERS //

//Handler para el boton generador. Esucha el click.
btn.addEventListener("click",solucion);

/*----------------------------------------------------------*/

// FUNCIONES //

//Ejecutar solucion
function solucion() {
    tablaCalendario.innerHTML = '';
    let mes = parseInt(document.querySelector("#selectMes").value);
    let anoStr = document.querySelector("#selectAno").value;
    let anoInt = parseInt(document.querySelector("#selectAno").value);
    let anoC = parseInt(anoStr.slice(0,2));
    let anoY = parseInt(anoStr.slice(2,4));
    let dia;
    
    if(isNaN(anoInt) || anoInt < 1000 || anoInt > 9999) {
        alert("Se debe seleccionar un año entre 1000 y 9999");
    } else {
        dia = Zeller(1, mes, anoY, anoC);
    }
    generarCalendario(mes,anoInt,dia);
}

// Regla de Zeller 
/* 
k es el dia del mes.
m es el numero del mes.
D los ultimos dos digitos del año.
C los primeros dos digitos del año. 

Para la funcion se supone que k = 1 pues se arranca para el primer dia de cada mes
valores de doW: 0-Domingo 1-Lunes 2-Martes 3-Miercoles 4-Jueves 5-Viernes 6-Sabado*/

function Zeller(k, m, Y, C) {
    if (m == 11 || m == 12) {
        Y--;
    }

    let W = k + Math.floor(2.6*m-0.2) -2*C + Y + Math.floor(Y/4) + Math.floor(Y/4);
    let doW = '';
    
    if (W > 0) {
        doW = W%7;
    } else {
        if (W%7 === 0) {
            doW = 0;
        } else {
            doW = W%7 + 7;
        }
    }
    return doW; 
}

function selectorDia(F){

    let primerDia = ''
    switch (F){
        case 0:
            primerDia = "Domingo";
            break;
        case 1:
            primerDia = "Lunes";
        break
        case 2:
            primerDia = "Martes";
        break
        case 3:
            primerDia = "Miercoles";
        break
        case 4:
            primerDia = "Jueves";
        break
        case 5:
            primerDia = "Viernes";
        break
        case 6:
            primerDia = "Sabado";
        break
    }
    return primerDia;
}

function maxMes(m,Y) {

    let mes31 = [11,1,3,5,6,8,10]
    let mes30 = [2,4,7,9]
    let maxMes;

    if (mes31.includes(m)){
        maxMes = 31;
    } else if(mes30.includes(m)){
        maxMes = 30
    } else if (m == 12 && Y%4 == 0){
        maxMes = 29;
    } else {
        maxMes = 28;
    }
    return maxMes;
}

function celdasDias(primerDia, maxDias){
    
    let arrayDias = []
    
    for(n=0; n<primerDia; n++){
        arrayDias.push(" ")
    }
    for(let n =1; n<maxDias+1; n++){
        arrayDias.push(n);
    }
    return arrayDias;
}

function generarCalendario(mes,ano,primerDia) {

    // Genero el header de la tabla
    let rowHeader = document.createElement("tr");
    for (let th = 0; th < 7; th++) {
        let diasHeader = document.createElement('th');
        diasHeader.innerText = selectorDia(th);
        rowHeader.appendChild(diasHeader);
    }
    tablaCalendario.appendChild(rowHeader);

    //Defino la variable maxRows. Corresponde a la cantidad de filas en el  calendario para representar los dias. La mayoria de los casos son 5 filas.
    let maxRows;
    let v1 = parseInt(document.querySelector("#selectMes").value);
    let v2 = parseInt(document.querySelector("#selectAno").value);
    let maximoMes = maxMes(v1,v2)
    

    //El caso donde alcanza con 4 filas de 7 (28 casilleros) es los años no bisiestos, donde el mes seleccionado fue febrero y el mes arraca en Sabado.
    if (ano%4 != 0 && mes === 12 && primerDia === 0) {
        maxRows = 4;
    } else if (primerDia<5){
        maxRows = Math.ceil((7-primerDia + 28)/7);
    } else {
        maxRows = Math.ceil((7-primerDia + 28)/7)+1;
    }

    for (let j=0; j<maxRows;j++){
        let trs = document.createElement("tr");
        trs.setAttribute("id","filaCalendario"+j);
        trs.setAttribute("class","filaCalendario");
        for (n = 0; n < 7; n++){
            let tds = document.createElement("td");
            tds.setAttribute("class", "celdasCalendario");
            trs.appendChild(tds);
        }
        tablaCalendario.appendChild(trs);
    }

    let arrayTds = document.getElementsByClassName("celdasCalendario");
    let largoArrayTds = arrayTds.length;
    console.log(largoArrayTds);

    let arrayDias = celdasDias(primerDia,maximoMes);

    for(n=0;n<largoArrayTds+1;n++){
        
        if(arrayDias[n]==' ' || !isNaN(arrayDias[n])){
            arrayTds[n].innerText = arrayDias[n];
        }
        
    }
}