import { combineReducers } from 'redux';
import { users } from './usersReducer.js';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
