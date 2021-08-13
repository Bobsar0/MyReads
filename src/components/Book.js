import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import Dropdown from './Dropdown'

function Book(props) {
    const {book} = props
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <Dropdown defaultShelf={book.shelf} book={book}/>
                    </div>
                </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors.map(author => <span key={author}>{`${author}; `}</span>)}
            </div>
        </div>
    )
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