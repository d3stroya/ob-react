/**
 * Ejemplo de uso de  useState, useRef y useEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Crear dos contadores distintos. Cada uno en un estado diferente.
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Crear una referencia con useRef() para asociar una variable con un elemento del DOM
    const miRef = useRef()

    // Fucniones para camabiar el estado
    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * ? CASO 1: Ejecutar siempre un snippet de código
     * Cada vez que haya un cambio en el estado del componente, se ejecuta aquello que esté
     * dentro del useEffect()
     */
    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    //     });

    /**
     * ? CASO 2: Ejecutar solo cuando cambie contador1
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga useEffect().
     * En caso de que cambie contador2, no habrá ejecución.
     */
    // useEffect(() => {
    //     console.log('Cambio en el estado del contador1')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // }, [contador1]);

     /**
     * ? CASO 3: Ejecutar solo cuando cambie contador1 o contador 2
     * Cada vez que haya un cambio en contador1 o en contador 2, 
     * se ejecuta lo que diga useEffect().
     */
    useEffect(() => {
        // Efecto
        console.log('Cambio en el estado del contador1 o contador2')
        console.log('Mostrando referencia a elemento del DOM')
        console.log(miRef)
        // Causa
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>CONTADOR 1: { contador1 }</h2>
            <h2>CONTADOR 2: { contador2 }</h2>
            
            {/* Elemento referenciado */}
            <h4 ref={ miRef }>Ejemplo de elemento referenciado</h4>

            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar contador 1</button>
                <button onClick={ incrementar2 }>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
