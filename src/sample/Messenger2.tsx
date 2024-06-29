import { useReducer } from 'react';
import Chat from './Chat2';
import ContactList from './ContactList2';
import { MessageAction, MessageState, initialState, messengerReducer } from './messengerReducer2';

export const Messenger2: React.FC = () => {
  const [state, dispatch] = useReducer<
    (state: MessageState, action: MessageAction) => MessageState
  >(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c: ContactType) => c.id === state.selectedId) ?? contacts[0];
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export type ContactType = {
  id: number,
  name: string,
  email: string
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
