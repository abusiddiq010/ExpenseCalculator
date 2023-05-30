import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "../UI/Card.css";
import Card from "../UI/Card";
// import { useState } from "react";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const clickHandle = () => {
  //   setTitle("updating!...");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
