export const deleteReview = (movieId, reviewId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/movies/${movieId}/reviews/${reviewId}`, {
           method: 'DELETE',
       })
       .then(res => res.json())
       .then(movie => dispatch({type: 'DELETE_REVIEW', payload: movie}))
    }
}