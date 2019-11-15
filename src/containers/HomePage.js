import React, { Component } from 'react';
import MyRoutes from "../config/routes.js"
import './home-page.css';

class HomePage extends Component {
  render() {
    return(
      <div className="container">
        { MyRoutes }
      </div>
    );
  }
}

export default HomePage;
