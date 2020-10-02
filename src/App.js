import React from "react";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
