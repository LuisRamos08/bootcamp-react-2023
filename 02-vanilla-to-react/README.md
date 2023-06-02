* IMPERATIVO VS DECLARATIVO

Javascript trabaja el flujo del código de forma imperativa.
Dice precismente y paso a paso como debe hacerse cada cosa.
El problema de trabajar así es que es dificil de mantener y escalar.


React nos ofrece la posibilidad de trabajar con un flujo declarativo,
aunque siempre tenemos que definir las acciones correctamente.
No existen las cosas automágicas :D



* REACT

React es una biblioteca de código abierto desarrollada por el equipo de META.

Documentación oficial: https://react.dev/
Repositorio del código: https://github.com/facebook/react

Nació en el 2011 con la intención de simplificar el desarrollo de Interfaces de usuario por medio de componentes.  Básicamente el problema radicaba en la complejidad de manejar formularios.

En 2013 pasó a ser openSource.

Tiene una sintaxis declarativa y trabaja bajo el paradigma de la programación funcional.

Ventajas:
1- El más demandado del mercado
2- Con la misma base se puede desarollar App para móviles (React Native)
3- Mantenimiento de la biblioteca a largo plazo y gran comunidad
4- API estable: No producen braking changes en los evolutivos. Son incrementales



* BIBLIOTECA REACT

React es 'simplemente' una biblioteca y podemos incorporarla a un proyecto de javascript.
Podemos importar el módulo de un CDN
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

Con esta importación podemos agregar un elemento de React en cualquier tipo de proyecto.



* JSX
https://facebook.github.io/jsx/

Es una extensión de ECMA Srcipt basada en XML. (Extensible Markup Language)
Nos va a facilitar a escribir de forma declarativa nuestro código.
Es una sintaxis basada en XML que nos permite DESCRIBIR la interfaz que necesitamos generar.



* SWC

Transpilador que se encarga de transformar JSX en Vanilla Javascript.

SWC: https://swc.rs
SWC Playground: https://swc.rs/playground

Es la alternativa moderna y superadora de Babel.

Babel: https://babeljs.io/
Babel playground: https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.21.9&externalPlugins=&assumptions=%7B%7D



* VITE
Empaquetador de aplicaciones web
https://vitejs.dev/