import React, { useState } from 'react';
import { MessageAction, MessageState } from './messengerReducer4';

export function useReducer(
  reducer: React.Reducer<MessageState, MessageAction>,
  initialState: MessageState
) {
  const [state, setState] = useState<MessageState>(initialState);

  // update state
  function dispatch(action: MessageAction) {
    setState(reducer(state, action))
  }

  return [state, dispatch];
}
