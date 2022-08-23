import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ContactForm = ({ add }) => {

    // Create references to inputs
    const nameRef = useRef('')
    const lastnameRef = useRef('')
    const mobileRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        // Create an object with a new contact and save it in a constant.
        // Assign the current value of each input to object's attributes.
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            mobileRef.current.value,
            emailRef.current.value
        )
        add(newContact)
    }

    return (
        <form onSubmit={ addContact } className='justify-content-center align-items-center mb-4'>
            <input 
            id='inputName'
            ref={ nameRef }
            type='text'
            className='form-control form-control-lg mt-2'
            required
            autoFocus
            placeholder='Name'    
            />

            <input 
            id='inputLastname'
            ref={ lastnameRef }
            type='text'
            className='form-control form-control-lg mt-2'
            required
            placeholder='Lastname'    
            />

            <input 
            id='inputMobile'
            ref={ mobileRef }
            type='number'
            className='form-control form-control-lg mt-2'
            required
            placeholder='Mobile'    
            />

            <input 
            id='inputEmail'
            ref={ emailRef }
            type='text'
            className='form-control form-control-lg mt-2'
            required
            placeholder='Email'    
            />

            <button type='submit' className='btn btn-success btn-lg ms-2 btn-warning m-2'>Add contact</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
