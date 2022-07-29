/**
 * Cpmponente funcional con todos los ciclos de vida
 */

import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado")
        
        // Aquí va toda la lógica
        // Genera un intervalo cada vez que se actualiza el componente
        const intervalId = setInterval(() => {
            document.title = `${new Date()}`
            console.log("Actualización del componente")
        }, 1000)
        return () => {
            console.log("Componente va a desaparecer.")
            document.title = "Tiempo detenido"

            // Borra el intervalo
            clearInterval(intervalId)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
