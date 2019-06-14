
const INIT = {
  newMessage: '',
  messages: [],
  conversationList: [],
  user: '',
  id: ''
}
var myId = window.localStorage.getItem('id')
function conversation (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      return { ...state,
        newMessage: action.payload,
        messages: [...state.messages, { sender: { id: myId }, text: action.payload }]
      }
    case 'SAVE_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }
    case 'CREATE_CHAT':
      return {
        ...state,
        user: action.user,
        messages: action.messages,
        avatar: action.avatar,
        id: action.id
      }
    default:
      return state
  }
}
export default conversation
