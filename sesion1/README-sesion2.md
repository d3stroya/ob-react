# Componentes
Los componentes son elementos reutilizables. Pueden ser estáticos (sin datos variables), pero la esencia de React es que los componentes sean reactivos, es decir, dinámicos, que reaccionen a ciertas acciones.
Pueden tener relaciones con otros componentes y debemos montar una jerarquía.
Llevan la extensión .jsx, que es una combinación de js y html.

## Extensiones útiles
* Babel JavaScript: para js moderno
* Better comments: dibujar comentarios de diferentes colores
* Bootstrap 4: automatiza código bootstrap
* Color highlith: permite previsualizar colores hexadecimales
* ES7 + React/Redux/React-Native snippets
* ESLint: para mantener el código limpio y coherente.
* Image preview: previsualizar imágenes para asegurarnos de que están bien cargadas.
* JS JSX Snippets
* Material Icon Theme: muestra iconos en los archivos y las ventanas correspondientes al lenguaje (js, react, html,...)
* Path Intellisense: para rutas
* Version Lens: muestra la última versión de los paquetes

## Componentes 
Creamos una carpeta "components" dentro de /src.

* Componentes clase: tienen constructores, atributos, métodos...
* Componentes funcionales: es programación funcional.

A. Creamos otra carpeta "pure" dentro de /components
* Puros: que no sean muy complejos.
1. Creamos un archivo greeting.jsx que será un componente clase. Para ello, escibimos rccp (react class copmonent con props) y VSCode autocompleta gracias a los plugins previamente instalados.
2. Importar el componente en App.js y colocarlo en el documento.
3. Añadimos un constructor al que pasamos información. Se añaden antes del render. Le pasamos los datos por parámetros a través de props. También tienen un estado, que es información privada de la clase, no modificable desde fuera; solo puede modificarse con un setState (setter). Desde el render podemos acceder a esa información con this.props y this.state. Las propiedades se especifican en App.js en la etiqueta del componente.
4. PropTypes: indica el tipo de dato de las propiedades. JS al tener un tipado débil, hay que especificar el tipo de dato para que otros usen bien el componente.
5. Definimos una función flecha (evita tener que usar constantemente this) setState. Permite modificar el estado.
6. Botón con evento para ejecutar la función birthday (setState): onClick.
7. Para que la vista se regenere y se muestren los cambios, hay que cambiar el estado; es lo que hace que la vista se genere de nuevo.

B. Hacemos lo mismo pero con una clase función.
Da agilidad porque en cualquier momento devuelve rápidamente un html.
1. Creamos un archivo greetingF.jsx. Para ello, escribimos rcfp (guarda la función en una constante).
2. Copiar el código html de greeting.jsx
3. Al ser una función, no tiene props ni state, se hace a través de hooks. Pasamos props por parámetro de la función.
4. Hacemos lo mismo que antes con propTypes
5. Importamos el módulo en App.js y lo colocamos en el código html.
6. useState: función para crear un estado privado para este componente funcional. Para ello, importamos { useState } from react.