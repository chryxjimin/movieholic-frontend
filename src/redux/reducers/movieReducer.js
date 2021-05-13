function movieReducer(state = {movies: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_MOVIES': 
            return {movies: action.payload}
        default:
            return state
    }
    // return action.payload
    //to see if that our action was coming in correctly and that the store
    // could properly be updated by our reducer
}

export default movieReducer;