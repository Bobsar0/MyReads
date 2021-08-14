import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

/**
 * Component that displays a list of books passed down from the parent component
 * Each book is represented using a child Book component
 */
class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };

  render() {
    const { books, onUpdateShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} onUpdateShelf={onUpdateShelf} />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookList;
