import React, { useState, useEffect } from "react";

import LoginPage from "./Components/Login/LoginPage";
import HomePage from "./Components/Home/HomePage";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.isLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const authentication = (isUserLoggedIn) => {
    setIsLoggedIn(isUserLoggedIn);
  };

  return (
    <div className="App">
      {!isLoggedIn && <LoginPage isLoggedin={authentication} />}
      {isLoggedIn && <HomePage isLoggedin={authentication} />}
    </div>
  );
}

export default App;
