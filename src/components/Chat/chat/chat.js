import React, { useState, useEffect } from 'react'
import MessagesList from '../messages-list'
import InputComponent from '../input-component'
import ChatList from '../chat-list'
import { makeStyles } from '@material-ui/core'
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
   const [messagesArray, setMessagesArray] = useState([])

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

         setMessagesArray((prev) => [...prev,
         {
            messageText: trimmedMessageText,
            authorName: 'Вы',
         },])
         setInputMessage('')

         setTimeout(() => {
            setMessagesArray((prev) => [...prev,
               {
                  messageText: trimmedMessageText,
                  authorName: 'ChatBot',
               },])
         }, (Math.random()*(2000 - 500) + 500))
      }
      console.log(messagesArray)
   }

   // useEffect(() => {
   //    document.querySelector('.messagesWrapper').scrollTop = 9999
   // })

   const classes = useStyles()

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