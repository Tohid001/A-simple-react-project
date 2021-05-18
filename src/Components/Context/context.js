// import React, { Component } from "react";
import React, { createContext, useReducer } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = {
  books: [
    {
      name: "Manufacturig Engg.",
      author: "Mr. X",
      price: "100$",
      quantity: 10,
      id: 1,
    },
    {
      name: "Operations Management",
      author: "Mr. Y",
      price: "150$",
      quantity: 15,
      id: 2,
    },
    {
      name: "Differential Calculus",
      author: "Mr. Z",
      price: "200$",
      quantity: 20,
      id: 3,
    },
  ],
  dummyBooks: null,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "dummyBooks":
      return { ...state, dummyBooks: value };

    default:
      return state;
  }
};

function UserProvider(props) {
  const [book, dispatch] = useReducer(reducer, initialState);

  const handleDummy = (name) => {
    if (!book.dummyBooks) {
      const newDummy = book.books.filter((book) => {
        return book.name === name;
      });
      dispatch({ type: "dummyBooks", value: newDummy });
    } else {
      if (
        !book.dummyBooks.some((book) => {
          return book.name === name;
        })
      ) {
        const newDummy = book.books.filter((book) => {
          return book.name === name;
        });
        const NewDummy = [...book.dummyBooks];
        NewDummy.push(newDummy[0]);
        dispatch({ type: "dummyBooks", value: NewDummy });
      } else {
        alert("Item already selected!");
      }
    }
  };
  const handleState = (id) => {
    let newBooks = book.dummyBooks.filter((book) => {
      return book.id !== id;
    });
    dispatch({ type: "dummyBooks", value: newBooks });
  };
  const handleReset = () => {
    dispatch({ type: "dummyBooks", value: null });
  };
  return (
    <Provider
      value={{
        ...book,
        dispatch,
        handleState,
        handleDummy,
        handleReset,
      }}
    >
      {props.children}
    </Provider>
  );
}
export { UserProvider, Consumer as UserConsumer, Context as UserContext };
