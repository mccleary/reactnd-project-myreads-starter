import React, {Component} from 'react'
import {Link} from 'react-router-dom'





/*
 Search component which includes the sate.
*/
class BookSearch extends Component {
	
	render() {
		return (
			<div className="search-books">
	      <div className="search-books-bar">
          <Link className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        		<div className="search-books-input-wrapper">
          		<input type="text" placeholder="Search by title or author"/>
        		</div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
     <div className="open-search">
        <Link onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
      </div>
			</div>
    )
	}
}

export default BookSearch
