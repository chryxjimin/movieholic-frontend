import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
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
                <Route exact path='/movies' render = {() => <Movies movies={this.props.movies} />} />
                    
               
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