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

/*Ejercicio 11
Aplicar estilos a varios elementos
Agregar varios párrafos con una clase compartida. Al presionar un botón, debe
cambiar el fondo de esos elementos (resaltarlos visualmente).*/

const btn_aplicarEstilo = document.getElementById("aplicar_estilo");
const textoConEstilo = document.getElementsByClassName("texto_estilo");

function AplicarEstiloText(){
    btn_aplicarEstilo.addEventListener("click", ()=>{
        for(let i =0; i < textoConEstilo.length; i++){
        textoConEstilo[i].style.color = "white";
        textoConEstilo[i].style.background = "blue";
    }})
}

AplicarEstiloText();

/*Validación de formulario simple
Crear un pequeño formulario con nombre y correo. Al hacer click en enviar, debe
validar que ambos campos estén completos. Muestra un mensaje de error o éxito
según el caso.*/

//tomo los elementos html:

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

function validarDatos(){
    formulario.addEventListener("submit", function(evento){
        evento.preventDefault()// Evita que se envíe el formulario

        const nombre = document.getElementById("name").value.trim();
        const correo = document.getElementById("mail").value.trim();

        if( nombre === ""|| correo === ""){
            mensaje.textContent = "Por favor complete los datos";
            mensaje.className = "mensaje error";
        }else{
            mensaje.textContent = "Formulario enviado con exito";
            mensaje.className = "mensaje exito";
        }
    })


}

validarDatos();
console.log("Elemento mensaje:", mensaje);

//ejercicio 13
/*Generador de lista de tareas
Crear una lista de tareas con un input y botón. Cada tarea debe incluir un botón
para marcarla como completada (tachada).*/

const botonTarea = document.getElementById("btn_tarea");
const textoTarea = document.getElementById("input_tarea");
const lista1 =document.getElementById("listaTarea");

function GenerarLista(){
    botonTarea.addEventListener("click", function() {
     let tarea_li = document.createElement("li");
     
     tarea_li.textContent = textoTarea.value.trim();
      let botonTachado = document.createElement("button");
      botonTachado.textContent ="✓";
      botonTachado.style.color ="green";
      botonTachado.addEventListener("click", function(){
        tarea_li.classList.toggle("tachada");
      })
    
     
      tarea_li.appendChild(botonTachado);
      lista1.appendChild(tarea_li);
      textoTarea.value ="";

    })  
     
}
GenerarLista();

// ejercicio 14 :Mostrar longitud de texto ingresado
/*Incluir un input de texto y, mientras el usuario escribe, muestra la cantidad de
caracteres ingresados.*/

const Largotext =  document.getElementById("input_long");
const numeroText =  document.getElementById("contenedor_longitud");

function LargoTexto(){
    Largotext.addEventListener("input", ()=>{
        numeroText.textContent = Largotext.value.length;
    })

}
LargoTexto();

/*Ejercicio 15
Cambiar imagen con botón
Mostrar una imagen en pantalla. Al hacer click en un botón, debe cambiar por otra
imagen (usa 2 o más imágenes disponibles).*/

const botonImagen = document.getElementById("btn_imagen");
const imagen2 = document.getElementById("imagen1");
 let mostrarImagen = true;
function cambiarImagen(){
 botonImagen.addEventListener("click",function (){
  if(mostrarImagen){
    imagen2.src ="imagenes/WhatsApp Image 2025-05-12 at 1.48.19 PM.jpeg";
    mostrarImagen= false;
  }else{
    imagen2.src="imagenes/WhatsApp Image 2025-05-12 at 1.47.48 PM.jpeg"
    mostrarImagen = true;
  }


 })
}
cambiarImagen();