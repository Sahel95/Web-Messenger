import { connect } from 'react-redux'
import ConversationList from '../components/ConversationList'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  conversationList: state.conversationList
})

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default ConversationListContainer
