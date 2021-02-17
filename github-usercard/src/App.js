import React from 'react';
import './App.css';
import User from "./components/User";
import Followers from "./components/Followers"

function App() {
  return (
    <div>
      <h1>Github Usercard</h1>
      <div className="container">
        <User />
        <Followers />
      </div>

    </div>
  );
}

export default App;
