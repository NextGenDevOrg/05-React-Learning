import React, { Fragment } from "react";

import HomeHeader from "./HomeHeader";
import Card from "../UI/Card";

import "./HomePage.css";

const HomePage = ({ isLoggedin }) => {
  const LogoutBtnHandler = () => {
    isLoggedin(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Fragment>
      <HomeHeader onLoggedout={LogoutBtnHandler} />
      <Card>
        Welcome Back!
        <button onClick={LogoutBtnHandler}>Logout</button>
      </Card>
    </Fragment>
  );
};

export default HomePage;
