import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import MovieInput from '../components/MovieInput'

class MoviesContainer extends Component {
    render() {
        return (
            <div>
                <MovieInput />
                <Movies />
            </div>
        )
    }
}

export default connect(MoviesContainer);