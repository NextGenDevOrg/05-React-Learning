import React, { Fragment } from "react";

import HomeHeader from "./HomeHeader";
import Card from "../UI/Card";

import "./HomePage.css";

const HomePage = ({ onAuthenticate }) => {
  const logoutBtnHandler = () => {
    onAuthenticate(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Fragment>
      <HomeHeader onLoggingout={logoutBtnHandler} />
      <Card>
        <h1> Welcome Back! </h1>
        <button onClick={logoutBtnHandler}>Logout</button>
      </Card>
    </Fragment>
  );
};

export default HomePage;
