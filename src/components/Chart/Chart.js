import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // doubtful

  const datapointValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalmaximum = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalmaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
