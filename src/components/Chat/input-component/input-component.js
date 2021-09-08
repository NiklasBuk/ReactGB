import {Button, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'



const useStyles = makeStyles(() => ({
   inputWrapper: {
      width: '35vw',
      display: 'flex',
      justifyContent: 'space-between',
   },
   input: {
      outline: 'none',
      flex: '1',
      padding: '0 8px',
      margin: '0 10px 0 0',
      borderRadius: '10px',
      background: 'whitesmoke',
   },
   button: {
      borderRadius: '10px',
      padding: '0 8px',
      background: 'steelblue',
      '&:hover': {
         background: 'tomato',
      }
   }
}))



const InputComponent = ( { inputMessage, setInputMessage, onSendMessage } ) => {

   const classes = useStyles()

   return (
      <div className = {classes.inputWrapper}>
         <TextField 
            autoFocus
            multiline
            maxRows = {2}
            className = {classes.input} 
            value = { inputMessage } 
            onChange = { e => setInputMessage(e.target.value) }
            onKeyDown = {(e) => { 
               if (!e.shiftKey && e.key === 'Enter') {
                  e.preventDefault()
                  onSendMessage()
               }
            }}
         >
            </TextField>
         <Button 
            variant="contained" 
            color="primary"
            className = {classes.button}
            onClick = { onSendMessage }
         >
               Отправить
         </Button>
      </div>
   )
}

export default InputComponent