import React from "react"
import Shelf from "./Shelf"

const shelves = ['Currently Reading', 'Want to Read', 'Read']

function toCamelCase(text) {
    const textArr = text.split(' ');
    const firstWord = textArr[0].toLowerCase();
    const restWord = textArr.slice(1).map((str) => (str.charAt(0).toUpperCase() + str.slice(1)))
                           .join('')
    return firstWord+restWord
  }

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