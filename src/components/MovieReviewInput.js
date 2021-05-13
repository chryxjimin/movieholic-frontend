import React, { Component } from 'react'

class MovieReviewInput extends Component {

    state = {description: ''}

    handleChange = (event) => {
        // debugger;
       this.setState({
        [event.target.name]: event.target.value
       })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Movie Review</label>
                    <input onChange={this.handleChange} name="description" type="text-area" placeholder="Type in your review" value={this.state.description}>
                    </input>
                </form>
            </div>
        )
    }
}

export default MovieReviewInput;


//for controlled forms we needed to add name to input to match the attribute within 
//the state for the handleChange so that we can have access to teh state as event.target.description