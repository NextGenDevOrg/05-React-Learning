import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UIcomponents/Card";

const Expenses = ({ expensesData }) => {
  return (
    <Card className="expenses">
      {expensesData.map(({ title, amount, date, id }) => (
        <ExpenseItem title={title} amount={amount} date={date} key={id} />
      ))}
    </Card>
  );
};

export default Expenses;
