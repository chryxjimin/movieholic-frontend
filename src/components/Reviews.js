import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Review from '../components/Review'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'






class Reviews extends React.Component {


    
    render() {
        
        const movieId = this.props.reviews.map(movie => movie.movie_id)[0]
        return (
            <div>
                    
                        { this.props.reviews && this.props.reviews.map(review => {
                            return <Card>
                                        <Card.Body><Review review={review}/></Card.Body>
                                   </Card>
                        })}
                
               
            </div>
        )
    }

}


export default Reviews;