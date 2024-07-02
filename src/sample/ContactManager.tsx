import { useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState<ContactType[]>(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState<number>(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  ) ?? contacts[0];

  function handleSave(updatedData: ContactType) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id: number) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key = {selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

export type ContactType = {
  id: number,
  name: string,
  email: string
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
