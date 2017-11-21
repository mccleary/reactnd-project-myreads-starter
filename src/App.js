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

  /* This lifecycle event allows us to hook the API call to 
   * add book data to the DOM. 
  */ 
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  /**
  * TO DO: Change the shelf of the book and update the state.
  */



  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <BookLibrary 
          books={this.state.books}
          />

        )}/>
        <Route path="/search" Component={BookSearch}/>  
      </div>
    )
  }
}

export default App
