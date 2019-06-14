import { connect } from 'react-redux'
import Conversation from '../components/Conversation'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages
})

const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)

export default ConversationContainer
