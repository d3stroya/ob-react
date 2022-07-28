/**
 * TODO: Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa. Si el contacto está conectado, se debe mostrar: Contacto En Línea. Si el contacto no está conectado, se debe mostrar: Contacto No Disponible
*/


const ContactComponent = ( { contact } ) => {

    return (
        <div>
            <h1>{ contact.name } { contact.lastname }</h1>
            <h3>{ contact.email }</h3>
            <h2>{ contact.connected ? 'Online' : 'Offline' }</h2>
        </div>
    );
};


ContactComponent.propTypes = {
    // contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
