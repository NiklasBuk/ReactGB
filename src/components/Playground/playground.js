import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'

import {incrementWithoutMessage} from '../Chat/chat/chat-slice'

const Playground = (props) => {
   const {countOfMessages, messagesArray} = useSelector(state => state.chat)
   const dispatch = useDispatch()
   console.log('COUNT:', countOfMessages)
   // console.log('Last Message:', lastMessageSent)

   return (
      <>
         <Button 
            variant = 'contained' 
            onClick = {() => dispatch(incrementWithoutMessage())}
         >
            Add +1
         </Button>
         <div>Count of Messages: {countOfMessages}</div>
         <div>Array of messages: {messagesArray.map((message, i) => <div key = {i}>{message.messageText}</div>)}</div>
      </>
   )
}

export default Playground