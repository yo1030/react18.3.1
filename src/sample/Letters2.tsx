import { lettersProps } from "./data2";

interface LetterComponentProps {
  letter: lettersProps,
  onToggle: Function,
  isSelected: boolean
}

export const Letter = ({
  letter,
  onToggle,
  isSelected,
}: LetterComponentProps) => {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
