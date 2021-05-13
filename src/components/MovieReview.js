import React, { Component } from 'react'

class MovieReview extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Movie Review</label>
                    <input type="text-area" placeholder="Type in your review">

                    </input>
                </form>
            </div>
        )
    }
}

export default MovieReview;