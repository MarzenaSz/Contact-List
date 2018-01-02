import React, { Component } from 'react';
import Contact from './Contact';

const ListContact = (props) => {

        return (
            <ul className="contact-list">
            {/*loop through contacts array*/}
                {props.contacts.map((contact) => (
                    // for each element in contacts array generate Contact component and pass info about this particular contact
                    <Contact key={contact.id} contact={contact}/>   
                ))}
            </ul>
        );
    }

export default ListContact;