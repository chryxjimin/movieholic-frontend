import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../redux/actions/addReview'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

class ReviewInput extends Component {

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
        this.props.reviewHistory.push(`/movies/${movieId}`)
    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Movie Review</label>
                    <input onChange={this.handleChange} name="description" type="text-area" placeholder="Type in your review" value={this.state.description}>
                    </input>
                    <input type="submit" />
                </form>


            </div>
        )
    }
}

export default compose(
    withRouter, 
    connect(null, { addReview })
)(ReviewInput);

