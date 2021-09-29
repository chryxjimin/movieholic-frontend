import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Review from '../components/Review'
import { Link } from 'react-router-dom'




class Reviews extends React.Component {


    
    render() {

        const movieId = this.props.movie.id

        return (
            <div>
                        
                        { this.props.reviews && this.props.reviews.map(review => {
                            return <Review review={review}/>
                        })}
                         <Link to={`/movies/${movieId}/reviews/new`}>Write a Review</Link>
               
            </div>
        )
    }

}


export default Reviews;