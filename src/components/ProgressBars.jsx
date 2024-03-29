import React from "react";
import dateTransform from "../utils/dateTransform";
import "../styles/ProgressBars.css";

const widthTransform = (value, type) => {
  if (type === "days") {
    return `${(value * 100) / 30}%`;
  }
  if (type === "minutes") {
    return `${(value * 100) / 60}%`;
  }
  if (type === "months") {
    return `${(value * 100) / 12}%`;
  }
  if (type === "hours") {
    return `${(value * 100) / 24}%`;
  }
  if (type === "years") {
    return `${(value * 100) / 100}%`;
  }
  if (type === "seconds") {
    return `${(value * 100) / 60}%`;
  }
};

const ProgressBars = ({ data }) => {
  return (
    <div className="ProgressBars">
      {data &&
        data.map((item, index) => (
          <div key={`ProgressBar-${index}`} className="ProgressBars-item">
            <div className={`ProgressBars-percent percent-${item[0]}`} style={{ width: widthTransform(item[1], item[0]) }}>
              <p>
                <span>{item[1]}</span> {dateTransform[item[0]]}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProgressBars;
