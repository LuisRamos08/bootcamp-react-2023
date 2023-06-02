import { initLog } from "../utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

export default () => {
  const colorA = "limegreen";
  const colorB = "lightgreen";

  initLog("OBJECTS", { color: colorA });

  /*
   * CONSTRUCCION
   */
  console.groupCollapsed("%c CONSTRUCCION", `color: ${colorA};`);

  /*
   * LITERALS OBJECT / OBJETOS LITERALES
   */
  console.groupCollapsed("%c LITERALES", `color: ${colorB};`);

  const person = {
    name: "Juan",
    lastName: "Perez",
    age: 35,
  };

  const company = {
    name: "NTT DATA",
    sector: "Technology",
    location: {
      country: "Spain",
      city: "Alicante",
      address: {
        street: "calle de la Company",
        zipCode: 123,
      },
    },
  };

  console.table(person);
  console.table(company);
  console.groupEnd();

  /*
   * OBJETOS CONSTRUIDOS
   */
  console.groupCollapsed("%c CONSTRUIDOS", `color: ${colorB};`);

  function ObjPerson(nameParam, lastNameParam, ageParam) {
    this.name = nameParam;
    this.lastName = lastNameParam;
    this.age = ageParam;
  }
  const objPerson = new ObjPerson("Juan", "Perez", 35);
  console.table(objPerson);

  console.groupEnd();
  console.groupEnd();

  /*
   * DESCTRUCTURING / DESECTRUCTURACION - POR PROPIEDADES
   */
  console.groupCollapsed("%c DESECTRUCTURACION", `color: ${colorA};`);

  /**
   * BASICA
   */
  const { name, lastName, age } = person;

  console.group("%c BASICA", `color: ${colorB};`);
  console.log("name: ", name);
  console.log("lastName: ", lastName);
  console.log("age: ", age);
  console.groupEnd();

  /**
   * ALIAS
   */
  const { lastName: apellido } = person;

  console.group("%c ALIAS", `color: ${colorB};`);
  console.log("(Alias) apellido: ", apellido);
  console.groupEnd();

  /**
   * DESESTRUCTURACION ANIDADA
   */
  const {
    name: companyName, //<-- Alias
    sector,
    location: {
      // Primer nivel
      country,
      city,
      address: {
        // Segundo nivel
        street,
        zipCode,
      },
    },
  } = company;

  console.group("%c ANIDADA", `color: ${colorB};`);
  console.log("companyName: ", companyName);
  console.log("sector: ", sector);
  console.log("country: ", country);
  console.log("city: ", city);
  console.log("street: ", street);
  console.log("zipCode", zipCode);
  console.groupEnd();

  console.groupEnd();

  /*
   * INMUTABILIDAD - SPREAD OPERATOR / OPERADOR DE PROPAGACION
   */

  // BASICO - Solo primer nivel
  const personB = {
    ...person,
    name: "Carlos",
    age: 78,
  };

  // PROFUNDO
  const personC = structuredClone(person);
  personC.name = "Esteban";
  personC.lastName = "Quito";
  personC.age = 15;

  const personD = {
    ...structuredClone(person),
    name: "Jose",
    lastName: "Gomez",
  };

  console.groupCollapsed("%c INMUTABILIDAD", `color: ${colorA};`);
  console.table(personB);
  console.table(personC);
  console.table(personD);
  console.table(person);
  console.groupEnd();

  /*
   * ITERACION
   */
  console.groupCollapsed("%c ITERACION", `color: ${colorA};`);

  // FOR IN
  console.group("%c FOR IN", `color: ${colorB};`);
  for (const key in person) {
    console.log("key: ", key);
    console.log("value: ", person[key]);
    console.log("---------------");
  }
  console.groupEnd();

  console.groupEnd();
};
