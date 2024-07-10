type ButtonType = {
  onClick: () => void
}

export default function SearchButton({onClick}: ButtonType) {
  return (
    <button onClick={onClick}>
      Search
    </button>
  );
}
