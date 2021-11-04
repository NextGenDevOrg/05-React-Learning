import User from "./User";

import "./UserList.css";

function UserList({ usersData, deleteUserDataFromArr }) {
  function deleteUserData(id) {
    deleteUserDataFromArr(id);
  }

  if (!usersData.length) {
    return <h3 className="nodata">No user data!</h3>;
  } else {
    return (
      <div className="user-list">
        {usersData.map(({ userName, userAge }, ind) => (
          <User
            userName={userName}
            userAge={userAge}
            key={ind}
            userId={ind + 1}
            onClickHandler={deleteUserData}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
