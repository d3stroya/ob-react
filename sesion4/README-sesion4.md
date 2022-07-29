# .editorconfig
Es una buena práctica cuando trabajamos con VSCode. Permite configurar el indentado, los espacios, etc. en el IDE.
Es necesaria la extensión Editorconfig. Esta extensión hacer que VSCode se comporte tal y como hemos indicado en el archivo.

# Hooks
Funciones que simplifican mecanismos para trabajar con componentes funcionales.

## useState
1. Crear componente funcional
2. Importar el hook { useState }
3. Creamos 2 valores iniciales, un contador (tipo primitivo) y una persona (objeto). 
4. Definimos constantes con useState
5. Modificamos los valores iniciales con función que incluya el setter.
6. Pintamos los datos en el html
7. Mostramos el componente en App.js
8. Añadir botón con evento onClick para cambiar el estado.

## Combinación de useState, useRef y useEffect
useEffect: controlar los cambios en la vista.
useRef: referenciar elementos dentro de la vista.
1. Importar los hooks
2. Crear variables con un valor inicial (useState)
3. Crear referencia (useRef)
4. Crear funciones para cambiar el estado (set)
5. Definir función useEffect()
6. Pintar el html

## Combinación de useState y useContext
useContext: Pasar datos entre elementos a través de un contexto en lugar de props.

1. Importar hooks
2. Crear contexto con React.createContext()
3. Crear 3 componentes en el mismo archivo
4. Componente1:
   1. Crear estado con un contexto
5. Componente2:
   1. Crear estado con useContext
6. Componetne3:
   1. Crear estado inicial
   2. Crear un estado
   3. Función para añadir nuevos valores
   4. Crear contexto
7. Importar en App.js

Los componentes 1 y 2 tienen como estado el contexto, que permite pasar la información. El comonente 3 pinta el 1 y este a su vez pinta el 2. El Provider que es el padre pasa la información.

# Props.children
Permite pasar elementos html entre componentes, de padres a hijos.
Pasamos props por parámetro al componente.
Combina información de elemento (definida en el propio componente) con información de los hijos (definidos en este caso en App.js).