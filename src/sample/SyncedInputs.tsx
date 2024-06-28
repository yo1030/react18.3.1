import { useState } from 'react';

export const SyncedInputs: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const [value, setValue] = useState<string>("")
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div>
      <Input label="First input" value={value} onChange = {handleChange} />
      <Input label="Second input" value={value} onChange = {handleChange} />
    </div>
  );
}

interface labelProps {
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Input({ label, value, onChange }: labelProps) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
