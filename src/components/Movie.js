import React from 'react'
// import { Redirect } from 'react-router-dom'
import ReviewsContainer from '../containers/ReviewsContainer'

const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
   
    return (
        <div>
            {/* {movie ? null : <Redirect to='/movies' />} */}
            <p>{movie ? movie.title : null} <br></br> {movie? movie.year : null }</p>
            <img src={movie ? movie.poster : null} height="100" width="100" />
            <ReviewsContainer movie={movie} />
        </div>
    )
}


export default Movie;




//where we show the specifc movie's information