import React from "react"
import { shelves } from "../utils/global"
import { toCamelCase } from "../utils/helpers"
import Shelf from "./Shelf"


class Dashboard extends React.Component {
    getShelfBooks = (shelf) => {
        return (
            this.props.books.filter(book => (book.shelf === toCamelCase(shelf)))
        )
    }
    render() {
        return(
            <div className="list-books-content">
            <div>
              {shelves.map(shelf => (
                <div key={shelf}>
                    <Shelf title={shelf} books={this.getShelfBooks(shelf)}/>
                </div>
              ))}
            </div>
          </div>
        )
    }
}

export default Dashboard