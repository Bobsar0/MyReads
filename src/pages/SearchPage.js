import React from "react"
import { Link } from 'react-router-dom'
import BookList from "../components/BookList"
import Dashboard from "../components/Dashboard"
import * as BooksAPI from '../utils/BooksAPI'

class SearchPage extends React.Component {
  state = {
    searchText: '',
    bookks:[]
  }

  updateSearchText = (text) => {
    console.log(text.trim())
    BooksAPI.search(text).then((books) => {
      console.log('after then searchinggg: ', books)
      if (books.error){
        books = []
      }
      this.setState({
        searchText: text.trim(),
        bookks: books
      })
    }).catch(err => console.log('error: ', err))
    // this.setState({
    //   searchText: text.trim()
    // })
  }

  searchBooks =  ()  => {
    return  BooksAPI.search(this.state.searchText).then((books) => {
      console.log('after then searchinggg: ', books)
      return books;
    })
  }

  render() {
    const showingBooks = this.state.searchText === ""
    ? []
    // : this.searchBooks().then(books => books);
    :this.state.bookks

    console.log('booksshowing: ',showingBooks)
      return (
          <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.searchText}
                onChange={event => this.updateSearchText(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <BookList books={showingBooks} />
          </div>
        </div>
      )
  }
}
export default SearchPage