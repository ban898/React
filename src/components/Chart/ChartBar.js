import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

//-------------------------------------------------------------------------------------
//The Style attribute in react require an Object
//So if we want to assign a js variable we need 1 braces
//And for an Object we need a second pair of braces
//See example below :

// <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>;
