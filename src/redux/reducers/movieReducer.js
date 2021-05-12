function movieReducer(state = {movies: []}, action) {
    // switch(action.type) 

    //  return state
    return action.payload
    //to see if that our action was coming in correctly and that the store
    // could properly be updated by our reducer
    // console.log(state)
}

export default movieReducer;