import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

//-------------------------------------------------------------------------------------
//this function we pass into the child which in this case is ExpenseForm
//we pass it as a prop in the line
//<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//Hence to that we can get access to eneteredExpenseData because this data 'lives' there
//then we create a new object with that data and adding an id field to that object
//Inside of newExpense this is what we do :

//   const saveExpenseDataHandler = (enteredExpenseData) => {
//     const expenseData = {
//       ...enteredExpenseData,
//       id: Math.random().toString(),
//     };
//     console.log(expenseData);
//   };

//   return (
//     <div className="new-expense">
//       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//     </div>
//   );
// };

//Then inside of the child component which in this case is ExpenseForm
//We do this :

//props.onSaveExpenseData(expenseData);

//we get access to the props [because we sent props] and we call the function by the name [not the value we passed] [onSaveExpenseData]
//inside of the child and we sending the values we want to send "up"
