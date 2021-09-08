import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from '../Chat/chat'
import Playground from '../Playground'
import Home from '../Home'
import Profile from '../Profile'
import NavBar from '../NavBar'


const App = () => {
   return (
      <Router>
         <NavBar />
         <Switch>
            <Route path = '/chat'>
               <Chat />
            </Route>

            <Route path = '/playground'>
               <Playground />
            </Route>

            <Route path = '/profile'>
               <Profile />
            </Route>

            <Route path = '/'>
               <Home />
            </Route>
         </Switch>
      </Router>
   )
}

export default App