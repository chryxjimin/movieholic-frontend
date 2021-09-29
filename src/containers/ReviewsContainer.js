import React, { Component } from 'react'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {
    
    render() {
        return (
            <div>
                <h3>Reviews</h3>
                <Reviews movie={this.props.movie} reviews={this.props.movie.reviews} />
            </div>
        )
    }
}


export default ReviewsContainer;