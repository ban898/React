import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

//-------------------------------------------------------------------------------------
//in this case we want to update our expenses list based on current list BUT it might update
//duo to a user adding a new expense which means if we use state we are religing on the previous state
//thats why we need to use the setter function which we got from the useState BUT ALSO Notice
//another function which get access to the prev state and inside of this function we do what we wanted to do
//See example below :

// const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
//   const addExpenseHandler = (expense) => {
//     setExpenses((prevExpenses) => {
//       return [expense, ...expenses];
//     });
//   };

//SetExpense is the setter function we got from useState
//as you can see inside of the setter we create a callback function
//and inside of its callback we do what we wanted
