import Book from './Book';

export default function WantToReadShelf (props) {
    return (
      <>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                props.books
                .filter(book => book.shelf === 'wantToRead')
                .map(book=>{
                  return (
                    <Book 
                    key={book.id}
                    book={book}
                    moveBook={props.moveBook}/>
                )}
                )
              }
            </ol>
          </div>
        </div>            
      </>
    )
}

