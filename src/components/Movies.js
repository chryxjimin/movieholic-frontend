import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Movies(props) {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input type="text" name="searchQuery" placeholder="Search..." onChange={(event) => {setSearch(event.target.value)}}></input>
           
            {props.movies.filter((movie) => {
                if (search === "") {
                    return movie
                } else {
                    return movie.title.toLowerCase().includes(search.toLowerCase())
                }
            }).map(movie => 
                <div key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></div>
            )}
        </div>
    )

  

}



export default Movies;