import React, { Component } from 'react';
import MyRoutes from "../config/routes.js"

class HomePage extends Component {
  render() {
    return(
      <div>
        { MyRoutes }
      </div>
    );
  }
}

export default HomePage;
