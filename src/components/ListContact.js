import React, { Component } from 'react';
import Contact from './Contact';

class ListContact extends Component {

    render() {
        return (
            <ul className="contact-list">
                {this.props.contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact}/>   
                ))}
            </ul>
        );
    }
}

export default ListContact;