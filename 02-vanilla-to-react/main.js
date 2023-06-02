import "./style.css";

// Agregamos la referencia al elemento 'app'
const appRef = document.querySelector("#app");

// Creamos un div que va a contener al botón
const cardRef = document.createElement("div");

// Asiganmos un estilo a cardRef
cardRef.classList.add("card");

// Pintamos un template dentro del elemento 'cardRef'
cardRef.innerHTML = `<button id="counter" type="button"></button>`;

// Agregamos cardRef dentro de appRef
appRef.appendChild(cardRef);

// Agregamos la referencia al elemento boton 'counter'
const buttonCounterRef = document.querySelector("#counter");

// Declaramos e inicializamos el contador
let counter = 0;

// Definimos la funcion que incrementará el contador
const setCounter = (newValue) => {
  counter = newValue;

  // Pintamos el nuwvo contenido dentro del boton
  buttonCounterRef.innerHTML = `count is ${counter}`;

  // Validamos si el nuevo numero es par o impar
  // De acuerdo a eso removemos o asignamos estilos
  // even -> Par / odd -> Impar
  if (counter % 2 === 0) {
    if (buttonCounterRef.classList.contains("odd")) {
      buttonCounterRef.classList.remove("odd");
    }
    buttonCounterRef.classList.add("even");
  } else {
    buttonCounterRef.classList.remove("even");
    buttonCounterRef.classList.add("odd");
  }
};

// Creamos el Listener para escuchar el evento click en el boton
buttonCounterRef.addEventListener("click", function () {
  // Asignamos un nuevo valor y se lo pasamos a la funcion
  let newValue = counter + 1;
  setCounter(newValue);
});

// Ejecutamos la funcion para dar un valor inicial
setCounter(0);
