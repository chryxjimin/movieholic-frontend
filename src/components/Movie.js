import React from 'react'
// import { Redirect } from 'react-router-dom'
import ReviewsContainer from '../containers/ReviewsContainer'

const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
   
    return (
        <div>
            {/* {movie ? null : <Redirect to='/movies' />} */}
            <p>{movie ? movie.title : null} <br></br> {movie? movie.year : null }</p>
            <p>{movie ? movie.rated : null}</p>
            <img src={movie ? movie.poster : null} height="100" width="100" />
            <p>Released: {movie ? movie.released : null}</p>
            <p>Runtime: {movie ? movie.runtime : null}</p>
            <p>Genre: {movie ? movie.genre : null}</p>
            <p>Director: {movie ? movie.director : null}</p>
            <p>Writer: {movie ? movie.writer : null}</p>
            <p>Actors: {movie ? movie.actors : null}</p>
            <p>Language: {movie ? movie.language : null}</p>
            <p>Country: {movie ? movie.country : null}</p>
            <p>Awards: {movie ? movie.awards : null}</p>
            <p>imdbRating: {movie ? movie.imdbRating : null}</p>
            <p>imdbVotes: {movie ? movie.imdbVotes : null}</p>

            <p>Box Office: {movie ? movie.box_office : null}</p>
            <p>Production: {movie ? movie.production : null}</p>
            <ReviewsContainer movie={movie} />
        </div>
    )
}


export default Movie;




//where we show the specifc movie's information