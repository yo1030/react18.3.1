import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef<Map<string, HTMLLIElement | null> | null>(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat: string) {
    const map = getMap();
    if (map === null) {
      return;
    }
    const node = map.get(cat);
    if (node == null) {
      return;
    }
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap(): Map<string, HTMLLIElement | null> {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <div>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                // なぜか３回行われる（set⇒delete⇒set）
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} alt="cat" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

