import { configureStore } from '@reduxjs/toolkit'

import chatReducer from './components/Chat/chat/chat-slice'

export default configureStore({
   reducer: {
      chat: chatReducer,
   }
})