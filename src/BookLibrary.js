import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import BookShelf from './BookShelf'


class BookLibrary extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render () {

    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <BookShelf books={books.filter(book => book.shelf === "currentlyReading")} shelf={'Currently Reading'}/>
            <BookShelf books={books.filter(book => book.shelf === "wantToRead")} shelf={'Want to Read'}/>
            <BookShelf books={books.filter(book => book.shelf === "read")} shelf={'Read'}/>
          </div>
          <div className="open-search">
            <Link to="/search">Find and add book</Link>
          </div>
      </div>
    )
  }  
}

export default BookLibrary