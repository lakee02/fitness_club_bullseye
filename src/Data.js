import React from "react";

const Data = ({ books, removeBook, removeAllBooks }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          {book.title} by {book.author} ({book.isbn})
          <button onClick={() => removeBook(index)}>Delete</button>
        </li>
      ))}
      <button onClick={removeAllBooks}>Remove All</button>
    </ul>
  );
};

export default Data;
