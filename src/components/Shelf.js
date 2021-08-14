import React from "react";
import BookList from "./BookList";
import PropTypes from "prop-types";

/**
 * Stateless function component that represents a Shelf holding a list of books
 * @param {object} props properties passed down from parent component
 * @returns List of books represented with a BookList component
 */
function Shelf(props) {
  const { title, books, onUpdateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onUpdateShelf={onUpdateShelf} />
      </div>
    </div>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
};

export default Shelf;
