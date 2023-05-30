import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEdisting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const AddExpenseHandler = () => {
    setisEdisting(true);
  };

  const CancelEditingHandler = () => {
    setisEdisting(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={AddExpenseHandler}> Add New Expnse</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onChange={CancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
