import React from 'react';
import { ContactType } from './Messenger';

export interface ChatProps {
  contact: ContactType,
  message: string,
  dispatch: Function
}

export default function Chat({contact, message, dispatch}: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          // TODO: dispatch edited_message
          dispatch({
            type: 'edited_message',
            message: e.target.value
          })
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
