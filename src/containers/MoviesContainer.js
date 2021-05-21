import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
// const Movie = lazy(() => import('../components/Movie'))
import MovieApi from '../components/MovieApi'
import ReviewForm from '../components/ReviewForm'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route, Switch  } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
//switch returns the first thing that matches

class MoviesContainer extends Component {


    renderMovie = (routerProps) => {
        const parsedProps = parseInt(routerProps.match.params.id)
        console.log(parsedProps)
        let movie = this.props.movies.find (movie => movie.id === parsedProps)
        console.log(movie)
        if (movie !== undefined ) {
            return <Movie {...routerProps} movies={this.props.movies} />
            //(
                // <Suspense fallback={<div>Loading...</div>} >
                {/* </Suspense> */}
            // )
                
        } else {
            return <Redirect to='/movies' />
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