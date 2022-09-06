// interface DateProps {}
import React from "react";
import classes from "./Date.module.css";
const Date = () => {
  return (
    <React.Fragment>
      <div className={classes.Main}>
        <div className={classes.Date}>
          <div className={classes.Day}>12</div>
          <div className={classes.Month}>Aug</div>
          <div className={classes.Year}>2016</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Date;
