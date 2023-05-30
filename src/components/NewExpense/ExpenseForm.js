import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  const titelechangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountchangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const datechangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: +enteredamount,
      date: new Date(entereddate)
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titelechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredamount}
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={entereddate} onChange={datechangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onChange}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
