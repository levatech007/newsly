import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from './actions/userActions.js';
import NavBar from './components/NavBar/NavBar.js';
import LoginPage from './containers/LoginPage.js';
import NewsPage from './containers/NewsPage.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  // pass function to navbar where logout button is located
  handleLogout() {
    const { dispatch } = this.props;
    this.props.dispatch(userActions.logout());
  }

  render() {
    return (
      <div>
        <NavBar
          logout={ this.handleLogout }
          loggedIn={ this.props.login.loggedIn }
        />
        { this.props.login.loggedIn ? <NewsPage /> : <LoginPage /> }
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
