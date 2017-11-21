import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import BookShelf from './BookShelf'


class BookLibrary extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render () {

    //const { books, onShelfChange } = this.props

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
          <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf 
              title='Currently Reading'
              books={this.props.books.filter(book => book.shelf === "currentlyReading")} 
              onShelfChange={this.props.onShelfChange}
            />
            <BookShelf 
              title='Want to Read'
              books={this.props.books.filter(book => book.shelf === "wantToRead")}
              onShelfChange={this.props.onShelfChange}
            />
            <BookShelf 
              title='Read'
              books={this.props.books.filter(book => book.shelf === "read")} 
              onShelfChange={this.props.onShelfChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Find and add book</Link>
        </div>
      </div>
    )
  }  
}

export default BookLibrary