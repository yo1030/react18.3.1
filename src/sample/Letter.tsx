import { LetterProps } from "./data";


interface LetterListProps {
  letter: LetterProps,
  isHighlighted: boolean,
  onHover: (id:number) => void,
  onToggleStar: (id: number) => void
}

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterListProps) {
  return (
    <li
      className={
        isHighlighted ? 'highlighted' : ''
      }
      onFocus={() => {
        onHover(letter.id);        
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button onClick={() => {
        onToggleStar(letter.id);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}
