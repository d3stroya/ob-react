import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import '../../styles/task.scss'


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log("Task completed!")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    return (
        <div>
            <h2 className="task-name">Name: { task.name }</h2>
            <h3>Description: { task.description }</h3>
            <h4>Level: { task.level }</h4>
            <h5>
                This task is: { task.completed ? 'Completed' : 'Pending' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    // Verificar que el prop es una tarea
    task: PropTypes.instanceOf(Task)  
};


export default TaskComponent;
