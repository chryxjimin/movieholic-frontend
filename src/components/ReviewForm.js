import React from 'react'
import ReviewInput from '../components/ReviewInput'


const ReviewForm = (props) => {
  
    let movieId = parseInt(props.match.params.id)
    let reviewHistory = props.history
    console.log(`reviewhistory`, reviewHistory)

    return (
        <div>
            <ReviewInput reviewHistory={reviewHistory} movieId={movieId} movies={props.movies} />
        </div>
    )
}


export default ReviewForm;
