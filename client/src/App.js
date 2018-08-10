import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dad Jokes Central</h1>
        </header>
        <div>
        {localStorage.getItem('jwt') && (<button onClick={this.logoutHandler}>Logout</button>)}
        </div>
        <Route path="/" component={ Nav }></Route>
      </div>
    );
  }
  logoutHandler = event => {
    localStorage.removeItem('jwt');
    this.props.history.push('/api/signin');
  }
}

export default withRouter(App);
