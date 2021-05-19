import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
import{ Route, Link } from 'react-router-dom'

const Reviews = (props) => {
    const handleDelete = (review) => {
        props.deleteReview(review.id, review.movie_id); 
    }

    return (
        <div>
            { props.reviews && props.reviews.map(review => 
                <li key={review.id}>{review.description}<button onClick={() => handleDelete(review)}>Delete</button></li>
                )}
                {/* {console.log(props.reviews.movie_id)} */}
                {/* <Link to={`/movies/${movie.id}/reviews/new`}>Write a Review</Link> */}
        </div>
    )
}


export default connect(null, { deleteReview })(Reviews);