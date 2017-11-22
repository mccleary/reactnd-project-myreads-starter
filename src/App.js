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

  /* Fetch all books from the BooksAPI. */
  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  /* This lifecycle event allows us to hook the API call to 
   * add book data to the DOM. 
  */ 

  componentDidMount() {
    this.getAllBooks()
  }
  
  /**
  * Change the shelf of the book.
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
        <Route path="/search" render={({history}) => (
          <BookSearch
         
          />
        )}/>  
      </div>
    )
  }
}
export default App
