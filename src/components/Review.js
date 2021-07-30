import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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

                <li key={this.props.review.id}>{this.props.review.description}<button onClick={() => this.handleDelete(this.props.review)}>Delete</button><button onClick={() => this.handleUpvote(this.props.review)}>{this.state.count}</button></li>
                <Link to={`/movies/${movieId}/reviews/new`}>Write a Review</Link>
                 <Button>Test Button</Button>
               </>
    }
}


export default connect(null, { deleteReview })(Review);