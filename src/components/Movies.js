import React from 'react'
import Movie from './Movie'

function Movies(props) {
    
    return (
        <div>
            {props.movies.map(movie => 
            <div key={movie.id}><Movie movie={movie}/></div>
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