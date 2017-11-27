import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookLibrary from './BookLibrary'
import BookSearch from './BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: []
  }

  /**
  *  @description Fetch all books from the BooksAPI. 
  */

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  /**
  * @description This lifecycle event allows to hook the API call to 
  * add book data to the DOM. 
  */ 

  componentDidMount() {
    this.getAllBooks()
  }

  /**
  * @description Changes the shelf of the book.
  */
  onShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <BookLibrary 
          books={this.state.books}
          onShelfChange={this.onShelfChange}
          />

        )}/>
        <Route path="/search" render={() => (
          <BookSearch
            books={this.state.books}
            onShelfChange={this.onShelfChange}  
          />
        )}/>
      </div>
    )
  }
}
export default App