export const articlesService = {
  getTopArticles,
  getSearchedArticles,
  getSelectedArticle,
};

const newsApiBaseUrl = `${ process.env.REACT_APP_NEWS_API_URL }`
// const token = JSON.parse(localStorage.getItem('user')).token

const testToken = "c706061a276e45388c2ba988a6e984f8"

function getTopArticles() {
  const url = `${ newsApiBaseUrl }/top-headlines?apiKey=${ testToken }&sources=cnn`;
  let articles = fetch(url)
    .then(response => {
      return response.json();
    })
    .then(articles => {
      return articles;
    });
    return articles
}

function getSearchedArticles(phrase) {

}

function getSelectedArticle(id) {

}
