import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Review from '../components/Review'







class Reviews extends React.Component {


    
    render() {
        
        const movieId = this.props.reviews.map(movie => movie.movie_id)[0]
        return (
            <div>
                    
                        { this.props.reviews && this.props.reviews.map(review => {
                            return <Review review={review}/>
                        })}
                
               
            </div>
        )
    }

}


export default Reviews;