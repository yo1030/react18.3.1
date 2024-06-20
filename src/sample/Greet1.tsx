export default function FeedbackForm() {

  function handleClick(): void {
    const userName = prompt('What is your name?')
    if (userName !== null) {
      alert(`Hello, ${userName}!`);
    }
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
