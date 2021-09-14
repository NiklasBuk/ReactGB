import React from 'react'
import {List, ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles, Typography } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: '35ch',
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
      borderRadius: '10px',
      margin: '0 15px 0 0',
   },
   ListItemText: {
      color: 'tomato',
      display: 'flex',
      flexDirection: 'column',
   },
   typo: {
      display: 'block',
      color: 'steelblue',
   },
   mess: {
      display: 'block',
      color: 'whitesmoke',
   }
}))



const ChatList = (chatList) => {
   const classes = useStyles()

   return (
      <List className = {classes.root}>
         {chatList.chatArr.map((chat, i) => {
            return (
               <ListItem button key = {i}>
                  <ListItemAvatar>
                     <Avatar src = {chat.photo} />
                  </ListItemAvatar>
                  <ListItemText
                     className = {classes.ListItemText}
                     primary = {chat.personName}
                     secondary = {
                        <React.Fragment>
                           <Typography
                              component = 'span'
                              variant = 'body1'
                              className = {classes.typo}
                           >
                              {chat.chatName}
                           </Typography>
                           <Typography
                              component = 'span'
                              variant = 'body2'
                              className = {classes.mess}
                           >
                              {chat.lastMessage}
                           </Typography>
                        </React.Fragment>
                     }
                  />
               </ListItem>
            )
         })}
      </List>
   )
}

export default ChatList