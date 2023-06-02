import "./style.css";
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

// ReactDOM nos permite crear la conexion con el DOM
// Creamos la referencia al elemento conenedor de la App
const appRef = document.getElementById("app");

// Creamos la raíz de nuestro árbol.
const root = ReactDOM.createRoot(appRef);

// ejecutamos el Método render de la instancia root
// para poder 'pintar' dentro de ese elemento
// root.render("Bienvenido a la devSchool de React!");

// Es posible renderizar un string, pero no renderizar elementos con un string.
// Esto es para evitar la inyección de código malicioso de terceros
// La solución es crear un elemento del DOM
// root.render("<button>ClickMe</button>");

// Para poder crear un elemento del DOM, utilizaremos la libreria de React
// createElement('selector', {propiedades}, <>contenido del elemento</> );

// Creamos el elemento button con el id: 'counter'
const buttonCounterRef = React.createElement(
  "button",
  { id: "counter", type: "button" },
  "counter"
);

// Creamos el elemento div con la clase 'card' y como contenido leasignamos el elemento button
const cardRef = React.createElement(
  "div",
  { className: "card" },
  buttonCounterRef
);

// Renderizamos la card con el boton dentro
/*
<div class="card">
    <button id="counter" type="button">
        counter
    </button>
</div>
*/

// SIEMPRE SE RENDERIZA UN UNICO ELEMENTO
root.render(cardRef);

/**
 * En el caso de que necesitemos renderizar mas de un elemento,
 * lo envolvemos en un componente padre (wrapper).
 * Por lo tanto, el padre va a tener 3 elementos hijos [elem1, elem2, elem3]
 */
// Ejemplo
const cardRefB = React.createElement(
  "div",
  { className: "card" },
  buttonCounterRef
);
const containerRef = React.createElement("div", null, [cardRef, cardRefB]);
root.render(containerRef);

/**
 *
 *
 * Continúa siendo muy repetitivo (verboso) e imperativo.
 */

/**
 * JSX AL RESCATE :)
 */

// <div className="card">
//     <button id="counter" type="button">
//         counter
//     </button>
// </div>

/**
 *
 *
 * NOOOOOOOOOOO
 * NO ES HTML!!!
 *
 * Es Javascript con Azúcar sintática
 *
 */

/**
 * JSX
 *
 * EXPRESIONES -> devuelven un valor
 * DECLARACIONES -> NO devuelven valor
 *
 * Las llaves indican a JSX que vamos a insertar un expersion, que va a devolver un valor
 * para poder pintarlo en el elemento
 *
 * Estas llaves suelen ser conocidas también como interpolación.
 *
 * En Angular, por ejemplo, se utiliza doble llaves {{ expresion }} dentro del DOM
 *
 * Ejemplo:
 * const buttonText = 'counter';
 * <button> { buttonText } </button>
 *
 *
 * IMPORTANTE: El código que escribimos en JSX es báscicamente Javascript.
 *
 *
 * NOMENCLATURAS
 *
 * camelCase
 * PascalCase
 * kebab-case
 * snake_case
 *
 * Debemos matener la nomenclatura en la sintaxis referidas a las variables,
 * funciones del componente y atributos o propiedades de los elementos. *
 * esta nomenclatura es la de 'camelCase'
 *
 * const someVar = 'xxx';
 * function someFunction(){}
 * <button someProp="something"></button>
 *
 *
 * En el caso de los componentes, se declaran en 'PascalCase' (Como una Clase)
 *
 * export function SomeComponent(){}
 *
 *
 * Los ficheros que no sean referidos a componentes, suele utilizarse 'kebab-case'.
 *
 * Fichero de componente -> SomeComponent.tsx
 * Fichero de utils -> some-utils.js
 *
 *
 *
 *
 * PALABRAS RESERVADAS
 *
 * De nuevo, como estamos trabajado en Javascript, la palabra 'class'
 * es reservada para crear una Clase.
 * Por lo tanto, cuando queremos agregar una clse como propiedad de un elemento,
 * utilizaremos: 'className'
 *
 * <div className="someClass"></div>
 *
 *
 */
