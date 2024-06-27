import { useState } from 'react';
import { letters } from './data2';
import { Letter } from './Letters2';

export default function MailClient2() {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  // TODO: allow multiple selection
  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    // TODO: allow multiple selection
    let newIds = new Set(selectedIds)
    if (selectedIds.has(toggledId)) {
      newIds.delete(toggledId)
    } else {
      newIds.add(toggledId)
    }
    setSelectedIds(newIds);
  }

  return (
    <div style={{ border: '1px solid rgb(80,150,150)', backgroundColor: 'transparent'}}>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter, index) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.has(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </div>
  );
}
