import React, { Component } from 'react';
import './news-article.css';

class NewsArticlePreview extends Component {
  render() {
    return(
      <div className="article-preview">
        {
          this.props.isTopArticle ?
            <h1>{ this.props.article.title }</h1>
          :
            <h3>{ this.props.article.title }</h3>
        }

        <p className="small-text">{ this.props.article.author }</p>

        {
          this.props.isTopArticle ?
            <img
              src={ this.props.article.urlToImage }
              alt={ this.props.article.urlToImage }
            />
            :
            null
          }
        <p>{ this.props.article.description }</p>
      </div>
    );
  }
}

export default NewsArticlePreview;
