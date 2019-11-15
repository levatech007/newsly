import React, { Component } from 'react';
import './news-article.css';

class NewsArticleFull extends Component {
  render() {
    const currentArticle = this.props.article
    return(
      <div className="article">
        <h1>{ currentArticle.title }</h1>
        <img src={ currentArticle.urlToImage } alt="#"/>
        <p>{ currentArticle.author }</p>
        <p>{ currentArticle.content }</p>
      </div>
    );
  }
}

export default NewsArticleFull;
