# Estructuración de proyectos React

React trabaja con componentes, que no tienen una definición como tal, sino que depende de la funcionalidad que le demos. 
Así, tendremos componentes: 
* puros, muy sencillos y sin lógica
* contenedores, que muestran componentes más pequeños y desarrollan la lógica
* vistas o páginas, que son navegables por el usuario (tienen una ruta asociada) y contienen los componentes contenedores.

Es decir, la jerarquí de componentes está muy bien definida y organizar los componentes de esta manera 
ayuda a tener bien estructurado el proyecto, a trabajar mejor con él, a depurarlo más fácilmente, etc.


## Funcionamiento de una aplicación React 
MVC --> Modelo Vista Controlador

MVCV --> Modelo Vista Controlador de la Vista (es en lo que se basan los frameworks actualmente).

~~~

                        ------------------
                        |     USUARIO    |
                        ------------------
                        /               ^
                       /                 \
   Solicita los       /                   \  Muestra los 
      datos          /                     \    datos
                    /                       \
                   /                         \
                  v                           \
        ---------------    envía datos     --------- 
        | CONTROLADOR |  --------------->  | VISTA |
        ---------------                    ---------
                ^
                |
                |
        Se comunican datos
                |
                |
                v
            ----------
            | MODELO |
            ----------

~~~

Contamos con 3 elementos básicos:
* Modelo: el estado del componente o el estado global de la aplicación
* Controlador: la función o la clase de un componente
* Vista: página            

El usuario solicita información a través de la interfaz de la aplicación, para lo que interactúa con el controlador.
Este se comunica con el modelo para actualizar el estado. Recoge ese estado y se lo comunica a la vista.
Finalmente, la vista muestra los datos al usuario.
