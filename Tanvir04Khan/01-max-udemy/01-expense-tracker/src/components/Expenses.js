// import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import FilteredExpense from "../New Expense/FilteredExpense";
import Chart from "../Chart/chart";

import "./Expenses.css";

const Expenses = (props) => {
  function userSelectedYear(newYear) {
    props.getSelectedYear(newYear);
  }

  if (!props.data.length) {
    return (
      <div className="main-content">
        <FilteredExpense value="2022" userSelectedYear={userSelectedYear} />
        <p className="no-expenses">No expenses in this year.</p>
      </div>
    );
  } else {
    return (
      <div>
        <Chart data={props.data} />
        <div className="main-content">
          <FilteredExpense userSelectedYear={userSelectedYear} />
          {props.data.map((item) => (
            <ExpenseItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Expenses;
