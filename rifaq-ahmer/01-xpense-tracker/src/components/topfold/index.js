import React, { useState } from "react";
import "./topfold.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "./../../redux/action/expenses";

const TopFold = () => {
	const [query, setquery] = useState("");
	const dispatch = useDispatch();
	const handleQuery = (event) => {
		setquery(event.target.value);
		dispatch(searchExpense(event.target.value));
	};
	return (
		<div className="topfold">
			{window.location.pathname === "/" ? (
				<div className="home-topfold">
					<div className="searchbar">
						<i className="devicon-doctrine-plain"></i>
						<input
							type="text"
							placeholder="Search for Expenses"
							value={query}
							onChange={(event) => handleQuery(event)}
						/>
					</div>
					<Link to="/add-expense">
						<div className="add-button">
							<i className="fas fa-plus"></i>
							<label>Add</label>
						</div>
					</Link>
				</div>
			) : (
				<div className="add-topfold">
					<Link to="/">
						<div className="add-topfold-button">
							<i className="fas fa-backspace"></i>
							<label>Back</label>
						</div>
					</Link>
					<Link to="/">
						<div className="add-topfold-button">
							<i className="fas fa-window-close"></i>
							<label>Cancel</label>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default TopFold;
