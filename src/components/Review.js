import { Card, Button } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
import { Link } from 'react-router-dom'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'


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
                    {/* <ButtonGroup size="sm"> */}
                        <li key={this.props.review.id}>{this.props.review.description} <Button variant="outline-secondary" onClick={() => this.handleDelete(this.props.review)}>Delete</Button> <Button variant="outline-secondary" onClick={() => this.handleUpvote(this.props.review)}>{this.state.count}</Button></li>
                       
                    {/* </ButtonGroup> */}
                </Card>
                <Link to={`/movies/${movieId}/reviews/new`}>Write a Review</Link>
               </>
    }
}


export default connect(null, { deleteReview })(Review);