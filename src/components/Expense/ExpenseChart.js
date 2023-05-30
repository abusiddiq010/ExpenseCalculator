import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDatapoints = [
    { label: "Jan", Value: 0 },
    { label: "Feb", Value: 0 },
    { label: "Mar", Value: 0 },
    { label: "Apr", Value: 0 },
    { label: "May", Value: 0 },
    { label: "Jun", Value: 0 },
    { label: "Jul", Value: 0 },
    { label: "Aug", Value: 0 },
    { label: "Sep", Value: 0 },
    { label: "Oct", Value: 0 },
    { label: "Nov", Value: 0 },
    { label: "Dec", Value: 0 }
  ];

  // doubtful
  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    chartDatapoints[expenseMonth].Value += expense.month;
  }

  return <Chart datapoints={chartDatapoints} />;
};

export default ExpenseChart;
