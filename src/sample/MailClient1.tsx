import { useState } from 'react';
import { initialLetters, LetterProps } from './data';
import Letter from './Letter';

export default function MailClient() {
  const [letters, setLetters] = useState<LetterProps[]>(initialLetters);
  const [highlightedLetterId, setHighlightedLetterId] = useState<number>(0);

  function handleHover(letterId: number) {
    setHighlightedLetterId(letterId);
  }

  function handleStar(letterId: number) {
    setLetters(letters.map(letter => {
      if (letter.id === letterId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <div style={{ border: '1px solid rgb(80,150,150)', backgroundColor: 'transparent'}}>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetterId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </div>
  );
}
