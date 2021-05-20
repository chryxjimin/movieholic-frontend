import React from 'react'
import ReviewInput from '../components/ReviewInput'
// import { connect } from 'react-redux'

const ReviewForm = (props) => {
  
    let movieId = parseInt(props.match.params.id)


    return (
        <div>
            <ReviewInput movieId={movieId} movies={props.movies} />
        </div>
    )
}


export default ReviewForm;
