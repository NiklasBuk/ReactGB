import { useState } from "react"

const MessagesList = () => {

   const [inputMessage, setInputMessage] = useState('')
   const [messagesArray, setMessagesArray] = useState([])

   const onSendMessage = () => {
      setMessagesArray( prev => [...prev, inputMessage])
      setInputMessage('')
   }
   <div className = 'main-wrapper'>
      <div 
         className = 'message-list'>
         { messagesArray.map((message, i) => (
         <div key = { i }>
            { message }
         </div>
      )) }
      </div>
   </div>
}

export default MessagesList