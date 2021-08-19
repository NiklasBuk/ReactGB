import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

   const [inputMessage, setInputMessage] = useState('')
   const [messagesArray, setMessagesArray] = useState([])

   const onSendMessage = () => {
      setMessagesArray( prev => [...prev, inputMessage])
      setInputMessage('')
   }


   return (
      <div className = 'main-wrapper'>
         <div 
            className = 'message-list'>
            { messagesArray.map((message, i) => (
               <div key = { i }>{ message }</div>
            )) }
         </div>
         <div className = 'input-wrapper'>
            <textarea 
               autoFocus
               className = 'input' 
               value = { inputMessage } 
               onChange = { e => setInputMessage(e.target.value) }
               onKeyDown = { ({key}) => { 
                  if (key === 'Enter') {
                     onSendMessage()
                  }
               }}></textarea>
            <button 
               className = 'send-btn'
               onClick = { onSendMessage }>Отправить</button>
         </div>
      </div>
   )
}

export default App;