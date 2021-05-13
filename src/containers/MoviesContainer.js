import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import MovieReviewInput from '../components/MovieReviewInput'
import { fetchMovies } from '../redux/actions/fetchMovies'

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <MovieReviewInput /><br></br>
                <Movies movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer);