//SELECTORES//
/*Botones*/
const btn1E1 = document.querySelector("#btn1E1");
const btn2E1 = document.querySelector("#btn2E1");
const btn3E1 = document.querySelector("#btn3E1");

const btn1E2 = document.querySelector("#btn1E2");
const btn2E2 = document.querySelector("#btn2E2");
const btn3E2 = document.querySelector("#btn3E2");

const btn1E3 = document.querySelector("#btn1E3")
const btn2E3 = document.querySelector("#btn2E3")

const btn1E4 = document.querySelector("#btn1E4");
const btn2E4 = document.querySelector("#btn2E4");
const btn3E4 = document.querySelector("#btn3E4");

const btn1E5 = document.querySelector("#btn1E5");
const btn2E5 = document.querySelector("#btn2E5");

/*Resultados*/
let resultado1E1 = document.querySelector("#resultado1E1");
let resultado2E1 = document.querySelector("#resultado2E1");

let resultado1E2 = document.querySelector("#resultado1E2");
let resultado2E2 = document.querySelector("#resultado2E2");
let resultado3E2 = document.querySelector("#resultado3E2");

let resultado1E3 = document.querySelector("#resultado1E3");
let resultado2E3 = document.querySelector("#resultado2E3");

let resultado1E4 = document.querySelector("#resultado1E4");
let resultado2E4 = document.querySelector("#resultado2E4");
let resultado3E4 = document.querySelector("#resultado3E4");

let resultado1E5 = document.querySelector("#resultado1E5");
let resultado2E5 = document.querySelector("#resultado2E5");

//EVENT LISTENERS//
btn1E1.addEventListener("click", crearPersonaE1);
btn2E1.addEventListener("click", crearTablaTodosE1);
btn3E1.addEventListener("click", crearTablaMayoresE1);

btn1E2.addEventListener("click", crearPeliculaE2);
btn2E2.addEventListener("click", listarPeliculasE2);
btn3E2.addEventListener("click", buscarPeliculasE2);

btn1E3.addEventListener("click",registrarVentaE3)
btn2E3.addEventListener("click",mostrarVentasE3)

btn1E4.addEventListener("click", registrarVentaE4)
btn2E4.addEventListener("click", mostrarVentasE4)
btn3E4.addEventListener("click", mostrarModeloE4)

btn1E5.addEventListener("click",registrarVentaE5);
btn2E5.addEventListener("click",mostrarZapatosFiltrados);

//DATA//
let personasE1 = [];
let peliculasE2 = [];
var guitarras = new Array(
    {tipo:1,
    nombre:"Clasica",
    precio: 2000},
    {tipo: 2,
    nombre: "Electrica",
    precio:2500},
    {tipo: 3,
    nombre: "Electroacustica",
    precio:2300}
);
let ventasE3 = [];
let ventasE4 = [];
let ventasE5 = [];

//FUNCIONES//
/* Leer del HTML los campos de datos y generar un objeto con sus valores*/
function crearPersonaE1(){
    let nombreE1 = document.querySelector("#valor1E1").value;
    let edadE1 = parseInt(document.querySelector("#valor2E1").value);
    let nacionalidadE1 = document.querySelector("#valor3E1").value;
    let mensaje = ''

    if (nombreE1 && edadE1 && nacionalidadE1 && !isNaN(edadE1)){
        if (edadE1 < 0 ){
            mensaje = "La edad debe ser un numero mayor o igual a cero"
        } else {
            let nuevaPersona = new ejercicio1(nombreE1, edadE1, nacionalidadE1)
            personasE1.push(nuevaPersona);
            mensaje = "Se almacenaron los datos de manera exitosa"
        }
    } else {
        mensaje = "Se deben completar todos los campos"
    }
    resultado1E1.innerHTML = mensaje
}

/*Crear tabla con todos los valores de todos los objetos del ejercicio1 */
function crearTablaTodosE1() {
    resultado2E1.innerHTML = `  <tr>
                                    <td>Nombre</td>
                                    <td>Edad</td>
                                    <td>Nacionalidad</td>
                                </tr>`
    for (let i = 0; i<personasE1.length;i++){
        resultado2E1.innerHTML += ` <tr>
                                        <td>${personasE1[i].nombre}</td>
                                        <td>${personasE1[i].edad}</td>
                                        <td>${personasE1[i].nacionalidad}</td>
                                    </tr>`
    }
}

