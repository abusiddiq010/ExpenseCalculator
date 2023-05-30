import Expense from "./components/Expense/Expense";
import "./styles.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DummyExpense = [];

export default function App() {
  const [expenses, setExpenses] = useState(DummyExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("checking..");
  };

  return (
    <div>
      <h1>let's get started</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}
