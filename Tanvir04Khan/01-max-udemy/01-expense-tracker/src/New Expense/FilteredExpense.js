import "./FilteredExpense.css";

function FilteredExpense(props) {
  function yearSelected(event) {
    props.userSelectedYear(event.target.value);
  }

  return (
    <div className="filtered-expense">
      <h3>Filtered by year</h3>
      <select value={props.value} name="year" onChange={yearSelected}>
        <option>All</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </div>
  );
}

export default FilteredExpense;
