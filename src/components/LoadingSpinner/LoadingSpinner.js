import React, { Component } from 'react';
import Spinner from './loading-spinner.png';
import './loading-spinner.css';

class LoadingSpinner extends Component {

  render() {
    return(
      <div className="screen">
        <div className="window">
          <div className="spinner">
            <img src={ Spinner } alt="spinner" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingSpinner;
