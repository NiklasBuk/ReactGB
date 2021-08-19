import './input-component.css'
import MessagesList from '../messages-list'

const InputComponent = ( props ) => {

   return (
      <div className = 'input-wrapper'>
         <textarea 
            autoFocus
            className = 'input' 
            value = { props.value } 
            onChange = { e => props.onChange(e.target.value) }
            onKeyDown = { ({key}) => { 
               if (key === 'Enter') {
                  onSendMessage()
               }
            }}>
            </textarea>
         <button 
            className = 'send-btn'
            onClick = { onSendMessage }>
               Отправить
         </button>
      </div>
   )

}

export default InputComponent