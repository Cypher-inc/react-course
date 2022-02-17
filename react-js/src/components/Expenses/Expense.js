import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";

function Expense(props){
var i = 0;
const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear => {
  // setFilteredYear(selectedYear);
  console.log(selectedYear);
  
};

return(
    <Card className='expenseItem1'>
      {/* <h2>Let's get started!</h2> */}
    {/* ///Calling function ExpenseItem/// */}
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {/* <ExpensesFilter onNewYear = {NewYear}></ExpensesFilter> */}
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

export default Expen