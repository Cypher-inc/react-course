import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";

function Expense(props){

    
      var i = 0;
return(
    <Card className='expenseItem1'>
      <h2>Let's get started!</h2>
    {/* ///Calling function ExpenseItem/// */}
    <ExpenseItem  
    title={props.item[i].title}
    amount={props.item[i].amount}
    date={props.item[i++].date}
    ></ExpenseItem>
    <ExpenseItem
    title={props.item[i].title}
    amount={props.item[i].amount}
    date={props.item[i++].date}
    ></ExpenseItem>
    <ExpenseItem
    title={props.item[i].title}
    amount={props.item[i].amount}
    date={props.item[i++].date}
    ></ExpenseItem>
    <ExpenseItem
    title={props.item[i].title}
    amount={props.item[i].amount}
    date={props.item[i++].date}
    ></ExpenseItem>
    </Card>

)
}

export default Expense;