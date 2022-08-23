// TODO: Mostrar contacto
// TODO: Crear contacto
// TODO: Eliminar contacto
// TODO: Modificar estado del contacto entre conectado y desconectado

import React, { useState } from 'react';
import ContactForm from '../forms/contact_form';
import { Contact } from '../models/contact.class'
import ContactCompnent from '../pure/contact';

const ContactList = () => {

    const tess = new Contact('Tess', 'Doyle', '376495012', 'td-2011@ww.com', false, 'https://sp.depositphotos.com/stock-photos/puppy.html')
    const franky = new Contact('Franky', 'Doyle', '371927456', 'francesca.d@ww.com', true, 'https://en.wikipedia.org/wiki/Franky_Doyle_%28Wentworth%29')
    const bridget = new Contact('Bridget', 'Westfall', '385927519', 'b.westfall@ww.com', true, 'https://mobile.twitter.com/bridgetwestfall')

    // Component state - create a list of contacts
    const [contacts, setContacts] = useState([franky, bridget, tess]);

    /**
     * Function that changes the state of a contact between connected and disconnected
     * through a toggle icon
     * @param {*} contact 
     */
    function connectContact(contact) {
        // Search contact by index
        const index = contacts.indexOf(contact)
        // Create a list with current contacts
        const tempContacts = [...contacts]
        // Search contact state between connected and disconnected
        tempContacts[index].connected = !tempContacts[index].connected
        // Update the state with new data
        setContacts(tempContacts)
    }

    /**
     * Function that remove a contact object given by param
     * @param {*} contact 
     */
    function removeContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    /**
     * Function that creates a new contact comming from the contact_form component
     * Creates a new contact with the data given by the user and shows it in screen
     * @param {*} contact 
     */
    function addContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    return (
        <div className='row'>
            <div className='col'>
                { contacts.map((contact, index) => {
                    return(
                        <ContactCompnent 
                        key={ index }
                        contact={ contact }
                        connect={ connectContact }
                        remove={ removeContact }
                        >                    
                        </ContactCompnent>
                    )
                }) }
            </div>

            <div className='col'>
                <h1>Add a new contact</h1>
                <ContactForm add={ addContact }></ContactForm>
            </div>
        </div>
    );
}

export default ContactList;
