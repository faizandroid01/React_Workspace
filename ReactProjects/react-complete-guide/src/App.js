import { useState, useEffect } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
    const [expenses , setExpenses] = useState(DUMMY_EXPENSES);
    useEffect(() => { console.log(expenses); } , [expenses]  );

  const addExpenseHandler = (expense) => {
    //console.log(expense);
    //console.log(expense.title !== '');
    if(expense.title !== ''){
      setExpenses([expense,...expenses]);
    }
       //Not preferred method

    // setExpenses( (previousExpenses) => {
    //   return [expense, ...previousExpenses];
    // });
    //console.log(expenses);
  };

  return (
    <div>
      <h2>Expense List</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
