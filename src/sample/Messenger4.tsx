// import { useReducer } from './MyReact.js';
// import Chat from './Chat.js';
// import ContactList from './ContactList2.js';
// import { initialState, messengerReducer } from './messengerReducer';

// export default function Messenger() {
//   const [state, dispatch] = useReducer(messengerReducer, initialState);
//   const message = state.messages[state.selectedId];
//   const contact = contacts.find((c) => c.id === state.selectedId);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat
//         key={contact.id}
//         message={message}
//         contact={contact}
//         dispatch={dispatch}
//       />
//     </div>
//   );
// }

// const contacts = [
//   {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
//   {id: 1, name: 'Alice', email: 'alice@mail.com'},
//   {id: 2, name: 'Bob', email: 'bob@mail.com'},
// ];
