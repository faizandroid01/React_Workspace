import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date (2022, 1 , 8);
  // const expenseTitle = 'A new Laptop' ;
  // const expenseAmount = 247.69;

  //extracting respective values from a date object

  
  return (
    <div className="expense-item">
      
      <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
