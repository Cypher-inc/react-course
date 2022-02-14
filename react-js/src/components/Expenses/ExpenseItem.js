//componenet is just a js function
//components are just custom html elements
//alt shift f to format -- prettier
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function Expenseitem(props){
let title = props.title

const clickedFunc = () => {
  console.log('Clicked');
  title = 'Updated!';
}

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"><p>${props.amount}</p></div>
      </div>
      {/* <button onClick={() => console.log('Button Clicked!')}>Change Title</button> */}
      {/* ////Do not add parenthesis to function! simply attach the name// */}
      <button onClick={clickedFunc}>Button Clicked</button>  
    </Card>
  );
}

export default Expenseitem;
