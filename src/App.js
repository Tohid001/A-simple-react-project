import React, { Component } from "react";
import Context from "./Components/Context/context";
import Books from "./Components/Books/Books";

export default class App extends Component {
  state = {
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

  handleDummy = (name) => {
    if (!this.state.dummyBooks) {
      const newDummy = this.state.books.filter((book) => {
        return book.name === name;
      });
      this.setState({ dummyBooks: newDummy });
    } else {
      if (
        !this.state.dummyBooks.some((book) => {
          return book.name === name;
        })
      ) {
        const newDummy = this.state.books.filter((book) => {
          return book.name === name;
        });
        const NewDummy = [...this.state.dummyBooks];
        NewDummy.push(newDummy[0]);
        this.setState({ dummyBooks: NewDummy });
      } else {
        alert("Item already selected!");
      }
    }
  };
  handleState = (id) => {
    let newBooks = this.state.dummyBooks.filter((book) => {
      return book.id !== id;
    });
    this.setState({ dummyBooks: newBooks });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleState: this.handleState.bind(this),
          handleDummy: this.handleDummy.bind(this),
        }}
      >
        <Books />
      </Context.Provider>
    );
  }
}
