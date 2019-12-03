import React from 'react';
import './App.css';
import User from "./components/User";
import Followers from "./components/Followers"

function App() {
  return (
    <div>
      <h1>github usercard</h1>
      <User />
      <Followers />
    </div>
  );
}

export default App;
