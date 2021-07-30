import './App.css';
import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './redux/actions/fetchMovies'
import MoviesContainer from './containers/MoviesContainer'
const MyComp = lazy(() => import('./components/myComp'))



const App = (props) => {

 
    props.fetchMovies()
  
  
    return (
      <div className="App">
          <MoviesContainer />
          <Suspense fallback={<div>Loading...</div>} >
            <MyComp />
          </Suspense>
          {/* <Button>Test Button</Button> */}
        </div>
    );
  }



export default connect(null, { fetchMovies })(App);
