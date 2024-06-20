export default function Gree1() {

  function handleClick(): void {
    const userName = prompt('What is your name?')
    if (userName !== null) {
      alert(`Hello, ${userName}!`);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Greet
      </button>
    </div>
  );
}
