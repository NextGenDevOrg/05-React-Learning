import React, { useState } from "react";

import UserDataForm from "./Components/UserDataForm";
import UserList from "./Components/UserList";
import Button from "./Components/Button";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [inputError, setInputError] = useState("");
  const [displayErrorModal, setDisplayErrorModal] = useState("none");
  const [displayDltConfModal, setDisplayDltConfModal] = useState("none");
  const [userId, setUserId] = useState(0);

  function getUserData(userName, userAge, inputError) {
    if (!inputError) {
      setUsers([{ userName, userAge: +userAge }, ...users]);
    } else {
      setInputError(inputError);
      setDisplayErrorModal("block");
    }
  }

  function btnClickHandler() {
    setDisplayErrorModal("none");
  }

  function deleteUserDataFromArr(id) {
    if (id) {
      setDisplayDltConfModal("block");
      setUserId(+id);
    }
  }

  function cancelBtnHandler() {
    setDisplayDltConfModal("none");
    setUserId(0);
  }

  function confirmDltHandler() {
    users.splice(userId - 1, 1);
    setUsers(users);
    setDisplayDltConfModal("none");
  }

  return (
    <div className="App">
      <div style={{ display: displayErrorModal }}>
        <div className="backdrop" onClick={btnClickHandler}></div>
        <div className="error modal">
          <h3>{inputError}</h3>
          <Button type="button" onClick={btnClickHandler}>
            Okay
          </Button>
        </div>
      </div>

      <div style={{ display: displayDltConfModal }}>
        <div className="backdrop" onClick={cancelBtnHandler}></div>
        <div className="dlt-confirmation modal">
          <h3>Are you sure to delete this user data?</h3>
          <div className="dlt-modal-btn">
            <button className="cancel-btn" onClick={cancelBtnHandler}>
              Cancel
            </button>
            <button className="confirm-btn" onClick={confirmDltHandler}>
              Confirm delete
            </button>
          </div>
        </div>
      </div>

      <UserDataForm getUserData={getUserData} />
      <UserList
        usersData={users}
        deleteUserDataFromArr={deleteUserDataFromArr}
      />
    </div>
  );
}

export default App;
