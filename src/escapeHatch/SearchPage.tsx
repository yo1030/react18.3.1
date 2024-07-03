import { useRef } from "react";

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  function handleButtonClick() {
    inputRef.current?.focus()
  }
  return (
    <div>
      <nav>
        <button onClick={handleButtonClick}>Search</button>
      </nav>
      <input
        placeholder="Looking for something?"
        ref={inputRef}
      />
    </div>
  );
}
