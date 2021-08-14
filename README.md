# MyReads Project: A Book Lending App

This is an assessment project designed for Udacity's React Fundamentals course. It is a bookshelf app that allows one to select and categorize books that have been read, are currently reading, or want to read. The application is built using React with an already provided API server and client library used to persist information. Details about the backend server and original project instructions can be found in [INSTRUCTIONS.md](./INSTRUCTIONS.md)

## Installation Instructions

To get started with the application:

- Download or fork this repository
- Install all project dependencies with `npm install`
- Start the development server with `npm start`

## App Functionality

### Main Page

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control is the current shelf the book is in.

![Main page](/src/images/main-page.png)

### Search Page

The main page also has a button link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that allows to add the book to your library.

![Search page](/src/images/search-page.png)

When a book is on a bookshelf, it shows the same state on both the main application page and the search page.

![Book state](/src/images/book-shelf-state.gif)

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections made on the search page in your library.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](./SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't worry if you don't find a specific author or title.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is an assessment project for Udacity React Fundamentals course which forms part of the React Nanodegree Program. Therefore, I most likely will not accept pull requests till it gets graded.
