import React, { useState } from "react";

import UserInput from "./UserInput";
import Button from "./Button";

import "./UserDataForm.css";

function UserDataForm({ getUserData }) {
  const [nameInputValue, setNameInputValue] = useState("");
  const [ageInputValue, setAgeInputValue] = useState(0);

  function userNameInputHandler(event) {
    setNameInputValue(event.target.value);
  }

  function userAgeInputHandler(event) {
    setAgeInputValue(event.target.value);
  }

  function submitBtnHandler(event) {
    event.preventDefault();
    if (!nameInputValue || !ageInputValue) {
      const invalidInputError = "Invalid inputs!";
      getUserData(null, null, invalidInputError);
    } else {
      getUserData(nameInputValue, ageInputValue);
      setNameInputValue("");
      setAgeInputValue(0);
    }
  }

  return (
    <form className="userdata-form" onSubmit={submitBtnHandler}>
      <UserInput
        label="User Name"
        type="text"
        inputValue={nameInputValue}
        onValueChange={userNameInputHandler}
      />
      <UserInput
        label="User Age"
        type="number"
        inputValue={ageInputValue}
        onValueChange={userAgeInputHandler}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default UserDataForm;
