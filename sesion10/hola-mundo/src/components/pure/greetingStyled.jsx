import React, { useState } from 'react';

// Definir estilos en constantes:
// ? Usuarios loggeados
const loggedStyle = {
    color: 'white'
}

// ? Usuarios no loggeados
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setlogged] = useState(false);

    const greetingUser = () => <p>Hola, { props.name }</p>
    const pleasLogin = () => <p>Please, login</p>

    return (
        // Mostrar un estilo u otro
        <div style={ logged ? loggedStyle : unloggedStyle }>

        {/* Mostrar un elemento u otro */}
         { logged ? greetingUser : pleasLogin }
            
            {/* Mostrar un texto u otro en el botón */}
            <button onClick={ () => {
                console.log("Botón pulsado")
                setlogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
