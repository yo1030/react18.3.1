import { Dispatch } from 'react';
import { ContactType } from './Messenger2';
import { MessageAction } from './messengerReducer2';

type ChatType = {
  contact: ContactType,
  message: string,
  dispatch: Dispatch<MessageAction>
}

export default function Chat2({contact, message, dispatch}: ChatType) {
  function handleSendButton() {
    alert('mail: ' + contact.email + ' / message: ' + message)
    dispatch({type: 'sent_message'});
  }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value
          });
        }}
      />
      <br />
      <button onClick={handleSendButton}>Send to {contact.email}</button>
    </section>
  );
}
