import React, { Fragment } from "react";

import "./UserInput.css";

const UserInput = ({ label, type }) => {
  return (
    <Fragment>
      <label className="input-label">{label}</label>
      <input className="input" type={type} />
    </Fragment>
  );
};

export default UserInput;
