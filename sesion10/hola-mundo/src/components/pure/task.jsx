import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Task completed!")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Función que devuelve un badge dependiendo del nivel de la tarea
     */
    function taskLevelBadge() {
        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{ task.level }</span>
                </h6>)

            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>{ task.level }</span>
                </h6>)

            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>{ task.level }</span>
                </h6>)

                default:
                    break;
        }
    }

    /**
     * Función que devuelve un icono u otro dependiendo del estado de la tarea.
     */
    function taskCompletedIcon() {
        if(task.completed) {
            return <i onClick={ () => complete(task) } 
                className='bi-toggle-on task-action' 
                style={ {color: 'green'} }
                ></i>
        } else {
            return <i onClick={ () => complete(task) } 
                className='bi-toggle-off task-action' 
                style={ {color: 'grey'} }
                ></i>
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>

            <td className='align-middle'>
            {/** Ejecución de la función para devolver badge dependiendo del nivel de la tarea */}
                { taskLevelBadge() }
            </td>

            <td className='align-middle'>
            {/** Sustituible por una función que permita depurar el código */}
                {/* { task.completed ? 
                    (<i className='bi-toggle-on' style={ {color: 'green'} }></i>) 
                    : (<i className='bi-toggle-off' style={ {color: 'grey'} }></i>)
                } */}
                { taskCompletedIcon() }

                <i className='bi-trash task-action' 
                style={ {color: 'tomato'} }
                onClick={ () => remove(task)}
                ></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    // Verificar que el prop es una tarea
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
