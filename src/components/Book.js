import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

/**
 * Component that represents a single Book
 * Each book has an associated dropdown represented using a Dropdown component
 * The default shelf value of the dropdown is marked as the book's shelf and any updates to the shelf is propagated to the parent component where the book's state is held
 */
class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };

  // Updates the shelf of the book.
  // This calls the onUpdateShelf function passed down from the parent component with the book and shelf parameters
  updateShelf = (shelf) => {
    this.props.onUpdateShelf(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;

    const authors = book.authors
      ? book.authors.join("; ")
      : "No authors listed";

    const backgroundImage = book.imageLinks
      ? `url(${book.imageLinks.thumbnail})`
      : "";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: backgroundImage,
            }}
          />
          <div className="book-shelf-changer">
            <Dropdown
              defaultShelf={book.shelf || "none"}
              onUpdateShelf={this.updateShelf}
            />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
