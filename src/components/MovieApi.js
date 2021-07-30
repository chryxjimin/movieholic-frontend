import React, { Component } from 'react'

const apiKey = ""
class MovieApi extends Component {

    state = {
        movie: []
    }



    componentDidMount() {
        fetch(`http://www.omdbapi.com/?t=batman&page=1&apikey=${apiKey}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default MovieApi;
