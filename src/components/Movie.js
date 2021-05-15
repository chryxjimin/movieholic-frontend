import React from 'react'
// import { Redirect } from 'react-router-dom'
import ReviewsContainer from '../containers/ReviewsContainer'

const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
    console.log(movie)
   
    return (
        <div>
            {/* {movie ? null : <Redirect to='/movies' />} */}
            <p>{movie ? movie.title : null}</p>
            <img src={movie ? movie.poster : null} height="100" width="100" />
            <ReviewsContainer />
        </div>
    )
}


export default Movie;




//where we show the specifc movie's information