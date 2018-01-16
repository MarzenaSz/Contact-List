import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';

class CreateComponent extends Component {

    state = {
        picture: "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png"
    }

    addContact = (e) => {
        // prevent the full page refresh on submit
        e.preventDefault();
    };

    addAvatar = (e) => {
        
        this.setState({ picture: e.target.value});
    };

    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact">Close</Link>
                <form className="create-contact-form" onSubmit={this.addContact}>
                    <ImageUpload />
                    <input type="text" name="name" placeholder="full name" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="text" name="number" placeholder="phone number" />
                    <input type="text" name="description" placeholder="description" />
                </form>

            </div>
        );
    }
}

export default CreateComponent;