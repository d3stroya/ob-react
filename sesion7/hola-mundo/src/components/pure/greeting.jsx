import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Clase Component con un método render que devuelve un html. 
 * Solo se puede devolver un elemento, es decir, un único div. 
 * Dentro irá todo el contenido que queramos.
 */
class Greeting extends Component {

    constructor(props){
        // Propiedades
        super(props);
        
        // Dato privado
        this.state = {
            age: 28
        }
    }

    render() {
        return (
            <div>
                <h1>Hola, { this.props.name }</h1>
                <h2>Tu edad es de: { this.state.age }</h2>

                <div>
                    <button onClick={ this.birthday }>Cumplir años</button>
                </div>
            </div>
        );
    }

    // Función que genera un nuevo estado age sumando 1 al estado previo.
    birthday = () => {
        this.setState((prevState) => 
            (
                {
                    age: prevState.age + 1
                }
            )
        )
    }
}

/**
 * Contenido que podemos pasar de un componente a otro de orden superior.
 */
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
