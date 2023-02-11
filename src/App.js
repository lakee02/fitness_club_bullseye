import React, { useState } from "react";
import Form from "./Form";
import Data from "./Data";
import "./style.css";


function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (index) => {
    setBooks(books.filter((book, i) => i !== index));
  };

  const removeAllBooks = () => {
    setBooks([]);
  };

  return (
    <div className="App">
      <Form addBook={addBook} />
      <Data books={books} removeBook={removeBook} removeAllBooks={removeAllBooks} />
    </div>
  );
}

export default App;
