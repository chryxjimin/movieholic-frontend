import { Form } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';


function Movies(props) {
    const [search, setSearch] = useState("");

    let history = useHistory();
    
    function handleClick(event) {
        event.preventDefault();
        let movieIdArray = props.movies.map(movie => movie.id)
        let movieId = event.target.id
        let parsedMovieId = parseInt(movieId)
        let foundMovieId = movieIdArray.find(movie => movie === parsedMovieId)
        history.push(`/movies/${foundMovieId}`)
        }
        


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
                <div key={movie.id}><Button id={movie.id} variant="outline-dark" onClick={handleClick}>{movie.title}</Button></div>
            )}
        </div>
    )

  

}



export default Movies;

