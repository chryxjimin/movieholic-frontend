import React, { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'
class ReviewsContainer extends Component {
    render() {
        return (
            <div>
                <ReviewInput />
                <Reviews />
            </div>
        )
    }
}


export default ReviewsContainer;