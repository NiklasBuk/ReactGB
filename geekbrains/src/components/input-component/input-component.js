import './input-component.css'

const InputComponent = ( { inputMessage, setInputMessage, onSendMessage } ) => {

   return (
      <div className = 'input-wrapper'>
         <input 
            autoFocus
            className = 'input' 
            value = { inputMessage } 
            onChange = { e => setInputMessage(e.target.value) }
            onKeyDown = {({ key }) => { 
               if (key === 'Enter') {
                  onSendMessage()
               }
            }}>
            </input>
         <button 
            className = 'send-btn'
            onClick = { onSendMessage }>
               Отправить
         </button>
      </div>
   )
}

export default InputComponent