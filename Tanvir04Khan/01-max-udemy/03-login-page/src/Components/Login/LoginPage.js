import React, { useState, useEffect, useReducer, Fragment } from "react";

import Card from "../UI/Card";
import UserInput from "./UserInput";
import Header from "./Header";

import "./LoginPage.css";

const emailReducer = (state, action) => {
  if (action.type === "email-input") {
    return {
      value: action.val,
      isValid: action.val.includes("@") && action.val.includes(".com"),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "password-input") {
    return { value: action.val, isValid: action.val.trim().length >= 6 };
  }
  return { value: "", isValid: false };
};

const LoginPage = ({ isLoggedin }) => {
  const [enteredEmail, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [enteredPassword, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validation!");
      setFormIsValid(enteredEmail.isValid && enteredPassword.isValid);

      return () => {
        clearTimeout(identifier);
      };
    }, 1000);
  }, [enteredEmail, enteredPassword]);

  const emailInputHandler = (event) => {
    dispatchEmail({ type: "email-input", val: event.target.value });
  };

  const passwordInputHandler = (event) => {
    dispatchPassword({ type: "password-input", val: event.target.value });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      isLoggedin(true);
      localStorage.setItem("isLoggedIn", "1");
    }
  };

  return (
    <Fragment>
      <Header />
      <Card>
        <form className="login-form" onSubmit={loginHandler}>
          <UserInput
            label="E-mail"
            type="text"
            value={enteredEmail.value}
            onValueChange={emailInputHandler}
            style={
              !enteredEmail.isValid
                ? { background: "rgba(225, 0, 0, 0.1)" }
                : {}
            }
          />
          <UserInput
            label="Password"
            type="password"
            value={enteredPassword.value}
            onValueChange={passwordInputHandler}
            style={
              !enteredPassword.isValid
                ? { background: "rgba(225, 0, 0, 0.1)" }
                : {}
            }
          />
          <button type="submit" style={{ margin: "1.5rem" }}>
            Login
          </button>
        </form>
      </Card>
    </Fragment>
  );
};

export default LoginPage;
