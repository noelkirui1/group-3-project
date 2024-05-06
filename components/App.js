import React from "react";
import Header from "./Header";
import About from "./About";
import NavBar from "../../react-hooks-react-router-routes-lab-v6/src/components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <NavBar />
    </div>
  );
}

export default App;
