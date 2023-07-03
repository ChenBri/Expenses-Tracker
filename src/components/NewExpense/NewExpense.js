import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredTitle || !enteredPrice || !enteredDate) return;

    boxHanlder();

    const expenseValues = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
      id: Math.random(),
    };

    props.onSaveExpenseData(expenseValues);

    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  let [addBox, setAddBox] = useState(true);

  function boxHanlder() {
    setAddBox(!addBox);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  }

  return (
    <div className="new-expense">
      {addBox && (
        <div className="new-expense__actions">
          <button onClick={boxHanlder}>Add Expense</button>
        </div>
      )}
      {!addBox && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                type="number"
                value={enteredPrice}
                onChange={priceChangeHandler}
                min="0.01"
                step="0.01"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
                min="2019-01-01"
                max="2024-01-01"
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={boxHanlder}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};
export default NewExpense;
