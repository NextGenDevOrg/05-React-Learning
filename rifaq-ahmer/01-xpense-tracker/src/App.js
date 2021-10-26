import "./index.css";
import Home from "./pages/home/index";
import Header from "./components/header/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddExpense from "./pages/add-expense/index";
import Footer from "./components/footer";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/add-expense" exact component={AddExpense} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
