import Expenses from "./components/Expenses";

// import "./App.css";

function App() {
  const expenses = [
    {
      id: 1,
      title: "A Story Book",
      amount: 40,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "Car Insurace",
      amount: 290,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: "New TV",
      amount: 799,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 400,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div className="App">
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