function crearTablaMayoresE1() {
    resultado2E1.innerHTML = `  <tr>
                                    <td>Nombre</td>
                                    <td>Edad</td>
                                    <td>Nacionalidad</td>
                                </tr>`
    for(let i=0; i<personasE1.length;i++){
        if(personasE1[i].edad>17){
            resultado2E1.innerHTML += ` <tr>
                                        <td>${personasE1[i].nombre}</td>
                                        <td>${personasE1[i].edad}</td>
                                        <td>${personasE1[i].nacionalidad}</td>
                                    </tr>`
        }
    }
}

function crearPeliculaE2() {
    let nombreE2 = document.querySelector("#valor1E2").value;
    let anioE2 = parseInt(document.querySelector("#valor2E2").value);
    let generoE2 = document.querySelector("#valor3E2").value;
    let votosE2 = parseInt(document.querySelector("#valor4E2").value);
    let puntosE2 = parseFloat(document.querySelector("#valor5E2").value);
    let mensaje = ''
    let existe = false;
    
    for (let i = 0; i < peliculasE2.length ; i++){
        if (peliculasE2[i].nombre == nombreE2){
            existe = true
        }
    }

    if(isNaN(votosE2)||isNaN(puntosE2)||isNaN(anioE2)||votosE2<0||puntosE2<0||anioE2<0){
        mensaje = "Los votos, año y puntos deben ser numeros mayores que cero";
    } else if (nombreE2=='' || anioE2=='' || generoE2=='' || votosE2=='' || puntosE2==''){
            mensaje = "Se deben completar todos los campos";
    } else if (existe == true){
            mensaje = 'La pelicula ya existe en el sistema'
    } else {
        let pelicula = new ejercicio2(nombreE2,anioE2, generoE2, votosE2,puntosE2);
            peliculasE2.push(pelicula);
            mensaje = `La pelicula ${nombreE2} se ingreso correctamente en el sistema`
    }
    resultado1E2.innerHTML = mensaje

}

function listarPeliculasE2 (){
    resultado2E2.innerHTML = `  <tr>
                                    <th>Pelicula</th>
                                    <th>Año</th>
                                    <th>Genero</th>
                                    <th>Promedio</th>
                                </tr>`
    for (let i = 0; i < peliculasE2.length; i++){
        if ((peliculasE2[i].puntos)/(peliculasE2[i].votos) >= 4){
            let score = (peliculasE2[i].puntos)/(peliculasE2[i].votos)
            resultado2E2.innerHTML += ` <tr>
                                            <td>${peliculasE2[i].nombre}</td>
                                            <td>${peliculasE2[i].anio}</td>
                                            <td>${peliculasE2[i].genero}</td>
                                            <td>${score}</td>
                                        </tr>`
        }
    }
    resultado1E2.innerHTML = '';
}

function buscarPeliculasE2() {
    let encontrado = false;
    let mensaje = ""
    let i = 0;
    let nombre2E2 = document.querySelector("#valor6E2").value;
    while (encontrado == false || i < peliculasE2.length){
        if ((peliculasE2[i].nombre).toUpperCase() == (nombre2E2).toUpperCase()){
            mensaje = ` <ul><li>${peliculasE2[i].nombre}</li>
                            <li>${peliculasE2[i].anio}</li>
                            <li>${peliculasE2[i].genero}</li>
                            <li>${peliculasE2[i].votos}</li>
                            <li>${peliculasE2[i].puntos}</li>           
                         </ul>`
            encontrado = true
        }
        i++;
    }
    resultado3E2.innerHTML = mensaje;
}

function registrarVentaE3(){
    let tipo = parseInt(document.querySelector("#valor1E3").value);
    let cantidad = parseInt(document.querySelector("#valor2E3").value);

    if(!isNaN(tipo) && !isNaN(cantidad) && tipo < 4 && tipo > 0 && cantidad > 0) {
        resultado1E3.innerHTML = "La venta se registro de manera exitosa";
        let venta = new ejercicio3(tipo,cantidad);
        ventasE3.push(venta);
    } else {
        resultado1E3.innerHTML = "El tipo debe ser 1, 2 o 3. La cantidad debe ser un numero mayor que 0."
    }
}

function totalVentas(tipo){
    let total = 0;
    let precio = buscarPrecio(tipo)

    for(venta of ventasE3){
        if (venta.tipo === tipo){
            total += precio*venta.cantidad;
        }
    }
    return total
}

function buscarPrecio(tipo){
    let precio = 0;
    
    switch (tipo) {
        case 1:
            precio = 2000
            break;
        case 2:
            precio = 2500
            break;
        case 3:
            precio = 2300
            break;
    
        default:
            precio = 0;
            break;
    }
    return precio
}

