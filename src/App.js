import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/reviews')
    .then(res => res.json())
    .then(data => console.log(data[0].description))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;