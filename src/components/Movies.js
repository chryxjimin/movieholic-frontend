import { Form } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Movies(props) {
    const [search, setSearch] = useState("");

    return (
        <div>
            <Form>
                <Form.Label>Movieholic</Form.Label>
                <Form.Group>
                    <Form.Control type="text" name="searchQuery" placeholder="Search..." onChange={(event) => {setSearch(event.target.value)}}></Form.Control>
                </Form.Group>
            </Form>
           
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