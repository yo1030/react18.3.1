import { useState, useEffect } from 'react';
import { createConnection } from './chatConnection';

const serverUrl = 'https://localhost:1234';

type ChatRoomType = {
  roomId: string
}

function ChatRoom({ roomId }: ChatRoomType) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <div>
      <h1>Welcome to the {roomId} room!</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </div>
  );
}

export default function ChatApp() {
  const [roomId, setRoomId] = useState('general');
  return (
    <div>
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
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}
