'use strict';

var secItem = document.querySelector('.expenseItem1');

var expenses = [
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

var title, date , amount, month, day, year


for(var i = 0; i<expenses.length; i++){
  console.log(i);
    title=expenses[i].title
    amount=expenses[i].amount
    date=expenses[i].date

    month = expenses[i].date.toLocaleString("en-US", { month: "long" });
    day = expenses[i].date.toLocaleString("en-US", { day: "2-digit" });
    year = expenses[i].date.getFullYear();

  secItem.innerHTML += `
        <div class="expense-item">
            <div class='expense-date'>
                <div class='expense-date__month'>${day}</div>
                <div class='expense-date__month'>${month}</div>
                <div class='expense-date__year'>${year}</div>
              </div>
            <div class="expense-item__description">
            <h2>${title}</h2>
            <div class="expense-item__price">$${amount}</div>
          </div>
        </div>
  ` 
}