import React, { useContext } from "react";
import CardContext from "../store/card-context";

import Contents from "../Components/Contents/Contents";
import ReactionsBar from "../Components/ReactionsBar/ReactionsBar";
import classes from "./Data.module.css";
const Data = () => {
  const ctx = useContext(CardContext);

  return (
    <div className={classes.Main}>
      {ctx.toggleHidden && <ReactionsBar />}
      <Contents />
    </div>
  );
};

export default Data;
