import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../redux/actions/addReview'

class ReviewInput extends Component {

    componentDidMount(props) {
        console.log(`componentdidmount`, this.props)

    }
    
    state = {
        description: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    
    handleSubmit = (event) => {
        event.preventDefault();
        let moviesIdArray = this.props.movies.map(movie => movie.id)
        console.log(moviesIdArray)
        let movieId = moviesIdArray.find(movie => movie)
        console.log(`this.props.movies`, moviesIdArray.find(movie => movie))
        this.props.addReview(this.state, movieId); 
        this.setState({
            description: ''
        })
    }


    // <ReviewInput movies={props.movies.filter((movie) => {
    //     // console.log(`reviewinput`, movie)
    //     if (props.match.params.id === movie.id) {
    //         return movie
    //     } else {
    //          return movie   
    //     }
    // })} />


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Movie Review</label>
                    <input onChange={this.handleChange} name="description" type="text-area" placeholder="Type in your review" value={this.state.description}>
                    </input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addReview })(ReviewInput);


//for controlled forms we needed to add name to input to match the attribute within 
//the state for the handleChange so that we can have access to teh state as event.target.description