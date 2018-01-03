import React, { Component } from 'react';
import Contact from './Contact';

const ListContact = (props) => {

        return (
            <ul className="contact-list">
            {/*loop through contacts array*/}
                {props.contacts.map((contact) => (
                    // for each element in contacts array generate Contact component and pass info about this particular contact as well as
                    // the method from App COmponent
                    <Contact key={contact.id} contact={contact} onDeleteContact={props.onDeleteContact}/>   
                ))}
            </ul>
        );
    }

export default ListContact;