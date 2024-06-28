import React, { useState } from 'react';

export const SwitchInput: React.FC = () => {
  const [reverse, setReverse] = useState<boolean>(false);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <div>
      <Field key={reverse ? "lastName" : "firstName"} label={reverse ? "Last name" : "First name"} /> 
      <Field key={reverse ? "firstName" : "lastName"} label={reverse ? "First name" : "Last name"} />
      {checkbox}
    </div>
  );
}

interface LabelProps {
  label: string
}

function Field({ label }: LabelProps) {
  const [text, setText] = useState("")
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
