import React from "react";
import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Stateless function component that represents the Home Page
 * Contains a child Dashboard component which shows a list of shelves with their associated books
 * Also has a link to the /search page
 * @param {Object} props properties handed down from the parent App component
 * @returns Dashboard with a link to a Search Page where books can be added to the library
 */
function HomePage(props) {
  const { books, onUpdateShelf } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Dashboard books={books} onUpdateShelf={onUpdateShelf} />
      <Link to="/search" className="open-search">
        Add a book
      </Link>
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
};

export default HomePage;
