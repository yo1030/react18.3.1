export type MessageState = {
  selectedId: number,
  message: string
}

type ChangedAction = {
  type: 'changed_selection',
  contactId: number
}

type SentAction = {
  type: 'sent_message'
}

type EditedAction = {
  type: 'edited_message',
  message: string
}

type NoneAction = {
  type: ''
}

export type MessageAction = ChangedAction | EditedAction | SentAction |NoneAction

export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messengerReducer(state: MessageState, action: MessageAction) {
  switch (action.type) {
    case 'changed_selection' : {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message' : {
      return {
        ...state,
        message: ''
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
