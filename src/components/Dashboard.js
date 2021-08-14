import React from "react";
import { shelves } from "../utils/globals";
import { toCamelCase } from "../utils/helpers";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

/**
 * Class Dashboard Component that displays a list of shelves with the associated books
 * Each shelf is represented using a child Shelf component
 */
class Dashboard extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };

  // Retrieve books belonging to a particular shelf by fltering the list of books passed down from parent component
  getShelfBooks = (shelf) => {
    return this.props.books.filter((book) => book.shelf === toCamelCase(shelf));
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <div key={shelf}>
              <Shelf
                title={shelf}
                books={this.getShelfBooks(shelf)}
                onUpdateShelf={this.props.onUpdateShelf}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
