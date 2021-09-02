import React, { useState, useEffect } from 'react';
import MessagesList from '../messages-list'
import InputComponent from '../input-component'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles(() => ({
   mainWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '2% 0',
   }
}))

const App = () => {

   const [inputMessage, setInputMessage] = useState('')
   const [messagesArray, setMessagesArray] = useState([])
   let [id, idInc] = useState(100)

   const chatArr = [
      {
         photo: 'img1',
         name: 'name1',
         identifier: 1,
      }
   ]

   const onSendMessage = () => {
      const trimmedMessageText = inputMessage.trim()

      if (trimmedMessageText !== '') {

         setMessagesArray((prev) => [...prev,
         {
            messageText: trimmedMessageText,
            authorName: 'Вы',
            key: id,
         },])
         setInputMessage('')

         setTimeout(() => {
            setMessagesArray((prev) => [...prev,
               {
                  messageText: trimmedMessageText,
                  authorName: 'ChatBot',
                  key: id,
               },])
         }, (Math.random()*(2000 - 500) + 500))
      }
      console.log(messagesArray)
   }

   useEffect(() => {
      document.querySelector('.makeStyles-messagesWrapper-2').scrollTop = 9999;
   });

   const classes = useStyles()

   return (
      <div className = {classes.mainWrapper}>
         <MessagesList 
            messagesArray = { messagesArray }
            botMessagesArray = { messagesArray }
            id = { idInc }
            key = { id }
            />
         <InputComponent 
            inputMessage = { inputMessage } 
            setInputMessage = { setInputMessage } 
            onSendMessage = { onSendMessage } />
      </div>
   )
}

export default App;