import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    // title = 'Updated'  It wont be set like this anymore , insteasd through
    // a dedicated function through useState
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      
      <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
