import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return(
      <div>
        <h1>404 - Page Not Found</h1>
        <Link to="/">Return to Home Page</Link>
      </div>
    )
  }
}

export default PageNotFound;
