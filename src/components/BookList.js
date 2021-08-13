import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const {books} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <li key={book.id}>
                        <Book book={book} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default BookList