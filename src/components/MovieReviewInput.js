import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../redux/actions/addReview'

class MovieReviewInput extends Component {
    // console.log(props)

    state = {
        description: '',
        // movie_id: ''
    }

    handleChange = (event) => {
        // debugger;
       this.setState({
        [event.target.name]: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
       this.props.addReview(this.state); 
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Movie Review</label>
                    <input onChange={this.handleChange} name="description" type="text-area" placeholder="Type in your review" value={this.state.description}>
                    </input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addReview })(MovieReviewInput);


//for controlled forms we needed to add name to input to match the attribute within 
//the state for the handleChange so that we can have access to teh state as event.target.description