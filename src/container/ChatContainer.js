import { connect } from 'react-redux'
import Chat from '../components/Chat'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  newMessage: state.newMessage,
  user: state.user,
  messages: state.messages,
  avatar: state.avatar,
  id: state.id
})

const ChatscreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatscreenContainer
