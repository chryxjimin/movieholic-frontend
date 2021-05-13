export const addReview = (data) => {
     return (dispatch) => {
        fetch('http://localhost:3000/api/v1/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(review => dispatch({type: 'ADD_REVIEW', payload: review}))
     }
}

//need to post to movies/movie_id/reviews