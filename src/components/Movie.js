import React from 'react'

const Movie = (props) => {

    console.log(props)
    let movie = props.movies[props.match.params.id - 1]
    console.log(movie)
   
    return (
        <div>
            {/* <p>{movie.title}</p>
            <img src={movie.poster} /> */}
            <p>{movie ? movie.title : null}</p>
            <img src={movie ? movie.poster : null} />
        </div>
    )
}


export default Movie;




//where we show the specifc movie's information