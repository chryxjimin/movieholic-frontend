import React from 'react'

const Movie = (props) => {
    return (
        <div>
            <p>{props.movie.title}</p>
            <img src={props.movie.poster} />
        </div>
    )
}


export default Movie;




//where we show the specifc movie's information