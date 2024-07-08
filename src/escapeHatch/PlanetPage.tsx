import { useState, useEffect } from 'react';
import { fetchData } from './api';

export type PlaceType = {
  id: string,
  name: string
}

export default function PlanetPage() {
  const [planetList, setPlanetList] = useState<PlaceType[]>([])
  const [planetId, setPlanetId] = useState<string>('');

  const [placeList, setPlaceList] = useState<PlaceType[]>([]);
  const [placeId, setPlaceId] = useState<string>('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (planetId === '') {
      return
    }
    let ignore = false
    fetchData('/planets/' + planetId + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places on ' + planetId)
        setPlaceList(result)
        setPlaceId(result[0].id)
      }
    })
    return () => {
      ignore = true
    };
  }, [planetId]);

  return (
    <div>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </div>
  );
}
