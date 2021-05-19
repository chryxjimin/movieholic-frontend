import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
// import { addReview } from '../redux/actions/addReview'
import{ Route, Link } from 'react-router-dom'
// import Movie from './components/Movie'

const Reviews = (props) => {

    const handleDelete = (review) => {
        props.deleteReview(review.id, review.movie_id); 
    }

    // console.log(props)
    // console.log(props.reviews)
    const movieId = props.reviews.map(movie => movie.movie_id)[0]

    return (
        <div>
            { props.reviews && props.reviews.map(review => 
                <li key={review.id}>{review.description}<button onClick={() => handleDelete(review)}>Delete</button></li>
                )}
                <Link to={`/movies/${movieId}/reviews/new`}>Write a Review</Link>
        </div>
    )
}


export default connect(null, { deleteReview })(Reviews);