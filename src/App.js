import React from 'react'
import './App.css'
import Mes from './components/Messenger'
import Login from './components/login'
import Signup from './components/Signup'
import Completepro from './components/Completepro'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path='/Completepro' component={Completepro} />
          <Route path='/Messenger' component={Mes} />
        </Router>
      </Provider>
    )
  }
}

export default App
