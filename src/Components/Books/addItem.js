import React, { useContext, useState } from "react";
import { UserContext } from "../Context/context";

export default function AddItems() {
  const { books, handleDummy, handleReset } = useContext(UserContext);

  const [localState, setLocalState] = useState("Chose books...");

  const handleChange = (event) => {
    setLocalState(event.target.value);
  };
  const handleAddItems = () => {
    if (localState !== "Chose books...") {
      handleDummy(localState);
      setLocalState("Chose books...");
    }
  };

  const handleReset2 = () => {
    setLocalState("Chose books...");
    handleReset();
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <nav className="navbar p-0 navbar-light bg-light">
        <select
          class="form-control d-inline-block mr-sm-2 custom-select"
          style={{ width: "auto" }}
          value={localState}
          onChange={handleChange}
        >
          <option>Chose books...</option>
          {books.map((book) => {
            return <option>{book.name}</option>;
          })}
        </select>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={handleAddItems}
        >
          Add to list
        </button>
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          onClick={handleReset2}
        >
          Reset
        </button>
      </nav>
    </div>
  );
}
