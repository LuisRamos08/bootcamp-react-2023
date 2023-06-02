import { initLog } from "../utils";

export default () => {
  const colorA = "lightseagreen";
  const colorB = "mediumseagreen";
  initLog("FUNCTIONS", { color: colorA });

  console.groupCollapsed("%c CONSTRUCCION", `color: ${colorA};`);

  /**
   * FUNCIONES NOMBRADAS
   */
  console.groupCollapsed("%c NOMBRADAS", `color: ${colorB};`);

  function namedFunc(message) {
    console.log(message);
  }
  console.log(namedFunc);
  namedFunc("Funcion nombrada ejecutada");

  console.groupEnd();

  /**
   * EXPRESION DE FUNCIONES / ANONIMAS
   */
  console.groupCollapsed("%c ANONIMAS", `color: ${colorB};`);

  const anonymousFunc = function (message) {
    console.log(message);
  };
  console.log(anonymousFunc);
  anonymousFunc("Funcion anónima ejecutada");

  console.groupEnd();

  /**
   * FUNCIONES DE FLECHA
   */
  console.groupCollapsed("%c DE FLECHA", `color: ${colorB};`);

  const arrowFuncWithoutParams = () => {
    console.log("%c Ejecutada sin argumentos", `color: ${colorB};`);
  };
  console.log(arrowFuncWithoutParams);
  arrowFuncWithoutParams();
  console.log("---------------------");

  const arrowFuncWithOneParam = (param) => {
    console.log(`%c ${param}`, `color: ${colorB};`);
  };
  console.log(arrowFuncWithOneParam);
  arrowFuncWithOneParam("Ejecutada con un solo argumento");
  console.log("---------------------");

  const arrowFuncWithMultipleParams = (paramA, paramB) => {
    console.log(`%c ${paramA} ${paramB}`, `color: ${colorB};`);
  };
  console.log(arrowFuncWithMultipleParams);
  arrowFuncWithMultipleParams("Ejecutada", "con varios argumentos");
  console.log("---------------------");

  const arrowFuncWithExplicitReturn = (param) => {
    return console.log(`%c ${param}`, `color: ${colorB};`);
  };
  console.log(arrowFuncWithExplicitReturn);
  arrowFuncWithExplicitReturn("Ejecutada con RETURN EXPLICITO");
  console.log("---------------------");

  const arrowFuncWithImplicitReturn = (param) =>
    console.log(`%c ${param}`, `color: ${colorB};`);

  console.log(arrowFuncWithImplicitReturn);
  arrowFuncWithImplicitReturn("Ejecutada con RETURN IMPLICITO");
  console.log("---------------------");

  console.groupEnd();

  console.groupEnd();

  /**
   * FUNCIONES COMO METODOS DE OBJETOS
   */
  console.groupCollapsed("%c FUNCIONES COMO METODOS", `color: ${colorA};`);
  /**
   * PROBLEMA CON LA FUNCION DE FLECHA Y SU CONTEXTO (THIS)
   */
  // Cuando las funciones de flecha se las trabaja dentro de un objeto (como métodos)
  // no guardan el contexto donde fueron creadas, perdiendo referencia a las propiedades
  // del objeto.  'this' Hace referencia, precisamente al contexto creado por el objeto.
  const person = {
    name: "Francisco",
    sayHiArrow: () => console.log(`Hola, ${this.name}`),
    sayHi: function () {
      console.log(`Hola, ${this.name}`);
    },
  };

  console.log("person: ", person);
  console.warn(
    "person.sayHiArrow(); //-> Exception. Cannot read properties name of undefined"
  );
  person.sayHi();

  console.groupEnd();

  /**
   * CALLBACK
   */
  // Es una funcion que se envía por referencia, como argumento a otra funcion,
  // para que esta última la ejecute en el momento oportuno.

  console.groupCollapsed("%c CALLBACK", `color: ${colorA};`);

  const buildGreeting = (name, cb) => {
    const message = `Hola ${name}, Bienvenido!`;
    cb(message);
  };

  const showGreeting = (message) => console.log(message);

  buildGreeting("Juan Manuel", showGreeting);

  console.groupEnd();

  /**
   * El paradigma de la programacion FUNCIONAL se basa en el concepto
   * de INMUTABILIDAD.  Esto significa que la "fuente de la verdad"
   * no debe ser alterada, sino que hay que trabajar con nuevos elementos
   * partiendo del original.
   */

  /**
   * HIGH ORDER FUNCTIONS / FUNCIONES DE ORDEN SUPERIOR
   */

  console.groupCollapsed("%c FUNCIONES DE ORDEN SUPERIOR", `color: ${colorA};`);

  /**
   * Es una funcion que recibe por parámetro otra función.
   * Puede ejecutarla o devolverla como retorno.
   * Son fundamentos del paradigma de la programación funcional
   * y un ejemplo de ellas pueden ser map, filter, setTimeout, etc.
   */

  const arrToMap = [1, 2, 3];

  const firstOrderFunc = (item) => {
    return item * 2;
  };

  const mappedItems = arrToMap.map(firstOrderFunc);

  console.log("mappedItems: ", mappedItems);

  // Crearemos nuestro propio metodo MAP utilizando el arrToMap y firstOrderFunc
  const customMap = (arr, fn) => {
    const output = [];
    for (const item of arr) {
      const value = fn(item);
      output.push(value);
    }
    return output;
  };

  const customMappedItems = customMap(arrToMap, firstOrderFunc);
  console.log("customMappedItems: ", customMappedItems);

  console.groupEnd();

  /**
   * PURE FUNCTIONS / FUNCIONES PURAS E IMPURAS
   *
   * Codigo predecible
   * Testeable
   * Escalable
   * Evitar Efectos secundarios
   */

  console.groupCollapsed("%c FUNCIONES PURAS E IMPURAS", `color: ${colorA};`);
  /**
   * Las FUNCIONES PURAS No producen efectos secundarios. Son predecibles.
   * Mismo dato de entrada, mismo dato de salida
   */

  console.groupCollapsed("%c PURAS", `color: ${colorB};`);

  const numA = 5;
  const numB = 2;

  const pureFunc = (a, b) => a + b;

  console.log(`
  Entrada ${numA}, ${numB}
  Salida: ${pureFunc(numA, numB)}
  `);
  console.log(`
  Entrada ${numA}, ${numB}
  Salida: ${pureFunc(numA, numB)}
  `);

  console.groupEnd();

  console.groupCollapsed("%c IMPURAS", `color: ${colorB};`);

  let originalMessage = "Hola!";
  const impureFunc = (message) => {
    originalMessage = originalMessage + " " + message;
  };
  console.log(`
  originalMessage
  Antes de impureFunc: ${originalMessage}
  `);
  impureFunc("Es un bonito día :)");
  console.log(`
  originalMessage
  Luego de impureFunc: ${originalMessage}
  `);

  console.groupEnd();

  console.groupEnd();

  /**
   * CLOSURES
   */
  /**
   * Funcion que debe cumplir con 3 condiciones:
   * 1- variable interna
   * 2- Otra funcion definida dentro (Funciones anidadas)
   * 3- Esta funcion anidada debe podes ser accedida desde fuera de la funcion principal
   *
   * Es un patrón muy utilizado antes de las Clases en JS
   * Crea un nuevo entorno léxico
   */

  console.groupCollapsed("%c CLOSURES", `color: ${colorA};`);

  function createCounter() {
    let counter = 0;

    function increment() {
      counter = counter + 1;
      return counter;
    }

    return increment;
  }

  const incrementCounter = createCounter();

  console.log(`incrementCounter: ${incrementCounter()}`);
  console.log(`incrementCounter: ${incrementCounter()}`);

  console.groupEnd();
};
