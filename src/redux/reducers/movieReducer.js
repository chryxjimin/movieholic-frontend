function movieReducer(state = {movies: []}, action) {
    switch (action.type) {
        case 'FETCH_MOVIES': 
        return {movies: action.payload}
        case 'ADD_REVIEW':
            let movies = state.movies.map(movie => {
                if (movie.id === action.payload.id) {
                    return action.payload
                } else {
                    return movie
                }
            })
            return {...state, movies: movies}
            case 'DELETE_REVIEW':
                let moviesLeft = state.movies.map(movie => {
                    if (movie.id === action.payload.id) {
                        return action.payload
                    } else {
                        return movie
                    }
                })
                return {...state, movies: moviesLeft}
        default:
            return state
        }
    }



export default movieReducer;