import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'



const useStyles = makeStyles((theme) => ({
   appBar: {
      margin: '0 0 10px 0',
      position: 'static',
   },
   root: {
      background: 'steelblue',
   },
   link: {
      color: 'lightsteelblue',
      textDecoration: 'none',
      margin: '0 20px 0 0',
      transition: 'color 0.25s',
      '&:first-child': {
         marginLeft: '12px',
      },
      '&:hover': {
         color: theme.palette.text.secondary,
      },
   },
   activeLink: {
      textDecoration: 'auto',
      color: 'whitesmoke',
      '&:hover': {
         color: 'inherit',
      },
   }
}))

const routes = [
   {
      pathTitle: 'Home',
      path: '/',
   },
   {
      pathTitle: 'Chat',
      path: '/chat',
   },
   {
      pathTitle: 'Playground',
      path: '/playground',
   },
   {
      pathTitle: 'My Profile',
      path: '/profile',
   },
]

const NavBar = () => {

   const classes = useStyles()
   const location = useLocation()

   return (
      <AppBar className = {classes.appBar}>
         <Toolbar className = {classes.root}>
            {routes.map((route) => (
               <Link 
                  className = {`${classes.link} ${route.path === location.pathname ? classes.activeLink : ''}`} 
                  key = {route.path}
                  to = {route.path}
               >
                  <Typography variant = 'h6'>{route.pathTitle}</Typography>
               </Link>
            ))}
         </Toolbar>
      </AppBar>)
}

export default NavBar