import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  // componentDidMount() {
    // let user = {email: 'test@test.com', token: 'kje9823bwj'}
    // localStorage.setItem('user', JSON.stringify(user))
    // localStorage.removeItem('user')
  // }

  render() {
    return (
      <div>
        {
          this.props.login.loggedIn ? <p>User existst</p> : <p>user does not exist</p>
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
