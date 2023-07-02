import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  let [enteredFilter, setEnteredFilter] = useState("Select");
  console.log(enteredFilter);
  const filterHandler = (year) => {
    setEnteredFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterHandler} />
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
      </Card>
    </div>
  );
};

export default Expenses;
