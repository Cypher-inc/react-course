import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense (props){
const saveExpenseDataHandler = (dataRecieved) => {
    const expenseData = {
    ...dataRecieved,
    id: Math.random().toString
    }
    // console.log(expenseData);
    props.onNewExpense(expenseData)
}

    return(
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    ) 
        
}

export default NewExpense;