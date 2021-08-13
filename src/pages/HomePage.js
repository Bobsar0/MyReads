import React from "react";
import Dashboard from "../components/Dashboard";
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Dashboard />
                <Link to="/search" className="open-search">Add a book</Link>
            </div>
        )
    }
}

export default HomePage