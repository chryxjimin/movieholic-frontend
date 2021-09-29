import React from 'react'
import ReviewInput from '../components/ReviewInput'


const ReviewForm = (props) => {
  
    let movieId = parseInt(props.match.params.id)
    console.log(movieId, "movieId ReviewForm")
    let reviewHistory = props.history

    return (
        <div>
            <ReviewInput reviewHistory={reviewHistory} movieId={movieId} movies={props.movies} />
        </div>
    )
}


export default ReviewForm;
