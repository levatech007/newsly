import React, { Component } from 'react';
import './user-form.css';

class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      token: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const { email, token } = this.state
    // make sure both fields are filled in
    if(email && token) {
      this.props.submit(email, token)
    } else {
      console.log("Missing value")
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <h2>{ this.props.formTitle }</h2>
        {
          Object.keys(this.state).map((field, idx) => {
            let labelName = `${ field.charAt(0).toUpperCase() }${ field.slice(1) }`
            return(
              <div key={ idx }>
                <label>{ labelName }
                  <span className="red-text">*</span>
                </label>
                <input
                  type={ field === 'email' ? 'email' : 'text' }
                  name={ field }
                  required="required"
                  placeholder={ `Your ${ field }` }
                  onChange={ this.handleInputChange }
                  value={ this.state[field] }
                />
              </div>
            )
          })
        }
          <button
            className="btn submit"
            type="submit"
          >{ this.props.buttonText }
          </button>
        <div className="small-text">
          <p>Don't have a token? Sign up for one <a
              href="https://newsapi.org/register"
              target="_blank"
              rel="noopener noreferrer"
            >here
            </a>
          </p>
        </div>
      </form>
    )
  }
}

export default UserForm;
