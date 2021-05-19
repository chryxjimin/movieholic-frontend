import React from 'react'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux'

const ReviewForm = (props) => {
    return (
        <div>
            <ReviewInput movies={props.movies} />
        </div>
    )
}


export default ReviewForm;
