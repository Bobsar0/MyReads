import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import * as BooksAPI from "../utils/BooksAPI";

class SearchPage extends React.Component {
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
    // remove book that shelf has just been changed
    // this.updateShowingBooks(
    //   this.state.showingBooks.filter((bk) => bk.id !== book.id)
    // );
    this.updateShowingBooks(this.state.showingBooks);
    this.props.onUpdateShelf(book, shelf);
  };

  getBooksToDisplay = (books) => {
    return books.map((book) => {
      // Get book in shelf if present
      const shelfBook = this.props.booksInShelves.filter(
        (bk) => bk.id === book.id
      );
      return shelfBook.length === 0 ? book : shelfBook[0];
    });
  };

  componentDidUpdate(_, prevState) {
    console.log(
      "in componentdidUpdate - booksInShelves: ",
      this.props.booksInShelves
    );
    console.log("prev searchText: ", prevState.searchText);
    console.log("updated searchText: ", this.state.searchText);
    console.log(prevState.searchText === this.state.searchText);
    if (prevState.searchText !== this.state.searchText) {
      //filter out ids that are in shelves and update their shelves before rendering
      console.log("searchtext not same!!!!: ", this.state.searchText);
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
              value={searchText}
              onChange={(event) => this.updateSearchText(event.target.value)}
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
