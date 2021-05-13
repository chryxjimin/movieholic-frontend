import React, { Component } from 'react';
import { connect } from 'react-redux';
//connect gives us access to the store
// import { fetchMovies } from './redux/actions/fetchMovies'
import MoviesContainer from './containers/MoviesContainer'
class App extends Component {


  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    );
  }
}

 
//mapStateToProps is a way of accessing values of our store as props
//mapStateToProps gives us access to what is currently in the store
//mapDispatchTo Props gives us ability to dispatch new actions to our store directly to the componeentn
export default App;

//connect is automatically calling dispatch for us on the return value
//of {fetchMovies}
//connect() function connects a React component to a Redux store
//it calls the store.dispatch({type: "FETCH_MOVIES, payload: {title: 'Whatever'}), passing in the action object