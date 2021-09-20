import { Form } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';


function Movies(props) {
    const [search, setSearch] = useState("");

    let history = useHistory();

    function handleClick() {
        console.log(props.movies)
        props.movies.map((movie) => {

            history.push(`/movies/${movie.id}`)
        }
        )
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
                <div key={movie.id}><button type="button" onClick={handleClick}>{movie.title}</button></div>
            )}
        </div>
    )

  

}



export default Movies;


{/* <div key={movie.id}><Button variant="outline-secondary"><Link to={`/movies/${movie.id}`}>{movie.title}</Link></Button></div> */}