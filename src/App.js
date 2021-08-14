import React from "react";
import "./App.css";
import "./components/Book";
import { Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import * as BooksAPI from "./utils/BooksAPI";
import { shelvesMap } from "./utils/globals";

/**
 * Top level App component
 */
class BooksApp extends React.Component {
  state = {
    booksInShelves: [],
  };

  componentDidMount() {
    // Retrieve books from server immediately after this component is mounted.
    this.fetchBooksInShelves();
  }

  // This method is passed down to child components and called from there when the shelf of a book needs to be updated
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((_) => {
      this.fetchBooksInShelves();
      alert(`"${book.title}" successfully moved to "${shelvesMap[shelf]}"`);
    });
  };

  fetchBooksInShelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        booksInShelves: books,
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              books={this.state.booksInShelves}
              onUpdateShelf={this.updateBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              booksInShelves={this.state.booksInShelves}
              onUpdateShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
