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

  componentDidMount() {
      const token = localStorage.getItem('jwt');
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
        setTimeout(() => window.location.pathname = '/api', 3000)
      }
      console.log('state', this.state);
  }
}

export default Jokes;