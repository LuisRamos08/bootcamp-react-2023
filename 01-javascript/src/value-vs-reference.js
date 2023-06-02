import { initLog } from "../utils";

export default () => {
  const colorA = "mediumorchid";
  const colorB = "mediumvioletred";
  initLog("VALUE VS REFERENCE", { color: colorA });

  /**
   * POR VALOR
   * Los argumentos primitivos que se envían a una función, pasan POR VALOR.
   * Esto quiere decir literalmente que se le envía el valor de la variable
   * y NO la referencia a la variable.
   */

  console.groupCollapsed("%c POR VALOR", `color: ${colorA};`);

  let name = "Pedro";
  let age = 30;

  function byValue(nameParam, ageParam) {
    nameParam = "Miguel";
    ageParam = 15;
    console.log("--- dentro de byValue ---");
    console.log("name: ", nameParam);
    console.log("age: ", ageParam);
  }

  console.log("--- antes de byValue ---");
  console.log("name: ", name);
  console.log("age: ", age);

  byValue(name, age);

  console.log("--- luego de byValue ---");
  console.log("name: ", name);
  console.log("age: ", age);

  console.groupEnd();

  /**
   * POR REFERENCIA
   * Los argumentos como OBJETOS, ARRAY y FUNCIONES que se envían a una función,
   * pasan POR REFERENCIA al espacio en memoria donde está creado ese elemento.
   * Esto quiere decir literalmente que se le envía la dirección del objeto original
   * y NO el valor en sí mismo.
   */

  console.groupCollapsed("%c POR REFERENCIA", `color: ${colorA};`);

  const person = {
    name: "Pedro",
    age: 30,
  };

  function byReference(objectParam) {
    objectParam.name = "Miguel";
    objectParam.age = 15;
    console.log("--- dentro de byReference ---");
    console.log("person: ", objectParam);
  }

  console.log("--- antes de byReference ---");
  console.log("person: ", person);

  byReference(person);

  console.log("--- luego de byReference ---");
  console.log("person: ", person);

  console.groupEnd();
};
