import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {
 onChange = (e) => {
    this.props.moveBook(this.props.book, e.target.value);
  }
  render(){
    let author = "";
    let url = "";
    try {
      author = this.props.book.authors.join(",");
    } catch {
      author = ""
    }
    try {
      url = this.props.book.imageLinks.thumbnail 
      ? this.props.book.imageLinks.thumbnail 
      : this.props.book.imageLinks.smallthumbnail
      ? this.props.book.imageLinks.smallthumbnail
      : "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
    } catch {
      url= "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
    }
    return (
      // /* <Book id="" bookCoverURL="" title="" author="" shelf="" renderNewChanges = {}/> */
        <li>
          <div className="book">
            <div className="book-top">
              <div 
              className="book-cover" 
              style={
                { width: 128,
                 height: 193,
                 backgroundImage: `url(${url})` }
                 }></div>
              <div className="book-shelf-changer">
                <select 
                defaultValue={this.props.book.shelf? this.props.book.shelf : 'none'}onChange={this.onChange}>
                  <option value="move" disabled className="moveToTitle">Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{author}</div>
          </div>
        </li>
      )
    }
}

Book.propTypes = {
  bookCoverURL: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Book;

