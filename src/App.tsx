import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VirusTrackerPage from "./app/views/VirusTrackerPage";

function App() {
  return (
    <div className="App">
      <h1>WorldWide Covid19 Tracker </h1>
      <VirusTrackerPage />
    </div>
  );
}

export default App;
