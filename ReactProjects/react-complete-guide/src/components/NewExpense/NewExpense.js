import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (prop) => {

  const submitExpenseHandler = (submittedExpenseData) => {
    const expenseData = { ...submittedExpenseData , id : Math.random().toString() }; 
    //console.log(expenseData);
    prop.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={submitExpenseHandler} />
    </div>
  );
};

export default NewExpense;
