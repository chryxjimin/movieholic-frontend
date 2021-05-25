import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import MovieApi from '../components/MovieApi'
import ReviewForm from '../components/ReviewForm'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route, Switch  } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

//switch returns the first thing that matches

class MoviesContainer extends Component {


    renderMovie = (routerProps) => {
        console.log(routerProps)
        const parsedProps = parseInt(routerProps.match.params.id)
        console.log(parsedProps)
        let movie = this.props.movies.find (movie => movie.id === parsedProps)
        console.log(movie)
        if (movie !== undefined ) {
            return <Movie {...routerProps} movies={this.props.movies} />
            // } else {
            // return <Redirect to='/movies' />
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
//As the first argument passed in to connect , mapStateToProps is used for selecting
// the part of the data from the store that the connected component needs.
// It is called every time the store state changes.