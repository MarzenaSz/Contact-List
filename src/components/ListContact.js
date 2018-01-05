import React, { Component } from 'react';
import Contact from './Contact';
// import PropTypes to validate data
import PropTypes from 'prop-types';
// import escapeRegExp and sortBy to filter contacts 
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContact extends Component {
    // USING PROP TYPES PACKAGE
    // validate the passed in data
    //  Use this syntax when your component is a class component
    static propTypes = {
        // make sure the passed data is an array and the data is required
        contacts: PropTypes.array.isRequired,
        // make sure the passed data is a function and the data is required
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }
    // update the query based on our state
    updateQuery = (newQuery) => {
        this.setState({ query: newQuery.trim() });
    };

    render() {
        let showingContacts;
        // if there is something typed inside of our search bar input
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            // filter out contacts from the contacts list that does not match the value typed inside the search bar
            // and leave those which do
            showingContacts = this.props.contacts.filter((contact) => match.test(contact.name));
        }
        else {
            // show initial contacts list
           showingContacts = this.props.contacts;
        } 

        // sort contacts list alphabetically
        showingContacts.sort(sortBy('name'));

        return (
            <div className="contacts">
                <div className="search-bar">
                    <input type="text" placeholder="Search contacts..." value={this.state.query} 
                    onChange={(event) => this.updateQuery(event.target.value) }/>
                    {/*JSON.stringify(this.state)*/}
                </div>
                <ul className="contact-list">
                {/*loop through contacts array*/}
                    {showingContacts.map((contact) => (
                        // for each element in contacts array generate Contact component and pass info about this particular contact as well as
                        // the method from App COmponent
                        <Contact key={contact.id} contact={contact} onDeleteContact={this.props.onDeleteContact}/>   
                    ))}
                </ul>
            </div>
        );
    }
}
/*
// !!!
// Use this syntax when your component is a stateless functional component
ListContact.propTypes = {
    // make sure the passed data is an array and the data is required
    contacts: PropTypes.array.isRequired,
    // make sure the passed data is a function and the data is required
    onDeleteContact: PropTypes.func.isRequired
};
*/

export default ListContact;