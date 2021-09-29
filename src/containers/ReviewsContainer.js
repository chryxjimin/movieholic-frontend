import React, { Component } from 'react'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {
    
    render() {
        return (
            <div>
                <h3>Reviews</h3>
                <Reviews movie={this.props.movie} reviews={this.props.movie.reviews} />
                {console.log(this.props.movie, "this.props.movie ReviewsContainer")}
                {console.log(this.props.movie.reviews, "reviews ReviewsContainer")}
            </div>
        )
    }
}


export default ReviewsContainer;