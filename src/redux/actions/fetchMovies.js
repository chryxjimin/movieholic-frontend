
export function fetchMovies() {
  return (dispatch) => {
      fetch('http://localhost:3000/api/v1/movies')
      .then(res => res.json())
      .then(movies => {
        // console.log(`fetchmovies`, movies)
        dispatch({
          type: 'FETCH_MOVIES',
          payload: movies
      })})
      }
        
  }



//our action creator is a function which dispactches an action object
//to the reducer which will return a new version of our state 
//based on the action