function buscarNombreE3(tipo){
    let nombre =''
    switch (tipo) {
        case 1:
            nombre = "Clasica"
            break;
        case 2:
            nombre = "Electrica"
            break;
        case 3:
            nombre = "ElectroAcustica"
            break;
    
        default:
            nombre = 0;
            break;
    }
    return nombre
}

function mostrarVentasE3(){
    resultado2E3.innerHTML = `  <tr>
                                    <th>Tipo</th>
                                    <th>Nombre</th>
                                    <th>Ventas totales</th>
                                </tr>`
    
    for(let i = 1; i<4; i++){
        resultado2E3.innerHTML += ` <tr>
                                        <td>${i}</td>
                                        <td>${buscarNombreE3(i)}</td>
                                        <td>${totalVentas(i)}</td>
                                    </tr>`
    }
}

function registrarVentaE4(){
    let marca = document.querySelector("#valor1E4").value;
    let modelo = document.querySelector("#valor2E4").value;
    let precio = parseInt(document.querySelector("#valor3E4").value);
    let cantidad = parseInt(document.querySelector("#valor4E4").value);
    let mensaje = '';

    if (modelo != '' && !isNaN(precio) && !isNaN(cantidad) && precio >0 && cantidad > 0){
        mensaje = "Se registro la venta de manera exitosa."
        let venta = new ejercicio4(marca,modelo,precio,cantidad)
        ventasE4.push(venta);
    } else {
        mensaje = "Para ingresar una venta se debe especificar modelo. Las cantidades y precios deben ser mayores que 0."
    }
    resultado1E4.innerHTML = mensaje;
}

function mostrarVentasE4() {
    resultado2E4.innerHTML =`   <tr>
                                    <td>Marca</td>
                                    <td>Modelo</td>
                                    <td>Ventas totales</td>
                                </tr>`
    for (venta of ventasE4){
        if (venta.cantidad*venta.precio > 2000){
            resultado2E4.innerHTML +=`  <tr>
                                            <td>${venta.marca}</td>
                                            <td>${venta.modelo}</td>
                                            <td>${venta.precio*venta.cantidad}</td>
                                        </tr>`
        }
    }
}

function ventasModeloE4(modelo){
    let total = 0;

    for(venta of ventasE4){
        if (venta.modelo == modelo){
            total += venta.precio*venta.cantidad
        }
    }
    return total;
}

function mostrarModeloE4(){
    let modelo = document.querySelector("#valor5E4").value;
    resultado3E4.innerHTML = "$" + ventasModeloE4(modelo);
}

function registrarVentaE5() {
    let marca = document.querySelector("#valor1E5").value;
    let talle = parseInt(document.querySelector("#valor2E5").value);
    let color = document.querySelector("#valor3E5").value;
    let origen = document.querySelector("#valor4E5").value;
    let mensaje = '';

    if (marca && !isNaN(talle) && talle < 47 && talle > 29 && color){
        let zapato = new ejercicio5(marca, talle, color, origen);
        mensaje = "Registro existoso."
        ventasE5.push(zapato);
    } else {
        mensaje = "Se deben completar todos los campos. Los talles deben estar entre 30 y 46."
    }

    resultado1E5.innerHTML = mensaje;

}

function filtrarPorTalleYNumero(arrayZapatos,origen){
    let counter = 0;
    for (zapato of arrayZapatos){
        if ( zapato.origen === origen && zapato.talle > 38){
            counter++
        }
    }
    return counter
}

function mostrarZapatosFiltrados(){
    let mensaje = ''
    let cantImportados = 0;
    for (zapato of ventasE5){
        if(zapato.origen == "Importado"){
            cantImportados++;
        }
    }
    if (filtrarPorTalleYNumero(ventasE5,"Nacional") > (cantImportados - filtrarPorTalleYNumero(ventasE5,"Importado"))){
        mensaje = "Hay mas zapatos Nacionales de talle mayor a 38 que Importados menor a 38"
    } else if (filtrarPorTalleYNumero(ventasE5,"Nacional") < (cantImportados - filtrarPorTalleYNumero(ventasE5,"Importado"))){
        mensaje = "Hay menos zapatos Nacionales de talle mayor a 38 que Importados menor a 38"
    } else {
        mensaje = "Las cantidades son iguales"
    }
    resultado2E5.innerHTML = mensaje;
}