import { Dispatch } from "react";
import { ContantType } from "./Messenger3";
import { MessageAction } from "./messengerReducer3";

interface ContactListProps {
  contacts: ContantType[],
  selectedId: number,
  dispatch: Dispatch<MessageAction>
}

export default function ContactList3({contacts, selectedId, dispatch}: ContactListProps) {
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
