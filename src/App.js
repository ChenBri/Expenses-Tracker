import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let InitialExpenses = [
  {
    id: "e1",
    date: new Date(2021, 5, 12),
    title: "Title1..",
    price: "Price1..",
  },
  {
    id: "e2",
    date: new Date(2022, 5, 12),
    title: "Title2..",
    price: "Price2..",
  },
  {
    id: "e3",
    date: new Date(2023, 5, 12),
    title: "Title3..",
    price: "Price3..",
  },
];

const App = () => {
  let [expenses, changeExpenses] = useState(InitialExpenses);

  const onSaveExpenseData = (expense) => {
    changeExpenses([expense, ...expenses]);

    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={onSaveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
