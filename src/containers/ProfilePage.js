import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import EditIcon from './images/edit-icon.svg';
import UpdateForm from '../components/UserForm/UserForm.js';
import './profile-page.css';

class ProfilePage extends Component {
  constructor() {
    super();
    this.onShowEditForm = this.onShowEditForm.bind(this);
    this.onCancelEditUser = this.onCancelEditUser.bind(this);
    this.onSubmitEditUser = this.onSubmitEditUser.bind(this);
  }

  onShowEditForm() {
    this.props.dispatch(userActions.showEditForm(this.props.login.user));
  }

  onCancelEditUser() {
    console.log("Cancel")
    this.props.dispatch(userActions.hideEditForm(this.props.login.user));
  }

  onSubmitEditUser(email, token) {
    console.log("Submitted");
    this.props.dispatch(userActions.editUser(email, token));
  }

  render() {
    console.log(this.props.login)
    return(
      <div className="profile-container">
        {
          this.props.login.isUpdating ?
          <UpdateForm
            formTitle="Edit your info"
            buttonText="Update"
            submit={ this.onSubmitEditUser }
            cancel={ this.onCancelEditUser }
          />
        :
        <div>
          <h2>MY PROFILE</h2>
          <p>My email: { this.props.login.user.email }</p>
          <p>My token: { this.props.login.user.token }</p>
          <img
            src={ EditIcon }
            alt="edit"
            onClick={ this.onShowEditForm }
          />
        </div>
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

export default connect(mapStateToProps)(ProfilePage);
