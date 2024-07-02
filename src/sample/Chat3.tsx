import { Dispatch } from "react";
import { ContantType } from "./Messenger3";
import { MessageAction } from "./messengerReducer3";

type ChatType = {
  contact: ContantType,
  message: string,
  dispatch: Dispatch<MessageAction>
}

export default function Chat3({contact, message, dispatch}: ChatType) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: 'sent_message',
          });
        }}>
        Send to {contact.email}
      </button>
    </section>
  );
}
