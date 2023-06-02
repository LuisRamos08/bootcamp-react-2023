import { initLog } from "../utils";

export default () => {
  const colorA = "orange";
  const colorB = "darkorange";
  initLog("DOT VS BRACKET", { color: colorA });

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

  /**********************************
   * NOTACION DE PUNTO
   */
  console.groupCollapsed("%c NOTACION DE PUNTO", `color: ${colorA};`);

  const clonedDot = structuredClone(company);
  clonedDot.name = "Dot Company";

  console.log(clonedDot);

  console.groupEnd();

  /**********************************
   * NOTACION DE CORCHETE
   */
  console.groupCollapsed("%c NOTACION DE CORCHETE", `color: ${colorA};`);

  // Ejemplo 1
  const clonedBracket = structuredClone(company);
  clonedBracket["name"] = "Bracket Company";

  // Ejemplo 2
  const dynamicProp = "sector";
  clonedBracket[dynamicProp] = "Other Sector";

  // Ejemplo 3
  function changeValueByDynamicKey(obj, key, newValue) {
    obj[key] = newValue;
  }
  changeValueByDynamicKey(clonedBracket, "location", "Sin ubicación");
  console.log(clonedBracket);

  console.groupEnd();

  /**********************************
   * ITERACION
   */

  console.groupCollapsed("%c ITERACION", `color: ${colorA};`);

  // FOR IN - Key dinámica - NOTACION DE CORCHETES
  console.group("%c FOR IN", `color: ${colorB};`);
  for (const key in company) {
    console.log("key: ", key);
    console.log("value: ", company[key]);
    console.log(`{${key}: ${company[key]}}`);
    console.log("---------------");
  }
  console.groupEnd();

  console.groupEnd();
};
