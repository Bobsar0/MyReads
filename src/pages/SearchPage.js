import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";

/**
 * Class component which represents the SearchPage where books can be added to shelves in the library
 */
class SearchPage extends React.Component {
  static propTypes = {
    booksInShelves: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };
  // Initialize state values
  // searchText is used to control the value of the input search element
  // showing books represent the books that will be displayed upon search. When searchText is empty, no book is displayed
  state = {
    searchText: "",
    showingBooks: [],
  };

  updateSearchText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  updateShowingBooks = (books) => {
    this.setState({
      showingBooks: books,
    });
  };

  onUpdateBookShelf = (book, shelf) => {
    // Update the shelf of the book in showingBooks for this page
    this.updateShowingBooks(this.state.showingBooks);
    //  Update the shelf of the book at the Home Page using the function prop defined at the App top-level parent component
    this.props.onUpdateShelf(book, shelf);
  };

  getBooksToDisplay = (books) => {
    return books.map((book) => {
      // Return book in shelf instead if present
      const shelfBook = this.props.booksInShelves.filter(
        (bk) => bk.id === book.id
      );
      return shelfBook.length === 0 ? book : shelfBook[0];
    });
  };

  componentDidUpdate(_, prevState) {
    // After component is re-rendered (due to a change in searchText), search for books using the search API
    // Update showingBooks with books found or empty list if an error is returned or if searchText is empty
    if (prevState.searchText !== this.state.searchText) {
      this.state.searchText !== ""
        ? BooksAPI.search(this.state.searchText)
            .then((books) => {
              this.updateShowingBooks(
                books.error ? [] : this.getBooksToDisplay(books)
              );
            })
            .catch((_) => {
              alert(
                "Error occurred while searching for books. Try again later"
              );
            })
        : this.updateShowingBooks([]);
    }
  }

  render() {
    const { searchText, showingBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchText}
              onChange={(event) => this.updateSearchText(event.target.value)}
              autoFocus="true"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.state.searchText === "" ? [] : showingBooks}
            onUpdateShelf={this.onUpdateBookShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
