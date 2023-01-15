import React from "react";

const BooksItems = ({ item }) => {
  return (
    <div className="books__card" key={item.id}>
      <img src={item.image} alt="" className="books__img" />
      <br /> <p className="books__tag">{item.category}</p>
      <h3 className="books__title">{item.title}</h3>
      <p className="books__author">By {item.author}</p>
      <div className="books_width"></div>
    </div>
  );
};

export default BooksItems;
