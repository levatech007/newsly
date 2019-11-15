import { articleConstants } from '../constants';

export function articles(state = {}, action) {
  switch (action.type) {
    case articleConstants.GET_TOP_ARTICLES:
      return { articles: action.articles };
    case articleConstants.GET_SEARCHED_ARTICLES:
      return {};
    case articleConstants.GET_SELECTED_ARTICLE:
      return {};
    default:
      return state;
  }
}
