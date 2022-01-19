import React from "react";

import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList.js";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (changedYear) => {
    //console.log(chnagedYear);
    setSelectedYear(changedYear);
  };

  const filteredExpenses = props.expenses.filter((val) => {
    return val.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChange={filterChangeHandler}
        />

        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
