import React, { useContext, useState } from 'react';
import { places } from './imageData';
import { getImageUrl } from './utils';
import { ImageContext } from './Context';

export const UserImage: React.FC = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageContext.Provider value={imageSize}>
        <List />
      </ImageContext.Provider>
    </div>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "20px",
        marginBottom: "10px"}}>
      <Place
        place={place}
      />
    </li>
  );
  const ulStyle = {
    listStyleType: "none",
    padding: "0px 10px"
  };
  return (<ul style={ ulStyle }>{listItems}</ul>);
}

type PlaceType = {
  place: {
    name: string,
    description: string,
    imageId: string
  }
}

function Place({ place }: PlaceType) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: PlaceType) {
  const imageSize = useContext(ImageContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
