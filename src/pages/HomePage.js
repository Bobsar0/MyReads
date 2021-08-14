import React from "react";
import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";

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

export default HomePage;
