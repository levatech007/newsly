import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_ERROR:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
