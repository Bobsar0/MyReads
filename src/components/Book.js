import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import Dropdown from './Dropdown'

class Book extends React.Component {
    updateShelf = (shelf) => {
        this.props.onUpdateShelf(this.props.book, shelf)
    }

    render(){
        const {book} = this.props
        const authors = book.authors ? book.authors.join("; ") : 'No authors listed'
        const backgroundImage = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ''
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: backgroundImage}}></div>
                        <div className="book-shelf-changer">
                            <Dropdown 
                                defaultShelf={book.shelf || 'none'} 
                                onUpdateShelf={this.updateShelf}
                            />
                        </div>
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

class BookClass {
    constructor(jsonBook) {
        this.id = jsonBook.id
        this.authors = jsonBook.authors
        this.averageRating = jsonBook.averageRating
        this.categories = jsonBook.categories
        this.description = jsonBook.description
        this.thumbnail = jsonBook.imageLinks.thumbnail
        this.smallThumbnail = jsonBook.imageLinks.smallThumbnail
        this.previewLink = jsonBook.previewLink
        this.publishedDate = jsonBook.publishedDate
        this.publisher = jsonBook.publisher
        this.shelf = jsonBook.shelf
        this.subtitle = jsonBook.subtitle
        this.title = jsonBook.title
    }
}

export default Book