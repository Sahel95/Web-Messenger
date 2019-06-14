import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

function Hello (props) {
  return (
    <div>
      <h1>hello {props.name + ' ' + props.age}!</h1>
      <h3>hello {props.name}{props.age}!</h3>
    </div>
  )
}

function Parent () {
  return (
    <div>
      <Hello name='sahel' age='18' />
      <Hello name='sahar' age='10' />
      <Hello name='siavash' age='8' />
    </div>
  )
}

class ParentClass extends React.Component {
  render () {
    return (
      <div>
        <h1>salam {this.props.name} </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

class Class {

}
