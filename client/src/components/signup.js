import React, { Component }  from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  registerUser = event => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') { // display an alert if input is empty
      alert('Please enter credentials!');
      return;
    }

    const user = { 
      username: this.state.username, 
      password: this.state.password
    };
    
    axios
      .post('http://localhost:8000/api/register', user) // .post to access server and store a jwt with user credentials.
      .then(response => {
        const token = response.data;
        localStorage.setItem('token', token)
        this.props.history.push('/api/signin') // reroutes user to signin page after registration and an alert message that says "Success!"
        alert('Success!');
      })
      .catch(err => {
        console.error('Axios Failed');
      });
  }  

  render() {
    return (
      <div className="register">
        <form className="register-form" onSubmit={event => event.preventDefault()}>
          <h1>Register</h1>
          <input // input field for username
            name='username' 
            value={this.state.username} 
            onChange={this.handleChange} 
            placeholder='Username' 
            type='text'
          />
          <input // input field for password
            name='password' 
            value={this.state.password} 
            onChange={this.handleChange} 
            placeholder='Password' 
            type='password' 
          />
          <button onClick={this.registerUser}>Sign Up</button> 
        </form>
      </div>
    )
  }
}

export default Signup;