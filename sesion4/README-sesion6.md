# Trabajando con estilos
Tenemos un index.css con los estilos generales de todo el proyecto y un App.css con estilos, que herada los estilos del index. Los archivos que estén por debajo, heredan estos estilos.
Especificdad: de más a menos: id > class > tag. 
Es recomendable evitar el !important; se debe a no haber aplicado bien la especificidad.
1. Instalar dependencia node sass: npm install --save node-sass
2. Crear estilo en App.css
3. Crear carpeta styles dentro de src
4. Crear archivo task.scss
5. Importar la hoja de estilo task.scss en task.jsx
6. Añadir atributo className al h2 en task.jsx


## Estilos dentro de componentes
1. Dentro de pure, crear archivo greetingStyled.jsx
2. Definir estilos a través de constantes.
   1. Constante = objeto con los atributos.
   2. Cuando el atributo tiene más de una palabra, no se pone guion, sino camelCase.
3. Crear estado para el componente y controlar si se muestra un estilo (logged) u otro (unlogged).
4. Añadir atributo style en el div con un operador ternario para que se muestre un estilo u otro.
5. Crear botón con operador ternario.
   1. Añadir onClick con función flecha

Podemos usar el operador ternario para mostrar unas cosas u otras, tanto estilos, como cadenas de texto o elementos html.

## Instalar bootstrap 
1. npm install bootstrap (--save)
2. En index.js importar Bootstrap: debe aparecer encima de nuestros estilos para que podamos añadir nuestros estilos y sobreescriban los de Bootstrap.