import React, { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {
    
    render() {
        return (
            <div>
                <ReviewInput movie={this.props.movie} />
                <Reviews reviews={this.props.movie && this.props.movie.reviews} />
            </div>
        )
    }
}


export default ReviewsContainer;