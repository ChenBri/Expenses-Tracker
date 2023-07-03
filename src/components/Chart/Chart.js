import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (let expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    console.log(expense);
    chartDataPoints[expenseMonth].value += expense.price;
  }

  let dataPointValue = chartDataPoints.map((i) => i.value);
  let dataPointMax = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {chartDataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={dataPointMax}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
