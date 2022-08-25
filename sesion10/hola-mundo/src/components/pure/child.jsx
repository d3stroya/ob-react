import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('') 
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in Input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(text)
    }

    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{background: '#eee', padding: '30px'}}>
            <p onMouseOver={ () => console.log("On mouse over")}>Hello, {name}</p>
            <button onClick={ () => console.log("¡Pressed button 1!")}>Button 1</button>
            <button onClick={ pressButton }>Button 2</button>
            { /** Al pasar parámetros a las funciones, hay que hacer una función anónima. 
            Si ejecutamos directamente la función, da error, porque se ejecuta durante el render 
            y puede ser que los datos no estén disponibles. */}
            <button onClick={ () => pressButtonParams("Hello!") }>Button 3</button>

            <input placeholder='Send a message to your father' 
            onFocus={ () => console.log("Focus on input") }
            onChange={ (e) => console.log("Input chaged: ", e.target.value) }
            onCopy={ () => console.log("Copied text from input") }
            ref = {messageRef}
            />
            { /** Evento que envía un texto al padre */}
            <button onClick={ () => send(messageRef.current.value) }>Send message</button>

            <div style={{margin: '20px'}}>
                <form onSubmit={ submitName }>
                    <input ref={ nameRef } placeholder='New name' />
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
