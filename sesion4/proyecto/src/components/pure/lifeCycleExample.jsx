/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react'

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("Cuando se instancia el componente.")
    }

    compnentWillMount() {
        console.log("WillMount: antes del montaje del componente.")
    }

    // Aquí es donde se trabajan las peticiones
    componentDidMount() {
        console.log("DidMount: Justo al acabar el montaje del componente, antes de renderizarlo.")
    }

    componentWillReceiveProps() {
        console.log("WillRecieveProps: Si va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Controlar si el componente debe o no actualizarse
        // Return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarse.")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: Justo después de actualizarse.")
    }

    componentWillUnmount() {
        console.log("WillUnmount: Justo antes de desaparecer.")
    }

  render() {
    return (
      <div></div>
    )
  }
}
