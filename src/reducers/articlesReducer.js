import { articleConstants } from '../constants';

export function articles(state = {}, action) {
  switch (action.type) {
    case articleConstants.GET_ARTICLES_REQUEST:
      return {
        isLoading: true,
        articles: action.articles
      };
    case articleConstants.GET_TOP_ARTICLES:
      return {
        isLoading: false,
        articles: action.articles
      };
    case articleConstants.GET_SEARCHED_ARTICLES:
      return {};
    case articleConstants.GET_SELECTED_ARTICLE:
      return {};
    default:
      return state;
  }
}
