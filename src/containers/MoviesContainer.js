import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
// import MovieReviewInput from '../components/MovieReviewInput'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route } from 'react-router-dom'

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                {/* <Route path='/reviews/new' component={MovieReviewInput}> */}
                    {/* //need to make reviews container and call review action and reducer */}
                    {/* <MovieReviewInput /><br></br> */}
                <Route exact path='/movies' render = {(routerProps) => <Movies {...routerProps} movies={this.props.movies} />} />
                <Route path='/movies/:id' render = {(routerProps) => <Movie {...routerProps} movies={this.props.movies} />} />
               {/* passing in routerProps gives us access to props such as params called match */}
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