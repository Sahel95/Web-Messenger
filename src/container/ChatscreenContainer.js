import { connect } from 'react-redux'
import Chatscreen from '../components/Chatscreen'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  newMessage: state.newMessage
})

const ChatscreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatscreen)

export default ChatscreenContainer
