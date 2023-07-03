import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
  let [enteredFilter, setEnteredFilter] = useState("Select");
  // console.log(enteredFilter);

  let filterHandler = (year) => {
    setEnteredFilter(year);
  };

  let filteredExpensesList = props.expenses.filter((a) => {
    return a.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterHandler} />
        <Chart expenses={filteredExpensesList} />
        {filteredExpensesList.length === 0 && (
          <p className="expenses-list__fallback">No expenses found.</p>
        )}
        <ul className="expenses-list">
          {filteredExpensesList.length > 0 &&
            filteredExpensesList.map((item) => (
              <ExpenseItem expense={item} key={item.id} />
            ))}
        </ul>
      </Card>
    </div>
  );
};

export default Expenses;
