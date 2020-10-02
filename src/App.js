import React from "react";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Appointment />
    </div>
  );
}

export default App;
