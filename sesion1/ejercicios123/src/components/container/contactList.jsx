import React from 'react';
import { Contact } from '../../models/Contacto.class';
import ContactComponent from '../pure/contactoComponent';

const ContactList = () => {
    
    const bridget = new Contact( 'Bridget', 'Westfall', 'b.westfall@ww.com', true )
    
    return (
        <div>
            <ContactComponent contact={ bridget }></ContactComponent>
        </div>
    );
}

export default ContactList;
