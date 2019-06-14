import React from 'react'

export default class Chatscreen extends React.Component {
  constructor () {
    super()
    this.state = {
      myId: window.localStorage.getItem('id')
    }
  }
  render () {
    return (
      <div className='parentRecSent'>
        <div className='recsent'>
          { this.props.messages.map((item, index) => {
            if (item.sender.id == this.state.myId) {
              return (
                <div className='parentSentmsg' >
                  <span className='sentMsg'>
                    <div className='recieveMsgNameTime'>
                      <span className='name'>Me</span>
                      <span className='time'>2:20</span>
                    </div>

                    {item.text}

                  </span>
                </div>
              )
            } else {
              return (
                <div className='parentRecievemsg'>
                  <span className='recieveMsg'>
                    <div className='recieveMsgNameTime'>
                      <span className='name'>{this.props.user}</span>
                      <span className='time'>2:20</span>
                    </div>
                    {item.text}
                  </span>
                </div>
              )
            }
          })}

        </div>
      </div>
    )
  }
}
