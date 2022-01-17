import React from 'react';

import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js"
import ExpensesFilter from './ExpensesFilter.js';
import { useState } from 'react/cjs/react.development';


function Expenses(props) {

    const [selectedYear , setSelectedYear] = useState('2020');

  const filterChangeHandler = (changedYear) => {
    //console.log(chnagedYear);
    setSelectedYear(changedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;
