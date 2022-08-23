import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState("Franky");

    function showMessage(text) {
        alert(`Text received: ${text}`)
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '2%'}}>

            <Child name={ name } send={ showMessage } update={ updateName }></Child>
        </div>
    );
}

export default Father;
