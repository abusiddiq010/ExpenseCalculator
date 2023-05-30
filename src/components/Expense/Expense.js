import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilterYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expense;
