import React from 'react'
import profilepic from '../img/profilepic.svg'
import { createChat } from '../action/conversation'
import axios from 'axios'

export default class Conversation extends React.Component {
  handleCreateChat () {
    console.log('id::::', this.props.id)
    console.log('token::::', this.props.token)
    let date = Math.ceil(new Date().getTime() / 1000)
    let fdata = new FormData()
    fdata.append('token', this.props.token)
    fdata.append('conversation_id', this.props.id)
    fdata.append('date', date)
    fdata.append('size', 10)
    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        console.log('response:::', response)
        this.props.dispatch(createChat(response.data.data.messages, this.props.name, this.props.avatar, this.props.id))
      })
      .catch(function (error) {
        console.log('error::::', error)
      })
  }

  render () {
    return (
      <div className='general' onClick={() => this.handleCreateChat()}>

        <div className='convBox2'>
          <div className='convPic2'>
            <img src={this.props.avatar} />
          </div>
          <div className='convInfo2'>
            <div className='first2'>
              <span className='convName2'>{this.props.name}</span>

              <span className='convDate2'>{this.props.date.slice(0, 10)}</span>

            </div>
            <div className='second2'>
              <span className='convText2'>{this.props.latestMessage}</span>
              <span className='convUnseenMsg2'>{this.props.unseenMessage}</span>
            </div>
          </div>
        </div>
        <hr className='convLine' />

      </div>
    )
  }
}
