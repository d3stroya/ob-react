// Crear un componente el cual contenga un cuadrado. Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.
// Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.
// TODO: Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.
// TODO: Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

import React, { useRef, useState } from 'react';

// Creo el cuadrado
let square

// Defino el estilo del valor inicial del cuadrado
const black = { width: '255px', height: '255px', backgroundColor: 'rgb(0, 0, 0)' }

// Función para obtener un valor entero aleatorio entre 0 y 255, ambos incluidos
// Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomNum(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const initialSquare = ({ color }) => {
//     return (
//         <div style={ { width: '255px', height: '255px', backgroundColor: 'rgb(0, 0, 0)' } }></div>
//     )
// }


const Ejercicio101112 = () => {
    
    // Defino el estado inicial del cuadrado
    const [color, setColor] = useState(black)
    const [changeColor, setChangeColor] = useState(false);

    const mouseOver = () => setChangeColor(true)
    const mouseLeaveDbClick = () => setChangeColor(false)
    
    // Cambiar el estado de color cuando el ratón pasa por encima del cuadrado
    function randomColor() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        setColor({ width: '255px', height: '255px', backgroundColor: `rgb(${r}, ${g}, ${b})` })
    }

    // El estado cambia cada segundo aunque el ratón ya no esté encima del cuadrado
    const randomColorInterval = () => setInterval(randomColor, 1000)

    const divSquare = useRef('')

    // Detener el cambio de color cuando el ratón sale del cuadrado
    // const stopColor = () => {
    //     const currentColor = divSquare.current.style.backgroundColor
    //     setColor({ width: '255px', height: '255px', backgroundColor: 'rgb(0, 0, 0)' })
    //     console.log(currentColor)
    // }

    const mouseLeave = () => {
        const currentColor = color.current.style.backgroundColor
        setColor( { width: '255px', height: '255px', backgroundColor: currentColor } )
        clearInterval(randomColorInterval)
    }


    return (
        <div style={ { width: '255px', height: '255px' } } onMouseOver={ mouseOver } onMouseLeave={ mouseLeaveDbClick } onDoubleClick={ (mouseLeaveDbClick) }>
            Cuadrado contenedor
            { changeColor ? 
            <div style={ color } onMouseOver={ randomColorInterval }>Cambiante</div> :
            <div style={ color } ref={ divSquare } onMouseLeave={ mouseLeave } onDoubleClick={ mouseLeave }>Parado</div>
            }
            {/* <div style={ color } onMouseEnter={ randomColorInterval } ref={ divSquare } onMouseLeave={ mouseLeave } onDoubleClick={ (mouseLeave) }></div>   */}
        </div>
    );
}

export default Ejercicio101112;
