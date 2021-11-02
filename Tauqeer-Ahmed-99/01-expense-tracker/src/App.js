import Expenses from "./components/Expenses";

function App() {
  const expenseData = [
    { id: 1, title: "Car", amount: 600000, date: new Date(2021, 3, 10) },
    { id: 2, title: "Bike", amount: 70000, date: new Date(2020, 5, 13) },
    { id: 3, title: "Book", amount: 30, date: new Date(2019, 6, 6) },
    { id: 4, title: "MacBook", amount: 100000, date: new Date(2020, 8, 21) },
    { id: 5, title: "iPhone", amount: 90000, date: new Date(2020, 4, 20) },
    { id: 6, title: "Laptop", amount: 60000, date: new Date(2021, 4, 10) },
    { id: 7, title: "Watch", amount: 3000, date: new Date(2018, 3, 11) },
  ];

  return (
    <div className="App">
      <Expenses expensesData={expenseData} />
    </div>
  );
}

export default App;
