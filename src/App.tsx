// import React from 'react';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import { Router } from './Router';
import './App.css';
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";
import { Todo } from "./todo/Todo";
import { BookSearch } from "./pages/BookSearch";
import { ReactInput } from "./pages/ReactInput";
import { Sample } from "./sample/Sample";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/book-search" element={<BookSearch></BookSearch>}></Route>
        <Route path="/react-input" element={<ReactInput></ReactInput>}></Route>
        <Route path="/react-typescript" element={<Sample></Sample>}></Route>

        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
