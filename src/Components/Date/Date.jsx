// interface DateProps {}
import React from "react";
import Data from "../../Mock/MockData";
import classes from "./Date.module.css";
const Date = (props) => {
  
  const checkForType = props.type === 1 ? classes.Type1 : classes.Type2;
  const DataType = props.type === 1 ? Data[0] : Data[1];
  return (
    <div className={`${classes.Main} ${checkForType}`}>
      <div className={`${classes.Date} ${checkForType}`}>
        <div className={`${classes.Day} ${checkForType}`}>
          {DataType.date.day}
        </div>
        <div className={`${classes.Month} ${checkForType}`}>
          {DataType.date.month}
        </div>
        <div className={`${classes.Year} ${checkForType}`}>
          {DataType.date.year}
        </div>
      </div>
    </div>
  );
};

export default Date;
