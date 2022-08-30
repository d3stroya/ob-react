import React, { useState } from 'react';

let square

const Ejercicio12 = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [color, setColor] = useState('rgb(0, 0, 0');

    const mouseOver = () => setIsMouseOver(true)
    const mouseLeaveDbClick = () => setIsMouseOver(false)

    const setRandomColor = () => {
        const randomize = Math.floor(Math.random() * 256)
        let r = randomize
        let g = randomize
        let b = randomize
        return ( { width: '255px', height: '255px', backgroundColor: `${r}, ${g}, ${b}, ` } )
    }

    const paintRandomColor = () => setColor(setRandomColor)

    isMouseOver ? 
    square = <div style={ color } onMouseOver={ paintRandomColor } onClick={ mouseOver }></div> :
    square = <div style={ { width: '255px', height: '255px', backgroundColor: 'rgb(0, 0, 0)'  } } onDoubleClick={ mouseLeaveDbClick }></div>

    return (
        <div>
            { square }
        </div>
    );
}

export default Ejercicio12;
