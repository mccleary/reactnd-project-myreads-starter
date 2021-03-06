import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    const { book, onShelfChange } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
           style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`}}>
          </div>
          <BookShelfChanger book={book} onShelfChange={onShelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors || []}</div>
      </div>
    )
  }
}

export default Book