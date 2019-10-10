import React from "react";
import "./App.css";
import { Card } from "./publish";

function App() {
  return (
    <div className="App">
      <Card data={new Array(10).fill({})} />
    </div>
  );
}

export default App;
