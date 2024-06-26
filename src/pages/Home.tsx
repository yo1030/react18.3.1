import { Link } from 'react-router-dom'
import Masonry from "react-masonry-css";
import "./Home.css";

// src/pages/Home.tsx
export const Home = () => {
  const links = [
    {
      id: 0,
      title: "Todo",
      text: "React を使用した Todo アプリ",
      path: "/todo"
    },
    {
      id: 1,
      title: "Book Search",
      text: "React を使用した本の検索",
      path: "/book-search"
    },
    {
      id: 2,
      title: "React を使用した入力欄",
      text: "React を使用した様々な入力フォーム",
      path: "/react-input"
    },
    {
      id: 3,
      title: "React & TypeScript の学習",
      text: "React を使用して TypeScript を学習",
      path: "/react-typescript"
    }
  ]
  const breakpointColumnsObj = {
    default: 4,
    1350: 3,
    1048: 2,
    576: 1
  }
  return (
    <div>
      <h1>Home</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
          {links.map(link => (
            <div className='link-card' key={link.id}>
              <Link to={link.path}>
                <p>{link.title}</p>
                <p>{link.text}</p>
              </Link>
            </div>
          ))}
        </Masonry>
    </div>
  );
}
