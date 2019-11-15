import React, { Component } from 'react';
import './news-article.css';

class NewsArticlePreview extends Component {

  render() {
    return(
      <div className="article-preview">
        {
          this.props.isTopArticle ?
            <div>
            <h1>{ this.props.article.title }</h1>
            <img
              src={ this.props.article.urlToImage }
              alt={ this.props.article.urlToImage }
            />
            </div>
          :
            <h3>{ this.props.article.title }</h3>
        }
        <p>{ this.props.article.description }</p>
      </div>
    );
  }
}

export default NewsArticlePreview;
