import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleActions } from '../actions';
import NewsArticlePreview from '../components/NewsArticles/NewsArticlePreview.js';
import './news-page.css';

class NewsPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(articleActions.getTopArticles());
  }

  render() {
    return(
      <div className="news-container">
        <h1>TODAY'S TOP HEADLINES</h1>
        { this.props.articles.articles &&
          <ul>
            {
              this.props.articles.articles.map((article, idx) => {
                return(
                  <NewsArticlePreview
                    key={ idx }
                    article={ article }
                    isTopArticle={ idx ? false : true }
                  />
                )
              })
            }
          </ul>
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
