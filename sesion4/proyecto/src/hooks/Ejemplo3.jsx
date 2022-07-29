/**
 * Ejemplo de hooks useState() y useContext()
 */
import React, { useState, useContext } from 'react';

/**
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre.
 */

// Crear contexto
const miContexto = React.createContext(null)

const Componente1 = () => {
    
    // Inicializar estado vacío para rellenarlo con los datos del contexto del padre.
    const state = useContext(miContexto)

    return (
        <div>
            <h1>El token es: { state.token }</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesión es: { state.sesion }</h2>        
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    // Crear estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'jwt1234567',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        // Contexto que provee la información a otros componentes (1 y 2)
        <miContexto.Provider value={ sessionData }>
        <h1>Ejemplo de useState() y useContext()</h1>
            {/* Todo lo que está aquí dentro puede leer los datos de sessionData además de actualizarse. Si se actualiza, los componentes de aquí también lo actualizan. */}
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar sesión</button>
        </miContexto.Provider>
    );
}



