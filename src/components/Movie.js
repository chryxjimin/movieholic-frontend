import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import{ Route, Link } from 'react-router-dom'

const Movie = (props) => {


    let movie = props.movies[props.match.params.id - 1]
   
    return (
        <div>
            <p>{movie ? movie.title : null} <br></br> {movie? movie.year : null }</p>
            <p>{movie ? movie.rated : null}</p>
            <img src={movie ? movie.poster : null} height="300" width="200" />
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
            {/* {console.log(movie)} */}
           
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