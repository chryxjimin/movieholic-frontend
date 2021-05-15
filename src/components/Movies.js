import React from 'react'
import Movie from './Movie'
import { Route, Link } from 'react-router-dom'

function Movies(props) {
    
    return (
        <div>
            {props.movies.map(movie => 
                <div key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></div>
                // <Route path='/movies/:id' render = {() => <Movie movie={props.movie[0]} /> } />
            )}
        </div>
    )

  

}


// renderMovies = () => {
//     return props.movies.map(movie => {
//         return (
//             <div> 
//                 <img src= {movie.poster} />
//                  <h3 key={movie.id}>{movie.title}</h3>
//             </div>
//         )
//     })

// }


export default Movies;