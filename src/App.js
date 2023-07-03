import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let InitialExpenses = [
  {
    id: Math.random(),
    date: new Date(2023, 5, 12),
    title: "Title1..",
    price: "Price1..",
  },
  {
    id: Math.random(),
    date: new Date(2022, 5, 12),
    title: "Title2..",
    price: "Price2..",
  },
  {
    id: Math.random(),
    date: new Date(2023, 5, 12),
    title: "Title3..",
    price: "Price3..",
  },
];

const App = () => {
  let [expenses, changeExpenses] = useState(InitialExpenses);

  const onSaveExpenseData = (expense) => {
    changeExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });

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
