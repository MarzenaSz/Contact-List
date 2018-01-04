import React from 'react';
import Contact from './Contact';
// import PropTypes to validate data
import PropTypes from 'prop-types';

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

    // validate the passed in data
    ListContact.propTypes = {
        // make sure the passed data is an array and the data is required
        contacts: PropTypes.array.isRequired,
        // make sure the passed data is a function and the data is required
        onDeleteContact: PropTypes.func.isRequired
    };

export default ListContact;