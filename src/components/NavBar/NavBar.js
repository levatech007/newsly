import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    const navItems = [{ title: 'Newsly', link: '/'}, { title: 'News', link: '/'}, { title: 'Profile', link: '/profile' }]
    return(
      <nav>
        <ul>
          {
            navItems.map(item => {
              return(
                <li key={ item.title }>
                  <Link to={ item.link }>{ item.title }</Link>
                </li>
              );
            })
          }
        </ul>
        <button onClick={ this.handleLogout }>Log Out</button>
      </nav>
    );
  }
}

export default NavBar;
