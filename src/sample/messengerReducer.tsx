import { StateType } from "./Messenger";

type MessageAction = {
  type: 'changed_selection' | 'edited_message',
  contactId: number,
  message: string
}

export function messengerReducer(
  state: StateType, action: MessageAction
) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
