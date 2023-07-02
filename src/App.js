import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let expenses = [
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

  const onSaveExpenseData = (enteredExpenseData) => {
    let expensesData = {
      ...enteredExpenseData,
      id: "5",
    };

    expenses.push(expensesData);

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
