import { initLog } from "../utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

export default () => {
  const colorA = "tomato";
  const colorB = "firebrick";

  initLog("OPERATORS", { color: colorA });

  /**
   * TRADITIONAL CONDITION
   */

  const MESSAGE = {
    MENOR: "Es MENOR de edad",
    MAYOR: "Es MAYOR de edad",
  };

  const person = {
    name: "Antonio",
    lastName: "Sansano",
    age: 20,
    gender: "M",
    isDriver: true,
    isStudent: false,
    isMarried: false,
  };

  const limitAge = 18;
  console.groupCollapsed("%c CONDICIONAL TRADICIONAL", `color: ${colorA};`);
  if (person.age >= limitAge) {
    console.log(MESSAGE.MAYOR);
  } else {
    console.log(MESSAGE.MENOR);
  }
  console.groupEnd();

  /**
   * TERNARY OPERATOR / isTrue ? ifScope : elseScope
   */

  console.groupCollapsed("%c CONDICIONAL TERNARIO", `color: ${colorA};`);
  person.age >= limitAge
    ? console.log(MESSAGE.MAYOR)
    : console.log(MESSAGE.MENOR);

  console.log(person.age >= limitAge ? MESSAGE.MAYOR : MESSAGE.MENOR);

  const status = person.age >= limitAge ? MESSAGE.MAYOR : MESSAGE.MENOR;
  console.log(status);
  console.groupEnd();

  /**
   * LOGICAL AND / &&
   * Evalúa de izquierda a derecha que se cumpla cada una de las condiciones.
   * Retorna el primer valor falso que encuentre, sino el último verdadero de la condición.
   *
   * No se suele utilizar para obtener su valor de retorno, sino para validar que la condición de
   * la izquierda se cumpla para seguir leyendo hacia la derecha.
   */

  console.groupCollapsed("%c LOGICAL AND / &&", `color: ${colorA};`);
  const isLegalAndMale = person.age >= limitAge && person.gender === "M";
  console.log("isLegalAndMale: ", isLegalAndMale);

  // Es MUY COMUN despachar una acción si la condición de la izquierda el verdadera.
  // Si no se cumple la primer condición, no se despacha la acción
  person.age >= limitAge && sendWelcomeMessage(person.name);
  function sendWelcomeMessage(name) {
    console.log(`Bienvenido al club, ${name}`);
  }
  console.groupEnd();

  /**
   * LOGICAL NOT / !
   * Evalúa por la negación de una condición y retorna un booleano
   */
  console.groupCollapsed("%c LOGICAL NOT / !", `color: ${colorA};`);
  const isNotDriver = !person.isDriver;
  console.log("isNotDriver: ", isNotDriver);
  console.groupEnd();

  /**
   * LOGICAL OR / ||
   * Retorna el operando de la derecha, si el de la izquierda es falsy (0, false, null o undefined)
   */
  console.groupCollapsed("%c LOGICAL OR / ||", `color: ${colorA};`);
  const falsyResultValue = person.isStudent || "Es estudiante";
  console.log("falsyResultValue: ", falsyResultValue);

  const falsyResultProp = person.anyProp || "La propiedad no existe";
  console.log("falsyResultProp: ", falsyResultProp);
  console.groupEnd();

  /**
   * NULLISH COALESCING / ??
   * Retorna el operando de la derecha, si el de la izquierda es null o undefined
   */
  console.groupCollapsed("%c NULLISH COALESCING / ??", `color: ${colorA};`);

  const nullishResultValue = person.isMarried ?? "Está casado";
  console.log("nullishResultValue: ", nullishResultValue);

  const nullishResultProp = person.anyProp ?? "La propiedad no existe";
  console.log("nullishResultProp: ", nullishResultProp);
  console.groupEnd();

  /**
   * OPTIONAL CHAINING / ?.
   * Retorna undefined si la propiedad que se intenta leer es de un objeto null o undefined,
   * evitando así que se lance una Exception y rompa el flujo
   */
  console.groupCollapsed("%c OPTIONAL CHAINING / ?.", `color: ${colorA};`);

  const optionalChainingResult = person.pet?.name;
  console.log("optionalChainingResult: ", optionalChainingResult);
  console.groupEnd();

  // const optionalChainingResult = person.pet.name //-> Lanza exception. 'No se puede acceder a name de undefined';
};
