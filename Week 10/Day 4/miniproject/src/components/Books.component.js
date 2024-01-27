import { createContext, useRef, useState } from "react";
import BookList from "./BookList.component";

export const BookContext = createContext();

const Books = () => {
  const myInput = useRef();
  const [bookList, setBookList] = useState([])
  const [sortBy, setSortBy] = useState('Newest')

  const searchBooks = () => {
    try {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${myInput.current.value}&key=AIzaSyCUt5ceYBndZ_SvHgT6sUQUkyDIFMGDsdY`
      )
        .then((response) => response.json())
        .then((books) => setBookList(books.items));
        console.log(bookList)
    } catch (error) {
      console.log(error);
    }
  };

//   const sortBooks = () => {
//     sort(bookList)()
//   }
  return (
    <>
      <input type="text" placeholder="Search for books" ref={myInput} />
      <button onClick={searchBooks}>Search</button>
      {/* <button onClick={sortBooks}>Sort by : {sortBy}</button> */}
      <BookContext.Provider value={bookList}>
      <BookList />
      </BookContext.Provider>
    </>
  );
};

export default Books;
