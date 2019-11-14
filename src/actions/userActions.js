import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
  login,
  logout
};

function login(email, token) {
  return dispatch => {
      let user = userService.login(email, token)
      if(Object.keys(user).length)
        dispatch(success(user));
      else
        dispatch(failure('Something went wrong!'));
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT };
}
