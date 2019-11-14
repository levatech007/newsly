import { userConstants } from '../constants';

export const userActions = {
  login,
  logout
};

function login(userData) {
  let user = JSON.stringify(userData);
  return dispatch => {

    localStorage.setItem('user', user)
      .then( user => {
        dispatch(success(user));
        // history.push('/');
      },
      error => {
            dispatch(failure(error));
        }
      );
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  localStorage.removeItem('user');
  return { type: userConstants.LOGOUT };
}
