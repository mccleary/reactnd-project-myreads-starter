import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'






/*
 Search component which includes the sate.
*/
class BookSearch extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
	
	render() {
		return (
			<div className="search-books">
	      <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
        		<div className="search-books-input-wrapper">
          		<input 
          		  type="text" placeholder="Search by title or author"/>
        		</div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
     <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
			</div>
    )
	}
}

export default BookSearch
