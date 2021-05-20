import React from 'react'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux'

const ReviewForm = (props) => {
  
    let movieId = props.match.params.id

    return (
        <div>
            <ReviewInput movieId={movieId} />
        </div>
    )
}


export default ReviewForm;
