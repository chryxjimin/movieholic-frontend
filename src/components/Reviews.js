import React from 'react'

const Reviews = (props) => {
    return (
        <div>
            { props.reviews && props.reviews.map(review => 
                <li key={review.id}>{review.description}</li>
                )}
        </div>
    )
}


export default Reviews;