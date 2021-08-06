import { Card, Button } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
import { Link } from 'react-router-dom'


class Review extends React.Component {
    state = {
        count: 0
    }

     handleUpvote = (review) => {
        
        this.setState({
            count: this.state.count + 1
        })
    }
    
     handleDelete = (review) => {
        this.props.deleteReview(review.id, review.movie_id); 
    }
    render(){
       const movieId = this.props.review.movie_id
        return <>
                <Card>
                        <li key={this.props.review.id}>{this.props.review.description} <Button variant="secondary" onClick={() => this.handleDelete(this.props.review)}>Delete</Button> <Button variant="secondary" onClick={() => this.handleUpvote(this.props.review)}>{this.state.count}</Button></li>
                        <Link to={`/movies/${movieId}/reviews/new`}>Write a Review</Link>
                </Card>
                
               </>
    }
}


export default connect(null, { deleteReview })(Review);