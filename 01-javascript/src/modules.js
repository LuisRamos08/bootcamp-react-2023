import operations, { sum, mult as multi, initLog } from "../utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

export default () => {
  const colorA = "gold";
  const colorB = "goldenrod";

  initLog("MODULES", { color: colorA });

  const valA = 10;
  const valB = 5;
  const { add, substract, multiply, division } = operations;

  console.groupCollapsed("%c CUSTOM IMPORT", `color: ${colorA};`);
  console.log(sum(valA, valB));
  console.log(multi(valA, valB));
  console.groupEnd();

  const resultAdd = add(valA, valB);
  const resultSubstract = substract(valA, valB);
  const resultMultiply = multiply(valA, valB);
  const resultDivision = division(valA, valB);

  console.groupCollapsed("%c DEFAULT IMPORT", `color: ${colorA};`);
  console.log(`${valA} + ${valB} = `, resultAdd);
  console.log(`${valA} - ${valB} = `, resultSubstract);
  console.log(`${valA} * ${valB} = `, resultMultiply);
  console.log(`${valA} / ${valB} = `, resultDivision);
  console.groupEnd();
};

/**
 * import defaultExport from "module-name";
 * import * as name from "module-name";
 * import { export1 } from "module-name";
 * import { export1 as alias1 } from "module-name";
 * import { default as alias } from "module-name";
 * import { export1, export2 } from "module-name";
 * import { export1, export2 as alias2, …  } from "module-name";
 * import { "string name" as alias } from "module-name";
 * import defaultExport, { export1, … } from "module-name";
 * import defaultExport, * as name from "module-name";
 * import "module-name";
 *
 */
