# Renderizado condicional
El renderizado condicional permite mostrar o no ciertos elementos o componentes.
No es que no los muestre en el DOM, sino que no los pinta, no los renderiza.
Esto permite securizar la aplicación, por ejemplo, escondiendo la información
a usuarios no registrados.

## ¿Qué renderizar condicionalmente?
Podemos renderizar: 
* elementos (por ejemplo, un botón)
* componentes (por ejemplo, uno de login y otro de logout)
* estilos (por ejemplo, cambiando el estilo de un botón)
* el número de veces que se muestra un componente o un elemento (por ejemplo, una lista)

## ¿Cómo renderizar condicionalmente?
En primer lugar, debemos **definir un estado** del componente o de la aplicación, en función del cual se hará un renderizado u otro.

A partir de ahí, tenemos diferentes opciones de renderizado condicional:
1. If else (1).
2. Operador ternario: estado ? elemento/componente : elemento/componente (2 y 3B).
3. Expresión true/false && expresión (3A).

Además, podemos incluir un estilo u otro a los componentes dentro de los operadores ternarios (4). Para ello, definimos los estilos en constantes y se añaden a style del componente, bien directamente o bien pasándolo por props.

* **Directamente**:
~~~
        const LoginButton = ({ loginAction }) => {
            return (
                <button style={ loggedStyle } onClick={ loginAction }>Login</button>
            )
        }
~~~
* **Por props**: 
~~~
        const LoginButton = ({ loginAction, propStyle }) => {
            return (
                <button style={ propStyle } onClick={ loginAction }>Login</button>
            )
        }
~~~        