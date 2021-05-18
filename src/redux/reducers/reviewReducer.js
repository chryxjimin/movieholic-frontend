function reviewReducer(state = {reviews: []}, action) {

    switch (action.type) {
        case 'ADD_REVIEW': 
            return {...state, reviews: [...state.reviews, action.payload]}
        default:
            return state
    }
    // return action.payload
    //to see if that our action was coming in correctly and that the store
    // could properly be updated by our reducer
}