# Ciclo de vida
Son métodos o funciones que se ejecutan de manera automática en ciertos momentos.
1. Montaje (mounting):
   1. Llama al constructor
   2. Ejecuta la renderización 
   3. Actualiza el DOM (la vista)
   4. Métodos: componentDidMount, componentWillMount (deprecated)
2. Actualización (updating): 
   1. hay algún cambio de estado, recibe props o se fuerza la actualización de la vista (new props, setState() o forceUpdate()).
   2. Render
   3. Actulaización del DOM
   4. Método: componentDidUpdate
3. Desmontaje: el componente desaparece:
   1. Método: componentWilUnmount


# Tabla para entender Lyfecycle

|Métodos de Lifecycle|Hooks de LifeCycle|
| ------------------ | ---------------- |
| Introducido en versiones iniciales | Introducido en 2018 |
| Funciona con ES5 | Funciona con >ES6 |
| Incorporado en componentes de clase | Incorporado para componentes funcionales |
| Necesita de un constructor para inicialziar | No necesita constructor |
| Uso de THIS bindeado de la clase | No necesita THIS para ser usado |


## DidMount
* Tipo clase: Usamos el método componentDidMount()
* Tipo función: Importar useEffect y definir la función useEffect()
  * effect
  * sin return
  * corchetes vacíos

## DidUpdate
* Tipo clase: Usamos el método componentDidUpdate()
* Tipo función: Importar useEffect y definir la función useEffect()
  * sin effect
  * return
  * corchetes vacíos

## WillUnmount
* Tipo clase: Usamos el método componentWillUnmount()
* Tipo función: Importar useEffect y definir la función useEffect() con return (lo que se ejecuta cuando ha terminado el componente).
  * sin effect
  * return
  * corchetes vacíos

# Proyecto
En el proyecto hola-mundo:
A. En task_list.jsx:
  1. Cambiar const changeState por changeCompleted
  2. Definir estado inicial con useState. El estado inicial es el objeto defaultTask
  3. Añadir otro estado para saber si la tarea está cargando.
  4. Definir useEffect
B. En task.jsx
  1. Añadir useEffect
C. En loginForm.jsx
  1. Definir constante con datos de usuario (user y pass)
  2. Añadir useState con estado inicial initialCredencials (constante del paso 1)