import React from 'react'
import BookList from './BookList';

class Shelf extends React.Component {
    render() {
        const {title, books, onUpdateShelf} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books} onUpdateShelf={onUpdateShelf}/>
                </div>
            </div>
        )
    }
}



export default Shelf;