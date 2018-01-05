import React, { Component } from 'react';
// Controlled Component
class SearchBar extends Component {
    state = {
        query: ''
    }
    // update the query based on our state
    updateQuery = (newQuery) => {
        this.setState({ query: newQuery.trim() });
    };

    render() {    
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search contacts..." value={this.state.query} 
                onChange={(event) => this.updateQuery(event.target.value) }/>
                {/*JSON.stringify(this.state)*/}
            </div>
        );
    }
};

export default SearchBar;