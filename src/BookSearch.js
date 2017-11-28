import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

/**
* @description Search component which includes the state.
*/

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query:'', books:[]
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
        this.setState({query: query.trim()})
        
        BooksAPI.search(query).then((books) => {
          if (books.error) {
            this.setState({books: []})
          }

          books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
          this.setState({ books })  
        })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" 
               placeholder="Search by title" 
               onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.books.sort(sortBy('title'))
                  .map(book => (
            <li key={book.id}>
            <Book book={book} onShelfChange={ this.props.onShelfChange}/>
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch