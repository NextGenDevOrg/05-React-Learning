import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const expenseData = [
  { id: 1, title: "Bike", amount: 70000, date: new Date(2020, 5, 13) },
  { id: 2, title: "MacBook", amount: 100000, date: new Date(2020, 8, 21) },
  { id: 3, title: "iPhone", amount: 90000, date: new Date(2020, 4, 20) },
];

function App() {
  const [oldExpenseData, setExpenseData] = useState(expenseData);

  const addExpenseHandler = (newExpenseData) => {
    setExpenseData((prevData) => {
      return [newExpenseData, ...prevData];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={oldExpenseData} />
    </div>
  );
}

export default App;
