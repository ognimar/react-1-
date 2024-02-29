import "./NewExpense.css";
import ExpenseForms from "./NewExpenseForm.js";
import { useState } from "react";

function NewExpense(props) {
  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  const [newMenu, setMenu] = useState(false);

  function setingMenu() {
    setMenu(true);
  }

  function falseMenu() {
    setMenu(false);
  }
  if (newMenu === true) {
    return (
      <div className="new-expense">
        <ExpenseForms
          onSaveExpenseData={onSaveExpenseDataHandler}
          zmieniaj={falseMenu}
        />
      </div>
    );
  } else if (!newMenu === true) {
    return (
      <div className="new-expense">
        <button onClick={setingMenu}>Add new expense</button>
      </div>
    );
  }
}

export default NewExpense;
