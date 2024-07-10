import { useEffect } from 'react';

type ChatRoomType = {
  roomId: string,
  createConnection: (id: string) => {
    connect: () => void,
    disconnect: () => void
  }
}

export default function ChatRoom({ roomId, createConnection }: ChatRoomType) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, createConnection]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
