import React from 'react'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux'

const ReviewForm = (props) => {
    return (
        <div>
            <ReviewInput movies={props.movies} />
             {/* <ReviewInput {...routerProps} movies={this.props.movies} /> */}
        </div>
    )
}


export default ReviewForm;
