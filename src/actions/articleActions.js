import { articleConstants } from '../constants';
import { articlesService } from '../services';
// import { history } from '../helpers';

export const articleActions = {
  getTopArticles,
  getSearchedArticles,
  getSelectedArticle
};

// GET_TOP_ARTICLES
// GET_SEARCHED_ARTICLES:
// GET_SELECTED_ARTICLE:
function getTopArticles() {
  // get top articles
  return dispatch => {
    let articles = articlesService.getTopArticles()
    .then(articles => {
      return articles.articles
    })
    .then(topArticles => {
      console.log(topArticles)
      dispatch(success(topArticles));
    })

    function success(articles) { return { type: articleConstants.GET_TOP_ARTICLES, articles } }
  }
}

function getSearchedArticles() {
  // get articles that match user search input
}

function getSelectedArticle() {
  // get full article the user selects
}
