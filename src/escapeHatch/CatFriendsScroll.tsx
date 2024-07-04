import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriendsScroll() {
  const [index, setIndex] = useState<number>(0);
  const selectedRef = useRef<HTMLLIElement>(null)

  function handleButtonClick() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    })
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <div>
      <nav>
        <button onClick={handleButtonClick}>
          Next
        </button>
      </nav>
      <div style={{
        width: "100%",
        overflow: "hidden"
      }}>
        <ul style={{
          listStyle: "none",
          whiteSpace: "nowrap"
        }}>
          {catList.map((cat, i) => (
            <li
              style={{
                display: "inline"
              }} 
              key={cat.id}
              ref={ index === i ? selectedRef : null }>
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type CatType = {
  id: number,
  imageUrl: string
}

const catList: CatType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200?image=' + i
  });
}

