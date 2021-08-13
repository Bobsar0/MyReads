import React from "react"
import { shelves } from "../utils/global"
import { toCamelCase } from "../utils/helpers"
import Shelf from "./Shelf"
import * as BooksAPI from '../utils/BooksAPI'


class Dashboard extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // Retrieve books from server immediately after this component is mounted.
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

    getShelfBooks = (shelf) => {
        return (
            this.state.books.filter(book => (book.shelf === toCamelCase(shelf)))
        )
    }    

  updateBookShelf = (book, shelf) => {    
    BooksAPI.update(book, shelf)
      .then((_) => {
        this.setState((currState) => ({
          books: currState.books.map(b => 
            b.id === book.id
            ? {...b, shelf: shelf}
            : b
            )
        }))
      })
  }

    render() {
        return(
            <div className="list-books-content">
            <div>
              {shelves.map(shelf => (
                <div key={shelf}>
                    <Shelf 
                      title={shelf}
                      books={this.getShelfBooks(shelf)}
                      onUpdateShelf={this.updateBookShelf}
                    />
                </div>
              ))}
            </div>
          </div>
        )
    }
}

export default Dashboard