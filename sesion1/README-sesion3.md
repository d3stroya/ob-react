# Estructura de proyectos
Dentro de src/components, creamos:
* container: carpeta de componentes de orden superior. Tienen la lógica y los datos.
* pure: los componentes puros, sin complejidad.
    * forms: para formularios.

Dentro de src, creamos:
* hooks: contiene todos los hooks.
* routes: las rutas del proyecto.
* pages: componentes que renderizan una página.
    * home: para la homepage
    * auth: para la autenticación
    * 404: para las páginas no encontradas.
* models: especificar los tipos de datos con los que vamos a trabajar.

## Models
1. Creamos la clase task.class.js con la clase Task, que tiene los atributos name, description, completed y level.
2. Creamos la constante levels.enum.js con los niveles de dificultad de tareas.
3. Añadimos el constructor a la clase Task.

## Components
1. Creamos un componente contenedor task_list.jsx
    1.1. Creamos un objeto de clase Task.
    1.2. Pintar una tarea en el div.
2. Y otro puro task.jsx
    2.1. Le pasaremos la tarea como prop
    2.2. Definimos el tipo de dato: que sea Task
    2.3. Ir pintando en html
3. Añadimos el componente TaskListComponent a App.js
La idea es que App renderice task_list y este a task.