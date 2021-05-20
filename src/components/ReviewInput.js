import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../redux/actions/addReview'

class ReviewInput extends Component {

    componentDidMount(props) {
        console.log(`componentdidmount`, props)

    }
    
    state = {
        description: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let moviesArray = this.props.movies.map(movie => movie.id)
        console.log(moviesArray)
        // console.log(`this.props.movies`, this.props.movies.find(movie => movie.id))
        this.props.addReview(this.state, this.props.movies.id); 
        this.setState({
            description: ''
        })
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

export default connect(null, { addReview })(ReviewInput);


//for controlled forms we needed to add name to input to match the attribute within 
//the state for the handleChange so that we can have access to teh state as event.target.description