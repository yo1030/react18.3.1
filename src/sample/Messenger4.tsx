import { useReducer } from './MyReact';
import Chat from './Chat3';
import ContactList from './ContactList3';
import { initialState, messengerReducer } from './messengerReducer4';

export default function Messenger4() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  if (typeof state === 'function') {
    throw new Error('State should not be a function');
  }
  if (typeof dispatch !== 'function') {
    throw new Error('Dispatch should be a function');
  }
  const message = state.messages[state.selectedId];
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

type ContactType = {
  id: number,
  name: string,
  email: string
}

const contacts: ContactType[] = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
