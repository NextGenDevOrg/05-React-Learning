import "./User.css";

function User({ userName, userAge, onClickHandler, userId }) {
  function deleteUserDataHandler(event) {
    onClickHandler(event.target.id);
  }

  return (
    <div className="user" onClick={deleteUserDataHandler} id={userId}>
      <div>{userName}</div>
      <div>{userAge}</div>
    </div>
  );
}

export default User;
