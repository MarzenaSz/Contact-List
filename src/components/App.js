import React, { Component } from 'react';
import ListContact from './ListContact';
import SearchBar from './SearchBar';

class App extends Component {
    state = {
        contacts: [
            {
                "id": "marzena",
                "name": "Marzena Szopinska",
                "email": "marzena_szopinska@hotmail.com",
                "number": "2447808989",
                "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ue ipsa quae ab illo inventore",
                "avatar": "https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k_400x400.jpg"
            }, 
            {
                "id": "eryk",
                "name": "Eryk Markiewicz",
                "email": "eryk_markiewicz@hotmail.com",
                "number": "2447808989",
                "description": "Red ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ue ipsa quae ab illo inventore",
                "avatar": "https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k_400x400.jpg"
            }, 
            {
                "id": "kasia",
                "name": "Kasia Gorna",
                "email": "kasia_gorna@hotmail.com",
                "number": "2447808989",
                "description": "Med ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ue ipsa quae ab illo inventore",
                "avatar": "https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k_400x400.jpg"
            }
        ]
    }
    // method responsible for removing a contact from contacts array
    removeContact = (contactToRemove) => {
        // update contacts based on previous state
        this.setState((prevState) => ({
            // filter out unwanted contact from contacts array
            contacts: prevState.contacts.filter((contact)=> {
                return contactToRemove.id !== contact.id;
            })
        }));
    };

    render() {
        return (
            <div>
                <h1>List Contact</h1>
                <SearchBar />
                {/* pass in contacts array into ContactList component as well as remove contact method */}
                <ListContact contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
                <button className="button">Add Contact</button>
                <button className="button">Remove All</button>
            </div>
        );
    }
    
};

export default App;