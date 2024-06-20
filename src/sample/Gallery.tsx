import { useState } from 'react';
import { sculptureList } from './galleryData';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick(): void {
    if (index + 1 === sculptureList.length) {
      setIndex(0)
    } else {
      setIndex(index + 1);
    }
  }

  function handleMoreClick(): void {
    setShowMore(!showMore);
  }

  function handlePreviousClick(): void {
    if (index === 0) {
      setIndex(sculptureList.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <br />
      <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <br />
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
