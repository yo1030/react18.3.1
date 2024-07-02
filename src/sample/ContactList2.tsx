import { ContactType } from "./Messenger";

interface ContactListProps {
  contacts: ContactType[],
  selectedId: number,
  dispatch: Function
}


export default function ContactList({contacts, selectedId, dispatch}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}
            style={{display: 'inline-block'}}>
            <button
              onClick={() => {
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                });
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
