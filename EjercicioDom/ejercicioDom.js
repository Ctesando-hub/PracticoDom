/*Crea una página con un botón que diga "Agregar párrafo".

Al hacer clic en el botón, se debe agregar un nuevo <p> debajo del mismo con el texto: "Este es un nuevo párrafo".*/
function agregarParrafo(){
let botonAgregar =  document.getElementById("btn_agregar");
let contenedor = document.getElementById("div_contenedor");

botonAgregar.addEventListener("click", () =>{
nuevoparrafo = document.createElement("p");
nuevoparrafo.textContent ="Este es un nuevo párrafo";
contenedor.appendChild(nuevoparrafo);
})

}

agregarParrafo();

/*Ejercicio 9
Mostrar/Ocultar texto
Incluir un párrafo visible y un botón que permita ocultarlo o mostrarlo según su
estado actual. El texto del botón debe cambiar entre “Mostrar” y “Ocultar”.*/

const contenedor_text = document.getElementById("div_botones");
const boton_ocultMostrar = document.getElementById("btn_ocultar_mostrarTxt");

const texto = document.getElementById("texto_cambiar");

function ocultar_MostrarText(){
    boton_ocultMostrar.addEventListener("click", () =>{
        if(texto.hidden){
            texto.hidden = false;
            boton_ocultMostrar.textContent = "Ocultar texto"
        }else{
            texto.hidden =true;
            boton_ocultMostrar.textContent = "Mostrar texto"
        }
    })
}

ocultar_MostrarText();

/*Ejercicio 10
Actualizar título en tiempo real
Crear un campo de texto y un título (<h2>). A medida que el usuario escribe, el
texto del título debe actualizarse en tiempo real.*/

const input1 = document.getElementById("input_tiempoReal");
const tituloTiempReal = document.getElementById("id_tiempoReal");

function EscribirTiempoReal(){
    input1.addEventListener("input", () =>{
        tituloTiempReal.textContent = input1.value;
    })
}

EscribirTiempoReal();