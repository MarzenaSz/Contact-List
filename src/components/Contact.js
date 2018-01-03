import React from 'react';

const Contact = (props) => {
    return (
        <div>
            <li className="contact-list-item">
                <img className="contact-list-avatar" src={props.contact.avatar} />
                <p>{props.contact.name}</p>
                <p>{props.contact.description}</p>
                <p>{props.contact.number}</p>
                <p>{props.contact.email}</p>
            </li>
            {/* remove the option on click */}
            <button onClick={() => { props.onDeleteContact(props.contact); }}>Remove</button>
        </div>
    );
};

export default Contact;
