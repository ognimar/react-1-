import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint .value);
    const totalMaxiumum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxiumum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
