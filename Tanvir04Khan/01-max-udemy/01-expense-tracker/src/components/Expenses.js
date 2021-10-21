import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ data }) => (
  <div className="main-content">
    {data.map((item) => (
      <ExpenseItem {...item} />
    ))}
  </div>
);

export default Expenses;
