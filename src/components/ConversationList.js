import React from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'
import logo from '../img/logo.svg'
import ConversationContainer from '../container/ConversationContainer'

export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: [],
      search: ''
    }
  }

  /* map faghat roo araye kar mikone vali spread (...) ham roo araye kar mikone va ham roo object
    * tabdil object be array :
    * Object.key(a) ===> key haye yek object ro joda mikone o neshoon mide
    * Object.values(a) ===> value haye yek object ro joda mikone o neshoon mide
    * key.map((item) => {a.push()})
    * */

  componentDidMount () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then((response) => {
        // console.log('convlist:::', response.data)
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  handleChange (e) {
    console.log('eee', e.target.value)
    if (e.target.value !== '') {
      let fdata = new FormData()
      fdata.append('token', this.state.token)
      fdata.append('query', e.target.value)
      axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
        .then((response) => {
          this.setState({ suggestedUsers: response.data.data.users })
        })
        .catch((error) => {
          console.log('error::::', error)
        })
    } else {
      this.setState({ suggestedUsers: [] })
    }
  }

  handleChat (users) {
    console.log('userid::::', users)
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id', users.id)
    axios.post('https://api.paywith.click/conversation/', fdata)
      .then(function (response) {
        console.log('response:::', response)
      })
      .catch(function (error) {
        console.log('error::::', error)
        console.log('userid::::', users.id)
      })
  }

  render () {
    return (
      <div className='convList'>
        <div className='searchContact'>
          <div className='searchBox'>
            <input type='name' placeholder='Search or start new chat'
              onChange={(e) => this.handleChange(e)} />
          </div>
          { this.state.suggestedUsers.map((users, index) => {
            return (
              <div className='suggest' onClick={() => this.handleChat(users)}>
                <img src={users.avatar_url} />
                <p >{users.email}</p>
              </div>
            )
          })

          }
        </div>
        <div className='parentConvBox'>
          { this.props.conversationList.map((conversation, index) => {
            return (
              conversation.users.map((user, myId) => {
                if (user.id != this.state.myId) {
                  // console.log('cccc', user.id, conversation.id)
                  return (
                    <ConversationContainer
                      token={this.state.token}
                      id={conversation.id}
                      key={index}
                      name={user.email}
                      date={conversation.latest_message_date}
                      latestMessage={conversation.latest_message}
                      unseenMessage={user.unseenMessages}
                      avatar={user.avatar_url}

                    />
                  )
                }
              })
            )
          }
          )
          }
        </div>

      </div>
    )
  }
}
