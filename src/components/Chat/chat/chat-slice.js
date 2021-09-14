import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
   name: 'chat',
   initialState: {
      countOfMessages: 0,  
      messagesArray: [],
   },
   reducers: {
      incrementWithoutMessage: state => {
         state.countOfMessages += 1
      },
      incrementWithMessage: (state, action) => {
         state.countOfMessages += 1
         state.lastMessageSent = action.payload
      },
      addMessage: (state, action) => {
         state.messagesArray.push(action.payload)
      }
   }
})

export const { incrementWithMessage, incrementWithoutMessage, addMessage } = chatSlice.actions

export default chatSlice.reducer