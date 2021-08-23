import React, { useState } from 'react';
import MessagesList from '../messages-list'
import InputComponent from '../input-component'

import './App.css';

const App = () => {

   const [inputMessage, setInputMessage] = useState('')
   const [messagesArray, setMessagesArray] = useState([])

   const onSendMessage = () => {
      const noSpaceText = inputMessage.trim()

      if (noSpaceText !== '') {
         setMessagesArray((prev) => [...prev,
         {
            messageText: noSpaceText,
            authorName: 'Вы',
         },])
         setInputMessage('')

         setTimeout(() => {
            setMessagesArray((prev) => [...prev,
               {
                  messageText: noSpaceText,
                  authorName: 'ChatBot',
               },])
         }, (Math.random()*(2000 - 500) + 500))
      }
   }

   return (

      <div className = 'main-wrapper'>
         <MessagesList 
            messagesArray = { messagesArray }
            botMessagesArray = { messagesArray } />
         <InputComponent 
            inputMessage = { inputMessage } 
            setInputMessage = { setInputMessage } 
            onSendMessage = { onSendMessage } />
      </div>
   )
}

export default App;