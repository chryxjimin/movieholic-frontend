import React from 'react'

const Reviews = (props) => {

    // handleDelete = (event) => {
    //     //need an action creator
    // }

    return (
        <div>
            { props.reviews && props.reviews.map(review => 
                <li key={review.id}>{review.description}<button onClick={this.handleDelete}>Delete</button></li>
                )}
        </div>
    )
}


export default Reviews;