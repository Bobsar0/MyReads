import React from 'react'
import PropTypes from 'prop-types'

function Book(props) {
    const {book} = props
    // 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' 
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
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