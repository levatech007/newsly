import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from './actions';
import NavBar from './components/NavBar/NavBar.js';
import LoginPage from './containers/LoginPage.js';
import HomePage from './containers/HomePage.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  // pass function to navbar where logout button is located
  handleLogout() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    return (
      <div>
        <NavBar
          logout={ this.handleLogout }
          loggedIn={ this.props.login.loggedIn }
        />
        { this.props.login.loggedIn ? <HomePage /> : <LoginPage /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.users
  };
}

export default connect(mapStateToProps)(App);
