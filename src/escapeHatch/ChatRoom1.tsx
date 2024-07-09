import { useEffect } from 'react';
import { createConnection } from './chatConnection3';

type ChatRoomType = {
  options: {
    roomId: string,
    serverUrl: string
  }
}

export default function ChatRoom({ options }: ChatRoomType) {
  const {roomId, serverUrl} = options
  useEffect(() => {
    const connection = createConnection({
      roomId,
      serverUrl
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
