import React from "react";

import { UserProvider } from "./Components/Context/context";
import Books from "./Components/Books/Books";

export default function App() {
  return (
    <UserProvider>
      <Books />
    </UserProvider>
  );
}
