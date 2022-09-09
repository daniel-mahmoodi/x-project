// interface MainProps {}
import React, { useState } from "react";
// import CardContext from "../store/card-context";
import classes from "./card.module.css";
import Date from "../Components/Date/Date";
import Data from "../Data/Data";
const Card1 = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  // const ctx = useContext(CardContext);
  const checkForType = props.type === 1 ? classes.Type1 : classes.Type2;
  //  const checkForCards =
  const onMouseOverHandler = () => {
    // ctx.hasMousOver();
    setMouseOver(true);
  };
  const onMouseOutHandler = () => {
    setMouseOver(false);
    // ctx.hasMousOut();
  };
  return (
    <div
      className={`${classes.Main} ${checkForType}`}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <Date type={props.type} />
      <Data type={props.type} onMouseOver={mouseOver}/>
    </div>
  );
};

export default Card1;
