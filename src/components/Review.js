import { Card, Button } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/deleteReview'
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
       console.log(movieId, "movieId Review")
        return <>
                <Card>
                    {/* <ButtonGroup size="sm"> */}
                        <li key={this.props.review.id}>{this.props.review.description} <Button variant="outline-dark" onClick={() => this.handleDelete(this.props.review)}>Delete</Button> <Button variant="outline-dark" onClick={() => this.handleUpvote(this.props.review)}>{this.state.count}</Button></li>
                       
                    {/* </ButtonGroup> */}
                </Card>
               
               </>
    }
}


export default connect(null, { deleteReview })(Review);