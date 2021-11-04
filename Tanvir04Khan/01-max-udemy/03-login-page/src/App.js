import React, { useState } from "react";

import Header from "./Components/Login/Header";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      <h1>Helllo There!</h1>
      {}
    </div>
  );
}

export default App;
