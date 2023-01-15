import React, { useState, useEffect } from "react";

// import data
import { booksData } from "./ReadingBooksData";
import { booksNav } from "./ReadingBooksData";

// import components
import BooksItems from "./BooksItems";

const Books = () => {
    const [item, setItem] = useState({ name: "all" });
    const [books, setbooks] = useState([]);
    const [active, setActive] = useState(0);
  
    useEffect(() => {
      // get books based on item
      if (item.name === "all") {
        setbooks(booksData);
      } else {
        const newbooks = booksData.filter((book) => {
          return book.category.toLowerCase() === item.name;
        });
        setbooks(newbooks);
      }
    }, [item]);
  
    const handleClick = (e, index) => {
      setItem({ name: e.target.textContent.toLowerCase() });
      setActive(index);
    };
  
    return (
      <div>
        {/* books nav */}
        <div class="books__filters">
          {booksNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? "active-book" : ""} books__item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        {/* books */}
        <div className="books__container container grid">
          {books.map((item) => {
            return <BooksItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  };
  
  export default Books;
  