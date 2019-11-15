import React, { Component } from 'react';
import NewsArticlePreview from './NewsArticlePreview.js';

class NewsArticleList extends Component {

  render() {
    return(
      <div>
        <h1>{ this.props.pageTitle }</h1>
          <ul>
            {
              this.props.articles.map((article, idx) => {
                return(
                  <NewsArticlePreview
                    key={ idx }
                    article={ article }
                    isTopArticle={ idx ? false : true }
                    onShowArticle={ this.props.onShowArticle }
                  />
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default NewsArticleList;
