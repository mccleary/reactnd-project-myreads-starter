import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props
    const thumbnail = book.imageLinks.thumbnail
    const title = book.title
    const author = (book.authors || [])[0]

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}></div>
          <BookShelfChanger book={book} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book