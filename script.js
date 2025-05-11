 const productos =[
    {
    nombre: "Laptop Gamer",
    precio: 1200.50,
    codigo: "PROD001"
  },
    {
    nombre: "Teclado Mecánico RGB",
    precio: 75.99,
    codigo: "PROD002"
  },
  {
    nombre: "Mouse Inalámbrico Ergonómico",
    precio: 25.00,
    codigo: "PROD003"
  },
  {
    nombre: "Monitor Curvo 27 pulgadas",
    precio: 350.75,
    codigo: "PROD004"
  }

 ]

 /*La lógica se puede desglosar en los siguientes pasos clave:

1.  **Acceso a los Datos y al Contenedor de la Tabla:**
    Primero, nuestro script de JavaScript necesitará acceder al array `productos`. Dado que hemos enlazado `productos.js` antes que nuestro script principal (`script.js`) en el archivo `index.html`, la variable `productos` estará disponible globalmente para `script.js`.
    A continuación, necesitamos una referencia al elemento HTML donde insertaremos las filas de la tabla. 
    En nuestro `index.html`, el `<tbody>` tiene el `id="body_table"`. Usaremos JavaScript para seleccionar este elemento específico. 
    El método común para esto es `document.getElementById("body_table")`. Una vez que tengamos esta referencia, podemos agregarle nuevo contenido.

2.  **Iteración sobre los Datos del Array:**
    El array `productos` contiene varios objetos, donde cada objeto representa un producto con sus propiedades: `nombre`, `precio` y `codigo`. 
    Para mostrar cada producto en la tabla, necesitamos recorrer este array. Un bucle `for...of` o el método `forEach()` son ideales para esto. 
    Por cada objeto `producto` en el array, realizaremos una serie de acciones para crear una nueva fila en la tabla.

3.  **Creación Dinámica de Elementos HTML (Filas y Celdas):**
    Dentro del bucle, para cada producto, necesitamos crear los elementos HTML que formarán una fila de la tabla. Esto se hace mediante el método `document.createElement()`.
    *   **Crear una Fila (`<tr>`):** Primero, creamos un nuevo elemento de fila de tabla: `let nuevaFila = document.createElement("tr");`.
    *   **Crear Celdas (`<td>`):** Para cada propiedad del producto (`nombre`, `precio`, `codigo`), crearemos un elemento de celda de tabla: `let celdaNombre = document.createElement("td");`, y así sucesivamente para el precio y el código.

4.  **Poblar las Celdas con Datos:**
    Una vez que tenemos los elementos de celda, necesitamos rellenarlos con los datos del producto actual en la iteración. El contenido de texto de un elemento se puede establecer usando la propiedad `textContent` (o `innerText`). 
    Por ejemplo, `celdaNombre.textContent = producto.nombre;`, `celdaPrecio.textContent = producto.precio;`, y `celdaCodigo.textContent = producto.codigo;`.

5.  **Ensamblaje de la Fila (Añadir Celdas a la Fila):**
    Después de crear y poblar las celdas, estas deben ser añadidas a la fila que creamos anteriormente. Esto se hace usando el método `appendChild()`. Por ejemplo: `nuevaFila.appendChild(celdaNombre);`, `nuevaFila.appendChild(celdaPrecio);`, y `nuevaFila.appendChild(celdaCodigo);`.

6.  **Inserción de la Fila en la Tabla (Añadir Fila al `<tbody>`):**
    Finalmente, la fila completa (`nuevaFila`), que ahora contiene todas sus celdas con los datos del producto, se añade al `<tbody>` de nuestra tabla (que obtuvimos en el paso 1). Esto también se hace con `appendChild()`: `referenciaAlBodyDeLaTabla.appendChild(nuevaFila);`.

7.  **Ejecución del Script:**
    Para que todo esto suceda cuando la página se carga, es una buena práctica envolver esta lógica en una función. 
    Luego, esta función puede ser llamada después de que el DOM esté completamente cargado. Un evento común para esto es `DOMContentLoaded`, que asegura que todo el HTML ha sido analizado antes de que el script intente manipularlo. 
    Alternativamente, colocar la etiqueta `<script>` al final del `<body>` (como lo hemos hecho en `index.html`) a menudo asegura que los elementos HTML ya existen cuando el script se ejecuta.*/

    // Paso 1: Acceso a los Datos y al Contenedor de la Tabla
    // Los datos de los productos se encuentran en la variable 'productos', 
    // Obtener una referencia al tbody de la tabla donde se insertarán las filas.
    // El tbody tiene el id 'body_table' en nuestro archivo index.html.

    let tablaBody = document.getElementById("body_table");

    /* Verificar si el elemento tbody fue encontrado
    if (!tablaBody) {
        console.error("No se encontró el elemento con id 'body_table'. Verifica tu HTML.");
        return; // Detener la ejecución si no se encuentra el tbody
    }*/

     // Paso 2: Iteración sobre los Datos del Array 'productos'
    // Usamos un bucle 'for...of' para recorrer cada objeto 'producto' dentro del array 'productos'.
    for (const producto of productos) {
        
        // Paso 3: Creación Dinámica de Elementos HTML (Fila <tr>)
        // Para cada producto, creamos un nuevo elemento de fila (<tr>)
        const  nuevaFila = document.createElement("tr");

        // Paso 4 y 5: Crear Celdas (<td>), Poblarlas y Añadirlas a la Fila
        
        // Crear celda para el Nombre

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre ;

        nuevaFila.appendChild(celdaNombre);


        //crear fila y celda para precios. Añadirlas a la fila:

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio;

        nuevaFila.appendChild(celdaPrecio);

        const celdaCodigo = document.createElement("td");

        celdaCodigo.textContent = producto.codigo;

        nuevaFila.appendChild(celdaCodigo);

        //agregamos las filas a tbody
        tablaBody.appendChild(nuevaFila);
    }

    console.log("tabla generada dinamicamente");