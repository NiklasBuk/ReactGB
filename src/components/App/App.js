import React, { useState, useEffect } from 'react';
import MessagesList from '../messages-list'
import InputComponent from '../input-component'

import './App.css';

const App = () => {

   const [inputMessage, setInputMessage] = useState('')
   const [messagesArray, setMessagesArray] = useState([])
   const [maxId, idInc] = useState(100)

   console.log(`id: ${maxId}`)

   const onSendMessage = () => {
      const noSpaceText = inputMessage.trim()

      const id = idInc(() => maxId + 1)

      if (noSpaceText !== '') {
         setMessagesArray((prev) => [...prev,
         {
            messageText: noSpaceText,
            authorName: 'Вы',
            key: id,
         },])
         setInputMessage('')

         setTimeout(() => {
            setMessagesArray((prev) => [...prev,
               {
                  messageText: noSpaceText,
                  authorName: 'ChatBot',
                  key: id,
               },])
         }, (Math.random()*(2000 - 500) + 500))
      }
      console.log(messagesArray)
   }
   useEffect(() => {
      document.querySelector('.messages-wrapper').scrollTop = 9999;
   });


   return (

      <div className = 'main-wrapper'>
         <MessagesList 
            messagesArray = { messagesArray }
            botMessagesArray = { messagesArray }
            key = { idInc } />
         <InputComponent 
            inputMessage = { inputMessage } 
            setInputMessage = { setInputMessage } 
            onSendMessage = { onSendMessage } />
      </div>
   )
}

export default App;