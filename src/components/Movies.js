import React from 'react'

function Movies(props) {
    
    return (
        <div>
            {props.movies.map(movie => <h3 key={movie.id}>{movie.title}</h3>)}
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