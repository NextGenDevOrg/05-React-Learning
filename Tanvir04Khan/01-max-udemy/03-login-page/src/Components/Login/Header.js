import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>A Typical Page</h1>
      <div className="header-nav">
        <span>Users</span>
        <span>Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
