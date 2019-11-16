import React, { Component } from 'react';
import SearchIcon from './magnifying-glass.png';
import './search-bar.css';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchPhrase: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleInputSubmit(e) {
    e.preventDefault()
    console.log(this.state.searchPhrase);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name="searchPhrase"
          placeholder="Search for news ..."
          onChange={ this.handleInputChange }
          value={ this.state.searchPhrase }
        />
        <button
          className="search-btn"
          onClick={ this.handleInputSubmit }
        >
          <img src={ SearchIcon }/>
        </button>
      </div>
    )
  }
}

export default SearchBar;
