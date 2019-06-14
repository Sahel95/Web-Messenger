import React from 'react'
import validate from '../Validation/validateFunction'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import logo from '../img/logo.svg'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false,
      error: {
        email: null,
        password: null
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handlechange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError } })
    if ( emailError || passwordError){
      this.setState({error: 'something went wrong'})
    }else {
      axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.email,
      password: this.state.password
    })
      .then( (response) => {
        console.log('response:::', response)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('./Messenger')
      })
      .catch(function (error) {
        console.log('error::::', error)
      })
    }
    
    /* this.setState({clicked: !this.state.clicked}) */

    /* if (this.state.clicked===true){
            this.setState({clicked : false})
        } else {
            this.setState({clicked : true})
        } */
  }

  jumpToSignup() {
    this.props.history.push('./Signup')
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <div className='logo' ><img src={logo} /></div>
          <div className='forms'>
            <input
              name='email'
              placeholder='Email'
              onChange={(e) => this.handlechange(e)}
            />

            { this.state.error.email !== null &&
            <p className='error'>{this.state.error.email}</p>
            }

            <input name='password'
              placeholder='Password'
              type='password'
              onChange={(e) => this.handlechange(e)} />
            { this.state.error.password !== null &&
            <p className='error'>{this.state.error.password}</p>
            }

            <button onClick={() => this.handleClick()}>
                                LOGIN
            </button>
            <button className='register' onClick= {() => this.jumpToSignup() } >
            REGISTER
            </button>
            {
              /* this.state.clicked ===true &&
                                <p>asdad</p>
                                <Link className='submit'
                to='./Signup'
              >

              </Link>

              <Link className='submit'
                to='./Messenger'
              >
              </Link>
              */
            }

            { /* this.state.clicked === true ? <p>5555</p> : <p>ssss</p> */}

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
