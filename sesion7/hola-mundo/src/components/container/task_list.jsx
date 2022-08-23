import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../forms/taskForm';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example1', 'Default description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', true, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Tasks modified")
        setLoading(false)
        return () => {
            console.log("Tasks will be unmounted")
        };
    }, [tasks]);


    // const changeCompleted = (id) => {
    //     console.log("TODO: Cambiar estado de la tarea " + id)
    // }

    function completeTask(task) {
        console.log("Complete this task: ", task)
        // Buscar el índice
        const index = tasks.indexOf(task)
        // Recomendación: usar una variable temporal que sean todas las tareas hasta el momento.
        const tempTask = [...tasks]
        // Modificar la tarea concreta dentro de la lista temporal, dándole el valor contrario al que tenga.
        tempTask[index].completed = ! tempTask[index].completed
        // Actualizar el estado del componente con la nueva lista para actualizar también
        // la iteración de las tareas y mostrarlas actualizadas.
        setTasks(tempTask)
    }

    function removeTask(task) {
        console.log("Delete this task: ", task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        // Eliminar 1 tarea desde el elemento de la lista que está en posición index.
        tempTask.splice(index, 1)
        setTasks(tempTask)
    }

    function addTask(task) {
        console.log("Add this task: ", task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card header (title)*/}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks
                        </h5>
                    </div>

                    {/* Card body (content)*/}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scrope='col'>Title</th>
                                    <th scrope='col'>Description</th>
                                    <th scrope='col'>Level</th>
                                    <th scrope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { /** Iteramos con map sobre la lista de tareas y le damos una key única a cada tarea 
                            y añadimos la función correspondiente: devolver el componente
                            TaskComponent con el índice y la tarea de cada iteración. */}
                                { tasks.map((task, index) => {return (
                                    <TaskComponent 
                                    key={ index } 
                                    task={ task }
                                    complete={ completeTask }
                                    remove={ removeTask }
                                    >
                                    </TaskComponent>
                                )} )}
                            </tbody>                            
                        </table>
                    </div>
                </div>
            </div>         
            <TaskForm add={ addTask }></TaskForm>
        </div>
    );
};


export default TaskListComponent;
