import { useRef, useState } from 'react';

export default function Chat1() {
  const [text, setText] = useState<string>('')
  const textRef = useRef('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
    textRef.current = e.target.value
  }

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
