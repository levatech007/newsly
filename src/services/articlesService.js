export const articlesService = {
  getTopArticles,
  getSearchedArticles,
};

// base url includes version and ends in .../v2
const BASE_URL = `${ process.env.REACT_APP_NEWS_API_URL }`;
let user = JSON.parse(localStorage.getItem('user'));
let url;

function getTopArticles() {
  url = `${ BASE_URL }/top-headlines?sources=cnn`;
  return getArticlesFromApi(url);
}

function getSearchedArticles(phrase) {
  url = `${ BASE_URL }/everything?q=${ phrase }`;
  return getArticlesFromApi(url);
}

function getArticlesFromApi(url) {

  let articles = fetch(url, {
    headers: {
      'Authorization': `Bearer ${ user.token }`
    }
  })
  .then(response => {
    return response.json();
  })
  .then(articles => {
    return articles;
  })
  return articles;
}
