import { ContactType } from "./ContactManagerNoEffect";

type ContactListType = {
  contacts: ContactType[],
  selectedId: number,
  onSelect: (id: number) => void
}

export default function ContactList({
  contacts,
  selectedId,
  onSelect
}: ContactListType) {
  return (
    <section>
      <ul style={{
        listStyle: 'none'
      }}>
        {contacts.map(contact =>
          <li
            style={{
              display: 'inline'
            }}
            key={contact.id}>
            <button onClick={() => {
              onSelect(contact.id);
            }}>
              {contact.id === selectedId ?
                <b>{contact.name}</b> :
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
