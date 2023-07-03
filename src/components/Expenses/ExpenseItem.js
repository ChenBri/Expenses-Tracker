// import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // console.log(useState(props.expense.title));

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.price}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
