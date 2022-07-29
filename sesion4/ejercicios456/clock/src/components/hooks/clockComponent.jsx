import React, { useEffect, useState } from 'react';

const ClockComponent = () => {

    const fecha = new Date()
    const nombre = "Franky"
    const apellido = "Doyle"
    const edad = 0

    const [dateState, setdateState] = useState(fecha);
    const [edadState, setedadState] = useState(edad);

    useEffect(() => {
        const intervalState = setInterval(() => {
            setdateState(new Date())
            setedadState(edadState + 1)
        }, 1000)

        return () => {
            clearInterval(intervalState)
        };

    }, [edadState]);

    return (
        <div>
            <h2>
                Hora actual: 
                { dateState.toLocaleTimeString() }
            </h2>
            <h3>{ nombre } { apellido }</h3>
            <h1>Edad: { edadState }</h1>
        </div>
    );
}

export default ClockComponent;
