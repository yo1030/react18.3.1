import { useState, useEffect, useCallback } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from './chatConnection2';
import { showNotification } from './notifications';

const serverUrl = 'https://localhost:1234';

type ChatRoomType = {
  roomId: string,
  theme: string
}

function ChatRoom({ roomId, theme }: ChatRoomType) {
  // const onConnected = useEffectEvent((selectRoomId: string) => {
  //   showNotification('Welcome to ' + selectRoomId, theme);
  // });
  const onConnected = useCallback((selectRoomId: string) => {
    showNotification('Welcome to ' + selectRoomId, theme);
  }, [theme]);

  useEffect(() => {
    let notificationTimeoutId: NodeJS.Timeout;
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      notificationTimeoutId = setTimeout(() => {
        onConnected(roomId)
      }, 2000);
    });
    connection.connect();
    return () => {
      connection.disconnect()
      if (notificationTimeoutId !== undefined) {
        clearTimeout(notificationTimeoutId)
      }
    };
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function ChatApp2() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
