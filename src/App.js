import React, { Component, useEffect, lazy, Suspense, useState } from 'react';
//Suspense will render something while our component is rendering
import { connect } from 'react-redux';
//connect gives us access to the store
import { fetchMovies } from './redux/actions/fetchMovies'
import MoviesContainer from './containers/MoviesContainer'
// import MyComp from './components/myComp'
const MyComp = lazy(() => import('./components/myComp'))


const App = (props) => {

  // componentDidMount() {
  //   this.props.fetchMovies();
  // }


  ///////////////////////////////////
  // const [movies, setMovies] = useState([
  //   {
  //     "Title": "Batman Begins",
  //     "Year": "2005",
  //     "imdbID": "tt0372784",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman v Superman: Dawn of Justice",
  //     "Year": "2016",
  //     "imdbID": "tt2975590",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman",
  //     "Year": "1989",
  //     "imdbID": "tt0096895",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman Returns",
  //     "Year": "1992",
  //     "imdbID": "tt0103776",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman Forever",
  //     "Year": "1995",
  //     "imdbID": "tt0112462",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman & Robin",
  //     "Year": "1997",
  //     "imdbID": "tt0118688",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "The Lego Batman Movie",
  //     "Year": "2017",
  //     "imdbID": "tt4116284",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman: The Animated Series",
  //     "Year": "1992–1995",
  //     "imdbID": "tt0103359",
  //     "Type": "series",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman: Under the Red Hood",
  //     "Year": "2010",
  //     "imdbID": "tt1569923",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title": "Batman: The Dark Knight Returns, Part 1",
  //     "Year": "2012",
  //     "imdbID": "tt2313197",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
  //     }
  // ]);
 
    props.fetchMovies()
  

    // return <div></div>;
  
    return (
      
      <div className="App">
          <MoviesContainer />
          <Suspense fallback={<div>Loading...</div>} >
            <MyComp />
          </Suspense>
        </div>
    );
  }


 
//mapStateToProps is a way of accessing values of our store as props
//mapStateToProps gives us access to what is currently in the store
//mapDispatchTo Props gives us ability to dispatch new actions to our store directly to the componeentn
export default connect(null, { fetchMovies })(App);

//connect is automatically calling dispatch for us on the return value
//of {fetchMovies}
//connect() function connects a React component to a Redux store
//it calls the store.dispatch({type: "FETCH_MOVIES, payload: {title: 'Whatever'}), passing in the action object