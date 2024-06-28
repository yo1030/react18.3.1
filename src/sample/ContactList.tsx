import { ContactType } from "./ContactManager";

interface ContactListProps {
  contacts: ContactType[],
  selectedId: number,
  onSelect: (id: number) => void
}

export default function ContactList({
  contacts,
  selectedId,
  onSelect
}: ContactListProps) {
  return (
    <section>
      <ul>
        {contacts.map(contact =>
          <li key={contact.id} style={{display: "inline-block"}}>
            <button onClick={() => {
              onSelect(contact.id);
            }}
            style={{ padding: '10px'}}>
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
