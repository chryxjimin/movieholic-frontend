export const addReview = (review, movieId) => {
     return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/movies/${movieId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(movie => {
            dispatch({type: 'ADD_REVIEW', payload: movie})
            
        })
        .catch(err => console.log(`Error`, err))
     }
}

//need to post to movies/movie_id