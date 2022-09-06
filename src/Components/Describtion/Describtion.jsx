import React from "react";
import classes from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={classes.Main}>
      <p className={classes.name}>Jane Doe</p>
      <h1 className={classes.title}>
        <a href="#">Stranger Things: The sound of the Upside Down</a>
      </h1>
      <p className={classes.content}>
        The antsy bingers of Netflix will eagerly anticipate the digital release
        of the Survive soundtrack, out today.
      </p>
    </div>
  );
};

export default Description;
