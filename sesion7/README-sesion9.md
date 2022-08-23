# Añadir funciones para modificar tareas
Primero modificamos el estilo de body en App.css para centrar todo el contenido.

## Completar tareas
En task_list.jsx, crear función completeTask, que recibe por parámetro la tarea.

En task.jsx, añadir la prop complete, que enlaza con la función completeTask de task_list.jsx.

Añadimos la propiedad isRequired a task en propTypes y agregamos otro propType: complete (una función que se tiene que ejecutar --> PropTypes.func.isRequired).
Al añadir isRequired estamos obligados a pasar dicha prop desde el padre.

Añadimos a la función taskComplete el evento onClick con la función complete y el parámetro task. Debe ser una función anónima para que se ejecute al hacer click y no al renderizar.

En task_list.jsx, añadimos al elemento TaskComponent la prop complete con la función completeTask.

Para cambiar el icono del ratón al pasar por encima del toggle y la papelera, añadimos a task.scss una clase .task-action con la propiedad cursos: pointer. Esto mostrará una mano en lugar de la flecha. Ahora agregamos esta clase a los elementos del componente (toggle y trash).

Para modificar el icono toggle al hacer click, vamos a task_list y completamos la función completeTask.

## Borrar una tarea

En task_list.jsx, crear función removeTask.

En task.jsx, añadir prop delete y proptypes.

En task.jsx, añadimos la función al botón de la papelera.

## Crear tareas
En taskForm.jsx, añadir la prop add y su proptype.

Creamos constantes con referencias para el nombre, la descripción y el nivel de las tareas.

Creamos la función addTask para añadir tareas con un objeto tarea que tiene como atributos los valores de las referencias (nombre, descripción y nivel, más si está completa o no, que por defecto será false). Finalmente añade esa nueva tarea.

Diseñamos el formulario con un campo para el nombre, otro para la descripción, otro con opciones para el nivel de prioridad y finalmente un botón de submit para añadir la tarea a la lista.

En task_list.jsx, agregar la función addTask que coja el índice, crea una variable temporal con la lista de tareas y añada la nueva tarea. Modificar el estado de la lista con setTask pasándole la nueva lista.

Pasar por props en la etiqueta TaskForm.
