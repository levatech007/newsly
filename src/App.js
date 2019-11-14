import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPage from './containers/LoginPage.js';
import NewsPage from './containers/NewsPage.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        {
          this.props.login.loggedIn ? <NewsPage /> : <LoginPage />
        }
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
