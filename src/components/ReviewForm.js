import React from 'react'
import ReviewInput from '../components/ReviewInput'
// import { connect } from 'react-redux'

const ReviewForm = (props) => {
  
    let movieId = parseInt(props.match.params.id)
    console.log(`reviewForm`, props.history)
    let reviewHistory = props.history

    return (
        <div>
            <ReviewInput reviewHistory={reviewHistory} movieId={movieId} movies={props.movies} />
        </div>
    )
}


export default ReviewForm;
