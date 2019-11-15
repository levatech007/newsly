import { combineReducers } from 'redux';
import { users } from './usersReducer.js';
import { articles } from './articlesReducer.js';

const rootReducer = combineReducers({
  users,
  articles
});

export default rootReducer;
