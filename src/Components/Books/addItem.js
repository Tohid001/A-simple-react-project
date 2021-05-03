import React from "react";
import Context from "../Context/context";

export default class AddItems extends React.Component {
  state = { selectValue: "Chose books..." };
  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };
  handleAddItems = () => {
    if (this.state.selectValue !== "Chose books...") {
      this.context.handleDummy(this.state.selectValue);
      this.setState({ selectValue: "Chose books..." });
    }
  };

  render() {
    const { selectValue } = this.state;
    const { books, dummyBooks } = this.context;
    return (
      <div className="d-flex justify-content-center mb-3">
        <nav className="navbar p-0 navbar-light bg-light">
          <select
            class="form-control d-inline-block mr-sm-2 custom-select"
            style={{ width: "auto" }}
            value={selectValue}
            onChange={this.handleChange}
          >
            <option>Chose books...</option>
            {books.map((book) => {
              return <option>{book.name}</option>;
            })}
          </select>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={this.handleAddItems}
          >
            Add to list
          </button>
        </nav>
      </div>
    );
  }
}

AddItems.contextType = Context;
