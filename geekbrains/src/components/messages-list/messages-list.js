import './messages-list.css'

const MessagesList = ({ messagesArray }) => {

   return (
      <div className = 'messages-wrapper'>
         {
            messagesArray.map((message, i) => {
               const isBotMessage = message.authorName === 'ChatBot'
               return (
                  <div className = {isBotMessage ? 'message-list-bot messages-list' : 'message-list-you messages-list'}>
                     <div className = {isBotMessage ? 'bot-name' : 'author-name'}>{message.authorName}</div>
                     <div className = 'text-message' key = {i}>{message.messageText}</div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default MessagesList