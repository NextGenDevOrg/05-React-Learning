import "./UserInput.css";

function UserInput({ label, type, inputValue, onValueChange }) {
  return (
    <div className="user-input">
      <label>{label}</label>
      <input type={type} value={inputValue} onChange={onValueChange} />
    </div>
  );
}

export default UserInput;
