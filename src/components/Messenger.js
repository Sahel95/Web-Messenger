import React from 'react'
import ConversationList from './ConversationList'
import Chat from './Chat'
import ChatContainer from '../container/ChatContainer'
import ConversationListContainer from '../container/ConversationListContainer'

export default class Mes extends React.Component {
  render () {
    return (
      <div>
        <ConversationListContainer />
        <ChatContainer />
      </div>
    )
  }
}
