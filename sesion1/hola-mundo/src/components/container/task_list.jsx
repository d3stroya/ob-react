import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
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
