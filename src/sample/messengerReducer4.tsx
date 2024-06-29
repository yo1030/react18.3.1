export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  },
};

export type MessageState = {
  selectedId: number,
  messages: {
    [key: number]: string
  }
}

type ChangedAction = {
  type: 'changed_selection',
  contactId: number
}

type EditedAction = {
  type: 'edited_message',
  message: string
}

type SentAction = {
  type: 'sent_message'
}

type NoneAction = {
  type: ''
}

export type MessageAction = ChangedAction | EditedAction| SentAction | NoneAction

export function messengerReducer(state: MessageState, action: MessageAction) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
