import React from "react";
import Dashboard from "../components/Dashboard";
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Dashboard books={books} />
                <Link to="/search" className="open-search">Search</Link>
            </div>
        )
    }
}

export default HomePage