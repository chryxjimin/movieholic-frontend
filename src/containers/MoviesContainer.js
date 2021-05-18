import React, { Component } from 'react'
import { connect } from 'react-redux';
import Movies from '../components/Movies'
import Movie from '../components/Movie'
// import MovieReviewInput from '../components/MovieReviewInput'
import { fetchMovies } from '../redux/actions/fetchMovies'
import { Route, Switch } from 'react-router-dom'
//switch returns the first thing that matches

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                {/* <Route path='/reviews/new' component={MovieReviewInput}> */}
                <Switch>
                    {console.log(this.props.movies)}
                    {/* //add condition for route */}
                    if (this.props.movies.id !== null ) {
                        // <Route path='/movies/:id/reviews/new' render = {(routerProps) => <Movie {...routerProps} movies={this.props.movies} />} />
                        <Route path='/movies/:id' render = {(routerProps) => <Movie {...routerProps} movies={this.props.movies} />} />
                    } else {
                        <Route exact path='/movies' render = {(routerProps) => <Movies {...routerProps} movies={this.props.movies} />} />
                    }
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