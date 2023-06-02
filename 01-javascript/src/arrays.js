import { initLog } from "../utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

export default () => {
  const colorA = "skyblue";
  const colorB = "dodgerblue";

  initLog("ARRAYS", { color: colorA });

  /*
   * CONSTRUCCION
   */
  console.groupCollapsed("%c CONSTRUCCION", `color: ${colorA};`);

  /*
   * LITERALS ARRAYS / ARRAYS LITERALES
   */
  console.groupCollapsed("%c LITERALES", `color: ${colorB};`);

  // primitives
  const primitives = ["Hi", 1, true];

  // objects
  const personA = {
    name: "Juan",
    lastName: "Perez",
    age: 35,
  };

  const personB = {
    name: "Carlos",
    lastName: "Gomez",
    age: 20,
  };

  const people = [personA, personB];

  console.log(
    `
  Primitivos
  `,
    primitives
  );
  console.log(
    `
  Objetos
  `,
    people
  );

  console.groupEnd();

  /*
   * CONSTRUIDOS
   */
  console.groupCollapsed("%c CONTRUIDOS", `color: ${colorB};`);

  const instanceOfPrimitives = new Array("string", 1, true);

  /**
   * Si se construye con un único argumento de tipo number
   * se define un array con la cantidad de elementos recibidos
   * por parámetro y con valores vacíos.
   */

  const instanceOfEmpty = new Array(3);

  console.log(
    `
  Primitivos
  `,
    instanceOfPrimitives
  );
  console.log(
    `
  Elementos vacíos
  `,
    instanceOfEmpty
  );

  console.groupEnd();
  console.groupEnd();

  /**********************************
   * DESCTRUCTURING / DESECTRUCTURACION - POR INDICES
   */
  console.groupCollapsed("%c DESECTRUCTURACION", `color: ${colorA};`);

  /**
   * BASICA
   */
  const [Juan, Carlos] = people;

  console.group("%c BASICA", `color: ${colorB};`);
  console.log("Juan: ", Juan);
  console.log("Carlos: ", Carlos);
  console.groupEnd();

  /**
   * DESESTRUCTURACION ANIDADA - BIDIMENSIONAL
   */

  const arrA = [1, 8, 15];
  const arrB = [10, 20, 30];
  const arrC = [arrA, arrB];
  const [[uno, ocho, quince], [diez, veinte, treinta]] = arrC;

  console.group("%c ANIDADA", `color: ${colorB};`);
  console.log("uno", uno);
  console.log("ocho", ocho);
  console.log("quince", quince);
  console.log("diez", diez);
  console.log("veinte", veinte);
  console.log("treinta", treinta);
  console.groupEnd();

  console.groupEnd();

  /**********************************
   * INMUTABILIDAD - SPREAD OPERATOR / OPERADOR DE PROPAGACION
   */

  const personC = {
    name: "Luis",
    lastName: "Orta",
    age: 30,
  };

  const addedPeople = [...people, personC];

  // PROFUNDO

  console.groupCollapsed("%c INMUTABILIDAD", `color: ${colorA};`);
  console.table(addedPeople);
  console.table(people);
  console.groupEnd();

  /**********************************
   * ITERACION
   */
  console.groupCollapsed("%c ITERACION", `color: ${colorA};`);

  // FOR OF -> Recorre cada elemento.  No retorna nada
  console.group("%c FOR OF", `color: ${colorB};`);
  for (const person of addedPeople) {
    console.log("person: ", person);
    console.log("---------------");
  }
  console.groupEnd();

  // FOR EACH -> Recorre cada elemento.  No retorna nada
  console.group("%c FOR EACH", `color: ${colorB};`);
  addedPeople.forEach((person) => {
    console.log("person: ", person);
    console.log("---------------");
  });
  console.groupEnd();

  // MAP -> Recorre, mapea cada elemento y devuelve un NUEVO ARRAY
  console.group("%c MAP", `color: ${colorB};`);
  const mappedPeople = addedPeople.map((person) => {
    const mappedPerson = {
      ...person,
      fullName: `${person.name} ${person.lastName}`,
    };
    console.log("mappedPerson: ", mappedPerson);
    console.log("---------------");
    return mappedPerson;
  });
  console.log("mappedPeople", mappedPeople);
  console.groupEnd();

  // FILTER -> Recorre, filtra cada elemento de acuerdo a una condicion y devuelve un NUEVO ARRAY
  // Si nungun cumple la condicion, devuelve un array vacío
  console.group("%c FILTER", `color: ${colorB};`);
  const filteredPeople = addedPeople.filter((person) => {
    return person.age > 30;
  });
  console.log("filteredPeople", filteredPeople);
  console.groupEnd();

  // FIND -> Recorre, busca EL PRIMER ELEMENTO que haga match con la condicion y retorna una copiade él
  // Si no encuentra el elemento, devuelve undefined
  console.group("%c FIND", `color: ${colorB};`);
  const findedPerson = addedPeople.find((person) => {
    return person.age > 25;
  });
  console.log("findedPerson", findedPerson);
  console.groupEnd();

  // SOME -> Recorre, busca que ALGUN ELEMENTO haga match con la condicion y retorna un booleano
  // Si no encuentra el elemento, devuelve false
  console.group("%c SOME", `color: ${colorB};`);
  const isSomePerson = addedPeople.some((person) => {
    return person.age > 25;
  });
  console.log("isSomePerson", isSomePerson);
  console.groupEnd();

  // EVERY -> Recorre, busca que TODOS LOS ELEMENTOS hagan match con la condicion y retorna un booleano
  // Si uno no la cumple, devuelve false
  console.group("%c EVERY", `color: ${colorB};`);
  const isEveryPerson = addedPeople.every((person) => {
    return person.age > 25;
  });
  console.log("isEveryPerson", isEveryPerson);
  console.groupEnd();

  console.groupEnd();
};
