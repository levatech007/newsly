import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/UserForm/UserForm.js';
import { userActions } from '../actions';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      formSubmitted: false
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(email, token) {
    const { dispatch } = this.props;
    dispatch(userActions.login(email, token));
  }

  render() {
    return(
      <div>
        <LoginForm
          formTitle="Log In"
          submit={ this.handleFormSubmission }
          buttonText="Log In"
        />
      </div>
    );
  }
}

export default connect()(LoginPage);
