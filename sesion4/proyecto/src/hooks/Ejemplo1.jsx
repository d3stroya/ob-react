/** 
 * Ejemplo de uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado privado 
 * a través de un hook y, además, poder modificarlo.
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para contador
    const valorInicial = 0

    // Valor inicial para persona
    const personaInicial = {
        nombre: 'Franky',
        email: 'f.doyle@ww.com'
    }

    /**
     * Queremos que valorInicial y personaInicial sean parte del estado del componente
     * para poder gestionar su cambio y este se vea reflejado en la vista del componente.
     * 
     * Estrucutura: const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Bridget',
                email: 'b.westfall@ww.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>

            {/* Bloque de botones para actulaizar el estado*/}
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;

