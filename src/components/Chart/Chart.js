import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //Convert from key value array to just a value array
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //Get the biggest value
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
