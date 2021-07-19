import Book from './Book';

export default function ReadShelf(props) {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                props.books
                .filter(book => book.shelf === 'read')
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
      </div>
    )
}

