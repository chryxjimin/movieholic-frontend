import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../redux/actions/addReview'

class ReviewInput extends Component {

    componentDidMount(props) {
        console.log(`componentdidmount`, this.props)

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
        let movieId = this.props.movieId
        let findMovie = this.props.movies.find(movie => movieId === movie.id)
        this.props.addReview(this.state, findMovie.id); 
        this.setState({
            description: ''
        })
        this.props.reviewHistory.push(`/movies/${movieId}/reviews`)
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