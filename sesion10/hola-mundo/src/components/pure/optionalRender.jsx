import React, { useState } from 'react';

// ? Podemos definir colores rgb personalizados.
let red = 0
let green = 200
let blue = 140

// 4. MODIFICAR EL ESTILO DE ELEMENTOS DEPENDIENDO DEL ESTADO
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white' 
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontweight: 'bold'
}

// 2. MÉTODO ÓPTIMO USANDO COMPONENTES Y REDERIZÁNDOLOS CONDICIONALMENTE
// 2.1. Login / logout buttons
// 4.1 Agregar estilo a los botones para el renderizado condicional
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={ propStyle } onClick={ loginAction }>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={ propStyle } onClick={ logoutAction }>Logout</button>
    )
}

// 3. RENDER CONDICIONAL CON EXPRESIONES
// ? Expresión true && expresión => se renderiza la expresión
// ? Expresión false && expresión => no se renderiza la expresión


const OptionalRender = () => {

    // 1. MÉTODO NO ÓPTIMO
    // 1.1. Crea un estado de acceso, que será true o false
    const [access, setAccess] = useState(false);

    // 3.1. Crea un estado para mensajes no leídos
    const [nMessages, setNMessages] = useState(0);
    
    // 1.2. Cambia el estado de access de true a false y viceversa
    // const updateAccess = () => {
    //     setAccess(!access)
    // }
    
    // 2.2. Funciones para cambiar el estado de access a true o false
    const loginAction = () => setAccess(true)
    const logoutAction = () => setAccess(false)

    // 1.3. Botón que ejecuta la función updateAccess para modificar el estado de
    // access entre true y false. Dependiendo del estado, se mostrará un texto u otro.
    let optionalButton

    // if(access) {
    //     optionalButton = <button onClick={ updateAccess }>Logout</button>
    // } else {
    //     optionalButton = <button onClick={ updateAccess }>Login</button>
    // }

    // 2.3. Mostrar un componente u otro dependiendo del estado de access
    access ? 
    optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={ logoutAction }></LogoutButton> 
    : optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={ loginAction }></LoginButton>

    // 3.2. Unread messages
    let addMessages = () => setNMessages(nMessages + 1)

    return (
        <div>
            {/* 1 & 2. Optional button */}
            { optionalButton }

            {/* 3A. N Messages unread */}
            {/* { nMessages === 1 && <p>You have { nMessages } new message</p> }
            { nMessages > 1 && <p>You have { nMessages } new messages.</p> }
            { nMessages === 0 && <p>There are no new messages.</p> } */}

            {/* 3B. Ternay operator (most used). We can include on TO inside another TO */}
            {/* Podemos aplicar otro operador ternario para mostrar los mensajes solo si access es true */}
            { access ? (
                <div>
                    { nMessages > 0
                    ? <p>You have { nMessages } new message{ nMessages > 1 ? 's' : '' }</p> 
                    : <p>There are no new messages.</p> }
                    
                    <button onClick={ addMessages }>{ nMessages === 0 ? 'Add your first message' : 'Add new message' }</button>
                </div> 
            ) : null}
            

        </div>
    );
}

export default OptionalRender;
