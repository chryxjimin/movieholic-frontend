import React, { Component } from 'react'
// import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {
    
    render() {
        return (
            <div>
                {/* <ReviewInput movies={this.props.movies} /> */}
                <h3>Reviews</h3>
                <Reviews reviews={this.props.movie && this.props.movie.reviews} />
            </div>
        )
    }
}


export default ReviewsContainer;