import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import validate from '../Validation/validateFunction'
import axios from 'axios'
import { withRouter } from 'react-router'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      reenterpassword: '',
      notmatch: '',
      error: {
        email: null,
        password: null,
        reenterpassword: null

      }
    }
  }

  handlechange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    var reenterPasswordError = validate('reenterpassword', this.state.reenterpassword)
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError, reenterpassword: reenterPasswordError } })

    if (this.state.password === this.state.reenterpassword) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then(function (response) {
          console.log('response:::', response)
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('id', response.data.id)
          this.props.history.push('./Completepro')
        })
        .catch(function (error) {
          console.log('error::::', error)
        })
    } else {
      this.setState({ notmatch: 'password and retype password do not match!' })
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <div className='logo' ><img src={logo} /></div>
          <div className='forms'>
            <input name='email'
              placeholder='Email'
              onChange={(e) => this.handlechange(e)} />
            {
              this.state.error.email !== null &&
                <p className='error'>{this.state.error.email}</p>
            }
            <input name='password'
              placeholder='Password'
              type='password'
              onChange={(e) => this.handlechange(e)} />
            {
              this.state.error.password !== null &&
                <p className='error'>{this.state.error.password}</p>
            }
            <input name='reenterpassword'
              placeholder='Re-enter password'
              type='password'
              onChange={(e) => this.handlechange(e)} />

            <button onClick={() => this.handleClick()}>

                            SIGN UP
            </button>
            {
              this.state.notmatch &&
                <p className='error'>{this.state.notmatch}</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Signup)
