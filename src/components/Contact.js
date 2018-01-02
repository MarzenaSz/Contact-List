import React from 'react';

const Contact = (props) => {
    return (
        <div>
            <li className="contact-list-item">
                <img className="contact-list-avatar" src={props.contact.avatar} />
                <br />
                {props.contact.name}
                <br />
                {props.contact.description}
                <br />
                {props.contact.number}
                <br />
                {props.contact.email}
            </li>
        </div>
    );
};

export default Contact;
