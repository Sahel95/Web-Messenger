export const addNewMessage = (newMessage) => (
  {
    type: 'SAVE_NEW_MESSAGE',
    payload: newMessage
  }
)

export const saveConversationList = (conversationList) => (
  {
    type: 'SAVE_CONVERSATION_LIST',
    payload: conversationList
  }
)

export const createChat = (messages, user, avatar, id) => (
  {
    type: 'CREATE_CHAT',
    messages: messages,
    user: user,
    avatar: avatar,
    id: id
  }
)
