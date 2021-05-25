import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'


const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
 
    return (
        <div>
            <p>{movie.title} <br></br> {movie.year}</p>
            <img alt={movie.title} src={movie.poster} height="300" width="200" />
            
            <ReviewsContainer movie={movie} />
        </div>
    )
}


export default Movie;
