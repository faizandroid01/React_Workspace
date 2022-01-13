import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = () => {

  // const submitExpenseHandler = (submittedExpenseData) => {
  //   const expenseData = { ...submittedExpenseData , id : Math.random().toString() }; 
  // };

  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
