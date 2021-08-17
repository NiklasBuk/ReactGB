import React, {useState} from 'react';
import ReactDOM from 'react-dom'

import './App.css';
import Message from './message'


function App() {

   const [inputText, setInputText] = useState('')

   return (
      <div className = 'app wrapper'>
         <h1 className = 'textFormat'>Changing message</h1>
         <input 
            value = {inputText} 
            onChange = { e => setInputText(e.target.value) } 
            placeholder='Type here to change message' 
            className = 'input-area'
         />
         <p className = 'textFormat pText'>and here is what you wrote</p>
         <Message textToShow = {inputText} />
      </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;