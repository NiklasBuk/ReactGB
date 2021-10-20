import { Button, TextField, makeStyles, Typography } from '@material-ui/core'



const useStyles = makeStyles(() => ({

}))

const Profile = () => {
   const classes = useStyles()


   return (
      <div>
         <Typography
            variant = 'h5'
         >
            Заполните ваши данные
         </Typography>
         <TextField
            autoFocus
            className = {classes.inputNickname} 
            // value = { inputMessage } 
         >
         </TextField>
         <Button
            variant = 'contained'
         >
            Применить
         </Button>
      </div>
   )
}

export default Profile