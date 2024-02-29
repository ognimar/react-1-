import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [enteredYear, setEnteredYear] = useState("2022");
  function YearHandler(enteredrok) {
    setEnteredYear(enteredrok);
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onSaveYear={YearHandler} />
      <ExpensesChart expense={filteredExpenses}/>
      <ExpensesList item={filteredExpenses} />
      
    </Card>
  );
}

export default Expense;
