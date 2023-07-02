import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  let [enteredFilter, setEnteredFilter] = useState("Select");
  // console.log(enteredFilter);
  const filterHandler = (year) => {
    setEnteredFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterHandler} />
        {props.expenses.map((item) => (
          <ExpenseItem expense={item} key={item.id} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
