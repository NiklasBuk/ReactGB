import {makeStyles} from '@material-ui/core'
import classNames from 'classnames'
import PropTypes from 'prop-types'



const useStyles = makeStyles(() => ({
   messagesWrapper: {
      height: '800px',
      width: '35vw',
      boxSizing: 'border-box',
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
      borderRadius: '10px 10px 0 0',
      color: 'whitesmoke',
      fontSize: '12px',
      padding: '12px 15px',
      overflow: 'auto',
      scrollBehavior: 'smooth',
   },
   messagesList: {
      margin: '12px 0 0 0',
      '&:first-child': {
         margin: '0',
      }
   },   
   messageListYou: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
   },
   messageListBot: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
   },
   authorName: {
      color: 'rgba(70, 131, 180, 0.85)',
   },
   botName: {
      color: 'rgb(180, 70, 70)',
   },   
   textMessage: {
      borderRadius: '8px',
      background: 'rgba(119, 136, 153, 0.5)',
      width: 'fit-content',
      padding: '2px 6px',
      margin: '4px 0 0 0',
   }
}))



const MessagesList = ({ messagesArray }) => {

   const classes = useStyles()
   
   return (
      <div className = {classes.messagesWrapper}>
         {
            messagesArray.map((message, i) => {
               const isBotMessage = message.authorName === 'ChatBot'
               return (
                  <div 
                     className = {classNames(classes.messagesList, isBotMessage ? classes.messageListBot : classes.messageListYou)}
                     key = {i}
                  >
                        <div className = {isBotMessage ? classes.botName : classes.authorName}>{message.authorName}</div>
                        <div className = {classes.textMessage}>{message.messageText}</div>
                  </div>
               )
            })
         }
      </div>
   )
}

MessagesList.propTypes = {
   messagesArray: PropTypes.array.isRequired,
}

export default MessagesList