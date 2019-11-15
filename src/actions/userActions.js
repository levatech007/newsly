import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  showEditForm,
  hideEditForm,
  editUser
};

function login(email, token) {
  return dispatch => {
      let user = userService.login(email, token)
      if(Object.keys(user).length) {
        dispatch(success(user));
        history.push('/');
      } else {
        dispatch(failure('Something went wrong!'));
      };
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
}

function logout() {
  userService.logout();
  history.push('/');
  return { type: userConstants.LOGOUT };
}

function showEditForm(user) {
  return { type: userConstants.USER_UPDATE_REQUEST, user };
}

function hideEditForm(user) {
  return { type: userConstants.USER_CANCEL_UPDATE_REQUEST, user };
}

function editUser(email, token) {
  userService.logout();
  let user = userService.login(email, token);
  return { type: userConstants.LOGIN_SUCCESS, user };
}
