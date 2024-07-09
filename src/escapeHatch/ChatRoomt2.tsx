import { useState, useEffect, useCallback } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chatConnection4';
import { showNotification } from './notifications1';

type ChatRoomType = {
  roomId: string,
  isDark: boolean,
  isEncrypted: boolean
}

export default function ChatRoom({ roomId, isDark, isEncrypted }: ChatRoomType) {
  // const onMsg = useEffectEvent((message: string) => {
  //   showNotification('New message: ' + message, isDark ? 'dark' : 'light')
  // });
  const onMsg = useCallback((message: string) => {
    showNotification('New message: ' + message, isDark ? 'dark' : 'light')
  }, [isDark]);

  useEffect(() => {
    const createConnection = () => {
      const options = {
        roomId,
        serverUrl: "https://localhost:1234"
      };
      if (isEncrypted) {
        return createEncryptedConnection(options);
      } else {
        return createUnencryptedConnection(options);
      }
    };
    const connection = createConnection();
    connection.on('message', (msg) => onMsg(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
