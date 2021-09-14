import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { incrementWithMessage, addMessage } from './chat-slice'

import MessagesList from '../messages-list'
import InputComponent from '../input-component'
import ChatList from '../chat-list'

import avatar1 from './avatar1.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'



const useStyles = makeStyles(() => ({
   chatWrapper: {
      height: '90vh',
      width: '95vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   contentWrapper: {
      display: 'flex',
   },
}))



const Chat = () => {

   const [inputMessage, setInputMessage] = useState('')
   // const [messagesArray, setMessagesArray] = useState([])
   const {messagesArray} = useSelector(state => state.chat)
   const classes = useStyles()
   const dispatch = useDispatch()

   const chatArr = [
      {
         photo: avatar1,
         chatName: 'Hot news',
         personName: 'Darth W.',
         lastMessage: 'Luke, i am your father',
      },
      {
         photo: avatar2,
         chatName: 'Wrong door',
         personName: 'Boss of this gym',
         lastMessage: 'Come on, let\'s go!',
      },
      {
         photo: avatar3,
         chatName: 'Soon',
         personName: 'Arnold',
         lastMessage: 'I\'ll be back',
      },
   ]

   const onSendMessage = () => {
      const trimmedMessageText = inputMessage.trim()

      if (trimmedMessageText !== '') {
         dispatch(addMessage({
            messageText: trimmedMessageText,
            authorName: 'Вы',
         }))

         // setMessagesArray((prev) => [...prev,
         // {
         //    messageText: trimmedMessageText,
         //    authorName: 'Вы',
         // },])
         setInputMessage('')

         setTimeout(() => {
            dispatch(addMessage({
               messageText: trimmedMessageText,
               authorName: 'ChatBot',
            }))
            // setMessagesArray((prev) => [...prev,
            //    {
            //       messageText: trimmedMessageText,
            //       authorName: 'ChatBot',
            //    },])
         }, (Math.random()*(2000 - 500) + 500))
      }
      dispatch(incrementWithMessage(trimmedMessageText))
      // console.log(messagesArray)
   }

   useEffect(() => {
      if (document.querySelector('.makeStyles-messagesWrapper-11')) {
         document.querySelector('.makeStyles-messagesWrapper-11').scrollTop = 9999
      }
   })

   return (
      <div className = {classes.chatWrapper}>
         <div className = {classes.contentWrapper}>
            <ChatList chatArr = {chatArr} />
            <div>
               <MessagesList 
                  messagesArray = { messagesArray }
                  />
               <InputComponent 
                  inputMessage = { inputMessage } 
                  setInputMessage = { setInputMessage } 
                  onSendMessage = { onSendMessage } />
            </div>
         </div>
      </div>
   )
}

export default Chat