import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
// import{ Route, Link } from 'react-router-dom'

const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
   
    return (
        <div>
            <p>{movie.title} <br></br> {movie.year}</p>
            <p>{movie.rated}</p>
            <img alt={movie.title} src={movie.poster} height="300" width="200" />
            <p>Released: {movie.released}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Writer: {movie.writer}</p>
            <p>Actors: {movie.actors}</p>
            <p>Language: {movie.language}</p>
            <p>Country: {movie.country}</p>
            <p>Awards: {movie.awards}</p>
            <p>imdbRating: {movie.imdbRating}</p>
            <p>imdbVotes: {movie.imdbVotes}</p>
            <p>Box Office: {movie.box_office}</p>
            <p>Production: {movie.production}</p>
            <ReviewsContainer movie={movie} />
        </div>
    )
}


export default Movie;


// if (movie? movie : null) {
//     return (

//     <div>
//         <p>{movie.title} <br></br> {movie.year}</p>
//         <p>{movie.rated}</p>
//         <img src={movie.poster} height="300" width="200" />
//         <p>Released: {movie.released}</p>
//         <p>Runtime: {movie.runtime}</p>
//         <p>Genre: {movie.genre}</p>
//         <p>Director: {movie.director}</p>
//         <p>Writer: {movie.writer}</p>
//         <p>Actors: {movie.actors}</p>
//         <p>Language: {movie.language}</p>
//         <p>Country: {movie.country}</p>
//         <p>Awards: {movie.awards}</p>
//         <p>imdbRating: {movie.imdbRating}</p>
//         <p>imdbVotes: {movie.imdbVotes}</p>
//         <p>Box Office: {movie.box_office}</p>
//         <p>Production: {movie.production}</p>
//         <ReviewsContainer movie={movie} />
//     </div>
//     )
// }




//where we show the specifc movie's information