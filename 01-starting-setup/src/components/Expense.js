import ExpenseItem from "./ExpenseItem";
import './Expense.css'

function Expense(props){

    
      var i = 0;
return(
    <div className='expenseItem1'>
      <h2>Let's get started!</h2>

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
    </div>

)
}

export default Expense;