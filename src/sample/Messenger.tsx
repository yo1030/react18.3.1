import React, { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList2';
import { messengerReducer } from './messengerReducer';

export type StateType = {
  selectedId: number,
  message: string
}

const initialState: StateType = {
  selectedId: 0,
  message: 'Hello'
};

export const Messenger: React.FC = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
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
