import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import MovieApi from '../components/MovieApi'
import ReviewInput from '../components/ReviewInput'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route, Switch  } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

//switch returns the first thing that matches

class MoviesContainer extends Component {

    //useEffect = () => {}, []
    //if you pass in empty array the function will only be called once

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/v1/movies')
    // })

    renderMovie = (routerProps) => {

        console.log(this.props.movies)
        const parsedProps = parseInt(routerProps.match.params.id)
        // console.log(typeof parsedProps)
        let movie = this.props.movies.find (movie => movie.id === parsedProps)
        console.log(movie)
        if (movie !== undefined ) {
            return <Movie {...routerProps} movies={this.props.movies} />
        } else {
            return <Redirect to='/movies' />
        }
    }

    render() {
        return (
            <div>
                <Switch>
                      
                        <Route path='/movies/api' component={MovieApi} />
                        <Route path='/movies/:id' render = {this.renderMovie} />
                        <Route path='/movies/:id/reviews/new' render = {(routerProps) => <ReviewInput {...routerProps} movies={this.props.movie} />} />
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