import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleActions } from '../actions';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.js';
import NewsArticleList from '../components/NewsArticles/NewsArticleList.js';
import NewsArticleFull from '../components/NewsArticles/NewsArticleFull.js';

class NewsPage extends Component {
  constructor() {
    super();
    this.showFullArticleView = this.showFullArticleView.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(articleActions.getTopArticles());
  }

  showFullArticleView(article) {
    this.props.dispatch(articleActions.switchToArticleFullView(article));
  }

  render() {
    return(
      <div>
        { this.props.articles.isLoading && <LoadingSpinner /> }

        { this.props.articles.articles && this.props.articles.isInFullView &&
          <NewsArticleFull
            article={ this.props.articles.articles }
          />
        }

        { this.props.articles.articles && !this.props.articles.isInFullView &&
          <NewsArticleList
            pageTitle="TODAY'S TOP HEADLINES"
            articles={ this.props.articles.articles }
            onShowArticle={ this.showFullArticleView }
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(NewsPage);
