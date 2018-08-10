import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';

class Jokes extends Component {
    state= {
        jokes: []
    };

  render() {
    return (
      <div className="jokes">
        {this.state.jokes.map((joke, index) => <Joke key={index} joke={joke} />)}
      </div>
    );
  }

  componentDidMount() { // displaying the joke cointainer on /api/jokes route
      const token = localStorage.getItem('jwt');  // .get's the jwt to authorize viewing of the /jokes route
      const requestOptions = {
        headers: {
          Authorization: token
        }
      }
      if (token) {
      axios
        .get('http://localhost:8000/api/jokes', requestOptions)
        .then(res => {
            this.setState({ jokes: res.data });
        })
        .catch(err => {
            console.error('Axios Failed')
        }) 
      } else {
        setTimeout(() => window.location.pathname = '/api', 3000) // a timer set to refresh page to /api (homepage) if user is not logged in
      }
      console.log('state', this.state);
  }
}

export default Jokes;