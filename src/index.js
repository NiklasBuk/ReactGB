import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'

import { theme } from './theme'
import App from './components/App'
import store from './store'

import '../src/index.css'

const MyDataContext = React.createContext({appVersion: '0.5-alpha'})

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme = {theme}>
         <MyDataContext.Provider value = {{appVersion: '0.5-alpha'}}>
            <Provider store = {store}>
               <App />
            </Provider>
         </MyDataContext.Provider>
      </ThemeProvider>
   </React.StrictMode>, document.getElementById('root')
)