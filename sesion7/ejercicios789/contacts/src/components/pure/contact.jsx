import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class'
import '../../styles/contacts.css'

const ContactCompnent = ({ contact, connect, remove }) => {

    // Toggle state between connected and disconnected
    function changeConnected() {
        if(contact.connected) {
            return (
                <div>
                  <h2 style={ { color: 'green' } }>CONNECTED</h2>  
                  <i onClick={ () => connect(contact) } 
                  className='h2 bi bi-toggle2-on contact-action' 
                  style={ { color: 'green' } } />
                </div>
            )
        } else {
            return (
                <div>
                    <h2 style={ { color: 'tomato' } }>DISCONNECTED</h2> 
                    <i onClick={ () => connect(contact) } 
                    className='h2 bi bi-toggle2-off contact-action' 
                    style={ { color: 'tomato' } } />
                </div>
            )
        }
    }

    return (
        <div className='card p-3 mb-4'>
            <i className='h3 bi bi-trash contact-action position-absolute end-0 pe-3' 
            style={ { color: 'tomato' } } 
            onClick={ () => remove(contact) }
            />

            {/* <img src={ contact.image } className='card-img-top' alt='profile' /> */}

            <div className='card-body'>
                <h1 className='card-title'>{ contact.name } { contact.lastname }</h1>
                {/* <h2>{ contact.connected ? 'CONNECTED' : 'DISCONNECTED' } <i className='bi bi-toggle2-off contact-action' /></h2> */}
                <div>{ changeConnected() }</div>
                <h3>Phone number: { contact.mobile }</h3>
                <h3>Email: { contact.email }</h3>
            </div>   

        </div>
    );
};


ContactCompnent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactCompnent;
