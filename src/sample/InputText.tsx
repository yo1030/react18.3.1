import { useState } from 'react';

export const InputText: React.FC = () => {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
        setShowHint(!showHint);
      }}>{showHint ? "Hide" : "Show"} hint</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
