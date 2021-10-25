//SELECTORES//
/*Botones*/
const btn1E1 = document.querySelector("#btn1E1");
const btn2E1 = document.querySelector("#btn2E1");
const btn3E1 = document.querySelector("#btn3E1");

const btn1E2 = document.querySelector("#btn1E2");
const btn2E2 = document.querySelector("#btn2E2");
const btn3E2 = document.querySelector("#btn3E2");

/*Resultados*/
let resultado1E1 = document.querySelector("#resultado1E1");
let resultado2E1 = document.querySelector("#resultado2E1");

let resultado1E2 = document.querySelector("#resultado1E2");
let resultado2E2 = document.querySelector("#resultado2E2");
let resultado3E2 = document.querySelector("#resultado3E2");

//EVENT LISTENERS//
btn1E1.addEventListener("click", crearPersonaE1);
btn2E1.addEventListener("click", crearTablaTodosE1);
btn3E1.addEventListener("click", crearTablaMayoresE1);

btn1E2.addEventListener("click", crearPeliculaE2);
btn2E2.addEventListener("click", listarPeliculasE2);
btn3E2.addEventListener("click", buscarPeliculasE2);

//DATA//
let personasE1 = [];
let peliculasE2 = [];

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
            resultado2E2.innerHTML += ` <tr>
                                            <td>${peliculasE2[i].nombre}</td>
                                            <td>${peliculasE2[i].anio}</td>
                                            <td>${peliculasE2[i].genero}</td>
                                            <td>${(peliculasE2[i].puntos)/(peliculasE2[i].votos)}</td>
                                        </tr>`
        }
    }
    resultado1E2.innerHTML = '';
}

function buscarPeliculasE2() {
    let encontrado = false;
    let i = 0;
    let nombre2E2 = document.querySelector("#valor6E2").value;
    while (encontrado || i < peliculasE2.length){
        if (peliculasE2[i].nombre == nombre2E2){
            
        }

    }
}