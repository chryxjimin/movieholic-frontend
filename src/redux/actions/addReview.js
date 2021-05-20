export const addReview = (review, movieId) => {
     return (dispatch) => {
         console.log(`dispatch`. dispatch)
        fetch(`http://localhost:3000/api/v1/movies/${movieId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(movie => {
            console.log(`movie`, movie)
            dispatch({type: 'ADD_REVIEW', payload: movie})
            
        })
        .catch(err => console.log(err))
     }
}

//need to post to movies/movie_id/reviews