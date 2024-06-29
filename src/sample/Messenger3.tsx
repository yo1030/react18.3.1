import { useReducer } from 'react';
import Chat from './Chat3';
import ContactList from './ContactList3';
import { initialState, messengerReducer } from './messengerReducer3';

export default function Messenger3() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c: ContantType) => c.id === state.selectedId) ?? contacts[0];
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

export type ContantType = {
  id: number,
  name: string,
  email: string
}

const contacts: ContantType[] = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
