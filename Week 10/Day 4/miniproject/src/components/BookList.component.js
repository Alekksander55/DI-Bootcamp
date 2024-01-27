import { BookContext } from "./Books.component";
import { useContext } from "react";

const BookList = () => {
  const bookList = useContext(BookContext);

  return (
    <div>
      {bookList.map((book, i) => {
        return (
          <div
            key={i}
            style={{
              display: "inline-block",
              padding: "20px",
              margin: "20px",
              width: "150px",
            }}
          >
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <p style={{fontSize:'12px'}}>{book.volumeInfo.title}</p>
            <p style={{fontSize:'15px'}}>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate.slice(0,4)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
