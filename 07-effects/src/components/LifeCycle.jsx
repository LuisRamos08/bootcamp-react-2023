import { useState, useEffect } from "react";
const LifeCycle = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  console.log("RENDER");

  useEffect(() => {
    console.log("EFECTO SIN DEPENDENCIAS");
  });

  useEffect(() => {
    console.log("EFECTO CON DEPENDENCIA VACIA");
  }, []);

  useEffect(() => {
    console.log("EFECTO CON DEPENDENCIA COUNT A");
  }, [countA]);

  useEffect(() => {
    console.log("EFECTO CON DEPENDENCIA DE COUNT A Y COUNT B");
  }, [countA, countB]);

  useEffect(() => {
    if (countA === 3) {
      console.log("COUNT A ha llegado a 3");
    }
  }, [countA]);

  return (
    <>
      {console.log("VISTA")}
      <div>LifeCycle</div>
      <button onClick={() => setCountA(countA + 1)}>Sumar A</button>
      <h4>{countA}</h4>

      <button onClick={() => setCountB(countB + 1)}>Sumar B</button>
      <h4>{countB}</h4>
    </>
  );
};

export default LifeCycle;

/**
 * 2 parametros: 1- una funcion 2- un array
 * El segundo parametro es opcional (y peligroso)
 * Se ejecuta luego de pintar la vista
 *
 * VECES QUE SE EJECUTA
 * 1- Al menos una vez. SIEMPRE que el componente se monta
 * 2- Si no tiene dependencias, se ejecuta en cada cambio de estado
 * 3- Si tiene dependencias, se ejecuta cuando ALGUNA de ellas cambia
 *
 *
 */
