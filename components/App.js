import React from "react";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/favorites">Favorites</a></li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;
