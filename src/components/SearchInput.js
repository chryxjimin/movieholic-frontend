import React, { Component } from 'react'

class SearchInput extends Component {

    state = {
        searchQuery: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="searchQuery" value={this.state.searchQuery} placeholder="Search..." onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default SearchInput;




