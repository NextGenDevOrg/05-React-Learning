import ProgressBar from "./ProgressBar";

import "./Chart.css";

function Chart(props) {
  const datas = props.data.map((data) => {
    return {
      amount: data.amount,
      date: data.date,
    };
  });

  const months = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const data of datas) {
    const index = data.date.getMonth();
    months[index].value += data.amount;
  }

  const valuesArray = months.map((month) => month.value);
  const maxValue = Math.max(...valuesArray);

  console.log(maxValue);
  return (
    <div className="bars">
      {months.map((month, ind) => (
        <ProgressBar
          value={month.value}
          maxValue={maxValue}
          month={month.month}
          key={ind}
        />
      ))}
    </div>
  );
}

export default Chart;
