import React from 'react'
import ChatscreenContainer from '../container/ChatscreenContainer'
import { addNewMessage } from '../action/conversation'
import send from '../img/send.svg'
import happy from '../img/happy.svg'
import axios from 'axios'
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: '',
      token: window.localStorage.getItem('token')
    }
  }

  sendNewMessage () {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.id)
    fdata.append('text', this.state.newMessage)
    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then((response) => {
        console.log('response:::', response)
        this.setState({
          newMessage: ''
        })
      })
      .catch(function (error) {
        console.log('error::::', error)
      })
  }

  render () {
    return (
      <div className='chatscreen'>
        <div className='header'>
          <div className='header-pic'><img src={this.props.avatar} /></div>
          <p>{this.props.user}</p>
        </div>

        <ChatscreenContainer />

        <div className='writeMsg'>
          <div className='emoticons'>
            <img src={happy} />
          </div>
          <textarea rows='1' placeholder='Write a message...'
            value={this.state.newMessage}
            onChange={(e) => this.setState({ newMessage: e.target.value })} />
          <div className='enter'
            onClick={() => this.sendNewMessage()}>
            <img src={send} />
          </div>
        </div>
      </div>
    )
  }
}
