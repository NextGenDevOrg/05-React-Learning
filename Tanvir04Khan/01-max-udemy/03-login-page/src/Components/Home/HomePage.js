import React, { Fragment } from "react";

import HomeHeader from "./HomeHeader";
import Card from "../UI/Card";

import "./HomePage.css";

const HomePage = ({ authentication }) => {
  const LogoutBtnHandler = () => {
    authentication(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Fragment>
      <HomeHeader onLoggedout={LogoutBtnHandler} />
      <Card>
        <h1> Welcome Back! </h1>
        <button onClick={LogoutBtnHandler}>Logout</button>
      </Card>
    </Fragment>
  );
};

export default HomePage;
