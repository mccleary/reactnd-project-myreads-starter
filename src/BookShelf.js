import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


/*
* BookShelf is a Stateless Funtional Component with implicit return (ES6).
*/

function BookShelf (props) {
    return (
        <div className="bookshelf">      
          <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">    
            <ol className="books-grid">
              {props.books.map((book) => {
                  return (
                    <li key={book.id}>
                      <Book book={book} onShelfChange={props.onShelfChange}/>
                    </li>
                  )
              })}
            </ol>
          </div>  
        </div>
    )     
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf