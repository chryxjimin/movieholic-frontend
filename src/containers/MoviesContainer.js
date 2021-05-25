import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import MovieApi from '../components/MovieApi'
import ReviewForm from '../components/ReviewForm'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route, Switch  } from 'react-router-dom'


class MoviesContainer extends Component {


    renderMovie = (routerProps) => {
        const parsedProps = parseInt(routerProps.match.params.id)
        let movie = this.props.movies.find (movie => movie.id === parsedProps)
        if (movie !== undefined ) {
            return <Movie {...routerProps} movies={this.props.movies} />
        }
    }

    


    render() {
        return (
            <div>
                <Switch>
                        <Route path='/movies/api' component={MovieApi} />
                        <Route path='/movies/:id/reviews/new' render = {(routerProps) => <ReviewForm {...routerProps} movies={this.props.movies} />} />
                        <Route path='/movies/:id' render = {this.renderMovie} />
                        <Route exact path='/movies' render = {(routerProps) => <Movies {...routerProps} movies={this.props.movies} />} />
                  
                </Switch>
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
