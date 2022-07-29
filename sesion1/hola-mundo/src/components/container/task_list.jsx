import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Tasks modified")
        setLoading(false)
        return () => {
            console.log("Tasks will be unmounted")
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de la tarea " + id)
    }

    return (
        <div>
            <div>
            <h1>Your Tasks:</h1>
            </div>
            {/* TODO: aplicar un formap para renderizar la lista de tareas*/}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
