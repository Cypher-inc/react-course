//componenet is just a js function
//components are just custom html elements
//alt shift f to format -- prettier
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function Expenseitem(props){
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"><p>${props.amount}</p></div>
      </div>
    </div>
  );
}

export default Expenseitem;
