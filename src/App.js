import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PathFindingVisualizer />
    </div>
  );
}

export default App;
