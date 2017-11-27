import React from 'react'

function BookShelfChanger (props) {
  const book = props.book;

  /**
  * @description Handler for the 'change' event of the 'select' allows to
  * move the book to another shelf.
  */

  let handleChange = (event) => {
    const shelf = event.target.value;
    props.onShelfChange(book, shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf || 'none'} onChange={handleChange}>
        <option value="" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger