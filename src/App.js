import './style/css/main.css';
import React from 'react'
import MainPageHeader from './Components/MainPageHeader';
import BookShelvies from './Components/BookShelves';
import BooksSearchButton from './Components/BooksSearchButton';
import SearchInterface from './Components/SearchInterface';
import { Route } from 'react-router';
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true
  }
  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
      let res = await BooksAPI.getAll().then(res=>{
        this.setState(()=>({
          books: res
        }))
      })
  }
  moveBook = async (book, shelf) => {
    this.setState({
      loading: true,
    })
    await BooksAPI.update(book, shelf).then(res=>{
      var bookFound = false;
      for(let i=0; i<this.state.books.length; i++) {
        if(this.state.books[i].id === book.id) {
          bookFound = true;
          break;
        }
      }
      if(bookFound) {
        this.setState({
          loading: false,
          books: this.state.books.map(Book=> {
            if(Book.id === book.id) {
              Book.shelf = shelf;
            }
            return Book;
          })
        })
      }
      else {
        book.shelf = shelf;
        this.setState({
          loading: false,
          books: [...this.state.books, book],
        })
      }
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search">
            <SearchInterface books={this.state.books} moveBook={this.moveBook}/>
          </Route>
         <Route exact path="/">
          <div className="list-books">
            <MainPageHeader />
            <BookShelvies books={this.state.books} moveBook={this.moveBook}/>
            <BooksSearchButton moveBook={this.moveBook}/>
          </div>
          </Route>
      </div>
    )
  }
}

export default BooksApp
