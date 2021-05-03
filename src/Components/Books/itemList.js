import React from "react";
import Context from "../Context/context";

export default function ItemList() {
  return (
    <Context.Consumer>
      {({ dummyBooks, handleState }) => {
        if (!dummyBooks) {
          return null;
        }
        return dummyBooks.map((book) => {
          return (
            <li className="list-group-item d-flex flex-column flex-lg-row">
              <blockquote class="blockquote">
                <p class="mb-0">{book.name}</p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">Written by {book.author}</cite>
                </footer>
              </blockquote>

              <span className="ml-lg-auto text-center text-lg-left">
                {book.price}
              </span>
              <div className="d-flex ml-lg-4">
                <span
                  className="mr-lg-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleState(book.id)}
                >
                  <i class="fas fa-trash"></i>
                </span>
                <span className="ml-auto ml-lg-auto">
                  <small>{`(${book.quantity} items are available)`}</small>
                </span>
              </div>
            </li>
          );
        });
      }}
    </Context.Consumer>
  );
}
